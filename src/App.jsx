import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import MovieItem from './components/MovieItem'
import MoviePreview from './components/MoviePreview'
import { Route, Switch } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'




function App() {
const[movies, setMovies] = useState([])
const[preview, setPreview] = useState(null)
const[myList, setMyList] = useState([])

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

function handleToggle(newMovie) {
  if(myList.filter((movie) => movie.id === newMovie.id).length > 0 ){
    const newList = myList.filter((movie) => movie.id !== newMovie.id);
    setMyList(newList)
  } else{
    setMyList ([...myList, newMovie])
  }
 
}
 

  return (
  <main>
    <Switch>
      <Route path="/" exact>
        <div className='wrapper'>
          <div className='movie-list'>
            <h2>Movie List</h2>
            <ul >
              {movies.map((movie) => 
              (<MovieItem key={movie.id} movieData={movie} 
                handlePreview = {()=> setPreview(movie)} />))}
            </ul>
          </div>
          <div className='movie-summary'>
            {preview ? <MoviePreview movieData={preview} 
            onToggle={handleToggle} 
            buttonText= { myList.filter((movie) => movie.id === preview.id).length > 0 
              ? "Listeden Çıkar" : "Listeye Ekle" } /> 
            : <div className='pick-one'>Bir dizi seçiniz</div> }
          </div>
          <div className='movie-list'>
            <h2>My List</h2>
            <ul>{myList.map((movie) => <MovieItem key={movie.id} movieData={movie} 
            handleToggle={handleToggle} />)}</ul>
            
          </div>
        </div>
      </Route>
      <Route path="/dizi-detay/:movieId" >
        <MovieDetails onToggle={handleToggle} 
        buttonText= { myList.filter((movie) => movie.id === preview.id).length > 0 
          ? "Listeden Çıkar" : "Listeye Ekle" } />
      </Route>
      <Route path="/dizi-ekle" >
        <p>Dizi ekleme sayfası Sayfası</p>
      </Route>
    </Switch>
  </main>
  )
}

export default App
