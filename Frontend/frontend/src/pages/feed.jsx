import { useState, useEffect } from "react"
import axios from "axios"
const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://ik.imagekit.io/spkbi9uq0/image_Kv75WbFf_y.jpg",
            caption: "test-caption1"
        }
    ])
    //api call
    useEffect(() => {
        axios.get("http://localhost:3000/posts")
            .then((res) => {

                setPosts(res.data.posts)
            })

    }, [])


    return (
        <section className="feed-section">

            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className="post-card">
                            <img src={post.image} alt={post.caption} />

                            <div className="post-content">
                                <p className="post-caption">{post.caption}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1>No Posts Available</h1>

                )
            }
        </section>
    )
}
export default Feed