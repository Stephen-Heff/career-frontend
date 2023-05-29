import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Posting() {
  const [postings, setPostings] = useState([]);

  useEffect(() => {
    const getPostings = async () => {
      let response = await fetch("http://localhost/api/postings");
      let data = await response.json();
      setPostings(data);
    };
    getPostings();
  }, []);

  return (
    <section className="postings content-wrapper" id="postings">
      <h2>Job Postings</h2>
      <div>
        <ul>
          {postings.map((posting) => (
            <div className="posting-main-contianer" key={posting.id}>
              <div className="posting-title-container">
                <div>
                  <Link to={`/postings/${posting.id}`}>
                    <h3>{posting.title}</h3>
                  </Link>
                </div>
                <div>
                  <p>{posting.type.title}</p>
                </div>
              </div>
              <div className="posting-description-container">
                <div>
                  <p className="truncate">{posting.description}</p>
                </div>
                <div>
                  <p>{posting.created_at}</p>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
