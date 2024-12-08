'use client'

import { FormEvent, Suspense, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const MAILCHIMP_U = "b1419b80582cb88b5e7249fc0";
const MAILCHIMP_ID = "ccd3919900";

export default function Contact() {
  const [submitText, setSubmitText] = useState("Get Involved")
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [filmProd, setFilmProd] = useState(false);
  const [performing, setPerforming] = useState(false);
  const [socialMedia, setSocialMedia] = useState(false);
  const [music, setMusic] = useState(false);
  const [support, setSupport] = useState(false);
  const [other, setOther] = useState(false);

  // const [flags, setFlags] = useState<InvolvementFlags>({
  //   filmProd: false,
  //   performing: false,
  //   socialMedia: false,
  //   music: false,
  //   support: false,
  //   other: false,
  // });

  // const setFlagsHandler = useCallback((newFlags: InvolvementFlags) => {
  //   setFlags(newFlags);
  // }, [setFlags]);

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append("u", MAILCHIMP_U);
    params.append("id", MAILCHIMP_ID);
    params.append("MERGE0", email);
    params.append("MERGE1", subject); // This is actually just name
    params.append("MERGE2", body);

    if (filmProd) {
      params.append("group[32172][1]", "1");
    }
    if (performing) {
      params.append("group[32172][2]", "1");
    }
    if (socialMedia) {
      params.append("group[32172][4]", "1");
    }
    if (music) {
      params.append("group[32172][8]", "1");
    }
    if (support) {
      params.append("group[32172][16]", "1");
    }
    if (other) {
      params.append("group[32172][32]", "1");
    }

    // Send data to MailChimp
    fetch("https://icloud.us11.list-manage.com/subscribe/post", {
      method: "POST",
      body: params,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Data successfully sent to MailChimp!");
        } else {
          console.error("Error sending data to MailChimp:", response);
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
  }

  const handleTextChange = (newText: string) => {
    setSubmitText(newText);
  };

  return (
    <Suspense fallback={<div></div>}>
      <div>
        <div className="min-h-screen flex flex-col bg-customBlack items-center text-gray-300 pb-3 pt-6 px-4">
          {/* Header Section */}
          <h1 className="text-5xl font-semibold text-white mb-2">Get Involved</h1>
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
              <form onSubmit={submitHandler} className="bg-zinc-800 rounded-3xl p-6 w-full md:w-1/2 space-y-6">
                <div>
                  <label htmlFor="name" className="text-zinc-400">Your name</label>
                  <input id="name" type="text" name="subject" required value={subject} onChange={e => setSubject(e.target.value)} className="w-full bg-transparent text-white border-b border-gray-500 focus:outline-none focus:border-gray-300 p-2 mt-1" />
                </div>
                <div>
                  <label htmlFor="email" className="text-zinc-400">Your email</label>
                  <input id="email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-transparent text-white border-b border-gray-500 focus:outline-none focus:border-gray-300 p-2 mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="text-zinc-400">Tell us more about yourself</label>
                  <textarea name="body"
                    value={body} onChange={e => setBody(e.target.value)} id="message" className="w-full bg-transparent text-white border-b border-gray-500 focus:outline-none focus:border-gray-300 p-2 mt-1"></textarea>
                </div>

                <div className="pb-20">
                  <label htmlFor="message" className="text-zinc-400">How Do You Want to Get Involved?</label>
                  <div>
                    <input id="film-prod" type="checkbox" checked={filmProd} onChange={e => setFilmProd(e.target.checked)} />
                    <label htmlFor="film-prod">Film Production</label>
                  </div>
                  <div>
                    <input id="performing" type="checkbox" checked={performing} onChange={e => setPerforming(e.target.checked)} />
                    <label htmlFor="performing">Performing</label>
                  </div>
                  <div>
                    <input id="social-media" checked={socialMedia} type="checkbox" onChange={e => setSocialMedia(e.target.checked)} />
                    <label htmlFor="social-media">Social Media</label>
                  </div>
                  <div>
                    <input id="music" type="checkbox" checked={music} onChange={e => setMusic(e.target.checked)} />
                    <label htmlFor="music">Music</label>
                  </div>
                  <div>
                    <input id="support" type="checkbox" checked={support} onChange={e => setSupport(e.target.checked)} />
                    <label htmlFor="support">Support</label>
                  </div>
                  <div>
                    <input id="other" type="checkbox" checked={other} onChange={e => setOther(e.target.checked)} />
                    <label htmlFor="other">Other</label>
                  </div>

                </div>

                <button type="submit" onClick={() => handleTextChange("This form has been submitted!")} value="Send" className="w-full bg-zinc-700 text-white font-semibold py-2 rounded-3xl hover:bg-zinc-600 transition" >{submitText}</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

