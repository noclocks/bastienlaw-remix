import type {MetaFunction} from "@remix-run/node";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

// ASSETS //
// Fonts
import "../styles/typography.css"

// Images
import Icon1 from "../wp-content/uploads/sites/1302270/2021/06/icon1.png"
import Icon2 from "../wp-content/uploads/sites/1302270/2021/06/icon2.png"
import Icon3 from "../wp-content/uploads/sites/1302270/2021/06/icon3.png"
import NursingHomeImg from "../wp-content/uploads/sites/1302270/2021/06/nursing.jpg"
import VillardImg from "../wp-content/uploads/sites/1302270/2022/06/Villard-S-Bastein.jpg"

// Styles
import "../styles/dsethtml.css"
import "../styles/dsethtml2.css"
import "../styles/home.css";

export const meta: MetaFunction = () => {
  return [
    {title: "Bastien Law"},
    {name: "description", content: "Welcome to Remix (SPA Mode)!"},
  ];
};

export default function Index() {
  return (
    <>
      <title>
        Nursing Home Abuse Attorney | Law Offices of Villard Bastien, LLC |
        Medical Malpractice
      </title>
      {/* <meta
        name="description"
        content="Contact the Law Offices of Villard Bastien, LLC, in Atlanta if you or a loved one has suffered a personal injury or nursing home abuse. Call 404-865-1952."
      /> */}
      {/* <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      /> */}
      {/* <meta
        name="google-site-verification"
        content="huJ9AQj2roilduJIwvUPUo-wcMpVU3r2EVpZY9dmT_0"
      /> */}
      {/* <link rel="canonical" href="/" /> */}
      {/* <meta name="generator" content="All in One SEO (AIOSEO) 4.4.8" /> */}
      {/* <meta property="og:locale" content="en_US" /> */}
      {/* <meta
        property="og:site_name"
        content="Law Offices of Villard Bastien, LLC"
      /> */}
      {/* <meta property="og:type" content="website" /> */}
      {/* <meta
        property="og:title"
        content="Nursing Home Abuse Attorney | Law Offices of Villard Bastien, LLC | Medical Malpractice"
      /> */}
      {/* <meta
        property="og:description"
        content="Contact the Law Offices of Villard Bastien, LLC, in Atlanta if you or a loved one has suffered a personal injury or nursing home abuse. Call 404-865-1952."
      /> */}
      {/* <meta property="og:url" content="https://www.bastienlaw.com/" /> */}
      {/* <meta
        property="og:image"
        content="https://www.bastienlaw.com/wp-content/uploads/sites/1302270/2021/06/og.jpg"
      /> */}
      {/* <meta
        property="og:image:secure_url"
        content="https://www.bastienlaw.com/wp-content/uploads/sites/1302270/2021/06/og.jpg"
      /> */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {/* <meta
        name="twitter:title"
        content="Nursing Home Abuse Attorney | Law Offices of Villard Bastien, LLC | Medical Malpractice"
      /> */}
      {/* <meta
        name="twitter:description"
        content="Contact the Law Offices of Villard Bastien, LLC, in Atlanta if you or a loved one has suffered a personal injury or nursing home abuse. Call 404-865-1952."
      /> */}
      {/* <meta
        name="twitter:image"
        content="https://www.bastienlaw.com/wp-content/uploads/sites/1302270/2021/06/og.jpg"
      /> */}
      {/* <link
        rel="alternate"
        type="application/rss+xml"
        title="Law Offices of Villard Bastien, LLC » Feed"
        href="feed/index.htm"
      /> */}
      {/* <meta content="Divi Child v.3.19.18" name="generator" /> */}
      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=2.0"
      /> */}
      {/* <link rel="https://api.w.org/" href="wp-json/index.htm" /> */}
      {/* <link
        rel="alternate"
        type="application/json"
        href="wp-json/wp/v2/pages/6"
      /> */}
      {/* <link
        rel="EditURI"
        type="application/rsd+xml"
        title="RSD"
        href="https://www.bastienlaw.com/xmlrpc.php?rsd"
      /> */}
      {/* <link rel="shortlink" href="/" /> */}
      {/* <link
        rel="alternate"
        type="application/json+oembed"
        href="https://www.bastienlaw.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.bastienlaw.com%2F"
      /> */}
      {/* <link
        rel="alternate"
        type="text/xml+oembed"
        href="https://www.bastienlaw.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.bastienlaw.com%2F&format=xml"
      /> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      {/* <link
        rel="preload"
        as="image"
        href={Logo}
        fetchPriority="high"
      /> */}
      {/* <link
        rel="preload"
        as="image"
        href="../wp-content/uploads/sites/1302270/2021/06/nursing.jpg"
      // fetchpriority="high"
      /> */}
      {/* <img
        alt="nursing.jpg"
        // src="../wp-content/uploads/sites/1302270/2021/06/nursing.jpg"
        src={NursingHomeImg}
      /> */}
      {/* <link
        // rel="preload"
        as="image"
        href="wp-content/uploads/sites/1302270/2022/06/Villard-S-Bastein.jpg"
      // fetchpriority="high"
      /> */}
      {/* <img
        alt="Villard-S-Bastein.jpg"
        // src="../wp-content/uploads/sites/1302270/2022/06/Villard-S-Bastein.jpg"
        src={VillardImg}
      /> */}
      {/* <link
        rel="preload"
        as="image"
        href={BgContentMob}
      // fetchpriority="high"
      /> */}
      {/* <link
        rel="preload"
        as="image"
        href={BgShortFormMob}
      // fetchpriority="high"
      /> */}
      {/* <link
        rel="icon"
        href="../wp-content/uploads/sites/1302270/2021/06/cropped-site-icon-32x32.jpg"
        sizes="32x32"
      /> */}
      {/* <link
        rel="icon"
        href="../wp-content/uploads/sites/1302270/2021/06/cropped-site-icon-192x192.jpg"
        sizes="192x192"
      /> */}
      {/* <link
        rel="apple-touch-icon"
        href="../wp-content/uploads/sites/1302270/2021/06/cropped-site-icon-180x180.jpg"
      /> */}
      {/* <meta
        name="msapplication-TileImage"
        content="../wp-content/uploads/sites/1302270/2021/06/cropped-site-icon-270x270.jpg"
      /> */}
      {/* <link
        // rel="preload"
        as="style"
        // onLoad="this.rel='stylesheet'"
        href="../wp-content/index-files/cc40ba9a93e87e26f1018e89bcb019711766ec8043887571a4c9e737f74cf36c.css"
        media="all"
      // fetchpriority="low"
      /> */}
      <div id="page-container">
        <div id="et-boc" className="et-boc">
          <Header />
          <div id="et-main-area">
            <div id="main-content">
              <article
                id="post-6"
                className="post-6 page type-page status-publish hentry"
              >
                <div className="entry-content">
                  <div className="et-l et-l--post">
                    <div className="et_builder_inner_content et_pb_gutters1">
                      <div className="et_pb_section et_pb_section_0 fl-home-sec-1 et_pb_with_background et_section_regular">
                        <div className="et_pb_with_border et_pb_row et_pb_row_0">
                          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_module et_pb_text et_pb_text_0 fl-margin-bottom  et_pb_text_align_center et_pb_bg_layout_light">
                              <div
                                className="et_pb_text_inner"
                                data-et-multi-view="{'schema':{'content':{'desktop':'<p class=\'fl-home-banner-text\'>A Dedicated Attorney<br \/>Who Is On Your Side<\/p>','tablet':'<p class=\'fl-home-banner-text\'>A Dedicated Attorney Who Is On Your Side<\/p>'}},'slug':'et_pb_text'}"
                                data-et-multi-view-load-tablet-hidden="true"
                              >
                                <p className="fl-home-banner-text">
                                  A Dedicated Attorney
                                  <br />
                                  Who Is On Your Side
                                </p>
                              </div>
                            </div>
                            <div className="et_pb_module et_pb_text et_pb_text_1 fl-margin-bottom  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <p>
                                  For over two decades, I&rsquo;ve combined my passion
                                  for fair advocacy with innovative solutions and
                                  sharp negotiating skills. At the{" "}
                                  <span className="nap-item nap-item--name">
                                    Law Offices of Villard Bastien, LLC
                                  </span>
                                  , I will be your champion.
                                </p>
                              </div>
                            </div>
                            <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_button_alignment_tablet_center et_pb_module ">
                              <a
                                className="et_pb_button et_pb_button_0 et_pb_bg_layout_light"
                                href="/contact"
                              >
                                Contact Today
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_section et_pb_section_1 fl-home-sec-2 et_pb_with_background et_section_regular">
                        <div className="et_pb_row et_pb_row_1">
                          <div className="et_pb_column et_pb_column_4_4 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_module et_pb_text et_pb_text_2 fl-margin-bottom  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <p>
                                  Fighting for clients throughout Atlanta,
                                  Georgia, with compassion and tenacity
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_section et_pb_section_2 content-section fl-home-sec-4 et_pb_with_background et_section_regular">
                        <div className="et_pb_row et_pb_row_2">
                          <div className="et_pb_column et_pb_column_1_2 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough">
                            <div className="et_pb_module et_pb_text et_pb_text_3 fl-margin-bottom  et_pb_text_align_left et_pb_text_align_center-tablet et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <h1>
                                  Protect Your Loved Ones By Confronting Nursing
                                  Home Abuse
                                </h1>
                                <p>
                                  When you entrust your loved one&rsquo;s life to a
                                  nursing home or care facility, you expect their
                                  mental and physical health to be protected.
                                  Unfortunately, some care facilities take
                                  advantage of individuals who are in a vulnerable
                                  state. The abuse may not be apparent at first or
                                  you may not see it occur directly, but you can
                                  observe the effect it has on your loved ones and
                                  take action. I can help. When you call my firm,
                                  I will listen to your concerns and help create a
                                  plan to protect and advocate for your loved
                                  ones. I can help restore the respect and dignity
                                  they should have been given initially.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="et_pb_column et_pb_column_1_2 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_module et_pb_image et_pb_image_0">
                              <span className="et_pb_image_wrap has-box-shadow-overlay">
                                <div className="box-shadow-overlay" />
                                <img
                                  decoding="async"
                                  // src="../wp-content/uploads/sites/1302270/2021/06/nursing.jpg"
                                  src={NursingHomeImg}
                                  alt=""
                                  title=""
                                  width={650}
                                  height={477}
                                  loading="lazy"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_section et_pb_section_3 fl-home-sec-3 et_pb_with_background et_section_regular">
                        <div className="et_pb_row et_pb_row_3">
                          <div className="et_pb_column et_pb_column_4_4 et_pb_column_4  et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_module et_pb_text et_pb_text_4  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <h2>Practice Areas</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_row et_pb_row_4 fl-practice-area-blurb fl-ada-tab-fix et_pb_equal_columns et_pb_gutters2">
                          <div className="et_pb_column et_pb_column_1_3 et_pb_column_5  et_pb_css_mix_blend_mode_passthrough">
                            <div className="et_pb_with_border et_pb_module et_pb_blurb_extended et_pb_blurb_extended_0 practice-blurb fl-margin-bottom et_clickable  et_pb_text_align_center et_pb_section_video_on_hover">
                              <a href="/nursing-home-abuse">
                                <div className="et_pb_module_inner">
                                  <div
                                    className="et_pb_blurb_position_top image_card use-image et_pb_bg_layout_light"
                                    data-blurb-position="top"
                                  >
                                    <div className="et_pb_blurb_content">
                                      <div className="et_pb_blurb_container">
                                        <span className="card-icon">
                                          <img
                                            src={Icon1}
                                            alt="Nursing Home Abuse"
                                            className="et-waypoint et_pb_animation_top"
                                            width={79}
                                            height={80}
                                            loading="lazy"
                                          />
                                        </span>
                                        <div className="et_pb_blurb_description">
                                          <p>Nursing Home Abuse</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="et_pb_column et_pb_column_1_3 et_pb_column_6  et_pb_css_mix_blend_mode_passthrough">
                            <a href="other-practice-areas/index.htm">
                              <div className="et_pb_module et_pb_blurb_extended et_pb_blurb_extended_1 practice-blurb fl-margin-bottom et_clickable  et_pb_text_align_center et_pb_section_video_on_hover">
                                <div className="et_pb_module_inner">
                                  <div
                                    className="et_pb_blurb_position_top image_card use-image et_pb_bg_layout_light"
                                    data-blurb-position="top"
                                  >
                                    <div className="et_pb_blurb_content">
                                      <div className="et_pb_blurb_container">
                                        <span className="card-icon">
                                          <img
                                            decoding="async"
                                            // src="../wp-content/uploads/sites/1302270/2021/06/icon2.png"
                                            src={Icon2}
                                            alt="Other Areas Of Practice"
                                            className="et-waypoint et_pb_animation_top"
                                            width={91}
                                            height={80}
                                          />
                                        </span>
                                        <div className="et_pb_blurb_description">
                                          <p>Other Areas Of Practice</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="et_pb_column et_pb_column_1_3 et_pb_column_7  et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <a href="about">
                              <div className="et_pb_with_border et_pb_module et_pb_blurb_extended et_pb_blurb_extended_2 practice-blurb fl-margin-bottom et_clickable  et_pb_text_align_center et_pb_section_video_on_hover">
                                <div className="et_pb_module_inner">
                                  <div
                                    className="et_pb_blurb_position_top image_card use-image et_pb_bg_layout_light"
                                    data-blurb-position="top"
                                  >
                                    <div className="et_pb_blurb_content">
                                      <div className="et_pb_blurb_container">
                                        <span className="card-icon">
                                          <img
                                            decoding="async"
                                            src={Icon3}
                                            alt="About My Firm"
                                            className="et-waypoint et_pb_animation_top"
                                            width={86}
                                            height={80}
                                            loading="lazy"
                                          />
                                        </span>
                                        <div className="et_pb_blurb_description">
                                          <p>About My Firm</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <a href="about">
                          </a>
                        </div>
                        <a href="about">
                        </a>
                      </div>
                      <div className="et_pb_section et_pb_section_4 content-3 fl-home-sec-5 et_pb_with_background et_section_regular">
                        <div className="et_pb_row et_pb_row_5 fl-ada-tab-fix et_pb_equal_columns">
                          <div className="et_pb_column et_pb_column_1_3 et_pb_column_8  et_pb_css_mix_blend_mode_passthrough">
                            <div className="et_pb_module et_pb_blurb et_pb_blurb_0 attorney-blurb fl-margin-bottom et_clickable et_pb_section_video_on_hover  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">
                              <div className="et_pb_blurb_content">
                                <div className="et_pb_main_blurb_image">
                                  <a
                                    href="/bastein-villard-s"
                                  >
                                    <span className="et_pb_image_wrap et_pb_only_image_mode_wrap">
                                      <img
                                        decoding="async"
                                        src={VillardImg}
                                        alt="Villard S. Bastein"
                                        className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone"
                                        width={267}
                                        height={267}
                                        loading="lazy"
                                      />
                                    </span>
                                  </a>
                                </div>
                                <div className="et_pb_blurb_container">
                                  <div className="et_pb_blurb_description">
                                    <p>Villard S. Bastein</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="et_pb_column et_pb_column_2_3 et_pb_column_9  et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_module et_pb_text et_pb_text_5 fl-margin-bottom  et_pb_text_align_left et_pb_text_align_center-tablet et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <h2>Compassionate Help After Unexpected Loss </h2>
                                <p>
                                  When an unexpected accident leads to death, you
                                  may be left with more questions than answers.
                                  Paying for medical bills, funeral costs,
                                  property damage and other expenses related to
                                  the accident can seem like unsurmountable
                                  challenges during an already difficult time. I
                                  can help. My name is Villard Bastien, and I&rsquo;m
                                  passionate about guiding people to a place of
                                  financial stability while they cope with
                                  incomparable loss. I understand how devastating
                                  the death of a loved one can be, and I will use
                                  my compassionate and knowledgeable guidance to
                                  help you move forward.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_section et_pb_section_5 content-3 fl-home-sec-6 et_pb_with_background et_section_regular">
                        <div className="et_pb_row et_pb_row_6 et_pb_equal_columns">
                          <div className="et_pb_column et_pb_column_4_4 et_pb_column_10  et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_module et_pb_text et_pb_text_6 fl-margin-bottom  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <h2>
                                  Thorough Protection From A Passionate Advocate
                                </h2>
                                <p>
                                  At the{" "}
                                  <span className="nap-item nap-item--name">
                                    Law Offices of Villard Bastien, LLC
                                  </span>
                                  , I strive to give every client the personalized
                                  solutions they deserve. Many attorneys will
                                  provide cookie-cutter answers to complicated
                                  legal issues that could affect your life for
                                  many years in the future. I want to ensure you
                                  have answers that will bring your legal
                                  struggles to an end.
                                </p>
                                <p>
                                  Prior to practicing law, I worked in the claims
                                  department of State Farm Insurance Company,
                                  which means I have a unique perspective on
                                  personal injury cases. I know how the other side
                                  will build their defense, and I know how to
                                  fight them. I also have over two decades of
                                  experience representing clients, and I&rsquo;m an
                                  active member of my local and legal communities.
                                </p>
                                <p>
                                  I will look at your case from every angle and
                                  protect you at every opportunity. Call my office
                                  today at{" "}
                                  <span className="nap-item nap-item--phone">
                                    <a href="tel:+1-404-865-1952">
                                      404-865-1952
                                    </a>
                                  </span>
                                  {" "}to get started.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_section et_pb_section_6 fl-home-sec-7 et_pb_with_background et_section_regular">
                        <div className="et_pb_row et_pb_row_7">
                          <div className="et_pb_column et_pb_column_4_4 et_pb_column_11  et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_module et_pb_text et_pb_text_7 fl-margin-bottom  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <p>
                                  Let me be your champion to fight legal issues
                                  and injustice.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <span className="et_pb_scroll_top et-pb-icon" />
    </>
  );
}
