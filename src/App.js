import Header from "./components/Header"
import "./App.css"
import Question from "./components/Question"
import InterviewAccord from "./components/InterviewAccord"

function App() {
  return (
    <>
      <div className="header">
        <h2>REACT Interview Ouestions And Answers</h2>
      </div>
      <div className="app">
        <div className="main">
          <InterviewAccord />
        </div>
      </div>
    </>)
}

export default App
