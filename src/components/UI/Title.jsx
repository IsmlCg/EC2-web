export default function Title(props) {
  return (
    <div className="bg-white px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700 text-center">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-9xl">
          {props.title}
        </h1>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-7xl">
          {props.subTitle}
        </h1>
        <p className="mt-6 text-xl leading-8">{props.detail}</p>
      </div>
    </div>
  );
}
