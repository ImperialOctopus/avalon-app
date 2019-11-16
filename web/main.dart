import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:avalon_app/app_component.template.dart' as ng;
import 'package:pwa/client.dart' as pwa;

import 'main.template.dart' as self;

@GenerateInjector([
  //routerProvidersHash,
  routerProviders,
])
final InjectorFactory injector = self.injector$Injector;

void main() {
  runApp(ng.AppComponentNgFactory, createInjector: injector);
  pwa.Client(scriptUrl: './pwa.dart.js');
}
