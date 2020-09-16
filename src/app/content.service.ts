import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private currentLocale = 'en';
  private content_render = 'assets/content/login.dashboard.content.json';
  private content_subject = new BehaviorSubject<string>("en");
  constructor(
    private httpClient: HttpClient
  ) { }

  getContent(pageName: string): Observable<any> {
    return combineLatest(this.content_subject).pipe(
      switchMap(() => {
        return this.httpClient.get(this.content_render).pipe(
          map((contents) => contents[pageName])
        )
      })
    )
  }

  setLocale(locale: string) {
    if (this.currentLocale !== locale) {
      this.currentLocale = locale;
      this.content_render = "assets/content/login.dashboard.content." + locale + '.json';
      this.content_subject.next("locale");
    }
  }
}
