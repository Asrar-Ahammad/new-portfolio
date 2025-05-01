import {
  CursorText,
  FilmReel,
  GithubLogo,
  Student,
  TrafficSign,
} from "@phosphor-icons/react";
import { InView } from "./ui/in-view";
import { BorderTrail } from "./ui/border-trail";

const projects = [
  {
    icon: <CursorText className="h-[30px] w-[30px]" />,
    title: "Text Guardian - AI Generated Text Detector",
    description: `This Flask-based web application allows users to classify text as either AI-generated or human-written. The application currently supports English and Hindi languages, with plans to add support for Tamil and more languages.`,
    link: "https://github.com/Asrar-Ahammad/text-classification",
  },
  {
    icon: <FilmReel className="h-[30px] w-[30px]" />,
    title: "Movie Recommendation System",
    description:
      "This movie recommendation system uses ML and cosine similarity to suggest related films based on user queries, employing NLP for insightful data analysis.",
    link: "https://github.com/Asrar-Ahammad/movie-recommendation-system",
  },
  {
    icon: <Student className="h-[30px] w-[30px]" />,
    title: "Student Performance Prediction",
    description:
      "The Student Performance Analysis System is a machine learning-based solution that analyzes student performance using various features. It leverages a CI/CD pipeline and is yet to deployed on Streamlit for automated development, testing, and deployment.",
    link: "https://github.com/Asrar-Ahammad/Student-Performance-Prediction",
  },
  {
    icon: <TrafficSign className="h-[30px] w-[30px]" />,
    title: "Traffic Sign Detection",
    description:
      "This project employs the YOLOv5 algorithm to train a specialized model capable of accurately detecting traffic signs. The objective is to enhance road safety and optimize traffic management through efficient and reliable traffic sign recognition.",
    link: "https://github.com/Asrar-Ahammad/Traffic-Sign-detection",
  },
];

const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 px-2 md:p-0 mb-4">
        {projects.map((project) => (
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
            <div
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300  
              p-4 md:p-6 rounded-lg w-full h-fit group relative"
            >
              <BorderTrail
                style={{
                  boxShadow:
                    "0px 0px 60px 30px rgb(200 200 200 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
                }}
                size={100}
              />
              <div className="flex flex-col justify-start gap-4">
                <div className="p-2 border-2 border-white shadow-lg w-fit rounded-lg">
                  {project.icon}
                </div>
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p className="w-full md:w-[70%] text-gray-600 bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-0 rounded-lg">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="border-[1px] border-black text-black p-2 rounded-full w-fit flex items-center justify-center gap-2 cursor-pointer px-4 transition-all duration-300 hover:bg-black hover:text-white"
                >
                  <GithubLogo /> Github
                </a>
              </div>
            </div>
          </InView>
        ))}
      </div>
    </>
  );
};

export default Projects;
