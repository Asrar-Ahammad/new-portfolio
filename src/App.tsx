import ClickSpark from "./blocks/Animations/ClickSpark/ClickSpark";
import Details from "./components/Details";
import ProfileSection from "./components/ProfileSection";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";

const App = () => {
  return (
    <>
      <ClickSpark
        sparkColor="#000"
        sparkSize={10}
        sparkRadius={30}
        sparkCount={8}
        duration={400}
      >
        <main className="flex items-center justify-center w-full h-full relative">
          <div className="w-full md:w-[700px] h-full px-4">
            <ProfileSection />
            <Details />
          </div>
          <ProgressiveBlur
            className="pointer-events-none fixed bottom-0 h-[50px] w-full"
            blurIntensity={6}
          />
        </main>
      </ClickSpark>
    </>
  );
};

export default App;
