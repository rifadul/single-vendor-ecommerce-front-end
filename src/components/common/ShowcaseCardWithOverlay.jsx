import Link from "next/link";

function ShowcaseCardWithOverlay({
    backgroundImage,
    title,
    buttonLabel,
    link,
}) {
    return (
        <div
            className="relative h-[500px] w-full bg-cover bg-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center px-4">
                <h3
                    className={`text-white max-w-xl font-medium text-4xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight sm:leading-snug`}
                >
                    {title}
                </h3>
                {buttonLabel && (
                    <Link
                        href={link}
                        className="bg-magenta-600 py-3 px-9 text-white font-semibold text-base rounded-sm hover:bg-magenta-700 transition duration-300"
                    >
                        {buttonLabel}
                    </Link>
                )}
            </div>
        </div>
    );
}

export default ShowcaseCardWithOverlay;
