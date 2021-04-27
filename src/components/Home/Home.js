import React, { useEffect } from 'react'
import style from './Home.module.css'
import { Link } from 'react-router-dom'


// images
import home__start1 from '../../assets/home__start1.jpg'
import home__start2 from '../../assets/home__start2.jpg'
import home__about from '../../assets/home__about.jpg'
import home__offer from '../../assets/home__offer.jpg'
import home_etraining from '../../assets/home_etraining.png'
import home__knowledge from '../../assets/home__knowledge.png'
import home__news1 from '../../assets/home__news1.jpg'
import home__news2 from '../../assets/home__news2.jpg'
import home__contact from '../../assets/home__contact.jpg'

// svg
import { ReactComponent as Elearn } from '../../assets/icons/elearn.svg'
import { ReactComponent as Earn } from '../../assets/icons/earn.svg'
import { ReactComponent as Certificate } from '../../assets/icons/certificate.svg'
import { ReactComponent as Clients } from '../../assets/icons/clients.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'



const Home = () => {

    // scroll to top when componene render
    useEffect(() => { window.scrollTo(0, 0) }, [])



    return (
        <main className={style.background}>

            {/*section START*/}
            <section className={style.start}>
                <div className={style.start__container}>
                    <figure data-aos="fade-right" className={style.start__figure}>
                        <img className={style.start__img} src={home__start1} alt="bhp" />
                    </figure>
                    <div className={style.start__line}></div>
                    <figure data-aos="fade-left" className={style.start__figure}>
                        <img className={style.start__img} src={home__start2} alt="bhp" />
                    </figure>
                    <div className={style.start__containerText}>
                        <p className={style.start__text}>WIEDZA</p>
                        <p className={`${style.start__text} ${style.start__textMiddle}`}>SZKOLENIA</p>
                        <p className={style.start__text}>PORADY</p>

                    </div>

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


            {/*section ABOUT*/}
            <section className={style.about}>
                <figure data-aos="fade-right" className={style.about__figure}>
                    <img className={style.about__img} src={home__about} alt="bhp" />
                </figure>
                <div className={style.about__text}>
                    <div className={style.about__textContainer}>
                        <h1 className="text1">Kim jesteśmy?</h1>
                        <div className="line"></div>
                        <p className="text2 text__white">Zdobyliśmy doświadczenie dzięki <strong>współpracy z kilkudziesięcioma firmami</strong> z branży produkcyjnej, magazynowej, logistycznej, edukacyjnej czy administracyjno-biurowej. Dzięki <strong>kilkunastoletniej praktyce</strong> mamy ogromną wiedzę i praktyczne umiejętności.</p>
                        <div><Link to='/about' className="btn text__white">Więcej o firmie</Link></div>
                    </div>
                </div>
            </section>


            {/*section OFFER*/}
            <section className={style.offer}>
                <div className={style.offer__container}>
                    <div className={style.offer__text}>
                        <div className={style.offer__textContainer}>
                            <h1 className="text1">Czym się zajmujemy?</h1>
                            <div className="line"></div>
                            <p className="text2">Organizujemy <strong>szkolenia BHP stacjonarne</strong> oraz <strong>on-line (e-szkolenia)</strong>. Świadczymy usługi w zakresie <strong>bezpieczeństwa i higieny pracy</strong>, ochrony przeciwpożarowej i szkoleń w zakresie pierwszej pomocy.</p>
                            <div><Link to='/offer' className="btn">Pełna oferta</Link></div>
                        </div>
                    </div>
                    <figure data-aos="fade-left" className={style.offer__figure}>
                        <img className={style.offer__img} src={home__offer} alt="bhp" />
                    </figure>
                </div>
            </section>


            {/*section ETRAINING*/}
            <section className={style.etraining}>
                <div className={style.etraining__container}>
                    <div className={style.etraining__text}>
                        <div className={style.etraining__textContainer}>
                            <h1 className="text1 text__shadow">Czemu e-szkolenia?</h1>
                            <div className="line"></div>
                            <p className="text2">Możesz <strong>zaoszczędzić czas i pieniądze dzięki naszym e-szkoleniom</strong>. Są dostępne 7/24. Masz do nich dostęp z każdego urządzenia za pomocą przeglądarki internetowej. Testy są wypełniane online a certyfikaty wysyłane pocztą.</p>
                            <div><Link to='/etraining' className="btn">Zobacz E-szkolenia</Link></div>
                        </div>
                    </div>
                    <figure data-aos="fade-up" className={style.etraining__figure}>
                        <img className={style.etraining__img} src={home_etraining} alt="bhp" />
                    </figure>
                </div>
            </section>


            {/*section KNOWLEDGE*/}
            <section className={style.knowledge}>
                <figure data-aos="fade-right" className={style.knowledge__figure}>
                    <img className={style.knowledge__img} src={home__knowledge} alt="bhp" />
                </figure>
                <div className={style.knowledge__text}>
                    <div className={style.knowledge__textContainer}>
                        <h1 className="text1">Dlaczego jesteśmy wyjątkowi?</h1>
                        <div className="line"></div>
                        <p className="text2"><strong>Bezpłatnie</strong> dzielimy się zdobytą wiedzą. Na naszym portalu znajdziesz <strong>specjalistyczną wiedzę</strong> dotyczącą wszystkich dziedzin związanych z BHP. Nie musisz szukać informacji w innych miejscach! Tu znajdziesz <strong>wszystkie informacje dotyczące BHP</strong>. Przekazujemy wiedzę w sposób przystępny, uporządkowany i bezpłatny.</p>
                        <div><Link to='/knowledge' className="btn">Baza wiedzy</Link></div>
                    </div>
                </div>
            </section>

            {/*section NEWS*/}
            <section className={style.news}>
                <div className={style.news__container}>
                    <figure className={style.news__figure1}>
                        <img className={style.news__img} src={home__news1} alt="bhp" />
                    </figure>
                    <div data-aos="flip-left" className={style.news__textContainer}>
                        <h1 className="text1">Jak być na bieżąco z BHP?</h1>
                        <div className="line"></div>
                        <p className="text2">Jesteśmy na bieżąco i od razu <strong>informujemy o zmianach w prawie</strong> dotyczących BHP. Regularnie zamieszczamy nowe informacje, które pojawiają się w branży. Informujemy o <strong>najnowszych aktach prawnych</strong> i datach ich wejścia w życie. </p>
                        <div><Link to='/news' className="btn">Zobacz nowości</Link></div>
                    </div>
                    <figure className={style.news__figure2}>
                        <img className={style.news__img} src={home__news2} alt="bhp" />
                    </figure>
                </div>
            </section>


            {/*section CONTACT*/}
            <section className={style.contact}>
                <div className={style.contact__text}>
                    <div className={style.contact__textContainer}>
                        <h1 className="text1">Chcesz nawiązać współpracę?</h1>
                        <div className="line"></div>
                        <p className="text2">Nasz <strong>zespół fachowców</strong> chętnie odpowie na Twoje pytania. Jeśli potrzebujesz szkolenia stacjonarnego lub on-line zaoferujemy ci je w <strong>konkurencyjnej cenie</strong>. Zadzwoń i zapytaj o ofertę. To nic nie kosztuje.
                            </p>

                        <p className={style.contact__tel}>
                            <a href='tel:+48100100100' className={style.contact__telIcon}>
                                <Phone />
                            </a> +48 100-100-100
                            </p>
                        <div><Link to='/contact' className="btn">Pozostałe formy kontaktu</Link></div>
                    </div>
                </div>
                <figure data-aos="fade-left" className={style.contact__figure}>
                    <img className={style.contact__img} src={home__contact} alt="bhp" />
                </figure>
            </section>





        </main >
    )
}

export default Home