import DefaultPage from '../components/DefaultPage';

import '../styles/nursing-home-abuse.css';

export default function Privacy() {
  return (
    <DefaultPage
      title='Privacy Policy'
      description={
        <p>
          Our law firm partners with No Clocks, LLC. To learn more about the No
          Clocks privacy policy and the data that might be collected, please
          visit:{' '}
          <a
            href='https://github.com/noclocks'
            target='_blank'
            rel='noopener noreferrer'
          >
            No Clocks GitHub
          </a>
        </p>
      }
      includeSidebar={false}
    />
  );
}
