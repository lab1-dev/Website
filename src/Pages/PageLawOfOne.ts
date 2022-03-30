import {ColumnLayout, HorizontalAlign, Lab1, Layout, Router, routerPage} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Text, Typo} from "@lab1/material";

@routerPage()
export class PageLawOfOne extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildLawOfOne();
        this.buildLawOfOnePractices();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Law of One', '');
        this.layout1 = this.buildTextBlockArea(columnLayout, 'Principles');
        this.layout2 = this.buildTextBlockArea(columnLayout, 'Law of One Practices');
    }

    buildLawOfOne() {
        let content = `
        The Law of One is the comprehension that all things are made of intelligent energy and are a part of the All-One. The Law of One contains the Sacred Sciences which explain the mechanics of Christ Consciousness that comprise the Natural Laws that are governing the Universal Creation. All-One is the recognition that the Eternal Truth is Eternal Love and that state of Eternal Love is the organic consciousness of Infinite Creator or God Source. Eternal Love consciousness embodied within a form is referred to as Unity intelligence, and is simultaneously recognized as the Inner Light of Christos. Unity consciousness is at One with God and this Unity consciousness is that which ignites the Inner Light of Christos held as an eternal flame within the Sacred Crystal Heart. The Inner Light of Christos when actualized into a manifest form, is the embodiment of an Eternal God Human that holds the title of a Cosmic Citizen and therefore is GSF. When we practice expressing Loving Kindness we build Unity Consciousness that is directly reflected as the true nature and holy image of God’s Love, and this Inner Holy Spirit of the sacred heart flame is eternally protected within angelic humans. Be At One with All, as One is All with God. Every Soul is taking the same spiritual journey, but each soul has evolved at different levels within the manifested Timelines. The teachings of the Law of One describe the spiritual laws that govern angelic humanity's spiritual evolution for each dimension that exists within the Universal Time Matrix. It is a single philosophical system of World Humanism, which merges cosmology, science, Human Rights and spiritualism.

<br><br>
Law of One, Books of the Law
Simply put, the Law of One is the Universal Truth that All Is One. It is the Truth taught by Christ when he proclaimed, "<b>Love your neighbor as you love yourself.</b>" We are all direct expressions of the One Source God Source. The Law of One is an energetic reality as well as a creational covenant with the Guardian Host Founder Races.The Emerald Order, Amethyst Order, Gold Order, Cosmic Family Entity of RA, The Aurora Host Races from the Seven Higher Heavens serve the Krystal Star in order to protect spiritual sovereignty for all races through the reclamation of the Christos Mission. The Law of One is practiced by the advanced races that promote Self-Responsibility and accountability in our Universal Time Matrix through the comprehension of the energetic interconnection that exists between all living things. The Law of One expresses and acknowledges the interconnection, value and interdependence of the spirit and Consciousness that animates within all things. Living a lifestyle that expresses unconditional Love to all creation brings true Unity with the Godhead and develops a direct relationship with God. Thus, this is the promise of the Emerald Covenant gifted to humanity in order to achieve planetary liberation and is the ascending path of the Cosmic Founders in order to achieve complete spiritual freedom from reincarnation cycles in the lower worlds during the Ascension Cycle.`

        new Text({
            parent: this.layout1,
            marginBottom: 20,
            typo: Typo.body1,
            childContent: content
        });
    }

    buildLawOfOnePractices(){
        let content=`
        1. Unity Consciousness<br>
        2. Love Yourself<br>
        3. Love Others<br>        
        4. Love Earth & Nature<br>        
        5. Service to Others<br>        
        6. Consciousness Expansion<br>        
        7. Responsible Co-Creation`

        new Text({
            parent: this.layout2,
            marginBottom: 20,
            typo: Typo.body1,
            childContent: content
        });
    }

}
