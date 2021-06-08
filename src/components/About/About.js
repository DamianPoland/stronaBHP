import React, { useState, useEffect } from 'react'
import style from './About.module.css'
import AOS from 'aos'


// images
import about_gdynia from '../../assets/about_gdynia.jpg'
import knowledge from '../../assets/knowledge.jpg'


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
                        <img onLoad={() => setLoadPhoto(true)} className="img" src={about_gdynia} alt='o mnie' />
                    </figure>
                    <div className={style.who__text}>
                        <div className={style.who__textContainer}>
                            <div className="textContainer">
                                <h1 className="text1">Kim jesteśmy?</h1>
                                <div className="line"></div>
                                <p className="text2"><span className={style.text__bigLeter}>J</span>esteśmy firmą, która ma swoją siedzibę w Gdyni. Wcześniej działaliśmy również na rynku Warszawskim. Dzięki platformie e-learningowej oraz szkoleniom on-line chętnie podejmujemy współpracę z firmami z całej Polski.</p>
                                <p className="text2"><span className={style.text__bigLeter}>W</span>ielu klientów ceni sobie nasze indywidualne podejście oraz profesjonalizm. Staramy się przedstawić tematy dotyczące BHP w sposób interesujący i przystępny.</p>
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
                            <div className="textContainer">
                                <h1 className="text1">Dlaczego my?</h1>
                                <div className="line"></div>
                                <p className="text2"><span className={style.text__bigLeter}>D</span>ziałamy w branży BHP już od kilkunastu lat. Wspieramy firmy z branży produkcyjnej, magazynowej, logistycznej, edukacyjnej i administracyjno-biurowej. Naszą wiedzą dzielimy się nieodpłatnie.</p>
                                <p className="text2"><span className={style.text__bigLeter}>O</span>rganizujemy e-szkolenia BHP, w postaci bloków tematycznych dostosowanych do potrzeb konkretnych firm. Do każdej współpracy podchodzimy indywidualnie.</p>

                            </div>
                        </div>
                    </div>
                    <figure data-aos="fade-left" className={style.figure__img}>
                        <img className="img" src={knowledge} alt='dlaczego ja' />
                    </figure>
                </div>
            </section>

        </main >
    )
}

export default About