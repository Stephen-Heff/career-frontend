import { useState, useEffect } from "react";

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
      <h2>My Postings</h2>
      <div>
        <ul>
          {postings.map((posting) => (
            <div className="posting-main-contianer" key={posting.id}>
              <div className="posting-title-container">
                <div>
                  <a href="/job">
                    <h3>{posting.title}</h3>
                  </a>
                </div>
                <div>
                  <p>{posting.type.title}</p>
                </div>
              </div>
              <div className="posting-description-container">
                <div>
                  <p>{posting.description}</p>
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
