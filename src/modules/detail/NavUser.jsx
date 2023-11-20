import React from "react";
import { IoChatbox } from "react-icons/io5";
import { IoIosShareAlt } from "react-icons/io";
import { IoMdAlert } from "react-icons/io";
import FormComment from "./FormComment";
import { useSelector, useDispatch } from "react-redux";
import { setToggleForm } from "../../features/active/activeSlice";

const NavUser = () => {
  const dispatch = useDispatch();
  const toggleForm = useSelector((state) => state.active.toggleForm);

  return (
    <div className="relative flex z-10">
      {toggleForm && (
        <div className="absolute left-[-250px]">
          <FormComment />
        </div>
      )}
      <div className="flex flex-col justify-center items-center gap-5">
        <img
          src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
          alt="do more"
          className="h-[25px] rounded-full"
        />
        <button className="relative p-2 border">
          <IoChatbox onClick={() => dispatch(setToggleForm())} />
          <p className="absolute top-0 right-0 text-[12px]">3</p>
        </button>
        <button className="p-2 border">
          <IoIosShareAlt />
        </button>
        <button className="p-2 border">
          <IoMdAlert />
        </button>
      </div>
    </div>
  );
};

export default NavUser;
