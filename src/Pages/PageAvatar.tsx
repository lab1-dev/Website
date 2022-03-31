import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, Router, routerPage} from "@lab1/core";
import {Avatar, Color, CustomIcons, Icon, Material, Size, Variant} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageAvatar extends BasePage {

    //region fields
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
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildOutlined();
        this.buildIcons();
        this.buildImages();
        this.buildSizes();
        this.buildShapes();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Avatar', 'The component is typically used to display circular user profile pictures, icons or text.','PageAvatar.tsx',
            `${Shared.urlMaterialComponents}/Avatar/Avatar.ts`);

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Typescript', 'Avatar-Typescript.ts', Shared.docTypescript,'white',Align.HorizontalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Managed Typescript', 'Avatar-ManagedTS.ts', Shared.docManagedTS,'white',Align.HorizontalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Managed TSX', 'Avatar-ManagedTSX.tsx', Shared.docManagedTSX,'white',Align.HorizontalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout, 'Outlined', 'Avatar-Outlined.ts', 'By default, the avatar is filled but can be changed with the variant property.','white',Align.HorizontalCenter);
        this.layout6 = this.buildRowLayoutSection(columnLayout, 'Icons', 'Avatar-Icons.ts', 'To create an icon avatar, just add a Material Icon inside it.','white',Align.HorizontalCenter);
        this.layout7 = this.buildRowLayoutSection(columnLayout, 'Images', 'Avatar-Images.ts', "Avatars can display images as well, using <b>image</b> property. You can also set the <b>alt</b> property to provide the alternative text description for the image to help with accessibility or when the image url isn't valid.",'white',Align.HorizontalCenter);
        this.layout8 = this.buildRowLayoutSection(columnLayout, 'Sizes', 'Avatar-Sized.ts', 'You can change the size with a pre-defined <b>size</b> property or change the width and height in CSS.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout9 = this.buildRowLayoutSection(columnLayout, 'Shapes', 'Avatar-Shapes.ts', 'Border can be change using <b>rounded</b> and <b>square</b> properties.','white',Align.HorizontalCenter);
    }

    buildTypescript() {
        //docStart Avatar-Typescript.ts
        new Avatar({
            parent: this.layout1,
            color: Color.Info,
            text: 'L'
        });

        new Avatar({
            parent: this.layout1,
            color: Color.Secondary,
            text: 'A'
        });

        new Avatar({
            parent: this.layout1,
            color: Color.Tertiary,
            text: 'B'
        });

        new Avatar({
            parent: this.layout1,
            color: Color.Success,
            text: '1'
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Avatar-ManagedTS.ts
        let managedContent = [
            Material.Avatar({
                color: Color.Info,
                text: 'L'
            }),
            Material.Avatar({
                color: Color.Secondary,
                text: 'A'
            }),
            Material.Avatar({
                color: Color.Tertiary,
                text: 'B'
            }),
            Material.Avatar({
                color: Color.Success,
                text: '1'
            })
        ];
        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Avatar-ManagedTSX.tsx
        let managedContent = [
            <Avatar color={Color.Info} text='L'/>,
            <Avatar color={Color.Secondary} text='A'/>,
            <Avatar color={Color.Tertiary} text='B'/>,
            <Avatar color={Color.Success} text='1'/>,
        ];
        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildOutlined() {
        //docStart Avatar-Outlined.ts
        new Avatar({
            parent: this.layout5,
            color: Color.Info,
            variant: Variant.Outlined,
            text: 'L'
        });

        new Avatar({
            parent: this.layout5,
            color: Color.Success,
            variant: Variant.Outlined,
            text: 'A'
        });

        new Avatar({
            parent: this.layout5,
            color: Color.Warning,
            variant: Variant.Outlined,
            text: 'B'
        });

        new Avatar({
            parent: this.layout5,
            color: Color.Success,
            variant: Variant.Outlined,
            text: '1'
        });
        //docEnd
    }

    buildIcons() {
        //docStart Avatar-Icons.ts
        new Avatar({
            parent: this.layout6,
            color: Color.Info,
            square: true,
            variant: Variant.Outlined,
            childContent: new Icon({color: Color.Info, icon: CustomIcons.Uncategorized.Folder, size: Size.Large})
        });

        new Avatar({
            parent: this.layout6,
            color: Color.Primary,
            variant: Variant.Outlined,
            childContent: new Icon({icon: CustomIcons.Brands.GitHub})
        });

        new Avatar({
            parent: this.layout6,
            color: Color.Tertiary,
            variant: Variant.Outlined,
            childContent: new Icon({icon: Material.Icons.Filled.FormatListNumbered})
        });
        //docEnd
    }

    buildImages() {
        //docStart Avatar-Images.ts
        new Avatar({
            parent: this.layout7,
            image: '/assets/images/mony.png'
        });

        new Avatar({
            parent: this.layout7,
            image: '/assets/images/mony.png',
            alt: 'An image of the best dog ever!'
        });
        //docEnd
    }

    buildSizes() {
        //docStart Avatar-Sized.ts
        new Avatar({
            parent: this.layout8,
            size: Size.Small,
            color: Color.Info,
            text: 'L'
        });

        new Avatar({
            parent: this.layout8,
            size: Size.Medium,
            color: Color.Secondary,
            text: 'A'
        });

        new Avatar({
            parent: this.layout8,
            size: Size.Large,
            color: Color.Tertiary,
            text: 'B'
        });

        new Avatar({
            parent: this.layout8,
            color: Color.Success,
            text: '1',
            style: 'height:70px; width:70px;font-size:2rem;'
        });
        //docEnd
    }

    buildShapes() {
        //docStart Avatar-Shapes.ts
        new Avatar({
            parent: this.layout9,
            color: Color.Info,
            square: true,
            text: 'L'
        });

        new Avatar({
            parent: this.layout9,
            rounded: true,
            color: Color.Secondary,
            childContent: new Icon({icon: Material.Icons.Filled.FormatListNumbered})
        });

        new Avatar({
            parent: this.layout9,
            color: Color.Tertiary,
            childContent: new Icon({icon: Material.Icons.Filled.Comment})
        });

        new Avatar({
            parent: this.layout9,
            square: true,
            variant: Variant.Outlined,
            text: 'L'
        });

        new Avatar({
            parent: this.layout9,
            rounded: true,
            color: Color.Secondary,
            variant: Variant.Outlined,
            childContent: new Icon({icon: Material.Icons.Filled.FormatListNumbered})
        });

        new Avatar({
            parent: this.layout9,
            color: Color.Primary,
            variant: Variant.Outlined,
            childContent: new Icon({icon: Material.Icons.Filled.Comment})
        });
        //docEnd
    }
}
