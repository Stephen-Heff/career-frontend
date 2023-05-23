export default function Footer() {
  return (
    <footer class="footer">
      <div class="f-icon">
        <a href="https://github.com/Stephen-Heff" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/stephen-folorunsho-068b1b123/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:stephenfolorunsho@hotmail.com" target="_blank">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
      <p> &copy; 2023 | MyComPany</p>
      <div className="links">
        <p> Quick Links</p>
        <p>
          <a href="/about">About</a>
        </p>
        <p>
          <a href="/careers">Careers</a>
        </p>
      </div>
    </footer>
  );
}
