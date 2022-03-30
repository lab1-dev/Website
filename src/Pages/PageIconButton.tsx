import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, ref, Router, routerPage} from "@lab1/core";
import {Color, CustomIcons, IconButton, Material, Size, Variant} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageIconButton extends BasePage {

    //region fields
    layout1!:Layout
    layout2!:Layout
    layout3!:Layout
    layout4!:Layout
    layout5!:Layout
    @ref iconButton1?:IconButton
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildFontIcons();
        this.buildSized();

        this.buildEnd();
    }

    buildLayouts(){
        let columnLayout=new ColumnLayout({parent:this, horizontalAlign:HorizontalAlign.Center});
        this.buildHeader(columnLayout,'IconButton','Similar to Button, but with icons.','PageIconButton.tsx');

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Typescript', 'IconButton-Typescript.ts', Shared.docTypescript,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Managed Typescript', 'IconButton-ManagedTS.ts', Shared.docManagedTS,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Managed TSX', 'IconButton-ManagedTSX.tsx', Shared.docManagedTSX,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout4 = this.buildRowLayoutSection(columnLayout,'Using font icons', 'IconButton-Font.ts' ,'Using Font Awesome icon classes instead of Material Icon Pack','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout,'Sized', 'IconButton-Sized.ts','3 sizes available: Small, Medium, Large.','white',Align.HorizontalCenter| Align.VerticalCenter);
    }

    buildTypescript(){
        //docStart IconButton-Typescript.ts
        new IconButton({
            parent:this.layout1,
            icon:Material.Icons.Filled.Delete,
            onClick:()=>console.log('hi there!')
        });

        new IconButton({
            parent:this.layout1,
            icon:CustomIcons.Brands.GitHub,
            color:Color.Primary
        });

        new IconButton({
            parent:this.layout1,
            icon:Material.Icons.Filled.Favorite,
            color:Color.Tertiary
        });

        new IconButton({
            parent:this.layout1,
            icon:Material.Icons.Filled.Share,
            disabled:true
        });
        //docEnd
    }

    buildManagedTS(){
        //docStart IconButton-ManagedTS.ts
        let managedContent=[
            Material.IconButton({
                ref:this.iconButton1,
                icon:Material.Icons.Filled.Delete
            }),
            Material.IconButton({
                icon:CustomIcons.Brands.GitHub,
                color:Color.Primary
            }),
            Material.IconButton({
                icon:Material.Icons.Filled.Share,
                disabled:true
            })
        ];

        this.buildManaged(this.layout2,managedContent);
        this.iconButton1?.onClick.connect(()=>console.log('hi there!'))
        //docEnd
    }

    buildManagedTSX(){
        //docStart IconButton-ManagedTSX.tsx
        let managedContent=[
            <IconButton icon={Material.Icons.Filled.Delete} onClick={()=>console.log('hi there!')}/>,
            <IconButton icon={CustomIcons.Brands.GitHub} color={Color.Primary} />,
            <IconButton icon={Material.Icons.Filled.Share} disabled={true}/>
        ]
        this.buildManaged(this.layout3,managedContent);
        //docEnd
    }

    buildFontIcons(){
        //docStart IconButton-Font.ts
        //add to html header ->  <link href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" rel="stylesheet">
        new IconButton({
            parent:this.layout4,
            icon:'fas fa-atom',
            title:'Atom',
            color:Color.Error
        });

        new IconButton({
            parent:this.layout4,
            icon:'fas fa-fighter-jet',
            title:'Jet',
            color:Color.Dark
        });

        new IconButton({
            parent:this.layout4,
            icon:'fas fa-globe-europe',
            title:'Globe',
            color:Color.Tertiary
        });

        new IconButton({
            parent:this.layout4,
            icon:'fas fa-bug',
            title:'Bug',
            disabled:true
        });
        //docEnd
    }

    buildSized(){
        //docStart IconButton-Sized.ts
        new IconButton({
            parent:this.layout5,
            icon:Material.Icons.Filled.Favorite,
            size:Size.Small,
            color:Color.Tertiary
        });

        new IconButton({
            parent:this.layout5,
            icon:Material.Icons.Filled.Favorite,
            size:Size.Medium,
            variant:Variant.Outlined,
            color:Color.Tertiary
        });

        new IconButton({
            parent:this.layout5,
            icon:Material.Icons.Filled.Favorite,
            size:Size.Large,
            variant:Variant.Filled,
            color:Color.Tertiary
        });
        //docEnd
    }
}
