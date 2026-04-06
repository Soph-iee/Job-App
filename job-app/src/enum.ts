export const UserRole = {
  JobSeeker: "job-seeker",
  Employer: "employer",
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export const AuthMode = {
  SignIn: "signin",
  SignUp: "signup",
} as const;

export type AuthMode = (typeof AuthMode)[keyof typeof AuthMode];
