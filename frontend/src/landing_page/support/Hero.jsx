function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
            <div className="p-5" id="supportWrapper">
                <h5>Support Portal</h5>
                <a href="">Track Tickets</a>
            </div>
            <div className="row  mx-5" >
                <div className="col-6 p-5">
                    <h2>Search for an answer or browse help topics to create a ticket</h2>
                    <input placeholder="Eg. How do I activate F&O" className="mt-2 mb-3"/>
                    <br></br>
                    <a href="">Track account opening</a>
                    &nbsp; &nbsp;&nbsp;&nbsp;
                    <a href="">Track segment activation </a>
                    &nbsp; &nbsp;&nbsp;&nbsp;
                    <a href="">Intraday margins </a>
                    <br></br>
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-6 p-5">
                    <h2 className="mb-4">Featured</h2>
                    <ol>
                        <li><a href="">Surveillance measure on scrips - August 2024</a></li>
                        <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;