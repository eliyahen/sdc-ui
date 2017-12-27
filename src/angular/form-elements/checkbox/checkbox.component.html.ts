export default `
<div class="sdc-checkbox">
    <div class="sdc-checkbox__animation-wrapper" ripple-click-animation>
        <input type="checkbox" class="sdc-checkbox__input" [ngModel]="checked" (ngModelChange)="toggleState($event)" [disabled]="disabled">
    </div>
    <label class="sdc-checkbox__label" *ngIf="label" >{{ label }}</label>
</div>
`;
