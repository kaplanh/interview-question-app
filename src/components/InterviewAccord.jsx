import questions from '../helper/data'
import Question from './Question'
const InterviewAccord = () => {

  return (
    <div className='row'>
      {questions.map((item) => {
        return <Question key ={item.id} item={item} />
      })}
    </div>
  )
}

export default InterviewAccord