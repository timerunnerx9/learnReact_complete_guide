export default function UserInput({
  userInputs,
  label,
  functionTarget,
  onChangeFunction,
}) {
  return (
    <div>
    <p>
      <label className="center">{label}</label>
      <input
        onChange={(event) => onChangeFunction(event, functionTarget)}
        value={userInputs.functionTarget}
        type="number"
      />
    </p>
    </div>
  );
}
