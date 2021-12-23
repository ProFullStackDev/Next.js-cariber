import FooterBrand from "./footerBrand";
import Image from "next/image"

export default function Footer() {
  return (
    <div>
      <FooterBrand />
      <div id="section-footer">
        <footer className="footer background-dark">
          <div className="footer-content">
            <div className="container footer-container media">
              <div className="footer-block ">
                <a className="logo" href="" style={{width: 40, height: 39.9667}}>
                  <Image className="logo-image"
                    src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/O14Sjd9QSvma4oiA4RfT_file.jpg"
                    alt="Footer Logo"
                    width={40}
                    height={39.9667} />
                </a>
              </div>
              <div className="footer-block ">
                <span>
                  © 2021 CARIBER
                </span>
              </div>
              <div className="footer-block media-body">
                <div className="link-list justify-content-right">
                  <a className="link-list-link" href="https://www.cariber.co/privacy-policy" rel="noopener">
                    นโยบายความเป็นส่วนตัว
                  </a>
                  <a className="link-list-link" href="https://www.cariber.co/terms-conditions" rel="noopener">
                    เงื่อนไขการใช้งาน
                  </a>
                </div>
              </div>
              <span style={{ color: '#fbf5e3' }}>
                contact@cariber.co
              </span>
              <div className="footer-block ">
                <div className="social-icons social-icons-">
                  <a className="social-icons-icon" href="https://www.facebook.com/cariberofficial">
                    <i aria-hidden className="fab fa-facebook-f" />
                  </a>
                  <a className="social-icons-icon" href="https://www.instagram.com/cariber.official/">
                    <i aria-hidden className="fab fa-instagram" />
                  </a>
                  <a className="social-icons-icon" href="https://www.linkedin.com/company/cariber/">
                    <i aria-hidden className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}