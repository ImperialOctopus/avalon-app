import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

@Component(
  selector: 'menu_page',
  styleUrls: ['menu_component.css'],
  templateUrl: 'menu_component.html',
  directives: [
    MaterialCheckboxComponent,
    MaterialFabComponent,
    MaterialIconComponent,
    materialInputDirectives,
    NgFor,
    NgIf,
  ],
  providers: [],
)
class MenuComponent implements OnInit {
  static const Map<int, int> evilProportion = {
    5: 2,
    6: 2,
    7: 3,
    8: 3,
    9: 3,
    10: 4,
  };

  int minions;
  int servants;

  @override
  Future<void> ngOnInit() async {}
}
