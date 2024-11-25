import React, { useState, useContext, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useStateContext } from "../context";
import { CustomButton, Progress } from "./";
import { OfferContext } from "../App";

const Footer = () => {
    const navigate = useNavigate();
    const { connect, address, requestForExchange } = useStateContext();
    const { otherAsset, setOtherAsset, ownAsset, setOwnAsset } =
        useContext(OfferContext);
    const [isLoading, setIsLoading] = useState(false);

    const requestExchange = async (
        to,
        ownOffer,
        requestedOffer,
        ownOfferName,
        requestedOfferName
    ) => {
        setIsLoading(true);
        await requestForExchange(
            to,
            ownOffer,
            requestedOffer,
            ownOfferName,
            requestedOfferName
        );
        setIsLoading(false);
        navigate("/offers");
    };

    return (
        <div className='flex justify-center items-center bg-[#1c1c24] rounded-[20px] py-4 mt-12'>
            {isLoading && <Progress />}
            <div>
                <span className='font-epilogue font-bold text-[20px] text-white '>
                    Other:{" "}
                </span>
                <span className='font-epilogue text-[20px] text-white truncate'>
                    {otherAsset?.title}
                </span>

                <span className='font-epilogue font-bold text-[20px] text-white ml-20'>
                    Own:{" "}
                </span>
                <span className='font-epilogue text-[20px] text-white truncate'>
                    {ownAsset?.title}
                </span>

                <CustomButton
                    btnType='button'
                    title={address ? "Submit offer" : "Connect"}
                    styles={
                        address
                            ? "bg-[#1dc071] text-[14px] leading-[20px] min-h-[40px] ml-20"
                            : "bg-[#8c6dfd] text-[14px] leading-[20px] min-h-[40px] ml-20"
                    }
                    handleClick={() => {
                        if (address) {
                            if (otherAsset !== null && ownAsset != null)
                                requestExchange(
                                    otherAsset.owner,
                                    ownAsset.id,
                                    otherAsset.id,
                                    ownAsset.name,
                                    otherAsset.name
                                );
                        } else connect();
                    }}
                />
            </div>
        </div>
    );
};

export default Footer;
