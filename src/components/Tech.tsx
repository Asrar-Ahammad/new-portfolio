import { ArrowUpRight, ArticleNyTimes, Brain } from "@phosphor-icons/react";

const techs = [
  {
    icon: <img src="python_icon.svg" className="w-[30px] h-[30px]" />,
    title: "Python",
    link: "https://www.python.org/",
  },
  {
    icon: <img src="js_icon.svg" className="w-[30px] h-[30px]" />,
    title: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <img src="typescript_icon.svg" className="w-[30px] h-[30px]" />,
    title: "Typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: <img src="cpp_icon.png" className="w-[30px] h-[30px]" />,
    title: "C++",
    link: "https://isocpp.org/",
  },
  {
    icon: <img src="r_icon.svg" className="w-[30px] h-[30px]" />,
    title: "R",
    link: "https://www.r-project.org/",
  },
  {
    icon: <img src="sql_icon.svg" className="w-[30px] h-[30px]" />,
    title: "SQL",
    link: "https://en.wikipedia.org/wiki/SQL",
  },
  {
    icon: <img src="mongodb_icon.svg" className="w-[30px] h-[30px]" />,
    title: "MongoDB",
    link: "https://www.mongodb.com/",
  },
  {
    icon: <img src="sklearn_icon.svg" className="w-[30px] h-[30px]" />,
    title: "Machine Learning",
    link: "https://en.wikipedia.org/wiki/Machine_learning",
  },
  {
    icon: <Brain weight="bold" className="w-[30px] h-[30px]" />,
    title: "Deep Learning",
    link: "https://en.wikipedia.org/wiki/Deep_learning",
  },
  {
    icon: <ArticleNyTimes weight="bold" className="w-[30px] h-[30px]" />,
    title: "NLP",
    link: "https://en.wikipedia.org/wiki/Natural_language_processing",
  },
  {
    icon: <img src="flask_icon.svg" className="w-[30px] h-[30px]" />,
    title: "Flask",
    link: "https://flask.palletsprojects.com/en/stable/",
  },
  {
    icon: <img src="tableau_icon.svg" className="w-[30px] h-[30px]" />,
    title: "Tableau",
    link: "https://www.tableau.com/",
  },
  {
    icon: <img src="tensorflow_icon.svg" className="w-[30px] h-[30px]" />,
    title: "Tensorflow",
    link: "https://www.tensorflow.org/",
  },
  {
    icon: <img src="html_icon.svg" className="w-[30px] h-[30px]" />,
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <img src="css_icon.svg" className="w-[30px] h-[30px]" />,
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: <img src="tailwind_icon.svg" className="w-[30px] h-[30px]" />,
    title: "TailwindCSS",
    link: "https://tailwindcss.com/",
  },
  {
    icon: <img src="react_icon.svg" className="w-[30px] h-[30px]" />,
    title: "React",
    link: "https://react.dev/",
  },
  {
    icon: <img src="nodejs_icon.svg" className="w-[30px] h-[30px]" />,
    title: "NodeJS",
    link: "https://nodejs.org/en",
  },
  {
    icon: <img src="bun_icon.svg" className="w-[30px] h-[30px]" />,
    title: "Bun",
    link: "https://bun.sh/",
  },
  {
    icon: <img src="express_icon.svg" className="w-[30px] h-[30px]" />,
    title: "ExpressJS",
    link: "https://expressjs.com/",
  },
  {
    icon: <img src="nextjs_icon.svg" className="w-[30px] h-[30px]" />,
    title: "NextJS",
    link: "https://nextjs.org/",
  },
  {
    icon: <img src="figma_icon.svg" className="w-[30px] h-[30px]" />,
    title: "Figma",
    link: "https://www.figma.com/",
  },
  {
    icon: <img src="git_icon.svg" className="w-[30px] h-[30px]" />,
    title: "Git",
    link: "https://git-scm.com/",
  },
  {
    icon: <img src="github_icon.svg" className="w-[30px] h-[30px]" />,
    title: "Github",
    link: "https://github.com/",
  },
];

const Tech = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-wrap gap-4 mb-8">
        {techs.map((tech) => (
          <a
            href={tech.link}
            className="w-[220px] h-[120px] flex items-center justify-center gap-2 border-[1px] border-gray-200 rounded-lg hover:border-gray-600 cursor-pointer group relative transition-all duration-500"
          >
            <div className="rounded-lg group-hover:shadow-lg transition-all duration-500">
              {tech.icon}
            </div>
            <p className="font-semibold text-lg">{tech.title}</p>
            <div className="absolute hidden group-hover:block group-hover:top-2 group-hover:right-4">
              <ArrowUpRight className="w-[15px] h-[15px] transition-all duration-500" />
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Tech;
