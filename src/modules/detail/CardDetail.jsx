import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CardDetail = () => {
  return (
    <div className="relative rounded-md z-0">
      <div className="flex">
        <div className="w-[60%]">
          <LazyLoadImage
            effect="blur"
            src="https://file.hstatic.net/1000069970/file/black_theme_desk_aesthetics_for_your_31325574ef19480bba9db4c70c77d49c.jpg"
            alt="do more"
            className="w-full h-full rounded-lg"
          />
        </div>

        <div className="p-5 w-[40%] bg-gray-200 rounded-lg">
          <div className="flex justify-between">
            <h1 className="font-bold">Detail</h1>
            <ul className="flex gap-3">
              <li>Home</li>
              <li>Category</li>
              <li>Popular</li>
              <li>About</li>
            </ul>
            <p>Text</p>
          </div>

          <div className="px-10">
            <div className="flex pt-10">
              <div className="w-[60%]">
                <h1 className="font-bold text-2xl">
                  Een interieurervaring maakt het compleet
                </h1>
                <p className="text-sm py-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse gap-3 py-5">
              <div className="w-full">
                <p className="text-sm py-5">Lorem ipsum dolor</p>
              </div>
              <div>
                <LazyLoadImage
                  effect="blur"
                  src="https://file.hstatic.net/1000069970/file/black_theme_desk_aesthetics_for_your_31325574ef19480bba9db4c70c77d49c.jpg"
                  alt="do more"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-5">
              <div>
                <h1 className="font-bold text-xl">
                  Een interieurervaring maakt het compleet
                </h1>
                <p className="text-sm py-5">Lorem ipsum dolor</p>
              </div>
              <div>
                <LazyLoadImage
                  effect="blur"
                  src="https://file.hstatic.net/1000069970/file/black_theme_desk_aesthetics_for_your_31325574ef19480bba9db4c70c77d49c.jpg"
                  alt="do more"
                />
              </div>
            </div>

            <div>
              <div className="flex pt-10">
                <h1 className="font-bold text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Velit sunt ipsam explicabo deleniti delectus praesentium
                  commodi ullam eum ut amet architecto
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        <div className="absolute bottom-[-200px] left-[25%] bg-gray-200 w-[40%] rounded-lg shadow-2xl">
          <div className="p-5 w-full">
            <div className="flex justify-between">
              <h1 className="font-bold">Detail</h1>
              <ul className="flex gap-3">
                <li>Home</li>
                <li>Category</li>
                <li>Popular</li>
                <li>About</li>
              </ul>
              <p>Text</p>
            </div>

            <div className="px-10">
              <div className="flex pt-10">
                <div className="w-[60%]">
                  <h1 className="font-bold text-2xl">
                    Een interieurervaring maakt het compleet
                  </h1>
                  <p className="text-sm py-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>

              <div className="flex flex-row-reverse gap-3 py-5">
                <div className="w-full">
                  <p className="text-sm py-5">Lorem ipsum dolor</p>
                </div>
                <div>
                  <LazyLoadImage
                    effect="blur"
                    src="https://file.hstatic.net/1000069970/file/black_theme_desk_aesthetics_for_your_31325574ef19480bba9db4c70c77d49c.jpg"
                    alt="do more"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-5">
                <div>
                  <h1 className="font-bold text-xl">
                    Een interieurervaring maakt het compleet
                  </h1>
                  <p className="text-sm py-5">Lorem ipsum dolor</p>
                </div>
                <div>
                  <LazyLoadImage
                    effect="blur"
                    src="https://file.hstatic.net/1000069970/file/black_theme_desk_aesthetics_for_your_31325574ef19480bba9db4c70c77d49c.jpg"
                    alt="do more"
                  />
                </div>
              </div>

              <div>
                <div className="flex pt-10">
                  <h1 className="font-bold text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Velit sunt ipsam explicabo deleniti delectus praesentium
                    commodi ullam eum ut amet architecto
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
