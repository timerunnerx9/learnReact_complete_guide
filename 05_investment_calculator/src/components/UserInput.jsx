export default function UserInput({
  userInputs,
  label,
  functionTarget,
  onChangeFunction,
}) {
  return (
    <div>
      <label className="center">{label}</label>
      <input
        onChange={(event) => onChangeFunction(event, functionTarget)}
        value={userInputs.functionTarget}
        type="number"
      />
    </div>
  );
}
