import HeaderBottom from "./HeaderBottom/headerBottom";
import HeaderCenter from "./HeaderCenter/headerCenter";
import HeaderLeft from "./HeaderCenter/HeaderLeft/headerLeft";
import HeaderRight from "./HeaderCenter/HeaderRight/headerRight";
import Navbar from "./HeaderTop/Navbar/navbar";


import "../../css/base.css";
import "../../css/element.css";
import "../../css/media.css";
import "../../css/header.css";
import "../../css/main.css";

const Header = () => {
  return (
    <>
      <Navbar />
      <header
        id="masthead"
        className="site-header desktop-shadow-disable mobile-shadow-enable mobile-nav-enable"
        itemscope="itemscope"
        itemtype="http://schema.org/WPHeader"
      >
        <div className="header-main header-wrapper">
          <div className="container">
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
          </div>
        </div>
      </header>
      <HeaderBottom />
    </>
  );
};

export default Header;
