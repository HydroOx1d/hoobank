import styles from "../styles"
import discount from '../assets/discount.svg'
import robot from '../assets/robot.png'
import { GetStarted } from "./index";

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
        >
          <img
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px] mr-[13px]"
          />
          <div className="text-white uppercase">
            20% <span className="opacity-60">discount for</span> 1 MONTH{" "}
            <span className="opacity-60">account</span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="ss:text-[72px] text-[52px] flex-1 font-poppins font-semibold text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="ss:text-[68px] w-full text-[52px] font-poppins font-semibold text-white ss:leading-[100px] leading-[75px]">
          Payment method
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`relative flex flex-1 ${styles.flexCenter} md:my-0 my-10`}>
        <img
          src={robot}
          alt="robots' arm"
          className="w-full h-full relative z-[5]"
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  );
}

export default Hero