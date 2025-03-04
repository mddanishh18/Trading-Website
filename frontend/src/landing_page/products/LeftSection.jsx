function LeftSection({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src={imageUrl} />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <a href={tryDemo}>Try Demo<i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn More<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-3">
                    <a href={googlePlay}><img src="Media/images/googlePlayBadge.svg"/></a>
                    <a href={appStore}><img src="Media/images/appstoreBadge.svg" style={{marginLeft:"50px"}}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSection;