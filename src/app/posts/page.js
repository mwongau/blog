import Link from 'next/link';

export default function Page() {
  return (
    <>
      <p><Link href="/home"> Home </Link> |
	  <Link href="/posts"> Posts selection </Link></p>  	
	  <h2>Blog</h2>
      
      <p>Select and click post title:</p>
	  <p><Link href="/posts/1">Creation of blog</Link></p>
      <p><Link href="/posts/2">About this site</Link></p>
	 
    </>
  );
}