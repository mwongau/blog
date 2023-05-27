import Link from 'next/link';

export default function Page() {
  return (
    <>
	  <p><Link href="/posts"> Return to posts selection </Link></p> 
	  
      <h3>Title: Creation of blog</h3>
	  
	  <p>This blog was created on 25-5-2023.</p>
    </>
  );
}