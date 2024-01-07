import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({ userInputs }) {
  const { initial_investment, annual_investment, expected_return, duration } =
    userInputs;

  const parameterObject = {
    initialInvestment: initial_investment,
    annualInvestment: annual_investment,
    expectedReturn: expected_return,
    duration: duration,
  };

  const annualData = calculateInvestmentResults(parameterObject);
  console.log(annualData);

  return (
    <table id="result">
      <thead className="center">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="center">
        {annualData.map((record) => (
          <tr key={record.year}>
            <td>{record.year}</td>
            <td>{formatter.format(record.valueEndOfYear)}</td>
            <td>{formatter.format(record.interest)}</td>
            <td>
              {formatter.format(
                record.valueEndOfYear -
                  record.year * parameterObject.annualInvestment -
                  parameterObject.initialInvestment
              )}
            </td>
            <td>
              {formatter.format(
                parameterObject.initialInvestment +
                  record.year * parameterObject.annualInvestment
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
