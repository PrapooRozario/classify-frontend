import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { type Session } from "@supabase/supabase-js";
import type { File } from "buffer";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<Session | null>(null);

  // Sign In With Google
  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) return { success: false, error };
    return { success: true, data };
  };

  // Sign In With Github
  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) return { success: false, error };
    return { success: true, data };
  };

  // Sign Up New User
  const signUpNewUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return { success: false, error };
    return { success: true, data };
  };

  // Update User
  const updateUserProfile = async (fullname: string, picture: File) => {
    try {
      if (!picture) {
        throw new Error("No picture provided");
      }

      // Unique file path
      const filePath = `avatars/${Date.now()}_${picture.name}`;

      // Upload file to Supabase storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, picture);

      if (uploadError) throw uploadError;

      // Get public URL
      const { publicUrl, error: urlError } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      if (urlError) throw urlError;

      // Update user profile
      const { data, error } = await supabase.auth.updateUser({
        data: {
          full_name: fullname,
          avatar_url: publicUrl,
        },
      });

      if (error) throw error;

      return { success: true, data };
    } catch (err) {
      console.error("Error updating profile:", err);
      return { success: false, error: err };
    }
  };

  // Sign In Existing User
  const signInExistingUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return { success: false, error };
    return { success: true, data };
  };

  // Session Tracking
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        signUpNewUser,
        signInExistingUser,
        signInWithGoogle,
        signInWithGithub,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
