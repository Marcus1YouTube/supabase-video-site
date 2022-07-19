import "./styles.css";
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getAllVideos();
  });

  const getAllVideos = async () => {
    try {
      let { data, error } = await supabase.from("videos").select();
      if (error) {
        throw error;
      }
      if (data) {
        setVideos(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="App">
      <h1>All Videos List</h1>
      {videos.map((video) => (
        <div key={video.id}>
          <h1>{video.title}</h1>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
}
