import React from 'react';
import roket from './images/roket.jpg';
import Common from './Common';
function Home() {
    return (
        <>
            <Common
                name="Grow your business with"
                imgsrc={roket} 
                visit="/service"
                btname="Get Started"
            />
        </>
    )
}

export default Home;