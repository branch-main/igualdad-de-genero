import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Information1 from "@/components/Information1";
import Information2 from "@/components/Information2";
import FocusGroup from "@/components/FocusGroup";
import Encuestas from "@/components/Encuestas";

export default function Home() {
  return (
    <main className="flex flex-col bg-neutral-100">
      <Hero />

      <Introduction />
      <Information1 />
      <Information2 />
      <FocusGroup />

      <Encuestas />
    </main>
  );
}
