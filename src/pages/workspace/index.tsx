import React, { MouseEventHandler, useState } from "react";
import styled from 'styled-components';
import "./index.scss"
import ScrollableContext from "./ScrollableContent";
import GridBackground from "./background";

const WorkspaceDiv = styled.div`
    background-color: #f9f9f9;
`;


const Workspace = () => {

    const [statusText, setStateText] = useState<string>('initial');

    const handleClickWorkspace = React.useCallback((e:React.MouseEvent) => {
        
        setStateText(`clientX:${e.clientX}, clientY:${e.clientY}, screenX: ${e.screenX}, screenY: ${e.screenY}`);
    }, []);

    return (
        <WorkspaceDiv className="workspace-container" onClick={handleClickWorkspace}>
            <div>status is: {statusText}</div>
            <ScrollableContext></ScrollableContext>
        </WorkspaceDiv>
    )
}

export default Workspace;