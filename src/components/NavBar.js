import React from 'react';

function NavBar(props) {
    return (
        <div className="bg-white px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <p className="self-center text-xl font-bold whitespace-nowrap">Bookworm</p>
                <div className="flex items-center gap-6">
                    <p className="font-semibold">Books</p>
                    <p className="text-slate-400">Articles</p>
                </div>
                <img className="userImage" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="user"/>
            </div>
        </div>
    );
}

export default NavBar;