'use client';
import React from "react";

const NewsCard = ({ imageUrl, source, title, date, readMoreLink }) => {
  return (
    <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 flex items-center gap-2">
      <img src={imageUrl} alt="avatar" className="rounded-md w-20 h-20" />
      <div className="flex flex-col">
        <p className="text-xs/relaxed text-gray-500">{source}</p>
        <h3 className="mt-0.5 line-clamp-2 text-sm/relaxed font-bold text-gray-900">
          {title}
        </h3>

        <div className="flex justify-between items-center">
          <p className="mt-2 text-xs/relaxed text-gray-500">{date}</p>
          <a
            href={readMoreLink}
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
          >
            อ่านต่อ
          </a>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
