import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "A K Biplob | Portfolio",
  description: "Full-stack Web Developer Portfolio of A K Biplob",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="font-roboto bg-[#0a0a1a] ">
        
        {/* Navbar সাধারণত পুরো উইডথ থাকে */}
        <Navbar />

        {/* এখানে max-w-7xl এবং mx-auto ব্যবহার করা হয়েছে 
            যাতে সব পেজের কন্টেন্ট দুই পাশে গ্যাপ নিয়ে মাঝখানে থাকে 
        */}
        <main className="flex-grow max-w-7xl mx-auto w-full px-5 md:px-10 lg:px-16">
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}