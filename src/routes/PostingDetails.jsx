import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostingDetails() {
  const { postingId } = useParams();
  const [posting, setPosting] = useState(null);

  useEffect(() => {
    const getPosting = async () => {
      let response = await fetch(`http://localhost/api/postings/${postingId}`);
      let data = await response.json();
      console.log(data);
      setPosting(data);
    };
    getPosting();
  }, [postingId]);

  // Render loading state while fetching
  if (!posting) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h2>Posting Details</h2>
      <p>Posting ID: {postingId}</p>
      {/* Display other details of the posting */}
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
          <h2>Job Type:</h2>
          <p>{posting.type && posting.type.title}</p>
        </div>
        <div>
          <h2>Department:</h2>
          <p>{posting.department && posting.department.title}</p>
        </div>
        <div>
          <p>{posting.email}</p>
        </div>
      </div>
    </section>
  );
}
