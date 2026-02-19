import tigre from "../assets/tigre.png";
const Header = () => {
  return (
    <header className="bg-yellow-500 text-gray-900 p-4 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <img
          src={tigre}
          alt="tigre"
          className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
        />

        <div className="animate-pulse">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-wide text-center">
            CLUB THE STRONGEST
          </h1>
          <blockquote className="italic text-center text-2xl sm:text-3xl md:text-4xl  font-semibold">
            LEVANTA TU CORAZÓN
          </blockquote>
        </div>

      </div>
    </header>


  );
};

export default Header;