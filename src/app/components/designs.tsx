import React from 'react'
import Image from 'next/image'


const Designs = [
    {
        image: "/Designs/ParadiseCollections.png",
        title: "Paradise Collections Poster",
        description: "Vibrant poster design for Paradise Collections showcasing tropical vibes.",
        tech: "Figma | Photoshop",
    },
    {
        image: "/Designs/Gucci.png",
        title: "Gucci Man Collections Poster",
        description: "Sleek Gucci poster design highlighting modern fashion and elegance.",
        tech: "Figma | Photoshop",
    },
    {
        image: "/Designs/Apple.png",
        title: "Apple iPhone Collections Poster",
        description: "Sleek Apple iPhone poster design highlighting modern tech and elegance.",
        tech: "Figma | Photoshop",
    },
    {
        image: "/Designs/GreenTeaCream.png",
        title: "Green Tea Cream Poster",
        description: "Eco-friendly cream product design with green theme and discount offer highlight.",
        tech: "Figma | Photoshop",
    },
    {
        image: "/Designs/AudixFeel.png",
        title: "AudixFeel Headphones Poster",
        description: "Sleek headphones poster design with modern tech vibe and discount highlight.",
        tech: "Figma | Photoshop",
    },
    {
        image: "/Designs/Fogg.png",
        title: "Fogg Perfume Poster",
        description: "Elegant perfume product poster design with luxurious theme and discount highlight.",
        tech: "Figma | Photoshop",
    },
    {
        image: "/Designs/Fender.png",
        title: "Fender FC-2000 Acoustic Guitar",
        description: "Premium acoustic guitar design poster showcasing Fender branding and vibrant music vibes.",
        tech: "Figma | Photoshop",
    },

    {
        image: "/Designs/StreetBoss.png",
        title: "Street Boss Shoes Poster",
        description: "Trendy Nike Street Boss shoes with bold CTA and discount design.",
        tech: "Figma | Photoshop",
    },
    {
        image: "/Designs/NatureOil.jpg",
        title: "Nature Oil Poster",
        description: "Natural oil product poster design with earthy tones and discount highlight.",
        tech: "Figma | Photoshop",
    },
    {
        image: "/Designs/Zgc.png",
        title: "Zebronics Gaming Collections Poster",
        description: "Dynamic gaming gear poster design for Zebronics with vibrant colors and discount highlight.",
        tech: "Figma | Photoshop",
    }

]


const ProductDesign = () => {
    return (
        <div id="designs" className="w-full">

            <main className="p-20">
                <div className="flex justify-center items-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent leading-relaxed">
                        My Visual Designs
                    </h1>
                </div>


                {/* Grid: 2 cards per row on medium+ screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Designs.map((design, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg shadow-blue-400 overflow-hidden hover:shadow-2xl hover:shadow-blue-600 transition duration-300 cursor-pointer"
                        >
                            {/* Image with fixed 16:9 ratio */}
                            <div className="relative w-full aspect-video">
                                <Image
                                    src={design.image}
                                    alt={design.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h2 className="text-xl font-semibold">{design.title}</h2>
                                <p className="text-gray-600 mt-2">{design.description}</p>
                                <p className="text-sm text-gray-500 mt-2">{design.tech}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

        </div>
    )
}


export default ProductDesign
