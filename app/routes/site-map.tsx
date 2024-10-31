import DefaultPage from "../components/DefaultPage";

import "../styles/nursing-home-abuse.css";

export default function SiteMap() {
  return (
    <DefaultPage
      title='Site Map'
      description={
        <div>
          <div
            id='simple-sitemap-container-65ae94e7e1ce2'
            className='simple-sitemap-container simple-sitemap-container-65ae94e7e1ce2 tab-disabled'
          >
            <div className='simple-sitemap-wrap'>
              <h2 className='post-type'>Pages</h2>
              <ul className='simple-sitemap-page main'>
                <li className='sitemap-item page_item page-item-46188'>
                  <a href='about'>About</a>
                </li>
                <li className='sitemap-item page_item page-item-46280'>
                  <a href='atlanta-medical-malpractice-law-office'>
                    Atlanta Medical Malpractice Law Office
                  </a>
                </li>
                <li className='sitemap-item page_item page-item-46418'>
                  <a href='business-general-counsel-business-transactions'>
                    Business General Counsel / Business Transactions
                  </a>
                </li>
                <li className='sitemap-item page_item page-item-45927'>
                  <a href='contact'>Contact</a>
                </li>
                <li className='sitemap-item page_item page-item-46419'>
                  <a href='criminal-law-defense'>Criminal Law Defense</a>
                </li>
                <li className='sitemap-item page_item page-item-6'>
                  <a href='/'>Home</a>
                </li>
                <li className='sitemap-item page_item page-item-46200'>
                  <a href='nursing-home-abuse'>Nursing Home Abuse</a>
                </li>
                <li className='sitemap-item page_item page-item-46191'>
                  <a href='other-practice-areas'>Other Practice Areas</a>
                </li>
                <li className='sitemap-item page_item page-item-46420'>
                  <a href='serious-injury'>Serious Injury</a>
                </li>
              </ul>
            </div>
          </div>
          <br style={{clear: 'both'}} />
          <div
            id='simple-sitemap-container-65ae94e7e3444'
            className='simple-sitemap-container simple-sitemap-container-65ae94e7e3444 tab-disabled'
          >
            <div className='simple-sitemap-wrap'>
              <h2 className='post-type'>People</h2>
              <ul className='simple-sitemap-people main'>
                <li className='sitemap-item'>
                  <a href='bastein-villard-s'>Bastien, Villard S.</a>
                </li>
              </ul>
            </div>
          </div>
          <br style={{clear: 'both'}} />
        </div>
      }
      includeSidebar={true}
    />
  );
}
