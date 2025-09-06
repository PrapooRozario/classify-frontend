import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { type Session } from "@supabase/supabase-js";
import toast from "react-hot-toast";

// -------------------------
// Auth context types
// -------------------------
interface AuthContextType {
  session: Session | null;
  loading: boolean;
  signUpNewUser: (email: string, password: string) => Promise<any>;
  signInExistingUser: (email: string, password: string) => Promise<any>;
  signInWithGoogle: () => Promise<any>;
  signInWithGithub: () => Promise<any>;
  updateUserProfile: (fullname: string, picture: File) => Promise<any>;
  signOutUser: () => Promise<void>;
}

// -------------------------
// Create Auth Context
// -------------------------
export const AuthContext = createContext<AuthContextType | null>(null);

// -------------------------
// Auth Provider Component
// -------------------------
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // -------------------------
  // OAuth login with Google
  // -------------------------
  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) toast.error(error.message || "Google sign-in failed");
    else {
      toast.success("Google sign-in initiated!");
    }
    return { data, error };
  };

  // -------------------------
  // OAuth login with GitHub
  // -------------------------
  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) toast.error(error.message || "Github sign-in failed");
    else {
      toast.success("Github sign-in initiated!");
    }
    return { data, error };
  };

  // -------------------------
  // Sign up a new user
  // -------------------------
  const signUpNewUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) toast.error(error.message || "Sign-up failed");
    else toast.success("Sign-up successful!");
    return { data, error };
  };

  // -------------------------
  // Sign in an existing user
  // -------------------------
  const signInExistingUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) toast.error(error.message || "Invalid email or password");
    else {
      toast.success("Signed in successfully!");
    }
    return { data, error };
  };

  // -------------------------
  // Update user profile (name + avatar)
  // -------------------------
  const updateUserProfile = async (fullname: string, picture: File) => {
    if (!picture) {
      toast.error("Profile picture is required");
      return { error: "No picture provided" };
    }

    const filePath = `avatars/${Date.now()}_${picture.name}`;
    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, picture);
    if (uploadError) {
      toast.error(uploadError.message || "Image upload failed");
      return { error: uploadError };
    }

    const { data: url } = supabase.storage
      .from("avatars")
      .getPublicUrl(filePath);
    if (!url) return;
    const { data, error } = await supabase.auth.updateUser({
      data: { full_name: fullname, avatar_url: url.publicUrl },
    });

    return { data, error };
  };

  // -------------------------
  // Sign out the user
  // -------------------------
  const signOutUser = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    if (error) toast.error(error.message || "Sign-out failed");
    else toast.success("Signed out successfully!");
  };

  // -------------------------
  // Track session changes
  // -------------------------
  useEffect(() => {
    // Get current session on mount
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => setSession(session));

    // Listen to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session)
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        signUpNewUser,
        signInExistingUser,
        signInWithGoogle,
        signInWithGithub,
        updateUserProfile,
        signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// -------------------------
// Custom hook to access auth
// -------------------------
export const UserAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("UserAuth must be used inside AuthContextProvider");
  return context;
};
