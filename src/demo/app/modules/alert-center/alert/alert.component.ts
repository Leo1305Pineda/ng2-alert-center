import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Alert} from '../model/alert';
import {AlertType} from '../model/alert-type';

@Component({
  selector: 'nac-alert',
  template: `
    <div class="alert"
        [class.alert-success]="isSuccess()"
        [class.alert-info]="isInfo()"
        [class.alert-warning]="isWarning()"
        [class.alert-danger]="isDanger()">
      <button *ngIf="isDismissEnabled()" type="button" class="close" data-dismiss="alert" aria-label="Close" (click)="dismiss()">
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>{{alert.textStrong}}</strong><span>{{alert.text}}</span>
    </div>
  `})
export class AlertComponent implements OnInit {

  @Input() alert = new Alert(AlertType.INFO, '', '');

  @Output() dismissed = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.initTimerIfNeeded();
  }

  isSuccess() {
    return this.alert.alertType === AlertType.SUCCESS;
  }

  isInfo() {
    return this.alert.alertType === AlertType.INFO;
  }

  isWarning() {
    return this.alert.alertType === AlertType.WARNING;
  }

  isDanger() {
    return this.alert.alertType === AlertType.DANGER;
  }

  dismiss() {
    this.dismissed.emit();
  }

  isDismissEnabled() {
    return this.alert.isDismissable();
  }

  private initTimerIfNeeded() {
    if (this.alert.isAutoDismissing()) {
      setTimeout(() => this.dismiss(), this.alert.dismissTime);
    }
  }
}
