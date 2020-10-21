import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => (
    <main className={`container-fluid ${styles.landing}`}>
        <section className={`row ${styles.all}`}>
            <div className={`col-sm-6 ${styles.btnbox}`}>
                <button className="btn btn-outline-dark">
                    <Link href="/home">
                        Business
                    </Link>
                </button>
            </div>
            <div className={`col-sm-6 ${styles.btnbox}`}>
                <button className="btn btn-outline-dark">
                    <Link href="/home">
                        Creative
                    </Link>
                </button>
            </div>
        </section>
    </main> 
)

export default Hero