import Link from 'next/link';

export default function Page() {
  return (
    <>

	  <h3><Link href="/posts">Return to Posts selection page</Link> </h3>
      <br />
	  <h3>Title: About this site</h3>
	  
	  <p>This is the personal site of M Wong. It is implemented by using next.js, React, 
	  HTML and CSS.</p>
	  <p>This site is hosted by GitHub Pages</p>
    </>
  );
}