const WorkExperince = (props) => {
  return (
    <div
      className={`${props?.colStart || "col-start-1"} 
      ${props?.colSpan}
        ${props?.colEnd} 
       text-white py-4 px-8 bg-customGreen rounded-full`}
    >
      <div className="grid grid-cols-3 font-bold text-lg">
        <div className="col-span-2 ">
          <div className="normal-case ">{props?.job}</div>
          <div className="text-emerald-50 text-base">{props?.company}</div>
        </div>
        <div className="col-span-1 text-right">{props?.years}</div>
      </div>
    </div>
  );
};

export default WorkExperince;
