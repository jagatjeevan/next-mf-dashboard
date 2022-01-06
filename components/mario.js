import Image from "next/image";
import styles from "../styles/Mario.module.css";

const Mario = () => {
  return (
    <main className={styles.main}>
      <Image src="/mario.png" alt="Mario" width={240} height={413} />
      <h1 className={styles.title}>
        G&apos;day! I&apos;m Mario, a microfrontend.
      </h1>
    </main>
  );
};

export default Mario;
