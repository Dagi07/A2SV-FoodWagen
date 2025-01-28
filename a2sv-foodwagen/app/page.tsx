import Image from "next/image";
import styles from "./page.module.css";
import Card from "./card";

interface Restaurant {
  id: number;
  name: string;
  rating: number;
  image: string; // Path to the image
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Bow Lasagna",
    rating: 4.6,
    image: "/assets/images/bow_lasagna.avif",
  },
  {
    id: 2,
    name: "Spaghetti Junction",
    rating: 4.2,
    image: "/assets/images/bow_lasagna.avif", // Example
  },
  {
    id: 3,
    name: "Pizza Paradise",
    rating: 4.8,
    image: "/assets/images/bow_lasagna.avif", // Example
  },
  {
    id: 4,
    name: "Pizza Paradise",
    rating: 4.8,
    image: "/assets/images/bow_lasagna.avif", // Example
  },
  // Add more restaurants here
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <Image
            src="/assets/images/FoodWagen.png"
            alt="food wagen"
            width={154}
            height={37}
          />
          <button className={styles.add_food_btn}>Add Food</button>
        </header>

        <section className={styles.hero}>
          <div className={styles.col_1}>
            <h1>Are you starving?</h1>
            <p>Within a few clicks, find meals that are accessible near you</p>
            <div className={styles.order}>
              <div className={styles.row_1}>
                <button>Delivery</button>
                <button>Pickup</button>
              </div>
              <div className={styles.row_2}>
                <input
                  type="text"
                  placeholder="What would you like to eat today?"
                />
                <button>Find Food</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.restaurants}>
          <h2>Featured Restaurants</h2>
          <div className={styles.row_1}>
            {/* Render multiple cards dynamically */}
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                name={restaurant.name}
                rating={restaurant.rating}
                image={restaurant.image}
              />
            ))}
          </div>
          <div className={styles.row_1}>
            {/* Render multiple cards dynamically */}
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                name={restaurant.name}
                rating={restaurant.rating}
                image={restaurant.image}
              />
            ))}
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2025 FoodWagen. All rights reserved.</p>
      </footer>
    </div>
  );
}
