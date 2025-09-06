import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ArrowUpLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import Bg from "../components/ui/bg";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { BorderBeam } from "../components/magicui/border-beam";
import Text from "../components/ui/text";
import Classify from "/classify.svg";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import { SkewLoader } from "react-spinners";

type SignUpFormInputs = {
  fullname: string;
  email: string;
  password: string;
  picture: FileList;
};

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpLoading, setSignUpLoading] = useState<boolean>(false);
  const {
    signUpNewUser,
    signInWithGoogle,
    signInWithGithub,
    updateUserProfile,
  } = UserAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const handleSignUp = async (data: SignUpFormInputs) => {
    setSignUpLoading(true);
    const res = await signUpNewUser(data.email, data.password);
    if (!res.data) return;
    if (data.fullname || data.picture?.[0]) {
      await updateUserProfile(data.fullname, data.picture[0]);
      setSignUpLoading(false);
      navigate("/");
    }
    setSignUpLoading(false);
    console.log(res);
  };

  return (
    <Bg variant="1" className="max-w-md mx-auto my-10 relative">
      {/* Back button */}
      <Button
        onClick={() => (window.location.href = "/")}
        type="button"
        className="absolute"
      >
        <BorderBeam
          duration={8}
          colorFrom="#171717"
          colorTo="#373737"
          size={30}
        />
        <ArrowUpLeft size={20} />
      </Button>

      {/* Header / Logo */}
      <div className="flex flex-col items-center text-center mb-10">
        <Link to="/">
          <img src={Classify} alt="Logo of Classify" />
        </Link>
        <Text variant="h3" className="font-normal mt-4">
          Create Your Account
        </Text>
        <Text variant="small" className="mt-2 text-neutral-400">
          Please fill in the details below to get started.
        </Text>
      </div>

      {/* Sign up form */}
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="flex flex-col gap-6"
      >
        {/* Fullname */}
        <div className="grid gap-1.5">
          <Label htmlFor="fullname">Full Name</Label>
          <Input
            {...register("fullname", { required: "Full name is required" })}
            id="fullname"
            type="text"
            placeholder="Prapoo Rozario"
            className="!placeholder-neutral-400"
          />
          {errors.fullname && (
            <Text variant="error">{errors.fullname.message}</Text>
          )}
        </div>

        {/* Email */}
        <div className="grid gap-1.5">
          <Label htmlFor="email">Email Address</Label>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            id="email"
            type="email"
            placeholder="classify@example.com"
            className="!placeholder-neutral-400"
          />
          {errors.email && <Text variant="error">{errors.email.message}</Text>}
        </div>

        {/* Password */}
        <div className="grid gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message:
                  "Password must contain uppercase, lowercase, number, and special character",
              },
            })}
            id="password"
            type="password"
            placeholder="P@ssw0rd123"
            className="!placeholder-neutral-400"
          />
          {errors.password && (
            <Text variant="error">{errors.password.message}</Text>
          )}
        </div>

        {/* Picture */}
        <div className="grid gap-1.5">
          <Label htmlFor="picture">Profile Picture</Label>
          <Input
            {...register("picture", {
              required: "Profile picture is required",
            })}
            id="picture"
            type="file"
            accept="image/*"
          />
          {errors.picture && (
            <Text variant="error">{errors.picture.message}</Text>
          )}
        </div>

        {/* Submit & OAuth Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            disabled={signUpLoading}
            type="submit"
            className="relative flex items-center gap-2 px-6 py-3"
          >
            <BorderBeam
              duration={8}
              colorFrom="#171717"
              colorTo="#373737"
              size={60}
            />
            {signUpLoading ? (
              <SkewLoader color="#ffffff" size={10} />
            ) : (
              "Sign Up"
            )}
          </Button>

          <div className="grid grid-cols-2 gap-4">
            <Button
              disabled={signUpLoading}
              onClick={signInWithGoogle}
              type="button"
              className="relative flex items-center gap-2 px-6 py-3"
            >
              <BorderBeam
                duration={8}
                colorFrom="#171717"
                colorTo="#373737"
                size={60}
              />
              <FcGoogle size={20} /> Google
            </Button>

            <Button
              disabled={signUpLoading}
              onClick={signInWithGithub}
              type="button"
              className="relative flex items-center gap-2 px-6 py-3"
            >
              <BorderBeam
                duration={8}
                colorFrom="#171717"
                colorTo="#373737"
                size={60}
              />
              <FaGithub size={20} /> GitHub
            </Button>
          </div>
        </div>

        {/* Redirect to Sign In */}
        <div className="text-center text-sm text-neutral-300">
          Already have an account?{" "}
          <Link to="/auth/signin" className="font-medium text-white">
            Sign In
          </Link>
        </div>
      </form>
    </Bg>
  );
};

export default SignUp;
