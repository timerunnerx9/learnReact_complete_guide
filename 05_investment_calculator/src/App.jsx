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
    <body>
      <Header />
      <div>
        <UserInputs userInputs={userInputs} setUserInputs={setUserInputs} />
        <ResultTable userInputs={userInputs} />
      </div>
    </body>
  );
}

export default App;
