import { Slide} from "react-awesome-reveal";
import './Contact.scss';

const Contact = ()=> {
  return (
    <section className="contact">
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
              <label htmlFor="">Name</label>
              <input type="text" className="contact__input"/>
            </div>
            <div className="input__group">
              <label htmlFor="">Email</label>
              <input type="email" className="contact__input"/>
            </div>
            <div className="input__group">
              <label htmlFor="">Message</label>
              <textarea name="message" id="message"></textarea>
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