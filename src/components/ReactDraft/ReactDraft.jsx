import { EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { useEffect } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './ReactDraft.module.scss';

export default function ReactDraft() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [text, setText] = useState('');

  useEffect(() => {
    const currentText = editorState.getCurrentContent();
    const html = stateToHTML(currentText);
    setText(html);
  }, [editorState]);

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
      <input type="hidden" value={text} name="content" />
    </>
  );
}
