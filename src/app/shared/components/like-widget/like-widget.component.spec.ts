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
    fixture.detectChanges();
  });
  it(`Should create component`, () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`Should AUTO generate ID when ID input property is MISSING`, () => {
    const component = fixture.componentInstance;
    expect(component.id).toBeTruthy();
  });

  it(`Should NOT generate ID when ID input property is PRESENT`, () => {
    const component = fixture.componentInstance;
    const someId = "someId";
    component.id = someId;
    expect(component.id).toBe("someId");
  });
});
