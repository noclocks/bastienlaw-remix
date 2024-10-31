import DefaultPage from "../components/DefaultPage";

import "../styles/nursing-home-abuse.css";

export default function Disclaimer() {
  return (
    <DefaultPage
      title='Disclaimer'
      description='The information you obtain at this site is not, nor is it intended to be, legal advice. You should consult an attorney for advice regarding your individual situation. We invite you to contact us and welcome your calls, letters and electronic mail. Contacting us does not create an attorney-client relationship. Please do not send any confidential information to us until such time as an attorney-client relationship has been established.'
      includeSidebar={false}
    />
  );
}
