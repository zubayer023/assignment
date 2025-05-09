export default function CardFituresList({Icon, Features}) {
  return (
    <>
      <li className="flex items-center space-x-3">
        {Icon && (<Icon  />)}
        <span>{Features}</span>
      </li>
    </>
  );
}
