import { FaAngleDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setToggleSort } from "../../features/active/activeSlice";
import { setTypeBlog } from "../../features/blog/blogSlice";

const SortButton = () => {
  const dispatch = useDispatch();
  const toggleSort = useSelector((state) => state.active.toggleSort)
  
  return (
    <div className="relative z-10 md:hidden lg:block">
      <button
        className="flex justify-center items-center gap-3 border rounded-md px-5 py-2"
        onClick={() => dispatch(setToggleSort())}
      >
        Sort <FaAngleDown />
      </button>
      {toggleSort ? (
        <div className="absolute">
          <div className="flex flex-col w-[200px] mt-3 bg-white border rounded-sm">
            <button
              className="border-b hover:text-white hover:bg-blue-500"
              onClick={() => {
                dispatch(setToggleSort())
                dispatch(setTypeBlog('name'))
              }}
            >
              Sort by name
            </button>
            <button
              className="hover:text-white hover:bg-blue-500"
              onClick={() => {
                dispatch(setToggleSort())
                dispatch(setTypeBlog('like'))
              }}
            >
              Sort by like
            </button>
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default SortButton;
