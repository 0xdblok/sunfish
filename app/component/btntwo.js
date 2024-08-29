"use client";
import React from "react";
import close from "../asset/close";

export default function Btntwo() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>
        Buy Now
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-blue-500 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5   rounded-t">
                  <button
                    className="p-1 ml-auto  border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.41 6L11.71 1.71C11.8983 1.5217 12.0041 1.2663 12.0041 1C12.0041 0.733699 11.8983 0.478304 11.71 0.29C11.5217 0.101697 11.2663 -0.00409126 11 -0.00409126C10.7337 -0.00409126 10.4783 0.101697 10.29 0.29L6 4.59L1.71 0.29C1.5217 0.101697 1.2663 -0.00409126 1 -0.00409126C0.733698 -0.00409126 0.478304 0.101697 0.29 0.29C0.101696 0.478304 -0.00409174 0.733699 -0.00409174 1C-0.00409174 1.2663 0.101696 1.5217 0.29 1.71L4.59 6L0.29 10.29C0.196272 10.383 0.121877 10.4936 0.0711088 10.6154C0.0203401 10.7373 -0.00579834 10.868 -0.00579834 11C-0.00579834 11.132 0.0203401 11.2627 0.0711088 11.3846C0.121877 11.5064 0.196272 11.617 0.29 11.71C0.382963 11.8037 0.493564 11.8781 0.615423 11.9289C0.737282 11.9797 0.867988 12.0058 1 12.0058C1.13201 12.0058 1.26272 11.9797 1.38458 11.9289C1.50644 11.8781 1.61704 11.8037 1.71 11.71L6 7.41L10.29 11.71C10.383 11.8037 10.4936 11.8781 10.6154 11.9289C10.7373 11.9797 10.868 12.0058 11 12.0058C11.132 12.0058 11.2627 11.9797 11.3846 11.9289C11.5064 11.8781 11.617 11.8037 11.71 11.71C11.8037 11.617 11.8781 11.5064 11.9289 11.3846C11.9797 11.2627 12.0058 11.132 12.0058 11C12.0058 10.868 11.9797 10.7373 11.9289 10.6154C11.8781 10.4936 11.8037 10.383 11.71 10.29L7.41 6Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex justify-center gap-6">
                  <div className="bg-gray-500 p-6">
                    <h1 className="text-center text-2xl">blabla</h1>
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      I always felt like I could do anything. That’s the main
                      thing people are controlled by! Thoughts- their perception
                      of themselves! They're slowed down by their perception of
                      themselves. If you're taught you can’t do anything, you
                      won’t do anything. I was taught I could do everything.
                    </p>
                  </div>
                </div>

                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
