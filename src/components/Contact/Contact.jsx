import { Slide} from "react-awesome-reveal";
import './Contact.scss';

const Contact = ()=> {
  return (
    <section id="contact" className="contact">
      <div className='contact__header'>
          <h2 className="contact__heading">CONTACT</h2>
          <hr className='underline'/>
        <Slide>
          <p className="contact__text">
          Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
          </p>
        </Slide>
      </div>
      <div className="contact__container">
        <div className="contact__card">
          <div className="contact__card-body">
            <form action="">
            <div className="input__group">
              <label htmlFor="contact_name">Name</label>
              <input type="text" className="contact__input" id="contact_name"/>
            </div>
            <div className="input__group">
              <label htmlFor="contact_email">Email</label>
              <input type="email" className="contact__input" id="contact_email"/>
            </div>
            <div className="input__group">
              <label htmlFor="contact_message">Message</label>
              <textarea name="message" id="contact_message"></textarea>
            </div>
            <div className="btn__group">
              <button className="contact__button">Submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;