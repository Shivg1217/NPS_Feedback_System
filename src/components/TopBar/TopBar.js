
import "./TopBar.css";
import LogoImg from "../../Assets/centerpoint_logo.png";
import PrevIcon from "../PrevIcon";
import AdminIcon from "../AdminIcon";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="CneterPointBox">
      <div className="prevButton">
      <Link to="/">
        <PrevIcon />
      </Link>
      </div>
      <div className="CenterPointLogo">
        <img src={LogoImg} alt="logo" />
      </div>
      <div className="adminbutton">
        <AdminIcon />
      </div>
    </div>
  );
};

export default TopBar;
