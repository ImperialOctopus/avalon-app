import 'package:avalon_app/src/announcers/announcer_cathy.dart';

enum AnnouncerID { cathy, en_gb_c, en_gb_d }

abstract class Announcer {
  static const Map<AnnouncerID, Announcer> idMap = {
    AnnouncerID.cathy: AnnouncerCathy(),
    AnnouncerID.en_gb_c: AnnouncerEnGbC(),
    AnnouncerID.en_gb_d: AnnouncerEnGbD(),
  };
  final List<String> files = null;
  final Map<String, List<double>> spriteList = null;

  const Announcer();
}
