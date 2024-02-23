import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState, useEffect } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  // const [results, setResults] = useState([]);

  // useEffect(() => {
  //   const investmentResults = calculateInvestmentResults(userInput);
  //   setResults(investmentResults);
  // }, [userInput]);

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
        // the plus converts the string into number, fixing the Nan problem.
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater the zero</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
