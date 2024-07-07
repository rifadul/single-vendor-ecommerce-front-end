"use client";
import Image from "next/image";
import { useCallback, useState, useEffect } from "react";
import Images from "../../../public/assets/images";
import { PRODUCTS_PATH } from "@/helpers/slug";
import { useRouter, useSearchParams } from "next/navigation";

const MegaMenu = ({ categoryData }) => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [categoryList, setCategoryList] = useState(categoryData || []);

  const searchParams = useSearchParams();
  const router = useRouter();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      // params.set("category", "hello");

      return params.toString();
    },
    [searchParams]
  );

  const handleNavigateParent = (path) => {
    router.push(`${PRODUCTS_PATH}?${createQueryString("category", path)}`);
  };
  useEffect(() => {
    setCategoryList(categoryData);
    setSelectedTab(categoryData[0]);
  }, [categoryData]);

  return (
    <div className="flex">
      <div className="py-6 px-4 space-y-4 min-w-[223px] h-[390px] bg-neutral-20 overflow-y-auto">
        {/* <h1 className="text-neutral-700 font-medium py-1.5 px-4">
                    {categoryList?.name}
                </h1> */}

        <div className="space-y-2">
          {categoryList?.map((item, index) => (
            <button
              className={`${
                selectedTab === item
                  ? "text-neutral-700 bg-neutral-30"
                  : "text-neutral-500"
              } w-full py-2 px-6 text-nowrap text-sm font-medium duration-300`}
              key={index}
              onClick={() => setSelectedTab(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-x-4 p-6">
        <div className="w-[777px]  grid grid-cols-3">
          <div className=" h-[330px] overflow-auto border-r border-[#EBEDF0]">
            {selectedTab?.children
              ?.slice(0, Math.ceil(selectedTab.children.length / 3))
              .map((item, index) => (
                <div key={index} className="space-y-1">
                  <button
                    // href={PRODUCTS_PATH}
                    onClick={() => handleNavigateParent(item.name)}
                    className="text-neutral-700 text-sm font-medium py-1 px-2"
                  >
                    {item.name}
                  </button>

                  {item.children.length > 0 && (
                    <div className="space-y-1 flex flex-col">
                      {item.children.map((item, index) => (
                        <button
                          // href={PRODUCTS_PATH}
                          onClick={() => handleNavigateParent(item.name)}
                          key={index}
                          className="text-neutral-400 text-xs px-2 text-left"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>

          <div className=" h-[330px] overflow-auto border-r border-[#EBEDF0]">
            {selectedTab?.children
              ?.slice(
                Math.ceil(selectedTab.children.length / 3),
                Math.ceil(selectedTab.children.length / 3 + 3)
              )
              .map((item, index) => (
                <div key={index} className="space-y-1">
                  <button
                    // href={""}
                    onClick={() => handleNavigateParent(item.name)}
                    className="text-neutral-700 text-sm font-medium py-1 px-2"
                  >
                    {item.name}
                  </button>

                  {item.children.length > 0 && (
                    <div className="space-y-1 flex flex-col">
                      {item.children.map((item, index) => (
                        <button
                          // href={""}
                          onClick={() => handleNavigateParent(item.name)}
                          key={index}
                          className="text-neutral-400 text-xs px-2 text-left"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>

          <div className=" h-[330px] overflow-auto">
            {selectedTab?.children
              ?.slice(
                selectedTab.children.length / 3 + 3,
                selectedTab.children.length
              )
              .map((item, index) => (
                <div key={index} className="space-y-1">
                  <button
                    // href={""}
                    onClick={() => handleNavigateParent(item.name)}
                    className="text-neutral-700 text-sm font-medium py-1 px-2"
                  >
                    {item.name}
                  </button>

                  {item.children.length > 0 && (
                    <div className="space-y-1 flex flex-col">
                      {item.children.map((item, index) => (
                        <button
                          // href={""}
                          onClick={() => handleNavigateParent(item.name)}
                          key={index}
                          className="text-neutral-400 text-xs px-2 text-left"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
        <Image
          alt="category-image"
          src={Images.banner_img}
          width={172}
          height={286}
          className="h-[286px]"
        />
      </div>
    </div>
  );
};

export default MegaMenu;
