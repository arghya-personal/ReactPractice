import React from "react";

const QuestionBox = ({ question, options, selected, qId }) => {
  console.log("selected", selected);
  return (
    <div className="question-box">
      <div className="question">{question}</div>
      <div className="button-wrapper">
        {options.map((text, index) => (
          <button className="button" onClick={() => selected(qId, index)}>
            {text}
          </button>
        ))}
      </div>
      <div />
    </div>
  );
};

export default QuestionBox;
