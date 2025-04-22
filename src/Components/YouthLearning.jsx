import React from 'react';
import webdev from '../images/webdev.jpg';
import art from '../images/art.jpg';
import pythonprog from '../images/pythonprog.jpg';
import photoc from '../images/photoc.jpeg'
import mobile from '../images/mobile.jpg';
import graphics from '../images/graphics.jpg';
import sarah from '../images/sarah.jpg';
import michaelc from '../images/michaelc.jpg';
import emma from '../images/emma.jpg'
import './YouthLearning.css';

const YouthLearning = () => {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript basics",
      students: 1234,
      rating: 4.8,
      image: webdev
    },
    {
      id: 2,
      title: "Digital Art for Beginners",
      description: "Master digital illustration techniques",
      students: 856,
      rating: 4.7,
      image: art
    },
    {
      id: 3,
      title: "Python Programming",
      description: "Start coding with Python",
      students: 2100,
      rating: 4.9,
      image: pythonprog
    },
    {
        id: 4,
        title: "Mobile App Development",
        description: "Create your first mobile application using frameworks",
        students: 594,
        rating: 4.7,
        image: mobile
    },
    {
        id: 5,
        title: "Graphic Design Basics",
        description: "Understand design principles and software",
        students: 1156,
        rating: 4.9,
        image: graphics
    },
    {
        id: 6,
        title: "Photography Fundamentals",
        description: "Understand the basics of photography, composition, and editing techniques.",
        students: 600,
        rating: 4.8,
        image: photoc
    }
  ];

  // Sample mentor data
  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      expertise: "Web Development",
      rating: 4.9,
      students: 150,
      avatar: sarah
    },
    {
      id: 2,
      name: "Michael Chen",
      expertise: "Digital Art",
      rating: 4.8,
      students: 120,
      avatar: michaelc
    },
    {
      id: 3,
      name: "Emma Williams",
      expertise: "Python Programming",
      rating: 4.7,
      students: 200,
      avatar: emma
    }
  ];

  return (
    <div className="youth-learning">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <h1>Empower Your Future</h1>
          <p>Learn from the best. Grow with guidance.</p>
          <p><i>Achieve with determination. Flourish through knowledge.</i></p>
        </div>
      </div>

      {/* Courses Section */}
      <section className="courses-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Courses</h2>
            <div className="navigation-buttons">
              <button className="nav-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="nav-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="courses-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <img src={course.image} alt={course.title} className="course-image" />
                <div className="card-content">
                  <h3>{course.title}</h3>
                  <p className="description">{course.description}</p>
                  <div className="stats">
                    <div className="stat">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="stat">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon star">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  <button className="get-started-button">Get Started</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="mentors-section">
        <div className="container">
          <h2>Expert Mentors</h2>
          <div className="mentors-grid">
            {mentors.map(mentor => (
              <div key={mentor.id} className="mentor-card">
                <div className="mentor-header">
                  <div className="mentor-avatar">
                    <img src={mentor.avatar} alt={mentor.name} />
                  </div>
                  <div className="mentor-info">
                    <h3>{mentor.name}</h3>
                    <p>{mentor.expertise}</p>
                  </div>
                </div>
                <div className="mentor-content">
                  <div className="stats">
                    <div className="stat">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <span>{mentor.students} students</span>
                    </div>
                    <div className="stat">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon star">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span>{mentor.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="book-button">Book a Session</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default YouthLearning;