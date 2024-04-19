import DefaultPage from '../components/DefaultPage';

import '../styles/nursing-home-abuse.css';

export default function Privacy() {
  return (
    <DefaultPage
      title='Privacy Policy'
      description='Currently, our law firm&rsquo;s website does not collect any personal
          data, unless provided by the user, such as through a contact form. This
          policy may change in the future. If you have any questions, please contact us.'
      includeSidebar={false}
    />
  );
}
