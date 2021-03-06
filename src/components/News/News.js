import React, { useEffect } from 'react'
import style from './News.module.css'

// images
import underConstruction from '../../assets/underConstruction.jpg'


const News = () => {

    // scroll to top when componene render
    useEffect(() => { window.scrollTo(0, 0) }, [])



    return (
        <main className={style.background}>

            {/* section WHO*/}
            <section className={style.start}>
                <figure className={style.figure__img}>
                    <img className="img" src={underConstruction} alt='under Construction' />
                </figure>
            </section>
        </main >
    )
}

export default News