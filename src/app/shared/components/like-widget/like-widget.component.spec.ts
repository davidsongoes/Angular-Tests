import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";

describe(LikeWidgetComponent.name, () => {
  let likeWidgetComponent: LikeWidgetComponent = null;
  beforeEach(() => {
    likeWidgetComponent = new LikeWidgetComponent(new UniqueIdService());

    it(``, () => {});
  });
});
