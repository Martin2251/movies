import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeAction$ } from "@builder.io/qwik-city";

const movieApiKey = ""


type Movie ={
  Title: string,
  Year:string,
  imdbID:string,
  Type:string,
  Poster: string
}


export const useGetMovies = routeAction$(async(values) => {
  const url = `http://www.ombdapi.com/?apikey=${movieApiKey}&s=${value.search}`;
  const res = await fetch(url);
  const data = await res.json();

  const list =  data.Search as Movie[];

  return {
    movies: list,
  }
})

export default component$(() => {
 
    return (
      <>

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