import supabase from "./supabase.js";

export async function signup({ fullName, email, password }) {
  const { data: savedSessionData } = await supabase.auth.getSession();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { fullName, avatar: "" } },
  });

  let authError = null;

  if (data?.user && !data.user?.identities.length) {
    authError = {
      name: "AuthApiError",
      message: "This email has already been registered",
    };
  } else if (error) {
    authError = {
      name: error.name,
      message: error.message,
    };
  }

  if (authError) throw new Error(authError.message);

  if (savedSessionData) {
    await supabase.auth.setSession(savedSessionData.session);
  }

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) throw new Error(sessionError.message);
  if (!session) return;

  const { data: user, error: userError } = await supabase.auth.getUser();

  if (userError) throw new Error(userError.message);

  return user?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
