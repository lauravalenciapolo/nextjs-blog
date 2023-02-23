import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import getPost from '../pages/api/getPost';

const name = 'Dave';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  const [post, setPost] = useState({})
  useEffect( ()=>{
    async function fetchData(){
      const postApi = await getPost(1)
      setPost(postApi)
    }    
    fetchData()
  },[])

  console.log(post, "Post")

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={post?.status}
        />
        <meta
          property="og:image"
          content={post?.image}
        />
        <meta name="og:title" content="LAURAAAAA" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}

// import styles from './layout.module.css';

// export default function Layout({ children }) {

//     return <div className={styles.container}>{children}</div>;

// }