import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlobalSpotlight from '../components/GlobalSpotlight';
import tl from "../static/img/stark.jpg";
import dl from "../static/img/dl.jpg";
import sl from "../static/img/sl.jpg";
import tr from "../static/img/tr.jpg";

function TeamCard5({img, name, post, cate, about}){
    return(
        <>
<div className="mb-16 w-[28rem] rounded-[12px] z-10">
  <div className="group relative bg-blue w-[24rem] h-[30rem] border border-[rgba(255,255,255,0.1)] rounded-[12px] overflow-hidden">

    {/* Image */}
    <img 
      src={img} 
      className="w-full h-full object-cover rounded-[12px] transition-transform duration-500 group-hover:scale-110"
    />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 via-black/20 via-black/15 via-black/10 to-transparent transition-transform duration-500 group-hover:scale-105"></div>

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

export default function Test1() {
  const [activeCategory, setActiveCategory] = useState("leads");
  const gridRef = useRef(null); // ✅ spotlight target

  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  };

  return (
    <>
      <div className="flex items-center justify-center px-40 pb-10 pt-25 z-20">
        <div className="text-center m-0 z-2 p-8">
          <h2 className="text-5xl mb-6 font-bold">
            <span className="text-[#8fff00]">Our</span> Team
          </h2>
          <p className="text-xl mb-0">
            People with ambitions. Who fill the current in the IoT Circuits.
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-6 mb-12">
        <button
          onClick={() => setActiveCategory("leads")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeCategory === "leads"
              ? "bg-[#8fff00] text-[#8fff00] font-bold border"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Leads
        </button>
        <button
          onClick={() => setActiveCategory("core")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeCategory === "core"
              ? "bg-[#8fff00] text-[#8fff00]"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Core Members
        </button>
      </div>

      {/* Main container with spotlight */}
      <div
        ref={gridRef}
        className="bg-[rgba(13,17,23,0.3)] backdrop-blur-md m-25 mt-0 relative"
      >
        <GlobalSpotlight gridRef={gridRef} glowColor="0,174,255" />

        <div className="Wrap">
          <AnimatePresence mode="wait">
            {activeCategory === "leads" && (
              <motion.div
                key="leads"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex items-center flex-col mx-10"
              >
                <div className="flex items-center flex-col mx-0">
                  <div className="flex gap-2 text-[#8ff000] font-bold text-3xl mb-10 ">
                    <i className="fas fa-users-cog"></i>
                    <h3>Leads</h3>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-16">
                    <TeamCard5 name="Kiran" post="Lead" />
                    <TeamCard5 name="Lakshmi" post="Lead" />
                    <TeamCard5 img={tr} name="Saswath" post="Treasurer" />
                    <TeamCard5 img={tl} cate="Lead" name="Mayank" post="Tech" />
                    <TeamCard5 cate="Lead" name="Varshita" post="Tech" />
                    <TeamCard5 img={sl} cate="Lead" name="Stuti" post="Social Media" />
                    <TeamCard5 cate="Lead" name="Devraj" post="Social Media" />
                    <TeamCard5 img={dl} cate="Lead" name="Shivom" post="Design" />
                    <TeamCard5 cate="Lead" name="Chaithany" post="Design" />
                    <TeamCard5 cate="Lead" name="Sanskriti" post="Secretary" />
                    <TeamCard5 cate="Lead" name="Shyam" post="Vice Secretary" />
                    <TeamCard5 cate="Lead" name="Harsh" post="Out Reach" />
                    <TeamCard5 cate="Lead" name="Tejaswini" post="Out Reach" />
                  </div>
                </div>
              </motion.div>
            )}

            {activeCategory === "core" && (
              <motion.div
                key="core"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex items-center flex-col mx-10"
              >
                <div className="flex items-center flex-col mx-2">
                  <div className="flex gap-2 text-[#8ff000] font-bold text-3xl mb-10 ">
                    <i className="fas fa-users-cog"></i>
                    <h3>Core Members</h3>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-16">
                    <TeamCard5 cate="Core" name="Chaithany" post="Design" />
                    <TeamCard5 cate="Core" name="Sanskriti" post="Secretary" />
                    <TeamCard5 cate="Core" name="Shyam" post="Vice Secretary" />
                    <TeamCard5 cate="Core" name="Harsh" post="Out Reach" />
                    <TeamCard5 cate="Core" name="Tejaswini" post="Out Reach" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
