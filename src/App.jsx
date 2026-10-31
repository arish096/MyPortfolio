import { useEffect, useState } from "react";
import Projects from "./components/Projects";
import "./components/Projects.css";
import Contact from "./components/Contact";
import "./components/Contact.css";
import Education from "./components/Education";
import "./components/Education.css";
import Chatbot from "./components/Chatbot";
import "./components/Chatbot.css";
import ToolsCertifications from "./components/ToolsCertifications";
import HackathonsCoding from "./HackathonsCoding";
import { motion, AnimatePresence } from "framer-motion";
import {
  Atom,
  Braces,
  Code2,
  Database,
  Bot,
  Cpu,
  Github,
  Mail,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ArrowDown,
  Download,
  Check,
  Workflow,
} from "lucide-react";
import "./App.css";

const themes = [
  { id: "violet", name: "Violet", color: "#a855f7" },
  { id: "blue", name: "Blue", color: "#38bdf8" },
  { id: "emerald", name: "Emerald", color: "#34d399" },
  { id: "rose", name: "Rose", color: "#fb7185" },
];

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Certifications", "#certifications"],
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

const roles = [
  "Web Developer.",
  "AI Enthusiast.",
  "Prompt Engineer.",
  "Creative Builder.",
];

const techIcons = [
  { id: "react", className: "node-react", icon: Atom },
  { id: "js", className: "node-js", text: "JS" },
  { id: "ai", className: "node-ai", icon: Bot },
  { id: "code", className: "node-code", icon: Braces },
  { id: "database", className: "node-db", icon: Database },
  { id: "cpu", className: "node-cpu", icon: Cpu },
  { id: "github", className: "node-github", icon: Github },
  { id: "spark", className: "node-spark", icon: Sparkles },
];

function App() {
  const [theme, setTheme] = useState("violet");
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    document.documentElement.style.setProperty(
      "--scroll-progress",
      `${progress}%`
    );
  };

  updateScrollProgress();

  window.addEventListener("scroll", updateScrollProgress, {
    passive: true,
  });

  window.addEventListener("resize", updateScrollProgress);

  return () => {
    window.removeEventListener("scroll", updateScrollProgress);
    window.removeEventListener("resize", updateScrollProgress);
  };
}, []);

  return (
    <main>

      <div className="scroll-progress-track">
  <div className="scroll-progress-fill"></div>
</div>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-logo">A.</span>
          <span className="brand-name">
            ARISH <span>ISLAM</span>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {navLinks.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="theme-picker">
            {themes.map((item) => (
              <button
                key={item.id}
                className={`theme-swatch ${
                  theme === item.id ? "selected" : ""
                }`}
                style={{ "--swatch": item.color }}
                onClick={() => setTheme(item.id)}
                title={item.name}
                aria-label={`Choose ${item.name} theme`}
                aria-pressed={theme === item.id}
              >
                {theme === item.id && <Check size={11} />}
              </button>
            ))}
          </div>

         


          <a
            href="/Arish-Islam-Resume.pdf"
            download="Arish-Islam-Resume.pdf"
            className="resume-button"
          >
            Resume <Download size={15} />
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="star-field"></div>
        <div className="hero-grid"></div>

        {/* COSMIC PORTAL */}
        <div className="cosmic-portal">
          <div className="portal-ring portal-ring-one"></div>
          <div className="portal-ring portal-ring-two"></div>
          <div className="portal-ring portal-ring-three"></div>
          <div className="portal-core"></div>
        </div>

        <div className="hero-inner">
          {/* LEFT CONTENT */}
          <div className="hero-content">
            <motion.div
              className="animated-intro"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
            >
              <motion.div
                className="hero-tag"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Sparkles size={14} />
                <span>WELCOME TO MY DIGITAL WORLD</span>
              </motion.div>

              {/* ANIMATED NAME */}
              <motion.h1
  className="hero-title"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Hello, I'm Arish
  <br />
  Islam.
</motion.h1>

<motion.h2
  className="hero-tagline"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  I Build <span>Digital Experiences</span>
</motion.h2>

              {/* ANIMATED DEVELOPER ROLE */}
              <motion.div
                className="role-line"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <span className="role-prefix">I'm a</span>

                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    className="changing-role"
                    initial={{
                      opacity: 0,
                      y: 15,
                      filter: "blur(5px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                      filter: "blur(5px)",
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>

                <span className="typing-cursor">|</span>
              </motion.div>

              {/* DESCRIPTION */}
<motion.p
  className="hero-description"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.7 }}
>
  Passionate about Web Development and Artificial Intelligence.
  I transform ideas into modern websites, intelligent applications,
  and meaningful digital experiences through creativity and technology.
</motion.p>

{/* BUTTONS */}
<motion.div
  className="hero-buttons"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.9 }}
>
  <motion.a
    href="#projects"
    className="primary-button"
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.97 }}
  >
    Explore Projects <ArrowRight size={17} />
  </motion.a>

  <motion.a
    href="/Arish-Islam-Resume.pdf"
    download="Arish-Islam-Resume.pdf"
    className="secondary-button"
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.97 }}
  >
    <Download size={17} />
    Download Resume
  </motion.a>
</motion.div>

              {/* SOCIAL LINKS */}
              <motion.div
                className="hero-socials"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                <span>LET'S CONNECT</span>

                <a
                  href="https://github.com/arish096"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={19} />
                </a>

                <a
                  href="mailto:arish096@gmail.com"
                  aria-label="Email"
                >
                  <Mail size={19} />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT TECH ORBIT */}
          <motion.div
            className="tech-universe"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            <div className="universe-glow"></div>
            <div className="orbit orbit-outer"></div>
            <div className="orbit orbit-middle"></div>
            <div className="orbit orbit-inner"></div>
            <div className="orbit-cross horizontal"></div>
            <div className="orbit-cross vertical"></div>

            <div className="universe-center">
              <div className="center-glow"></div>
              <Code2 size={48} strokeWidth={1.4} />
              <span>BUILD</span>
              <small>CREATE • INNOVATE</small>
            </div>

            {techIcons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`tech-node ${item.className}`}
                >
                  {Icon ? <Icon size={29} /> : <span>{item.text}</span>}
                </div>
              );
            })}

            <div className="universe-label">
              <span className="label-dot"></span>
              EXPLORING TECHNOLOGY
            </div>
          </motion.div>
        </div>

        {/* BOTTOM DETAILS */}
        <a href="#about" className="scroll-indicator">
          <ArrowDown size={15} />
          <span>SCROLL TO EXPLORE</span>
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about-container">
          <motion.div
            className="about-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">
              <Sparkles size={14} /> GET TO KNOW ME
            </span>

            <h2>
              About <span className="gradient-text">Me.</span>
            </h2>

            <p>
              A little introduction to the person behind the code,
              ideas, and projects.
            </p>
          </motion.div>

          <div className="about-layout">
            {/* LEFT: INTRODUCTION */}
            <motion.div
              className="about-main"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-card">
                <div className="about-card-top">
                  <div className="about-avatar">AI</div>

                  <div>
                    <h3>Arish Islam</h3>
                    <span>Developer & Technology Enthusiast</span>
                  </div>

                  <div className="about-status">
                    <span></span> BUILDING
                  </div>
                </div>

                <div className="about-divider"></div>

                <h3 className="about-greeting">
                  Turning ideas into
                  <br />
                  <span className="gradient-text">
                    meaningful technology.
                  </span>
                </h3>

                <p className="about-description">
                  I'm Arish Islam, a developer passionate about
                  Web Development, Artificial Intelligence, and
                  building innovative digital products.
                </p>

                <p className="about-description">
                  I enjoy creating modern websites, experimenting
                  with AI-powered applications, designing intelligent
                  workflows, and solving real-world problems through
                  technology.
                </p>

                <p className="about-description">
                  Currently, I'm strengthening my programming
                  fundamentals, learning Data Structures and
                  Algorithms with C++, and exploring new ways
                  to build smarter applications.
                </p>

                <div className="about-interests">
                  <span>WHAT I LOVE EXPLORING</span>
                  <div className="interest-tags">
                    <span>Web Development</span>
                    <span>Artificial Intelligence</span>
                    <span>AI Automation</span>
                    <span>Problem Solving</span>
                    <span>DSA with C++</span>
                  </div>
                </div>

                <a
                  href="https://github.com/arish096"
                  target="_blank"
                  rel="noreferrer"
                  className="about-github"
                >
                  <Github size={18} />
                  Explore My GitHub
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* RIGHT: PROFILE CARDS */}
            <motion.div
              className="about-side"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="about-quote-card">
                <div className="quote-icon">
                  <Code2 size={24} />
                </div>

                <span>MY APPROACH</span>

                <h3>
                  Learn.
                  <span> Build.</span>
                  <br />
                  <span>Improve.</span>
                </h3>

                <p>
                  Every project is an opportunity to learn something
                  new and create something useful.
                </p>

                <div className="quote-decoration"></div>
              </div>

              <div className="about-expertise">
                <div className="expertise-item">
                  <div className="expertise-icon purple">
                    <Code2 size={22} />
                  </div>

                  <div>
                    <h4>Web Development</h4>
                    <p>Building modern and responsive websites.</p>
                  </div>

                  <ArrowRight size={17} />
                </div>

                <div className="expertise-item">
                  <div className="expertise-icon blue">
                    <Bot size={22} />
                  </div>

                  <div>
                    <h4>AI Development</h4>
                    <p>Exploring AI-powered applications and agents.</p>
                  </div>

                  <ArrowRight size={17} />
                </div>

                <div className="expertise-item">
                  <div className="expertise-icon green">
                    <Atom size={22} />
                  </div>

                  <div>
                    <h4>AI Automation</h4>
                    <p>Creating intelligent workflows and solutions.</p>
                  </div>

                  <ArrowRight size={17} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM HIGHLIGHTS */}
          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="highlight-item">
              <span className="highlight-number">01</span>
              <div>
                <h4>Curious Mindset</h4>
                <p>Always learning and exploring new technologies.</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="highlight-number">02</span>
              <div>
                <h4>Project Driven</h4>
                <p>Turning concepts into working applications.</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="highlight-number">03</span>
              <div>
                <h4>Continuous Growth</h4>
                <p>Improving through coding and experimentation.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
            {/* SKILLS SECTION */}
      <section className="skills-section" id="skills">
        <div className="skills-container">
          {/* HEADING */}
          <motion.div
            className="skills-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">
              <Sparkles size={14} /> MY TECH STACK
            </span>

            <h2>
              Skills & <span className="gradient-text">Technologies.</span>
            </h2>

            <p>
              The technologies, tools, and skills I use to turn
              ideas into real-world digital experiences.
            </p>
          </motion.div>

          {/* FEATURED TECH */}
          <motion.div
            className="skills-featured"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="featured-glow"></div>

            <div className="featured-content">
              <span className="featured-label">
                <span className="featured-dot"></span>
                CONTINUOUSLY LEARNING
              </span>

              <h3>
                Building with <span className="gradient-text">Technology.</span>
              </h3>

              <p>
                From web interfaces to AI-powered applications,
                I enjoy exploring technologies and using them
                to build practical solutions.
              </p>
            </div>

            <div className="featured-symbol">
              <Code2 size={65} strokeWidth={1.2} />
              <div className="symbol-ring"></div>
            </div>
          </motion.div>

          {/* SKILL CATEGORIES */}
          <div className="skills-grid">
            {/* FRONTEND */}
            <motion.div
              className="skill-category"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="category-header">
                <div className="category-icon purple">
                  <Code2 size={22} />
                </div>

                <div>
                  <h3>Frontend Development</h3>
                  <p>Building modern web experiences</p>
                </div>
              </div>

              <div className="skill-list">
                <div className="skill-item">
                  <div className="skill-logo html-logo">5</div>
                  <div className="skill-info">
                    <h4>HTML5</h4>
                    <span>Web Structure</span>
                  </div>
                  <span className="skill-status">CORE</span>
                </div>

                <div className="skill-item">
                  <div className="skill-logo css-logo">#</div>
                  <div className="skill-info">
                    <h4>CSS3</h4>
                    <span>Styling & Design</span>
                  </div>
                  <span className="skill-status">CORE</span>
                </div>

                <div className="skill-item">
                  <div className="skill-logo react-logo">R</div>
                  <div className="skill-info">
                    <h4>React</h4>
                    <span>Component-based UI</span>
                  </div>
                  <span className="skill-status">LEARNING</span>
                </div>
              </div>
            </motion.div>

            {/* PROGRAMMING */}
            <motion.div
              className="skill-category"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="category-header">
                <div className="category-icon blue">
                  <Braces size={22} />
                </div>

                <div>
                  <h3>Programming</h3>
                  <p>Logic, coding & problem solving</p>
                </div>
              </div>

              <div className="skill-list">
                <div className="skill-item">
                  <div className="skill-logo cpp-logo">C++</div>
                  <div className="skill-info">
                    <h4>C++</h4>
                    <span>Data Structures & Algorithms</span>
                  </div>
                  <span className="skill-status learning">LEARNING</span>
                </div>

                <div className="skill-item">
                  <div className="skill-logo python-logo">Py</div>
                  <div className="skill-info">
                    <h4>Python</h4>
                    <span>Application Development</span>
                  </div>
                  <span className="skill-status">PROJECTS</span>
                </div>
              </div>
            </motion.div>

            {/* ARTIFICIAL INTELLIGENCE */}
            <motion.div
              className="skill-category"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="category-header">
                <div className="category-icon green">
                  <Bot size={22} />
                </div>

                <div>
                  <h3>AI & Automation</h3>
                  <p>Intelligent tools & workflows</p>
                </div>
              </div>

              <div className="skill-list">
                <div className="skill-item">
                  <div className="skill-logo ai-logo">
                    <Sparkles size={19} />
                  </div>
                  <div className="skill-info">
                    <h4>Prompt Engineering</h4>
                    <span>AI Interaction & Prompting</span>
                  </div>
                  <span className="skill-status">CORE</span>
                </div>

                <div className="skill-item">
                  <div className="skill-logo workflow-logo">
                    <Workflow size={19} />
                  </div>
                  <div className="skill-info">
                    <h4>AI Workflows</h4>
                    <span>Automation & AI Systems</span>
                  </div>
                  <span className="skill-status">BUILDING</span>
                </div>

                <div className="skill-item">
                  <div className="skill-logo agent-logo">
                    <Cpu size={19} />
                  </div>
                  <div className="skill-info">
                    <h4>AI Applications</h4>
                    <span>AI-powered Projects</span>
                  </div>
                  <span className="skill-status">BUILDING</span>
                </div>
              </div>
            </motion.div>

            {/* TOOLS */}
            <motion.div
              className="skill-category"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="category-header">
                <div className="category-icon orange">
                  <Database size={22} />
                </div>

                <div>
                  <h3>Developer Tools</h3>
                  <p>Tools I use to create and build</p>
                </div>
              </div>

              <div className="skill-list">
                <div className="skill-item">
                  <div className="skill-logo git-logo">
                    <Github size={19} />
                  </div>
                  <div className="skill-info">
                    <h4>Git & GitHub</h4>
                    <span>Version Control</span>
                  </div>
                  <span className="skill-status">CORE</span>
                </div>

                <div className="skill-item">
                  <div className="skill-logo vscode-logo">
                    <Code2 size={19} />
                  </div>
                  <div className="skill-info">
                    <h4>VS Code</h4>
                    <span>Development Environment</span>
                  </div>
                  <span className="skill-status">DAILY</span>
                </div>

                <div className="skill-item">
                  <div className="skill-logo ui-logo">
                    <Sparkles size={19} />
                  </div>
                  <div className="skill-info">
                    <h4>UI/UX Design</h4>
                    <span>Basic Design Principles</span>
                  </div>
                  <span className="skill-status">EXPLORING</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* AI TOOL ECOSYSTEM */}
          

          {/* BOTTOM MESSAGE */}
          <motion.div
            className="skills-footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles size={17} />
            <p>
              Always learning. Always experimenting. Always building.
            </p>
          </motion.div>
        </div>
      </section>


      

      {/* Certification */}
      <ToolsCertifications />

      {/* EDUCATION */}
      <Education />

      {/* PROJECTS */}
      <Projects />

      <HackathonsCoding />

      {/* CONTACT */}
      <Contact />

      {/* AI CHATBOT */}
      <Chatbot />
    </main>
  );
}

export default App;