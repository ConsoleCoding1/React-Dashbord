import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
	return (
		<div className="md:m-2 m-10 mt-24 md:p-2 p-10 bg-white rounded-3xl">
			<Header category="App" title="Kanban" />
			<KanbanComponent
				id="kanbanboard"
				keyField="Status"
				allowDragAndDrop={true}
				dataSource={kanbanData}
				cardSettings={{contentField: 'Summary', headerField: 'ID'}}
			>
				<ColumnsDirective>
					{kanbanGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
					{/* headerText={item.headerText} keyField={item.keyField} allowToggle={item.allowToggle} */}
				</ColumnsDirective>
			</KanbanComponent>
		</div>
	)
}

export default Kanban
