import { PRODUCTS_PATH } from "@/helpers/slug";
import { Divider } from "antd";
import Link from "next/link";

const ProductSummary = ({ items }) => {
    return (
        <div className="border py-6 px-4 flex flex-col gap-4">
            <div>
                <span className="text-black-1000 text-sm font-medium">
                    Total Items
                </span>
                <span className="float-right">{items?.length}</span>
            </div>
            <Divider className="p-0 m-0" />
            <div className="flex flex-col gap-2">
                {items?.length > 0 &&
                    items.map((item, key) => (
                        <div
                            className="text-neutral-600 font-normal text-sm flex justify-between items-center"
                            key={key}
                        >
                            <div>
                                <p className="">{item?.product?.name}</p>
                                <p className="">
                                    {`${item?.quantity} X $${
                                        item?.discount_price_at_order_time
                                            ? item?.discount_price_at_order_time
                                            : item?.price_at_order_time
                                    } `}
                                </p>
                            </div>
                            <p>${item.total_price}</p>
                        </div>
                    ))}
            </div>

            <div className="flex justify-end">
                <Link href={PRODUCTS_PATH}>
                    <button className="border border-blue-900 text-center font-semibold text-blue-900 px-6 py-4 rounded-sm my-4">
                        CONTINUE SHOPPING
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductSummary;
