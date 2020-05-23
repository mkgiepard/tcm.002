import { Injectable } from "@angular/core";
import { TestCaseGroup, TestCase, TestPlan } from "../models/test-plan.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, combineLatest } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TestEffortService {
  private testGroupsUrl = "api/testGroups";
  private testCaseUrl = "api/testCases";

  testGroups: TestCaseGroup[];
  testCases: TestCase[];
  result: (TestCase | TestCaseGroup)[];

  constructor(private http: HttpClient) {}

  getTestGroupsByTestPlanId(id: number): Observable<TestCaseGroup[]> {
    const url = `${this.testGroupsUrl}/${id}`;
    return this.http.get<TestCaseGroup[]>(this.testGroupsUrl).pipe(
      tap((_) => console.log("fetched test groups")),
      catchError(
        this.handleError<TestCaseGroup[]>("getTestGroupsByTestPlanId", [])
      )
    );
  }

  getTestCasesByTestPlanId(id: number): Observable<TestCase[]> {
    const url = `${this.testCaseUrl}/${id}`;
    return this.http.get<TestCase[]>(this.testCaseUrl).pipe(
      tap((_) => console.log("fetched test cases")),
      catchError(this.handleError<TestCase[]>("getTestCasesByTestPlanId", []))
    );
  }

  getTestData(id: number): Observable<(TestCase | TestCaseGroup)[]> {
    const tg$ = this.getTestGroupsByTestPlanId(id);
    const tc$ = this.getTestCasesByTestPlanId(id);
    // ? :(
    return combineLatest(tg$, tc$, (tg, tc) => {
      this.testGroups = tg;
      this.testCases = tc;
      return this.processData(tg, tc);
    });
  }

  processData(
    tg: TestCaseGroup[],
    tc: TestCase[]
  ): (TestCase | TestCaseGroup)[] {
    console.log(this.testGroups.length);
    const tgSorted = tg.sort((a, b) => a.index.localeCompare(b.index));
    const tcSorted = tc.sort((a, b) => a.group_id - b.group_id);
    console.log(tgSorted);
    console.log(tcSorted);
    // TODO: optimise
    let testData: (TestCase | TestCaseGroup)[] = [];
    for (let i = 0; i < tgSorted.length; i++) {
      testData.push(tgSorted[i]);
      for (let j = 0; j < tcSorted.length; j++) {
        if (tcSorted[j].group_id === tgSorted[i].id) {
          testData.push(tcSorted[j]);
        }
      }
    }
    console.log(testData);
    return testData;
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
