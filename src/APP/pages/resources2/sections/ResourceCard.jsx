import React, { useEffect, useState } from "react";
import { arrow, arrowRight } from "../../../../assets/images/resources-page";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ResourceCard({
  type,
  title,
  description,
  image,
  origin,
  level,
  link,
}) {
  const [hovered, setHovered] = useState(false);

  const color = (lev) => {
    if (lev === "beginner") {
      return "text-primary";
    }
    if (lev === "intermediate") {
      return "text-gray-500";
    }
    return "text-red-500";
  };

  useEffect(() => {}, [hovered]);

  return (
    <div className="relative">
      <div
        className={`flex flex-col transition-all ease-linear duration-200 ${
          hovered
            ? "md:z-10 md:absolute top-0 md:transform  md:scale-[1.02]"
            : "z-0"
        }`}
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => {
          setHovered((prev) => !prev);
        }}
      >
        {/* img cover */}
        <div className="h-[180px]">
          <LazyLoadImage
            src={image}
            alt={title}
            className="object-cover h-full w-full"
            effect="blur"
          />
        </div>

        {/* desc */}
        <div className="bg-white p-2 flex flex-col gap-[10px] border shadow-md rounded-b-xl">
          <div className="flex justify-between items-center">
            <h5 className="text-base font-normal">{type}</h5>
            <LazyLoadImage
              src={arrow}
              alt="arrow"
              className={`w-6 h-6 object-contain transform transition-all ease-in duration-500 cursor-pointer ${
                hovered && "rotate-180"
              }`}
              effect="blur"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-base font-bold text-[#323433C9] cursor-pointer">
              {title}
            </h4>

            {/* Show/Hide div */}
            <div className={`${hovered ? "flex" : "hidden"} flex-col gap-2`}>
              <span className="text-base font-normal">Description</span>
              <p className="text-[11px] leading-4 text-[#4C4D4D] font-normal line-clamp-5">
                {description}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between p-2">
            <span className="text-xs leading-5 font-normal">{origin}</span>
            <span
              className={`text-xs leading-5 font-normal capitalize ${color(
                level
              )}`}
            >
              {level}
            </span>
          </div>

          <a
            onClick={() => setHovered(false)}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-fit  mx-auto border border-[#12A97E] rounded-lg py-[10px] px-10 text-sm text-[#009975] transition-all duration-500 ease-in hover:text-white hover:bg-[#009975] font-normal ${
              hovered ? "flex" : "hidden"
            }`}
          >
            Go to site
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResourceCard;
