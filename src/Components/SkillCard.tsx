import { Avatar } from "@mantine/core";

const SkillBadge=(skills:[])=>{
    return skills.map((skill:any, index:number)=><div key={index} className="flex gap-2 border border-textColor rounded-2xl items-center py-2 px-3 bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1">
         <img className="w-[48px] bs-mx:w-[36px] xsm-mx:w-[28px] !p-1"  src={`Icons/${skill}.png`} />
         <div className="text-textColor text-xl font-medium sm-mx:text-lg xs-mx:text-sm ">{skill}</div>
    </div>)
}

const SkillCard =(props:any)=>{
    return <div data-aos="fade-up"   data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-[47%] shadow-[0_0_10px_0_#64FFDA50] rounded-3xl  mb-3 border border-primaryColor p-5 bs-mx:p-3 sm-mx:w-full ">
        <div className="text-3xl mb-4 text-white text-center sm-mx:text-2xl xs-mx:text-xal font-bold ">{props.title}</div>
        <div className="flex gap-3 bs-mx:gap-2 justify-center flex-wrap">
            {SkillBadge(props.skills)}
        </div>
    </div>
}
export default SkillCard;