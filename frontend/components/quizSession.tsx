import {Quiz} from "../apiNest/models/content/courseLms";
import {useEffect, useState} from "react";

export default function QuizSession(props: { quiz: Quiz | null}){

  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

  useEffect(() => {
    console.warn(props);
  }, []);

  return <>
    <div className='quiz-container'>
      <div className='quiz-header'>
        <p className='header'>Question 1 of 1</p>
        <p className='question'> {props.quiz?.question} </p>
      </div>

      <div className="quiz-body">
        { props.quiz?.choice.map((eachChoice,index) => {
            return <div key={index}
                        className={`choice-row ${selectedChoice === index && 'selected'}`}
                        onClick={() => setSelectedChoice(index)}>
              <span className='title'>
                <div className={`title-box ${selectedChoice === index && 'selected'}`}>
                  { eachChoice.choice_number }
                </div>
              </span>
              <span className='description'> { eachChoice.choice_description }</span>
            </div>
          })
        }
      </div>

      <div className="quiz-footer">
        <button className='quiz-submit'>
          Submit
        </button>
      </div>
    </div>
  </>
}