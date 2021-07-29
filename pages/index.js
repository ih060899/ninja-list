import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
        <div>
            <h1 className={styles.title}>Home Page</h1>
            <p className={styles.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                eligendi quia quasi provident et rerum adipisci fugiat, sapiente
                aperiam asperiores dignissimos omnis quod maxime hic similique
                magnam tempora laudantium iste?
            </p>
            <p className={styles.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                eligendi quia quasi provident et rerum adipisci fugiat, sapiente
                aperiam asperiores dignissimos omnis quod maxime hic similique
                magnam tempora laudantium iste?
            </p>
            <Link href='/ninjas'>
                <a className={styles.btn}>See Ninja Listing</a>
            </Link>
            </div>
            </>
    );
}
