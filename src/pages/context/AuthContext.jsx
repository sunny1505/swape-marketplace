import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("swape_user");

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem("swape_user");
      }
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const savedUsers = JSON.parse(
      localStorage.getItem("swape_users") || "[]"
    );

    const foundUser = savedUsers.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password
    );

    if (!foundUser) {
      throw new Error("Invalid email or password.");
    }

    setUser(foundUser);
    localStorage.setItem(
      "swape_user",
      JSON.stringify(foundUser)
    );

    return foundUser;
  };

  const register = async (userData) => {
    const users = JSON.parse(
      localStorage.getItem("swape_users") || "[]"
    );

    const alreadyExists = users.some(
      (item) =>
        item.email.toLowerCase() ===
        userData.email.toLowerCase()
    );

    if (alreadyExists) {
      throw new Error("Email already registered.");
    }

    const newUser = {
      id: crypto.randomUUID(),
      ...userData,
      role: "user",
      createdAt: new Date().toISOString(),
    };

    const updatedUsers = [...users, newUser];

    localStorage.setItem(
      "swape_users",
      JSON.stringify(updatedUsers)
    );

    setUser(newUser);

    localStorage.setItem(
      "swape_user",
      JSON.stringify(newUser)
    );

    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("swape_user");
  };

  const updateUser = (updates) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      ...updates,
    };

    setUser(updatedUser);

    localStorage.setItem(
      "swape_user",
      JSON.stringify(updatedUser)
    );

    const users = JSON.parse(
      localStorage.getItem("swape_users") || "[]"
    );

    const updatedUsers = users.map((item) =>
      item.id === user.id ? updatedUser : item
    );

    localStorage.setItem(
      "swape_users",
      JSON.stringify(updatedUsers)
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: Boolean(user),
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}