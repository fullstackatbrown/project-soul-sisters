'use client'

import { FormEvent, useState } from "react";

const MAILCHIMP_U = "b1419b80582cb88b5e7249fc0";
const MAILCHIMP_ID = "ccd3919900";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    window.location.assign("mailto:dummy@example.com?subject=" + subject + "&body="+ body);

    if(!newsletter) {
      const params = new URLSearchParams();
      params.append("u", MAILCHIMP_U);
      params.append("id", MAILCHIMP_ID);
      params.append("MERGE0", email);

      fetch("https://icloud.us11.list-manage.com/subscribe/post", {
        method: "POST",
        body: params
      });
    }
  }

  return <div>

    <h1 className="font-size:1.5rem">Contact Us</h1>
    <form action="https://icloud.us11.list-manage.com/subscribe/post" method="POST">
      <input type="hidden" name="u" value={MAILCHIMP_U} ></input>
      <input type="hidden" name="id" value={MAILCHIMP_ID} ></input>
      <input type="email" name="MERGE0" id="MERGE0"></input>
      <button>Subscribe</button>
    </form>

    <hr/>

    <h1>We'd Love to Hear From You!</h1>
    <p className="subtitle">Whether it's about joining our team, feedback, or general inquiries, we want to know.</p>
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required
          value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      {/* <div>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" required
          value={subject} onChange={e => setSubject(e.target.value)} />
      </div> */}

      <label htmlFor="subject">Subject</label>
      <select id="subject" name="subject" onChange={e => setSubject(e.target.value)} required>
          <option value="">Select a subject</option>
          <option value="join">Joining the Team</option>
          <option value="feedback">Giving Feedback</option>
          <option value="inquiry">General Inquiry</option>
          <option value="other">Other</option>
        </select>     

      <div>
        <label htmlFor="body">Message</label>
        <textarea name="body"
          value={body} onChange={e => setBody(e.target.value)} />
      </div>


      <div>
        {/* Is this unethical */}
        <label htmlFor="newsletter">Opt-Out to Our Newsletter</label>
        <input type="checkbox" name="newsletter"
          value={String(newsletter)}
          onChange={e => setNewsletter(e.target.checked)} />
      </div>

      <input type="submit" value="Send" />
    </form>

    <hr/>

    <div className="blurb">
      <p>We're located at _____</p>
    </div>
  </div>;
}

