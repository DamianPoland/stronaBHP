import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'

//svg
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Location } from '../../assets/icons/location.svg'
import { ReactComponent as Email } from '../../assets/icons/email.svg'
import { ReactComponent as Facebbok } from '../../assets/icons/facebook.svg'
// import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg'


const Footer = () => {
    return (
        <footer className={style.background}>

            <div className={style.desc}>
                <div className={style.desc_container}>

                    <section className={style.desc__item}>
                        <p className={style.desc__title}>O FIRMIE</p>
                        <p className={style.desc__text}>Organizujemy szkolenia BHP<br />stacjonarne oraz on-line<br />(e-szkolenia). Świadczymy usługi w<br />zakresie bezpieczeństwa i higieny<br />pracy, ochrony przeciwpożarowej i<br />szkoleń w zakresie pierwszej pomocy.</p>
                    </section>

                    <section className={style.desc__item}>
                        <p className={style.desc__title}>NAWIGACJA</p>
                        <nav className={style.desc__nav}>
                            <Link to='/home' className={style.desc__link}><i className={style.desc__arrow} />Strona główna</Link>
                            <Link to='/about' className={style.desc__link}><i className={style.desc__arrow} />O firmie</Link>
                            <Link to='/offer' className={style.desc__link}><i className={style.desc__arrow} />Oferta</Link>
                            <Link to='/etraining' className={style.desc__link}><i className={style.desc__arrow} />E-szkolenia</Link>
                            <Link to='/knowledge' className={style.desc__link}><i className={style.desc__arrow} />Baza wiedzy</Link>
                            <Link to='/news' className={style.desc__link}><i className={style.desc__arrow} />Nowości</Link>
                            <Link to='/contact' className={style.desc__link}><i className={style.desc__arrow} />Kontakt</Link>
                            <Link to='/privacy-policy' className={style.desc__link}><i className={style.desc__arrow} />Polityka prywatności</Link>
                        </nav>
                    </section>

                    <section className={style.desc__item}>
                        <p className={style.desc__title}>KONTAKT</p>

                        <div className={style.desc__contact}>

                            <a href='tel:+48883305348' className={style.desc__contactItem}>
                                <Phone className={style.desc__contactItemSvg} />
                                <p className={style.desc__contactItemText}>Telefon</p>
                            </a>

                            <a href={`http://maps.google.com/?q=Reda Garncarska 11/c37`} target='_blank' rel="noopener noreferrer" className={style.desc__contactItem}>
                                <Location className={style.desc__contactItemSvg} />
                                <p className={style.desc__contactItemText}>Mapa</p>
                            </a>

                            <a href='mailto:biuro@stronabhp.pl?subject=Zapytanie' className={style.desc__contactItem}>
                                <Email className={style.desc__contactItemSvg} />
                                <p className={style.desc__contactItemText}>Email</p>
                            </a>

                            <a href='/' className={style.desc__contactItem}>
                                <Facebbok className={style.desc__contactItemSvg} />
                                <p className={style.desc__contactItemText}>Facebbok</p>
                            </a>

                            {/* <a href='https://twitter.com/BHPsfera' target='_blank' rel="noopener noreferrer" className={style.desc__contactItem}>
                                <Twitter className={style.desc__contactItemSvg} />
                                <p className={style.desc__contactItemText}>Twitter</p>
                            </a> */}

                        </div>
                    </section>

                </div>
            </div>
            <div className={style.foot}>
                <p className={style.foot__item}>Copyright © sferaBHP.pl 2021</p>
                <a href='https://studio-www.com/' target='_blank' rel="noopener noreferrer" className={style.foot__item}>Designed by studio-www.com</a>
            </div>
        </footer>
    )
}

export default Footer