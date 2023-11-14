import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const date = new Date(taskObj.deadline);

  const todayDate = new Date();

  const taskDate = formatDistanceToNow(date, { addSuffix: true, locale: tr });

  const getClassName = (date) => {
    const diff = differenceInDays(date, todayDate);

    return diff <= 3 ? "bg-[#ffd9d4] p-1" : "bg-[#d4d7ff] p-1";
  };
  const bg = getClassName(date);

  return (
    <div className="p-6 bg-white rounded leading-6 mt-4 drop-shadow-md">
      <h3 className="font-serif text-base font-bold text-[#fdba74]">
        {taskObj.title}
      </h3>
      <div className="text-xs pt-1">
        <p className="font-bold text-sm">son teslim:</p>
        <div className="p-1">
          {" "}
          <span className={bg}>{taskDate}</span>
        </div>
      </div>
      <p className="rounded-lg pt-2 px-0 pb-3 text-sm text-[#444]">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="hover:bg-[#fef3c7] block p-2 ml-auto bg-[#fecc91] shadow-sm rounded border-none cursor-pointer text-sm "
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
