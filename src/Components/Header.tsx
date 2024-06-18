import { IconHexagonLetterC } from "@tabler/icons-react";
import SideBar from "./SideBar";


const Header=()=>{
return (
    <nav className="flex bg-bgColor h-[18vh] px-10 dm-mono-regular  justify-between items-center">
        
        <IconHexagonLetterC size={60} color="#64FFDA" stroke={1.25}/>
        <div className="md:flex gap-8 hidden">
            <a  className="text-textColor hover:text-primaryColor" href="#about" >About</a>
            <a  className="text-textColor hover:text-primaryColor" href="#work" >Work</a>
            <a  className="text-textColor hover:text-primaryColor" href="#experience" >Experience</a>
            <a  className="text-textColor hover:text-primaryColor" href="#skills" >Skills</a>
            <a  className="text-textColor hover:text-primaryColor" href="#contact" >Contact</a>
        </div>
        <SideBar/>
    </nav>
);
}
export default Header;