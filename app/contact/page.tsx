'use client'

import { FormEvent, useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert("Submitted: " + email + subject + body);
    if(newsletter) {
      alert("Opted out");
    }
  }

  return <div>

    <h1>Contact Us More quickly</h1>
    <h3>This will ultimately live on the hero page or smth</h3>
    <form action="https://icloud.us11.list-manage.com/subscribe/post" method="POST">
      <input type="hidden" name="u" value="b1419b80582cb88b5e7249fc0"></input>
      <input type="hidden" name="id" value="ccd3919900"></input>
    <input type="email" name="MERGE0" id="MERGE0"></input>
    <button>Subscribe</button>
    </form>

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

