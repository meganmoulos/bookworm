import React from 'react';
import SavedArticle from './SavedArticle';

function SavedArticles({savedArticles}) {
    return (
        <div className='flex w-full flex-wrap justify-center'>
            <div className='flex w-full flex-wrap justify-center'>
                {savedArticles.map(article => <SavedArticle key={article.id} article={article}/>)}
            </div>
        </div>
    );
}

export default SavedArticles;