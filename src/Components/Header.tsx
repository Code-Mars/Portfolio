import { IconHexagonLetterC } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";

const links=["About","Projects","Skills","Experience","Contact"];
const navLinks=(col:Boolean)=>{
    return links.map((link, index)=>{
        return  <a key={index} className={`${col?'flex flex-col items-center':''} text-textColor text-lg font-mono hover:text-primaryColor`} href={`#${link}`}><span className="text-primaryColor">0{index+1}. </span>{link}</a>
    })
}

const Header=()=>{
    const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
return (
    <nav className="flex bg-bgColor h-28  px-10  justify-between items-center xs-mx:px-4 xs-mx:h-20 ">
        
        <IconHexagonLetterC className="z-10" size={isMobile?45:60} color="#64FFDA" stroke={1.25}/>
        <div className="bs:flex gap-8 hidden">
            {navLinks(false)}
        </div>
        <SideBar/>
    </nav>
);
}
export default Header;
export {navLinks};