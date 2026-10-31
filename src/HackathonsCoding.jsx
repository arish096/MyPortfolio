import { motion } from "framer-motion";
import {
  Trophy,
  Code2,
  Github,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import "./HackathonsCoding.css";

const platforms = [
  {
    name: "HackerEarth",
    description: "Hackathons, developer challenges, and building AI-powered solutions.",
    buttonText: "HackerEarth",
    href: "https://www.hackerearth.com/",
    icon: Trophy,
    primary: true,
  },
  {
    name: "LeetCode",
    description: "Practising data structures and algorithms to improve problem-solving.",
    buttonText: "LeetCode",
    href: "https://leetcode.com/",
    icon: Code2,
  },
  {
    name: "GitHub",
    description: "Sharing projects, code, and my ongoing development journey.",
    buttonText: "GitHub",
    href: "https://github.com/arish096",
    icon: Github,
  },
];

export default function HackathonsCoding() {
  return (
    <section className="hackathons-section" id="hackathons">
      <div className="hackathons-container">
        <motion.div
          className="hackathons-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="hackathons-eyebrow">
            <Sparkles size={14} />
            HACKATHONS & PROBLEM SOLVING
          </span>

          <h2>
            Building. Competing. <span>Learning.</span>
          </h2>

          <p>
            I explore new technologies through hackathons, build practical
            AI-powered projects, and practise problem-solving with data
            structures and algorithms in C++.
          </p>
        </motion.div>

        <motion.div
          className="hackathons-feature-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="hackathons-card-content">
            <span className="hackathons-card-label">
              CONSISTENT PRACTICE, REAL PROJECTS
            </span>

            <h3>Turning ideas into practical solutions</h3>

            <p>
              I use hackathons as an opportunity to experiment, learn by
              building, and develop useful solutions. Alongside this, I
              regularly practise DSA in C++ and share my progress and projects
              online.
            </p>
          </div>

          <div className="hackathons-actions">
            {platforms.map((platform) => {
              const Icon = platform.icon;

              return (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`hackathons-button ${
                    platform.primary ? "hackathons-button-primary" : ""
                  }`}
                >
                  <Icon size={18} />
                  {platform.buttonText}
                  <ExternalLink size={14} />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}