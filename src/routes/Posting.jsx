import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Posting() {
  const [postings, setPostings] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [types, setTypes] = useState([]);
  const [filters, setFilters] = useState({ department: "", type: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postingsResponse, departmentsResponse, typesResponse] =
          await Promise.all([
            fetch("https://careersite.stephenf.ca/api/postings"),
            fetch("https://careersite.stephenf.ca/api/departments"),
            fetch("https://careersite.stephenf.ca/api/types"),
          ]);

        const postingsData = await postingsResponse.json();
        const departmentsData = await departmentsResponse.json();
        const typesData = await typesResponse.json();

        setPostings(postingsData);
        setDepartments(departmentsData);
        setTypes(typesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to handle filter changes
  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section>
      <div class="main-img-7"></div>
      <div className="postings content-wrapper" id="postings">
        <h1 className="career-header">Job Posting</h1>

        {/* Filter section */}
        <div className="filters-container">
          <label htmlFor="department-filter">Department:</label>
          <select
            id="department-filter"
            name="department"
            value={filters.department}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            {departments.map((department) => (
              <option key={department.id} value={department.title}>
                {department.title}
              </option>
            ))}
          </select>

          {/* Add the type filter */}
          <label htmlFor="type-filter">Type:</label>
          <select
            id="type-filter"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            {types.map((type) => (
              <option key={type.id} value={type.title}>
                {type.title}
              </option>
            ))}
          </select>
          {/* ... */}
        </div>

        {/* Posting list */}
        <div>
          <ul>
            {postings
              .filter((posting) => {
                // Apply filters
                return (
                  (!filters.department ||
                    posting.department.title === filters.department) &&
                  (!filters.type || posting.type.title === filters.type)
                );
              })
              .map((posting) => (
                <div className="posting-main-contianer" key={posting.id}>
                  {/* Posting details */}
                  <div className="posting-title-container">
                    <div>
                      <Link to={`/postings/${posting.id}`}>
                        <h3>{posting.title}</h3>
                      </Link>
                    </div>
                    <div>
                      <p>Department: {posting.department.title}</p>
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
      </div>
    </section>
  );
}
