import React, {useState} from 'react'
import Validators from '../../utilities/validators'

const Contact = () => {

    const INITIAL_STATE = {
        name: '',
        email: '',
        subject: '',
        number: '',
        message: '',
      }
      const [formData, setFormData] = useState(INITIAL_STATE)
      const [errors, setErrors] = useState({})

      const handleInputChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
      const handleSubmit = event => {
        event.preventDefault()
        setErrors(Validators(formData))
        setFormData(INITIAL_STATE)

        fetch('http://localhost:4000/api/email', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(res => console.log(res)).catch(err => console.log(err.message, 'wills err'))

    //     axios.post('http://localhost:3030/api/email', {
    //         headers: "Bearer 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",
    //         body: formData
    //     })
    //     .then(res => {
    //         if(res.data.success){
    //             console.log("YAY")
    //         } else {
    //             console.log("Y")
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err.message, "lol")
    //     })
      }

    return(
        <section id="contact">
            <div id="curve"></div>
            <h1 id="contact">CONTACT ME</h1>
                <div className="contact-form">
                    <section>
                    <form method="post" action="#" onSubmit={handleSubmit}>
                        {/************************************
                         * NAME
                         *************************************/}
                         <div className="contact-first-row">
                            <div className="contact-name">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            {errors.name && <p>{errors.name}</p>}
                            </div>
                            {/************************************
                             * PHONE NUMBER
                             *************************************/}
                            <div className="contact-number">
                            <label htmlFor="number">Phone Number</label>
                            <input
                                type="text"
                                name="number"
                                id="number"
                                value={formData.number}
                                onChange={handleInputChange}
                            />
                            {errors.number && <p>{errors.number}</p>}
                            </div>
                        </div>
                        {/************************************
                         * EMAIL
                         *************************************/}
                         <div className="contact-second-row">
                            <div className="contact-email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                            </div>
                            {/************************************
                             * SUBJECT
                             *************************************/}
                            <div className="contact-subject">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                            />
                            {errors.subject && <p>{errors.subject}</p>}
                            </div>
                        </div>
                        {/************************************
                         * MESSAGE
                         *************************************/}
                        <div className="contact-textarea">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" onChange={handleInputChange}></textarea>
                        </div>
                        <ul className="form-actions">
                        <li>
                            <input type="submit" value="Send Message" className="special" />
                        </li>
                        <li>
                            <input type="reset" value="Clear" />
                        </li>
                        </ul>
                    </form>
                    </section>
                </div>
        </section>
    )
}
export default Contact