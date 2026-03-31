import axios from "axios";
function App() {
  const fetchData = async () => {
    try {
      await axios.get("http://localhost:3000/students");
    } catch (error) {
      console.error(error);
    }
  }

  const fetchedData = fetchData();
  return (
    <>
      <p>{fetchedData}</p>
      <p>Think its working</p>
    </>
  )
}
export default App;
