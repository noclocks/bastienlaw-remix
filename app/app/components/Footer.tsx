
import Logo from "../wp-content/uploads/sites/1302270/2021/06/logo.jpg"
import HelpForm from "./HelpForm";

export interface FooterProps {
  excludeContactSection?: boolean;
}

export const Footer = (props: FooterProps) => {

  return (
    <footer className='et-l et-l--footer'>
      <div className='et_builder_inner_content et_pb_gutters1'>
        <div className='et_pb_section et_pb_section_0_tb_footer fl-short-form-section et_pb_with_background et_section_regular'>
          <div className='et_pb_row et_pb_row_0_tb_footer'>
            <div className='et_pb_column et_pb_column_4_4 et_pb_column_0_tb_footer  et_pb_css_mix_blend_mode_passthrough et-last-child'>
              {props.excludeContactSection ? null : (
                <>
                  <div className='et_pb_module et_pb_text et_pb_text_0_tb_footer fl-short-form  et_pb_text_align_center et_pb_bg_layout_light'>
                    <div className='et_pb_text_inner'>
                      <h2>How Can I Help You?</h2>
                    </div>
                  </div>
                  <div className='et_pb_module et_pb_text et_pb_text_1_tb_footer fl-darklinks fl-short-form  et_pb_text_align_left et_pb_bg_layout_dark'>
                    <div className='et_pb_text_inner'>
                      <div
                        id='nf_tp_module_0'
                        className='nf_tp_module'
                        data-form_id={2}
                        data-nf_tp_num={0}
                        data-redirect_id={0}
                      >
                        <HelpForm />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className='et_pb_section et_pb_section_1_tb_footer et_pb_with_background et_section_regular'>
          <div className='et_pb_row et_pb_row_1_tb_footer et_pb_equal_columns'>
            <div className='et_pb_column et_pb_column_4_4 et_pb_column_1_tb_footer  et_pb_css_mix_blend_mode_passthrough et-last-child'>
              <div className='et_pb_module et_pb_text et_pb_text_2_tb_footer  et_pb_text_align_left et_pb_bg_layout_light'>
                <div className='et_pb_text_inner'>
                  <h2>Contact The Firm</h2>
                </div>
              </div>
            </div>
          </div>
          <div
            id='contactform'
            className='et_pb_row et_pb_row_2_tb_footer et_pb_equal_columns'
          >
            <div className='et_pb_column et_pb_column_1_3 et_pb_column_2_tb_footer  et_pb_css_mix_blend_mode_passthrough'>
              <div className='et_pb_module et_pb_text et_pb_text_3_tb_footer fl-margin-bottom  et_pb_text_align_center et_pb_bg_layout_light'>
                <div className='et_pb_text_inner'>
                  <h3>Office Location</h3>
                  <span className='nap-item nap-item--address'>
                    200 Ashford Center N<br />
                    Ste 215
                    <br />
                    Atlanta, GA 30338
                  </span>
                </div>
              </div>
            </div>
            <div className='et_pb_with_border et_pb_column_1_3 et_pb_column et_pb_column_3_tb_footer  et_pb_css_mix_blend_mode_passthrough'>
              <div className='et_pb_module et_pb_image et_pb_image_0_tb_footer'>
                <a href='/'>
                  <span className='et_pb_image_wrap '>
                    <img
                      decoding='async'
                      src={Logo}
                      alt='Law Offices of Villard Bastien, LLC'
                      title=''
                      width={500}
                      height={111}
                      loading='lazy'
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className='et_pb_column et_pb_column_1_3 et_pb_column_4_tb_footer  et_pb_css_mix_blend_mode_passthrough et-last-child'>
              <div className='et_pb_module et_pb_text et_pb_text_4_tb_footer fl-darklinks fl-margin-bottom  et_pb_text_align_center et_pb_bg_layout_light'>
                <div className='et_pb_text_inner'>
                  <h3>Contact Us</h3>
                  <p>
                    Phone:{' '}
                    <span className='nap-item nap-item--phone'>
                      <a href='tel:+1-516-967-7619'>516-967-7619</a>
                    </span>
                    <br />
                    Fax:{' '}
                    <span className='nap-item nap-item--phone nap-fax'>
                      470-275-3906
                    </span>
                  </p>
                </div>
              </div>
              <div className='et_pb_button_module_wrapper et_pb_button_1_tb_footer_wrapper et_pb_button_alignment_center et_pb_module '>
                <a
                  className='et_pb_button_1_tb_footer et_pb_bg_layout_dark'
                  href='atlanta-medical-malpractice-law-office'
                >
                  Atlanta Office
                </a>
              </div>
            </div>
          </div>
          <div className='et_pb_row et_pb_row_3_tb_footer'>
            <div className='et_pb_column et_pb_column_4_4 et_pb_column_5_tb_footer  et_pb_css_mix_blend_mode_passthrough et-last-child'>
              <div className='et_pb_module et_pb_text et_pb_text_5_tb_footer fl-darklinks fl-margin-bottom  et_pb_text_align_left et_pb_bg_layout_light'>
                <div className='et_pb_text_inner'>
                  <div className='default-footer'>
                    <div className='flfooterbrand'>
                      <p style={{textAlign: 'center'}}>
                        © {new Date().getFullYear() + ' '}
                        <a
                          href='/'
                          rel='noopener noreferrer'
                        >
                          Law Offices of Villard Bastien, LLC
                        </a>{' '}
                        • All Rights Reserved{' '}
                      </p>
                    </div>
                    <div className='flfooterlink'>
                      <p style={{textAlign: 'center'}}>
                        <a href='/disclaimer'>Disclaimer</a>
                        {/* TODO: Add `sitemap` & `Privacy Policy` */}
                        &nbsp;|&nbsp;
                        <a href='/site-map'>Site Map</a>
                        &nbsp;|&nbsp;
                        <a href='/privacy'>Privacy Policy</a>
                        &nbsp;|&nbsp;
                        <a
                          href='https://github.com/noclocks'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Business Development Solutions
                        </a>{' '}
                        by{' '}
                        <a
                          href='https://noclocks.dev'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          No Clocks, LLC
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
