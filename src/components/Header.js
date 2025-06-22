import { useSelector } from "react-redux";

const Header = () => {
  const admin = useSelector((store) => store.admin);
  return (
    <div>
      <p>header</p>
    </div>
  );
};

export default Header;
