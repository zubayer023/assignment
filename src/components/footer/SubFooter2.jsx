import ProfileLogo from "../../assets/logo.svg";
import SocialMediaLink from "./SocialMediaLink";
import {
  DribbbleIcon,
  FacebookIcon,
  GithubLink,
  InstagramIcon,
  TwitterIcon,
} from "./SvgFooterIcon/SocialMediaIcon";
export default function SubFooter2() {
  return (
    <div className="text-center">
      <a
        href="#"
        className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          src={ProfileLogo}
          className="h-6 mr-3 sm:h-9"
          alt="Learn with Sumit Logo"
        />
        Learn with Sumit{" "}
      </a>
      <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
        © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
        <a
          href="#"
          target="_blank"
          className="text-purple-600 hover:underline dark:text-purple-500"
        >
          Flowbite
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="text-purple-600 hover:underline dark:text-purple-500"
        >
          Tailwind CSS
        </a>
        .
      </span>

      <ul className="flex justify-center mt-5 space-x-5">
        <SocialMediaLink href="#" Icon={FacebookIcon} />
        <SocialMediaLink href="#" Icon={InstagramIcon} />
        <SocialMediaLink href="#" Icon={TwitterIcon} />
        <SocialMediaLink href="#" Icon={GithubLink} />
        <SocialMediaLink href="#" Icon={DribbbleIcon} />
      </ul>
    </div>
  );
}
