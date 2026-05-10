"use client";
import Image from "next/image";

const Testimonials = () => {
  const reviews = [
    {
      name: "Maria Dianne Garcia",
      role: "US Recruiter",
      review: "Great experience, highly recommend. Worked through all my questions with me and was very timely in his responsiveness.",
      image: "/client1.jpg" // public ফোল্ডারে এই নামে ছবি রাখবেন
    },
    {
      name: "Devid",
      role: "Manager",
      review: "A K Biplob is a very nice guy to work with. Thanks a lot for helping and I will do more business with you 😊",
      image: "/client2.jpg"
    },
    {
      name: "Jesica Cox",
      role: "Designer",
      review: "Always great to work with him. He is extremely responsive and always returns his work in a timely manner, most of the time it is completed early!",
      image: "/client3.jpg"
    }
  ];

  return (
    <section id="testimonials" className="bg-[#0a0a1a] text-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">TESTIMONIALS</h2>
          <p className="text-[#FFA600] font-bold text-lg">What my Clients are saying?</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#161625] p-5 rounded-[2.5rem] border border-gray-800 flex flex-col items-center text-center shadow-xl hover:border-green-500 transition-all group"
            >
              {/* Review Text */}
              <p className="text-gray-300 italic leading-relaxed mb-5 text-[15px]">
                "{item.review}"
              </p>

              {/* Client Info */}
              <div className="">
                <div className="relative w-20 h-20 mx-auto  overflow-hidden rounded-full border-2 border-green-500">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-[#FFA600] font-bold text-lg tracking-tight">
                  {item.name}
                </h4>
                <p className="text-white font-medium text-sm mt-1 uppercase">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;