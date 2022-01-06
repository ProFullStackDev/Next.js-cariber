import Link from "next/link";
import Img from "./image"

interface Menu {
  url: string,
  name: string
}

export default function Header() {
  const menu: Menu[] = [
    { url: '/courses', name: 'คอร์สทั้งหมด' },
    { url: 'https://blog.cariber.co/', name: 'บทความ' },
    { url: '/review', name: 'รีวิว' },
  ];

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-content header-content-desktop background-dark">
          <div className="container header-container media" style={{ height: "43.5px" }}>
            <Link href="/" >
              <a className="logo" style={{ width: 120, height: 41.8833 }}>
                <Img className="logo-image"
                  src="/header/header-logo.png"
                  alt="Header Logo"
                  width={120}
                  height={41.8833} />
              </a>
            </Link>
            <div className="header-block header-switch-content header-block-menu media-body">
              <div className="link-list justify-content-right">
                {menu.map((value, index) => {
                  return (
                    <a key={index} className="link-list-link" href={value.url} rel="noopener">
                      {value.name}
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
                  <Link href="/login">
                    เข้าสู่ระบบ
                  </Link>
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