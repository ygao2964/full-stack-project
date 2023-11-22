import 'package:ngdart/angular.dart';
import '../picture.dart';

@Component(
  selector: 'card',
  styleUrls: ['card_component.css'],
  templateUrl: 'card_component.html',
  directives: [coreDirectives],
)
class CardComponent {
  @Input()
  Picture picture;

  bool flipped = false;

  void onClick() {
    flipped = !flipped;
  }
}
