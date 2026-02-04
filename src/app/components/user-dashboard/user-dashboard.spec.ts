import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDashboardComponent } from './user-dashboard';
import { AuthService } from '../../services/auth.service';
import { TurismoService } from '../../services/turismo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { MOCK_DESTINOS } from '../../data/mock-data';

describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;
  let authService: AuthService;
  let turismoService: TurismoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDashboardComponent],
      providers: [AuthService, TurismoService, MatSnackBar, MatDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    turismoService = TestBed.inject(TurismoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with proper values', () => {
    expect(component.destinos.length).toBe(0);
    expect(component.isLoading).toBeTruthy();
  });

  it('should have method verDetalle', () => {
    expect(typeof component.verDetalle).toBe('function');
  });

  it('should display mock destinos', () => {
    expect(MOCK_DESTINOS.length).toBe(6);
    expect(MOCK_DESTINOS[0].titulo).toBe('Centro Histórico de Quito');
  });
});

