import React, { useState, useContext } from "react";
import { Questions } from "../helpers/QuestionBank";
import { Context } from "../helpers/Context";
import { useEffect } from "react";

const Quiz = () => {
  const { setQuizState, score, setScore } = useContext(Context);
  const [ele, setEle] = useState();
  const [currQuestion, setCurrQuestion] = useState(0);
  const options = [
    {
      option: "optionA",
      selected : false
    },
    {
      option: "optionB",
      selected : false
    },
    {
      option: "optionC",
      selected : false
    },
    {
      option: "optionD",
      selected : false
    },
  ];

  useEffect(() => {}, [currQuestion]);
  return (
    <div className="quiz">
      <h2>{Questions[currQuestion].question}</h2>

      <ul>
        {options.map((item, key) => {
          return (
            <>
              <li
                key={key}
                onClick={(e) => {
                  if (item.option === Questions[currQuestion]["answer"]) {
                    setScore(score + 1);
                  }
                  e.currentTarget.classList.toggle('selected')
                  setEle(e.currentTarget)
                  if(!e.currentTarget.classList.contains('selected') && item.option === Questions[currQuestion]["answer"]) {
                    setScore(score - 1);
                  }
                }}
              >
                {Questions[currQuestion][item.option]}
              </li>
            </>
          );
        })}
      </ul>

      {/* {currQuestion !== 0 && (
        <button
          onClick={() => {
            if (Questions.length - 1 === currQuestion) {
              setQuizState("end");
            }
            setCurrQuestion(currQuestion - 1);
            ele.classList.toggle('selected')
          }}
        >
          {" "}
          Prev{" "}
        </button>
      )} */}
      {
        <button
          onClick={() => {
            if (Questions.length - 1 === currQuestion) {
              setQuizState("end");
            }
            setCurrQuestion(currQuestion + 1);
            ele.classList.toggle('selected')
          }}
        >
          {" "}
          Next{" "}
        </button>
      }
    </div>
  );
};

export default Quiz;
