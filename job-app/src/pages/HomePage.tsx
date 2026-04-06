import { FaArrowRight } from "react-icons/fa";
import { FaSuitcase, FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { AuthMode, UserRole } from "../enum";

function HomePage() {
  const navigate = useNavigate();

  const goToAuth = (role: UserRole) => {
    navigate(`/auth?role=${role}&mode=${AuthMode.SignIn}`);
  };

  return (
    <section className="mx-auto my-4 flex h-screen max-w-6xl flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-3xl font-semibold">Joblify</h1>
      <p className="text-xl text-slate-700">What do you need?</p>

      <div className="flex w-full max-w-3xl flex-col gap-4 md:flex-row">
        <button
          type="button"
          onClick={() => goToAuth(UserRole.JobSeeker)}
          className="group flex flex-1 items-center justify-between rounded-xl border border-slate-300 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-blue-500 p-3">
              <FaUser className="text-lg text-blue-500" />
            </span>
            <span>
              <strong className="block text-slate-900">Find a job</strong>
              <small className="text-slate-600">Join as a job seeker</small>
            </span>
          </div>
          <FaArrowRight className="text-slate-500 transition group-hover:text-blue-500" />
        </button>

        <button
          type="button"
          onClick={() => goToAuth(UserRole.Employer)}
          className="group flex flex-1 items-center justify-between rounded-xl border border-slate-300 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-blue-500 p-3">
              <FaSuitcase className="text-lg text-blue-500" />
            </span>
            <span>
              <strong className="block text-slate-900">Find talent</strong>
              <small className="text-slate-600">Join as an employer</small>
            </span>
          </div>
          <FaArrowRight className="text-slate-500 transition group-hover:text-blue-500" />
        </button>
      </div>
    </section>
  );
}

export default HomePage;
