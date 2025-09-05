import { Mail } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import { Button } from "./ui/button";
import Text from "./ui/text";

const Contact = () => {
  const sendEmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=albart2022@gmail.com",
      "_blank"
    );
  };

  return (
    <div
      className="mt-10 flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-4 items-center justify-center w-full max-w-4xl mx-auto px-4"
      id="contact"
    >
      <Text variant="h3" className="text-center sm:text-left">
        Do you have any questions? Feel free to reach out!
      </Text>
      <Button
        onClick={sendEmail}
        className="uppercase cursor-pointer relative font-light flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4"
      >
        <BorderBeam duration={8} colorFrom="#171717" colorTo="#373737" size={60} />
        Contact Us
        <Mail size={20} />
      </Button>
    </div>
  );
};

export default Contact;
