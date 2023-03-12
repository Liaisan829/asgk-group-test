import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-push-message-dialog',
  templateUrl: './send-push-message-dialog.component.html',
  styleUrls: ['./send-push-message-dialog.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SendPushMessageDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
