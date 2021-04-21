import React, { useEffect } from 'react'
import style from './News.module.css'



const News = () => {

    // scroll to top when componene render
    useEffect(() => { window.scrollTo(0, 0) }, [])



    return (
        <main className={style.background}>

            {/* header */}
            <header className="header">
                <div className="header__container">
                    <a href="#1" className="header__item">News 1</a>
                    <a href="#2" className="header__item">News 2</a>
                    <a href="#3" className="header__item">News 3</a>
                </div>
            </header>

            <div className={style.container}>

                {/* section*/}
                <section className={style.container1}>
                    <div id="1" className="section__id"></div>
                    <div className="section__textContainer">
                        <h1 className="text1">News 1</h1>
                        <div className="line"></div>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="textDate">11.04.2021</p>
                    </div>
                </section>

                {/* section*/}
                <section className={style.container2}>
                    <div id="2" className="section__id"></div>
                    <div className="section__textContainer">
                        <h1 className="text1">News 2</h1>
                        <div className="line"></div>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="textDate">11.04.2021</p>
                    </div>
                </section >

                {/* section*/}
                < section className={style.container1} >
                    <div id="3" className="section__id"></div>
                    <div className="section__textContainer">
                        <h1 className="text1">News 3</h1>
                        <div className="line"></div>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam perferendis consectetur sapiente? Eius nobis veritatis perferendis rerum, doloremque, veniam dolor ut laboriosam non, fugit sit magni dolorem delectus soluta necessitatibus voluptate. Reiciendis blanditiis neque veritatis soluta omnis impedit eaque minus consequuntur, explicabo voluptatum delectus quaerat debitis suscipit sequi facere</p>
                        <p className="textDate">11.04.2021</p>
                    </div>
                </section >

            </div>
        </main >
    )
}

export default News