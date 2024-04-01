import React, {useState} from 'react'
import { useEffect, useRef } from "react";
import { account } from "../config/appwriteConfig";
import { userStore } from "../state/userStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppNavbar from './AppNavbar';
import { Models } from 'appwrite';
import { Button, Input } from '@nextui-org/react';

const Profile = () => {
    const isRendered = useRef<boolean>(false);
    const userState = userStore();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

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
      <div className="h-screen w-screen flex justify-center items-center shadow-lg">
        <div>
        <div className="h-screen flex justify-center items-center">
          <div className="w-[600px]  h-[600px] rounded-md shadow-lg ">
          <h1 className="text-3xl font-bold text-red-400 text-center">
              Details</h1>
            <form>
           <div className="mt-8">
              <Input
              label="Name"
              type="text"
              placeholder={user.name}
             />
            </div>
          <div className="mt-8">
            <Input
              label="Email"
              type="email"
              placeholder={user.email}
            />
          </div>
          <div className="mt-8">
            <Input
              label="Password"
              type="password"
            />
          </div>
          <div className="mt-8">
            <Button
              color="danger"
              className="w-full"
              type="submit"
            >
              {loading ? "Processing.." : "Update Details"}
            </Button>
          </div>
          </form>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Profile