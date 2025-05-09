export default function ButtonAns({href,Ans, readMore,title, detail}) {
  return (
    <div
      id="accordion-flush-body-1"
      className=""
      aria-labelledby="accordion-flush-heading-1"
    >
      <div className="py-5 border-b border-gray-200 dark:border-gray-700">
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          {Ans}
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          {readMore}{" "}
          <a
            href={href}
            className="text-purple-600 dark:text-purple-500 hover:underline"
          >
            {title}
          </a>{" "}
          {detail}
        </p>
      </div>
    </div>
  );
}
