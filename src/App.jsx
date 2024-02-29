import Input from './components/input';
import DropDown from './components/dropdown';
function App() {
  let a = [123, 123, 234, 345];
  return (
    <>
      <Input placeholder="플레이스호더" errorMassage="에러다"></Input>
      <DropDown label="친구" name="친구" placeholders={a} />
    </>
  );
}

export default App;
