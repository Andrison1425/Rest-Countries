import React from 'react'
import Theme from './Theme'

const Header = () => {
    return (
        <header className="header__header p-content">
            <h1>Where in the world?</h1>
            <div className="header__btn-modo">
               <Theme />
            </div>
        </header>
    )
}

export default Header
