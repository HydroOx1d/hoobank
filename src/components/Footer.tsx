import logo from "../assets/logo.svg";
import { footerLinks, socialMedia} from "../constants";

const Footer = () => {
  const getYear = () => new Date().getFullYear()
  return (
    <section className={`flex flex-col`}>
      <div className="flex flex-wrap pt-[35px] md:pt-[70px] mb-8">
        <div className="flex-1 flex flex-col mr-2 basis-[100%] mb-[40px] md:basis-[0%] md:mb-0">
          <img
            src={logo}
            alt="logo"
            className="w-[270px] h-[72px] object-contain mb-[30px]"
          />

          <p className="font-poppins text-white text-[18px] opacity-70 max-w-[315px] leading-[32px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] flex flex-row items-start justify-between w-full flex-wrap">
          {footerLinks.map((link) => {
            return (
              <div
                key={link.title}
                className="flex-1 basis-[100%] ss:basis-[0%] ss:mb-0 mb-[40px]"
              >
                <h4 className="text-white font-poppins font-medium text-[18px] mb-[24px]">
                  {link.title}
                </h4>
                <ul className="list-none">
                  {link.links.map((subLink, i) => {
                    return (
                      <li
                        className={`text-white font-poppins opacity-70 hover:opacity-100 transition-opacity ${
                          i !== link.links.length - 1 ? "mb-[12px]" : "mb-0"
                        }`}
                      >
                        <a href={subLink.link}>{subLink.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-7 border-t-[1px] flex-1 flex flex-col-reverse sm:flex-row items-center justify-between">
        <p className="font-poppins text-[18px] text-dimWhite sm:mt-0 mt-5">Copyright &copy; {getYear()} HooBank. All Rights Reserved.</p>
        <div className="flex items-center">
          {socialMedia.map((social, i) => {
            return (
              <a href={social.link} className={`${i !== socialMedia.length - 1 ? 'mr-[30px]' : 'mr-0'}`}>
                <img src={social.icon} alt="social media" className="w-[21px] h-[21px] object-contain"/>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
