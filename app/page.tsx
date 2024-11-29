import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Information1 from "@/components/Information1";
import Information2 from "@/components/Information2";
import FocusGroup from "@/components/FocusGroup";
import Advertising from "@/components/Advertising";
import Survey from "@/components/Survey";
import Interviews from "@/components/Interviews";
import Sources from "@/components/Sources";
import ElevatorPitch from "@/components/ElevatorPitch";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Information1 />
      <Information2 />
      <Survey />
      <Interviews />
      <FocusGroup />
      <ElevatorPitch />
      <Advertising />
      <Sources />
    </main>
  );
}
