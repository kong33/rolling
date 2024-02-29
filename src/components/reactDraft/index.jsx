import { convertToRaw, EditorState } from 'draft-js';
import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './styles.scss';

export default function Draft() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [text, setText] = useState(null);
  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
    let text = editorState.getCurrentContent().getPlainText('\u0001');
    setText(text);
  };

  return (
    <>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ['inline', 'list', 'textAlign', 'history'],
        }}
      />
    </>
  );
}
