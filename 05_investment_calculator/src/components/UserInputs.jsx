import UserInput from "./UserInput";

const labels = {
  "INITIAL INVESTMENT": "initial_investment",
  "ANNUAL INVESTMENT": "annual_investment",
  "EXPECTED RETURN": "expected_return",
  DURATION: "duration",
};

export default function UserInputs({ userInputs, setUserInputs }) {
  const onChangeFunction = (event, functionTarget) => {
    setUserInputs((prevState) => {
      return {
        ...prevState,
        [functionTarget]: parseFloat(event.target.value),
      };
    });
  };

  const userInputList = [];
  for (const [key, value] of Object.entries(labels)) {
    userInputList.push(
      <UserInput
        key={key}
        userInputs={userInputs}
        label={key}
        functionTarget={value}
        onChangeFunction={onChangeFunction}
      />
    );
  }

  return (
    <div>
      <div className="input-group" id="user-input" justify-content="center">
        {userInputList}
      </div>
      <div>
        {userInputs.duration < 1 && (
          <div>
            <p className="center">Duration cannot be less than 1</p>
          </div>
        )}
      </div>
    </div>
  );
}
