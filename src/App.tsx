import { useState, useEffect, useRef } from 'react'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState('hero')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouse)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  const skills = [
    { name: 'Creative Direction', icon: '◈', color: '#C45D3E' },
    { name: 'Visual Design', icon: '✧', color: '#7A9E7E' },
    { name: 'Typography', icon: '❋', color: '#D4A853' },
    { name: 'Motion', icon: '◎', color: '#9B8EC4' },
    { name: 'Photography', icon: '◐', color: '#C45D3E' },
    { name: 'Storytelling', icon: '✦', color: '#7A9E7E' },
  ]

  const interests = [
    'Film Noir', 'Brutalist Architecture', 'Vintage Cameras', 
    'Jazz Records', 'Botanical Illustration', 'Letterpress'
  ]

  return (
    <div ref={containerRef} className="relative">
      {/* Floating cursor follower */}
      <div 
        className="fixed w-64 h-64 rounded-full pointer-events-none z-0 opacity-20 blur-3xl transition-transform duration-1000"
        style={{ 
          background: 'linear-gradient(135deg, #C45D3E, #D4A853)',
          left: mousePos.x - 128,
          top: mousePos.y - 128,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-display font-bold text-xl tracking-tight opacity-0 animate-fadeIn">
            ME<span className="text-[#C45D3E]">.</span>
          </div>
          <div className="flex gap-8 text-sm font-display tracking-wide">
            {['About', 'Skills', 'Contact'].map((item, i) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="link-underline opacity-0 animate-fadeIn hover:text-[#C45D3E] transition-colors"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-6">
        {/* Decorative blobs */}
        <div 
          className="absolute top-20 right-[10%] w-72 h-72 blob opacity-60"
          style={{ 
            background: 'linear-gradient(135deg, #7A9E7E 0%, #D4A853 100%)',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        <div 
          className="absolute bottom-32 left-[5%] w-48 h-48 blob opacity-40"
          style={{ 
            background: 'linear-gradient(135deg, #9B8EC4 0%, #C45D3E 100%)',
            transform: `translateY(${scrollY * -0.05}px)`,
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-5xl">
          <div className="overflow-hidden mb-4">
            <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-[#C45D3E] opacity-0 animate-slideUp">
              Welcome to my world
            </p>
          </div>
          
          <div className="overflow-hidden">
            <h1 
              className="font-display font-extrabold text-[15vw] md:text-[12vw] leading-[0.85] tracking-tighter opacity-0 animate-slideUp stagger-1"
            >
              Hello
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 
              className="font-display font-extrabold text-[15vw] md:text-[12vw] leading-[0.85] tracking-tighter text-stroke opacity-0 animate-slideUp stagger-2"
            >
              I'm Me
            </h1>
          </div>
          
          <div className="mt-12 overflow-hidden">
            <p className="font-serif text-xl md:text-2xl italic text-[#1A1915]/70 max-w-xl mx-auto opacity-0 animate-slideUp stagger-3">
              A creative soul crafting experiences at the intersection of art, 
              design & human connection.
            </p>
          </div>

          <div className="mt-12 opacity-0 animate-fadeIn stagger-4">
            <a 
              href="#about"
              className="inline-flex items-center gap-3 font-display text-sm tracking-wider border-2 border-[#1A1915] px-8 py-4 hover:bg-[#1A1915] hover:text-[#F7F4EF] transition-all duration-300"
            >
              Discover More
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div 
          className="absolute bottom-12 left-12 font-display text-[200px] leading-none opacity-[0.03] select-none"
          style={{ transform: `translateX(${scrollY * -0.2}px)` }}
        >
          ✦
        </div>
        <div 
          className="absolute top-1/4 right-12 float"
          style={{ animationDelay: '1s' }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-[#D4A853]">
            <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder with artistic frame */}
          <div className="relative">
            <div 
              className="aspect-[4/5] bg-gradient-to-br from-[#1A1915] via-[#2a2620] to-[#1A1915] relative overflow-hidden"
              style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }}
            >
              {/* Abstract art representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-[#C45D3E] opacity-80 absolute -top-8 -left-8 blob" style={{ animationDelay: '0s' }}/>
                  <div className="w-48 h-48 rounded-full bg-[#7A9E7E] opacity-60 blob" style={{ animationDelay: '2s' }}/>
                  <div className="w-24 h-24 rounded-full bg-[#D4A853] opacity-70 absolute -bottom-4 -right-4 blob" style={{ animationDelay: '4s' }}/>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 text-[#F7F4EF]/80 font-display text-sm tracking-wider">
                Abstract Self
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4A853] -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="font-display text-sm tracking-[0.3em] uppercase text-[#C45D3E] mb-4">
              About Me
            </p>
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 leading-tight">
              Creating with 
              <span className="italic font-serif font-normal"> intention</span>
            </h2>
            <div className="space-y-6 font-serif text-lg text-[#1A1915]/80 leading-relaxed">
              <p>
                I believe in the power of thoughtful design to transform experiences 
                and connect people. Every project is an opportunity to craft something 
                meaningful.
              </p>
              <p>
                With roots in fine art and a passion for digital craft, I bridge 
                the analog and digital worlds, bringing warmth and humanity to 
                every pixel and interaction.
              </p>
              <p className="italic text-[#C45D3E]">
                "Design is not just what it looks like and feels like. 
                Design is how it works." — Steve Jobs
              </p>
            </div>

            {/* Interests */}
            <div className="mt-12">
              <p className="font-display text-xs tracking-[0.2em] uppercase text-[#1A1915]/50 mb-4">
                Current Obsessions
              </p>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, i) => (
                  <span 
                    key={interest}
                    className="font-serif italic text-sm px-4 py-2 border border-[#1A1915]/20 hover:border-[#C45D3E] hover:text-[#C45D3E] transition-colors cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-[#1A1915] text-[#F7F4EF] relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="font-display text-sm tracking-[0.3em] uppercase text-[#D4A853] mb-4">
              What I Do
            </p>
            <h2 className="font-display font-bold text-5xl md:text-7xl">
              Skills & <span className="text-stroke" style={{ WebkitTextStrokeColor: '#F7F4EF' }}>Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {skills.map((skill, i) => (
              <div 
                key={skill.name}
                className="group hover-lift cursor-default"
              >
                <div className="text-center">
                  <div 
                    className="text-5xl md:text-6xl mb-4 transition-transform duration-500 group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="font-display font-semibold text-lg md:text-xl tracking-wide">
                    {skill.name}
                  </h3>
                  <div 
                    className="w-0 h-0.5 mx-auto mt-3 transition-all duration-500 group-hover:w-16"
                    style={{ background: skill.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-24 pt-16 border-t border-[#F7F4EF]/10">
            {[
              { num: '8+', label: 'Years Experience' },
              { num: '50+', label: 'Projects Completed' },
              { num: '∞', label: 'Ideas Brewing' },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-4xl md:text-6xl text-[#D4A853]">
                  {stat.num}
                </div>
                <div className="font-serif italic text-sm md:text-base text-[#F7F4EF]/60 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div 
          className="absolute top-0 right-0 w-96 h-96 blob opacity-30"
          style={{ background: 'linear-gradient(135deg, #9B8EC4 0%, #7A9E7E 100%)' }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-[#C45D3E] mb-4">
            Let's Connect
          </p>
          <h2 className="font-display font-bold text-5xl md:text-7xl mb-8 leading-tight">
            Have a project?<br/>
            <span className="italic font-serif font-normal">Let's talk.</span>
          </h2>
          <p className="font-serif text-xl text-[#1A1915]/70 max-w-xl mx-auto mb-12">
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to be part of your vision.
          </p>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:hello@example.com"
              className="group inline-flex items-center gap-3 font-display text-sm tracking-wider bg-[#1A1915] text-[#F7F4EF] px-8 py-4 hover:bg-[#C45D3E] transition-all duration-300"
            >
              <span>Say Hello</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a 
              href="#"
              className="inline-flex items-center gap-3 font-display text-sm tracking-wider border-2 border-[#1A1915] px-8 py-4 hover:bg-[#1A1915] hover:text-[#F7F4EF] transition-all duration-300"
            >
              View Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-8 mt-16">
            {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
              <a 
                key={social}
                href="#"
                className="font-serif italic text-sm text-[#1A1915]/50 hover:text-[#C45D3E] transition-colors link-underline"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1A1915]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-display font-bold text-xl">
            ME<span className="text-[#C45D3E]">.</span>
          </div>
          <p className="font-serif text-xs text-[#1A1915]/40">
            Requested by @KiuTun19173952 · Built by @clonkbot
          </p>
          <p className="font-serif text-sm text-[#1A1915]/50">
            © {new Date().getFullYear()} — Crafted with intention
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App