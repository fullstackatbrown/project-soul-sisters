const ContactForm = () => {
    return (
        <div>
                <div className="container">
                    <header>
                        <h1>We'd Love to Hear From You!</h1>
                        <p className="subtitle">Whether it's about joining our team, feedback, or general inquiries, we want to know.</p>
                    </header>

                <div className="blurb">
                    <p>We're located at ___.</p>
                </div>

                {/** change action to endpoint later */}
                <form action="####" method="POST">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" required/>
    
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" required/>
    
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required/>
    
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" required>
                        <option value="">Select a subject</option>
                        <option value="join">Joining the Team</option>
                        <option value="feedback">Giving Feedback</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="other">Other</option>
                    </select>
    
                    <label htmlFor="extra-info">Additional Information (Optional)</label>
                    <textarea id="extra-info" name="extra-info"></textarea>
    
                    <div className="form-checkbox">
                        <label htmlFor="mailing-checkbox">Join our Mailing List!</label>
                        <input type="checkbox" id="mailing-checkbox" name="mailing-checkbox"/>
                    </div>
    
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                {/** change href later */}
                <div className="submission-confirmation">
                    Thanks for contacting us! We'll get back to you ASAP. In the meantime,
                    <a href="###">check out some other ways you can get involved!</a>
                </div>
                </div>
        </div>
    );
};

export default ContactForm;