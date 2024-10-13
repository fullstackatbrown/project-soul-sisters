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
