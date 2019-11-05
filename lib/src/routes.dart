import 'package:angular_router/angular_router.dart';

import 'pages/menu/menu_component.template.dart' as menu_template;
import 'pages/play/play_component_template.dart' as play_template;

class Routes {
  static final menu_page = RouteDefinition(
    routePath: RoutePath(path: 'menu'),
    component: menu_template.MenuComponentNgFactory,
  );
  static final play_page = RouteDefinition(
    routePath: RoutePath(path: 'play'),
    component: play_template.PlayComponentNgFactory,
  );

  static final all = <RouteDefinition>[
    menu_page,
    play_page,
  ];
}
