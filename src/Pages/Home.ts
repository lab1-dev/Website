import {ColumnLayout, Lab1, Router, RouterPage, routerPage} from "@lab1/core"
import {Button,  ListView, ListItem, Paper} from "@lab1/material"

@routerPage()
export class Home extends RouterPage {

    columnLayout: ColumnLayout;

    constructor(private router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.columnLayout = new ColumnLayout({
            parent: this,
            width: 288,
            spacing: 12
        });

        let paper=new Paper({
            parent:this.columnLayout,
            width:200,
        });

        new ListView({
            parent: paper,
            clickable: true,
            dense: true,
            width:200,
            onItemClick:(listItem)=>this.router.navigate(listItem.value.value),
            childContent: [
                this.buildItem('Introduction', '/introduction'),
                this.buildCoreComponents(),
                this.buildItem('AutoComplete', '/auto-complete'),
                this.buildItem('Avatar', '/avatar'),
                this.buildItem('Badge', '/badge'),
                //this.buildItem('Dialog', '/dialog'),
                this.buildButtons(),
                this.buildItem('Checkbox', '/checkbox'),
                this.buildItem('Chip', '/chips'),
                this.buildItem('Divider', '/divider'),
                this.buildItem('Grid', '/grid'),
                this.buildItem('ListView', '/listview'),
                this.buildItem('Menu', '/menu'),
                //this.buildItem('Overlay', '/overlay'),
                this.buildItem('Pagination', '/pagination'),
                this.buildItem('Paper', '/paper'),
                //this.buildPickers(),
                this.buildItem('Popover', '/popover'),
                this.buildItem('Progress', '/progress'),
                this.buildItem('Radio', '/radio'),
                this.buildItem('Rating', '/rating'),
                this.buildItem('Select', '/select'),
                this.buildItem('Slider', '/slider'),
                this.buildItem('SimpleTable', '/simple-table'),
                this.buildItem('Switch', '/switch'),
                // this.buildItem('Table', '/table'),
                // this.buildItem('Tabs', '/tabs'),
                this.buildItem('TextField', '/text-field'),
                this.buildItem('ToolBar', '/toolbar'),
                //this.buildItem('Tooltip', '/tooltip'),
                // this.buildItem('TreeView', '/tree-view'),
                //this.buildTestPages(),
            ]
        });
    }

    buildButtons():ListItem{
        return new ListItem({
            text: 'Buttons',
            initiallyExpanded: false,//todo not working
            nestedList: new ListView({
                dense:true,
                childContent: [
                    this.buildItem('Button', '/button'),
                    this.buildItem('FabButton', '/fab-button'),
                    this.buildItem('IconButton', '/icon-button'),
                ]
            })
        });
    }

    buildCoreComponents():ListItem{
        return new ListItem({
            text: 'Core package',
            initiallyExpanded: false,
            nestedList: new ListView({
                dense:true,
                childContent: [
                    this.buildItem('AnchorsLayout', '/anchors'),
                    this.buildItem('RowLayout', '/row-layout'),
                    this.buildItem('ColumnLayout', '/column-layout'),
                    this.buildItem('GridLayout', '/grid-layout'),
                    this.buildItem('DateTime', '/date-time'),
                    this.buildItem('TimeSpan', '/time-span'),
                ]
            })
        });
    }

    buildTestPages():ListItem{
        return new ListItem({
            text: 'Tests',
            initiallyExpanded: false,
            nestedList: new ListView({
                dense:true,
                childContent: [
                    this.buildItem('Managed TS', '/managed-ts'),
                    this.buildItem('Managed TSX', '/managed-tsx'),
                    this.buildItem('Tests', '/tests'),
                ]
            })
        });
    }

    buildPickers():ListItem{
        return new ListItem({
            text: 'Pickers',
            initiallyExpanded: false,
            nestedList: new ListView({
                dense:true,
                childContent: [
                    this.buildItem('Date Picker', '/date-picker'),
                    this.buildItem('Time Picker', '/time-picker'),
                ]
            })
        });
    }

    buildItem(text: string, route: string): ListItem {
        return new ListItem({value: route, text: text});
    }
}
