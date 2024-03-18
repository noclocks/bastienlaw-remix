import type {LinksFunction} from "@remix-run/node";
import {MetaFunction, isRouteErrorResponse, useRouteError} from "@remix-run/react";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";

// Images
import BastienVillardSImage from "../wp-content/uploads/sites/1302270/2022/06/bastien_villard_s.jpg";

// Styles
import "../wp-content/index_files/cc40ba9a93e87e26f1018e89bcb01971f6d6ca0432cdb0afa00588fa621b5cb7.css"
import "../wp-content/index_files/cc40ba9a93e87e26f1018e89bcb019711766ec8043887571a4c9e737f74cf36c.css"
import "../styles/mobilenav.css"
import "../styles/dsethtml.css"
import "../styles/dsethtml2.css"
import "../styles/home.css";
import "../styles/about.css"
import "../styles/bastein-villard-s.css";

export const links: LinksFunction = () => (
  [
    // your links here
  ]
);

export const meta: MetaFunction = () => [
  // your meta here
];

export default function RouteComponent() {
  return (
    <div id="page-container">
      <div id="et-boc" className="et-boc">
        <Header />
        <div id="et-main-area">
          <div id="main-content">
            <article id="post-46048"
              className="et_pb_post post-46048 people type-people status-publish has-post-thumbnail hentry">
              <div className="entry-content">
                <div className="et-l et-l--post">
                  <div className="et_builder_inner_content et_pb_gutters1">
                    <div className="et_pb_section et_pb_section_4 et_pb_with_background et_section_regular">
                      <div className="et_pb_row et_pb_row_2">
                        <div
                          className="et_pb_column et_pb_column_4_4 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div
                            className="et_pb_module et_pb_text et_pb_text_15  et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>Dedication. Skill. Innovation.<br /> Trust The <strong><span
                                className="nap-item nap-item--name">Law Offices of
                                Villard Bastien, LLC</span></strong>.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="et_pb_section et_section_regular">
                      <div className="et_pb_row et_pb_row_3">
                        <div className="et_pb_with_border et_pb_column_1_3 et_pb_column et_pb_column_4 fl-main-content  et_pb_css_mix_blend_mode_passthrough"
                          id="fl-main-content">
                          <div
                            className="et_pb_module fl_people_single fl_people_single_12 fl-people-image">
                            <div className="et_pb_module_inner">
                              <img
                                decoding="async"
                                className="bio-image"
                                src={BastienVillardSImage}
                                alt="profile"
                                width="215" height="215" loading="lazy"
                              />
                            </div>
                          </div>
                          <div
                            className="et_pb_module et_pb_text et_pb_text_16  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h1>Villard S. Bastein</h1>
                            </div>
                          </div>
                          <div
                            className="et_pb_module et_pb_text et_pb_text_17  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">Attorney</div>
                          </div>
                          <div
                            className="et_pb_module et_pb_text et_pb_text_19 people-title  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2><strong>Phone: </strong></h2>
                            </div>
                          </div>
                          <div className="et_pb_module fl_people_single fl_people_single_14">
                            <div className="et_pb_module_inner">
                              <span><a href="tel:+1-404-865-1952">
                                (404) 865-1952
                              </a></span>
                            </div>
                          </div>
                          <div
                            className="et_pb_module et_pb_text et_pb_text_20 people-title  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2><strong>Fax: </strong></h2>
                            </div>
                          </div>
                          <div className="et_pb_module fl_people_single fl_people_single_15">
                            <div className="et_pb_module_inner">
                              <span className="nap-fax">470-275-3906</span>
                            </div>
                          </div>
                          <div
                            className="et_pb_module et_pb_text et_pb_text_21 people-title  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2><strong>Email: </strong></h2>
                            </div>
                          </div>
                          <div id="email-me"
                            className="et_pb_module et_pb_text et_pb_text_22 fl-main-content fl-main-content-title  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <div
                                className="et_pb_button_module_wrapper et_pb_button_wrapper et_pb_button_alignment_ et_pb_module email_me_module_1">
                                <a className="et_pb_button et_pb_bg_layout_light et_pb_email_attorney"
                                  href="#email_attorney" data-form_id="3"
                                  data-post_id="46048">Email me</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_with_border et_pb_column_2_3 et_pb_column et_pb_column_5 fl-main-content  et_pb_css_mix_blend_mode_passthrough et-last-child"
                          id="fl-main-content">
                          <div
                            className="et_pb_module et_pb_text et_pb_text_23  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2><span style={{
                                fontSize: '28px',
                              }}>Areas Of Practice</span></h2>
                            </div>
                          </div>
                          <div className="et_pb_module fl_people_single fl_people_single_17">
                            <div className="et_pb_module_inner">
                              <ul className="bio-list">
                                <li className="bio-list__item">Personal Injury</li>
                                <li className="bio-list__item">Wrongful Death</li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="et_pb_module et_pb_text et_pb_text_24 fl-main-content  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>Bar Admissions</h2>
                            </div>
                          </div>
                          <div
                            className="et_pb_module fl_people_single fl_people_single_18 fl-main-content">
                            <div className="et_pb_module_inner">
                              <ul className="bio-list">
                                <li className="bio-list__item">Georgia</li>
                                <li className="bio-list__item">New York</li>
                                <li className="bio-list__item">New Jersey</li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="et_pb_module et_pb_text et_pb_text_25 fl-main-content  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>Education</h2>
                            </div>
                          </div>
                          <div
                            className="et_pb_module fl_people_single fl_people_single_19 fl-main-content">
                            <div className="et_pb_module_inner">
                              <ul className="bio-list">
                                <li className="bio-list__item"><strong>McGeorge School of Law,
                                  University of the Pacific</strong>, Sacramento,
                                  California <ul>
                                    <li>LL.M. </li>
                                    <li>Major:
                                      Business Practice
                                    </li>
                                  </ul>
                                </li>
                                <li className="bio-list__item"><strong>State University of New
                                  York</strong>, Stony Brook, New York </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="et_pb_module et_pb_text et_pb_text_26 fl-main-content  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>Pro Bono Activities</h2>
                            </div>
                          </div>
                          <div
                            className="et_pb_module fl_people_single fl_people_single_20 fl-main-content">
                            <div className="et_pb_module_inner">
                              <ul className="bio-list">
                                <li className="bio-list__item">
                                  Former Chairman, current Member of the Dunwoody Zoning
                                  and Appeals Board, Present </li>
                                <li className="bio-list__item">
                                  Former Board Member, current Member of Leadership Sandy
                                  Springs, Present </li>
                                <li className="bio-list__item">
                                  Secretary to the Board of the Community Assistance
                                  Center of Sandy Springs and Dunwoody, Present </li>
                                <li className="bio-list__item">
                                  Member of the Dunwoody Perimeter Chamber, Present </li>
                                <li className="bio-list__item">
                                  Former President, current Board Member of the Dunwoody
                                  Rotary, Present </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="et_pb_module et_pb_text et_pb_text_28 fl-main-content  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>Past Positions</h2>
                            </div>
                          </div>
                          <div
                            className="et_pb_module fl_people_single fl_people_single_22 fl-main-content">
                            <div className="et_pb_module_inner">
                              <ul className="bio-list">
                                <li className="bio-list__item">
                                  District Attorney’s Office in Queens New York </li>
                                <li className="bio-list__item">
                                  Bufete Mullerat &amp; Roca, Intern </li>
                                <li className="bio-list__item">
                                  State Farm Insurance Company </li>
                                <li className="bio-list__item">
                                  McCabe, Collins, McGeough, and Fowler, Attorney </li>
                                <li className="bio-list__item">
                                  St. Paul Insurance Company, Defense Attorney </li>
                                <li className="bio-list__item">
                                  Cohen and Jaffe, Attorney </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="et_pb_module et_pb_text et_pb_text_29 fl-main-content  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>Languages</h2>
                            </div>
                          </div>
                          <div
                            className="et_pb_module fl_people_single fl_people_single_23 fl-main-content">
                            <div className="et_pb_module_inner">
                              <ul className="bio-list">
                                <li className="bio-list__item">Spanish</li>
                                <li className="bio-list__item">French</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="et_post_meta_wrapper">
              </div>
            </article>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return <div />
  }
  return <div />
}
