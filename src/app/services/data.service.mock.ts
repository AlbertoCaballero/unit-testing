import { of } from "rxjs";

export class MockDataService {
    getTodo() {
        return of({});
    }
}