import jumbotron from './../assets/img/jumbotron.jpg'

import Cards from './Cards'

export default function Main(props) {
    return <main>
        <div id='jumbotron'><img src={jumbotron} alt="jumbotron" /></div>
        <div className="container"><Cards comics={props.comics}></Cards></div>
    </main>
}