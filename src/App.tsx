import Details from "./components/Details";
import ProfileSection from "./components/ProfileSection";

const App = () => {
  return (
    <>
      <main className="flex items-center justify-center w-full h-full">
        <div className="w-[90vw] md:w-[700px] h-full">
          <ProfileSection />
          <Details />
        </div>
      </main>
    </>
  );
};

export default App;
