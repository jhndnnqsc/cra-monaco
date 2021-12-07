import React, { Component } from 'react';
import * as monaco from 'monaco-editor';

// @ts-ignore
window.MonacoEnvironment = {
	getWorkerUrl: function (_moduleId: any, label: string) {
		return './editor.worker.bundle.js';
	}
};

class Editor extends Component
{
	myRef;

	constructor(props) {
    super(props);
		this.myRef = React.createRef();
	}

	componentDidMount() {
		let editor: monaco.editor.IStandaloneCodeEditor;

		editor = monaco.editor.create(this.myRef.current, {
			value: ['function x() {', '\tconsole.log("Hello world2!");', '}'].join('\n'),
			language: 'typescript'
		});
	}

	render() {
		return <div className="Editor"
		  style={{ boxSizing:'border-box', overflow:'hidden', width:'100%', height:'100vh', backgroundColor: '#1e1e1e' }}
	    ref={this.myRef}></div>;
	}
}
export default Editor;
