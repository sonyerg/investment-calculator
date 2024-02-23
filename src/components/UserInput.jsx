export default function UserInput({ onChange, userInput }) {
  // const [userInput, setUserInput] = useState({
  //   initialInvestment: 10000,
  //   annualInvestment: 1000,
  //   expectedReturn: 6,
  //   duration: 10,
  // });

  // function handleUserInput(inputIdentifier, newValue) {
  //   setUserInput((prevInput) => {
  //     return {
  //       ...prevInput, // unchanged values are still intact
  //       [inputIdentifier]: newValue,
  //     };
  //   });
  // }

  // Lifted the state up!

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number" //returns a string
            required
            value={userInput.initialInvestment}
            onChange={
              // (event) =>
              //   handleUserInput("initialInvestment", event.target.value)
              //use intialInvestment as identifier, and the user input(event.target.value) as newValue
              (e) => onChange("initialInvestment", e.target.value) //does not return a number
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={
              // (event) =>
              // handleUserInput("annualInvestment", event.target.value)
              (e) => onChange("annualInvestment", e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return (%)</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={
              // (event) =>
              // handleUserInput("expectedReturn", event.target.value)
              (e) => onChange("expectedReturn", e.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={
              // (event) =>
              // handleUserInput("duration", event.target.value)
              (e) => onChange("duration", e.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
