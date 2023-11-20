import { buttonCategory } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setTypeBlog } from "../../features/blog/blogSlice";
import { setActiveButtonCategory } from "../../features/active/activeSlice";

const Category = () => {
  const dispatch = useDispatch()
  const activeButtonCategory = useSelector((state) => state.active.activeButtonCategory)


  return (
    <div className="hidden md:flex">
      {buttonCategory?.map((i, index) => (
        <button
          className={`px-5 p-2 rounded-lg ${activeButtonCategory === i.id ? 'bg-gray-300 ' : ''}`}
          key={index}
          onClick={() => {
            dispatch(setTypeBlog(i.name))
            dispatch(setActiveButtonCategory(i.id))
          }}
        >
          {i.name}
        </button>
      ))}
    </div>
  );
};

export default Category;
