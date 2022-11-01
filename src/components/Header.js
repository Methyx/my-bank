import Logo from "./Logo";
import User from "./User";

const Header = ({ userName }) => {
  return (
    <header>
      <div className="container header-content">
        <Logo />
        <User userName={userName} />
      </div>
    </header>
  );
};

export default Header;
