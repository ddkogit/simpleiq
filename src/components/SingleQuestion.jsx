import React, { useState } from "react";
import "./SingleQuestion.css";
const SingleQuestion = ({ item, totalpoint, setTotalpoint }) => {
  const [disable, setDisable] = useState(false);
  const handleAnswer = (e) => {
    const asnwer = e.target.value;
    if (asnwer == item.answer) {
      console.log("right answer");
      setTotalpoint(totalpoint + 1);
      setDisable(true);
    } else {
      console.log("wrong");
      setDisable(true);
    }
  };
  return (
    <div className="singleform">
      <li>
        <form className="">
          <label htmlFor="">{item.question}</label>

          {item.options.map((option) => (
            <div className="options" key={option}>
              <input
                className="radios disabled-label"
                onChange={(e) => handleAnswer(e)}
                type="radio"
                name="option"
                id={option}
                value={option}
                disabled={disable}
              />
              &nbsp;
              <label htmlFor={option} className="radios">
                {option}
              </label>
            </div>
          ))}
        </form>
      </li>
    </div>
  );
};

export default SingleQuestion;
