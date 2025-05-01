import { TextEffect } from "@/components/motion-primitives/text-effect";

const social_links = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/shaik-mohammad-asrar-ahammad",
    username: "@shaik-mohammad-asrar-ahammad",
    delay: 0,
  },
  {
    title: "Github",
    link: "https://github.com/Asrar-Ahammad",
    username: "@Asrar-Ahammad",
    delay: 0.5,
  },

  {
    title: "Mail",
    link: "mailto:asrarahammadshaik@gmail.com",
    username: "asrarahammadshaik@gmail.com",
    delay: 1,
  },
];

const Connect = () => {
  return (
    <>
      <div>
        {social_links.map((item) => (
          <a
            href={item.link}
            className="flex item-center justify-between gap-4 w-fit cursor-pointer rounded-lg hover:bg-gray-100 transition-all duration-500 p-4"
          >
            <TextEffect
              per="word"
              as="h3"
              preset="blur"
              delay={item.delay}
              className="font-medium text-lg"
            >
              {item.title}
            </TextEffect>
            <TextEffect
              per="word"
              as="h3"
              preset="blur"
              delay={item.delay}
              className="text-sm font-medium text-gray-400 flex items-center justify-center"
            >
              {item.username}
            </TextEffect>
          </a>
        ))}
      </div>
    </>
  );
};

export default Connect;
