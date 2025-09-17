import logo from '../static/img/zgb.png'
import {Outlet,Link} from 'react-router-dom'

function NavBar() {
        return(
        <>
        <nav class="fixed top-0 left-0 w-full z-50 flex flex-row justify-between bg-[rgba(13,17,23,0.95)] px-16">
            <div className="nav-left" class="flex flex-row items-center" >
                <div className="logo"><img src={logo} alt='logo' class="size-17"></img></div>
                <div className="head" ><h1 class="text-3xl font-semibold text-[#8fff00]">Zigbee</h1></div>
            </div>
            <div className="nav-right" class="flex flex-row items-center gap-8">
                <div className="nav-links" >
                    <ul class="flex flex-row gap-12 px-4">
                        <li><a href="#" class="text-[rgba(255,255,255,0.8)]">Home</a></li>
                        <li><a href="#"  class="text-[rgba(255,255,255,0.8)]">About</a></li>
                        <li><a href="#"  class="text-[rgba(255,255,255,0.8)]">Events</a></li>
                        <li><a href="#"  class="text-[rgba(255,255,255,0.8)]">Gallery</a></li>
                        <li><a href="#"  class="text-[rgba(255,255,255,0.8)]">Blog</a></li>
                        <li><a href="#"  class="text-[rgba(255,255,255,0.8)]">Contact</a></li>
                        <li><a href="#"  class="text-[rgba(255,255,255,0.8)]">Feedback</a></li>
                    </ul>
                </div>
                <div className="nav-signin">
                    <div classameN="account-dropdown">
                        <button className="account-btn" class="text-[#8fff00] border-[#8fff00]">Account </button>
                    </div>
                </div>

            </div>
        </nav>
        </>
    )
}

function Footer() {
    return(
        <>
        <footer class="flex flex-col bg-[rgba(13,17,23,0.95)] ">
        <div class="flex flex-row  justify-between px-34 py-8 ">
            <div className='footer_section' class="flex flex-col items-center">
                    <h3 class="text-[#8fff00] text-xl mb-3 font-semibold" style={{ textShadow: "0 0 10px rgba(0, 242, 255, 0.3)"}}>The Zigbee Club</h3>
                    <p class="text-[rgba(255,255,255,0.4)]">Connecting and Creating Together</p>
                </div>
            <div className='footer_section' class="flex flex-col items-center">
                    <h4 class="mb-3 font-semibold">Quick Links</h4>
                    <ul class="flex flex-col items-center" >
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)]">Home</a></li>
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)]">Blog</a></li>
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)]">Contact</a></li>
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)]">Feedback</a></li>
                    </ul>
            </div>
            <div className='footer_section' class="flex flex-col items-center">
                    <h4 class="mb-3 font-semibold">Legal</h4>
                    <ul class="flex flex-col items-center" >
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)]">Terms & Conditions</a></li>
                        <li><a href="#" class="text-[rgba(255,255,255,0.4)]">Privacy Policy</a></li>
                    </ul>
            </div>
            <div className='footer_section' class="flex flex-col items-center">
                    <h4 class="mb-3 font-semibold">Connect With Us</h4>
                    <div class="social-links">
                        <a href="https://www.linkedin.com/company/zigbee-club-fetju/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/ZigbeeFETSC" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/zigbee_ju" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                        <a href="https://chat.whatsapp.com/KaxOWNmnWx5C7niGCgd7s0" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>
                    </div>
            </div>
        </div>
        <div>
            <p class="border-t border-t-[rgba(255,255,255,0.1)] py-4 text-[rgba(255,255,255,0.4)] text-center">&copy; 2025 The Zigbee Club. All rights reserved.</p>
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