import Linklist from "./LinkList"

export default function Header() {
    return <header>
        <div className="container">
            <div>
                <img src="dc-logo.png" alt="DC Logo" />
            </div>
            <Linklist />
        </div>
    </header>
}