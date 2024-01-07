import UserInput from "./UserInput";
const labels = {
    "INITIAL INVESTMENT" : "initial_investment",
    "ANNUAL INVESTMENT" : "annual_investment",
    "EXPECTED RETURN" : "expected_return",
    "DURATION": "duration"

}

export default function UserInputs({ userInputs, setUserInputs }) {


    const onChangeFunction = (event, functionTarget) =>{
        setUserInputs((prevState) => {
            return {
              ...prevState,
              functionTarget: parseFloat(event.target.value),
            };
          });
    }

//   const initial_investment_onchange = (event) => {
//     setUserInputs((prevState) => {
//       return {
//         ...prevState,
//         initial_investment: parseFloat(event.target.value),
//       };
//     });
//   };
//   const annual_investment_onchange = (event) => {
//     setUserInputs((prevState) => {
//       return {
//         ...prevState,
//         annual_investment: parseFloat(event.target.value),
//       };
//     });
//   };
//   const expected_return_onchange = (event) => {
//     setUserInputs((prevState) => {
//       return { ...prevState, expected_return: parseFloat(event.target.value) };
//     });
//   };
//   const duration_onchange = (event) => {
//     setUserInputs((prevState) => {
//       return { ...prevState, duration: parseFloat(event.target.value) };
//     });
//   };


const userInputList = [];
for(const[key, value] of Object.entries(labels)){

   userInputList.push(<UserInput key={key} userInputs={userInputs} label = {key} functionTarget = {value} onChangeFunction={onChangeFunction}/>);
};

console.log(userInputList);

  return (
    <div>
      <div className="input-group"  id="user-input" justify-content="center">
   
      {userInputList}  


        {/* <div>
          <label className="center"> INITIAL INVESTMENT</label>
          <input
            onChange={initial_investment_onchange}
            value={userInputs.initial_investment}
            type="number"
          />
        </div>

        <div>
          <label className="center"> ANNUAL INVESTMENT</label>
          <input
            onChange={annual_investment_onchange}
            value={userInputs.annual_investment}
            type="number"
          />
        </div>
        <div>
          <label className="center"> EXPECTED RETURN</label>
          <input
            onChange={expected_return_onchange}
            value={userInputs.expected_return}
            type="number"
          />
        </div>

        <div>
          <label className="center"> DURATION</label>
          <input
            onChange={duration_onchange}
            value={userInputs.duration}
            type="number"
          />
        </div> */}


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
