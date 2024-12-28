import Image from "next/image";
// import SwiperCore, { Navigation, Pagination } from "swiper/core";
// import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
import Test1 from "../../../assets/images/test1.png";

// SwiperCore.use([Pagination, Navigation]);

const Testimonial = () => {
  return (
    <div className="pt-28">
      <h3 className="text-redColor tracking-widest text-base font-secondary text-center uppercase">
        what clients say
      </h3>
      <h1 className="text-5xl font-secondary font-bold pt-5 pb-14 text-center">
        Testimonial
      </h1>

      <div className="lg:flex items-end gap-10">
        <div className="card bg-blueDark w-96">
          <figure className="px-8 pt-8">
            <Image src={Test1} width="full" alt="" className="rounded-md" />
          </figure>
          <div className="card-body text-justify">
            <h2 className="card-title uppercase text-redColor tracking-widest text-sm font-secondary">
              glassfisom
            </h2>
            <h1 className="font-primary text-2xl font-semibold">
              Nevine Dhawan
            </h1>
            <p className="font-secondary">CEO Of Officer</p>
          </div>
        </div>

        <div className="card w-full bg-blueDark lg:h-72 maxLg:mt-10">
          <div className="card-body text-justify">
            <h1 className="text-2xl font-semibold">Android App Design</h1>
            <p className="text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <div className="flex gap-1">
              <AiFillStar className="text-xl text-star" />
              <AiFillStar className="text-xl text-star" />
              <AiFillStar className="text-xl text-star" />
              <AiFillStar className="text-xl text-star" />
              <AiFillStar className="text-xl text-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
