import digitalComics from './../assets/img/buy-comics-digital-comics.png'
import merchandise from './../assets/img/buy-comics-merchandise.png'
import subscriptions from './../assets/img/buy-comics-subscriptions.png'
import locator from './../assets/img/buy-comics-shop-locator.png'
import powerVisa from './../assets/img/buy-dc-power-visa.svg'



export default function Library() {
    return <div id="library">
        <ul className='container'>
            <a href="#"><li className='content'><img src={digitalComics} alt="" /><span>DIGITAL COMICS</span></li></a>
            <a href="#"><li className='content'><img src={merchandise} alt="" /><span>DC MERCHANDISE</span></li></a>
            <a href="#"><li className='content'><img src={subscriptions} alt="" /><span>SUBCRIPTION</span></li></a>
            <a href="#"><li className='content'><img src={locator} alt="" /><span>COMIC SHOP LOCATOR</span></li></a>
            <a href="#"><li className='content'><img src={powerVisa} alt="" /><span>DC POWER VISA</span></li></a>
        </ul>
    </div>
}