// ==UserScript==
// @name         云顶修仙登陆去验证码
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://yundingxx.com:3366/login*
// @grant        none
// ==/UserScript==
var el=document.querySelector('#emailCode')
el.value="需要注册账号请把本插件关闭,注册需要验证码"
window.queryEntry=remove_verification_code
el=document.querySelector('#login-sub')
el.addEventListener('click',function(){
	console.log("click");
	window.queryEntry=remove_verification_code
});
function remove_verification_code(_0xc063x6, _0xc063x7) {
 		console.log(1);
        var _0xc063x8 = window[__Ox8ad05[0x3]][__Ox8ad05[0x2]];
        if (_0xc063x8[__Ox8ad05[0x1]](__Ox8ad05[0xd]) != -1) {
            _0xc063x8 = _0xc063x8[__Ox8ad05[0xf]](/(\?|#)[^'"]*/, __Ox8ad05[0xe]);
            window[__Ox8ad05[0x11]][__Ox8ad05[0x10]]({}, 0, _0xc063x8)
        }
        ;var _0xc063x9 = __Ox8ad05[0x12];
        pomelo[__Ox8ad05[0x1b]]({
            host: window[__Ox8ad05[0x3]][__Ox8ad05[0x13]],
            port: 3014,
            log: true
        }, function() {
            var _0xc063xa = $(__Ox8ad05[0x14])[__Ox8ad05[0x9]]();
            pomelo[__Ox8ad05[0x1a]](_0xc063x9, {
                login_email: _0xc063x6[__Ox8ad05[0x6]],
                login_pwd: _0xc063x6[__Ox8ad05[0x8]],
                code: '',
                is_r: true
            }, function(_0xc063xb) {
                pomelo[__Ox8ad05[0x15]]();
                if (_0xc063xb[__Ox8ad05[0x16]] != 200) {
                    layer[__Ox8ad05[0x17]](_0xc063xb[__Ox8ad05[0x17]], {
                        offset: __Ox8ad05[0x18]
                    });
                    return
                } else {
                    localStorage[__Ox8ad05[0x19]](__Ox8ad05[0x6], _0xc063x6[__Ox8ad05[0x6]]);
                    localStorage[__Ox8ad05[0x19]](__Ox8ad05[0x8], _0xc063x6[__Ox8ad05[0x8]]);
                    _0xc063x7(_0xc063xb)
                }
            })
        })
    }

