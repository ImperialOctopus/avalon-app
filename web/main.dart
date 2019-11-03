import 'package:angular/angular.dart';
import 'package:avalon_app/app_component.template.dart' as ng;
import 'package:pwa/client.dart' as pwa;

void main() {
  pwa.Client();
  runApp(ng.AppComponentNgFactory);
}
