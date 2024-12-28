import { mySkillsData } from "@/data/data";
import FeatureItem from "./Features";

const Features = () => {
  return (
    <div className="mt-40 container mx-auto">
      <h1 className="sm:text-5xl text-2xl font-secondary font-bold pt-5 pb-14 max-sm">
        My Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {mySkillsData.map((featured) => (
          <FeatureItem key={featured.id} featured={featured} />
        ))}
      </div>
    </div>
  );
};

export default Features;
