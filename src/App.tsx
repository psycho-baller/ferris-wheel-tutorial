import { motion } from "framer-motion";
import "./App.css";

function App() {
  const ferrisOfTechs = [
    "react-js.svg",
    "typescript.svg",
    "python.svg",
    "java.svg",
    "sqlite.svg",
    "jupyter.svg",
    // "node-js.svg",
    // "firebase.svg",
    // "mongodb.svg",
    // "tailwindcss.svg",
    // "html.svg",
    // "scss.svg",
  ];
  return (
    <div className="App">
      {ferrisOfTechs.map((tech, index: number) => {
        return (
          <motion.div
            className="ferris-wheel-techs"
            key={index + 1}
            initial="initial"
            animate={["animate", "initialHide"]}
            variants={{
              initial: {
                opacity: 0,
              },
              initialHide: {
                opacity: 1,
                transition: {
                  delay: index + 1,
                },
              },
              animate: {
                rotate: -360,
                transition: {
                  duration: ferrisOfTechs.length,
                  repeat: Infinity,
                  delay: index + 1,
                  ease: "linear",
                },
              },
            }}
          >
            <div className="image-parent">
              <img
                className="tech-icon"
                src={require(`./tech-icons/${tech}`)}
                alt={tech}
              />
            </div>
          </motion.div>
        );
      }, [])}
    </div>
  );
}

export default App;
