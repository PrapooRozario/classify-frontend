import { FaGithub } from "react-icons/fa";
import Bg from "../components/ui/bg";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { BorderBeam } from "../components/magicui/border-beam";
import Text from "../components/ui/text";
import Classify from "/classify.svg";
import { useForm } from "react-hook-form";
import { UserAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { ArrowUpLeft } from "lucide-react";

// Form input types
type SignInFormInputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  // Get auth functions & session from context
  const { signInExistingUser, signInWithGoogle, session, signInWithGithub } =
    UserAuth();
  console.log(session);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  // Handle sign in with email & password
  const handleSignIn = async (data: SignInFormInputs) => {
    try {
      const res = await signInExistingUser(data.email, data.password);
      console.log("Signed in user:", res);
    } catch (err) {
      console.error("Sign-in failed:", err);
      toast.error("Failed to sign in. Please check your credentials.");
    }
  };

  // Handle Google OAuth login
  const handleGoogleSignIn = async () => {
    try {
      const res = await signInWithGoogle();
      console.log(res);
      if (session) {
        toast.success("Signed in with Google!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Google sign-in failed!");
    }
  };

  // Handle GitHub OAuth login
  const handleGithubSignIn = async () => {
    try {
      const res = await signInWithGithub();
      console.log(res);
      if (session) {
        toast.success("Signed in with Github!");
      }
    } catch (err) {
      console.log(err);
      toast.error("GitHub sign-in failed!");
    }
  };

  return (
    <Bg variant="1" className="max-w-md mx-auto my-10">
      <Button
        onClick={() => window.history.back()}
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
        <Text variant="h3" className="text-center font-normal mt-4">
          Welcome Back
        </Text>
        <Text variant="small" className="mt-2">
          Please enter your details to sign in.
        </Text>
      </div>

      {/* Sign in form */}
      <form onSubmit={handleSubmit(handleSignIn)}>
        <div className="flex flex-col gap-6">
          {/* Email input */}
          <div className="grid gap-1.5">
            <Label htmlFor="email">E-Mail Address</Label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              id="email"
              type="email"
              placeholder="classify@example.com"
            />
            {errors.email && (
              <Text variant="error">{errors.email.message}</Text>
            )}
          </div>

          {/* Password input */}
          <div className="grid gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password", { required: "Password is required" })}
              id="password"
              type="password"
            />
            {errors.password && (
              <Text variant="error">{errors.password.message}</Text>
            )}
          </div>

          {/* Sign In + OAuth buttons */}
          <div className="flex flex-col gap-3">
            <Button
              type="submit"
              className="relative flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4"
            >
              <BorderBeam
                duration={8}
                colorFrom="#171717"
                colorTo="#373737"
                size={60}
              />
              Sign In
            </Button>

            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={handleGoogleSignIn}
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
                onClick={handleGithubSignIn}
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
        </div>

        {/* Redirect to sign up */}
        <div className="mt-4 text-center text-sm text-neutral-300">
          Don&apos;t have an account?{" "}
          <Link to="/auth/signup" className="font-medium  text-white">
            Sign Up
          </Link>
        </div>
      </form>
    </Bg>
  );
};

export default SignIn;
