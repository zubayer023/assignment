import CardButton from "./CardButton";

import CardFituresList from "./CardFituresList";

import { SvgTickIcon } from "./svgCard/SvgTickIcon";

export default function PriceCard({ title, description, price }) {
  return (
    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {description}
      </p>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-5xl font-extrabold">{price}</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        <CardFituresList />

        <CardFituresList
          Icon={SvgTickIcon}
          Features="Individual configuration"
        />
        <CardFituresList
          Icon={SvgTickIcon}
          Features="No setup, or hidden fees"
        />
        <CardFituresList Icon={SvgTickIcon} Features="Team size: 1 developer" />
        <CardFituresList
          Icon={SvgTickIcon}
          Features={`Premium support: 6 months`}
        />
        <CardFituresList
          Icon={SvgTickIcon}
          Features={`Free updates: 6 months`}
        />
      </ul>

      <CardButton href="#" lable="Get started" />
    </div>
  );
}
