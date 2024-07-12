import { Info} from "../User";

const Footer=()=>{
    return <div className="mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
        <div className="text-3xl md-mx:text-2xl text-primaryColor font-semibold">{Info.name}</div>
        <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">Copyright &copy; {new Date().getFullYear()} {Info.name} <span className="xs-mx:hidden">|</span> <span>All Rights Reserved</span></div>
    </div>
}
export default Footer;