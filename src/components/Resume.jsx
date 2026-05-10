"use client";
import { FaLaptopCode } from "react-icons/fa";
import Link from "next/link";

const Resume = () => {
  const resumeData = [
    {
      year: "2021- Present",
      platform: "www.fiverr.com",
      profileLink: "https://www.fiverr.com/akbiplobx",
      description: "I am A K Biplob, I am a pixel-perfect web developer. I am experienced and an expert in the web development section and working since 2021. Full and fresh hand code is my power. Client satisfaction is my first priority. Work with me and be happy with the result. Here Is My Fiverr Profile."
    },
    {
      year: "2023- Present",
      platform: "www.upwork.com",
      profileLink: "https://www.upwork.com/freelancers/~akbiplobx",
      description: "I am working on Upwork as a WordPress Theme Designer. My design is simple & fresh. My coding is W3C validated, fresh, SEO optimized, and also hand-coded. I work flexibly with clients to fulfill their design. Work with me and create a website that you are gonna be proud of. Use my work in your Business, Portfolio, Agency, Photography, eCommerce & much more. Here Is My Upwork Profile."
    },
    {
      year: "2024- Present",
      platform: "www.linkedin.com",
      profileLink: "https://linkedin.com/in/akbiplobx",
      description: "Hi, I'm A K Biplob, originally from Rangpur, Bangladesh, and now living in Riyadh, KSA. I'm a Front End Web Developer who loves creating error-free websites with WordPress. I enjoy talking about new web ideas. Here Is My Linkedin Profile."
    }
  ];

  return (
    <section id="resume" className="bg-[#0a0a1a] py-20 px-5 font-roboto">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#FFA600] text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Resume
          </h2>
          <div className="h-1.5 w-24 bg-[#FFA600] mx-auto rounded-full"></div>
        </div>

        {/* Experience List */}
        <div className="space-y-10">
          {resumeData.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#161625] p-8 md:p-12 rounded-[2.5rem] border border-gray-800 flex flex-col md:flex-row gap-8 items-start hover:border-green-500 transition-all duration-300 group shadow-2xl"
            >
              {/* Icon Container */}
              <div className="bg-[#0a0a1a] p-5 rounded-2xl border border-gray-800 group-hover:border-green-500 transition-colors">
                <FaLaptopCode className="text-[#FFA600] text-5xl md:text-6xl" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <span className="text-[#FFA600] font-bold text-sm tracking-widest uppercase">
                  {item.year}
                </span>
                <h3 className="text-white text-2xl font-black mt-1 mb-3 tracking-tight">
                  <Link href={item.profileLink} target="_blank" className="hover:text-[#FFA600] transition-colors">
                    {item.platform}
                  </Link>
                </h3>
                <p className="text-gray-300 text-[15px] leading-relaxed font-medium">
                  {item.description.split("Here Is My").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i !== arr.length - 1 && (
                        <>
                          {"Here Is My "}
                          <Link href={item.profileLink} target="_blank" className="text-[#FFA600] hover:underline font-bold">
                             {item.platform.split('.')[1]}
                          </Link>
                        </>
                      )}
                    </span>
                  ))}
                  {" Profile."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;