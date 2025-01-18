import React, { useEffect, useState } from "react";
import Icon from "../assets/Icon.png"

const Drawing = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the videos data from the API for category "1000"
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "https://openapi.programming-hero.com/api/videos/category/1005"
        );
        const data = await response.json();
        setVideos(data.data); // Assuming the API response has a 'data' property containing videos
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []); // Empty dependency array means it runs only once after the initial render

  // Show loading text until data is fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh] lg:h-screen">
        <span className="loading loading-infinity loading-lg text-[#FF1F3D]"></span>
      </div>
    );
  }

  return (
    <div className="mx-5 lg:mx-16 mt-5">
      <div className="h-[70vh] flex justify-center items-center">
        <img src={Icon} alt="error" />
      </div>
    </div>
  );
};

export default Drawing;
