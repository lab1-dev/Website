import {Align, ColumnLayout, ColumnLayoutAlignSelf, HorizontalAlign, tsx, Lab1, Layout, ref, Router, routerPage} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Color, Material, Rating, Size, Text, Typo} from "@lab1/material";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageRating extends BasePage {

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
    layout11!: Layout
    @ref rating1?: Rating
    @ref rating2?: Rating
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});
        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildDisabled();
        this.buildReadOnly();
        this.buildSizes();
        this.buildMaxValue();
        this.buildIconsAndColor();
        this.buildEventsAndBinding();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Rating', 'Ratings provide insight regarding other\'s opinions and experiences with a product. Collecting user feedback via ratings is a simple analytic that can provide a lot of feedback to your product or application.');

        this.layout1 = this.buildColumnLayoutSection(columnLayout, 'Typescript', 'Rating-Typescript.ts', Shared.docTypescript,'white',true,Align.HorizontalCenter);
        this.layout2 = this.buildColumnLayoutSection(columnLayout, 'Managed Typescript', 'Rating-ManagedTS.ts', Shared.docManagedTS,'white',true,Align.HorizontalCenter);
        this.layout3 = this.buildColumnLayoutSection(columnLayout, 'Managed TSX', 'Rating-ManagedTSX.tsx', Shared.docManagedTSX,'white',true,Align.HorizontalCenter);
        this.layout5 = this.buildColumnLayoutSection(columnLayout, 'Disabled', 'Rating-Disabled.ts', 'A disabled component cannot change its state. Use the <b>disabled</b> property to disable the component.','white',true,Align.HorizontalCenter);
        this.layout6 = this.buildColumnLayoutSection(columnLayout, 'Read only', 'Rating-ReadOnly.ts', "A read-only component doesn't allow interactions. Use the <b>readOnly</b> property to mark a component as read-only.",'white',true,Align.HorizontalCenter);
        this.layout7 = this.buildRowLayoutSection(columnLayout, 'Sizes', 'Rating-Sized.ts', '3 sizes available: Small, Medium, Large.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout8 = this.buildRowLayoutSection(columnLayout, 'Max value', 'Rating-MaxValue.ts', 'By default, <b>maxValue</b> is 5. Changing this value also changes the number of stars.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout9 = this.buildRowLayoutSection(columnLayout, 'Icons and color', 'Rating-IconsAndColors.ts','You can use custom icons and define their color.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout10 = this.buildColumnLayoutSection(columnLayout, 'Events and value binding', 'Rating-Events.ts',"Rating provides  events for changed selected value or hover. E.g you can display a label on hover to help users pick the correct rating value.",'white',true,Align.HorizontalCenter);
    }

    buildTypescript() {
        //docStart Rating-Typescript.ts
        new Rating({
            parent: this.layout1,
            selectedValue: 2
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Rating-ManagedTS.ts
        let managedContent = Material.Rating({
            ref: this.rating1,
            selectedValue: 2
        });

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Rating-ManagedTSX.tsx
        let managedContent = <Rating ref={this.rating2} selectedValue={2}/>

        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildDisabled() {
        //docStart Rating-Disabled.ts
        new Rating({
            parent: this.layout5,
            selectedValue: 2,
            disabled: true
        });
        //docEnd
    }

    buildReadOnly() {
        //docStart Rating-ReadOnly.ts
        new Rating({
            parent: this.layout6,
            readOnly: true,
            selectedValue: 2
        });
        //docEnd
    }

    buildSizes() {
        //docStart Rating-Sized.ts
        new Rating({
            parent: this.layout7,
            selectedValue: 2,
            size: Size.Small
        });

        new Rating({
            parent: this.layout7,
            selectedValue: 2,
            size: Size.Medium
        });

        new Rating({
            parent: this.layout7,
            selectedValue: 2,
            size: Size.Large
        });
        //docEnd
    }

    buildMaxValue() {
        //docStart Rating-MaxValue.ts
        new Rating({
            parent: this.layout8,
            selectedValue: 1,
            maxValue: 3
        });

        new Rating({
            parent: this.layout8,
            selectedValue: 2
        });

        new Rating({
            parent: this.layout8,
            selectedValue: 3,
            maxValue: 10
        });
        //docEnd
    }

    buildIconsAndColor() {
        //docStart Rating-IconsAndColors.ts
        new Rating({
            parent: this.layout9,
            selectedValue: 2,
            fullIcon: Material.Icons.Filled.Visibility,
            emptyIcon: Material.Icons.Filled.VisibilityOff
        });

        new Rating({
            parent: this.layout9,
            selectedValue: 2,
            fullIcon: Material.Icons.Filled.Favorite,
            emptyIcon: Material.Icons.Filled.FavoriteBorder,
            color: Color.Tertiary
        });
        //docEnd
    }

    buildEventsAndBinding() {
        //docStart Rating-Events.ts
        let text: Text;
        let columnLayout = new ColumnLayout({
            parent: this.layout10
        });

        new Rating({
            parent: columnLayout,
            onHoveredValueChange: (value) => {
                switch (value) {
                    case 1:
                        text.childContent.value = 'Very bad';
                        break;
                    case 2:
                        text.childContent.value = 'Bad';
                        break;
                    case 3:
                        text.childContent.value = 'Sufficient';
                        break;
                    case 4:
                        text.childContent.value = 'Good';
                        break;
                    case 5:
                        text.childContent.value = 'Awesome!';
                        break;
                }
            }
        });

        text = new Text({
            parent: columnLayout,
            typo: Typo.subtitle2,
            className: 'deep-purple-text mt-2',
            columnLayoutAlignSelf: ColumnLayoutAlignSelf.HorizontalCenter,
            childContent:''
        });
        //docEnd
    }
}
