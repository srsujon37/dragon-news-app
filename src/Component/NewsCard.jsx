import React from 'react';
import { FaStar, FaRegEye, FaShareAlt, FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    details,
    thumbnail_url,
    author,
    total_view,
    rating
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="card bg-white shadow-sm rounded-lg">
      {/* Header: Author Info + Icons */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-400 text-lg">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="font-bold text-lg text-gray-800 leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}
      <div className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt="news"
          className="rounded-md w-full max-h-[250px] object-cover"
        />
      </div>

      {/* Description */}
      <div className="px-4 text-sm text-gray-600">
        {details.length > 200
          ? details.slice(0, 200) + '...'
          : details}
        <Link to={`/news-details/${id}`} className="text-red-500 font-semibold ml-1 cursor-pointer">
          Read More
        </Link>
      </div>

      {/* Footer: Ratings + Views */}
      <div className="flex items-center justify-between px-4 py-4 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(Math.round(rating.number))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-800 ml-2">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
