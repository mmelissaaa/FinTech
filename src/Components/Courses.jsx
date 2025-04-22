import React from "react";
import { Star } from "lucide-react";
import "./Courses.css";
import course1 from "../images/course1.jpeg";
import course2 from "../images/course2.jpeg";
import course3 from "../images/course3.jpeg";

const Courses = () => {
  // Sample course data - in a real app, this would likely be passed as props
  const courses = [
    {
      id: 1,
      title: "Investment Fundamentals",
      description:
        "Learn the basics of investment strategies and portfolio management. Perfect for beginners looking to start their investment journey.",
      image: course1,
      registrations: 1234,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Stock Market Mastery",
      description:
        "Advanced techniques for stock market analysis and trading. Discover how to read market trends and make informed decisions.",
      image: course2,
      registrations: 892,
      rating: 4.8,
    },
    {
      id: 3,
      title: "Personal Finance 101",
      description:
        "Master your personal finances with practical budgeting and saving strategies. Learn to create a secure financial future.",
      image: course3,
      registrations: 2156,
      rating: 4.7,
    },
  ];

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`star ${index < Math.floor(rating) ? "filled" : ""}`}
        />
      ));
  };

  return (
    <div className="courses-container">
      <h2 className="courses-title">Financial Courses</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-image-container">
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />
            </div>
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <div className="course-rating">
                  {renderStars(course.rating)}
                  <span className="rating-number">({course.rating})</span>
                </div>
                <div className="course-registrations">
                  {course.registrations.toLocaleString()} registrations
                </div>
              </div>
            </div>
            <div className="course-footer">
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
