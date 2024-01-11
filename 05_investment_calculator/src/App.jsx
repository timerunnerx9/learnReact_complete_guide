import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import ResultTable from "./components/ResultTable";
import { useState } from "react";

const initialInput = {
  initial_investment: 0,
  annual_investment: 0,
  expected_return: 0,
  duration: 1,
};

function App() {
  const [userInputs, setUserInputs] = useState(initialInput);

  return (
    <div>
      <Header />
      <body>
        <UserInputs userInputs={userInputs} setUserInputs={setUserInputs} />
        <ResultTable userInputs={userInputs} />
      </body>
    </div>
  );
}

export default App;
