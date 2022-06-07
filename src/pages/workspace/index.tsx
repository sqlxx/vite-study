import React, { useState } from "react";
import styled from 'styled-components';
import "./index.scss"
import ScrollableContext from "./ScrollableContent";

const WorkspaceDiv = styled.div`
    background-color: #f9f9f9;
`;


const Workspace = () => {

    const [statusText, setStateText] = useState<string>('initial');

    const handleClickWorkspace = React.useCallback((e) => {
    
        setStateText(JSON.stringify(e));
    }, []);

    return (
        <WorkspaceDiv className="workspace-container" onClick={handleClickWorkspace}>
            <div>status is: {statusText}</div>
            <ScrollableContext></ScrollableContext>
        </WorkspaceDiv>
    )
}

export default Workspace;