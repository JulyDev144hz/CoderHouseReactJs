import React from 'react'

import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import jordan from '../imgs/jordan.webp'
function LandingPage() {
    return (
        <main className='mainPage'>

            <div className="landingPage">
                <h1 className='white-text center-align'>Sneaker Society</h1>
                <img src={jordan} alt="" className='responsive-img' />
                <div className="divisorLanding">
                </div>

            </div>


            <ItemListContainer item="Prop de itemlistContainer" />


        </main>
    )
}

export default LandingPage