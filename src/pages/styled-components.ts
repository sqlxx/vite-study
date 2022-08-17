import styled from 'styled-components';

export const EditorWrap = styled.div`
    .ant-spin-container {
        height: 100vh;
    }
`;

export const EditorStyle = styled.div`
    width: 100%;
    height: 100%;

    display: flex;

    .sidebar-container {
        height: 100%;
        overflow-y: auto;
        width: 175px;
        flex: 0 0 auto;
        border-right: 1px solid #eee;
    }

    .properties-editor-container {
        height: 100%;
        overflow-y: auto;
        width: 320px;
        flex: 0 0 auto;
        padding: 8px;
        border-left: 1px solid #eee;
    }

    .workspace-container {
        flex-grow: 1;

        .edge-cavas-container {
            pointer-events: none;
        }
    }
`;