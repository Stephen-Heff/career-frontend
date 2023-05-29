import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <section class="about " id="about">
      <div class="main-img"></div>
      <div class="main-text">
        <h1 class="page-title">We Make Your Dreams A Reality </h1>
        <p class="title-button">
          <a href="/careers">Join now </a>
        </p>
      </div>

      <div className="services">
        <h2 className="services-header">OUR SERVICES</h2>
        <div class="prices-section" id="pricing">
          <div class="prices-section-flex">
            <div class=" service-column ">
              <div class="card">
                <div class="service-icon">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <h2 class="service-header-text">Responsive Design</h2>

                <p>5 Matches Per Day</p>
                <p>10 Messages Per Day</p>
                <p>Unlimited App Usage</p>
              </div>
            </div>

            <div class=" service-column ">
              <div class="card">
                <div class="service-icon">
                  <i class="fa-solid fa-pen"></i>
                </div>
                <h2 class="service-header-text">Clean Code</h2>

                <p>5 Matches Per Day</p>
                <p>10 Messages Per Day</p>
                <p>Unlimited App Usage</p>
              </div>
            </div>

            <div class=" service-column ">
              <div class="card">
                <div class="service-icon">
                  <i class="fa-solid fa-comment"></i>
                </div>
                <h2 class="service-header-text">Open Communication</h2>
                <p>5 Matches Per Day</p>
                <p>10 Messages Per Day</p>
                <p>Unlimited App Usage</p>
              </div>
            </div>

            <div class=" service-column ">
              <div class="card">
                <div class="service-icon">
                  <i class="fa-solid fa-globe"></i>
                </div>
                <h2 class="service-header-text">World Wide Reach</h2>

                <p>5 Matches Per Day</p>
                <p>10 Messages Per Day</p>
                <p>Unlimited App Usage</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel showArrows={true} showThumbs={false}>
        <Carousel.Item>
          <div className="carousel-inner">
            <h2 className="testimonial-text">
              They really made my dream become a reality. They are a great team
              to work with.
            </h2>
            <p>⭐⭐⭐⭐</p>
            <em>Patrice Molm, Kent</em>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-inner">
            <h2 className="testimonial-text">
              A great team that produces in before deadlines
            </h2>
            <p>⭐⭐⭐⭐</p>
            <em>Jon Doe, Oshawa</em>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
