import { AuthContext } from "@/context/auth/AuthContext";
import type { PropsWithChildren } from "react";

const AuthProvider = ({ children }: PropsWithChildren) => {
  return <AuthContext value={{}}>{children}</AuthContext>;
};

export default AuthProvider;
