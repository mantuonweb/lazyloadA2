# Lazyload.Demo
## Generate Lazy Module
ref https://angularfirebase.com/lessons/how-to-lazy-load-components-in-angular-4-in-three-steps/
```dos
ng g module lazy --flat

ng g component lazy-parent --module lazy

ng g component lazy-child --module lazy
```
## Add following entries in lazyloadmodule.ts
```javascript
const routes: Routes = [
  { path: 'load-me', component: LazyloadparentComponent }
];

imports: [
    CommonModule,
    RouterModule.forChild(routes)
]
```

## Add following entries into the app.module file or root component file
```javascript
const routes: Routes = [
  { path: 'lazy', loadChildren: './lazyloadmodule.module#LazyloadmoduleModule' }
];

loadChildren:<relative path><filename>#<Class name of the module>
```
## Then Go to http://localhost:4200/lazy/load-me

http://localhost:4200/lazyloadmodule.module.chunk.js loaded @ run time