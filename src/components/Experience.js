// src/components/Experience.js
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2>Work Experience</h2>

        <div className="company-header">
          <h3>NV Data Systems Private Limited — Bengaluru, India</h3>
          <p className="duration">AUG 2022 - FEB 2026</p>
        </div>

        {/* Flex container for projects */}
        <div className="projects-flex">
          {/* Project 2: User Sign-Up & Retail */}
          <div className="project-card">
            <span className="project-tag">Recent</span>
            <h4>Project-2: User Sign-Up & Retail</h4>
            <p className="date-range">(September 2024 - February 2026)</p>
            <p>
              <strong>Technologies:</strong> React, JavaScript (ES6+), REST
              APIs, Tailwind CSS, Material UI, Jira
            </p>
            <p>
              <strong>Role:</strong> Frontend Developer
            </p>

            <h5>Key Responsibilities:</h5>
            <ul>
              <li>
                Designed and developed a dynamic, multi-step sign-up flow that
                adapts in real time based on user-selected country and
                regulatory requirements.
              </li>
              <li>
                Integrated third-party KYC/AML verification APIs (e.g., identity
                proofing, document validation) to enable secure, compliant user
                onboarding.
              </li>
              <li>
                Implemented real-time input validation, progressive disclosure,
                and contextual error handling to guide users through complex
                forms.
              </li>
              <li>
                Built responsive, accessible UI components using Tailwind CSS,
                and Material UI, ensuring consistency across devices.
              </li>
              <li>
                Collaborated with Product, Legal, and UX teams to translate
                international compliance rules into functional frontend logic.
              </li>
              <li>
                Documented component APIs, data flows, and validation rules to
                support cross-team alignment and future maintenance.
              </li>
            </ul>

            <h5>Achievements:</h5>
            <ul>
              <li>Increased onboarding completion rate by ~22% post-launch.</li>
              <li>
                Reduced developer onboarding time by 40% through reusable
                component architecture and clear documentation.
              </li>
              <li>
                Ensured 100% alignment with GDPR and regional KYC requirements
                across 30+ supported countries.
              </li>
            </ul>
          </div>

          {/* Project 1: Clover Tool */}
          <div className="project-card">
            <span className="project-tag">Core Platform</span>
            <h4>Project-1: Clover Tool</h4>
            <p className="date-range">(November 2022 - September 2024)</p>
            <p>
              <strong>Technologies:</strong> React, JavaScript (ES6+), REST
              APIs, Tailwind CSS, Material UI, Jira
            </p>
            <p>
              <strong>Role:</strong> Frontend Developer
            </p>

            <h5>Key Responsibilities:</h5>
            <ul>
              <li>
                Developed responsive, accessible single-page applications (SPAs)
                using React.js, ensuring compliance with WCAG standards and
                cross-browser compatibility.
              </li>
              <li>
                Implemented efficient state management with Redux and Context
                API to streamline data flow across components.
              </li>
              <li>
                Built reusable UI components with Material UI and custom CSS for
                consistent design and faster development.
              </li>
              <li>
                Optimized rendering performance using lazy loading, code
                splitting, and memoization techniques.
              </li>
              <li>
                Integrated RESTful APIs to dynamically fetch and display
                real-time data, enhancing user interactivity.
              </li>
              <li>
                Collaborated in Agile/Scrum teams using Jira; participated in
                daily stand-ups, sprint planning, and code reviews.
              </li>
            </ul>

            <h5>Achievements:</h5>
            <ul>
              <li>
                Reduced unnecessary re-renders by 25%, improving application
                responsiveness.
              </li>
              <li>
                Accelerated feature development by 30% through a library of
                reusable components.
              </li>
              <li>
                Reduced production bugs by 20% via automated CI checks and
                rigorous code reviews.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
