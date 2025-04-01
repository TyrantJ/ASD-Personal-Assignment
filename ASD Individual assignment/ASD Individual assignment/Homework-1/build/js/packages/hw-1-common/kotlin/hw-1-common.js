(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'hw-1-common'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'hw-1-common'.");
    }
    root['hw-1-common'] = factory(typeof this['hw-1-common'] === 'undefined' ? {} : this['hw-1-common'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.g;
  var contentEquals = kotlin_kotlin.$_$.b;
  var contentHashCode = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.f;
  var classMeta = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.e;
  //endregion
  //region block: pre-declaration
  //endregion
  function JsCard(id, words) {
    this.c2_1 = id;
    this.d2_1 = words;
  }
  JsCard.prototype.e2 = function () {
    return this.c2_1;
  };
  JsCard.prototype.f2 = function () {
    return this.d2_1;
  };
  JsCard.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsCard)
      other;
    else
      THROW_CCE();
    if (!(this.c2_1 === other.c2_1))
      return false;
    if (!contentEquals(this.d2_1, other.d2_1))
      return false;
    return true;
  };
  JsCard.prototype.hashCode = function () {
    var result = this.c2_1;
    result = imul(31, result) + contentHashCode(this.d2_1) | 0;
    return result;
  };
  JsCard.prototype.component1 = function () {
    return this.c2_1;
  };
  JsCard.prototype.component2 = function () {
    return this.d2_1;
  };
  JsCard.prototype.copy = function (id, words) {
    return this.g2(id === void 1 ? this.c2_1 : id, words === void 1 ? this.d2_1 : words);
  };
  JsCard.prototype.g2 = function (id, words) {
    return new JsCard(id, words);
  };
  JsCard.prototype.h2 = function (id, words, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.c2_1;
    if (!(($mask0 & 2) === 0))
      words = this.d2_1;
    return this.g2(id, words);
  };
  JsCard.prototype.toString = function () {
    return 'JsCard(id=' + this.c2_1 + ', words=' + toString(this.d2_1) + ')';
  };
  JsCard.$metadata$ = classMeta('JsCard');
  Object.defineProperty(JsCard.prototype, 'id', {
    configurable: true,
    get: JsCard.prototype.e2
  });
  Object.defineProperty(JsCard.prototype, 'words', {
    configurable: true,
    get: JsCard.prototype.f2
  });
  function JsTeam_init_$Init$(id, points, name, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      points = 0;
    JsTeam.call($this, id, points, name);
    return $this;
  }
  function JsTeam_init_$Create$(id, points, name, $mask0, $marker) {
    return JsTeam_init_$Init$(id, points, name, $mask0, $marker, Object.create(JsTeam.prototype));
  }
  function JsTeam(id, points, name) {
    var points_0 = points === void 1 ? 0 : points;
    this.i2_1 = id;
    this.j2_1 = points_0;
    this.k2_1 = name;
  }
  JsTeam.prototype.e2 = function () {
    return this.i2_1;
  };
  JsTeam.prototype.l2 = function (_set____db54di) {
    this.j2_1 = _set____db54di;
  };
  JsTeam.prototype.m2 = function () {
    return this.j2_1;
  };
  JsTeam.prototype.n2 = function () {
    return this.k2_1;
  };
  JsTeam.prototype.component1 = function () {
    return this.i2_1;
  };
  JsTeam.prototype.component2 = function () {
    return this.j2_1;
  };
  JsTeam.prototype.component3 = function () {
    return this.k2_1;
  };
  JsTeam.prototype.copy = function (id, points, name) {
    return this.o2(id === void 1 ? this.i2_1 : id, points === void 1 ? this.j2_1 : points, name === void 1 ? this.k2_1 : name);
  };
  JsTeam.prototype.o2 = function (id, points, name) {
    return new JsTeam(id, points, name);
  };
  JsTeam.prototype.p2 = function (id, points, name, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.i2_1;
    if (!(($mask0 & 2) === 0))
      points = this.j2_1;
    if (!(($mask0 & 4) === 0))
      name = this.k2_1;
    return this.o2(id, points, name);
  };
  JsTeam.prototype.toString = function () {
    return 'JsTeam(id=' + this.i2_1 + ', points=' + this.j2_1 + ', name=' + this.k2_1 + ')';
  };
  JsTeam.prototype.hashCode = function () {
    var result = this.i2_1;
    result = imul(result, 31) + this.j2_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.k2_1) | 0;
    return result;
  };
  JsTeam.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JsTeam))
      return false;
    var tmp0_other_with_cast = other instanceof JsTeam ? other : THROW_CCE();
    if (!(this.i2_1 === tmp0_other_with_cast.i2_1))
      return false;
    if (!(this.j2_1 === tmp0_other_with_cast.j2_1))
      return false;
    if (!(this.k2_1 === tmp0_other_with_cast.k2_1))
      return false;
    return true;
  };
  JsTeam.$metadata$ = classMeta('JsTeam');
  Object.defineProperty(JsTeam.prototype, 'id', {
    configurable: true,
    get: JsTeam.prototype.e2
  });
  Object.defineProperty(JsTeam.prototype, 'points', {
    configurable: true,
    get: JsTeam.prototype.m2,
    set: JsTeam.prototype.l2
  });
  Object.defineProperty(JsTeam.prototype, 'name', {
    configurable: true,
    get: JsTeam.prototype.n2
  });
  //region block: exports
  function $jsExportAll$(_) {
    var $alias = _.alias || (_.alias = {});
    $alias.JsCard = JsCard;
    var $alias = _.alias || (_.alias = {});
    $alias.JsTeam = JsTeam;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=hw-1-common.js.map