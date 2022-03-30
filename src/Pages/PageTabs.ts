import {ColumnLayout, HorizontalAlign, Lab1, Layout, component, Property, Router, RouterPage, routerPage} from "@lab1/core";
import {Color, Material, Text, Position, TabPanel, Tabs} from '@lab1/material';
import {BasePage} from "./BasePage";

@routerPage()
@component
export class PageTabs extends BasePage {

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
    readonly activeIndex=new Property<number>(this,2);
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        //this.buildSimpleTab();
        // this.buildCentered();
        // this.buildScrollingTabs();
        // this.buildCustomScrollIcons();
        // this.buildTabsPosition();
        // this.buildIconTabs();
        // this.buildBadges();
        // this.buildTooltipTabs();
        // this.buildSetActivePanel();
        // this.buildBindingSelectedPanel();
        // this.buildSimpleDynamicTabs();
        // this.buildAdvancedDynamicTabs();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout,'Tabs','Tabs displays content divided by sections that can be selected by the User.');
        // this.layout1 = this.buildColumnLayout('Simple Tab', columnLayout);
        // this.layout2 = this.buildColumnLayout('Centered', columnLayout);
        // this.layout3 = this.buildColumnLayout('Scrolling Tabs', columnLayout);
        // this.layout4 = this.buildColumnLayout('Custom Scroll Icons', columnLayout);
        // this.layout5 = this.buildColumnLayout('Tabs Position', columnLayout);
        // this.layout6 = this.buildColumnLayout('Icon Tabs', columnLayout);
        // this.layout7 = this.buildColumnLayout('Badges', columnLayout);
        // this.layout8 = this.buildColumnLayout('Tooltip Tabs', columnLayout);
        //
        // this.layout9 = this.buildColumnLayout('Tooltip Tabs', columnLayout);
        // this.layout10 = this.buildColumnLayout('Tooltip Tabs', columnLayout);
        // this.layout11 = this.buildColumnLayout('Tooltip Tabs', columnLayout);
        // this.layout12 = this.buildColumnLayout('Tooltip Tabs', columnLayout);
    }

    buildTypescript(){

    }

    buildManagedTS(){

    }

    buildManagedTSX(){

    }

    buildSimpleTab() {
        new Tabs({
            parent: this.layout1,
            elevation: 2,
            rounded: true,
            applyEffectsToContainer: true,
            panelClass: 'pa-6',
            childContent: [
                new TabPanel({text: 'Tab One', childContent: 'Content One'}),
                new TabPanel({text: 'Tab Two', childContent: 'Content Two'}),
                new TabPanel({text: 'Tab Three', childContent: 'Content Three'}),
                new TabPanel({text: 'Tab Disabled', disabled: true, childContent: 'Content Disabled'})
            ]
        });
    }

    buildCentered() {
        new Tabs({
            parent: this.layout2,
            elevation: 4,
            rounded: true,
            color: Color.Primary,
            childContent: [
                new TabPanel({text: 'One'}),
                new TabPanel({text: 'Two'}),
                new TabPanel({text: 'Three'}),
            ]
        });
    }

    buildScrollingTabs() {
        new Tabs({
            parent: this.layout3,
            elevation: 4,
            rounded: true,
            color: Color.Secondary,
            childContent: [
                new TabPanel({text: 'One'}),
                new TabPanel({text: 'Two'}),
                new TabPanel({text: 'Three'}),
                new TabPanel({text: 'Four'}),
                new TabPanel({text: 'Five'}),
                new TabPanel({text: 'Six'}),
                new TabPanel({text: 'Seven'}),
                new TabPanel({text: 'Eight'}),
                new TabPanel({text: 'Nine'}),
                new TabPanel({text: 'Ten'}),
                new TabPanel({text: 'Eleven'}),
                new TabPanel({text: 'Twelve'}),
            ]
        });

        new Tabs({
            parent: this.layout3,
            elevation: 4,
            rounded: true,
            alwaysShowScrollButtons: true,
            color: Color.Info,
            className: 'mt-4',
            childContent: [
                new TabPanel({text: 'One'}),
                new TabPanel({text: 'Two'}),
                new TabPanel({text: 'Three'})
            ]
        });
    }

    buildCustomScrollIcons() {
        new Tabs({
            parent: this.layout4,
            elevation: 4,
            rounded: true,
            color: Color.Success,
            prevIcon: Material.Icons.Filled.SkipPrevious,
            nextIcon: Material.Icons.Filled.SkipNext,
            childContent: [
                new TabPanel({text: 'One'}),
                new TabPanel({text: 'Two'}),
                new TabPanel({text: 'Three'}),
                new TabPanel({text: 'Four'}),
                new TabPanel({text: 'Five'}),
                new TabPanel({text: 'Six'}),
                new TabPanel({text: 'Seven'}),
                new TabPanel({text: 'Eight'}),
                new TabPanel({text: 'Nine'}),
                new TabPanel({text: 'Ten'}),
                new TabPanel({text: 'Eleven'}),
                new TabPanel({text: 'Twelve'}),
            ]
        });
    }

    buildTabsPosition() {
        new Tabs({
            parent: this.layout5,
            outlined: true,
            position: Position.Left,
            rounded: true,
            border: true,
            applyEffectsToContainer: true,
            className: 'mt-8',
            panelClass: 'pa-6',
            childContent: [
                new TabPanel({text: 'ComponentBase One', childContent: 'Content One'}),
                new TabPanel({text: 'ComponentBase Two', childContent: 'Content Two'}),
                new TabPanel({text: 'ComponentBase Three', childContent: 'Content Three'}),
            ]
        });
    }

    buildIconTabs() {
        new Tabs({
            parent: this.layout6,
            outlined: true,
            childContent: [
                new TabPanel({text: 'Api', icon: Material.Icons.Filled.Api}),
                new TabPanel({icon: Material.Icons.Filled.Build}),
                new TabPanel({text: 'Bug Report', icon: Material.Icons.Filled.BugReport}),
            ]
        });
    }

    buildBadges() {
        new Tabs({
            parent: this.layout7,
            elevation: 2,
            rounded: true,
            centered: true,
            childContent: [
                new TabPanel({icon: Material.Icons.Filled.Api, badgeData: "'live", badgeColor: Color.Info}),
                new TabPanel({icon: Material.Icons.Filled.Build, badgeData: "'..."}),
                new TabPanel({icon: Material.Icons.Filled.BugReport, badgeData: "'99+", badgeColor: Color.Error}),
                new TabPanel({icon: Material.Icons.Filled.AccessTime, badgeData: "'", badgeDot: true, badgeColor: Color.Success}),
            ]
        });

        new Tabs({
            parent: this.layout7,
            elevation: 2,
            centered: true,
            className: 'my-6',
            color: Color.Dark,
            childContent: [
                new TabPanel({icon: Material.Icons.Filled.Api, text: 'API', badgeData: "'!", badgeColor: Color.Error}),
                new TabPanel({icon: Material.Icons.Filled.Build, text: 'Build', badgeData: '1', badgeColor: Color.Success}),
                new TabPanel({icon: Material.Icons.Filled.BugReport, text: 'Bugs', badgeData: 0}),
                new TabPanel({icon: Material.Icons.Filled.AccessTime, text: 'Timing', badgeDot: true, badgeColor: Color.Error}),
            ]
        });

        new Tabs({
            parent:this.layout7,
            rounded:true,
            centered:true,
            childContent:[
                new TabPanel({text:'API', badgeData:"'S"}),
                new TabPanel({text:'Build', badgeData:"'...", badgeColor:Color.Dark}),
                new TabPanel({text:'Bugs', badgeData:"'N"}),
                new TabPanel({text:'Timing', badgeDot:true, badgeColor:Color.Primary}),
            ]
        });
    }

    buildTooltipTabs() {
        new Tabs({
            parent:this.layout8,
            rounded:true,
            panelClass:'pa-6',
            childContent:[
                new TabPanel({text:'ComponentBase One', toolTip:'Tooltip One', childContent:'ComponentBase One'}),
                new TabPanel({text:'ComponentBase Two', toolTip:'Tooltip Two', childContent:'ComponentBase Two'}),
                new TabPanel({text:'ComponentBase Three', toolTip:'Tooltip Three', childContent:'ComponentBase Three'}),
            ]
        });
    }

    buildSetActivePanel() {
            //todo
    }

    buildBindingSelectedPanel() {
        new Tabs({
            parent:this.layout10,
            elevation:0,
            outlined:true,
            activePanelIndex:this.activeIndex,
            childContent:[
                new TabPanel({text:'ComponentBase One', id:'pn_one'}),
                new TabPanel({text:'ComponentBase Two', id:'pn_two'}),
                new TabPanel({text:'ComponentBase Three', id:'pn_three'})
            ]
        });
        new Text({parent:this.layout10,childContent:this.activeIndex})
    }

    buildSimpleDynamicTabs() {
        //todo
    }

    buildAdvancedDynamicTabs() {
        //todo
    }
}
