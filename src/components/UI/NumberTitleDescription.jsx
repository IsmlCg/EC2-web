const NumberTitleDescription = (props) => {
  return (
    <div
      className={`${props.colSpan || " col-span-12 "} ${props.colStart}  ${
        props.colSpan
      } px-36 `}
    >
      <div
        className={`mx-auto max-w-4xl text-base leading-7 text-gray-700 ${
          props.align || "text-left"
        }`}
      >
        <div className="mt-2 sm:text-4xl font-bold opacity-50 text-customGreen">
          {props.number}
        </div>
        <h1 className="mt-2 text-1xl font-bold tracking-tight text-customGreen font-customTitleFont sm:text-3xl tracking-tighter">
          {props.title}
        </h1>
        <p className="mt-6 text-xl leading-8 text-customColor">
          {props.description}
        </p>
      </div>
    </div>
  );
};
export default NumberTitleDescription;
