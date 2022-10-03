import React from 'react';

function Article({article}) {

    const link = `${article.link_to_article}`

    return (
        <div className="flex mb-4 px-6">
            <div className="w-[400px] p-7 border">
                <img src={article.image_url} alt={article.title} className="w-[100px]"/>
                <p className="font-serif text-md font-medium">{article.title}</p>
                <p className="text-sm">{article.author}</p>
                <p className="text-sm">{article.publication_date}</p>
                <a href={link}>Link to Article</a>
            </div>
        </div>
    );
}

export default Article;