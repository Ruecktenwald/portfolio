import React from 'react';
import Layout from '../layout/Layout'; // Shared layout for consistent design
import { Link } from 'react-scroll'; // Smooth scrolling

function CaseStudies() {
  return (
    <Layout title="Our Case Studies" backgroundColor="#f0f0f0">
      <div id="project1" style={{ marginBottom: '40px' }}>
        <h3>Project One: E-commerce Website</h3>
        <p>We developed a scalable e-commerce website that improved conversion rates by 25%...</p>
        <Link to="ecommerce-case-study" smooth duration={500} style={{ textDecoration: 'none', color: '#007bff' }}>
          Read More
        </Link>
      </div>

      <div id="project2" style={{ marginBottom: '40px' }}>
        <h3>Project Two: SaaS Platform</h3>
        <p>We built a custom SaaS platform that streamlined business processes and increased customer retention by 30%...</p>
        <Link to="saas-case-study" smooth duration={500} style={{ textDecoration: 'none', color: '#007bff' }}>
          Read More
        </Link>
      </div>

      <div id="project3" style={{ marginBottom: '40px' }}>
        <h3>Project Three: SEO Optimization</h3>
        <p>Through our SEO strategy, we helped a client achieve a 50% increase in organic traffic in just 6 months...</p>
        <Link to="seo-case-study" smooth duration={500} style={{ textDecoration: 'none', color: '#007bff' }}>
          Read More
        </Link>
      </div>
    </Layout>
  );
}

export default CaseStudies;
