import Link from "next/link";
import { useEffect, useState } from "react";
import Img from "./image"

interface Menu {
  url: string,
  name: string
}

export default function Header() {
  const [hamburgerOpened, setHamburgerOpened] = useState(false);
  const menu: Menu[] = [
    { url: '/library', name: 'คอร์สของฉัน' },
    { url: '/courses', name: 'คอร์สทั้งหมด' },
    { url: 'https://blog.cariber.co/', name: 'บทความ' },
    { url: '/reviews', name: 'รีวิว' },
  ];

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHamburgerOpened(false)
    });
  }, [])

  function switchHamburger() {
    setHamburgerOpened(!hamburgerOpened)
  }

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-content header-content-desktop background-dark">
          <div className="container header-container media" style={{ height: "43.5px" }}>
            <Link href="/" >
              <a className="logo" style={{ width: 120, height: 41.8833 }}>
                <Img className="logo-image"
                  src="/header/header-logo.png"
                  width={120}
                  height={41.8833}
                  alt="Header Logo"
                   />
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
            <div className={`hamburger hidden-desktop ${hamburgerOpened && "hamburger-opened"}`} onClick={switchHamburger}>
              <div className="hamburger-slices">
                <div className="hamburger-slice hamburger-slice-1"></div>
                <div className="hamburger-slice hamburger-slice-2"></div>
                <div className="hamburger-slice hamburger-slice-3"></div>
                <div className="hamburger-slice hamburger-slice-4"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-content header-content-mobile background-dark" style={{ display: `${hamburgerOpened ? "block" : "none"}` }}>
          <div className="header-block header-switch-content header-block-menu">
            <div className="link-list">
              {menu.map((value, index) => {
                return (
                  <a key={index} className="link-list-link" href={value.url}>
                    {value.name}
                  </a>
                )
              })}
            </div>
            <div className="header-block header-switch-content header-block-cta">
              <a className="btn btn-small btn-full" href="https://shp.ee/ncpeyxv">
                ซื้อแพ็กเกจรายปี
              </a>
            </div>
            <div className="header-block header-switch-content header-block-user">
              <span className="user-login">
                <Link href="/login" passHref={true}>
                  <a>
                    เข้าสู่ระบบ
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}