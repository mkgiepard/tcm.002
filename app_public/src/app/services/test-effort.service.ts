import { Injectable } from "@angular/core";
import { TestCase, TestPlan } from "../models/test-plan.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, combineLatest } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TestEffortService {
  private testCaseUrl = "api/testCases";

  testCases: TestCase[];
  result: TestCase[];

  constructor(private http: HttpClient) {}

  getTestCasesByTestPlanId(id: number): Observable<TestCase[]> {
    const url = `${this.testCaseUrl}/${id}`;
    return this.http.get<TestCase[]>(this.testCaseUrl).pipe(
      tap((_) => console.log("fetched test cases")),
      catchError(this.handleError<TestCase[]>("getTestCasesByTestPlanId", []))
    );
  }

  getTestData(id: number): Observable<TestCase[]> {
    return this.getTestCasesByTestPlanId(id);
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
