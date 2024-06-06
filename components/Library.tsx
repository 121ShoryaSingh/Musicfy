"use client"

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";


const Library = () => {
    const onClick = () => {};
  return (
    <div>
        {/* Heading Div */}
      <div className="flex items-center justify-between px-5 pt-4" >
        {/* Icon and Heading */}
        <div className="className inline-flex items-center gap-x-2" >
            <TbPlaylist size={26}/>
            <p className="text-neutral-400 font-medium">Your Library</p>
        </div>
        {/* PlayList */}
        <AiOutlinePlus onClick={onClick} size={20} className="text-neutral-400 cursor-pointer hover:text-white transition" />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        List of Songs
      </div>
    </div>
  )
}

export default Library
