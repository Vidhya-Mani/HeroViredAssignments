import React from 'react';
import Container from '../Container/Container';
import Sidebar from '../Sidebar/Sidebar';
import Subheading from '../Subheading/Subheading';
import "./Content.css";


export default function Content() {
    return (
        <div className="content">
            <div className="sidebar">
                <Sidebar></Sidebar>

            </div>
            <div className="main_body">
                <Subheading></Subheading>
                <Container></Container>

            </div>
        </div>

    )
}