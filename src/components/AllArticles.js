import React from 'react';
import Article from './Article';

function AllArticles({allArticles}) {
    return (
        <div className='flex w-full flex-wrap justify-center'>
            {allArticles.map(article => <Article key={article.id} article={article}/>)}
        </div>
    );
}

export default AllArticles;