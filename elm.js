/*@萝卜
APP : 饿了么
饿了么吃货豆，需要点外卖同学的福利
脚本说明：目前只支持部分任务，500，1000吃货豆换无门槛外卖红包
重写：https://h5.ele.me/svip/task-list url script-request-header https://gitee.com/xiecoll/radish-script/raw/master/ELM/lb_elm.js
青龙环境变量  export elmck='.............'
抓包 h5.ele.me 域名下的任何url 请求头中的Cookie 
获取数据 饿了么App->我的-> 赚吃货豆
多账户 @
cron 0,59 0,9,18 * * * lb_elm.js

兑换优惠券，参与瓜分吃货豆
变量：elmdh 兑换设置，默认为false,开启兑换，如需开启兑换，请设置为true
变量：SM_STARTTIME 值:默认为60，当为60时，9点59分运行脚本，10点准时开枪，如果网络慢可以设置为59，则9点59分59秒开抢。
变量：elmtz 值：默认正常通知，1 为抢到卷通知，2 为ck过期通知
抢不到卷的可以尝试在青龙的配置文件里修改脚本运行延迟 RandomDelay="1"
更新吃货豆隐藏任务，日 300+
更新处理cookie

脚本：https://gitee.com/xiecoll/radish-script/raw/master/ELM/lb_elm.js
*/
const $ = new Env('饿了么吃货豆');
const _0x4e5dc2 = _0x3895,
  _0x516883 = _0x45e1;
(function (_0x50e8ce, _0x553ef4) {
  const _0x5411ad = _0x3895,
    _0x31bad0 = _0x45e1,
    _0x561427 = _0x50e8ce();
  while (!![]) {
    try {
      const _0x53c2a7 =
        (-parseInt(_0x31bad0(0x2bb, 'UN(9')) / 0x1) *
          (-parseInt(_0x5411ad(0x355)) / 0x2) +
        parseInt(_0x5411ad(0x26d)) / 0x3 +
        -parseInt(_0x5411ad(0x2b1)) / 0x4 +
        parseInt(_0x31bad0(0x381, 'UN(9')) / 0x5 +
        (parseInt(_0x31bad0(0x16b, 'AJJm')) / 0x6) *
          (parseInt(_0x5411ad(0x31a)) / 0x7) +
        parseInt(_0x31bad0(0x24f, 'sqvW')) / 0x8 +
        -parseInt(_0x5411ad(0x17b)) / 0x9;
      if (_0x53c2a7 === _0x553ef4) break;
      else _0x561427['push'](_0x561427['shift']());
    } catch (_0x2b5c66) {
      _0x561427['push'](_0x561427['shift']());
    }
  }
})(_0x1d3a, 0x30b21);
function _0x3895(_0x26462a, _0x38bbdb) {
  const _0x1d3a0f = _0x1d3a();
  return (
    (_0x3895 = function (_0x3895db, _0x5d5a3e) {
      _0x3895db = _0x3895db - 0x169;
      let _0x1637c8 = _0x1d3a0f[_0x3895db];
      if (_0x3895['ZiNagC'] === undefined) {
        var _0xc906db = function (_0x45e16c) {
          const _0x4589ae =
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
          let _0x30510c = '',
            _0x59035a = '';
          for (
            let _0x3fd48a = 0x0, _0x25c7b7, _0x4f5ef8, _0x1fc953 = 0x0;
            (_0x4f5ef8 = _0x45e16c['charAt'](_0x1fc953++));
            ~_0x4f5ef8 &&
            ((_0x25c7b7 =
              _0x3fd48a % 0x4 ? _0x25c7b7 * 0x40 + _0x4f5ef8 : _0x4f5ef8),
            _0x3fd48a++ % 0x4)
              ? (_0x30510c += String['fromCharCode'](
                  0xff & (_0x25c7b7 >> ((-0x2 * _0x3fd48a) & 0x6))
                ))
              : 0x0
          ) {
            _0x4f5ef8 = _0x4589ae['indexOf'](_0x4f5ef8);
          }
          for (
            let _0x50806d = 0x0, _0x1f0277 = _0x30510c['length'];
            _0x50806d < _0x1f0277;
            _0x50806d++
          ) {
            _0x59035a +=
              '%' +
              ('00' + _0x30510c['charCodeAt'](_0x50806d)['toString'](0x10))[
                'slice'
              ](-0x2);
          }
          return decodeURIComponent(_0x59035a);
        };
        (_0x3895['khSdof'] = _0xc906db),
          (_0x26462a = arguments),
          (_0x3895['ZiNagC'] = !![]);
      }
      const _0x329223 = _0x1d3a0f[0x0],
        _0x3c99cb = _0x3895db + _0x329223,
        _0x435bee = _0x26462a[_0x3c99cb];
      return (
        !_0x435bee
          ? ((_0x1637c8 = _0x3895['khSdof'](_0x1637c8)),
            (_0x26462a[_0x3c99cb] = _0x1637c8))
          : (_0x1637c8 = _0x435bee),
        _0x1637c8
      );
    }),
    _0x3895(_0x26462a, _0x38bbdb)
  );
}
let status;
const notify = $['isNode']() ? require(_0x516883(0x279, 'xc3I')) : '';
status =
  (status = $[_0x4e5dc2(0x18d)](_0x516883(0x274, '^$05')) || '1') > 0x1
    ? '' + status
    : '';
function _0x45e1(_0x26462a, _0x38bbdb) {
  const _0x1d3a0f = _0x1d3a();
  return (
    (_0x45e1 = function (_0x3895db, _0x5d5a3e) {
      _0x3895db = _0x3895db - 0x169;
      let _0x1637c8 = _0x1d3a0f[_0x3895db];
      if (_0x45e1['hegHJM'] === undefined) {
        var _0xc906db = function (_0x4589ae) {
          const _0x30510c =
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
          let _0x59035a = '',
            _0x3fd48a = '';
          for (
            let _0x25c7b7 = 0x0, _0x4f5ef8, _0x1fc953, _0x50806d = 0x0;
            (_0x1fc953 = _0x4589ae['charAt'](_0x50806d++));
            ~_0x1fc953 &&
            ((_0x4f5ef8 =
              _0x25c7b7 % 0x4 ? _0x4f5ef8 * 0x40 + _0x1fc953 : _0x1fc953),
            _0x25c7b7++ % 0x4)
              ? (_0x59035a += String['fromCharCode'](
                  0xff & (_0x4f5ef8 >> ((-0x2 * _0x25c7b7) & 0x6))
                ))
              : 0x0
          ) {
            _0x1fc953 = _0x30510c['indexOf'](_0x1fc953);
          }
          for (
            let _0x1f0277 = 0x0, _0xdc7dda = _0x59035a['length'];
            _0x1f0277 < _0xdc7dda;
            _0x1f0277++
          ) {
            _0x3fd48a +=
              '%' +
              ('00' + _0x59035a['charCodeAt'](_0x1f0277)['toString'](0x10))[
                'slice'
              ](-0x2);
          }
          return decodeURIComponent(_0x3fd48a);
        };
        const _0x45e16c = function (_0x5f041a, _0x223be5) {
          let _0x35b242 = [],
            _0x2013b2 = 0x0,
            _0x68e897,
            _0x4844d7 = '';
          _0x5f041a = _0xc906db(_0x5f041a);
          let _0x58627e;
          for (_0x58627e = 0x0; _0x58627e < 0x100; _0x58627e++) {
            _0x35b242[_0x58627e] = _0x58627e;
          }
          for (_0x58627e = 0x0; _0x58627e < 0x100; _0x58627e++) {
            (_0x2013b2 =
              (_0x2013b2 +
                _0x35b242[_0x58627e] +
                _0x223be5['charCodeAt'](_0x58627e % _0x223be5['length'])) %
              0x100),
              (_0x68e897 = _0x35b242[_0x58627e]),
              (_0x35b242[_0x58627e] = _0x35b242[_0x2013b2]),
              (_0x35b242[_0x2013b2] = _0x68e897);
          }
          (_0x58627e = 0x0), (_0x2013b2 = 0x0);
          for (
            let _0x49d51d = 0x0;
            _0x49d51d < _0x5f041a['length'];
            _0x49d51d++
          ) {
            (_0x58627e = (_0x58627e + 0x1) % 0x100),
              (_0x2013b2 = (_0x2013b2 + _0x35b242[_0x58627e]) % 0x100),
              (_0x68e897 = _0x35b242[_0x58627e]),
              (_0x35b242[_0x58627e] = _0x35b242[_0x2013b2]),
              (_0x35b242[_0x2013b2] = _0x68e897),
              (_0x4844d7 += String['fromCharCode'](
                _0x5f041a['charCodeAt'](_0x49d51d) ^
                  _0x35b242[
                    (_0x35b242[_0x58627e] + _0x35b242[_0x2013b2]) % 0x100
                  ]
              ));
          }
          return _0x4844d7;
        };
        (_0x45e1['HDhfMV'] = _0x45e16c),
          (_0x26462a = arguments),
          (_0x45e1['hegHJM'] = !![]);
      }
      const _0x329223 = _0x1d3a0f[0x0],
        _0x3c99cb = _0x3895db + _0x329223,
        _0x435bee = _0x26462a[_0x3c99cb];
      return (
        !_0x435bee
          ? (_0x45e1['kByaVu'] === undefined && (_0x45e1['kByaVu'] = !![]),
            (_0x1637c8 = _0x45e1['HDhfMV'](_0x1637c8, _0x5d5a3e)),
            (_0x26462a[_0x3c99cb] = _0x1637c8))
          : (_0x1637c8 = _0x435bee),
        _0x1637c8
      );
    }),
    _0x45e1(_0x26462a, _0x38bbdb)
  );
}
let elmckArr = [],
  allMessage = '',
  time = Math['round'](Date[_0x516883(0x19c, '8$zG')]() / 0x3e8),
  elmck =
    ($['isNode']()
      ? process[_0x516883(0x1ab, 'o7wr')][_0x516883(0x1e5, 'jff6')]
      : $['getdata'](_0x516883(0x2a3, 'bGVH'))) || '',
  elmdh =
    ($['isNode']()
      ? process[_0x516883(0x264, 'zCNj')][_0x516883(0x250, '4mXv')]
      : $[_0x4e5dc2(0x2c5)](_0x516883(0x232, 'Nm[y'))) || 'false',
  elmtz =
    ($[_0x516883(0x1f3, 'Ydio')]()
      ? process[_0x516883(0x263, 'SktP')]['elmtz']
      : $[_0x4e5dc2(0x2c5)](_0x516883(0x311, 'SktP'))) || '0',
  elmdhzh =
    ($[_0x4e5dc2(0x229)]()
      ? process[_0x516883(0x36c, '8$zG')][_0x4e5dc2(0x2c0)]
      : $['getdata']('elmdhzh')) || '',
  elmcks = '',
  acceptTagCode,
  queryTagCode,
  dharr = [],
  rw = [],
  num = rand(0xa, 0x63),
  ownerId = _0x4e5dc2(0x27d),
  gqmsg,
  qjmsg,
  umidToken =
    'defaultToken1_um_not_loaded@@https://tb.ele.me/wow/alsc/mod/d5275789de46503ba0908a9d@@' +
    Date[_0x516883(0x284, '0qa@')](),
  ua =
    'defaultUA1_uab_not_loaded@@https://tb.ele.me/wow/alsc/mod/d5275789de46503ba0908a9d@@' +
    Date[_0x516883(0x212, 'sqvW')]();
Date[_0x4e5dc2(0x37b)][_0x516883(0x34d, 'sqvW')] = function (_0x1fc953) {
  const _0x61cd4c = _0x516883,
    _0x249627 = _0x4e5dc2;
  var _0x50806d = {
    'M+': this['getMonth']() + 0x1,
    'd+': this[_0x249627(0x275)](),
    'h+': this[_0x61cd4c(0x23e, '8kA5')](),
    'm+': this[_0x61cd4c(0x2c7, '5rvJ')](),
    's+': this['getSeconds'](),
    S: this[_0x61cd4c(0x249, 'UN(9')]()
  };
  if (/(y+)/[_0x61cd4c(0x340, 'AJJm')](_0x1fc953))
    _0x1fc953 = _0x1fc953[_0x61cd4c(0x24c, '2ama')](
      RegExp['$1'],
      (this[_0x249627(0x33f)]() + '')[_0x61cd4c(0x2d4, 'SGxf')](
        0x4 - RegExp['$1'][_0x61cd4c(0x195, 'UN(9')]
      )
    );
  for (var _0x1f0277 in _0x50806d)
    if (new RegExp('(' + _0x1f0277 + ')')[_0x61cd4c(0x29d, 'N0N]')](_0x1fc953))
      _0x1fc953 = _0x1fc953['replace'](
        RegExp['$1'],
        RegExp['$1']['length'] == 0x1
          ? _0x50806d[_0x1f0277]
          : ('00' + _0x50806d[_0x1f0277])[_0x61cd4c(0x27f, 'GM&E')](
              ('' + _0x50806d[_0x1f0277])[_0x249627(0x1a8)]
            )
      );
  return _0x1fc953;
};
function isFileExist(_0xdc7dda) {
  const _0x3bb2b5 = _0x4e5dc2;
  try {
    gtr[_0x3bb2b5(0x1b2)](_0xdc7dda, gtr['F_OK']);
  } catch (_0x5f041a) {
    return ![];
  }
  return !![];
}
!(async () => {
  const _0x7bc670 = _0x516883,
    _0x1d1e5a = _0x4e5dc2;
  if (typeof $request !== 'undefined') fhxzck();
  else {
    if (!$[_0x1d1e5a(0x229)]()) {
      elmckArr[_0x1d1e5a(0x351)]($[_0x1d1e5a(0x2c5)](_0x7bc670(0x271, 'UN(9')));
      let _0x223be5 = $[_0x7bc670(0x27b, 'hk0s')]('elmcount') || '1';
      for (let _0x35b242 = 0x2; _0x35b242 <= _0x223be5; _0x35b242++) {
        elmckArr['push']($[_0x7bc670(0x342, '4&vr')]('elmck' + _0x35b242));
      }
      await qswcdl();
    } else {
      if (elmck && elmck[_0x1d1e5a(0x17e)]('@') > -0x1)
        (elmckArr = elmck[_0x7bc670(0x28f, 'jff6')]('@')),
          console[_0x7bc670(0x21d, 'o7wr')]('您选择的是用\x22@\x22隔开\x0a');
      else {
        if (elmck && elmck[_0x7bc670(0x2a8, 'SktP')]('\x0a') > -0x1)
          (elmckArr = elmck['split']('\x0a')),
            console[_0x1d1e5a(0x2ae)](_0x7bc670(0x277, 'hk0s'));
        else
          elmck && elmck[_0x1d1e5a(0x17e)]('&') > -0x1
            ? ((elmckArr = elmck[_0x7bc670(0x30d, 'N0N]')]('&')),
              console['log'](_0x1d1e5a(0x2b5)))
            : (elmcks = [elmck]);
      }
      Object['keys'](elmcks)[_0x7bc670(0x1e2, 'l5ZA')](_0x2013b2 => {
        const _0x36d224 = _0x7bc670;
        elmcks[_0x2013b2] &&
          elmckArr[_0x36d224(0x34e, '9W1c')](elmcks[_0x2013b2]);
      }),
        await qswcdl();
    }
    if (elmtz == 0x1)
      await notify[_0x1d1e5a(0x2a0)]('饿了么吃货豆', '' + qjmsg, '');
    else
      elmtz == 0x2
        ? gqmsg &&
          (await notify[_0x1d1e5a(0x2a0)](
            _0x7bc670(0x35e, 'XX7E'),
            '' + gqmsg,
            ''
          ))
        : await notify['sendNotify'](_0x1d1e5a(0x1d3), '' + allMessage, '');
  }
})()
  [_0x4e5dc2(0x215)](_0x68e897 => $['logErr'](_0x68e897))
  [_0x4e5dc2(0x210)](() => $[_0x516883(0x2af, 'q](%')]());
function fhxzck() {
  const _0x3f137c = _0x4e5dc2,
    _0x1fcfa6 = _0x516883;
  if (
    $request[_0x1fcfa6(0x16d, '^$05')][_0x1fcfa6(0x21f, 'l5ZA')](
      _0x1fcfa6(0x27e, '#Nf[')
    ) > -0x1
  ) {
    const _0x4844d7 =
      $request[_0x1fcfa6(0x30c, '9W1c')][_0x1fcfa6(0x28e, '#Nf[')];
    if (_0x4844d7) $['setdata'](_0x4844d7, _0x1fcfa6(0x25f, '2ama') + status);
    $['log'](_0x4844d7),
      $[_0x3f137c(0x36e)](
        $[_0x3f137c(0x30b)],
        '',
        _0x1fcfa6(0x2ec, 'xc3I') + status + _0x1fcfa6(0x345, 'PrZQ')
      );
  }
}
function qswcdl(_0x58627e = 0x0) {
  return new Promise(_0x49d51d => {
    const _0x24052e = _0x3895,
      _0x46dafc = _0x45e1;
    let _0x1d4798 = { url: _0x46dafc(0x2be, 'jff6'), headers: '' };
    $[_0x24052e(0x1da)](
      _0x1d4798,
      async (_0x329d2b, _0x4b648b, _0x725149) => {
        const _0x447ff5 = _0x24052e,
          _0x548a08 = _0x46dafc;
        try {
          _0x725149 = JSON['parse'](_0x725149);
          if (_0x725149[_0x548a08(0x32b, 'GjS3')] == 0x1) {
            _0x725149[_0x447ff5(0x1ae)] != undefined &&
              ((umidToken = _0x725149[_0x548a08(0x2b9, 't@$L')]),
              (ua = _0x725149['ua']));
            (ownerId = _0x725149[_0x447ff5(0x2e3)]),
              console[_0x548a08(0x2a4, 'Ydio')](
                _0x447ff5(0x246) + _0x725149[_0x548a08(0x2a5, '0qa@')]
              ),
              (allMessage += ''),
              (allMessage +=
                '\x0a脚本状态：' + _0x725149[_0x548a08(0x372, 'je#p')]),
              console[_0x548a08(0x1f7, 'eO[p')](
                '共' + elmckArr['length'] + _0x548a08(0x261, 'vz(j')
              );
            if (elmdh != _0x548a08(0x2d2, 't@$L')) {
              (dharr = elmdhzh[_0x548a08(0x2e2, '0[&u')]('@')),
                console[_0x548a08(0x20d, 'SktP')](_0x548a08(0x216, 'XX7E')),
                (allMessage += _0x447ff5(0x2f9));
              for (
                let _0x2e2919 = 0x0;
                _0x2e2919 < elmckArr[_0x447ff5(0x1a8)];
                _0x2e2919++
              ) {
                ($[_0x447ff5(0x305)] = ''),
                  (elmck = elmckArr[_0x2e2919]),
                  ($[_0x548a08(0x2ad, 'jff6')] = _0x2e2919 + 0x1),
                  console[_0x548a08(0x338, 't@$L')](
                    _0x447ff5(0x25b) + $[_0x447ff5(0x303)] + '】'
                  ),
                  (allMessage += _0x447ff5(0x25b) + $[_0x447ff5(0x303)] + '】');
                if (elmck['indexOf'](_0x548a08(0x341, 'sqvW')) > -0x1) {
                  let _0x3f037f = elmck['match'](/cookie2=(.+?);/)[0x0];
                  elmck = elmck['replace'](_0x3f037f, '');
                }
                if (elmdhzh == '') PrizeIndex(elmck, $[_0x447ff5(0x303)]);
                else
                  for (let _0x2f226c of dharr) {
                    _0x2f226c == $[_0x447ff5(0x303)] &&
                      PrizeIndex(elmck, $[_0x447ff5(0x303)]),
                      await $[_0x447ff5(0x2c2)](0x1);
                  }
              }
            } else
              console['log'](_0x548a08(0x37d, 'eO[p')),
                (allMessage += _0x447ff5(0x247));
            for (
              let _0x190047 = 0x0;
              _0x190047 < elmckArr[_0x447ff5(0x1a8)];
              _0x190047++
            ) {
              ($[_0x447ff5(0x305)] = ''),
                (elmck = elmckArr[_0x190047]),
                ($[_0x447ff5(0x303)] = _0x190047 + 0x1),
                console[_0x548a08(0x1e1, '3kwV')](
                  _0x447ff5(0x304) + $[_0x447ff5(0x303)] + '】'
                ),
                (allMessage +=
                  _0x548a08(0x183, 'XX7E') +
                  $[_0x548a08(0x375, '&FJP')] +
                  '】'),
                console[_0x447ff5(0x2ae)]('检测cookie');
              if (elmck[_0x447ff5(0x17e)]('cookie2') > -0x1) {
                let _0xf30141 =
                  elmck[_0x548a08(0x324, 'SGxf')](/cookie2=(.+?);/)[0x0];
                (elmck = elmck[_0x447ff5(0x2a9)](_0xf30141, '')),
                  console['log'](_0x548a08(0x189, 'KF)d'));
              }
              await user_mini(),
                await user(),
                $[_0x548a08(0x1f7, 'eO[p')](_0x447ff5(0x242));
            }
            for (
              let _0x30d3d8 = 0x0;
              _0x30d3d8 < elmckArr[_0x548a08(0x1e9, 'KF)d')];
              _0x30d3d8++
            ) {
              (elmck = elmckArr[_0x30d3d8]),
                ($['index'] = _0x30d3d8 + 0x1),
                console['log'](
                  _0x447ff5(0x2bd) + $[_0x548a08(0x2e6, '8$zG')] + '】'
                ),
                (allMessage += _0x447ff5(0x2bd) + $[_0x447ff5(0x303)] + '】');
              if (elmck[_0x447ff5(0x17e)](_0x447ff5(0x17d)) > -0x1) {
                let _0x1837a5 = elmck[_0x447ff5(0x1a0)](/cookie2=(.+?);/)[0x0];
                elmck = elmck[_0x447ff5(0x2a9)](_0x1837a5, '');
              }
              await user_mini(), await userend(), await user_minis();
            }
            $[_0x548a08(0x181, 'bGVH')](_0x447ff5(0x26b)),
              (allMessage += '\x0a');
          } else
            console['log'](
              _0x548a08(0x2d9, 'KF)d') + _0x725149[_0x548a08(0x266, 'bGVH')]
            ),
              (allMessage += _0x447ff5(0x20f) + _0x725149['elmmsg1']);
        } catch (_0x3da2d2) {
          $['logErr'](_0x3da2d2, _0x4b648b);
        } finally {
          _0x49d51d();
        }
      },
      0x0
    );
  });
}
async function PrizeIndex(_0x571683, _0x2b563d) {
  const _0x5c9223 = _0x516883,
    _0x3bb647 = _0x4e5dc2;
  let _0x512121 = new Date()[_0x3bb647(0x1a6)](_0x3bb647(0x18a)),
    _0x3ebaa4 = $[_0x5c9223(0x34a, 'sqvW')]()
      ? process[_0x5c9223(0x278, '4&vr')][_0x3bb647(0x1ef)]
        ? process[_0x5c9223(0x239, '2jm5')][_0x5c9223(0x1e7, 'MLd$')] * 0x1
        : 0x3c
      : $[_0x3bb647(0x2c5)](_0x5c9223(0x188, 'SktP'))
      ? $[_0x5c9223(0x1bb, 'hk0s')]('SM_STARTTIME') * 0x1
      : 0x3c;
  !_0x3ebaa4 && (_0x3ebaa4 = 59.96);
  if (_0x512121 < 0x3c) {
    let _0xce476a = (_0x3ebaa4 - _0x512121) * 0x3e8;
    console[_0x3bb647(0x2ae)](_0x5c9223(0x2a7, '4&vr') + _0xce476a / 0x3e8),
      await sleep(_0xce476a);
  }
  svip_scene(_0x571683, _0x2b563d),
    svip_scene(_0x571683, _0x2b563d),
    svip_scene(_0x571683, _0x2b563d);
}
function sleep(_0x160166) {
  return new Promise(_0x2cd18d => setTimeout(_0x2cd18d, _0x160166));
}
function svip_scene(_0x7020b7, _0x5d7299) {
  return new Promise(_0x337e50 => {
    const _0x1900ee = _0x45e1,
      _0x4e5cdb = _0x3895;
    let _0x1be67a = {
      url: _0x4e5cdb(0x2ca) + num + _0x1900ee(0x269, 'zCNj') + num,
      headers: {
        Cookie: _0x7020b7,
        Host: _0x1900ee(0x17a, 'z[Kw'),
        'f-refer': 'wv_h5',
        Accept: _0x4e5cdb(0x378),
        'x-shard': 'loc=113.387' + num + _0x4e5cdb(0x24d) + num + '970003977',
        'bx-umidToken': umidToken,
        'bx-ua': ua,
        'f-pTraceId': _0x4e5cdb(0x29e),
        'Accept-Language': _0x4e5cdb(0x2d6),
        'Accept-Encoding': _0x4e5cdb(0x2e0),
        'Content-Type': 'application/json;charset=utf-8',
        Origin: _0x4e5cdb(0x22a),
        'x-ua':
          _0x1900ee(0x2b2, 'SktP') +
          num +
          _0x1900ee(0x225, '2jm5') +
          num +
          _0x4e5cdb(0x18b) +
          num +
          _0x1900ee(0x331, '#Nf[') +
          num +
          '970003977',
        Connection: _0x1900ee(0x322, '^$05')
      }
    };
    $['get'](
      _0x1be67a,
      async (_0x10bc04, _0x3fa7b7, _0x801963) => {
        const _0x436327 = _0x1900ee,
          _0x1b86a9 = _0x4e5cdb;
        try {
          let _0x1a9de0 = JSON[_0x1b86a9(0x19f)](_0x801963);
          _0x1a9de0[_0x436327(0x2b3, 'if(x')][0x0][_0x436327(0x2cc, 'o7wr')] ==
          0x1
            ? (console[_0x1b86a9(0x2ae)](
                '\x0a【账号' + _0x5d7299 + _0x1b86a9(0x374)
              ),
              (allMessage +=
                _0x1b86a9(0x299) +
                _0x5d7299 +
                '】🔔10元无门槛优惠卷兑换成功\x0a'),
              (qjmsg =
                qjmsg +
                (_0x436327(0x1b0, '#Nf[') + _0x5d7299 + _0x1b86a9(0x315))))
            : (console['log'](
                _0x1b86a9(0x299) +
                  _0x5d7299 +
                  '】🕛无门槛优惠卷兑换失败：' +
                  _0x1a9de0[_0x1b86a9(0x1ad)][0x0]['xmessage'] +
                  '\x0a'
              ),
              (allMessage +=
                _0x436327(0x27a, 'xc3I') +
                _0x5d7299 +
                '】🕛无门槛优惠卷兑换失败：' +
                _0x1a9de0[_0x1b86a9(0x1ad)][0x0][_0x1b86a9(0x300)] +
                '\x0a'));
        } catch (_0x4246e4) {
          $['logErr'](_0x4246e4, _0x3fa7b7);
        } finally {
          _0x337e50();
        }
      },
      0x0
    );
  });
}
function home_ch_tasklist() {
  return new Promise(_0x5cf6ef => {
    const _0x5adbb7 = _0x45e1,
      _0xa8deee = _0x3895;
    let _0x5c9d75 = {
      url: _0xa8deee(0x1fa) + num + _0xa8deee(0x241) + num,
      headers: { Cookie: elmck }
    };
    $[_0x5adbb7(0x2ef, 'sqvW')](
      _0x5c9d75,
      async (_0x13a3c6, _0x4088b6, _0x31b417) => {
        const _0x488db1 = _0xa8deee,
          _0x2aa3f4 = _0x5adbb7;
        try {
          let _0x1a081f = JSON[_0x2aa3f4(0x376, 'eO[p')](_0x31b417);
          (actId = _0x1a081f[_0x488db1(0x2fa)][_0x488db1(0x1b1)][
            _0x2aa3f4(0x226, 'l^y*')
          ](
            _0x52770f =>
              _0x52770f[_0x488db1(0x169)]['$attr'][_0x488db1(0x357)] ==
              _0x488db1(0x365)
          )[_0x488db1(0x169)][_0x2aa3f4(0x298, '8kA5')][
            _0x2aa3f4(0x248, '5rvJ')
          ]),
            actId && (await gfd(actId));
        } catch (_0x45a634) {
          $['logErr'](_0x45a634, _0x4088b6);
        } finally {
          _0x5cf6ef();
        }
      },
      0x0
    );
  });
}
function gfd(_0x28479f) {
  return new Promise(_0x29e0ef => {
    const _0x21cf9c = _0x45e1,
      _0x369809 = _0x3895;
    let _0x591175 = {
      url:
        _0x369809(0x2db) +
        _0x28479f +
        _0x369809(0x18f) +
        num +
        _0x21cf9c(0x367, 'sqvW') +
        num,
      headers: { Cookie: elmck }
    };
    $[_0x369809(0x1da)](
      _0x591175,
      async (_0xfe38e9, _0xe05ad3, _0xe0298) => {
        const _0xe6c246 = _0x369809,
          _0x7a0eca = _0x21cf9c;
        try {
          let _0x313213 = JSON['parse'](_0xe0298);
          if (_0x313213[_0x7a0eca(0x1cf, 'MLd$')] == 0xc8) {
            let _0x4061f1 =
              _0x313213[_0x7a0eca(0x2d5, 'MLd$')][0x0]['data'][0x0][
                _0xe6c246(0x252)
              ];
            console[_0xe6c246(0x2ae)](
              _0x7a0eca(0x2c4, 'qqsL') +
                _0x4061f1[_0xe6c246(0x2e4)][_0xe6c246(0x333)] +
                ',参加人数：' +
                _0x4061f1['lastActInfo'][_0xe6c246(0x343)]
            ),
              (allMessage +=
                '\x0a当前瓜分吃货豆:' +
                _0x4061f1['lastActInfo'][_0x7a0eca(0x2f4, 'Kg!9')] +
                _0x7a0eca(0x16e, 'XX7E') +
                _0x4061f1[_0x7a0eca(0x352, 'l5ZA')][_0x7a0eca(0x2da, 'GM&E')]);
            if (_0x4061f1['userStatus'] == 0x0 && _0x4061f1[_0xe6c246(0x359)]) {
              console[_0x7a0eca(0x21d, 'o7wr')](_0xe6c246(0x368)),
                (allMessage += '\x0a当前待领取');
              let _0x607a53 =
                  _0x4061f1[_0x7a0eca(0x253, 'hk0s')][_0xe6c246(0x27c)],
                _0x30be35 = _0x4061f1[_0x7a0eca(0x327, '8kA5')]['amount'];
              await xSupply(_0x607a53, _0x28479f, _0x30be35);
            } else {
              if (_0x4061f1[_0xe6c246(0x227)] == 0xa)
                console[_0xe6c246(0x2ae)](
                  _0xe6c246(0x2d0) +
                    parseInt(
                      _0x4061f1['lastActInfo'][_0x7a0eca(0x2f4, 'Kg!9')] /
                        _0x4061f1['lastActInfo'][_0x7a0eca(0x235, 'q](%')]
                    )
                ),
                  (allMessage +=
                    _0x7a0eca(0x294, 'q](%') +
                    parseInt(
                      _0x4061f1[_0xe6c246(0x2e4)][_0x7a0eca(0x20e, 'xc3I')] /
                        _0x4061f1['lastActInfo']['lastEnrollCount']
                    ));
              else {
                if (
                  _0x4061f1[_0x7a0eca(0x33c, '^$05')] == 0x0 &&
                  _0x4061f1[_0x7a0eca(0x2a1, 'z[Kw')] == ![]
                ) {
                  console['log'](_0x7a0eca(0x25d, '2ama')),
                    (allMessage += '\x0a当前待报名');
                  let _0x1f2aa6 = _0x4061f1['lastActInfo'][_0xe6c246(0x27c)];
                  await asac(
                    _0x1f2aa6,
                    _0x28479f,
                    _0x4061f1[_0x7a0eca(0x173, '9W1c')]
                  );
                }
              }
            }
          }
        } catch (_0x9e5450) {
          $[_0xe6c246(0x1f2)](_0x9e5450, _0xe05ad3);
        } finally {
          _0x29e0ef();
        }
      },
      0x0
    );
  });
}
function asac(_0x1905ad, _0x13326b, _0x58d4ab) {
  return new Promise(_0x5d4544 => {
    const _0xbb7225 = _0x45e1,
      _0x3c36a7 = _0x3895;
    let _0x883d34 = {
      url: _0x3c36a7(0x21a) + _0x58d4ab,
      headers: {
        Cookie: elmck,
        Host: _0xbb7225(0x1c3, 'bGVH'),
        'f-refer': 'wv_h5',
        Accept: _0x3c36a7(0x378),
        'x-shard':
          _0x3c36a7(0x2b6) + num + _0x3c36a7(0x24d) + num + _0x3c36a7(0x1b5),
        'bx-umidToken': umidToken,
        'bx-ua': ua,
        'f-pTraceId': _0xbb7225(0x2dd, '&FJP'),
        'Accept-Language': _0xbb7225(0x1af, 'UN(9'),
        'Accept-Encoding': _0xbb7225(0x20a, 'AJJm'),
        'Content-Type': _0x3c36a7(0x329),
        Origin: _0xbb7225(0x180, 'vz(j'),
        'x-ua':
          _0x3c36a7(0x213) +
          num +
          _0x3c36a7(0x28a) +
          num +
          _0x3c36a7(0x18b) +
          num +
          _0x3c36a7(0x37a) +
          num +
          _0xbb7225(0x25c, '0qa@'),
        Connection: _0xbb7225(0x28d, 'GM&E')
      },
      body:
        '{\x22params\x22:[{\x22tagCode\x22:\x22381410\x22,\x22extra\x22:{\x22solutionType\x22:\x22ENROLL\x22,\x22phaseId\x22:' +
        _0x1905ad +
        _0xbb7225(0x1a7, 'PrZQ') +
        _0x13326b +
        '\x22,\x22sceneCode\x22:\x22divide_chd_interact\x22,\x22client\x22:\x22eleme\x22}}],\x22bizCode\x22:\x22biz_card_main\x22,\x22longitude\x22:113.38713836669' +
        num +
        ',\x22latitude\x22:22.931276321411' +
        num +
        '}'
    };
    $[_0xbb7225(0x172, '0[&u')](
      _0x883d34,
      async (_0x2f36c6, _0x500a86, _0x3362cb) => {
        const _0x290dd6 = _0x3c36a7,
          _0x4d362b = _0xbb7225;
        try {
          let _0xf6af64 = JSON[_0x4d362b(0x35f, '0qa@')](_0x3362cb);
          _0xf6af64['code'] == 0xc8
            ? (console['log'](_0x290dd6(0x1a2)),
              (allMessage += _0x4d362b(0x2de, '4&vr')))
            : (console[_0x4d362b(0x1df, 'l^y*')](
                '\x0a瓜分参与失败：' + _0xf6af64[_0x4d362b(0x202, '^$05')]
              ),
              (allMessage +=
                '\x0a瓜分参与失败：' + _0xf6af64[_0x290dd6(0x305)]));
        } catch (_0x3a52e8) {
          $[_0x4d362b(0x354, 'bGVH')](_0x3a52e8, _0x500a86);
        } finally {
          _0x5d4544();
        }
      },
      0x0
    );
  });
}
function xSupply(_0x1aa8df, _0x5726ef, _0x4efcc9) {
  return new Promise(_0x5ab7d9 => {
    const _0x385cbd = _0x3895,
      _0x23e71c = _0x45e1;
    let _0xb90b6a = {
      url: _0x23e71c(0x222, 'MLd$'),
      headers: {
        Cookie: elmck,
        Host: _0x23e71c(0x1fd, 'GM&E'),
        'f-refer': 'wv_h5',
        Accept: _0x385cbd(0x378),
        'x-shard':
          _0x23e71c(0x2d3, '0[&u') +
          num +
          _0x23e71c(0x230, 't@$L') +
          num +
          _0x23e71c(0x1c2, 'onwu'),
        'bx-umidToken': umidToken,
        'bx-ua': ua,
        'f-pTraceId': _0x23e71c(0x344, 'if(x'),
        'Accept-Language': _0x385cbd(0x2d6),
        'Accept-Encoding': 'gzip,\x20deflate,\x20br',
        'Content-Type': _0x23e71c(0x285, '5rvJ'),
        Origin: _0x385cbd(0x22a),
        'x-ua':
          'RenderWay/H5\x20AppName/elmc\x20DeviceId/2423E' +
          num +
          _0x385cbd(0x28a) +
          num +
          _0x23e71c(0x18e, '&FJP') +
          num +
          _0x23e71c(0x323, 'T@p4') +
          num +
          '970003977',
        Connection: _0x385cbd(0x223)
      },
      body:
        _0x23e71c(0x234, '4&vr') +
        _0x1aa8df +
        _0x385cbd(0x21e) +
        _0x5726ef +
        _0x23e71c(0x29a, 'UN(9') +
        _0x4efcc9 +
        '}}],\x22bizCode\x22:\x22biz_card_main\x22,\x22longitude\x22:113.38713836669' +
        num +
        _0x385cbd(0x1f6) +
        num +
        '}'
    };
    $['post'](
      _0xb90b6a,
      async (_0xaf4c10, _0x510655, _0xa41eef) => {
        const _0x395fee = _0x385cbd,
          _0x834428 = _0x23e71c;
        try {
          let _0x5dc7ce = JSON[_0x834428(0x320, 'jff6')](_0xa41eef);
          _0x5dc7ce[_0x395fee(0x1f0)] == 0xc8
            ? (console['log'](
                _0x834428(0x366, '#Nf[') + _0x4efcc9 + _0x834428(0x379, 'qqsL')
              ),
              (allMessage +=
                _0x395fee(0x361) + _0x4efcc9 + _0x834428(0x310, 'XX7E')))
            : (console['log'](_0x395fee(0x1c0) + _0x5dc7ce['message']),
              (allMessage += _0x395fee(0x1c0) + _0x5dc7ce[_0x395fee(0x305)]));
        } catch (_0x536164) {
          $[_0x395fee(0x1f2)](_0x536164, _0x510655);
        } finally {
          _0x5ab7d9();
        }
      },
      0x0
    );
  });
}
function tagcode() {
  return new Promise(_0x5897c0 => {
    const _0x31e23d = _0x3895;
    let _0x5b1fcf = {
      url: _0x31e23d(0x1ea) + num + '&latitude=22.9312763214111' + num,
      headers: { Cookie: elmck }
    };
    $['get'](
      _0x5b1fcf,
      async (_0x3a9b50, _0xb48f15, _0x57e072) => {
        const _0x2cb572 = _0x45e1,
          _0xf3737c = _0x31e23d;
        try {
          let _0x293b2c = JSON[_0xf3737c(0x19f)](_0x57e072);
          _0x293b2c['success'] &&
            ((queryTagCode = _0x293b2c[_0x2cb572(0x16a, 'Nm[y')][
              _0x2cb572(0x171, 'N0N]')
            ][_0x2cb572(0x236, 'XX7E')](
              _0x49a2c7 =>
                _0x49a2c7[_0xf3737c(0x169)]['$attr'][_0x2cb572(0x23d, 'Nm[y')]
            )[_0x2cb572(0x335, 'l^y*')][_0xf3737c(0x20c)]['queryTagCode']),
            (acceptTagCode = _0x293b2c[_0xf3737c(0x2fa)][
              _0x2cb572(0x194, 'Nm[y')
            ][_0x2cb572(0x286, '4mXv')](
              _0x1a5596 =>
                _0x1a5596[_0xf3737c(0x169)][_0x2cb572(0x231, 'GjS3')][
                  _0x2cb572(0x1bf, 'xc3I')
                ]
            )[_0xf3737c(0x169)][_0xf3737c(0x20c)][_0xf3737c(0x2df)]),
            console['log']('tagCode获取成功'),
            (allMessage += _0xf3737c(0x2b4)));
        } catch (_0x3255c1) {
          $[_0x2cb572(0x369, 'PrZQ')](_0x3255c1, _0xb48f15);
        } finally {
          _0x5897c0();
        }
      },
      0x0
    );
  });
}
function user() {
  return new Promise(_0x3d77e4 => {
    const _0xda064f = _0x3895,
      _0x49d999 = _0x45e1;
    let _0x35a8aa = {
      url: _0x49d999(0x358, '8kA5') + num + _0xda064f(0x187) + num,
      headers: { Cookie: elmck }
    };
    $[_0x49d999(0x211, '#Nf[')](
      _0x35a8aa,
      async (_0x441729, _0x409689, _0x36cb83) => {
        const _0x2c2926 = _0x49d999,
          _0x163af0 = _0xda064f;
        try {
          let _0x7f79a = JSON[_0x163af0(0x19f)](_0x36cb83);
          if (_0x7f79a[_0x2c2926(0x24a, 'qqsL')]) {
            let _0x36f205 = 0x0;
            _0x7f79a[_0x163af0(0x16f)]['length'] != 0x0 &&
              (_0x36f205 =
                _0x7f79a[_0x163af0(0x16f)][0x0][_0x2c2926(0x192, '3kwV')]),
              console['log'](_0x2c2926(0x2b8, '0[&u') + _0x36f205),
              (allMessage += _0x2c2926(0x243, '8NrK') + _0x36f205),
              await tagcode(),
              await $[_0x163af0(0x2c2)](0x1f4),
              await supportor(),
              new Date()[_0x163af0(0x33e)]() > 0x8 &&
                (await home_ch_tasklist()),
              console['log'](_0x163af0(0x31e)),
              (allMessage += _0x2c2926(0x1fc, 'XX7E')),
              await menu(),
              console[_0x2c2926(0x377, 'je#p')]('任务已完成'),
              (allMessage += '\x0a任务已完成'),
              await queryBalance(),
              await queryCasReward(),
              await queryTaskswelfareCode(),
              await queryBalancess();
          } else
            (gqmsg = gqmsg + ('账户' + $[_0x163af0(0x303)] + '的CK过期！')),
              console[_0x163af0(0x2ae)](_0x163af0(0x32c)),
              (allMessage += '\x0a未登录，请检查CK');
        } catch (_0x366b46) {
          $[_0x163af0(0x1f2)](_0x366b46, _0x409689);
        } finally {
          _0x3d77e4();
        }
      },
      0x0
    );
  });
}
function userend() {
  return new Promise(_0x131fda => {
    const _0x3bcbd9 = _0x45e1,
      _0x4aeb38 = _0x3895;
    let _0xbba8f6 = {
      url: _0x4aeb38(0x363) + num + '&latitude=22.9312763214111' + num,
      headers: { Cookie: elmck }
    };
    $[_0x3bcbd9(0x1f1, 'wQPf')](
      _0xbba8f6,
      async (_0x4fd0b6, _0x2cd104, _0x2debdd) => {
        const _0xc6b196 = _0x3bcbd9,
          _0x2905cf = _0x4aeb38;
        try {
          let _0x24edcc = JSON[_0x2905cf(0x19f)](_0x2debdd);
          if (_0x24edcc['success']) {
            let _0x1e1ecd = 0x0;
            _0x24edcc[_0xc6b196(0x31b, 'N0N]')]['length'] != 0x0 &&
              (_0x1e1ecd =
                _0x24edcc[_0x2905cf(0x16f)][0x0][_0xc6b196(0x35a, 'bGVH')]),
              console[_0xc6b196(0x37e, 'T@p4')](_0x2905cf(0x2fe) + _0x1e1ecd),
              (allMessage += _0xc6b196(0x237, 'PrZQ') + _0x1e1ecd);
          }
        } catch (_0x940a30) {
          $[_0xc6b196(0x199, 'eO[p')](_0x940a30, _0x2cd104);
        } finally {
          _0x131fda();
        }
      },
      0x0
    );
  });
}
function user_mini() {
  return new Promise(_0x15b111 => {
    const _0x44f5bb = _0x45e1,
      _0xc74c8b = _0x3895;
    let _0x2bdb0d = {
      url: _0xc74c8b(0x380),
      headers: {
        Host: _0x44f5bb(0x307, 'SktP'),
        Connection: _0xc74c8b(0x223),
        'User-Agent': _0x44f5bb(0x1ed, '#h0Q'),
        'x-mini-wua': '1',
        'f-pTraceId': 'WVNet_WV_5-5-43',
        'f-refer': _0xc74c8b(0x330),
        'Accept-Encoding': _0xc74c8b(0x2e0),
        'Accept-Language': _0x44f5bb(0x1a3, 'UN(9'),
        'x-ua':
          'RenderWay/H5\x20AppName/elmc\x20DeviceId/8087B2CF-E6AF-F09D-DAC6-79464A9FC852\x20AppExtraInfo/%7B%22miniWua%22%3A%2201ef0709%22%2C%22umidToken%22%3A%2243cf4611%22%2C%22ttid%22%3A%22201200%40eleme_iphone_10.7.15%22%2C%22deviceUUID%22%3A%228087B2CF-E6AF-F09D-DAC6-79464A9FC852%22%2C%22utdid%22%3A%22cad9beb1%22%7D',
        'x-shard': _0xc74c8b(0x1fe),
        Cookie: elmck,
        Referer: 'https://h5.ele.me/svip/task-list'
      }
    };
    $[_0xc74c8b(0x1da)](
      _0x2bdb0d,
      async (_0x12c8a6, _0x1ebc73, _0x36edfb) => {
        const _0x3a2a34 = _0xc74c8b,
          _0x3abbe5 = _0x44f5bb;
        try {
          let _0xc61c56 = JSON[_0x3abbe5(0x334, '8$zG')](_0x36edfb);
          _0xc61c56[_0x3a2a34(0x297)]
            ? (console[_0x3a2a34(0x2ae)](
                _0x3abbe5(0x288, 'T@p4') + _0xc61c56[_0x3a2a34(0x1ac)]
              ),
              console[_0x3abbe5(0x346, 'N0N]')](
                _0x3a2a34(0x193) + _0xc61c56[_0x3a2a34(0x297)]
              ))
            : console[_0x3abbe5(0x36d, 'zCNj')](_0x36edfb);
        } catch (_0x4eeb0d) {
          $['logErr'](_0x4eeb0d, _0x1ebc73);
        } finally {
          _0x15b111();
        }
      },
      0x0
    );
  });
}
function queryCasReward() {
  return new Promise(_0x30f171 => {
    const _0xfd895a = _0x3895,
      _0xef1f14 = _0x45e1;
    let _0x4b4866 = {
      url: 'https://httpizza.ele.me/ele-fin-promotion-activity/bonus/queryCasReward?bizScene=each_order_cash_back&grantStatus=ACCEPTED',
      headers: {
        Accept: 'application/json,\x20text/plain,\x20*/*',
        'Accept-Encoding': 'gzip,\x20deflate,\x20br',
        'Accept-Language': _0xef1f14(0x2c1, 'xc3I'),
        Connection: 'keep-alive',
        Cookie: elmck,
        Host: _0xef1f14(0x312, '^$05'),
        'User-Agent':
          _0xfd895a(0x213) +
          num +
          _0xef1f14(0x2f6, 'z[Kw') +
          num +
          _0xfd895a(0x18b) +
          num +
          _0xfd895a(0x37a) +
          num +
          '970003977',
        'x-shard': _0xfd895a(0x314)
      }
    };
    $[_0xfd895a(0x1da)](
      _0x4b4866,
      async (_0x2b5e75, _0x1a99a8, _0x65b94d) => {
        const _0x2de78c = _0xef1f14,
          _0x5c10a1 = _0xfd895a;
        try {
          await $['wait'](0x3e8);
          let _0x382073 = JSON[_0x5c10a1(0x19f)](_0x65b94d);
          if (_0x382073[_0x5c10a1(0x295)])
            for (let _0x4828da of _0x382073[_0x5c10a1(0x295)]) {
              console[_0x2de78c(0x1b3, 'l5ZA')](
                _0x5c10a1(0x36a) + _0x4828da[_0x5c10a1(0x2ea)] / 0x64
              ),
                (allMessage +=
                  _0x2de78c(0x1b8, 'UN(9') +
                  _0x4828da[_0x2de78c(0x170, 'z[Kw')] / 0x64),
                await drawBubbleCashReward(_0x4828da[_0x5c10a1(0x268)]),
                await $[_0x5c10a1(0x2c2)](0x3e8);
            }
        } catch (_0x18e5ad) {
          $['logErr'](_0x18e5ad, _0x1a99a8);
        } finally {
          _0x30f171();
        }
      },
      0x0
    );
  });
}
function drawBubbleCashReward(_0x15af86) {
  return new Promise(_0x4751af => {
    const _0x161b02 = _0x45e1,
      _0x26c562 = _0x3895;
    let _0xee6748 = {
      url: 'https://httpizza.ele.me/ele-fin-promotion-activity/bonus/drawBubbleCashReward',
      headers: {
        Accept: _0x26c562(0x378),
        'Accept-Encoding': _0x161b02(0x21c, 'Kg!9'),
        'Accept-Language': _0x26c562(0x2d6),
        Connection: _0x26c562(0x223),
        Cookie: elmck,
        Host: _0x161b02(0x2c6, 'KF)d'),
        'Content-Type': _0x26c562(0x349),
        'User-Agent':
          'RenderWay/H5\x20AppName/elmc\x20DeviceId/2423E' +
          num +
          _0x161b02(0x2bc, '#Nf[') +
          num +
          _0x26c562(0x18b) +
          num +
          '041531943\x20Latitude/22.931' +
          num +
          '970003977',
        'x-shard':
          'p=1F1C104E4242405D4041414240474A4B4B434341445F41405D4245444B40454A404646464B474545'
      },
      body: '{\x22recordNos\x22:[\x22' + _0x15af86 + _0x26c562(0x206)
    };
    $[_0x161b02(0x37c, 'eO[p')](
      _0xee6748,
      async (_0x4a0070, _0x5c3eb9, _0x249bc9) => {
        const _0x51decd = _0x161b02,
          _0x7e014d = _0x26c562;
        try {
          let _0x1a78d8 = JSON[_0x7e014d(0x19f)](_0x249bc9);
          _0x1a78d8[_0x7e014d(0x1f0)] == _0x7e014d(0x1d2)
            ? (console['log'](_0x51decd(0x214, '8NrK')),
              (allMessage += _0x7e014d(0x1ba)))
            : (console['log'](
                _0x7e014d(0x2eb) + _0x1a78d8[_0x51decd(0x26a, 'AJJm')]
              ),
              (allMessage += _0x51decd(0x2bf, 'jff6') + _0x1a78d8['message']));
        } catch (_0x1105de) {
          $['logErr'](_0x1105de, _0x5c3eb9);
        } finally {
          _0x4751af();
        }
      },
      0x0
    );
  });
}
function accountWithdrawal(_0x51bfa3) {
  return new Promise(_0x2c1766 => {
    const _0x4926e8 = _0x45e1,
      _0x5e9e5b = _0x3895;
    let _0x47f084 = {
      url: _0x5e9e5b(0x258),
      headers: {
        Accept: _0x4926e8(0x16c, 'Nm[y'),
        'Accept-Encoding': _0x4926e8(0x26c, 'MLd$'),
        'Accept-Language': 'zh-cn',
        Connection: _0x5e9e5b(0x223),
        Cookie: elmck,
        Host: _0x5e9e5b(0x283),
        'Content-Type': _0x5e9e5b(0x349),
        'User-Agent':
          'RenderWay/H5\x20AppName/elmc\x20DeviceId/2423E' +
          num +
          _0x5e9e5b(0x28a) +
          num +
          _0x4926e8(0x1a4, 'GM&E') +
          num +
          _0x4926e8(0x1c6, 'SktP') +
          num +
          '970003977',
        'x-shard': _0x4926e8(0x201, '5rvJ')
      },
      body:
        _0x4926e8(0x22b, 'MLd$') +
        _0x51bfa3 +
        ',\x22bizCode\x22:\x22cashback\x22,\x22subSceneCode\x22:\x22cash_back_wd\x22,\x22remark\x22:\x22提现至钱包\x22}'
    };
    $[_0x4926e8(0x255, '4mXv')](
      _0x47f084,
      async (_0x4081e4, _0x1fed66, _0x2d346a) => {
        const _0x39d990 = _0x4926e8,
          _0x4fb2dd = _0x5e9e5b;
        try {
          let _0x14068f = JSON[_0x4fb2dd(0x19f)](_0x2d346a);
          _0x14068f['code'] == '0000'
            ? (console[_0x39d990(0x1e8, '2jm5')]('提现至钱包:提现成功'),
              (allMessage += _0x4fb2dd(0x2f3)))
            : (console[_0x4fb2dd(0x2ae)](
                '提现至钱包:提现失败：' + _0x14068f[_0x39d990(0x36b, 'GM&E')]
              ),
              (allMessage +=
                '\x0a提现至钱包:提现失败：' +
                _0x14068f[_0x39d990(0x1c8, 'AJJm')]));
        } catch (_0xeeae77) {
          $[_0x39d990(0x1d4, 'l^y*')](_0xeeae77, _0x1fed66);
        } finally {
          _0x2c1766();
        }
      },
      0x0
    );
  });
}
function queryTaskswelfareCode() {
  return new Promise(_0xb55cdd => {
    const _0x15ce82 = _0x45e1,
      _0x4394be = _0x3895;
    let _0x44d5a7 = {
      url: _0x4394be(0x332),
      headers: {
        Accept: _0x4394be(0x378),
        'Accept-Encoding': 'gzip,\x20deflate,\x20br',
        'Accept-Language': _0x4394be(0x2d6),
        Connection: _0x4394be(0x223),
        Cookie: elmck,
        Host: 'httpizza.ele.me',
        'User-Agent':
          _0x15ce82(0x240, 'onwu') +
          num +
          _0x4394be(0x28a) +
          num +
          _0x15ce82(0x339, 'GjS3') +
          num +
          '041531943\x20Latitude/22.931' +
          num +
          _0x4394be(0x1b5),
        'x-shard': _0x15ce82(0x1d7, 'T@p4')
      }
    };
    $['get'](
      _0x44d5a7,
      async (_0x30e1a8, _0x4bfa17, _0x1d0fe7) => {
        const _0x11a78f = _0x15ce82,
          _0x2c4672 = _0x4394be;
        try {
          let _0x48bdba = JSON['parse'](_0x1d0fe7);
          if (_0x48bdba[_0x2c4672(0x1f0)] == _0x11a78f(0x328, 'sqvW')) {
            console[_0x2c4672(0x2ae)](_0x11a78f(0x1f5, '8$zG')),
              (allMessage += '\x0a笔笔反：获取任务列表');
            for (let _0x25c5ad of _0x48bdba[_0x11a78f(0x2f0, '2jm5')]) {
              await $[_0x11a78f(0x273, '2jm5')](0x1f4),
                _0x25c5ad['status'] == 'unreceived'
                  ? await receiveAndFinishTask(
                      _0x25c5ad[_0x2c4672(0x203)] + '-' + _0x25c5ad['taskDes'],
                      _0x25c5ad[_0x2c4672(0x282)],
                      _0x25c5ad[_0x2c4672(0x30f)]
                    )
                  : (console[_0x11a78f(0x2e8, '#h0Q')](
                      _0x2c4672(0x244) +
                        _0x25c5ad[_0x2c4672(0x203)] +
                        '-' +
                        _0x25c5ad['taskDes'] +
                        '\x20已完成'
                    ),
                    (allMessage +=
                      _0x11a78f(0x318, 'Nm[y') +
                      _0x25c5ad[_0x2c4672(0x203)] +
                      '-' +
                      _0x25c5ad[_0x2c4672(0x219)] +
                      '\x20已完成'));
            }
          } else
            console[_0x11a78f(0x319, '5rvJ')](
              _0x11a78f(0x33d, '3kwV') + _0x48bdba[_0x2c4672(0x36e)]
            ),
              (allMessage +=
                _0x11a78f(0x1e0, 'if(x') + _0x48bdba[_0x2c4672(0x36e)]);
        } catch (_0x374b1c) {
          $[_0x2c4672(0x1f2)](_0x374b1c, _0x4bfa17);
        } finally {
          _0xb55cdd();
        }
      },
      0x0
    );
  });
}
function receiveAndFinishTask(_0x1a0991, _0x1958e9, _0x1886ca) {
  return new Promise(_0x2ed07c => {
    const _0x45a7f3 = _0x45e1,
      _0x30707c = _0x3895;
    let _0x393947 = {
      url: _0x30707c(0x2ff),
      headers: {
        Accept: _0x45a7f3(0x1d5, 'zCNj'),
        'Accept-Encoding': _0x45a7f3(0x20a, 'AJJm'),
        'Accept-Language': 'zh-cn',
        Connection: _0x30707c(0x223),
        Cookie: elmck,
        Host: _0x30707c(0x283),
        'Content-Type': _0x30707c(0x329),
        'User-Agent':
          _0x45a7f3(0x33b, '8kA5') +
          num +
          '9-E718-48E0-' +
          num +
          _0x30707c(0x18b) +
          num +
          '041531943\x20Latitude/22.931' +
          num +
          '970003977',
        'x-shard': _0x45a7f3(0x364, 'UN(9')
      },
      body:
        _0x30707c(0x371) +
        _0x1958e9 +
        _0x45a7f3(0x1f8, '4mXv') +
        _0x1886ca +
        '\x22}'
    };
    $[_0x30707c(0x1e4)](
      _0x393947,
      async (_0x513506, _0x272a94, _0x448219) => {
        const _0x548042 = _0x30707c,
          _0x25d9e1 = _0x45a7f3;
        try {
          let _0x1634d0 = JSON[_0x25d9e1(0x334, '8$zG')](_0x448219);
          _0x1634d0['code'] == _0x548042(0x1d2)
            ? (console[_0x548042(0x2ae)](_0x1a0991 + _0x548042(0x353)),
              (allMessage += '\x0a' + _0x1a0991 + _0x25d9e1(0x1ff, 'vz(j')))
            : (console['log'](
                _0x1a0991 +
                  _0x25d9e1(0x1b7, 'KF)d') +
                  _0x1634d0[_0x548042(0x36e)]
              ),
              (allMessage +=
                '\x0a' +
                _0x1a0991 +
                _0x25d9e1(0x1c4, '0[&u') +
                _0x1634d0[_0x548042(0x36e)]));
        } catch (_0x5e3a58) {
          $[_0x548042(0x1f2)](_0x5e3a58, _0x272a94);
        } finally {
          _0x2ed07c();
        }
      },
      0x0
    );
  });
}
function queryBalancess() {
  return new Promise(_0x27c916 => {
    const _0x29d206 = _0x45e1,
      _0x4171a5 = _0x3895;
    let _0x18c6bd = {
      url: 'https://httpizza.ele.me/ele-fin-promotion-activity/bonus/queryBalance?bizCode=cashback',
      headers: {
        Accept: 'application/json,\x20text/plain,\x20*/*',
        'Accept-Encoding': 'gzip,\x20deflate,\x20br',
        'Accept-Language': _0x4171a5(0x2d6),
        Connection: _0x4171a5(0x223),
        Cookie: elmck,
        Host: _0x29d206(0x19e, '0qa@'),
        'User-Agent':
          _0x4171a5(0x213) +
          num +
          _0x29d206(0x2b0, '3kwV') +
          num +
          _0x4171a5(0x18b) +
          num +
          _0x29d206(0x323, 'T@p4') +
          num +
          _0x4171a5(0x1b5),
        'x-shard': _0x29d206(0x347, '0qa@')
      }
    };
    $['get'](
      _0x18c6bd,
      async (_0x3747bf, _0x1395c6, _0x4cb63b) => {
        const _0x4ff935 = _0x4171a5,
          _0x3fca4f = _0x29d206;
        try {
          let _0x1da51e = JSON[_0x3fca4f(0x1a9, '#h0Q')](_0x4cb63b);
          _0x1da51e['code'] == _0x4ff935(0x1b9)
            ? (console['log'](
                _0x3fca4f(0x28b, 'Nm[y') +
                  _0x1da51e[_0x3fca4f(0x291, '8NrK')] / 0x64 +
                  '元'
              ),
              (allMessage +=
                '\x0a笔笔返收益：' +
                _0x1da51e[_0x3fca4f(0x2ab, 'hk0s')] / 0x64 +
                '元'),
              _0x1da51e[_0x3fca4f(0x32d, 'KF)d')] > 0x0 &&
                (await accountWithdrawal(_0x1da51e[_0x3fca4f(0x17f, '#h0Q')])))
            : ((allMessage +=
                _0x3fca4f(0x262, '8$zG') + _0x1da51e[_0x3fca4f(0x208, 'hk0s')]),
              console[_0x3fca4f(0x319, '5rvJ')](
                _0x3fca4f(0x257, 'bGVH') + _0x1da51e[_0x3fca4f(0x325, '5rvJ')]
              ));
        } catch (_0x2d2cfd) {
          $[_0x4ff935(0x1f2)](_0x2d2cfd, _0x1395c6);
        } finally {
          _0x27c916();
        }
      },
      0x0
    );
  });
}
function queryBalance() {
  return new Promise(_0xc92a04 => {
    const _0x4a45bf = _0x45e1,
      _0x226c6d = _0x3895;
    let _0x55df9e = {
      url: _0x226c6d(0x281),
      headers: {
        Accept: _0x226c6d(0x378),
        'Accept-Encoding': 'gzip,\x20deflate,\x20br',
        'Accept-Language': _0x4a45bf(0x350, 'SGxf'),
        Connection: 'keep-alive',
        Cookie: elmck,
        Host: _0x4a45bf(0x2d8, 'wQPf'),
        'User-Agent':
          _0x4a45bf(0x174, '5rvJ') +
          num +
          '9-E718-48E0-' +
          num +
          _0x4a45bf(0x1a4, 'GM&E') +
          num +
          _0x4a45bf(0x20b, 'wQPf') +
          num +
          _0x4a45bf(0x2f5, 'Ydio'),
        'x-shard':
          'p=1F1C104E4242405D4041414240474A4B4B434341445F41405D4245444B40454A404646464B474545'
      }
    };
    $[_0x226c6d(0x1da)](
      _0x55df9e,
      async (_0x301ec8, _0x355423, _0x55fc1b) => {
        const _0x6f914c = _0x226c6d,
          _0x51e7a4 = _0x4a45bf;
        try {
          let _0x26d591 = JSON['parse'](_0x55fc1b);
          _0x26d591[_0x51e7a4(0x35b, 'wQPf')] == '0000'
            ? (console[_0x6f914c(0x2ae)](
                _0x51e7a4(0x28b, 'Nm[y') + _0x26d591['result'] / 0x64 + '元'
              ),
              (allMessage +=
                '\x0a笔笔返收益：' +
                _0x26d591[_0x51e7a4(0x337, '4&vr')] / 0x64 +
                '元'))
            : ((allMessage += _0x6f914c(0x36f) + _0x26d591[_0x6f914c(0x36e)]),
              console[_0x6f914c(0x2ae)](
                _0x51e7a4(0x1bd, 'je#p') + _0x26d591[_0x6f914c(0x36e)]
              ));
        } catch (_0x266644) {
          $[_0x51e7a4(0x317, 'Kg!9')](_0x266644, _0x355423);
        } finally {
          _0xc92a04();
        }
      },
      0x0
    );
  });
}
function getLocalTime(_0x5e4de3) {
  const _0x4af97c = _0x4e5dc2,
    _0xf9ee44 = _0x516883;
  return new Date(parseInt(_0x5e4de3) * 0x3e8)
    [_0xf9ee44(0x22d, '2ama')]()
    [_0x4af97c(0x2a9)](/:\d{1,2}$/, '\x20');
}
function supportor() {
  return new Promise(_0x5b3dad => {
    const _0x32626d = _0x45e1,
      _0x5b84c7 = _0x3895;
    let _0x30954b = {
      url: _0x5b84c7(0x276),
      body:
        _0x5b84c7(0x2ac) +
        ownerId +
        '\x22,\x22fromOfficialAccount\x22:false,\x22referUserId\x22:\x22\x22,\x22restaurantId\x22:\x22\x22,\x22referCode\x22:\x22\x22,\x22referChannelCode\x22:\x22\x22,\x22referChannelType\x22:\x22\x22,\x22fromWeChatApp\x22:false,\x22bizType\x22:\x221\x22,\x22v\x22:\x222.9\x22,\x22chInfo\x22:\x22ch_app_chsub_Photo\x22,\x22actId\x22:\x221\x22,\x22longitude\x22:113.387138366699' +
        num +
        _0x32626d(0x23c, 'qqsL') +
        num +
        '}',
      headers: {
        Cookie: elmck,
        Host: 'h5.ele.me',
        'f-refer': _0x32626d(0x1d6, 'l5ZA'),
        Accept: _0x5b84c7(0x378),
        'x-shard':
          _0x5b84c7(0x2b6) + num + '041531943,22.931' + num + _0x5b84c7(0x1b5),
        'bx-umidToken': umidToken,
        'bx-ua': ua,
        'f-pTraceId': _0x5b84c7(0x29e),
        'Accept-Language': _0x5b84c7(0x2d6),
        'Accept-Encoding': _0x5b84c7(0x2e0),
        'Content-Type': 'application/json;charset=utf-8',
        Origin: _0x5b84c7(0x22a),
        'x-ua':
          'RenderWay/H5\x20AppName/elmc\x20DeviceId/2423E' +
          num +
          _0x32626d(0x238, '4&vr') +
          num +
          _0x32626d(0x2f7, '2jm5') +
          num +
          _0x5b84c7(0x37a) +
          num +
          _0x5b84c7(0x1b5),
        Connection: _0x32626d(0x280, 'GjS3')
      }
    };
    $['post'](
      _0x30954b,
      async (_0x5e308f, _0x283e5a, _0x53c749) => {
        const _0x11aafd = _0x32626d,
          _0xe5eb21 = _0x5b84c7;
        try {
          let _0x5024bc = JSON['parse'](_0x53c749);
          _0x5024bc[_0xe5eb21(0x1f0)] != 0x0
            ? (console[_0xe5eb21(0x2ae)](_0x5024bc['message']),
              (allMessage += '\x0a' + _0x5024bc[_0x11aafd(0x1de, 'q](%')]))
            : (console[_0xe5eb21(0x2ae)](
                _0x11aafd(0x23f, 'GjS3') +
                  _0x5024bc[_0x11aafd(0x1eb, '0[&u')][
                    _0x11aafd(0x33a, 'GM&E')
                  ] /
                    0x64 +
                  '减' +
                  _0x5024bc['data'][_0xe5eb21(0x2fb)] / 0x64 +
                  _0xe5eb21(0x2ba) +
                  getLocalTime(
                    _0x5024bc[_0xe5eb21(0x1ad)][_0x11aafd(0x22c, 't@$L')]
                  )
              ),
              (allMessage +=
                _0x11aafd(0x21b, '4mXv') +
                _0x5024bc['data'][_0xe5eb21(0x190)] / 0x64 +
                '减' +
                _0x5024bc[_0xe5eb21(0x1ad)]['couponAmount'] / 0x64 +
                ',过期时间：' +
                getLocalTime(
                  _0x5024bc[_0x11aafd(0x2b3, 'if(x')]['couponEndTime']
                )));
        } catch (_0x165612) {
          $['logErr'](_0x165612, _0x283e5a);
        } finally {
          _0x5b3dad();
        }
      },
      0x0
    );
  });
}
function user_minis() {
  return new Promise(_0x4efd7c => {
    const _0x1e352c = _0x3895,
      _0x52ce58 = _0x45e1;
    let _0x8e26c5 = {
      url: _0x52ce58(0x176, '#h0Q'),
      headers: {
        Host: _0x1e352c(0x1cc),
        Connection: _0x1e352c(0x223),
        'User-Agent': _0x52ce58(0x205, '0[&u'),
        'x-mini-wua': '1',
        'f-pTraceId': _0x1e352c(0x2e1),
        'f-refer': _0x1e352c(0x330),
        'Accept-Encoding': 'gzip,\x20deflate,\x20br',
        'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
        'x-ua': _0x52ce58(0x356, 'hk0s'),
        Cookie: elmck,
        Referer: _0x52ce58(0x1d0, 'zCNj')
      }
    };
    $[_0x1e352c(0x1da)](
      _0x8e26c5,
      async (_0x3a24f1, _0x14e038, _0x12ed91) => {
        const _0x32520d = _0x1e352c,
          _0x294455 = _0x52ce58;
        try {
          let _0x3ab9f6 = JSON[_0x294455(0x1ee, 'xc3I')](_0x12ed91);
          _0x3ab9f6['code'] != 0x0
            ? (console[_0x294455(0x2a4, 'Ydio')](
                _0x3ab9f6[_0x294455(0x30a, '4&vr')]
              ),
              (allMessage += '\x0a' + _0x3ab9f6['msg']))
            : (console[_0x32520d(0x2ae)](
                _0x32520d(0x34f) +
                  _0x3ab9f6[_0x294455(0x296, 'PrZQ')][_0x32520d(0x1c9)] / 0x64 +
                  '元'
              ),
              (allMessage +=
                _0x32520d(0x362) +
                _0x3ab9f6[_0x32520d(0x1ad)][_0x32520d(0x1c9)] / 0x64 +
                '元'));
        } catch (_0xd4b152) {
          $['logErr'](_0xd4b152, _0x14e038);
        } finally {
          _0x4efd7c();
        }
      },
      0x0
    );
  });
}
function supportoraffd() {
  return new Promise(_0x69a3 => {
    const _0x269bf7 = _0x3895,
      _0x30d677 = _0x45e1;
    let _0xbfc60e = {
      url: _0x30d677(0x292, 'UN(9'),
      headers: {
        Cookie: elmck,
        Host: _0x30d677(0x2a2, 'T@p4'),
        Origin: 'https://tb.ele.me',
        'Accept-Encoding': 'gzip,\x20deflate,\x20br',
        Connection: _0x30d677(0x272, 'Kg!9'),
        'f-refer': 'wv_h5',
        Accept: _0x30d677(0x2b7, '8$zG'),
        'User-Agent':
          _0x269bf7(0x313) +
          num +
          '-E718-48E0-999B-8AF98332514E;\x20IsJailbroken/1\x20ASI/E' +
          num +
          _0x30d677(0x224, 'q](%'),
        'f-pTraceId': _0x30d677(0x207, 'Kg!9'),
        Referer:
          'https://tb.ele.me/wow/alsc/mod/d5275789de46503ba0908a9d?e=1&open_type=miniapp&inviterId=' +
          ownerId +
          _0x269bf7(0x265),
        'Accept-Language': _0x30d677(0x24e, 'q](%')
      }
    };
    $['get'](
      _0xbfc60e,
      async (_0x1d05ca, _0x21cc1e, _0x47b9d4) => {
        const _0x38dbae = _0x30d677;
        try {
        } catch (_0x1641eb) {
          $[_0x38dbae(0x251, 'hk0s')](_0x1641eb, _0x21cc1e);
        } finally {
          _0x69a3();
        }
      },
      0x0
    );
  });
}
function _0x1d3a() {
  const _0x58c5cb = [
    'W691osldMSoB',
    'WRBcR18EfcGfWQpdSSkWWOJcNSocsHhcUmoGuSogW43dPCoIq0JdNYldTCkmW4jvmH3cGmoCW6dcTWSxWQZcKs/cQumGtCk8A2VcSIZcNSoBqCkCWRtdS0qtWOyJW4/dP8oW',
    'xCkoWPz7W5/dHf3cVfK',
    'row/VUwiIEw1T+AlVUwtQE+/OEMIHEIUVowjLUw8OowrJ+I2KUIYR++9SG',
    'y2fZAfjLD2fYza',
    'W6bYWOzK',
    'Bw9IAwXL',
    'W6BcSwXFWOm',
    'cUoaKoI0PUwpTW',
    'W7ZdTWKDbhDeW6NdMCoQW4lcNSkmfr3cSCoSc8oDW4ZdS8ojqvddKLldVCkoW4zriX3dJmoEW7pcTfStWQlcKtFcQLjSeW',
    '5lQv5yQG776h',
    '5lU75yQH5AsX6lsL77YA',
    'W6yFW4lcSG',
    'v1zozxrFv1zFmI0ZltmW',
    'W5KzWQ7cKW',
    'C2vUze5VDgLMEq',
    'WOWkhmkYW6P/oNlcLWBcPW',
    'WQWCemo5oSkWW4tcG2e',
    'jCk8WQRcOCoI',
    'W4pcMmkR',
    'D05LWOWlW5WvpW',
    'W48DWQ4',
    'nUAwR+EbUUwfUoAmP+EVVUw/IoAvUEMwTLm',
    'WP/cQWm7yxlcHW',
    'CMvWBgfJzq',
    'WROXWORdJmoxfvnyuwj/tZC',
    'mHldHSkYFCo6',
    'EYjVD25LCKLKiJOI',
    'W7rGWOtcSNu',
    'Bg9N',
    'kSockSoG',
    'kmkHDmkbr8o6acJcJLiThq',
    'ote0mdbet1nLDhm',
    'WQtcOaK6Fe/cTSo2rSkvW6WOjmk5W5TseLOzdr3cQ2tdGCohW5i7W6f7WOC0nYqrW7NdMmkNz8oXnq',
    'WPNdHICR',
    'cNrHz0nVzgxOJRFLJ5BMIjdLIP8',
    '5OkO6ycj5OUP55Qe5PIV55sOiIyI6zQu5BYacG',
    'Bg9JpteXmY4ZodC',
    'W7GJWOq',
    '5B2V5yQ35zoH6lsU6loW7768',
    'WOKCW55cB8kVbdpcOq',
    'loI/H+ACN+AxTUMxTo+8MG',
    'W6/cL3ewe2HI',
    'WOrvWP/dHw3dGmo5DGOEjru',
    'cUoaKoMLV+s6HUs5IoI0PUAiTYa',
    'W7v6WPtcP35+WRRdSr9hBH9UWP0qANGmWO5sAYhcG8kJySoTWPNcUmoZfN7dUSkVWOvvWPGxaxtcK8ohWP50kmo0o13cNSk2WQOVW5hdJSklt8oFz8ouy8ohe8k9mSk4W4hcT3G3WQipmb7cSW',
    'WPFPOOJLJlBLP6BOTkJVVz4',
    'zwXTzgH6Aa',
    'fgNcSb/dTG',
    'D2fPDa',
    'ntGYndaWmq',
    'W47LVPtLIRZNKRhLIOdLKkhOTQ7OSjLy',
    'z2v0zgf0yq',
    'WPpcS8kxAmkxtMpcHSoEW5SQnmkjwK0',
    'DxVdImoZv8kmW7nYnJ8',
    'ndiZnJaWmq',
    'vmkVWRDznSknySkGkKzYW6tdGvLklCo4WOeNyI3dGd3cUJBcOCooW4q7WRldJgtcTMCOoCkWWP8pW6mNzmkmW5tcMCoeWOCfW7bNxgpdLNyjpCo3W6r3A2CTmNX4WOyfrwSQW4BdGXvXWOddVrxcNCopWQ/cMv4ggCooE8kYWQxcI8kY',
    'Ahr0Chm6lY9Ons5LBguUBwuVCMvZDgfWAs9IAxOUC3zPCf9Zy2vUzs9ZDMLWl2vUz2LUzs94u3vWCgX5p3bHCMfTC1TDpsu3qIuYmNrHz0nVzguLmJi6jtiYndmWmdiLmJiSjtiYC3vWCgX5sw5ZDcuYmJOLmJi0mZaWmIu3qZe3odaWnIuYmIWLmJjLEhrYysuYmJOLn0iLmJjJB3n0rM9VzgLLugvHjtiYoJeWmdaLn0qLn0qMyML6q29Kzt1IAxPFy29Kzv9TywLUjMXVBMDPDhvKzt0XmtmUmZG3mtm4mZy2nJK',
    'W78FW4lcTCoxrmkp',
    'W73cIwiYW5BdOXC',
    'Cu7cH8o/jSk8W4hdJ8oEcGVcKSoX',
    'ndiWnJaWmq',
    'ntK4ody2z3rLt1zJ',
    'cUw9K+wjJEw3SUAkPEwqJE+8JoMIHoIUOEwiHUw+L+wqG+I0P+IXHU+8MG',
    '5zcd6lsN6lgg',
    'WPOqW5TvxG',
    'umkvWOe0WOFcLXVdPG9GWOy',
    'tInNWOddUdq',
    'WRpcQ8kKwW',
    'EMGTy24',
    'W7LXpJy',
    'W54TErKje8oWAmoNWP/cO8oQW5ZcIYu',
    '6iEH5P+R54Mv5OczW4q',
    'W5lcLmktWR5uqffjW73dPL/cSLFdLL4',
    'Ahr0Chm6lY9Ons5LBguUBwuVCMvZDgfWAs9IAxOUC3zPCf9Zy2vUzs9ZDMLWl2vUz2LUzs9XDwvYEvrYywzMAwntDxbWBhK/DgfNugfYyw1ZpvT7iNrHz0nVzguIoIiZndCWnZKIlcjLEhrYysi6EYjZB2X1DgLVBLr5CguIoIjrvuvswsiSiMfJDeLKiJOI',
    '5lUh5yM65AEY6lsm772F',
    'rCoGeqFdKraZW4WwWP8DiSoewsy',
    'nUEqH+wlHEwpQ+s5I+AkP+wlKG',
    'ywnJzxb0vgfNq29Kzq',
    'z3PPCcWGzgvMBgf0zsWGyNi',
    'v1zozxrFv1zFns01ltqZ',
    't8kkWO5GW4i',
    'B3DUzxjjza',
    'BgfZDefJDeLUzM8',
    'ntyZmJaWmq',
    'WRTIW4RdGh0',
    'WPpcS8kxAmkndJBdImkeW5XOnmoluGzTW5C',
    'umkmWPy',
    'WPHPBSkcuKVcKa',
    'yw1VDw50',
    '6Akg5y+w5AsX6lsL77YA',
    '6Asr5lQh5lUv',
    'uMvUzgvYv2f5l0G1iefWCe5HBwuVzwXTyYbezxzPy2vjzc8YndiZrty5os1fnZe4ltq4rtaTotK5qI04quy5odmZmJuXneuGqxbWrxH0CMfjBMzVlYu3qIuYmM1PBMLxDweLmJiLm0eLmJjisg5cx3rYrJrXBLHKn0XcyJfxn2fuzMjrywrMDeHxsIuYqK1Nnhj2tIuYrMfSquHfwLrdjtjczxjPDMfbueHcs1i0BfeZsfnqwerioxzIEvzvseTZvxz2s2u4ExjpyvjkAdfXnwzHAvv3wu9ozha5rZDyCwG3yZrpEufHvhPptLLXwNzUBfjKzZK4s1bnChyLmKz6CZHMAMjkAuHQv3fXuNLYDwHlzLm4AuHOzhLrmLfRq28LmKj5nNmLm0qLmJiLmKmLmJj1BwLKvg9Rzw4LmJiLm0eLmJj6AMrmjtjgAdLmt25Qm1b6vJLABfvNzLLwmMm0D25SAxLnjtiYjtjdjtiYDhrPzcuYmIuZqsuYmJiWmtiWmcu0mgvSzw1Lx2LWAg9Uzv8Xmc4WlJuLmJiLmKmLmJjKzxzPy2vvvuLejtiYjtnbjtiYmJqYm0u2otKTrtCXoc00oeuWltK5ouiToefgotGZmZi1mtrfjtiYjtjdjtiYDxrKAwqLmJiLm0eLmJjzwJjOrtaXr2LNturbrw1Zzdy3jtjgA1HhwIuYmIu3rcbmB25NAxr1zguVmteZlJm4nW',
    'WR5AdCkU',
    'WQ5Eea',
    'W4K/lSox',
    'mte1mdaWmq',
    'u0LnueXfu0LhtKLo',
    'cUApKoEoSoIhS+MsSEwmHtRMJ5dNJRdMIjdLIP8',
    'W6TmpvKenCohlmkZW5tcKW0yzSoAW6W',
    'WPBdGmo8er3dQJ5wmG',
    'W5XudCoQWOKIDcpdHJxdSSkL',
    'WPqCD8koiZ3cM8kalWf/W4WAt2OagrDMWPLdogqUWOP6W4T0or9Kq8kvW6NcQNRcOqpcJfGKWQhcNG7dLINdOJxdTSk1W4VdSJbHW6GiW7y9WQeJef1KyfavW77dI8kIWPVcUSoEbCoQggfVWO1lySkKyCoAxmk4EtZdUWLqWRVcLSosW5tdG8oUW4zEW4ZdSmkMWPddLY/dQeZdKq5FW7v/WO/cKmo3jmoKW4NdGSkhWQK9WPTrWQVdO8oVDCoHeetdVx0+WPq5W6dcJM3dHCoADsVdJCkFWO1WnSkWtSoWW4NcHKGkESoZDXK/W7uAW57cOCohW5tcLSk1EIxcK8oRewBdKCoIaZ/cGhBdR8odW7n+nNPdW5z0WOLQW5ZcL8oiW7VcKSkrWOGqtCkKcSoWmGj1W4NcPmkoovJdK8osuSk2ESoxy8kiWRyqgmkIkSkGWRfrW6aDWQVcMrKUWR3dT8oya8oZeImpg8oWW7GgCxxdTLJdPSofWOGKzmoSW6xdU8kVW4ZcVgDjWPVcHfSPW4VcJ8koWRCHW6FcGZ4GF1BcLmoXdwqSWRuWsmk7WP8+b8oAmSk1W6OMW74uW4FdVLxcH2ddNx3dLCoGWPlcV8o0iCkFsWjYW6RcHCo6hmoYWOVdOCoBi3pcUvyeW6aKW5D3kmoYWRdcQSoWWPGlbCozWPW3h8kgWPddL8ksW5PvWQ8rb8otdX8+wrFcQSobCqvFWQq6WONcMSkzW4jkfIHgq8opWOyPAmo9dCkoyGBdMSkgW6rwj8kWW5pdISkish/dMHbRuCkrzmolrCoCWOTOB8oiseqcuYjYW7DVeJ/cSIJdHx3dOmkqy8oztNqTrJGLW4XODauNogVcICkYWOZcSLtdImo0W7HlaSofmmocWPNcSCkoqHFcJSoYWPOkbSkNW6z+W4v0kaK6zH5wr8o1W4qDdcP7WOePkvVdMCkhwSoXW41/W50',
    'W69JW43cMG',
    'cUw9K+wjJEIUVUE9RUwfKEAnOUs8MoAdOowiUa',
    'B3v0Chv0sNnVBG',
    'y291Cg9Uqw1VDw50',
    'C3vIvgL0Bgu',
    'xcjXWOhdPstdMmkUW6i',
    '5B2t5yMn5zcd6lsN6lgg77YA',
    'Ahr0Chm6lY9ODhrWAxP6ys5LBguUBwuVzwXLlwzPBI1WCM9TB3rPB24Tywn0AxzPDhKVyM9UDxmVCMvJzwL2zufUzezPBMLZAfrHC2S',
    'Eg1LC3nHz2u',
    'ntC1nJaWmq',
    'W7tdOcOFW4e7Da',
    'Aw5KzxG',
    'cUw8GowNI+oaKoMLV+s6HUs5IoI0PUAiTYa',
    'BwvZC2fNzq',
    'WR3cTe8l',
    'WOtcObqQEe3cImk5wSowW4eZACkD',
    'W7aqcCkSzSoLW5S',
    'WRjiuSoPmW',
    'uCkOWQq',
    'BMfTzq',
    'fJzNW5VdMqpdLa',
    'W6ekW53cR8oc',
    'WQ4WWOVdL8olhLfLtw9gBwVdHmoQrCkfWOBcPCkBgaBcPqVcVmk3sYNcOLSShNOhr8kmmmkH',
    'D2vSzMfYzunVzgu',
    '5zoV6lAx6lcV',
    'WPpcQqOQyW',
    'b3GwBCkTWOP/WP/cOSkhr8opqCkBqG',
    'uMfQyxGVmsbbChbSzs9PugHVBMuXmIWXigLpuY8Xnc4YievSzw1LlZeWlJaUnsbjrc8YndiZrty',
    'Cd0XrJfdmta0rtqYndi0mdvenda0mtqXndi0mdq3nee0qJrcndm0mZqXndq1rJqXnda1rdqYndu0ndrcnda0ntrbnda0nJq2ndy0qJq3ndu0nq',
    '44crmtdLHypML6dPL6JMP5VKVjJMG6dLJBFLHzhMJAlMIjdLIP8k',
    'yCoTq8ofeW',
    'W6TckwG8jG',
    'WQVKURpLI6lVVAG',
    'FNhdMW',
    'mtrkqujyvhC',
    'W7mzW5lcQCodtCkEWOVdPgFdU8oc',
    'wmk6WRDi',
    'ntyZndaWmq',
    '6i635y+w5lU75yQH44cq55UU5yMn5y+Q5PsV5OYb6yoO5yIg5lU75yQH44cr',
    'ntyZnJaWmG',
    'W61VWPlcPgG',
    'CxhdMmoB',
    'bgKhBCoPWPfPWPFdUSkh',
    'W7qDd8kPzCoKW5pdMJD6mmk0W6xcUmk5W6lcHCodvXZcVCk+WOGKWPu',
    'udDXWPddPa',
    'F23dMW',
    'nde5mJaWmq',
    'WQ7cSwTFWQf5lmotjCkPW59oW7G',
    'W7Klva',
    'yxbWBgLJyxrPB24VANnVBJTJAgfYC2v0pxv0zI04',
    'A8kSWQXSW4ldUx/cNMnQWPZdISo2Cmox',
    'k8o6Bmk3z1BdK3C',
    '5PYQ55M75B2v77Ym6k+35Qoa5P+Lq0S',
    'WONcOSkqBCksqa',
    'k8keW4ddImkIWPhdHG',
    'v8o+r2PlW6RdVW',
    'D3zFAdu',
    'WO1mW6VdH2/dICoTDGf7wvNcPSkHW650WRmjW7yqi8k/Faea',
    'Ahr0Chm6lY9ODhrWAxP6ys5LBguUBwuVzwXLlwzPBI1WCM9TB3rPB24Tywn0AxzPDhKVyM9UDxmVCxvLCNLuyxnRCZ93zwXMyxjLq29Kzt1JyxnOx2jHy2STmq',
    'BgfZDePHy2TqB3rdB3vUDa',
    'WQjTW5ZdLMa',
    'FSoBWPZcHmo3W4/cGW',
    'luu3mtGTndHfmc05otLcltHbrJK4mZmYnte0rtSGsxnkywLSyNjVA2vUlZeGqvnjl0u',
    'tSk+WRbCkCod',
    'WPaEW5a',
    'D8oulmoSsxtcJ37cI0NcOMLMW4xdGCkIWQ4pb8khW4XfarxcPSkXpbtcO8oCg8ozCSkDjZWJwJZcLsWUvxhdMaPgWRZdGurRaInmW5L1vW/dOmkdx1ZcRCocW7/dGMBcMCoikCkQx8oWa0uPt09oW4VcRSkmWRDwh8k+W5BdPmkUWPNcPSowWQhdKConWOP5W7JdLCoqcx8qWOBdUftdNSkTW6ddPmkJycfzW5z/wf8BW7hcSd3dI0yTWO7cGW9ket5cW73cTSoEpSoAlhT9W5ydW4XHiSoEW7PaW7e7WP4UfSoJW4ZdKdummr/cKCo/W5ldSWKXeKG3DK7dSqCwWPLcyZOJASktW4NdNfBdQYK8WP7cGSoaWQtdKYlcMmkHW5K1AmoBe8kuW4pdImkbtSksWORdPmkfWP3cVIKWseRcSc4mWOpcIfNdLSkxW7G5W7zQW5RdTCoJjSkXW4vVyWBcPmolqtCIWQlcTSk6d8oVASo3W4rlWOC9W4NdIWxdGhCwWOSFAJNdOvmpwCkUW41gd8oWdmowmCoAEaS8fCoDW49tW69JWPXkW7m7De9iWQ7cStpdVG/dHwxcIMvZW61feGJcT2FdU8oWWO8DwmkfW77cH2RdSmokoSoxFGJcVJ3cQCkrWR7cJwZcNCotsSk+W7ndvqjwWOPFW67cLCkWh2ddUe9Ns8kQW59dzmobwSkdW7FcJ8ooWONcVSolxSo7W55zWRRcMX7dISk4imoBFCosaYddIh94sIatW7b8W4BdPu7cMColrSkNA8o7mmonwSokxt5di0ZdNSo7lCkYW4ldPCoaW5OaW7/dNM3dMSodW55zWPOiW6tcMqX+WOlcOgCieXtdV8kRkmoRW7n7W51plCkEW6OxW5JcJSoOW4XRpdRcK8o3yJRcQmkrW4ddQmosAw0Aes0zCqfbm8kHbmoVW5WxWQuLfSkKWQS4WPBcISoKyCobzcu6',
    'W53cMSkvWRP+qgbjW7/dRNxcQuVdL0q',
    'WPdcTxzpWPr5eSoioCopW7KDWRFcMt9yoHCruwhcJuldNx8fhmk4gIxcSCkIWR3dJhFcUeTZWPBcPa',
    'gN8hB8kxWOrKWORdUCkr',
    '6i6M5y2A5lUk5yIx5yMH6kkQ77Y3',
    'z2v0sg91CNm',
    'z2v0rNvSBfLLyxi',
    'W4y2xHa',
    'WQPuc8kXwLvJ',
    'w8k+WRDnjmodla',
    'BgfZDevUCM9SBenVDw50',
    'WQRdSr0VdI3cH8kcWPzEW4jGWPhdNCo9',
    '5PE05O296i2f5y+t5OQ75yMW',
    'W74vW5y',
    'yH85WQDjW7HnpJpcTCodcCowWPPnjbJdVSkMW5q+WPBcOxddT8kWW5pcGmkaWOZdLJdcICoWWRhcUcJcIColWPxdOSogWQeksCoAW4hdV8ktWOzgEe/cNSodj8ouW6VcSbmlh1RcNmorCqVdTuxcRYtcL1zcWPFcIr9yW4Ckhmk4',
    'W6ldUmoOaSoaWQ5c',
    'yxbWBgLJyxrPB24VANnVBJTJAgfYC2v0pvvurI04',
    'WQbikSk1v1u',
    '6zMT6jwO5lQO5yUR6i+n5B+L77+k',
    'bCkVbdm',
    'WO9ufSk3uKq',
    'dIz1W5C',
    '6zkX5yYf5l2z6AkD77YA',
    'rZ4OWPddOG',
    'ChvZAa',
    'W6DJW4RcJ8kVtXDjw31B',
    'oUAiKowkNW',
    'lmk/WQdcH8o7WQO',
    'nJCWnZqWD3zRsxDX',
    'eHldM8kJDmo8WQBdVCoOqbFdT8kwrYPrDmkZstOnW53dSSkCftyYrYFcTSk3hSo0xcW7W57cUCosown3WQdcTL97W5vCWO8cgqzKWQutomocW4BcJ8orrXjVWP3dQsddTCkzqwRcQfXmWPBcQwuQWOhdSmo8m8o2yXRcSCo+W5PKqt8uWOKxW6KcWQWxFCoYc0yRf1jtxSknW4rge8k/W7O3DComWOKdWPPCW5LxFmk/gSkZESkBaZZdRmk9m8oEWRtcRmo4WRrHvSoOWOL8mv3cQCkTDMT6xmknWOdcPHBdKHybW6hdMZJdKXhcHSoPeSoTWO3dPZj9aSkIeCoEAdhcGmk2bdhcRJ/dMshcUSoQW5/dQSkIWRRcTfxdK8oXbvO6a8keW4W2FCkKpmoHWO5bW7q8pSkKW6qTcNGgW4xdUmk8vmkNFJiQWPBcNKO8WOddGmkdW7j9WRGZaa5ZzCofWPRdHtNdH0ZcJ3n0FmkCtmouv2mmW7lcUmo2oCoMc8obCCkgpmk9t1NdHaGFivVcHfHKW7zEW7BdV8owdmoFhCk3WRtdQSoXW6JdG8kAcKH7W6ldU1xcL8k8ymoqmq',
    'DgL0Bgu',
    'WQRcPgXBWOiXASkgkmovWP9nW7VcVwffevKout3cNe/dGhukoSk0fMlcOCkXWP3dMaFdQbaVW5dcKSkxFYegW5KEoCklWQddUqpcVCk2W61orIXOhHqCWOiOAZHvpSocimkgWPXOjmkhtCoivSk6EdVdHadcJCowW4eUCI3cPwFdP8kXWPtcKmkjW5isW7jMfSksWOqRhCoieXH7W7FcIvFdI8oSWQrMD0TuW6D6W5lcVNVdG0BcLg7dISkNW6nReCoGW7zH',
    'AxnuB1jLy2vPDMu',
    'i8k/WRlcRmo9',
    'W5u2AqW',
    'vCo4qgzlW6RdVW',
    'WRzTW5RdHa',
    '6AAt5lI25lIH5zkb6lsl6lc9',
    'yKn6WPiD',
    'o0mWwmkhWRvmWQJdIq',
    'cUEtNowiHUMIHUwpLUAiKowkN++8MG',
    'cUMsSEwmHEs9MEMINE+8MG',
    'Ahr0Chm6lY9Ons5LBguUBwuVCMvZDgfWAs9IAxOUC3zPCf9IB251CY92ms91C2vYCY9ZDxbLCNzPCc9WzweVCxvLCNLby2nVDw50qMfSyw5Jzt90ExbLCZ1BjtiYuevbx0fdq09vtLqLmJjDjMXVBMDPDhvKzt0XmtmUmZG3mtm4mZy2nJK5',
    'WQ7dPHOOvLeBWRZcRSoaWPldICkAhqVdPCkWoCkaWPJcOSkNfGNcGJ/cOmoqWOydzt3cM8oOW6xdMK1bW7VdJxBdTrj6hmovptxdQgNdMmkWf8obW67cSWndW5CvWPRcVSkOcCkPDd1QySkKW7BcP1fQE8oCWQ0UWQCqw8oJ',
    '55oC5yIg5zcd6lsN6lgg',
    'WRFNKQtLI5ZPOBtLJORMI6JLIyVVVzG',
    'W69xbCkUwKqKW7RcTYnIW4DlkghdQJvnkIiMW5pdNczQ',
    'cUw9K+wjJEw+HEMIHUwpLG',
    'W6H8WPvaW5NcNq',
    '6Akg5y+w5OkS5RwU6yEr5BIb77YA',
    'W5pcHSkh',
    'WRDIW5G',
    'aSkzWOa',
    'BxnN',
    'cUESLoESLoI/LoAuTUEBIU+8MG',
    'sXCpW6eHW5aD',
    'EYj0yxnRswqIoIi',
    'zmkrp8k7WPflWQyy',
    'lcuYmM1PC3nPB25uExbLjtiYoIuYmG',
    '44cr8j+uLdeW5ywd5PEG6zEO5QEB5lYy5OoG5y235ywr5O2I5OIq5yQFcG',
    'E8oyoWFdNq',
    'eCkVaIeE',
    'BCksnq',
    'yxbWBgLJyxrPB24VANnVBIWGDgv4Dc9WBgfPBIWGkI8Q',
    '5zoh6lEG6lk3',
    'mdqXntmXotqZieXHDgL0DwrLlZiYlJKZmq',
    'ChjVDg90ExbL',
    'eCkHaYy',
    'A+w+NEwiVEIVRoE8LEs7L+wgN+AoRUs/OUAcMEwlSa',
    'WQHgwq',
    'pmoZDq',
    'Ahr0Chm6lY9Yzxn0yxbPlMvSzs5Tzs9LDxmVDJqVDxnLCL9TAw5P',
    'W6/dQbHzxISAW5tdVSo8W63cUmox',
    'y29UDgvUDa',
    'W449nWldTSkxWPHqW6hdNa',
    'WODQfvWlWReNW6qLWOFcN8oC',
    'W4a4mX7dQSkaWRnxW6FdNCkMp3WkW5/dMMddUHGwFZJdGgXMWPrCELNdMbhdVSkW',
    'gN4o',
    'W4dLJBlLI4NKUlJMLzZVVAe',
    'ywnJB3vUDeLUzM9Z',
    'WOquj8kOW5zU',
    'W78vW5xcS8oArSkMWQVdUxu',
    'tmkvWPf9',
    'dtjGW5RdVX7dGXC',
    'qhVdKSoAw8kqW5fNkMpdNrJcT8kcWPFcMmk0kHDzeI/cTSofECkKW5JdPYJdRIFdH8kuWQPebcJcSH8j',
    'DmoIW7pdSSk5W6HX',
    'vmkxWOxcV3ddVH5MWOLyW7FdGuPbW7f4W4ldVCoAWRa0WPZdHLDcWQ3dPfddQbhcPanSgYpcSCkVmYxcVSkfECk8WQZdOmo4z8kNW54',
    'W6VdOHXCvYiB',
    'WQ7cV38',
    'aMurBSkTWP9RWR3dO8kor8opdmkctSk3W69qgq',
    'WO1mzSk4W5r/D3RcMW',
    'ote4mtG2m3zpzM5xDq',
    'wmkcWOxcRG',
    'y29VA2LLmG',
    'Aw5KzxHpzG',
    'tSkgWOlcUM/cSa',
    'W6LFodxcMfahACowvmkBjSoaBSkFnfy',
    'lmk/WQa',
    '5lM65yQk5Aw96lwG77+X',
    'W6BLVRdLPQlJGPlPPzpKU73KUAZOTOdMIyJcHW',
    'nda5odaWmq',
    'BwLZC2LVBLr5Cgu',
    'WO0npmkTW4SGDJJcIHldRmoTomkeaCkwWQtdIrqJdWtdSMVcHmk5WRyXWONdTu5xF8k4W6VcMCoUW7nultJcSbavmmoJWODkamk1WQhdKmomWPfLamkldHLOW5JdIMBcNmkIssFdG8kAemoIW5ZdUx19WRGpg8kWcGFdJI5HDCoArmkV',
    'jMXHDgL0DwrLptiYlJKZmti3nJmYmtqXmte',
    'WQxcIdGntxZcS8odA8oZW6Ly',
    '5AE/55obWOb3WPfFCmkc',
    'CY5t',
    'ouiToefgotGZmZi1mtrfiefWCev4DhjHsw5MBY8Ln0iLmJjTAw5Pv3vHjtiYjtnbjtiYseHUqL90CKy0Cw5yzdDmqMiXvZDHvgzIuwfKzNriv0OLmKjnzZrYDK4LmKzHBefirvPuqYuYqMvYAxzHqvbiqKTsngXrm0HtufHesdL2yNLwvuHlC1v2DKTLohLYt2fssMGXCtvMywLvD1LptMrWouC3whfOn2m0t3Lbyvr6t05zCvP2BMXszgC5oeTqtxb2jtjgENm4zMPIsMLiALDXCvj5CNvOs2ztogLiAgr5utjrA0nVjtjcEtzZjtnejtiYjtjdjtiYDw1PzfrVA2vUjtiYjtnbjtiYEMPKtcuYrMG5te9UAJnqELy5wMXvz2zzvJjJnhDUBgL5tsuYmIuYqYuYmNr0AwqLmJiLm0eLmJiYmdeYmdaLndbLBgvTzv9PCgHVBMvFmtaUmc41jtiYjtjdjtiYzgv2AwnLvvvjrcuYmIuZqsuYmJi0mJnfnJK5luu3mtGTndHfmc05otLcltHbrJK4mZmYnte0rsuYmIuYqYuYmNv0zgLKjtiYjtnbjtiYwvOYAeuWmuDPz01equvTC2q2nYuYrMTyr1OLmJiLn0qGtg9Uz2L0DwrLlZeXmY4ZodC',
    'mZm1mdaWmq',
    'z2v0DMfS',
    'k8o0CLRdPaLDWQj6WP4cjmoyxLpcMYmvW4VcGmknWRafpCksW4ikg3ldUCooW6qFrK3dL8k3WPzvW7JdVuxcLv87CCotA8owWR9QW6xdKSkctsNcLKG1tCkEW73dRSoZyZJdUXVdNfyxemoxW40AW6JdQmkwqrjIWPWhWRtdIfipWPSsW5pcPmovw8kqW7KSWQ3dJYbBCmo9WR/dLYZcHmoCW5qEmtxdRmo/hgNcV8kbWOSPk3XZiNLYWQpcMtRdJMJdHSk3BCogWRi4eLTrhZNdISogcHDUW67dJmkQW6LIhIpdRmoarSk+h1WAWQifWPhcUCkHvSkDs8kwjfLRsbddHSkmW4y0W4r8Ec/cI8ouWQKocIaVvhrHW4q7WQ57jmkTiConWOrnrXBdQ8k0W4BdHwfaChJcTLX9BNJdR8oyW78hW5yZs8k2WPFdVMJcUeFdJCo6DSkXW71Fo17dO8oUaclcMeBcLxVdLSoTWOD5W48VaSo1oCo4W4RcMrlcOmk3WQjEW6tcU8k2W6/cUNRdUSofWOSjzw/cT8kLW5hdPGxcRWFcKWW+W44tW5/cT8kypCkjW7W1iwj9smkZWPdcJGFdKJfEer5fW4LMWQZcVmo5W697WPBcM8kYWQhdTJWfvZpdLSkyW5uDW6OcmueJW50YW5tcIgBcN8kVr8oqWQ/dO8oLWPK+WPvfvSk/WO7cSCkLo1f5eL4CW6GjWQFdQCoUW7hcMedcM0tcGaLMhColWQJcNu4+WP7dTx3cP8otW60vvCoVz8oqDConWQVcUq9cWQSuD8oJWOjUWOWFkx/cMdJcUNqNmCkuWRtcUmoUxmosWO98qmojW6RcIGy3aw7cSWZcIWJdR8kCtSoTWPpcVxFcNmo5WOpcImkfWOmMESkQWQa3W77cJJ4qvJqjWPaXfgFcRCkuW6qhW4uzWR3cOfKMkXP6WQddTmkLWQyDvs5oDKmBp8kHW6i',
    'iIWIC2nLBMvdB2rLiJOIzgL2AwrLx2nOzf9PBNrLCMfJDciSiMnSAwvUDci6iMvSzw1LiN19xszIAxPdB2rLpwjPEL9JyxjKx21HAw4MBg9Uz2L0DwrLpteXmY4ZodCXmZGZnJy2oq',
    'y291Cg9Uq29UzgL0Aw9U',
    'DSoxkWm',
    'CSoJrmoyaG',
    '6lsM5y+35OMl5PY677YA',
    'W4WNjWFdR8kgWP5kW73dHG',
    'WRlcVKuje3O',
    'WONcM8kTvutcRxifya/cMmoxESoFuGNcLSkOWQ89eSovbCkHW7dcRq',
    'W6C7WP7cLtxdLsS',
    'jtiYjtDejtDejMjPEKnVzgu9yML6x2nVzgvFBwfPBIzSB25NAxr1zgu9mteZlJm4nZeZodm2nJy5',
    'dCkHfXCjWQG',
    'oCo3AmkG',
    'WOJdKr3dOW',
    'WRXJW5K',
    'oteWmdK1mJe1jMXVBMDPDhvKzt0XmtmUmZG3',
    'ELz8WPerW4egBYNcLCkBxSomW4uC',
    'CgfYC2u',
    'Bwf0y2G',
    'DCoNW7FdTSk5W6HX',
    'cUEtNowiHUwpGUs4JUAiKowkNW',
    'WQtcSWyTkt5qW6tcT8onW4FcLCoDfe7dQmk1u8kn',
    'WOFcT8onW7jqAbOEWQlcUs7dQbpcJg8ju8oxW7G8xCkfW6CNBmoyWOpcOCkGWRBcVSoptGZcQqxcVcZdRSkctZ/cP8k6W5yoc3mZW53dUCkWW5CbbNBcNSonW5WaW77cS2TsW6Djet53sCk4w8keo3RdTmoUbmkLcuZcUmk/W5ftr8kOAmomWPq0WONcVCocWRBdOCknv8klzZK3ds5ciCkLhCk8fIFdHCk5iSogWOhcR0FdJSo/W4NcVCkpiSoIWPbvgSkelmklE3ddHmoscwBdIZyDzqTKdHJdVCk2cfTjW7K4pe5PWOqmW5BdRCo3uwawW45fFCksWPnSWQuxAmopWQlcL0CnW6SUW6PJgqqrhvxdTmoPbGhcMmkEmYZdQmo1W4bsW5ywgGucvmkztCkwW7RdGWCuWQBcMmoqFMlcN8oHfH3dVGKTh8oNWQmZW4iwcmoKWQKlW4yAeJSves0Yr13dLSkoWOzjW4nEnwxdNNaGW6j0W7quwHtdK0RdGCk/W6buoh13WPBdTmkJySkdW5xdJelcPSoSWRZcL2u7W47cIuC1lSkNDaJcJCoXW6NdQSoWWOajmCkdW5S6WP9qW7qeW7iPWRTuCmoYpeHVWOhcUCkhz8omWOisW4eMWPxcVb7cG0JcVh/dJmk+W6PXW4atuJtdMmk6aY0ZWRdcQSoslCkhp3RdISoLE8oDk8oNFmkwWQ3cQ0FdRCoKswKDW49/AfGpW4u0nSoFWP/dRCovlIqvW5LkWPK7WOBcQ8k9W5pdKG8jW4JdLKH5oh/dQsnBW4JcPa7dMvjQocanW6aFzgbHWPLCxwyMWQffWQRdNK3cVCkDWOVdTCksW7VdImoppCohEcpdUcvhW7ZdSYDhrCkZW5BdTqHde8k3W5xcV3zQWOWvW5JcPmotWPJdGwZdJWldMSoakg81W6NdHSoKWPKdWQ/dJ8ksFNyqWO4wW49RjG',
    'd8kcWPm8WQVdG3hcOCoQ',
    'rM9YBwf0',
    'WQGXWPnMW5/cPGXOwM4',
    'BgvUz3rO',
    'tmkcWOpcVgy',
    'WRBcVSkKsmkzW7WgbCoQ',
    'W6dcLga',
    'DxnLCM5HBwu',
    'zgf0yq',
    'Dw1PzfrVA2vU',
    'WQtcSWyncq',
    '6lAB5y6p44ok6lEu5y6R',
    'Bw9KDwXLtgLZDa',
    'ywnJzxnZu3LUyW',
    'W6DTW54',
    'jmk0a8kerSoYha',
    'otCWmdaZotC3',
    'W548sIfpW7u',
    'W5VLP7BOT4BVVii',
    'W5tPOz3LJ73MG4lMTiNPH4pLUkVVVPy',
    'mdaWma',
    'cUMIHUwpLUAiKowkNW',
    'jXldGCkJCmo6WPa',
    'W4iYxXDy',
    '56Yv56+P6l6g5PEG55IO77Y2',
    '6i635B6xoG',
    'd2ldVHNdQmkiWRFdJ8oHbtGcya',
    'cUEtNowiHUMIHUwpLUwKSEI0PE+8MG',
    'WP8EW5nd',
    'uCovnfBcR8kaWRGeWRi',
    'kmoLW6NcP8oLWR1UFxe',
    'howNI+I3HZpcLG',
    'W6H8WPu',
    'W4BdSvzRkGZdMmkJdmkAW6H8CmkrW59xof5BwGddOdhcN8kv',
    'cConW5S7WOBcLHO',
    'W58GsG',
    'Dg90ywXbBw91BNq',
    'nty0nJaWmG',
    'zCkCjSk3',
    'D2fSBgv0lMvSzs5Tzq',
    'WPD/C0xcT8otWQvvW6xdU8k/yq',
    'WPVdHJBdQHK',
    'WRtcPCk0xW',
    'bSkcWPm+WRhcMYVdUSoNWRBcNvTnWQuqWR3dOspdPCoKBs4aggTwd8ozbJ1YWQa',
    'ndy0odaWmq',
    'mdaW',
    '6Aw/5lQg5lMi5zcd6lsN6lgg',
    'CCoBWPxcTCoGW5m',
    'd8kgWPCIWQVdGMxcOCoMW6ZdNrflWRnrWR7cQcZdOSo3FcOahgzedCkArNqRW7Sd',
    'W7X0W6BcK8oB',
    'WRqud8oAz8kwW5VdNJaFsmoNWQxdO8o5WQFdLmoItb7cU8kHWOuMWPbitM9RCLD1W4HzkgVdISohgapcTCkddCoBbZpcJu1ch8oZW4vGumkBAIbWkhFcUmkIg8kWW67cP8o+u8kpWRPuhmkki8kMx8kMp1GfW73cSa',
    'W6uEvSoOxLKIW63cU3e+WQeCytFdVJvijJqMW5a',
    'WPRcS8kxASkxvMZcK8kv',
    'z2v0',
    '5zgI6lEP6lc2',
    'WPeuW4rvwSkNcG',
    'eK9DWPXJWPi',
    'i8oin8o2oSkdWOG',
    'CCoBWPu',
    'W7FOJjdLJOxKURhLI5VLIAxOORJVV44',
    'FCoJvG',
    'W61TW4VcVSkptWS',
    'oteWmdK1mJe1',
    'Cg9ZDa',
    'W7HIWO3cTgy',
    'mZG0mJC3mZq0ieXHDgL0DwrLlZiYlJKZmq',
    'WOtcH8kpACkKW58HjCoBb8kEW5S',
    'W4eXpq',
    'WPFcOSknF8kkxa',
    'Ahr0Chm6lY9Ons5LBguUBwuVCMvZDgfWAs9IAxOUz3jVD3rOx2zPBMv0Dw5Ll3yXl2zPBMv0Dw5Ll29WzxjHDgu/yML6u2nLBMfYAw9dB2rLpwHVBwvFy2HFDgfZA2XPC3qMBg9Uz2L0DwrLpteXmY4ZodCXmZGZnJy2otK',
    'wmkBWPzO',
    'CMv0',
    'BSkcWPVcRNVdQWbPWR9jW6VdGuOAWRznW4BdT8kAWRHGWOdcIXulW6VdMhFcQfldTeK/wHtcUCoLlZxdTmogmmoqW7RcOSkOpmoKW7iAWOBdUrVcNWO9FvWpnWConSoCWRSKW6ddSmoqAmkvrmoSWOlcV8onnSo6WO0dW59DC1hdP8kEFX51mCkKW6SGDWNcPSktW6P4WRjjWOFdKSoYWR1igSoDWRRcQSkOvCkCW6FdJqzhBSohWPtdKSkgi8kcWPNcUNPfsSoREsuIfmkXvdNcPYpdT8o9W7lcPHa7h0tdHmoYrGFcHCoWW4bfjuDnWQxcJcDbWRT9W4NdUmkxFXxdT8oLBSo9sK3cVSk5bmomqSklW41Wn0v5W7DLW4BdT2P9W4ZcISkHWRnmjcitWPBdRmkyWQPeWPvGhb3dU8kQWP7dImo2pN8JoJKwW6yKvmkLW4ZcJmkcW6zrkCouWOddIapdKSkHW4K3d8oGW6FdVKPdWPpdRqXjmmo2eSoaWQmTCWFcOsNcSmk6gCorwCklvSooar3dQJKUW5hcQCk4WPRdQwGVfaGwiCkKbx94',
    'hMddRW/dVq',
    'u01Fu1rbuLrusu1f',
    'y29Kzq',
    'W5e8Eq',
    'Bg9NrxjY',
    'W4BcHmkctKNcVa',
    'gmkxWOS7WQC',
    '56+g56Yy5y2J776/6i6Y5yYZ5lUH5yIB5yUr6kgZ',
    'lcjSyxrPDhvKzsi6mJiUotmXmJC2mZiXndeX',
    'dCkHfW',
    'WQBcSSk2W5pdQKRcJ8oPW68uW54vkmoBhCkLW5FdRr3dICoszmoKrCoarZBdPwfAWOZdGMZcG1jGzxq',
    'DMfSDwu',
    'Ahr0Chm6lY9Ons5LBguUBwuVCMvZDgfWAs9IAxOUz3jVD3rOx2zPBMv0Dw5Ll3yXl2zPBMv0Dw5Ll29WzxjHDgu/yML6u2nLBMfYAw9dB2rLpwHVBwvFy2HFDgfZA2XPC3qMBg9Uz2L0DwrLpteXmY4ZodCXmZGZnJy2oq',
    'zCoIW7xdRSkSW6PYDwZcGCkGpf7cPN/dRSkxfwBcJ8kFB0y8WQ/cPCkBW5FcPSkto17dT8o3W4eUyM0',
    'W6BOJiFLJR/KUBNLIO3JGAVNM4RLI6VLJPxMLOJMJzpPGR3LI4RKUidLI6FJGzm',
    'W5BdGmooWQ99sW1lW7q',
    'Bg9JpteXmY4ZodqXmdCWmtCZoda3ldiYlJK0ode5otuZndu4nZq',
    'WRVMIlVLI5m',
    'nJLenemTnJK3os00mtzflue5remTmdjgqZiXrtmXoui2ie1VEMLSBgeVns4WicHPugHVBMu7ienqvsbPugHVBMuGt1mGmtrFmIbSAwTLie1HyYbpuYbyksbbChbSzvDLyKTPDc82mduUms4XnsaOs0HutuWSigXPA2uGr2vJA28Pie1VyMLSzs8XnuuXndGGqwXPqxbWkevmtumVmtaUmc41ksbvvdrbCgX1CY8WlJaUnIbxAw5KvMfUzs84lJCUmIa4mJH4mtC5mIbxsW',
    'yIpcJCo4d8kHWRC2zWNcOr/cO8oXW5pdMmopd04mcxVdRSkzlSk2WQJcSMRcShddO8oPWOXFDcJcSXH/FdJdOCkwD8ojA8olWR7dMG7dKSkkWQS7ggG7yCkyweJdSKLJaXWwW4hdPmo8WPFdGKFdSKxdISkpWRiTWRtcRG',
    'aMKrBSkLWPDG',
    'DgfZA05HBwu',
    'WOSYo8occW/dL8oCEq9/W4SfqHWrALaGW68jFsj+W7i',
    'BSkBWOHOW47cIrNdQh0OW4hcLCk+zSkiW7/dVCk0W4KFCCowW7LsvCk3W7RdSSoDhaP1uSowxWXqWQ1dW5ucW6WIkmoJW5ddHbOHk8k9WRRcJvFdHIH0cttdIdtdOmohW64MnYdcM8kom3lcVSkVcCoEWOJcJdeNW5Lok3iQW4ZcJSoxkmknWQZcTGqAFSobgmkWo0H9WP1pW7BdLCoMWPFcRXLRDSkGDSk1CL1ynmkqgCoPisiZyXFcNZZcHgRcUCkhwsFdGGtcVmkYWOXHW4xcQaNdUCkGW61PWQb5WPpdIX7dOhVdMSouvhmItmkXWRS3WOngWPmMxIXTWPyvW5XbW4pcVuFcICk3W5y8W5lcONBcUYGUcmkKW5hdOd3dP2nRW77dGaXSECo1nCo0pSopW74rsCoRzmkUW4FdTb3cQXGhW7zFWO0VzSoOW7lcPCooiCk6rmolxcFdQCkmW7KTCSocWQxdM1dcHCkmwCkxW5dcMXhcSWvximoeWPL6mCoRlI0dW5P6dhldLmkAW4FcV8kukSkKdWSIASkoWQdcL2NcJhven8kdW7VdRvi',
    'iL19',
    'W5b7aeG6c8oZeCk8WONdIN1AkSka',
    'lqtdKG',
    'xCkVWRDBlmovomo7jW',
    'W5uPrbqrWQCKW7uMWQtcQmollrn7yrW',
    'WOzTpfXtwmkZpCo6W5RcG8oUWOBcJZrOdCkrWP/dLaZdIbxdNxG',
    'jgf0Dhi',
    'WPRcQGa',
    'aMddRGJdKSkDWOddHCowksmLASkczbe',
    'cUIeMUACRoEkTUAaGtO',
    'zMLUywXSEq',
    'W5ODWQ4',
    'WQDueW',
    'uMvUzgvYv2f5l0G1iefWCe5HBwuVzwXTyYbezxzPy2vjzc8YndiZrq',
    '6AcB5y+g5OMA5yUi',
    'y2f0y2G',
    'W6BLV6pLIktORlZNVylLHkRMJyBKVR7MGP/LIP8',
    'WOddNW4',
    '6zQp5PY6562j5B6fmtv+mtyUnEENKG',
    'DgfZA0rLCW',
    'Ahr0Chm6lY9Ons5LBguUBwuVCMvZDgfWAs9IAxOUC3zPCf9Zy2vUzs9ZDMLWl2vUz2LUzs94u3vWCgX5p2fZywm9',
    'WO7OJkNLVipVVRRLKOROTiJOGRxNMzpNUA/LJkVMUj0',
    'W6bxj11IDmoaiSkfW5FcHJOsp8kuW7RdGq',
    'W6NcLxe',
    'lcjHy3rjzci6iG',
    'W6jSW53cNSkwyWu',
    'FK1V',
    'wJTujCo0W4a0',
    'WR/cVSkKsSkdWQrCxSoNE8o9W7VdUuCDsdPlW4JdINDotgO+W7i0ASk2E3zsWODRWO7cP8oHbwtcJmoSBWTCphJdMmorWR3cS2rDq8oCwSodD2xdLtS',
    'A2vLCc1HBgL2zq',
    'EmkuamkXgmojW5S4kMNcMNJcHmoFlrJcUfpcLsvoW7LoW6tdRshcGSkeWQZcMurVa0yIW6tdN8kLW77cOColWRzACcTcA8o7nSo5W4pdS1SDWRCcyCoRhSo3ACo7oSoEjmk7c3D0WO4OCYtdLeFcSeddJIJdL8oPh8oWfqXfrSkFWRqjy27cTgSeW5LQW54xWRHyg01QWOeuW4RcGsnhgCo/ySovWP7cU8klWPTwWPuYrqrti8kIWRiPBSoJhMWJWO5zW5xcHtddISkdWOtcGSkAymkEn0NdULlcOmkHxCkJWPmUWO/dHSoukNddPCo/sCoyit11W7DrW4KVW73dLWBcRXPsx8oFWPaUtmoJW5arW6jPjYu4WObhW6v9wJRdKCoNqGerWR/dHuFcSW',
    'WPrZh8kbu0pcJ8kmjhD9W5q',
    'E8oDWPZcLa',
    'DxnLCLn0yxr1CW',
    'cSkxWPmV',
    'AxnoB2rL',
    'Ahr0Chm6lY90yI5LBguUBwu',
    'WQZdQmkXv8kFW6SDbCkTDa',
    'WP8EW4jwvmkUkJJcQ2VcPNf3',
    'cK92WRzYWOfaWQvBw8kNl8kxsW',
    'WRhcR8kJWPJcUr/dKa',
    'kmkmW4FdGmkIWPhdHG',
    'W4XfWOytcmoXvMldVbpdVs48FdGs',
    'ASo3DCkGEG',
    'W4qKlHBdQW',
    'AduUzwXLlM1L',
    'r8o5WRnin8owimo8yeKhW7RcJ0Gfj8oEW4eXyNZcJN7dVM3cUCkCWPL5WR7cKZdcUM8domkYW5HBW70QzmkvW5hcNmkFWOSeW7LAs3BcNcXGASovW5fyvXelfLfjWRK/rhm1W4/dLIC8W5pcVatcTComW47dJa',
    'iSomn8oXhSkkWP9UCtZdTcpdGmkhha',
    'WORdMqFdPG',
    'WO7LVydLIR/LKiBOTOZOSQNVVBi',
    'bCo2WOyEDmkpymk7EJzSWQW',
    'W4GWla',
    'W53PMzROLj/KU4hLIzhOJkNLV6q',
    'WO3KU5BLI6/LPjZOTAVVVy4',
    'W6JdPCkDdmoYs8o9kGBdPtepqmoRWPFcTIRcPbldNmk7l3LBr0dcSmkm',
    'W5a9jGddUSk3WRneW43dNCkSDq',
    'WQxcTwXJWP5+n8oA',
    '6i+55BYb77YB5zox6lsV6igM55MP57UK5y695RQB',
    'oSkhAGldUSobW5zsW7ZcNCk/W4ZdKNlcVmoEcSoIW4W6W6/dMCkjvmkBx07cVuzus27dLmkLWPLHW7VdLYqX',
    'jMXHDgL0DwrLptiYlJKZmti3nJmYmtqXmq',
    'ls0Tls0Tls0Tls0Tls0Tls0T5lU75yQH57Ut5P2Fls0Tls0Tls0Tls0Tls0Tls0T',
    'WPFLVypLIiFLKztOTPhOS6NVVjO',
    '5lU75yQH77YA',
    'WPddJIa5eX3cVSkqWQWkWQy3',
    'cUIeMUACRoEkTUAaGE+8MG',
    'cUw9K+wjJEIUVUE9RUs4JEwfKEAnOUs8MoAdOowiUa',
    'C33dImo3wG',
    'WRNcVL8JdN5gW6xdQCoGW4xcLmoas0W',
    'WRFcSSksdSoJuCo6',
    'cUs7U+wkOEwKSEI0PE+8MG',
    'devkWRvWWOnj',
    'mdqXntmXotqZldiYlJKZmq',
    'nmofACoMnq',
    'W7GcvSoIbajHW43cNxSeWQuI',
    'W6hdSSo5W4tdOq',
    'lbJdKSkcy8o8',
    'yxr0CMLIDxrL',
    'lbBdHSkZumoTWOxdLCo/cta',
    'WQJcU8kMWPldPeBcKSo/WQrbWPiLjSobgmkUW5pcTatdICoid8kSqSkfega',
    'W7tdSCoNW5q',
    'nty3ndaWmq',
    '562u56+e6lYt5PE055Md77+c',
    'Ahr0Chm6lY9ODhrWAxP6ys5LBguUBwuVzwXLlwzPBI1WCM9TB3rPB24Tywn0AxzPDhKVyM9UDxmVywnJB3vUDfDPDgHKCMf3ywW',
    'Cmo4rCoeh8kGwgJdKW',
    'W47cG8k4u0tcU3ivya',
    'cUw8GowNI+oaKoMLV+s6HUs5IoI0PUAiT+wfKEAnOIa',
    'kXu4W5fiWOHfota',
    'Dow9S+wjT+w9NoAkTowtRq',
    'lCoyymoKWO9fWRXAm2nMumkjWPiWdaeFiCkXWR1ziW3cHSoOWOO',
    'g0XxWRP6',
    'ntCWmJaWmq',
    '5lQR6lsn5y67',
    'W5JNRjJNRRROVBhMLlpNMk/VVia',
    'WPpcQXe',
    'c8kyWPe',
    'jMfJDeLKpteMx2X0CMfJA2vYx2y9AgPIx2fWCf9NCNP4jMnOsw5MBZ1JAf9HChbFy2HZDwjFugHVDg8',
    'jCk8WQRcR8o6WR9X',
    'WRG3WONdI8oEhfi',
    'CMvJB3jKtM8',
    'smkAWOy6WQVdLxhcSCoQWR7cGqWpW7KnW6hcTJVcOmkHnM8BxtS',
    'W582xHDCW6aL',
    'ls0Tls0Tls0Tls0Tls0Tls0T57Ut5P2Fls0Tls0Tls0Tls0Tls0Tls0T',
    'WRdcSmk5sSoCWR4xfmoPiSkYW6RdSa4trY0',
    'ntK2ntaYuNzxzxnL',
    'WO0npmkTW4SGDJJcLKxdRmoTomkeaCkwWQtdIrePc1/dSNFcNSo1W7S1WPZcVXjfi8o6WOpdN8k6WQ4dlhldT1bjCmo/WObfv8oLW7/cJCkcW5bssSkEq0q3WOJdIMlcGmkCuc3dQmkIemkQWOldLteUW7Olxmk+jX7dGZ8HnCkHgSk3WQut',
    'Ahr0Chm6lY9Ons5LBguUBwuVCMvZDgfWAs9IAxOUC3zPCf9Zy2vUzs9ZDMLWl2vUz2LUzs9XDwvYEvrYywzMAwntDxbWBhK/DgfNugfYyw1Zw109jtDcjtiYDgfNq29KzsuYmJOLmJi',
    'WQq/W5JdPJvYWQBcQdXuBYP0',
    'WRVcT0ynda',
    'W6Xik11JnCoilSkvW54',
    'W5O/m8oc',
    'cwqAz8k3WOrKWORdUCkr',
    'z2v0rgf0zq',
    'Ahr0Chm6lY9Ons5LBguUBwuVCMvZDgfWAs9HBhbHy2eVDJeVCMvJB21Tzw5Kl3n1ChbVCNrVCG',
    '5OoO6yg+5OMC55Md5PI+55AMW5pMJ77OO53NRyL96zMw5B62da',
    'wCk1WRu',
    'qc7dRHNdTSkyWQ3dGCoYlZeF',
    'zooaKEI2U+woIW',
    'jXldGCkXCmoI',
    'BgfZDfbOyxnLswq',
    'yMzImde4oa',
    'W44oWRpcGG',
    'W43cGmkcWRLLxa',
    'jCoZzmkKjvpdMI/dJH8',
    'Ahr0Chm6lY9ODhrWAxP6ys5LBguUBwuVzwXLlwzPBI1WCM9TB3rPB24Tywn0AxzPDhKVyM9UDxmVCxvLCNLcywXHBMnLp2jPEKnVzgu9y2fZAgjHy2S',
    'DgfZA0LK',
    'Ahr0CgL6EMeUzwXLlM1L',
    'Fe1/',
    'C27dJmosv8kbW6DYoIpdUWldVCkWWOJcHSobkbjDtZNcV8oCj8oXW6JdPhpcVW',
    'W6ldT8o6W4q',
    'W6VdRrHEvYiB',
    '6lEI5y+E5zcZ56wS772m',
    'jmk7b8kgrSoYha',
    'os1fnZe4ltq4rtaT',
    '5661562C6l6x5Pwe55Mj77+5',
    'hYDYW43dLrpdKGBdPq',
    'W5xcKmkfWRO8t09pW6FdRW',
    'W74xWRxcMtxcNq',
    'W65+WOZcVNK',
    'bdSRW5ZdKG'
  ];
  _0x1d3a = function () {
    return _0x58c5cb;
  };
  return _0x1d3a();
}
function supportoraffdd() {
  return new Promise(_0x33ea62 => {
    const _0x27c652 = _0x45e1,
      _0x56de1d = _0x3895;
    let _0x55efd1 = {
      url:
        'https://h5.ele.me/restapi/lego/query_module_content?codes=[%22recommend_price_fire%22]&latitude=22.931' +
        num +
        _0x56de1d(0x19d) +
        num +
        '384277344',
      headers: {
        Cookie: elmck,
        Host: _0x56de1d(0x233),
        Accept: _0x56de1d(0x378),
        'x-shard':
          _0x56de1d(0x2b6) + num + '384277344,22.931' + num + '910095215',
        'f-pTraceId': _0x27c652(0x32a, '0[&u'),
        'Accept-Encoding': 'gzip,\x20deflate,\x20br',
        'Accept-Language': _0x27c652(0x290, '9W1c'),
        'f-refer': _0x27c652(0x1ce, 'XX7E'),
        Origin: _0x27c652(0x2e7, 'KF)d'),
        'x-ua':
          _0x56de1d(0x2ed) + num + _0x56de1d(0x1e6) + num + _0x56de1d(0x1e3),
        'User-Agent':
          'Rajax/1\x20Apple/iPhone12,1\x20iOS/14.2\x20Eleme/10.0.5\x20ID/2423E6' +
          num +
          _0x56de1d(0x336) +
          num +
          _0x56de1d(0x200),
        Referer: _0x27c652(0x186, 'z[Kw') + ownerId + _0x56de1d(0x265),
        Connection: 'keep-alive'
      }
    };
    $[_0x56de1d(0x1da)](
      _0x55efd1,
      async (_0x2a267a, _0x18c443, _0x3077dd) => {
        const _0x2f3f8c = _0x27c652;
        try {
        } catch (_0x100b5c) {
          $[_0x2f3f8c(0x1b6, 'AJJm')](_0x100b5c, _0x18c443);
        } finally {
          _0x33ea62();
        }
      },
      0x0
    );
  });
}
function menu() {
  return new Promise(_0x4bf680 => {
    const _0x411c3a = _0x45e1,
      _0xdbe1fb = _0x3895;
    let _0x3e5e6b = {
      url:
        _0xdbe1fb(0x26f) +
        queryTagCode +
        '%22%7D&bizCode=biz_card_main&longitude=113.387138366699' +
        num +
        _0x411c3a(0x196, 'Ydio') +
        num,
      headers: { Cookie: elmck }
    };
    $[_0xdbe1fb(0x1da)](
      _0x3e5e6b,
      async (_0x663d91, _0x2dc5ec, _0x21f44e) => {
        const _0x3217af = _0xdbe1fb,
          _0x2d9c0f = _0x411c3a;
        try {
          let _0x464442 = JSON[_0x2d9c0f(0x316, '3kwV')](_0x21f44e);
          if (_0x464442[_0x2d9c0f(0x321, '5rvJ')] == 0xc8) {
            let _0x2693f6 = _0x464442['data'][0x0][_0x2d9c0f(0x19b, 'XX7E')];
            for (
              let _0x5cc2c2 = 0x0;
              _0x5cc2c2 < _0x2693f6[_0x3217af(0x1a8)];
              _0x5cc2c2++
            ) {
              if (
                _0x2693f6[_0x5cc2c2][_0x2d9c0f(0x209, '4&vr')][
                  'receiveStatus'
                ] == _0x2d9c0f(0x360, '^$05')
              ) {
                let _0x428ae4 =
                  _0x2693f6[_0x5cc2c2]['attribute'][_0x3217af(0x185)];
                if (_0x428ae4 == _0x3217af(0x2f2)) {
                  console[_0x3217af(0x2ae)](
                    _0x2d9c0f(0x29b, 'xc3I') +
                      _0x2693f6[_0x5cc2c2][_0x2d9c0f(0x259, '3kwV')][
                        _0x3217af(0x2fc)
                      ]
                  ),
                    (allMessage +=
                      '\x0a任务：' +
                      _0x2693f6[_0x5cc2c2][_0x3217af(0x252)][_0x3217af(0x2fc)]);
                  let _0x18768a =
                      _0x2693f6[_0x5cc2c2][_0x2d9c0f(0x2fd, 'SGxf')][
                        _0x2d9c0f(0x245, 'if(x')
                      ],
                    _0x265328 =
                      _0x2693f6[_0x5cc2c2][_0x3217af(0x252)][
                        _0x2d9c0f(0x179, '^$05')
                      ];
                  await running(_0x18768a, _0x265328, _0x428ae4),
                    console[_0x3217af(0x2ae)](_0x3217af(0x218)),
                    (allMessage += '\x0a随机等待15~16.5秒');
                  let _0x4ee0fb = rand(0x3afc, 0x4074);
                  await $[_0x2d9c0f(0x2ee, 'sqvW')](0x1f4);
                }
              }
            }
            let _0x17e3e3 = [
              { DefId: '4182001', CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x175, 'bGVH'), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x287, 'UN(9'), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x177, 'UN(9'), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x302, '8kA5'), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x32e, 'l^y*'), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x32f, 'eO[p'), CollectionId: 0x24 },
              { DefId: '6092001', CollectionId: 0x24 },
              { DefId: '238001', CollectionId: 0x24 },
              { DefId: _0x3217af(0x2f1), CollectionId: 0x24 },
              { DefId: _0x3217af(0x18c), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x267, 'l5ZA'), CollectionId: 0x24 },
              { DefId: _0x3217af(0x184), CollectionId: 0x24 },
              { DefId: _0x3217af(0x326), CollectionId: 0x24 },
              { DefId: _0x3217af(0x2ce), CollectionId: 0x24 },
              { DefId: _0x3217af(0x2c8), CollectionId: 0x24 },
              { DefId: '4238001', CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x35c, 'eO[p'), CollectionId: 0x24 },
              { DefId: '4624002', CollectionId: 0x24 },
              { DefId: '4644001', CollectionId: 0x24 },
              { DefId: _0x3217af(0x1d1), CollectionId: 0x24 },
              { DefId: '4822002', CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x308, 'T@p4'), CollectionId: 0x24 },
              { DefId: '5180001', CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x22e, '4mXv'), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x348, 'MLd$'), CollectionId: 0x24 },
              { DefId: _0x3217af(0x2e5), CollectionId: 0x24 },
              { DefId: _0x3217af(0x31d), CollectionId: 0x24 },
              { DefId: _0x3217af(0x31f), CollectionId: 0x24 },
              { DefId: _0x3217af(0x1ca), CollectionId: 0x24 },
              { DefId: '5652001', CollectionId: 0x24 },
              { DefId: _0x3217af(0x256), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x197, '8$zG'), CollectionId: 0x24 },
              { DefId: _0x3217af(0x260), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x1a1, 'bGVH'), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x2e9, '2jm5'), CollectionId: 0x24 },
              { DefId: _0x3217af(0x301), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x370, '2ama'), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x289, '3kwV'), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x221, '^$05'), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x1c7, '0[&u'), CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x1b4, '3kwV'), CollectionId: 0x24 },
              { DefId: _0x3217af(0x2c3), CollectionId: 0x24 },
              { DefId: '5836001', CollectionId: 0x24 },
              { DefId: _0x2d9c0f(0x22f, 'l^y*'), CollectionId: 0x24 }
            ];
            (ycrw = 0x0), console[_0x2d9c0f(0x220, '0qa@')]('完成隐藏任务');
            for (let _0x571f60 of _0x17e3e3) {
              await runnings(
                _0x571f60['DefId'],
                _0x571f60['CollectionId'],
                _0x3217af(0x2f2)
              ),
                await $[_0x2d9c0f(0x19a, 'GjS3')](0xbb8);
            }
            console[_0x3217af(0x2ae)](
              _0x2d9c0f(0x34b, 'if(x') + ycrw + _0x3217af(0x2d1)
            ),
              (allMessage +=
                _0x2d9c0f(0x23a, 'MLd$') + ycrw + _0x3217af(0x2d1));
          }
        } catch (_0x38a645) {
          $[_0x2d9c0f(0x1dd, '2ama')](_0x38a645, _0x2dc5ec);
        } finally {
          _0x4bf680();
        }
      },
      0x0
    );
  });
}
function running(_0x35549e, _0x389042, _0x1d89a8) {
  return new Promise(_0x1d3ef3 => {
    const _0x2674c2 = _0x3895,
      _0x4e37c1 = _0x45e1;
    let _0x12ae52 = {
      url:
        _0x4e37c1(0x2c9, '4&vr') +
        acceptTagCode +
        _0x4e37c1(0x1fb, 'bGVH') +
        _0x35549e +
        _0x4e37c1(0x254, '4mXv') +
        _0x389042 +
        _0x4e37c1(0x1d8, 'sqvW') +
        _0x1d89a8 +
        _0x2674c2(0x198) +
        num +
        _0x4e37c1(0x204, '2jm5') +
        num,
      headers: { Cookie: elmck }
    };
    $['get'](
      _0x12ae52,
      async (_0xe24eee, _0x55b932, _0x5b1f2c) => {
        const _0xaaf575 = _0x4e37c1,
          _0x5318cc = _0x2674c2;
        try {
          let _0xbadba2 = JSON[_0x5318cc(0x19f)](_0x5b1f2c);
          _0xbadba2[_0x5318cc(0x1ad)][0x0] &&
          _0xbadba2['data'][0x0][_0x5318cc(0x252)][_0xaaf575(0x1c1, 't@$L')]
            ? _0xbadba2[_0xaaf575(0x17c, '#h0Q')][0x0][_0x5318cc(0x252)][
                _0xaaf575(0x2cb, 'N0N]')
              ] == '领取奖励奖励已全部领奖'
              ? (console[_0x5318cc(0x2ae)](
                  _0xbadba2[_0xaaf575(0x1cb, 'je#p')][0x0][_0x5318cc(0x252)][
                    _0x5318cc(0x305)
                  ]
                ),
                (allMessage +=
                  _0xbadba2['data'][0x0][_0xaaf575(0x293, '0[&u')][
                    _0x5318cc(0x305)
                  ]))
              : (console[_0xaaf575(0x1c5, 'PrZQ')](
                  _0xbadba2[_0xaaf575(0x34c, 'eO[p')][0x0][
                    _0xaaf575(0x1d9, 'KF)d')
                  ][_0x5318cc(0x305)] +
                    ('获得:' +
                      _0xbadba2[_0xaaf575(0x2d7, '8NrK')][0x0]['attribute'][
                        _0x5318cc(0x1f9)
                      ] +
                      _0xaaf575(0x1db, 'eO[p'))
                ),
                (allMessage +=
                  _0xbadba2[_0xaaf575(0x29f, '#Nf[')][0x0][_0x5318cc(0x252)][
                    _0x5318cc(0x305)
                  ] +
                  (_0x5318cc(0x1be) +
                    _0xbadba2[_0x5318cc(0x1ad)][0x0][_0x5318cc(0x252)][
                      _0x5318cc(0x1f9)
                    ] +
                    _0x5318cc(0x2d1))))
            : _0xbadba2[_0x5318cc(0x1ad)][0x0]
            ? (console[_0xaaf575(0x178, '8kA5')](
                _0xaaf575(0x182, 'vz(j') +
                  _0xbadba2[_0xaaf575(0x29f, '#Nf[')][0x0]['xmessage']
              ),
              (allMessage +=
                _0xaaf575(0x23b, 'Kg!9') +
                _0xbadba2[_0xaaf575(0x35d, '8$zG')][0x0]['xmessage']))
            : (console['log'](
                _0xaaf575(0x2dc, '4&vr') + _0xbadba2[_0x5318cc(0x1ec)][0x1]
              ),
              (allMessage +=
                _0x5318cc(0x24b) + _0xbadba2[_0xaaf575(0x2a6, '#Nf[')][0x1]));
        } catch (_0x27e0de) {
          $[_0xaaf575(0x1b6, 'AJJm')](_0x27e0de, _0x55b932);
        } finally {
          _0x1d3ef3();
        }
      },
      0x0
    );
  });
}
function runnings(_0x316eaf, _0x354fd, _0x256edc) {
  return new Promise(_0xd647c7 => {
    const _0x5796e1 = _0x3895,
      _0x2b6e2f = _0x45e1;
    let _0x5b3f81 = {
      url:
        _0x2b6e2f(0x26e, 'z[Kw') +
        acceptTagCode +
        _0x2b6e2f(0x30e, 'l5ZA') +
        _0x316eaf +
        _0x2b6e2f(0x25e, 'je#p') +
        _0x354fd +
        _0x5796e1(0x373) +
        _0x256edc +
        _0x5796e1(0x198) +
        num +
        '&latitude=22.931276321411' +
        num,
      headers: { Cookie: elmck }
    };
    $['get'](
      _0x5b3f81,
      async (_0x33f6f3, _0xb25162, _0x4ee2b1) => {
        const _0x141b61 = _0x5796e1,
          _0x31f9e6 = _0x2b6e2f;
        try {
          let _0x262508 = JSON[_0x31f9e6(0x1bc, 'AJJm')](_0x4ee2b1);
          _0x262508[_0x31f9e6(0x31c, '4&vr')] &&
          _0x262508[_0x31f9e6(0x2f8, 'l5ZA')][0x0] &&
          _0x262508['data'][0x0][_0x31f9e6(0x25a, 'Ydio')][
            _0x31f9e6(0x306, 'UN(9')
          ]
            ? _0x262508[_0x141b61(0x1ad)][0x0][_0x141b61(0x252)][
                _0x31f9e6(0x1dc, 't@$L')
              ] == '领取奖励奖励已全部领奖'
              ? console['log'](
                  _0x262508[_0x31f9e6(0x228, 'zCNj')][0x0][_0x141b61(0x252)][
                    'message'
                  ]
                )
              : _0x262508[_0x141b61(0x1ad)][0x0][_0x31f9e6(0x2fd, 'SGxf')][
                  _0x31f9e6(0x309, 'T@p4')
                ] &&
                (rw[_0x141b61(0x351)]({
                  DefId: _0x316eaf,
                  CollectionId: _0x354fd
                }),
                console[_0x31f9e6(0x217, 'XX7E')](
                  _0x262508['data'][0x0][_0x31f9e6(0x1a5, 'zCNj')]['message'] +
                    (_0x141b61(0x1be) +
                      _0x262508[_0x141b61(0x1ad)][0x0][
                        _0x31f9e6(0x1aa, 'MLd$')
                      ]['value'] +
                      '吃货豆')
                ),
                (ycrw =
                  ycrw +
                  parseInt(
                    _0x262508[_0x31f9e6(0x191, '&FJP')][0x0][
                      _0x31f9e6(0x28c, '9W1c')
                    ][_0x31f9e6(0x1f4, 'zCNj')]
                  )))
            : _0x262508['data'][0x0]
            ? console[_0x141b61(0x2ae)](
                _0x141b61(0x29c) +
                  _0x262508[_0x141b61(0x1ad)][0x0][_0x141b61(0x300)]
              )
            : console[_0x141b61(0x2ae)](
                _0x141b61(0x29c) + _0x262508[_0x31f9e6(0x37f, 'GjS3')][0x1]
              );
        } catch (_0x13de61) {
          $['logErr'](_0x13de61, _0xb25162);
        } finally {
          _0xd647c7();
        }
      },
      0x0
    );
  });
}
function rand(_0x465f23, _0x5b8287) {
  return parseInt(
    Math['random']() * (_0x5b8287 - _0x465f23 + 0x1) + _0x465f23,
    0xa
  );
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = 'GET') {
      t = 'string' == typeof t ? { url: t } : t;
      let s = this.get;
      return (
        'POST' === e && (s = this.post),
        new Promise((e, i) => {
          s.call(this, t, (t, s, r) => {
            t ? i(t) : e(s);
          });
        })
      );
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, 'POST');
    }
  }
  return new (class {
    constructor(t, e) {
      (this.name = t),
        (this.http = new s(this)),
        (this.data = null),
        (this.dataFile = 'box.dat'),
        (this.logs = []),
        (this.isMute = !1),
        (this.isNeedRewrite = !1),
        (this.logSeparator = '\n'),
        (this.encoding = 'utf-8'),
        (this.startTime = new Date().getTime()),
        Object.assign(this, e),
        this.log('', `\ud83d\udd14${this.name}, \u5f00\u59cb!`);
    }
    isNode() {
      return 'undefined' != typeof module && !!module.exports;
    }
    isQuanX() {
      return 'undefined' != typeof $task;
    }
    isSurge() {
      return 'undefined' != typeof $httpClient && 'undefined' == typeof $loon;
    }
    isLoon() {
      return 'undefined' != typeof $loon;
    }
    isShadowrocket() {
      return 'undefined' != typeof $rocket;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i)
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({ url: t }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata('@chavy_boxjs_userCfgs.httpapi');
        i = i ? i.replace(/\n/g, '').trim() : i;
        let r = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout');
        (r = r ? 1 * r : 20), (r = e && e.timeout ? e.timeout : r);
        const [o, h] = i.split('@'),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: { script_text: t, mock_type: 'cron', timeout: r },
            headers: { 'X-Key': o, Accept: '*/*' }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        (this.fs = this.fs ? this.fs : require('fs')),
          (this.path = this.path ? this.path : require('path'));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        (this.fs = this.fs ? this.fs : require('fs')),
          (this.path = this.path ? this.path : require('path'));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s
          ? this.fs.writeFileSync(t, r)
          : i
          ? this.fs.writeFileSync(e, r)
          : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, '.$1').split('.');
      let r = t;
      for (const t of i) if (((r = Object(r)[t]), void 0 === r)) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t
        ? t
        : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []),
          (e
            .slice(0, -1)
            .reduce(
              (t, s, i) =>
                Object(t[s]) === t[s]
                  ? t[s]
                  : (t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}),
              t
            )[e[e.length - 1]] = s),
          t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : '';
        if (r)
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, '') : e;
          } catch (t) {
            e = '';
          }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? ('null' === o ? null : o || '{}') : '{}';
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), (s = this.setval(JSON.stringify(e), i));
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), (s = this.setval(JSON.stringify(o), i));
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.read(t)
        : this.isQuanX()
        ? $prefs.valueForKey(t)
        : this.isNode()
        ? ((this.data = this.loaddata()), this.data[t])
        : (this.data && this.data[t]) || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.write(t, e)
        : this.isQuanX()
        ? $prefs.setValueForKey(t, e)
        : this.isNode()
        ? ((this.data = this.loaddata()),
          (this.data[e] = t),
          this.writedata(),
          !0)
        : (this.data && this.data[e]) || null;
    }
    initGotEnv(t) {
      (this.got = this.got ? this.got : require('got')),
        (this.cktough = this.cktough ? this.cktough : require('tough-cookie')),
        (this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()),
        t &&
          ((t.headers = t.headers ? t.headers : {}),
          void 0 === t.headers.Cookie &&
            void 0 === t.cookieJar &&
            (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      if (
        (t.headers &&
          (delete t.headers['Content-Type'],
          delete t.headers['Content-Length']),
        this.isSurge() || this.isLoon())
      )
        this.isSurge() &&
          this.isNeedRewrite &&
          ((t.headers = t.headers || {}),
          Object.assign(t.headers, { 'X-Surge-Skip-Scripting': !1 })),
          $httpClient.get(t, (t, s, i) => {
            !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
          });
      else if (this.isQuanX())
        this.isNeedRewrite &&
          ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
          $task.fetch(t).then(
            t => {
              const { statusCode: s, statusCode: i, headers: r, body: o } = t;
              e(null, { status: s, statusCode: i, headers: r, body: o }, o);
            },
            t => e(t)
          );
      else if (this.isNode()) {
        let s = require('iconv-lite');
        this.initGotEnv(t),
          this.got(t)
            .on('redirect', (t, e) => {
              try {
                if (t.headers['set-cookie']) {
                  const s = t.headers['set-cookie']
                    .map(this.cktough.Cookie.parse)
                    .toString();
                  s && this.ckjar.setCookieSync(s, null),
                    (e.cookieJar = this.ckjar);
                }
              } catch (t) {
                this.logErr(t);
              }
            })
            .then(
              t => {
                const {
                  statusCode: i,
                  statusCode: r,
                  headers: o,
                  rawBody: h
                } = t;
                e(
                  null,
                  { status: i, statusCode: r, headers: o, rawBody: h },
                  s.decode(h, this.encoding)
                );
              },
              t => {
                const { message: i, response: r } = t;
                e(i, r, r && s.decode(r.rawBody, this.encoding));
              }
            );
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : 'post';
      if (
        (t.body &&
          t.headers &&
          !t.headers['Content-Type'] &&
          (t.headers['Content-Type'] = 'application/x-www-form-urlencoded'),
        t.headers && delete t.headers['Content-Length'],
        this.isSurge() || this.isLoon())
      )
        this.isSurge() &&
          this.isNeedRewrite &&
          ((t.headers = t.headers || {}),
          Object.assign(t.headers, { 'X-Surge-Skip-Scripting': !1 })),
          $httpClient[s](t, (t, s, i) => {
            !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
          });
      else if (this.isQuanX())
        (t.method = s),
          this.isNeedRewrite &&
            ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
          $task.fetch(t).then(
            t => {
              const { statusCode: s, statusCode: i, headers: r, body: o } = t;
              e(null, { status: s, statusCode: i, headers: r, body: o }, o);
            },
            t => e(t)
          );
      else if (this.isNode()) {
        let i = require('iconv-lite');
        this.initGotEnv(t);
        const { url: r, ...o } = t;
        this.got[s](r, o).then(
          t => {
            const { statusCode: s, statusCode: r, headers: o, rawBody: h } = t;
            e(
              null,
              { status: s, statusCode: r, headers: o, rawBody: h },
              i.decode(h, this.encoding)
            );
          },
          t => {
            const { message: s, response: r } = t;
            e(s, r, r && i.decode(r.rawBody, this.encoding));
          }
        );
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        'M+': s.getMonth() + 1,
        'd+': s.getDate(),
        'H+': s.getHours(),
        'm+': s.getMinutes(),
        's+': s.getSeconds(),
        'q+': Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) &&
        (t = t.replace(
          RegExp.$1,
          (s.getFullYear() + '').substr(4 - RegExp.$1.length)
        ));
      for (let e in i)
        new RegExp('(' + e + ')').test(t) &&
          (t = t.replace(
            RegExp.$1,
            1 == RegExp.$1.length
              ? i[e]
              : ('00' + i[e]).substr(('' + i[e]).length)
          ));
      return t;
    }
    msg(e = t, s = '', i = '', r) {
      const o = t => {
        if (!t) return t;
        if ('string' == typeof t)
          return this.isLoon()
            ? t
            : this.isQuanX()
            ? { 'open-url': t }
            : this.isSurge()
            ? { url: t }
            : void 0;
        if ('object' == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t['open-url'],
              s = t.mediaUrl || t['media-url'];
            return { openUrl: e, mediaUrl: s };
          }
          if (this.isQuanX()) {
            let e = t['open-url'] || t.url || t.openUrl,
              s = t['media-url'] || t.mediaUrl;
            return { 'open-url': e, 'media-url': s };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t['open-url'];
            return { url: e };
          }
        }
      };
      if (
        (this.isMute ||
          (this.isSurge() || this.isLoon()
            ? $notification.post(e, s, i, o(r))
            : this.isQuanX() && $notify(e, s, i, o(r))),
        !this.isMuteLog)
      ) {
        let t = [
          '',
          '==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============='
        ];
        t.push(e),
          s && t.push(s),
          i && t.push(i),
          console.log(t.join('\n')),
          (this.logs = this.logs.concat(t));
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]),
        console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s
        ? this.log('', `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack)
        : this.log('', `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log(
        '',
        `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`
      ),
        this.log(),
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  })(t, e);
}
