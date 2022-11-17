import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MyService } from './my.service';

describe('AppComponent', () => {

  let componentUnderTest: AppComponent;
  let fixture : ComponentFixture<AppComponent>;
  let mockedMyService: jasmine.SpyObj<MyService>;


  beforeEach(async () => {
    mockedMyService = jasmine.createSpyObj('MyService' , ['checkTime']);
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers : [{provide : MyService , useValue : mockedMyService}],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    componentUnderTest = fixture.componentInstance;
  })

  it('should create the app', () => {
    expect(componentUnderTest).toBeTruthy();
  });

  it(`should have as title 'myproject'`, () => {
    expect(componentUnderTest.title).toEqual('myproject');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('myproject app is running!');
  });

  it(`should have my first test` , ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.firstTest).toEqual('this is my first test');
  })

  it(`servie testing`, () => {
    expect(mockedMyService.checkTime).toBeDefined();
  })

 
  it('should be called - mockedMyService.checkTime', () => {
    fixture.detectChanges();
    expect(mockedMyService.checkTime).toHaveBeenCalled();
  });

  it('myService.checkTime() = 12:00 - should be render - OK Corral', () => {
    mockedMyService.checkTime.and.returnValue('12:00');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content h1')?.textContent).toContain('high Noon - meet at the OK corral');
  });

  it('myService.checkTime() <> 12:00 - should be render - Root Beer', () => {
    mockedMyService.checkTime.and.returnValue('11:59');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content h1')?.textContent).toContain('Root Beer');
  });

  it('should be called check - mockedMyService.checkTime', () => {
    expect(componentUnderTest).toBeTruthy();
    expect(mockedMyService.checkTime).toHaveBeenCalledTimes(0);
    fixture.detectChanges();
    expect(mockedMyService.checkTime).toHaveBeenCalled();
    expect(mockedMyService.checkTime).toHaveBeenCalledTimes(1);
    });
    
    
    it('Combined ASSERTIONS tests - OK Corral', () => {
    expect(componentUnderTest).toBeTruthy();
    expect(mockedMyService.checkTime).toBeDefined();
    expect(mockedMyService.checkTime).toHaveBeenCalledTimes(0);
    mockedMyService.checkTime.and.returnValue('12:00');
    fixture.detectChanges();
    expect(mockedMyService.checkTime).toHaveBeenCalled();
    expect(mockedMyService.checkTime).toHaveBeenCalledTimes(1);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content h1')?.textContent).toContain('OK Corral');
    });




});
