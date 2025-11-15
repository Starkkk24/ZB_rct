

export default function Contact(){
    return(
        <>
        <div class="  flex items-center justify-center   px-40 pb-5 pt-25 z-20">
            <div class="text-center  m-0 z-2 p-8">
                <h2 className="special-font text-5xl font-semibold" class="text-5xl mb-0 font-bold"><span className="text-[#8fff00] special-font text-5xl font-semibold">Contact</span> Us</h2> 
            </div>    
        </div>
{/* Main Content Container */}
  <div className="flex flex-row justify-center">
    
        <div className="flex flex-col gap-6 p-10 mb-20 justify-center bg-[rgba(33,36,39,0.06)]  rounded-2xl">
          {/* field */}
              <input type="text" placeholder="Name"  className="flex p-4  w-100 rounded-xl bg-[rgba(255,255,255,0.1)] backdrop-blur-lg  " />      
              <input type="text" placeholder="Email" className="flex p-4  w-100 rounded-xl bg-[rgba(255,255,255,0.1)] backdrop-blur-lg  " />      
              <input type="text" placeholder="Subject" className="flex p-4  w-100 rounded-xl bg-[rgba(255,255,255,0.1)] backdrop-blur-lg  " />      
              <input  type="text" placeholder="Message" className="flex p-4  w-100 h-40 rounded-xl bg-[rgba(255,255,255,0.1)] backdrop-blur-lg  "/>      
        </div>    
  </div>  
        </>
    )
}