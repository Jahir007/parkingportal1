import React from 'react'
import emailjs from "emailjs-com";

const ContactUs = () => {

  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_cjvx6ko', 'template_3gjqon6', e.target, 'user_OrivuLJTs5Jgqya26geHD')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}
  return (

    <>
      <div className='contact_info'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1 d-flex justify-content-between mt-5'>

              {/* phone Number */}
              <div className='contact_info_item d-flex justify-content-start align-item-center'>
                <img className='img-fluid' src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    Phone
                  </div>
                  <div className='contact_info_text'>
                    +91 111 222 111
                  </div>
                </div>
              </div>

              {/* email */}
              <div className='contact_info_item d-flex justify-content-start align-item-center'>
                <img className='img-fluid' src="https://img.icons8.com/office/24/000000/email.png" alt="phone" />
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    Email
                  </div>
                  <div className='contact_info_text'>
                    ParkingPortal@gmail.com
                  </div>
                </div>
              </div>

              {/* address */}
              <div className='contact_info_item d-flex justify-content-start align-item-center'>
                <img className='img-fluid' src="https://img.icons8.com/office/24/000000/address.png" alt="phone" />
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    Address
                  </div>
                  <div className='contact_info_text'>
                    Adajan, surat, gujarat-395009
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Form */}

      <div className='contact_form'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='contact_form_container py-5'>
                <div className='contact_form_title d-flex justify-content-center align-item-center'>
                  Get In Touch</div>
                <div>
                  <div className="container">
                    <form onSubmit={sendEmail}>
                      <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                          <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                          <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                          <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                          <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                          <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs