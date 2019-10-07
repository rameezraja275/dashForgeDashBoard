import React, { Component } from 'react';
import Nav from './nav';
import Content from './content'
import $ from 'jquery';
import FileJquery from './filemanagerJquery'

class FileManager extends Component {

    componentDidMount = () => {
        $(FileJquery)
          
    }
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