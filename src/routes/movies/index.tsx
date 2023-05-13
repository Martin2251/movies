import { component$,useSignal,useVisibleTask$ } from "@builder.io/qwik";
import { DocumentHead, Form, routeAction$ } from "@builder.io/qwik-city";
 const movieApiKey = ('MOVIE_API')


type Movie = {
  Title: string;
  Year:string;
  imdbID:string;
  Type:string,
  Poster: string
}


export const useGetMovies = routeAction$(async(values) => {
  const url = `http://www.omdbapi.com/?apikey=${movieApiKey}&s=${values.search}`;
  const res =  await fetch(url);
  const data = await res.json();

  const list =  data.Search as Movie[];

  return {
    movies: list,
  }
})

export default component$(() => {
    const defaultMovie = useSignal("shrek");
    const movies = useGetMovies();
    

    useVisibleTask$(() =>{
        document.querySelector("button")?.click();
    });
 
    return (
      <>

      <Form action={movies}>
        <input  name="search" type="text" value={defaultMovie.value} />
        <button>search</button>
      </Form>
      
      {movies.value?.movies? (
        <ul>
            {movies.value.movies?.map((movie) => (
                <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title}  />
                    <p>{movie.Title}</p>
                </li>
            ))}

        </ul>
      ):(
        <p>no movies found</p>
      )}

      </>
    );
  });

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
    meta: [
      {
        name: 'description',
        content: 'Qwik site description',
      },
    ],
  };