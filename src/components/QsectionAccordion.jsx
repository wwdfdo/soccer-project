import React from "react";
import { useState } from "react";
import { QuestionArray } from "../arrays/questionsArray";

const QsectionAccordion = () => {
  const [visibleAccordionId, setVisibleAccordionId] = useState(null);
  return (
    <>
      {QuestionArray.map((Question) => (
        <div
          key={Question.id}
          className="mb-3 border-b-[.0825rem] border-black border-opacity-10 pb-3"
        >
          <div
            className="flex justify-between items-center"
            onClick={() =>
              setVisibleAccordionId(
                visibleAccordionId === Question.id ? null : Question.id
              )
            }
          >
            <h3 className=" font-bold tracking-widest text-[.825rem] flex items-center py-2">
              <span className="pr-5">{Question.icon}</span>
              {Question.qtitle}
            </h3>
            <span className="text-sm">
              <i
                className={`fa-solid ${
                  visibleAccordionId === Question.id ? "fa-minus" : "fa-plus"
                } `}
              ></i>
            </span>
          </div>
          <div
            className={`${
              visibleAccordionId === Question.id ? "" : "hidden"
            } mt-4`}
          >
            <ul>
              {Question.answer.map((a) => (
                <li className="text-[.825rem] font-medium tracking-widest mt-2">
                  <input type="checkbox" id={a} name={a} value={a} />
                  <label for="vehicle1"> {a}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default QsectionAccordion;
