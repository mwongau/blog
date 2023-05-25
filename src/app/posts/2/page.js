import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>Blog</h1><br />
	  <h3>Title: About this site</h3>
	  
	  <br />
	  <p>This is the personal site of M Wong. It is implemented by using next.js, React, 
	  HTML and CSS.</p><br />
	  <p>This site is hosted by GitHub Pages</p><br />
      
      <Link href="/posts"><b>Back to Posts selection page</b></Link><br />
	  <Link href="/"><b>Back to Home page</b></Link>     
    </>
  );
}