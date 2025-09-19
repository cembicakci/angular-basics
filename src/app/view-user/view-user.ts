
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crud } from '../Services/crud';

@Component({
  selector: 'app-view-user',
  imports: [],
  templateUrl: './view-user.html',
  styleUrl: './view-user.scss'
})
export class ViewUser {
  parentProperty: string = "View-user : Kindly read the user details.";


  constructor(@Inject(Crud) private crud: Crud, private activeRoute: ActivatedRoute, private router: Router, private cdr: ChangeDetectorRef) { }
  userData: any;

  userId: { uid: number } = { uid: 0 }

  ngOnInit(): void {

    this.userId = {
      uid: this.activeRoute.snapshot.params['id']
    }
    console.log(this.userId.uid);

    this.crud.getDataById(this.userId.uid).subscribe(res => {
      this.userData = res;
      this.cdr.detectChanges();
    })

  }

  onClose() {
    this.router.navigateByUrl('crud');
  }
}
