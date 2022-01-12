import React from 'react';
import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './style.css';

export default function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="vmovies-nav-content">
                    <h1>ViniMovies</h1>
                        <div className="github">
                            <a className="githubIcon" href="https://github.com/viniTWL" target="_blank"> <GithubIcon/> </a>
                            <p className="githubName">/viniTWL</p>
                        </div>
                </div>
            </nav>
        </header>
    )
}