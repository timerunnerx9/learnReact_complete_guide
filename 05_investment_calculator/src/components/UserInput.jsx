export default function UserInput({
  userInputs,
  label,
  functionTarget,
  onChangeFunction,
}) {
    console.log(userInputs);

    console.log(userInputs + "  userInputs");
    console.log(label + "  label");
    console.log(functionTarget + "  functionTarget");

    const value = userInputs.label;

  return (
    <div>
      <label className="center">{label}</label>
      <input
        onChange={() => onChangeFunction(functionTarget)}
        value={userInputs.{label}}
        type="number"
      />
    </div>
  );
}
