import React, { useState } from 'react'
import Question from '../Quiz/Question'
import quizData from '../../Static Data/Data'
function Home() {
    const [questions]=useState(quizData)
  return (
    <main>
        <div className="container">
            <h3>React Quiz App</h3>
        <section>
        
        {
            questions.map((question)=>{ 
                

                return <Question key={question.id} {...question}/>
                
                

                
            })
        }
        </section>
        </div> 
    </main>
  )
}

export default Home
