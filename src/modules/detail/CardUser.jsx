import { FaHeart } from "react-icons/fa";
import axios from "axios";

const CardUser = ({ id, name, like, active }) => {
  const increasedLike = like + 1;

  const handleLikeButton = () => {
    axios
      .put(`http://localhost:3001/blogs/` + id, { Like: increasedLike })
      .then((res) => console.log("success", res))
      .catch((err) => console.log("err", err));
  };

  return (
    <div>
      <div className="flex justify-between px-[20%]">
        <div className="flex items-center gap-3">
          <img
            src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
            alt="do more"
            className="h-[40px] rounded-full"
          />
          <div>
            <div className="font-bold">{name}</div>
            <div className="cursor-pointer">
              <span>Onl </span>
              <span>- Follow -</span>
              <span className="text-red-500"> Me</span>
            </div>
          </div>
        </div>

        <div className="flex gap-5 font-bold">
          <button className="p-3 bg-gray-100 rounded-lg hover:text-white hover:bg-blue-500">
            Save
          </button>
          <button
            className={`flex justify-center items-center gap-2 p-3 bg-gray-100 rounded-lg hover:text-white hover:bg-blue-500`}
            onClick={() => handleLikeButton()}
          >
            <FaHeart /> Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
