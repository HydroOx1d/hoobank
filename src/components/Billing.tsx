import bill from '../assets/bill.png'
import google from '../assets/google.svg'
import apple from '../assets/apple.svg'
import styles, {layout} from '../styles'

const Billing = () => {
  return (
    <section className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className="object-contain w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute w-[80%] h-[80%] -left-1/2 top-0 z-[3] pink__gradient" />
        <div className="absolute w-[80%] h-[80%] -left-1/2 top-0 z-[0] white__gradient" />
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className='ss:block hidden'/> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} mt-[24px] max-w-[470px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex mt-[48px]">
          <img src={apple} alt="app store"  className='mr-[30px]'/>
          <img src={google} alt="google play" />
        </div>
      </div>
    </section>
  );
}

export default Billing