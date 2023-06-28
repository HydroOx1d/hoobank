import quote from "../assets/quotes.svg";

type FeedBackCard = {
  id: string;
  content: string;
  name: string;
  title: string;
  img: string;
  classes?: string
};

const FeedBackCard: React.FC<FeedBackCard> = ({
  content,
  img,
  title,
  name,
  classes
}) => {
  return (
    <article className={`${classes} feedback-card py-[30px] ss:py-[60px] px-[20px] ss:px-[40px] rounded-[20px] flex flex-col`}>
      <div className="w-[40px] h-[30px] mb-[20px] sm:mb-[40px]">
        <img
          src={quote}
          alt="quote"
          className="w-[100%] h-[100%} object-contain"
        />
      </div>

      <p className="max-w-[290px] font-poppins font-normal text-white text-[18px] mb-[30px] h-full">
        {content}
      </p>

      <div className={`flex flex-row`}>
        <div className="rounded-full w-[48px] h-[48px] overflow-hidden mr-[16px]">
          <img
            src={img}
            alt={title}
            className="w-[100%] h-[100%] object-contain relative z-0"
          />
        </div>

        <div className="flex flex-col">
          <h6 className="font-poppins font-normal text-white text-[20px] mb-[2px]">
            {name}
          </h6>
          <div className="text-white font-poppins font-normal opacity-50">{title}</div>
        </div>
      </div>
    </article>
  );
};

export default FeedBackCard