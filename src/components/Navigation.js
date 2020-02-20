import React, { useState } from "react";



function Navigation() {
  window.onscroll = function() {myFunction()};
  
  function myFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      document.getElementById("navbar").className = "bg-graybox inset-x-0 w-full mx-auto px-6 py-6 flex items-center justify-center flex-wrap border fixed shadow-md";
    } else {
      document.getElementById("navbar").className = "bg-graybox flex items-center justify-center flex-wrap border py-6 px-6 sticky shadow-md";
    }
  }

  return (

  <nav className="flex items-center justify-center flex-wrap py-6 px-8" id="navbar">
    <div className="max-w-3xl block flex-grow flex">
      <div>
        <a href="#" className="inline-block bg-gray-300 hover:bg-gray-400 rounded px-3 py-1 text-sm text-gray-700 mr-2">Home</a>
      </div>
    </div>
  </nav>
    
  );
}

export default Navigation;