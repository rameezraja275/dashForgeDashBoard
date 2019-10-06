import React, { Component } from 'react';
import Nav from './nav';
import Content from './content'

class FileManager extends Component {
    render() {
        return (
            <div className="filemgr-wrapper filemgr-wrapper-two">
                <Nav />
                <Content />
            </div>
        );
    }
}

export default FileManager;