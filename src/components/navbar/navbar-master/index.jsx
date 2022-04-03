import SearchHook from "../searchHook";
import Login from "../login";
import Style from "./style.module.css"; 
const Navbar = ({accessTokenNavbar,selected,setSelected}) => {
  return (
    <>
      <div className={Style.container}>
        {accessTokenNavbar ? <SearchHook accessToken={accessTokenNavbar} selected={selected} setSelected={setSelected}/> : <Login />}
      </div>
    </>
  );
};
export default Navbar;