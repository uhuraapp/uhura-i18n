
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
      'components.subscribe_button.subscribed': 'Subscribed',

    // ERRORS
    'errors.login': "Login error, please try again!",

    // MESSAGES
    'messages.reload_settings': "Your settings changes, do you want reload page?",

    // SIDEBAR
    'sidebar.channels': 'Channels',
    'sidebar.donate': 'Make a donate',
    'sidebar.home': 'Home',
    'sidebar.settings': 'Settings',
    'sidebar.sign_in': 'Sign in',
    'sidebar.sign_out': 'Sign Out',

    // TITLES
    'titles.episodes': 'Episodes',
    'titles.suggestions': 'Suggestions',
    'titles.welcome': 'Welcome to Uhura',
    'titles.settings': 'Settings',
    'titles.categories': 'Categories',

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
      'components.subscribe_button.subscribed': 'Assinado',

    // ERRORS
      'errors.login': "Ocorreu um erro, por favor tente novamente!",

    // MESSAGES
      'messages.reload_settings': "Suas configurações mudaram, você deseja recarregar a pagina?",

    // SIDEBAR
    'sidebar.channels': 'Canais',
    'sidebar.donate': 'Faça uma doação',
    'sidebar.home': 'Inicio',
    'sidebar.settings': 'Configurações',
    'sidebar.sign_in': 'Entrar',
    'sidebar.sign_out': 'Sair',

    // TITLES
    'titles.episodes': 'Episódios',
    'titles.suggestions': 'Sugestões',
    'titles.welcome': 'Bem-vindo ao Uhura',
    'titles.settings': 'Configurações',
    'titles.categories': 'Categorias',

    // VIEWS
    'views.channel.mark_all_as_listened': "Marcar tudo como ouvido"
  });
});

//# sourceMappingURL=pt.js.map
