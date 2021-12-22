import Script from "next/script";
import FooterBeand from "./footerBrand";

export default function Footer() {
    return (
        <div>
            <FooterBeand></FooterBeand>
            <div id="section-footer" data-section-id="footer">
                <Script src="https://kit.fontawesome.com/1b1fb3f1fb.js" crossOrigin="anonymous"></Script>
                <footer className="footer  background-dark  " kjb-settings-id="sections_footer_settings_background_color">
                    <div className="footer__content">
                        <div className="container footer__container media">
                            <div id="block-1612941917714" className="footer__block ">
                                <a className="logo" href="">
                                    <img className="logo__image" src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/O14Sjd9QSvma4oiA4RfT_file.jpg" kjb-settings-id="sections_footer_blocks_1612941917714_settings_logo" alt="Footer Logo"></img>
                                </a>
                            </div>
                            <div id="block-1555988525205" className="footer__block ">
                                <span kjb-settings-id="sections_footer_blocks_1555988525205_settings_copyright">
                                    © 2021 CARIBER
                                </span>
                            </div>
                            <div id="block-1555988509126" className="footer__block media__body">
                                <div className="link-list justify-content-right" kjb-settings-id="sections_footer_blocks_1555988509126_settings_menu">
                                    <a className="link-list__link" href="https://www.cariber.co/privacy-policy" rel="noopener">นโยบายความเป็นส่วนตัว</a>
                                    <a className="link-list__link" href="https://www.cariber.co/terms-conditions" rel="noopener">เงื่อนไขการใช้งาน</a>
                                </div>
                            </div>
                            <span style={{ color: '#fbf5e3' }}>contact@cariber.co</span>
                            <div id="block-1612942017335" className="footer__block ">
                                <div className="social-icons social-icons--" kjb-settings-id="sections_footer_blocks_1612942017335_settings_social_icons_text_color">
                                    <a className="social-icons__icon" href="https://www.facebook.com/cariberofficial" kjb-settings-id="sections_footer_blocks_1612942017335_settings_social_icon_link_facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="social-icons__icon" href="https://www.instagram.com/cariber.official/" kjb-settings-id="sections_footer_blocks_1612942017335_settings_social_icon_link_instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="social-icons__icon" href="https://www.linkedin.com/company/cariber/" kjb-settings-id="sections_footer_blocks_1612942017335_settings_social_icon_link_linkedin">
                                        <i className="fab fa-linkedin-in"></i>
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