function Stats() {
    return(
        <div className='container p-3 mb-5'>
          <div className='row p-5'>
            <div className='col-6 p-5'>
              <h1>Trust with confidence</h1>
              <br></br>
              <h3>Customer-first always</h3>
              <p className='mb-3 text-muted'>That's why 1.3+cr customers trust Zerodha with ₹3.5+lakh crors worth of equity investment </p>
              <h3>No spam or gimmicks</h3>
              <p className='mb-3 text-muted'>No gimmicks, apam, "gamification", or annoyin gpush notifications. High quality apps that you use at your pace, the way you like.</p>
              <h3>The Zerodha universe</h3>
              <p className='mb-3 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
              <h3>Do better with money</h3>
              <p className='mb-3 text-muted'>With initiatives like Nudge and Kill Switch , we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-6 ml-2 p-5'>
              <img src='Media/images/ecosystem.png' style={{width:"85%"}}/>
              <div className='text-center p-5'>
                <a href='' className='mx-4' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                <a href='' style={{textDecoration:"none"}}>Try Kite <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Stats;