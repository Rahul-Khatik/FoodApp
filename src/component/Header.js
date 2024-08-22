import { ICON_URL } from "../util/config";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={ICON_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li> Home </li>
          <li> About US </li>
          <li> Contact US </li>
          <li> Cart </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;