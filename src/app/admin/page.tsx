"use client";

import React, { useState, useEffect } from "react";
import {
    addDoc,
    collection,
    serverTimestamp,
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

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const ADMIN_EMAILS = [
        "chandrakiranck381@gmail.com",
        "rahulbhardwajthestar58@gmail.com",
    ];

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
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a] p-6">

            {/* 🔥 BUBBLES */}
            <div className="absolute inset-0 overflow-hidden">
                {bubbles.map((b, i) => (
                    <span
                        key={i}
                        className="absolute block bg-blue-400/20 rounded-full animate-bubble"
                        style={{
                            width: `${b.size}px`,
                            height: `${b.size}px`,
                            left: `${b.left}%`,
                            animationDuration: `${b.duration}s`,
                            animationDelay: `${b.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* 🔓 Logout */}
            <button
                onClick={handleLogout}
                className="absolute top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-lg z-10"
            >
                Logout
            </button>

            {/* 🔥 GLASS PANEL */}
            <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">

                <h1 className="text-2xl font-bold mb-6 text-center">
                    Admin Panel 🚀
                </h1>

                <input
                    type="text"
                    name="image"
                    placeholder="Paste Image URL"
                    value={form.image}
                    onChange={handleChange}
                    className="w-full mb-3 p-3 rounded-lg bg-white/20 text-white placeholder-white/70"
                />

                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full mb-3 p-3 rounded-lg bg-white/20 text-white placeholder-white/70"
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                    className="w-full mb-3 p-3 rounded-lg bg-white/20 text-white placeholder-white/70"
                />

                <input
                    type="text"
                    name="tech"
                    placeholder="Tech"
                    value={form.tech}
                    onChange={handleChange}
                    className="w-full mb-5 p-3 rounded-lg bg-white/20 text-white placeholder-white/70"
                />

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-linear-to-r from-blue-500 to-purple-500 py-3 rounded-lg font-semibold hover:scale-105 transition-all"
                >
                    {loading ? "Uploading..." : "Upload Design"}
                </button>

                {success && (
                    <p className="text-green-400 text-center mt-4">{success}</p>
                )}
            </div>
        </div>
    );
};

export default AdminPage;