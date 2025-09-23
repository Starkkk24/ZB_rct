import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import {Link} from 'react-router-dom'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";



function FeatureCard({fas, title, para}){
    return(
        <>
        <div className="Feature_card" class="bg-[rgba(13,17,23,0.3)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-[12px] p-6 transition-transform duration-300 ease-in-out">
            <div className="feature-icon" class="text-3xl mb-6 text-[#8fff00]">
                <i class={fas}></i>
            </div>

            <h3 class="text-[#ffffff] mb-4 text-2xl font-bold">{title}</h3>
            <p class="text-[rgba(255,255,255,0.7)]  leading-[1.6]">{para}</p>
        </div>
        </>
    )
}
function HotCard({fas, title, para}){
    return(
        <>
        <div className="Feature_card" class="bg-[rgba(13,17,23,0.3)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-[12px] p-4 transition-transform duration-300 ease-in-out">
            <div className="feature-icon" class="text-2xl mb-6 text-[#8fff00]">
                <i class="fa-solid fa-bell"></i>
            </div>
            <h3 class="text-[#8fff00] mb-4 text-2xl font-bold">{title}</h3>
            <p class="text-[rgba(255,255,255,0.7)] leading-[1.6]">{para}</p>
            <button>
                Go On!
            </button>
        </div>
        </>
    )
}

// function HotCardsSlider() {
//   return (
//     <Swiper
//       effect={"coverflow"}
//       grabCursor={true}
//       centeredSlides={true}
//       slidesPerView={3} // middle + half of left & right
//       spaceBetween={-60} // overlap a little
//       coverflowEffect={{
//         rotate: 0, // keep them flat, not rotated
//         stretch: 0,
//         depth: 200, // depth for inward cube-like feel
//         modifier: 2, // exaggerate effect
//         slideShadows: true,
//       }}
//       navigation={true}
//       modules={[EffectCoverflow, Navigation]}
//       className="w-[60rem] h-[30rem]"
//     ></Swiper>
//   )
// }

function TechStats({sn, sl}){
    return(
        <>
        <div className="stat-item" class=" flex flex-col text-center p-4 bg-[rgba(255,255,255,0.05)] rounded-lg backdrop-blur-[10px] border border-[rgba(255,215,0,0.1)] transition-all duration-300 ease-in-out"> 
            <span className="stat-number" class="block text-2xl font-bold text-[#00f2ff] px-0 [text-shadow:0_0_15px_rgba(0,242,255,0.3)]">{sn}</span>
            <span className="stat-label" class="text-[#ffffff] my-2">{sl}</span>
        </div>
        </>
    )
}
// function HotCardsSlider() {
//   return (
// <Swiper
//   effect={"coverflow"}
//   grabCursor={true}
//   centeredSlides={true}
//   slidesPerView={3}          // middle + left + right partially visible
//   spaceBetween={-60}         // overlap
//   slideToClickedSlide={true} // click side cards to center
//   watchSlidesProgress={true} // required for click-to-center
//   coverflowEffect={{
//     rotate: 20,      // rotate side slides slightly
//     stretch: 0,
//     depth: 200,      // inward depth for 3D feel
//     modifier: 1.5,   // exaggerate effect
//     slideShadows: true,
//     scale: 0.85,     // side slides slightly smaller
//   }}
//   modules={[EffectCoverflow]}
//   className="w-[60rem] h-[30rem]"
// >
//   <SwiperSlide>
//     <HotCard
//       title="Zigbee New Members Announced !"
//       para={
//         <>
//           The Results of the selected Core Members of Zigbee Club 2025-2026
//           have been announced.<br />
//           Please Check it out! 👉
//         </>
//       }
//     />
//   </SwiperSlide>

//   <SwiperSlide>
//     <HotCard
//       title="Another Announcement"
//       para={
//         <>
//           Something interesting is coming!<br />
//           Stay tuned 🚀
//         </>
//       }
//     />
//   </SwiperSlide>

//   <SwiperSlide>
//     <HotCard
//       title="Last Update"
//       para={
//         <>
//           This is the final update.<br />
//           Thank you 🙌
//         </>
//       }
//     />
//   </SwiperSlide>
// </Swiper>


//   );
// }
function HotCardsSlider() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}            
      spaceBetween={0}              // remove extra gap so clicks are detected
      slideToClickedSlide={true}    // allow clicking side slides to center
      watchSlidesProgress={true}    // required for proper detection
      loop={true}                   // loop helps with click-to-center
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1.5,
        slideShadows: true,
        scale: 0.85,
      }}
      modules={[EffectCoverflow]}
      className="w-[90rem] h-[22rem]"
    >


      <SwiperSlide>
        <HotCard
          title="Club Interaction"
          para={
            <>
              We have an Interaction session with all the first years.<br />
              On 23rd Sept at 08:45 in Room no- 322-A FET.
            </>
          }
        />
      </SwiperSlide>

      <SwiperSlide>
        <HotCard
          title="Zigbee New Members Announced !"
          para={
            <>
              The Results of the selected Core Members of Zigbee Club 2025-2026
              have been announced.<br />
              Please Check it out! 👉
            </>
          }
        />
      </SwiperSlide> 

      <SwiperSlide>
        <HotCard
          title="Event Update"
          para={
            <>
              A crazy is coming! on the first week of Octoebr.<br />
              Stay tuned 🚀
            </>
          }
        />
      </SwiperSlide>

    </Swiper>
  );
}

export default function Home(){
    return(
        <>
        <div class="relative  flex items-center justify-center  p-30 pt-0 mb-10 pb-0  z-20 m-10 mt-30">
            <div class="text-center relative m-0 z-2">
                <h1 class="text-6xl mb-4 font-bold">Welcome to <span class="text-[#8fff00]">The Zigbee Club</span></h1>
                <h3 class="text-3xl mb-8 font-semibold">The <span class="text-[#8fff00]">CSE-IoT</span> Club</h3>
                <p class="text-xl my-10">Lets connect and Create...</p>
                <div class="flex gap-8 mt-8 justify-center">            
                    <a href="https://github.com/ZigbeeFETSC" target="_blank" rel="noopener noreferrer" class="h-12 w-12 text-3xl  text-[#8fff00]  transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"><i class="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/zigbee_ju" target="_blank" rel="noopener noreferrer"  class="h-12 w-12 text-3xl  text-[#8fff00]  transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"><i class="fab fa-instagram"></i></a>            
                    <a href="https://chat.whatsapp.com/KaxOWNmnWx5C7niGCgd7s0" target="_blank" rel="noopener noreferrer" class="h-12 w-12 text-3xl  text-[#8fff00]  transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/company/zigbee-club-fetju/" target="_blank" rel="noopener noreferrer" class="h-12 w-12 text-3xl  text-[#8fff00]  transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>

        {/* <div className=" rounded-[12px] mx-45 flex flex-row gap-8">
                <HotCard title="Zigbee New Members Announced !" para={<>The Results of the selected Core Members of Zigbee Club 2025-2026 have been announced.<br/>Please Check it out! 👉</>}/>
                <HotCard title="Zigbee New Members Announced !" para={<>The Results of the selected Core Members of Zigbee Club 2025-2026 have been announced.<br/>Please Check it out! 👉</>}/>
                <HotCard title="Zigbee New Members Announced !" para={<>The Results of the selected Core Members of Zigbee Club 2025-2026 have been announced.<br/>Please Check it out! 👉</>}/>
        </div> */}

        <div className=" ">
{/* <Swiper
  effect={"cube"}
  grabCursor={true}
  cubeEffect={{
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }}
  navigation={true}
  modules={[EffectCube, Navigation]}
  className="w-[100rem] h-[20rem]" // adjust size
>
  <SwiperSlide>
    <HotCard
      title="Zigbee New Members Announced !"
      para={
        <>
          The Results of the selected Core Members of Zigbee Club 2025-2026
          have been announced.<br />
          Please Check it out! 👉
        </>
      }
    />
  </SwiperSlide>

  <SwiperSlide>
    <HotCard
      title="Zigbee New Members Announced !"
      para={
        <>
          Another slide with cube effect.<br />
          Swipe or click arrows 👉
        </>
      }
    />
  </SwiperSlide>

  <SwiperSlide>
    <HotCard
      title="Zigbee New Members Announced !"
      para={
        <>
          One more announcement.<br />
          Try the cube spin! 🔄
        </>
      }
    />
  </SwiperSlide>

</Swiper> */}
<HotCardsSlider/>


        </div>




        <div className="Feature_section" class="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-30 py- z-20 mx-10 my-0">
            <h2 className="section-title" class="text-4xl mb-16 font-bold"><span class="text-[#8fff00]">Explore</span> The Hive</h2>
            <div className="Feature_grid" class="max-w-screen-2xl mx-auto grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-14 px-8 py-0">
                <Link to="/team" ><FeatureCard fas="fa-solid fa-users-line" title="Teams" para="The Power Source of the IoT circuits."/></Link>
                {/* <FeatureCard fas="fas fa-microchip" title="IoT" para="Dive into the world of the Internet of Things."/> */}
                <Link to="/event"><FeatureCard fas="fas fa-calendar-alt" title="Events" para="From hackathons to expert talks—immerse yourself in workshops, competitions, and networking opportunities to learn, experience, and explore the vast world of IoT and cutting-edge technology !"/></Link>
                <Link to="/blogs"><FeatureCard fas="fas fa-lightbulb" title="Blogs" para="Pushing the boundaries of what's possible in IoT and wireless communication."/></Link>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center min-h-[calc(100vh-60px)]  z-20 ">
        <div className="showcase-content"class="bg-[rgba(13,17,23,0.3)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.1)] rounded-[12px] p-20 max-w-[1200px] flex flex-col items-center">
            <h2 className="section-title" class="text-4xl mb-4 font-bold">Our <span class="text-[#8fff00]">Vision</span></h2>
            <div className="tech-stats" class="bg-[rgba(13,17,23,0.3)] rounded-lg p-6 grid grid-cols-3 gap-16 mt-8">
                <TechStats sn="Collaborative" sl="Events" />
                <TechStats sn="Open" sl="Forum" />
                <TechStats sn="Weekly" sl="Challenges" />
            </div>
        </div>
        </div>




        </>
    )
}