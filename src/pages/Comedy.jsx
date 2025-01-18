import React, { useEffect, useState } from "react";

const Comedy = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the videos data from the API for category "1000"
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "https://openapi.programming-hero.com/api/videos/category/1003"
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
      <div className="video-list grid grid-cols-1 lg:grid-cols-4 place-content-center gap-4">
        {/* Map through the fetched videos and display them */}
        {videos.map((video) => (
          <>
            <div>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="thumbnail w-full h-52 object-cover rounded"
              />

              <div className="card-body px-0 pr-1">
                <div className="card-title">
                  <div className="profile-info ">
                    <div className="flex gap-3 items-stretch">
                      {/* Display profile information */}
                      <img
                        src={video.authors[0].profile_picture}
                        alt={video.authors[0].profile_name}
                        className="profile-img rounded-full w-[40px] h-[40px]"
                      />
                      <div className="flex flex-col gap-3">
                        <h1 className="font-bold">{video.title}</h1>
                        <div className="profile-name">
                          <p
                            className="font-light text-sm flex gap-2 cursor-pointer"
                            title={video.authors[0].profile_name}
                          >
                            {video.authors[0].profile_name}{" "}
                            {/* Show the verified badge if the profile is verified */}
                            {video.authors[0].verified && (
                              <span className="verified-badge" title="verified">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_11_214)">
                                    <path
                                      d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z"
                                      fill="#2568EF"
                                    />
                                    <path
                                      d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92669C6.88906 8.52512 6.23749 8.52512 5.83593 8.92669C5.43437 9.32825 5.43437 9.97981 5.83593 10.3814L8.43124 12.9767C8.82187 13.3673 9.45624 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.2595 14.5641 7.60794 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z"
                                      fill="#FFFCEE"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_11_214">
                                      <rect
                                        width="20"
                                        height="20"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                            )}
                          </p>
                        </div>
                        <div className="video-stats font-light text-sm">
                          {/* Display views */}
                          <p>{video.others.views} views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Comedy;
