import './App.css'
import Welcome from './components/Welcome/Welcome'
import Question from './components/Question/Question'
import GameOver from './components/GameOver/GameOver'
import CategorySelection from './components/CategorySelection/CategorySelection'

import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <CategorySelection />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
