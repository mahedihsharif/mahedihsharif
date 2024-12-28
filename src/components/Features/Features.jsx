import Image from "next/image";

const FeatureItem = ({ featured }) => {
  return (
    <div className="pt-8">
      <div className="card bg-blueDark shadow-xl py-5">
        <div className="card-body">
          <h2 className="card-title py-3 text-2xl capitalize">
            {featured.title}
          </h2>
          <p className="text-base">{featured.desc}</p>
          <div className="flex justify-center items-center gap-8 pt-5">
            {featured.icon.length > 0 &&
              featured.icon.map((item, i) => (
                <div key={i}>
                  <Image
                    src={item}
                    alt="mahedihsharif"
                    width={30}
                    height={30}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
