import React, { useEffect, useState } from "react";

const Comments = (props) => {
  const { data = [] } = props;
  const [visibleReplies, setVisibleReplies] = useState(new Set());

  useEffect(() => {
    console.log(visibleReplies.keys);
  }, [visibleReplies]);
  return (
    <div className="flex flex-col justify-center items-start">
      {data.map((comment) => (
        <div
          key={comment?.id}
          className="ml-10 border-l-2 p-4 border-b-2 pb-0 mb-4 w-fit hover:border-red-400"
        >
          <div className="font-bold text-sm lg:text-base cursor-pointer text-indigo-400">
            {comment?.userName}
          </div>
          <div className="ml-2 text-xs lg:text-2xl p-2">{comment?.text}</div>
          {comment?.replyCount > 0 && (
            <div
              onClick={() => {
                setVisibleReplies((set) => {
                  const newSet = new Set([...set]);
                  if (set.has(comment?.id)) {
                    newSet.delete(comment?.id);
                  } else {
                    newSet.add(comment?.id);
                  }
                  return newSet;
                });
              }}
              className="ml-4 font-bold text-sm lg:text-base cursor-pointer text-gray-400"
            >
              Replies({comment?.replyCount}):
            </div>
          )}
          {visibleReplies.has(comment?.id) && comment?.replies && (
            <div className="mt-2">{<Comments data={comment?.replies} />}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Comments;
