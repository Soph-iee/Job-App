import { useMemo, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { AuthMode, UserRole } from "../enum";

function normalizeMode(value: string | null): AuthMode {
  return value === AuthMode.SignUp ? AuthMode.SignUp : AuthMode.SignIn;
}

function normalizeRole(value: string | null): UserRole {
  return value === UserRole.Employer ? UserRole.Employer : UserRole.JobSeeker;
}

function AuthPage() {
  const [searchParams] = useSearchParams();
  const role = normalizeRole(searchParams.get("role"));
  const [mode, setMode] = useState<AuthMode>(
    normalizeMode(searchParams.get("mode")),
  );

  const title = useMemo(() => {
    if (mode === AuthMode.SignIn) {
      return role === UserRole.Employer
        ? "Employer Sign In"
        : "Job Seeker Sign In";
    }

    return role === UserRole.Employer
      ? "Employer Sign Up"
      : "Job Seeker Sign Up";
  }, [mode, role]);

  const subtitle =
    role === UserRole.Employer
      ? "Post jobs and manage applicants in one place."
      : "Track applications and discover new opportunities.";

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-4 px-4 py-8">
      <Link
        to="/"
        aria-label="Back to home"
        className="inline-flex w-fit items-center justify-center rounded-full border border-slate-300 p-2 text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
      >
        <FaArrowLeft />
      </Link>

      <div className="rounded-xl border border-slate-300 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-2 text-sm text-slate-600">{subtitle}</p>

        <div className="mt-4 inline-flex rounded-lg border border-slate-300 p-1 text-sm">
          <button
            type="button"
            onClick={() => setMode(AuthMode.SignIn)}
            className={`rounded-md px-3 py-1.5 transition ${
              mode === AuthMode.SignIn
                ? "bg-blue-600 text-white"
                : "text-slate-700"
            }`}
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => setMode(AuthMode.SignUp)}
            className={`rounded-md px-3 py-1.5 transition ${
              mode === AuthMode.SignUp
                ? "bg-blue-600 text-white"
                : "text-slate-700"
            }`}
          >
            Sign up
          </button>
        </div>

        <form className="mt-5 space-y-3">
          <label className="block text-sm text-slate-700">
            Email
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              placeholder="you@example.com"
            />
          </label>

          <label className="block text-sm text-slate-700">
            Password
            <input
              type="password"
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              placeholder="********"
            />
          </label>

          {mode === AuthMode.SignUp && (
            <label className="block text-sm text-slate-700">
              Confirm password
              <input
                type="password"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                placeholder="********"
              />
            </label>
          )}

          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-blue-600 px-3 py-2 font-medium text-white hover:bg-blue-700"
          >
            {mode === AuthMode.SignIn ? "Continue" : "Create account"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default AuthPage;
