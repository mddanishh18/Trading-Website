function Brokerage() {
    return ( 
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-8">
                    <a href="" style={{textDecoration:"none", fontSize:"2rem"}} className="text-center">Brokerage calculator</a>
                    <ul>
                        <li className="text-muted mt-4">Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li className="text-muted">Digital contract notes will be sent via e-mail.</li>
                        <li className="text-muted">Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li className="text-muted">For NRI account , 0.5% or ₹100 per executed order for equity </li>
                        <li className="text-muted">For NRI account (PIS), 0.5% or ₹200 per executed order for equity</li>
                        <li className="text-muted">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-4 text-center">
                <a href="" style={{textDecoration:"none", fontSize:"2rem"}}>List of charges</a>    
                </div>
            </div>
        </div>
     );
}

export default Brokerage;