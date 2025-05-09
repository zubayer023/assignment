import FeatureList from "./FeatureList";
import { SvgFeauteIcon } from "./element/SvgFeatureIcon";
import featureImage2 from "/src/assets/features/feature-2.png";

export default function SubService2() {
  return (
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      <img
        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
        src={featureImage2}
        alt="feature image 2"
      ></img>
      <div className="text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          We invest in the world’s potential
        </h2>
        <p className="mb-8 font-light lg:text-xl">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions. Accelerate critical development work,
          eliminate toil, and deploy changes with ease.
        </p>

        <ul
          role="list"
          className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
        >
          <FeatureList
            Icon={SvgFeauteIcon}
            text="Dynamic reports and dashboards"
          />
          <FeatureList Icon={SvgFeauteIcon} text="Templates for everyone" />
          <FeatureList Icon={SvgFeauteIcon} text="Development workflow" />
          <FeatureList
            Icon={SvgFeauteIcon}
            text="Limitless business automation"
          />
          <FeatureList Icon={SvgFeauteIcon} text="Knowledge management" />
        </ul>

        <p className="font-light lg:text-xl">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions.
        </p>
      </div>
    </div>
  );
}
