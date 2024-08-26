export default function Card(props) {
  return (
    <>
      <div
        className={`${props.col} rounded-3xl ${props.color} pl-4 text-right`}
      >
        <p
          className={`mt-4 text-base font-bold uppercase ${
            props.textColor ? props.textColor : "text-gray-500"
          } pr-12 pt-2 leading-3 tracking-widest`}
        >
          {props.subTitle}
        </p>
        <h2
          className={`text-4xl font-bold ${
            props.textColor ? props.textColor : "text-gray-600"
          } text-gray- pb-8 pr-12`}
        >
          {props.title}
        </h2>
        <div className="pl-16 rounded-br-3xl overflow-x-hidden overflow-y-hidden h-72">
          {/* w-[150%] */}
          <img src={props.page} alt="" className="max-w-5xl" />
        </div>
      </div>
    </>
  );
}
// bg-orange-200
