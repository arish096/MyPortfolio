
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  ArrowUpRight,
  Send,
  MessageCircle,
  Sparkles,
  Code2,
  Trophy,
} from "lucide-react";

const GMAIL_LINK =
  "https://mail.google.com/mail/?view=cm&fs=1&to=arishislam096@gmail.com";

const socialLinks = [
  {
    title: "GitHub",
    subtitle: "Explore my repositories",
    href: "https://github.com/arish096",
    icon: Github,
  },
  {
    title: "LeetCode",
    subtitle: "My coding journey",
    href: "https://leetcode.com/u/Arish_Islam/",
    icon: Code2,
  },
  {
    title: "HackerEarth",
    subtitle: "Hackathons & coding profile",
    href: "https://www.hackerearth.com/@arishislam096/",
    icon: Trophy,
  },
  {
    title: "Email",
    subtitle: "arishislam096@gmail.com",
    href: GMAIL_LINK,
    icon: Mail,
  },
];

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            <Sparkles size={15} /> GET IN TOUCH
          </span>

          <h2>
            Have an idea? Let's{" "}
            <span className="gradient-text">connect.</span>
          </h2>

          <p>
            Interested in building something meaningful with AI and
            technology? Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          className="contact-main-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-glow" />

          <div className="contact-main-content">
            <span className="contact-availability">
              <span /> OPEN TO COLLABORATIONS
            </span>

            <h3>
              Let's build something
              <br />
              <span className="gradient-text">great together.</span>
            </h3>

            <p>
              Whether it's an interesting project, an idea, or a
              collaboration, I'd be happy to hear from you.
            </p>

            <a
              href={GMAIL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-email-button"
            >
              <Mail size={18} />
              Send Me an Email
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-decoration">
            <div className="contact-orbit orbit-one" />
            <div className="contact-orbit orbit-two" />

            <div className="contact-center-icon">
              <MessageCircle size={42} />
            </div>

            <div className="contact-floating-icon">
              <Send size={20} />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-links"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {socialLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="contact-link-icon">
                  <Icon size={23} />
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>

                <ArrowUpRight
                  size={19}
                  className="contact-link-arrow"
                />
              </motion.a>
            );
          })}
        </motion.div>

        <footer className="portfolio-footer">
          <span>Designed & Built with curiosity.</span>
          <span>
            © {new Date().getFullYear()} Arish Islam
          </span>
        </footer>

      </div>
    </section>
  );
};

export default Contact;
