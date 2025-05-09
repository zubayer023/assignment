import ProfileImage from "../../assets/avatar/michael-gouch.png";

import { SvgTastimonial } from "./SvgTastimonial";
import TastimonialLink from "./TastimonialLink";

export default function Testimonial() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <TastimonialLink
          Icon={SvgTastimonial}
          text="Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
          name="Micheal Gough"
          role="CEO at Google"
          profileImage={ProfileImage}
        />
      </div>
    </section>
  );
}
