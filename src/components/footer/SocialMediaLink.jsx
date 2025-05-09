export default function SocialMediaLink({ href, Icon }) {
  return (
    <>
      <li>
        <a
          href={href}
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
        >
          {Icon && <Icon />}
        </a>
      </li>
    </>
  );
}
