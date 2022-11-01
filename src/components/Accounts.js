import Account from "./Account";

const Accounts = ({ transactionsArray }) => {
  return (
    <>
      {transactionsArray.map((account, index) => {
        return (
          <Account
            key={index}
            name={account.name}
            balance={account.balance}
            color={account.color}
            operations={account.operations}
          />
        );
      })}
    </>
  );
};

export default Accounts;
