import React from "react";

function CourseDetails() {
  const courses = [
    {
      id: 1,
      name: "React Development",
      duration: "8 Weeks",
    },
    {
      id: 2,
      name: "Full Stack Java",
      duration: "12 Weeks",
    },
    {
      id: 3,
      name: "Python Programming",
      duration: "6 Weeks",
    },
  ];

  return (
    <div>
      <h2>Course Details</h2>

      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <strong>{course.name}</strong>
            {" "}({course.duration})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;