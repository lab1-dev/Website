import {Lab1, AnchorsLayout, ColumnLayout, HorizontalAlign, routerPage, component, Anchor, Rectangle, Layout, Align} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
@component
export class PageAnchorsLayout extends BasePage {

    layout1!:Layout

    constructor() {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildUsage();

        this.buildEnd();
    }

    buildLayouts(){
        let columnLayout=new ColumnLayout({parent:this, horizontalAlign:HorizontalAlign.Center});
        this.buildHeader(columnLayout,'AnchorsLayout','Allows the User to position components easily using a combination of anchors (Left, Right, Top, Bottom, VerticalCenter, HorizontalCenter).',
            'PageAnchorsLayout.ts',`${Shared.urlCoreComponents}/AnchorLayout/AnchorsLayout.ts`);

        this.layout1 = this.buildRowLayoutSection(columnLayout,'Usage', 'AnchorsLayout-Usage.ts','','white',Align.HorizontalCenter);
    }

    buildUsage() {
        //docStart AnchorsLayout-Usage.ts
        let anchorLayout = new AnchorsLayout({
            parent: this.layout1,
            width: 1000,
            height: 700,
            backgroundColor: '#F5F5F5'
        })

        new Rectangle({
            id: 'topLeftRect',
            parent: anchorLayout,
            anchors: Anchor.Left,//by default, it's also top
            elevation:1,
            width: 100,
            height: 100,
            backgroundColor: 'white'
        })

        new Rectangle({
            id: 'bottomLeftRect',
            parent: anchorLayout,
            anchors: Anchor.Bottom | Anchor.Left,
            elevation:1,
            width: 100,
            height: 100,
            backgroundColor: 'white'
        })

        new Rectangle({
            id: 'topRightRect',
            parent: anchorLayout,
            anchors: Anchor.Top | Anchor.Right,
            elevation:1,
            width: 100,
            height: 100,
            backgroundColor: 'white'
        })

        new Rectangle({
            id: 'bottomRightRect',
            parent: anchorLayout,
            anchors: Anchor.Bottom | Anchor.Right,
            elevation:1,
            width: 100,
            height: 100,
            backgroundColor: 'white'
        })

        new Rectangle({
            id: 'topCenterRect',
            parent: anchorLayout,
            anchors: Anchor.Top | Anchor.HorizontalCenter,
            elevation:1,
            width: 100,
            height: 100,
            backgroundColor: 'white'
        });

        new Rectangle({
            id: 'bottomCenterRect',
            parent: anchorLayout,
            anchors: Anchor.Bottom | Anchor.HorizontalCenter,
            elevation:1,
            width: 100,
            height: 100,
            backgroundColor: 'white'
        });

        new Rectangle({
            id: 'leftCenterRect',
            parent: anchorLayout,
            anchors: Anchor.Left | Anchor.VerticalCenter,
            elevation:1,
            width: 100,
            height: 100,
            backgroundColor: 'white'
        });

        new Rectangle({
            id: 'rightCenterRect',
            parent: anchorLayout,
            anchors: Anchor.Right | Anchor.VerticalCenter,
            elevation:1,
            width: 100,
            height: 100,
            backgroundColor: 'white'
        });

        new Rectangle({
            id: 'centerRect',
            parent: anchorLayout,
            anchors: Anchor.HorizontalCenter | Anchor.VerticalCenter,
            elevation:1,
            width: 100,
            height: 100,
            backgroundColor: 'white'
        });
        //docEnd
    }

    onDestroy() {
        super.onDestroy();
        console.log('ondestroy do pageanchors');
    }

}
