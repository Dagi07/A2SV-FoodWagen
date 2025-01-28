import Image from "next/image";
import styles from "./page.module.css";

interface CardProps {
  name: string;
  rating: number;
  image: string;
}

export default function Card({ name, rating, image }: CardProps) {
  return (
    <div className={styles.card}>
      <Image src={image} alt={name} width={357} height={301} />
      <p className={styles.name}>{name}</p>
      <p className={styles.rating}>Rating: {rating}</p>
    </div>
  );
}
