import React from "react";
import q1 from "../assets/q1.png";
import q2 from "../assets/q2.png";

const Blog = () => {
  return (
    <div className="mx-5 lg:mx-16 mt-5">
      <div className="flex flex-col gap-5">
        <div className="collapse collapse-plus bg-gray-300 border-b-4 border-b-slate-900 rounded-3xl border border-slate-900 cursor-pointer">
          <input
            type="radio"
            name="my-accordion-3"
            className="peer"
            checked="checked"
          />
          <div className="collapse-title text-xl font-medium flex gap-3 items-center text-white peer-checked:bg-[#FF1F3D]">
            <span className="text-4xl font-semibold ">01</span>Discuss the scope
            of var, let, and const
          </div>
          <div className="collapse-content peer-checked:bg-[#FF1F3D]">
            <p className="border-black border-t-2 py-6 text-white">
              <span className="font-semibold">Key Difference:</span>

              <div className="flex items-center justify-center">
                <img src={q1} alt="q1" className="rounded-xl" />
              </div>
              <span className="font-semibold">When to Use:</span>
              <ul>
                <li>
                  - Use var sparingly (or avoid it) due to its lack of block
                  scope and potential bugs.
                </li>
                <li>
                  - Use let for variables that need reassignment within a
                  specific block scope.
                </li>
                <li>
                  - Use const for variables that shouldn’t be reassigned,
                  promoting immutability and clarity.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-gray-300 border-b-4 border-b-slate-900 rounded-3xl border border-slate-900 cursor-pointer">
          <input type="radio" name="my-accordion-3" className="peer" />
          <div className="collapse-title text-xl font-medium flex gap-3 items-center text-white peer-checked:bg-[#FF1F3D]">
            <span className="text-4xl font-semibold ">02</span>Tell us the use
            cases of null and undefined
          </div>
          <div className="collapse-content peer-checked:bg-[#FF1F3D]">
            <p className="border-black border-t-2 py-6 text-white">
              <span className="font-semibold">Key Difference:</span>

              <div className="flex items-center justify-center">
                <img src={q2} alt="q2" className="rounded-xl" />
              </div>
              <span className="font-semibold">When to Use:</span>
              <ul>
                <li>
                  - null: You assign it intentionally to indicate "no value."
                </li>
                <li>
                  - undefined: JavaScript assigns it automatically when no value
                  is provided.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-gray-300 border-b-4 border-b-slate-900 rounded-3xl border border-slate-900 cursor-pointer">
          <input type="radio" name="my-accordion-3" className="peer" />
          <div className="collapse-title text-xl font-medium flex gap-3 items-center text-white peer-checked:bg-[#FF1F3D]">
            <span className="text-4xl font-semibold">03</span>What do you mean
            by REST API?
          </div>
          <div className="collapse-content peer-checked:bg-[#FF1F3D]">
            <p className="border-black border-t-2 py-6 text-white">
              REST API (Representational State Transfer Application Programming
              Interface) A REST API is a set of rules and conventions for
              building and interacting with web services. It allows clients
              (e.g., a frontend application) to communicate with servers (e.g.,
              backend systems) over HTTP using standardized methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
