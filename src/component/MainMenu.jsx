import React, {useContext} from 'react'
import { Context } from '../helpers/Context'

const MainMenu = () => {

    const { quizState, setQuizState } = useContext(Context)
  return (
    <div className='menu'>
        <h2>Main Menu</h2>

        <button onClick={()=>{
            setQuizState("quiz")
        }}> Start The Quiz</button>
    </div>
  )
}

export default MainMenu