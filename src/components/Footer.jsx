import footerLogo from './../assets/img/dc-logo-bg.png'

import facebookLogo from './../assets/img/footer-facebook.png'
import twitterLogo from './../assets/img/footer-twitter.png'
import youTubeLogo from './../assets/img/footer-youtube.png'
import pinterestLogo from './../assets/img/footer-pinterest.png'
import mapsLogo from './../assets/img/footer-periscope.png'


export default function Footer() {
    return <footer>
        <div id="footerTop">
            <div className="container">
                <div className='container'>
                    <div>
                        <h4>DC COMICS</h4>
                        <ul>
                            <a href="#"><li>Characters</li></a>
                            <a href="#"><li>Comics</li></a>
                            <a href="#"><li>Movies</li></a>
                            <a href="#"><li>TV</li></a>
                            <a href="#"><li>Games</li></a>
                            <a href="#"><li>Videos</li></a>
                            <a href="#"><li>News</li></a>
                        </ul>
                        <h4>SHOP</h4>
                        <ul>
                            <a href="#"><li>Shop DC</li></a>
                            <a href="#"><li>Shop DC Collectibles</li></a>
                        </ul>
                    </div>
                    <div>
                        <h4>DC</h4>
                        <ul>
                            <a href="#"><li>Terms Of Use</li></a>
                            <a href="#"><li>Privacy policy {"(New)"}</li></a>
                            <a href="#"><li>Ad Choices</li></a>
                            <a href="#"><li>Advertising</li></a>
                            <a href="#"><li>Jobs</li></a>
                            <a href="#"><li>Subscription</li></a>
                            <a href="#"><li>Talent Workshops</li></a>
                            <a href="#"><li>CPSC Certificates</li></a>
                            <a href="#"><li>Ratings</li></a>
                            <a href="#"><li>Shop Help</li></a>
                            <a href="#"><li>Contact Us</li></a>
                        </ul>
                    </div>
                    <div>
                        <h4>SITES</h4>
                        <ul>
                            <a href="#"><li>DC</li></a>
                            <a href="#"><li>MAD Magazine</li></a>
                            <a href="#"><li>DC Kids</li></a>
                            <a href="#"><li>DC Universe</li></a>
                            <a href="#"><li>DC Power Visa</li></a>
                        </ul>
                    </div>
                </div>
                <div id='footerLogo'>
                    <img src={footerLogo} alt="DC Logo" />
                </div>
            </div>
        </div>
        <div id="footerBottom">
            <div className="container">
                <a href="#"><div className='button'>SING_UP NOW!</div></a>
                <div className='container'>
                    <a href="#"><span>FOLLOW US</span></a>
                    <ul>
                        <a href="#"><li><img src={facebookLogo} alt="Facebook Logo" /></li></a>
                        <a href="#"><li><img src={twitterLogo} alt="Twitter Logo" /></li></a>
                        <a href="#"><li><img src={youTubeLogo} alt="you Tube Logo" /></li></a>
                        <a href="#"><li><img src={pinterestLogo} alt="Pinterest Logo" /></li></a>
                        <a href="#"><li><img src={mapsLogo} alt="Maps Logo" /></li></a>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
}