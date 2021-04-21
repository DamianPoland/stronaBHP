import React, { useState, useEffect } from 'react'
import style from './Contact.module.css'

// components
import Spinner from '../../UI/Spinner/Spinner'


//photos images svg
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Email } from '../../assets/icons/email.svg'
import { ReactComponent as Location } from '../../assets/icons/location.svg'
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg'
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg'


const Contact = () => {

    // scroll to top when componene render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [mapIsReady, setMapIsReady] = useState(false)


    return (
        <main className={style.background}>

            <header className={style.section}>
                <div className={style.head}>
                    <h1 className="text1">Skontaktuj się z nami</h1>
                    <div className="line"></div>
                </div>
                <div className={style.contact}>

                    {/* contact links  */}
                    <section className={style.content}>
                        <a className={style.contentItem} href='tel:+48100100100'>
                            <p className={style.contentIcon}><Phone /></p>
                            <p className={style.contentDesc}>tel: +48 100-100-100</p>
                        </a>
                        <a className={style.contentItem} href={`http://maps.google.com/?q=Reda Garncarska 11/c37`} target='blank' >
                            <p className={style.contentIcon}><Location /></p>
                            <p className={style.contentDesc}>ul. Garncarska 11/c37, 84-240 Reda</p>
                        </a>
                        <a className={style.contentItem} href='mailto:biuro@sferabhp.pl?subject=Zapytanie'>
                            <p className={style.contentIcon}><Email /></p>
                            <p className={style.contentDesc}>e-mail: biuro@sferabhp.pl</p>
                        </a>
                        <a className={style.contentItem} href='https://www.fb.me/AplikacjeIStronyInternetowe' target='_blank' rel="noopener noreferrer">
                            <p className={style.contentIcon}><Facebook /></p>
                            <p className={style.contentDesc}>@AplikacjeIStronyInternetowe</p>
                        </a>
                        <a className={style.contentItem} href='https://twitter.com/BHPsfera' target='_blank' rel="noopener noreferrer">
                            <p className={style.contentIcon}><Twitter /></p>
                            <p className={style.contentDesc}>@BHPsfera</p>
                        </a>

                    </section>

                    {/* map */}
                    <section className={style.map}>
                        {!mapIsReady && <Spinner />}
                        <iframe title="mapa" onLoad={() => setMapIsReady(true)} className={style.mapItem} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2311.6466589113684!2d18.35640621588579!3d54.59259988025907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdbacd13c1d8f5%3A0x3ae139181ba57fa7!2sGarncarska%2011%2Fc37%2C%2084-240%20Reda!5e0!3m2!1spl!2spl!4v1618087889846!5m2!1spl!2spl" loading="lazy" >
                        </iframe>
                    </section>
                </div>
            </header>

        </main>
    )
}


export default Contact

