import styles, {layout} from "../styles"
import cardDeal from '../assets/card.png'
import { Button } from "./index";
const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2} mb-[24px]`}>
          Find a better card deal <br className="ss:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} mb-[48px] max-w-[470px]`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button>Get started</Button>
      </div>
      <div className={`${layout.sectionImg}`}>
        <img
          src={cardDeal}
          alt="card deal"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    </section>
  );
}

export default CardDeal