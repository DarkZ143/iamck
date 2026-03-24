"use client";

import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebaseConfig";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bubbles, setBubbles] = useState<any[]>([]); // ✅ INSIDE

    const router = useRouter();

    useEffect(() => {
        const generated = [...Array(25)].map(() => ({
            size: Math.random() * 80 + 20,
            left: Math.random() * 100,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
        }));

        setBubbles(generated);
    }, []);

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/admin");
        } catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">

            {/* BUBBLES */}
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

            {/* LOGIN CARD */}
            <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-2xl shadow-2xl w-87.5 text-white">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Admin Login 🔐
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-3 p-3 rounded-lg bg-white/20 text-white"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-5 p-3 rounded-lg bg-white/20 text-white"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-linear-to-r from-blue-500 to-purple-500 py-3 rounded-lg"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default AdminLogin;