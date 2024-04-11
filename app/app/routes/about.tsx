import type {
  LinksFunction,
  // LoaderFunctionArgs
} from "@remix-run/node";
import {
  // MetaFunction,
  // useLoaderData,
  isRouteErrorResponse,
  useRouteError
} from "@remix-run/react";

// Styles
import "../styles/about.css"

// Components
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";

export const links: LinksFunction = () => (
  [
    // your links here
  ]
);

// export const meta: MetaFunction = () => [
//   // your meta here
// ];


// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   return null;
// };

export default function About() {
  // const data = useLoaderData<typeof loader>()
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
                    <div className="et_pb_column et_pb_column_4_4 et_pb_column_0_tb_body et_pb_css_mix_blend_mode_passthrough et-last-child">
                      <div className="et_pb_module et_pb_text et_pb_text_0_tb_body et_pb_text_align_center et_pb_bg_layout_light">
                        <div className="et_pb_text_inner">
                          <p>Dedication. Skill. Innovation.
                            <br/>
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
                      className="et_pb_column et_pb_column_4_4 et_pb_column_1_tb_body  et_pb_css_mix_blend_mode_passthrough et-last-child">
                      <div
                        className="et_pb_module et_pb_dcsbcm_divi_breadcrumbs_module et_pb_dcsbcm_divi_breadcrumbs_module_0_tb_body">
                        <div className="et_pb_module_inner">
                          <ol className="dcsbcm_divi_breadcrumbs">
                            <li className="dcsbcm_divi_breadcrumb">
                              <a href="/">
                                <span>
                                  Home
                                </span>
                              </a>
                              <meta property="position" content="1"/>
                            </li>
                            <span className="dcsbcm_separator">&nbsp;&raquo;&nbsp;</span><span
                              className="dcsbcm_divi_breadcrumb dcsbcm_divi_breadcrumb-active">About</span>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="et_pb_section et_pb_section_4_tb_body et_pb_with_background et_section_regular">
                  <div className="et_pb_row et_pb_row_2_tb_body">
                    <div className="et_pb_column et_pb_column_2_3 et_pb_column_2_tb_body fl-main-content  et_pb_css_mix_blend_mode_passthrough">
                      <div className="et_pb_module et_pb_post_content et_pb_post_content_0_tb_body">
                        <div id="page" className="hfeed site">
                          <h1>When You Put Your Trust In My Firm, I Rise To The Challenge</h1>
                          <p>My name is Villard Bastien, and welcome to my firm. At my office, I
                            strive to offer the best possible service to families across Georgia
                            who are struggling with inadequate care and negligence. Throughout
                            my practice, I put people first and use my nearly 25 years of
                            experience to offer real solutions that can impact your life
                            quickly.</p>
                          <p>Learn about my professional history:</p>
                          <ul>
                            <li>
                              <a href="/bastein-villard-s">
                                Villard Bastien
                              </a>
                            </li>
                          </ul>
                          <h2>How I Demonstrate My Commitment To My Clients</h2>
                          <p>When I moved to Atlanta in 2008, I opened up the <span
                            className="nap-item nap-item--name">Law Offices of Villard Bastien,
                            LLC</span>, where I mainly represent individuals who sustain
                            injuries or who have died as a result of the negligence and
                            malpractice of individuals or corporations, including those who have
                            <a href="/nursing-home-abuse"> suffered abuse in nursing homes</a>.
                            This is after years of studying law across the globe in pursuit of
                            my master&rsquo;s degree in international business law and even serving as
                            an insurance adjuster for large insurance companies.
                          </p>
                          <p>I have taken a different approach to my <a
                            href="../other-practice-areas">representation of injured
                            individuals</a> and estate claims for the death of their loved
                            ones. Each client becomes personal and has an intimate direction in
                            their case. No two cases are similar. Each client gets the attention
                            and care needed.</p>
                          <p>I believe in giving back to the community - that we are all better
                            off when we come together and that putting selfishness aside is an
                            ideal way to multiply one&rsquo;s capabilities. I serve on multiple
                            community boards, including the Community Assistance Center of Sandy
                            Springs and Dunwoody and the Rotary Club of Dunwoody.</p>
                          <h2>Speak With Me About Your Legal Needs</h2>
                          <p>I am a native New Yorker, licensed to practice law in Georgia, New
                            York and New Jersey. I speak fluent English, Spanish and French. You
                            can reach my office in Atlanta by calling me at <span
                              className="nap-item nap-item--phone">
                                <a href="tel:+1-404-865-1952">404-865-1952</a>
                                </span> or <a
                                href="../contact">
                                  emailing me
                                  </a>.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="et_pb_column et_pb_column_1_3 et_pb_column_3_tb_body  et_pb_css_mix_blend_mode_passthrough et-last-child">
                      <div id="nav-practice-silo" className="et_pb_module et_pb_sidebar_0_tb_body nav-practice-silo et_pb_widget_area clearfix et_pb_widget_area_left et_pb_bg_layout_light">
                        <div id="nav_menu-2" className="et_pb_widget widget_nav_menu">
                          <h2 className="widgettitle">Practice Areas</h2>
                          <div className="menu-practice-areas-container">
                            <ul id="menu-practice-areas" className="menu">
                              <li className="menu-item menu-item--depth-0">
                                <a href="../nursing-home-abuse" tabIndex={0}>
                                Nursing Home Abuse
                                </a>
                              </li>
                              <li className="menu-item menu-item-has-children menu-item--depth-0">
                                <a href="../other-practice-areas" tabIndex={0}>
                                  Other Practice Areas
                                </a>
                                <ul className="sub-menu">
                                  <li className="menu-item menu-item--depth-1"><a
                                    href="../business-general-counsel-business-transactions"
                                    tabIndex={0}>Business
                                    General Counsel/ Business Transactions</a></li>
                                  <li className="menu-item menu-item--depth-1"><a
                                    href="../criminal-law-defense"
                                    tabIndex={0}>Criminal
                                    Law Defense</a></li>
                                  <li className="menu-item menu-item--depth-1"><a
                                    href="../serious-injury" tabIndex={0}>
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
