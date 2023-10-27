function HeroSection() {
  return (
    <section
      className="dark:bg-gray-800 dark:text-gray-100 mt-0"
      id="about"
    >
      <div className="container flex flex-col justify-center p-6  mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://jessek10.netlify.app/assets/images/Jesse%20(2).jpg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h3 className="text-5xl text-gray-50 font-bold leadi sm:text-6xl">
            About Me
          </h3>
          <p className="mt-6 mb-8 text-gray-200 text-lg sm:mb-12">
            As a Full-stack - Frontend Web developer, I have gained extensive
            experience in building robust and scalable web applications unsing
            cutting-edge technologies such as JavaScript, React, Node.js, and
            AWS Cloud Services. My expertise lies in the development of
            high-quality software solutions from concept to deployment, with an
            emphasis on delivering exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
