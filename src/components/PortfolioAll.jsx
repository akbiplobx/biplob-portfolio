"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const PortfolioAll = () => {
  const projects = [
    { id: "01", title: "Portfolio Web Home Page", tech: "Made by WordPress", img: "/p00.jpg" },
    { id: "02", title: "Counter & Service Section", tech: "Made by WordPress", img: "/p22.jpg" },
    { id: "03", title: "Project Section", tech: "Made by WordPress", img: "/p33.jpg" },
    { id: "04", title: "About Section", tech: "Made by WordPress", img: "/p4.jpg" },
    { id: "05", title: "Google Map & Contact Form", tech: "Made by WordPress", img: "/p5.jpg" },
    { id: "06", title: "Ecommerce Home Page", tech: "Ecommerce Web By WordPress", img: "/p6.jpg" },
    { id: "07", title: "Website Design", tech: "Made By HTML, CSS", img: "/p7.jpg" },
    { id: "08", title: "Animation Website Design", tech: "Made By HTML, CSS", img: "/p8.jpg" },
    { id: "09", title: "Website Design", tech: "Made By HTML, CSS", img: "/p9.jpg" },
    { id: "10", title: "Accordian Section", tech: "Made By HTML, CSS", img: "/p10.jpg" },
    { id: "11", title: "Same To FB Login Page", tech: "Made By HTML, CSS", img: "/p11.jpg" },
    { id: "12", title: "Master Card Design", tech: "Made By HTML, CSS & JS", img: "/p12.jpg" },
    { id: "13", title: "Calculator App", tech: "Made By HTML, CSS", img: "/p13.jpg" },
    { id: "14", title: "Weather App By A K Biplob", tech: "Made By HTML, CSS & JS", img: "/p14.jpg" },
    { id: "15", title: "Clock Design", tech: "Made By HTML, CSS & JS", img: "/p15.jpg" },
  ];

  return (
    <section id="portfolio" className="bg-[#0a0a1a] py-20 px-5 font-roboto">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-[#FFA600] text-5xl font-black uppercase tracking-tighter mb-4">Portfolio</h2>
          <div className="flex items-center justify-center gap-3">
            <p className="text-white text-lg font-bold">
              A K Biplob – Explore My Live Websites Built with HTML, CSS & JavaScript
            </p>
            <Link href="https://github.com/akbiplobx" target="_blank" className="text-[#FFA600] text-3xl">
              <FaGithub />
            </Link>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-800 group-hover:border-green-500 transition-all duration-300">
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Text Info */}
              <div className="mt-4">
                <h4 className="text-[#FFA600] font-bold text-lg leading-tight">
                  {project.id}. {project.title}
                </h4>
                <p className="text-green-400 font-medium text-md mt-1">
                  {project.tech}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="flex justify-between items-center border-t border-gray-900 pt-8">
          <Link href="/about" className="text-[#FFA600] font-bold hover:underline">
            For More Info Check About Section
          </Link>
          <Link href="https://github.com/akbiplobx" target="_blank" className="text-[#FFA600] text-2xl">
            <FaGithub />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioAll;