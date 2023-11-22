import 'dart:async';

import 'package:ngdart/angular.dart';
import 'package:ngforms/ngforms.dart';
import '../tag.dart';

@Component(
  selector: 'filter-form',
  styleUrls: ['filter_component.css'],
  templateUrl: 'filter_component.html',
  directives: [coreDirectives, formDirectives],
)
class FilterFormComponent implements ControlValueAccessor<List<Tag>> {
  final NgControl _cd;
  ChangeFunction<List<Tag>> _changeFunction;

  @Input()
  List<Tag> tags;

  FilterFormComponent(@Self() @Optional() this._cd) {
    _cd.valueAccessor = this;
  }

  @override
  void onDisabledChanged(bool isDisabled) {}

  @override
  void registerOnChange(ChangeFunction<List<Tag>> changeFunction) {
    _changeFunction = changeFunction;
  }

  @override
  void registerOnTouched(TouchFunction f) {}

  @override
  void writeValue(List<Tag> obj) {}

  void getCheckedTags() {
    List<Tag> _checkedTags = tags.map((tag) => tag).toList();
    _changeFunction(_checkedTags);
  }
}
