import { useState, useEffect } from "react";

export default function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const getEducation = async () => {
      let response = await fetch("https://laravel.stephenf.ca/api/education");
      let data = await response.json();
      setEducation(data);
    };
    getEducation();
  }, []);

  return (
    <section class="education content-wrapper" id="education">
      <h2>My Education</h2>
        <ul  >
          {education.map((education) => (
            <li key={education.id} className="border">
              <h3>{education.title}</h3>
              <p>{education.description}</p>
            </li>
          ))}
        </ul>
    </section>
  );
}
