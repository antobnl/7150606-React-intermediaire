import { Link, useParams } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <nav>
        <Link
          to={
            questionNumber > 1
              ? `/survey/${questionNumber - 1}`
              : `/survey/${questionNumber}`
          }
        >
          Précédent
        </Link>
        {questionNumber < 10 ? (
          <Link to={`/survey/${parseInt(questionNumber) + 1}`}>Suivant</Link>
        ) : (
          <Link to="/results/">Résultat</Link>
        )}
      </nav>
    </div>
  )
}

export default Survey
