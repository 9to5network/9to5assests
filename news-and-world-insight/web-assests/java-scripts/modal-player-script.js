var _0x2c86ab=_0x4b13;(function(_0x53441a,_0x38c9ec){var _0x504991=_0x4b13,_0x3347c6=_0x53441a();while(!![]){try{var _0x35c813=-parseInt(_0x504991(0x13d))/0x1+parseInt(_0x504991(0x11b))/0x2+-parseInt(_0x504991(0x125))/0x3+-parseInt(_0x504991(0x11f))/0x4*(parseInt(_0x504991(0x11a))/0x5)+-parseInt(_0x504991(0x119))/0x6*(parseInt(_0x504991(0x13e))/0x7)+-parseInt(_0x504991(0x12c))/0x8+parseInt(_0x504991(0x13f))/0x9*(parseInt(_0x504991(0x11d))/0xa);if(_0x35c813===_0x38c9ec)break;else _0x3347c6['push'](_0x3347c6['shift']());}catch(_0x110e69){_0x3347c6['push'](_0x3347c6['shift']());}}}(_0x5658,0x48891));var music=document[_0x2c86ab(0x133)](_0x2c86ab(0x124)),playBtn=document['querySelector'](_0x2c86ab(0x132)),seekbar=document[_0x2c86ab(0x133)](_0x2c86ab(0x11e)),currentTime=document[_0x2c86ab(0x133)](_0x2c86ab(0x12d)),duration=document[_0x2c86ab(0x133)](_0x2c86ab(0x128));function _0x4b13(_0x25b3e6,_0xd59b8b){var _0x565822=_0x5658();return _0x4b13=function(_0x4b1361,_0x109624){_0x4b1361=_0x4b1361-0x119;var _0xa4fd2c=_0x565822[_0x4b1361];return _0xa4fd2c;},_0x4b13(_0x25b3e6,_0xd59b8b);}function handlePlay(){var _0x5541b8=_0x2c86ab;music[_0x5541b8(0x13b)]?(music[_0x5541b8(0x136)](),playBtn[_0x5541b8(0x129)]='pause',playBtn[_0x5541b8(0x11c)]=_0x5541b8(0x122)):(music['pause'](),playBtn[_0x5541b8(0x129)]=_0x5541b8(0x136),playBtn[_0x5541b8(0x11c)]=_0x5541b8(0x120)),music[_0x5541b8(0x139)](_0x5541b8(0x137),function(){var _0x1ea5dc=_0x5541b8;playBtn[_0x1ea5dc(0x129)]='play',playBtn[_0x1ea5dc(0x11c)]=_0x1ea5dc(0x120),music['currentTime']=0x0;});}music[_0x2c86ab(0x138)]=function(){var _0x1e3b88=_0x2c86ab;seekbar[_0x1e3b88(0x127)]=music[_0x1e3b88(0x130)];var _0x2b84c1=parseInt(music[_0x1e3b88(0x130)]%0x3c),_0x4a896f=parseInt(music['duration']/0x3c%0x3c);duration[_0x1e3b88(0x11c)]=_0x4a896f+':'+_0x2b84c1;},music[_0x2c86ab(0x13c)]=function(){var _0x16123a=_0x2c86ab;seekbar[_0x16123a(0x140)]=music[_0x16123a(0x134)];},handleSeekBar=function(){var _0x9c5d3a=_0x2c86ab;music['currentTime']=seekbar[_0x9c5d3a(0x140)];},music[_0x2c86ab(0x139)]('timeupdate',function(){var _0x2695c3=_0x2c86ab,_0x11b889=parseInt(music[_0x2695c3(0x134)]%0x3c),_0x200874=parseInt(music['currentTime']/0x3c%0x3c);currentTime[_0x2695c3(0x11c)]=_0x200874+':'+_0x11b889;},![]);var favIcon=document[_0x2c86ab(0x133)](_0x2c86ab(0x12e));function handleFavorite(){var _0x219d5a=_0x2c86ab;favIcon[_0x219d5a(0x123)][_0x219d5a(0x126)](_0x219d5a(0x131));}var repIcon=document[_0x2c86ab(0x133)]('.repeat');function handleRepeat(){var _0x4009ee=_0x2c86ab;music[_0x4009ee(0x12b)]==!![]?(music[_0x4009ee(0x12b)]=![],repIcon[_0x4009ee(0x123)][_0x4009ee(0x126)](_0x4009ee(0x131))):(music[_0x4009ee(0x12b)]=!![],repIcon[_0x4009ee(0x123)]['toggle'](_0x4009ee(0x131)));}var volIcon=document[_0x2c86ab(0x133)](_0x2c86ab(0x12f)),volBox=document[_0x2c86ab(0x133)]('.volume-box'),volumeRange=document[_0x2c86ab(0x133)](_0x2c86ab(0x121)),volumeDown=document[_0x2c86ab(0x133)](_0x2c86ab(0x135)),volumeUp=document[_0x2c86ab(0x133)](_0x2c86ab(0x13a));function handleVolume(){var _0x206f51=_0x2c86ab;volIcon[_0x206f51(0x123)][_0x206f51(0x126)]('active'),volBox[_0x206f51(0x123)][_0x206f51(0x126)](_0x206f51(0x131));}volumeDown[_0x2c86ab(0x139)](_0x2c86ab(0x12a),handleVolumeDown),volumeUp[_0x2c86ab(0x139)]('click',handleVolumeUp);function handleVolumeDown(){var _0x5eb492=_0x2c86ab;volumeRange[_0x5eb492(0x140)]=Number(volumeRange['value'])-0x14,music['volume']=volumeRange[_0x5eb492(0x140)]/0x64;}function handleVolumeUp(){var _0x59d2ad=_0x2c86ab;volumeRange['value']=Number(volumeRange[_0x59d2ad(0x140)])+0x14,music['volume']=volumeRange['value']/0x64;}function _0x5658(){var _0x1af8f4=['.play','querySelector','currentTime','.volume-down','play','ended','onloadeddata','addEventListener','.volume-up','paused','ontimeupdate','490246yZuiWW','26327FGXYbC','18ecNUuN','value','486NSdoIl','1294925bEyXpa','337184fMPapU','innerHTML','10738230YOuhjL','.seekbar','4lTHfhL','<i\x20class=\x22material-icons\x22>play_arrow</i>','.volume-range','<i\x20class=\x22material-icons\x22>pause</i>','classList','.music-element','1336893CdfssP','toggle','max','.duration','className','click','loop','4157040bToTXe','.current-time','.favorite','.volume','duration','active'];_0x5658=function(){return _0x1af8f4;};return _0x5658();}