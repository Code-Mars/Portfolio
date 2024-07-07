import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
import { link } from "fs";

const Social=()=>{
    const socialLinks=[{link:"https://github.com/Code-Mars", icon:IconBrandGithub}, {link:"https://www.linkedin.com/in/chandrabhan-maurya", icon:IconBrandLinkedin}, 
        {link:"https://www.instagram.com/code.marshal_", icon:IconBrandInstagram}, {link:"https://www.youtube.com/channel/UC1ki6jaFvFiH_E79b9FYptw", icon:IconBrandYoutube},
        {link:"https://www.leetcode.com/u/CodeMars", icon:IconBrandLeetcode}
    ];
    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a   key={index} href={`${socialLink.link}`} target="_blank"  className="font-mono text-lg  hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out">
       <div data-aos="fade-up-left" data-aos-duration="800" > <socialLink.icon stroke={1.5} className="-rotate-90" size={25} /></div>
    </a>
    })

    return <div  className="flex  text-textColor items-center gap-8 fixed bottom-32 -left-44 rotate-90 " >
        {socialIcons}
        <hr className="border w-40 rounded-full  bg-textColor border-textColor"/>
    </div>
}
export default Social;