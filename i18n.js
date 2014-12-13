import PT from 'lang/pt';
import EN from 'lang/en';

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }

var I18n = (function() {
  function I18n() {
    this.languages = {
      "PT": PT,
      "EN": EN
    }
    this.currentLanguage = "PT";
    this.t = __bind(this.t, this)
  }

  I18n.prototype.getCurrentLanguage = function() {
    return this.languages[this.currentLanguage];
  }

  I18n.prototype.t = function(key) {
    var lang = this.getCurrentLanguage()
    if(!lang) return "Please create `" + this.currentLanguage +"` language";

    var t = lang[key];

    if (!t) return "Please translate `"+key+"` key to " + this.currentLanguage
    return t;
  };

  return I18n;

})();

export default new I18n
