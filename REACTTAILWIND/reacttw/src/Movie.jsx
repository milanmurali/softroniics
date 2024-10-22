import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export const Movie = () => {

  const { imdbID } = useParams();
  console.log("id " + imdbID);

  const [movie, setMovie] = useState();

  const fetchmovie = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=a5ef1268`);
      console.log("response " + response.data);
      setMovie(response.data);

    }
    catch (error) {
      console.error(error);

    };
  }
  useEffect(() => {
    fetchmovie();

  }, [imdbID])

  if (!movie) {
    return <h1 className='text-2xl font-bold mb-4 text-center'>Loading...</h1>;
  }
  return (

    <div className='p-4'>
      <h1 className='text-4xl font-bold mb-4 text-center'>Movie Details</h1>

      <div className="max-w-4xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg mt-8">

        <div className="flex flex-col items-center md:flex-row gap-8">

          <img src={movie.Poster} alt={movie.Title} className="rounded-lg object-contain w-64 h-96" />
          <div>
            <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
            <p className="text-gray-600 mb-2"><strong>Year:</strong> {movie.Year}</p>
            <p className="text-gray-600 mb-2"><strong>Genre:</strong> {movie.Genre}</p>
            <p className="text-gray-600 mb-2"><strong>Director:</strong> {movie.Director}</p>
            <p className="text-gray-600 mb-2"><strong>Actors:</strong> {movie.Actors}</p>
            <p className="text-gray-600 mb-4"><strong>Plot:</strong> {movie.Plot}</p>
            <p className="text-gray-600 mb-4"><strong>Awards:</strong> {movie.Awards}</p>
            <p className="text-gray-600 mb-4"><strong>Box Office:</strong> {movie.BoxOffice}</p>

            {/* Rating section */}
            <p className="text-gray-600 mb-2"><strong>Ratings:</strong></p>
            <div className="mb-4 ml-2">
              <p className="text-gray-600 mb-2">
                <Link to={`https://www.imdb.com/title/${movie.imdbID}/`} className='underline underline-offset-2'>
                  IMDb
                </Link>
                {" : " + movie.imdbRating}
              </p>
              {movie.Ratings.filter(rating => rating.Source !== "Internet Movie Database").map((rating, index) => (
                <p key={index} className="text-gray-600 mb-2">
                  {rating.Source} : {rating.Value}
                </p>
              ))}
            </div>
            {/* Trailer Section */}
            <div className="mb-4 text-gray-600">
              <strong>Trailer : </strong>
              <Link to={`https://www.youtube.com/results?search_query=${movie.Title}+Trailer`} className='underline underline-offset-2'>
                Watch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
