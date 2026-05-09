"use client";
import { FaUserAlt, FaClock, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const contactDetails = [
    {
      title: "A K Biplob",
      subtitle: "Web Developer | WordPress Expert",
      icon: <FaUserAlt className="text-[#00FF00] text-5xl" />,
    },
    {
      title: "Freelance",
      subtitle: "Available Right Now",
      icon: <FaClock className="text-[#00FF00] text-5xl" />,
    },
    {
      title: "Email",
      subtitle: "akbiplob24@gmail.com",
      icon: <FaEnvelope className="text-[#00FF00] text-5xl" />,
      isEmail: true
    }
  ];

  return (
    <section id="contact" className="bg-[#0a0a1a] text-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">CONTACT</h2>
          <p className="text-[#00FF00] font-bold text-lg md:text-xl flex items-center justify-center gap-2">
            Are You Looking For Your Business Online Presence? A K Biplob here. 😊
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#161625] p-12 rounded-[2rem] border border-gray-800 hover:border-green-500 transition-all group flex flex-col items-center shadow-2xl"
            >
              <div className="mb-8">{item.icon}</div>
              <h3 className="text-2xl font-black mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className={`text-white font-bold text-[16px] text-center ${item.isEmail ? 'lowercase' : ''}`}>
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;