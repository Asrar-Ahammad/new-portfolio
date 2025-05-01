import { InView } from "./ui/in-view";

const Avatar = () => {
  return (
    <>
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
        <img
          src="avatar.jpeg"
          alt="Profile image"
          height={80}
          width={80}
          className="rounded-xl border-2 border-white shadow-lg object-cover object-center h-[80px] w-[80px]"
        />
      </InView>
    </>
  );
};

export default Avatar;
