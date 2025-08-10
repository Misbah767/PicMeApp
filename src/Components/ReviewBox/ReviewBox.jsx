// import React from "react";
// import "./ReviewBox.css";
// import StarIcon from "../../assets/icons/StarIcon";
// import reviewData from "./reviewData";

// export default function ReviewBox() {
//   const totalStars = 5;

//   return (
//     <div className="pg-review-grid">
//       {reviewData.map((review, index) => (
//         <div className="pg-review-card" key={index}>
//           <div className="pg-review-top">
//             <div className="pg-review-user">
//               <img
//                 src={review.profileImg}
//                 alt="Reviewer"
//                 className="pg-review-avatar"
//               />
//               <p className="pg-review-name">{review.name}</p>
//               <p className="pg-review-date">{review.date}</p>
//             </div>
//           </div>

//           <p className="pg-review-content">{review.text}</p>

//           <div className="pg-review-stars">
//             {[...Array(totalStars)].map((_, i) => (
//               <StarIcon
//                 key={i}
//                 width={18}
//                 height={18}
//                 color={i < review.stars ? "#FFD700" : "#E0E0E0"}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// src/Components/ReviewBox/ReviewBox.jsx
import React from "react";
import "./ReviewBox.css";
import StarIcon from "../../assets/icons/StarIcon";

export default function ReviewBox({ reviews }) {
  const totalStars = 5;

  return (
    <div className="review-wrapper">
    <div className="pg-review-grid">
      {reviews.map((review, index) => (
        <div className="pg-review-card" key={index}>
          <div className="pg-review-top">
            <div className="pg-review-user">
              <img
                src={review.profileImg}
                alt="Reviewer"
                className="pg-review-avatar"
              />
              <p className="pg-review-name">{review.name}</p>
              <p className="pg-review-date">{review.date}</p>
            </div>
          </div>

          <p className="pg-review-content">{review.text}</p>

          <div className="pg-review-stars">
            {[...Array(totalStars)].map((_, i) => (
              <StarIcon
                key={i}
                width={18}
                height={18}
                color={i < review.stars ? "#FFD700" : "#E0E0E0"}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

