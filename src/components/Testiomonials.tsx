import { FeedBackCard } from "./index";
import { feedbacks } from "../constants";
import styles from "../styles"

const Testiomonials = () => {
  return (
    <section
      className={`relative flex-col ${styles.paddingY} ${styles.flexCenter}`}
      id="client"
    >
      <div className="absolute -right-1/2 w-[70%] h-[70%] rounded-full blue__gradient" />

      <div
        className={`flex items-center w-full md:flex-row flex-col mb-[40px] md:mb-[80px]`}
      >
        <h2 className={`${styles.heading2} flex-1 mb-5 md:mb-0`}>
          What people are <br className="ss:block hidden" /> saying about us
        </h2>
        <div className={`flex-1 justify-start w-full`}>
          <p className={`${styles.paragraph} max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap w-full -mx-[10px] -mb-[20px]">
        {feedbacks.map((feedback) => {
          return (
            <div className="ss:px-[10px] basis-[100%] flex-1 ss:basis-[50%] md:basis-[33.3333%] mb-[20px]">
              <FeedBackCard
                key={feedback.id}
                {...feedback}
                classes="h-[100%]"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testiomonials