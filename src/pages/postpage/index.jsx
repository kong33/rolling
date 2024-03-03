import Dropdown from '../../components/Dropdown/Dropdown';
import Input from '../../components/Input/Input';

function PostPage() {
  let placeholder = [1, 2, 3];
  return (
    <>
      <Dropdown label="친구" name="ahdi" options={placeholder} />
      <Input placeholder="적어라" errorMassage="에러" />
    </>
  );
}

export default PostPage;
