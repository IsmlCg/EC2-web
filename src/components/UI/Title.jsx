export default function Title(props) {
  return (
    <div
      className={`px-6 py-8 lg:px-8 ${props.colStart} ${props.colEnd} ${props.colSpan}`}
    >
      <div
        className={`mx-auto max-w-4xl text-base leading-7 text-gray-700 ${
          props.align || "text-center"
        }`}
      >
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-teal-900 sm:text-9xl tracking-tighter">
          {props.title}
        </h1>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-teal-900 sm:text-7xl">
          {props.subTitle}
        </h2>
        <p className="mt-6 text-xl leading-8">{props.detail}</p>
      </div>
    </div>
  );
}
