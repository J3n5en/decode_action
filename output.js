//Sun Feb 02 2025 07:37:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
function strencode(_0x67dc43, _0x4a4e2c, _0x4b0d50) {
  l = _0x4b0d50.substr(-1);
  if (l == 2) {
    t = _0x67dc43;
    _0x67dc43 = _0x4a4e2c;
    _0x4a4e2c = t;
  }
  _0x67dc43 = atob(_0x67dc43);
  len = _0x4a4e2c.length;
  code = "";
  for (i = 0; i < _0x67dc43.length; i++) {
    k = i % len;
    code += String.fromCharCode(_0x67dc43.charCodeAt(i) ^ _0x4a4e2c.charCodeAt(k));
  }
  return atob(code);
}
(function (_0x3982b5, _0x5ef47c, _0x2a610c) {
  _0x2a610c = "al";
  try {
    {
      _0x2a610c += "ert";
      _0x5ef47c = encode_version;
      if (!(typeof _0x5ef47c !== "undefined" && _0x5ef47c === "jsjiami.com.v5")) {
        {
          _0x3982b5[_0x2a610c]("删除版本号，js会定期弹窗，还请支持我们的工作");
        }
      }
    }
  } catch (_0x109b3f) {
    {
      _0x3982b5[_0x2a610c]("删除版本号，js会定期弹窗");
    }
  }
})(window);
encode_version = "jsjiami.com.v5";