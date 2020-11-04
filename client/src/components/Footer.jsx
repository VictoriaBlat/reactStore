import React from "react";

const Footer = props => {
  return (
    <footer className="footerback">
      {/* <p className="footer-links">
        <a href="#" target="_blank">
          Follow Us on Social Media
        </a>
        <span> / </span>
        <a href="#" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="#" target="_blank">
          Contact Us
        </a>
        <span> / </span>
        <a href="#" target="_blank">
          Read Our Blog
        </a>
      </p>*/}
      <div className="columns-footer">
        <h2 className="woofer">Woofi</h2>
        <div className="four-columns">
          <div className="first-column">
            <h2>Subscriptions</h2>
            <h5>Newsletter</h5>
            <h5>Get the App</h5>
            <h5>Woofi Podcast</h5>
            <h2>About us</h2>
            <h5>The team</h5>
            <h5>Jobs</h5>
          </div>
          <div className="second-column">
            <h2>Press</h2>
            <h5>Media kit</h5>
            <h5>Retail enquiries</h5>
            <h2>Need help?</h2>
            <h5>Chat</h5>
            <h5>Questions and Answers</h5>
          </div>

          <div className="third-column">
            <h2>Follow Us</h2>
            <div className="icons-social">
              <img
                src="../images/iconfinder_Rounded_Facebook_svg_5282541.png"
                alt={"icon"}
              />
              <img
                src="../images/iconfinder_Rounded_Instagram_svg_5282544.png"
                alt={"icon"}
              />
              <img
                src="../images/iconfinder_Rounded_Pinterest2_svg_5282545.png"
                alt={"icon"}
              />
            </div>
          </div>
          <div className="fourth-column">
            <h2>Contact Us</h2>
            <h5>friend@woofi.com</h5>
            <h5>+49 177 777 777</h5>
          </div>
        </div>
        <p className="copyr">
          &copy; 2020 <strong>Woofi</strong> - Dog Store
        </p>
      </div>
    </footer>
  );
};

export default Footer;
