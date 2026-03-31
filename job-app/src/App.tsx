import { FaSuitcase, FaUser } from "react-icons/fa6";
import "./App.css";
import { FaArrowRight } from "react-icons/fa";
function App() {
  return (
    <>
      <section className="max-w-360 mx-auto my-4 flex flex-col gap-4 items-center h-screen justify-center">
        <h1 className="text-2xl">Job App</h1>
        <p className="text-xl">What do you need?</p>
        <div className="flex gap-6">
          <div className="bg-white hover:bg-blue-500 border-gray-300 rounded-lg p-4 flex items-center justify-center gap-2 ">
            <div className="p-4 border rounded-full bg-white border-blue-500">
              <FaUser
                size={20}
                color="text-blue-500"
                className="text-xl text-blue-500 "
              />
            </div>
            <p>Find a job</p>
            <FaArrowRight size={8} color="text-black" />
          </div>
          <div className="bg-white hover:bg-blue-500 border-gray-300 rounded-lg p-4 flex items-center justify-center  gap-2 ">
            <div className="p-4 border rounded-full bg-white border-blue-500">
              <FaSuitcase
                size={20}
                color="text-blue-500"
                className="text-xl text-blue-500 "
              />
            </div>

            <p>Find an employer</p>
            <FaArrowRight size={8} color="text-black" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
