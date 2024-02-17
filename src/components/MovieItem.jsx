


export default function MovieItem({ movieData , handlePreview, handleToggle}){

    return(
    <li key={movieData.id} className='movie-item'>
        <img src={movieData.image_thumbnail_path} alt={movieData.name} />
        <div className='movie-info'>
        <h3>{movieData.name}</h3>
        {handlePreview && <button onClick={handlePreview} >Özet</button>}
        {handleToggle && <button onClick={()=>handleToggle(movieData)} >Kaldır</button>}

        </div>
    </li>)
}