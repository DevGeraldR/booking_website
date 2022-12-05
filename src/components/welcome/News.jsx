import React from "react";

function News() {
  return (
    <div className="flex h-screen w-full justify-center items-center flex-col gap-4 bg-green-900">
      <span className="font-bold text-3xl underline underline-offset-8 text-white">
        News
      </span>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        title="Facebook News"
        width="340"
        height="500"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}

export default News;
