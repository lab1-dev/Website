import {Route, RouterView, Window, Lab1, WindowProps} from "@lab1/core";
import {Theme} from "@lab1/material";
import {Home} from "./Home";
import {
    PageAlert, PageAppBar, PageAutoComplete, PageAvatar, PageBadge, PageBreadcrumbs, PageButton, PageCard, PageCarousel, PageChart, PageCheckBox, PageChip,
    PageChipSet, PageColorPicker, PageColumnLayout, PageContainer, PageDatePicker, PageDialog, PageDivider, PageDrawer, PageExpansionPanel, PageFabButton, PageField,
    PageFileUpload, PageFocusTrap, PageForm, PageGrid, PageGridLayout, PageHidden, PageHighlighter, PageIconButton, PageIcons, PageLink, PageListView, PageMenu,
    PageMessageBox, PageNavMenu, PageNumericField, PageOverlay, PagePagination, PagePaper, PagePopover, PageProgress, PageRadio, PageRating, PageRowLayout, PageScrollToTop,
    PageSelect, PageSimpleTable, PageSlider, PageSwitch, PageTabs, PageTests, PageTextField, PageTimeline, PageTimePicker, PageToolBar, PageTooltip, PageTreeView, PageTypography,
    PageTable, PageAnchorsLayout, PageDateTime, PageManagedTSX, PageManagedTS, PageTimeSpan, PageIntroduction, PageLawOfOne
} from "./Pages";

export class MainWindow extends Window {

    routes: Route[] = [
        {relativePath: "/", routerPage: Home},
        {relativePath: "/alert", routerPage: PageAlert},
        {relativePath: "/anchors", routerPage: PageAnchorsLayout},
        {relativePath: "/app-bar", routerPage: PageAppBar},
        {relativePath: "/auto-complete", routerPage: PageAutoComplete},
        {relativePath: "/avatar", routerPage: PageAvatar},
        {relativePath: "/badge", routerPage: PageBadge},
        {relativePath: "/breadcrumbs", routerPage: PageBreadcrumbs},
        {relativePath: "/button", routerPage: PageButton},
        {relativePath: "/card", routerPage: PageCard},
        {relativePath: "/carousel", routerPage: PageCarousel},
        {relativePath: "/chart", routerPage: PageChart},
        {relativePath: "/checkbox", routerPage: PageCheckBox},
        {relativePath: "/chips", routerPage: PageChip},
        {relativePath: "/chip-set", routerPage: PageChipSet},
        {relativePath: "/color-picker", routerPage: PageColorPicker},
        {relativePath: "/column-layout", routerPage: PageColumnLayout},
        {relativePath: "/container", routerPage: PageContainer},
        {relativePath: "/date-time", routerPage: PageDateTime},
        {relativePath: "/date-picker", routerPage: PageDatePicker},
        {relativePath: "/dialog", routerPage: PageDialog},
        {relativePath: "/divider", routerPage: PageDivider},
        {relativePath: "/drawer", routerPage: PageDrawer},
        {relativePath:"/expansion-panel", routerPage:PageExpansionPanel},
        {relativePath:"/field", routerPage:PageField},
        {relativePath:"/file-upload", routerPage:PageFileUpload},
        {relativePath:"/fab-button", routerPage:PageFabButton},
        {relativePath:"/focus-trap", routerPage:PageFocusTrap},
        {relativePath:"/form", routerPage:PageForm},
        {relativePath:"/grid", routerPage:PageGrid},
        {relativePath:"/grid-layout", routerPage:PageGridLayout},
        {relativePath:"/hidden", routerPage:PageHidden},
        {relativePath:"/highlighter", routerPage:PageHighlighter},
        {relativePath:"/icon", routerPage:PageIcons},
        {relativePath:"/icon-button", routerPage:PageIconButton},
        {relativePath:"/introduction", routerPage:PageIntroduction},
        {relativePath:"/law-of-one", routerPage:PageLawOfOne},
        {relativePath:"/link", routerPage:PageLink},
        {relativePath:"/listview", routerPage:PageListView},
        {relativePath:"/menu", routerPage:PageMenu},
        {relativePath:"/managed-ts", routerPage:PageManagedTS},
        {relativePath:"/managed-tsx", routerPage:PageManagedTSX},
        {relativePath:"/message-box", routerPage:PageMessageBox},
        {relativePath:"/nav-menu", routerPage:PageNavMenu},
        {relativePath:"/numeric-field", routerPage:PageNumericField},
        {relativePath:"/overlay", routerPage:PageOverlay},
        {relativePath:"/pagination", routerPage:PagePagination},
        {relativePath:"/paper", routerPage:PagePaper},
        {relativePath:"/popover", routerPage:PagePopover},
        {relativePath:"/progress", routerPage:PageProgress},
        {relativePath:"/radio", routerPage:PageRadio},
        {relativePath:"/rating", routerPage:PageRating},
        {relativePath:"/row-layout", routerPage:PageRowLayout},
        {relativePath:"/scroll-to-top", routerPage:PageScrollToTop},
        {relativePath:"/select", routerPage:PageSelect},
        {relativePath:"/simple-table", routerPage:PageSimpleTable},
        {relativePath:"/slider", routerPage:PageSlider},
        {relativePath:"/switch", routerPage:PageSwitch},
        {relativePath:"/table", routerPage:PageTable},
        {relativePath:"/tabs", routerPage:PageTabs},
        {relativePath:"/tests", routerPage:PageTests},
        {relativePath:"/text-field", routerPage:PageTextField},
        {relativePath:"/timeline", routerPage:PageTimeline},
        {relativePath:"/time-span", routerPage:PageTimeSpan},
        {relativePath:"/time-picker", routerPage:PageTimePicker},
        {relativePath:"/toolbar", routerPage:PageToolBar},
        {relativePath:"/tooltip", routerPage:PageTooltip},
        {relativePath:"/tree-view", routerPage:PageTreeView},
        {relativePath:"/typography", routerPage:PageTypography},
    ];
    public mainRouter?: RouterView;

    constructor(props: WindowProps = {parent: undefined, id: 'mainWindow'}) {
        super(props);

        new Theme({defaultScrollbar: false});

        this.mainRouter = new RouterView({parent: this, id: 'mainRouter'});
        this.mainRouter.prefix = '/';
        this.mainRouter.routes = this.routes;
        Lab1.obj.bootstrap({
            vRouter: this.mainRouter,
            captureLogs: true,
            dumpManagedAttributes:false,
            dumpManagedUpdates:false
        });
    }
}
