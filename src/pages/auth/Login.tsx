import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { account } from "../../config/appwriteConfig";
import { AppwriteException } from "appwrite";
import { toast } from "react-toastify";
import { userStore } from "../../state/userStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const userState = userStore();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const promise = account.createEmailSession(
      authState.email,
      authState.password
    );

    promise
      .then((res) => {
        setLoading(false);
        userState.updateUserSession(res);
        toast.success("Logged in successfully!", { theme: "colored" });
        navigate("/Home");
      })
      .catch((err: AppwriteException) => {
        setLoading(false);
        toast.error(err.message, { theme: "colored" });
      });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-[600px] h-[600px] p-7 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold text-red-400 text-center">
          <Link to="/">
          PS-Studio </Link>
        </h1>
        <h1 className="text-2xl font-bold mt-[50px]">Login</h1>
        <p>Welcome Back to PS-Studio</p>
        <form onSubmit={handleSubmit}>
          <div className="mt-[50px]">
            <Input
              label="Email"
              type="email"
              onChange={(e) =>
                setAuthState({ ...authState, email: e.target.value })
              }
            />
          </div>
          <div className="mt-[50px]">
            <Input
              label="Password"
              type="password"
              onChange={(e) =>
                setAuthState({ ...authState, password: e.target.value })
              }
            />
          </div>
          <div className="mt-[50px]">
            <Button
              color="danger"
              className="w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? "Processing.." : "Submit"}
            </Button>
          </div>
          <div className="text-center mt-2">
            <p>
              Don't have an account ?{" "}
              <strong>
                <Link to="/register">Register</Link>
              </strong>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
