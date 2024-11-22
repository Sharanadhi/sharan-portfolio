import { useState } from "react";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from "react-awesome-reveal";
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ contact_name: '', contact_email: '', contact_message: '' });
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.contact_name) errors.contact_name = 'Name is required';
    if (!formData.contact_email) {
      errors.contact_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.contact_email)) {
      errors.contact_email = 'Email address is invalid';
    }
    if (!formData.contact_message) errors.contact_message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      emailjs.send(
        'service_5fcwon9',
        'template_c09vuy2',
        formData,
        '7U5_se6KMtWRR_nHT'
      ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success("Message sent successfully! I will get back to you soon.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          progress: undefined,
        });
        setFormData({ contact_name: '', contact_email: '', contact_message: '' });
      }, (err) => {
        console.log('FAILED...', err);
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className='contact__header'>
        <h2 className="contact__heading">CONTACT</h2>
        <hr className='underline' />
        <Slide>
          <p className="contact__text">
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
          </p>
        </Slide>
      </div>
      <div className="contact__container">
        <div className="contact__card">
          <div className="contact__card-body">
            <form onSubmit={handleSubmit}>
              <div className="input__group">
                <label htmlFor="contact_name">Name</label>
                <input type="text" className="contact__input" id="contact_name" name="contact_name" value={formData.contact_name} onChange={handleChange} />
                {formErrors.contact_name && <p className="error">{formErrors.contact_name}</p>}
              </div>
              <div className="input__group">
                <label htmlFor="contact_email">Email</label>
                <input type="email" className="contact__input" id="contact_email" name="contact_email" value={formData.contact_email} onChange={handleChange} />
                {formErrors.contact_email && <p className="error">{formErrors.contact_email}</p>}
              </div>
              <div className="input__group">
                <label htmlFor="contact_message">Message</label>
                <textarea name="contact_message" id="contact_message" value={formData.contact_message} onChange={handleChange}></textarea>
                {formErrors.contact_message && <p className="error">{formErrors.contact_message}</p>}
              </div>
              <div className="btn__group">
                <button type="submit" className="contact__button">Submit</button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
