import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UniqueIdService } from "./../../services/unique-id/unique-id.service";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
      imports: [FontAwesomeModule],
      providers: [UniqueIdService],
    }).compileComponents();
    fixture = TestBed.createComponent(LikeWidgetComponent);
  });
  it(`Should create component`, () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });
});
