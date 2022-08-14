import { motion } from 'framer-motion';
import './App.css';

function App() {
    const ferrisOfTechs = [
      // "next-js.png",
      "react-js.svg",
      "typescript.svg",
      "python.svg",
      "java.svg",
      "sqlite.svg",
    //   "jupyter.svg",
      "node-js.svg",
      "firebase.svg",
      "mongodb.svg",
    //   "tailwindcss.svg",
    //   "chakra-ui.jpg",
    //   "framer-motion.webp",
    //   "html.svg",
    //   "scss.svg",
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
            exit="exit"
            variants={{
              animate: {
                rotate: -360,
                transition: {
                  duration: ferrisOfTechs.length,
                  repeat: Infinity,
                  delay: index + 1,
                  ease: "linear",
                },
              },
              initial: {
                opacity: 0,
              },
              initialHide: {
                opacity: 1,
                transition: {
                  delay: index + 1,
                },
              },
            }}
          >
            <div className="right-center">
              <img
                className='tech-icon'
                src={require(`./tech-icons/${tech}`)}
                alt={tech}
              />
            </div>
          </motion.div>
        );
      }, [])}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
