import React from 'react';
import { EditorStyle, EditorWrap } from './styled-components';
import Workspace from './workspace';
import ScrollableContext from './workspace/ScrollableContent';
import { Button, Col, Row } from 'antd';
import Sidebar from './sidebar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Editor = () => {
    
    return (
        <DndProvider backend={HTML5Backend}>
            <EditorWrap>
                <Row>
                    <Col span={2}>
                        <EditorStyle className="sidebar-container">
                            <Sidebar/>
                        </EditorStyle>
                    </Col>
                    <Col span={22}>
                        <EditorStyle className="editor-container">
                            <Workspace></Workspace>
                        </EditorStyle>
                    </Col>
                </Row>
            </EditorWrap>
        </DndProvider>
    )
}


export default Editor;