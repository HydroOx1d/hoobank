import { Billing, Business, CardDeal, Clients, Cta, Footer, Hero, Navbar, Stats, Testiomonials } from "./components";
import styles from "./styles"

const App = () => {
  return (
    <div className="bg-primary w-full relative overflow-hidden">
      <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </header>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Hero />
        </div>
      </div>

      <main className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testiomonials />
          <Clients />
          <Cta />
        </div>
      </main>

      <footer
        className={`bg-[#0B0A0C99] ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={styles.boxWidth}>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App