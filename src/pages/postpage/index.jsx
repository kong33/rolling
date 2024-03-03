import Dropdown from '../../components/Dropdown/Dropdown';
function PostPage() {
  let placeholder = [1, 2, 3];
  return (
    <>
      <Dropdown label="친구" name="ahdi" options={placeholder} />
    </>
  );
}

export default PostPage;
