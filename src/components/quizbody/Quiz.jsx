import React, { useState, useEffect } from "react";
import "./quiz.css";
const Quiz = ({ data, setStop, queNum, setqueNum }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAns, setSelectedAns] = useState(null);
  const [className, setClassName] = useState("answer");

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const handleClick = (opt) => {
    setSelectedAns(opt);
    setClassName("answer active");
    delay(0, () =>
      setClassName(opt.correct ? "answer correct" : "answer wrong")
    );
    delay(3000, () => {
      if (opt.correct) {
        setqueNum((prev) => prev + 1);
        setSelectedAns(null);
      } else {
        setStop(true);
      }
    });
    // setTimeout(()=>{
    //   setClassName(opt.correct ? "answer correct" : "answer wrong");
    //    },3000);
  };
  useEffect(() => {
    setQuestion(data[queNum - 1]);
  }, [data, queNum]);
  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((opt) => {
          return (
            <div
              className={selectedAns === opt ? className : "answer"}
              onClick={() => handleClick(opt)}
            >
              {opt?.text}
            </div>
          );
        })}
        {/* <div className="answer">OOPs</div>
        <div className="answer">OOPs</div>
        <div className="answer">OOPs</div>
        <div className="answer">OOPs</div> */}
      </div>
    </div>
  );
};

export default Quiz;
