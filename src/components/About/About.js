import React, { useState, useEffect } from 'react'
import style from './About.module.css'
import AOS from 'aos'


// images
import team from '../../assets/team.jpg'
import knowledge from '../../assets/knowledge.jpg'

//photos images svg
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'



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
                                <p className="text2"><span className={style.text__bigLeter}>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                                <p className="text2"><span className={style.text__bigLeter}>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
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
                                <p className="text2 text__white"><span className={style.text__bigLeter}>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere.</p>
                                <p className="text2 text__white"><span className={style.text__bigLeter}>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere.</p>
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
                        <Phone />
                        <h2 className={style.approach__h2}>Doświadczenie</h2>
                        <p className={style.approach__p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente?</p>
                    </div>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Phone />
                        <h2 className={style.approach__h2}>Szkolenia</h2>
                        <p className={style.approach__p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente?</p>
                    </div>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Phone />
                        <h2 className={style.approach__h2}>Certyfikaty</h2>
                        <p className={style.approach__p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente?</p>
                    </div>
                    <div data-aos="flip-left" className={style.approach__item}>
                        <Phone />
                        <h2 className={style.approach__h2}>Cena</h2>
                        <p className={style.approach__p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente?</p>
                    </div>
                </div>
            </section>

        </main >
    )
}

export default About