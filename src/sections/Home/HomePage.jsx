import ShowcaseCardWithOverlay from "@/components/common/ShowcaseCardWithOverlay";
import CategoryMenu from "@/components/Navbar/CategoryMenu";

function HomePage({ banners }) {
    return (
        <div className="container mx-auto p-4">
            <div className="flex mb-4">
                {/* category menu */}
                <div className="hidden md:block w-1/5">
                    <CategoryMenu />
                </div>

                {/* 1st banner */}
                <div className="w-full md:w-4/5">
                    {banners?.results?.length > 0 && (
                        <ShowcaseCardWithOverlay
                            title={banners?.results[0]?.name}
                            backgroundImage={banners?.results[0]?.image}
                            buttonLabel={banners?.results[0]?.button_name}
                            link={banners?.results[0]?.button_link}
                        />
                    )}
                </div>
            </div>

            {/* banner section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {banners?.results?.slice(1)?.map((banner, key) => (
                    <ShowcaseCardWithOverlay
                        key={key}
                        title={banner.name}
                        backgroundImage={banner.image}
                        buttonLabel={banner.button_name}
                        link={banner.button_link}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
