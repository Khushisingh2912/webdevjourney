import './App.css';
import { motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import {
  FaGlobe, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaUniversalAccess,
  FaProjectDiagram, FaReact, FaNodeJs, FaDatabase, FaRocket, FaNetworkWired
} from 'react-icons/fa';

const sections = [
  { title: "1. Introduction to Web Development", description: "Understand what web development is, including frontend and backend fundamentals.", icon: <FaGlobe /> },
  { title: "2. How the Web Works", description: "Learn how DNS, HTTP/S, browsers, and hosting work together.", icon: <FaNetworkWired /> },
  { title: "3. HTML Fundamentals", description: "Structure your webpages using semantic HTML elements.", icon: <FaHtml5 /> },
  { title: "4. CSS & Responsive Design", description: "Style beautifully with Flexbox, Grid, and media queries.", icon: <FaCss3Alt /> },
  { title: "5. JavaScript Essentials", description: "Learn variables, functions, DOM manipulation, and events.", icon: <FaJs /> },
  { title: "6. Advanced JavaScript", description: "Master closures, promises, async/await, and ES6 features.", icon: <FaJs /> },
  { title: "7. Git & GitHub", description: "Use Git for version control and collaborate via GitHub.", icon: <FaGitAlt /> },
  { title: "8. Accessibility & SEO", description: "Ensure your site is usable for everyone and SEO optimized.", icon: <FaUniversalAccess /> },
  { title: "9. Mini Projects", description: "Build calculators, to-do lists, portfolios, and more.", icon: <FaProjectDiagram /> },
  { title: "10. Learn React", description: "Component-based architecture with JSX and state/hooks.", icon: <FaReact /> },
  { title: "11. Routing & State", description: "Use React Router and manage complex app state.", icon: <FaReact /> },
  { title: "12. Working with APIs", description: "Fetch external data and handle JSON with fetch/Axios.", icon: <FaNetworkWired /> },
  { title: "13. Backend Basics", description: "Use Node.js and Express to build API servers.", icon: <FaNodeJs /> },
  { title: "14. Databases", description: "Store data using MongoDB or PostgreSQL.", icon: <FaDatabase /> },
  { title: "15. Deployment", description: "Deploy using Netlify, Vercel, or Render with CI/CD.", icon: <FaRocket /> },
];

function App() {
  return (
    <>
      <CustomCursor />

      <div className="scroll-container">
        {sections.map((sec, index) => (
          <motion.section
            key={index}
            className="section"
            initial={{ opacity: 0, backgroundColor: index % 2 === 0 ? '#ffffff' : '#000000' }}
            whileInView={{
              opacity: 1,
              backgroundColor: index % 2 === 0 ? '#000000' : '#ffffff'
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <motion.div
              className="content"
              style={{
                color: index % 2 === 0 ? '#fff' : '#111',
                background: index % 2 === 0
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'rgba(0, 0, 0, 0.05)'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.15)'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="icon"
                style={{
                  color: index % 2 === 0 ? '#00ffcc' : '#0066cc',
                }}
                whileHover={{
                  rotate: 10,
                  scale: 1.2,
                  color: index % 2 === 0 ? '#00ffaa' : '#0033aa'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {sec.icon}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {sec.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                {sec.description}
              </motion.p>
            </motion.div>
          </motion.section>
        ))}
      </div>
    </>
  );
}

export default App;
