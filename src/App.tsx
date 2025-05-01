import Details from "./components/Details";
import ProfileSection from "./components/ProfileSection";
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur';

const App = () => {
  return (
    <>
      <main className="flex items-center justify-center w-full h-full relative">
        <div className="w-[90vw] md:w-[700px] h-full">
          <ProfileSection />
          <Details />
        </div>
        <ProgressiveBlur
        className='pointer-events-none fixed bottom-0 h-[50px] w-full'
        blurIntensity={6}
      />
      </main>
    </>
  );
};

export default App;
