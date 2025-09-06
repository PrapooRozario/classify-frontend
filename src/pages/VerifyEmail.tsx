import Bg from "../components/ui/bg";
import { Button } from "../components/ui/button";
import { BorderBeam } from "../components/magicui/border-beam";
import { ArrowUpLeft, Mail } from "lucide-react";
import { Link } from "react-router";
import Text from "../components/ui/text";
import Classify from "/classify.svg";

const VerifyEmail = () => {
  return (
    <Bg variant="1" className="max-w-md mx-auto my-10 relative">
      {/* Back button */}
      <Button
        onClick={() => window.history.back()}
        type="button"
        className="absolute top-4 left-4"
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
      <div className="flex flex-col items-center text-center mb-6">
        <Link to="/">
          <img src={Classify} alt="Logo of Classify" />
        </Link>
        <Text variant="h3" className="font-normal mt-4">
          Verify Your Email Address
        </Text>
        <Text variant="small" className="mt-2 text-neutral-400 max-w-sm">
          We’ve sent a confirmation link to your email. Please check your inbox
          (and spam folder) to complete your registration.
        </Text>
      </div>
      <div>
        <Text variant="small" className="text-neutral-400 text-center">
          Didn’t receive the email?
        </Text>
        <Link to="/auth/signup">
          <Button
            type="button"
            className="relative flex items-center w-fit mx-auto mt-4 gap-2"
          >
            <BorderBeam
              duration={8}
              colorFrom="#171717"
              colorTo="#373737"
              size={60}
            />
            Resend Email
            <Mail size={20} />
          </Button>
        </Link>
      </div>
    </Bg>
  );
};

export default VerifyEmail;
