import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, Router, routerPage} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Badge, Button, Color, Icon, Material, Text, Variant} from "@lab1/material";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageBadge extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildPlayground();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Badge', 'A badge is a useful way to wrap or overlay an action button or icon with a simple notification, making it easy to emphasize things like the number of notifications received.','PageBadge.tsx');

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Typescript', 'Badge-Typescript.ts', Shared.docTypescript,'white',Align.HorizontalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Managed Typescript', 'Badge-ManagedTS.ts', Shared.docManagedTS,'white',Align.HorizontalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Managed TSX', 'Badge-ManagedTSX.tsx', Shared.docManagedTSX,'white',Align.HorizontalCenter);
        this.layout4 = this.buildRowLayoutSection(columnLayout,'Playground','Badge-Playground.ts','Test all possible combinations below:','white',Align.HorizontalCenter);
    }

    buildTypescript() {
        //docStart Badge-Typescript.ts
        new Badge({
            parent: this.layout1,
            content: 3,
            overlap: true,
            color: Color.Default,
            className: 'mx-6 my-4',
            onClick: () => console.log('hi there!'),
            childContent: new Icon({
                icon: Material.Icons.Filled.Email,
                color: Color.Tertiary
            })
        });

        new Badge({
            parent: this.layout1,
            content: 100,
            overlap: true,
            color: Color.Info,
            className: 'mx-6 my-4',
            childContent: new Icon({
                icon: Material.Icons.Filled.Email,
                color: Color.Tertiary
            })
        });

        new Badge({
            parent: this.layout1,
            icon: Material.Icons.Filled.Favorite,
            color: Color.Tertiary,
            overlap: true,
            bordered: true,
            className: 'mx-6 my-4',
            childContent: new Button({
                color: Color.Info,
                variant: Variant.Filled,
                disableElevation: true,
                text: 'Friends'
            })
        });

        new Badge({
            parent: this.layout1,
            dot: true,
            color: Color.Info,
            className: 'mx-6 my-4',
            childContent: new Text({
                childContent: 'Messages'
            })
        })
        //docEnd
    }

    buildManagedTS() {
        //docStart Badge-ManagedTS.ts
        let managedContent = [
            Material.Badge({
                content: 3,
                overlap: true,
                color: Color.Default,
                className: 'mx-6 my-4',
                onClick: () => console.log('hi there!'),
                childContent: Material.Icon({
                    icon: Material.Icons.Filled.Email,
                    color: Color.Tertiary
                })
            }),
            Material.Badge({
                content: 100,
                overlap: true,
                color: Color.Info,
                className: 'mx-6 my-4',
                childContent: Material.Icon({
                    icon: Material.Icons.Filled.Email,
                    color: Color.Tertiary
                })
            }),
            Material.Badge({
                icon: Material.Icons.Filled.Favorite,
                color: Color.Tertiary,
                overlap: true,
                bordered: true,
                className: 'mx-6 my-4',
                childContent: Material.Button({
                    color: Color.Info,
                    variant: Variant.Filled,
                    disableElevation: true,
                    text: 'Friends'
                })
            }),
            Material.Badge({
                dot: true,
                color: Color.Info,
                className: 'mx-6 my-4',
                childContent: Material.Text({
                    childContent: 'Messages'
                })
            })
        ];

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Badge-ManagedTSX.tsx
        let managedContent = [
            <Badge content={3} overlap={true} color={Color.Default} className='mx-6 my-4' onClick={() => console.log('hi there!')}>
                <Icon icon={Material.Icons.Filled.Email} color={Color.Tertiary}/>
            </Badge>,
            <Badge content={100} overlap={true} color={Color.Info} className='mx-6 my-4'>
                <Icon icon={Material.Icons.Filled.Email} color={Color.Tertiary}/>
            </Badge>,
            <Badge icon={Material.Icons.Filled.Favorite} color={Color.Tertiary} overlap={true} bordered={true} className='mx-6 my-4'>
                <Button color={Color.Info} variant={Variant.Filled} disableElevation={true} text='Friends'/>
            </Badge>,
            <Badge dot={true} color={Color.Info} className='mx-6 my-4'>
                <Text>Messages</Text>
            </Badge>
        ];
        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildPlayground() {
        //docStart Badge-Playground.ts

        //docEnd
    }
}
