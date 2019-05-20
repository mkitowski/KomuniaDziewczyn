import React from 'react';
import hiro from '../../lib/hiro.mkv';
import hiro1 from '../../lib/hiro1.mp4';


const Hiro = () => {
    return (
        <video autoPlay muted loop>
            <source src={hiro} type="video/mkv" />
            <source src={hiro1} type="video/mp4" />
            Twoja przeglądarka ma gdzieś wyświetlanie czegokolwiek na tej stronie zmien na Chrome...
        </video>
    )
}

export default Hiro;

