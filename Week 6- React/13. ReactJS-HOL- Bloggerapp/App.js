import "./App.css";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  let blogComponent;

  if (showBlogs) {
    blogComponent = <BlogDetails />;
  }

  return (
    <div className="App">
      <h1>Blogger Application</h1>

      {/* Ternary Operator */}
      {showBooks ? (
        <BookDetails />
      ) : (
        <h3>No Books Available</h3>
      )}

      <hr />

      {/* Element Variable */}
      {blogComponent}

      <hr />

      {/* Logical && */}
      {showCourses && <CourseDetails />}
    </div>
  );
}

export default App;