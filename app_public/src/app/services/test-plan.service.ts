import { Injectable } from "@angular/core";
import { TestCaseGroup, TestCase, TestPlan } from "../models/test-plan.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, combineLatest } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TestPlanService {
  private testPlansUrl = "api/testPlans";
  private testPlanUrl = "api/testPlan";

  constructor(private http: HttpClient) {}

  getTestPlans(): Observable<TestPlan[]> {
    const url = `${this.testPlansUrl}`;
    return this.http.get<TestPlan[]>(this.testPlansUrl).pipe(
      tap((_) => console.log("fetched test plans")),
      catchError(this.handleError<TestPlan[]>("getTestPlans", []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
