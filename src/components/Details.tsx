import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Connect from "./Connect";
import Tech from "./Tech";
import Experience from "./Experience";
import Projects from "./Projects";
import { InView } from "./ui/in-view";

function Details() {
  return (
    <>
      <div className="w-full h-full flex items-center justify-start mt-16 md:mt-8 mb-10">
        <Tabs defaultValue="about" className="w-fit md:w-[60vw]">
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
            <InView
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 0.95,
                  filter: "blur(4px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewOptions={{ margin: "0px 0px -100px 0px" }}
            >
              <h2 className="text-xl font-semibold">
                Turning real-world problems into intelligent solutions with AI,
                Machine Learning, and Full-Stack Development.
              </h2>
              <p className="mt-2 text-gray-600 w-full">
                I’m passionate about Artificial Intelligence, Machine Learning,
                and Data Science, with a strong focus on building solutions that
                solve real-world problems. I bring a well-rounded skill set that
                includes software development, full-stack web development, UI
                design, and a deep understanding of Data Structures and
                Algorithms. Whether working independently or as part of a team,
                I’m committed to delivering impactful, efficient, and
                user-focused solutions.
              </p>
            </InView>
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
