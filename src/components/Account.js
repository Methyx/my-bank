import Button from "./Button";

function numberWithSpaces(nr) {
  return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const Account = ({ name, balance, color, operations }) => {
  const style = { background: color };
  return (
    <div className="account container">
      <div className="account-header" style={style}>
        {/* //   <div className="account-header"> */}
        <p>{name}</p>
        <p>{`${numberWithSpaces(balance.toFixed(2))} €`}</p>
      </div>
      <div className="operations">
        {operations.map((op, index) => {
          return (
            <div className="operation-ligne" key={index}>
              <p className="date">{op.date}</p>
              <p className="description">{op.description}</p>
              <p className="amount">{`${numberWithSpaces(
                op.amount.toFixed(2)
              )} €`}</p>
            </div>
          );
        })}
      </div>
      <Button children="SEE MORE" />
    </div>
  );
};

export default Account;
