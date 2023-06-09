import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PostingDetails() {
  const { postingId } = useParams();
  const [posting, setPosting] = useState(null);
  const [showApplyText, setShowApplyText] = useState(false);

  useEffect(() => {
    const getPosting = async () => {
      let response = await fetch(`https://careersite.stephenf.ca/api/postings/${postingId}`);
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle the selected file here
    console.log("Selected file:", file);
  };

  const handleApplyClick = () => {
    setShowApplyText(true);
  };

    // Function to format the deadline to DD/MM/YYYY
    const formatDeadline = (deadline) => {
      const date = new Date(deadline);
      return date.toLocaleDateString("en-GB");
    };
  return (
    <section className="PostingDetails content-wrapper">
      <h3>{posting.title}</h3>
      <p>Posting ID: {postingId}</p>
      {/* Display other details of the posting */}
      <div>
        <div>
          <h6>Job Description:</h6>
          <p>{posting.description}</p>
        </div>
        <div>
          <h6>Closing date:</h6>
          <p>{formatDeadline(posting.deadline)}</p>                  
        </div>
        <div>
          <h6>Posted date:</h6>
          <p>{formatDeadline(posting.created_at)}</p>
        </div>
        <div>
          <h6>Job Type:</h6>
          <p>{posting.type && posting.type.title}</p>
        </div>
        <div>
          <h6>Department:</h6>
          <p>{posting.department && posting.department.title}</p>
        </div>
            <div>
          <h6>Send your resume to:</h6>
          <a href={`mailto:${posting.email}`} target="_blank">
          {posting.email}
        </a>
        </div>
      </div>
    </section>
  );
}
