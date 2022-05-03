window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19b31+18M9Bsa8Cd7MpmcUm", "Logic");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        rabbitWhite: {
          default: null,
          type: cc.Component
        },
        rabbitBrown: {
          default: null,
          type: cc.Component
        },
        rabbitGray: {
          default: null,
          type: cc.Component
        },
        rabbitBlack: {
          default: null,
          type: cc.Component
        }
      },
      start: function start() {
        this.rabbitWhite.active = true;
      },
      update: function update(dt) {
        this.rabbitWhite.getComponent("rbWhite").isCompleted && (this.rabbitBrown.node.active = true);
        this.rabbitBrown.getComponent("rbBrown").isCompleted && (this.rabbitGray.node.active = true);
        this.rabbitGray.getComponent("rbGray").isCompleted && (this.rabbitBlack.node.active = true);
      }
    });
    cc._RF.pop();
  }, {} ],
  rbBlack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32ccerDza1IPYLLX9LEeeED", "rbBlack");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _isCompleted: false,
        duration: 0,
        scale: 0,
        movePixelX: 0
      },
      get isCompleted() {
        return this._isCompleted;
      },
      set isCompleted(value) {
        return this._isCompleted = value;
      },
      checkCompleted: function checkCompleted() {
        return this.isCompleted = true;
      },
      move: function move() {
        return this.actions = [ cc.scaleTo(this.duration, this.scale), cc.moveBy(this.duration, this.movePixelX, 0), cc.flipX(true), cc.moveBy(this.duration, -this.movePixelX, 0), cc.flipX(false) ];
      },
      start: function start() {
        cc.log("Rabbit Black: Hello!!!");
        this.node.runAction(cc.sequence(this.move()));
      }
    });
    cc._RF.pop();
  }, {} ],
  rbBrown: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4c25q7AsVK5abZ8oVmsK4E", "rbBrown");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _isCompleted: false,
        movePixelX: 0,
        rotate: 0,
        numberRepeat: 0,
        duration: 0
      },
      get isCompleted() {
        return this._isCompleted;
      },
      set isCompleted(value) {
        return this._isCompleted = value;
      },
      move: function move() {
        return cc.repeat(cc.spawn(cc.rotateBy(this.duration, this.rotate), cc.moveBy(this.duration, this.movePixelX, 0)), this.numberRepeat);
      },
      checkCompleted: function checkCompleted() {
        return this.isCompleted = true;
      },
      start: function start() {
        cc.log("Rabbit Brown: Hello!!!");
        cc.log("Rabbit Brown: I'm Brownie!!!");
        this.node.runAction(cc.sequence(this.move(), cc.callFunc(this.checkCompleted, this)));
      }
    });
    cc._RF.pop();
  }, {} ],
  rbGray: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e34a/uVcxBBIX6EYHQUeV3", "rbGray");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _isCompleted: false,
        duration: 0,
        jumpHeightPixel: 0,
        jumpNumber: 0
      },
      get isCompleted() {
        return this._isCompleted;
      },
      set isCompleted(value) {
        return this._isCompleted = value;
      },
      checkCompleted: function checkCompleted() {
        return this.isCompleted = true;
      },
      jump: function jump() {
        return cc.jumpBy(this.duration, 0, 0, this.jumpHeightPixel, this.jumpNumber);
      },
      start: function start() {
        cc.log("Rabbit Gray: Hmmm!!!");
        this.node.runAction(cc.sequence(this.jump(), cc.callFunc(this.checkCompleted, this)));
      }
    });
    cc._RF.pop();
  }, {} ],
  rbWhite: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3f101AdQVH1IjpwgSE6rlW", "rbWhite");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _isCompleted: false,
        movePixelX: 0,
        duration: 0
      },
      get isCompleted() {
        return this._isCompleted;
      },
      set isCompleted(value) {
        return this._isCompleted = value;
      },
      move: function move() {
        return cc.moveBy(this.duration, this.movePixelX, 0);
      },
      checkCompleted: function checkCompleted() {
        return this.isCompleted = true;
      },
      start: function start() {
        cc.log("Rabbit White: Hello!");
        this.node.runAction(cc.sequence(this.move(), cc.callFunc(this.checkCompleted, this)));
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "Logic", "rbBlack", "rbBrown", "rbGray", "rbWhite" ]);