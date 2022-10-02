import React from 'react';
import Book from './Book';

function User({stats}) {
    console.log(stats)
    return (
        <div className='flex'>
            <div className="flex">
                <div className='p-8'>
                    <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="user" />
                </div>
            </div>
            <div>
                <h1 className='p-8 text-xl font-serif font-bold'>Hello, Reader!</h1>
                <h1 className='p-8 text-xl font-serif font-bold'>Currently reading </h1>
                {stats.map(book => book.currently_reading === true ? <Book key={book.id} book={book} /> : null )}           
            </div>
        </div>
    );
}

export default User;