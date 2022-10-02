import React, {useState, useEffect} from 'react';

const defaultBook = {
    title: "",
    author: "",
    publication_year: 0,
    page_count: 0,
    image_url: "",
    library_availablity: false
}

function AddBook(props) {
    const [formData, setFormData] = useState(defaultBook)


    function createBook(book){
        console.log(book)
    }

    function handleSubmit(e){
        e.preventDefault()
        createBook({
            title: formData.title,
            author: formData.author,
            publication_year: formData.publication_year,
            page_count: formData.page_count,
            image_url: formData.image_url,
            library_availablity: formData.library_availablity
        })
        setFormData(defaultBook)
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="bg-orange-50 flex flex-col">
            <div className="p-10">
                <h1 className="p-8 text-xl font-serif font-bold">Add A Book</h1>
                <form onSubmit={handleSubmit} className="flex flex-col p-8">
                    <div className="mb-7">
                        <label className="font-serif font-medium">Title:</label>
                        <input 
                            type="text"
                            name="title"
                            value={formData.title}
                            placeholder="Enter Title..."
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-7">
                        <label className="font-serif font-medium">Author:</label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            placeholder="Enter Author..."
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-7">
                        <label className="font-serif font-medium">Publication Year:</label>
                        <input
                            type="integer"
                            name="publication_year"
                            value={formData.publication_year}
                            placeholder="Enter Publication Year..."
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-7">
                        <label className="font-serif font-medium">Number of Pages:</label>
                        <input
                            type="integer"
                            name="page_count"
                            value={formData.page_count}
                            placeholder="Enter Number of Pages..."
                            onChange={handleChange}
                        />
                    </div>  
                    <div className="mb-7">      
                        <label className="font-serif font-medium">Book Cover URL:</label>
                        <input
                            type="text"
                            name="image_url"
                            value={formData.image_url}
                            placeholder="Enter Image URL..."
                            onChange={handleChange}
                        />   
                    </div> 
                    <div className="mb-7">   
                        <label className="font-serif font-medium">Available at Library?</label>  
                        <input
                            type="checkbox"
                            name="library_availability"
                            value={formData.library_availablity}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="bg-lime-500 rounded w-40 p-4 mt-10" type="submit">Add A Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;