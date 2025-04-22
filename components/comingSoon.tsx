import React from "react";


function ComingSoonContent() {
//   const { description, title } = data;
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-start font-heading m-10 text-5xl sm:text-6xl lg:text-7xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {/* {title} */}
            Тун удахгүй...
          </span>
          <span className="">⏳</span>
        </h2>
        <p
          className="text-2xl md:text-3xl px-6 max-w-3xl text-start m-5 text-slate-800 dark:text-slate-100 font-thin"
        //   dangerouslySetInnerHTML={{
        //     __html: description,
        //   }}
        >
           Бид дараагийн хөгжүүлэлтээр бэлэн болгох болно.
        </p>
      </div>
    </>
  );
}

export default ComingSoonContent;