//? importo le pagine da utilizzare e le proprietà
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card.jsx"

//? importo l'Url della api tramite il file .env
const apiUrl = import.meta.env.VITE_API_URL;

function Blog() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    console.log("è stato eseguito use effect");
    getData();
  }, []);

  //! Chiamata axios per prendere la lista dei post
  function getData() {
    axios.get(`${apiUrl}/posts`).then((res) => {
      console.log(res.data);
      setPost(res.data.data);
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finito");
      });
  }

  //! Chiamata Axios per cancellare un elemento tramite l'id 
  function deleteItem(e, id) {
    axios.delete(`${apiUrl}/posts/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
      getData();
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finally");
      })
      ;
  }

  //! Stampo tutta la lista delle card tramite un map
  return (
    <main className="container mb-5 mt-2">
      <h1 className="text-center mb-3">Elenco Post</h1>
      <div className="row gy-4">
        {post.length > 0
          ? post.map((p) => (
            <div className="col-12 col-md-6 col-lg-4" key={p.id}>
              <Card
                data={p}
                // immagine={p.immagine}
                // titolo={p.titolo}
                // contenuto={p.contenuto}
                // tags={p.tags.join(", ")}
                onDeletePost={(e) => {
                  deleteItem(e, p.id)
                }}
              />
            </div>
          ))
          : "Non ci sono post"}
        <div className="col-12 py-4 d-flex justify-content-center">
          {/* Al click del pulsante, si collega alla pagina del form per aggiungere un nuovo post */}
          <Link to="/posts/create" className="btn btn-success">Aggiungi nuovo post</Link>
        </div>
      </div>
    </main>
  );
}
export default Blog;