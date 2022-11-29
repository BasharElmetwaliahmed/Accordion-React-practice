import React from 'react'
import questions from './data'
import Question from './Question'

function Questions() {
const listofQuestions=questions.map(question=> <Question key={question.id} title={question.title} info={question.info}></Question>)

  return (
    <div className='questions'>{
        listofQuestions
     }</div>
  )
}

export default Questions