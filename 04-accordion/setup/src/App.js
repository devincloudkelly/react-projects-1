import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);

  const renderQuestions = () => {
    return questions.map((question) => {
      return <SingleQuestion {...question} key={question.id} />;
    });
  };

  return (
    <main>
      <section className="container">
        <h3>questions and answers about login</h3>
        <section className="info">{renderQuestions()}</section>
      </section>
    </main>
  );
}

export default App;
