import React from 'react';
import tapOrClick from 'react-tap-or-click';

const Menu = (props) => {
    return (
        <div className='menu'>
            <div>
                <h1>Pierwsza Komunia Świeta</h1>
                <h2>Magdalena i Karolina Kitowskie</h2>
                <h3>11.05.2019</h3>
                <ul>
                    <li><button { ...tapOrClick(props.movie) }>Film</button></li>
                    <li><button { ...tapOrClick(props.gallery) }>Zdjęcia</button></li>
                </ul>
            </div>
        </div>
    )
}
export default Menu;