import { Team } from "../constants";
import { Avatar} from "@nextui-org/react";

const TeamCard = ({ imgURL,Name,about,post}) => {
    return (
      <div className='flex justify-center items-center flex-col  px-10 py-10 w-full rounded-[20px] shadow-3xl '>

        <Avatar isBordered radius="full" src={imgURL} className='rounded-full object-cover w-[120px] h-[120px]' />
        <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
          {Name}
        </h3>
        <h5 className='mt-1 font-palanquin text-2xl text-center font-bold'>
          {post}
        </h5>
        <p className='mt-6 max-w-sm text-center info-text'>{about}</p>
      </div>
    );
  };
  
const About = () => {
  return (
    <section className='max-container shadow-sm'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        Team 
        <span className='text-coral-red'> PS</span>
        -Studio
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
      Together, they collaborate to ensure PS-Studio offers a secure, seamless, and user-friendly platform for portfolio creation and management
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {Team.map((Team, index) => (
          <TeamCard
            key={index}
            imgURL={Team.img}
            Name={Team.name}
            post={Team.post}
            about={Team.about}
          />
        ))}
      </div>
    </section>
  );
};

export default About;