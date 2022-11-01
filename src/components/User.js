const User = ({ userName }) => {
  return (
    <div className="user">
      <span>{userName}</span>
      <i className="fa-regular fa-user icon"></i>
    </div>
  );
};

export default User;
