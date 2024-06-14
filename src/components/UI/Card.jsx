export default function Card(props) {
  return (
    <div
      className={`${props.col} rounded-3xl ${props.color} pl-4 pb-16 text-right`}
    >
      <p className="mt-4 text-base leading-7 text-gray-600 pr-12">
        {props.subTitle}
      </p>
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 pb-8 pr-12">
        {props.title}
      </h2>
      <div className="pl-12 overflow-x-hidden overflow-y-hidden h-56">
        <img
          src={props.page}
          alt=""
          className=" max-w-7xl w-[150%] rounded-lg  "
        />
      </div>
    </div>
  );
}
// bg-orange-200 bg-sky-200
