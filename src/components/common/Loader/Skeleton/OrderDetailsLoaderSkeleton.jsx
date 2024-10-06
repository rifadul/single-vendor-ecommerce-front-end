const OrderDetailsLoaderSkeleton = () => {
    return (
        <div className="animate-pulse space-y-6">
            {/* Order Number */}
            <div className="text-center">
                <div className="h-6 bg-gray-200 rounded w-40 mx-auto"></div>
            </div>

            {/* Main Container */}
            <div className="bg-white rounded-sm py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                {/* Left: Ordered Items */}
                <div className="space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-48 mx-auto"></div>
                    <div className="space-y-4">
                        {/* Simulate Collapsible Items */}
                        <div className="border p-4 rounded-md space-y-3">
                            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                        </div>
                        <div className="border p-4 rounded-md space-y-3">
                            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>

                {/* Right: Order Summary */}
                <div className="space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-48 mx-auto"></div>
                    <div className="space-y-4">
                        <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    {/* Status and Other Details */}
                    <div className="border py-6 px-4 flex flex-col gap-4">
                        <div className="space-y-4">
                            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-6 bg-gray-200 rounded w-full"></div>
                        <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsLoaderSkeleton;
