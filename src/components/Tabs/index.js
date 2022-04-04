// Component Tabs
import { Link } from "react-router-dom";

const Tabs = () => {
  return (
    <div className="tabs container">
      <ul className="nav d-flex justify-content-between" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <Link to="/git" id="git-tab">
            Git
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link to="/uiux" id="uiux-tab">
            UI-UX
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link to="/figma" id="figma-tab">
            Figma
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link to="/html" id="html-tab">
            HTML
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link to="/css" id="css-tab">
            CSS
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link to="/bootstrap" id="bootstrap-tab">
            Bootstrap
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link to="/javascript" id="javascript-tab">
            Javascript
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link to="/clean-code" id="clean-code-tab">
            Clean Code
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
