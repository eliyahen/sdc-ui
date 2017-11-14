import {NgModule} from "@angular/core";
import {FormElementsModule} from "./form-elements/form-elements.module";
import {ButtonsModule} from "./buttons/buttons.module";
import {ModalModule} from "./modals/modal.module";
import {PopupMenuModule} from "./popup-menu/popup-menu.module";

@NgModule({
    imports: [
        ModalModule,
        FormElementsModule,
        ButtonsModule,
        PopupMenuModule
    ],
    exports: [
        ModalModule,
        FormElementsModule,
        ButtonsModule,
        PopupMenuModule
    ]
})
export default class ComponentsModule {
}
