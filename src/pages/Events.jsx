import pic from '../static/img/image.png'

function EventCard({date, location, name, img, about}){
    return(
        <>
        <div class="flex flex-col  p-0 mb-16 mx-78 mt-16 border  border-[rgba(255,255,255,0.1)] bg-[rgba(14,15,15,0.88)] backdrop-blur-md rounded-[12px]">
            <div class="flex justify-between gap-30 items-center border  border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.66)] rounded-[12px] p-8 m-0">
                <div class="flex flex-col gap-5">
                    <p> <i class="fa-solid fa-calendar-week"></i> {date}</p>
                    <h2 className="section-title" class="text-4xl  font-bold"><span class="text-[#8fff00]">{name}</span></h2>
                    <p><i class="fa-solid fa-location-dot"></i> {location}</p>
                    {/* <button>Hop In</button> */}
                    {/* <hr/> */}
                    {/* <p>{about}</p> */}
                    {/* <hr/> */}
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
                    View <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>                
            </div>
        </div>
        </>
    )
}


export default function Events() {
    return(
        <>
        <div className="container" class="  flex items-center justify-center text-6xl font-bold gap-4  px-40  pt-25 z-20 mb-12 mt-6">
            <i className="fas fa-calendar-alt text-[#8fff00]" ></i>
            <h1 className="title" class=" text-white text-center relative">
            Events
            </h1>
        </div>

        <div className="tabs" class="flex justify-center text-2xl gap-7  p-0 z-20">
            <div className="tabs_button" class="bg-[rgba(13,17,23,0.3)] backdrop-blur-md rounded-[12px] border border-[#8fff00] p-4 text-[#8fff00] 
             transition-all 
             duration-300 
             hover:bg-[#8fff00] 
             hover:text-black 
             hover:scale-105 cursor-cell ">
                Past Events
            </div>
            <div className="tabs_button" class="bg-[rgba(13,17,23,0.3)] backdrop-blur-md rounded-[12px] border border-[#8fff00] p-4 text-[#8fff00] 
             transition-all 
             duration-300 
             hover:bg-[#8fff00] 
             hover:text-black 
             hover:scale-105 cursor-cell">
                Current Events
            </div>
            <div className="tabs_button" class="bg-[rgba(13,17,23,0.3)] backdrop-blur-md rounded-[12px] border border-[#8fff00] p-4 text-[#8fff00] 
             transition-all 
             duration-300 
             hover:bg-[#8fff00] 
             hover:text-black 
             hover:scale-105 cursor-cell">
                Upcoming Events
            </div>
        </div>
        
        <div class="  flex items-center justify-center text-5xl gap-4  pt-20 z-20">
            <h2 class="font-bold"><span class="text-[#8fff00] font-bold">Past</span> Events</h2>
        </div>

        <EventCard name="Project Expo" date="20 June 2025" location="Seminar Hall" img={pic} about="An exciting exhibition where students demonstrate their technical innovations, creative solutions, and cutting-edge prototypes. A platform to inspire collaboration and celebrate ingenuity."  />
        <EventCard name="Robotics" date="22 May 2025" location="2nd Floor Lobby" img={pic}  about="An interactive exhibition where students design, build, and showcase robots. From automation to AI-driven bots, this event highlights innovation in robotics and hands-on creativity."  />
        <EventCard name="IoT Day" date="09 April 2025" location="Chemi Seminar Hall" img={pic} about="A celebration of the Internet of Things, featuring live demos, student projects, and talks on how IoT is shaping the future of connectivity and smart living." />
        <EventCard name="Hackathon" date="10 January 2025" location="Seminar Hall" img={pic} about="A 24-hour coding marathon where teams brainstorm, build, and present innovative solutions to real-world challenges. Collaboration, creativity, and problem-solving at its best!" />
        </>
    )
}