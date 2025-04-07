export default function Linklist({ headerLinks }) {
    return <ul>
        {headerLinks.map(link => <a href="#"><li>{link}</li></a>)}
    </ul>
}