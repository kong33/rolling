// import { useState } from 'react';
// export default function getPostFetch(formDataForm) {
//   const handleSubmit = async (e) => {
//     const navigation = '';
//     e.preventDefault();
//     const formData = formDataForm;
//     // const formData = {
//     //   sender: e.target.sender.value || null,
//     //   team: '4-22',
//     //   recipientId: recipientId,
//     //   profileImageURL:
//     //     e.target.profileImageURL.value ||
//     //     'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg',
//     //   relationship: e.target.relationship.value || null,
//     //   content: e.target.content.value || null,
//     //   font: e.target.font.value || null,
//     // };

//     // console.log(formData);

//     try {
//       const response = await fetch(URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('실패');
//       }
//       const dataJson = await response.json();
//       navigation = `post/${dataJson.id}`;
//       //   navigate(`post/${dataJson.id}`);
//     } catch (error) {
//       alert(error);
//     }
//   };
//   return { handleSubmit, navigation };
// }
