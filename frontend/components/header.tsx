import Image from "next/image"

interface Menu {
  url: string,
  name: string
}

export default function Header() {
  const menu: Menu[] = [
    { url: '/courses', name: 'คอร์สทั้งหมด' },
    { url: '/blog', name: 'บทความ' },
    { url: '/review', name: 'รีวิว' },
  ];

  return (
    <header className="header header-overlay">
      <div className="header-wrap">
        <div className="header-content header-content-desktop background-dark">
          <div className="container header-container media" style={{height: "43.5px"}}>
            <a className="logo" href="" style={{width: 120, height: 41.8833}}>
              <Image className="logo-image"
                src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/gloao1YVR4yKwUK3mHDJ_Logo-01-05.png"
                alt=""
                width={120}
                height={41.8833} />
            </a>
            <div className="header-block header-switch-content header-block-menu media-body">
              <div className="link-list justify-content-right">
                {menu.map((v, i) => {
                  return (
                    <a key={i} className="link-list-link" href={v.url} rel="noopener">
                      {v.name}
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="header-block header-switch-content header-block-cta">
              <a className="btn btn-small btn-solid btn- background-dark" href="">
                ซื้อแพ็กเกจรายปี
              </a>
            </div>
            <div className="header-block header-switch-content header-block-user header-block-mr0">
              <div className="user">
                <span className="user-login">
                  <a href="/login">
                    เข้าสู่ระบบ
                  </a>
                </span>
              </div>
            </div>
            <div className="hamburger hidden-desktop">
              <div className="hamburger-slices">
                <div className="hamburger-slice hamburger-slice-1"></div>
                <div className="hamburger-slice hamburger-slice-2"></div>
                <div className="hamburger-slice hamburger-slice-3"></div>
                <div className="hamburger-slice hamburger-slice-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}