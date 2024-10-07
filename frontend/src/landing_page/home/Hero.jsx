function Hero() {
    return ( 
        <div className='container p-5 '>
            <div className='row text-center'>
                <img src='Media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 mt-5>
                    Start Investing...!!
                </h1>
                <p> Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='btn btn-primary ' style={{width:'30%', margin:'0 auto'}}>Signup</button>
            </div>
        </div>
     );
}

export default Hero;