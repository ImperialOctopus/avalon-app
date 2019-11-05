import 'package:angular/angular.dart';

import 'src/menu/menu_component.dart';

// AngularDart info: https://webdev.dartlang.org/angular
// Components info: https://webdev.dartlang.org/components

@Component(
  selector: 'avalon-app',
  styleUrls: ['app_component.css'],
  templateUrl: 'app_component.html',
  directives: [MenuComponent],
  providers: [ClassProvider(MenuComponent)],
)
class AppComponent {}
