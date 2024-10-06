import React from "react";

function TrackOrderSkeletonLoader() {
    return (
        <div className="animate-pulse">
            <div className="mb-4 h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
            <div className="mb-4 h-6 bg-gray-200 rounded w-full mx-auto"></div>
            <div className="mb-4 h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
    );
}

export default TrackOrderSkeletonLoader;
