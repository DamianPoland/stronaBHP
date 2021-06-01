import React, { useEffect } from 'react'
import style from './Knowledge.module.css'
import { Link } from 'react-router-dom'





const Knowledge = () => {

    // scroll to top when componene render
    useEffect(() => { window.scrollTo(0, 0) }, [])



    return (
        <main className={style.background}>

            {/* section WHO*/}
            <section className={style.start}>


                <div className={style.item}>
                    <h2 className={style.item__title}>1 Regulacje prawne</h2>
                    <p className={style.item__text}>Wybrane regulacje prawne z zakresu prawa pracy dotyczące bezpieczeństwa i higieny pracy, z omówieniem źródeł prawa międzynarodowego (dyrektyw WE, konwencji MOP): </p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>przepisy dotyczące BHP</li>
                        <li className={style.item__textLi}>źródła obowiazującego w Polsce prawa pracy</li>
                        <li className={style.item__textLi}>system nadzoru i kontroli nad warunkami pracy (PIP, PIS, SIP)</li>
                        <li className={style.item__textLi}>prawa, obowiązki i odpowiedzialność – pracownika, pracodawcy i osób kierujacych pracownikami (dział 10 Kodeksu Pracy)</li>
                        <li className={style.item__textLi}>profilaktyczna ochrona zdrowia</li>
                        <li className={style.item__textLi}>wymagania dotyczące budynków, pomieszczeń i stanowisk pracy</li>
                        <li className={style.item__textLi}>maszyny i urządzenia</li>
                        <li className={style.item__textLi}>prace szczególnie niebezpieczne</li>
                        <li className={style.item__textLi}>przepisy dotyczące ochrony pracy kobiet i młodocianych:</li>
                        <ul className={style.item__textUl}>
                            <li className={style.item__textLi}>ochrona pracy kobiet</li>
                            <li className={style.item__textLi}>ochrona pracy młodocianych</li>
                        </ul>
                        <li className={style.item__textLi}> problemy związane z interpretacją niektórych przepisów</li>
                    </ul>
                    <div><Link to='/knowledge' className="btn">Dowiedz się więcej...</Link></div>
                </div>

                <div className={style.item}>
                    <h2 className={style.item__title}>2 Ergonomia</h2>
                    <p className={style.item__text}>Pojęcie "ergonomia" związane jest z dwoma greckimi słowami: ergon (praca) i nomos (zasada). Jest to dyscyplina naukowa wykorystująca wiedzę z szeregu nauk technicznych, organizacyjnych i dotyczących człowieka. Jej celem jest humanizacja pracy aby proces pracy i używane w nim maszyny oraz narzedzia, nie niszczyły zdrowia lub nie powodowały dyskomfortu pracowników. Chodzi nie tylko o eliminowanie zagrożeń widocznych ale również mniej oczywistych np. związanych z siedzącym trybem pracy. Ergonomia ma więc szerszy zakres niż BHP, skupiające się na ochronie pracownika przed wypadkami w pracy i chorobami zawodowymi. Ma za zadanie chronić również przed uciążliwościami i chwilowymi dolegliwościami.</p>
                    <p className={style.item__text}>Główne zagadnienia ergonomii:</p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>Obciążenie psychiczne</li>
                        <li className={style.item__textLi}>Wysiłek fizyczny </li>
                        <li className={style.item__textLi}>Obciażenia układu ruchowego</li>
                        <li className={style.item__textLi}>Wymagania dla stanowisk pracy </li>
                    </ul>

                    <div><Link to='/knowledge' className="btn">Dowiedz się więcej...</Link></div>
                </div>

                <div className={style.item}>
                    <h2 className={style.item__title}>3 Ocena ryzyka</h2>
                    <p className={style.item__text}>Wypadki przy pracy oraz choroby zawodowe to skutek oddziaływania czynników niebezpiecznych i szkodliwych. Metody identyfikacji, analizy i oceny zagrożeń oraz oceny ryzyka zawodowego to kluczowe zadanie służby BHP. Każde stanowisko pracy zawierać będzie inny zestaw zagrożeń jak też prawdopodobieństwa ich oddziaływania na pracownika. Wynika to z procesu pracy, środowiska pracy oraz listy maszyn i narzędzi.</p>
                    <p className={style.item__text}>Poniższa lista tematów omawia w szczegółach to zagadnienie:</p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>Czynniki fizyczne</li>
                        <li className={style.item__textLi}>Czynniki chemiczne</li>
                        <li className={style.item__textLi}>Czynniki biologiczne</li>
                        <li className={style.item__textLi}>Czynniki psychofizyczne</li>
                        <li className={style.item__textLi}>Badania i pomiary czynników</li>
                        <li className={style.item__textLi}>Ryzyko zawodowe i jego ocena </li>
                    </ul>
                    <div><Link to='/knowledge' className="btn">Dowiedz się więcej...</Link></div>
                </div>

                <div className={style.item}>
                    <h2 className={style.item__title}>4 Likwidacja zagrożeń</h2>
                    <p className={style.item__text}>Metody likwidacji lub ograniczenia oddziaływania na pracowników czynników szkodliwych dla zdrowia, uciążliwych i niebezpiecznych występujących w procesach pracy </p>
                    <p className={style.item__text}>Likwidacja lub organiczanie oddziaływania czynników szkodliwych i niebezpiecznych jest kolejnym krokiem po ich identyfikacji i ocenie ryzyka jaką stanowią dla zdrowia i życia pracowników. W pierwszej kolejności należy próbować zmodyfikować organizację pracy. Jeśli nie ma takiej możliwości, powinno się wprowadzić środki ochrony zbiorowej. W ostateczności pozostaje zorganizować indywidualną ochronę pracownika.</p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>Modyfikacja organizacji pracy</li>
                        <li className={style.item__textLi}>Środki ochrony zbiorowej</li>
                        <li className={style.item__textLi}>Indywidualna ochrona pracownika</li>
                    </ul>
                    <div><Link to='/knowledge' className="btn">Dowiedz się więcej...</Link></div>
                </div>

                <div className={style.item}>
                    <h2 className={style.item__title}>5 Rozwiązania poprawiające BHP</h2>
                    <p className={style.item__text}>Wraz z rozwojem techniki zmieniają się stanowiska pracy jak i możliwości ochrony przed czynnikami mogącymi zniszczyć zdrowie lub życie pracowników. Poniżej omówiono dziedziny w których pojawiają się nowoczesne rozwiązania techniczno-organizacyjne.</p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>Urządzenia wentylacyjno-klimatyzacyjne</li>
                        <li className={style.item__textLi}>Urządzenia zabezpieczające</li>
                        <li className={style.item__textLi}>Środki ochrony indywidualnej </li>
                    </ul>
                    <div><Link to='/knowledge' className="btn">Dowiedz się więcej...</Link></div>
                </div>

                <div className={style.item}>
                    <h2 className={style.item__title}>6 Wypadki przy pracy i choroby zawodowe</h2>
                    <p className={style.item__text}>Ustalanie okoliczności i przyczyn wypadków przy pracy (z uwzględnieniem programów komputerowych)</p>
                    <p className={style.item__text}>Głównym zadaniem BHP jest ochrona pracownika przez wypadkami i chorobami zawodowymi. Jednak gdy dojdzie do wypadku, ustalenie jego okoliczności i przyczyn, może pomóc wyciagnąć wnioski by wzmocnić system ochrony w przyszłości. Niezwłoczne sporządzenie dokumentacji powypadkowej pomoże pracownikowi otrzymać należne środki finansowe, chroniąc przed dodatkowym stresem.</p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>Pojęcie wypadku przy pracy i jego rodzaje</li>
                        <li className={style.item__textLi}>Wypadki traktowane na równi z wypadkami przy pracy</li>
                        <li className={style.item__textLi}>Wypadek na terenie innego zakładu pracy</li>
                        <li className={style.item__textLi}>Orzeczenia SN w sprawie wypadków przy pracy</li>
                        <li className={style.item__textLi}>Sporządzenie dokumentacji powypadkowe</li>
                        <li className={style.item__textLi}>Zgłaszanie wypadków i wypełnianie statystycznej karty wypadku przy pracy</li>
                        <li className={style.item__textLi}>Wypadki w drodze do pracy lub z pracy</li>
                        <li className={style.item__textLi}>Świadczenia z tytułu wypadku pracownika</li>
                        <li className={style.item__textLi}>Odpowiedzialność pracodawcy z tytułu wypadku pracownika</li>
                    </ul>
                    <div><Link to='/knowledge' className="btn">Dowiedz się więcej...</Link></div>
                </div>

                <div className={style.item}>
                    <h2 className={style.item__title}>7 Analiza przyczyn wypadków</h2>
                    <p className={style.item__text}>Przyjrzenie się konkretnym przykładom wypadków przy pracy pomaga zrozumieć, że wypadki mogą się zdarzyć w różnych okolicznościach, nawet w takich w których zagrożenia wydają się być niewielkie. Konsekewencji wynikających z wypadków które się wydarzyły w przeszłości nie da się cofnąć, ale mogą przyczynić się do wprowadzenia profilaktyki i ochrony zdrowia na przyszłość.</p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>Przykłady wypadków</li>
                        <li className={style.item__textLi}>Wyroki Sądu Najwyższego</li>
                    </ul>
                    <div><Link to='/knowledge' className="btn">Dowiedz się więcej...</Link></div>
                </div>

                <div className={style.item}>
                    <h2 className={style.item__title}>8 Służba BHP</h2>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>Portale informacyjne BHP (stronabhp.pl)</li>
                        <li className={style.item__textLi}>Szkolenia okresowe profilowane e-learning</li>
                        <li className={style.item__textLi}>Internetowy System Aktów Prawnych</li>
                        <li className={style.item__textLi}>Twitter – bycie na bieżąco ze zmianami aktów prawnych BHP (@stronabhp.pl)</li>
                        <li className={style.item__textLi}>Facebook – możliwość wymiany informacji</li>
                    </ul>
                    <div><Link to='/knowledge' className="btn">Dowiedz się więcej...</Link></div>
                </div>

                <div className={style.item}>
                    <h2 className={style.item__title}>9 Szkolenia BHP</h2>
                    <p className={style.item__text}>Szkolenie BHP to sposób na przekazanie pracownikom, wiadomości o tym w jaki sposób  prawodawca i pracodawca zaplanowali ochronić ich zdrowie i życie podczas pracy. Szkolenie takie osiągnie cel, jeśli przykuje uwagę słuchacza. Stanie się tak, gdy nabierze on przekonania, że przekazywane mu informacje są praktyczne w jego sytuacji. Prowadzący szkolenie wciąż może nabywać doświadczenia w zakresie poszerzania wiedzy jak również podnosząc poziom sposobu nauczania.</p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>Rodzaje szkoleń BHP, ramowe programy i wymagania dotyczące ich organizacji</li>
                        <li className={style.item__textLi}>Dydaktyka szkoleń BHP </li>
                        <li className={style.item__textLi}>Cechy dobrego nauczyciela</li>
                    </ul>
                    <div><Link to='/knowledge' className="btn">Dowiedz się więcej...</Link></div>
                </div>

                <div className={style.item}>
                    <h2 className={style.item__title}>10 Pierwsza pomoc</h2>
                    <p className={style.item__text}>Zasady postępowania w razie wypadku w czasie pracy i w sytuacjach zagrożeń (np. pożaru, awarii), w tym zasady udzielania pierwszej pomocy w razie wypadku </p>
                    <p className={style.item__text}>Po wypadku przy pracy, pierwszym z działań powinno być udzielenie pierwszej pomocy ofierze wypadku. Jakie działania jest zobowiązany podjąć świadek wypadku? Jak poradzić sobie przy poniżej wymienionych obrażeniach?</p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>Ogólne zasady udzielania pierwszej pomocy</li>
                        <li className={style.item__textLi}>Zranienia</li>
                        <li className={style.item__textLi}>Krwotoki</li>
                        <li className={style.item__textLi}>Zwichnięcia </li>
                        <li className={style.item__textLi}>Złamania</li>
                        <li className={style.item__textLi}>Oparzenie / Odmrożenie</li>
                        <li className={style.item__textLi}>Porażenie prądem</li>
                        <li className={style.item__textLi}>Zatrucia chemiczne</li>
                        <li className={style.item__textLi}>Resustytacja</li>
                    </ul>
                    <div><Link to='/knowledge' className="btn">Dowiedz się więcej...</Link></div>
                </div>

                <div className={style.item}>
                    <h2 className={style.item__title}>11 Ochrona przeciwpożarowa</h2>
                    <p className={style.item__text}>Ochrona przeciwpożarowa dotyczy dwóch dziedzin – zabezpieczenia pomieszczeń i przeszkolenie pracowników w zakresie zwalczania pożarów.</p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>Budynki – odporność pożarowa, strefy pożarowe i ewakuacja</li>
                        <li className={style.item__textLi}>Podręczny sprzęt gaśniczy – wyposażenie i rozmieszczenie</li>
                        <li className={style.item__textLi}>Instrukcja Bezpieczeństwa Pożarowego</li>
                        <li className={style.item__textLi}>Zwalczanie pożarów – obowiązki pracowników</li>
                        <li className={style.item__textLi}>Ochrona odgromowa</li>
                    </ul>
                    <div><Link to='/knowledge' className="btn">Dowiedz się więcej...</Link></div>
                </div>

                <div className={style.item}>
                    <h2 className={style.item__title}>12 System zarządzania BHP</h2>
                    <p className={style.item__text}>Skuteczne działania BHP to więcej niż sporządzenie wymaganej dokumentacji, szkolenie według ogólnego programu i doraźne kontrole stanu BHP. Dopiero wprowadzenie systemu zarządzania BHP pozwala na określenie ram w zakresie zagrożeń ryzykiem i ich eliminacji. W dłuższym okresie czasu system tworzy w firmie unikatową strukturę, zapewniającą prawdziwe bezpieczeństwo. Na czym polega taki system? Poniżej omówiono jego główne elementy.</p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>Zaangażowanie kierownictwa i pracowników </li>
                        <li className={style.item__textLi}>Ustalenie polityki BHP i określenie sposobów przekazania jej pracownikom</li>
                        <li className={style.item__textLi}>Planowanie, wprowadzanie w czyn i ocena efektów</li>
                        <li className={style.item__textLi}>Zarządzanie ryzykiem zawodowym</li>
                    </ul>
                    <div><Link to='/knowledge' className="btn">Dowiedz się więcej...</Link></div>
                </div>

                <div className={style.item}>
                    <h2 className={style.item__title}>13 BHP wg branż</h2>
                    <p className={style.item__text}>Każda branża ma swój podstawowy zestaw zagrożeń dla zdrowia i życia. Część przepisów prawnych dotyczy szczegółowo wybranych dziedzin. Dla ułatwienia znalezienia informacji, poniżej zgrupowano je dla wybranych branż.</p>
                    <ul className={style.item__textUl}>
                        <li className={style.item__textLi}>W budownictwie</li>
                        <li className={style.item__textLi}>W gastronomii</li>
                        <li className={style.item__textLi}>W magazynie</li>
                        <li className={style.item__textLi}>W podmiotach leczniczych</li>
                        <li className={style.item__textLi}>W produkcji</li>
                        <li className={style.item__textLi}>W transporcie</li>
                    </ul>
                    <div><Link to='/knowledge' className="btn">Dowiedz się więcej...</Link></div>
                </div>

            </section>
        </main >
    )
}

export default Knowledge