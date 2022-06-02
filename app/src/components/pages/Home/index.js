import './index.css'

import zodi2 from '../../../assets/img/zodi2.jpg'
import zodiac2 from '../../../assets/img/zodiac2.jpg'
import { useEffect, useState } from 'react';
function Home() {
    const [zodiacsState, setZodiacsState] = useState()
    const zodiacs = ['aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', '']
    useEffect(() => {
        zodiacs.map(item => {
            fetch(`https://ohmanda.com/api/horoscope/${item}`).then(res=>res.json()).then(data=>console.log(data))
        } )
    },[zodiacs] ) 
    return (<>
        <img src={zodi2} className="zodi2" alt="zodi2" />
        <img src={zodiac2} className="zodiac2" alt="zodiac2" />
        <div className='card'>
        </div>
    </>);
}

export default Home;