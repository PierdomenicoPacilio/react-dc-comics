export default function Cards(props) {
    return <ul className="grid">
        {props.comics.map(comic => <li key={comic.id} className="card" ><a href={comic.thumb}><div><img src={comic.thumb} alt={comic.title} /></div><p>{comic.series.toUpperCase()}</p></a></li>)}
    </ul >
}