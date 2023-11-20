import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CardBlog from "../../modules/home/CardBlog";
import { fetchUserData } from "../../features/service/blogData";

export const CardContainer = ({ item, activeLike, handleActiveLike }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Link
        to={`/detail/${item?.BlogID}`}
        onClick={() => dispatch(fetchUserData(item?.BlogID))}
      >
        <LazyLoadImage
          effect="blur"
          src={item?.Image}
          alt="do more"
          className="w-full rounded-xl shadow-lg"
        />
      </Link>
      <div onClick={() => handleActiveLike(item?.BlogID)}>
        <CardBlog
          id={item?.BlogID}
          name={item?.Name}
          like={item?.Like}
          comment={item?.Comment}
          active={activeLike?.includes(item?.BlogID) && "text-blue-500"}
        />
      </div>
    </div>
  );
};
