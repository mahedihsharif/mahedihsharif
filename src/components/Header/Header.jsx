import Image from "next/image";
import { FaGithub, FaSketch } from "react-icons/fa";
import { FiFacebook, FiFigma, FiLinkedin } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";
import { ReactTyped } from "react-typed";
import MyPic from "../../../assets/images/mypic.png";

const Header = () => {
  return (
    <div className="md:flex pt-28 gap-20">
      <div className="md:w-[60%] w-full">
        <h3 className="text-base tracking-widest font-secondary">
          WELCOME TO MY WORLD
        </h3>
        <div>
          <h1 className="lg:text-5xl text-3xl pt-10 pb-1 font-primary font-bold text-grayWhite">
            Hi, I’m <span className="text-redColor">Mahedi H Sharif</span>
          </h1>
          <br />

          <ReactTyped
            strings={[
              "Frontend Developer.",
              "React Developer.",
              "MERN Stack Developer.",
            ]}
            className="lg:text-5xl text-3xl font-bold font-primary text-grayWhite"
            typeSpeed={100}
            backSpeed={25}
            smartBackspace
            shuffle={false}
            backDelay={1}
            fadeOut={false}
            fadeOutDelay={100}
            loopCount={0}
            showCursor
            loop
          ></ReactTyped>
          <p className="py-10 tracking-wide leading-8">
            As a Computer Science graduate with a strong foundation in Frontend
            Web Application Development. Passionate about delivering
            high-quality user experiences and continuously learning new
            technologies, I seek to contribute to a forward-thinking
            organization where I can apply my expertise, collaborate with
            innovative teams, and grow as a full-stack developer. My goal is to
            combine technical proficiency with creative problem-solving to drive
            impactful solutions and achieve excellence in the tech industry.
          </p>
          <div className="lg:flex justify-between items-center pt-1 pb-10">
            <div>
              <p className="pb-8 font-primary text-sm">FIND WITH ME</p>
              <div className="flex gap-8">
                <a
                  href="https://github.com/mahedihsharif"
                  className="w-14 h-14 rounded-md bg-blueDark flex justify-center items-center hover:animate-bounce animate-once  cursor-pointer"
                >
                  {" "}
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://www.facebook.com/mahedihsharif/"
                  className="w-14 h-14 rounded-md bg-blueDark flex justify-center items-center hover:animate-bounce animate-once cursor-pointer"
                >
                  <FiFacebook className="text-xl" />
                </a>

                <a
                  href="https://www.linkedin.com/in/mahedihsharif/"
                  className="w-14 h-14 rounded-md bg-blueDark flex justify-center items-center hover:animate-bounce animate-once cursor-pointer"
                >
                  <FiLinkedin className="text-xl" />
                </a>
              </div>
            </div>
            <div>
              <p className="pb-8 font-primary text-sm pt-10 lg:pt-0">
                BEST SKILL ON
              </p>
              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-md bg-blueDark flex justify-center items-center hover:animate-bounce animate-once cursor-pointer">
                  <FiFigma className="text-xl" />
                </div>
                <div className="w-14 h-14 rounded-md bg-blueDark flex justify-center items-center hover:animate-bounce animate-once cursor-pointer">
                  {" "}
                  <FaSketch className="text-xl" />
                </div>
                <div className="w-14 h-14 rounded-md bg-blueDark flex justify-center items-center hover:animate-bounce hover:animate-once cursor-pointer hover:delay-75">
                  <SiAdobephotoshop className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-[40%] w-full">
        <div className="bg-blueDark rounded-md shadow-indigo-900 shadow-sm">
          <Image src={MyPic} alt="mahedihsharif" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
