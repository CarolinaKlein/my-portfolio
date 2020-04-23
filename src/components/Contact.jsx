import React, {useState} from 'react'
import Validators from './validators'

const Contact = () => {

    const INITIAL_STATE = {
        name: '',
        email: '',
        subject: '',
        number: '',
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
      }

    return(
        <div>
            <h1>CONTACT ME</h1>
            
            <section id="contact">
                <div className="inner">
                    <section>
                    <form method="post" action="#" onSubmit={handleSubmit}>
                        {/************************************
                         * NAME
                         *************************************/}
                        <div className="field half first">
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
                         * EMAIL
                         *************************************/}
                        <div className="field half">
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
                        <div className="field half first">
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
                        {/************************************
                         * PHONE NUMBER
                         *************************************/}
                        <div className="field half">
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
                        {/************************************
                         * MESSAGE
                         *************************************/}
                        <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                        </div>
                        <ul className="actions">
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
    </div>
    )
}
export default Contact