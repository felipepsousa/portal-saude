import React from 'react'
import './style.scss'
import Categories from '../Categories/Categories'
import Card from '../Card/Card'
function Home() {
    return (
        <div className="container-home">
            <div className="categories-home"> <Categories /> </div>
            <div className="home">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Home
