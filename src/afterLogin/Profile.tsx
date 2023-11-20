import React from 'react'
import { useEffect, useRef } from "react";
import { account } from "../config/appwriteConfig";
import { userStore } from "../state/userStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppNavbar from './AppNavbar';
import { Models } from 'appwrite';
import { Input } from '@nextui-org/react';
import { Avatar } from '@nextui-org/react';

const Profile = () => {
    const isRendered = useRef<boolean>(false);
    const userState = userStore();
    const navigate = useNavigate();
    
    const user = userStore(
      (state) => state.user
    ) as Models.User<Models.Preferences>;
    
    useEffect(() => {
      if (!isRendered.current) {
        account
          .get()
          .then((res) => {
            userState.updateUser(res);
          })
          .catch(() => {
            userState.resetState();
            navigate("/login");
            toast.error("Your session got expired.please login again", {
              theme: "colored",
            });
          });
        isRendered.current = true;
      }
    }, []);
  return (
    <>
      <AppNavbar/>
      {/* <div className="h-screen w-screen flex justify-center items-center bg-slate-300">
        <div className=" bg-white px-4 py-6 rounded-lg shadow-md"> 
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
              <h1>{user.name}</h1>
        </div>
        <div className="w-[1100px] h-[600px] p-7 rounded-md shadow-lg bg-white">
        <ul className='flex'>
          <li className='flex m-2'>
            <Input
              label="Name"
              type="text"
              value={user.name}
            />
          </li>
          <li className='flex m-2'>
            <Input
              label="Email"
              type="email"
              value={user.email}
            />
          </li>

        </ul>
        </div>
      </div> */}
    </>
  );
};


export default Profile