import { Quiz } from "../apiNest/models/content/courseLms";
import { useState } from "react";
import {submitEvaluation} from "../apiNest/myCourseApi";

export enum TypeOfFeedBack {
  range = 'range',
  question = 'question',
}

export interface QuizProps {
  quiz: Quiz | null,
  course: number,
}

export default function QuizSession(props: QuizProps ){
  const [feedbackType, setFeedbackType] = useState<TypeOfFeedBack>(TypeOfFeedBack.range);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [feedback, setFeedBack] = useState<string>('');
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

  async function submit() {
    if (feedback === '') {
      alert('Please Suggest');
      return;
    }
    const data = {
      score: selectedChoice,
      feedback: feedback,
      course: props.course,
    }
    const submitResponse = await submitEvaluation(data);
    if (submitResponse.id) {
      setSubmitted(true);
    }
  }

  function next() {
    if(!selectedChoice) {
      alert('Please Select One Choice');
      return;
    }
    setFeedbackType(TypeOfFeedBack.question);
  }

  return <>
    <div className='quiz-container'>
      <div className='quiz-header'>
        <p className='header'>
          Question {feedbackType === TypeOfFeedBack.range ? '1' : '2'} of 2
        </p>
        <p className='question'>
          { feedbackType === TypeOfFeedBack.range
            ? 'มีแนวโน้มจะแนะนำ Cariber ให้เพื่อนไหม (1 คือ ไม่แนะนำ และ 10 คือ จะแนะนำอย่างแน่นอน)'
            : 'ข้อเสนอแนะเพิ่มเติม (หากไม่มีข้อเสนอแนะให้พิมพ์คำว่า "ไม่มี")'}
        </p>
      </div>

      <div className="quiz-body">

        { feedbackType === TypeOfFeedBack.range
            ? props.quiz?.choice.map((eachChoice,index) => {
            return <div key={index}
                        className={`choice-row ${selectedChoice === index + 1 && 'selected'}`}
                        onClick={() => setSelectedChoice(index + 1)}>
              <span className='title'>
                <div className={`title-box ${selectedChoice === index + 1 && 'selected'}`}>
                  { eachChoice.choice_number }
                </div>
              </span>
              <span className='description'> { eachChoice.choice_description }</span>
            </div>
          })
          : <div className='p-w-100 m-h-200 p-20'>
            <textarea value={feedback}
                      onChange={(e) => setFeedBack(e.target.value)}
                      rows={10}
                      className='quiz-textarea'/>
          </div>
        }
      </div>

      <div className="quiz-footer">
        <div className='quiz-percentage'>
          <div className='percentage-box'>
            <div className={`progress
                              ${feedbackType === TypeOfFeedBack.question && 'p-w-50'}
                              ${submitted && 'p-w-100'} `} />
          </div>
        </div>

        <button className='quiz-submit'
                onClick={ () => {(feedbackType === TypeOfFeedBack.range) ? next() : submit()}}>
          {feedbackType === TypeOfFeedBack.range ? 'Next' : 'Submit'}
        </button>
      </div>
    </div>
  </>
}