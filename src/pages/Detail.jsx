import React from "react";
import CardUser from "../modules/detail/CardUser";
import NavUser from "../modules/detail/NavUser";
import CardDetail from "../modules/detail/CardDetail";
import { useSelector } from "react-redux";
import ScrollTopButton from "../components/ScrollTopButton";

const DetailPage = () => {
  const userData = useSelector((state) => state.blogData.userData);

  return (
    <div>
      {
        userData.map((i, index) => (
          <div key={index}>
            <div className="float-right">
              <NavUser />
            </div>
            <div className="container mx-auto">
              <CardUser
                id={i.BlogID}
                name={i.Name}
                like={i.Like}
                comment={i.Comment}
              />
              <div className="p-[100px]">
                <CardDetail />
              </div>
            </div>
            <ScrollTopButton />
          </div>
        ))}
    </div>
  );
};

export default DetailPage;
