import {Footer} from '../components/Footer';
import {Header} from '../components/Header';

import '../styles/serious-injury.css';

export default function SeriousInjury() {
  return (
    <div id="page-container">
      <div id="et-boc" className="et-boc">
        <Header />
        <div id="et-main-area">
        <div id="main-content">
          <div className="et-l et-l--body">
            <div className="et_builder_inner_content et_pb_gutters1">
              <div className="et_pb_section et_pb_section_1_tb_body et_pb_with_background et_section_regular">
                <div className="et_pb_row et_pb_row_0_tb_body">
                  <div
                    className="et_pb_column et_pb_column_4_4 et_pb_column_0_tb_body et_pb_css_mix_blend_mode_passthrough et-last-child">
                    <div
                      className="et_pb_module et_pb_text et_pb_text_0_tb_body et_pb_text_align_center et_pb_bg_layout_light">
                      <div className="et_pb_text_inner">
                        <p>
                          Dedication. Skill. Innovation.
                          <br />
                          Trust The{' '}
                          <strong>
                          <span className="nap-item nap-item--name">
                          Law Offices of Villard Bastien, LLC
                          </span>
                        </strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="et_pb_section et_pb_section_3_tb_body fl-breadcrumbs et_pb_with_background et_section_regular">
                <div className="et_pb_row et_pb_row_1_tb_body">
                  <div
                    className="et_pb_column et_pb_column_4_4 et_pb_column_1_tb_body et_pb_css_mix_blend_mode_passthrough et-last-child">
                    <div
                      className="et_pb_module et_pb_dcsbcm_divi_breadcrumbs_module et_pb_dcsbcm_divi_breadcrumbs_module_0_tb_body">
                      <div className="et_pb_module_inner">
                        <ol className="dcsbcm_divi_breadcrumbs">
                          <li className="dcsbcm_divi_breadcrumb">
                            <a href="/">
                              <span>Home</span>
                            </a>
                            <meta property="position" content="1" />
                          </li>
                          <span className="dcsbcm_separator">&nbsp;&raquo;&nbsp;</span><span
                            className="dcsbcm_divi_breadcrumb dcsbcm_divi_breadcrumb-active">Serious Injury</span>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="et_pb_section et_pb_section_4_tb_body et_pb_with_background et_section_regular">
                <div className="et_pb_row et_pb_row_2_tb_body">
                  <div
                    className="et_pb_column et_pb_column_2_3 et_pb_column_2_tb_body fl-main-content et_pb_css_mix_blend_mode_passthrough">
                    <div className="et_pb_module et_pb_post_content et_pb_post_content_0_tb_body">
                      <h1>Extensive Experience in Injury Matters</h1>
                      <p>
                        Mr. Bastien has extensive experience trying, prosecuting, defending and
                        evaluating Injury. He understands that the insurance companies drive the
                        settling and trial process for the insured tortfeasors. He was a former defense
                        Attorney for the insurance companies and an insurance company employee. He
                        understands the way they think, settle cases, trial strategies and what drives.
                        Whatever the serious injury,
                      </p>
                      <ul>
                        <li>Wrongful death</li>
                        <li>Medical Malpractice</li>
                        <li>Nursing Home Abuse and Negligence</li>
                        <li>Trucking Accidents</li>
                        <li>Slip and Falls</li>
                      </ul>
                      <p>Attorney Bastien will be your advocate.</p>
                      <p>
                        Do not wait. Call me now at{' '}
                        <span className="nap-item nap-item--phone"><a href="tel:+1-404-378-4344"
                           >404-378-4344</a></span>
                        {' '}for a free consultation. I speak English, Spanish and French.
                      </p>
                    </div>
                  </div>
                  <div
                    className="et_pb_column et_pb_column_1_3 et_pb_column_3_tb_body et_pb_css_mix_blend_mode_passthrough et-last-child">
                    <div id="nav-practice-silo"
                      className="et_pb_module et_pb_sidebar_0_tb_body nav-practice-silo et_pb_widget_area clearfix et_pb_widget_area_left et_pb_bg_layout_light">
                      <div id="nav_menu-2" className="et_pb_widget widget_nav_menu">
                        <h2 className="widgettitle">Practice Areas</h2>
                        <div className="menu-practice-areas-container">
                          <ul id="menu-practice-areas" className="menu">
                            <li className="menu-item menu-item--depth-0">
                              <a href="nursing-home-abuse" tabIndex={0}>
                                Nursing Home Abuse
                              </a>
                            </li>
                            <li className="menu-item menu-item-has-children current-menu-parent menu-item--depth-0">
                              <a href="other-practice-areas" tabIndex={0}>
                                Other Practice Areas
                              </a>
                              <ul className="sub-menu">
                                <li className="menu-item menu-item--depth-1">
                                  <a href="business-general-counsel-business-transactions" tabIndex={0}>
                                    Business General Counsel/ Business Transactions
                                  </a>
                                </li>
                                <li className="menu-item menu-item--depth-1">
                                  <a href="criminal-law-defense" tabIndex={0}>
                                    Criminal Law Defense
                                  </a>
                                </li>
                                <li className="menu-item current-menu-item menu-item--depth-1">
                                  <a href="/" aria-current="page" tabIndex={0}>
                                    Serious Injury
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
        </div>
      </div>
    </div>
  )
}
