import React from "react";
import styled from 'styled-components';
import "./index.scss"
import ScrollableContext from "./ScrollableContent";

const WorkspaceDiv = styled.div`
    background-color: #f9f9f9;
`;

const Workspace = () => {

    return (
        <WorkspaceDiv className="workspace-container">
            <ScrollableContext></ScrollableContext>
        </WorkspaceDiv>
    )
}

export default Workspace;