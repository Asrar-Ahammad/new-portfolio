import Avatar from "./Avatar";
import Social from "./Social";
import { TextEffect } from "@/components/motion-primitives/text-effect";

const ProfileSection = () => {
  return (
    <>
      <div className="profile h-[30vh] mt-[10vh] flex justify-center flex-col gap-6 md:py-16">
        <Avatar />
        <div className="flex flex-col justify-center gap-4">
          <TextEffect
            per="word"
            as="h3"
            preset="blur"
            delay={0}
            className="text-2xl font-medium"
          >
            Hey, I'm Asrar Ahammad.
          </TextEffect>
          <TextEffect
            per="word"
            as="h3"
            preset="blur"
            delay={0.5}
            className="text-xl text-gray-600 font-medium w-full"
          >
            I'm a Data Scientist, Software developer & Photographer.
          </TextEffect>
        </div>
        <Social />
      </div>
    </>
  );
};

export default ProfileSection;
