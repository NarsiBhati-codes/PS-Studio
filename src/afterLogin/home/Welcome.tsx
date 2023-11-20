import { userStore } from "../../state/userStore";
import React from "react";
import { Models } from "appwrite";

const Welcome = () => {
  const user = userStore(
    (state) => state.user
  ) as Models.User<Models.Preferences>;

 return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            Welcome {user.name} to
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>PS</span>-Studio
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover our wide range of <span className='text-primary inline-block mt-3'>Portfolio Templates </span> or 
          <span className='text-primary inline-block mt-3'> Customize </span> your own to showcase your work.
        </p>

      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
      </div>
    </section>
  );
};

export default Welcome;