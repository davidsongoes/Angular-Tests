import { LikeWidgetModule } from "./like-widget.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UniqueIdService } from "./../../services/unique-id/unique-id.service";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;
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
    component = fixture.componentInstance;
  });
  it(`Should create component`, () => {
    expect(component).toBeTruthy();
  });

  it(`Should AUTO generate ID when ID input property is MISSING`, () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it(`Should NOT generate ID when ID input property is PRESENT`, () => {
    const someId = "someId";
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe("someId");
  });

  it(`#${LikeWidgetComponent.prototype.like.name}`, () => {
    spyOn(component.liked, "emit");
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
