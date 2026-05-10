"use client";

const ContactPage = () => {
  return (
    <section id="contact" className="bg-[#0a0a1a] py-12 px-5 font-roboto">
      <div className="max-w-6xl mx-auto">
        
        {/* WhatsApp Header */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          <h2 className="text-[#FFA600] text-3xl md:text-4xl font-black uppercase tracking-tighter">
            Contact With Whatsapp
          </h2>
          <div className="flex items-center gap-2 text-[#FFA600] text-2xl md:text-3xl font-black">
            <span className="bg-green-600 p-1.5 rounded-full text-white text-xl">
              <i className="fab fa-whatsapp"></i>
            </span>
            <span>+8801627205530</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Map Section */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden border-2 border-gray-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14353.48622119045!2d89.2616238!3d25.9221297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed1144414f6b21%3A0x6769911956550b00!2sA%20K%20Biplob!5e0!3m2!1sen!2sbd!4v1715423000000!5m2!1sen!2sbd" 
              className="w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>

          {/* Form Section */}
          <div>
            <h3 className="text-white text-3xl font-black uppercase text-center mb-6 tracking-tighter">
              Fill This Contact Form
            </h3>
            <form className="grid grid-cols-1 gap-3">
              <input type="text" placeholder="Name" className="p-3 bg-white text-black rounded-sm outline-none font-bold text-sm" />
              <input type="text" placeholder="Phone No" className="p-3 bg-white text-black rounded-sm outline-none font-bold text-sm" />
              <input type="email" placeholder="Email" className="p-3 bg-white text-black rounded-sm outline-none font-bold text-sm" />
              <textarea placeholder="Message" rows="3" className="p-3 bg-white text-black rounded-sm outline-none font-bold text-sm"></textarea>
              <button className="py-3 bg-[#FFA600] text-white font-black uppercase rounded-sm hover:bg-green-600 transition-all">
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;