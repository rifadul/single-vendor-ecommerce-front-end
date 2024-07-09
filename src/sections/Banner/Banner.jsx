import Menu from "./Menu";
import ShowcaseCardWithOverlay from "@/components/common/ShowcaseCardWithOverlay";

function Banner({ data }) {
    return (
        <div className="container mx-auto p-4">
            <div className="flex mb-4">
                <div className="hidden md:block w-1/5">
                    <Menu />
                </div>
                <div className="w-full md:w-4/5">
                    <ShowcaseCardWithOverlay
                        title=" Eid Exclusive Collection"
                        backgroundImage="https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png"
                        buttonLabel="Shop Now"
                        link="#"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ShowcaseCardWithOverlay
                    title=" Eid Exclusive Collection"
                    backgroundImage="https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png"
                    buttonLabel="Shop Now"
                    link="#"
                />
                <ShowcaseCardWithOverlay
                    title=" Eid Exclusive Collection"
                    backgroundImage="https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png"
                    buttonLabel="Shop Now"
                    link="#"
                />
                <ShowcaseCardWithOverlay
                    title=" Eid Exclusive Collection"
                    backgroundImage="https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png"
                    buttonLabel="Shop Now"
                    link="#"
                />
                <ShowcaseCardWithOverlay
                    title=" Eid Exclusive Collection"
                    backgroundImage="https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png"
                    buttonLabel="Shop Now"
                    link="#"
                />
                <ShowcaseCardWithOverlay
                    title=" Eid Exclusive Collection"
                    backgroundImage="https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png"
                    buttonLabel="Shop Now"
                    link="#"
                />
                <ShowcaseCardWithOverlay
                    title=" Eid Exclusive Collection"
                    backgroundImage="https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png"
                    buttonLabel="Shop Now"
                    link="#"
                />
            </div>
        </div>
    );
}

export default Banner;
