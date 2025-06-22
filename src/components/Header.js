import { useSelector } from "react-redux";

const Header = () => {
  const admin = useSelector((store) => store.admin);
  return (
    <div className="fixed bg-[#11064e] p-2 text-[#ffffff] font-bold opacity-100 w-full">
      <p>header</p>
    </div>
  );
};

export default Header;
