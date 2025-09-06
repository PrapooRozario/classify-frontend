import { ArrowUpRight, LogOut } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import { Button } from "./ui/button";
import Classify from "/classify.svg";
import { Link } from "react-router";
import { UserAuth } from "../context/AuthContext";
import { SkewLoader } from "react-spinners";

const Header = () => {
  const { session, signOutUser, loading } = UserAuth();
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={Classify} alt="Logo of Classify" />
      </div>
      {session ? (
        <div>
          <Button
            onClick={signOutUser}
            className="relative cursor-pointer uppercase font-light overflow-hidden"
          >
            <BorderBeam
              duration={8}
              colorFrom="#171717"
              colorTo="#373737"
              size={60}
            />

            {loading ? <SkewLoader color="#ffffff" size={10}/> : "Sign Out"}
            <LogOut size={20} />
          </Button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link to="/auth/signin">
            <Button className="relative cursor-pointer uppercase font-light overflow-hidden">
              <BorderBeam
                duration={8}
                colorFrom="#171717"
                colorTo="#373737"
                size={60}
              />
              Sign In
              <ArrowUpRight size={20} />
            </Button>
          </Link>
          <Link to="/auth/signup">
            <Button className="relative cursor-pointer uppercase font-light overflow-hidden">
              <BorderBeam
                duration={8}
                colorFrom="#171717"
                colorTo="#373737"
                size={60}
              />
              Sign Up
              <ArrowUpRight size={20} />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
