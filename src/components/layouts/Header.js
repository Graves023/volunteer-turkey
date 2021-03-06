import Link from "next/dist/client/link";
import { useEffect } from "react";
import { stickyNav } from "../../utils";
import { Home, News, Pages, Project } from "./menus";
import LanguageSelector from './modules/LanguageSelector';

const Header = ({ transparentTop, transparentHeader, topSecondaryBg }) => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  });
  return (
    <header
      className={`site-header sticky-header d-none d-lg-block ${
        transparentTop ? "topbar-transparent" : ""
      } ${transparentHeader ? "transparent-header" : ""}`}
      id="header-sticky"
    >
      <div
        className={`header-topbar d-none d-sm-block ${
          topSecondaryBg ? "topbar-secondary-bg" : ""
        }`}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <ul className="contact-info">
                <li>
                  <a href="#">
                    <i className="far fa-envelope" /> support.ukraine@gmail.com
                  </a>
                </li>
                {/*<li>*/}
                {/*  <a href="#">*/}
                {/*    <i className="far fa-map-marker-alt" /> 250 Main Street, 2nd*/}
                {/*    Floor, USA*/}
                {/*  </a>*/}
                {/*</li>*/}
              </ul>
            </div>
            <div className="col-auto d-flex align-items-center">
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
              </ul>
              <div className={'ml-5'}>
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-wrapper">
        <div className="container">
          <div className="navbar-inner">
            <div className="site-logo">
              <Link href="/">
                <a>
                  <img src="assets/img/logo.png" alt="Funden" />
                </a>
              </Link>
            </div>
            <div className="nav-menu" id="menu">
              <ul>
                <li>
                  <a href="#">
                    Home
                  </a>
                </li>
                {/*<li>*/}
                {/*  <a href="#">*/}
                {/*    News*/}
                {/*    <span className="dd-trigger">*/}
                {/*      <i className="far fa-angle-down" />*/}
                {/*    </span>*/}
                {/*  </a>*/}
                {/*  <ul className="submenu">{News}</ul>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*  <a href="#">*/}
                {/*    About us*/}
                {/*    <span className="dd-trigger">*/}
                {/*      <i className="far fa-angle-down" />*/}
                {/*    </span>*/}
                {/*  </a>*/}
                {/*  <ul className="submenu">{Pages}</ul>*/}
                {/*</li>*/}
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-extra d-flex align-items-center">
              <Link href="/centers">
                <a className="main-btn nav-btn d-none d-sm-inline-block">
                  Help Now <i className="far fa-arrow-right" />
                </a>
              </Link>
              <a href="#" className="nav-toggler">
                <span />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
