export default function FooterLink({ href, text }) {
  return (
    <>
      <ul className="text-gray-500 dark:text-gray-400">
        <li className="mb-4">
          <a href={href} className=" hover:underline">
            {text}
          </a>
        </li>
      </ul>
    </>
  );
}
