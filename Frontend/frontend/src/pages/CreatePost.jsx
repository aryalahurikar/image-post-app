import { useState } from "react";
import axios from "axios";

const CreatePost = () => {

    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            alert("Please select image");
            return;
        }

        const formData = new FormData();
        formData.append("image", image);
        formData.append("caption", caption);

        try {
            const res = await axios.post("http://localhost:3000/create-post", formData);
            console.log(res.data);
            alert("Post created!");
        } catch (err) {
            console.error(err);
            alert("Error uploading post");
        }
    };

    return (
        <section className='create-post-section'>
            <form onSubmit={handleSubmit}>
                <h2>Create Post</h2>

                <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <input 
                    type="text" 
                    placeholder='Enter Caption'
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                />

                <button type="submit">Create Post</button>
            </form>
        </section>
    );
};

export default CreatePost;