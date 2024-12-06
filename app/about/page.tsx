import AboutSection from '@/components/about/AboutSection'
import Team from "../../components/Team/Team";
import { Suspense } from 'react';

export default function About() {
  return (
    <Suspense fallback={<div></div>}>
      <div>
        <AboutSection />
        <Team />
      </div>
    </Suspense>
  );
}