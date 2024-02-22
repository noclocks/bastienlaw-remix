// import {useState} from "react";
import {MouseEvent} from "react";
import Logo from "../wp-content/uploads/sites/1302270/2021/06/logo.jpg"

export const Header = () => {
  // const [currentMenuItemElement, setCurrentMenuItem] = useState('Home');

  const handleMouseOver = (e: MouseEvent) => {
    const currentMenuItem = document.querySelector('.current-menu-item') as HTMLLIElement;

    console.log('Current Menu Item Mouse Over', currentMenuItem);

    // TODO: Apply update to state `onClick`
    if (currentMenuItem) {
      currentMenuItem.classList.remove('current-menu-item');
    }

    const target = e.target as HTMLAnchorElement;
    const parent = target.parentElement as HTMLLIElement;

    // debugger;

    parent.classList.add('et-hover');
    parent.classList.add('et-show-dropdown');
  };

  const handleMouseOut = (e: MouseEvent) => {
    console.log('Mouse Out Event', e);
    // const target = e.target as HTMLAnchorElement;
    // const parent = target.parentElement as HTMLLIElement;

    const currentPage = __remixRouter.state.location.pathname;
    console.log('Current Page', currentPage);

    // debugger;

    // parent.classList.remove('et-hover');
    // parent.classList.remove('et-show-dropdown');

    // // const currentMenuItem = document.querySelector('.current-menu-item') as HTMLLIElement;


  };

  return (
    <header className="et-l et-l--header">
      <div className="et_builder_inner_content et_pb_gutters1">
        <div className="et_pb_with_border et_pb_section et_pb_section_0_tb_header et_section_regular et_pb_section--with-menu">
          <div className="et_pb_row et_pb_row_0_tb_header et_pb_equal_columns et_pb_row--with-menu">
            <div className="et_pb_column et_pb_column_2_5 et_pb_column_0_tb_header  et_pb_css_mix_blend_mode_passthrough">
              <div className="et_pb_module et_pb_image et_pb_image_0_tb_header">
                <a href="/" data-wpel-link="internal">
                  <span className="et_pb_image_wrap ">
                    <img
                      decoding="async"
                      src={Logo}
                      alt="Law Offices of Villard Bastien, LLC"
                      title=""
                      width={500}
                      height={111}
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="et_pb_column et_pb_column_3_5 et_pb_column_1_tb_header fl-vertical-center  et_pb_css_mix_blend_mode_passthrough et-last-child et_pb_column--with-menu">
              <div className="et_pb_module et_pb_text et_pb_text_0_tb_header fl-darklinks fl-cta fl-margin-bottom  et_pb_text_align_right et_pb_text_align_center-tablet et_pb_bg_layout_light">
                <div className="et_pb_text_inner">Call my office</div>
              </div>
              <div className="et_pb_module et_pb_text et_pb_text_1_tb_header fl-darklinks fl-cta fl-margin-bottom  et_pb_text_align_right et_pb_text_align_center-tablet et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <span className="nap-item nap-item--phone">
                    <a href="tel:+1-404-865-1952" data-wpel-link="internal">
                      404-865-1952
                    </a>
                  </span>
                </div>
              </div>
              <div
                id="fl-main-nav"
                className="et_pb_module et_pb_menu et_pb_menu_0_tb_header fl-desk-header fl-main-nav et_pb_bg_layout_light  et_pb_text_align_left et_dropdown_animation_fade et_pb_menu--without-logo et_pb_menu--style-inline_centered_logo"
              >
                <div className="et_pb_menu_inner_container clearfix">
                  <div className="et_pb_menu__wrap">
                    <div className="et_pb_menu__menu">
                      <nav className="et-menu-nav">
                        <ul id="menu-main-nav" className="et-menu nav">
                          {/* HOME */}
                          <li className="menu-item current-menu-item menu-item--depth-0">
                            <a
                              href="/"
                              aria-current="page"
                              tabIndex={0}
                              data-wpel-link="internal"
                            >
                              Home
                            </a>
                          </li>
                          {/* ABOUT */}
                          <li className="menu-item menu-item-has-children menu-item--depth-0"
                            onFocus={() => {
                              console.log('About Focus');
                            }}

                            onMouseOver={handleMouseOver}
                            onBlur={() => {
                              console.log('About Blur');
                            }}
                            onMouseOut={handleMouseOut}
                          >
                            <a
                              href="/about"
                              tabIndex={0}
                              data-wpel-link="internal"
                            >
                              About
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item--depth-1">
                                <a
                                  href="/attorney/bastein-villard-s"
                                  tabIndex={0}
                                  data-wpel-link="internal"
                                >
                                  Villard S. Bastien
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children menu-item--depth-2">
                            <a href="/" tabIndex={0}>Practice Areas</a>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item--depth-1">
                                <a
                                  href="nursing-home-abuse/index.htm"
                                  tabIndex={0}
                                  data-wpel-link="internal"
                                >
                                  Nursing Home Abuse
                                </a>
                              </li>
                              <li className="menu-item menu-item-has-children menu-item--depth-1">
                                <a
                                  href="other-practice-areas/index.htm"
                                  tabIndex={0}
                                  data-wpel-link="internal"
                                >
                                  Other Practice Areas
                                </a>
                                <ul className="sub-menu">
                                  <li className="menu-item menu-item--depth-2">
                                    <a
                                      href="business-general-counsel-business-transactions/index.htm"
                                      tabIndex={0}
                                      data-wpel-link="internal"
                                    >
                                      Business General Counsel/ Business
                                      Transactions
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item--depth-2">
                                    <a
                                      href="criminal-law-defense/index.htm"
                                      tabIndex={0}
                                      data-wpel-link="internal"
                                    >
                                      Criminal Law Defense
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item--depth-2">
                                    <a
                                      href="serious-injury/index.htm"
                                      tabIndex={0}
                                      data-wpel-link="internal"
                                    >
                                      Serious Injury
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item--depth-0">
                            <a
                              href="contact/index.htm"
                              tabIndex={0}
                              data-wpel-link="internal"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="et_mobile_nav_menu">
                      <div className="mobile_nav closed">
                        <span className="mobile_menu_bar" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="fl-template"
          className="et_pb_section et_pb_section_1_tb_header fl-template fl-template1 et_section_regular et_pb_section--with-menu"
        >
          <div
            id="fl-sticky-mobile-menu"
            className="et_pb_row et_pb_row_1_tb_header et_pb_equal_columns et_pb_row--with-menu"
          >
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_2_tb_header  et_pb_css_mix_blend_mode_passthrough et-last-child et_pb_column--with-menu">
              <div className="et_pb_module et_pb_menu et_pb_menu_1_tb_header fl-mobile-menu fl-3-column et_pb_section_video_on_hover et_pb_bg_layout_light  et_pb_text_align_left et_dropdown_animation_slide et_pb_menu--without-logo et_pb_menu--style-centered">
                <div className="et_pb_menu_inner_container clearfix">
                  <div className="et_pb_menu__wrap">
                    <div className="et_pb_menu__menu">
                      <nav className="et-menu-nav">
                        <ul
                          id="menu-main-nav-1"
                          className="et-menu nav downwards"
                        >
                          <li className="menu-item current-menu-item menu-item--depth-0">
                            <a
                              href="/"
                              aria-current="page"
                              tabIndex={0}
                              data-wpel-link="internal"
                            >
                              Home
                            </a>
                          </li>
                          <li className="menu-item menu-item-has-children menu-item--depth-0">
                            <a
                              href="about/index.htm"
                              tabIndex={0}
                              data-wpel-link="internal"
                            >
                              About
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item--depth-1">
                                <a
                                  href="attorney/bastein-villard-s/index.htm"
                                  tabIndex={0}
                                  data-wpel-link="internal"
                                >
                                  Villard S. Bastien
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children menu-item--depth-0">
                            <a
                              href="/"
                              tabIndex={0}
                            >
                              Practice Areas
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item--depth-1">
                                <a
                                  href="nursing-home-abuse/index.htm"
                                  tabIndex={0}
                                  data-wpel-link="internal"
                                >
                                  Nursing Home Abuse
                                </a>
                              </li>
                              <li className="menu-item menu-item-has-children menu-item--depth-1">
                                <a
                                  href="other-practice-areas/index.htm"
                                  tabIndex={0}
                                  data-wpel-link="internal"
                                >
                                  Other Practice Areas
                                </a>
                                <ul className="sub-menu">
                                  <li className="menu-item menu-item--depth-2">
                                    <a
                                      href="business-general-counsel-business-transactions/index.htm"
                                      tabIndex={0}
                                      data-wpel-link="internal"
                                    >
                                      Business General Counsel/ Business
                                      Transactions
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item--depth-2">
                                    <a
                                      href="criminal-law-defense/index.htm"
                                      tabIndex={0}
                                      data-wpel-link="internal"
                                    >
                                      Criminal Law Defense
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item--depth-2">
                                    <a
                                      href="serious-injury/index.htm"
                                      tabIndex={0}
                                      data-wpel-link="internal"
                                    >
                                      Serious Injury
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item--depth-0">
                            <a
                              href="contact/index.htm"
                              tabIndex={0}
                              data-wpel-link="internal"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="et_mobile_nav_menu">
                      <div className="mobile_nav closed">
                        <span className="mobile_menu_bar" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="et_pb_button_module_wrapper et_pb_button_0_tb_header_wrapper et_pb_button_alignment_center et_pb_module ">
                <a
                  className="et_pb_button et_pb_button_0_tb_header fl-3-column fl-cta-button fl-email-btn et_pb_bg_layout_light"
                  href="contact/index.htm"
                  data-icon=""
                  data-wpel-link="internal"
                >
                  Email
                </a>
              </div>
              <div className="et_pb_module et_pb_text et_pb_text_2_tb_header fl-3-column et_pb_section_video_on_hover  et_pb_text_align_center et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <span className="et-pb-icon fl-phone-icon"></span>{" "}
                  <span className="nap-item nap-item--phone">
                    <a href="tel:+1-404-865-1952" data-wpel-link="internal">
                      Call
                    </a>
                  </span>
                </div>
              </div>
              <div className="et_pb_module et_pb_code et_pb_code_0_tb_header">
                <div className="et_pb_code_inner"></div>
              </div>
              <div className="et_pb_module et_pb_code et_pb_code_1_tb_header">
                <div className="et_pb_code_inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
