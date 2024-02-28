const Reactions = ({ Reactions }) => {
  const { emoji, count } = Reactions;
  return (
    <div>
      <p>{emoji}</p>
      <p>{count}</p>
    </div>
  );
};

export default Reactions;
