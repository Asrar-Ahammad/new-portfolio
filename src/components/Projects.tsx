import {
  CursorText,
  FilmReel,
  GithubLogo,
} from "@phosphor-icons/react";

const projects = [
  {
    icon: <CursorText className="h-[30px] w-[30px]" />,
    title: "Text Guardian - AI Generated Text Detector",
    description: `This Flask-based web application allows users to classify text as either AI-generated or human-written. The application currently supports English and Hindi languages, with plans to add support for Tamil and more languages.`,
    link: "/",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXfZO3obE15TS3kuUeF7pv6XkNSOVJeihyQ&s",
  },
  {
    icon: <FilmReel className="h-[30px] w-[30px]" />,
    title: "Movie Recommendation System",
    description:
      "This movie recommendation system uses ML and cosine similarity to suggest related films based on user queries, employing NLP for insightful data analysis.",
    link: "/",
    imageUrl:
      "https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg?semt=ais_hybrid&w=740",
  },
  
];

const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 px-2 md:p-0 mb-4">
        {projects.map((project) => (
          <div
            className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300  
              p-4 md:p-6 rounded-lg w-full h-fit group relative"
          >
            <div className="flex flex-col justify-start gap-4">
              <div className="p-2 border-2 border-white shadow-lg w-fit rounded-lg">
                {project.icon}
              </div>
              <h3 className="font-semibold text-xl">{project.title}</h3>
              <p className="w-full md:w-[70%] text-gray-600 bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-0 rounded-lg">
                {project.description}
              </p>
              <a className="border-[1px] border-black text-black p-2 rounded-full w-fit flex items-center justify-center gap-2 cursor-pointer px-4 transition-all duration-300 hover:bg-black hover:text-white">
                <GithubLogo /> Github
              </a>
            </div>
            <div className="absolute w-[100px] h-[100px] bg-black -top-10 -right-10 rounded-full blur-lg group-hover:blur-2xl group-hover:scale-[1.5] transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
