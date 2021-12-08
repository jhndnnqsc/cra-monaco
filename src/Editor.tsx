import React, { Component } from 'react';
import * as monaco from 'monaco-editor';

// @ts-ignore
// @ts-ignore
window.MonacoEnvironment = {
	getWorkerUrl: function (_moduleId: any, label: string) {
		if (label === 'json') {
			return './json.worker.bundle.js';
		}
		if (label === 'css' || label === 'scss' || label === 'less') {
			return './css.worker.bundle.js';
		}
		if (label === 'html' || label === 'handlebars' || label === 'razor') {
			return './html.worker.bundle.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.bundle.js';
		}
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
		monaco.editor.create(this.myRef.current, {
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
