import React from 'react'


const ContactForm = (props) => {
    return (


        <section className="contactFormContainer whiteHexBg flexHardCenter">

            <div className="contactFormInside flexHardCenter">
            <h3 className="textSectionTitle">
                We'd love to hear from you!
            </h3>

            <form action="" className="contactForm flexHardCenter">

                <label htmlFor="firstName" className="sr-only">First Name:</label>
                <input type="text" name="firstName" id="firstName" placeholder="first name" className="contactInput" />

                <label htmlFor="lastName" className="sr-only">Last Name:</label>
                <input type="text" name="lastName" id="lastName" placeholder="last name" className="contactInput" />

                <label htmlFor="email" className="sr-only">Email:</label>
                <input type="email" name="email" id="email" placeholder="email" className="contactInput" />

                <label htmlFor="phoneNumber" className="sr-only">Phone Number:</label>
                <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="phone number" className="contactInput" />

                <label htmlFor="feedback" className="sr-only">What Would You Like To Say?</label>
                <input type="textarea" name="feedback" id="feedback" placeholder="What would you like to say?" className="contactInput contactFeedback" />


            </form>
            </div>

        </section>


    )
}

export default ContactForm