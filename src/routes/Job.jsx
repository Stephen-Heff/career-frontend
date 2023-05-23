import { useState, useEffect } from "react";

export default function Posting() {
  const [postings, setPostings] = useState([]);
  const [selectedPosting, setSelectedPosting] = useState(null);

  useEffect(() => {
    const getPostings = async () => {
      let response = await fetch("http://localhost/api/postings");
      let data = await response.json();
      setPostings(data);
    };
    getPostings();
  }, []);

  const handlePostingClick = (posting) => {
    if (selectedPosting && selectedPosting.id === posting.id) {
      setSelectedPosting(null); // Collapse if already selected
    } else {
      setSelectedPosting(posting); // Expand if not selected
    }
  };

  return (
    <section className="posting">
      <h2>Job</h2>
      <div>
        <ul>
          {postings.map((posting) => (
            <div className="posting-main-contianer" key={posting.id}>
              <div className="posting-title-container">
                <div>
                  <a href="#" onClick={() => handlePostingClick(posting)}>
                    <h3>{posting.title}</h3>
                  </a>
                </div>
                <div>
                  <p>{posting.type.title}</p>
                </div>
              </div>
              <div className="posting-description-container">
                <div>
                  <p>{posting.created_at}</p>
                </div>
              </div>
              {selectedPosting && selectedPosting.id === posting.id && (
                <div>
                  <div>
                    <h2>Job Description:</h2>
                    <p>{posting.description}</p>
                  </div>
                  <div>
                    <h2>Deadline:</h2>
                    <p>{posting.deadline}</p>
                  </div>
                  <div>
                    <h2>Posted On:</h2>
                    <p>{posting.created_at}</p>
                  </div>
                  <div>
                    <h2>Job Type</h2>
                    <p>{posting.type.title}</p>
                  </div>
                  <div>
                    <h2>Department:</h2>
                    <p>{posting.department.title}</p>
                  </div>
                  <div>
                    <p>{posting.email}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
