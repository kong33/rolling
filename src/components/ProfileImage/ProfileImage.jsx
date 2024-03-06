import Avatar from '../Avatar/Avartar';
import { useState } from 'react';

const SIZE = {
  sm: 'sm', // 56px
  md: 'md', // 80px
};
const profile1 =
  'https://i.namu.wiki/i/lpPvaGEQL-Z_WPp_HLdeW_Yd9H8kSFp2642KBoSNE_gIrn5mBGZeCP71fYVeJDrACTQpkZzfynNX68EIT3ZaoI3Lc-FsSEY1w3JKjXdmwbGlreHPq7-mdcRS1RSx4VTt3tZN9nnuznsboNPNyAX90g.webp';
const profile2 =
  'https://i.namu.wiki/i/UTOq11GtqLrCArGirbl1kz4Rzl0s2v0pKMGdntgzUTzyT9e6mZoY00U06znwF3VSAeZcn4_X_MZlZ6N_j4bOSg.webp';
const profile3 =
  'https://i.namu.wiki/i/LC4QG7moKnyEMLVpt5wMWv3T8NrvvyL4_QniTvxNYQwqLPp-N9m_n5mURAw8odOHidsBclqpbOTjg1t6hk6GV01lZoErlUcJ6TT7-nXAMWZCrQdeF_1DvgblAeUUzSM1pu7ydAYEWTwgGvyrl2zAJg.webp';
const profile4 =
  'https://i.namu.wiki/i/XbplmPyRnfUmxj-XXSi1SR05XBWTbic8Cn8AKht-GM211ymzt-LeYQR4a_cYFuzuz_Jf3yxmnAddjDoqH0AltLBtakVEE3ybv-VNDnKTjiq-R9CKKDBgCcIxMye0dJc77eCeLATSD6bDlVeMRTWiQg.webp';
export default function ProfileImage() {
  const [imageUrl, setImageUrl] = useState(''); // 내가 올린 ㅕurl
  const [choosedImg, setChoosedImg] = useState(''); // 있는 것 중에 choose
  const PROFILEIMAGE = [profile1, profile2, profile3, profile4];

  const handleImageLoad = (e) => {
    const { files } = e.target;
    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };
  const handleClick = (image) => {
    setChoosedImg(image);
  };
  console.log(imageUrl, choosedImg);
  return (
    <div>
      <Avatar src={imageUrl || choosedImg} size={SIZE.md} />
      <section>
        {PROFILEIMAGE.map((image) => (
          <Avatar src={image} onClick={() => handleClick(image)} key={image} />
        ))}
      </section>
      <input type="file" accept="image/*" onChange={handleImageLoad} />
      <input
        type="hidden"
        name="profileImageURL"
        value={imageUrl || choosedImg}
      />
    </div>
  );
}
