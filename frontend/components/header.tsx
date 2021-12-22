import Link from 'next/link'
import Image from 'next/image'

interface menu {
  url: string,
  name: string
}

export default function Header() {
  const menu: menu[] = [
    { url: '/courses', name: 'คอร์สทั้งหมด' },
    { url: '/blog', name: 'บทความ' },
    { url: '/review', name: 'รีวิว' }
  ];

  return (
    <header className="header header--overlay" kjb-settings-id="{{ 'background_color' | settings_id: section: section }}">
      <div className="announcements">
        {/* will do later */}
      </div>
      <div className="header__wrap">
        <div className="header__content header__content--desktop background-dark">
          <div className="container header__container media">
            <a className="logo" href="">
              <img className="logo__image" src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/gloao1YVR4yKwUK3mHDJ_Logo-01-05.png" kjb-settings-id="{{ 'logo' | settings_id: section: section, block: block }}" alt="{{ block.settings.image_alt }}" />
            </a>
            <div className="header__block header__switch-content header__block--menu media__body">
              <div className="link-list justify-content-right" kjb-settings-id="{{ 'menu' | settings_id: section: section, block: block }}">
                {menu.map((v, i) => {
                  return (
                    <a key={i} className="link-list__link" href={v.url} rel="noopener">
                      {v.name}
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="header__block header__switch-content header__block--cta">
              <a className="btn btn-small btn-solid btn- background-dark" href="{{ block.settings.btn_action }}"> ซื้อแพ็กเกจรายปี </a>
            </div>
            <div id="block-1612930397537" className="header__block header__switch-content header__block--user header__block--mr0">
              <div className="user" kjb-settings-id="sections_header_blocks_1612930397537_settings_language_login">
                <span className="user__login" kjb-settings-id="language_login"><a href="/login">เข้าสู่ระบบ</a></span>
              </div>
            </div>
            <div className="hamburger hidden--desktop">
              <div className="hamburger__slices">
                <div className="hamburger__slice hamburger--slice-1"></div>
                <div className="hamburger__slice hamburger--slice-2"></div>
                <div className="hamburger__slice hamburger--slice-3"></div>
                <div className="hamburger__slice hamburger--slice-4"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__content header__content--mobile background-{{ section.settings.mobile_header_dropdown_color | color_scheme_class }}"></div>
      </div>
    </header >
  )
}