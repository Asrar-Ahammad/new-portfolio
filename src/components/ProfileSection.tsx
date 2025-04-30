import Avatar from "./Avatar"
import Social from "./Social"

const ProfileSection = () => {
  return (
    <>
    <div className="profile h-[30vh] mt-[10vh] flex justify-center flex-col gap-6 md:py-16">
          <Avatar/>
          <div className="flex flex-col justify-center gap-4">
          <p className="text-2xl font-medium">Hey, I'm Asrar Ahammad.</p>
          <p className="text-xl opacity-60 font-medium w-full">I'm a Data Scientist, Software developer & Photographer.</p>
          </div>
          <Social />
        </div>
    </>
  )
}

export default ProfileSection