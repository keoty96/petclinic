import Image from "next/image";
import NavBar from "./components/nav";
import Hero from "./components/main-hero";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
    </main>
  );
}
