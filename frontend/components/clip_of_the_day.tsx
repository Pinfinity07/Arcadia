"use client";
import { useState } from "react";

function clip_of_the_day() {
  const [clip, setClip] = useState<{ title: string,url: string }>({ title: "Clutch 1v5 in Valorant by @AcePlayer",url: "/clips/top-clip.mp4" });
  return (
    <div className="flex-1 max-h-96 self-start mt-10">
      <div className="relative rounded-2xl overflow-hidden border border-purple-900 bg-[#2A1840] h-full">
        <div className="aspect-video bg-[#1A1022] flex items-center justify-center relative">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
          >
            <source src={clip.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-4 border-t border-purple-900">
          <p className="text-gray-400 text-sm">Top Clip of the Day</p>
          <p className="text-white font-semibold">
            {clip.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default clip_of_the_day;
