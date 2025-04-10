import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logo, sun } from "../assets";
import { navlinks } from "../navbar_constants";
import { useDisconnect } from "@thirdweb-dev/react";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
    <div
        className={`w-[48px] h-[48px] rounded-[10px] ${
            isActive && isActive === name && "bg-[#2c2f32]"
        } flex justify-center items-center ${
            !disabled && "cursor-pointer"
        } ${styles}`}
        onClick={handleClick}
    >
        {!isActive ? (
            <img src={imgUrl} alt='fund_logo' className='w-1/2 h-1/2' />
        ) : (
            <img
                src={imgUrl}
                alt='fund_logo'
                className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
            />
        )}
    </div>
);

const Sidebar = () => {
    const navigate = useNavigate();
    const disconnect = useDisconnect();
    const [isActive, setIsActive] = useState("dashboard");

    return (
        <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
            <Link to='/'>
                <Icon styles='w-[52px] h-[52px] bg-[#2c2f32]' imgUrl={logo} />
            </Link>

            <div className='flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[100px] py-4 mt-12'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    {navlinks.map((link) => (
                        <div className="items-center">
                            <div className="flex justify-center items-center">
                        <Icon
                            key={link.name}
                            {...link}
                            isActive={
                                useLocation().pathname.substring(1) ||
                                "dashboard"
                            }
                            handleClick={() => {
                                if (!link.disabled) {
                                    setIsActive(link.name);
                                    if (link.name === "Logout") {
                                        console.log("logg")
                                        disconnect()
                                    }
                                    else navigate(link.link);
                                }
                            }}
                        />
                        </div>

                        <p className="text-white flex justify-center items-center">
                            {link.name}
                        </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
