// src/redux/slices/authSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "@/src/services/supabaseClient";
import { router } from "expo-router";
import { Alert } from "react-native";

export interface AuthState {
  session: any | null;
  userInformation: any | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  session: null,
  userInformation: null,
  status: "idle",
  error: null,
};

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log("holaaa");

      if (error) {
        Alert.alert("Error en el inicio de sesión:", error.message);
        return { error: error.message };
      }

      // Si la autenticación es exitosa, retornamos la sesión
      router.replace("/home");
      return { session: data.session };
    } catch (err) {
      // En caso de un error inesperado, lo retornamos
      Alert.alert("Error en el inicio de sesión");
      return { error: err };
    }
  },
);

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        Alert.alert("Error en el registro:", error.message);
        return { error: error.message };
      }
      Alert.alert("Registro exitoso", " por favor verifique su correo");
      return { session: data.session };
    } catch (err) {
      // En caso de un error inesperado, lo retornamos
      Alert.alert("Error en el registro");
      return { error: err };
    }
  },
);

export const signOutUser = createAsyncThunk("auth/signOutUser", async () => {
  const { error } = await supabase.auth.signOut();
  router.replace("/sign-in");
  return { error };
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // signInUser
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.session = action.payload.session;
      state.status = "succeeded";
    });
    builder.addCase(signInUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Error desconocido";
    });

    // signOutUser
    builder.addCase(signOutUser.fulfilled, (state) => {
      state.session = null;
      state.userInformation = null;
      state.status = "idle";
      state.error = null;
    });
    builder.addCase(signOutUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(signOutUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Error desconocido";
    });

    // signUpUser
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.session = action.payload.session;
      state.status = "succeeded";
    });
    builder.addCase(signUpUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Error desconocido";
    });
  },
});

export default authSlice.reducer;