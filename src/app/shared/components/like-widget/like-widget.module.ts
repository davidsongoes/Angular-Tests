import { UniqueIdService } from "./../../services/unique-id/unique-id.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LikeWidgetRoutingModule } from "./like-widget-routing.module";
import { LikeWidgetComponent } from "./like-widget.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [CommonModule, LikeWidgetRoutingModule, FontAwesomeModule],
  exports: [LikeWidgetComponent],
  providers: [UniqueIdService],
})
export class LikeWidgetModule {}
