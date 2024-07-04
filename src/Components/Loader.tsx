import { IconHexagon } from "@tabler/icons-react";
import IconCloud from "./magicui/icon-cloud";
import { Slugs } from "../User";



export function Loader() {
    return (
        <div className="relative  flex h-full w-full items-center animate-[ping_1s_ease-in-out_infinite_4.5s] justify-center border-none overflow-hidden rounded-lg border  px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={Slugs}  />
            <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite] " size={120} color="#64FFDA" stroke={1.25} />
            <p className="absolute -z-10 text-6xl font-mono font-bold text-primaryColor">CM</p>
        </div>
    );
}
