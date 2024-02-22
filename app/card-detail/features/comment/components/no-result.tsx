export { NoResult as CardDetailCommentNoResult };

const NoResult = () => {
  return (
    <div className="flex h-60 flex-col items-center justify-around text-gray-400">
      <p className="text-md font-bold">아직 댓글이 없어요.</p>
      <p className="text-md font-bold">가장 먼저 댓글을 남겨보세요.</p>
    </div>
  );
};
