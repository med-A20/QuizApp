import React, {useContext} from 'react'
import { Questions } from "../helpers/QuestionBank";

import { Context } from "../helpers/Context";

const EndQuiz = () => {
    const {score, setScore, setQuizState} = useContext(Context)
  return (
    <div className='endquiz'>
        <h2>
            End Quiz
        </h2>
        <h3>
            Your Score Is : {score} / {Questions.length}
        </h3>
        <button onClick={()=>{
            setScore(0)
            setQuizState("menu")
        }}>
            Play again !
        </button>
    </div>
  )
}

export default EndQuiz