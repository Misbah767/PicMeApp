
//  import React, { useEffect, useState, useMemo } from "react";
// import PhotoGallery from "../PhotoGallery/PhotoGallery";
// import VideoGallery from "../VideoGallery/VideoGallery";
// import ReviewBox from "../ReviewBox/ReviewBox";
// import sampleImages from "../../constants/sampleImages";
// import sampleVideos from "../../constants/SampleVideos";
// import reviewData from "../ReviewBox/reviewData";
// import { getPhotographerWork } from "../../api/photographersAPi";

// const PhotographerWorkContent = ({
//   photographerId,
//   activeTab,
//   selectedCategory,
//   onCategoryChange,
//   setAllCategories, //  pass this from parent
// }) => {
//   const [photos, setPhotos] = useState([]);
//   const [videos, setVideos] = useState([]);
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPhotographerWork = async () => {
//       try {
//         const response = await getPhotographerWork(photographerId);
//         const workList = response?.data?.data?.work_list || [];

//         let extractedPhotos = workList.flatMap((item) =>
//           (item.photos || []).map((photo) => ({
//             url: photo,
//             category: item.work_type?.toLowerCase(),
//           }))
//         );

//         let extractedVideos = workList.flatMap((item) =>
//           (item.videos || []).map((video) => ({
//             url: video,
//             category: item.work_type?.toLowerCase(),
//           }))
//         );

//         let extractedReviews = workList.flatMap((item) =>
//           (item.reviews || []).map((review) => ({
//             ...review,
//             category: item.work_type?.toLowerCase(),
//           }))
//         );

//         if (extractedReviews.length === 0) {
//           extractedReviews = reviewData.map((review) => ({
//             ...review,
//             category: "default",
//           }));
//         }

//         if (extractedPhotos.length === 0) {
//           extractedPhotos = sampleImages.map((img) => ({
//             url: img,
//             category: "default",
//           }));
//         }

//         if (extractedVideos.length === 0) {
//           extractedVideos = sampleVideos.map((vid) => ({
//             url: vid,
//             category: "default",
//           }));
//         }

//         setPhotos(extractedPhotos);
//         setVideos(extractedVideos);
//         setReviews(extractedReviews);

//         //  Send all categories to parent
//         const categories = [
//           ...extractedPhotos.map((p) => p.category),
//           ...extractedVideos.map((v) => v.category),
//         ];
//         const unique = Array.from(new Set(categories));
//         setAllCategories(unique);
//       } catch (error) {
//         setPhotos(
//           sampleImages.map((img) => ({
//             url: img,
//             category: "",
//           }))
//         );
//         setVideos(
//           sampleVideos.map((vid) => ({
//             url: vid,
//             category: "",
//           }))
//         );
//         setReviews(
//           reviewData.map((review) => ({
//             ...review,
//             category: "",
//           }))
//         );
//         setAllCategories([""]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPhotographerWork();
//   }, [photographerId, setAllCategories]);

//   const normalizedCategory = selectedCategory?.toLowerCase() || "";

//   const filteredPhotos = useMemo(() => {
//     return normalizedCategory
//       ? photos.filter((photo) => photo.category === normalizedCategory)
//       : photos;
//   }, [photos, normalizedCategory]);

//   const filteredVideos = useMemo(() => {
//     return normalizedCategory
//       ? videos.filter((video) => video.category === normalizedCategory)
//       : videos;
//   }, [videos, normalizedCategory]);

//   const filteredReviews = reviews;

//   if (loading)
//     return <p style={{ textAlign: "center" }}>Loading photographer work...</p>;

//   return (
//     <>
//       {activeTab === "photos" &&
//         (filteredPhotos.length > 0 ? (
//           <PhotoGallery images={filteredPhotos.map((p) => p.url)} />
//         ) : selectedCategory ? (
//           <p style={{ textAlign: "center", marginTop: "20px" }}>
//             There are no photos of this category:{" "}
//             <strong>{selectedCategory}</strong>
//           </p>
//         ) : (
//           <p style={{ textAlign: "center", marginTop: "20px" }}>
//             No photos available.
//           </p>
//         ))}

//       {activeTab === "videos" &&
//         (filteredVideos.length > 0 ? (
//           <VideoGallery videos={filteredVideos.map((v) => v.url)} />
//         ) : selectedCategory ? (
//           <p style={{ textAlign: "center", marginTop: "20px" }}>
//             There are no videos of this category:{" "}
//             <strong>{selectedCategory}</strong>
//           </p>
//         ) : (
//           <p style={{ textAlign: "center", marginTop: "20px" }}>
//             No videos available.
//           </p>
//         ))}

//       {activeTab === "reviews" && (
//         <div className="pg-review-main">
//           {filteredReviews.length > 0 ? (
//             <ReviewBox reviews={filteredReviews} />
//           ) : (
//             <p style={{ textAlign: "center", marginTop: "20px" }}>
//               No reviews available.
//             </p>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default PhotographerWorkContent;
import React, { useEffect, useState, useMemo } from "react";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import VideoGallery from "../VideoGallery/VideoGallery";
import ReviewBox from "../ReviewBox/ReviewBox";
import sampleImages from "../../constants/sampleImages";
import sampleVideos from "../../constants/SampleVideos";
import reviewData from "../ReviewBox/reviewData";
import { getPhotographerWork } from "../../api/photographersAPi";

const PhotographerWorkContent = ({
  photographerId,
  activeTab,
  selectedCategory,
  onCategoryChange,
  setAllCategories, //  pass this from parent
}) => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotographerWork = async () => {
      try {
        const response = await getPhotographerWork(photographerId);
        const workList = response?.data?.data?.work_list || [];

        let extractedPhotos = workList.flatMap((item) =>
          (item.photos || []).map((photo) => ({
            url: photo,
            category: item.work_type?.toLowerCase(),
          }))
        );

        let extractedVideos = workList.flatMap((item) =>
          (item.videos || []).map((video) => ({
            url: video,
            category: item.work_type?.toLowerCase(),
          }))
        );

        let extractedReviews = workList.flatMap((item) =>
          (item.reviews || []).map((review) => ({
            ...review,
            category: item.work_type?.toLowerCase(),
          }))
        );

        if (extractedReviews.length === 0) {
          extractedReviews = reviewData.map((review) => ({
            ...review,
            category: "", // sample data category empty
          }));
        }

        if (extractedPhotos.length === 0) {
          extractedPhotos = sampleImages.map((img) => ({
            url: img,
            category: "", // sample data category empty
          }));
        }

        if (extractedVideos.length === 0) {
          extractedVideos = sampleVideos.map((vid) => ({
            url: vid,
            category: "", // sample data category empty
          }));
        }

        setPhotos(extractedPhotos);
        setVideos(extractedVideos);
        setReviews(extractedReviews);

        //  Send all categories to parent
        const categories = [
          ...extractedPhotos.map((p) => p.category),
          ...extractedVideos.map((v) => v.category),
        ];
        const unique = Array.from(new Set(categories));
        setAllCategories(unique);
      } catch (error) {
        setPhotos(
          sampleImages.map((img) => ({
            url: img,
            category: "",
          }))
        );
        setVideos(
          sampleVideos.map((vid) => ({
            url: vid,
            category: "",
          }))
        );
        setReviews(
          reviewData.map((review) => ({
            ...review,
            category: "",
          }))
        );
        setAllCategories([""]);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotographerWork();
  }, [photographerId, setAllCategories]);

  const normalizedCategory = selectedCategory?.toLowerCase() || "";

  const filteredPhotos = useMemo(() => {
    return normalizedCategory
      ? photos.filter((photo) => photo.category === normalizedCategory)
      : photos;
  }, [photos, normalizedCategory]);

  const filteredVideos = useMemo(() => {
    return normalizedCategory
      ? videos.filter((video) => video.category === normalizedCategory)
      : videos;
  }, [videos, normalizedCategory]);

  const filteredReviews = reviews;

  if (loading)
    return <p style={{ textAlign: "center" }}>Loading photographer work...</p>;

  return (
    <>
      {activeTab === "photos" &&
        (filteredPhotos.length > 0 ? (
          <PhotoGallery images={filteredPhotos.map((p) => p.url)} />
        ) : selectedCategory ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            There are no photos of this category:{" "}
            <strong>{selectedCategory}</strong>
          </p>
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No photos available.
          </p>
        ))}

      {activeTab === "videos" &&
        (filteredVideos.length > 0 ? (
          <VideoGallery videos={filteredVideos.map((v) => v.url)} />
        ) : selectedCategory ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            There are no videos of this category:{" "}
            <strong>{selectedCategory}</strong>
          </p>
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No videos available.
          </p>
        ))}

      {activeTab === "reviews" && (
        <div className="pg-review-main">
          {filteredReviews.length > 0 ? (
            <ReviewBox reviews={filteredReviews} />
          ) : (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              No reviews available.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default PhotographerWorkContent;

