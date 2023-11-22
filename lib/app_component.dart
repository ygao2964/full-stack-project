import 'dart:async';

import 'package:fe/src/add/add_component.dart';
import 'package:ngdart/angular.dart';
import 'src/filter/filter_component.dart';
import 'src/add/add_component.dart';
import 'package:ngforms/ngforms.dart';
import 'src/card/card_component.dart';
import 'src/picture.dart';
import 'src/tag.dart';
//import 'package:ngrouter/ngrouter.dart';

// AngularDart info: https://angulardart.xyz
// Components info: https://angulardart.xyz/components
//
// (If the links still point to the old Dart-lang repo, go here:
// https://pub.dev/ngcomponents)

@Component(
  selector: 'my-app',
  styleUrls: ['app_component.css'],
  templateUrl: 'app_component.html',
  directives: [
    coreDirectives,
    AddFormComponent,
    CardComponent,
    FilterFormComponent,
    NgFormControl
  ],
)
class AppComponent implements OnInit {
  bool shouldHide = false;
  // Remove later
  bool show = false;

  List<Picture> pictures = <Picture>[
    Picture(
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
        "Salad",
        "This is good for losing weight.",
        ["tag1"]),
    Picture(
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80",
        "Pizza",
        "This is not good for losing weight.",
        ["tag2"])
  ];

  List<Picture> filteredPictureList;

  List<Tag> tags = [
    Tag('tag1', true, "Good for losing weight?"),
    Tag('tag2', true, "Protein?"),
    Tag('tag3', true, "Sweet?")
  ];

  var tagsControl = Control<List<Tag>>(null);
  //Remove later
  var addPictureControl = Control<Picture>(null);

  AppComponent() {
    filteredPictureList = pictures;
  }

  void showOrHideForm() {
    shouldHide = !shouldHide;
  }

  //Remove later
  void showAdd() {
    show = true;
  }

  void getCheckedList(List<Tag> checkedList) {
    List<Picture> newFilteredPictureList = [];
    for (var picture in pictures) {
      if (_containTags(picture.tags, checkedList)) {
        newFilteredPictureList.add(picture);
      }
    }
    filteredPictureList = newFilteredPictureList;
  }

  //Remove later
  void showNewPicture(Picture picture) {
    filteredPictureList = [picture];
  }

  bool _containTags(List<String> list, List<Tag> sublist) {
    for (var tag in sublist) {
      if (tag.checked && list.contains(tag.name)) {
        return true;
      }
    }
    return false;
  }

  @override
  void ngOnInit() {
    tagsControl.valueChanges.listen((value) => getCheckedList(value));
    //Remove later
    addPictureControl.valueChanges.listen((picture) => showNewPicture(picture));
  }
}
