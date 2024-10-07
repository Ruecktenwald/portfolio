import React, { useContext } from 'react';
import Layout from '../layout/Layout'; // Shared layout for consistent design
import { Link } from 'react-scroll'; // Smooth scrolling
import '../../styles/CaseStudies.css'; // Importing the CSS styles
import { ThemeContext } from '../../context/ThemeContext'; // Import Theme Context

function CaseStudies() {
  const { theme } = useContext(ThemeContext); // Access current theme

  return (
    <Layout title="Our Case Studies">
      <div className="case-study" id="project1">
        <h3>Project One: E-commerce Website</h3>
        <p>
          We developed a scalable e-commerce website that improved conversion rates by 25%...
        </p>
        <Link to="ecommerce-case-study" smooth duration={500} className="read-more">
          Read More
        </Link>
      </div>

      <div className="case-study" id="project2">
        <h3>Project Two: SaaS Platform</h3>
        <p>
          We built a custom SaaS platform that streamlined business processes and increased customer retention by 30%...
        </p>
        <Link to="saas-case-study" smooth duration={500} className="read-more">
          Read More
        </Link>
      </div>

      <div className="case-study" id="project3">
        <h3>Project Three: SEO Optimization</h3>
        <p>
          Through our SEO strategy, we helped a client achieve a 50% increase in organic traffic in just 6 months...
        </p>
        <Link to="seo-case-study" smooth duration={500} className="read-more">
          Read More
        </Link>
      </div>
    </Layout>
  );
}

export default CaseStudies;
