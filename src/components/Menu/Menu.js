import React from 'react';

const Menu = (props) => {
    return (
        <div className='menu'>
            <div>
                <h1>Pierwsza Komunia Świeta</h1>
                <h2>Magdalena i Karolina Kitowskie</h2>
                <h3>11.05.2019</h3>
                <ul>
                    <li onClick={props.handler}><a>Film</a></li>
                    <li>Zdjęcia</li>
                </ul>
            </div>
        </div>
    )
}
export default Menu;