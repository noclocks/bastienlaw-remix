import {
  // useRemixForm,
  // getValidatedFormData
} from "remix-hook-form";
import {Form} from "@remix-run/react";
// import {zodResolver} from "@hookform/resolvers/zod";
// import {
//   json,
//   // redirect
// } from "@remix-run/node";
// import type {ActionFunctionArgs} from "@remix-run/node";
// import {z} from "zod";

// import process from "util";
// process.env.NODE_ENV = "development";

// const schema = z.object({
//   // Add your schema here
//   name: z.string(),
//   email: z.string().email().min(1),
//   // TODO: Phone input mask
//   phone: z.string(),
//   message: z.string(),
//   checkbox: z.boolean(),
// });

// type FormData = z.infer<typeof schema>;

// const resolver = zodResolver(schema);

// export const action = async ({request}: ActionFunctionArgs) => {
//   const {errors, data, receivedValues: defaultValues} =
//     await getValidatedFormData<FormData>(request, resolver);
//   if (errors) {
//     return json({errors, defaultValues});
//   }
//   // Do something with the data
//   return json(data);
// };

// import {useRef} from "react";
import {init, sendForm} from "@emailjs/browser";
import {useState} from "react";

export default function HelpForm() {
  // const {
  //   handleSubmit,
  // } = useRemixForm({
  //   mode: "onSubmit",
  //   defaultValues: {
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //     checkbox: false,
  //   },
  //   resolver: async (data) => {
  //     return {
  //       values: data,
  //       errors: {},
  //     };
  //   },
  //   // resolver,
  // });

  const emailjsInit = () => {
    (function () {
      // https://dashboard.emailjs.com/admin/account
      init({
        // TODO: Move to .env
        publicKey: "q6lPxbUCHveROr8LO",
      });
    })();
  };

  const [checkbox, setCheckbox] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCheckbox = () => {
    // const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('checkbox clicked', !checkbox);
    // event.preventDefault();
    setCheckbox(!checkbox);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('event.target: ', event.target);
    // these IDs from the previous steps
    sendForm('service_fusm6zb', 'template_cwlo89s', event.target as HTMLFormElement)
      // emailjs.sendForm('contact_service', 'contact_form', this)
      .then(() => {
        console.log('SUCCESS!');
      }, (error) => {
        console.log('FAILED...', error);
      });
  }

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
        id="contact-form"
        // method="post"
        // action="/contact"
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "20px",
          }}>
          <h4>
            Fields marked with an * are required.
          </h4>
        </div>
        {/** Your form elements here */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              fontWeight: "bold",
              width: "30%",
            }}>
            Name
            <input
              type="text"
              name="name"
              style={{
                padding: "12px",
              }} />
          </label>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              fontWeight: "bold",
              width: "30%",
            }}>
            Email *
            <input
              type="email"
              name="email"
              onChange={handleEmail}
              value={email}
              style={{
                padding: "12px",
              }} />
          </label>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              fontWeight: "bold",
              width: "30%",
            }}>
            Phone
            <input
              type="tel"
              name="phone"
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              // height={50}
              style={{
                padding: "12px",
              }}
            />
          </label>
        </div>
        <br />
        <div>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              fontWeight: "bold",
              width: "100%",
            }}>
            Message
            <textarea
              name="message"
              rows={5}
              style={{
                padding: "12px",
              }} />
          </label>
        </div>
        <br />
        <a
          href="/disclaimer"
          style={{
            // display: "block",
            // textAlign: "center",
            textDecoration: "underline",
            color: "#3975ac",
          }}>
          Disclaimer
        </a>
        {" "}|{" "}
        <a
          href="/privacy-policy"
          style={{
            // display: "block",
            // textAlign: "center",
            textDecoration: "underline",
            color: "#3975ac",
          }}>
          Privacy Policy
        </a>
        <br />
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}>
          {/* <Form itemType="checkbox" /> */}
          <input
            type="checkbox"
            name="checkbox"
            // defaultChecked={checkbox}
            checked={checkbox}
            onChange={handleCheckbox}
            // onClick={() => {
            //   console.log("checkbox clicked");
            // }}
            style={{
              appearance: "checkbox",
              WebkitAppearance: "checkbox",
              backgroundColor: "#fff",
              color: "#3975ac",
              cursor: "pointer",
              display: "inline-block",
              padding: "12px",
              height: "20px",
              width: "20px",
            }}
          />
          <h4
            style={{
              fontWeight: "bold",
              marginLeft: "10px",
              paddingTop: "0",
            }}>
            I Have Read The Disclaimer *
          </h4>
        </span>
        {/* </label> */}
        {/* </p> */}
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}>
          <button
            disabled={!checkbox || email.length === 0}
            type="submit"
            style={{
              display: 'table',
              fontWeight: 600,
              fontSize: '18px !important',
              color: '#fff !important',
              textDecoration: 'none',
              padding: '4px 0',
              textAlign: 'center',
              borderRadius: 0,
              background: '#3975ac',
              cursor: 'pointer',
              height: '70px',
              textTransform: 'uppercase',
              width: '270px',
              letterSpacing: '1.5px',
              // margin: '0 auto !important',
              border: '1px solid #fff',
            }}>
            Contact Me Online
          </button>
        </div>
      </Form>
    </>
  );
}
