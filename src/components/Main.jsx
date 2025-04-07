import jumbotron from './../assets/img/jumbotron.jpg'

export default function Main() {
    return <main>
        <div id='jumbotron'><img src={jumbotron} alt="jumbotron" /></div>
        <div className="container"><div>{"-->"} content goes here {"<--"}</div></div>
    </main>
}