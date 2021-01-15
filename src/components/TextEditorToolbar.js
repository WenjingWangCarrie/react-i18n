import React from "react"; 
import { Quill } from "react-quill";  
import "../fonts.css";

var FontAttributor = Quill.import('formats/font');
var fonts = ['impact', 'courier', 'comic']; 
FontAttributor.whitelist = fonts;
Quill.register(FontAttributor, true);

const Font = Quill.import("formats/font");
Font.whitelist = ["impact", "courier", "comic"];
Quill.register(Font, true);

export const modules = {
	toolbar: {
		container: "#toolbar"
	}
};

export const formats = [
	"header", "font", "size", "bold", "italic",
	"underline", "align", "strike", "script",
	"blockquote", "color", "background", "list", "bullet",
	"indent", "link", "image", "code-block"
];

export const TextEditorToolbar = () => (
	<div id="toolbar">
		<span className="ql-formats">
			<select className="ql-font" defaultValue="comic">
				<option value="impact">impact</option> 
				<option value="courier">courier</option>
				<option value="comic">comic</option> 
			</select>
			<select className="ql-size" defaultValue="medium"> 
				<option value="small">Small</option>
				<option value="medium">Medium</option>
				<option value="large">Large</option>
				<option value="huge">Extra Large</option>
			</select>
			<select className="ql-header" defaultValue="3">
				<option value="1">24</option>
				<option value="2">18</option>
				<option value="3">12</option>
			</select>
		</span>

		<span className="ql-formats">
			<button className="ql-bold"></button>
			<button className="ql-italic"></button>
			<button className="ql-underline"></button>
			<button className="ql-strike"></button>
		</span>
		<span className="ql-formats">
			<button className="ql-list" value="ordered"></button>
			<button className="ql-list" value="bullet"></button>
			<button className="ql-indent" value="-1"></button>
			<button className="ql-indent" value="+1"></button>
		</span>
		<span className="ql-formats">
			<button className="ql-align" value=""></button>
			<button className="ql-align" value="center"></button>
			<button className="ql-align" value="right"></button>
		</span>
		<span className="ql-formats">
			<button className="ql-script" value="super"></button>
			<button className="ql-script" value="sub"></button>
			<button className="ql-blockquote"></button>  
		</span>

		<span className="ql-formats">
			<select className="ql-color"> 
				<option value="rgb(0, 0, 0)"></option>
				<option value="rgb(230, 0, 0)"></option>
				<option value="rgb(255, 153, 0)"></option>
				<option value="rgb(255, 255, 0)"></option>
				<option value="rgb(0, 138, 0)"></option>
				<option value="rgb(0, 102, 204)"></option> 
				<option value="rgb(153, 51, 255)"></option>
				<option value="rgb(255, 255, 255)"></option> 
				<option value="rgb(250, 204, 204)"></option> 
				<option value="rgb(204, 224, 245)"></option> 
				<option value="rgb(187, 187, 187)"></option> 
			</select>
			<select className="ql-background"> 
				<option value="rgb(0, 0, 0)"></option>
				<option value="rgb(230, 0, 0)"></option>
				<option value="rgb(255, 153, 0)"></option>
				<option value="rgb(255, 255, 0)"></option>
				<option value="rgb(0, 138, 0)"></option>
				<option value="rgb(0, 102, 204)"></option> 
				<option value="rgb(153, 51, 255)"></option>
				<option value="rgb(255, 255, 255)"></option> 
				<option value="rgb(250, 204, 204)"></option> 
				<option value="rgb(204, 224, 245)"></option> 
				<option value="rgb(187, 187, 187)"></option> 
			</select>
		</span> 
		
		<span className="ql-formats">
			<button className="ql-link"></button>
			<button className="ql-image"></button> 
			<button className="ql-code-block"></button>
			<button className="ql-clean"></button> 
		</span> 
	</div>
);

export default TextEditorToolbar;
