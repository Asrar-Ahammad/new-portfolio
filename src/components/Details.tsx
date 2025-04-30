import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Connect from "./Connect";
import Tech from "./Tech";
import Experience from "./Experience";
import Projects from "./Projects";

function Details() {
  return (
    <>
      <div className="w-full h-full flex items-center justify-start mt-6">
        <Tabs defaultValue="about" className="w-full md:w-[60vw]">
          <TabsList className="flex item-center justify-center gap-2 md:gap-4 bg-transparent transition-all duration-500">
            <TabsTrigger
              className="cursor-pointer text-gray-400 data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:font-medium capitalize font-light transition-all duration-500 rounded-full"
              value="about"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer text-gray-400 data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:font-medium capitalize font-light transition-all duration-500 rounded-full"
              value="projects"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer text-gray-400 data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:font-medium capitalize font-light transition-all duration-500 rounded-full"
              value="experience"
            >
              experience
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer text-gray-400 data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:font-medium capitalize font-light transition-all duration-500 rounded-full"
              value="tech stack"
            >
              tech stack
            </TabsTrigger>
            <TabsTrigger
              className="cursor-pointer text-gray-400 data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:font-medium capitalize font-light transition-all duration-500 rounded-full"
              value="connect"
            >
              connect
            </TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="mt-8">
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p className="mt-2 text-gray-600 w-full">
              Passionate about AI, Machine Learning, and Data Science, with a
              focus on solving real-world problems. Skilled in software
              development, UI design, Machine Learning, Data Science, Full Stack
              Development, and Data Structures and Algorithms. Effective
              independently and in teams.
            </p>
          </TabsContent>
          <TabsContent value="projects" className="mt-8">
            <Projects />
          </TabsContent>
          <TabsContent value="experience" className="mt-8">
            <Experience />
          </TabsContent>
          <TabsContent value="tech stack" className="mt-8">
            <Tech />
          </TabsContent>
          <TabsContent value="connect" className="mt-8">
            <Connect />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default Details;
