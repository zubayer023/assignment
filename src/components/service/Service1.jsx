import SubService1 from "./SubService1";
import SubService2 from "./SubService2";

export default function Service1() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <SubService1 />
        <SubService2 />
      </div>
    </section>
  );
}
