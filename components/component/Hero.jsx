const Hero = ({className}) => {
  return (
    <section
      className={`w-full py-12 md:py-24 lg:py-32 flex flex-row min-h-screen justify-center items-center ${className}`}
      id="hero"
    >
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to Poki Naya
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Experience the best poke bowls in town. Fresh, healthy, and
              delicious.
            </p>
          </div>
          <img
            alt="Delicious poke bowl"
            className="w-full max-w-md rounded-lg object-cover"
            height="600"
            src="/bowl2.jpg"
            style={{
              aspectRatio: "1000/600",
              objectFit: "cover",
            }}
            width="1000"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
