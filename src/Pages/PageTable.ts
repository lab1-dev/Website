import {ColumnLayout, HorizontalAlign, Lab1, Layout, component, Property, Router, routerPage} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Color, Table, Td, Th} from "@lab1/material";
import {Breakpoint} from "@lab1/material/src/Enums/Breakpoint";

@routerPage()
@component
export class PageTable extends BasePage{

    //region fields and properties
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    layout6!: Layout
    layout7!: Layout
    layout8!: Layout
    layout9!: Layout
    layout10!: Layout
    layout11!: Layout
    layout12!: Layout
    layout13!: Layout
    layout14!: Layout
    layout15!: Layout
    layout16!: Layout
    loading=new Property(this,true);
    //endregion

    constructor(router:Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildDefaultTable();
        this.buildClickEvent();
        this.buildTableWithPaginationAndFiltering();
        this.buildTabPagerCustomization();
        this.buildSorting();
        this.buildMultiSelection();
        this.buildFixedHeaderAndFooter();
        this.buildColumnGroupAndTextAlignment();
        this.buildInlineEditMode();
        this.buildHeaderAndFooter();
        this.buildTableWithRelatedData();
        this.buildHorizontalScrolling();
        this.buildTableVirtualization();
        this.buildGrouping();
        this.buildGroupingInitiallyCollapsed();
        this.buildGroupingMultiLevels();

        this.buildEnd();
    }

    buildLayouts(){
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout,'Table','A sortable, filterable table with multiselection and pagination.');
        this.layout1 = this.buildColumnLayoutSection(columnLayout,'Default Table','Table-Default.ts');
        this.layout2 = this.buildColumnLayoutSection(columnLayout,'Click Event and display for selected Row',  'Table-Event.ts');
        this.layout3 = this.buildColumnLayoutSection(columnLayout,'Table with pagination and filtering',  'Table-Pagination.ts');
        this.layout4 = this.buildColumnLayoutSection(columnLayout,'TabPager Customization',  'Table-Pager.ts');
        this.layout5 = this.buildColumnLayoutSection(columnLayout,'Sorting',  'Table-Sorting.ts');
        this.layout6 = this.buildColumnLayoutSection(columnLayout,'Multi-Selection',  'Table-MultiSelection.ts');
        this.layout7 = this.buildColumnLayoutSection(columnLayout,'Fixed header and footer',  'Table-FixedHeader.ts');
        this.layout8 = this.buildColumnLayoutSection(columnLayout,'Column Group and Text Alignment',  'Table-ColumnGroup.ts');
        this.layout9 = this.buildColumnLayoutSection(columnLayout,'Inline Edit Mode',  'Table-InlineEdit.ts');
        this.layout10 = this.buildColumnLayoutSection(columnLayout,'Header and Footer',  'Table-HeaderAndFooter.ts');
        this.layout11 = this.buildColumnLayoutSection(columnLayout,'Table With related data',  'Table-Data.ts');
        this.layout12 = this.buildColumnLayoutSection(columnLayout,'Horizontal Scrolling',  'Table-Scrolling.ts');
        this.layout13 = this.buildColumnLayoutSection(columnLayout,'Table Virtualization',  'Table-Virtualization.ts');
        this.layout14 = this.buildColumnLayoutSection(columnLayout,'Grouping (Basic)',  'Table-Group.ts');
        this.layout15 = this.buildColumnLayoutSection(columnLayout,'Grouping (Basic) - Initially collapsed',  'Table-GroupCollapsed.ts');
        this.layout16 = this.buildColumnLayoutSection(columnLayout,'Grouping (Multi Levels)',  'Table-MultiLevels.ts');
    }

    buildTypescript(){

    }

    buildManagedTS(){

    }

    buildManagedTSX(){

    }

    buildDefaultTable(){
        new Table({
            hover:true,
            breakpoint:Breakpoint.Sm,
            loading:this.loading,
            loadingProgressColor:Color.Info,
            headerContent:[
                new Th({childContent:'Nr'}),
                new Th({childContent:'Sign'}),
                new Th({childContent:'Name'}),
                new Th({childContent:'Position'}),
                new Th({childContent:'Molar mass'})
            ],
            rowTemplate:[
                new Td({dataLabel:'Nr', childContent:'@context.Number'}),//todo ver o @context.Number
                new Td({dataLabel:'Sign', childContent:'@context.Sign'}),
                new Td({dataLabel:'Name', childContent:'@context.Name'}),
                new Td({dataLabel:'Position', childContent:'@context.Position'}),
                new Td({dataLabel:'Molar mass', childContent:'@context.Molar'}),
            ]
        });
    }

    buildClickEvent(){

    }

    buildTableWithPaginationAndFiltering(){

    }

    buildTabPagerCustomization(){

    }

    buildSorting(){

    }

    buildMultiSelection(){

    }

    buildFixedHeaderAndFooter(){

    }

    buildColumnGroupAndTextAlignment(){

    }

    buildInlineEditMode(){

    }

    buildHeaderAndFooter(){

    }

    buildTableWithRelatedData(){

    }

    buildHorizontalScrolling(){

    }

    buildTableVirtualization(){

    }

    buildGrouping(){

    }

    buildGroupingInitiallyCollapsed(){

    }

    buildGroupingMultiLevels(){

    }


}
