import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Testpage from "./pages/Testpage";


function App() {

const [questions, setQuestions] = useState(null)

  useEffect(() => {
    fetch("/questions.json")
      .then((response) => response.json())
      .then((questions) => setQuestions(questions))
      .catch((error) => console.log("error occred"));
  }, []);



  const handleStart = () => {
    
  };

  return (
    <>
  

      <Navbar />
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/testpage" element={<Testpage />} />
      </Routes>
    
    </>
  );
}

export default App;
