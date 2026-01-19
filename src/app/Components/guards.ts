import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, GuardResult, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
@Injectable({
providedIn:'root'
})
export class TestCanActivate implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        console.log("Activate check for 2 seconds")
      return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(true),2000)
      })
    }
}

@Injectable({
    providedIn:'root'
    })
    export class TestCanActivateChild implements CanActivateChild{
    
        canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
            console.log("Activate check for 2 seconds")
          return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(true),2000)
          })
        }
    }

export interface canComponentdeactivate{
    canDeactivate: () => Observable<boolean> | Promise<boolean>;
} 
@Injectable({
    providedIn:'root'
    })
    export class TestCanDeActivate implements CanDeactivate<canComponentdeactivate>{
        
    
        canDeactivate(
            component:canComponentdeactivate): any {
           return component&& component.canDeactivate?component.canDeactivate():true;
        }
    }

    @Injectable({
        providedIn:'root'
        })
        export class TestResolve implements Resolve<any>{
            
        resolve(
            route: ActivatedRouteSnapshot, state: RouterStateSnapshot
            ): Observable<any> | Promise<any> | any {
            return "Vashanth"
            //  route.paramMap.get('id')
        }
           
        }