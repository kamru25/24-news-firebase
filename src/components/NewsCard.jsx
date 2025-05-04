import { FaEye, FaStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view
  } = news;

  const formattedDate = new Date(news.author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md ">
      <div className="card-header flex items-center gap-3 p-4  just ">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className=" flex justify-between ">
          <div className="
          justify-between">
          <h2 className="font-semibold">{author.name}</h2>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
          <div className="lg:ms-[600px]">
            <button className=" flex  gap-4 text-xl">
          <CiBookmark />
          <FaShareAlt />
           </button>
        </div>
        
      </div>
        </div>
      

      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold">
          {title}
        </h2>
        <img
          src={thumbnail_url}
          alt="thumbnail"
          className="w-full 
           object-cover rounded-md my-3"
        />
        <p className="text-sm text-gray-700">
          {details.length > 150 ? `${details.slice(0, 150)}...` : details}
        </p>
        <a href="#" className="text-orange-500 font-semibold mt-2 inline-block">
          Read More
        </a>
      </div>

      <div className="card-footer flex justify-between items-center p-4 border-t">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />
          <span className="font-medium">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
