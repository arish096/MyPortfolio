
import { motion } from "framer-motion";
import {
  Github,
  ArrowUpRight,
  Plane,
  Headset,
  FileText,
  Activity,
  Image,
  Code2,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI Radar",
    subtitle: "Live Flight Tracker",
    description:
      "An AI-powered flight tracking application that visualizes live aircraft data on an interactive map.",
    category: "WEB APPLICATION",
    tech: ["React", "TypeScript", "Node.js", "Leaflet", "MCP"],
    icon: Plane,
    visual: "radar",
    github: "https://github.com/arish096/AI-Radar---Live-Flight-Tracker-",
  },
  {
    number: "02",
    title: "Apple Support",
    subtitle: "AI Customer Support Agent",
    description:
      "An intelligent support system with intent classification, historical case retrieval, grounded replies, and safe escalation.",
    category: "AI AGENT",
    tech: ["Python", "NLP", "TF-IDF", "Scikit-learn", "Streamlit"],
    icon: Headset,
    visual: "support",
    github: "https://github.com/arish096/apple-support-ai-agent",
  },
  {
    number: "03",
    title: "ResumeForge AI",
    subtitle: "AI Resume Builder",
    description:
      "An AI-assisted resume builder with professional templates, live preview, PDF export, and ATS-focused features.",
    category: "AI PRODUCT",
    tech: ["React", "TypeScript", "AI", "PDF Export"],
    icon: FileText,
    visual: "resume",
    github: "https://github.com/arish096/resumeforge-ai",
  },
  {
    number: "04",
    title: "MedVitals.AI",
    subtitle: "Multimodal AI Assistant",
    description:
      "An AI-powered assistant supporting text, image, video, and voice interactions, with PDF reports and chat history.",
    category: "AI APPLICATION",
    tech: ["Python", "Streamlit", "OpenRouter", "AI APIs"],
    icon: Activity,
    visual: "medical",
    github: "https://github.com/arish096/MedVitals.AI",
  },
  {
    number: "05",
    title: "AI Thumbnail",
    subtitle: "YouTube Thumbnail Generator",
    description:
      "An AI-powered platform designed to help create engaging YouTube thumbnails through a simple web interface.",
    category: "AI WEB TOOL",
    tech: ["TypeScript", "Lovable AI", "Web Development"],
    icon: Image,
    visual: "thumbnail",
    github: "https://github.com/arish096/ai-youtube-thumbnail-generator",
  },
  {
    number: "06",
    title: "DSA in C++",
    subtitle: "Problem-Solving Journey",
    description:
      "A structured collection of C++ implementations covering programming fundamentals, algorithms, and problem-solving practice.",
    category: "PROGRAMMING",
    tech: ["C++", "Arrays", "Pointers", "Searching", "Algorithms"],
    icon: Code2,
    visual: "code",
    github: "https://github.com/arish096/DSA-IN-Cpp",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <Sparkles size={15} /> SELECTED WORK
          </span>

          <h2>
            Projects I've <span className="gradient-text">Built.</span>
          </h2>

          <p>
            A collection of applications and experiments built around
            AI, web development, and problem-solving.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className="project-card"
                key={project.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className={`project-visual ${project.visual}`}>
                  <div className="project-visual-top">
                    <span>PROJECT_{project.number}</span>
                    <span className="project-status">
                      <span /> BUILT
                    </span>
                  </div>

                  <div className="project-visual-center">
                    <div className="project-icon">
                      <Icon size={34} strokeWidth={1.5} />
                    </div>
                    <span className="project-visual-name">
                      {project.title}
                    </span>
                    <span className="project-visual-subtitle">
                      {project.subtitle}
                    </span>
                  </div>

                  <span className="project-visual-watermark">
                    {project.number}
                  </span>
                </div>

                <div className="project-card-content">
                  <div className="project-card-meta">
                    <span>{project.category}</span>
                    <span>{project.number} / 06</span>
                  </div>

                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={17} />
                    <span>View Repository</span>
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.a
          href="https://github.com/arish096?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="all-projects-link"
          whileHover={{ y: -3 }}
        >
          Explore All Repositories <ArrowUpRight size={18} />
        </motion.a>
      </div>
    </section>
  );
};

export default Projects;
