import React, { useState } from "react";

function Faq() {
  const questions = [
    "Which is the best online coaching for JEE?",
    "Is online coaching effective in JEE?",
    "Is self-study better for JEE?",
    "Which online coaching is best for NEET?",
    "Can i do online coaching for NEET-UG?",
  ];

  const answers = [
    "ALLEN Digital is the best online JEE coaching in India. Our online courses are for students in Class 11th, 12th, and 12th pass.",
    "With online JEE coaching, you can now study in the comfort of your home with India’s best educators. The personalised approach, availability of experienced faculties, practice tests and flexibility, all help students perform better academically.",
    "With self-study, online coaching is also important to prepare for the JEE Exam. Online JEE coaching can help you prepare the perfect study plan where you attend regular classes, take regular tests and examinations, improve your performance and get mentorship from India’s best educators.",
    "ALLEN Digital stands out as the premier online coaching for NEET-UG in India. Our comprehensive online courses cater to students in Class 11th, 12th, and those who have already completed 12th.",
    "Online NEET-UG coaching offers the convenience of studying from home while being guided by India's best educators. This personalised approach, access to experienced faculty, practice tests, and flexible learning options collectively enhance students' academic performance.",
  ];

  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const toggleVisibility = (index) => {
    if (visibleIndexes.includes(index)) {
      setVisibleIndexes(visibleIndexes.filter((i) => i !== index));
    } else {
      setVisibleIndexes([...visibleIndexes, index]);
    }
  };

  return (
    <>
      <h2>Frequently Asked Questions</h2>
      {questions.map((question, index) => (
        <div className="faq-container" key={index}>

          <div className="question" onClick={() => toggleVisibility(index)}>
            {question}
            <span className="arrow">
              {visibleIndexes.includes(index) ? "▲" : "▼"}
            </span>
          </div>

          {visibleIndexes.includes(index) && (
            <div className="answer">{answers[index]}</div>
          )}
        </div>
      ))}
    </>
  );
}

export default Faq;
