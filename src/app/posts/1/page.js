import Link from 'next/link';

export default function Page() {
  return (
    <>
	  <Link href="/"><b>Home</b></Link> | <Link href="/posts"><b>Blog</b></Link><br />
	  <h1>Blog</h1><br />
      <h3>Title: Creation of blog</h3>
	  <br />
	  <p>This blog was created on 25-5-2023.</p><br />    
    </>
  );
}