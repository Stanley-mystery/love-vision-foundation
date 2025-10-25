const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative dark-background">
      {/* <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h4>Join Our Mailing list</h4>
              <p>
                Sign up for our mailing list to get the latest updates and
                offers!
              </p>
              <form
                action="forms/newsletter.php"
                method="post"
                className="php-email-form"
              >
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input type="submit" value="Join Now!" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>  */}

      <div className="container footer-top">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="d-flex align-items-center">
              <span className="sitename">Love Vision Foundation</span>
            </a>
            <div className="footer-contact pt-3">
              {/* <p>A108 Adam Street</p>
              <p>New York, NY 535022</p> */}
              <p className="mt-3">
                Together, we can bring light back into someone’s world.
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i> <a href="/">Home</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Regulatory Information</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="/gallery">Terms of Use</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="/contact">Accessibility Statement</a>
              </li>
            </ul>
          </div>

          {/* <div className="col-lg-4 col-md-12">
            <h4>Follow Us</h4>
            <p>
              Goldline Shipping is a global supplier of transport and logistics
              solutions.
            </p>
            <div className="social-links d-flex">
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#">
                <i className="bi bi-google"></i>
              </a>
              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>
          <strong className="px-1 sitename">Love Vision Foundation</strong>
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
