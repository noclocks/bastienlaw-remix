import DefaultPage from '../components/DefaultPage';

import '../styles/nursing-home-abuse.css';

export default function Privacy() {
  return (
    <DefaultPage
      title='Privacy Policy'
      description='Our law firm partners with No Clocks, LLC. To learn
                  more about the No Clocks privacy policy and the data
                  that might be collected, please visit: Thomson Reuters
                  Privacy Statement.'
      includeSidebar={false}
    />
  );
}
