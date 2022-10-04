import React from 'react';

function Article({article}) {

    const link = `${article.link_to_article}`

    return (
        <div className="flex mb-4 px-6">
            <div className="w-[400px] p-7 border shadow-md">
                <img src={article.image_url} alt={article.title} className="w-[100px]"/>
                <div className="pt-3 pb-3">
                    <p className="font-serif text-md font-medium">{article.title}</p>
                    <p className="text-sm">{article.author}</p>
                    <p className="text-sm">{article.publication_date}</p>
                </div>
                <div className='flex gap-5'>
                    <button className="bg-green-400 p-2 rounded-sm"><a href={link}>Read on NYT</a></button>
                    <button className="bg-green-200 p-2 rounded-sm">Save for Later</button>
                </div>
            </div>
        </div>
    );
}

export default Article;