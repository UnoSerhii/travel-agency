import {Link, useLocation} from "react-router";
import {
  ChipDirective,
  ChipListComponent,
  ChipsDirective,
} from "@syncfusion/ej2-react-buttons";
import {cn, getFirstWord} from "~/lib/utils";

const TripCard = ({id, name, location, imageUrl, tags, price}: TripCardProps) => {
  const path = useLocation();


  return (
    <Link
      to={
        path.pathname === "/" || path.pathname.startsWith("/travel")
          ? `/travel/${id}`
          : `/trips/${id}`
      }
      className="block rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
    >
      <img
        className="w-full h-48 object-cover sm:h-60 md:h-64"
        src={imageUrl}
        alt={name}
      />

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <img src="/assets/icons/location-mark.svg" alt="location" className="size-4"/>
          <span>{location}</span>
        </div>

        <ChipListComponent id="travel-chip">
          <ChipsDirective>
            {tags.map((tag, index) => (
              <ChipDirective
                key={index}
                text={getFirstWord(tag)}
                cssClass={cn(
                  "text-xs px-2 py-1 rounded-full",
                  index === 1
                    ? "!bg-pink-100 !text-pink-600"
                    : "!bg-emerald-100 !text-emerald-700"
                )}
              />
            ))}
          </ChipsDirective>
        </ChipListComponent>

        <div className="mt-3 text-right">
          <span className="tripCard-pill">
            {price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TripCard;
