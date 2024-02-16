import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import MovieItem from './components/MovieItem'




function App() {
const[movies, setMovies] = useState([])

useEffect(()=>{
  //request gönder
  //gelen cevabı konsola yazdır
  //state ekle
  axios
  .get("https://www.episodate.com/api/most-popular?page=1")
  //veri çekeceğimiz için get kullandık.
  .then((res)=>{
    console.log(res.data.tv_shows)
    setMovies(res.data.tv_shows)
  
  })
  .catch((err)=>{console.log(err)})
  .finally(()=>{console.log("request tamamlandı")})

},[])


  return (
  <div className='wrapper'>
  <div className='movie-list'>
    <h2>Movie List</h2>
    <ul >
      {movies.map((movie) => 
      (<MovieItem key={movie.id} movieData={movie}/>))}
    </ul>
  </div>
  <div className='movie-summary'></div>
  <div className='movie-favList'></div>
  </div>
  )
}

export default App
