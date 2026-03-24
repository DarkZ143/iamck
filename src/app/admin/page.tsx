"use client";

import React, { useState, useEffect } from "react";
import Waterimage from "../../../public/water.jpg"
import {
    addDoc,
    collection,
    serverTimestamp,
    onSnapshot,
    deleteDoc, doc, updateDoc,
} from "firebase/firestore";
import {
    onAuthStateChanged,
    signOut,
    User,
} from "firebase/auth";

import { db, auth } from "../../../firebaseConfig";
import { useRouter } from "next/navigation";

const AdminPage = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loadingAuth, setLoadingAuth] = useState(true);
    const [bubbles, setBubbles] = useState<any[]>([]); // 🔥 ADD
    const router = useRouter();

    const [form, setForm] = useState({
        image: "",
        title: "",
        description: "",
        tech: "",
    });
    const handleDelete = async (id: string) => {
        await deleteDoc(doc(db, "designs", id));
    };

    const handleEdit = (design: any) => {
        setForm({
            image: design.image,
            title: design.title,
            description: design.description,
            tech: design.tech,
        });
        setEditId(design.id);
    };

    const handleUpdate = async () => {
        if (!editId) return;

        await updateDoc(doc(db, "designs", editId), {
            ...form,
        });

        setEditId(null);
    };

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [activeTab, setActiveTab] = useState("upload");
    const [designs, setDesigns] = useState<any[]>([]);
    const [editId, setEditId] = useState<string | null>(null);

    const ADMIN_EMAILS = [
        "chandrakiranck381@gmail.com",
        "rahulbhardwajthestar58@gmail.com",
    ];

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "designs"), (snap) => {
            const data = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setDesigns(data);
        });

        return () => unsubscribe();
    }, []);

    // 🔐 AUTH CHECK
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                router.push("/admin/login");
            } else if (!ADMIN_EMAILS.includes(currentUser.email || "")) {
                alert("Access Denied ❌");
                router.push("/");
            } else {
                setUser(currentUser);
            }
            setLoadingAuth(false);
        });

        return () => unsubscribe();
    }, [router]);

    // 🔥 BUBBLE GENERATION (SAFE)
    useEffect(() => {
        const generated = [...Array(25)].map(() => ({
            size: Math.random() * 80 + 20,
            left: Math.random() * 100,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
        }));

        setBubbles(generated);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!form.image || !form.title) {
            alert("Image URL & Title required");
            return;
        }

        try {
            setLoading(true);

            await addDoc(collection(db, "designs"), {
                image: form.image,
                title: form.title,
                description: form.description,
                tech: form.tech,
                createdAt: serverTimestamp(),
            });

            setSuccess("✅ Design Uploaded!");

            setForm({
                image: "",
                title: "",
                description: "",
                tech: "",
            });
        } catch (error) {
            console.error(error);
            alert("Upload failed");
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        router.push("/admin/login");
    };

    if (loadingAuth) {
        return (
            <div className="h-screen flex items-center justify-center">
                <p>Checking authentication...</p>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-[#0f172a] text-white">

            {/* 🔥 SIDEBAR */}
            <div className="w-64 bg-blue-500/10 backdrop-blur border-r border-white/10 p-6">
                <h2 className="text-xl font-bold mb-6">Admin</h2>

                <button
                    onClick={() => setActiveTab("upload")}
                    className="block w-full text-left mb-3 hover:text-blue-400"
                >
                    ➕ Upload Design
                </button>

                <button
                    onClick={() => setActiveTab("manage")}
                    className="block w-full text-left mb-3 hover:text-blue-400"
                >
                    📂 Manage Designs
                </button>

                <button
                    onClick={handleLogout}
                    className="mt-10 text-red-400"
                >
                    🚪 Logout
                </button>
            </div>

            {/* 🔥 MAIN PANEL */}
            <div
                className="flex-1 p-10 bg-cover bg-center bg-no-repeat justify-center items-center flex"
                style={{
                    backgroundImage:
                        "url('/water.jpg')",
                }}
            >

                {/* UPLOAD TAB */}
                {activeTab === "upload" && (
                    <div className="max-w-md bg-blue-500/20 p-6 rounded-xl backdrop-blur">
                        <h2 className="text-xl mb-4">
                            {editId ? "Edit Design" : "Upload Design"}
                        </h2>

                        <input
                            name="image"
                            placeholder="Image URL"
                            value={form.image}
                            onChange={handleChange}
                            className="w-full mb-3 p-3 rounded bg-white/20"
                        />

                        <input
                            name="title"
                            placeholder="Title"
                            value={form.title}
                            onChange={handleChange}
                            className="w-full mb-3 p-3 rounded bg-white/20"
                        />

                        <input
                            name="description"
                            placeholder="Description"
                            value={form.description}
                            onChange={handleChange}
                            className="w-full mb-3 p-3 rounded bg-white/20"
                        />

                        <input
                            name="tech"
                            placeholder="Tech"
                            value={form.tech}
                            onChange={handleChange}
                            className="w-full mb-4 p-3 rounded bg-white/20"
                        />

                        <button
                            onClick={editId ? handleUpdate : handleSubmit}
                            className="w-full bg-blue-500 py-2 rounded cursor-pointer hover:bg-blue-600 transition"
                        >
                            {editId ? "Update" : "Upload"}
                        </button>
                    </div>
                )}

                {/* MANAGE TAB */}
                {activeTab === "manage" && (
                    <div className="grid grid-cols-3 gap-6">
                        {designs.map((d) => (
                            <div key={d.id} className="bg-white/10 p-4 rounded-xl">
                                <img src={d.image} className="rounded mb-2" />
                                <h3>{d.title}</h3>

                                <div className="flex gap-2 mt-2">
                                    <button
                                        onClick={() => handleEdit(d)}
                                        className="bg-yellow-500 px-2 py-1 rounded"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleDelete(d.id)}
                                        className="bg-red-500 px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default AdminPage;