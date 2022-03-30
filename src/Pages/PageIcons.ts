import {Lab1, Router, RouterPage, routerPage} from "@lab1/core";
import { Material} from '@lab1/material';

@routerPage()
export class PageIcons extends RouterPage {

    constructor(router: Router) {
        super({id: 'pageIcons', parent: Lab1.obj.currentRouterView});

        let svgString=Material.Icons.Filled.Favorite;

        // let icon=new Icon({
        //     id:'icone',
        //     parentComponent:this,
        //     icon:svgString,
        //     width:20,
        //     height:20,
        //     color:Color.Tertiary
        // });
    }
}
