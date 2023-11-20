import Category from "../modules/home/Category";
import SortButton from "../modules/home/SortButton";
import ScrollTopButton from "../components/ScrollTopButton";
import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CardContainer } from "../modules/home/CardContainer";
import { fetchListDataPaging } from "../features/service/blogData";
import { io } from "socket.io-client";
import { setNewBlog } from "../features/service/blogData";

const socket = io("http://localhost:3001");

const HomePage = () => {
  const dispatch = useDispatch();

  const [activeLike, setActiveLike] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const typeBlog = useSelector((state) => state.blogType.typeBlog);
  const data = useSelector((state) => state.blogData.list);
  const isFullList = useSelector((state) => state.blogData.isFullList);

  const sortName = data?.slice().sort((a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1));
  const sortLike = data?.slice().sort((a, b) => b.Like - a.Like);

  let dataRender =
    typeBlog === "All" ? data : data?.filter((item) => item.Title === typeBlog);

  if (typeBlog === "name") dataRender = sortName;
  if (typeBlog === "like") dataRender = sortLike;

  useEffect(() => {
    socket.on("client-have-new-blog", (data) => {
      dispatch(setNewBlog(data));
    });

    return () => {
      socket.off("client.have-new-blog");
    };
  }, []);

  const handleActiveLike = (id) => {
    setActiveLike((prev) => {
      const isChecked = activeLike.includes(id);
      if (isChecked) {
        return activeLike.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const loadMore = async (page) => {
    if (isFullList) {
      return console.log("stop");
    }

    await dispatch(fetchListDataPaging(page));
    setIsLoading(false);
  };

  return (
    <div>
      <div className="flex justify-between">
        <SortButton />
        <Category />
      </div>
      <InfiniteScroll
        pageStart={-1}
        loadMore={loadMore}
        hasMore={!isLoading}
        useWindow={true}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl: xl:grid-cols-5  py-10 gap-10">
          {dataRender.map((item, index) => (
            <CardContainer
              key={index}
              item={item}
              activeLike={activeLike}
              handleActiveLike={handleActiveLike}
            />
          ))}
          <ScrollTopButton />
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default HomePage;
