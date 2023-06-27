import {stats} from '../constants'
import styles from '../styles'


const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => {
        return (
          <div key={stat.id} className={`flex flex-1 justify-start items-center flex-row m-3`}>
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white mr-6">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal xs:text-[20px] text-[16px] xs:leading-[24px] leading-[20px] text-white uppercase text-gradient">
              {stat.title}
            </p>
          </div>
        );
      })}
    </section>
  )
}

export default Stats