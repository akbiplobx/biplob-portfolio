import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a1a] min-h-screen">
      {/* এখানে শুধুমাত্র About সেকশনটি দেখাবে */}
      <About />
      <Education></Education>
      <Contact></Contact>
    </main>
  );
}