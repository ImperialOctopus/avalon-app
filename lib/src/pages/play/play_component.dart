import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

@Component(
  selector: 'play_page',
  styleUrls: ['play_component.css'],
  templateUrl: 'play_component.html',
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
class PlayComponent implements OnInit {
  PlayComponent();

  @override
  Future<void> ngOnInit() async {}
}
