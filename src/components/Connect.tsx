const social_links = [
    {
        title:"Linkedin",
        link:"linkedin.com/in/shaik-mohammad-asrar-ahammad",
        username:"@shaik-mohammad-asrar-ahammad"
    },
    {
        title:"Github",
        link:"https://github.com/Asrar-Ahammad",
        username:"@Asrar-Ahammad"
    },

    {
        title:"Mail",
        link:"mailto:asrarahammadshaik@gmail.com",
        username:"asrarahammadshaik@gmail.com"
    },

]
 

const Connect = () =>{
    return(
        <>
        <div>
            {
                social_links.map((item)=>(
                    <a href={item.link} className="flex item-center justify-between gap-4 w-fit cursor-pointer rounded-lg hover:bg-gray-100 transition-all duration-500 p-4">
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        <div className="text-gray-400 text-md">{item.username}</div>
                    </a>
                ))
            }
        </div>
        </>
    )
}

export default Connect;
