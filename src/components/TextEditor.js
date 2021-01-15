import React from "react"; 
import ReactQuill from "react-quill"; 
import "react-quill/dist/quill.snow.css";
import TextEditorToolbar, { modules, formats } from "./TextEditorToolbar";  

export const TextEditor = () => {

	const [state, setState] = React.useState({ value: null });
	const handleChange = value => {
		setState({ value });
	};

	return(
		<div className="text-editor"><br></br>
			<TextEditorToolbar />
			
			<ReactQuill 
				theme="snow"
				value={state.value}
				onChange={handleChange}
				placeholder={"Write something..."}
				modules={modules}
				formats={formats}
			/>
		</div>
	);
};

export default TextEditor;