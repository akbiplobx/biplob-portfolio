"use client";
import { FaElementor, FaCode, FaWordpress, FaArrowRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "DESIGN SKILLS",
      description: "Proficient in Elementor design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability.",
      icon: <FaElementor className="text-[#FFA600] text-4xl" />,
      link: "#"
    },
    {
      title: "FRONT-END DEVELOPER",
      description: "I am a web developer with 5+ years of experience in developing and maintaining websites. I specialize in creating custom websites using HTML, CSS, and JS.",
      icon: <FaCode className="text-[#FFA600] text-4xl" />,
      link: "#"
    },
    {
      title: "WORDPRESS DEVELOPER",
      description: "Passionate WordPress Developer with a track record of creating over 100+ websites. I find joy in crafting user-friendly, customizable sites.",
      icon: <FaWordpress className="text-[#FFA600] text-4xl" />,
      link: "#"
    }
  ];

  return (
    <section id="services" className="bg-[#0a0a1a] text-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">WHAT I DO</h2>
          <p className="text-[#FFA600] font-bold text-lg">My Services</p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#161625] p-10 rounded-[2rem] border border-gray-800 hover:border-green-500 transition-all group shadow-xl"
            >
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-black text-center mb-4 tracking-tight uppercase">
                {service.title}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed text-[15px] mb-8">
                {service.description}
              </p>
              
              <div className="flex justify-start">
                <a 
                  href={service.link} 
                  className="flex items-center gap-2 font-bold text-sm hover:text-[#FFA600] transition-colors"
                >
                  Say Hello <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;