import logo from '../static/img/zgb.png'
import {Outlet,Link, useLocation} from 'react-router-dom'
import { useState } from 'react';

function NavBar() {
  const location = useLocation();
  const active = location.pathname;

        return(
        <>
        <nav class="fixed top-0 left-0 w-full z-50 flex flex-row justify-between pt-0 px-4 bg-[#000000dc] ">
            <a href='/'>
            <div className="nav-left" class="flex flex-row items-center" >
                <div className="logo"><img src={logo} alt='logo' class="size-14"></img></div>
                <div className="head" ><h1 class="special-font text-3xl font-semibold text-[#8fff00]">Zigbee</h1></div>
            </div>
            </a>
            <div className="nav-middle" class="flex flex-row items-center gap-8 bg-[rgba(33,36,39,0.7)]   backdrop-blur-md border-0 rounded-3xl px-6 py-0 m-4">
                <div className="nav-links" >
                    <ul class="flex flex-row gap-12 px-4 justify-center text-sm">
                        <li className="special-font "><Link  to="/"  className={`transition-colors ${active === "/" ? "text-[#8fff00] font-bold" : "text-[rgba(255,255,255,0.8)]"}`}>Home</Link></li>
                        <li className="special-font "><Link  to="/about"   className={`transition-colors ${active === "/about" ? "text-[#8fff00] font-bold" : "text-[rgba(255,255,255,0.8)]"}`}>About</Link></li>
                        <li className="special-font "><Link  to="/team"   className={`transition-colors ${active === "/team" ? "text-[#8fff00] font-bold" : "text-[rgba(255,255,255,0.8)]"}`}>Team</Link></li>
                        {/* <li className="special-font "><Link  to="/tp"   className={`transition-colors ${active === "/tp" ? "text-[#8fff00] font-bold" : "text-[rgba(255,255,255,0.8)]"}`}>Team2</Link></li> */}
                        {/* <li className="special-font "><Link  to="/t1"   className={`transition-colors ${active === "/t1" ? "text-[#8fff00] font-bold" : "text-[rgba(255,255,255,0.8)]"}`}>Team3</Link></li> */}
                        <li className="special-font "><Link  to="/event"  className={`transition-colors ${active === "/event" ? "text-[#8fff00] font-bold" : "text-[rgba(255,255,255,0.8)]"}`}>Events</Link></li>
                        {/* <li className="special-font "><Link  to="/blogs"  className={`transition-colors ${active === "/blogs" ? "text-[#8fff00] font-bold" : "text-[rgba(255,255,255,0.8)]"}`}>Blogs</Link></li> */}
                    </ul>
                </div>
            </div>
        {/* </div> */}
        <div className='nav-right' class="flex flex-row items-center gap-8 bg-[rgba(33,36,39,0.7)]  backdrop-blur-md border-0 rounded-3xl px-6 py-4 m-4">
                <ul class="flex flex-row gap-12 px-4 justify-center text-sm">
                    <li className='special-font '><Link to="/contact"  className={`transition-colors ${active === "/contact" ? "text-[#8fff00] font-bold" : "text-[rgba(255,255,255,0.8)]"}`}>Contact</Link></li>
                </ul>
        </div>
        </nav>
        </>
    )
}

function Footer() {
    return(
        <>
        <footer class="flex flex-col bg-[#000000dc] border-t border-t-[rgba(255,255,255,0.1)]">
        {/* <footer class="flex flex-col bg-[rgba(13,17,23,0.95)] "> */}
        <div class="flex flex-row  justify-between px-25 py-8 ">
            <div className='footer_section' class="flex flex-col items-center">
                    <h3 class="text-[#8fff00] special-font text-2xl mb-4 font-semibold" style={{ textShadow: "0 0 10px rgba(0, 242, 255, 0.3)"}}>The Zigbee Club</h3>
                    <p class="text-[rgba(255,255,255,0.4)] ">Connecting and Creating Together</p>
                </div>
            <div className='footer_section' class="flex flex-col items-center">
                    <h4 class="mb-5 font-semibold text-xl">Quick Links</h4>
                    <ul class="flex flex-col items-center" >
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)]">Home</a></li>
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)]">Blog</a></li>
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)]">Contact</a></li>
                    </ul>
            </div>
            <div className='footer_section' class="flex flex-col items-center">
                    <h4 class="mb-5 font-semibold text-xl">Legal</h4>
                    <ul class="flex flex-col items-center" >
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)] ">Terms & Conditions</a></li>
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)] ">Privacy Policy</a></li>
                    </ul>
            </div>
            <div className='footer_section' class="flex flex-col items-center">
                    <h4 class="mb-3 font-semibold text-xl">Connect With Us</h4>
                    <div className="social-links" class="flex gap-7">
                        <a class="text-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110" href="https://www.linkedin.com/company/zigbee-club-fetju/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                        <a class="text-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110" href="https://github.com/ZigbeeFETSC" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                        <a class="text-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110" href="https://www.instagram.com/zigbee_ju" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                        <a class="text-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110" href="https://chat.whatsapp.com/KaxOWNmnWx5C7niGCgd7s0" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>
                    </div>
            </div>
        </div>
        <div>
            <p class="border-t border-t-[rgba(255,255,255,0.1)] py-2 text-[rgba(255,255,255,0.4)] text-center">&copy; 2025 The Zigbee Club. All rights reserved.</p>
        </div>
        </footer>
        </>
    )
}

export default function Nav() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <NavBar />

    <main className="flex-grow">
      <Outlet />
    </main>

      <Footer />
    </div>
  );
}
