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

  return (
    <section className="PostingDetails content-wrapper">
      <h3>{posting.title}</h3>
      <p>Posting ID: {postingId}</p>
      {/* Display other details of the posting */}
      <div>
        <div>
          <h5>Job Description:</h5>
          <p>{posting.description}</p>
        </div>
        <div>
          <h5>Deadline:</h5>
          <p>{posting.deadline}</p>
        </div>
        <div>
          <h5>Posted On:</h5>
          <p>{posting.created_at}</p>
        </div>
        <div>
          <h5>Job Type:</h5>
          <p>{posting.type && posting.type.title}</p>
        </div>
        <div>
          <h5>Department:</h5>
          <p>{posting.department && posting.department.title}</p>
        </div>
        <div>
          <h5>Email:</h5>
          <p>{posting.email}</p>
        </div>
        <div>
          <button className="apply-btn" onClick={handleApplyClick}>
            Apply
          </button>
        </div>
        {showApplyText && (
          <section className="apply-section content-wrapper" id="apply">
            <h2>Job Application</h2>

            <div className="apply-flexbox">
              <form method="get">
                <div className="apply-container">
                  <div>
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" placeholder="" />
                  </div>
                  <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="number" id="phone" name="phone" />
                  </div>
                  <div>
                    <h6>Upload your resume</h6>
                    <input
                      className="file-input"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div>
                  <button className="apply-btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
