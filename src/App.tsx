import ClickSpark from "./blocks/Animations/ClickSpark/ClickSpark";
import Details from "./components/Details";
import ProfileSection from "./components/ProfileSection";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { useTheme } from "./components/theme-provider";

const AppContent = () => {
  const { theme } = useTheme();
  // Set sparkColor based on current theme, not just initial preference
  const sparkColor = theme === "dark" ? "#fff" : "#000";
  
  return (
    <ClickSpark
      sparkColor={sparkColor}
      sparkSize={10}
      sparkRadius={30}
      sparkCount={8}
      duration={400}
    >
      <main className="flex items-center justify-center w-full h-full relative">
        <div className="fixed top-10 right-8 md:right-20">
          <ModeToggle />
        </div>
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
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;