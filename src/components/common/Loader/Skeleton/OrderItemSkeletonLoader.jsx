// SkeletonLoader.js
const OrderItemSkeletonLoader = () => {
    return (
        <div className="skeleton-loader p-4 border rounded-md mb-4 animate-pulse">
            <div className="flex justify-between mb-2">
                <div className="bg-gray-200 h-4 w-1/3 rounded"></div>
                <div className="bg-gray-200 h-4 w-1/3 rounded"></div>
            </div>
            <div className="flex justify-between mb-2">
                <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
            </div>
            <div className="flex justify-between">
                <div className="bg-gray-200 h-4 w-1/3 rounded"></div>
                <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
            </div>
        </div>
    );
};

export default OrderItemSkeletonLoader;
