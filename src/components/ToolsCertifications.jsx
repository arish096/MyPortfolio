import { motion } from "framer-motion";
import {
  Sparkles,
  Workflow,
  Code2,
  Award,
  ExternalLink,
  Bot,
  GitBranch,
} from "lucide-react";
import "./ToolsCertifications.css";

const toolGroups = [
  {
    title: "AI & AI Assistants",
    description: "AI tools I explore and use",
    icon: Bot,
    color: "purple",
    tools: ["ChatGPT", "Gemini", "Claude", "DeepSeek", "Grok"],
  },
  {
    title: "Automation & Workflows",
    description: "Building connected AI workflows",
    icon: Workflow,
    color: "green",
    tools: ["n8n"],
  },
  {
    title: "AI Development & Builders",
    description: "Creating and prototyping applications",
    icon: Sparkles,
    color: "blue",
    tools: ["Lovable", "Replit", "Emergent AI", "Antigravity"],
  },
  {
    title: "Development Technologies",
    description: "Tools for development and collaboration",
    icon: GitBranch,
    color: "orange",
    tools: ["Git", "GitHub"],
  },
];

const certifications = [
  {
    title: "AI Essentials 2026",
    issuer: "Canva",
    date: "October 22, 2026",
    file: "/certificates/Canva-AI-Essentials-2026.pdf",
  },
  {
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    date: "September 14, 2026",
    file: "/certificates/oracle-agentic-ai-certificate.pdf",
  },
];

export default function ToolsCertifications() {
  return (
    <>
      {/* TOOLS I USE */}
      <section className="tools-section" id="tools">
        <div className="tools-container">
          <motion.div
            className="tools-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">
              <Sparkles size={14} />
              MY DIGITAL TOOLKIT
            </span>

            <h2>
              Tools I <span className="gradient-text">Use.</span>
            </h2>

            <p>
              A collection of AI assistants, development platforms, and
              technologies I use to explore ideas and build digital projects.
            </p>
          </motion.div>

          <div className="tools-grid">
            {toolGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.article
                  className="tools-card"
                  key={group.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="tools-card-header">
                    <div className={`tools-card-icon ${group.color}`}>
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                    </div>
                  </div>

                  <div className="tools-pills">
                    {group.tools.map((tool) => (
                      <motion.span
                        className="tools-pill"
                        key={tool}
                        whileHover={{ y: -3 }}
                      >
                        <span className="tools-pill-dot" />
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="certifications-section" id="certifications">
        <div className="certifications-container">
          <motion.div
            className="tools-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">
              <Award size={14} />
              LEARNING & ACHIEVEMENTS
            </span>

            <h2>
              My <span className="gradient-text">Certifications.</span>
            </h2>

            <p>
              Certificates from courses and learning experiences that support
              my journey in AI and technology.
            </p>
          </motion.div>

          <div className="certifications-grid">
            {certifications.map((certificate, index) => (
              <motion.article
                className="certificate-card"
                key={certificate.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="certificate-icon">
                  <Award size={25} />
                </div>

                <span className="certificate-label">CERTIFICATE</span>

                <h3>{certificate.title}</h3>

                <div className="certificate-meta">
                  <span>{certificate.issuer}</span>
                  <span>{certificate.date}</span>
                </div>

                <a
                  className="certificate-button"
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                  <ExternalLink size={15} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}