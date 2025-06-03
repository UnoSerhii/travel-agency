import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { account } from "~/appwrite/client";
import { logoutUser } from "~/appwrite/auth";
import { Logo } from "../../../components/index";

const PageLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    navigate("/sign-in");
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-dark-800 shadow-md">
        <div className="flex items-center gap-4">
          <Logo />
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <button
                onClick={() => navigate("/dashboard")}
                className="text-sm bg-primary-500 hover:bg-primary-600 transition px-4 py-2 rounded-xl font-medium"
              >
                Go to Dashboard
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 transition"
              >
                <img src="/assets/icons/logout.svg" alt="Logout" className="w-5 h-5" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/sign-in")}
              className="text-sm bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-xl font-medium"
            >
              Login
            </button>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-dark-100">
            Welcome {user?.name ? `, ${user.name}` : ""}
          </h1>
          <p className="text-dark-400">
            {user
              ? "Use the buttons above to navigate or log out."
              : "Please log in to access the dashboard."}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Travel App. All rights reserved.
      </footer>
    </div>
  );
};

export default PageLayout;
