const FloatingInput = (props: any) => {

    return <div> <div className="relative">
        {props.id != "message" ? <input type="text" id={props.id} value={props.value} onChange={(e) => props.handleChange(props.id, e.target.value)} className={`block px-2.5 pb-2.5 pt-4 w-full text-xl sm-mx:text-lg xs-mx:text-base sm-mx:pb-1 sm-mx:pt-2 rounded-xl text-white bg-transparent border  border-textColor appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none ${props.error?"border-red-500":""} focus:ring-0 focus:border-primaryColor peer`} placeholder="" /> :
            <textarea value={props.value} name={props.id} id={props.id} onChange={(e) => props.handleChange(props.id, e.target.value)} rows={4} className={`block px-2.5 pb-2.5 xs-mx:text-base pt-4 w-full text-xl sm-mx:text-lg rounded-xl text-white bg-transparent border border-textColor  ${props.error?"border-red-500":""} appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer`} placeholder=""></textarea>}
        <label htmlFor={props.id} className={`absolute  text-xl sm-mx:text-lg xs-mx:text-base  text-textColor  duration-300 transform -translate-y-4 scale-100 top-1 z-10 origin-[0] bg-bgColor  px-2 peer-focus:px-2 peer-focus:text-primaryColor  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 ${props.id != "message" ? "peer-placeholder-shown:top-1/2" : "peer-placeholder-shown:top-6"} peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}>{props.name}</label>
    </div>
        {props.error && <div className="text-red-500 sm-mx:text-sm xs-mx:text-xs  ml-1 mt-1">{props.error}</div>}
    </div>
}
export default FloatingInput;