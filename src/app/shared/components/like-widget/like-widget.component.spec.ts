import { LikeWidgetModule } from "./like-widget.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UniqueIdService } from "./../../services/unique-id/unique-id.service";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Test First Component After
      // declarations: [LikeWidgetComponent],
      // imports: [FontAwesomeModule],
      // providers: [UniqueIdService],

      // Component First Test After
      imports: [LikeWidgetModule],
    }).compileComponents();
    fixture = TestBed.createComponent(LikeWidgetComponent);
  });
  it(`Should create component`, () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });
});
