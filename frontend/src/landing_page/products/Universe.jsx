function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
            <img src="Media/images/smallcaseLogo.png" style={{width:"90%"}}/>
            <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="Media/images/streakLogo.png" style={{width:"70%"}}/>
            <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="Media/images/sensibullLogo.svg" style={{width:"80%"}}/>
            <p className="text-small text-muted mt-4">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="Media/images/zerodhaFundhouse.png" style={{width:"100%"}}/>
            <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="Media/images/goldenpiLogo.png" style={{width:"80%"}}/>
            <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img src="Media/images/dittoLogo.png" style={{width:"80%"}}/>
            <p className="text-small text-muted">Insuarence</p>
        </div>
        <button className='btn btn-primary ' style={{width:'30%', margin:'0 auto'}}>Signup</button>
      </div>
    </div>
  );
}

export default Universe;
