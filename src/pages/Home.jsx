
function FeatureCard({fas, title, para}){
    return(
        <>
        <div className="Feature_card" class="bg-[rgba(13,17,23,0.3)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-[12px] p-6 transition-transform duration-300 ease-in-out">
            <div className="feature-icon" class="text-4xl mb-6 text-[#8fff00]">
                <i class={fas}></i>
            </div>
            <h3 class="text-[#ffffff] mb-4 text-3xl font-bold">{title}</h3>
            <p class="text-[rgba(255,255,255,0.7)] text-xl leading-[1.6]">{para}</p>
        </div>
        </>
    )
}

function TechStats({sn, sl}){
    return(
        <>
        <div className="stat-item" class=" flex flex-col text-center p-4 bg-[rgba(255,255,255,0.05)] rounded-lg backdrop-blur-[10px] border border-[rgba(255,215,0,0.1)] transition-all duration-300 ease-in-out"> 
            <span className="stat-number" class="block text-5xl font-bold text-[#00f2ff] my-4 mx-20 [text-shadow:0_0_15px_rgba(0,242,255,0.3)]">{sn}</span>
            <span className="stat-label" class="text-[#ffffff] text-xl my-2">{sl}</span>
        </div>
        </>
    )
}

export default function Home(){
    return(
        <>
        <div class="relative  flex items-center justify-center min-h-[calc(100vh-60px)] p-30 z-20 m-10 mt-20">
            <div class="text-center relative m-0 z-2">
                <h1 class="text-8xl mb-4 font-bold">Welcome to <span class="text-[#8fff00]">The Zigbee Club</span></h1>
                <h3 class="text-4xl mb-8 font-semibold">The <span class="text-[#8fff00]">CSE-IoT</span> Club</h3>
                <p class="text-3xl my-14">Lets connect and Create...</p>
                <div class="flex gap-10 mt-8 justify-center">            
                    <a href="https://github.com/ZigbeeFETSC" target="_blank" rel="noopener noreferrer" class="h-12 w-12 text-4xl  text-[#8fff00]"><i class="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/zigbee_ju" target="_blank" rel="noopener noreferrer"  class="h-12 w-12 text-4xl  text-[#8fff00]"><i class="fab fa-instagram"></i></a>            
                    <a href="https://chat.whatsapp.com/KaxOWNmnWx5C7niGCgd7s0" target="_blank" rel="noopener noreferrer" class="h-12 w-12 text-4xl  text-[#8fff00]"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/company/zigbee-club-fetju/" target="_blank" rel="noopener noreferrer" class="h-12 w-12 text-4xl  text-[#8fff00]"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>


        <div className="Feature_section" class="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] p-30 z-20 m-10">
            <h2 className="section-title" class="text-5xl mb-16 font-bold"><span class="text-[#8fff00]">Explore</span> The Hive</h2>
            <div className="Feature_grid" class="max-w-screen-2xl mx-auto grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-14 px-8 py-0">
                <FeatureCard fas="fas fa-microchip" title="IoT" para="Dive into the world of the Internet of Things."/>
                <FeatureCard fas="fas fa-calendar-alt" title="Events" para="From hackathons to expert talks—immerse yourself in workshops, competitions, and networking opportunities to learn, experience, and explore the vast world of IoT and cutting-edge technology !"/>
                <FeatureCard fas="fas fa-lightbulb" title="Blogs" para="Pushing the boundaries of what's possible in IoT and wireless communication."/>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center min-h-[calc(100vh-60px)]  z-20 ">
        <div className="showcase-content"class="bg-[rgba(13,17,23,0.3)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.1)] rounded-[12px] p-20 max-w-[1200px] flex flex-col items-center">
            <h2 className="section-title" class="text-5xl mb-4 font-bold">Our <span class="text-[#8fff00]">Strength</span></h2>
            <div className="tech-stats" class="bg-[rgba(13,17,23,0.3)] rounded-lg p-6 grid grid-cols-3 gap-16 mt-8">
                <TechStats sn="20+" sl="Events" />
                <TechStats sn="45+" sl="Club Members" />
                <TechStats sn="24/7" sl="Challenges" />
            </div>
        </div>
        </div>
        </>
    )
}