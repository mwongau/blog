import Link from 'next/link';

export default function Page() {
  return (
    <>
	  <Link href="/">Home</Link> | <Link href="/posts">Blog</Link> <br />
      <h1>Blog</h1><br />
	  <h3>Title: About this site</h3>
	  
	  <br />
	  <p>This is the personal site of M Wong. It is implemented by using next.js, React, 
	  HTML and CSS.</p><br />
	  <p>This site is hosted by GitHub Pages</p><br />
    </>
  );
}