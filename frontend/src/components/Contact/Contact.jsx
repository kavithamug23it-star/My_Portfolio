import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        alert("Message Sent 🚀");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        alert("Failed to send message ❌");
      }
    } catch (error) {
      console.log(error);
      alert("Server error ❌");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <p className="section-subtitle">CONTACT</p>
        <h2 className="section-title">Let's Work Together</h2>

        <div className="contact-content">

          <div className="contact-info">
            <h3>Get In Touch</h3>

            <p>
              I'm always interested in internship opportunities,
              freelance projects, and collaborations.
            </p>

            <div className="info">
              <strong>Email</strong>
              <p>kavitham.ug.23.it@francisxavier.ac.in</p>
            </div>

            <div className="info">
              <strong>College</strong>
              <p>Francis Xavier Engineering College</p>
            </div>

            <div className="info">
              <strong>Degree</strong>
              <p>B.Tech Information Technology</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) =>
                setForm({ ...form, subject: e.target.value })
              }
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;