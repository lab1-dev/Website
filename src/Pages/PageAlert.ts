
import {ColumnLayout, Lab1, Router, RouterPage, routerPage} from "@lab1/core";
import { Color} from '@lab1/material';

@routerPage()
export class PageAlert extends RouterPage {

    constructor(router: Router) {
        super({id: 'pageAlert', parent: Lab1.obj.currentRouterView});
    }
}
