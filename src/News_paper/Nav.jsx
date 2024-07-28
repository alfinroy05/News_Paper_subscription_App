import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <nav class="navbar navbar-expand-lg bg-primary">
                                    <div class="container-fluid">
                                        <Link class="navbar-brand" to="/">News Paper Subscription</Link>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                            <div class="navbar-nav">
                                                <Link class="nav-link active" aria-current="page" to="/add">Add</Link>
                                                <Link class="nav-link" to="/search">Search</Link>
                                                <Link class="nav-link" to="/delete">Delete</Link>
                                                <Link class="nav-link" to="/view">View All</Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav