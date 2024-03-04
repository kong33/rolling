import { EditorState } from 'draft-js';
import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './ReactDraft.module.scss';

export default function ReactDraft() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
  };

  return (
    <>
      <Editor
        editorState={editorState}
        toolbarClassName={styles.editorClassName}
        wrapperClassName={styles.wrapperClassName}
        editorClassName={styles.editorClassName}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ['inline', 'list', 'textAlign'],
        }}
      />
    </>
  );
}
