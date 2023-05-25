import Image from 'next/image'
import styles from './page.module.css'

import Link from 'next/link';
import Head from 'next/head';

export default function Page() {
  return (
    <main className={styles.main}>
      
      <div>
      <h1> M. Wong</h1>
	  <br />
      <h2>Home</h2>	  
	  
	  <p>Welcome to my personal site. I am a researcher in computer vision and machine learning 
	  with Ph.D in Computer Science, M.Sc and B.Sc(Hons.) in Electronic Engineering. I am also 
	  interested in web app development. This site is built by using next.js, React, JavaScript, 
	  HTML and CSS. This site is hosted by GitHub Pages.</p>
	  <p>This site might use cookies to improve the browsing experience of users. If you 
	  continue to use this site, it is assumed that you agree to the use of cookies.</p> 
	  <br /><br />
	  <Link href="/posts"><b>Go to Blog page</b></Link>
      
      </div>
    </main>
  );
}


