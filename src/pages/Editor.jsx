import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';
import { EditorData } from '../data/dummy';

const Editor = () => (
	<div className="md:m-2 m-10 mt-24 md:p-2 p-10 bg-white rounded-3xl">
		<Header category="App" title="Editor" />
		<RichTextEditorComponent>
			<EditorData />
			<Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
		</RichTextEditorComponent>
	</div>
);
export default Editor;