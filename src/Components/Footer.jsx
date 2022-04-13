import React from 'react'
import './Footer.css'
import { ReactComponent as LogoFooter } from '../Assets/Icons/LogoFooter.svg'
import { ReactComponent as Separator } from '../Assets/Icons/Separator.svg'

const Footer = () => {
    return (
        <div className='container-Footer-Component'>
            <section className='text-Footer-Container-Logo'>
                <div className='vector-MContigo'>
                    <LogoFooter />
                </div>
                <p className='text-Footer'>
                    La Mente es Maravillosa is a property of Grupo MContigo
                    <br />
                    ©2012 - 2020. All rights reserved.
                    <br />
                    Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.
                </p>
            </section>
            <section>
                <Separator />
            </section>
            <section className='container-Links' >
                <a className='links-Footer-Component' href="/">Política de Cookies</a>
                <a className='links-Footer-Component' href="/">Política de Privacidad</a>
                <a className='links-Footer-Component' href="/">Términos y condiciones de uso</a>
                <a className='links-Footer-Component' href="/">Cláusula Informativa de Consentimiento</a>
            </section>
        </div>
    )
}

export default Footer