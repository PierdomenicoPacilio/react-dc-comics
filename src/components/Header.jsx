import Linklist from "./LinkList"

export default function Header(props) {
    return <header>
        <div className="container">
            <div>
                <img src="dc-logo.png" alt="DC Logo" />
            </div>
            <Linklist links={props.links.links1} />
        </div>
    </header>
}

// headerLinks={props.headerLinks}