"use client";
import { FaBookOpen } from "react-icons/fa";

const Education = () => {
  const educationData = [
    { year: "2017-2021", degree: "BSS (Hons.) in Economics" },
    { year: "2014-2016", degree: "HSC In Science" },
    { year: "2013-2014", degree: "SSC In Science" },
  ];

  const skillData = [
     { name: "HTML", value: "91%" },
    { name: "CSS", value: "83%" },
    { name: "JavaScript", value: "82%" },
    { name: "React", value: "75%" },
    { name: "Next.js", value: "80%" },
   
   
  ];

  return (
    <section className="bg-[#0a0a1a] py-20 px-5 font-roboto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Education (Span 5) */}
          <div className="lg:col-span-5 bg-[#161625] p-10 rounded-[2rem] border border-gray-800 shadow-2xl">
            <h2 className="text-[#00FF00] text-4xl font-black uppercase mb-12 text-center tracking-tighter">
              Education
            </h2>
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <FaBookOpen className="text-[#00FF00] text-4xl mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-400 text-sm font-bold mb-1">{item.year}</p>
                  <h4 className="text-white font-black text-xl tracking-tight leading-tight uppercase">
                    {item.degree}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Skills (Span 7) */}
          <div className="lg:col-span-7 pt-2">
            <h2 className="text-[#00FF00] text-4xl font-black uppercase mb-10 tracking-tighter">
              Skills
            </h2>
            <div className="space-y-6">
              {skillData.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-end px-1">
                    <span className="text-white font-black text-[13px] uppercase tracking-wider">
                      {skill.name}
                    </span>
                    <span className="text-white font-black text-sm">{skill.value}</span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="w-full bg-[#111121] h-10 rounded-md overflow-hidden p-1 border border-gray-800/50">
                    <div 
                      className="bg-[#00FF00] h-full rounded-sm transition-all duration-1000 ease-in-out shadow-[0_0_15px_rgba(0,255,0,0.3)]" 
                      style={{ width: skill.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;