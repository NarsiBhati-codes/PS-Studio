import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <div className='max-container flex justify-center flex-wrap gap-9 mt-20 mb-20'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  );
};

export default Services;