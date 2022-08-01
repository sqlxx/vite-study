import React from 'react';
import { EditorDiv, EditorWrap } from './styled-components';
import Workspace from './workspace';
import ScrollableContext from './workspace/ScrollableContent';
import { Button } from 'antd';

const Editor = () => {
    
    return (
        <EditorWrap>
            <EditorDiv className="editor-container">
                <Workspace></Workspace>
            </EditorDiv>
        </EditorWrap>
    )
}


export default Editor;