"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      category: "WordPress Ecommerce Website",
      title: "WordPress Theme Development",
      image: "/p1.jpg", // public ফোল্ডারে এই নামে ছবি রাখবেন
      link: "#",
      btnText: "See Project"
    },
    {
      category: "Graphic Design",
      title: "Photoshop / Canva Editing",
      image: "/p2.jpg", 
      link: "#",
      btnText: "Say Hello"
    },
    {
      category: "Design By Code",
      title: "HTML CSS Design",
      image: "/p3.jpg",
      link: "#",
      btnText: "See Project"
    }
  ];

  return (
    <section id="portfolio" className="bg-[#0a0a1a] text-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">PORTFOLIO</h2>
          <p className="text-[#FFA600] font-bold text-lg">Cases</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#161625] p-6 rounded-[2rem] border border-gray-800 hover:border-green-500 transition-all group shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full mb-6 overflow-hidden rounded-2xl border border-gray-700">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                 
                />
              </div>

              {/* Text Content */}
              <div className="text-center space-y-3">
                <p className="text-[#FFA600] text-sm uppercase">
                  {project.category}
                </p>
                <h3 className="text-xl font-black tracking-tight ">
                  {project.title}
                </h3>
                
                <div className="pt-4 flex justify-center">
                  <a 
                    href={project.link} 
                    className="flex items-center gap-2 font-bold text-sm bg-transparent border border-gray-700 px-6 py-2 rounded-full hover:bg-green-600 hover:border-green-600 transition-all"
                  >
                    {project.btnText} <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;