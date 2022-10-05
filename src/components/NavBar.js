import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar(props) {
    return (
        <div className="bg-white px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <NavLink
                    to="/"
                    exact
                    >
                    <p className="self-center text-xl font-bold whitespace-nowrap">Bookworm</p>
                </NavLink>
                <div className="flex items-center gap-6">
                    <NavLink 
                        to="/"
                        exact
                    >
                        <p className="font-semibold">Books</p>
                    </NavLink>
                    <NavLink
                        to="/articles"
                        exact
                    >
                        <p className="font-semibold">Articles</p>
                    </NavLink>
                    <NavLink
                    to="/search"
                    exact
                >
                    <p>Search</p>
                </NavLink>
                </div>

                <NavLink
                    to="/user"
                    exact
                >
                    <img className="userImage" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="user"/>
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;