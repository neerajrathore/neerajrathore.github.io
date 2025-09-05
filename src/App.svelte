<script>
  document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const track = document.querySelector(".carousel-track");
    const images = document.querySelectorAll(".project-image");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    function updateCarousel() {
      const width = images[0].clientWidth;
      track.style.transform = `translateX(${-currentIndex * width}px)`;
    }

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);
  });

  let name = "Neeraj Rathore";
  let title = "Full Stack Developer";
  let experience = "5 years";

  let skills = [
    "ASP.Net",
    "Dot Net Core",
    "Angular",
    "React JS",
    "Redux",
    "HTML",
    "CSS",
    "Tailwind",
    "SCSS",
    "JavaScript",
    "TypeScript",
    "GIT",
    "AWS",
    "Firebase",
    "React Query",
    "Responsive Design",
  ];

  let employment = [
    {
      company: "E-Connect Solutions Private Limited",
      period: "Jan 2024 - Present",
      position: "Full Stack Developer",
      responsibilities: [
        "Designed and developed Jaipur Development Authority's Samadhan Portal",
        "Built CPRMS updating service and Litigation cases service using ASP.NET and MSSQL",
        "Developed new modules for the JDA Android app",
      ],
      projects: [
        {
          name: "Samadhan Portal",
          description:
            "A citizen grievance redressal system for Jaipur Development Authority.",
          images: [
            "assets/images/samadhan-portal/samadhan.png",
            "assets/images/samadhan-portal/road.jpg",
          ],
        },
        {
          name: "Financial Institution Service",
          description:
            "A backend service for updating CPRMS data using ASP.NET and MSSQL.",
          images: [
            "assets/images/road2.jpg",
          ],
        },
        {
          name: "Scheme Transfer Service",
          description:
            "A backend service for updating CPRMS data using ASP.NET and MSSQL.",
          images: [
            "assets/images/road2.jpg",
          ],
        },
      ],
    },
    {
      company: "Truworth Health Technologies Private Limited",
      period: "March 2023 – Dec 2023",
      position: "Software Engineer 2",
      responsibilities: [
        "Created reusable common UI components for The Wellness Corner app",
        "Implemented Storybook for isolated testing",
        "Utilized charting libraries like Recharts",
      ],
      
    },
    {
      company: "Synoriq R&D Private Limited",
      period: "July 2021 – March 2023",
      position: "Software Engineer 1",
      responsibilities: [
        "Front-end development for CMS module for IDFC Bank",
        "Developed forex exchange module for CIMB Bank",
        "Worked on Authorization module and PD module for CSL Finance's Team App",
        "Website design, bug fixes, and performance improvements",
      ],
    },
    {
      company: "Rajasthan Test House Private Limited",
      period: "July 2020 – July 2021",
      position: "Associate Software Engineer",
      responsibilities: [
        "Designed the structure and design of the company's webpage",
      ],
    },
  ];

  let interests = ["Teaching", "Cycling", "Chess", "Singing", "Hiking"];

  let achievements = [
    "Presented a Kinematic Robot in 2014",
    "Managed multiple projects as a team lead from 2022-2024",
  ];

  let education = {
    degree: "B.Tech in Mechanical Engineering",
    year: "2018",
  };
</script>

<main>
  <!-- Header Section -->
  <section class="header">
    <h1>Hello, I'm {name} 👋</h1>
    <h2>{title}</h2>
    <p class="intro">
      Result-oriented software developer with {experience} of experience in web and
      mobile app development. Passionate about creating efficient, scalable solutions
      and continuously learning new technologies.
    </p>
  </section>

  <!-- Skills Section -->
  <section class="skills">
    <h3>Technical Skills</h3>
    <div class="skills-grid">
      {#each skills as skill}
        <span class="skill-tag">{skill}</span>
      {/each}
    </div>
  </section>

  <!-- Experience Section -->
  <section class="experience">
    <h3>Professional Experience</h3>
    {#each employment as job}
      <div class="job">
        <div class="job-header">
          <h4>{job.company}</h4>
          <span class="period">{job.period}</span>
        </div>
        <h5>{job.position}</h5>
        <ul>
          {#each job.responsibilities as responsibility}
            <li>{responsibility}</li>
          {/each}
        </ul>

        <!-- Projects for this company -->
        <div class="projects">
          <h4>Projects</h4>
          {#each job.projects as project}
            <div class="project">
              <h5>{project.name}</h5>
              <p>{project.description}</p>

              <!-- Project Carousel -->
              <div class="carousel">
                <div class="carousel-wrapper">
                  <button class="carousel-btn prev-btn">&#10094;</button>
                  <div class="carousel-track">
                    {#each project.images as img}
                      <img src={img} alt={project.name} class="project-image" />
                    {/each}
                  </div>
                  <button class="carousel-btn next-btn">&#10095;</button>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </section>

  <!-- Education Section -->
  <section class="education">
    <h3>Education</h3>
    <div class="education-item">
      <h4>{education.degree}</h4>
      <span class="year">Graduated: {education.year}</span>
    </div>
  </section>

  <!-- Achievements Section -->
  <section class="achievements">
    <h3>Key Achievements</h3>
    <ul>
      {#each achievements as achievement}
        <li>{achievement}</li>
      {/each}
    </ul>
  </section>

  <!-- Interests Section -->
  <section class="interests">
    <h3>Personal Interests</h3>
    <div class="interests-list">
      {#each interests as interest}
        <span class="interest-tag">{interest}</span>
      {/each}
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>Thank you for visiting my portfolio!</p>
  </footer>
</main>

<style>
  main {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    line-height: 1.6;
    color: #333;
  }

  section {
    margin-bottom: 3rem;
  }

  .header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .header h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  .header h2 {
    font-size: 1.5rem;
    color: #3498db;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  .intro {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }

  h3 {
    font-size: 1.8rem;
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .skill-tag {
    background: linear-gradient(135deg, #3498db, #2980b9);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .job {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-left: 4px solid #3498db;
  }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
  }

  .job h4 {
    color: #2c3e50;
    margin: 0;
    font-size: 1.2rem;
  }

  .job h5 {
    color: #3498db;
    margin: 0 0 1rem 0;
    font-weight: 600;
  }

  .period {
    background: #e74c3c;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .job ul {
    margin: 0;
    padding-left: 1.2rem;
  }

  .job li {
    margin-bottom: 0.5rem;
    color: #555;
  }

  .education-item {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 1.5rem;
    border-left: 4px solid #27ae60;
  }

  .education-item h4 {
    color: #2c3e50;
    margin: 0 0 0.5rem 0;
  }

  .year {
    color: #27ae60;
    font-weight: 600;
  }

  .achievements ul {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 1.5rem;
    border-left: 4px solid #f39c12;
  }

  .achievements li {
    color: #555;
    margin-bottom: 0.8rem;
  }

  .interests-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .interest-tag {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  footer {
    text-align: center;
    margin-top: 3rem;
    padding: 2rem 0;
    border-top: 1px solid #eee;
    color: #666;
  }

  .carousel {
    text-align: center;
    margin-bottom: 3rem;
  }

  .carousel-wrapper {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .project-image {
    min-width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    font-size: 2rem;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 50%;
    z-index: 2;
    transition: background 0.3s;
  }

  .carousel-btn:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .prev-btn {
    left: 10px;
  }

  .next-btn {
    right: 10px;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    main {
      padding: 1rem;
    }

    .header h1 {
      font-size: 2rem;
    }

    .job-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .skills-grid,
    .interests-list {
      justify-content: center;
    }
  }
</style>
