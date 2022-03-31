import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, Property, ref, Router, routerPage, RowLayout} from "@lab1/core";
import {AutoComplete, Color, Margin, Material, Switch} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageAutoComplete extends BasePage {

    //region fields and properties
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    layout6!: Layout
    layout7!: Layout
    layout8!: Layout
    @ref completer1?: AutoComplete<string>
    @ref completer2?: AutoComplete<string>
    readonly value1 = new Property<string>(this, '');
    readonly resetValueOnEmptyText = new Property<boolean>(this, false);
    readonly coerceText = new Property<boolean>(this, false);
    readonly coerceValue = new Property<boolean>(this, false);
    states = [
        "Alabama", "Alaska", "American Samoa", "Arizona",
        "Arkansas", "California", "Colorado", "Connecticut",
        "Delaware", "District of Columbia", "Federated States of Micronesia",
        "Florida", "Georgia", "Guam", "Hawaii", "Idaho",
        "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Marshall Islands", "Maryland",
        "Massachusetts", "Michigan", "Minnesota", "Mississippi",
        "Missouri", "Montana", "Nebraska", "Nevada",
        "New Hampshire", "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio",
        "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico",
        "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
        "Texas", "Utah", "Vermont", "Virgin Island", "Virginia",
        "Washington", "West Virginia", "Wisconsin", "Wyoming",
    ]
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildMarginAndDense();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'AutoComplete', 'The Autocomplete component offers simple and flexible type-ahead functionality. It is great for searching a value from a long list of options. In comparison to a Select, the Autocomplete doesn\'t need to know the complete item list, it only calls a search function which will return matching items. The search function can even run asynchronously, i.e. for database queries.',
            'PageAutoComplete.tsx',`${Shared.urlMaterialComponents}/AutoComplete/AutoComplete.ts`);

        this.layout1 = this.buildColumnLayoutSection(columnLayout, 'Typescript', 'AutoComplete-Typescript.ts', Shared.docTypescript,'white',true,Align.HorizontalCenter);
        this.layout2 = this.buildColumnLayoutSection(columnLayout, 'Managed Typescript', 'AutoComplete-ManagedTS.ts', Shared.docManagedTS,'white',true,Align.HorizontalCenter);
        this.layout3 = this.buildColumnLayoutSection(columnLayout, 'Managed TSX', 'AutoComplete-ManagedTSX.tsx', Shared.docManagedTSX,'white',true,Align.HorizontalCenter);
        this.layout4 = this.buildColumnLayoutSection(columnLayout, 'Margin And Dense', 'AutoComplete-Margin.ts','','white',true,Align.HorizontalCenter);
    }

    buildTypescript() {
        //docStart AutoComplete-Typescript.ts
        let completer = new AutoComplete<string>({
            parent: this.layout1,
            width: 288,
            label: 'US States',
            value: this.value1,
            resetValueOnEmptyText: this.resetValueOnEmptyText,
            coerceText: this.coerceText,
            coerceValue: this.coerceValue,
        });

        completer.searchFunc = (txt) => {
            if (txt.length == 0) return this.states;
            else return this.states.filter(x => x.toLowerCase().startsWith(txt.toLowerCase()));
        }
        //docEnd
    }

    buildManagedTS() {
        //docStart AutoComplete-ManagedTS.ts
        let managedCode = [
            Material.AutoComplete({
                ref: this.completer1,
                width: 288,
                label: 'US States'
            })
        ];

        this.buildManaged(this.layout2, managedCode);

        this.completer1!.searchFunc = (txt) => {
            if (txt.length == 0) return this.states;
            else return this.states.filter(x => x.toLowerCase().startsWith(txt.toLowerCase()));
        }
        //docEnd
    }

    buildManagedTSX() {
        //docStart AutoComplete-ManagedTSX.tsx
        let managedCode = [
            <AutoComplete ref={this.completer2} width={288} label='US States'/>
        ];

        this.buildManaged(this.layout3, managedCode);

        this.completer2!.searchFunc = (txt) => {
            if (txt.length == 0) return this.states;
            else return this.states.filter(x => x.toLowerCase().startsWith(txt.toLowerCase()));
        }
        //docEnd
    }

    buildMarginAndDense() {
        //docStart AutoComplete-Margin.ts
        let completer = new AutoComplete<string>({
            parent: this.layout4,
            width: 288,
            label: 'US States'
        });

        completer.searchFunc = (txt) => {
            if (txt.length == 0) return this.states;
            else return this.states.filter(x => x.toLowerCase().startsWith(txt.toLowerCase()));
        }

        let rowLayout = new RowLayout({parent: this.layout4});
        new Switch({parent: rowLayout, color: Color.Info, text: 'Dense', onChange: (checked) => completer.dense.value = checked});
        new Switch({parent: rowLayout, color: Color.Info, text: 'Dense Margin', onChange: (checked) => {
                completer.marginType.value = checked ? Margin.Dense : Margin.Normal
            }
        });
        //docEnd
    }
}
