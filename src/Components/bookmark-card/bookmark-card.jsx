import Video from "../Video"

const BookmarkCard = ({bookmark}) => {
    const {id,video_id,time_start,time_end,img,} = bookmark;
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-centerpt-3">
            <img clasName="rounded-t-lg"
              src={img}
              w={"100%"}
              h={"200px"}
              rounded="5px"
              alt={id}/>
            </div>
            <div className="p-5">
                <a href="#">
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Hanau02_i3_438_rgb.mkv
                    </p>
                    </div>
        </div>
        );
}

export default BookmarkCard;

