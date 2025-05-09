
export default function ButtonFqs({Icon, className, fqs}) {
  return (
    <>
      <h3 id="accordion-flush-heading-1">
        <button
          type="button"
          className={className}
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span>{fqs}</span>
          {Icon && (<Icon/>) }
        </button>
      </h3>
    </>
  );
}
