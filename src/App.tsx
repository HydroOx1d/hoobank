import { Billing, Business, CardDeal, Clients, Cta, Footer, Hero, Navbar, Stats, Testiomonials } from "./components";
import styles from "./styles"

const App = () => {
  return (
    <div className="bg-primary w-full relative overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Hero/>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testiomonials/>
          <Clients/>
          <Cta/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App