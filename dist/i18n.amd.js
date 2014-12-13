
define("lang/en", ["exports"], function(__exports__) {
  "use strict";

  function __es6_export__(name, value) {
    __exports__[name] = value;
  }

  __es6_export__("default", {
    // COMPONENTS
      // EPISODE-LIST-ITEM
      'components.episode_list_item.play': "Play",
      'components.episode_list_item.pause': "Pause",
      'components.episode_list_item.info': "Info",

      // SUBSCRIBE-BUTTON
      'components.subscribe_button.subscribe': 'Subscribe!',

    // SIDEBAR
    'sidebar.channel_add': 'Find Channels',
    'sidebar.donate': 'Make a donate',
    'sidebar.home': 'Home',
    'sidebar.settings': 'Settings',
    'sidebar.sign_out': 'Logout',

    // TITLES
    'titles.episodes': 'Episodes',

    // VIEWS
    'views.channel.mark_all_as_listened': "Mark All as Listened"
  });
});

//# sourceMappingURL=en.js.map

define(
  "i18n",
  ["lang/pt", "lang/en", "exports"],
  function(lang$pt$$, lang$en$$, __exports__) {
    "use strict";

    function __es6_export__(name, value) {
      __exports__[name] = value;
    }

    var PT;
    PT = lang$pt$$["default"];
    var EN;
    EN = lang$en$$["default"];

    var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }

    var I18n = (function() {
      I18n.prototype.languages = {
        "PT": PT,
        "EN": EN
      };

      I18n.prototype.defaultLanguage = "EN";

      function I18n() {
        this.t = __bind(this.t, this)
        this.checkAndSetCurrentLanguage();
      }

      I18n.prototype.checkAndSetCurrentLanguage = function () {
        this.currentLanguage = localStorage.getItem("lang");
        if(!this.currentLanguage || this.languages[this.currentLanguage] == null) {
          this.currentLanguage = this.defaultLanguage;
        }
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

    __es6_export__("default", new I18n);
  }
);

//# sourceMappingURL=i18n.js.map

define("lang/pt", ["exports"], function(__exports__) {
  "use strict";

  function __es6_export__(name, value) {
    __exports__[name] = value;
  }

  __es6_export__("default", {
    // COMPONENTS
      // EPISODE-LIST-ITEM
      'components.episode_list_item.play': "Tocar",
      'components.episode_list_item.pause': "Pausar",
      'components.episode_list_item.info': "Info",

      // SUBSCRIBE-BUTTON
      'components.subscribe_button.subscribe': 'Assinar!',

    // SIDEBAR
    'sidebar.channel_add': 'Buscar Canais',
    'sidebar.donate': 'Faça uma doação',
    'sidebar.home': 'Inicio',
    'sidebar.settings': 'Configurações',
    'sidebar.sign_out': 'Sair',

    // TITLES
    'titles.episodes': 'Episódios',

    // VIEWS
    'views.channel.mark_all_as_listened': "Marcar tudo como ouvido"
  });
});

//# sourceMappingURL=pt.js.map
