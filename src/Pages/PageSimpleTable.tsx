import {ColumnLayout, HorizontalAlign, Lab1, Layout, Router, routerPage, tsx, ref, RowLayout,  Align} from "@lab1/core";
import {Button, Color, IconButton, Material, Paper, SimpleTable, Switch, ToolBar, Variant} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";
import {Employee, ServerAPI} from "../Codes/ServerAPI";

@routerPage()
export class PageSimpleTable extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    layout6!: Layout
    layout7!: Layout
    toolBar?: ToolBar
    @ref simpleTable1?: SimpleTable
    @ref simpleTable2?: SimpleTable
    employees:Employee[]=[];
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildHoverAndDense();
        this.buildOperations();
        this.buildFixedHeader();

        this.buildEnd();
    }

    async onAfterRender(firstRender: boolean = false) {
        super.onAfterRender(firstRender);
        if(!firstRender)return;

        let serverResponse=await new ServerAPI().getEmployees();
        if(serverResponse.status as any!='success')return console.log('Failed to retrieve data.');
        this.employees=serverResponse.data;
        this.buildOnAfterRender();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'SimpleTable', 'A Basic Material Design table with some features.','PageSimpleTable.tsx');

        this.layout1 = this.buildColumnLayoutSection(columnLayout, 'Typescript', 'SimpleTable-Typescript.ts', Shared.docTypescript, '#f5f5f5',true,Align.FillWidth);
        this.layout2 = this.buildColumnLayoutSection(columnLayout, 'Managed Typescript', 'SimpleTable-ManagedTS.ts', Shared.docManagedTS, '#f5f5f5',true,Align.FillWidth);
        this.layout3 = this.buildColumnLayoutSection(columnLayout, 'Managed TSX', 'SimpleTable-ManagedTSX.tsx', Shared.docManagedTSX, '#f5f5f5',true,Align.FillWidth);
        this.layout4 = this.buildColumnLayoutSection(columnLayout, 'Hover & Dense', 'SimpleTable-Hover.ts', 'Simple Table also supports <b>hover</b> and <b>dense</b> options.', '#f5f5f5',true,Align.FillWidth);
        this.layout5 = this.buildColumnLayoutSection(columnLayout, 'Add/Remove rows', 'SimpleTable-Rows.ts', "The following operations are supported: <b>addRow</b>, <b>insertRow</b>, <b>removeRow</b>, <b>replaceRow</b>, <b>removeFirstRow</b>, <b>removeLastRow</b>.", '#f5f5f5',true,Align.FillWidth);
        this.layout6 = this.buildColumnLayoutSection(columnLayout, 'Fixed Header', 'SimpleTable-FixedHeader.ts', 'Set <b>fixedHeader: true</b> to make the header sticky when scrolling the table. The table will scroll if you set style to height:250px, for instance.', '#f5f5f5',true,Align.FillWidth);
        this.layout7 = this.buildColumnLayoutSection(columnLayout, 'OnAfterRender', 'SimpleTable-OnAfterRender.ts', 'You can retrieve data using <b>async onAfterRender</b>', '#f5f5f5',true,Align.FillWidth);
    }

    buildTypescript() {
        //docStart SimpleTable-Typescript.ts
        let headers= ['ID', 'Name', 'Email', 'Gender', 'IP Address'];
        let rows = [['1', 'Vivien Harvey', 'sauer.lisette@cggup.com', 'Female', '192.168.1.1'],
            ['2', 'Sydnee Mills', 'tomas80@onlinecmail.com', 'Male', '192.168.1.2'],
            ['3', 'Bryon Leannon', 'philip29@noisemails.com', 'Male', '192.168.1.3'],
            ['4', 'Alexandra Howe', 'bheaney@stanford-edu.cf', 'Female', '192.168.1.3']];

        new SimpleTable({
            parent: this.layout1,
            style: 'overflow-x: auto;',
            headers: headers,
            rows: rows
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart SimpleTable-ManagedTS.ts
        let headers = ['ID', 'Name', 'Email', 'Gender', 'IP Address'];
        let rows = [['1', 'Vivien Harvey', 'sauer.lisette@cggup.com', 'Female', '192.168.1.1'],
            ['2', 'Sydnee Mills', 'tomas80@onlinecmail.com', 'Male', '192.168.1.2'],
            ['3', 'Bryon Leannon', 'philip29@noisemails.com', 'Male', '192.168.1.3'],
            ['4', 'Alexandra Howe', 'bheaney@stanford-edu.cf', 'Female', '192.168.1.3']];

        let managedContent = Material.SimpleTable({
            ref: this.simpleTable1,
            style: 'overflow-x: auto;',
            headers: headers,
            rows: rows
        });

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart SimpleTable-ManagedTSX.tsx
        let headers = ['ID', 'Name', 'Email', 'Gender', 'IP Address'];
        let rows = [['1', 'Vivien Harvey', 'sauer.lisette@cggup.com', 'Female', '192.168.1.1'],
            ['2', 'Sydnee Mills', 'tomas80@onlinecmail.com', 'Male', '192.168.1.2'],
            ['3', 'Bryon Leannon', 'philip29@noisemails.com', 'Male', '192.168.1.3'],
            ['4', 'Alexandra Howe', 'bheaney@stanford-edu.cf', 'Female', '192.168.1.3']];

        let managedContent = <SimpleTable ref={this.simpleTable2} style='overflow-x: auto;' headers={headers} rows={rows}/>

        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildHoverAndDense() {
        //docStart SimpleTable-Hover.ts
        let headers = ['ID', 'Name', 'Email', 'Gender', 'IP Address'];
        let rows = [['1', 'Vivien Harvey', 'sauer.lisette@cggup.com', 'Female', '192.168.1.1'],
            ['2', 'Sydnee Mills', 'tomas80@onlinecmail.com', 'Male', '192.168.1.2'],
            ['3', 'Bryon Leannon', 'philip29@noisemails.com', 'Male', '192.168.1.3'],
            ['4', 'Alexandra Howe', 'bheaney@stanford-edu.cf', 'Female', '192.168.1.3']];

        let table = new SimpleTable({
            parent: this.layout4,
            style: 'overflow-x: auto;',
            headers: headers,
            rows: rows
        });

        let rowLayout = new RowLayout({parent: this.layout4});
        new Switch({parent: rowLayout, color: Color.Info, text: 'Hover', onChange: (checked) => table.hover.value = checked});
        new Switch({parent: rowLayout, color: Color.Info, text: 'Dense', onChange: (checked) => table.dense.value = checked});
        new Switch({parent: rowLayout, color: Color.Info, text: 'Striped', onChange: (checked) => table.striped.value = checked});
        new Switch({parent: rowLayout, color: Color.Info, text: 'Bordered', onChange: (checked) => table.bordered.value = checked});
        //docEnd
    }

    buildOperations() {
        //docStart SimpleTable-Rows.ts
        let table: SimpleTable

        new Paper({
            parent: this.layout5,
            elevation: 25,
            childContent: new ToolBar({
                backgroundColor: 'white',
                width: 1200,
                dense: true,
                childContent: [
                    new IconButton({icon: Material.Icons.Outlined.Menu, color: Color.Inherit, marginLeft: 5}),
                    new Button({text: 'Add row', onClick: () => table?.addRow([table?.rows.length + 1, 'Hi there'])}),
                    new Button({text: 'Remove last', variant: Variant.Text, color: Color.Inherit, onClick: () => table?.removeLastRow()}),
                    new Button({text: 'Remove first', variant: Variant.Text, color: Color.Inherit, onClick: () => table?.removeFirstRow()}),
                    new Button({text: 'Replace first', variant: Variant.Text, color: Color.Inherit, onClick: () => table?.replaceRow(1, ['12', 'Hello'])}),
                    new Button({text: 'Remove second', variant: Variant.Text, color: Color.Inherit, onClick: () => table?.removeRow(2)}),
                    new Button({text: 'Insert into second', variant: Variant.Text, color: Color.Inherit, onClick: () => table?.insertRow(2, ['2', 'Inserted content'])})
                ]
            })
        });

        let headers = ['ID', 'Name', 'Email', 'Gender', 'IP Address'];
        let rows = [['1', 'Vivien Harvey', 'sauer.lisette@cggup.com', 'Female', '192.168.1.1'],
            ['2', 'Sydnee Mills', 'tomas80@onlinecmail.com', 'Male', '192.168.1.2'],
            ['3', 'Bryon Leannon', 'philip29@noisemails.com', 'Male', '192.168.1.3'],
            ['4', 'Alexandra Howe', 'bheaney@stanford-edu.cf', 'Female', '192.168.1.3']];

        table = new SimpleTable({
            parent: this.layout5,
            style: 'overflow-x: auto;',
            headers: headers,
            rows: rows
        });
        //docEnd
    }

    buildFixedHeader() {
        //docStart SimpleTable-FixedHeader.ts
        let headers = ['ID', 'Name', 'Email', 'Gender', 'IP Address'];
        let rows = [['1', 'Vivien Harvey', 'sauer.lisette@cggup.com', 'Female', '192.168.1.1'],
            ['2', 'Sydnee Mills', 'tomas80@onlinecmail.com', 'Male', '192.168.1.2'],
            ['3', 'Bryon Leannon', 'philip29@noisemails.com', 'Male', '192.168.1.3'],
            ['4', 'Alexandra Howe', 'bheaney@stanford-edu.cf', 'Female', '192.168.1.3'],
            ['5', 'Burley Orn', 'nolan.beaulah@mamasuna.com', 'Male', '192.168.1.4'],
            ['6', 'Johan Reilly', 'spencer.aditya@melowsa.com', 'Male', '192.168.1.5'],
            ['7', 'Sabina Erdman', 'nrice@gamakang.com', 'Female', '192.168.1.6'],];

        let table = new SimpleTable({
            parent: this.layout6,
            hover: true,
            headers: headers,
            rows: rows
        });

        let rowLayout = new RowLayout({parent: this.layout6});
        new Switch({parent: rowLayout, color: Color.Info, text: 'Fixed Header', onChange: (checked) => {
                table.fixedHeader.value = checked;
                table.style.value = checked ? 'height:250px' : '';
            }
        });
        //docEnd
    }

    buildOnAfterRender(){
        //docStart SimpleTable-OnAfterRender.ts
        /** onAfterRender content sample
        async onAfterRender(firstRender: boolean = false) {
            super.onAfterRender(firstRender);
            if(!firstRender)return;

            let serverResponse=await new ServerAPI().getEmployees();
            if(serverResponse.status as any!='success')return console.log('Failed to retrieve data.');
            this.employees=serverResponse.data;
            this.buildTable();
        }
         //buildTable() content below:
         */
        let headers= ['ID', 'Name', 'Salary', 'Age', 'Picture'];
        let rows=this.employees.map(tag => Object.values(tag))

        new SimpleTable({
            parent: this.layout7,
            style: 'overflow-x: auto;',
            headers: headers,
            rows: rows
        });
        //docEnd
    }
}
