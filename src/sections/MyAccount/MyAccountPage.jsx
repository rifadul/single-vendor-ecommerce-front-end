"use client";
import React, { useRef } from "react";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";
import Icons from "../../../public/assets/Icons";
import { Form, Input } from "antd";
import Label from "@/components/Forms/Label";
import { useAuth } from "@/contexts/AuthContext";
import NameUpdateForm from "./NameUpdateForm";
import PhoneNumberUpdateForm from "./PhoneNumberUpdateForm";
import { useState } from "react";
import EmailUpdateForm from "./EmailUpdateForm";
import ChangePasswordForm from "./ChangePasswordForm";

const MyAccountPage = () => {
    const {
        user,
        updateUserData,
        updateEmail,
        updatePhoneNumber,
        changePassword,
        updateProfileImage,
    } = useAuth();
    const [openUserNameUpdateModal, setOpenUserNameUpdateModal] =
        useState(false);
    const [openPhoneNumberUpdateModal, setOpenPhoneNumberUpdateModal] =
        useState(false);

    const [openEmailUpdateModal, setOpenEmailUpdateModal] = useState(false);
    const [openChangePasswordModal, setOpenChangePasswordModal] =
        useState(false);


    // for image

    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            updateProfileImage(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-md mx-auto">
            <div className="flex flex-col items-center mb-6">
                <div className="relative">
                    <Image
                        src={user?.image ? user?.image : Icons.profile_magenta}
                        alt="Profile Picture"
                        width={120}
                        height={120}
                        className="rounded-full object-cover"
                        style={{ width: "120px", height: "120px" }}
                    />
                    <button
                        className="absolute bottom-0 right-0 bg-white p-1 rounded-full"
                        onClick={triggerFileInput}
                        style={{ transform: "translate(50%, 50%)" }}
                    >
                        <Image
                            src={Icons.camera_input}
                            alt="Edit Profile Picture"
                            width={25}
                            height={25}
                            className="rounded-full object-cover"
                        />
                    </button>
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    accept="image/jpeg, image/jpg"
                />
            </div>

            <Form layout="vertical" className="space-y-4">
                <Form.Item label={<Label>Name</Label>}>
                    <Input
                        value={`${user.first_name} ${user.last_name}`}
                        readOnly
                        suffix={
                            <FaEdit
                                className="text-gray-500 cursor-pointer"
                                onClick={() => setOpenUserNameUpdateModal(true)}
                            />
                        }
                        className="font-medium font-poppins text-neutral-100 py-3 px-4 rounded"
                    />
                </Form.Item>
                <Form.Item label={<Label>Phone Number</Label>}>
                    <Input
                        value={user.phone_number}
                        readOnly
                        suffix={
                            <FaEdit
                                className="text-gray-500 cursor-pointer"
                                onClick={() =>
                                    setOpenPhoneNumberUpdateModal(true)
                                }
                            />
                        }
                        className="font-medium font-poppins text-neutral-100 py-3 px-4 rounded"
                    />
                </Form.Item>
                <Form.Item label={<Label>Email</Label>}>
                    <Input
                        value={user.email}
                        readOnly
                        suffix={
                            <FaEdit
                                className="text-gray-500 cursor-pointer"
                                onClick={() => setOpenEmailUpdateModal(true)}
                            />
                        }
                        className="font-medium font-poppins text-neutral-100 py-3 px-4 rounded"
                    />
                </Form.Item>
            </Form>
            <button
                className="py-3 mt-8 flex gap-3 justify-center items-center border w-full border-black-1000 rounded"
                onClick={() => setOpenChangePasswordModal(true)}
            >
                <Image
                    src={Icons.password}
                    alt="Profile Picture"
                    width={24}
                    height={24}
                    className="rounded-full object-cover"
                />
                <p className=" text-sm font-medium font-poppins text-black-1000">
                    {" "}
                    Change Password
                </p>
            </button>

            {/* modal for update user name */}

            <NameUpdateForm
                modalOpen={openUserNameUpdateModal}
                handleFinish={updateUserData}
                initialValues={user}
                onClose={setOpenUserNameUpdateModal}
            />

            {/* modal for update user email */}
            <PhoneNumberUpdateForm
                modalOpen={openPhoneNumberUpdateModal}
                handleFinish={updatePhoneNumber}
                initialValues={user}
                onClose={setOpenPhoneNumberUpdateModal}
            />

            {/* modal for update user phone number */}
            <EmailUpdateForm
                modalOpen={openEmailUpdateModal}
                handleFinish={updateEmail}
                initialValues={user}
                onClose={setOpenEmailUpdateModal}
            />

            {/* modal for update user phone number */}
            <ChangePasswordForm
                modalOpen={openChangePasswordModal}
                handleFinish={changePassword}
                onClose={setOpenChangePasswordModal}
            />
        </div>
    );
};

export default MyAccountPage;
