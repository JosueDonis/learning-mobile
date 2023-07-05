import { AuthType, UserType } from "@/types/user";
import { Store } from "pullstate";

const getItems = () => {
  try {
    return {
      user: JSON.parse(localStorage.getItem("user") || "") ?? null,
      token: JSON.parse(localStorage.getItem("token") || "") ?? null,
      isAuthenticated: false,
    };
  } catch (error) {
    return {
      isAuthenticated: false,
      user: null,
      token: null,
    };
  }
};
export const AuthStore = new Store<AuthType>(getItems());

export const setToken = (token: string) => {
  try {
    AuthStore.update((s) => {
      s.token = token;
      localStorage.setItem("token", token);
    });
  } catch (error) {
    throw error;
  }
};

export const setIsAuthenticated = (isAuthenticated: boolean) => {
  AuthStore.update((s) => {
    s.isAuthenticated = isAuthenticated;
  });
};

export const updateUser = (user: UserType) => {
  try {
    AuthStore.update((s) => {
      s.user = user;
      localStorage.setItem("user", JSON.stringify({ ...user }));
    });
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  AuthStore.update((s) => {
    s.isAuthenticated = false;
    s.user = null;
    s.token = null;
  });
  localStorage.clear();
};
