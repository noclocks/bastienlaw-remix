import {useMemo, useState} from 'react';
import {init, sendForm} from '@emailjs/browser';
import {Form} from '@remix-run/react';
import {ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

// export const action = async ({request}: ActionFunctionArgs) => {
//   const {errors, data, receivedValues: defaultValues} =
//     await getValidatedFormData<FormData>(request, resolver);
//   if (errors) {
//     return json({errors, defaultValues});
//   }
//   // Do something with the data
//   return json(data);
// };

const notify = ({type = 'success' || 'error'}) =>
  toast(
    type === 'success'
      ? 'Thank you for contacting us!'
      : 'There was an error sending your message. Please try again.',
    {
      // autoClose: false,
      autoClose: 5000,
      position: 'top-center',
      toastId: 'contact-form-toast',
      style: {
        zIndex: 99999,
      },
    }
  );

export default function HelpForm() {
  const emailjsInit = () => {
    (function () {
      // console.log('emailjsInit called');
      // console.log('ENV: ', process.env);
      // console.log('ENV: ', import.meta.env);

      // https://dashboard.emailjs.com/admin/account
      init({
        // TODO: Move to .env
        publicKey: 'q6lPxbUCHveROr8LO',
      });
    })();
  };

  const [checkbox, setCheckbox] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCheckbox = () => {
    // const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('checkbox clicked', !checkbox);
    // event.preventDefault();
    setCheckbox(!checkbox);
  };

  const isButtonDisabled = useMemo(() => {
    return !checkbox || email.length === 0;
  }, [email, checkbox]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!import.meta.env.PROD) {
      console.log('DEV MODE: Form submitted.');
    }

    sendForm(
      'service_fusm6zb',
      import.meta.env.PROD ? 'template_cwlo89s' : 'template_cxz8obc',
      // 'template_cwlo89s',
      // event.target as HTMLFormElement
      '#contact-form'
    )
      // emailjs.sendForm('contact_service', 'contact_form', this)
      .then(
        (response) => {
          // console.log('SUCCESS!', response.status, response.text);
          notify({type: 'success'});
        },
        (error) => {
          // console.log('FAILED...', error);
          notify({type: 'error'});
        }
      )
      .finally(() => {
        // Clear the form fields
        (event.target as HTMLFormElement).reset();
      });
  };

  // window.onload = function() {
  //   document.getElementById('contact-form').addEventListener('submit', function(event) {
  //     event.preventDefault();
  //     // these IDs from the previous steps
  //     emailjs.sendForm('contact_service', 'contact_form', this)
  //       .then(() => {
  //         console.log('SUCCESS!');
  //       }, (error) => {
  //         console.log('FAILED...', error);
  //       });
  //   });
  // };

  emailjsInit();

  return (
    <>
      {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script> */}
      {/* <script type="text/javascript">
        {{(function () {
          // https://dashboard.emailjs.com/admin/account
          emailjs.init({
            publicKey: "YOUR_PUBLIC_KEY",
          });
        })();}}
      </script> */}
      {/* <script type="text/javascript">
        {{
          window.onload = function () {
            document.getElementById('contact-form').addEventListener('submit', function (event) {
              event.preventDefault();
              // these IDs from the previous steps
              emailjs.sendForm('contact_service', 'contact_form', this)
                .then(() => {
                  console.log('SUCCESS!');
                }, (error) => {
                  console.log('FAILED...', error);
                });
            });
          }
        }}
      </script> */}
      <Form
        id='contact-form'
        // method="post"
        // action="/contact"
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <h4>Fields marked with an * are required.</h4>
        </div>
        {/** Your form elements here */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              fontWeight: 'bold',
              width: '30%',
            }}
          >
            Name
            <input
              id='email-me-name'
              type='text'
              name='name'
              style={{
                padding: '12px',
              }}
            />
          </label>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              fontWeight: 'bold',
              width: '30%',
            }}
          >
            Email *
            <input
              type='email'
              name='email'
              onChange={handleEmail}
              value={email}
              style={{
                padding: '12px',
              }}
            />
          </label>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              fontWeight: 'bold',
              width: '30%',
            }}
          >
            Phone
            <input
              type='tel'
              name='phone'
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              // height={50}
              style={{
                padding: '12px',
              }}
            />
          </label>
        </div>
        <br />
        <div>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              fontWeight: 'bold',
              width: '100%',
            }}
          >
            Message
            <textarea
              name='message'
              rows={5}
              style={{
                padding: '12px',
              }}
            />
          </label>
        </div>
        <br />
        <a
          href='/disclaimer'
          style={{
            // display: "block",
            // textAlign: "center",
            textDecoration: 'underline',
            color: '#3975ac',
          }}
        >
          Disclaimer
        </a>{' '}
        |{' '}
        <a
          href='privacy'
          style={{
            // display: "block",
            // textAlign: "center",
            textDecoration: 'underline',
            color: '#3975ac',
          }}
        >
          Privacy Policy
        </a>
        <br />
        <span
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {/* <Form itemType="checkbox" /> */}
          <input
            type='checkbox'
            name='checkbox'
            // defaultChecked={checkbox}
            checked={checkbox}
            onChange={handleCheckbox}
            style={{
              appearance: 'checkbox',
              WebkitAppearance: 'checkbox',
              backgroundColor: '#fff',
              color: '#3975ac',
              cursor: 'pointer',
              display: 'inline-block',
              padding: '12px',
              height: '20px',
              width: '20px',
            }}
          />
          <h4
            style={{
              fontWeight: 'bold',
              marginLeft: '10px',
              paddingTop: '0',
            }}
          >
            I Have Read The Disclaimer *
          </h4>
        </span>
        <br />
        <div
          // onMouseOver={(e: MouseEvent) => {
          //   e.preventDefault();
          //   isButtonDisabled ? toast('Please check the disclaimer.') : null;
          //   console.log('onMouseOver');
          // }}
          // onFocus={() => {}}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <button
            disabled={isButtonDisabled}
            type='submit'
            style={{
              display: 'table',
              pointerEvents: isButtonDisabled ? 'none' : 'auto',
              fontWeight: 600,
              fontSize: '18px',
              background: '#3975ac',
              color: isButtonDisabled ? '#ccc' : '#fff',
              opacity: isButtonDisabled ? 0.5 : 1,
              textDecoration: 'none',
              padding: '4px 0',
              textAlign: 'center',
              borderRadius: 0,
              cursor: 'pointer',
              height: '70px',
              textTransform: 'uppercase',
              width: '270px',
              letterSpacing: '1.5px',
              border: '1px solid #fff',
            }}
          >
            Contact Me Online
          </button>
        </div>
      </Form>
      <ToastContainer
        position='top-center'
        style={{
          zIndex: 99999,
        }}
      />
    </>
  );
}
