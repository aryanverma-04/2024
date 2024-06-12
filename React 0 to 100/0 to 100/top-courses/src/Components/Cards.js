import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]); // Initialize as an empty array

  // Function to clean the fetched data
  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category]; // Return an empty array if the category is not found
    }
  };

  return (
    <div className="w-4/6 max-w-[1200px] flex flex-wrap justify-center items-center bg-[#08D9D6] rounded">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
