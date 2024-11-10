'use client'

import { FormEvent, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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
    <div className="min-h-screen flex flex-col bg-customBlack items-center text-gray-300 pb-3 pt-6 px-4">
      {/* Header Section */}
      <h1 className="text-5xl font-semibold text-white mb-2 font-alexandria">Get Involved</h1>
      <p className="text-center text-gray-400 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      </p>


  <div className="bg-zinc-1000 flex items-center justify-center p-5">
  <div className="bg-zinc-900 rounded-3xl shadow-lg p-8 w-full max-w-6xl flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
    
    {/* Contact Information */}
    <div className="bg-zinc-800 rounded-3xl p-6 text-gray-300 w-full md:w-1/2">
      <h2 className="text-white text-2xl font-semibold mb-4">Contact Information</h2>
      <p className="text-gray-400 mb-6">
          Feel free to reach out! Below is our phone number, email, and location!
      </p>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
        <FaPhone className="text-white" />
          <span>+1 (123) 456 7890</span>
        </div>
        <div className="flex items-center space-x-3 pt-8 pb-8">
         <FaEnvelope className="text-white" />
          <a href="mailto:PLACEHOLDER@PLEASECHANGE@IMPORTANT.COM"><span>awesome@gmail.com</span></a>
        </div>
        <div className="flex items-center space-x-3">
        <FaMapMarkerAlt className="text-white" />
          <span>NYC, New York</span>
        </div>
      </div>
    </div>
    
    {/* Contact Form */}
    <div className="bg-zinc-800 rounded-3xl p-6 w-full md:w-1/2 space-y-6">
      <div>
        <label htmlFor="name" className="text-zinc-400">Your name</label>
        <input id="name" type="text" name="subject" required value={subject} onChange={e => setSubject(e.target.value)} className="w-full bg-transparent text-white border-b border-gray-500 focus:outline-none focus:border-gray-300 p-2 mt-1" />
      </div>
      <div>
        <label htmlFor="email" className="text-zinc-400">Your email</label>
        <input id="email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-transparent text-white border-b border-gray-500 focus:outline-none focus:border-gray-300 p-2 mt-1" />
      </div>
      <div className="pb-20">
        <label htmlFor="message" className="text-zinc-400">Tell us more about yourself</label>
        <textarea name="body"
          value={body} onChange={e => setBody(e.target.value)} id="message" className="w-full bg-transparent text-white border-b border-gray-500 focus:outline-none focus:border-gray-300 p-2 mt-1"></textarea>
      </div>
      <button className="w-full bg-zinc-700 text-white font-semibold py-2 rounded-3xl hover:bg-zinc-600 transition">Get involved</button>
    </div>
    
  </div>
  </div>
</div>
{/*
<h1 className="text-lg text-center p-5">Contact Us</h1>
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

      <div>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" required
          value={subject} onChange={e => setSubject(e.target.value)} />
      </div> 

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
        Is this unethical 
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
    */}

  
  </div>;
}

