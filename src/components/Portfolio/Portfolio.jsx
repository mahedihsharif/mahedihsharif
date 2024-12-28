import { portfolioData } from "@/data/data";
import Image from "next/image";
const Portfolio = () => {
  return (
    <div className="pt-40">
      <h1 className="sm:text-5xl text-2xl font-secondary font-bold pt-5 pb-14 text-center">
        My Portfolio
      </h1>
      <div className="pt-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12">
        {portfolioData.map((data) => (
          <div
            key={data.id}
            className="card bg-blueDark shadow-xl cursor-pointer"
          >
            <figure>
              <Image
                src={data.img}
                alt="Shoes"
                className="rounded-md "
                width="full"
              />
            </figure>
            <div className="card-body">
              <p className="uppercase text-redColor tracking-widest text-sm font-secondary">
                {data.title}
              </p>

              <h2 className="text-lg font-medium tracking-wide py-3  transition hover:text-redColor delay-100 ease-in-out">
                {data.desc}
              </h2>
              <div className="flex justify-between items-center ">
                <a href={data.live} className="text-blue-600 underline">
                  Live
                </a>

                <a
                  href={data.client_github && data.client_github}
                  className="text-blue-600 underline"
                >
                  {data.client_github && "Code"}
                </a>

                <a
                  href={data.server_github_github && data.server_github_github}
                  className="text-blue-600 underline"
                >
                  {data.server_github_github && "Server"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
