import { useEffect,useState } from "react";

const Sayhello = () => {
  const [data, setData] = useState({name: ''});
  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setData(data));
  }, [])

  return (
    <div>
      <h1>Hello {data.name}</h1>
    </div>
  )
}

export default Sayhello;