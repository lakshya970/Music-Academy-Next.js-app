"use client";

function page() {
  return (
    <div className="mt-[140px] flex  flex-col max-w-full mx-4 space-y-10">
      <h2 className="font-bold text-2xl md:text-3xl tracking-widest text-center">
        Contact us
      </h2>

      <div className=" flex flex-col  py-10 px-10 rounded-lg border border-gray-100/20 space-y-3 md:max-w-xl md:justify-center text-center w-full m-auto">
        <input
          type="text"
          placeholder="Your name"
          className=" bg-transparent px-1 py-2 border  border-gray-100/20 rounded-md placeholder:text-sm"
        />
        <input
          type="text"
          placeholder="Email"
          className=" bg-transparent px-1 py-2 border  border-gray-100/20 rounded-md placeholder:text-sm"
        />
        <button className="bg-white py-2 rounded-lg text-black">submit</button>
      </div>
    </div>
  );
}

export default page;
