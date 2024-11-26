import React, { useState, useEffect } from "react";
import AdminSidebar from "../common/AdminSidebar/AdminSidebar";
import AdminProfile from "../common/regprofile/regprofile";
import "./AdminFeedbacks.css";

export default function AdminFeedbacks() {
  const [noReviewsMessage, setNoReviewsMessage] = useState("");
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [responseText, setResponseText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [itemsPerPage] = useState(7); // Number of reviews per page

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
    <div className="AdminFeedbackDiv1">
      <div className="AdminFeedbackDiv1-1">
        <AdminSidebar />
      </div>

      <div className="AdminFeedbackDiv1-2">
        <div className="AdminFeedbackDiv1-2-1">
          <AdminProfile />
        </div>

        <div className="AdminFeedbackDiv1-2-2">
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
            <table className="AdminFeedbackDiv1-2-2-table">
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
