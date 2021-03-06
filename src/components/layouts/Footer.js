import Link from "next/dist/client/link";
const Footer = ({ footerSolidBg }) => {
  return (
    <footer
      className={`site-footer ${
        footerSolidBg ? "" : "with-footer-cta with-footer-bg"
      }`}
    >
      {!footerSolidBg && (
        <div className="footer-cta">
          <div className="container">
            <div className="row justify-content-lg-between justify-content-center align-items-center">
              <div className="col-lg-7 col-md-8 col-sm-10">
                <span className="cta-tagline">
                  Ukraine need your help
                </span>
                <h3 className="cta-title">
                  If you have the opportunity to help
                </h3>
              </div>
              <div className="col-lg-auto col-md-6">
                <Link href="/contact">
                  <a className="main-btn bordered-btn bordered-white mt-md-30">
                    Сontact us <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="footer-content-area">
        <div className="container">
          <div className="footer-widgets">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="widget about-widget">
                  <div className="footer-logo">
                    <img src="assets/img/logo-white.png" alt="Funden" />
                  </div>
                  <p>
                    Sed ut perspiciatis unde omn iste natus error sit voluptatem
                    Sed ut perspiciatis unde omn iste natus error sit voluptatem
                  </p>
                  
                </div>
              </div>
              <div className="col-lg-2 col-md-5 col-sm-6">
                <div className="widget nav-widget">
                  <h4 className="widget-title">Our Projects</h4>
                  <ul>
                    <li>
                      <Link href="/project-1">Medical &amp; Health</Link>
                    </li>
                    <li>
                      <Link href="/project-2">Educations</Link>
                    </li>
                    <li>
                      <Link href="/project-1">Technology</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="widget nav-widget">
                  <h4 className="widget-title">Support</h4>
                  <ul>
                    <li>
                      <Link href="/about">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/contact">Conditions</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-auto col-md-5 col-sm-8">
                <div className="widget contact-widget">
                  <h4 className="widget-title">Contact Us</h4>
                  <ul className="info-list">
                    <li>
                      <span className="icon">
                        <i className="far fa-phone" />
                      </span>
                      <span className="info">
                        <span className="info-title">Phone Number</span>
                        <a href="#">+012(345) 78 93</a>
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="far fa-map-marker-alt" />
                      </span>
                      <span className="info">
                        <span className="info-title">Locations</span>
                        <a href="#">59 Main Street, USA</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="row flex-md-row-reverse">
              <div className="col-md-6">
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
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
              </div>
              <div className="col-md-6">
                <p className="copyright-text">
                  © {new Date().getFullYear()} <a href="#">Funden</a>. All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
