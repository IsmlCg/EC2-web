const TitleDescription = (props) => {
  return (
    <div
      className={`${props.colSpan || " col-span-12 "} ${props.colStart}  ${
        props.colSpan
      } px-6 py-8 lg:px-8 `}
    >
      <div
        className={`mx-auto max-w-4xl text-base leading-7 text-gray-700 ${
          props.align || "text-left"
        }`}
      >
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-customGreen font-customTitleFont sm:text-5xl tracking-tighter">
          {props.title}
        </h1>
        <p className="mt-6 text-xl leading-8 text-customColor">
          {props.description}
        </p>
        <p className=" mt-6 text-xl leading-8 text-customColor">
          {props.description2}
        </p>
      </div>
    </div>
  );
};
export default TitleDescription;
