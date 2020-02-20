import React, { useState } from "react";


function Navigation() {

const [scrolling, setScrolling] = useState("flex items-center justify-center flex-wrap py-6 px-8");
if (typeof window !== 'undefined'){
window.addEventListener('scroll', function() {
  checkscrolling();
});

const checkscrolling = () => {

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    setScrolling("bg-graybox inset-x-0 w-full mx-auto px-6 py-6 flex items-center justify-center flex-wrap border fixed shadow-md");
  } else {
    setScrolling("bg-graybox flex items-center justify-center flex-wrap border py-6 px-6 sticky shadow-md");
  }
}
}
  return (
  <nav className={scrolling}>
    <div className="max-w-3xl block flex-grow flex">
      <div>
        <a href="http://me.com.se" className="inline-block bg-gray-300 hover:bg-gray-400 rounded px-3 py-1 text-sm text-gray-700 mr-2">Home</a>
      </div>
    </div>
  </nav>
  );
}

export default Navigation
