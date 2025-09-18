import logo from '../static/img/zgb.png'
import {Outlet,Link} from 'react-router-dom'

function NavBar() {
        return(
        <>
        <nav class="fixed top-0 left-0 w-full z-50 flex flex-row justify-between pt-3 px-8 bg-[#000000dc] ">
        {/* <nav class="fixed top-0 left-0 w-full z-50 flex flex-row justify-between px-8 bg-[#0a0a0a60] border-b border-b-[rgba(255,255,255,0.1)]"> */}
        {/* <div class="flex gap-20"> */}
            <a href='/'>
            <div className="nav-left" class="flex flex-row items-center" >
                <div className="logo"><img src={logo} alt='logo' class="size-19"></img></div>
                <div className="head" ><h1 class="text-4xl font-semibold text-[#8fff00]">Zigbee</h1></div>
            </div>
            </a>
            <div className="nav-middle" class="flex flex-row items-center gap-8 bg-[rgba(33,36,39,0.7)] border-0 rounded-3xl px-6 py-4 m-4">
                <div className="nav-links" >
                    <ul class="flex flex-row gap-12 px-4 justify-center">
                        <li><a href="/" class="text-[rgba(255,255,255,0.8)]">Home</a></li>
                        <li><a href="/about"  class="text-[rgba(255,255,255,0.8)]">About</a></li>
                        <li><a href="/team"  class="text-[rgba(255,255,255,0.8)]">Team</a></li>
                        <li><a href="/event"  class="text-[rgba(255,255,255,0.8)]">Events</a></li>
                        <li><a href="#"  class="text-[rgba(255,255,255,0.8)]">Blogs</a></li>
                        {/* <li><a href="#"  class="text-[rgba(255,255,255,0.8)]">Blog</a></li> */}
                        {/* <li><a href="#"  class="text-[rgba(255,255,255,0.8)]">Contact</a></li> */}
                        {/* <li><a href="#"  class="text-[rgba(255,255,255,0.8)]">Feedback</a></li> */}
                    </ul>
                </div>
                {/* <div className="nav-signin">
                    <div classameN="account-dropdown">
                        <button className="account-btn" class="text-[#8fff00] border-[#8fff00]">Account </button>
                    </div>
                </div> */}
            </div>
        {/* </div> */}
        <div className='nav-right' class="flex flex-row items-center gap-8 bg-[rgba(33,36,39,0.7)] border-0 rounded-3xl px-6 py-4 m-4">
                <ul class="flex flex-row gap-12 px-4 justify-center">
                    <li><a href="#"  class="text-[rgba(255,255,255,0.8)]">Contact</a></li>
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
        <div class="flex flex-row  justify-between px-34 py-8 ">
            <div className='footer_section' class="flex flex-col items-center">
                    <h3 class="text-[#8fff00] text-2xl mb-5 font-semibold " style={{ textShadow: "0 0 10px rgba(0, 242, 255, 0.3)"}}>The Zigbee Club</h3>
                    <p class="text-[rgba(255,255,255,0.4)] text-xl">Connecting and Creating Together</p>
                </div>
            <div className='footer_section' class="flex flex-col items-center">
                    <h4 class="mb-5 font-semibold text-2xl">Quick Links</h4>
                    <ul class="flex flex-col items-center" >
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)] text-xl">Home</a></li>
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)] text-xl">Blog</a></li>
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)] text-xl">Contact</a></li>
                    </ul>
            </div>
            <div className='footer_section' class="flex flex-col items-center">
                    <h4 class="mb-5 font-semibold text-2xl">Legal</h4>
                    <ul class="flex flex-col items-center" >
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)] text-xl">Terms & Conditions</a></li>
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)] text-xl">Privacy Policy</a></li>
                    </ul>
            </div>
            <div className='footer_section' class="flex flex-col items-center">
                    <h4 class="mb-5 font-semibold text-2xl">Connect With Us</h4>
                    <div className="social-links" class="flex gap-7">
                        <a class="text-3xl" href="https://www.linkedin.com/company/zigbee-club-fetju/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                        <a class="text-3xl" href="https://github.com/ZigbeeFETSC" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                        <a class="text-3xl" href="https://www.instagram.com/zigbee_ju" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                        <a class="text-3xl" href="https://chat.whatsapp.com/KaxOWNmnWx5C7niGCgd7s0" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>
                    </div>
            </div>
        </div>
        <div>
            <p class="border-t border-t-[rgba(255,255,255,0.1)] py-4 text-[rgba(255,255,255,0.4)] text-center text-xl">&copy; 2025 The Zigbee Club. All rights reserved.</p>
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