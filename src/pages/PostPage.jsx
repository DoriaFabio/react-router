import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import axios from "axios";
import SingleCard from "../components/SingleCard";

const apiUrl = import.meta.env.VITE_API_URL;
export default function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(getData, [id]);

    function getData() {
        axios.get(`${apiUrl}/posts/${id}`).then((res) => {
            setPost(res.data.item);
        })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Finito");
            });
    }

    return (
        <section className="container">
            <h1>Post {id}</h1>
            {post && (
                <SingleCard
                    data={post}
                // immagine={post.immagine}
                // titolo={post.titolo}
                />
            )}
        </section>
    )
}