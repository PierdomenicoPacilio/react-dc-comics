export default function Library(props) {
    return <div id="library">
        <ul className='container'>
            {props.links.links1.map(link => <a key={link.id} href={link.url}><li className='content'><img src={link.img} alt={link.text} /><span>{link.text.toUpperCase()}</span></li></a>)}
        </ul>
    </div>
}