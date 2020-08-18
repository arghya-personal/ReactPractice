import React, { Component } from "react";
import "./styles.css";
import quizService from "./question-service/question-service";
import QuestionBox from "./components/question-box";

class App extends Component {
  state = {
    questionBank: [],
    score: 0,
    response: 0,
    currentQues: "",
    currentRightAns: "",
    errorText: ""
  };

  getQuestion = () => {
    quizService().then(ques => {
      this.setState({
        questionBank: ques
      });
    });
  };
  computedAnswer = (qId, correctAnsIndex) => {
    console.log("correctAnsIndex", correctAnsIndex);
    const currentQuesObj = this.state.questionBank.find(
      item => item.qId === qId
    );
    if (currentQuesObj.correct === currentQuesObj.ans[correctAnsIndex]) {
      this.setState({
        score: this.state.score + 1,
        currentQues: currentQuesObj.qs,
        currentRightAns: currentQuesObj.correct
      });
    } else {
      this.setState({
        currentQues: currentQuesObj.qs,
        currentRightAns: currentQuesObj.correct,
        errorText: ""
      });
    }
  };
  componentDidMount() {
    this.getQuestion();
  }

  render() {
    return (
      <div className="container">
        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(({ qs, ans, correct, qId }) => (
            <div>
              <QuestionBox
                question={qs}
                options={ans}
                qId={qId}
                key={qId}
                selected={(qId, correctAnsIndex) =>
                  this.computedAnswer(qId, correctAnsIndex)
                }
              />
            </div>
          ))}
        <h2>
          Total Score: {this.state.score}
          {this.state.currentRightAns.length ? (
            <p>Correct Ans of is -{this.state.currentRightAns}</p>
          ) : (
            ""
          )}
        </h2>
      </div>
    );
  }
}
export default App;
