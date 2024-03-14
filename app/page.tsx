import Hero from "@/components/Hero";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Главная',
  description: '',
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
