import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Testpage from "./pages/Testpage";


function App() {

const [questions, setQuestions] = useState(null)
const [randomQuestions, setRandomQuestions] = useState([]);
const [totalpoint, setTotalpoint] = useState(0);

useEffect(() => {
  fetch("/questions.json")
    .then((response) => response.json())
    .then((questions) => {
      setQuestions(questions);
      const shuffled = shuffleArray([...questions]);
      const selectedQuestions = shuffled.slice(0, 20);
      setRandomQuestions(selectedQuestions);
    })
    .catch((error) => console.log("error occurred"));
}, []);


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}





  return (
    <>
  

    <h2>{totalpoint}</h2>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/testpage" element={<Testpage randomQuestions={randomQuestions} totalpoint={totalpoint} setTotalpoint={setTotalpoint} />} />
      </Routes>
    
    </>
  );
}

export default App;
