import { clients } from "../constants";

const Clients = () => {
  return (
    <section
      id="clients"
      className={`py-[40px] w-full flex items-center flex-wrap`}
    >
      {clients.map((client) => {
        return (
          <div className="flex-1 basis-[100%] md:mb-0 mb-3 md:basis-[25%] ss:basis-[50%]">
            <img
              src={client.logo}
              alt={client.id}
              key={client.id}
              className="w-[200px] h-[60px] object-contain mx-auto px-[10px]"
            />
          </div>
        );
      })}
    </section>
  );
};

export default Clients;
