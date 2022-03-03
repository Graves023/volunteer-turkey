import Link from "next/dist/client/link";
import Layout from "../src/layouts/Layout";

const Index = () => {
  return (
    <Layout transparentHeader transparentTop footerSolidBg>
      <section className="hero-area-one">
        <div className="hero-text">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <span className="tagline wow fadeInUp" data-wow-delay="0.3s">
                  Turkey save Ukraine
                </span>
                <h1 className="title wow fadeInUp" data-wow-delay="0.4s">
                  Coordination Center for Assistance to Ukraine in Turkey
                </h1>
                <Link href="/project-1">
                  <a className="main-btn wow fadeInUp" data-wow-delay="0.5s">
                    View Contacts <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-shapes">
            <div className="hero-line-one">
              <img src="assets/img/hero/hero-line.png" alt="Line" />
            </div>
            <div className="hero-line-two">
              <img src="assets/img/hero/hero-line-2.png" alt="Line" />
            </div>
            <div className="dot-one" />
            <div className="dot-two" />
          </div>
        </div>
        <div className="hero-images">
          <div
            className="hero-img image-small fancy-bottom wow fadeInLeft"
            data-wow-delay="0.6s"
          >
            <img src="assets/img/hero/hero-one-small.jpg" alt="Image" />
          </div>
          <div className="hero-img main-img wow fadeInUp" data-wow-delay="0.5s">
            <img src="assets/img/hero/hero-one-big.jpg" alt="Image" />
          </div>
          <div
            className="hero-img image-small fancy-top wow fadeInRight"
            data-wow-delay="0.7s"
          >
            <img src="assets/img/hero/hero-one-small-2.jpg" alt="Image" />
          </div>
        </div>
      </section>
      {/*====== Hero Area End ======*/}
      {/*====== Categories Section Start ======*/}
      <section className="popular-categories section-gap">
        <div className="container mb-60">
          {/* Call to Action */}
          <div
            className="cta-box cta-double-content"
            style={{ backgroundImage: "url(assets/img/cta/01.jpg)" }}
          >
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-9">
                <div className="content">
                  <h2 className="cta-title">Get Help And Support</h2>
                  <p>
                    Sed perspiciatis unde omniste natus error sit voluptatem
                    accusantium doloremque laudan totamrem aperiam eaque quae
                    abille
                  </p>
                  <Link href="/events">
                    <a className="main-btn">
                      Get help <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-2 col-lg-1 cta-double-content-gap" />
              <div className="col-xl-4 col-lg-5 col-md-9">
                <div className="content">
                  <h2 className="cta-title">Provide Assistance</h2>
                  <p>
                    Sed perspiciatis unde omniste natus error sit voluptatem
                    accusantium doloremque laudan totamrem aperiam eaque quae
                    abille
                  </p>
                  <Link href="/events">
                    <a className="main-btn">
                      Your Help <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="categories-header">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    <i className="fas fa-plus" /> we need your help
                    <span className="heading-shadow-text">Help for life</span>
                  </span>
                  <h2 className="title">What help we need</h2>
                </div>
              </div>
              <div className="col-auto">
                <Link href="/project-1">
                  <a className="main-btn mb-30">
                    View All Contacts <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center fancy-icon-boxes">
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <i className="flaticon-reading-book" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Legal assistance</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <i className="flaticon-stethoscope" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Medical help</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <i className="flaticon-tshirt-1" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Clothes</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <img src={'assets/img/icons/home.svg'} width={65} />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Housing assistance</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <i className="flaticon-finance" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Financial</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <i className="flaticon-salad" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Foods</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <i className="flaticon-project-management" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Work</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <img src={'assets/img/icons/transport.svg'} width={65} />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Transport</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fancy-box-item mt-30">
                <div className="icon">
                  <i className="flaticon-salad" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/project-details">
                      <a>Information</a>
                    </Link>
                  </h4>
                  <p>School, Collage &amp; University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      {/*====== Categories Section End ======*/}
      {/*====== About Section Start ======*/}
      <section className="about-section-one">
        <div className="container">
          <div className="row align-items-center justify-content-lg-start justify-content-center pb-60">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="about-img">
                <img src="assets/img/about/about-one.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-10 offset-xl-1">
              <div className="about-text mt-md-70 mb-md-50">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    <i className="fas fa-plus" /> who we are
                    <span className="heading-shadow-text">About Us</span>
                  </span>
                  <h2 className="title">Our Contacts</h2>
                </div>
                <p>
                  Sedut perspiciatis unde omnis iste natus voluptatem
                  accusantium dolore dantiumy totam rem apeam, eaque ipsa
                  quaventore veritatis quasi architecto beatae.
                </p>
                <div className="author-note wow fadeInUp">
                  <ul>
                    <li>
                      <i className="far fa-check" /> we're not a commercial organization
                    </li>
                  </ul>
                  <div className="author-info">
                    <div className="author-img">
                      <img src="assets/img/author-thumbs/01.jpg" alt="Image" />
                    </div>
                    <h5 className="name">Michel H. Heart</h5>
                    <span className="title">CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== About Section End ======*/}
      {/*====== Project Section Start ======*/}
      
      
      
      
      
    </Layout>
  );
};

export default Index;
