import React from 'react'
import { useState } from 'react'
import { ReactComponent as NewsletterSVG } from '../Assets/Icons/Newsletter.svg'
import './Newsletter.css'

const inputObj = {
    email: ""
}

const Newsletter = () => {

    const [input, setInput] = useState(inputObj)

    return (
        <div className='container-Newsletter-Component'>
            <section className='container-Input-Vector'>
                <NewsletterSVG className='vector-Newsletter' />
                <div className='input-Vector'>
                    <section className='text'>
                        <h6 className='text-Title-Newsletter'>Title</h6>
                        <p className='text-Text-Newsletter'>Text</p>
                    </section>
                    <section className='section-Input-Newsletter'>
                        <label htmlFor="input" className='label-Newsletter'>
                            <input
                                className='input-Email-Newsletter'
                                placeholder='Inserte tu correo'
                                type="email" name="email"
                                onChange={(e) => {
                                    setInput({
                                        ...input,
                                        [e.target.name]: e.target.value
                                    })
                                }}
                            />
                            <button onClick={() => alert(`se envio un correo a: ${input.email}`)} className='btn-suscribirse'>
                                Suscribirse
                            </button>
                        </label>
                    </section>
                </div>
            </section>
            <section className='rectangle-Container'>
                <div className="rectangle"></div>
            </section>
        </div>
    )
}

export default Newsletter