import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

import Category from "../../img/category.svg"

import "./CategorySelection.css"

function CategorySelection() {

    const [quizState, dispatch] = useContext(QuizContext) 

    const chooseCategory = (category) => {
        dispatch({type: "START_GAME", payload: category})
        dispatch({type: "REORDER_QUESTIONS"})
    }

  return (
    <div id="category">
        <h2>Escolha sua categoria</h2>
        <p>As perguntas serão referentes a uma linguagem abaixo:</p>
        <div>
            {quizState.questions.map((questions) => <button onClick={() => chooseCategory(questions.category)} key={questions.category}>{questions.category}</button>)}
        </div>
        <img src={Category} alt="Categorias" />
    </div>
  )
}

export default CategorySelection