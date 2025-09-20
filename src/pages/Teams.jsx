import tl from '../static/img/stark.jpg'
import dl from '../static/img/dl.jpg'
import sl from '../static/img/sl.jpg'
import tr from '../static/img/tr.jpg'

function TeamCard({img, post}){
    return(
        <>
                    <div class="mb-16 bg-[rgba(0, 0, 0, 0.66)] w-[28rem] h-auto rounded-[12px]">
                        {/* <img src={img} class="w-[18rem] h-[24rem]"></img> */}
                        <div class="bg-blue w-[28rem] h-[30rem] border border-[rgba(255,255,255,0.1)] rounded-[12px] mb-3">
                            <img src={img} class="w-full h-full object-cover rounded-[12px]"></img>
                        </div>
                        <div class="text-2xl mb-2 pl-2"><span class="text-[#8fff00] font-semibold">{post}</span> Lead</div>
                    </div>         
        </>
    )
}

function TeamCard1({img, post}){
    return(
        <>
            <div className="mb-16 bg-[rgba(0, 0, 0, 0.66)] w-[28rem] h-auto rounded-[12px]">
                <div className="relative bg-blue w-[28rem] h-[30rem] border border-[rgba(255,255,255,0.1)] rounded-[12px] mb-3 overflow-hidden">
                    <img src={img} className="w-full h-full object-cover rounded-[12px]"></img>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 via-black/20 via-black/15 via-black/10  to-transparent "></div>
                </div>
                <div className="text-2xl mb-2 pl-2">
                    <span className="text-[#8fff00] font-semibold">{post}</span> Lead
                </div>
            </div>         
        </>
    )
}

function TeamCard2({img, post}){
    return(
        <>
            <div className="mb-16 bg-[rgba(0, 0, 0, 0.66)] w-[28rem] h-auto rounded-[12px]">
                <div className="relative bg-blue w-[28rem] h-[30rem] border border-[rgba(255,255,255,0.1)] rounded-[12px] mb-3 overflow-hidden">
                    <img src={img} className="w-full h-full object-cover rounded-[12px]"></img>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[12px]"></div>
                    
                    {/* Text overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-1">Mayank</h3>
                        <p className="text-lg opacity-80">
                            <span className="text-[#8fff00] font-semibold">{post}</span> Lead
                        </p>
                    </div>
                </div>
            </div>         
        </>
    )
}

function TeamCard3({img, post}){
    return(
        <>
            <div className="mb-16 bg-[rgba(0, 0, 0, 0.66)] w-[28rem] h-auto rounded-[12px]">
                <div className="relative bg-blue w-[28rem] h-[30rem] border border-[rgba(255,255,255,0.1)] rounded-[12px] mb-3 overflow-hidden">
                    <img src={img} className="w-full h-full object-cover rounded-[12px]"></img>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[12px]"></div>
                    
                    {/* Translucent text box at bottom */}
<div className="absolute bottom-4 left-4 right-4 p-4 text-white 
                bg-[rgba(255,255,255,0.08)] 
                backdrop-blur-lg 
                border border-white/20 
                rounded-xl 
                shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] 
                hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.8)] 
                transition-all duration-300 
                transform hover:scale-[1.02] hover:translate-y-[-4px]">
    <h3 className="text-xl font-bold mb-1">Mayank</h3>
    <p className="text-sm opacity-90">
        <span className="text-[#8fff00] font-semibold">{post}</span> Lead
    </p>
</div>
                </div>
            </div>         
        </>
    )
}


function TeamCard4({img, post}){
    return(
        <>
            <div className="mb-16 bg-[rgba(0, 0, 0, 0.66)] w-[28rem] h-auto rounded-[12px]">
                <div className="relative bg-blue w-[28rem] h-[30rem] border border-[rgba(255,255,255,0.1)] rounded-[12px] mb-3 overflow-hidden">
                    <img src={img} className="w-full h-full object-cover rounded-[12px]"></img>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 via-black/20 via-black/15 via-black/10  to-transparent "></div>
                    
                    {/* Text box with enhanced inner glow effect */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 text-white bg-black/40 backdrop-blur-sm  rounded-lg shadow-lg shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(255,255,255,0.2),inset_2px_0_4px_rgba(255,255,255,0.15),inset_-2px_0_4px_rgba(255,255,255,0.15)]">
                        <h3 className="text-xl font-bold mb-1 text-white">Mayank</h3>
                        <p className="text-sm text-gray-200">
                            <span className="text-[#8fff00] font-semibold">{post}</span> Lead
                        </p>
                    </div>
                </div>
            </div>         
        </>
    )
}

function TeamCard6({img, name, post, cate, about}){
    return(
        <>
            <div className="mb-16 bg-[rgba(0, 0, 0, 0.66)] w-[28rem] h-auto rounded-[12px]">
                <div className="relative bg-blue w-[24rem] h-[30rem] border border-[rgba(255,255,255,0.1)] rounded-[12px] mb-0 overflow-hidden">
                    <img src={img} className="w-full h-full object-cover rounded-[12px]"></img>
                    {/* Gradient overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[12px]"></div> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 via-black/20 via-black/15 via-black/10  to-transparent "></div>
                    
                    {/* Translucent text box at bottom */}
                    <div className="flex justify-between gap-12 items-center absolute bottom-0 left-0 right-0 p-6 px-3 text-white ">
                        <div>
                            <h3 className="text-2xl font-bold mb-1">{name}</h3>
                            <p className="text-m opacity-90">
                                <span className="text-[#8fff00] font-semibold">{post}</span> {cate}
                            </p>                        
                        </div>
                        <div class="text-2xl flex gap-4">
                            <i class="fab fa-linkedin-in"></i>
                            <i class="fab fa-github"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                    </div>
            </div>         
        </>
    )
}
function TeamCard5({img, name, post, cate, about}){
    return(
        <>
<div className="mb-16 w-[28rem] rounded-[12px]">
  <div className="group relative bg-blue w-[24rem] h-[30rem] border border-[rgba(255,255,255,0.1)] rounded-[12px] overflow-hidden">

    {/* Image */}
    <img 
      src={img} 
      className="w-full h-full object-cover rounded-[12px] transition-transform duration-500 group-hover:scale-110"
    />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 via-black/20 via-black/15 via-black/10 to-transparent transition-transform duration-500 group-hover:scale-105"></div>

    {/* Bottom text + icons */}
    <div className="flex justify-between items-center absolute bottom-0 left-0 right-0 p-6 px-3 text-white">
      <div>
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-m opacity-90">
          <span className="text-[#8fff00] font-semibold">{post}</span> {cate}
        </p>                        
      </div>

      {/* Icons — hidden until hover */}
      <div className="text-2xl flex gap-6 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">

  {/* LinkedIn */}
  <i className="fab fa-linkedin-in transition-transform duration-500 hover:scale-125 hover:text-[#0077B5]"></i>

  {/* GitHub */}
  <i className="fab fa-github github-icon transition-transform duration-500 hover:scale-125 hover:text-[#000000]"></i>

  {/* Instagram */}
  <i className="fab fa-instagram instagram-icon transition-transform duration-500 hover:scale-125"></i>


      </div>
    </div>

  </div>
</div>
        
        </>
    )
}

export default function Teams(){
    return(
        <>
        <div class="  flex items-center justify-center  px-40 pb-15 pt-25 z-20">
            <div class="text-center  m-0 z-2 p-8">
                <h2 className="section-title" class="text-5xl mb-6 font-bold"><span class="text-[#8fff00]">Our</span> Team</h2> 
                <p class=" text-xl mb-0">Peope with ambitions. Who fill the current in the IoT Circuits.</p>
            </div>
        </div>

        {/* <div class="bg-[rgba(13,17,23,0.3)] backdrop-blur-md m-25 mt-0" > */}
        <div className="Wrap">
            <div class="flex items-center flex-col mx-25">
                <div class="flex gap-2 text-[#8ff000] font-bold text-3xl mb-10 ">
                    <i class="fas fa-users-cog"></i>
                    <h3>Leads</h3>                    
                </div>

                <div class="grid grid-cols-4 gap-4 mb-16">
                    <TeamCard5   name="Kiran" post="Lead"/>
                    <TeamCard5   name="Lakshmi" post="Lead"/>
                    <TeamCard5 img={tr} name="Saswath" post="Treasurer"/>
                    <TeamCard5 img={tl} cate="Lead" name="Mayank" post="Tech"/>
                    <TeamCard5  cate="Lead" name="Varshita" post="Tech"/>
                    <TeamCard5 img={sl} cate="Lead" name="Stuti" post="Social Media"/>
                    <TeamCard5  cate="Lead" name="Devraj" post="Social Media"/>
                    <TeamCard5 img={dl} cate="Lead" name="Shivom" post="Design"/>
                    <TeamCard5  cate="Lead" name="Chaithany" post="Design"/>
                    <TeamCard5  cate="Lead" name="Sanskriti" post="Secretary"/>
                    <TeamCard5  cate="Lead" name="Shyam" post="Vice Secretary"/>
                    <TeamCard5  cate="Lead" name="Harsh" post="Out Reach"/>
                    <TeamCard5  cate="Lead" name="Tejaswini" post="Out Reach"/>
                </div>
            </div>

            <div class="flex items-center flex-col mx-25">
                <div class="flex gap-2 text-[#8ff000] font-bold text-3xl mb-10 ">
                    <i class="fas fa-users-cog"></i>
                    <h3>Core Members</h3>                    
                </div>

                <div class="grid grid-cols-3 gap-4 mb-16">
                    {/* <TeamCard5 />
                    <TeamCard5 />
                    <TeamCard5 />
                    <TeamCard5 /> */}
                </div>
            </div>

        </div>
        {/* </div> */}
        </>
    )
}