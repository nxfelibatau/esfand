import AuroraBackground from "./components/AuroraBackground";
import BackgroundLines from "./components/BackgroundLines";
import CollisionBackground from "./components/CollisionBackground";
import Compare from "./components/Compare";
import Lamp from "./components/LampSectionHeader";
export default function Home() {
  return (
    <>
    <AuroraBackground/>
    <CollisionBackground/>
    <BackgroundLines/>
    <Compare/>
    <Lamp/>
    </>
  );
}
