import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.scss']
})
export class ConfirmDeleteDialogComponent {

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fs: FirestoreService
  ) { }

  closeDialog(){
    this.ref.close()
  }

  deleteItem(){
    this.fs.delete(
      this.config.data.id,
      this.config.data.collection
    )

    this.ref.close()
  }
}
