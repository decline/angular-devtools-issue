# AngularDevtoolsIssue

A demo Angular application to show an issue with Angular DevTools when `ViewContainerRef` is injected into `AppComponent`.

When injecting the `ViewContainerRef` in the `AppComponent` construct, Angular DevTools will not work.

To make it work again, remove this construct from the `AppComponent`:

```typescript
  constructor(public viewContainerRef: ViewContainerRef) {
    this.hasViewContainerRef = !!viewContainerRef;
  }
```
