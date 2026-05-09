import { Roboto } from "next/font/google"; // Poppins এর বদলে Roboto ইম্পোর্ট করুন
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Roboto ফন্ট কনফিগারেশন
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // আপনার প্রয়োজন অনুযায়ী ওয়েট নিতে পারেন
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
      className={`${roboto.variable} h-full antialiased`} // এখানে roboto.variable ব্যবহার করুন
    >
      <body className="font-roboto bg-[#0a0a1a]"> 
        {/* body-তে font-roboto ক্লাসটি যোগ করা হয়েছে */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}