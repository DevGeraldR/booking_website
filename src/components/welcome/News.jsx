import React from "react";

function News() {
  return (
    <div className="flex h-screen w-full justify-center items-center flex-col gap-4 bg-[#354a21]">
      <span className="font-bold text-3xl underline underline-offset-8 text-white">
        News
      </span>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FpicoPAMB&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="500"
        title="News"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default News;
