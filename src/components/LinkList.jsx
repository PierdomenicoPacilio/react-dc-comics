export default function Linklist({ links }) {
    return <ul>
        {links.map(link => <a href={link.url}><li>{link.text}</li></a>)}
    </ul>
}