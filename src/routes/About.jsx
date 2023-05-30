export default function About() {
  return (
    <section>
      <div class="main-img-3"></div>
      <div class="main-text">
        <h1 class="page-title">About us</h1>
      </div>
      <p className="about-text content-wrapper">
        Welcome to MyComPany, your trusted partner for exceptional web
        development solutions. With a passion for crafting innovative websites,
        we specialize in creating captivating online experiences that drive
        results. Our team of talented developers, designers, and digital
        strategists work in harmony to deliver cutting-edge solutions tailored
        to your unique business needs. From responsive design to seamless
        functionality, we pride ourselves on delivering pixel-perfect websites
        that not only impress but also engage your target audience. With our
        expertise and dedication to excellence, we'll bring your vision to life
        and help your online presence thrive. Let us be your reliable partner in
        unlocking the full potential of your digital success.
      </p>

      <h2 className="services-header">OUR TEAM</h2>
      <div className="team-container">
        <div>
          <div className="our-team">
            <div className="pic">
              <img src="img6.jpg" height="380em" />
            </div>

            <h3 className="title">John</h3>

            <p className="post">Web Developer</p>
          </div>
        </div>

        <div>
          <div className="our-team">
            <div className="pic">
              <img src="img5.jpg" height="380em" />
            </div>

            <h3 className="title">Kristiana</h3>

            <p className="post">Web Designer</p>
          </div>
        </div>

        <div>
          <div className="our-team">
            <div className="pic">
              <img src="img4.jpg" height="380em" />
            </div>

            <h3 className="title">Mark</h3>

            <p className="post">Software Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
