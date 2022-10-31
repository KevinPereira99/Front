import Video from "../Video"

const ScoreCard = ({score}) => {
    const {id,name,img, time_start, time_end, similarity_scores,video_id} = score;
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-centerpt-3">
            <img clasName="rounded-t-lg"
              src={img}
              w={"100%"}
              h={"200px"}
              rounded="5px"
              alt={video_id}/>
            </div>
            <div className="p-5">
                <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {video_id}
                    </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{name}
                    </p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">starting at: {time_start}
                    </p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ending at: {time_end}
                    </p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">With the similarity score of: {similarity_scores} 
                    </p>
                    </div>
        </div>
        );
}

export default ScoreCard;

