import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="section-2" data-aos="fade-up" data-aos-duration="3000">
        <div className="container-2">
          <div className="footer-wrappe-2">
            <div className="footer-grid-2">
              <div className="footer-brand">
                <div className="title-left-align">Subscribe to our newsletter</div>
                <div className="footer-form-block">
                  <div className="footer-form">
                    <input placeholder="Your Email"className="footer-text-field"></input>
                    <input value="Subscribe" type="submit" className="footer-button" />
                  </div>
                </div>
              </div>
              <div className="footer-block">
                <div className="title-small">Product</div>
                <div className="footer-link">FAQ</div>
                <div className="footer-link">Features</div>
              </div>
              <div className="footer-block">
                <div className="title-small">Social Media</div>
                <a className="footer-link">Twitter</a>
                <a className="footer-link">Linkedin</a>
                <a className="footer-link">Youtube</a>
                <a className="footer-link">Discord</a>
                <a className="footer-link">Tiktok</a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-section">
            <div className="container-footer">
                <div className="copyright-text-holder">
                    <div className="copyright-text">
                    Crafted with ❤️ by DaoLens

                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
