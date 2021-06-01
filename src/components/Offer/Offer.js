import React, { useEffect } from 'react'
import style from './Offer.module.css'
import { Link } from 'react-router-dom'



// images
import home__about from '../../assets/home__about.jpg'

const Offer = () => {

    // scroll to top when componene render
    useEffect(() => { window.scrollTo(0, 0) }, [])



    return (
        <main className={style.background}>

            <section className={style.container}>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>E-learning BHP</h1>
                    </figure>
                    <p className={style.item__text}>Nauka zdalna w różnych dziedzinach od dłuższego czasu zyskuje na popularności. Niedawna pandemia Covid-19 pokazała dodatkowe jej zalety. W związku z tym oferujemy Państwu szkolenia okresowe BHP w postaci e-learning na naszej platformie szkoleniowej.</p>
                    <p className={style.item__text}>Uczestnik może zostać przeszkolony w jednej lub kilku sesjach - w zależności od własnych preferencji. Szkolenie zakończone jest egzaminem w formie testu (można do niego podejść trzykrotnie).</p>
                    <p className={style.item__text}>Jesteśmy otwarci na profilowanie szkoleń okresowych pod względem zagrożeń istniejących w Państwa firmie. Pracownicy szkoleni są w zakresie tego, co rzeczywiście ich dotyczy. Dzięki temu szkolenie jest jeszcze bardziej praktyczne i interesujące dla uczestników.</p>
                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>Szkolenia BHP</h1>
                    </figure>
                    <p className={style.item__text}>Nasze szkolenia BHP przykuwają uwagę pracowników. Skupiamy się na przekazywaniu praktycznej wiedzy, w sposób przystępny i ciekawy. Stosujemy uznane metody pedagogiczne. Każde szkolenie zakończone jest wydaniem karty szkolenia wstępnego bhp (instruktaż ogólny) lub stosownym zaświadczeniem.</p>
                    <p className={style.item__text}>Przy większej ilości słuchaczy proponujemy negocjacje cenowe za całość szkolenia (rabaty nawet w wysokości kilkudziesięciu procent). Z uwagi na potrzeby klientów, szkolenia przeprowadzamy głównie w siedzibie ich firmy.</p>
                    <p className={style.item__text}>W celu zapewnienia atrakcyjności przekazywanych informacji  wykorzystywane są filmy dvd, prezentacje multimedialne i inne materiały dydaktyczne.</p>
                    <p className={style.item__text}>Koszt szkoleń BHP:</p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>szkolenie wstępne bhp (Instruktaż ogólny) – 50 zł</li>
                        <li className={style.item__textLi}>szkolenie okresowe bhp dla pracowników ze wszystkich grup – 60 zł</li>
                        <li className={style.item__textLi}>szkolenie okresowe bhp dla pracodawców i osób kierujących pracownikami – 80 zł</li>
                    </ul>
                    <p className={style.item__text}>Powyższe kwoty (brutto – zwolnione z Vat) dotyczą pojedynczych osób.</p>
                    <p className={style.item__text}>W przypadku szkolenia odbywającego się w siedzibie pracodawcy, minimalna opłata za całość grupy wynosi 150 zł (brutto).</p>
                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>Audyt BHP</h1>
                    </figure>
                    <p className={style.item__text}>Firmom zainteresowanym uzyskaniem opinii zewnętrznego specjalisty na temat stanu BHP  oferujemy usługę wykonania audytu. Może on dotyczyć wybranych dziedzin lub całościowej kontroli stanu BHP. Audyt kończy się omówieniem szczegółowego protokołu z propozycjami poprawy stanu BHP. Cena zależna jest od zakresu kontroli.</p>
                    <p className={style.item__text}>Oferujemy również cykliczne coroczne audyty, dla firm które nie są zainteresowane ciągłą umową dotyczącą stanu BHP. W trakcie tych audytów, uzupełniamy i aktualizujemy niezbędną dokumentację.</p>
                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>Obsługa BHP</h1>
                    </figure>
                    <p className={style.item__text}>Kompleksowa obsługa BHP w Trójmieście i okolicach!</p>
                    <p className={style.item__text}>W ramach umowy wykonujemy dla klientów liczne zadania służby BHP wymagane prawem. Oferta przygotowujemy uwzględniając takie czynniki jak:</p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>ilość pracowników</li>
                        <li className={style.item__textLi}>rodzaj działalności</li>
                        <li className={style.item__textLi}>lokalizacja firmy i filii</li>
                    </ul>
                    <p className={style.item__text}>Z każdym klientem pozostaje w stałym kontakcie, dedykowany specjalista.</p>
                    <p className={style.item__text}>Najważniejsze usługi świadczone przez nas w ramach umowy to:</p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>szkolenia wstępne i okresowe bhp</li>
                        <li className={style.item__textLi}>przeprowadzanie kontroli stanu bhp</li>
                        <li className={style.item__textLi}>sporządzanie oceny ryzyka zawodowego</li>
                        <li className={style.item__textLi}>sporzadzanie dokumentacji powypadkowej</li>
                        <li className={style.item__textLi}>sporządzanie niezbędnej dokumentacji</li>
                        <li className={style.item__textLi}>doradztwo w zakresie bhp</li>
                        <li className={style.item__textLi}>inne zadania służby bhp</li>
                    </ul>

                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>Ocena ryzyka zawodowego</h1>
                    </figure>
                    <p className={style.item__text}>Na każdym stanowisku pracy istnieją jakieś zagrożenia. W związku z tym, Kodeks pracy nakazuje sporządzenie na każdym stanowisku pracy tzw. „Oceny ryzyka zawodowego”. Jej zadaniem jest zidentyfikowanie istniejących zagrożeń  i zaproponowanie zmian pomagających w ich ograniczaniu lub eliminacji.</p>
                    <p className={style.item__text}>Z powyższym dokumentem należy zapoznać pracowników. Powinien on być sukcesywnie aktualizowany.</p>
                    <p className={style.item__text}>Jeżeli z różnymi stanowiskami pracy, związane są podobne zagrożenia, można sporządzić dla nich jeden, wspólny dokument „Oceny ryzyka zawodowego”.</p>
                    <p className={style.item__text}>Przygotowanie oceny ryzyka zawodowego oferujemy klientom w cenie od 100 zł netto.</p>
                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>Dokumentacja powypadkowa</h1>
                    </figure>
                    <p className={style.item__text}>Pracodawca zobowiązany jest do sporządzenia dokumentacji powypadkowej, dla pracowników, którzy ulegli wypadkowi w pracy lub w drodze do pracy lub z pracy. </p>
                    <p className={style.item__text}>Bierzemy na siebie ciężar wykonania wymaganych przez prawo działań, włącznie ze wsparciem przy współpracy z ZUS-em i GUS-em, w ramach przygotowania niezbędnej dokumentacji.</p>
                    <p className={style.item__text}>Koszt sporządzenia dokumentacji powypadkowej jest uzależniony od ciężkości następstw wypadku i wynosi od 250 zł zł netto.</p>
                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>

                <div className={style.item}>
                    <figure className={style.item__figure}>
                        <img className="img" src={home__about} alt="bhp" />
                        <h1 className={style.item__header}>Instrukcje, znaki BPH i Ppoż</h1>
                    </figure>
                    <p className={style.item__text}>Ważnym elementem systemu BHP w firmie są znaki ostrzegawcze i odpowiednio przygotowane instrukcje stanowiskowe BHP. Zapraszamy do zakupu potrzebnych znaków i instrukcji w naszym sklepie na portalu Allegro pod adresem: </p>
                    <div><Link to='/contact' className="btn">Zamów</Link></div>
                </div>

            </section>
        </main >
    )
}

export default Offer