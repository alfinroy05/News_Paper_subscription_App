import React from 'react'
import Nav from './Nav'

const Index = () => {
    return (
        <div>
            <Nav/>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExampleFade" class="carousel slide carousel-fade">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://cdn-bclnh.nitrocdn.com/HrhbFpIEQgeThoExdTufdJjReiWCKhjs/assets/images/optimized/rev-3485e84/www.fugenx.com/wp-content/uploads/2019/03/How-Much-Does-it-Cost-to-Develop-an-App-like-News-and-Newspaper-Booking.jpg" class="d-block w-100" alt="..."/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://play-lh.googleusercontent.com/ZaQtP11kLfANMAbtq_9DVOdk3Izn2mAJdkNFE-k0Oa9kk3eItPN2LJw0hRFgIsAF7HMP" class="d-block w-100" height="1000"alt="..."/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://media.assettype.com/newslaundry%2F2020-08%2Fecd66834-ea1b-401b-863a-83ab992aa77f%2FMandir_Newspaper_Coverage_AI.jpg?auto=format%2Ccompress&fit=max&format=webp&w=1200&dpr=1.3" class="d-block w-100" alt="..."/>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index