import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "i.imgur.com",
      "lh3.googleusercontent.com", // for Google images
    ],
  },
};

export default nextConfig;