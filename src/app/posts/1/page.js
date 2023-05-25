import Link from 'next/link';

export default function Page() {
  return (
    <>
	  <h1>Blog</h1><br />
      <h3>Title: Creation of blog</h3>
	  <br />
	  <p>This blog was created on 25-5-2023.</p><br />
	  
      <Link href="/posts"><b>Back to Posts selection page</b></Link><br />
      <Link href="/"><b>Back to Home page</b></Link>
      
    </>
  );
}