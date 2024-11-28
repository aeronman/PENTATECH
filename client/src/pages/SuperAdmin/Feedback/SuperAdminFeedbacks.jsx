import React, { useState, useEffect } from "react";
import SuperAdminSidebar from "../common/SuperAdminSidebar/SuperAdminSidebar";
import RegProfile from "../../Registered/common/regprofile/regprofile";
import "./SuperAdminFeedbacks.css";

export default function AdminFeedbacks() {
  const [noReviewsMessage, setNoReviewsMessage] = useState("");
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [responseText, setResponseText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [itemsPerPage] = useState(8); // Number of reviews per page

  const [reviews] = useState([
    {
      date: new Date().toLocaleDateString("en-US"),
      name: "Mary C. Aquino",
      rating: 4.5,
      question: "How would you rate your experience of our page?",
      comments: "Thank you for this scholarship.",
      status: "Responded",
      response: "Thank you for your kind words! We're glad to hear you're satisfied with the page.",
    },
    {
      date: new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString("en-US"),
      name: "Jane T. Cruz",
      rating: 5.0,
      question: "How would you rate your experience of our page?",
      comments: "Very satisfied!",
      status: "Responded",
      response: "Thank you for your kind words! We're glad to hear you're satisfied with the page.",
    },
    {
      date: "03/28/2024",
      name: "John Dela Cruz",
      rating: 5.00,
      question: "How would you rate your experience of our page?",
      comments: "The service was great.",
      status: "Responded",
      response: "Thank you for your kind words! We're glad to hear you're satisfied with the page.",
    },
    {
      date: "03/28/2024",
      name: "Mark M. Santos",
      rating: 3.5,
      question: "How would you rate your experience of our page?",
      comments: "None.",
      status: "Not Responded",
    },
    {
      date: "03/28/2024",
      name: "John H. Doe",
      rating: 4.2,
      question: "How would you rate your experience of our page?",
      comments: "Thank you for this scholarship.",
      status: "Responded",
      response: "Thank you for your kind words! We're glad to hear you're satisfied with the page.",
    },
    {
      date: "03/28/2024",
      name: "Elijah B. Dela Cruz",
      rating: 5.00,
      question: "How would you rate your experience of our page?",
      comments: "None.",
      status: "Not Responded",
    },
    {
      date: "03/28/2024",
      name: "Mark R. Borlagdan",
      rating: 5.00,
      question: "How would you rate your experience of our page?",
      comments: "None.",
      status: "Not Responded",
    },
    {
      date: "03/28/2024",
      name: "Jeydon C. Lopez",
      rating: 4.90,
      question: "How would you rate your experience of our page?",
      comments: "The service was great.",
      status: "Responded",
      response: "Thank you for your kind words! We're glad to hear you're satisfied with the page.",
    },
    {
      date: "03/28/2024",
      name: "Zeke Y. Reyes",
      rating: 5.00,
      question: "How would you rate your experience of our page?",
      comments: "None.",
      status: "Not Responded",
    },
    {
      date: "03/28/2024",
      name: "Christine L. Santos",
      rating: 5.00,
      question: "How would you rate your experience of our page?",
      comments: "Very Satisfied!",
      status: "Responded",
      response: "Thank you for your kind words! We're glad to hear you're satisfied with the page.",
    },
    {
      date: "03/28/2024",
      name: "Ezekiel F. Manalig",
      rating: 4.80,
      question: "How would you rate your experience of our page?",
      comments: "Thank you for this scholarship",
      status: "Responded",
      response: "Thank you for your kind words! We're glad to hear you're satisfied with the page.",
    },
    {
      date: "03/27/2024",
      name: "Sarah G. Mendoza",
      rating: 4.7,
      question: "How would you rate your experience of our page?",
      comments: "The page is easy to navigate.",
      status: "Responded",
      response: "Thank you for your feedback! We're happy to know that the navigation works well for you.",
    },
    {
      date: "03/27/2024",
      name: "Lucas D. Ponce",
      rating: 4.3,
      question: "How would you rate your experience of our page?",
      comments: "Could use some improvements.",
      status: "Not Responded",
    },
    {
      date: "03/26/2024",
      name: "Emma L. Robinson",
      rating: 4.8,
      question: "How would you rate your experience of our page?",
      comments: "Very helpful and user-friendly.",
      status: "Responded",
      response: "Thank you for your kind words! We're glad to hear the page was helpful and easy to use.",
    },
    {
      date: "03/26/2024",
      name: "Caleb W. Adams",
      rating: 5.0,
      question: "How would you rate your experience of our page?",
      comments: "Nothing to complain about!",
      status: "Responded",
      response: "Thank you for your feedback! We're pleased to know everything went smoothly.",
    },
    {
      date: "03/25/2024",
      name: "Samantha T. Garcia",
      rating: 3.8,
      question: "How would you rate your experience of our page?",
      comments: "Good, but could load faster.",
      status: "Not Responded",
    },
    {
      date: "03/25/2024",
      name: "David F. Phillips",
      rating: 4.4,
      question: "How would you rate your experience of our page?",
      comments: "The design is quite modern.",
      status: "Responded",
      response: "Thank you for your feedback! We're happy to know you liked the design.",
    },
    {
      date: "03/24/2024",
      name: "Olivia C. Wells",
      rating: 4.9,
      question: "How would you rate your experience of our page?",
      comments: "Great experience overall.",
      status: "Responded",
      response: "Thank you for your kind words! We're glad to hear you had a great experience.",
    },
    {
      date: "03/24/2024",
      name: "Ethan S. Harper",
      rating: 5.0,
      question: "How would you rate your experience of our page?",
      comments: "No issues at all, excellent.",
      status: "Responded",
      response: "Thank you for your feedback! We're thrilled to know everything went excellently.",
    },
    {
      date: "03/23/2024",
      name: "Charlotte B. Lee",
      rating: 4.6,
      question: "How would you rate your experience of our page?",
      comments: "Very good, smooth process.",
      status: "Responded",
      response: "Thank you for your feedback! We're glad the process was smooth for you.",
    },
    {
      date: "03/23/2024",
      name: "Benjamin P. King",
      rating: 4.7,
      question: "How would you rate your experience of our page?",
      comments: "Great, but would love to see more options.",
      status: "Not Responded",
    },
    {
      date: "03/22/2024",
      name: "Isabella J. Scott",
      rating: 4.5,
      question: "How would you rate your experience of our page?",
      comments: "User-friendly and efficient.",
      status: "Responded",
      response: "Thank you for your kind words! We're happy to hear you had a positive experience.",
    },
    {
      date: "03/22/2024",
      name: "Mason R. Carter",
      rating: 3.9,
      question: "How would you rate your experience of our page?",
      comments: "It's good, but could improve on speed.",
      status: "Not Responded",
    },
    {
      date: "03/21/2024",
      name: "Ava M. Foster",
      rating: 4.3,
      question: "How would you rate your experience of our page?",
      comments: "Nice page, could be more interactive.",
      status: "Not Responded",
    },
    {
      date: "03/21/2024",
      name: "William T. Turner",
      rating: 5.0,
      question: "How would you rate your experience of our page?",
      comments: "The page was great, no issues.",
      status: "Responded",
      response: "Thank you for your feedback! We're happy to know everything went smoothly.",
    },
    {
      date: "03/20/2024",
      name: "Henry E. Mitchell",
      rating: 4.8,
      question: "How would you rate your experience of our page?",
      comments: "Good experience overall.",
      status: "Responded",
      response: "Thank you for your kind words! We're glad to hear you had a good experience.",
    },
    {
      date: "03/20/2024",
      name: "Sophia G. Sanchez",
      rating: 5.0,
      question: "How would you rate your experience of our page?",
      comments: "I’m very happy with it.",
      status: "Responded",
      response: "Thank you for your feedback! We're thrilled that you're happy with the page.",
    },
    {
      date: "03/19/2024",
      name: "Jackson F. Perez",
      rating: 4.6,
      question: "How would you rate your experience of our page?",
      comments: "Page is fast and informative.",
      status: "Responded",
      response: "Thank you for your kind words! We're glad the page was fast and informative for you.",
    },
    {
      date: "03/19/2024",
      name: "Liam S. Bennett",
      rating: 5.0,
      question: "How would you rate your experience of our page?",
      comments: "Perfect experience!",
      status: "Responded",
      response: "Thank you for your feedback! We're thrilled to know everything was perfect.",
    },
    {
      date: "03/18/2024",
      name: "Harper N. Flores",
      rating: 4.2,
      question: "How would you rate your experience of our page?",
      comments: "Good experience overall.",
      status: "Responded",
      response: "Thank you for your feedback! We're happy to hear you had a good experience.",
    },
    {
      date: "03/18/2024",
      name: "Elijah J. Ward",
      rating: 4.9,
      question: "How would you rate your experience of our page?",
      comments: "Would definitely recommend!",
      status: "Responded",
      response: "Thank you for your recommendation! We're thrilled to hear that you'd recommend our page.",
    },
    {
      date: "03/17/2024",
      name: "Maya P. Gray",
      rating: 5.0,
      question: "How would you rate your experience of our page?",
      comments: "Excellent, couldn't be better!",
      status: "Responded",
      response: "Thank you for your kind words! We're so glad you had an excellent experience.",
    },
    {
      date: "03/17/2024",
      name: "Owen T. Brooks",
      rating: 3.8,
      question: "How would you rate your experience of our page?",
      comments: "The page works fine, but could be faster.",
      status: "Not Responded",
    },
    {
      date: "03/16/2024",
      name: "Zara M. Robinson",
      rating: 5.0,
      question: "How would you rate your experience of our page?",
      comments: "Great page, easy to use.",
      status: "Responded",
      response: "Thank you for your feedback! We're glad to hear the page was easy to use.",
    },
    {
      date: "03/16/2024",
      name: "James B. Cooper",
      rating: 4.7,
      question: "How would you rate your experience of our page?",
      comments: "Very useful, but could use a few more features.",
      status: "Not Responded",
    },
  ]);
  

  useEffect(() => {
    if (filterStatus === "All") {
      setFilteredReviews(reviews);
    } else {
      const filtered = reviews.filter((review) => review.status === filterStatus);
      setFilteredReviews(filtered);
    }

    if (reviews.length === 0) {
      setNoReviewsMessage("No reviews available.");
    } else {
      setNoReviewsMessage("");
    }
  }, [filterStatus, reviews]);

  // Handle pagination logic
  const indexOfLastReview = currentPage * itemsPerPage;
  const indexOfFirstReview = indexOfLastReview - itemsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);
    setIsDropdownOpen(false);
  };

  const handleRespondClick = (review) => {
    setSelectedReview(review);
    setIsModalOpen(true);
    // Only clear the response text if it's a 'Respond' action
    if (review.status !== "Responded") {
      setResponseText("");
    }
  };

  const handleClosePopUp = () => {
    setIsModalOpen(false);
    setSelectedReview(null);
  };

  const handleSaveResponse = () => {
    const updatedReviews = reviews.map((review) =>
      review === selectedReview ? { ...review, status: "Responded", response: responseText } : review
    );
    setIsModalOpen(false);
    setSelectedReview(null);
  };

  const renderStars = (rating) => {
    const fillPercentage = `${(rating / 5) * 100}%`; // Calculate percentage fill for the rating

    return (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div className="star-container">
          <div className="star-outline">
            <div
              className="star-fill"
              style={{
                width: fillPercentage, // Adjust width dynamically
              }}
            ></div>
          </div>
        </div>
        <span>{rating.toFixed(2)}</span>
      </div>
    );
  };

  return (
    <div className="SuperAdminFeedbackDiv1">
      <div className="SuperAdminFeedbackDiv1-1">
        <SuperAdminSidebar />
      </div>

      <div className="SuperAdminFeedbackDiv1-2">
        <div className="SuperAdminFeedbackDiv1-2-1">
          <RegProfile />
        </div>

        <div className="SuperAdminFeedbackDiv1-2-2">
          <div className="feedback-header">
            <h1>Feedback</h1>
          </div>

          <div className="reviews-section">
            <h2>
              Reviews <span className="review-count">({filteredReviews.length})</span>
            </h2>

            <div className="filter-dropdown">
              <button
                className={`filter-select ${isDropdownOpen ? "open" : ""}`}
                onClick={toggleDropdown}
              >
                {filterStatus}
              </button>
              <ul className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
                <li onClick={() => handleFilterChange("All")}>All</li>
                <li onClick={() => handleFilterChange("Responded")}>Responded</li>
                <li onClick={() => handleFilterChange("Not Responded")}>Not Responded</li>
              </ul>
            </div>
          </div>

          {noReviewsMessage && <div className="no-reviews-message">{noReviewsMessage}</div>}

          {currentReviews.length > 0 && (
            <table className="SuperAdminFeedbackDiv1-2-2-table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Question</th>
                  <th>Comments</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentReviews.map((review, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{review.date}</td>
                    <td>{review.name}</td>
                    <td>
                      <div className="stars-container">{renderStars(review.rating)}</div>
                    </td>
                    <td>{review.question}</td>
                    <td>{review.comments}</td>
                    <td className={review.status === "Responded" ? "responded" : "not-responded"}>
                      {review.status}
                    </td>
                    <td>
                      <button
                        className={`action-btn ${review.status === "Responded" ? "view" : "respond"}`}
                        onClick={() => handleRespondClick(review)}
                      >
                        {review.status === "Responded" ? "View" : "Respond"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Pagination Controls (Only Page Numbers) */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={index + 1 === currentPage ? "active-page" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Modal for responding */}
          {isModalOpen && selectedReview && (
            <div className="popup-overlay">
              <div className="popup">
                <button className="close-btn" onClick={handleClosePopUp}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="close-icon">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <h2>{selectedReview.status === "Responded" ? "View Response" : "Respond to Review"}</h2>
                <div>
                  <strong>Reviewer:</strong> {selectedReview.name}
                </div>
                <div>
                  <strong>Comments:</strong> {selectedReview.comments}
                </div>
                {selectedReview.status === "Responded" ? (
                  <div>
                    <strong>Response:</strong> {selectedReview.response}
                  </div>
                ) : (
                  <div>
                    <textarea
                      value={responseText}
                      onChange={(e) => setResponseText(e.target.value)}
                      placeholder="Write your response here..."
                    ></textarea>
                  </div>
                )}
                {selectedReview.status !== "Responded" && (
                  <button onClick={handleSaveResponse}>Save Response</button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
