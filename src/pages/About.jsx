import { useState, useEffect, useRef } from 'react'

export default function About() {
  const [expandedCard, setExpandedCard] = useState(null)
  const [activeTimelineItem, setActiveTimelineItem] = useState(null)
  const cardsContainerRef = useRef(null)

  const handleCardClick = (cardId, e) => {
    if (e.target.tagName === 'A' || e.target.closest('a')) {
      return
    }
    if (expandedCard === cardId) {
      setExpandedCard(null)
      return
    }
    setExpandedCard(cardId)
  }

  const resetAllCards = () => {
    setExpandedCard(null)
  }

  const handleTimelineClick = (year, e) => {
    if (e.target.tagName === 'A' || e.target.closest('a')) {
      return
    }
    setActiveTimelineItem(activeTimelineItem === year ? null : year)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (expandedCard && cardsContainerRef.current) {
        const clickedCard = e.target.closest('[data-card]')
        if (!clickedCard) {
          resetAllCards()
        }
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [expandedCard])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.15 }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [expandedCard])

  const timelineData = [
    {
      year: '2018',
      title: 'Club Foundation',
      description: 'A small group of 15 students established the club with a focus on Arduino-based projects.',
      details: {
        text: 'Our humble beginnings started with weekly meetings in a small classroom, where we explored the world of IoT together.',
        achievements: [
          'Organized first Arduino workshop with 30+ attendees',
          'Secured initial funding from the engineering department',
          'Established core leadership team and club constitution'
        ]
      }
    },
    {
      year: '2019',
      title: 'First Annual IoT Hackathon',
      description: 'Successfully organized our first campus-wide hackathon with over 100 participants.',
      details: {
        text: 'Our inaugural hackathon brought together students from various departments to collaborate on innovative IoT solutions.',
        achievements: [
          'Secured sponsorships from 5 tech companies',
          'Implemented 12 working IoT prototypes in 48 hours',
          'Featured in campus newspaper and local tech blog'
        ]
      }
    },
    {
      year: '2020',
      title: 'Virtual Learning Initiative',
      description: 'Adapted to the pandemic by creating virtual workshops and remote collaboration tools.',
      details: {
        text: 'When the pandemic hit, we quickly pivoted to online formats to continue our mission of IoT education.',
        achievements: [
          'Developed custom remote lab access for hardware testing',
          'Conducted 15+ virtual workshops with 200+ total participants',
          'Created at-home IoT kits for members to continue hands-on learning'
        ]
      }
    },
    {
      year: '2021',
      title: 'Industry Partnership Program',
      description: 'Established formal partnerships with leading tech companies for mentorship and internships.',
      details: {
        text: 'We formalized relationships with industry leaders to provide real-world experience to our members.',
        achievements: [
          'Secured 8 corporate partnerships with tech industry leaders',
          'Placed 12 members in paid summer internships',
          'Launched monthly industry speaker series with experts in IoT fields'
        ]
      }
    },
    {
      year: '2022',
      title: 'Campus IoT Infrastructure Project',
      description: 'Implemented a smart campus initiative with sensors and dashboards across university facilities.',
      details: {
        text: 'We worked with university administration to deploy IoT solutions that improved campus efficiency and student experience.',
        achievements: [
          'Designed and deployed 50+ environmental sensors across campus',
          'Created real-time dashboards for temperature, occupancy, and energy usage',
          'Reduced campus energy consumption by 12% through smart monitoring'
        ]
      }
    },
    {
      year: '2023',
      title: 'National Recognition',
      description: 'Received the "Outstanding Student Organization" award at the National IoT Conference.',
      details: {
        text: 'Our efforts were recognized at the national level, validating our approach to student-led IoT innovation.',
        achievements: [
          'Won top honors among 200+ competing student organizations',
          'Published research paper on IoT education methodologies',
          'Expanded membership to include students from 5 different colleges'
        ]
      }
    }
  ]

  const getCardClasses = (cardId) => {
    const base = 'rounded-2xl overflow-hidden bg-[rgba(20,25,35,0.32)] backdrop-blur-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.1)] transition-all duration-500 cursor-pointer'
    
    if (expandedCard === cardId) {
      return `${base} flex-[3] border-[3px] border-[#8fff00] shadow-[0_0_30px_rgba(143,255,0,0.4),0_0_60px_rgba(0,242,255,0.2)] bg-[rgba(20,25,35,0.5)] backdrop-blur-[15px]`
    }
    
    if (expandedCard && expandedCard !== cardId) {
      return `${base} flex-[0_0_200px] opacity-70 hover:opacity-90`
    }
    
    return `${base} max-h-[130px] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] hover:border-[#8fff00]`
  }

  const getCardHeaderClasses = (cardId) => {
    const base = 'flex items-center'
    if (expandedCard === cardId) {
      return `${base} p-8 pb-6 border-b-2 border-[rgba(143,255,0,0.3)]`
    }
    return `${base} p-6 border-b-0`
  }

  const getIconClasses = (cardId) => {
    const base = 'rounded-full bg-gradient-to-br from-[rgba(143,255,0,0.15)] to-[rgba(0,242,255,0.15)] flex items-center justify-center text-[#00ff4c] border border-[rgba(0,242,255,0.3)] transition-all duration-500'
    
    if (expandedCard === cardId) {
      return `${base} w-[70px] h-[70px] min-w-[70px] text-[2rem] bg-gradient-to-br from-[rgba(143,255,0,0.4)] to-[rgba(0,242,255,0.4)] shadow-[0_0_20px_rgba(143,255,0,0.5)] border-[2px] border-[#8fff00] mr-8`
    }
    
    if (expandedCard && expandedCard !== cardId) {
      return `${base} w-[40px] h-[40px] min-w-[40px] text-[1rem] mr-4`
    }
    
    return `${base} w-[50px] h-[50px] min-w-[50px] mr-6 text-[1.3rem] hover:scale-110 hover:rotate-[5deg] hover:bg-gradient-to-br hover:from-[rgba(143,255,0,0.2)] hover:to-[rgba(0,242,255,0.2)]`
  }

  const getTitleClasses = (cardId) => {
    const base = 'text-white m-0'
    if (expandedCard === cardId) {
      return `${base} text-[2.5rem]`
    }
    if (expandedCard && expandedCard !== cardId) {
      return `${base} text-[1rem]`
    }
    return `${base} text-[1.8rem]`
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto py-30 px-4 pb-16">
      <div className="text-center mb-12" data-animate>
        <h1 className="special-font text-5xl font-semibold mb-15">
          About <span className="text-[#8fff00]">The Zigbee</span> Club
          <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-[60px] h-1 bg-[#8fff00] rounded"></span>
        </h1>
        {/* <p className="text-[rgba(255,255,255,0.6)] text-[1.1rem] mt-6">Learn more about our organization</p> */}
      </div>
      
      <div 
        ref={cardsContainerRef}
        className={`transition-all duration-500 ${
          expandedCard 
            ? 'flex gap-6 items-stretch' 
            : 'grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6'
        }`}
      >
        {/* Mission Card */}
        <div
          data-card="mission"
          className={getCardClasses('mission')}
          onClick={(e) => handleCardClick('mission', e)}
          style={{ animationDelay: '0s' }}
        >
          <div className={getCardHeaderClasses('mission')}>
            <div className={getIconClasses('mission')}>
              <i className="fas fa-bullseye"></i>
            </div>
            <h2 className={getTitleClasses('mission')}>Our Mission</h2>
          </div>
          
          {expandedCard === 'mission' && (
            <div className="p-8">
              <p className="text-[rgba(255,255,255,0.6)] leading-relaxed mb-6 text-[1.05rem]">
                The CSE-IoT Club is dedicated to fostering a dynamic environment where computer science and engineering students can explore the fascinating world of Internet of Things.
              </p>
              
              <p className="text-[rgba(255,255,255,0.6)] leading-relaxed mb-6 text-[1.05rem]">Our mission is to:</p>
              <ul className="mb-8">
                <li className="mb-3 text-[rgba(255,255,255,0.6)]">
                  <span className="bg-gradient-to-r from-[#8fff00] to-[#00ff4c] bg-clip-text text-transparent font-bold">Educate</span> - Provide hands-on learning experiences and workshops in IoT technologies
                </li>
                <li className="mb-3 text-[rgba(255,255,255,0.6)]">
                  <span className="bg-gradient-to-r from-[#8fff00] to-[#00ff4c] bg-clip-text text-transparent font-bold">Innovate</span> - Encourage creative problem-solving through IoT projects and hackathons
                </li>
                <li className="mb-3 text-[rgba(255,255,255,0.6)]">
                  <span className="bg-gradient-to-r from-[#8fff00] to-[#00ff4c] bg-clip-text text-transparent font-bold">Connect</span> - Build a community of like-minded students, faculty, and industry professionals
                </li>
                <li className="mb-3 text-[rgba(255,255,255,0.6)]">
                  <span className="bg-gradient-to-r from-[#8fff00] to-[#00ff4c] bg-clip-text text-transparent font-bold">Empower</span> - Equip students with the skills and knowledge needed for careers in IoT
                </li>
              </ul>
              
              <div className="flex justify-around flex-wrap gap-6 mt-12 text-center max-sm:flex-col max-sm:gap-8">
                {[
                  { number: '500+', label: 'Active Members' },
                  { number: '50+', label: 'Projects Completed' },
                  { number: '25+', label: 'Workshops Per Year' },
                  { number: '12+', label: 'Industry Partners' }
                ].map((stat, idx) => (
                  <div key={idx} data-animate className="stat-item flex flex-col items-center">
                    <div className="text-[2.5rem] font-bold text-[#00ff4c] mb-2">{stat.number}</div>
                    <div className="text-[rgba(255,255,255,0.6)] text-[0.9rem] uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* History Card */}
        <div
          data-card="history"
          className={getCardClasses('history')}
          onClick={(e) => handleCardClick('history', e)}
          style={{ animationDelay: '0.2s' }}
        >
          <div className={getCardHeaderClasses('history')}>
            <div className={getIconClasses('history')}>
              <i className="fas fa-history"></i>
            </div>
            <h2 className={getTitleClasses('history')}>Our History</h2>
          </div>
          
          {expandedCard === 'history' && (
            <div className="p-8 overflow-y-auto max-h-[70vh]">
              <p className="text-[rgba(255,255,255,0.6)] leading-relaxed mb-8 text-[1.05rem]">
                The CSE-IoT Club was founded in 2018 by a group of passionate engineering students who recognized the growing importance of IoT in the technology landscape.
              </p>
              
              <div className="relative my-8 pl-8 max-md:pl-6">
                <div className="absolute left-[7px] top-0 h-full w-0.5 bg-gradient-to-b from-[#8fff00] to-[#00ff4c] max-md:left-[5px]"></div>
                
                {timelineData.map((item, index) => (
                  <div
                    key={item.year}
                    data-animate
                    className={`timeline-item relative mb-10 cursor-pointer transition-all duration-300 ${
                      activeTimelineItem === item.year 
                        ? 'bg-[rgba(255,255,255,0.05)] rounded-lg p-3 -ml-3 -mr-3' 
                        : 'hover:bg-[rgba(255,255,255,0.03)] hover:rounded-lg hover:p-3 hover:-ml-3 hover:-mr-3'
                    }`}
                    onClick={(e) => handleTimelineClick(item.year, e)}
                  >
                    <div className="absolute left-[-40px] top-0 w-[30px] h-[30px] bg-gradient-to-br from-[#8fff00] to-[#00ff4c] rounded-full text-black font-bold flex items-center justify-center text-[0.7rem] z-[2] max-md:left-[-30px] max-md:w-[25px] max-md:h-[25px] max-md:text-[0.6rem]">
                      {item.year}
                    </div>
                    <div className="pl-6">
                      <h3 className="text-white mb-2 text-[1.4rem] relative flex items-center justify-between">
                        {item.title}
                        <i className={`fas fa-chevron-down text-[#00ff4c] text-[0.8rem] ml-2 transition-transform duration-300 ${
                          activeTimelineItem === item.year ? 'rotate-180' : ''
                        }`}></i>
                      </h3>
                      <p className="m-0 text-[rgba(255,255,255,0.6)]">{item.description}</p>
                      
                      <div className={`overflow-hidden transition-all duration-400 ${
                        activeTimelineItem === item.year 
                          ? 'max-h-[500px] opacity-100 translate-y-0 p-4' 
                          : 'max-h-0 opacity-0 -translate-y-2.5 p-0'
                      } bg-[rgba(255,255,255,0.05)] rounded-lg mt-2 ${
                        activeTimelineItem === item.year ? 'border border-[rgba(143,255,0,0.2)]' : ''
                      }`}>
                        <div className="flex flex-wrap gap-6">
                          <div className="flex-[0_0_100px] h-[100px] rounded-lg bg-[rgba(0,242,255,0.1)] overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-[rgba(0,242,255,0.2)] to-[rgba(143,255,0,0.2)]"></div>
                          </div>
                          <div className="flex-1 min-w-[200px]">
                            <p className="mb-3 text-[rgba(255,255,255,0.6)]">{item.details.text}</p>
                            <p className="mb-3 text-[rgba(255,255,255,0.6)]"><strong>Key achievements:</strong></p>
                            <ul className="pl-6 mb-0">
                              {item.details.achievements.map((achievement, idx) => (
                                <li key={idx} className="mb-2 text-[rgba(255,255,255,0.6)]">{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
