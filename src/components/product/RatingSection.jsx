import React, { useState } from "react";
import { formatDateTime } from "@/utils";
import { Rate } from "antd";

const RatingSection = ({ data }) => {
    const [activeFilter, setActiveFilter] = useState("All");
    const { total_reviews, average_rating, reviews } = data;
    console.log(data);

    // Compute the filtered reviews based on the active filter
    const filteredReviews =
        activeFilter === "All"
            ? reviews
            : reviews &&
              reviews?.filter(
                  (review) => review.rating === parseInt(activeFilter)
              );

    // Ratings summary breakdown (counts for 5, 4, 3, 2, 1 stars)
    const ratingsSummary = Array(5)
        .fill(0)
        .map(
            (_, i) =>
                reviews &&
                reviews.filter((review) => review.rating === 5 - i).length
        );

    // If there are no reviews, show only the message
    if (total_reviews === 0 || !total_reviews) {
        return (
            <div className="w-full max-w-2xl mx-auto p-6">
                <p className="text-center text-neutral-300">
                    No reviews available.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-6 border-b">
            {/* Rating Summary */}
            <div className="text-center">
                <h1 className="text-2xl font-medium text-neutral-900">
                    {average_rating || 0}{" "}
                    <span className="text-neutral-300 font-normal text-xl">
                        /5.0
                    </span>
                </h1>
                <div className="flex flex-col justify-center my-2">
                    <Rate
                        disabled
                        defaultValue={average_rating}
                        style={{
                            color: "#F08200",
                        }}
                    />
                    <p className="text-neutral-300 text-base">
                        {total_reviews} reviews
                    </p>
                </div>

                {/* Star Breakdown */}
                <div className="my-4 space-y-2">
                    {ratingsSummary.map((count, index) => (
                        <div key={index} className="flex items-center">
                            <span className="text-[#F08200]">
                                ⭐ {5 - index}
                            </span>
                            <div className="w-full mx-2 bg-neutral-50 h-2 rounded">
                                <div
                                    className="h-2 bg-[#F08200] rounded"
                                    style={{
                                        width: `${
                                            (count / total_reviews) * 100
                                        }%`,
                                    }}
                                ></div>
                            </div>
                            <span className="text-neutral-700">{count}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Filter Section */}
            <div className="flex gap-3 my-4">
                {["All", 5, 4, 3, 2, 1].map((filter) => (
                    <button
                        key={filter}
                        className={`px-3 py-1 border rounded text-sm font-semibold ${
                            activeFilter === filter
                                ? "border-neutral-700 text-neutral-700"
                                : "border text-neutral-300"
                        }`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter === "All" ? "All" : `${filter} ⭐`}
                    </button>
                ))}
            </div>

            {/* Reviews Section */}
            <div className="space-y-4">
                {filteredReviews.length > 0 ? (
                    filteredReviews.map((review) => (
                        <div
                            key={review.id}
                            className="border p-3 rounded-lg shadow-sm"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="font-medium text-neutral-700">
                                    {`${review.user.first_name} ${review.user.last_name}`}
                                </h3>
                                <span className="text-sm text-gray-500">
                                    {`${
                                        formatDateTime(review.created_at).date
                                    }`}
                                </span>
                            </div>
                            <div className="flex items-center my-2">
                                <Rate
                                    disabled
                                    defaultValue={review.rating}
                                    style={{
                                        color: "#F08200",
                                    }}
                                />
                                <span className="ml-2 text-gray-600">
                                    {review.rating}.0
                                </span>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-neutral-300">
                        No reviews available.
                    </p>
                )}
            </div>
        </div>
    );
};

export default RatingSection;
