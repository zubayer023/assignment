import PriceArea from "./PriceArea";
import PriceCard from "./PriceCard";

export default function Pricing() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <PriceArea
          title="Designed for business teams like yours"
          description="Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth."
        />

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <PriceCard
            title="Starter"
            description="Best option for personal use & for your next project."
            price="$29"
          />
          <PriceCard
            title="Company"
            description="Relevant for multiple users, extended & premium support."
            price="$99"
          />
          <PriceCard
            title="Enterprise"
            description="Best for large scale uses and extended redistribution rights."
            price="$499"
          />
        </div>
      </div>
    </section>
  );
}
