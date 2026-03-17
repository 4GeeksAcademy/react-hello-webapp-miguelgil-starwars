import React, { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, actions } = useGlobalReducer();
  const [isShowing, setIsShowing] = useState(false);

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <div className="container">
        <Link to="/" className="navbar-brand text-decoration-none">
          Star Wars Blog
        </Link>

        <div className="dropdown nav-item">
          <button
            className={
              "btn btn-primary dropdown-toggle nav-link " +
              (isShowing ? "show" : "")
            }
            type="button"
            data-bs-toggle="dropdown"
            onClick={() => setIsShowing(!isShowing)}
            aria-expanded="true"
          >
            Favorites{" "}
            <span className="badge bg-secondary">{store.favorites.length}</span>
          </button>

          <ul
            className={
              "dropdown-menu dropdown-menu-end " + (isShowing ? "show" : "")
            }
          >
            {store.favorites.length === 0 ? (
              <li>
                <span className="dropdown-item text-muted">
                  No favorites yet
                </span>
              </li>
            ) : (
              store.favorites.map((favorite, index) => (
                <li
                  key={index}
                  className="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <span>{favorite}</span>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => actions.removeFavorite(favorite)}
                  >
                    x
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
