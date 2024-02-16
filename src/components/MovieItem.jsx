export default function MovieItem({ movieData }){
    return(
    <li key={movieData.id} className='movie-item'>
        <img src={movieData.image_thumbnail_path} alt={movieData.name} />
        <div className='movie-info'>
        <h3>{movieData.name}</h3>
        <button>Özet</button>
        </div>
    </li>)
}