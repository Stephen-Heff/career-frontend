import { useState, useEffect } from "react";

export default function Social() {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    const getSocials = async () => {
      let response = await fetch("https://laravel.stephenf.ca/api/socials");
      let data = await response.json();
      setSocials(data);
    };
    getSocials();
  }, []);

  return (
    <div>
      <h2>Socials</h2>
      <ul>
        {socials.map((social) => (
          <li key={social.id}>
            <h3>{social.title}</h3>
            <a href={social.url}>link</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
