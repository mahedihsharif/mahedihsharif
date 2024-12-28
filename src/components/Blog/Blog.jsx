import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import Blog1 from "../../../assets/images/blog-01.jpg";
import Blog2 from "../../../assets/images/blog-02.jpg";
import Blog3 from "../../../assets/images/blog-03.jpg";

const Blog = () => {
  return (
    <div className="pt-40">
      <h3 className="text-redColor tracking-widest text-base font-secondary text-center">
        VISIT MY BLOG AND KEEP YOUR FEEDBACK
      </h3>
      <h1 className="text-5xl font-secondary font-bold pt-5 pb-14 text-center">
        My Blog
      </h1>
      <div className="lg:flex justify-between gap-12 mt-14">
        <div className="card w-full bg-blueDark cursor-pointer">
          <figure className="px-8 pt-8 ">
            {" "}
            <Image
              src={Blog1}
              width="full"
              alt="blog image"
              className="rounded-md"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <p className="uppercase text-redColor tracking-widest text-[13px] font-secondary">
                canada
              </p>
              <div className="flex justify-center items-center gap-2">
                <IoMdTime className="hover:text-redColor hover:delay-100" />
                <span className="text-[13px]">2 min read</span>
              </div>
            </div>
            <h1 className="text-2xl font-primary font-bold mt-3">
              T-Shirt design is the part of design
            </h1>
          </div>
        </div>
        <div className="card w-full bg-blueDark cursor-pointer maxLg:my-10">
          <figure className="px-8 pt-8 ">
            {" "}
            <Image
              src={Blog2}
              width="full"
              alt="blog image"
              className="rounded-md"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <p className="uppercase text-redColor tracking-widest text-[13px] font-secondary">
                development
              </p>
              <div className="flex justify-center items-center gap-2">
                <IoMdTime className="hover:text-redColor hover:delay-100" />
                <span className="text-[13px]">4 min read</span>
              </div>
            </div>
            <h1 className="text-2xl font-primary font-bold mt-3">
              The service provide for design
            </h1>
          </div>
        </div>
        <div className="card w-full bg-blueDark cursor-pointer">
          <figure className="px-8 pt-8 ">
            {" "}
            <Image
              src={Blog3}
              width="full"
              alt="blog image"
              className="rounded-md"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <p className="uppercase text-redColor tracking-widest text-[13px] font-secondary">
                application
              </p>
              <div className="flex justify-center items-center gap-2">
                <IoMdTime className="hover:text-redColor hover:delay-100" />
                <span className="text-[13px]">6 min read</span>
              </div>
            </div>
            <h1 className="text-2xl font-primary font-bold mt-3">
              Web App landing design & maintain
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
