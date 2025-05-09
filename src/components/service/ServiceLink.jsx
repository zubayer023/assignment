export default function ServiceLink({ href, Icon, text }) {
  return (
    <>
      <a
        href={href}
        className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
      >
        {text}
        {Icon && <Icon />}
      </a>
    </>
  );
}
