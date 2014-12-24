import PT from 'lang/pt';
import EN from 'lang/en';

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }

var I18n = (function() {
  I18n.prototype.__languages__ = {
    "PT": PT,
    "EN": EN
  };

  I18n.prototype.languages = [
    {key: "PT", name: "Português"},
    {key: "EN", name: "English"}
  ]

  I18n.prototype.defaultLanguage = "EN";

  function I18n() {
    this.t = __bind(this.t, this)
    this.checkAndSetCurrentLanguage();
  }

  I18n.prototype.checkAndSetCurrentLanguage = function () {
    this.currentLanguage = localStorage.getItem("lang");
    if(!this.currentLanguage || this.__languages__[this.currentLanguage] == null) {
      this.currentLanguage = this.defaultLanguage;
    }
  }

  I18n.prototype.getCurrentLanguage = function() {
    return this.__languages__[this.currentLanguage];
  }

  I18n.prototype.t = function(key) {
    var lang = this.getCurrentLanguage()
    if(!lang) return "Please create `" + this.currentLanguage +"` language";

    var t = lang[key];

    if (!t) return "Please translate `"+key+"` key to " + this.currentLanguage
    return t;
  };

  I18n.prototype.setLang = function(key) {
    localStorage.setItem("lang", key);
    this.getCurrentLanguage();
  }

  return I18n;

})();

export default new I18n
