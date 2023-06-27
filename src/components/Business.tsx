import styles, { layout } from "../styles"
import { features } from "../constants"
import { Button } from "./index"
import React from "react"

type FeaturesCardProps = {
  index: number,
  id: string,
  icon: string,
  title: string,
  content: string,
  classes?: string
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ icon, title, content, classes }) => {
  return (
    <div className={`flex flex-row items-center rounded-[20px] p-5 feature-card ${classes}`}>
      <div className={`w-16 h-16 rounded-full bg-dimBlue mr-5 ${styles.flexCenter}`}>
        <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain"/>
      </div>
      <div className="flex-1 flex-col">
        <h6 className="font-poppins font-semibold text-[18px] text-white capitalize mb-2">{title}</h6>
        <p className="text-dimWhite font-poppins font-normal text-[16px]">{content}</p>
      </div>
    </div>
  )
}

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} lg:mb-0 mb-8`}>
        <h2 className={`${styles.heading2}`}>
          You do the business,<br className="sm:block hidden"/> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} mb-[48px] max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button>Get started</Button>
      </div>

      <div className="flex-1 flex-col">
        {features.map((feature, i) => {
          return (
            <FeaturesCard
              key={feature.id}
              {...feature}
              index={i}
              classes={i === features.length - 1 ? "mb-0" : "mb-5"}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Business