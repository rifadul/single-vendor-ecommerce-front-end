"use client";
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
    } = useAuth();
    const [openUserNameUpdateModal, setOpenUserNameUpdateModal] =
        useState(false);
    const [openPhoneNumberUpdateModal, setOpenPhoneNumberUpdateModal] =
        useState(false);

    const [openEmailUpdateModal, setOpenEmailUpdateModal] = useState(false);
    const [openChangePasswordModal, setOpenChangePasswordModal] =
        useState(false);

    const handleFinish = (values) => {
        console.log("values", values);
    };

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-md mx-auto">
            <div className="flex flex-col items-center mb-6 relative">
                <Image
                    src={user?.image ? user?.image : Icons.profile_magenta}
                    alt="Profile Picture"
                    width={100}
                    height={100}
                    className="rounded-full object-cover border-2 border-red-700"
                />
                <button className="mt-2 text-sm text-blue-500 absolute top-0 bottom-0">
                    <Image
                        src={Icons.camera_input}
                        alt="Profile Picture"
                        width={25}
                        height={25}
                        className="rounded-full object-cover"
                    />
                </button>
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
