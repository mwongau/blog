import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>Blog</h1>
	  <br />
      <p>Select and click post title:</p>
	  <p><Link href="/posts/1">Creation of blog</Link></p>
      <p><Link href="/posts/2">About this site</Link></p>
	  <br />
	  <Link href="/"><b>Back to Home page</b></Link>
      
    </>
  );
}