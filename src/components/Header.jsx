export default function Header(props) {
    return <header>
        <div className="container">
            <div>
                <img src="dc-logo.png" alt="DC Logo" />
            </div>
            <ul>
                {props.links.links1.map(link => <a key={link.id} href={link.url}><li>{link.text.toUpperCase()}</li></a>)}
            </ul>
        </div>
    </header>
}