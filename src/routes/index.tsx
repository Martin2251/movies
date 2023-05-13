import { component$, useSignal } from '@builder.io/qwik';
import { DocumentHead, routeAction$} from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { QwikLogo } from '~/components/starter/icons/qwik';





export default component$(() => {
 
  return (
    <>
<h1>Movie app</h1>
<QwikLogo  />
<Link href="/movies"  title="movies">
  Click here
</Link>
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
