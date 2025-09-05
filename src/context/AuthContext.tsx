import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export const AuthContext = createContext();

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<import('@supabase/supabase-js').Session | null>(null);

  //   Sign Up New User
  const signUpNewUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.log(error);
    }
    return { success: true, data };
  };


  useEffect(()=> {
    supabase.auth.getSession().then(({data: {session}}) =>{
      setSession(session);
    })

    supabase.auth.onAuthStateChange((_event, session)=>{
      setSession(session);
    })
  }, [])

  const auths = { signUpNewUser };

  return (
    <AuthContext.Provider value={{ session, auths }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
