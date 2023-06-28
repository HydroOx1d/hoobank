import styles from "../styles"
import { Button } from "./index"

const Cta = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col sm:flex-row bg-black-gradient-2 box-shadow rounded-[20px]`}
    >
      <div className="flex-1 flex flex-col mb-5 sm:mb-0 mr-0 sm:mr-4">
        <h2 className={`${styles.heading2} mb-[20px]`}>
          Let’s try our service now!
        </h2>
        <p className={`${styles.paragraph} max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className={`${styles.flexCenter}`}>
        <Button>Get started</Button>
      </div>
    </section>
  );
}

export default Cta