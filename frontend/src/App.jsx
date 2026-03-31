import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/students");
        console.log(response.data);
        setStudents(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {students.map((student) => {
        return <div key={student.id}>{student.name}</div>
      
      })}
      <p>Think its working</p>
    </>
  );
}
export default App;
