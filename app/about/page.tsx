import AboutSection from '@/components/about/AboutSection'
import Team from "../../components/Team/Team";
import cosmic from "@/lib/cosmicClient";

export default function About() {
  return (
    <div>
      <AboutSection/>
      <Team />
    </div>
  );
}