import React, { useEffect } from 'react'
import style from './Offer.module.css'



const Offer = () => {

    // scroll to top when componene render
    useEffect(() => { window.scrollTo(0, 0) }, [])



    return (
        <main className={style.background}>

            {/* header */}
            <header className="header">
                <div className="header__container">
                    <a href="#Szkolenia" className="header__item">Szkolenia BHP</a>
                    <a href="#Obsługa" className="header__item">Obsługa BHP</a>
                    <a href="#Dokumentacja" className="header__item">Dokumentacja</a>
                </div>
            </header>

            <div className={style.container}>

                {/* section*/}
                <section className={style.container1}>
                    <div id="Szkolenia" className="section__id"></div>
                    <div className="section__textContainer">
                        <h1 className="text1">Szkolenia BHP</h1>
                        <div className="line"></div>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                    </div>
                </section>


                {/* section*/}
                <section className={style.container2}>
                    <div id="Obsługa" className="section__id"></div>
                    <div className="section__textContainer">
                        <h1 className="text1">Obsługa BHP</h1>
                        <div className="line"></div>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                    </div>
                </section>

                {/* section*/}
                <section className={style.container1}>
                    <div id="Dokumentacja" className="section__id"></div>
                    <div className="section__textContainer">
                        <h1 className="text1">Dokumentacja powypadkowa</h1>
                        <div className="line"></div>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                    </div>
                </section>
            </div>
        </main >
    )
}

export default Offer