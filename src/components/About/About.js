import React, { useState, useEffect } from 'react'
import style from './About.module.css'
import AOS from 'aos'


// images
import team from '../../assets/team.jpg'
import knowledge from '../../assets/knowledge.jpg'

//photos images svg
import { ReactComponent as Elearn } from '../../assets/icons/elearn.svg'
import { ReactComponent as Earn } from '../../assets/icons/earn.svg'
import { ReactComponent as Certificate } from '../../assets/icons/certificate.svg'
import { ReactComponent as Clients } from '../../assets/icons/clients.svg'



const About = () => {

    // scroll to top when componene render
    useEffect(() => { window.scrollTo(0, 0) }, [])

    // AOS reload after load first photo to not show animations before load screen
    const [loadPhoto, setLoadPhoto] = useState(false)
    useEffect(() => { AOS.refresh() }, [loadPhoto])



    return (
        <main className={style.background}>

            {/* section WHO*/}
            <section className={style.who}>
                <div className={style.who__container}>
                    <figure data-aos="fade-right" className={style.figure__img}>
                        <img onLoad={() => setLoadPhoto(true)} className={style.img} src={team} alt='o mnie' />
                    </figure>
                    <div className={style.who__text}>
                        <div className={style.who__textContainer}>
                            <div className="textContainer">
                                <h1 className="text1">Kim jesteśmy?</h1>
                                <div className="line"></div>
                                <p className="text2"><span className={style.text__bigLeter}>D</span>działamy w branży BHP już od kilkunastu lat. Zdobyliśmy doświadczenie dzięki <strong>współpracy z kilkudziesięcioma firmami</strong> z branży produkcynej, magazynowej, logistycznej, edukacyjnej czy administracyjno-biurowej. Dzięki <strong>kilkunastoletniej praktyce</strong> mamy ogromną wiedzę i praktyczne umiejętności.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* section WHY */}
            <section className={style.why}>
                <div className={style.why__container}>
                    <div className={style.why__text}>
                        <div className={style.why__textContainer}>
                            <div className="textContainer text__white">
                                <h1 className="text1">Dlaczego my?</h1>
                                <div className="line"></div>
                                <p className="text2 text__white"><span className={style.text__bigLeter}>O</span>rganizujemy <strong>e-szkolenia BHP</strong>, w postaci bloków tematycznych dostosowanych do potrzeb konkretnych firm.</p>

                            </div>
                        </div>
                    </div>
                    <figure data-aos="fade-left" className={style.figure__img}>
                        <img className={style.img} src={knowledge} alt='dlaczego ja' />
                    </figure>
                </div>
            </section>


            {/* section APPROACH */}
            <section className={style.approach}>
                <div className={style.approach__textContainer}>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Elearn />
                        <h2 className={style.approach__h2}>E-szkolenia</h2>
                        <p className={style.approach__p}>Oferujemy szkolenia stacjonarne, on-line i e-szkolenia. </p>
                    </div>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Earn />
                        <h2 className={style.approach__h2}>Cena</h2>
                        <p className={style.approach__p}>Dzielimy się wiedzą zwiazaną z BHP bezpłatnie. Oferujemy konkurencyjne ceny szkoleń.</p>
                    </div>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Certificate />
                        <h2 className={style.approach__h2}>Certyfikaty</h2>
                        <p className={style.approach__p}>Posiadamy wmagane kursy i certyfikaty wymagane do wystawiania zaświaczeń i przeprowadzania szkoleń.</p>
                    </div>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Clients />
                        <h2 className={style.approach__h2}>Doświadczenie</h2>
                        <p className={style.approach__p}>Kilkanaście lat na rynku. Wielu zadowolonych klientów, różne branże.</p>
                    </div>
                </div>
            </section>

        </main >
    )
}

export default About