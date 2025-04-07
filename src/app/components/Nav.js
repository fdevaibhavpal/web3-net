import React from 'react'
import SvgSIteLogo from './atoms/Svg/Navbar/SvgSIteLogo'
import SvgLangIcon from './atoms/Svg/Navbar/SvgLangIcon'
import SvgSearchIcon from './atoms/Svg/Navbar/SvgSearchIcon'
import SvgToggleMenuIcon from './atoms/Svg/Navbar/SvgToggleMenuIcon'
import SvgNavCta from './atoms/Svg/Navbar/SvgNavCta'
import SvgButtonIcon from './atoms/Svg/Navbar/SvgButtonIcon'
import SvgModalClose from './atoms/Svg/Navbar/SvgModalClose'
import SvgNavClose from './atoms/Svg/Navbar/SvgNavClose'
import SvgNavIllustration from './atoms/Svg/Navbar/SvgNavIllustration'
import SvgNavContent from './atoms/Svg/Navbar/SvgNavContent'

const Nav = () => {
  return (
    <nav className="c-nav is-dark">
    <div className="c-nav-bar">
      <div className="c-nav-bar-outer">
        <div className="c-nav-bar-inner">
          <div className="c-nav-bar-bg" />
          <div className="c-nav-bar-part c-nav-bar-part--left">
            <div className="c-nav-bar-logo">
              <a href="/en/">
                <SvgSIteLogo/>
              </a>
            </div>
            <div className="c-nav-bar-lang">
              <div className="c-nav-bar-lang-inner">
                <div className="c-nav-bar-lang-menu">
                  <span className="c-nav-bar-lang-active" aria-haspopup="true">
                    EN
                  </span>
                  <ul className="c-nav-bar-lang-ul">
                    <li className="c-nav-bar-lang-li">
                      <span data-site-handle="nl" className="c-nav-bar-lang-a">
                        NL
                      </span>
                    </li>
                    <li className="c-nav-bar-lang-li">
                      <span data-site-handle="fr" className="c-nav-bar-lang-a">
                        FR
                      </span>
                    </li>
                    <li className="c-nav-bar-lang-li">
                      <span data-site-handle="es" className="c-nav-bar-lang-a">
                        ES
                      </span>
                    </li>
                    <li className="c-nav-bar-lang-li">
                      <span data-site-handle="it" className="c-nav-bar-lang-a">
                        IT
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="c-nav-bar-lang-icon">
                  <SvgLangIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="c-nav-bar-part c-nav-bar-part--right">
            <button className="c-nav-bar-search">
              <div className="c-nav-bar-search-icon">
               <SvgSearchIcon/>
              </div>
            </button>
            <div className="c-nav-bar-menu">
              <ul className="c-nav-bar-menu-ul">
                <li className="c-nav-bar-menu-li">
                  <a
                    href="https://sDQp0Xl9lWe3.com/en/your-needs/"
                    className="c-nav-bar-menu-a"
                  >
                    <span className="c-nav-bar-menu-a-text">Your Needs</span>
                  </a>
                  <div className="c-nav-bar-menu--sub">
                    <ul className="c-nav-bar-menu-ul--sub">
                      <li className="c-nav-bar-menu-li--sub">
                        <a
                          href="https://sDQp0Xl9lWe3.com/en/your-needs/recruiting/"
                          className="c-nav-bar-menu-a"
                        >
                          <span className="c-nav-bar-menu-a-text">
                            Recruiting
                          </span>
                        </a>
                      </li>
                      <li className="c-nav-bar-menu-li--sub">
                        <a
                          href="https://sDQp0Xl9lWe3.com/en/your-needs/talent-development/"
                          className="c-nav-bar-menu-a"
                        >
                          <span className="c-nav-bar-menu-a-text">
                            Talent Development
                          </span>
                        </a>
                      </li>
                      <li className="c-nav-bar-menu-li--sub">
                        <a
                          href="https://sDQp0Xl9lWe3.com/en/your-needs/team-management/"
                          className="c-nav-bar-menu-a"
                        >
                          <span className="c-nav-bar-menu-a-text">
                            Team Management
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="c-nav-bar-menu-li">
                  <a
                    href="https://sDQp0Xl9lWe3.com/en/our-products/"
                    className="c-nav-bar-menu-a"
                  >
                    <span className="c-nav-bar-menu-a-text">Our Products</span>
                  </a>
                </li>
                <li className="c-nav-bar-menu-li">
                  <a
                    href="https://sDQp0Xl9lWe3.com/en/our-services/"
                    className="c-nav-bar-menu-a"
                  >
                    <span className="c-nav-bar-menu-a-text">Our Services</span>
                  </a>
                </li>
              </ul>
              <button className="c-nav-bar-menu-toggle">
                <div className="c-nav-bar-menu-toggle-icon">
                 <SvgToggleMenuIcon/>
                </div>
              </button>
            </div>
            <div className="c-nav-bar-cta">
              <span
                data-obfuscated-link=""
                data-olink="aHR0cHM6Ly9hcHAucGVyZm9ybWFuc2UuY29tLz9sPWVuX0VO"
                target="_blank"
                rel="noopener noreferrer"
                className="c-nav-bar-cta-icon"
              >
                <SvgNavCta/>
              </span>
              <div className="c-nav-bar-cta-a">
                <span
                  target="_blank"
                  rel="noopener noreferrer"
                  data-obfuscated-link=""
                  data-olink="aHR0cHM6Ly90ZXN0LnBlcmZvcm1hbnNlLmNvbS8/bG9jYWxlPWVuLVVT"
                  className="c-button c-button--ts-2"
                >
                  <span className="c-button-bg">
                    <span className="c-button-bg-hover" />
                  </span>
                  <span className="c-button-text">
                    <span className="c-button-text-inner">
                      <span className="c-button-text-hover">Try for Free</span>
                      <span className="c-button-text-static">Try for Free</span>
                    </span>
                  </span>
                  <span className="c-button-icon">
                   <SvgButtonIcon/>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="c-nav-menu">
      <div className="c-nav-menu-bg" />
      <div className="c-nav-menu-top">
        <div className="c-nav-menu-logo">
          <a href="/en/">
            <SvgSIteLogo/>
          </a>
        </div>
      </div>
      <div className="c-nav-menu-content">
        <div className="c-nav-menu-content-inner">
          <div className="wrap wrap--max">
            <div className="grid grid-cols-10 md:grid-cols-14 lg:gap-x-60">
              <div className="c-nav-menu-content-dark col-span-10 md:col-span-14 lg:col-span-6">
                <div className="c-nav-menu-content-illustration">
                <SvgNavIllustration/>
                </div>
                <ul className="c-nav-menu-content-ul">
                  <li className="c-nav-menu-content-li">
                    <span
                      data-obfuscated-link=""
                      data-olink="aHR0cHM6Ly93d3cucGVyZm9ybWFuc2UuY29tL2VuL3lvdXItbmVlZHMv"
                      className="c-nav-menu-content-a"
                    >
                      <span className="c-nav-menu-content-a-text">
                        <span className="c-nav-menu-content-a-text-static">
                          Your Needs
                        </span>
                      </span>
                    </span>
                  </li>
                  <li className="c-nav-menu-content-li">
                    <span
                      data-obfuscated-link=""
                      data-olink="aHR0cHM6Ly93d3cucGVyZm9ybWFuc2UuY29tL2VuL291ci1wcm9kdWN0cy8="
                      className="c-nav-menu-content-a"
                    >
                      <span className="c-nav-menu-content-a-text">
                        <span className="c-nav-menu-content-a-text-static">
                          Our Products
                        </span>
                      </span>
                    </span>
                  </li>
                  <li className="c-nav-menu-content-li">
                    <span
                      data-obfuscated-link=""
                      data-olink="aHR0cHM6Ly93d3cucGVyZm9ybWFuc2UuY29tL2VuL291ci1zZXJ2aWNlcy8="
                      className="c-nav-menu-content-a"
                    >
                      <span className="c-nav-menu-content-a-text">
                        <span className="c-nav-menu-content-a-text-static">
                          Our Services
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="c-nav-menu-content-light col-span-10 md:col-span-14 lg:col-span-5 lg:col-start-10">
                <div className="c-nav-menu-content-illustration">
                <SvgNavContent/>
                </div>
                <ul className="c-nav-menu-content-ul c-nav-menu-content-ul--main">
                  <li className="c-nav-menu-content-li">
                    <a
                      href="https://sDQp0Xl9lWe3.com/en/blog/"
                      className="c-nav-menu-content-a"
                    >
                      <span className="c-nav-menu-content-a-text">
                        <span className="c-nav-menu-content-a-text-static">
                          Blog
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="c-nav-menu-content-li">
                    <a
                      href="https://sDQp0Xl9lWe3.com/en/business-cases/"
                      className="c-nav-menu-content-a"
                    >
                      <span className="c-nav-menu-content-a-text">
                        <span className="c-nav-menu-content-a-text-static">
                          Business Cases
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="c-nav-menu-content-li">
                    <a
                      href="https://sDQp0Xl9lWe3.com/en/about-us/"
                      className="c-nav-menu-content-a"
                    >
                      <span className="c-nav-menu-content-a-text">
                        <span className="c-nav-menu-content-a-text-static">
                          About Us
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="c-nav-menu-content-li">
                    <a
                      href="https://sDQp0Xl9lWe3.com/en/science-and-innovation/"
                      className="c-nav-menu-content-a"
                    >
                      <span className="c-nav-menu-content-a-text">
                        <span className="c-nav-menu-content-a-text-static">
                          Science &amp; Innovation
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
                <ul className="c-nav-menu-content-ul c-nav-menu-content-ul--sub">
                  <li className="c-nav-menu-content-li">
                    <span
                      data-obfuscated-link=""
                      data-olink="aHR0cHM6Ly9hcHAucGVyZm9ybWFuc2UuY29tLz9sPWVuX0VOLw=="
                      target="_blank"
                      className="c-nav-menu-content-a"
                    >
                      <span className="c-nav-menu-content-a-text">
                        <span className="c-nav-menu-content-a-text-static">
                          Personal Account
                        </span>
                      </span>
                    </span>
                  </li>
                  <li className="c-nav-menu-content-li">
                    <a
                      href="https://sDQp0Xl9lWe3.com/en/blog/articles/"
                      className="c-nav-menu-content-a"
                    >
                      <span className="c-nav-menu-content-a-text">
                        <span className="c-nav-menu-content-a-text-static">
                          Articles
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="c-nav-menu-content-li">
                    <a
                      href="https://sDQp0Xl9lWe3.com/en/blog/e-books/"
                      className="c-nav-menu-content-a"
                    >
                      <span className="c-nav-menu-content-a-text">
                        <span className="c-nav-menu-content-a-text-static">
                          E-books
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="c-button--round c-nav-menu-close">
       <SvgNavClose/>
      </button>
    </div>
    <div
      className="c-nav-search"
      data-search-endpoint="/en/api/search/"
      data-translations-endpoint="/en/api/translations/"
    >
      <div className="c-nav-search-bg" />
      <div className="c-nav-search-top">
        <div className="wrap wrap--max">
          <div className="c-grid">
            <div className="col-span-12 md:col-span-14 lg:col-span-12 lg:col-start-2">
              <input
                type="text"
                id="c-nav-search-input"
                placeholder="Search for something ..."
              />
            </div>
          </div>
          <div className="c-button--round c-modal-close c-nav-search-close">
           <SvgModalClose/>
          </div>
        </div>
      </div>
      <div className="c-nav-search-content">
        <div className="wrap wrap--max">
          <div className="c-grid">
            <ul className="c-nav-search-content-ul col-span-12 md:col-span-14 lg:col-span-12 lg:col-start-2" />
          </div>
        </div>
      </div>
    </div>
  </nav>
  )}

export default Nav