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
      mode: "no-cors",
      method: "POST",
      body: params,
    })
      .then(() => {
        setSubmitText("This form has been submitted!")
        console.log()
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
  }

  return (
    <Suspense fallback={<div></div>}>
      <div className="min-h-screen flex flex-col bg-customBlack items-center text-gray-300 pb-3 pt-6 px-[min(1rem,5%)] justify-center">
        {/* Header Section */}
        <h1 className="text-5xl font-semibold text-white mb-2">Get Involved</h1>

        <div className="bg-neutral-1000 w-[min(100%,840px)] flex items-center justify-center p-5 px-0">
          <div className="bg-neutral-900 rounded-3xl shadow-lg p-[min(2rem,5%)] w-full max-w-6xl flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">

            {/* Contact Information */}
            <div className="bg-neutral-800 rounded-3xl p-[min(2.5rem,8%)] text-gray-300 w-full md:w-1/2">
              <h2 className="text-white text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-400 mb-6">
                Reach out to the Soul Sisters team at:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-white" />
                  <span>+1 (647) 403-9110</span>
                </div>
                <div className="flex items-center space-x-3 pt-8 pb-8">
                  <FaEnvelope className="text-white" />
                  <a href="mailto:pemshulman@gmail.com"><span className="break-all">pemshulman@gmail.com</span></a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-white" />
                  <span>Toronto, CA</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={submitHandler} className="bg-neutral-800 rounded-3xl p-[min(2.5rem,8%)] w-full md:w-1/2 space-y-6">
              <div>
                <label htmlFor="name" className="text-neutral-400">Your name</label>
                <input id="name" type="text" name="subject" required onBlur={e => setSubject(e.target.value)} className="w-full bg-transparent text-white border-b border-gray-500 focus:outline-none focus:border-gray-300 p-2 mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="text-neutral-400">Your email</label>
                <input id="email" type="email" name="email" required onBlur={e => setEmail(e.target.value)} className="w-full bg-transparent text-white border-b border-gray-500 focus:outline-none focus:border-gray-300 p-2 mt-1" />
              </div>

              <div>
                <label htmlFor="message" className="text-neutral-400">Tell us more about yourself</label>
                <textarea name="body"
                  onBlur={e => setBody(e.target.value)} id="message" className="w-full bg-transparent text-white border-b border-gray-500 focus:outline-none focus:border-gray-300 p-2 mt-1"></textarea>
              </div>

              <div>
                <label htmlFor="message" className="text-neutral-400">How Do You Want to Get Involved?</label>
                <div>
                  <input id="film-prod" type="checkbox" checked={filmProd} onChange={e => setFilmProd(e.target.checked)} />
                  <label htmlFor="film-prod" className="px-1">Film Production</label>
                </div>
                <div>
                  <input id="performing" type="checkbox" checked={performing} onChange={e => setPerforming(e.target.checked)} />
                  <label htmlFor="performing" className="px-1">Performing</label>
                </div>
                <div>
                  <input id="social-media" checked={socialMedia} type="checkbox" onChange={e => setSocialMedia(e.target.checked)} />
                  <label htmlFor="social-media" className="px-1">Social Media</label>
                </div>
                <div>
                  <input id="music" type="checkbox" checked={music} onChange={e => setMusic(e.target.checked)} />
                  <label htmlFor="music" className="px-1">Music</label>
                </div>
                <div>
                  <input id="support" type="checkbox" checked={support} onChange={e => setSupport(e.target.checked)} />
                  <label htmlFor="support" className="px-1">Support</label>
                </div>
                <div>
                  <input id="other" type="checkbox" checked={other} onChange={e => setOther(e.target.checked)} />
                  <label htmlFor="other" className="px-1">Other</label>
                </div>

              </div>

              <button type="submit" value="Send" className="w-full bg-neutral-700 text-white font-semibold py-2 rounded-3xl hover:bg-neutral-600 transition" >{submitText}</button>
            </form>

          </div>
        </div>
      </div>
    </Suspense>
  );
}

