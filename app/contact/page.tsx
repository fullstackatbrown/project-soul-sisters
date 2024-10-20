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

    <h1>Contact Us More quickly</h1>
    <h3>This will ultimately live on the hero page or smth</h3>
    <form action="https://icloud.us11.list-manage.com/subscribe/post" method="POST">
      <input type="hidden" name="u" value={MAILCHIMP_U} ></input>
      <input type="hidden" name="id" value={MAILCHIMP_ID} ></input>
      <input type="email" name="MERGE0" id="MERGE0"></input>
      <button>Subscribe</button>
    </form>

    <hr/>

    <h1>Contact Us</h1>
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required
          value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <div>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" required
          value={subject} onChange={e => setSubject(e.target.value)} />
      </div>

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
  </div>;
}

