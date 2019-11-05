import 'package:angular_router/angular_router.dart';

import 'menu_component.template.dart' as menu_template;

class Routes {
  static final heroes = RouteDefinition(
    routePath: RoutePath(path: 'menu'),
    component: menu_template.MenuComponentNgFactory,
  );

  static final all = <RouteDefinition>[
    heroes,
  ];
}
