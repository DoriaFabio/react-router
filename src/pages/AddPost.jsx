import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const newPost = {
    titolo: "",
    immagine: "",
    contenuto: "",
    tags: [],
};

const apiUrl = import.meta.env.VITE_API_URL;
function AddPost() {
    const [formData, setFormData] = useState(newPost);
    const [tagsList, setTagsList] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        getTags();
    }, []);

    function getTags() {
        axios.get(apiUrl + "/tags").then((res) => {
            console.log(res.data);
            setTagsList(res.data.data);
        })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Finito");
            });
    }

    function handleInput(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    }

    function handleTags(e) {
        setFormData((formData) => {
            let { tags, ...others } = formData;
            if (tags.includes(e.target.value)) {
                tags = tags.filter((val) => val !== e.target.value);
            } else {
                tags = [...tags, e.target.value];
            }
            return {
                tags,
                ...others,
            };
        });
    }

    function AddPosts(e) {
        e.preventDefault();
        axios.post(apiUrl + "/posts", formData).then((res) => {
            console.log(res.data);
            Navigate("/posts");
        })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Finito");
            });
        setFormData(newPost);
    }

    return (
        <section className="my-4 container">
            <h2>Aggiungi nuovo post</h2>
            <form onSubmit={AddPosts}>
                <div className="mb-3">
                    <label htmlFor="titolo" className="form-label">
                        Titolo
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="titolo"
                        aria-describedby="namelHelp"
                        value={formData.titolo}
                        onChange={handleInput}
                        name="titolo"
                    />
                    <div id="namelHelp" className="form-text">
                        Scrivi il titolo del post
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="immagine" className="form-label">
                        Immagine del post
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="immagine"
                        value={formData.immagine}
                        onChange={handleInput}
                        name="immagine"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contenuto" className="form-label">
                        Descrizione
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="contenuto"
                        value={formData.contenuto}
                        onChange={handleInput}
                        name="contenuto"
                    />
                </div>
                <div className="card p-4">
                    {tagsList.map((tag) => (
                        <div className="mb-3 form-check" key={tag.id}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="tags"
                                name="tags"
                                onChange={handleTags}
                                value={tag.title}
                                checked={formData.tags.includes(tag.title)}
                            />
                            <label className="form-check-label" htmlFor="avaiable">
                                {tag.title}
                            </label>
                        </div>
                    ))}
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </section>
    )
}

export default AddPost;