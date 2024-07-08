import React from "react";

function FormCardLoader() {
  return (
    <div class="min-h-screen flex items-center justify-center animate-pulse">
      <div class="bg-white p-12 rounded-lg shadow-light-gray w-full max-w-lg flex flex-col gap-12">
        <div class="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
        <div class="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
        <div class="h-44 bg-gray-200 rounded w-full mx-auto"></div>
        <div class="space-y-9">
          <div class="space-y-3">
            <div class="h-6 bg-gray-200 rounded w-1/2"></div>
            <div class="h-4 bg-gray-200 rounded w-full mx-auto"></div>
          </div>

          <div class="flex flex-col gap-4">
            <div class="h-10 bg-gray-200 rounded w-full mx-auto"></div>
            <div class="h-10 bg-gray-200 rounded w-full mx-auto"></div>

            <div class="flex justify-between items-center mb-4">
              <div class="w-1/2 h-4 bg-gray-200 rounded"></div>
              <div class="w-1/2 h-4 bg-gray-200 rounded"></div>
            </div>

            <div class="h-1 bg-gray-200 rounded w-full mx-auto my-2"></div>

            <div class="h-12 bg-gray-200 rounded w-full mx-auto"></div>

            <div class="h-4 bg-gray-200 rounded w-full mx-auto mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCardLoader;
