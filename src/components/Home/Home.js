import React, { useEffect } from 'react'
import style from './Home.module.css'
import { Link } from 'react-router-dom'


// images
import home__start1 from '../../assets/home__start1.jpg'
import home__start2 from '../../assets/home__start2.jpg'
import home__about from '../../assets/home__about.jpg'
import home__offer from '../../assets/home__offer.jpg'
import home__knowledge from '../../assets/home__knowledge.png'
import home__news1 from '../../assets/home__news1.jpg'
import home__news2 from '../../assets/home__news2.jpg'
import home__contact from '../../assets/home__contact.png'


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


            {/*section ABOUT*/}
            <section className={style.about}>
                <figure data-aos="fade-right" className={style.about__figure}>
                    <img className={style.about__img} src={home__about} alt="bhp" />
                </figure>
                <div className={style.about__text}>
                    <div className={style.about__textContainer}>
                        <h1 className="text1">Kim jesteśmy?</h1>
                        <div className="line"></div>
                        <p className="text2">Mamy kilkunastoletnią praktykę dzięki współpracy z kilkudziesięcioma firmami z branży produkcynej, magazynowej, logistycznej, edukacyjnej czy administracyjno-biurowej.</p>
                        <div><Link to='/about' className="btn">Więcej o firmie</Link></div>
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
                            <p className="text2 text__white">Nasza firma, Sfera BHP świadczy usługi w zakresie bezpieczeństwa i higieny pracy, ochrony przeciwpożarowej i szkoleń w zakresie pierwszej pomocy.  W najbliższej przyszłości pojawią się e-szkolenia, w postaci bloków tematycznych dostosowanych do potrzeb konkretnych firm. Ich układ bazować będzie na uporządkowanym zestawieniu udostępnionych publicznie treści na naszej stronie.</p>
                            <div><Link to='/offer' className="btn text__white">Pełna oferta</Link></div>
                        </div>
                    </div>
                    <figure data-aos="fade-left" className={style.offer__figure}>
                        <img className={style.offer__img} src={home__offer} alt="bhp" />
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
                        <p className="text2">Postanowiliśmy stworzyć jedno miejsce, zawierające spektrum informacji, z wygodną nawigacją, aktualizowane według potrzeb. Bez zbędnych, nic nie wnoszących grafik i reklam. Naszym celem jest propagowanie wiedzy w wyżej wymienionych dziedzinach. Informacjami dzielimy się nieodpłatnie, na naszej stronie w części Baza wiedzy. Uważamy, że każdy powinien mieć wygodny dostęp do zasad i przepisów, które mogą chronić zdrowie i ratować życie. Z czasem pojawiać się będą kolejne specjalistyczne artykuły. W internecie można znaleźć wiele informacji na temat bhp, ppoż i pierwszej pomocy, jednak są one zazwyczaj nie usystematyzowane, często w postaci blogowej. Zapoznanie się z nimi nie pozwala odczuć, przyswojenia tematu w pełni. Szkolenia okresowe on-line są bardzo ogólne, w efekcie czego część materiału nie dotyczy szkolonych pracowników w zakresie czynników niebezpiecznych, z którymi mają kontakt, a potrzebna im wiedza nie jest przekazywana. Nawet e-szkolenia dla pracowników służby bhp, organizowane przez znane firmy, ograniczają się do podstawowych informacji.</p>
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
                        <h1 className="text1">Chcesz być na bieżąco ze zmianami prawa?</h1>
                        <div className="line"></div>
                        <p className="text2">Regularnie zamieszczamy nowe informacje, które pojawiają się w branży. Poza tym masz możliwość obserwować nas na Twitterze. Informujemy na nim o najnowszych aktach prawnych i datach ich wejścia w życie. Na naszym profilu na Facebooku będziemy regularnie informować o nowościach na stronie i ważniejszych aktualizacjach atykułów.</p>
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
                        <h1 className="text1">Jak możesz wspierać naszą misję?</h1>
                        <div className="line"></div>
                        <p className="text2">Wiedzą na stronie dzielimy się nieodpłatnie. Możesz nam pomóc, korzystając ze szkoleń okresowych bhp, które wkrótce pojawią się na naszej platformie e-lerningowej. Finansowanie całego serwisu opierać się będzie na dochodzie z tych szkoleń. Nasza propozycja: Oddajemy ci całą wiedzę bezwarunkowo, a ty możesz nas wesprzeć, zamawiając obowiązkowe szkolenia u nas.</p>
                        <div><Link to='/contact' className="btn">Zamów szkolenie</Link></div>
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