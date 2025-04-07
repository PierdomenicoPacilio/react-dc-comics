import footerLogo from './../assets/img/dc-logo-bg.png'

import facebookLogo from './../assets/img/footer-facebook.png'
import twitterLogo from './../assets/img/footer-twitter.png'
import youTubeLogo from './../assets/img/footer-youtube.png'
import pinterestLogo from './../assets/img/footer-pinterest.png'
import mapsLogo from './../assets/img/footer-periscope.png'


export default function Footer(props) {
    const getLinks = (link) => link.map(link => <a key={link.id} href={link.url}><li>{link.text}</li></a>)
    return <footer>
        <div id="footerTop">
            <div className="container">
                <div className='container'>
                    <div>
                        <h4>DC COMICS</h4>
                        <ul>
                            {getLinks(props.links.links1)}
                        </ul>
                        <h4>SHOP</h4>
                        <ul>
                            {getLinks(props.links.links2)}
                        </ul>
                    </div>
                    <div>
                        <h4>DC</h4>
                        <ul>
                            {getLinks(props.links.links3)}
                        </ul>
                    </div>
                    <div>
                        <h4>SITES</h4>
                        <ul>
                            {getLinks(props.links.links4)}
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