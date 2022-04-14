import React from 'react'
import { ReactComponent as NewsletterSVG } from '../Assets/Icons/Newsletter.svg'
import './Newsletter.css'

const Newsletter = () => {
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
                            <input className='input-Email-Newsletter' placeholder='Inserte tu correo' type="email" name="email" />
                            <button type="submit" className='btn-suscribirse'>
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