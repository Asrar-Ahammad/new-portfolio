import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
} from "@phosphor-icons/react";


const social = [
  {
    logo: <LinkedinLogo weight="bold" className="w-[20px] h-[20px]" />,
    tooltip: "Linkedin",
    href: "https://www.linkedin.com/in/shaik-mohammad-asrar-ahammad/",
  },
  {
    logo: <GithubLogo weight="bold" className="w-[20px] h-[20px]" />,
    tooltip: "Github",
    href: "https://github.com/Asrar-Ahammad",
  },
  {
    logo: <img src="kaggle.svg" className="w-[19px] h-[19px]"/>,
    tooltip: "Kaggle",
    href: "https://www.kaggle.com/mohammadasrarahammad",
  },
  {
    logo: <img src="leetcode.svg" className="w-[19px] h-[19px]"/>,
    tooltip: "Leetcode",
    href: "https://leetcode.com/u/Asrar-Ahammad/",
  },
  {
    logo: <PaperPlaneTilt weight="bold" className="w-[20px] h-[20px]" />,
    tooltip: "Send Mail",
    href: "mailto:asrarahammadshaik@gmail.com",
  },
];

const Social = () => {
  return (
    <div className="flex gap-4">
      {social.map((item, index) => (
        <TooltipProvider delayDuration={0} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href={item.href}>{item.logo}</a>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="px-2 py-1 text-xs mt-2 rounded-full"
            >
              {item.tooltip}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default Social;
