import SearchHook from "../searchHook";
import Login from "../login";
import Style from "./style.module.css"; 
import { useSelector } from "react-redux";
const Navbar = ({selected,setSelected}) => {
  const accessToken = useSelector(state => state.token.token);
  return (
    <>
      <div className={Style.container}>
        {accessToken ? <SearchHook  selected={selected} setSelected={setSelected}/> : <Login />}
      </div>
    </>
  );
};
export default Navbar;