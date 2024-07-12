const Mail=()=>{
    return <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-32 -right-48 rotate-90">
        <div className="flex" data-aos-duration="800" data-aos="fade-down-left">
        <a  href="mailto:chandrabhan.work@gmail.com" className="font-mono tracking-wide hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out">
            chandrabhan.work@gmail.com
        </a>
        </div>
        <hr className="border w-40 rounded-full  bg-textColor border-textColor"/>
    </div>
}
export default Mail;