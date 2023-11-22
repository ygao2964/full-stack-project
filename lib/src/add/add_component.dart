import 'dart:async';

import 'package:ngdart/angular.dart';
import 'package:ngforms/ngforms.dart';
import '../tag.dart';
import '../picture.dart';

@Component(
  selector: 'add-form',
  styleUrls: ['add_component.css'],
  templateUrl: 'add_component.html',
  directives: [coreDirectives, formDirectives],
)
class AddFormComponent implements ControlValueAccessor<Picture> {
  final NgControl _cd;
  ChangeFunction<Picture> _changeFunction;

  List<Tag> tags = [
    Tag('tag1', true, "Good for losing weight?"),
    Tag('tag2', true, "Protein?"),
    Tag('tag3', true, "Sweet?")
  ];

  @visibleForTemplate
  Picture picture = Picture("the src of the picture", "the alt of the picture",
      "the description of the picture", []);

  AddFormComponent(@Self() @Optional() this._cd) {
    _cd.valueAccessor = this;
  }

  @override
  void onDisabledChanged(bool isDisabled) {}

  @override
  void registerOnChange(ChangeFunction<Picture> changeFunction) {
    _changeFunction = changeFunction;
  }

  @override
  void registerOnTouched(TouchFunction f) {}

  @override
  void writeValue(_) {}

  void addPicture() {
    _changeFunction(picture);
  }
}
