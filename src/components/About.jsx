"use client";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="bg-[#0a0a1a] text-white py-20 px-5 font-roboto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Profile Image with Background Element */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* Background Decorative Shape (Image 12 এর মতো) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-red-600 rounded-[3rem] rotate-6 opacity-80"></div>
            
            {/* Actual Image */}
            <div className="relative z-10 w-full h-full overflow-hidden rounded-[2.5rem] border-4 border-[#161625]">
              <Image 
                src="/A_K_Biplob.jpg" // public ফোল্ডারে আপনার ছবিটি রাখুন
                alt="A K Biplob"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[#FFA600] text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            About Me
          </h2>
          
          <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
            <p>
              My Name is <span className="text-white font-bold">A K Biplob</span>. I am a 
              <span className="text-[#FFA600] font-bold"> WordPress Web Developer </span> 
              With 5+ Years of Experience in Developing and Maintaining Websites.
            </p>
            <p>
              I Specialize in Creating Custom Websites Using HTML, CSS, JavaScript And Other Web Technologies. 
              I am Also Expert In Graphic Design & Video Editing. 
            </p>
            <p>
              I am Passionate About Creating New Things and helping businesses establish a strong online presence.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <Link 
              href="https://akbiplob.com/wp-content/uploads/2025/11/A-K-Biplob-CV.pdf" target="_blank" 
              className="px-8 py-3 bg-[#FFA600] text-black font-black uppercase rounded-lg hover:bg-green-600 "
            >
              View My CV
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-3 border-2 border-[#FFA600] text-[#FFA600] font-black uppercase rounded-lg hover:bg-[#FFA600] hover:text-black transition-all"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;