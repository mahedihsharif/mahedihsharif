const Education = () => {
  return (
    <div>
      <h1 className="text-4xl font-secondary font-bold pt-10">
        Education Quality
      </h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 my-14">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022
          </time>
          <h3 className="text-xl font-semibold dark:text-grayWhite">
            Bangladesh Army International University of Science & Technology.
          </h3>
          <p className="py-1 text-base font-normal text-gray-500 dark:text-gray-400">
            B.SC in Computer Science & Engineering.
          </p>
          <button className="bg-blueDark text-base font-normal text-gray-500 dark:text-gray-400 py-3 rounded-md w-32">
            CGPA: 3.27/4
          </button>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            September 2015
          </time>
          <h3 className="text-xl font-semibold dark:text-grayWhite">
            Comilla Govt. College
          </h3>
          <p className="py-1 text-base font-normal text-gray-500 dark:text-gray-400">
            HSC in Science
          </p>
          <button className="bg-blueDark text-base font-normal text-gray-500 dark:text-gray-400 py-3 rounded-md w-32">
            GPA: 4.83/5
          </button>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            September 2013
          </time>
          <h3 className="text-lg font-semibol dark:text-grayWhite">
            Comilla Zilla School
          </h3>
          <p className="py-1 text-base font-normal text-gray-500 dark:text-gray-400">
            SSC in Science
          </p>
          <button className="bg-blueDark text-base font-normal text-gray-500 dark:text-gray-400 py-3 rounded-md w-32">
            GPA: 5.00/5
          </button>
        </li>
      </ol>
    </div>
  );
};

export default Education;
