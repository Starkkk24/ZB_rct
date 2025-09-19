import img from '../static/img/stark.jpg'

export default function Teams(){
    return(
        <>
        <div class="  flex items-center justify-center  px-40 pb-15 pt-25 z-20">
            <div class="text-center  m-0 z-2 p-8">
                <h2 className="section-title" class="text-5xl mb-6 font-bold"><span class="text-[#8fff00]">Our</span> Team</h2> 
                <p class=" text-xl mb-0">Peope with ambitions. Who fill the current in the IoT Circuits.</p>
            </div>
        </div>

        <div className="Wrap">
            <div class="flex flex-col mx-55">
                <div class="flex gap-2 text-[#8ff000] font-bold text-3xl mb-10 ">
                    <i class="fas fa-users-cog"></i>
                    <h3>Leads</h3>                    
                </div>

                <div class="grid grid-cols-3 gap-4">
                    <div class="mb-16">
                        {/* <img src={img} class="w-[18rem] h-[24rem]"></img> */}
                        <div class="bg-blue w-[24rem] h-[28rem] border border-[rgba(255,255,255,0.1)] rounded-[12px]"></div>
                        <div>para</div>
                    </div>                    
                    <div class="mb-16">
                        {/* <img src={img} class="w-[18rem] h-[24rem]"></img> */}
                        <div class="bg-blue w-[24rem] h-[28rem] border border-[rgba(255,255,255,0.1)] rounded-[12px]"></div>
                        <div>para</div>
                    </div>                    
                    <div class="mb-16">
                        {/* <img src={img} class="w-[18rem] h-[24rem]"></img> */}
                        <div class="bg-blue w-[24rem] h-[28rem] border border-[rgba(255,255,255,0.1)] rounded-[12px]"></div>
                        <div>para</div>
                    </div>                    
                    <div class="mb-16">
                        {/* <img src={img} class="w-[18rem] h-[24rem]"></img> */}
                        <div class="bg-blue w-[24rem] h-[28rem] border border-[rgba(255,255,255,0.1)] rounded-[12px]"></div>
                        <div>para</div>
                    </div>                    
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>

        </div>
        </>
    )
}