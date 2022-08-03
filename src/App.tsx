import { Button, Layout } from 'antd'
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Editor from './pages'
import DndTest from './pages/experiment';

const {Header, Content, Footer } = Layout;


function App() {

  let navigate = useNavigate();

  return (
    <Layout className="layout">
      <Header>
        <Button type="primary" onClick={ ()=>navigate('/') }>Home</Button>
        <Button type="primary" onClick={ ()=>navigate('/dnd') }>DndTest</Button>
      </Header>
      

      <Content>
        <Routes>
          <Route path="/" element={ <Editor/> }></Route>
          <Route path="/dnd" element={ <DndTest/> }></Route>
        </Routes>
      </Content>
      <Footer>
        Copyright
      </Footer>
    </Layout>
  ) 
}

export default App
