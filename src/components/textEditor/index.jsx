import React, { useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

function TextEditor() {
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ];

  const handleOnKeyDown ={
    //initial value 없애기 
     
  }
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable onKeyDown={handleOnKeyDown} />
    </Slate>
  );
}

export default TextEditor;
