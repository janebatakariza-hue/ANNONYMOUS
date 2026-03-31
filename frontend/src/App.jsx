import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/students");
        setStudents(response.data.name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    console.log(students);
  }, [students]);

  return (
    <>
      <p>
        {students.map((student) => {
          return <p>{student}</p>;
        })}
      </p>
      <p>Think its working</p>
    </>
  );
}
export default App;
