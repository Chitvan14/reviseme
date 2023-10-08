import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import SpaIcon from "@mui/icons-material/Spa";
import { ProductCardType } from "@/lib/customType";
export function ProductCard(props : ProductCardType) {
  return (
    <div className="w-max h-1/2 max-w-[250px] lg:max-w-[300px]  bg-white rounded-lg relative">
      <div className="relative border border-gray-200 shadow rounded-lg">
        <Image
          className="rounded-lg p-12"
          src={props.src[0]}
          width={300}
          height={300}
          alt={props.name}
        />
        <div className="absolute top-0 left-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-tl-lg text-sm px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          BESTSELLER
        </div>
        <div className="absolute bottom-3 left-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          BESTSELLER
        </div>
        <SpaIcon fontSize="inherit" className="absolute bottom-3 right-3" />
      </div>
      <div className="px-5 py-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="bg-blue-100 w-max flex items-center mt-2.5 mb-5 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          <StarIcon fontSize="inherit" />
          <span className="pl-1">5.0 (4)</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900 dark:text-black">
              ₹599
            </span>{" "}
            <div className="">
            <span className="text-sm text-gray-500 dark:text-gray-500">
              ₹1000
            </span>   <span className="text-base  text-green-600 dark:text-green-600">
              25% OFF
            </span>
            </div>
         
          </div>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
