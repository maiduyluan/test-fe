import { FaHeart } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import axios from "axios";

const Card = ({ id, name, like, active, comment }) => {
  const increasedLike = like + 1;

  const handleLikeApi = () => {
    axios
      .put(`http://localhost:3001/blogs/` + id, { Like: increasedLike })
      .then((res) => console.log("success", res))
      .catch((err) => console.log("err", err));
  };

  return (
    <div>
      <div className="flex justify-between px-2 py-2">
        <div className="flex gap-2">
          <div>
            <img
              src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
              alt="do more"
              className="h-[20px] rounded-full"
            />
          </div>
          <div className="font-bold text-sm">{name}</div>
        </div>

        <div className="flex gap-2 text-[12px]">
          <div className="flex justify-center items-center gap-1">
            <IoChatbox className={`cursor-pointer`} />
            <div>{comment}</div>
          </div>
          <div className="flex justify-center items-center gap-1">
            <FaHeart
              className={`cursor-pointer ${active}`}
              onClick={() => handleLikeApi()}
            />
            <div>{!!active ? increasedLike : like}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
