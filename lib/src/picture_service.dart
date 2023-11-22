import 'dart:async';
import 'dart:convert';

import 'package:http/http.dart';

import 'picture.dart';

class PictureService {
  static final _headers = {'Content-Type': 'application/json'};
  static const _url = 'api/items';
  final Client _http;

  PictureService(this._http);

  Future<List<Picture>> getAll() async {
    try {
      final response = await _http.get(_url);
      final pictures = (_extractData(response) as List)
          .map((value) => Picture.fromJson(value))
          .toList();
      return pictures;
    } catch (e) {
      throw _handleError(e);
    }
  }

  dynamic _extractData(Response resp) => json.decode(resp.body)['data'];

  Exception _handleError(dynamic e) {
    return Exception('Server error; cause: $e');
  }
}
