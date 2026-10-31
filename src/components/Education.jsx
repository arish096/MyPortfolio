
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Award,
  CalendarDays,
  Sparkles,
} from "lucide-react";

const educationData = [
  {
    level: "CLASS 11",
    title: "Senior Secondary Education",
    institution: "Islamiya Urdu Academy, Mirganj, Bihar",
    board: "Currently Studying",
    year: "2026 – Present",
    status: "IN PROGRESS",
    icon: BookOpen,
  },
  {
    level: "CLASS 10",
    title: "Secondary Education",
    institution: "Vatayan School, Siwan, Bihar",
    board: "CBSE Board",
    year: "Completed",
    status: "COMPLETED",
    icon: Award,
    result: "86%",
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <Sparkles size={15} /> MY ACADEMIC JOURNEY
          </span>

          <h2>
            Education & <span className="gradient-text">Learning.</span>
          </h2>

          <p>
            My academic journey and the foundation behind my
            interest in technology and innovation.
          </p>
        </motion.div>

        <div className="education-timeline">
          {educationData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="education-card"
                key={item.level}
                initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
              >
                <div className="education-icon">
                  <Icon size={25} />
                </div>

                <div className="education-content">
                  <div className="education-top">
                    <span className="education-level">
                      {item.level}
                    </span>

                    <span className="education-status">
                      <span />
                      {item.status}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <h4>{item.institution}</h4>

                  <div className="education-details">
                    <span>
                      <GraduationCap size={15} />
                      {item.board}
                    </span>

                    <span>
                      <CalendarDays size={15} />
                      {item.year}
                    </span>
                  </div>

                  {item.result && (
                    <div className="education-result">
                      <span>Class 10 Result</span>
                      <strong>{item.result}</strong>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="education-note"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GraduationCap size={20} />
          <p>
            Learning goes beyond the classroom — continuously
            exploring web development, AI, and programming.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
