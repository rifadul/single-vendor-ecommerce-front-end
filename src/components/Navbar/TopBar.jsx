"use client";
import { SIGN_UP_PATH } from "@/helpers/slug";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Icons from "../../../public/assets/Icons";

function TopBar() {
    const [topBarClose, setTopBarClose] = useState(true);
    const handleClose = () => {
        setTopBarClose(false);
    };

    return (
		topBarClose && (
			<div className='flex justify-center items-center w-full bg-blue-100 h-10 text-neutral-700 py-2 px-4'>
				<div className='flex-1 text-center text-lg'>
					It's special discount{' '}
					<Link
						href={SIGN_UP_PATH}
						className='text-blue-900 font-medium'>
						Sign up
					</Link>{' '}
					now.
				</div>
				<button
					className='absolute right-4 text-2xl font-bold cursor-pointer'
					onClick={handleClose}>
					<Image
						alt={'close-button'}
						src={Icons.close_neutral}
					/>
				</button>
			</div>
		)
	);
}

export default TopBar;
