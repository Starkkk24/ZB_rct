import pic from '../static/img/image.png'
import {Link} from 'react-router-dom'

function EventCard({date, location, name, img, about}){
    return(
        <>
        <div class="flex flex-col  p-0 mb-16 mx-78 mt-16 border  border-[rgba(255,255,255,0.1)] bg-[rgba(14,15,15,0.88)] backdrop-blur-md rounded-[12px]">
            <div class="flex justify-between gap-30 items-center border  border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.66)] rounded-[12px] p-8 m-0">
                <div class="flex flex-col gap-5">
                    <h2 className="section-title" class="text-6xl  font-bold"><span class="text-[#8fff00]">{name}</span></h2>
                    </div>
                <div>
                    <img src={img} alt="img"  class="border border-[rgba(255,255,255,0.1)] w-[500px] h-[200px] rounded-[12px]"/>
                </div>                        
            </div>
            <div class="flex
                        justify-between
                        gap-64
                        items-center
                        p-8 
                        ">
                <div class="text-xl">
                   Share  <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </div>                
                <div class="text-xl">
                    <Link to="/event1">View <i class="fa-solid fa-arrow-up-right-from-square"></i></Link>
                </div>                
            </div>
        </div>
        </>
    )
}

export default function EventPage(){
    return(
        <>
        <div className="container" class="  flex items-center justify-center text-6xl font-bold gap-4  px-20  pt-25 z-20 mb-12 mt-6">
            <div class="text-center  m-0 z-2 border  border-[rgba(255,255,255,0.1)] p-8 bg-[rgba(13,17,23,0.3)] backdrop-blur-md rounded-[12px]">
                <h2 className="section-title" class="text-4xl  font-bold"><span class="text-[#8fff00]">Project Expo</span></h2>
                <h2 className="section-title" class="text-4xl  font-bold"><span class="text-[#8fff00]">Time</span></h2>
                <h2 className="section-title" class="text-4xl  font-bold"><span class="text-[#8fff00]">venue</span></h2>
                <h2 className="section-title" class="text-2xl  font-bold"><span class="text-[#8fff00]">description</span></h2>
                <h2 className="section-title" class="text-2xl  font-bold"><span class="text-[#8fff00]">Speaker Profile</span></h2>
            </div>
 
        </div>
        </>
    )
}