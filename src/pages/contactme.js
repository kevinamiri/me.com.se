import React from "react"

export default () => (
  <div className="flex items-center justify-center flex-col h-screen">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="the-card"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 py-4">
    <span className="inline-block bg-gray-200 hover:bg-blue-400 hover:text-white rounded px-3 py-1 text-sm font-semibold text-blue-700 mr-2">Read more</span>

  </div>
</div>
</div>

)
