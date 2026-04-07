import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const linkedInProfileURL = "https://www.linkedin.com/in/rammohan-sangati-b76535216/";
  const emailAddress = "sangatirammohan01@gmail.com";

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = () => {
    setShowForm(false);
    setFormData({ fullName: '', email: '', phone: '', message: '' });
    setFormStatus({ submitted: false, error: false, message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const messageBody = `Message from Portfolio Contact Form:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;

      setFormStatus({
        submitted: true,
        error: false,
        message: "Redirecting you to complete sending your message..."
      });

      setTimeout(() => {
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.fullName}`);
        const body = encodeURIComponent(messageBody);
        window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');
        setFormData({ fullName: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          setFormStatus({ submitted: false, error: false, message: '' });
        }, 5000);
      }, 1500);
    } catch (error) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "There was an error. Please try again."
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            Available for Work
          </div>
          <h2 className="section-title">Want to <span>Hire Me?</span></h2>
          <p className="section-subtitle">
            Let's connect and build something amazing together.<br />
            Pick your preferred way to reach out.
          </p>

          <div className="connect-options">
            <a
              className="connect-option-btn linkedin-btn"
              href={linkedInProfileURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
              <span>Connect on LinkedIn</span>
              <i className="fas fa-external-link-alt chevron-icon"></i>
            </a>

            <button
              className={`connect-option-btn email-btn ${showForm ? 'active' : ''}`}
              onClick={() => setShowForm(!showForm)}
              type="button"
            >
              <i className="fas fa-envelope"></i>
              <span>Send an Email</span>
              <i className={`fas fa-chevron-${showForm ? 'up' : 'down'} chevron-icon`}></i>
            </button>
          </div>
        </div>

        {!showForm && (
          <p className="select-hint">
            <i className="fas fa-arrow-up"></i>
            Choose an option above to get started
          </p>
        )}

        {showForm && (
          <div className="contact-wrapper">
            <div className="contact-form-column">
              <div className="contact-form-card email">

                <div className="form-card-header">
                  <div className="form-card-header-left">
                    <div className="form-card-icon email">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h3 className="contact-form-title">Send an Email</h3>
                      <p className="form-card-subtitle">Sending to {emailAddress}</p>
                    </div>
                  </div>
                  <button className="form-close-btn" onClick={handleClose} type="button">
                    <i className="fas fa-times"></i>
                  </button>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>

                  {formStatus.submitted && (
                    <div className={`form-alert ${formStatus.error ? 'error' : 'success'}`}>
                      <i className={`fas ${formStatus.error ? 'fa-exclamation-circle' : 'fa-check-circle'}`}></i>
                      {formStatus.message}
                    </div>
                  )}

                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Full Name <span className="required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <i className="fas fa-user input-icon"></i>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <i className="fas fa-envelope input-icon"></i>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="example@email.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <div className="input-wrapper">
                      <i className="fas fa-phone-alt input-icon"></i>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="+91 000 000 0000"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Your Message <span className="required">*</span>
                    </label>
                    <div className="textarea-wrapper">
                      <i className="fas fa-comment-alt textarea-icon"></i>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-textarea"
                        placeholder="Write your message here..."
                        rows="5"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-submit">
                    <button
                      type="button"
                      className="cancel-button"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="submit-button email"
                      disabled={formStatus.submitted}
                    >
                      {formStatus.submitted ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send via Email</span>
                          <i className="fas fa-paper-plane"></i>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Contact;