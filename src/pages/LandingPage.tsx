import Contact from "../components/contact";
import Features from "../components/features";
import Hero from "../components/hero";
import LightRays from "../components/LightRays";
import { UserAuth } from "../context/AuthContext";

const LandingPage = () => {
  const {session} = UserAuth()
  console.log(session)
  return (
    <div>
      <LightRays
        raysOrigin="top-center"
        raysColor="#b4b4b4"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays !absolute top-0 !-z-10 left-0 w-full h-full"
      />
      <Hero />
      <Features />
      <Contact />
    </div>
  );
};

export default LandingPage;
