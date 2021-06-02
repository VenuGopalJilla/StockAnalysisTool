self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@material-ui/core/locale/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/core/locale/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.zhCN = exports.viVN = exports.ukUA = exports.trTR = exports.svSE = exports.skSK = exports.ruRU = exports.roRO = exports.ptPT = exports.ptBR = exports.plPL = exports.nlNL = exports.koKR = exports.jaJP = exports.itIT = exports.isIS = exports.idID = exports.hyAM = exports.huHU = exports.hiIN = exports.heIL = exports.frFR = exports.fiFI = exports.faIR = exports.etEE = exports.esES = exports.enUS = exports.deDE = exports.csCZ = exports.caES = exports.bgBG = exports.azAZ = void 0;
var azAZ = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Yolu göstər'
    },
    MuiTablePagination: {
      backIconButtonText: 'Əvvəlki səhifə',
      labelRowsPerPage: 'Səhifəyə düşən sətrlər:',
      labelDisplayedRows: function labelDisplayedRows(_ref) {
        var from = _ref.from,
            to = _ref.to,
            count = _ref.count;
        return "".concat(from, "-").concat(to, " d\u0259n ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Növbəti səhifə'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        var pluralForm = 'Ulduz';
        var lastDigit = value % 10;

        if (lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'Ulduzlar';
        }

        return "".concat(value, " ").concat(pluralForm);
      },
      emptyLabelText: 'Boş'
    },
    MuiAutocomplete: {
      clearText: 'Silmək',
      closeText: 'Bağlamaq',
      loadingText: 'Yüklənir…',
      noOptionsText: 'Seçimlər mövcud deyil',
      openText: 'Открыть'
    },
    MuiAlert: {
      closeText: 'Bağlamaq'
    },
    MuiPagination: {
      'aria-label': 'Səhifənin naviqasiyası',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(page, " ").concat(selected ? 'səhifə' : 'səhifəyə keç');
        }

        if (type === 'first') {
          return 'Birinci səhifəyə keç';
        }

        if (type === 'last') {
          return 'Sonuncu səhifəyə keç';
        }

        if (type === 'next') {
          return 'Növbəti səhifəyə keç';
        }

        if (type === 'previous') {
          return 'Əvvəlki səhifəyə keç';
        }

        return undefined;
      }
    }
  }
};
exports.azAZ = azAZ;
var bgBG = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Показване на пътя'
    },
    MuiTablePagination: {
      backIconButtonText: 'Предишна страница',
      labelRowsPerPage: 'Редове на страница:',
      labelDisplayedRows: function labelDisplayedRows(_ref2) {
        var from = _ref2.from,
            to = _ref2.to,
            count = _ref2.count;
        return "".concat(from, "-").concat(to, " \u043E\u0442 ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Следваща страница'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " \u0417\u0432\u0435\u0437\u0434").concat(value !== 1 ? 'и' : 'а');
      },
      emptyLabelText: 'Изчисти'
    },
    MuiAutocomplete: {
      clearText: 'Изчисти',
      closeText: 'Затвори',
      loadingText: 'Зареждане…',
      noOptionsText: 'Няма налични опции',
      openText: 'Отвори'
    },
    MuiAlert: {
      closeText: 'Затвори'
    },
    MuiPagination: {
      'aria-label': 'Пагинация',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(selected ? '' : 'Към ', "\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ").concat(page);
        }

        if (type === 'first') {
          return 'Отиди на първата страница';
        }

        if (type === 'last') {
          return 'Отиди на последната страница';
        }

        if (type === 'next') {
          return 'Отиди на следващата страница';
        }

        if (type === 'previous') {
          return 'Отиди на предишната страница';
        }

        return undefined;
      }
    }
  }
};
exports.bgBG = bgBG;
var caES = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      backIconButtonText: 'Pàgina anterior',
      labelRowsPerPage: 'Files per pàgina:',
      labelDisplayedRows: function labelDisplayedRows(_ref3) {
        var from = _ref3.from,
            to = _ref3.to,
            count = _ref3.count;
        return "".concat(from, "-").concat(to, " de ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Següent pàgina'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " ").concat(value !== 1 ? 'Estrelles' : 'Estrella');
      },
      emptyLabelText: 'Buit'
    },
    MuiAutocomplete: {
      clearText: 'Netejar',
      closeText: 'Tancar',
      loadingText: 'Carregant…',
      noOptionsText: 'Sense opcions',
      openText: 'Obert'
    },
    MuiAlert: {
      closeText: 'Tancat'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     if (type === 'previous') {
    //       return 'Go to previous page';
    //     }
    //     return undefined;
    //   },
    // },

  }
};
exports.caES = caES;
var csCZ = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Ukázat cestu'
    },
    MuiTablePagination: {
      backIconButtonText: 'Předchozí stránka',
      labelRowsPerPage: 'Řádků na stránce:',
      labelDisplayedRows: function labelDisplayedRows(_ref4) {
        var from = _ref4.from,
            to = _ref4.to,
            count = _ref4.count;
        return "".concat(from, "-").concat(to, " z ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Další stránka'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        if (value === 1) {
          return "".concat(value, " hv\u011Bzdi\u010Dka");
        }

        if (value >= 2 && value <= 4) {
          return "".concat(value, " hv\u011Bzdi\u010Dky");
        }

        return "".concat(value, " hv\u011Bzdi\u010Dek");
      },
      emptyLabelText: 'Prázdné'
    },
    MuiAutocomplete: {
      clearText: 'Vymazat',
      closeText: 'Zavřít',
      loadingText: 'Načítání…',
      noOptionsText: 'Žádné možnosti',
      openText: 'Otevřít'
    },
    MuiAlert: {
      closeText: 'Zavřít'
    },
    MuiPagination: {
      'aria-label': 'Navigace stránkováním',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(selected ? '' : 'Jít na ').concat(page, " str\xE1nku");
        }

        if (type === 'first') {
          return 'Jít na první stránku';
        }

        if (type === 'last') {
          return 'Jít na poslední stránku';
        }

        if (type === 'next') {
          return 'Jít na další stránku';
        }

        if (type === 'previous') {
          return 'Jít na předchozí stránku';
        }

        return undefined;
      }
    }
  }
};
exports.csCZ = csCZ;
var deDE = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Pfad anzeigen'
    },
    MuiTablePagination: {
      backIconButtonText: 'Nächste Seite',
      labelRowsPerPage: 'Zeilen pro Seite:',
      labelDisplayedRows: function labelDisplayedRows(_ref5) {
        var from = _ref5.from,
            to = _ref5.to,
            count = _ref5.count;
        return "".concat(from, "-").concat(to, " von ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Nächste Seite'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " ").concat(value !== 1 ? 'Sterne' : 'Stern');
      },
      emptyLabelText: 'Keine Wertung'
    },
    MuiAutocomplete: {
      clearText: 'Leeren',
      closeText: 'Schließen',
      loadingText: 'Wird geladen…',
      noOptionsText: 'Keine Optionen',
      openText: 'Öffnen'
    },
    MuiAlert: {
      closeText: 'Schließen'
    },
    MuiPagination: {
      'aria-label': 'Navigation via Seitennummerierung',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(selected ? '' : 'Gehe zu ', "Seite ").concat(page);
        }

        if (type === 'first') {
          return 'Zur ersten Seite';
        }

        if (type === 'last') {
          return 'Zur letzten Seite';
        }

        if (type === 'next') {
          return 'Zur nächsten Seite';
        }

        if (type === 'previous') {
          return 'Zur vorherigen Seite';
        }

        return undefined;
      }
    }
  }
}; // default

exports.deDE = deDE;
var enUS = {
  /*
  props: {
    MuiBreadcrumbs: {
      expandText: 'Show path',
    },
    MuiTablePagination: {
      backIconButtonText: 'Previous page',
      labelRowsPerPage: 'Rows per page:',
      labelDisplayedRows: ({ from, to, count }) =>
  `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`,
      nextIconButtonText: 'Next page',
    },
    MuiRating: {
      getLabelText: value => `${value} Star${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Empty',
    },
    MuiAutocomplete: {
      clearText: 'Clear',
      closeText: 'Close',
      loadingText: 'Loading…',
      noOptionsText: 'No options',
      openText: 'Open',
    },
    MuiAlert: {
      closeText: 'Close',
    },
    MuiPagination: {
      'aria-label': 'Pagination navigation',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Go to '}page ${page}`;
        }
        if (type === 'first') {
          return 'Go to first page';
        }
        if (type === 'last') {
          return 'Go to last page';
        }
        if (type === 'next') {
          return 'Go to next page';
        }
        if (type === 'previous') {
          return 'Go to previous page';
        }
        return undefined;
      },
    },
  },
  */
};
exports.enUS = enUS;
var esES = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Mostrar ruta'
    },
    MuiTablePagination: {
      backIconButtonText: 'Página anterior',
      labelRowsPerPage: 'Filas por página:',
      labelDisplayedRows: function labelDisplayedRows(_ref6) {
        var from = _ref6.from,
            to = _ref6.to,
            count = _ref6.count;
        return "".concat(from, "-").concat(to, " de ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Siguiente página'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Estrella").concat(value !== 1 ? 's' : '');
      },
      emptyLabelText: 'Vacío'
    },
    MuiAutocomplete: {
      clearText: 'Limpiar',
      closeText: 'Cerrar',
      loadingText: 'Cargando…',
      noOptionsText: 'Sin opciones',
      openText: 'Abierto'
    },
    MuiAlert: {
      closeText: 'Cerrar'
    },
    MuiPagination: {
      'aria-label': 'Paginador',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(selected ? '' : 'Ir a la ', "p\xE1gina ").concat(page);
        }

        if (type === 'first') {
          return 'Ir a la primera página';
        }

        if (type === 'last') {
          return 'Ir a la última página';
        }

        if (type === 'next') {
          return 'Ir a la página siguiente';
        }

        if (type === 'previous') {
          return 'Ir a la página anterior';
        }

        return undefined;
      }
    }
  }
};
exports.esES = esES;
var etEE = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Näita teed'
    },
    MuiTablePagination: {
      backIconButtonText: 'Eelmine lehekülg',
      labelRowsPerPage: 'Ridu leheküljel:',
      labelDisplayedRows: function labelDisplayedRows(_ref7) {
        var from = _ref7.from,
            to = _ref7.to,
            count = _ref7.count;
        return "".concat(from, "-").concat(to, " / ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Järgmine lehekülg'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " T\xE4rn").concat(value !== 1 ? 'i' : '');
      },
      emptyLabelText: 'Tühi'
    },
    MuiAutocomplete: {
      clearText: 'Tühjenda',
      closeText: 'Sulge',
      loadingText: 'Laen…',
      noOptionsText: 'Valikuid ei ole',
      openText: 'Ava'
    },
    MuiAlert: {
      closeText: 'Sulge'
    },
    MuiPagination: {
      'aria-label': 'Lehekülgede valik',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(selected ? '' : 'Vali ', "lehek\xFClg ").concat(page);
        }

        if (type === 'first') {
          return 'Vali esimene lehekülg';
        }

        if (type === 'last') {
          return 'Vali viimane lehekülg';
        }

        if (type === 'next') {
          return 'Vali järgmine lehekülg';
        }

        if (type === 'previous') {
          return 'Vali eelmine lehekülg';
        }

        return undefined;
      }
    }
  }
};
exports.etEE = etEE;
var faIR = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiBreadcrumbs: {
      expandText: 'نمایش مسیر'
    },
    MuiTablePagination: {
      backIconButtonText: 'صفحهٔ قبل',
      labelRowsPerPage: 'تعداد سطرهای هر صفحه:',
      labelDisplayedRows: function labelDisplayedRows(_ref8) {
        var from = _ref8.from,
            to = _ref8.to,
            count = _ref8.count;
        return "".concat(from, "-").concat(to, " \u0627\u0632 ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'صفحهٔ بعد'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " \u0633\u062A\u0627\u0631\u0647");
      },
      emptyLabelText: 'خالی'
    },
    MuiAutocomplete: {
      clearText: 'پاک‌کردن',
      closeText: 'بستن',
      loadingText: 'در حال بارگذاری…',
      noOptionsText: 'بی‌نتیجه',
      openText: 'بازکردن'
    },
    MuiAlert: {
      closeText: 'بستن'
    },
    MuiPagination: {
      'aria-label': 'ناوبری صفحه',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(selected ? '' : 'رفتن به ', "\u0635\u0641\u062D\u0647\u0654 ").concat(page);
        }

        if (type === 'first') {
          return 'رفتن به اولین صفحه';
        }

        if (type === 'last') {
          return 'رفتن به آخرین صفحه';
        }

        if (type === 'next') {
          return 'رفتن به صفحه‌ی بعدی';
        }

        if (type === 'previous') {
          return 'رفتن به صفحه‌ی قبلی';
        }

        return undefined;
      }
    }
  }
};
exports.faIR = faIR;
var fiFI = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Näytä reitti'
    },
    MuiTablePagination: {
      backIconButtonText: 'Edellinen sivu',
      labelRowsPerPage: 'Rivejä per sivu:',
      labelDisplayedRows: function labelDisplayedRows(_ref9) {
        var from = _ref9.from,
            to = _ref9.to,
            count = _ref9.count;
        return "".concat(from, "-").concat(to, " / ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Seuraava sivu'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " T\xE4ht").concat(value !== 1 ? 'eä' : 'i');
      },
      emptyLabelText: 'Tyhjä'
    },
    MuiAutocomplete: {
      clearText: 'Tyhjennä',
      closeText: 'Sulje',
      loadingText: 'Ladataan…',
      noOptionsText: 'Ei valintoja',
      openText: 'Avaa'
    },
    MuiAlert: {
      closeText: 'Sulje'
    },
    MuiPagination: {
      'aria-label': 'Sivutus navigaatio',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(selected ? 'sivu' : 'Mene sivulle', " ").concat(page);
        }

        if (type === 'first') {
          return 'Mene ensimmäiselle sivulle';
        }

        if (type === 'last') {
          return 'Mene viimeiselle sivulle';
        }

        if (type === 'next') {
          return 'Mene seuraavalle sivulle';
        }

        if (type === 'previous') {
          return 'Mene edelliselle sivulle';
        }

        return undefined;
      }
    }
  }
};
exports.fiFI = fiFI;
var frFR = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Montrer le chemin'
    },
    MuiTablePagination: {
      backIconButtonText: 'Page précédente',
      labelRowsPerPage: 'Lignes par page :',
      labelDisplayedRows: function labelDisplayedRows(_ref10) {
        var from = _ref10.from,
            to = _ref10.to,
            count = _ref10.count;
        return "".concat(from, "-").concat(to, " sur ").concat(count !== -1 ? count : "plus que ".concat(to));
      },
      nextIconButtonText: 'Page suivante'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Etoile").concat(value !== 1 ? 's' : '');
      },
      emptyLabelText: 'Vide'
    },
    MuiAutocomplete: {
      clearText: 'Vider',
      closeText: 'Fermer',
      loadingText: 'Chargement…',
      noOptionsText: 'Pas de résultats',
      openText: 'Ouvrir'
    },
    MuiAlert: {
      closeText: 'Fermer'
    },
    MuiPagination: {
      'aria-label': 'navigation de pagination',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(selected ? '' : 'Aller à la ', "page ").concat(page);
        }

        if (type === 'first') {
          return 'Aller à la première page';
        }

        if (type === 'last') {
          return 'Aller à la dernière page';
        }

        if (type === 'next') {
          return 'Aller à la page suivante';
        }

        if (type === 'previous') {
          return 'Aller à la page précédente';
        }

        return undefined;
      }
    }
  }
};
exports.frFR = frFR;
var heIL = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      backIconButtonText: 'העמוד הקודם',
      labelRowsPerPage: 'שורות בעמוד:',
      labelDisplayedRows: function labelDisplayedRows(_ref11) {
        var from = _ref11.from,
            to = _ref11.to,
            count = _ref11.count;
        return "".concat(from, "-").concat(to, " \u05DE\u05EA\u05D5\u05DA ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'העמוד הבא'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " \u05DB\u05D5\u05DB\u05D1").concat(value !== 1 ? 'ים' : '');
      },
      emptyLabelText: 'ריק'
    },
    MuiAutocomplete: {
      clearText: 'נקה',
      closeText: 'סגור',
      loadingText: 'טוען…',
      noOptionsText: 'אין אופציות',
      openText: 'פתח'
    },
    MuiAlert: {
      closeText: 'סגור'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     if (type === 'previous') {
    //       return 'Go to previous page';
    //     }
    //     return undefined;
    //   },
    // },

  }
};
exports.heIL = heIL;
var hiIN = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'रास्ता दिखायें'
    },
    MuiTablePagination: {
      backIconButtonText: 'पिछला पृष्ठ',
      labelRowsPerPage: 'पंक्तियाँ प्रति पृष्ठ:',
      labelDisplayedRows: function labelDisplayedRows(_ref12) {
        var from = _ref12.from,
            to = _ref12.to,
            count = _ref12.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " \u0915\u0941\u0932 ").concat(count, " \u092E\u0947\u0902");
      },
      nextIconButtonText: 'अगला पृष्ठ'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " \u0924\u093E\u0930").concat(value !== 1 ? 'े' : 'ा');
      },
      emptyLabelText: 'रिक्त'
    },
    MuiAutocomplete: {
      clearText: 'हटायें',
      closeText: 'बंद करें',
      loadingText: 'लोड हो रहा है…',
      noOptionsText: 'कोई विकल्प नहीं',
      openText: 'खोलें'
    },
    MuiAlert: {
      closeText: 'बंद करें'
    },
    MuiPagination: {
      'aria-label': 'पृस्ठानुसार संचालन',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "\u092A\u0943\u0937\u094D\u0920 ".concat(page, " ").concat(selected ? '' : ' पर जाएँ');
        }

        if (type === 'first') {
          return 'पहले पृष्ठ पर जाएँ';
        }

        if (type === 'last') {
          return 'अंतिम पृष्ठ पर जाएँ';
        }

        if (type === 'next') {
          return 'अगले पृष्ठ पर जाएँ';
        }

        if (type === 'previous') {
          return 'पिछले पृष्ठ पर जाएँ';
        }

        return undefined;
      }
    }
  }
};
exports.hiIN = hiIN;
var huHU = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Útvonal'
    },
    MuiTablePagination: {
      backIconButtonText: 'Előző oldal',
      labelRowsPerPage: 'Sorok száma:',
      labelDisplayedRows: function labelDisplayedRows(_ref13) {
        var from = _ref13.from,
            to = _ref13.to,
            count = _ref13.count;
        return "".concat(from, "-").concat(to, " / ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Következő oldal'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Csillag");
      },
      emptyLabelText: 'Üres'
    },
    MuiAutocomplete: {
      clearText: 'Törlés',
      closeText: 'Bezárás',
      loadingText: 'Töltés…',
      noOptionsText: 'Nincs találat',
      openText: 'Megnyitás'
    },
    MuiAlert: {
      closeText: 'Bezárás'
    },
    MuiPagination: {
      'aria-label': 'Lapozás',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(page, ". oldal").concat(selected ? '' : 'ra');
        }

        if (type === 'first') {
          return 'Első oldalra';
        }

        if (type === 'last') {
          return 'Utolsó oldalra';
        }

        if (type === 'next') {
          return 'Következő oldalra';
        }

        if (type === 'previous') {
          return 'Előző oldalra';
        }

        return undefined;
      }
    }
  }
};
exports.huHU = huHU;
var hyAM = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      backIconButtonText: 'Նախորդը',
      labelRowsPerPage: 'Տողեր մեկ էջում`',
      labelDisplayedRows: function labelDisplayedRows(_ref14) {
        var from = _ref14.from,
            to = _ref14.to,
            count = _ref14.count;
        return "".concat(from, "-").concat(to, " / ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Հաջորդը'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " \u0531\u057D\u057F\u0572");
      },
      emptyLabelText: 'Դատարկ'
    },
    MuiAutocomplete: {
      clearText: 'Մաքրել',
      closeText: 'Փակել',
      loadingText: 'Բեռնում…',
      noOptionsText: 'Տարբերակներ չկան',
      openText: 'Բացել'
    },
    MuiAlert: {
      closeText: 'Փակել'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     if (type === 'previous') {
    //       return 'Go to previous page';
    //     }
    //     return undefined;
    //   },
    // },

  }
};
exports.hyAM = hyAM;
var idID = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      backIconButtonText: 'Halaman sebelumnya',
      labelRowsPerPage: 'Baris per halaman:',
      labelDisplayedRows: function labelDisplayedRows(_ref15) {
        var from = _ref15.from,
            to = _ref15.to,
            count = _ref15.count;
        return "".concat(from, "-").concat(to, " dari ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Halaman selanjutnya'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Bintang");
      } // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: 'Hapus',
      closeText: 'Tutup',
      loadingText: 'Memuat…',
      noOptionsText: 'Tidak ada opsi',
      openText: 'Buka'
    },
    MuiAlert: {
      closeText: 'Tutup'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     if (type === 'previous') {
    //       return 'Go to previous page';
    //     }
    //     return undefined;
    //   },
    // },

  }
};
exports.idID = idID;
var isIS = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      backIconButtonText: 'Fyrri síða',
      labelRowsPerPage: 'Raðir á síðu:',
      labelDisplayedRows: function labelDisplayedRows(_ref16) {
        var from = _ref16.from,
            to = _ref16.to,
            count = _ref16.count;
        return "".concat(from, "-").concat(to, " af ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Næsta síða'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " ").concat(value === 1 ? 'Stjarna' : 'Stjörnur');
      },
      emptyLabelText: 'Tómt'
    },
    MuiAutocomplete: {
      clearText: 'Hreinsa',
      closeText: 'Loka',
      loadingText: 'Hlaða…',
      noOptionsText: 'Engar niðurstöður',
      openText: 'Opna'
    },
    MuiAlert: {
      closeText: 'Loka'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     if (type === 'previous') {
    //       return 'Go to previous page';
    //     }
    //     return undefined;
    //   },
    // },

  }
};
exports.isIS = isIS;
var itIT = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Visualizza percorso'
    },
    MuiTablePagination: {
      backIconButtonText: 'Pagina precedente',
      labelRowsPerPage: 'Righe per pagina:',
      labelDisplayedRows: function labelDisplayedRows(_ref17) {
        var from = _ref17.from,
            to = _ref17.to,
            count = _ref17.count;
        return "".concat(from, "-").concat(to, " di ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Pagina successiva'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Stell").concat(value !== 1 ? 'e' : 'a');
      },
      emptyLabelText: 'Vuoto'
    },
    MuiAutocomplete: {
      clearText: 'Svuota',
      closeText: 'Chiudi',
      loadingText: 'Caricamento in corso…',
      noOptionsText: 'Nessuna opzione',
      openText: 'Apri'
    },
    MuiAlert: {
      closeText: 'Chiudi'
    },
    MuiPagination: {
      'aria-label': 'Navigazione impaginata',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(selected ? '' : 'Vai alla ', "pagina ").concat(page);
        }

        if (type === 'first') {
          return 'Vai alla prima pagina';
        }

        if (type === 'last') {
          return "Vai all'ultima pagina";
        }

        if (type === 'next') {
          return 'Vai alla pagina successiva';
        }

        if (type === 'previous') {
          return 'Vai alla pagina precedente';
        }

        return undefined;
      }
    }
  }
};
exports.itIT = itIT;
var jaJP = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      backIconButtonText: '前のページ',
      labelRowsPerPage: 'ページごとの行:',
      labelDisplayedRows: function labelDisplayedRows(_ref18) {
        var from = _ref18.from,
            to = _ref18.to,
            count = _ref18.count;
        return "".concat(from, "-").concat(to, " of ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: '次のページ'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " ").concat(value !== 1 ? '出演者' : '星');
      } // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: 'クリア',
      closeText: '閉じる',
      loadingText: '積み込み…',
      noOptionsText: '結果がありません',
      openText: '開いた'
    },
    MuiAlert: {
      closeText: '閉じる'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     if (type === 'previous') {
    //       return 'Go to previous page';
    //     }
    //     return undefined;
    //   },
    // },

  }
};
exports.jaJP = jaJP;
var koKR = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      backIconButtonText: '이전 페이지',
      labelRowsPerPage: '페이지 당 행:',
      labelDisplayedRows: function labelDisplayedRows(_ref19) {
        var from = _ref19.from,
            to = _ref19.to,
            count = _ref19.count;
        return "".concat(from, "-").concat(to, " / ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: '다음 페이지'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " \uC810");
      } // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: '지우기',
      closeText: '닫기',
      loadingText: '불러오는 중…',
      noOptionsText: '옵션 없음',
      openText: '열기'
    }
  }
};
exports.koKR = koKR;
var nlNL = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      backIconButtonText: 'Vorige pagina',
      labelRowsPerPage: 'Regels per pagina :',
      labelDisplayedRows: function labelDisplayedRows(_ref20) {
        var from = _ref20.from,
            to = _ref20.to,
            count = _ref20.count;
        return "".concat(from, "-").concat(to, " van ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Volgende pagina'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Ster").concat(value !== 1 ? 'ren' : '');
      } // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: 'Wissen',
      closeText: 'Sluiten',
      loadingText: 'Laden…',
      noOptionsText: 'Geen opties',
      openText: 'Openen'
    },
    MuiAlert: {
      closeText: 'Sluiten'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     if (type === 'previous') {
    //       return 'Go to previous page';
    //     }
    //     return undefined;
    //   },
    // },

  }
};
exports.nlNL = nlNL;
var plPL = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Pokaż ścieżkę'
    },
    MuiTablePagination: {
      backIconButtonText: 'Poprzednia strona',
      labelRowsPerPage: 'Wierszy na stronę:',
      labelDisplayedRows: function labelDisplayedRows(_ref21) {
        var from = _ref21.from,
            to = _ref21.to,
            count = _ref21.count;
        return "".concat(from, "-").concat(to, " z ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Następna strona'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        var pluralForm = 'gwiazdek';
        var lastDigit = value % 10;

        if ((value < 10 || value > 20) && lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'gwiazdki';
        } else if (value === 1) {
          pluralForm = 'gwiazdka';
        }

        return "".concat(value, " ").concat(pluralForm);
      },
      emptyLabelText: 'Brak gwiazdek'
    },
    MuiAutocomplete: {
      clearText: 'Wyczyść',
      closeText: 'Zamknij',
      loadingText: 'Ładowanie…',
      noOptionsText: 'Brak opcji',
      openText: 'Otwórz'
    },
    MuiAlert: {
      closeText: 'Zamknij'
    },
    MuiPagination: {
      'aria-label': 'Nawigacja podziału na strony',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return selected ? "".concat(page, ". strona") : "Przejd\u017A do ".concat(page, ". strony");
        }

        if (type === 'first') {
          return 'Przejdź do pierwszej strony';
        }

        if (type === 'last') {
          return 'Przejdź do ostatniej strony';
        }

        if (type === 'next') {
          return 'Przejdź do następnej strony';
        }

        if (type === 'previous') {
          return 'Przejdź do poprzedniej strony';
        }

        return undefined;
      }
    }
  }
};
exports.plPL = plPL;
var ptBR = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Mostrar caminho'
    },
    MuiTablePagination: {
      backIconButtonText: 'Página anterior',
      labelRowsPerPage: 'Linhas por página:',
      labelDisplayedRows: function labelDisplayedRows(_ref22) {
        var from = _ref22.from,
            to = _ref22.to,
            count = _ref22.count;
        return "".concat(from, "-").concat(to, " de ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Próxima página'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Estrela").concat(value !== 1 ? 's' : '');
      },
      emptyLabelText: 'Vazio'
    },
    MuiAutocomplete: {
      clearText: 'Limpar',
      closeText: 'Fechar',
      loadingText: 'Carregando…',
      noOptionsText: 'Sem opções',
      openText: 'Abrir'
    },
    MuiAlert: {
      closeText: 'Fechar'
    },
    MuiPagination: {
      'aria-label': 'Navegar pela paginação',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(selected ? '' : 'Ir para a ', "p\xE1gina ").concat(page);
        }

        if (type === 'first') {
          return 'Ir para a primeira página';
        }

        if (type === 'last') {
          return 'Ir para a última página';
        }

        if (type === 'next') {
          return 'Ir para a próxima página';
        }

        if (type === 'previous') {
          return 'Ir para a página anterior';
        }

        return undefined;
      }
    }
  }
};
exports.ptBR = ptBR;
var ptPT = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Mostrar caminho'
    },
    MuiTablePagination: {
      backIconButtonText: 'Página anterior',
      labelRowsPerPage: 'Linhas por página:',
      labelDisplayedRows: function labelDisplayedRows(_ref23) {
        var from = _ref23.from,
            to = _ref23.to,
            count = _ref23.count;
        return "".concat(from, "-").concat(to, " de ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Próxima página'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Estrela").concat(value !== 1 ? 's' : '');
      },
      emptyLabelText: 'Vazio'
    },
    MuiAutocomplete: {
      clearText: 'Limpar',
      closeText: 'Fechar',
      loadingText: 'A carregar…',
      noOptionsText: 'Sem opções',
      openText: 'Abrir'
    },
    MuiAlert: {
      closeText: 'Fechar'
    },
    MuiPagination: {
      'aria-label': 'Navegar por páginas',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(selected ? '' : 'Ir para a ', "p\xE1gina ").concat(page);
        }

        if (type === 'first') {
          return 'Primeira página';
        }

        if (type === 'last') {
          return 'Última página';
        }

        if (type === 'next') {
          return 'Próxima página';
        }

        if (type === 'previous') {
          return 'Página anterior';
        }

        return undefined;
      }
    }
  }
};
exports.ptPT = ptPT;
var roRO = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Arată calea'
    },
    MuiTablePagination: {
      backIconButtonText: 'Pagina precedentă',
      labelRowsPerPage: 'Rânduri pe pagină:',
      labelDisplayedRows: function labelDisplayedRows(_ref24) {
        var from = _ref24.from,
            to = _ref24.to,
            count = _ref24.count;
        return "".concat(from, "-").concat(to, " din ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Pagina următoare'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " St").concat(value !== 1 ? 'ele' : 'ea');
      },
      emptyLabelText: 'Gol'
    },
    MuiAutocomplete: {
      clearText: 'Șterge',
      closeText: 'Închide',
      loadingText: 'Se încarcă…',
      noOptionsText: 'Nicio opțiune',
      openText: 'Deschide'
    },
    MuiAlert: {
      closeText: 'Închide'
    },
    MuiPagination: {
      'aria-label': 'Navigare prin paginare',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(selected ? '' : 'Mergi la ', "pagina ").concat(page);
        }

        if (type === 'first') {
          return 'Mergi la prima pagină';
        }

        if (type === 'last') {
          return 'Mergi la ultima pagină';
        }

        if (type === 'next') {
          return 'Mergi la pagina următoare';
        }

        if (type === 'previous') {
          return 'Mergi la pagina precedentă';
        }

        return undefined;
      }
    }
  }
};
exports.roRO = roRO;
var ruRU = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      backIconButtonText: 'Предыдущая страница',
      labelRowsPerPage: 'Строк на странице:',
      labelDisplayedRows: function labelDisplayedRows(_ref25) {
        var from = _ref25.from,
            to = _ref25.to,
            count = _ref25.count;
        return "".concat(from, "-").concat(to, " \u0438\u0437 ").concat(count !== -1 ? count : "\u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C ".concat(to));
      },
      nextIconButtonText: 'Следующая страница'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        var pluralForm = 'Звёзд';
        var lastDigit = value % 10;

        if (lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'Звезды';
        } else if (lastDigit === 1) {
          pluralForm = 'Звезда';
        }

        return "".concat(value, " ").concat(pluralForm);
      } // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: 'Очистить',
      closeText: 'Закрыть',
      loadingText: 'Загрузка…',
      noOptionsText: 'Нет доступных вариантов',
      openText: 'Открыть'
    },
    MuiAlert: {
      closeText: 'Закрыть'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     if (type === 'previous') {
    //       return 'Go to previous page';
    //     }
    //     return undefined;
    //   },
    // },

  }
};
exports.ruRU = ruRU;
var skSK = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      backIconButtonText: 'Predchádzajúca stránka',
      labelRowsPerPage: 'Riadkov na stránke:',
      labelDisplayedRows: function labelDisplayedRows(_ref26) {
        var from = _ref26.from,
            to = _ref26.to,
            count = _ref26.count;
        return "".concat(from, "-").concat(to, " z ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Ďalšia stránka'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        if (value === 1) {
          return "".concat(value, " hviezdi\u010Dka");
        }

        if (value >= 2 && value <= 4) {
          return "".concat(value, " hviezdi\u010Dky");
        }

        return "".concat(value, " hviezdi\u010Diek");
      } // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: 'Vymazať',
      closeText: 'Zavrieť',
      loadingText: 'Načítanie…',
      noOptionsText: 'Žiadne možnosti',
      openText: 'Otvoriť'
    },
    MuiAlert: {
      closeText: 'Zavrieť'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     if (type === 'previous') {
    //       return 'Go to previous page';
    //     }
    //     return undefined;
    //   },
    // },

  }
};
exports.skSK = skSK;
var svSE = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      backIconButtonText: 'Föregående sida',
      labelRowsPerPage: 'Rader per sida:',
      labelDisplayedRows: function labelDisplayedRows(_ref27) {
        var from = _ref27.from,
            to = _ref27.to,
            count = _ref27.count;
        return "".concat(from, "-").concat(to, " av ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Nästa sida'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " ").concat(value !== 1 ? 'Stjärnor' : 'Stjärna');
      } // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: 'Rensa',
      closeText: 'Stäng',
      loadingText: 'Laddar…',
      noOptionsText: 'Inga alternativ',
      openText: 'Öppen'
    },
    MuiAlert: {
      closeText: 'Stäng'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     if (type === 'previous') {
    //       return 'Go to previous page';
    //     }
    //     return undefined;
    //   },
    // },

  }
};
exports.svSE = svSE;
var trTR = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Yolu göster'
    },
    MuiTablePagination: {
      backIconButtonText: 'Önceki sayfa',
      labelRowsPerPage: 'Sayfa başına satır:',
      labelDisplayedRows: function labelDisplayedRows(_ref28) {
        var from = _ref28.from,
            to = _ref28.to,
            count = _ref28.count;
        return "".concat(from, "-").concat(to, " tanesinden ").concat(count !== -1 ? count : "more than ".concat(to));
      },
      nextIconButtonText: 'Sonraki sayfa'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Y\u0131ld\u0131z");
      },
      emptyLabelText: 'Boş'
    },
    MuiAutocomplete: {
      clearText: 'Temizle',
      closeText: 'Kapat',
      loadingText: 'Yükleniyor…',
      noOptionsText: 'Seçenek yok',
      openText: 'Aç'
    },
    MuiAlert: {
      closeText: 'Kapat'
    },
    MuiPagination: {
      'aria-label': 'Sayfa navigasyonu',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(page, ". ").concat(selected ? 'sayfa' : 'sayfaya git');
        }

        if (type === 'first') {
          return 'İlk sayfaya git';
        }

        if (type === 'last') {
          return 'Son sayfaya git';
        }

        if (type === 'next') {
          return 'Sonraki sayfaya git';
        }

        if (type === 'previous') {
          return 'Önceki sayfaya git';
        }

        return undefined;
      }
    }
  }
};
exports.trTR = trTR;
var ukUA = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'Показати шлях сторінок'
    },
    MuiTablePagination: {
      backIconButtonText: 'Попередня сторінка',
      labelRowsPerPage: 'Рядків на сторінці:',
      labelDisplayedRows: function labelDisplayedRows(_ref29) {
        var from = _ref29.from,
            to = _ref29.to,
            count = _ref29.count;
        return "".concat(from, "-").concat(to, " \u0437 ").concat(count !== -1 ? count : "\u043F\u043E\u043D\u0430\u0434 ".concat(to));
      },
      nextIconButtonText: 'Наступна сторінка'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        var pluralForm = 'Зірок';
        var lastDigit = value % 10;

        if (lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'Зірки';
        } else if (lastDigit === 1) {
          pluralForm = 'Зірка';
        }

        return "".concat(value, " ").concat(pluralForm);
      },
      emptyLabelText: 'Рейтинг відсутній'
    },
    MuiAutocomplete: {
      clearText: 'Очистити',
      closeText: 'Згорнути',
      loadingText: 'Завантаження…',
      noOptionsText: 'Немає варіантів',
      openText: 'Розгорнути'
    },
    MuiAlert: {
      closeText: 'Згорнути'
    },
    MuiPagination: {
      'aria-label': 'Навігація сторінками',
      getItemAriaLabel: function getItemAriaLabel(type, page, selected) {
        if (type === 'page') {
          return "".concat(selected ? '' : 'Перейти на ', "\u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443 ").concat(page);
        }

        if (type === 'first') {
          return 'Перейти на першу сторінку';
        }

        if (type === 'last') {
          return 'Перейти на останню сторінку';
        }

        if (type === 'next') {
          return 'Перейти на наступну сторінку';
        }

        if (type === 'previous') {
          return 'Перейти на попередню сторінку';
        }

        return undefined;
      }
    }
  }
};
exports.ukUA = ukUA;
var viVN = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      backIconButtonText: 'Trang trước',
      labelRowsPerPage: 'Số hàng mỗi trang:',
      labelDisplayedRows: function labelDisplayedRows(_ref30) {
        var from = _ref30.from,
            to = _ref30.to,
            count = _ref30.count;
        return "".concat(from, "-").concat(to, " trong ").concat(count !== -1 ? count : "nhi\u1EC1u h\u01A1n ".concat(to));
      },
      nextIconButtonText: 'Trang sau'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " sao");
      },
      emptyLabelText: 'Trống'
    },
    MuiAutocomplete: {
      clearText: 'Xóa',
      closeText: 'Đóng',
      loadingText: 'Đang tải…',
      noOptionsText: 'Không có lựa chọn',
      openText: 'Mở'
    },
    MuiAlert: {
      closeText: 'Đóng'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     if (type === 'previous') {
    //       return 'Go to previous page';
    //     }
    //     return undefined;
    //   },
    // },

  }
};
exports.viVN = viVN;
var zhCN = {
  props: {
    // MuiBreadcrumbs: {
    //   expandText: 'Show path',
    // },
    MuiTablePagination: {
      backIconButtonText: '上一页',
      labelRowsPerPage: '每页行数:',
      labelDisplayedRows: function labelDisplayedRows(_ref31) {
        var from = _ref31.from,
            to = _ref31.to,
            count = _ref31.count;
        return "".concat(from, "-").concat(to, " \u7684 ").concat(count !== -1 ? count : "\u8D85\u8FC7 ".concat(to));
      },
      nextIconButtonText: '下一页'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " \u661F").concat(value !== 1 ? '星' : '');
      } // emptyLabelText: 'Empty',

    },
    MuiAutocomplete: {
      clearText: '明确',
      closeText: '关',
      loadingText: '载入中…',
      noOptionsText: '没有选择',
      openText: '打开'
    },
    MuiAlert: {
      closeText: '关'
    } // MuiPagination: {
    //   'aria-label': 'Pagination navigation',
    //   getItemAriaLabel: (type, page, selected) => {
    //     if (type === 'page') {
    //       return `${selected ? '' : 'Go to '}page ${page}`;
    //     }
    //     if (type === 'first') {
    //       return 'Go to first page';
    //     }
    //     if (type === 'last') {
    //       return 'Go to last page';
    //     }
    //     if (type === 'next') {
    //       return 'Go to next page';
    //     }
    //     if (type === 'previous') {
    //       return 'Go to previous page';
    //     }
    //     return undefined;
    //   },
    // },

  }
};
exports.zhCN = zhCN;

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/dist/index-esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/dist/index-esm.js ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_GRID_COL_TYPE_KEY": function() { return /* binding */ Jl; },
/* harmony export */   "DEFAULT_GRID_OPTIONS": function() { return /* binding */ Fo; },
/* harmony export */   "DEFAULT_GRID_SLOTS_COMPONENTS": function() { return /* binding */ gc; },
/* harmony export */   "DEFAULT_GRID_SLOTS_ICONS": function() { return /* binding */ fc; },
/* harmony export */   "DataGrid": function() { return /* binding */ $c; },
/* harmony export */   "GRID_BOOLEAN_COLUMN_TYPE": function() { return /* binding */ si; },
/* harmony export */   "GRID_CELL_BLUR": function() { return /* binding */ Me; },
/* harmony export */   "GRID_CELL_CLICK": function() { return /* binding */ Ce; },
/* harmony export */   "GRID_CELL_CSS_CLASS": function() { return /* binding */ ee; },
/* harmony export */   "GRID_CELL_DOUBLE_CLICK": function() { return /* binding */ ve; },
/* harmony export */   "GRID_CELL_DRAG_END": function() { return /* binding */ Ae; },
/* harmony export */   "GRID_CELL_DRAG_ENTER": function() { return /* binding */ ze; },
/* harmony export */   "GRID_CELL_DRAG_OVER": function() { return /* binding */ Te; },
/* harmony export */   "GRID_CELL_DRAG_START": function() { return /* binding */ je; },
/* harmony export */   "GRID_CELL_EDIT_COMMIT_KEYS": function() { return /* binding */ al; },
/* harmony export */   "GRID_CELL_EDIT_ENTER": function() { return /* binding */ Pe; },
/* harmony export */   "GRID_CELL_EDIT_EXIT": function() { return /* binding */ Re; },
/* harmony export */   "GRID_CELL_EDIT_PROPS_CHANGE": function() { return /* binding */ Ie; },
/* harmony export */   "GRID_CELL_EDIT_PROPS_CHANGE_COMMITTED": function() { return /* binding */ ke; },
/* harmony export */   "GRID_CELL_ENTER": function() { return /* binding */ Ee; },
/* harmony export */   "GRID_CELL_EXIT_EDIT_MODE_KEYS": function() { return /* binding */ ol; },
/* harmony export */   "GRID_CELL_FOCUS": function() { return /* binding */ Le; },
/* harmony export */   "GRID_CELL_KEYDOWN": function() { return /* binding */ xe; },
/* harmony export */   "GRID_CELL_LEAVE": function() { return /* binding */ Se; },
/* harmony export */   "GRID_CELL_MODE_CHANGE": function() { return /* binding */ he; },
/* harmony export */   "GRID_CELL_MOUSE_DOWN": function() { return /* binding */ we; },
/* harmony export */   "GRID_CELL_NAVIGATION_KEYDOWN": function() { return /* binding */ Fe; },
/* harmony export */   "GRID_CELL_OUT": function() { return /* binding */ ye; },
/* harmony export */   "GRID_CELL_OVER": function() { return /* binding */ Oe; },
/* harmony export */   "GRID_CELL_VALUE_CHANGE": function() { return /* binding */ De; },
/* harmony export */   "GRID_COLUMNS_UPDATED": function() { return /* binding */ wt; },
/* harmony export */   "GRID_COLUMN_HEADER_BLUR": function() { return /* binding */ Ue; },
/* harmony export */   "GRID_COLUMN_HEADER_CLICK": function() { return /* binding */ qe; },
/* harmony export */   "GRID_COLUMN_HEADER_DOUBLE_CLICK": function() { return /* binding */ Ye; },
/* harmony export */   "GRID_COLUMN_HEADER_DRAG_END": function() { return /* binding */ ot; },
/* harmony export */   "GRID_COLUMN_HEADER_DRAG_ENTER": function() { return /* binding */ lt; },
/* harmony export */   "GRID_COLUMN_HEADER_DRAG_OVER": function() { return /* binding */ nt; },
/* harmony export */   "GRID_COLUMN_HEADER_DRAG_START": function() { return /* binding */ rt; },
/* harmony export */   "GRID_COLUMN_HEADER_ENTER": function() { return /* binding */ et; },
/* harmony export */   "GRID_COLUMN_HEADER_FOCUS": function() { return /* binding */ Ke; },
/* harmony export */   "GRID_COLUMN_HEADER_KEYDOWN": function() { return /* binding */ Xe; },
/* harmony export */   "GRID_COLUMN_HEADER_LEAVE": function() { return /* binding */ tt; },
/* harmony export */   "GRID_COLUMN_HEADER_NAVIGATION_KEYDOWN": function() { return /* binding */ Ze; },
/* harmony export */   "GRID_COLUMN_HEADER_OUT": function() { return /* binding */ Qe; },
/* harmony export */   "GRID_COLUMN_HEADER_OVER": function() { return /* binding */ Je; },
/* harmony export */   "GRID_COLUMN_ORDER_CHANGE": function() { return /* binding */ bt; },
/* harmony export */   "GRID_COLUMN_RESIZE": function() { return /* binding */ pt; },
/* harmony export */   "GRID_COLUMN_RESIZE_COMMITED": function() { return /* binding */ mt; },
/* harmony export */   "GRID_COLUMN_RESIZE_START": function() { return /* binding */ ft; },
/* harmony export */   "GRID_COLUMN_RESIZE_STOP": function() { return /* binding */ gt; },
/* harmony export */   "GRID_COLUMN_SEPARATOR_MOUSE_DOWN": function() { return /* binding */ dt; },
/* harmony export */   "GRID_COMPONENT_ERROR": function() { return /* binding */ fe; },
/* harmony export */   "GRID_DATA_CONTAINER_CSS_CLASS": function() { return /* binding */ oe; },
/* harmony export */   "GRID_DATETIME_COLUMN_TYPE": function() { return /* binding */ ii; },
/* harmony export */   "GRID_DATETIME_COL_DEF": function() { return /* binding */ Kl; },
/* harmony export */   "GRID_DATE_COLUMN_TYPE": function() { return /* binding */ ai; },
/* harmony export */   "GRID_DATE_COL_DEF": function() { return /* binding */ Ul; },
/* harmony export */   "GRID_DEFAULT_LOCALE_TEXT": function() { return /* binding */ Do; },
/* harmony export */   "GRID_DRAGEND": function() { return /* binding */ me; },
/* harmony export */   "GRID_ELEMENT_FOCUS_OUT": function() { return /* binding */ be; },
/* harmony export */   "GRID_EXPERIMENTAL_ENABLED": function() { return /* binding */ Rs; },
/* harmony export */   "GRID_FILTER_MODEL_CHANGE": function() { return /* binding */ yt; },
/* harmony export */   "GRID_FOCUS_OUT": function() { return /* binding */ ce; },
/* harmony export */   "GRID_HEADER_CELL_CSS_CLASS": function() { return /* binding */ re; },
/* harmony export */   "GRID_HEADER_CELL_DRAGGING_CSS_CLASS": function() { return /* binding */ ie; },
/* harmony export */   "GRID_HEADER_CELL_DROP_ZONE_CSS_CLASS": function() { return /* binding */ ae; },
/* harmony export */   "GRID_HEADER_CELL_SEPARATOR_RESIZABLE_CSS_CLASS": function() { return /* binding */ ne; },
/* harmony export */   "GRID_HEADER_CELL_TITLE_CSS_CLASS": function() { return /* binding */ le; },
/* harmony export */   "GRID_INITIAL_PAGINATION_STATE": function() { return /* binding */ Uo; },
/* harmony export */   "GRID_KEYDOWN": function() { return /* binding */ ue; },
/* harmony export */   "GRID_KEYUP": function() { return /* binding */ de; },
/* harmony export */   "GRID_MULTIPLE_SELECTION_KEYS": function() { return /* binding */ ll; },
/* harmony export */   "GRID_NATIVE_SCROLL": function() { return /* binding */ pe; },
/* harmony export */   "GRID_NUMBER_COLUMN_TYPE": function() { return /* binding */ oi; },
/* harmony export */   "GRID_NUMERIC_COL_DEF": function() { return /* binding */ Vl; },
/* harmony export */   "GRID_PAGESIZE_CHANGED": function() { return /* binding */ st; },
/* harmony export */   "GRID_PAGE_CHANGED": function() { return /* binding */ it; },
/* harmony export */   "GRID_RESIZE": function() { return /* binding */ se; },
/* harmony export */   "GRID_ROWS_CLEARED": function() { return /* binding */ vt; },
/* harmony export */   "GRID_ROWS_SCROLL": function() { return /* binding */ ct; },
/* harmony export */   "GRID_ROWS_SCROLL_END": function() { return /* binding */ ut; },
/* harmony export */   "GRID_ROWS_SET": function() { return /* binding */ Ct; },
/* harmony export */   "GRID_ROWS_UPDATED": function() { return /* binding */ ht; },
/* harmony export */   "GRID_ROW_CLICK": function() { return /* binding */ _e; },
/* harmony export */   "GRID_ROW_CSS_CLASS": function() { return /* binding */ te; },
/* harmony export */   "GRID_ROW_DOUBLE_CLICK": function() { return /* binding */ Ge; },
/* harmony export */   "GRID_ROW_EDIT_MODEL_CHANGE": function() { return /* binding */ $e; },
/* harmony export */   "GRID_ROW_ENTER": function() { return /* binding */ Ve; },
/* harmony export */   "GRID_ROW_LEAVE": function() { return /* binding */ Be; },
/* harmony export */   "GRID_ROW_OUT": function() { return /* binding */ Ne; },
/* harmony export */   "GRID_ROW_OVER": function() { return /* binding */ He; },
/* harmony export */   "GRID_ROW_SELECTED": function() { return /* binding */ We; },
/* harmony export */   "GRID_SELECTION_CHANGED": function() { return /* binding */ at; },
/* harmony export */   "GRID_SORT_MODEL_CHANGE": function() { return /* binding */ Ot; },
/* harmony export */   "GRID_STATE_CHANGE": function() { return /* binding */ Et; },
/* harmony export */   "GRID_STRING_COLUMN_TYPE": function() { return /* binding */ li; },
/* harmony export */   "GRID_STRING_COL_DEF": function() { return /* binding */ Hl; },
/* harmony export */   "GRID_UNMOUNT": function() { return /* binding */ ge; },
/* harmony export */   "GridAddIcon": function() { return /* binding */ Fl; },
/* harmony export */   "GridApiContext": function() { return /* binding */ co; },
/* harmony export */   "GridArrowDownwardIcon": function() { return /* binding */ vl; },
/* harmony export */   "GridArrowUpwardIcon": function() { return /* binding */ Cl; },
/* harmony export */   "GridAutoSizer": function() { return /* binding */ fs; },
/* harmony export */   "GridCell": function() { return /* binding */ uo; },
/* harmony export */   "GridCellCheckboxRenderer": function() { return /* binding */ Fa; },
/* harmony export */   "GridCheckCircleIcon": function() { return /* binding */ Sl; },
/* harmony export */   "GridCheckIcon": function() { return /* binding */ Tl; },
/* harmony export */   "GridCloseIcon": function() { return /* binding */ Rl; },
/* harmony export */   "GridColumnHeaderItem": function() { return /* binding */ wi; },
/* harmony export */   "GridColumnHeaderMenu": function() { return /* binding */ Hi; },
/* harmony export */   "GridColumnHeaderSeparator": function() { return /* binding */ mi; },
/* harmony export */   "GridColumnHeaderSortIcon": function() { return /* binding */ ui; },
/* harmony export */   "GridColumnHeaderTitle": function() { return /* binding */ pi; },
/* harmony export */   "GridColumnHeadersItemCollection": function() { return /* binding */ Ri; },
/* harmony export */   "GridColumnIcon": function() { return /* binding */ xl; },
/* harmony export */   "GridColumnMenu": function() { return /* binding */ Bi; },
/* harmony export */   "GridColumnsContainer": function() { return /* binding */ fa; },
/* harmony export */   "GridColumnsHeader": function() { return /* binding */ Li; },
/* harmony export */   "GridColumnsMenuItem": function() { return /* binding */ ji; },
/* harmony export */   "GridColumnsPanel": function() { return /* binding */ es; },
/* harmony export */   "GridColumnsToolbarButton": function() { return /* binding */ is; },
/* harmony export */   "GridComponent": function() { return /* binding */ Nc; },
/* harmony export */   "GridDataContainer": function() { return /* binding */ wa; },
/* harmony export */   "GridDensitySelector": function() { return /* binding */ ss; },
/* harmony export */   "GridDensityTypes": function() { return /* binding */ Po; },
/* harmony export */   "GridDragIcon": function() { return /* binding */ jl; },
/* harmony export */   "GridEditInputCell": function() { return /* binding */ bl; },
/* harmony export */   "GridEmptyCell": function() { return /* binding */ po; },
/* harmony export */   "GridFeatureModeConstant": function() { return /* binding */ Ro; },
/* harmony export */   "GridFilterAltIcon": function() { return /* binding */ Ol; },
/* harmony export */   "GridFilterForm": function() { return /* binding */ os; },
/* harmony export */   "GridFilterInputValue": function() { return /* binding */ _l; },
/* harmony export */   "GridFilterListIcon": function() { return /* binding */ wl; },
/* harmony export */   "GridFilterMenuItem": function() { return /* binding */ zi; },
/* harmony export */   "GridFilterPanel": function() { return /* binding */ as; },
/* harmony export */   "GridFilterToolbarButton": function() { return /* binding */ us; },
/* harmony export */   "GridFooter": function() { return /* binding */ Cs; },
/* harmony export */   "GridFooterContainer": function() { return /* binding */ Oa; },
/* harmony export */   "GridHeader": function() { return /* binding */ vs; },
/* harmony export */   "GridHeaderCheckbox": function() { return /* binding */ ti; },
/* harmony export */   "GridLinkOperator": function() { return /* binding */ zo; },
/* harmony export */   "GridLoadIcon": function() { return /* binding */ Ll; },
/* harmony export */   "GridLoadingOverlay": function() { return /* binding */ ws; },
/* harmony export */   "GridMenu": function() { return /* binding */ _i; },
/* harmony export */   "GridMenuIcon": function() { return /* binding */ El; },
/* harmony export */   "GridNoRowsOverlay": function() { return /* binding */ Os; },
/* harmony export */   "GridOverlay": function() { return /* binding */ ya; },
/* harmony export */   "GridPagination": function() { return /* binding */ Es; },
/* harmony export */   "GridPanel": function() { return /* binding */ rs; },
/* harmony export */   "GridPanelContent": function() { return /* binding */ Wi; },
/* harmony export */   "GridPanelFooter": function() { return /* binding */ Ki; },
/* harmony export */   "GridPanelHeader": function() { return /* binding */ Xi; },
/* harmony export */   "GridPanelWrapper": function() { return /* binding */ Ji; },
/* harmony export */   "GridPreferencePanelsValue": function() { return /* binding */ Ci; },
/* harmony export */   "GridPreferencesPanel": function() { return /* binding */ ns; },
/* harmony export */   "GridRenderingZone": function() { return /* binding */ Ss; },
/* harmony export */   "GridRoot": function() { return /* binding */ ma; },
/* harmony export */   "GridRow": function() { return /* binding */ xs; },
/* harmony export */   "GridRowCells": function() { return /* binding */ ta; },
/* harmony export */   "GridRowCount": function() { return /* binding */ bs; },
/* harmony export */   "GridSaveAltIcon": function() { return /* binding */ zl; },
/* harmony export */   "GridScrollArea": function() { return /* binding */ Mi; },
/* harmony export */   "GridSearchIcon": function() { return /* binding */ yl; },
/* harmony export */   "GridSelectedRowCount": function() { return /* binding */ hs; },
/* harmony export */   "GridSeparatorIcon": function() { return /* binding */ Ml; },
/* harmony export */   "GridStickyContainer": function() { return /* binding */ Ms; },
/* harmony export */   "GridTableRowsIcon": function() { return /* binding */ kl; },
/* harmony export */   "GridToolbar": function() { return /* binding */ ps; },
/* harmony export */   "GridToolbarContainer": function() { return /* binding */ xa; },
/* harmony export */   "GridToolbarExport": function() { return /* binding */ ds; },
/* harmony export */   "GridTripleDotsVerticalIcon": function() { return /* binding */ Pl; },
/* harmony export */   "GridViewHeadlineIcon": function() { return /* binding */ Il; },
/* harmony export */   "GridViewStreamIcon": function() { return /* binding */ Dl; },
/* harmony export */   "GridViewport": function() { return /* binding */ Is; },
/* harmony export */   "GridWindow": function() { return /* binding */ Sa; },
/* harmony export */   "HideGridColMenuItem": function() { return /* binding */ Ni; },
/* harmony export */   "SUBMIT_FILTER_STROKE_TIME": function() { return /* binding */ Al; },
/* harmony export */   "SortGridMenuItems": function() { return /* binding */ Vi; },
/* harmony export */   "Watermark": function() { return /* binding */ Ds; },
/* harmony export */   "activeGridFilterItemsSelector": function() { return /* binding */ Xa; },
/* harmony export */   "allGridColumnsFieldsSelector": function() { return /* binding */ la; },
/* harmony export */   "allGridColumnsSelector": function() { return /* binding */ aa; },
/* harmony export */   "bgBG": function() { return /* binding */ wc; },
/* harmony export */   "checkGridRowIdIsValid": function() { return /* binding */ Xs; },
/* harmony export */   "classnames": function() { return /* binding */ Kn; },
/* harmony export */   "convertGridRowsPropToState": function() { return /* binding */ Ys; },
/* harmony export */   "deDE": function() { return /* binding */ Oc; },
/* harmony export */   "elGR": function() { return /* binding */ yc; },
/* harmony export */   "enUS": function() { return /* binding */ Ec; },
/* harmony export */   "esES": function() { return /* binding */ Sc; },
/* harmony export */   "exportAs": function() { return /* binding */ so; },
/* harmony export */   "filterGridColumnLookupSelector": function() { return /* binding */ Ya; },
/* harmony export */   "filterGridItemsCounterSelector": function() { return /* binding */ qa; },
/* harmony export */   "filterGridStateSelector": function() { return /* binding */ Za; },
/* harmony export */   "filterableGridColumnsIdsSelector": function() { return /* binding */ ua; },
/* harmony export */   "filterableGridColumnsSelector": function() { return /* binding */ ca; },
/* harmony export */   "findGridCellElementsFromCol": function() { return /* binding */ Hn; },
/* harmony export */   "findGridDataContainerFromCurrent": function() { return /* binding */ Vn; },
/* harmony export */   "findGridRootFromCurrent": function() { return /* binding */ Nn; },
/* harmony export */   "findHeaderElementFromField": function() { return /* binding */ Gn; },
/* harmony export */   "findParentElementFromClassName": function() { return /* binding */ Fn; },
/* harmony export */   "formatDateToLocalInputDate": function() { return /* binding */ fn; },
/* harmony export */   "frFR": function() { return /* binding */ xc; },
/* harmony export */   "getFieldFromHeaderElem": function() { return /* binding */ _n; },
/* harmony export */   "getGridCellElement": function() { return /* binding */ Un; },
/* harmony export */   "getGridCellElementFromIndexes": function() { return /* binding */ Bn; },
/* harmony export */   "getGridColDef": function() { return /* binding */ ni; },
/* harmony export */   "getGridColumnHeaderElement": function() { return /* binding */ $n; },
/* harmony export */   "getGridDateOperators": function() { return /* binding */ Bl; },
/* harmony export */   "getGridDefaultColumnTypes": function() { return /* binding */ Ql; },
/* harmony export */   "getGridLocalization": function() { return /* binding */ no; },
/* harmony export */   "getGridNumericColumnOperators": function() { return /* binding */ Nl; },
/* harmony export */   "getGridPageCount": function() { return /* binding */ Vo; },
/* harmony export */   "getGridRowElement": function() { return /* binding */ Wn; },
/* harmony export */   "getGridStringOperators": function() { return /* binding */ Gl; },
/* harmony export */   "getIdFromRowElem": function() { return /* binding */ An; },
/* harmony export */   "getInitialGridColumnReorderState": function() { return /* binding */ Lo; },
/* harmony export */   "getInitialGridColumnResizeState": function() { return /* binding */ jo; },
/* harmony export */   "getInitialGridColumnsState": function() { return /* binding */ ko; },
/* harmony export */   "getInitialGridFilterState": function() { return /* binding */ To; },
/* harmony export */   "getInitialGridRenderingState": function() { return /* binding */ qo; },
/* harmony export */   "getInitialGridRowState": function() { return /* binding */ Zo; },
/* harmony export */   "getInitialGridSortingState": function() { return /* binding */ Xo; },
/* harmony export */   "getInitialGridState": function() { return /* binding */ Yo; },
/* harmony export */   "getInitialVisibleGridRowsState": function() { return /* binding */ Ao; },
/* harmony export */   "getRowEl": function() { return /* binding */ Ln; },
/* harmony export */   "getScrollbarSize": function() { return /* binding */ io; },
/* harmony export */   "getThemePaletteMode": function() { return /* binding */ wn; },
/* harmony export */   "gridCheckboxSelectionColDef": function() { return /* binding */ ri; },
/* harmony export */   "gridColumnLookupSelector": function() { return /* binding */ oa; },
/* harmony export */   "gridColumnMenuStateSelector": function() { return /* binding */ fi; },
/* harmony export */   "gridColumnReorderDragColSelector": function() { return /* binding */ ki; },
/* harmony export */   "gridColumnReorderSelector": function() { return /* binding */ Ii; },
/* harmony export */   "gridColumnResizeSelector": function() { return /* binding */ Di; },
/* harmony export */   "gridColumnsMetaSelector": function() { return /* binding */ sa; },
/* harmony export */   "gridColumnsSelector": function() { return /* binding */ na; },
/* harmony export */   "gridColumnsTotalWidthSelector": function() { return /* binding */ pa; },
/* harmony export */   "gridDateComparer": function() { return /* binding */ Pn; },
/* harmony export */   "gridDateFormatter": function() { return /* binding */ $l; },
/* harmony export */   "gridDateTimeFormatter": function() { return /* binding */ Wl; },
/* harmony export */   "gridEditRowsStateSelector": function() { return /* binding */ mo; },
/* harmony export */   "gridFocusCellSelector": function() { return /* binding */ Ia; },
/* harmony export */   "gridFocusColumnHeaderSelector": function() { return /* binding */ ka; },
/* harmony export */   "gridFocusStateSelector": function() { return /* binding */ Ma; },
/* harmony export */   "gridKeyboardMultipleKeySelector": function() { return /* binding */ Vs; },
/* harmony export */   "gridKeyboardStateSelector": function() { return /* binding */ Ns; },
/* harmony export */   "gridNillComparer": function() { return /* binding */ In; },
/* harmony export */   "gridNumberComparer": function() { return /* binding */ Dn; },
/* harmony export */   "gridPaginationReducer": function() { return /* binding */ Ko; },
/* harmony export */   "gridPaginationSelector": function() { return /* binding */ gs; },
/* harmony export */   "gridPreferencePanelStateSelector": function() { return /* binding */ bi; },
/* harmony export */   "gridResizingColumnFieldSelector": function() { return /* binding */ Pi; },
/* harmony export */   "gridRowCountSelector": function() { return /* binding */ ja; },
/* harmony export */   "gridRowsLookupSelector": function() { return /* binding */ za; },
/* harmony export */   "gridRowsStateSelector": function() { return /* binding */ La; },
/* harmony export */   "gridScrollbarStateSelector": function() { return /* binding */ Fi; },
/* harmony export */   "gridSelectionStateSelector": function() { return /* binding */ Ja; },
/* harmony export */   "gridSortColumnLookupSelector": function() { return /* binding */ Va; },
/* harmony export */   "gridSortModelSelector": function() { return /* binding */ Na; },
/* harmony export */   "gridStringNumberComparer": function() { return /* binding */ kn; },
/* harmony export */   "gridTabIndexCellSelector": function() { return /* binding */ Pa; },
/* harmony export */   "gridTabIndexColumnHeaderSelector": function() { return /* binding */ Ra; },
/* harmony export */   "gridTabIndexStateSelector": function() { return /* binding */ Da; },
/* harmony export */   "gridViewportSizeStateSelector": function() { return /* binding */ hi; },
/* harmony export */   "isArray": function() { return /* binding */ gn; },
/* harmony export */   "isArrowKeys": function() { return /* binding */ Jn; },
/* harmony export */   "isCellEditCommitKeys": function() { return /* binding */ ul; },
/* harmony export */   "isCellEnterEditModeKeys": function() { return /* binding */ sl; },
/* harmony export */   "isCellExitEditModeKeys": function() { return /* binding */ cl; },
/* harmony export */   "isDate": function() { return /* binding */ mn; },
/* harmony export */   "isDeepEqual": function() { return /* binding */ pn; },
/* harmony export */   "isDeleteKeys": function() { return /* binding */ tl; },
/* harmony export */   "isDesc": function() { return /* binding */ Mn; },
/* harmony export */   "isEnterKey": function() { return /* binding */ Xn; },
/* harmony export */   "isEscapeKey": function() { return /* binding */ Zn; },
/* harmony export */   "isFunction": function() { return /* binding */ Cn; },
/* harmony export */   "isGridCellRoot": function() { return /* binding */ jn; },
/* harmony export */   "isGridHeaderCellRoot": function() { return /* binding */ zn; },
/* harmony export */   "isGridHeaderTitleContainer": function() { return /* binding */ Tn; },
/* harmony export */   "isHideMenuKey": function() { return /* binding */ ml; },
/* harmony export */   "isHomeOrEndKeys": function() { return /* binding */ Qn; },
/* harmony export */   "isKeyboardEvent": function() { return /* binding */ pl; },
/* harmony export */   "isMuiV5": function() { return /* binding */ On; },
/* harmony export */   "isMultipleKey": function() { return /* binding */ il; },
/* harmony export */   "isMultipleKeyPressed": function() { return /* binding */ fl; },
/* harmony export */   "isNavigationKey": function() { return /* binding */ dl; },
/* harmony export */   "isNumber": function() { return /* binding */ hn; },
/* harmony export */   "isObject": function() { return /* binding */ vn; },
/* harmony export */   "isOverflown": function() { return /* binding */ Rn; },
/* harmony export */   "isPageKeys": function() { return /* binding */ el; },
/* harmony export */   "isPrintableKey": function() { return /* binding */ nl; },
/* harmony export */   "isSpaceKey": function() { return /* binding */ Yn; },
/* harmony export */   "isString": function() { return /* binding */ bn; },
/* harmony export */   "isTabKey": function() { return /* binding */ qn; },
/* harmony export */   "itIT": function() { return /* binding */ Mc; },
/* harmony export */   "jaJP": function() { return /* binding */ Ic; },
/* harmony export */   "localStorageAvailable": function() { return /* binding */ En; },
/* harmony export */   "mapColDefTypeToInputType": function() { return /* binding */ Sn; },
/* harmony export */   "mergeGridColTypes": function() { return /* binding */ eo; },
/* harmony export */   "mergeGridOptions": function() { return /* binding */ ro; },
/* harmony export */   "muiStyleAlpha": function() { return /* binding */ yn; },
/* harmony export */   "nextGridSortDirection": function() { return /* binding */ xn; },
/* harmony export */   "nlNL": function() { return /* binding */ kc; },
/* harmony export */   "plPL": function() { return /* binding */ Pc; },
/* harmony export */   "plPLGrid": function() { return /* binding */ Dc; },
/* harmony export */   "ptBR": function() { return /* binding */ Rc; },
/* harmony export */   "removeUndefinedProps": function() { return /* binding */ to; },
/* harmony export */   "renderEditInputCell": function() { return /* binding */ hl; },
/* harmony export */   "ruRU": function() { return /* binding */ Lc; },
/* harmony export */   "ruRUGrid": function() { return /* binding */ Fc; },
/* harmony export */   "selectedGridRowsCountSelector": function() { return /* binding */ Qa; },
/* harmony export */   "selectedGridRowsSelector": function() { return /* binding */ ei; },
/* harmony export */   "setGridPageActionCreator": function() { return /* binding */ _o; },
/* harmony export */   "setGridPageSizeActionCreator": function() { return /* binding */ Go; },
/* harmony export */   "setGridPageSizeStateUpdate": function() { return /* binding */ $o; },
/* harmony export */   "setGridPageStateUpdate": function() { return /* binding */ Bo; },
/* harmony export */   "setGridPaginationModeActionCreator": function() { return /* binding */ Ho; },
/* harmony export */   "setGridRowCountActionCreator": function() { return /* binding */ No; },
/* harmony export */   "setGridRowCountStateUpdate": function() { return /* binding */ Wo; },
/* harmony export */   "sortedGridRowIdsSelector": function() { return /* binding */ Ga; },
/* harmony export */   "sortedGridRowsSelector": function() { return /* binding */ Ha; },
/* harmony export */   "ukUA": function() { return /* binding */ zc; },
/* harmony export */   "ukUAGrid": function() { return /* binding */ jc; },
/* harmony export */   "unorderedGridRowIdsSelector": function() { return /* binding */ Ta; },
/* harmony export */   "unorderedGridRowModelsSelector": function() { return /* binding */ Aa; },
/* harmony export */   "useApi": function() { return /* binding */ Cc; },
/* harmony export */   "useEnhancedEffect": function() { return /* binding */ oo; },
/* harmony export */   "useEventCallback": function() { return /* binding */ lo; },
/* harmony export */   "useGridApi": function() { return /* binding */ Jo; },
/* harmony export */   "useGridApiEventHandler": function() { return /* binding */ Ei; },
/* harmony export */   "useGridApiMethod": function() { return /* binding */ Io; },
/* harmony export */   "useGridApiOptionHandler": function() { return /* binding */ xi; },
/* harmony export */   "useGridApiRef": function() { return /* binding */ ic; },
/* harmony export */   "useGridColumnMenu": function() { return /* binding */ Fs; },
/* harmony export */   "useGridColumnReorder": function() { return /* binding */ js; },
/* harmony export */   "useGridColumnResize": function() { return /* binding */ dc; },
/* harmony export */   "useGridColumns": function() { return /* binding */ As; },
/* harmony export */   "useGridComponents": function() { return /* binding */ bc; },
/* harmony export */   "useGridContainerProps": function() { return /* binding */ vc; },
/* harmony export */   "useGridEditRows": function() { return /* binding */ Qs; },
/* harmony export */   "useGridFilter": function() { return /* binding */ Gs; },
/* harmony export */   "useGridFocus": function() { return /* binding */ Hs; },
/* harmony export */   "useGridKeyboard": function() { return /* binding */ Bs; },
/* harmony export */   "useGridKeyboardNavigation": function() { return /* binding */ $s; },
/* harmony export */   "useGridPagination": function() { return /* binding */ Ws; },
/* harmony export */   "useGridParamsApi": function() { return /* binding */ Zs; },
/* harmony export */   "useGridPreferencesPanel": function() { return /* binding */ Us; },
/* harmony export */   "useGridReducer": function() { return /* binding */ _s; },
/* harmony export */   "useGridRows": function() { return /* binding */ Js; },
/* harmony export */   "useGridScrollFn": function() { return /* binding */ lc; },
/* harmony export */   "useGridSelection": function() { return /* binding */ ec; },
/* harmony export */   "useGridSelector": function() { return /* binding */ ea; },
/* harmony export */   "useGridSlotComponentProps": function() { return /* binding */ hc; },
/* harmony export */   "useGridSorting": function() { return /* binding */ tc; },
/* harmony export */   "useGridState": function() { return /* binding */ Qo; },
/* harmony export */   "useGridVirtualColumns": function() { return /* binding */ rc; },
/* harmony export */   "useGridVirtualRows": function() { return /* binding */ oc; },
/* harmony export */   "useLogger": function() { return /* binding */ Mo; },
/* harmony export */   "useLoggerFactory": function() { return /* binding */ xo; },
/* harmony export */   "useNativeEventListener": function() { return /* binding */ nc; },
/* harmony export */   "useThemeProps": function() { return /* binding */ ao; },
/* harmony export */   "visibleGridColumnsLengthSelector": function() { return /* binding */ da; },
/* harmony export */   "visibleGridColumnsSelector": function() { return /* binding */ ia; },
/* harmony export */   "visibleGridRowCountSelector": function() { return /* binding */ Ka; },
/* harmony export */   "visibleGridRowsStateSelector": function() { return /* binding */ Ba; },
/* harmony export */   "visibleSortedGridRowIdsSelector": function() { return /* binding */ Ua; },
/* harmony export */   "visibleSortedGridRowsAsArraySelector": function() { return /* binding */ Wa; },
/* harmony export */   "visibleSortedGridRowsSelector": function() { return /* binding */ $a; }
/* harmony export */ });
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Unstable_TrapFocus */ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_locale__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/locale */ "./node_modules/@material-ui/core/locale/index.js");
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/NoSsr */ "./node_modules/@material-ui/core/esm/NoSsr/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
const ee="MuiDataGrid-cell",te="MuiDataGrid-row",re="MuiDataGrid-colCell",ne="MuiDataGrid-columnSeparatorResizable",le="MuiDataGrid-colCellTitleContainer",oe="data-container",ae="MuiDataGrid-colCell-dropZone",ie="MuiDataGrid-colCell-dragging",se="resize",ce="focusout",ue="keydown",de="keyup",pe="scroll",me="dragend",fe="componentError",ge="unmount",be="gridFocusOut",he="cellModeChange",Ce="cellClick",ve="cellDoubleClick",we="cellMouseDown",Oe="cellOver",ye="cellOut",Ee="cellEnter",Se="cellLeave",xe="cellKeydown",Me="cellBlur",Ie="cellEditPropsChange",ke="cellEditPropsChangeCommitted",De="cellValueChange",Pe="cellEditEnter",Re="cellEditExit",Fe="cellNavigationKeyDown",Le="cellCellFocus",je="cellDragStart",ze="cellDragEnter",Te="cellDragOver",Ae="cellDragEnd",_e="rowClick",Ge="rowDoubleClick",He="rowOver",Ne="rowOut",Ve="rowEnter",Be="rowLeave",$e="editRowModelChange",We="rowSelected",Ue="columnHeaderBlur",Ke="columnHeaderFocus",Ze="columnHeaderNavigationKeydown",Xe="columnHeaderKeydown",qe="columnHeaderClick",Ye="columnHeaderDoubleClick",Je="columnHeaderOver",Qe="columnHeaderOut",et="columnHeaderEnter",tt="columnHeaderLeave",rt="columnHeaderDragStart",nt="columnHeaderDragOver",lt="columnHeaderDragEnter",ot="columnHeaderDragEnd",at="selectionChange",it="pageChange",st="pageSizeChange",ct="scrolling:rows",ut="scroll:rowEnd",dt="columnSeparatorMouseDown",pt="columnResize",mt="columnResizeCommited",ft="columnResizeStart",gt="columnResizeStop",bt="columnOrderChange",ht="rowsUpdated",Ct="rowsSet",vt="rowsCleared",wt="columnsUpdated",Ot="sortModelChange",yt="filterModelChange",Et="stateChange";function St(e,t){return e===t||e!=e&&t!=t}function xt(e,t){for(var r=e.length;r--;)if(St(e[r][0],t))return r;return-1}var Mt=Array.prototype.splice;function It(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}It.prototype.clear=function(){this.__data__=[],this.size=0},It.prototype.delete=function(e){var t=this.__data__,r=xt(t,e);return!(r<0)&&(r==t.length-1?t.pop():Mt.call(t,r,1),--this.size,!0)},It.prototype.get=function(e){var t=this.__data__,r=xt(t,e);return r<0?void 0:t[r][1]},It.prototype.has=function(e){return xt(this.__data__,e)>-1},It.prototype.set=function(e,t){var r=this.__data__,n=xt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};var kt="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,Dt="object"==typeof self&&self&&self.Object===Object&&self,Pt=kt||Dt||Function("return this")(),Rt=Pt.Symbol,Ft=Object.prototype,Lt=Ft.hasOwnProperty,jt=Ft.toString,zt=Rt?Rt.toStringTag:void 0;var Tt=Object.prototype.toString;var At=Rt?Rt.toStringTag:void 0;function _t(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":At&&At in Object(e)?function(e){var t=Lt.call(e,zt),r=e[zt];try{e[zt]=void 0;var n=!0}catch(e){}var l=jt.call(e);return n&&(t?e[zt]=r:delete e[zt]),l}(e):function(e){return Tt.call(e)}(e)}function Gt(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function Ht(e){if(!Gt(e))return!1;var t=_t(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}var Nt,Vt=Pt["__core-js_shared__"],Bt=(Nt=/[^.]+$/.exec(Vt&&Vt.keys&&Vt.keys.IE_PROTO||""))?"Symbol(src)_1."+Nt:"";var $t=Function.prototype.toString;function Wt(e){if(null!=e){try{return $t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var Ut=/^\[object .+?Constructor\]$/,Kt=Function.prototype,Zt=Object.prototype,Xt=Kt.toString,qt=Zt.hasOwnProperty,Yt=RegExp("^"+Xt.call(qt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Jt(e){return!(!Gt(e)||(t=e,Bt&&Bt in t))&&(Ht(e)?Yt:Ut).test(Wt(e));var t}function Qt(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Jt(r)?r:void 0}var er=Qt(Pt,"Map"),tr=Qt(Object,"create");var rr=Object.prototype.hasOwnProperty;var nr=Object.prototype.hasOwnProperty;function lr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function or(e,t){var r,n,l=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?l["string"==typeof t?"string":"hash"]:l.map}function ar(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}lr.prototype.clear=function(){this.__data__=tr?tr(null):{},this.size=0},lr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},lr.prototype.get=function(e){var t=this.__data__;if(tr){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return rr.call(t,e)?t[e]:void 0},lr.prototype.has=function(e){var t=this.__data__;return tr?void 0!==t[e]:nr.call(t,e)},lr.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=tr&&void 0===t?"__lodash_hash_undefined__":t,this},ar.prototype.clear=function(){this.size=0,this.__data__={hash:new lr,map:new(er||It),string:new lr}},ar.prototype.delete=function(e){var t=or(this,e).delete(e);return this.size-=t?1:0,t},ar.prototype.get=function(e){return or(this,e).get(e)},ar.prototype.has=function(e){return or(this,e).has(e)},ar.prototype.set=function(e,t){var r=or(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function ir(e){var t=this.__data__=new It(e);this.size=t.size}ir.prototype.clear=function(){this.__data__=new It,this.size=0},ir.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},ir.prototype.get=function(e){return this.__data__.get(e)},ir.prototype.has=function(e){return this.__data__.has(e)},ir.prototype.set=function(e,t){var r=this.__data__;if(r instanceof It){var n=r.__data__;if(!er||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new ar(n)}return r.set(e,t),this.size=r.size,this};function sr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new ar;++t<r;)this.add(e[t])}function cr(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}sr.prototype.add=sr.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},sr.prototype.has=function(e){return this.__data__.has(e)};function ur(e,t,r,n,l,o){var a=1&r,i=e.length,s=t.length;if(i!=s&&!(a&&s>i))return!1;var c=o.get(e);if(c&&o.get(t))return c==t;var u=-1,d=!0,p=2&r?new sr:void 0;for(o.set(e,t),o.set(t,e);++u<i;){var m=e[u],f=t[u];if(n)var g=a?n(f,m,u,t,e,o):n(m,f,u,e,t,o);if(void 0!==g){if(g)continue;d=!1;break}if(p){if(!cr(t,(function(e,t){if(a=t,!p.has(a)&&(m===e||l(m,e,r,n,o)))return p.push(t);var a}))){d=!1;break}}else if(m!==f&&!l(m,f,r,n,o)){d=!1;break}}return o.delete(e),o.delete(t),d}var dr=Pt.Uint8Array;function pr(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function mr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var fr=Rt?Rt.prototype:void 0,gr=fr?fr.valueOf:void 0;var br=Array.isArray;var hr=Object.prototype.propertyIsEnumerable,Cr=Object.getOwnPropertySymbols,vr=Cr?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var r=-1,n=null==e?0:e.length,l=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[l++]=a)}return o}(Cr(e),(function(t){return hr.call(e,t)})))}:function(){return[]};function wr(e){return null!=e&&"object"==typeof e}function Or(e){return wr(e)&&"[object Arguments]"==_t(e)}var yr=Object.prototype,Er=yr.hasOwnProperty,Sr=yr.propertyIsEnumerable,xr=Or(function(){return arguments}())?Or:function(e){return wr(e)&&Er.call(e,"callee")&&!Sr.call(e,"callee")};var Mr="object"==typeof exports&&exports&&!exports.nodeType&&exports,Ir=Mr&&"object"=="object"&&module&&!module.nodeType&&module,kr=Ir&&Ir.exports===Mr?Pt.Buffer:void 0,Dr=(kr?kr.isBuffer:void 0)||function(){return!1},Pr=/^(?:0|[1-9]\d*)$/;function Rr(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Pr.test(e))&&e>-1&&e%1==0&&e<t}function Fr(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}var Lr={};Lr["[object Float32Array]"]=Lr["[object Float64Array]"]=Lr["[object Int8Array]"]=Lr["[object Int16Array]"]=Lr["[object Int32Array]"]=Lr["[object Uint8Array]"]=Lr["[object Uint8ClampedArray]"]=Lr["[object Uint16Array]"]=Lr["[object Uint32Array]"]=!0,Lr["[object Arguments]"]=Lr["[object Array]"]=Lr["[object ArrayBuffer]"]=Lr["[object Boolean]"]=Lr["[object DataView]"]=Lr["[object Date]"]=Lr["[object Error]"]=Lr["[object Function]"]=Lr["[object Map]"]=Lr["[object Number]"]=Lr["[object Object]"]=Lr["[object RegExp]"]=Lr["[object Set]"]=Lr["[object String]"]=Lr["[object WeakMap]"]=!1;var jr,zr="object"==typeof exports&&exports&&!exports.nodeType&&exports,Tr=zr&&"object"=="object"&&module&&!module.nodeType&&module,Ar=Tr&&Tr.exports===zr&&kt.process,_r=function(){try{return Ar&&Ar.binding&&Ar.binding("util")}catch(e){}}(),Gr=_r&&_r.isTypedArray,Hr=Gr?(jr=Gr,function(e){return jr(e)}):function(e){return wr(e)&&Fr(e.length)&&!!Lr[_t(e)]},Nr=Object.prototype.hasOwnProperty;function Vr(e,t){var r=br(e),n=!r&&xr(e),l=!r&&!n&&Dr(e),o=!r&&!n&&!l&&Hr(e),a=r||n||l||o,i=a?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],s=i.length;for(var c in e)!t&&!Nr.call(e,c)||a&&("length"==c||l&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Rr(c,s))||i.push(c);return i}var Br=Object.prototype;var $r=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Wr=Object.prototype.hasOwnProperty;function Ur(e){if(r=(t=e)&&t.constructor,t!==("function"==typeof r&&r.prototype||Br))return $r(e);var t,r,n=[];for(var l in Object(e))Wr.call(e,l)&&"constructor"!=l&&n.push(l);return n}function Kr(e){return null!=(t=e)&&Fr(t.length)&&!Ht(t)?Vr(e):Ur(e);var t}function Zr(e){return function(e,t,r){var n=t(e);return br(e)?n:function(e,t){for(var r=-1,n=t.length,l=e.length;++r<n;)e[l+r]=t[r];return e}(n,r(e))}(e,Kr,vr)}var Xr=Object.prototype.hasOwnProperty;var qr=Qt(Pt,"DataView"),Yr=Qt(Pt,"Promise"),Jr=Qt(Pt,"Set"),Qr=Qt(Pt,"WeakMap"),en=Wt(qr),tn=Wt(er),rn=Wt(Yr),nn=Wt(Jr),ln=Wt(Qr),on=_t;(qr&&"[object DataView]"!=on(new qr(new ArrayBuffer(1)))||er&&"[object Map]"!=on(new er)||Yr&&"[object Promise]"!=on(Yr.resolve())||Jr&&"[object Set]"!=on(new Jr)||Qr&&"[object WeakMap]"!=on(new Qr))&&(on=function(e){var t=_t(e),r="[object Object]"==t?e.constructor:void 0,n=r?Wt(r):"";if(n)switch(n){case en:return"[object DataView]";case tn:return"[object Map]";case rn:return"[object Promise]";case nn:return"[object Set]";case ln:return"[object WeakMap]"}return t});var an=on,sn="[object Object]",cn=Object.prototype.hasOwnProperty;function un(e,t,r,n,l,o){var a=br(e),i=br(t),s=a?"[object Array]":an(e),c=i?"[object Array]":an(t),u=(s="[object Arguments]"==s?sn:s)==sn,d=(c="[object Arguments]"==c?sn:c)==sn,p=s==c;if(p&&Dr(e)){if(!Dr(t))return!1;a=!0,u=!1}if(p&&!u)return o||(o=new ir),a||Hr(e)?ur(e,t,r,n,l,o):function(e,t,r,n,l,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new dr(e),new dr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return St(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var i=pr;case"[object Set]":var s=1&n;if(i||(i=mr),e.size!=t.size&&!s)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var u=ur(i(e),i(t),n,l,o,a);return a.delete(e),u;case"[object Symbol]":if(gr)return gr.call(e)==gr.call(t)}return!1}(e,t,s,r,n,l,o);if(!(1&r)){var m=u&&cn.call(e,"__wrapped__"),f=d&&cn.call(t,"__wrapped__");if(m||f){var g=m?e.value():e,b=f?t.value():t;return o||(o=new ir),l(g,b,r,n,o)}}return!!p&&(o||(o=new ir),function(e,t,r,n,l,o){var a=1&r,i=Zr(e),s=i.length;if(s!=Zr(t).length&&!a)return!1;for(var c=s;c--;){var u=i[c];if(!(a?u in t:Xr.call(t,u)))return!1}var d=o.get(e);if(d&&o.get(t))return d==t;var p=!0;o.set(e,t),o.set(t,e);for(var m=a;++c<s;){var f=e[u=i[c]],g=t[u];if(n)var b=a?n(g,f,u,t,e,o):n(f,g,u,e,t,o);if(!(void 0===b?f===g||l(f,g,r,n,o):b)){p=!1;break}m||(m="constructor"==u)}if(p&&!m){var h=e.constructor,C=t.constructor;h==C||!("constructor"in e)||!("constructor"in t)||"function"==typeof h&&h instanceof h&&"function"==typeof C&&C instanceof C||(p=!1)}return o.delete(e),o.delete(t),p}(e,t,r,n,l,o))}function dn(e,t,r,n,l){return e===t||(null==e||null==t||!wr(e)&&!wr(t)?e!=e&&t!=t:un(e,t,r,n,dn,l))}function pn(e,t){return dn(e,t)}function mn(e){return e instanceof Date}function fn({value:e,withTime:t}){if(mn(e)){const r=e.getTimezoneOffset();return new Date(e.getTime()-60*r*1e3).toISOString().substr(0,t?16:10)}return e}function gn(e){return Array.isArray(e)}function bn(e){return"string"==typeof e}function hn(e){return"number"==typeof e}function Cn(e){return"function"==typeof e}function vn(e){return"object"==typeof e}function wn(e){return e.type||e.mode}function On(){return"alpha"in _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__}function yn(e,t){var r,n;return On()?null===(r=_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__)||void 0===r?void 0:r.alpha(e,t):null===(n=_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__)||void 0===n?void 0:n.fade(e,t)}function En(){try{const e="__some_random_key_you_are_not_going_to_use__";return window.localStorage.setItem(e,e),window.localStorage.removeItem(e),!0}catch(e){return!1}}function Sn(e){switch(e){case"string":return"text";case"number":case"date":return e;case"dateTime":return"datetime-local";default:return"text"}}const xn=(e,t)=>{const r=e.indexOf(t);return t&&-1!==r&&r+1!==e.length?e[r+1]:e[0]},Mn=e=>"desc"===e,In=(e,t)=>null==e&&null!=t?-1:null==t&&null!=e?1:null==e&&null==t?0:null,kn=(e,t,r,n)=>{const l=r.getValue(r.field),o=n.getValue(n.field),a=In(l,o);return null!==a?a:"string"==typeof l?l.localeCompare(o.toString()):l-o},Dn=(e,t,r,n)=>{const l=r.getValue(r.field),o=n.getValue(n.field),a=In(l,o);return null!==a?a:Number(l)-Number(o)},Pn=(e,t,r,n)=>{const l=r.getValue(r.field),o=n.getValue(n.field),a=In(l,o);return null!==a?a:l>o?1:l<o?-1:0};function Rn(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function Fn(e,t){return e.closest("."+t)}function Ln(e){return e?Fn(e,"MuiDataGrid-row"):null}function jn(e){return null!=e&&e.classList.contains("MuiDataGrid-cell")}function zn(e){return null!=e&&e.classList.contains("MuiDataGrid-colCell")}function Tn(e){return e&&null!==Fn(e,"MuiDataGrid-colCellTitleContainer")}function An(e){return e.getAttribute("data-id")}function _n(e){return e.getAttribute("data-field")}function Gn(e,t){return e.querySelector(`[data-field="${t}"]`)}function Hn(e){const t=e.getAttribute("data-field"),r=Fn(e,"MuiDataGrid-root");if(!r)throw new Error("Material-UI: The root element is not found.");return r.querySelectorAll(`:scope .MuiDataGrid-cell[data-field="${t}"]`)}function Nn(e){if(e.classList.contains("MuiDataGrid-root"))return e;return Fn(e,"MuiDataGrid-root")}function Vn(e){const t=Nn(e);return t?t.querySelector(":scope .data-container"):null}function Bn(e,{colIndex:t,rowIndex:r}){return e.querySelector(`:scope .MuiDataGrid-cell[aria-colIndex='${t}'][data-rowIndex='${r}']`)}function $n(e,t){return e.querySelector(`[role='columnheader'][data-field='${t}']`)}function Wn(e,t){return e.querySelector(`:scope .MuiDataGrid-row[data-id='${t}']`)}function Un(e,{id:t,field:r}){const n=Wn(e,t);return n?n.querySelector(`.MuiDataGrid-cell[data-field='${r}']`):null}function Kn(...e){return e.reduce(((e,t)=>t?(gn(t)?e+=t.join(" "):bn(t)?e+=t:"object"==typeof t&&(Object.keys(t).forEach((r=>{t[r]&&(e+=r+" ")})),e=e.trim()),e+=" "):e),"").trim()}const Zn=e=>"Escape"===e,Xn=e=>"Enter"===e,qn=e=>"Tab"===e,Yn=e=>" "===e,Jn=e=>0===e.indexOf("Arrow"),Qn=e=>"Home"===e||"End"===e,el=e=>0===e.indexOf("Page"),tl=e=>"Delete"===e||"Backspace"===e,rl=/^(\p{L}|\p{M}\p{L}|\p{M}|\p{N}|\p{Z}|\p{S}|\p{P})$/iu,nl=e=>rl.test(e),ll=["Meta","Control","Shift"],ol=["Enter","Escape","Tab"],al=["Enter","Tab"],il=e=>ll.indexOf(e)>-1,sl=e=>Xn(e)||tl(e)||nl(e),cl=e=>ol.indexOf(e)>-1,ul=e=>al.indexOf(e)>-1,dl=e=>Qn(e)||Jn(e)||el(e)||Yn(e),pl=e=>!!e.key,ml=e=>qn(e)||Zn(e),fl=e=>e.shiftKey||e.metaKey||e.ctrlKey
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */;function gl(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]])}return r}function bl(e){const{id:t,value:r,formattedValue:n,api:l,field:o,row:a,colDef:i,cellMode:c,getValue:u,rowIndex:d,colIndex:p,isEditable:m}=e,f=gl(e,["id","value","formattedValue","api","field","row","colDef","cellMode","getValue","rowIndex","colIndex","isEditable"]),[b,h]=react__WEBPACK_IMPORTED_MODULE_0__.useState(r),C=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{const r=e.target.value,n={value:"date"===i.type||"dateTime"===i.type?new Date(r):r};h(r),l.publishEvent("cellEditPropsChange",{id:t,field:o,props:n},e)}),[l,i.type,o,t]),v=Sn(i.type),w=b&&mn(b)?fn({value:b,withTime:"dateTime"===i.type}):b;return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{h(r)}),[r]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_4__.default,Object.assign({autoFocus:!0,className:"MuiDataGrid-editCellInputBase",fullWidth:!0,type:v,value:w,onChange:C},f))}const hl=e=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(bl,Object.assign({},e)),Cl=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward"),vl=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),wl=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterList"),Ol=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"}),"FilterAlt"),yl=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search"),El=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu"),Sl=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle"),xl=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"}),"ColumnIcon"),Ml=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11 19V5h2v14z"}),"Separator"),Il=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"}),"ViewHeadline"),kl=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z"}),"TableRows"),Dl=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M4 18h17v-6H4v6zM4 5v6h17V5H4z"}),"ViewStream"),Pl=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"TripleDotsVertical"),Rl=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Fl=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),Ll=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}),"Load"),jl=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"Drag"),zl=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"}),"SaveAlt"),Tl=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.createSvgIcon)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),Al=500;function _l(e){const{item:t,applyValue:r,type:n,apiRef:l}=e,o=gl(e,["item","applyValue","type","apiRef"]),a=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),[i,c]=react__WEBPACK_IMPORTED_MODULE_0__.useState(t.value||""),[u,d]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),p=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{clearTimeout(a.current);const n=e.target.value;c(n),d(!0),a.current=setTimeout((()=>{r(Object.assign(Object.assign({},t),{value:n})),d(!1)}),500)}),[r,t]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>()=>{clearTimeout(a.current)}),[]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{c(t.value||"")}),[t.value]);const m=u?{endAdornment:react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ll,null)}:o.InputProps;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default,Object.assign({label:l.current.getLocaleText("filterPanelInputLabel"),placeholder:l.current.getLocaleText("filterPanelInputPlaceholder"),value:i,onChange:p,type:n||"text",variant:"standard",InputProps:m,InputLabelProps:{shrink:!0}},o))}const Gl=()=>[{value:"contains",getApplyFilterFn:(e,t)=>{if(!e.columnField||!e.value||!e.operatorValue)return null;const r=new RegExp(e.value,"i");return e=>{const n=t.valueGetter?t.valueGetter(e):e.value;return r.test((null==n?void 0:n.toString())||"")}},InputComponent:_l},{value:"equals",getApplyFilterFn:(e,t)=>e.columnField&&e.value&&e.operatorValue?r=>{var n;const l=t.valueGetter?t.valueGetter(r):r.value;return 0===(null===(n=e.value)||void 0===n?void 0:n.localeCompare((null==l?void 0:l.toString())||"",void 0,{sensitivity:"base"}))}:null,InputComponent:_l},{value:"startsWith",getApplyFilterFn:(e,t)=>{if(!e.columnField||!e.value||!e.operatorValue)return null;const r=new RegExp(`^${e.value}.*$`,"i");return e=>{const n=t.valueGetter?t.valueGetter(e):e.value;return r.test((null==n?void 0:n.toString())||"")}},InputComponent:_l},{value:"endsWith",getApplyFilterFn:(e,t)=>{if(!e.columnField||!e.value||!e.operatorValue)return null;const r=new RegExp(`.*${e.value}$`,"i");return e=>{const n=t.valueGetter?t.valueGetter(e):e.value;return r.test((null==n?void 0:n.toString())||"")}},InputComponent:_l}],Hl={width:100,hide:!1,sortable:!0,resizable:!0,filterable:!0,sortComparator:kn,type:"string",align:"left",filterOperators:Gl(),renderEditCell:hl},Nl=()=>[{label:"=",value:"=",getApplyFilterFn:(e,t)=>e.columnField&&e.value&&e.operatorValue?r=>{const n=t.valueGetter?t.valueGetter(r):r.value;return Number(n)===Number(e.value)}:null,InputComponent:_l,InputComponentProps:{type:"number"}},{label:"!=",value:"!=",getApplyFilterFn:(e,t)=>e.columnField&&e.value&&e.operatorValue?r=>{const n=t.valueGetter?t.valueGetter(r):r.value;return Number(n)!==Number(e.value)}:null,InputComponent:_l,InputComponentProps:{type:"number"}},{label:">",value:">",getApplyFilterFn:(e,t)=>e.columnField&&e.value&&e.operatorValue?r=>{const n=t.valueGetter?t.valueGetter(r):r.value;return Number(n)>Number(e.value)}:null,InputComponent:_l,InputComponentProps:{type:"number"}},{label:">=",value:">=",getApplyFilterFn:(e,t)=>e.columnField&&e.value&&e.operatorValue?r=>{const n=t.valueGetter?t.valueGetter(r):r.value;return Number(n)>=Number(e.value)}:null,InputComponent:_l,InputComponentProps:{type:"number"}},{label:"<",value:"<",getApplyFilterFn:(e,t)=>e.columnField&&e.value&&e.operatorValue?r=>{const n=t.valueGetter?t.valueGetter(r):r.value;return Number(n)<Number(e.value)}:null,InputComponent:_l,InputComponentProps:{type:"number"}},{label:"<=",value:"<=",getApplyFilterFn:(e,t)=>e.columnField&&e.value&&e.operatorValue?r=>{const n=t.valueGetter?t.valueGetter(r):r.value;return Number(n)<=Number(e.value)}:null,InputComponent:_l,InputComponentProps:{type:"number"}}],Vl=Object.assign(Object.assign({},Hl),{type:"number",align:"right",headerAlign:"right",sortComparator:Dn,valueFormatter:({value:e})=>e&&hn(e)&&e.toLocaleString()||e,filterOperators:Nl()}),Bl=e=>[{value:"is",getApplyFilterFn:(e,t)=>{if(!e.columnField||!e.value||!e.operatorValue)return null;const r=new Date(e.value).getTime();return e=>{const n=t.valueGetter?t.valueGetter(e):e.value;return!!n&&(n instanceof Date?n.getTime()===r:new Date(n.toString()).getTime()===r)}},InputComponent:_l,InputComponentProps:{type:e?"datetime-local":"date"}},{value:"not",getApplyFilterFn:(e,t)=>{if(!e.columnField||!e.value||!e.operatorValue)return null;const r=new Date(e.value).getTime();return e=>{const n=t.valueGetter?t.valueGetter(e):e.value;return!!n&&(n instanceof Date?n.getTime()!==r:new Date(n.toString()).getTime()!==r)}},InputComponent:_l,InputComponentProps:{type:e?"datetime-local":"date"}},{value:"after",getApplyFilterFn:(e,t)=>{if(!e.columnField||!e.value||!e.operatorValue)return null;const r=new Date(e.value).getTime();return e=>{const n=t.valueGetter?t.valueGetter(e):e.value;return!!n&&(n instanceof Date?n.getTime()>r:new Date(n.toString()).getTime()>r)}},InputComponent:_l,InputComponentProps:{type:e?"datetime-local":"date"}},{value:"onOrAfter",getApplyFilterFn:(e,t)=>{if(!e.columnField||!e.value||!e.operatorValue)return null;const r=new Date(e.value).getTime();return e=>{const n=t.valueGetter?t.valueGetter(e):e.value;return!!n&&(n instanceof Date?n.getTime()>=r:new Date(n.toString()).getTime()>=r)}},InputComponent:_l,InputComponentProps:{type:e?"datetime-local":"date"}},{value:"before",getApplyFilterFn:(e,t)=>{if(!e.columnField||!e.value||!e.operatorValue)return null;const r=new Date(e.value).getTime();return e=>{const n=t.valueGetter?t.valueGetter(e):e.value;return!!n&&(n instanceof Date?n.getTime()<r:new Date(n.toString()).getTime()<r)}},InputComponent:_l,InputComponentProps:{type:e?"datetime-local":"date"}},{value:"onOrBefore",getApplyFilterFn:(e,t)=>{if(!e.columnField||!e.value||!e.operatorValue)return null;const r=new Date(e.value).getTime();return e=>{const n=t.valueGetter?t.valueGetter(e):e.value;return!!n&&(n instanceof Date?n.getTime()<=r:new Date(n.toString()).getTime()<=r)}},InputComponent:_l,InputComponentProps:{type:e?"datetime-local":"date"}}];function $l({value:e}){return mn(e)?e.toLocaleDateString():e}function Wl({value:e}){return mn(e)?e.toLocaleString():e}const Ul=Object.assign(Object.assign({},Hl),{type:"date",sortComparator:Pn,valueFormatter:$l,filterOperators:Bl()}),Kl=Object.assign(Object.assign({},Hl),{type:"dateTime",sortComparator:Pn,valueFormatter:Wl,filterOperators:Bl(!0)});function Zl(e){const{id:t,value:r,element:n,formattedValue:l,api:o,field:a,row:i,colDef:c,cellMode:u,getValue:d,rowIndex:p,colIndex:m,isEditable:f}=e,g=gl(e,["id","value","element","formattedValue","api","field","row","colDef","cellMode","getValue","rowIndex","colIndex","isEditable"]),b=r?o.components.BooleanCellTrueIcon:o.components.BooleanCellFalseIcon;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(b,Object.assign({fontSize:"small",className:"MuiDataGrid-booleanCell",titleAccess:o.getLocaleText(r?"booleanCellTrueLabel":"booleanCellFalseLabel"),"data-value":Boolean(r)},g))}function Xl(e){const{id:t,value:r,element:n,formattedValue:l,api:o,field:a,row:i,colDef:c,cellMode:u,getValue:d,rowIndex:p,colIndex:m,isEditable:f,className:g}=e,b=gl(e,["id","value","element","formattedValue","api","field","row","colDef","cellMode","getValue","rowIndex","colIndex","isEditable","className"]),[C,v]=react__WEBPACK_IMPORTED_MODULE_0__.useState(r),w=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{const r=e.target.checked,n={value:r};v(r),o.publishEvent("cellEditPropsChange",{id:t,field:a,props:n},e)}),[o,a,t]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{v(r)}),[r]);const O=`MuiDataGrid-cell-${t}-${a}`;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",Object.assign({htmlFor:O,className:Kn("MuiDataGrid-editCellBoolean",g)},b),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__.default,{autoFocus:!0,id:O,checked:Boolean(C),onChange:w,size:"small"}))}function ql(e){const{item:t,applyValue:r,apiRef:n}=e,l=gl(e,["item","applyValue","apiRef"]),[o,a]=react__WEBPACK_IMPORTED_MODULE_0__.useState(t.value||""),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{const n=e.target.value;a(n),r(Object.assign(Object.assign({},t),{value:n}))}),[r,t]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{a(t.value||"")}),[t.value]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default,Object.assign({label:n.current.getLocaleText("filterPanelInputLabel"),value:o,onChange:i,variant:"standard",select:!0,SelectProps:{native:!0},InputLabelProps:{shrink:!0}},l),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:""},n.current.getLocaleText("filterValueAny")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"true"},n.current.getLocaleText("filterValueTrue")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"false"},n.current.getLocaleText("filterValueFalse")))}const Yl=Object.assign(Object.assign({},Hl),{type:"boolean",align:"center",headerAlign:"center",renderCell:e=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Zl,Object.assign({},e)),renderEditCell:e=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Xl,Object.assign({},e)),sortComparator:Dn,filterOperators:[{value:"is",getApplyFilterFn:(e,t)=>{if(!e.columnField||!e.value||!e.operatorValue)return null;const r="true"===e.value;return e=>{const n=t.valueGetter?t.valueGetter(e):e.value;return Boolean(n)===r}},InputComponent:ql}]}),Jl="__default__",Ql=()=>{const e={string:Hl,number:Vl,date:Ul,dateTime:Kl,boolean:Yl};return e.__default__=Hl,e};function eo(e,t){const r=Object.assign(Object.assign({},e),t),n={};return Object.entries(r).forEach((([e,t])=>{t=Object.assign(Object.assign({},r[t.extendType||"__default__"]),t),n[e]=t})),n}function to(e){const t=Object.assign({},e);return Object.keys(e).forEach((r=>{e.hasOwnProperty(r)&&void 0===e[r]&&delete t[r]})),t}function ro(e,t){t=to(t);return Object.assign(Object.assign({},e),t)}const no=(e,t)=>On()?{components:Object.assign({MuiDataGrid:{defaultProps:{localeText:e}}},null==t?void 0:t.components)}:{props:Object.assign({MuiDataGrid:{localeText:e}},null==t?void 0:t.props)};function lo(e){return (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.useEventCallback)(e)}const oo="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function ao({props:e,name:t}){const r=Object.assign({},e),n=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)(),l=(0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_8__.getThemeProps)({theme:n,name:t,props:r}),o=l.theme||n,a="rtl"===o.direction;return Object.assign({theme:o,isRtl:a},l)}function io(e){const t=e.createElement("div");t.style.width="99px",t.style.height="99px",t.style.position="absolute",t.style.top="-9999px",t.style.overflow="scroll",e.body.appendChild(t);const r=t.offsetWidth-t.clientWidth;return e.body.removeChild(t),r}function so(e,t="csv",r=document.title){const n=`${r}.${t}`;if("download"in HTMLAnchorElement.prototype){const t=URL.createObjectURL(e),r=document.createElement("a");return r.href=t,r.download=n,r.click(),void setTimeout((()=>{URL.revokeObjectURL(t)}))}throw new Error("exportAs not supported")}const co=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0),uo=react__WEBPACK_IMPORTED_MODULE_0__.memo((e=>{const{align:t,children:n,colIndex:l,cellMode:o,cssClass:a,field:i,formattedValue:c,hasFocus:u,height:d,isEditable:p,rowIndex:m,rowId:f,showRightBorder:g,tabIndex:b,value:h,width:C}=e,v=null==c?h:c,w=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),O=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),y=Kn("MuiDataGrid-cell",a,"MuiDataGrid-cell"+(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.capitalize)(t),{"MuiDataGrid-withBorder":g,"MuiDataGrid-cellEditable":p}),E=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>t=>{if(t.relatedTarget&&t.currentTarget.contains(t.relatedTarget))return;const r=O.current.getCellParams(f,i||"");O.current.publishEvent(e,r,t)}),[O,i,f]),S=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>t=>{const r=O.current.getCellParams(f,i||"");O.current.publishEvent(e,r,t),(null==r?void 0:r.colDef.disableClickEventBubbling)&&t.stopPropagation()}),[O,i,f]),x=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>t=>{t.currentTarget.contains(t.target)&&O.current.publishEvent(e,O.current.getCellParams(f,i||""),t)}),[O,i,f]),M=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({onClick:S("cellClick"),onDoubleClick:x("cellDoubleClick"),onMouseDown:x("cellMouseDown"),onMouseOver:x("cellOver"),onMouseOut:x("cellOut"),onMouseEnter:x("cellEnter"),onMouseLeave:x("cellLeave"),onKeyDown:x("cellKeydown"),onBlur:E("cellBlur"),onFocus:x("cellCellFocus"),onDragStart:x("cellDragStart"),onDragEnter:x("cellDragEnter"),onDragOver:x("cellDragOver")})),[x,E,S]),I={minWidth:C,maxWidth:C,lineHeight:d-1+"px",minHeight:d,maxHeight:d};return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{if(u&&w.current&&(!document.activeElement||!w.current.contains(document.activeElement))){const e=w.current.querySelector('[tabindex="0"]');e?e.focus():w.current.focus()}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({ref:w,className:y,role:"cell","data-value":h,"data-field":i,"data-rowindex":m,"data-editable":p,"data-mode":o,"aria-colindex":l,style:I,tabIndex:b},M),n||(null==v?void 0:v.toString()))}));uo.displayName="GridCell";const po=react__WEBPACK_IMPORTED_MODULE_0__.memo((function({width:e,height:t}){return e&&t?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{minWidth:e,maxWidth:e,lineHeight:t-1+"px",minHeight:t,maxHeight:t},className:"MuiDataGrid-cell"}):null})),mo=e=>e.editRows,fo=e=>e.density,go=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(fo,(e=>e.value)),bo=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(fo,(e=>e.rowHeight)),ho=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(fo,(e=>e.headerHeight)),Co=En()&&null!=window.localStorage.getItem("DEBUG"),vo=()=>{},wo={debug:vo,info:vo,warn:vo,error:vo},Oo=["debug","info","warn","error"];function yo(e,t,r=console){const n=Oo.indexOf(t);if(-1===n)throw new Error(`Material-UI: Log level ${t} not recognized.`);return Oo.reduce(((t,l,o)=>(t[l]=o>=n?(...t)=>{const[n,...o]=t;r[l](`Material-UI: ${e} - ${n}`,...o)}:vo,t)),{})}const Eo=e=>t=>yo(t,e);let So;function xo(e,t=( false?0:"warn")){So=Co?Eo("debug"):e?Cn(e)?e:t?r=>yo(r,t.toString(),e):null:t?Eo(t.toString()):null}function Mo(e){const{current:t}=react__WEBPACK_IMPORTED_MODULE_0__.useRef(So?So(e):wo);return t}function Io(e,t,r){const n=Mo("useGridApiMethod"),l=react__WEBPACK_IMPORTED_MODULE_0__.useRef(t),[o]=react__WEBPACK_IMPORTED_MODULE_0__.useState(Object.keys(t));react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{l.current=t}),[t]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{o.forEach((t=>{e.current.hasOwnProperty(t)||(n.debug(`Adding ${r}.${t} to apiRef`),e.current[t]=(...e)=>l.current[t](...e))}))}),[o,r,e,n])}const ko=()=>({all:[],lookup:{}}),Do={rootGridLabel:"grid",noRowsLabel:"No rows",noResultsOverlayLabel:"No results found.",errorOverlayDefaultLabel:"An error occurred.",toolbarDensity:"Density",toolbarDensityLabel:"Density",toolbarDensityCompact:"Compact",toolbarDensityStandard:"Standard",toolbarDensityComfortable:"Comfortable",toolbarColumns:"Columns",toolbarColumnsLabel:"Select columns",toolbarFilters:"Filters",toolbarFiltersLabel:"Show filters",toolbarFiltersTooltipHide:"Hide filters",toolbarFiltersTooltipShow:"Show filters",toolbarFiltersTooltipActive:e=>1!==e?e+" active filters":e+" active filter",toolbarExport:"Export",toolbarExportLabel:"Export",toolbarExportCSV:"Download as CSV",columnsPanelTextFieldLabel:"Find column",columnsPanelTextFieldPlaceholder:"Column title",columnsPanelDragIconLabel:"Reorder column",columnsPanelShowAllButton:"Show all",columnsPanelHideAllButton:"Hide all",filterPanelAddFilter:"Add filter",filterPanelDeleteIconLabel:"Delete",filterPanelOperators:"Operators",filterPanelOperatorAnd:"And",filterPanelOperatorOr:"Or",filterPanelColumns:"Columns",filterPanelInputLabel:"Value",filterPanelInputPlaceholder:"Filter value",filterOperatorContains:"contains",filterOperatorEquals:"equals",filterOperatorStartsWith:"starts with",filterOperatorEndsWith:"ends with",filterOperatorIs:"is",filterOperatorNot:"is not",filterOperatorAfter:"is after",filterOperatorOnOrAfter:"is on or after",filterOperatorBefore:"is before",filterOperatorOnOrBefore:"is on or before",filterValueAny:"any",filterValueTrue:"true",filterValueFalse:"false",columnMenuLabel:"Menu",columnMenuShowColumns:"Show columns",columnMenuFilter:"Filter",columnMenuHideColumn:"Hide",columnMenuUnsort:"Unsort",columnMenuSortAsc:"Sort by ASC",columnMenuSortDesc:"Sort by DESC",columnHeaderFiltersTooltipActive:e=>1!==e?e+" active filters":e+" active filter",columnHeaderFiltersLabel:"Show filters",columnHeaderSortIconLabel:"Sort",footerRowSelected:e=>1!==e?e.toLocaleString()+" rows selected":e.toLocaleString()+" row selected",footerTotalRows:"Total Rows:",checkboxSelectionHeaderName:"Checkbox selection",booleanCellTrueLabel:"true",booleanCellFalseLabel:"false"};var Po;!function(e){e.Compact="compact",e.Standard="standard",e.Comfortable="comfortable"}(Po||(Po={}));const Ro={client:"client",server:"server"},Fo={columnBuffer:2,columnTypes:Ql(),density:Po.Standard,filterMode:Ro.client,headerHeight:56,localeText:Do,pageSize:100,paginationMode:Ro.client,rowHeight:52,rowsPerPageOptions:[25,50,100],scrollEndThreshold:80,sortingMode:Ro.client,sortingOrder:["asc","desc",null]};function Lo(){return{dragCol:""}}function jo(){return{resizingColumnField:""}}var zo;!function(e){e.And="and",e.Or="or"}(zo||(zo={}));const To=()=>({items:[],linkOperator:zo.And}),Ao=()=>({visibleRowsLookup:{}});function _o(e){return{type:"SET_PAGE_ACTION",payload:{page:e}}}function Go(e){return{type:"SET_PAGESIZE_ACTION",payload:{pageSize:e}}}function Ho(e){return{type:"SET_PAGINATION_MODE_ACTION",payload:e}}function No(e){return{type:"SET_ROWCOUNT_ACTION",payload:e}}const Vo=(e,t)=>e&&t>0?Math.ceil(t/e):1,Bo=(e,{page:t})=>e.page!==t?Object.assign(Object.assign({},e),{page:t}):e,$o=(e,t)=>{const{pageSize:r}=t;if(e.pageSize===r)return e;return Object.assign(Object.assign({},e),{pageSize:r,pageCount:Vo(r,e.rowCount)})},Wo=(e,t)=>{const{totalRowCount:r}=t;if(e.rowCount!==r){const t=Vo(e.pageSize,r);return Object.assign(Object.assign({},e),{pageCount:t,rowCount:r,page:e.page>t?t:e.page})}return e},Uo={page:0,pageCount:0,pageSize:0,paginationMode:"client",rowCount:0},Ko=(e,t)=>{switch(t.type){case"SET_PAGE_ACTION":return Bo(e,t.payload);case"SET_PAGESIZE_ACTION":return $o(e,t.payload);case"SET_PAGINATION_MODE_ACTION":return Object.assign(Object.assign({},e),{paginationMode:t.payload.paginationMode});case"SET_ROWCOUNT_ACTION":return Wo(e,t.payload);default:throw new Error("Material-UI: Action not found - "+JSON.stringify(t))}},Zo=()=>({idRowsLookup:{},allRows:[],totalRowCount:0});function Xo(){return{sortedRows:[],sortModel:[]}}const qo=()=>({realScroll:{left:0,top:0},renderContext:null,renderingZoneScroll:{left:0,top:0},virtualPage:0,virtualRowsCount:0,renderedSizes:null}),Yo=()=>({rows:{idRowsLookup:{},allRows:[],totalRowCount:0},editRows:{},pagination:Uo,options:Fo,isScrolling:!1,columns:{all:[],lookup:{}},columnReorder:{dragCol:""},columnResize:{resizingColumnField:""},rendering:{realScroll:{left:0,top:0},renderContext:null,renderingZoneScroll:{left:0,top:0},virtualPage:0,virtualRowsCount:0,renderedSizes:null},containerSizes:null,scrollBar:{hasScrollX:!1,hasScrollY:!1,scrollBarSize:{x:0,y:0}},viewportSizes:{width:0,height:1},sorting:{sortedRows:[],sortModel:[]},keyboard:{isMultipleKeyPressed:!1},focus:{cell:null,columnHeader:null},tabIndex:{cell:null,columnHeader:null},selection:{},filter:To(),columnMenu:{open:!1},preferencePanel:{open:!1},visibleRows:{visibleRowsLookup:{}},density:{value:Fo.density,rowHeight:Fo.rowHeight,headerHeight:Fo.headerHeight}}),Jo=e=>{const t=Mo("useGridApi"),[,r]=react__WEBPACK_IMPORTED_MODULE_0__.useState();e.current.isInitialised||e.current.state||(t.info("Initialising state."),e.current.state=Yo(),e.current.forceUpdate=r);const n=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>t?e.current.state[t]:e.current.state),[e]),l=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{let n;n=Cn(t)?t(e.current.state):t,e.current.state=n,r((()=>n));const l={api:e.current,state:n};e.current.publishEvent("stateChange",l)}),[e]);return Io(e,{getState:n,setState:l},"GridStateApi"),e.current},Qo=e=>{Jo(e);const t=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>e.current.forceUpdate((()=>e.current.state))),[e]),r=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{const r=t(e.current.state),n=e.current.state!==r;if(e.current.state=r,n&&e.current.publishEvent){const t={api:e.current,state:r};e.current.publishEvent("stateChange",t)}return n}),[e]);return[e.current.state,r,t]},ea=(e,t)=>{const[r]=Qo(e);return t(r)};const ta=react__WEBPACK_IMPORTED_MODULE_0__.memo((e=>{const{columns:t,firstColIdx:r,hasScroll:n,id:l,lastColIdx:o,rowIndex:a,cellFocus:i,cellTabIndex:c,showCellRightBorder:u}=e,d=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),p=ea(d,bo),m=ea(d,mo),f=t.slice(r,o+1).map(((o,s)=>{const f=r+s===t.length-1,g=f&&n.x&&!n.y,b=f?!g&&!e.extendRowFullWidth:u,h=d.current.getCellParams(l,o.field);let C={cssClass:""};if(o.cellClassName&&(C=Cn(o.cellClassName)?{cssClass:o.cellClassName(h)}:{cssClass:Kn(o.cellClassName)}),o.cellClassRules){const e=(v=o.cellClassRules,w=h,Object.entries(v).reduce(((e,t)=>e+((Cn(t[1])?t[1](w):t[1])?t[0]+" ":"")),""));C={cssClass:`${C.cssClass} ${e}`}}var v,w;const O=m[l]&&m[l][o.field];let y=null;if(null==O&&o.renderCell&&(y=o.renderCell(h),C={cssClass:C.cssClass+" MuiDataGrid-cellWithRenderer"}),null!=O&&o.renderEditCell){const e=Object.assign(Object.assign({},h),O);y=o.renderEditCell(e),C={cssClass:C.cssClass+" MuiDataGrid-cellEditing"}}return Object.assign(Object.assign({value:h.value,field:o.field,width:o.width,rowId:l,height:p,showRightBorder:b,formattedValue:h.formattedValue,align:o.align||"left"},C),{rowIndex:a,cellMode:h.cellMode,colIndex:h.colIndex,children:y,isEditable:h.isEditable,hasFocus:null!==i&&i.rowIndex===a&&i.colIndex===h.colIndex,tabIndex:null!==c&&c.rowIndex===a&&c.colIndex===h.colIndex?0:-1})}));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,f.map((e=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(uo,Object.assign({key:e.field},e)))))}));ta.displayName="GridRowCells";const ra=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((e=>{const t="light"===wn(e.palette)?(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.lighten)(yn(e.palette.divider,1),.88):(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.darken)(yn(e.palette.divider,1),.68),r={root:Object.assign(Object.assign({flex:1,boxSizing:"border-box",position:"relative",border:"1px solid "+t,borderRadius:e.shape.borderRadius,color:e.palette.text.primary},e.typography.body2),{outline:"none",height:"100%",display:"flex",flexDirection:"column","& *, & *::before, & *::after":{boxSizing:"inherit"},"&.MuiDataGrid-autoHeight":{height:"auto"},"& .MuiDataGrid-main":{position:"relative",flexGrow:1,display:"flex",flexDirection:"column"},"& .MuiDataGrid-overlay":{display:"flex",position:"absolute",top:0,left:0,right:0,bottom:0,alignSelf:"center",alignItems:"center",justifyContent:"center",backgroundColor:yn(e.palette.background.default,e.palette.action.disabledOpacity)},"& .MuiDataGrid-toolbar":{display:"flex",alignItems:"center",padding:"4px 4px 0"},"& .MuiDataGrid-columnsContainer":{position:"absolute",top:0,left:0,right:0,overflow:"hidden",display:"flex",flexDirection:"column",borderBottom:"1px solid "+t},"& .MuiDataGrid-scrollArea":{position:"absolute",top:0,zIndex:101,width:20,bottom:0},"& .MuiDataGrid-scrollArea-left":{left:0},"& .MuiDataGrid-scrollArea-right":{right:0},"& .MuiDataGrid-colCellWrapper":{display:"flex",width:"100%",alignItems:"center",overflow:"hidden"},"& .MuiDataGrid-colCell, & .MuiDataGrid-cell":{WebkitTapHighlightColor:"transparent",lineHeight:null,padding:e.spacing(0,2)},"& .MuiDataGrid-colCell:focus, & .MuiDataGrid-cell:focus":{outline:"dotted",outlineWidth:1,outlineOffset:-2},"& .MuiDataGrid-colCellCheckbox, & .MuiDataGrid-cellCheckbox":{padding:0,justifyContent:"center",alignItems:"center"},"& .MuiDataGrid-colCell":{position:"relative",display:"flex",alignItems:"center"},"& .MuiDataGrid-colCellTitleContainer":{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",display:"inline-flex",flex:1},"& .MuiDataGrid-colCellNumeric .MuiDataGrid-iconButtonContainer":{paddingRight:5},"& .MuiDataGrid-colCellSortable":{cursor:"pointer"},"& .MuiDataGrid-sortIcon":{fontSize:18},"& .MuiDataGrid-colCellCenter .MuiDataGrid-colCellTitleContainer":{justifyContent:"center"},"& .MuiDataGrid-colCellRight .MuiDataGrid-colCellTitleContainer":{justifyContent:"flex-end"},"& .MuiDataGrid-colCellTitle":{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontWeight:e.typography.fontWeightMedium},"& .MuiDataGrid-colCellMoving":{backgroundColor:e.palette.action.hover},"& .MuiDataGrid-columnSeparator":{position:"absolute",right:-12,zIndex:100,display:"flex",flexDirection:"column",justifyContent:"center",color:t},"& .MuiDataGrid-columnSeparatorResizable":{cursor:"col-resize",touchAction:"none","&:hover":{color:e.palette.text.primary,"@media (hover: none)":{color:t}},"&.Mui-resizing":{color:e.palette.text.primary}},"& .MuiDataGrid-iconSeparator":{color:"inherit"},"& .MuiDataGrid-menuIcon":{visibility:"hidden",fontSize:20,marginRight:-6,display:"flex",alignItems:"center"},"& .MuiDataGrid-colCell:hover .MuiDataGrid-menuIcon, .MuiDataGrid-menuOpen":{visibility:"visible"},"& .MuiDataGrid-colCellWrapper.scroll .MuiDataGrid-colCell:last-child":{borderRight:"none"},"& .MuiDataGrid-dataContainer":{position:"relative",flexGrow:1,display:"flex",flexDirection:"column"},"& .MuiDataGrid-window":{position:"absolute",bottom:0,left:0,right:0,overflowX:"auto"},"& .MuiDataGrid-viewport":{position:"sticky",top:0,left:0,display:"flex",flexDirection:"column",overflow:"hidden"},"& .MuiDataGrid-row":{display:"flex",width:"fit-content","&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:yn(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:yn(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:yn(e.palette.primary.main,e.palette.action.selectedOpacity)}}}},"& .MuiDataGrid-cell":{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",borderBottom:"1px solid "+t,"&:focus-within":{outline:`solid ${e.palette.primary.main} 1px`,outlineOffset:"-1px"}},"& .MuiDataGrid-cell.MuiDataGrid-cellEditing":{padding:1,display:"flex",boxShadow:e.shadows[2],backgroundColor:e.palette.background.paper},"& .MuiDataGrid-editCellInputBase":Object.assign(Object.assign({},e.typography.body2),{padding:"1px 0","& input":{padding:"0 16px",height:"100%"}}),"& .MuiDataGrid-editCellBoolean":{display:"flex",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},'& .MuiDataGrid-booleanCell[data-value="true"]':{color:e.palette.text.secondary},'& .MuiDataGrid-booleanCell[data-value="false"]':{color:e.palette.text.disabled},"& .MuiDataGrid-colCellWrapper .MuiDataGrid-cell":{borderBottom:"none"},"& .MuiDataGrid-cellWithRenderer":{display:"flex",alignItems:"center"},"& .MuiDataGrid-withBorder":{borderRight:"1px solid "+t},"& .MuiDataGrid-cellLeft":{textAlign:"left"},"& .MuiDataGrid-cellLeft.MuiDataGrid-cellWithRenderer, & .MuiDataGrid-cellLeft.MuiDataGrid-cellEditing":{justifyContent:"flex-start"},"& .MuiDataGrid-cellRight":{textAlign:"right"},"& .MuiDataGrid-cellRight.MuiDataGrid-cellWithRenderer, & .MuiDataGrid-cellRight.MuiDataGrid-cellEditing":{justifyContent:"flex-end"},"& .MuiDataGrid-cellCenter":{textAlign:"center"},"& .MuiDataGrid-cellCenter.MuiDataGrid-cellWithRenderer, & .MuiDataGrid-cellCenter.MuiDataGrid-cellEditing":{justifyContent:"center"},"& .MuiDataGrid-rowCount, & .MuiDataGrid-selectedRowCount":{alignItems:"center",display:"flex",margin:e.spacing(0,2)},"& .MuiDataGrid-footer":{display:"flex",justifyContent:"space-between",alignItems:"center",minHeight:52,"& .MuiDataGrid-selectedRowCount":{visibility:"hidden",width:0,height:0,[e.breakpoints.up("sm")]:{visibility:"visible",width:"auto",height:"auto"}}},"& .MuiDataGrid-colCell-dropZone .MuiDataGrid-colCell-draggable":{cursor:"move"},"& .MuiDataGrid-colCell-draggable":{display:"flex",width:"100%",justifyContent:"inherit"},"& .MuiDataGrid-colCell-dragging":{background:e.palette.background.paper,padding:"0 12px",borderRadius:e.shape.borderRadius,opacity:e.palette.action.disabledOpacity}})};if("dark"===wn(e.palette)){const e="#202022",t="#585859",n="#838384";r.root=Object.assign(Object.assign({},r.root),{scrollbarColor:`${t} ${e}`,"& *::-webkit-scrollbar":{backgroundColor:e},"& *::-webkit-scrollbar-thumb":{borderRadius:8,backgroundColor:t,minHeight:24,border:"3px solid "+e},"& *::-webkit-scrollbar-thumb:focus":{backgroundColor:n},"& *::-webkit-scrollbar-thumb:active":{backgroundColor:n},"& *::-webkit-scrollbar-thumb:hover":{backgroundColor:n},"& *::-webkit-scrollbar-corner":{backgroundColor:e}})}return r}),{name:"MuiDataGrid"}),na=e=>e.columns,la=e=>e.columns.all,oa=e=>e.columns.lookup,aa=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(la,oa,((e,t)=>e.map((e=>t[e])))),ia=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(aa,(e=>e.filter((e=>null!=e.field&&!e.hide)))),sa=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(ia,(e=>{const t=[];return{totalWidth:e.reduce(((e,r)=>(t.push(e),e+r.width)),0),positions:t}})),ca=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(aa,(e=>e.filter((e=>e.filterable)))),ua=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(ca,(e=>e.map((e=>e.field)))),da=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(ia,(e=>e.length)),pa=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(sa,(e=>e.totalWidth)),ma=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const{className:r}=e,n=gl(e,["className"]),l=ra(),o=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),a=ea(o,da),[i]=Qo(o);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({ref:t,className:Kn(l.root,r,{"MuiDataGrid-autoHeight":i.options.autoHeight}),role:"grid","aria-colcount":a,"aria-rowcount":i.rows.totalRowCount,"aria-label":o.current.getLocaleText("rootGridLabel"),"aria-multiselectable":!i.options.disableMultipleSelection},n))})),fa=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const{className:r,style:n}=e,l=gl(e,["className","style"]),o=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),a=ea(o,ho);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({ref:t,className:Kn("MuiDataGrid-columnsContainer",r)},l,{style:Object.assign({minHeight:a,maxHeight:a,lineHeight:a+"px"},n)}))})),ga=e=>e.containerSizes,ba=e=>e.viewportSizes,ha=e=>e.scrollBar,Ca=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(ga,(e=>null==e?null:e.dataContainerSizes)),va=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(ga,(e=>null==e?0:e.dataContainerSizes.height));function wa(e){const{className:t}=e,r=gl(e,["className"]),n=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),l=ea(n,Ca),o=ea(n,ha),a={minWidth:null==l?void 0:l.width};return o.hasScrollY&&(a.minHeight=null==l?void 0:l.height),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({className:Kn("MuiDataGrid-dataContainer","data-container",t),style:a},r))}const Oa=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const{className:r}=e,n=gl(e,["className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({ref:t,className:Kn("MuiDataGrid-footer",r)},n))})),ya=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const{className:r,style:n}=e,l=gl(e,["className","style"]),o=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),a=ea(o,ho);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({ref:t,className:Kn("MuiDataGrid-overlay",r),style:Object.assign({top:a},n)},l))})),Ea=e=>e.options,Sa=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const{className:r,size:n}=e,l=gl(e,["className","size"]),o=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),{autoHeight:a}=ea(o,Ea),i=ea(o,ho),c=ea(o,bo),u=ea(o,va);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{o.current.resize()}),[o]);const d=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(!a)return n.height;return i+(u<c?2*c:u)}),[a,u,i,c,n.height]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"MuiDataGrid-windowContainer",style:{width:n.width,height:d}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({ref:t,className:Kn("MuiDataGrid-window",r)},l,{style:{top:i,overflowY:a?"hidden":"auto"}})))})),xa=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const{className:r,children:n}=e,l=gl(e,["className","children"]);return n?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({ref:t,className:Kn("MuiDataGrid-toolbar",r)},l),n):null})),Ma=e=>e.focus,Ia=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Ma,(e=>e.cell)),ka=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Ma,(e=>e.columnHeader)),Da=e=>e.tabIndex,Pa=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Da,(e=>e.cell)),Ra=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Da,(e=>e.columnHeader)),Fa=react__WEBPACK_IMPORTED_MODULE_0__.memo((e=>{const{getValue:t,field:r,id:n}=e,l=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),o=ea(l,Pa),a=null!==o&&o.rowIndex===e.rowIndex&&o.colIndex===e.colIndex?0:-1;react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{0===a&&e.element&&(e.element.tabIndex=-1)}),[e.element,a]);const i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{Yn(t.key)&&t.stopPropagation(),dl(t.key)&&!t.shiftKey&&l.current.publishEvent("cellNavigationKeyDown",e,t)}),[l,e]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__.default,{tabIndex:a,checked:!!t(r),onChange:(e,t)=>{l.current.selectRow(n,t,!0)},className:"MuiDataGrid-checkboxInput",color:"primary",inputProps:{"aria-label":"Select Row checkbox"},onKeyDown:i})})),La=e=>e.rows,ja=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(La,(e=>e&&e.totalRowCount)),za=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(La,(e=>e&&e.idRowsLookup)),Ta=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(La,(e=>e.allRows)),Aa=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(La,(e=>e.allRows.map((t=>e.idRowsLookup[t])))),_a=e=>e.sorting,Ga=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_a,Ta,((e,t)=>e.sortedRows.length?e.sortedRows:t)),Ha=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Ga,za,((e,t)=>{const r=new Map;return e.forEach((e=>{r.set(e,t[e])})),r})),Na=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_a,(e=>e.sortModel)),Va=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Na,(e=>e.reduce(((t,r,n)=>(t[r.field]={sortDirection:r.sort,sortIndex:e.length>1?n+1:void 0},t)),{}))),Ba=e=>e.visibleRows,$a=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Ba,Ha,((e,t)=>{const r=new Map;return t.forEach(((t,n)=>{!1!==e.visibleRowsLookup[n]&&r.set(n,t)})),r})),Wa=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)($a,(e=>[...e.entries()])),Ua=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)($a,(e=>[...e.keys()])),Ka=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Ba,ja,((e,t)=>null==e.visibleRows?t:e.visibleRows.length)),Za=e=>e.filter,Xa=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Za,(e=>{var t;return null===(t=e.items)||void 0===t?void 0:t.filter((e=>{var t;return null!=e.value&&""!==(null===(t=e.value)||void 0===t?void 0:t.toString())}))})),qa=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Xa,(e=>e.length)),Ya=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Xa,(e=>e.reduce(((e,t)=>(e[t.columnField]?e[t.columnField].push(t):e[t.columnField]=[t],e)),{}))),Ja=e=>e.selection,Qa=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Ja,(e=>Object.keys(e).length)),ei=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Ja,za,((e,t)=>new Map(Object.values(e).map((e=>[e,t[e]]))))),ti=e=>{const t=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),r=ea(t,Ua),n=ea(t,Ra),l=ea(t,Qa),o=ea(t,ja),[a,i]=react__WEBPACK_IMPORTED_MODULE_0__.useState(l>0&&l!==o),[c,u]=react__WEBPACK_IMPORTED_MODULE_0__.useState(l===o||a);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const e=l>0&&l!==o;u(o>0&&l===o||a),i(e)}),[a,o,l]);const d=null!==n&&n.colIndex===e.colIndex?0:-1;react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{0===d&&e.element&&(e.element.tabIndex=-1)}),[e.element,d]);const p=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((r=>{Yn(r.key)&&r.stopPropagation(),dl(r.key)&&!r.shiftKey&&t.current.publishEvent("columnHeaderNavigationKeydown",e,r)}),[t,e]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__.default,{indeterminate:a,checked:c,onChange:(e,n)=>{u(n),t.current.selectRows(r,n)},className:"MuiDataGrid-checkboxInput",color:"primary",inputProps:{"aria-label":"Select All Rows checkbox"},tabIndex:d,onKeyDown:p})},ri=Object.assign(Object.assign({},Yl),{field:"__check__",type:"checkboxSelection",width:48,resizable:!0,sortable:!1,filterable:!1,disableClickEventBubbling:!0,disableColumnMenu:!0,valueGetter:e=>void 0!==e.api.getState().selection[e.id],renderHeader:e=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ti,Object.assign({},e)),renderCell:e=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Fa,Object.assign({},e)),cellClassName:"MuiDataGrid-cellCheckbox",headerClassName:"MuiDataGrid-colCellCheckbox"}),ni=(e,t)=>t?e[t]:e.__default__,li="string",oi="number",ai="date",ii="dateTime",si="boolean";function ci(e,t){const r="asc"===t?e.ColumnSortedAscendingIcon:e.ColumnSortedDescendingIcon;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(r,{className:"MuiDataGrid-sortIcon"})}const ui=react__WEBPACK_IMPORTED_MODULE_0__.memo((function(e){const{direction:t,index:r,hide:n}=e,l=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co);return n||null==t?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"MuiDataGrid-iconButtonContainer"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,null!=r&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__.default,{badgeContent:r,color:"default"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default,{tabIndex:-1,"aria-label":l.current.getLocaleText("columnHeaderSortIconLabel"),title:l.current.getLocaleText("columnHeaderSortIconLabel"),size:"small"},ci(l.current.components,t))),null==r&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default,{tabIndex:-1,"aria-label":l.current.getLocaleText("columnHeaderSortIconLabel"),title:l.current.getLocaleText("columnHeaderSortIconLabel"),size:"small"},ci(l.current.components,t))))})),di=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const{className:r}=e,n=gl(e,["className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({ref:t,className:Kn("MuiDataGrid-colCellTitle",r)},n))}));function pi(e){const{label:t,description:r,columnWidth:n}=e,l=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[o,a]=react__WEBPACK_IMPORTED_MODULE_0__.useState("");return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(!r&&l&&l.current){const e=Rn(l.current);a(e?t:"")}}),[l,n,r,t]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_11__.default,{title:r||o},react__WEBPACK_IMPORTED_MODULE_0__.createElement(di,{ref:l},t))}const mi=react__WEBPACK_IMPORTED_MODULE_0__.memo((function(e){const{resizable:t,resizing:r,height:n}=e,l=gl(e,["resizable","resizing","height"]),o=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),{showColumnRightBorder:a}=ea(o,Ea),i=o.current.components.ColumnResizeIcon,c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{e.preventDefault(),e.stopPropagation()}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({className:Kn("MuiDataGrid-columnSeparator",{"MuiDataGrid-columnSeparatorResizable":t,"Mui-resizing":r}),style:{minHeight:n,opacity:a?0:1}},l,{onClick:c}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(i,{className:"MuiDataGrid-iconSeparator"}))})),fi=e=>e.columnMenu;function gi(e){const{column:t}=e,r=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),l=ea(r,fi),o=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.unstable_useId)(),a=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.unstable_useId)(),i=r.current.components.ColumnMenuIcon,c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{e.preventDefault(),e.stopPropagation(),r.current.toggleColumnMenu(t.field,a,o)}),[r,t.field,a,o]),u=l.open&&l.field===t.field;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:Kn("MuiDataGrid-menuIcon",{"MuiDataGrid-menuOpen":u})},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default,{tabIndex:-1,className:"MuiDataGrid-menuIconButton","aria-label":r.current.getLocaleText("columnMenuLabel"),title:r.current.getLocaleText("columnMenuLabel"),size:"small",onClick:c,"aria-expanded":u?"true":void 0,"aria-haspopup":"true","aria-controls":a,id:o},react__WEBPACK_IMPORTED_MODULE_0__.createElement(i,{fontSize:"small"})))}const bi=e=>e.preferencePanel,hi=e=>e.viewportSizes;var Ci;function vi(e){const{counter:t}=e,r=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),n=ea(r,Ea),l=ea(r,bi),o=r.current.components.ColumnFilteredIcon,a=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{e.preventDefault(),e.stopPropagation();const{open:t,openedPanelValue:n}=l;t&&n===Ci.filters?r.current.hideFilterPanel():r.current.showFilterPanel()}),[r,l]);if(!t||n.disableColumnFilter)return null;const i=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default,{onClick:a,color:"default","aria-label":r.current.getLocaleText("columnHeaderFiltersLabel"),size:"small",tabIndex:-1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(o,{fontSize:"small"}));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_11__.default,{title:r.current.getLocaleText("columnHeaderFiltersTooltipActive")(t),enterDelay:1e3},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"MuiDataGrid-iconButtonContainer"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,t>1&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__.default,{badgeContent:t,color:"default"},i),1===t&&i)))}!function(e){e.filters="filters",e.columns="columns"}(Ci||(Ci={}));const wi=react__WEBPACK_IMPORTED_MODULE_0__.memo((({column:e,colIndex:t,isDragging:r,isResizing:n,sortDirection:l,sortIndex:o,options:a,filterItemsCounter:i,hasFocus:c,tabIndex:u})=>{const d=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),p=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),m=ea(d,ho),{disableColumnReorder:f,showColumnRightBorder:g,disableColumnResize:b,disableColumnMenu:h}=a,C=null!=l,v="number"===e.type;let w=null;e.renderHeader&&(w=e.renderHeader(d.current.getColumnHeaderParams(e.field)));const O=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>r=>d.current.publishEvent(t,d.current.getColumnHeaderParams(e.field),r)),[d,e.field]),y=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({onClick:O("columnHeaderClick"),onDoubleClick:O("columnHeaderDoubleClick"),onMouseOver:O("columnHeaderOver"),onMouseOut:O("columnHeaderOut"),onMouseEnter:O("columnHeaderEnter"),onMouseLeave:O("columnHeaderLeave"),onKeyDown:O("columnHeaderKeydown"),onFocus:O("columnHeaderFocus"),onBlur:O("columnHeaderBlur")})),[O]),E=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({onDragStart:O("columnHeaderDragStart"),onDragEnter:O("columnHeaderDragEnter"),onDragOver:O("columnHeaderDragOver"),onDragEnd:O("columnHeaderDragEnd")})),[O]),S=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({onMouseDown:O("columnSeparatorMouseDown")})),[O]),x=Kn("MuiDataGrid-colCell",e.headerClassName,"center"===e.headerAlign&&"MuiDataGrid-colCellCenter","right"===e.headerAlign&&"MuiDataGrid-colCellRight",{"MuiDataGrid-colCellSortable":e.sortable,"MuiDataGrid-colCellMoving":r,"MuiDataGrid-colCellSorted":C,"MuiDataGrid-colCellNumeric":v,"MuiDataGrid-withBorder":g}),M=e.width;let I;null!=l&&(I={"aria-sort":"asc"===l?"ascending":"descending"});const k=react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui,{direction:l,index:o,hide:e.hideSortIcons}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(vi,{counter:i})),D=react__WEBPACK_IMPORTED_MODULE_0__.createElement(gi,{column:e});return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{const e=d.current.getState().columnMenu;if(c&&!e.open){const e=p.current.querySelector('[tabindex="0"]');e?e.focus():p.current.focus()}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({ref:p,className:x,key:e.field,"data-field":e.field,style:{width:M,minWidth:M,maxWidth:M},role:"columnheader",tabIndex:u,"aria-colindex":t+1},I,y),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({className:"MuiDataGrid-colCell-draggable",draggable:!f},E),!h&&v&&!e.disableColumnMenu&&D,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"MuiDataGrid-colCellTitleContainer"},v&&k,w||react__WEBPACK_IMPORTED_MODULE_0__.createElement(pi,{label:e.headerName||e.field,description:e.description,columnWidth:M}),!v&&k),!v&&!h&&!e.disableColumnMenu&&D),react__WEBPACK_IMPORTED_MODULE_0__.createElement(mi,Object.assign({resizable:!b&&!!e.resizable,resizing:n,height:m},S)))})),Oi=e=>e.rendering,yi=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Oi,(e=>e.realScroll));function Ei(e,t,r,n){const l=Mo("useGridApiEventHandler");react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(r&&t)return e.current.subscribeEvent(t,r,n)}),[e,l,t,r,n])}const Si={isFirst:!0};function xi(e,t,r){Ei(e,t,r,Si)}const Mi=react__WEBPACK_IMPORTED_MODULE_0__.memo((function(e){const{scrollDirection:t}=e,r=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),n=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),l=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),[o,a]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),i=react__WEBPACK_IMPORTED_MODULE_0__.useRef({left:0,top:0}),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{i.current=e}),[]),u=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{let o;if("left"===t)o=e.clientX-r.current.getBoundingClientRect().right;else{if("right"!==t)throw new Error("wrong dir");o=Math.max(1,e.clientX-r.current.getBoundingClientRect().left)}o=1.5*(o-1)+1,clearTimeout(l.current),l.current=setTimeout((()=>{n.current.scroll({left:i.current.left+o,top:i.current.top})}))}),[t,n]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>()=>{clearTimeout(l.current)}),[]);const d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{a((e=>!e))}),[]);return Ei(n,"scrolling:rows",c),Ei(n,"columnHeaderDragStart",d),Ei(n,"columnHeaderDragEnd",d),o?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:r,className:Kn("MuiDataGrid-scrollArea","MuiDataGrid-scrollArea-"+t),onDragOver:u}):null})),Ii=e=>e.columnReorder,ki=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Ii,(e=>e.dragCol)),Di=e=>e.columnResize,Pi=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Di,(e=>e.resizingColumnField));function Ri(e){const{columns:t}=e,r=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),n=ea(r,Ea),l=ea(r,Va),o=ea(r,Ya),a=ea(r,ki),i=ea(r,Pi),c=ea(r,ka),u=ea(r,Oi).renderContext,d=ea(r,Ra),p=ea(r,Pa),m=e=>null==u?e:e+u.firstColIdx,f=t.map(((e,t)=>{const r=m(t),u=0===r,f=!(null===d&&null===p),g=null!==d&&d.colIndex===r||u&&!f?0:-1,b=null!==c&&c.colIndex===r;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(wi,Object.assign({key:e.field},l[e.field],{filterItemsCounter:o[e.field]&&o[e.field].length,options:n,isDragging:e.field===a,column:e,colIndex:m(t),isResizing:i===e.field,hasFocus:b,tabIndex:g}))}));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,f)}const Fi=e=>e.scrollBar,Li=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){var r;const n=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),l=ea(n,ia),o=ea(n,ga),a=ea(n,ho),i=ea(n,Oi).renderContext,{hasScrollX:c}=ea(n,Fi),u=Kn("MuiDataGrid-colCellWrapper",{scroll:c,"MuiDataGrid-colCell-dropZone":ea(n,ki)}),d=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>null==i?[]:l.slice(i.firstColIdx,i.lastColIdx+1)),[l,i]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Mi,{scrollDirection:"left"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:t,className:u,"aria-rowindex":1,role:"row",style:{minWidth:null===(r=null==o?void 0:o.totalSizes)||void 0===r?void 0:r.width}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(po,{width:null==i?void 0:i.leftEmptyWidth,height:a}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ri,{columns:d}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(po,{width:null==i?void 0:i.rightEmptyWidth,height:a})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Mi,{scrollDirection:"right"}))})),ji=e=>{const{onClick:t}=e,r=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),n=ea(r,Ea),l=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{t(e),r.current.showPreferences(Ci.columns)}),[r,t]);return n.disableColumnSelector?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__.default,{onClick:l},r.current.getLocaleText("columnMenuShowColumns"))},zi=e=>{const{column:t,onClick:r}=e,n=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),l=ea(n,Ea),o=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{r(e),n.current.showFilterPanel(null==t?void 0:t.field)}),[n,null==t?void 0:t.field,r]);return l.disableColumnFilter||!(null==t?void 0:t.filterable)?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__.default,{onClick:o},n.current.getLocaleText("columnMenuFilter"))},Ti=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((e=>({root:{zIndex:e.zIndex.modal,"& .MuiDataGrid-gridMenuList":{outline:0}}})),{name:"MuiDataGridMenu"}),Ai={"bottom-start":"top left","bottom-end":"top right"},_i=e=>{const{open:t,target:r,onClickAway:n,children:l,position:o}=e,a=gl(e,["open","target","onClickAway","children","position"]),i=react__WEBPACK_IMPORTED_MODULE_0__.useRef(r),c=react__WEBPACK_IMPORTED_MODULE_0__.useRef(t),u=Ti();return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{c.current&&i.current&&i.current.focus(),c.current=t,i.current=r}),[t,r]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_13__.default,Object.assign({className:u.root,open:t,anchorEl:r,transition:!0,placement:o},a),(({TransitionProps:e,placement:t})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_14__.default,{onClickAway:n},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_15__.default,Object.assign({},e,{style:{transformOrigin:Ai[t]}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__.default,null,l)))))},Gi=e=>e.columnMenu;function Hi({ContentComponent:e,contentComponentProps:t}){const r=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),n=ea(r,Gi),l=n.field?null==r?void 0:r.current.getColumnFromField(n.field):null,[o,a]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),i=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),c=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),u=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{null==r||r.current.hideColumnMenu()}),[r]),d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{i.current=setTimeout(u,50)}),[u]),p=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((({open:e,field:t})=>{if(t&&e){c.current=setTimeout((()=>clearTimeout(i.current)),0);const e=Gn(r.current.rootElementRef.current,t).querySelector(".MuiDataGrid-menuIconButton");a(e)}}),[r]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{p(n)}),[n,p]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>()=>{clearTimeout(i.current),clearTimeout(c.current)}),[]),o&&l?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_i,{placement:"bottom-"+("right"===l.align?"start":"end"),open:n.open,target:o,onClickAway:d},react__WEBPACK_IMPORTED_MODULE_0__.createElement(e,Object.assign({currentColumn:l,hideMenu:u,open:n.open,id:n.id,labelledby:n.labelledby},t))):null}const Ni=e=>{const{column:t,onClick:r}=e,n=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),l=ea(n,Ea),o=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),a=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{r(e),o.current=setTimeout((()=>{n.current.toggleColumn(null==t?void 0:t.field,!0)}),10)}),[n,null==t?void 0:t.field,r]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>()=>clearTimeout(o.current)),[]),l.disableColumnSelector?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__.default,{onClick:a},n.current.getLocaleText("columnMenuHideColumn"))},Vi=e=>{const{column:t,onClick:r}=e,n=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),l=ea(n,Na),o=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(!t)return null;const e=l.find((e=>e.field===t.field));return null==e?void 0:e.sort}),[t,l]),a=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{r(e);const l=e.currentTarget.getAttribute("data-value")||null;null==n||n.current.sortColumn(t,l)}),[n,t,r]);return t&&t.sortable?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__.default,{onClick:a,disabled:null==o},n.current.getLocaleText("columnMenuUnsort")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__.default,{onClick:a,"data-value":"asc",disabled:"asc"===o},n.current.getLocaleText("columnMenuSortAsc")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__.default,{onClick:a,"data-value":"desc",disabled:"desc"===o},n.current.getLocaleText("columnMenuSortDesc"))):null},Bi=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const{hideMenu:r,currentColumn:n,open:l,id:o,labelledby:a,className:i}=e,c=gl(e,["hideMenu","currentColumn","open","id","labelledby","className"]),u=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{qn(e.key)&&e.preventDefault(),ml(e.key)&&r()}),[r]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_17__.default,Object.assign({id:o,ref:t,className:Kn("MuiDataGrid-gridMenuList",i),"aria-labelledby":a,onKeyDown:u,autoFocus:l},c),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Vi,{onClick:r,column:n}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(zi,{onClick:r,column:n}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ni,{onClick:r,column:n}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ji,{onClick:r,column:n}))})),$i=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((()=>({root:{display:"flex",flexDirection:"column",overflow:"auto",flex:"1 1",maxHeight:400}})),{name:"MuiDataGridPanelContent"});function Wi(e){const t=$i(),{className:r}=e,n=gl(e,["className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({className:Kn(t.root,r)},n))}const Ui=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((()=>({root:{padding:4,display:"flex",justifyContent:"space-between"}})),{name:"MuiDataGridPanelFooter"});function Ki(e){const t=Ui(),{className:r}=e,n=gl(e,["className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({className:Kn(t.root,r)},n))}const Zi=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((e=>({root:{padding:e.spacing(1)}})),{name:"MuiDataGridPanelHeader"});function Xi(e){const t=Zi(),{className:r}=e,n=gl(e,["className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({className:Kn(t.root,r)},n))}const qi=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((()=>({root:{display:"flex",flexDirection:"column",flex:1,"&:focus":{outline:0}}})),{name:"MuiDataGridPanelWrapper"}),Yi=()=>!0;function Ji(e){const t=qi(),{className:r}=e,n=gl(e,["className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_18__.default,{open:!0,disableEnforceFocus:!0,isEnabled:Yi,getDoc:()=>document},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({tabIndex:-1,className:Kn(t.root,r)},n)))}const Qi=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)({container:{padding:"8px 0px 8px 8px"},column:{display:"flex",justifyContent:"space-between",padding:"1px 8px 1px 7px"},switch:{marginRight:4},dragIcon:{justifyContent:"flex-end"}},{name:"MuiDataGridColumnsPanel"});function es(){const e=Qi(),t=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),r=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),n=ea(t,aa),{disableColumnReorder:l}=ea(t,Ea),[o,a]=react__WEBPACK_IMPORTED_MODULE_0__.useState(""),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{const{name:r}=e.target;t.current.toggleColumn(r)}),[t]),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{t.current.updateColumns(n.map((t=>(t.hide=e,t))))}),[t,n]),u=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>c(!1)),[c]),d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>c(!0)),[c]),p=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{a(e.target.value)}),[]),m=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>o?n.filter((e=>e.field.toLowerCase().indexOf(o.toLowerCase())>-1||e.headerName&&e.headerName.toLowerCase().indexOf(o.toLowerCase())>-1)):n),[n,o]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{r.current.focus()}),[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ji,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Xi,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default,{label:t.current.getLocaleText("columnsPanelTextFieldLabel"),placeholder:t.current.getLocaleText("columnsPanelTextFieldPlaceholder"),inputRef:r,value:o,onChange:p,variant:"standard",fullWidth:!0})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wi,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:e.container},m.map((r=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:r.field,className:e.column},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_19__.default,{control:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_20__.default,{className:e.switch,checked:!r.hide,onClick:i,name:r.field,color:"primary",size:"small"}),label:r.headerName||r.field}),!l&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default,{draggable:!0,className:e.dragIcon,"aria-label":t.current.getLocaleText("columnsPanelDragIconLabel"),title:t.current.getLocaleText("columnsPanelDragIconLabel"),size:"small",disabled:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(jl,null))))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ki,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__.default,{onClick:d,color:"primary"},t.current.getLocaleText("columnsPanelHideAllButton")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__.default,{onClick:u,color:"primary"},t.current.getLocaleText("columnsPanelShowAllButton"))))}const ts=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((e=>({root:{zIndex:e.zIndex.modal},paper:{backgroundColor:e.palette.background.paper,minWidth:300,maxHeight:450,display:"flex"}})),{name:"MuiDataGridPanel"}),rs=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){var r,n;const{children:l,open:o}=e,a=gl(e,["children","open"]),i=ts(),c=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),u=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{c.current.hidePreferences()}),[c]),d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{Zn(e.key)&&c.current.hidePreferences()}),[c]);let p;return c.current&&(null===(r=c.current.columnHeadersElementRef)||void 0===r?void 0:r.current)&&(p=null===(n=null==c?void 0:c.current.columnHeadersElementRef)||void 0===n?void 0:n.current),p?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_13__.default,Object.assign({ref:t,placement:"bottom-start",className:i.root,open:o,anchorEl:p,modifiers:On()?[{name:"flip",enabled:!1}]:{flip:{enabled:!1}}},a),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_14__.default,{onClickAway:u},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__.default,{className:i.paper,elevation:8,onKeyDown:d},l))):null})),ns=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){var r,n,l;const o=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),a=ea(o,aa),i=ea(o,Ea),c=ea(o,bi),u=c.openedPanelValue===Ci.columns,d=!c.openedPanelValue||!u,p=o.current.components.ColumnsPanel,m=o.current.components.FilterPanel,f=o.current.components.Panel;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(f,Object.assign({ref:t,open:a.length>0&&c.open},null===(r=null==o?void 0:o.current.componentsProps)||void 0===r?void 0:r.panel,e),!i.disableColumnSelector&&u&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(p,Object.assign({},null===(n=null==o?void 0:o.current.componentsProps)||void 0===n?void 0:n.columnsPanel)),!i.disableColumnFilter&&d&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(m,Object.assign({},null===(l=null==o?void 0:o.current.componentsProps)||void 0===l?void 0:l.filterPanel)))})),ls=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((()=>({root:{display:"flex",justifyContent:"space-around",padding:8},linkOperatorSelect:{width:60},columnSelect:{width:150},operatorSelect:{width:120},filterValueInput:{width:190},closeIcon:{flexShrink:0,justifyContent:"flex-end",marginRight:6,marginBottom:2}})),{name:"MuiDataGridFilterForm"});function os(e){var t;const{item:n,hasMultipleFilters:l,deleteFilter:o,applyFilterChanges:a,multiFilterOperator:i,showMultiFilterOperators:c,disableMultiFilterOperator:u,applyMultiFilterOperatorChanges:d}=e,p=ls(),m=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),f=ea(m,ca),[g,b]=react__WEBPACK_IMPORTED_MODULE_0__.useState((()=>n.columnField?m.current.getColumnFromField(n.columnField):null)),[h,C]=react__WEBPACK_IMPORTED_MODULE_0__.useState((()=>{var e;return n.operatorValue&&g&&(null===(e=g.filterOperators)||void 0===e?void 0:e.find((e=>e.value===n.operatorValue)))||null})),v=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{const t=e.target.value,r=m.current.getColumnFromField(t),l=r.filterOperators[0];C(l),b(r),a(Object.assign(Object.assign({},n),{value:void 0,columnField:t,operatorValue:l.value}))}),[m,a,n]),w=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{var t;const r=e.target.value;a(Object.assign(Object.assign({},n),{operatorValue:r}));const l=(null===(t=g.filterOperators)||void 0===t?void 0:t.find((e=>e.value===r)))||null;C(l)}),[a,g,n]),y=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{const t=e.target.value===zo.And.toString()?zo.And:zo.Or;d(t)}),[d]),E=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{o(n)}),[o,n]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:p.root},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_22__.default,{variant:"standard",className:p.closeIcon},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default,{"aria-label":m.current.getLocaleText("filterPanelDeleteIconLabel"),title:m.current.getLocaleText("filterPanelDeleteIconLabel"),onClick:E,size:"small"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Rl,{fontSize:"small"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_22__.default,{className:p.linkOperatorSelect,style:{display:l?"block":"none",visibility:c?"visible":"hidden"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_23__.default,{id:"columns-filter-operator-select-label"},m.current.getLocaleText("filterPanelOperators")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_24__.default,{labelId:"columns-filter-operator-select-label",id:"columns-filter-operator-select",value:i,onChange:y,disabled:!!u,native:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:zo.And.toString(),value:zo.And.toString()},m.current.getLocaleText("filterPanelOperatorAnd")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:zo.Or.toString(),value:zo.Or.toString()},m.current.getLocaleText("filterPanelOperatorOr")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_22__.default,{variant:"standard",className:p.columnSelect},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_23__.default,{id:"columns-filter-select-label"},m.current.getLocaleText("filterPanelColumns")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_24__.default,{labelId:"columns-filter-select-label",id:"columns-filter-select",value:n.columnField||"",onChange:v,native:!0},f.map((e=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:e.field,value:e.field},e.headerName||e.field))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_22__.default,{variant:"standard",className:p.operatorSelect},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_23__.default,{id:"columns-operators-select-label"},m.current.getLocaleText("filterPanelOperators")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_24__.default,{labelId:"columns-operators-select-label",id:"columns-operators-select",value:n.operatorValue,onChange:w,native:!0},null===(t=null==g?void 0:g.filterOperators)||void 0===t?void 0:t.map((e=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:e.value,value:e.value},e.label||m.current.getLocaleText("filterOperator"+(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.capitalize)(e.value))))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_22__.default,{variant:"standard",className:p.filterValueInput},g&&h&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(h.InputComponent,Object.assign({apiRef:m,item:n,applyValue:a},h.InputComponentProps))))}function as(){const e=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),[t]=Qo(e),{disableMultipleColumnsFiltering:r}=ea(e,Ea),n=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>t.filter.items.length>1),[t.filter.items.length]),l=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{e.current.upsertFilter(t)}),[e]),o=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{e.current.applyFilterLinkOperator(t)}),[e]),a=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{e.current.upsertFilter({})}),[e]),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{e.current.deleteFilter(t)}),[e]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{0===t.filter.items.length&&a()}),[a,t.filter.items.length]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ji,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wi,null,t.filter.items.map(((e,r)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(os,{key:e.id,item:e,applyFilterChanges:l,deleteFilter:i,hasMultipleFilters:n,showMultiFilterOperators:r>0,multiFilterOperator:t.filter.linkOperator,disableMultiFilterOperator:1!==r,applyMultiFilterOperatorChanges:o})))),!r&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ki,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__.default,{onClick:a,startIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(Fl,null),color:"primary"},e.current.getLocaleText("filterPanelAddFilter"))))}const is=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const r=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),n=ea(r,Ea),l=r.current.components.ColumnSelectorIcon,{open:o,openedPanelValue:a}=ea(r,bi),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{o&&a===Ci.columns?r.current.hidePreferences():r.current.showPreferences(Ci.columns)}),[r,o,a]);return n.disableColumnSelector?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__.default,Object.assign({ref:t,onClick:i,size:"small",color:"primary","aria-label":r.current.getLocaleText("toolbarColumnsLabel"),startIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(l,null)},e),r.current.getLocaleText("toolbarColumns"))})),ss=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const r=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),l=ea(r,Ea),o=ea(r,go),a=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.unstable_useId)(),i=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.unstable_useId)(),[c,u]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),d=r.current.components.DensityCompactIcon,p=r.current.components.DensityStandardIcon,m=r.current.components.DensityComfortableIcon,f=[{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(d,null),label:r.current.getLocaleText("toolbarDensityCompact"),value:Po.Compact},{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(p,null),label:r.current.getLocaleText("toolbarDensityStandard"),value:Po.Standard},{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(m,null),label:r.current.getLocaleText("toolbarDensityComfortable"),value:Po.Comfortable}],g=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{switch(o){case Po.Compact:return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d,null);case Po.Comfortable:return react__WEBPACK_IMPORTED_MODULE_0__.createElement(m,null);default:return react__WEBPACK_IMPORTED_MODULE_0__.createElement(p,null)}}),[o,d,m,p]),b=()=>u(null);if(l.disableDensitySelector)return null;const h=f.map(((e,t)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__.default,{key:t,onClick:()=>{return t=e.value,r.current.setDensity(t),void u(null);var t},selected:e.value===o},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_25__.default,null,e.icon),e.label)));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__.default,Object.assign({ref:t,color:"primary",size:"small",startIcon:g(),onClick:e=>u(e.currentTarget),"aria-label":r.current.getLocaleText("toolbarDensityLabel"),"aria-expanded":c?"true":void 0,"aria-haspopup":"menu","aria-labelledby":i,id:a},e),r.current.getLocaleText("toolbarDensity")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_i,{open:Boolean(c),target:c,onClickAway:b,position:"bottom-start"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_17__.default,{id:i,className:"MuiDataGrid-gridMenuList","aria-labelledby":a,onKeyDown:e=>{qn(e.key)&&e.preventDefault(),ml(e.key)&&b()},autoFocusItem:Boolean(c)},h)))})),cs=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((e=>({list:{margin:e.spacing(1,1,.5),padding:e.spacing(0,1)}})),{name:"MuiDataGridFilterToolbarButton"}),us=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const n=cs(),l=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),o=ea(l,Ea),a=ea(l,qa),i=ea(l,Xa),c=ea(l,oa),u=ea(l,bi),d=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(u.open)return l.current.getLocaleText("toolbarFiltersTooltipHide");if(0===a)return l.current.getLocaleText("toolbarFiltersTooltipShow");return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,l.current.getLocaleText("toolbarFiltersTooltipActive")(a),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:n.list},i.map((e=>Object.assign({},c[e.columnField]&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:e.id},`${c[e.columnField].headerName||e.columnField}\n                  ${(e=>c[e.columnField].filterOperators.find((t=>t.value===e.operatorValue)).label||l.current.getLocaleText("filterOperator"+(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.capitalize)(e.operatorValue)).toString())(e)}\n                  ${e.value}`))))))}),[l,u.open,a,i,c,n]),p=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const{open:e,openedPanelValue:t}=u;e&&t===Ci.filters?l.current.hideFilterPanel():l.current.showFilterPanel()}),[l,u]);if(o.disableColumnFilter)return null;const m=l.current.components.OpenFilterButtonIcon;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_11__.default,{title:d,enterDelay:1e3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__.default,Object.assign({ref:t},e,{onClick:p,size:"small",color:"primary","aria-label":l.current.getLocaleText("toolbarFiltersLabel"),startIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__.default,{badgeContent:a,color:"primary"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(m,null))}),l.current.getLocaleText("toolbarFilters")))})),ds=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const r=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),l=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.unstable_useId)(),o=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.unstable_useId)(),[a,i]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),c=r.current.components.ExportIcon,u=[{label:r.current.getLocaleText("toolbarExportCSV"),format:"csv"}],d=()=>i(null),p=u.map(((e,t)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__.default,{key:t,onClick:()=>("csv"===e.format&&r.current.exportDataAsCsv(),void i(null))},e.label)));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_21__.default,Object.assign({ref:t,color:"primary",size:"small",startIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(c,null),onClick:e=>i(e.currentTarget),"aria-expanded":a?"true":void 0,"aria-haspopup":"menu","aria-labelledby":o,id:l},e),r.current.getLocaleText("toolbarExport")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_i,{open:Boolean(a),target:a,onClickAway:d,position:"bottom-start"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_17__.default,{id:o,className:"MuiDataGrid-gridMenuList","aria-labelledby":l,onKeyDown:e=>{qn(e.key)&&e.preventDefault(),ml(e.key)&&d()},autoFocusItem:Boolean(a)},p)))})),ps=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(co),n=ea(r,Ea);return n.disableColumnFilter&&n.disableColumnSelector&&n.disableDensitySelector?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(xa,Object.assign({ref:t},e),react__WEBPACK_IMPORTED_MODULE_0__.createElement(is,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(us,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ss,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ds,null))}));function ms(e,t){var r=function(e){var t=e.__resizeTriggers__,r=t.firstElementChild,n=t.lastElementChild,l=r.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,l.style.width=r.offsetWidth+1+"px",l.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight},n=function(e){if(!(e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var n=this;r(this),this.__resizeRAF__&&t.cancelAnimationFrame(this.__resizeRAF__),this.__resizeRAF__=t.requestAnimationFrame((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(n)&&(n.__resizeLast__.width=n.offsetWidth,n.__resizeLast__.height=n.offsetHeight,n.__resizeListeners__.forEach((function(t){t.call(n,e)})))}))}},l=!1,o="",a="animationstart",i="Webkit Moz O ms".split(" "),s="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),c=document.createElement("fakeelement");if(void 0!==c.style.animationName&&(l=!0),!1===l)for(var u=0;u<i.length;u++)if(void 0!==c.style[i[u]+"AnimationName"]){o="-"+i[u].toLowerCase()+"-",a=s[u],l=!0;break}var d="resizeanim",p="@"+o+"keyframes "+"resizeanim { from { opacity: 0; } to { opacity: 0; } } ",m=o+"animation: 1ms "+"resizeanim; ";return{addResizeListener:function(l,o){if(!l.__resizeTriggers__){var i=l.ownerDocument,s=t.getComputedStyle(l);s&&"static"==s.position&&(l.style.position="relative"),function(t){if(!t.getElementById("muiDetectElementResize")){var r=(p||"")+".Mui-resizeTriggers { "+(m||"")+'visibility: hidden; opacity: 0; } .Mui-resizeTriggers, .Mui-resizeTriggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .Mui-resizeTriggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',n=t.head||t.getElementsByTagName("head")[0],l=t.createElement("style");l.id="muiDetectElementResize",l.type="text/css",null!=e&&l.setAttribute("nonce",e),l.styleSheet?l.styleSheet.cssText=r:l.appendChild(t.createTextNode(r)),n.appendChild(l)}}(i),l.__resizeLast__={},l.__resizeListeners__=[],(l.__resizeTriggers__=i.createElement("div")).className="Mui-resizeTriggers",l.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',l.appendChild(l.__resizeTriggers__),r(l),l.addEventListener("scroll",n,!0),a&&(l.__resizeTriggers__.__animationListener__=function(e){e.animationName==d&&r(l)},l.__resizeTriggers__.addEventListener(a,l.__resizeTriggers__.__animationListener__))}l.__resizeListeners__.push(o)},removeResizeListener:function(e,t){if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",n,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(a,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(e){}}}}}const fs=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const{children:r,defaultHeight:n=null,defaultWidth:a=null,disableHeight:i=!1,disableWidth:c=!1,nonce:u,onResize:d,style:p}=e,m=gl(e,["children","defaultHeight","defaultWidth","disableHeight","disableWidth","nonce","onResize","style"]),[f,g]=react__WEBPACK_IMPORTED_MODULE_0__.useState({height:n,width:a}),b=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),h=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),C=lo((()=>{if(h.current){const e=h.current.offsetHeight||0,t=h.current.offsetWidth||0,r=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.ownerWindow)(h.current).getComputedStyle(h.current),n=parseInt(r.paddingLeft,10)||0,o=parseInt(r.paddingRight,10)||0,a=e-(parseInt(r.paddingTop,10)||0)-(parseInt(r.paddingBottom,10)||0),s=t-n-o;(!i&&f.height!==a||!c&&f.width!==s)&&(g({height:a,width:s}),d&&d({height:a,width:s}))}}));oo((()=>{var e;if(h.current=b.current.parentElement,!h)return;const t=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.ownerWindow)(null!==(e=h.current)&&void 0!==e?e:void 0),r=ms(u,t);return r.addResizeListener(h.current,C),C(),()=>{r.removeResizeListener(h.current,C)}}),[u,C]);const v={overflow:"visible"},w={};i||(v.height=0,w.height=f.height),c||(v.width=0,w.width=f.width);const O=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.useForkRef)(b,t);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({ref:O,style:Object.assign(Object.assign({},v),p)},m),null===f.height&&null===f.width?null:r(w))})),gs=e=>e.pagination,bs=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const{className:r,rowCount:n}=e,l=gl(e,["className","rowCount"]),o=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co);return 0===n?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({ref:t,className:Kn("MuiDataGrid-rowCount",r)},l),`${o.current.getLocaleText("footerTotalRows")} ${n.toLocaleString()}`)})),hs=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const{className:r,selectedRowCount:n}=e,l=gl(e,["className","selectedRowCount"]),o=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co).current.getLocaleText("footerRowSelected")(n);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({ref:t,className:Kn("MuiDataGrid-selectedRowCount",r)},l),o)})),Cs=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){var r;const n=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),l=ea(n,ja),o=ea(n,Ea),a=ea(n,Qa),i=ea(n,gs),c=!o.hideFooterSelectedRowCount&&a>0?react__WEBPACK_IMPORTED_MODULE_0__.createElement(hs,{selectedRowCount:a}):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null),u=o.hideFooterRowCount||o.pagination?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(bs,{rowCount:l}),d=!!o.pagination&&null!=i.pageSize&&!o.hideFooterPagination&&(null==n?void 0:n.current.components.Pagination),p=d&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(d,Object.assign({},null===(r=null==n?void 0:n.current.componentsProps)||void 0===r?void 0:r.pagination));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Oa,Object.assign({ref:t},e),c,u,p)})),vs=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){var r,n;const l=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),o=null==l?void 0:l.current.components.PreferencesPanel,a=o&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(o,Object.assign({},null===(r=null==l?void 0:l.current.componentsProps)||void 0===r?void 0:r.preferencesPanel)),i=null==l?void 0:l.current.components.Toolbar,c=i&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(i,Object.assign({},null===(n=null==l?void 0:l.current.componentsProps)||void 0===n?void 0:n.toolbar));return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({ref:t},e),a,c)})),ws=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ya,Object.assign({ref:t},e),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_26__.default,null))})),Os=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const r=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co).current.getLocaleText("noRowsLabel");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ya,Object.assign({ref:t},e),r)})),ys=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((e=>({selectLabel:{display:"none",[e.breakpoints.up("md")]:{display:"block"}},caption:{"&[id]":{display:"none",[e.breakpoints.up("md")]:{display:"block"}}},input:{display:"none",[e.breakpoints.up("md")]:{display:"inline-flex"}}}))),Es=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const r=ys(),n=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),l=ea(n,gs),o=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>Math.floor(l.rowCount/(l.pageSize||1))),[l.rowCount,l.pageSize]),a=ea(n,Ea),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{const t=Number(e.target.value);n.current.setPageSize(t)}),[n]),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,t)=>{n.current.setPage(t)}),[n]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_27__.default,Object.assign({ref:t,classes:Object.assign(Object.assign({},On()?{selectLabel:r.selectLabel}:{caption:r.caption}),{input:r.input}),component:"div",count:l.rowCount,page:l.page<=o?l.page:o,rowsPerPageOptions:a.rowsPerPageOptions&&a.rowsPerPageOptions.indexOf(l.pageSize)>-1?a.rowsPerPageOptions:[],rowsPerPage:l.pageSize},On()?{onPageChange:c,onRowsPerPageChange:i}:{onChangePage:c,onChangeRowsPerPage:i},e))})),Ss=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({height:e,width:t,children:r},n)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:n,className:"MuiDataGrid-renderingZone",style:{maxHeight:e,width:t}},r)));Ss.displayName="GridRenderingZone";const xs=e=>{const{selected:t,id:r,className:n,rowIndex:l,children:o}=e,a=l+2,i=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),c=ea(i,bo),u=ea(i,Ea),d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>t=>{t.currentTarget.contains(t.target)&&i.current.publishEvent(e,null==i?void 0:i.current.getRowParams(r),t)}),[i,r]),p=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({onClick:d("rowClick"),onDoubleClick:d("rowDoubleClick"),onMouseOver:d("rowOver"),onMouseOut:d("rowOut"),onMouseEnter:d("rowEnter"),onMouseLeave:d("rowLeave")})),[d]),m={maxHeight:c,minHeight:c},f=Kn("MuiDataGrid-row",n,Cn(u.getRowClassName)&&u.getRowClassName(i.current.getRowParams(r)),{"Mui-selected":t});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({key:r,"data-id":r,"data-rowindex":l,role:"row",className:f,"aria-rowindex":a,"aria-selected":t,style:m},p),o)};xs.displayName="GridRow";const Ms=e=>{const{height:t,width:r,children:n}=e;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"MuiDataGrid-viewport",style:{minWidth:r,maxWidth:r,maxHeight:t}},n)},Is=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((e,t)=>{const r=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),n=ea(r,Ea),l=ea(r,ga),o=ea(r,ba),a=ea(r,ha),i=ea(r,ia),c=ea(r,Oi),u=ea(r,Ia),d=ea(r,Pa),p=ea(r,Ja),m=ea(r,Wa),f=ea(r,bo);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(wa,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ms,Object.assign({},o),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ss,Object.assign({ref:t},(null==l?void 0:l.renderingZone)||{width:0,height:0}),(()=>{if(null==c.renderContext)return null;return m.slice(c.renderContext.firstRowIdx,c.renderContext.lastRowIdx).map((([e,t],r)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(xs,{className:(c.renderContext.firstRowIdx+r)%2==0?"Mui-even":"Mui-odd",key:e,id:e,selected:void 0!==p[e],rowIndex:c.renderContext.firstRowIdx+r},react__WEBPACK_IMPORTED_MODULE_0__.createElement(po,{width:c.renderContext.leftEmptyWidth,height:f}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ta,{columns:i,row:t,id:e,firstColIdx:c.renderContext.firstColIdx,lastColIdx:c.renderContext.lastColIdx,hasScroll:{y:a.hasScrollY,x:a.hasScrollX},showCellRightBorder:!!n.showCellRightBorder,extendRowFullWidth:!n.disableExtendRowFullWidth,rowIndex:c.renderContext.firstRowIdx+r,cellFocus:u,cellTabIndex:d}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(po,{width:c.renderContext.rightEmptyWidth,height:f}))))})())))}));var ks;Is.displayName="GridViewport",function(e){e.NotFound="NotFound",e.Invalid="Invalid",e.Expired="Expired",e.Valid="Valid"}(ks||(ks={}));const Ds=e=>{const{licenseStatus:t}=e;return t===ks.Valid.toString()?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"absolute",pointerEvents:"none",color:"#8282829e",zIndex:1e5,width:"100%",textAlign:"center",bottom:"50%",right:0,letterSpacing:5,fontSize:24}}," ",function(e){switch(e){case ks.Expired.toString():return"Material-UI X License Expired";case ks.Invalid.toString():return"Material-UI X Invalid License";case ks.NotFound.toString():return"Material-UI X Unlicensed product";default:throw new Error("Material-UI: Unhandled license status.")}}(t)," ")};let Ps=!1;"undefined"!=typeof process&&void 0!==process.env.GRID_EXPERIMENTAL_ENABLED&&En()&&window.localStorage.getItem("GRID_EXPERIMENTAL_ENABLED")?Ps="true"===window.localStorage.getItem("GRID_EXPERIMENTAL_ENABLED"):"undefined"!=typeof process&&(Ps="true"===process.env.GRID_EXPERIMENTAL_ENABLED);const Rs=Ps,Fs=e=>{const t=Mo("useGridColumnMenu"),[r,n,l]=Qo(e),o=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((r,o,a)=>{t.debug("Opening Column Menu"),n((e=>Object.assign(Object.assign({},e),{columnMenu:{open:!0,field:r,id:o,labelledby:a}}))),e.current.hidePreferences(),l()}),[e,l,t,n]),a=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{t.debug("Hiding Column Menu"),n((e=>Object.assign(Object.assign({},e),{columnMenu:Object.assign(Object.assign({},e.columnMenu),{open:!1,id:void 0,labelledby:void 0})}))),l()}),[l,t,n]),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,n,l)=>{t.debug("Toggle Column Menu"),r.columnMenu.open&&r.columnMenu.field===e?a():o(e,n,l)}),[t,o,a,r]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{r.isScrolling&&a()}),[r.isScrolling,a]),Io(e,{showColumnMenu:o,hideColumnMenu:a,toggleColumnMenu:i},"ColumnMenuApi")},Ls=(e,t)=>e.x<=t.x?"right":"left",js=e=>{const t=Mo("useGridColumnReorder"),[,r,n]=Qo(e),l=ea(e,ki),o=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),a=react__WEBPACK_IMPORTED_MODULE_0__.useRef({x:0,y:0}),i=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),c=react__WEBPACK_IMPORTED_MODULE_0__.useRef();react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>()=>{clearTimeout(c.current)}),[]);const u=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((l,a)=>{t.debug("Start dragging col "+l.field),o.current=a.currentTarget,o.current.classList.add("MuiDataGrid-colCell-dragging"),r((e=>Object.assign(Object.assign({},e),{columnReorder:Object.assign(Object.assign({},e.columnReorder),{dragCol:l.field})}))),n(),c.current=setTimeout((()=>{o.current.classList.remove("MuiDataGrid-colCell-dragging")})),i.current=e.current.getColumnIndex(l.field,!1)}),[n,t,r,e]),d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,t)=>{t.preventDefault()}),[]),p=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((r,n)=>{t.debug("Dragging over col "+r.field),n.preventDefault();const o={x:n.clientX,y:n.clientY};if(r.field!==l&&(i=a.current,s=o,i.x!==s.x||i.y!==s.y)){const t=e.current.getColumnIndex(r.field,!1),n=e.current.getColumnIndex(l,!1);("right"===Ls(a.current,o)&&n<t||"left"===Ls(a.current,o)&&t<n)&&e.current.setColumnIndex(l,t),a.current=o}var i,s}),[e,l,t]),m=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((l,a)=>{t.debug("End dragging col"),a.preventDefault(),clearTimeout(c.current),o.current=null,"none"===a.dataTransfer.dropEffect&&(e.current.setColumnIndex(l.field,i.current),i.current=null),r((e=>Object.assign(Object.assign({},e),{columnReorder:Object.assign(Object.assign({},e.columnReorder),{dragCol:""})}))),n()}),[t,r,n,e]);Ei(e,"columnHeaderDragStart",u),Ei(e,"columnHeaderDragEnter",d),Ei(e,"columnHeaderDragOver",p),Ei(e,"columnHeaderDragEnd",m),Ei(e,"cellDragEnter",d),Ei(e,"cellDragOver",p),Ei(e,"cellDragEnd",m)};function zs(e,t){const r=e.filter((e=>!!e.flex&&!e.hide)).length;let n=0;r&&t&&e.forEach((e=>{e.hide||(e.flex?n+=e.flex:t-=e.width)}));let l=e;if(t>0&&r){const r=t/n;l=e.map((e=>Object.assign(Object.assign({},e),{width:e.flex?Math.floor(r*e.flex):e.width})))}return l}function Ts(e,t){return e.debug("Building columns lookup"),t.reduce(((e,t)=>(e[t.field]=t,e)),{})}function As(e,t){const r=Mo("useGridColumns"),[n,l,o]=Qo(t),a=ea(t,sa),i=ea(t,aa),c=ea(t,ia),u=ea(t,Ea),d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,n=!0)=>{r.debug("Updating columns state."),l((t=>Object.assign(Object.assign({},t),{columns:e}))),o(),t.current&&n&&t.current.publishEvent("columnsUpdated",e.all)}),[r,l,o,t]),p=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>t.current.state.columns.lookup[e]),[t]),m=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>i),[i]),f=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>c),[c]),g=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>a),[a]),b=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,t=!0)=>t?c.findIndex((t=>t.field===e)):i.findIndex((t=>t.field===e))),[i,c]),h=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{const t=b(e);return a.positions[t]}),[a.positions,b]),C=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{r.debug("updating GridColumns with new state");const t=((e,t)=>{const r={all:[...e.all],lookup:Object.assign({},e.lookup)};return t.forEach((e=>{null==r.lookup[e.field]?(r.lookup[e.field]=e,r.all.push(e.field)):r.lookup[e.field]=Object.assign(Object.assign({},r.lookup[e.field]),e)})),r})(n.columns,e);d(t,!1)}),[r,n.columns,d]),v=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>C([e])),[C]),w=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,t)=>{const r=p(e),n=Object.assign(Object.assign({},r),{hide:null==t?!r.hide:t});C([n]),o()}),[o,p,C]),O=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,l)=>{const o=n.columns.all.findIndex((t=>t===e));if(o===l)return;r.debug(`Moving column ${e} to index ${l}`);const a={field:e,element:t.current.getColumnHeaderElement(e),colDef:t.current.getColumnFromField(e),targetIndex:l,oldIndex:o,api:t.current};t.current.publishEvent("columnOrderChange",a);const i=[...n.columns.all];i.splice(l,0,i.splice(o,1)[0]),d(Object.assign(Object.assign({},n.columns),{all:i}))}),[t,n.columns,r,d]),y=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,n)=>{r.debug(`Updating column ${e} width to ${n}`);const l=t.current.getColumnFromField(e);t.current.updateColumn(Object.assign(Object.assign({},l),{width:n})),t.current.publishEvent("columnResizeCommited",{element:t.current.getColumnHeaderElement(e),colDef:l,api:t,width:n})}),[t,r]);Io(t,{getColumnFromField:p,getAllColumns:m,getColumnIndex:b,getColumnPosition:h,getVisibleColumns:f,getColumnsMeta:g,updateColumn:v,updateColumns:C,toggleColumn:w,setColumnIndex:O,setColumnWidth:y},"ColApi"),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(r.info("GridColumns have changed, new length "+e.length),e.length>0){const n=zs(function(e,t,r,n,l){n.debug("Hydrating GridColumns with default definitions");const o=eo(Ql(),t),a=e.map((e=>Object.assign(Object.assign({},ni(o,e.type)),e)));if(r){const e=Object.assign({},ri);return e.headerName=l("checkboxSelectionHeaderName"),[e,...a]}return a}(e,u.columnTypes,!!u.checkboxSelection,r,t.current.getLocaleText),t.current.getState().viewportSizes.width);d({all:n.map((e=>e.field)),lookup:Ts(r,n)})}else d({all:[],lookup:{}})}),[r,t,e,u.columnTypes,u.checkboxSelection,d]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{r.debug("GridColumns gridState.viewportSizes.width, changed "+n.viewportSizes.width);const e=zs(aa(t.current.getState()),n.viewportSizes.width);t.current.updateColumns(e)}),[t,n.viewportSizes.width,r])}const _s=(e,t,r,n)=>{const l=Jo(e),[o,a,i]=Qo(e),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{void 0===o[t]&&(o[t]=n),a((n=>{const l=Object.assign({},n);return l[t]=r(n[t],e),l})),i()}),[i,o,n,r,a,t]),u=react__WEBPACK_IMPORTED_MODULE_0__.useRef(c);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{u.current=c}),[c]);const d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>u.current(e)),[]);return{gridState:o,dispatch:d,gridApi:l}},Gs=(e,t)=>{const r=Mo("useGridFilter"),[n,l,o]=Qo(e),a=ea(e,ua),i=ea(e,Ea),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>({filterModel:e.current.getState("filter"),api:e.current,columns:e.current.getAllColumns(),rows:e.current.getRowModels(),visibleRows:e.current.getVisibleRowModels()})),[e]),u=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{r.debug("clearing filtered rows"),l((e=>Object.assign(Object.assign({},e),{visibleRows:{visibleRowsLookup:{}}})))}),[r,l]),d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,n=zo.And)=>{if(!t.columnField||!t.operatorValue||!t.value)return;r.debug(`Filtering column: ${t.columnField} ${t.operatorValue} ${t.value} `);const a=e.current.getColumnFromField(t.columnField);if(!a)return;const i=a.filterOperators;if(!(null==i?void 0:i.length))throw new Error(`Material-UI: No filter operators found for column '${a.field}'.`);const s=i.find((e=>e.value===t.operatorValue));if(!s)throw new Error(`Material-UI: No filter operator found for column '${a.field}' and operator value '${t.operatorValue}'.`);const c=s.getApplyFilterFn(t,a);l((r=>{const l=Object.assign({},r.visibleRows.visibleRowsLookup);return Ha(r).forEach(((r,o)=>{const a=e.current.getCellParams(o,t.columnField),i=c(a);null==l[o]?l[o]=i:l[o]=n===zo.And?l[o]&&i:l[o]||i})),Object.assign(Object.assign({},r),{visibleRows:{visibleRowsLookup:l,visibleRows:Object.entries(l).filter((([,e])=>e)).map((([e])=>e))}})})),o()}),[e,o,r,l]),p=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(i.filterMode===Ro.server)return void o();u();const{items:t,linkOperator:r}=e.current.state.filter;t.forEach((t=>{e.current.applyFilter(t,r)})),o()}),[e,u,o,i.filterMode]),m=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{r.debug("Upserting filter"),l((r=>{const n=[...r.filter.items],l=Object.assign({},t),o=n.findIndex((e=>e.id===l.id));if(1===n.length&&pn(n[0],{})?n[0]=l:-1===o?n.push(l):n[o]=l,null==l.id&&(l.id=(new Date).getTime()),null==l.columnField&&(l.columnField=a[0]),null!=l.columnField&&null==l.operatorValue){const t=e.current.getColumnFromField(l.columnField);l.operatorValue=t&&t.filterOperators[0].value}i.disableMultipleColumnsFiltering&&n.length>1&&(n.length=1);return Object.assign(Object.assign({},r),{filter:Object.assign(Object.assign({},r.filter),{items:n})})})),p(),e.current.publishEvent("filterModelChange",c())}),[r,l,e,c,p,i.disableMultipleColumnsFiltering,a]),f=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{r.debug(`Deleting filter on column ${t.columnField} with value ${t.value}`);let n=!1;l((e=>{const r=[...e.filter.items.filter((e=>e.id!==t.id))];n=0===r.length;return Object.assign(Object.assign({},e),{filter:Object.assign(Object.assign({},e.filter),{items:r})})})),n&&m({}),p(),e.current.publishEvent("filterModelChange",c())}),[e,p,c,r,l,m]),g=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{if(r.debug("Displaying filter panel"),t){const r=n.filter.items.length>0?n.filter.items[n.filter.items.length-1]:null;r&&r.columnField===t||e.current.upsertFilter({columnField:t})}e.current.showPreferences(Ci.filters)}),[e,n.filter.items,r]),b=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{r.debug("Hiding filter panel"),null==e||e.current.hidePreferences()}),[e,r]),h=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e=zo.And)=>{r.debug("Applying filter link operator"),l((t=>Object.assign(Object.assign({},t),{filter:Object.assign(Object.assign({},t.filter),{linkOperator:e})}))),p()}),[p,r,l]),C=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{u(),r.debug("Clearing filter model"),l((e=>Object.assign(Object.assign({},e),{filter:To()})))}),[u,r,l]),v=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{C(),r.debug("Setting filter model"),h(t.linkOperator),t.items.forEach((e=>m(e))),e.current.publishEvent("filterModelChange",c())}),[e,h,C,c,r,m]),w=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>$a(e.current.state)),[e]);Io(e,{applyFilterLinkOperator:h,applyFilters:p,applyFilter:d,deleteFilter:f,upsertFilter:m,setFilterModel:v,showFilterPanel:g,hideFilterPanel:b,getVisibleRowModels:w},"FilterApi"),Ei(e,"rowsSet",e.current.applyFilters),Ei(e,"rowsUpdated",e.current.applyFilters),xi(e,"filterModelChange",i.onFilterModelChange),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const t=i.filterModel,n=e.current.state.filter;t&&!pn(t,n)&&(r.debug("filterModel prop changed, applying filters"),e.current.setFilterModel(t))}),[e,r,i.filterModel]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{e.current&&(r.debug("Rows prop changed, applying filters"),u(),e.current.applyFilters())}),[e,u,r,t]);const O=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{r.debug("onColUpdated - GridColumns changed, applying filters");const t=e.current.getState("filter"),n=ua(e.current.state);r.debug("GridColumns changed, applying filters"),t.items.forEach((t=>{n.find((e=>e===t.columnField))||e.current.deleteFilter(t)})),e.current.applyFilters()}),[e,r]);Ei(e,"columnsUpdated",O)},Hs=e=>{const t=Mo("useGridFocus"),[,r,n]=Qo(e),l=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{r((r=>{const{rowIndex:n,colIndex:l}=e;return t.debug(`Focusing on cell with rowIndex=${n} and colIndex=${l}`),Object.assign(Object.assign({},r),{tabIndex:{cell:{rowIndex:n,colIndex:l},columnHeader:null},focus:{cell:{rowIndex:n,colIndex:l},columnHeader:null}})})),n()}),[n,t,r]),o=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{r((r=>{const{colIndex:n}=e;return t.debug("Focusing on column header with colIndex="+n),Object.assign(Object.assign({},r),{tabIndex:{columnHeader:{colIndex:n},cell:null},focus:{columnHeader:{colIndex:n},cell:null}})})),n()}),[n,t,r]),a=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>{(null==r?void 0:r.target)===(null==r?void 0:r.currentTarget)&&e.current.setCellFocus(t)}),[e]),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>{(null==r?void 0:r.target)===(null==r?void 0:r.currentTarget)&&e.current.setColumnHeaderFocus(t)}),[e]),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{t.debug("Clearing focus"),r((e=>Object.assign(Object.assign({},e),{focus:{cell:null,columnHeader:null}})))}),[t,r]);Io(e,{setCellFocus:l,setColumnHeaderFocus:o},"GridFocusApi"),Ei(e,"columnHeaderBlur",c),Ei(e,"cellBlur",c),Ei(e,"cellCellFocus",a),Ei(e,"columnHeaderFocus",i)},Ns=e=>e.keyboard,Vs=(0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector)(Ns,(e=>e.isMultipleKeyPressed)),Bs=(e,t)=>{const r=Mo("useGridKeyboard"),[,n,l]=Qo(t),o=ea(t,Ja),a=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{n((t=>{if(t.keyboard.isMultipleKeyPressed===e)return t;r.debug("Toggling keyboard multiple key pressed to "+e);const n=Object.assign(Object.assign({},t.keyboard),{isMultipleKeyPressed:e});return Object.assign(Object.assign({},t),{keyboard:n})}))&&l()}),[l,r,n]),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,n)=>{const l=Fn(document.activeElement,"MuiDataGrid-row"),o=Number(l.getAttribute("data-rowindex"));let a=o;const i=[...t.current.getSelectedRows().keys()];if(i.length>0){const e=i.map((e=>t.current.getRowIndexFromId(e))),r=e.map((e=>Math.abs(o-e))),n=Math.max(...r);a=e[r.indexOf(n)]}t.current.publishEvent("cellNavigationKeyDown",e,n);const s=t.current.getState().focus.cell,c=Array(Math.abs(s.rowIndex-a)+1).fill(s.rowIndex>a?a:s.rowIndex);r.debug("Selecting rows "),t.current.selectRows(c,!0,!0)}),[r,t]),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{var e,t;const r=Ln(document.activeElement),n=An(r);o[n]?null===(e=null===window||void 0===window?void 0:window.getSelection())||void 0===e||e.selectAllChildren(r):null===(t=null===window||void 0===window?void 0:window.getSelection())||void 0===t||t.selectAllChildren(document.activeElement),document.execCommand("copy")}),[o]),u=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{il(e.key)&&(r.debug("Multiple Select key pressed"),a(!0))}),[r,a]),d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{il(e.key)&&(r.debug("Multiple Select key released"),a(!1))}),[r,a]),p=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{r.debug("Grid lost focus, releasing key press",e),a(!1)}),[r,a]),m=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,r)=>{if(!jn(document.activeElement))return;if(r.isPropagationStopped())return;if(!("edit"===e.cellMode)){if(Yn(r.key)&&r.shiftKey)return r.preventDefault(),void t.current.selectRow(e.id);if(!dl(r.key)||r.shiftKey)return dl(r.key)&&r.shiftKey?(r.preventDefault(),void i(e,r)):void("c"!==r.key.toLowerCase()||!r.ctrlKey&&!r.metaKey?"a"===r.key.toLowerCase()&&(r.ctrlKey||r.metaKey)&&(r.preventDefault(),t.current.selectRows(t.current.getAllRowIds(),!0)):c());t.current.publishEvent("cellNavigationKeyDown",e,r)}}),[t,i,c]),f=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,r)=>{zn(document.activeElement)&&(r.isPropagationStopped()||(Yn(r.key)&&zn(document.activeElement)&&r.preventDefault(),!dl(r.key)||Yn(r.key)||r.shiftKey?Xn(r.key)&&(r.ctrlKey||r.metaKey)&&t.current.toggleColumnMenu(e.field):t.current.publishEvent("columnHeaderNavigationKeydown",e,r)))}),[t]);Ei(t,"keydown",u),Ei(t,"cellKeydown",m),Ei(t,"columnHeaderKeydown",f),Ei(t,"keyup",d),Ei(t,"gridFocusOut",p)},$s=(e,t)=>{const r=Mo("useGridKeyboardNavigation"),n=ea(t,Ea),l=ea(t,gs),o=ea(t,ja),a=ea(t,da),i=ea(t,ga),c=e=>Xn(e.key)?"ArrowDown":qn(e.key)?e.shiftKey?"ArrowLeft":"ArrowRight":e.key,u=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,s)=>{s.preventDefault();const{colIndex:u,rowIndex:d}=e,p=c(s),m=s.ctrlKey||s.metaKey||s.shiftKey;let f,g=o;if(n.pagination&&o>l.pageSize&&(g=l.pageSize*(l.page+1)),Jn(p))f=((e,t)=>{if(!Jn(e))throw new Error("Material-UI: The first argument (key) should be an arrow key code.");switch(e){case"ArrowLeft":return Object.assign(Object.assign({},t),{colIndex:t.colIndex-1});case"ArrowRight":return Object.assign(Object.assign({},t),{colIndex:t.colIndex+1});case"ArrowUp":return Object.assign(Object.assign({},t),{rowIndex:t.rowIndex-1});default:return Object.assign(Object.assign({},t),{rowIndex:t.rowIndex+1})}})(p,{colIndex:u,rowIndex:d});else if(Qn(p)){const e="Home"===p?0:a-1;if(m){let t=0;t=0===e?n.pagination?g-l.pageSize:0:g-1,f={colIndex:e,rowIndex:t}}else f={colIndex:e,rowIndex:d}}else{if(!el(p)&&!Yn(p))throw new Error("Material-UI. Key not mapped to navigation behavior.");f={colIndex:u,rowIndex:d+(p.indexOf("Down")>-1||Yn(p)?i.viewportPageSize:-1*i.viewportPageSize)}}f.rowIndex<0?t.current.setColumnHeaderFocus({colIndex:f.colIndex}):(f.rowIndex=f.rowIndex>=g&&g>0?g-1:f.rowIndex,f.colIndex=f.colIndex<=0?0:f.colIndex,f.colIndex=f.colIndex>=a?a-1:f.colIndex,r.debug(`Navigating to next cell row ${f.rowIndex}, col ${f.colIndex}`),t.current.scrollToIndexes(f),t.current.setCellFocus(f))}),[o,n.pagination,l.pageSize,l.page,a,r,t,i]),d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,n)=>{let l;n.preventDefault();const{colIndex:o}=e,s=c(n);if(Jn(s))l=((e,t)=>{if(!Jn(e))throw new Error("Material-UI: The first argument (key) should be an arrow key code.");switch(e){case"ArrowLeft":return{colIndex:t.colIndex-1};case"ArrowRight":return{colIndex:t.colIndex+1};case"ArrowDown":return null;default:return Object.assign({},t)}})(s,{colIndex:o});else{if(!Qn(s)){if(el(s))return void(s.indexOf("Down")>-1&&t.current.setCellFocus({colIndex:e.colIndex,rowIndex:i.viewportPageSize-1}));throw new Error("Material-UI. Key not mapped to navigation behavior.")}l={colIndex:"Home"===s?0:a-1}}l?(l.colIndex=Math.max(0,l.colIndex),l.colIndex=l.colIndex>=a?a-1:l.colIndex,r.debug("Navigating to next column row "+l.colIndex),t.current.scrollToIndexes(l),t.current.setColumnHeaderFocus(l)):t.current.setCellFocus({colIndex:e.colIndex,rowIndex:0})}),[t,a,i,r]);Ei(t,"cellNavigationKeyDown",u),Ei(t,"columnHeaderNavigationKeydown",d)},Ws=e=>{const t=Mo("useGridPagination"),{dispatch:r}=_s(e,"pagination",Ko,Object.assign({},Uo)),n=ea(e,Ea),l=ea(e,Ka),o=ea(e,ga),a=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((n=>{t.debug("Setting page to "+n),r(_o(n));const l=e.current.getState("pagination");e.current.publishEvent("pageChange",l)}),[e,r,t]),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{r(Go(t)),e.current.publishEvent("pageSizeChange",e.current.getState("pagination"))}),[e,r]);xi(e,"pageChange",n.onPageChange),xi(e,"pageSizeChange",n.onPageSizeChange),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{r(Ho({paginationMode:n.paginationMode}))}),[e,r,n.paginationMode]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const e=null!=n.page?n.page:0;r(_o(e))}),[r,n.page]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{!n.autoPageSize&&n.pageSize&&r(Go(n.pageSize))}),[n.autoPageSize,n.pageSize,t,r]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{n.autoPageSize&&o&&(null==o?void 0:o.viewportPageSize)>0&&r(Go(null==o?void 0:o.viewportPageSize))}),[o,r,n.autoPageSize]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{r(No({totalRowCount:l}))}),[e,r,l]);Io(e,{setPageSize:i,setPage:a},"paginationApi")},Us=e=>{const t=Mo("useGridPreferencesPanel"),[,r,n]=Qo(e),l=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),o=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),a=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{t.debug("Hiding Preferences Panel"),r((e=>Object.assign(Object.assign({},e),{preferencePanel:{open:!1}}))),n()}),[n,t,r]),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{o.current=setTimeout((()=>clearTimeout(l.current)),0)}),[]),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{l.current=setTimeout(a,100)}),[a]);Io(e,{showPreferences:react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{t.debug("Opening Preferences Panel"),i(),r((t=>Object.assign(Object.assign({},t),{preferencePanel:Object.assign(Object.assign({},t.preferencePanel),{open:!0,openedPanelValue:e})}))),n()}),[i,n,t,r]),hidePreferences:c},"ColumnMenuApi"),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>()=>{clearTimeout(l.current),clearTimeout(o.current)}),[])};let Ks=!1;function Zs(e){const t=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>({field:t,element:e.current.getColumnHeaderElement(t),colDef:e.current.getColumnFromField(t),colIndex:e.current.getColumnIndex(t,!0),api:e.current})),[e]),r=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>({id:t,element:e.current.getRowElement(t),columns:e.current.getAllColumns(),getValue:r=>e.current.getCellValue(t,r),row:e.current.getRowFromId(t),rowIndex:e.current.getRowIndexFromId(t),api:e.current})),[e]),n=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>{const n=e.current.getCellElement(t,r),l=e.current.getRowFromId(t);return{element:n,id:t,field:r,row:l,value:l[r],getValue:r=>e.current.getCellValue(t,r),colDef:e.current.getColumnFromField(r),cellMode:e.current.getCellMode(t,r),rowIndex:e.current.getRowIndexFromId(t),colIndex:e.current.getColumnIndex(r,!0),api:e.current}}),[e]),l=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>{const l=e.current.getColumnFromField(r),o=e.current.getCellValue(t,r),a=n(t,r),i=Object.assign(Object.assign({},a),{value:o,getValue:r=>e.current.getCellValue(t,r),formattedValue:o});return l.valueFormatter&&(i.formattedValue=l.valueFormatter(i)),i.isEditable=l&&e.current.isCellEditable(i),i}),[e,n]),o=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>{const l=e.current.getColumnFromField(r);if(Ks||"production"==="development"||l||function(e){console.warn([`Material-UI: You are calling getValue('${e}') but the column \`${e}\` is not defined.`,`Instead, you can access the data from \`params.row.${e}\`.`].join("\n")),Ks=!0}(r),!l||!l.valueGetter){return e.current.getRowFromId(t)[r]}return l.valueGetter(n(t,r))}),[e,n]),a=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>e.current.rootElementRef.current?$n(e.current.rootElementRef.current,t):null),[e]),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>e.current.rootElementRef.current?Wn(e.current.rootElementRef.current,t):null),[e]),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>e.current.rootElementRef.current?Un(e.current.rootElementRef.current,{id:t,field:r}):null),[e]);Io(e,{getCellValue:o,getCellParams:l,getCellElement:c,getRowParams:r,getRowElement:i,getColumnHeaderParams:t,getColumnHeaderElement:a},"CellApi")}function Xs(e,t,r){if(null==e)throw new Error(["Material-UI: The data grid component requires all rows to have a unique id property.",r||"A row was provided without id in the rows prop:",JSON.stringify(t)].join("\n"));return!0}function qs(e,t,r){const n=t?t(e):e.id;return Xs(n,e,r),n}function Ys(e,t,r){const n=Object.assign(Object.assign({},{idRowsLookup:{},allRows:[],totalRowCount:0}),{totalRowCount:t&&t>e.length?t:e.length});return e.forEach((e=>{const t=qs(e,r);n.allRows.push(t),n.idRowsLookup[t]=e})),n}const Js=(e,t,r)=>{const n=Mo("useGridRows"),[l,o,a]=Qo(e),i=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{null==i.current&&(i.current=setTimeout((()=>{n.debug("Updating component"),i.current=null,e&&e(),a()}),100))}),[n,a]),u=react__WEBPACK_IMPORTED_MODULE_0__.useRef(l.rows);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>()=>clearTimeout(i.current)),[]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{o((e=>(u.current=Ys(t,e.options.rowCount,r),Object.assign(Object.assign({},e),{rows:u.current}))))}),[r,t,o]);const d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>e.current.getSortedRowIds?e.current.getSortedRowIds().indexOf(t):e.current.state.rows.allRows.indexOf(t)),[e]),p=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>e.current.getSortedRowIds?e.current.getSortedRowIds()[t]:e.current.state.rows.allRows[t]),[e]),m=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>e.current.state.rows.idRowsLookup[t]),[e]),f=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{n.debug("updating all rows, new length "+t.length),u.current.allRows.length>0&&e.current.publishEvent("rowsCleared");const a=[],i=t.reduce(((e,t)=>{const n=qs(t,r);return e[n]=t,a.push(n),e}),{}),s=l.options&&l.options.rowCount&&l.options.rowCount>a.length?l.options.rowCount:a.length;u.current={idRowsLookup:i,allRows:a,totalRowCount:s},o((e=>Object.assign(Object.assign({},e),{rows:u.current}))),c((()=>e.current.publishEvent("rowsSet")))}),[n,l.options,o,c,e,r]),g=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{const n=t.reduce(((e,t)=>{const n=qs(t,r,"A row was provided without id when calling updateRows():");return e[n]=null!=e[n]?Object.assign(Object.assign({},e[n]),t):t,e}),{}),l=[],a=[];if(Object.entries(n).forEach((([e,t])=>{if("delete"===t._action)return void a.push(e);const r=m(e);if(!r)return void l.push(t);const n=Object.assign({},u.current.idRowsLookup);n[e]=Object.assign(Object.assign({},r),t),u.current.idRowsLookup=n})),o((e=>Object.assign(Object.assign({},e),{rows:Object.assign({},u.current)}))),a.length>0||l.length>0){a.forEach((e=>{delete u.current.idRowsLookup[e]}));const e=[...Object.values(u.current.idRowsLookup),...l];f(e)}c((()=>e.current.publishEvent("rowsUpdated")))}),[e,c,m,r,o,f]),b=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>new Map(e.current.state.rows.allRows.map((t=>[t,e.current.state.rows.idRowsLookup[t]])))),[e]),h=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>e.current.state.rows.totalRowCount),[e]),C=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>e.current.state.rows.allRows),[e]);Io(e,{getRowIndexFromId:d,getRowIdFromRowIndex:p,getRowFromId:m,getRowModels:b,getRowsCount:h,getAllRowIds:C,setRows:f,updateRows:g},"GridRowApi")};function Qs(e){const t=Mo("useGridEditRows"),[,r,n]=Qo(e),l=ea(e,Ea),o=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),a=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((l,a,i)=>{let s=!1;if(r((t=>{const r=t.editRows[l]&&t.editRows[l][a],n=Object.assign({},t.editRows);return"edit"===i&&r||"view"===i&&!r?t:("edit"===i?(n[l]=Object.assign({},n[l])||{},n[l][a]={value:e.current.getCellValue(l,a)},o.current=e.current.getCellParams(l,a)):(delete n[l][a],o.current=null,Object.keys(n[l]).length||delete n[l]),s=!0,Object.assign(Object.assign({},t),{editRows:n}))})),!s)return;t.debug(`Switching cell id: ${l} field: ${a} to mode: ${i}`),n(),e.current.publishEvent("cellModeChange",{id:l,field:a,mode:i,api:e.current});const c={api:e.current,model:e.current.getState().editRows};e.current.publishEvent("editRowModelChange",c)}),[e,n,t,r]),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>{const n=e.current.getState().editRows;return n[t]&&n[t][r]?"edit":"view"}),[e]),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>e.colDef.editable&&e.colDef.renderEditCell&&(!l.isCellEditable||l.isCellEditable(e))),[l.isCellEditable]),u=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((l,o)=>{if(null==o?void 0:o.isPropagationStopped())return;const{id:a,field:i,props:s}=l;t.debug(`Setting cell props on id: ${a} field: ${i}`),r((e=>{const t=Object.assign({},e.editRows);return t[a]=Object.assign({},e.editRows[a]),t[a][i]=s,Object.assign(Object.assign({},e),{editRows:t})})),n();const c={api:e.current,model:e.current.getState().editRows};e.current.publishEvent("editRowModelChange",c)}),[e,n,t,r]),d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>{const n=e.current.getEditRowsModel();return n[t]&&n[t][r]?n[t][r]:{id:t,field:r,value:e.current.getCellValue(t,r)}}),[e]),p=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{t.debug("Setting row model"),r((t=>Object.assign(Object.assign({},t),{editRows:e}))),n()}),[n,t,r]),m=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>e.current.getState().editRows),[e]),f=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>({id:t,field:r,props:e.current.getEditCellProps(t,r)})),[e]),g=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>{const n=e.current.getEditCellProps(t,r);return{id:t,field:r,value:null==n?void 0:n.value}}),[e]),b=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((r=>{var n;t.debug(`Setting cell id: ${r.id} field: ${r.field} to value: ${null===(n=r.value)||void 0===n?void 0:n.toString()}`);const l={id:r.id};l[r.field]=r.value,e.current.updateRows([l]),e.current.publishEvent("cellValueChange",r)}),[e,t]),h=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((r,n)=>{if(null==n?void 0:n.isPropagationStopped())return;t.debug(`Committing cell change on id: ${r.id} field: ${r.field}`);const l=r.props&&r.props.value;e.current.setCellValue({id:r.id,field:r.field,value:l})}),[e,t]),C=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>{a(t.id,t.field,"view"),pl(r)&&(ul(r.key)?e.current.publishEvent("cellNavigationKeyDown",t,r):(Zn(r.key)||tl(r.key))&&e.current.setCellFocus(t))}),[e,a]),v=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>{if(t.isEditable&&!r.isPropagationStopped()){if(pl(r)&&nl(r.key)){const r=e.current.getEditCellPropsParams(t.id,t.field);r.props.value="",e.current.setEditCellProps(r)}a(t.id,t.field,"edit")}}),[e,a]),w=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,t)=>{const r=t.detail>1;e.isEditable&&"view"===e.cellMode&&r&&t.preventDefault()}),[]),O=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>{if(r.isPropagationStopped()||"view"===t.cellMode)return;const n=e.current.getEditCellPropsParams(t.id,t.field);n.props.error||e.current.publishEvent("cellEditPropsChangeCommitted",n,r),e.current.publishEvent("cellEditExit",t,r)}),[e]),y=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>{if(!t.isEditable||r.isPropagationStopped())return;const n="edit"===t.cellMode;if(!n&&sl(r.key)&&e.current.publishEvent("cellEditEnter",t,r),!n&&tl(r.key)){const n=e.current.getEditCellPropsParams(t.id,t.field);n.props.value="",e.current.publishEvent("cellEditPropsChangeCommitted",n,r),e.current.publishEvent("cellEditExit",t,r)}if(n&&ul(r.key)){const n=e.current.getEditCellPropsParams(t.id,t.field);if(n.props.error)return;e.current.publishEvent("cellEditPropsChangeCommitted",n,r)}n&&!r.isPropagationStopped()&&cl(r.key)&&e.current.publishEvent("cellEditExit",t,r)}),[e]),E=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((...t)=>{e.current.publishEvent("cellEditEnter",...t)}),[e]);Ei(e,"cellKeydown",y),Ei(e,"cellBlur",O),Ei(e,"cellMouseDown",w),Ei(e,"cellDoubleClick",E),Ei(e,"cellEditEnter",v),Ei(e,"cellEditExit",C),Ei(e,"cellEditPropsChange",u),Ei(e,"cellEditPropsChangeCommitted",h),xi(e,"cellEditPropsChangeCommitted",l.onEditCellChangeCommitted),xi(e,"cellEditPropsChange",l.onEditCellChange),xi(e,"cellValueChange",l.onCellValueChange),xi(e,"cellModeChange",l.onCellModeChange),xi(e,"editRowModelChange",l.onEditRowModelChange),Io(e,{setCellMode:a,getCellMode:i,isCellEditable:c,setCellValue:b,commitCellChange:h,setEditCellProps:u,getEditCellProps:d,getEditCellPropsParams:f,getEditCellValueParams:g,setEditRowsModel:p,getEditRowsModel:m},"EditRowApi"),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{e.current.setEditRowsModel(l.editRowsModel||{})}),[e,l.editRowsModel])}const ec=e=>{const t=Mo("useGridSelection"),[,r,n]=Qo(e),l=ea(e,Ea),o=ea(e,za),a=ea(e,Vs),i=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{i.current=!l.disableMultipleSelection&&a}),[a,l.disableMultipleSelection]);const c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>ei(e.current.getState())),[e]),u=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((o,a,s,c)=>{if(!e.current.isInitialised)return void r((e=>{const t={};return t[o]=o,Object.assign(Object.assign({},e),{selection:t})}));t.debug("Selecting row "+o);const u=s||i.current||l.checkboxSelection;r(u?e=>{const t=Object.assign({},e.selection);return(u&&null!=c?c:void 0===t[o])?t[o]=o:delete t[o],Object.assign(Object.assign({},e),{selection:t})}:e=>{const t={};return t[o]=o,Object.assign(Object.assign({},e),{selection:t})}),n();const d=e.current.getState("selection"),p={api:e,data:a,isSelected:void 0!==d[o]},m={selectionModel:Object.values(d)};e.current.publishEvent("rowSelected",p),e.current.publishEvent("selectionChange",m)}),[e,t,l.checkboxSelection,n,r]),d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r=!0,n=!1)=>{u(t,e.current.getRowFromId(t),n,r)}),[e,u]),p=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,o=!0,a=!1)=>{if(l.disableMultipleSelection&&t.length>1&&!l.checkboxSelection)return;r((e=>{const r=a?{}:Object.assign({},e.selection);return t.forEach((e=>{o?r[e]=e:void 0!==r[e]&&delete r[e]})),Object.assign(Object.assign({},e),{selection:r})})),n();const i={selectionModel:Object.values(e.current.getState("selection"))};e.current.publishEvent("selectionChange",i)}),[l.disableMultipleSelection,l.checkboxSelection,r,n,e]),m=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{e.current.selectRows(t,!0,!0)}),[e]),f=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{l.disableSelectionOnClick||u(e.id,e.row)}),[l.disableSelectionOnClick,u]);Ei(e,"rowClick",f),xi(e,"rowSelected",l.onRowSelected),xi(e,"selectionChange",l.onSelectionModelChange);Io(e,{selectRow:d,getSelectedRows:c,selectRows:p,setSelectionModel:m},"GridSelectionApi"),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{r((e=>{const t=Object.assign({},e.selection);let r=!1;return Object.keys(t).forEach((e=>{o[e]||(delete t[e],r=!0)})),r?Object.assign(Object.assign({},e),{selection:t}):e})),n()}),[o,e,r,n]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{pn(Object.values(e.current.getState().selection),l.selectionModel)||e.current.setSelectionModel(l.selectionModel||[])}),[e,l.selectionModel])},tc=(e,t)=>{const r=Mo("useGridSorting"),n=react__WEBPACK_IMPORTED_MODULE_0__.useRef([]),[l,o,a]=Qo(e),i=ea(e,Ea),c=ea(e,ia),u=ea(e,ja),d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>({sortModel:t,api:e.current,columns:e.current.getAllColumns()})),[e]),p=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,t)=>{const r=l.sorting.sortModel.findIndex((t=>t.field===e));let n=[...l.sorting.sortModel];return r>-1?t?n.splice(r,1,t):n.splice(r,1):n=[...l.sorting.sortModel,t],n}),[l.sorting.sortModel]),m=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,t)=>{const r=l.sorting.sortModel.find((t=>t.field===e.field));if(r){const e=void 0===t?xn(i.sortingOrder,r.sort):t;return null==e?void 0:Object.assign(Object.assign({},r),{sort:e})}return{field:e.field,sort:void 0===t?xn(i.sortingOrder):t}}),[l.sorting.sortModel,i.sortingOrder]),f=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,r)=>({id:t,field:r,row:e.current.getRowFromId(t),value:e.current.getCellValue(t,r),getValue:r=>e.current.getCellValue(t,r),api:e.current})),[e]),g=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,t)=>n.current.reduce(((r,n)=>{const{field:l,comparator:o}=n,a=f(e,l),i=f(t,l);return r=r||o(a.value,i.value,a,i)}),0)),[f]),b=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>t.map((t=>{const r=e.current.getColumnFromField(t.field);if(!r)throw new Error(`Error sorting: column with field '${t.field}' not found. `);const n=Mn(t.sort)?(e,t,n,l)=>-1*r.sortComparator(e,t,n,l):r.sortComparator;return{field:r.field,comparator:n}}))),[e]),h=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const t=e.current.getAllRowIds();if(i.sortingMode===Ro.server)return r.debug("Skipping sorting rows as sortingMode = server"),void o((e=>Object.assign(Object.assign({},e),{sorting:Object.assign(Object.assign({},e.sorting),{sortedRows:t})})));const l=e.current.getState().sorting.sortModel;r.debug("Sorting rows with ",l);const s=[...t];l.length>0&&(n.current=b(l),s.sort(g)),o((e=>Object.assign(Object.assign({},e),{sorting:Object.assign(Object.assign({},e.sorting),{sortedRows:s})}))),a()}),[e,r,o,a,b,g,i.sortingMode]),C=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((t=>{o((e=>{const r=Object.assign(Object.assign({},e.sorting),{sortModel:t});return Object.assign(Object.assign({},e),{sorting:Object.assign({},r)})})),a(),0!==c.length&&(e.current.publishEvent("sortModelChange",d(t)),e.current.applySorting())}),[o,a,c.length,e,d]),v=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,t,r)=>{if(!e.sortable)return;const n=m(e,t);let l;l=!r||i.disableMultipleColumnsSorting?n?[n]:[]:p(e.field,n),C(l)}),[p,C,m,i.disableMultipleColumnsSorting]),w=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((({colDef:e},t)=>{v(e,void 0,fl(t))}),[v]),O=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((({colDef:e},t)=>{!Xn(t.key)||t.ctrlKey||t.metaKey||v(e,void 0,t.shiftKey)}),[v]),y=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{o((e=>Object.assign(Object.assign({},e),{sorting:Object.assign(Object.assign({},e.sorting),{sortedRows:[]})})))}),[o]),E=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>l.sorting.sortModel),[l.sorting.sortModel]),S=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>Object.values(Ha(e.current.state))),[e]),x=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>Ga(e.current.state)),[e]),M=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{o((e=>{const t=e.sorting.sortModel,r=aa(e);let n=t;return t.length>0&&(n=t.reduce(((e,t)=>(r.find((e=>e.field===t.field))&&e.push(t),e)),[])),Object.assign(Object.assign({},e),{sorting:Object.assign(Object.assign({},e.sorting),{sortModel:n})})}))}),[o]);Ei(e,"columnHeaderClick",w),Ei(e,"columnHeaderKeydown",O),Ei(e,"rowsSet",e.current.applySorting),Ei(e,"rowsCleared",y),Ei(e,"rowsUpdated",e.current.applySorting),Ei(e,"columnsUpdated",M),xi(e,"sortModelChange",i.onSortModelChange);Io(e,{getSortModel:E,getSortedRows:S,getSortedRowIds:x,setSortModel:C,sortColumn:v,applySorting:h},"GridSortApi"),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{e.current.applySorting()}),[e,t]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{u>0&&(r.debug("row changed, applying sortModel"),e.current.applySorting())}),[u,e,r]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const t=i.sortModel||[];pn(t,e.current.state.sorting.sortModel)||e.current.setSortModel(t)}),[i.sortModel,e])},rc=(e,t)=>{const r=Mo("useGridVirtualColumns"),n=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),l=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),o=react__WEBPACK_IMPORTED_MODULE_0__.useRef(0),a=ea(t,sa),i=ea(t,da),c=ea(t,ia),u=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{const t=a.positions;if(!i)return-1;let r=[...t].reverse().findIndex((t=>e>=t));return r=t.length-1-r,r}),[a.positions,i]),d=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>c.length?c[u(e)]:null),[u,c]),p=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{if(!l.current)return!1;const t=l.current.windowSizes.width,r=d(o.current),n=d(o.current+t),a=c.findIndex((e=>e.field===(null==r?void 0:r.field)))+1,i=c.findIndex((e=>e.field===(null==n?void 0:n.field)))-1;return e>=a&&e<=i}),[d,c]),m=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((i,s)=>{var p,m,f,g;if(!i)return!1;l.current=i;const b=i.windowSizes.width;o.current=s,r.debug(`GridColumns from ${null===(p=d(s))||void 0===p?void 0:p.field} to ${null===(m=d(s+b))||void 0===m?void 0:m.field}`);const h=u(s),C=u(s+b),v=(null===(f=null==n?void 0:n.current)||void 0===f?void 0:f.firstColIdx)||0,w=(null===(g=null==n?void 0:n.current)||void 0===g?void 0:g.lastColIdx)||0,O=e.columnBuffer,y=O>1?O-1:O,E=Math.abs(h-y-v),S=Math.abs(C+y-w);r.debug(`Column buffer: ${O}, tolerance: ${y}`),r.debug(`Previous values  => first: ${v}, last: ${w}`),r.debug(`Current displayed values  => first: ${h}, last: ${C}`),r.debug(`Difference with first: ${E} and last: ${S} `);const x=c.length>0?c.length-1:0,M=h-O>=0?h-O:0,I={leftEmptyWidth:a.positions[M],rightEmptyWidth:0,firstColIdx:M,lastColIdx:C+O>=x?x:C+O};return t.current.state.scrollBar.hasScrollX?I.rightEmptyWidth=a.totalWidth-a.positions[I.lastColIdx]-c[I.lastColIdx].width:e.disableExtendRowFullWidth||(I.rightEmptyWidth=t.current.state.viewportSizes.width-a.totalWidth),pn(I,n.current)?(r.debug("No rendering needed on columns"),!1):(n.current=I,r.debug("New columns state to render",I),!0)}),[r,d,u,e.columnBuffer,e.disableExtendRowFullWidth,c,a.positions,a.totalWidth,t]);Io(t,{isColumnVisibleInWindow:p},"ColumnVirtualizationApi");const f=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{r.debug("Clearing previous renderedColRef"),n.current=null}),[r,n]);return Ei(t,"columnsUpdated",f),Ei(t,"resize",f),[n,m]},nc=(e,t,r,n,l)=>{const o=Mo("useNativeEventListener"),[a,i]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),c=react__WEBPACK_IMPORTED_MODULE_0__.useRef(n),u=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>c.current&&c.current(e)),[]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{c.current=n}),[n]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{let n;if(n=Cn(t)?t():t&&t.current?t.current:null,n&&u&&r&&!a){o.debug(`Binding native ${r} event`),n.addEventListener(r,u,l);const t=n;i(!0);const a=()=>{o.debug(`Clearing native ${r} event`),t.removeEventListener(r,u,l)};e.current.subscribeEvent("unmount",a)}}),[t,u,r,a,o,l,e])};function lc(e,t){const r=Mo("useGridScrollFn"),n=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),l=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.debounce)((()=>{null!=e.current&&(e.current.style.pointerEvents="unset")}),300)),[e]),o=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((o=>{var a;o.left===(null===(a=n.current)||void 0===a?void 0:a.left)&&o.top===n.current.top||e&&e.current&&(r.debug(`Moving ${e.current.className} to: ${o.left}-${o.top}`),"none"!==e.current.style.pointerEvents&&(e.current.style.pointerEvents="none"),e.current.style.transform=`translate3d(-${o.left}px, -${o.top}px, 0)`,t.current.style.transform=`translate3d(-${o.left}px, 0, 0)`,l(),n.current=o)}),[e,r,t,l]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>()=>{l.clear()}),[e,l]),[o]}const oc=(e,t,r,n)=>{var l;const o=Mo("useGridVirtualRows"),[a,i,c]=Qo(n),u=ea(n,Ea),d=ea(n,bo),p=ea(n,gs),m=ea(n,ja),f=ea(n,ia),g=ea(n,sa),[b]=lc(r,e),[h,C]=rc(u,n),v=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{let t=!1;return i((r=>{const n=Object.assign(Object.assign({},r.rendering),e);return pn(r.rendering,n)?r:(t=!0,Object.assign(Object.assign({},r),{rendering:n}))})),t}),[i]),w=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{if(null==n.current.state.containerSizes)return null;let t=0;u.pagination&&null!=p.pageSize&&"client"===p.paginationMode&&(t=p.pageSize*p.page);const r=e*n.current.state.containerSizes.viewportPageSize+t;let l=r+n.current.state.containerSizes.renderingZonePageSize;const o=n.current.state.containerSizes.virtualRowsCount+t;l>o&&(l=o);return{page:e,firstRowIdx:r,lastRowIdx:l}}),[n,u.pagination,p.pageSize,p.paginationMode,p.page]),O=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(null==n.current.state.containerSizes)return null;return Object.assign(Object.assign(Object.assign({},h.current),w(n.current.state.rendering.virtualPage)),{paginationCurrentPage:p.page,pageSize:p.pageSize})}),[h,w,n,p.page,p.pageSize]),y=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const e=O();v({renderContext:e,renderedSizes:n.current.state.containerSizes})&&(o.debug("reRender: trigger rendering"),c())}),[n,O,o,c,v]),E=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e=!1)=>{const r=n.current.getState(),l=r.containerSizes;if(!t||!t.current||!l)return;const a=r.scrollBar,{scrollLeft:i,scrollTop:s}=t.current;o.debug(`Handling scroll Left: ${i} Top: ${s}`);let c=C(l,i);const u=i,d=r.containerSizes.renderingZoneScrollHeight,m=r.rendering.virtualPage,f=d>0?Math.floor(s/d):0,g=s%d,h={left:a.hasScrollX?u:0,top:l.isVirtualized?g:s};l.isVirtualized&&m!==f?(v({virtualPage:f}),o.debug(`Changing page from ${m} to ${f}`),c=!0):(!l.isVirtualized&&m>0&&(o.debug("Virtualization disabled, setting virtualPage to 0"),v({virtualPage:0})),b(h)),v({renderingZoneScroll:h,realScroll:{left:t.current.scrollLeft,top:t.current.scrollTop}}),n.current.publishEvent("scrolling:rows",h);const w=r.rendering.renderContext&&r.rendering.renderContext.paginationCurrentPage!==p.page;(e||c||w)&&y()}),[n,o,p.page,y,b,v,C,t]),S=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{if(0===m||0===f.length)return!1;o.debug(`Scrolling to cell at row ${e.rowIndex}, col: ${e.colIndex} `);const r={},l=n.current.isColumnVisibleInWindow(e.colIndex);if(o.debug(`Column ${e.colIndex} is ${l?"already":"not"} visible.`),!l){if(e.colIndex+1===g.positions.length){const t=f[e.colIndex].width;r.left=g.positions[e.colIndex]+t-a.containerSizes.windowSizes.width}else r.left=g.positions[e.colIndex+1]-a.containerSizes.windowSizes.width+a.scrollBar.scrollBarSize.y,o.debug("Scrolling to the right, scrollLeft: "+r.left);a.rendering.renderingZoneScroll.left>r.left&&(r.left=g.positions[e.colIndex],o.debug("Scrolling to the left, scrollLeft: "+r.left))}let i=!1,s=!1;if(e.rowIndex||0===e.rowIndex){const n=(u.pagination?e.rowIndex-p.page*p.pageSize:e.rowIndex)/a.containerSizes.viewportPageSize*a.viewportSizes.height,l=a.viewportSizes.height;i=t.current.scrollTop>n,s=t.current.scrollTop+l<n,i?(r.top=n,o.debug("Row is above, setting top to "+r.top)):s&&(r.top=n-l+d,o.debug("Row is below, setting top to "+r.top))}const c=!l||i||s;return c&&n.current.scroll(r),c}),[m,f,o,n,u.pagination,p.page,p.pageSize,a,t,g.positions,d]),x=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{b({left:0,top:0}),v({virtualPage:0}),t&&t.current&&(t.current.scrollTop=0,t.current.scrollLeft=0),v({renderingZoneScroll:{left:0,top:0}})}),[b,v,t]),M=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),I=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{t.current.scrollLeft<0||t.current.scrollTop<0||(M.current||i((e=>Object.assign(Object.assign({},e),{isScrolling:!0}))),clearTimeout(M.current),M.current=setTimeout((()=>{M.current=null,i((e=>Object.assign(Object.assign({},e),{isScrolling:!1}))),c()}),300),n.current.updateViewport&&n.current.updateViewport())}),[t,n,i,c]),k=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((r=>{t.current&&null!=r.left&&e.current&&(e.current.scrollLeft=r.left,t.current.scrollLeft=r.left,o.debug("Scrolling left: "+r.left)),t.current&&null!=r.top&&(t.current.scrollTop=r.top,o.debug("Scrolling top: "+r.top)),o.debug("Scrolling, updating container, and viewport")}),[t,e,o]),D=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>yi(n.current.getState())),[n]),P=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>a.containerSizes),[a.containerSizes]),R=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>a.rendering.renderContext||void 0),[a.rendering.renderContext]);oo((()=>{r&&r.current&&(o.debug("applying scrollTop ",a.rendering.renderingZoneScroll.top),b(a.rendering.renderingZoneScroll))}));Io(n,{scroll:k,scrollToIndexes:S,getContainerPropsState:P,getRenderContextState:R,getScrollPosition:D,updateViewport:E},"GridVirtualizationApi"),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{var e;(null===(e=a.rendering.renderContext)||void 0===e?void 0:e.paginationCurrentPage)!==a.pagination.page&&n.current.updateViewport&&(o.debug(`State pagination.page changed to ${a.pagination.page}. `),n.current.updateViewport(!0),x())}),[n,a.pagination.page,null===(l=a.rendering.renderContext)||void 0===l?void 0:l.paginationCurrentPage,o,x]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{a.containerSizes!==a.rendering.renderedSizes&&n.current.updateViewport&&(o.debug("gridState.containerSizes updated, updating viewport. "),n.current.updateViewport(!0))}),[n,a.containerSizes,a.rendering.renderedSizes,o]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{n.current.updateViewport&&(o.debug(`totalRowCount has changed to ${m}, updating viewport.`),n.current.updateViewport(!0))}),[o,m,a.viewportSizes,a.scrollBar,a.containerSizes,n]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>()=>{clearTimeout(M.current)}),[]);const F=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>(o.debug("Using keyboard to navigate cells, converting scroll events "),e.target.scrollLeft=0,e.target.scrollTop=0,e.preventDefault(),e.stopPropagation(),!1)),[o]);nc(n,t,"scroll",I,{passive:!0}),nc(n,(()=>{var e;return null===(e=r.current)||void 0===e?void 0:e.parentElement}),"scroll",F),nc(n,(()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.parentElement}),"scroll",F),Ei(n,"resize",E)};class ac extends class{constructor(){this.maxListeners=10,this.warnOnce=!1,this.events={}}on(e,t){Array.isArray(this.events[e])||(this.events[e]=[]),this.events[e].push(t), true&&this.events[e].length>this.maxListeners&&!1===this.warnOnce&&(this.warnOnce=!0,console.warn([`Possible EventEmitter memory leak detected. ${this.events[e].length} ${e} listeners added.`,"Use emitter.setMaxListeners() to increase limit."].join("\n")))}removeListener(e,t){if(Array.isArray(this.events[e])){const r=this.events[e].indexOf(t);r>-1&&this.events[e].splice(r,1)}}removeAllListeners(e){e?Array.isArray(this.events[e])&&(this.events[e]=[]):this.events={}}emit(e,...t){if(Array.isArray(this.events[e])){const r=this.events[e].slice(),n=r.length;for(let e=0;e<n;e+=1)r[e].apply(this,t)}}once(e,t){const r=this;this.on(e,(function n(...l){r.removeListener(e,n),t.apply(r,l)}))}}{on(e,t,r){Array.isArray(this.events[e])||(this.events[e]=[]),r&&r.isFirst?this.events[e].splice(0,0,t):this.events[e].push(t), true&&this.events[e].length>this.maxListeners&&!1===this.warnOnce&&(this.warnOnce=!0,console.warn([`Possible EventEmitter memory leak detected. ${this.events[e].length} ${e} listeners added.`,"Use emitter.setMaxListeners() to increase limit."].join("\n")))}}function ic(...e){const t=e[0],r=react__WEBPACK_IMPORTED_MODULE_0__.useRef(0===e.length?null:new ac);return react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(t,(()=>r.current),[r]),r}let sc=!1;function cc(){if(!sc){const e=document.createElement("div");e.style.touchAction="none",document.body.appendChild(e),sc="none"===window.getComputedStyle(e).touchAction,e.parentElement.removeChild(e)}return sc}function uc(e,t){if(void 0!==t&&e.changedTouches){for(let r=0;r<e.changedTouches.length;r+=1){const n=e.changedTouches[r];if(n.identifier===t)return{x:n.clientX,y:n.clientY}}return!1}return{x:e.clientX,y:e.clientY}}const dc=(e,t)=>{const r=Mo("useGridColumnResize"),[,n,l]=Qo(t),o=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),a=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),c=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),u=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),d=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),p=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),m=ea(t,Ea),f=e.current,g=e=>{r.debug(`Updating width to ${e} for col ${o.current.field}`),o.current.width=e,a.current.style.width=e+"px",a.current.style.minWidth=e+"px",a.current.style.maxWidth=e+"px",c.current.forEach((t=>{const r=t;r.style.width=e+"px",r.style.minWidth=e+"px",r.style.maxWidth=e+"px"}))},b=lo((()=>{y(),t.current.updateColumn(o.current),clearTimeout(d.current),d.current=setTimeout((()=>{var e;t.current.publishEvent("columnResizeStop"),t.current.publishEvent("columnResizeCommited",{element:a.current,colDef:o.current,api:t,width:null===(e=o.current)||void 0===e?void 0:e.width})})),r.debug(`Updating col ${o.current.field} with new width: ${o.current.width}`)})),h=lo((e=>{if(0===e.buttons)return void b();let r=u.current+e.clientX-a.current.getBoundingClientRect().left;r=Math.max(50,r),g(r),t.current.publishEvent("columnResize",{element:a.current,colDef:o.current,api:t,width:r})})),C=lo((({colDef:e},n)=>{if(0!==n.button)return;if(!n.currentTarget.classList.contains("MuiDataGrid-columnSeparatorResizable"))return;n.preventDefault(),a.current=Fn(n.currentTarget,"MuiDataGrid-colCell"),r.debug("Start Resize on col "+e.field),t.current.publishEvent("columnResizeStart",{field:e.field}),o.current=e,a.current=f.querySelector(`[data-field="${e.field}"]`),c.current=Hn(a.current);const l=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.ownerDocument)(t.current.rootElementRef.current);l.body.style.cursor="col-resize",u.current=o.current.width-(n.clientX-a.current.getBoundingClientRect().left),l.addEventListener("mousemove",h),l.addEventListener("mouseup",b)})),v=lo((e=>{uc(e,p.current)&&(y(),t.current.updateColumn(o.current),clearTimeout(d.current),d.current=setTimeout((()=>{t.current.publishEvent("columnResizeStop")})),r.debug(`Updating col ${o.current.field} with new width: ${o.current.width}`))})),w=lo((e=>{const r=uc(e,p.current);if(!r)return;if("mousemove"===e.type&&0===e.buttons)return void v(e);let n=u.current+r.x-a.current.getBoundingClientRect().left;n=Math.max(50,n),g(n),t.current.publishEvent("columnResize",{element:a.current,colDef:o.current,api:t,width:n})})),O=lo((e=>{if(!Fn(e.target,"MuiDataGrid-columnSeparatorResizable"))return;cc()||e.preventDefault();const n=e.changedTouches[0];null!=n&&(p.current=n.identifier),a.current=Fn(e.target,"MuiDataGrid-colCell");const l=_n(a.current),s=t.current.getColumnFromField(l);r.debug("Start Resize on col "+s.field),t.current.publishEvent("columnResizeStart",{field:l}),o.current=s,a.current=Gn(f,s.field),c.current=Hn(a.current),u.current=o.current.width-(n.clientX-a.current.getBoundingClientRect().left);const d=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.ownerDocument)(e.currentTarget);d.addEventListener("touchmove",w),d.addEventListener("touchend",v)})),y=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const e=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.ownerDocument)(t.current.rootElementRef.current);e.body.style.removeProperty("cursor"),e.removeEventListener("mousemove",h),e.removeEventListener("mouseup",b),e.removeEventListener("touchmove",w),e.removeEventListener("touchend",v)}),[t,h,b,w,v]),E=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((({field:e})=>{n((t=>Object.assign(Object.assign({},t),{columnResize:Object.assign(Object.assign({},t.columnResize),{resizingColumnField:e})}))),l()}),[n,l]),S=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{n((e=>Object.assign(Object.assign({},e),{columnResize:Object.assign(Object.assign({},e.columnResize),{resizingColumnField:""})}))),l()}),[n,l]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(null==f||f.addEventListener("touchstart",O,{passive:cc()}),()=>{null==f||f.removeEventListener("touchstart",O),clearTimeout(d.current),y()})),[f,O,y]),Ei(t,"columnSeparatorMouseDown",C),Ei(t,"columnResizeStart",E),Ei(t,"columnResizeStop",S),xi(t,"columnResize",m.onColumnResize),xi(t,"columnResizeCommited",m.onColumnResizeCommitted)},pc=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const{message:r}=e,n=gl(e,["message"]),l=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co).current.getLocaleText("errorOverlayDefaultLabel");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ya,Object.assign({ref:t},n),r||l)})),mc=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const r=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co).current.getLocaleText("noResultsOverlayLabel");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ya,Object.assign({ref:t},e),r)})),fc={BooleanCellTrueIcon:Tl,BooleanCellFalseIcon:Rl,OpenFilterButtonIcon:wl,ColumnFilteredIcon:Ol,ColumnSelectorIcon:xl,ColumnMenuIcon:Pl,ColumnSortedAscendingIcon:Cl,ColumnSortedDescendingIcon:vl,ColumnResizeIcon:Ml,DensityCompactIcon:Il,DensityStandardIcon:kl,DensityComfortableIcon:Dl,ExportIcon:zl},gc=Object.assign(Object.assign({},fc),{ColumnMenu:Bi,ColumnsPanel:es,ErrorOverlay:pc,FilterPanel:as,Footer:Cs,Header:vs,PreferencesPanel:ns,LoadingOverlay:ws,NoResultsOverlay:mc,NoRowsOverlay:Os,Pagination:Es,Panel:rs}),bc=(e,t,r)=>{const n=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const t={BooleanCellTrueIcon:e&&e.BooleanCellTrueIcon||gc.BooleanCellTrueIcon,BooleanCellFalseIcon:e&&e.BooleanCellFalseIcon||gc.BooleanCellFalseIcon,ColumnFilteredIcon:e&&e.ColumnFilteredIcon||gc.ColumnFilteredIcon,ColumnMenuIcon:e&&e.ColumnMenuIcon||gc.ColumnMenuIcon,ColumnResizeIcon:e&&e.ColumnResizeIcon||gc.ColumnResizeIcon,ColumnSelectorIcon:e&&e.ColumnSelectorIcon||gc.ColumnSelectorIcon,ColumnSortedAscendingIcon:e&&e.ColumnSortedAscendingIcon||gc.ColumnSortedAscendingIcon,ColumnSortedDescendingIcon:e&&e.ColumnSortedDescendingIcon||gc.ColumnSortedDescendingIcon,DensityComfortableIcon:e&&e.DensityComfortableIcon||gc.DensityComfortableIcon,DensityCompactIcon:e&&e.DensityCompactIcon||gc.DensityCompactIcon,DensityStandardIcon:e&&e.DensityStandardIcon||gc.DensityStandardIcon,ExportIcon:e&&e.ExportIcon||gc.ExportIcon,OpenFilterButtonIcon:e&&e.OpenFilterButtonIcon||gc.OpenFilterButtonIcon,ColumnMenu:e&&e.ColumnMenu||gc.ColumnMenu,ErrorOverlay:e&&e.ErrorOverlay||gc.ErrorOverlay,Footer:e&&e.Footer||gc.Footer,Header:e&&e.Header||gc.Header,Toolbar:e&&e.Toolbar,PreferencesPanel:e&&e.PreferencesPanel||gc.PreferencesPanel,LoadingOverlay:e&&e.LoadingOverlay||gc.LoadingOverlay,NoResultsOverlay:e&&e.NoResultsOverlay||gc.NoResultsOverlay,NoRowsOverlay:e&&e.NoRowsOverlay||gc.NoRowsOverlay,Pagination:e&&e.Pagination||gc.Pagination,FilterPanel:e&&e.FilterPanel||gc.FilterPanel,ColumnsPanel:e&&e.ColumnsPanel||gc.ColumnsPanel,Panel:e&&e.Panel||gc.Panel};return r.current.components=t,t}),[r,e]);return r.current.componentsProps=t,n},hc=()=>{const e=react__WEBPACK_IMPORTED_MODULE_0__.useContext(co),t=ea(e,Ea),r=ea(e,Aa),n=ea(e,ia),[l]=Qo(e);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({state:l,rows:r,columns:n,options:t,apiRef:e,rootElement:e.current.rootElementRef})),[l,r,n,t,e])};function Cc(e,t,r){const[n,l]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),o=Mo("useApi"),a=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,t,n)=>{n&&n.isPropagationStopped()||r.current.emit(e,t,n)}),[r]),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,t,n)=>{o.debug(`Binding ${e} event`),r.current.on(e,t,n);const l=r.current;return()=>{o.debug(`Clearing ${e} event`),l.removeListener(e,t)}}),[r,o]),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{a("componentError",e)}),[a]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{o.debug("Initializing grid api."),r.current.isInitialised=!0,r.current.rootElementRef=e,r.current.columnHeadersElementRef=t,l(!0);const n=r.current;return()=>{o.debug("Unmounting Grid component"),n.emit("unmount"),o.debug("Clearing all events listeners"),n.removeAllListeners()}}),[e,o,r,t]),Io(r,{subscribeEvent:i,publishEvent:a,showError:c},"GridCoreApi"),n}const vc=(e,t)=>{const r=Mo("useGridContainerProps"),[n,l,o]=Qo(t),a=react__WEBPACK_IMPORTED_MODULE_0__.useRef({width:0,height:0}),i=ea(t,Ea),c=ea(t,bo),u=ea(t,pa),d=ea(t,Ka),p=ea(t,gs),m=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(r.debug("Calculating virtual row count."),i.pagination&&!i.autoPageSize){const e=d-p.page*p.pageSize;return e>p.pageSize?p.pageSize:e}return d}),[r,i.autoPageSize,i.pagination,p.page,p.pageSize,d]),f=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{r.debug("Calculating scrollbar sizes.");const t=u>a.current.width,n={y:0,x:t?i.scrollbarSize:0};if(0===e)return{hasScrollX:t,hasScrollY:!1,scrollBarSize:n};const l=e*c,o=!i.autoPageSize&&!i.autoHeight&&l+n.x>a.current.height;return n.y=o?i.scrollbarSize:0,r.debug(`Scrollbar size on axis x: ${n.x}, y: ${n.y}`),{hasScrollX:t,hasScrollY:o,scrollBarSize:n}}),[r,u,i.scrollbarSize,i.autoPageSize,i.autoHeight,c]),g=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,n)=>{if(!e.current)return null;r.debug("Calculating container sizes.");const l=e.current.getBoundingClientRect();a.current={width:l.width,height:l.height},r.debug(`window Size - W: ${a.current.width} H: ${a.current.height} `);return{width:a.current.width-n.scrollBarSize.y,height:i.autoHeight?t*c:a.current.height-n.scrollBarSize.x}}),[r,i.autoHeight,c,e]),b=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((t,n,l)=>{if(!e||!e.current||0===u||Number.isNaN(u))return null;const o=t*c-a.current.height>2*c;if(i.autoPageSize||i.autoHeight||!o){const e=Math.floor(n.height/c),o=l.hasScrollY||t<e?t:e,i=o*c+l.scrollBarSize.x,s={isVirtualized:!1,virtualRowsCount:o,renderingZonePageSize:o,viewportPageSize:o,totalSizes:{width:u,height:i},dataContainerSizes:{width:u,height:i},renderingZoneScrollHeight:i-n.height,renderingZone:{width:u,height:i},windowSizes:a.current,lastPage:1};return r.debug("Fixed container props",s),s}const s=Math.floor(n.height/c),d=Math.ceil(t/s)-1,p=2*s,m=p*c,f=m-n.height;let g=d*f+n.height;const b=t%s;b>0&&(g=g-f+b*c);const h={isVirtualized:o,virtualRowsCount:t,viewportPageSize:s,totalSizes:{width:u,height:g||1},dataContainerSizes:{width:u,height:g||1},renderingZonePageSize:p,renderingZone:{width:u,height:m},renderingZoneScrollHeight:f,windowSizes:a.current,lastPage:d};return r.debug("virtualized container props",h),h}),[e,u,c,i.autoPageSize,i.autoHeight,r]),h=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,t)=>{let r=!1;l((n=>(r=e(n),r?t(n):n))),r&&o()}),[o,l]),C=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{r.debug("Refreshing container sizes");const e=m(),t=f(e),n=g(e,t);if(!n)return;h((e=>e.scrollBar!==t),(e=>Object.assign(Object.assign({},e),{scrollBar:t}))),h((e=>e.viewportSizes!==n),(e=>Object.assign(Object.assign({},e),{viewportSizes:n})));const l=b(e,n,t);h((e=>!pn(e.containerSizes,l)),(e=>Object.assign(Object.assign({},e),{containerSizes:l})))}),[b,f,g,m,r,h]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{C()}),[n.columns,n.options.hideFooter,C,d]),Ei(t,"resize",C)},wc=no({rootGridLabel:"мрежа",noRowsLabel:"Няма редове",errorOverlayDefaultLabel:"Възникна грешка.",toolbarDensity:"Гъстота",toolbarDensityLabel:"Гъстота",toolbarDensityCompact:"Компактна",toolbarDensityStandard:"Стандартна",toolbarDensityComfortable:"Комфортна",toolbarColumns:"Колони",toolbarColumnsLabel:"Покажи селектора на колони",toolbarFilters:"Филтри",toolbarFiltersLabel:"Покажи Филтрите",toolbarFiltersTooltipHide:"Скрий Филтрите",toolbarFiltersTooltipShow:"Покажи Филтрите",toolbarFiltersTooltipActive:e=>e+" активни филтри",columnsPanelTextFieldLabel:"Намери колона",columnsPanelTextFieldPlaceholder:"Заглавие на колона",columnsPanelDragIconLabel:"Пренареди на колона",columnsPanelShowAllButton:"Покажи Всички",columnsPanelHideAllButton:"Скрий Всички",filterPanelAddFilter:"Добави Филтър",filterPanelDeleteIconLabel:"Изтрий",filterPanelOperators:"Оператори",filterPanelOperatorAnd:"И",filterPanelOperatorOr:"Или",filterPanelColumns:"Колони",filterOperatorContains:"съдържа",filterOperatorEquals:"равно",filterOperatorStartsWith:"започва с",filterOperatorEndsWith:"завършва с",filterOperatorIs:"е",filterOperatorNot:"не е",filterOperatorAfter:"е след",filterOperatorOnOrAfter:"е на или след",filterOperatorBefore:"е преди",filterOperatorOnOrBefore:"е на или преди",filterPanelInputLabel:"Стойност",filterPanelInputPlaceholder:"Стойност на филтъра",columnMenuLabel:"Меню",columnMenuShowColumns:"Покажи колоните",columnMenuFilter:"Филтри",columnMenuHideColumn:"Скрий",columnMenuUnsort:"Отмени сортирането",columnMenuSortAsc:"Сортирай по възходящ ред",columnMenuSortDesc:"Сортирай по низходящ ред",columnHeaderFiltersTooltipActive:e=>e+" активни филтри",columnHeaderFiltersLabel:"Покажи Филтрите",columnHeaderSortIconLabel:"Сортирай",footerRowSelected:e=>1!==e?e.toLocaleString()+" избрани редове":e.toLocaleString()+" избран ред",footerTotalRows:"Общо Rедове:"},_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_28__.bgBG),Oc=no({rootGridLabel:"grid",noRowsLabel:"Keine Einträge",errorOverlayDefaultLabel:"Ein unvorhergesehener Fehler ist passiert.",toolbarDensity:"Zeilenhöhe",toolbarDensityLabel:"Zeilenhöhe",toolbarDensityCompact:"Kompakt",toolbarDensityStandard:"Standard",toolbarDensityComfortable:"Breit",toolbarColumns:"Spalten",toolbarColumnsLabel:"Zeige Spaltenauswahl",toolbarFilters:"Filter",toolbarFiltersLabel:"Zeige Filter",toolbarFiltersTooltipHide:"Verstecke Filter",toolbarFiltersTooltipShow:"Zeige Filter",toolbarFiltersTooltipActive:e=>1!==e?e+" aktive Filter":e+" aktiver Filter",columnsPanelTextFieldLabel:"Finde Spalte",columnsPanelTextFieldPlaceholder:"Spaltenüberschrift",columnsPanelDragIconLabel:"Spalte umsortieren",columnsPanelShowAllButton:"Zeige alle",columnsPanelHideAllButton:"Verstecke alle",filterPanelAddFilter:"Filter hinzufügen",filterPanelDeleteIconLabel:"Löschen",filterPanelOperators:"Operatoren",filterPanelOperatorAnd:"Und",filterPanelOperatorOr:"Oder",filterPanelColumns:"Spalten",filterPanelInputLabel:"Wert",filterPanelInputPlaceholder:"Wert filtern",filterOperatorContains:"beinhaltet",filterOperatorEquals:"ist gleich",filterOperatorStartsWith:"beginnt mit",filterOperatorEndsWith:"endet mit",filterOperatorIs:"ist",filterOperatorNot:"ist nicht",filterOperatorOnOrAfter:"ist an oder nach",filterOperatorBefore:"ist vor",filterOperatorOnOrBefore:"ist an oder vor",filterOperatorAfter:"ist nach",columnMenuLabel:"Menu",columnMenuShowColumns:"Zeige alle Spalten",columnMenuFilter:"Filter",columnMenuHideColumn:"Verstecken",columnMenuUnsort:"Sortierung deaktivieren",columnMenuSortAsc:"Sortiere aufsteigend",columnMenuSortDesc:"Sortiere absteigend",columnHeaderFiltersTooltipActive:e=>1!==e?e+" aktive Filter":e+" aktiver Filter",columnHeaderFiltersLabel:"Zeige Filter",columnHeaderSortIconLabel:"Sortieren",footerRowSelected:e=>1!==e?e.toLocaleString()+" Einträge ausgewählt":e.toLocaleString()+" Eintrag ausgewählt",footerTotalRows:"Gesamt:"},_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_28__.deDE),yc=no({rootGridLabel:"πλέγμα",noRowsLabel:"Δεν υπάρχουν καταχωρήσεις",errorOverlayDefaultLabel:"Παρουσιάστηκε απρόβλεπτο σφάλμα.",toolbarDensity:"Ύψος σειράς",toolbarDensityLabel:"Ύψος σειράς",toolbarDensityCompact:"Συμπαγής",toolbarDensityStandard:"Προκαθορισμένο",toolbarDensityComfortable:"Πλατύ",toolbarColumns:"Στήλες",toolbarColumnsLabel:"Επιλέξτε στήλες",toolbarFilters:"Φίλτρα",toolbarFiltersLabel:"Εμφάνιση φίλτρων",toolbarFiltersTooltipHide:"Απόκρυψη φίλτρων",toolbarFiltersTooltipShow:"Εμφάνιση φίλτρων",toolbarFiltersTooltipActive:e=>1!==e?e+" ενεργά φίλτρα":e+" ενεργό φίλτρο",toolbarExport:"Εξαγωγή",toolbarExportLabel:"Εξαγωγή",toolbarExportCSV:"Λήψη ως CSV",columnsPanelTextFieldLabel:"Εύρεση στήλης",columnsPanelTextFieldPlaceholder:"Επικεφαλίδα στήλης",columnsPanelDragIconLabel:"Αναδιάταξη στήλης",columnsPanelShowAllButton:"Προβολή όλων",columnsPanelHideAllButton:"Απόκρυψη όλων",filterPanelAddFilter:"Προσθήκη φίλτρου",filterPanelDeleteIconLabel:"Διαγραφή",filterPanelOperators:"Τελεστές",filterPanelOperatorAnd:"Καί",filterPanelOperatorOr:"Ή",filterPanelColumns:"Στήλες",filterPanelInputLabel:"Τιμή",filterPanelInputPlaceholder:"Τιμή φίλτρου",filterOperatorContains:"περιέχει",filterOperatorEquals:"ισούται",filterOperatorStartsWith:"ξεκινάει με",filterOperatorEndsWith:"τελειώνει με",filterOperatorIs:"είναι",filterOperatorNot:"δεν είναι",filterOperatorAfter:"είναι μετά",filterOperatorOnOrAfter:"είναι ίσο ή μετά",filterOperatorBefore:"είναι πριν",filterOperatorOnOrBefore:"είναι ίσο ή πριν",columnMenuLabel:"Μενού",columnMenuShowColumns:"Εμφάνιση στηλών",columnMenuFilter:"Φίλτρο",columnMenuHideColumn:"Απόκρυψη",columnMenuUnsort:"Απενεργοποίηση ταξινόμησης",columnMenuSortAsc:"Ταξινόμηση σε αύξουσα σειρά",columnMenuSortDesc:"Ταξινόμηση σε φθίνουσα σειρά",columnHeaderFiltersTooltipActive:e=>1!==e?e+" ενεργά φίλτρα":e+" ενεργό φίλτρο",columnHeaderFiltersLabel:"Εμφάνιση φίλτρων",columnHeaderSortIconLabel:"Ταξινόμηση",footerRowSelected:e=>1!==e?e.toLocaleString()+" επιλεγμένες γραμμές":e.toLocaleString()+" επιλεγμένη γραμμή",footerTotalRows:"Σύνολο Γραμμών:"}),Ec=no(Do,_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_28__.enUS),Sc=no({rootGridLabel:"grilla",noRowsLabel:"Sin filas",errorOverlayDefaultLabel:"Ha ocurrido un error.",toolbarDensity:"Densidad",toolbarDensityLabel:"Densidad",toolbarDensityCompact:"Compacta",toolbarDensityStandard:"Standard",toolbarDensityComfortable:"Comoda",toolbarColumns:"Columnas",toolbarColumnsLabel:"Seleccionar columnas",toolbarFilters:"Filtros",toolbarFiltersLabel:"Mostrar filtros",toolbarFiltersTooltipHide:"Ocultar filtros",toolbarFiltersTooltipShow:"Mostrar filtros",toolbarFiltersTooltipActive:e=>e>1?e+" filtros activos":e+" filtro activo",toolbarExport:"Exportar",toolbarExportLabel:"Exportar",toolbarExportCSV:"Descargar como CSV",columnsPanelTextFieldLabel:"Columna de búsqueda",columnsPanelTextFieldPlaceholder:"Título de columna",columnsPanelDragIconLabel:"Reorder columna",columnsPanelShowAllButton:"Mostrar todo",columnsPanelHideAllButton:"Ocultar todo",filterPanelAddFilter:"Agregar filtro",filterPanelDeleteIconLabel:"Borrar",filterPanelOperators:"Operadores",filterPanelOperatorAnd:"Y",filterPanelOperatorOr:"O",filterPanelColumns:"Columnas",filterPanelInputLabel:"Valor",filterPanelInputPlaceholder:"Valor de filtro",filterOperatorContains:"contiene",filterOperatorEquals:"es igual",filterOperatorStartsWith:"comienza con",filterOperatorEndsWith:"termina con",filterOperatorIs:"es",filterOperatorNot:"no es",filterOperatorAfter:"es posterior",filterOperatorOnOrAfter:"es en o posterior",filterOperatorBefore:"es anterior",filterOperatorOnOrBefore:"es en o anterior",columnMenuLabel:"Menú",columnMenuShowColumns:"Mostrar columnas",columnMenuFilter:"Filtro",columnMenuHideColumn:"Ocultar",columnMenuUnsort:"Desordenar",columnMenuSortAsc:"Ordenar ASC",columnMenuSortDesc:"Ordenar DESC",columnHeaderFiltersTooltipActive:e=>e>1?e+" filtros activos":e+" filtro activo",columnHeaderFiltersLabel:"Mostrar filtros",columnHeaderSortIconLabel:"Ordenar",footerRowSelected:e=>e>1?e.toLocaleString()+" filas seleccionadas":e.toLocaleString()+" fila seleccionada",footerTotalRows:"Filas Totales:"},_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_28__.esES),xc=no({rootGridLabel:"grid",noRowsLabel:"Pas de résultats",noResultsOverlayLabel:"Aucun résultat.",errorOverlayDefaultLabel:"Une erreur est apparue.",toolbarDensity:"Densité",toolbarDensityLabel:"Densité",toolbarDensityCompact:"Compact",toolbarDensityStandard:"Standard",toolbarDensityComfortable:"Confortable",toolbarColumns:"Colonnes",toolbarColumnsLabel:"Choisir les colonnes",toolbarFilters:"Filtres",toolbarFiltersLabel:"Afficher les filtres",toolbarFiltersTooltipHide:"Cacher les filtres",toolbarFiltersTooltipShow:"Afficher les filtres",toolbarFiltersTooltipActive:e=>e>1?e+" filtres actifs":e+" filtre actif",columnsPanelTextFieldLabel:"Chercher colonne",columnsPanelTextFieldPlaceholder:"Titre de la colonne",columnsPanelDragIconLabel:"Réorganiser la colonne",columnsPanelShowAllButton:"Tout afficher",columnsPanelHideAllButton:"Tout cacher",filterPanelAddFilter:"Ajouter un filtre",filterPanelDeleteIconLabel:"Supprimer",filterPanelOperators:"Opérateurs",filterPanelOperatorAnd:"Et",filterPanelOperatorOr:"Ou",filterPanelColumns:"Colonnes",filterPanelInputLabel:"Valeur",filterPanelInputPlaceholder:"Filtrer la valeur",filterOperatorContains:"contient",filterOperatorEquals:"égal à",filterOperatorStartsWith:"commence par",filterOperatorEndsWith:"se termine par",filterOperatorIs:"est",filterOperatorNot:"n'est pas",filterOperatorOnOrAfter:"égal ou postérieur",filterOperatorAfter:"postérieur",filterOperatorOnOrBefore:"égal ou postérieur",filterOperatorBefore:"antérieur",columnMenuLabel:"Menu",columnMenuShowColumns:"Afficher les colonnes",columnMenuFilter:"Filtrer",columnMenuHideColumn:"Cacher",columnMenuUnsort:"Annuler le tri",columnMenuSortAsc:"Tri ascendant",columnMenuSortDesc:"Tri descendant",columnHeaderFiltersTooltipActive:e=>e>1?e+" filtres actifs":e+" filtre actif",columnHeaderFiltersLabel:"Afficher les filtres",columnHeaderSortIconLabel:"Trier",footerRowSelected:e=>e>1?e.toLocaleString()+" lignes sélectionnées":e.toLocaleString()+" ligne sélectionnée",footerTotalRows:"Lignes totales :",checkboxSelectionHeaderName:"Sélection"},_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_28__.frFR),Mc=no({noRowsLabel:"Nessun record",errorOverlayDefaultLabel:"Si è verificato un errore.",toolbarDensity:"Densità",toolbarDensityLabel:"Densità",toolbarDensityCompact:"Compact",toolbarDensityStandard:"Standard",toolbarDensityComfortable:"Confortable",toolbarColumns:"Colonne",toolbarColumnsLabel:"Seleziona le colonne",toolbarFilters:"Filtri",toolbarFiltersLabel:"Mostra i filtri",toolbarFiltersTooltipHide:"Nascondi i filtri",toolbarFiltersTooltipShow:"Mostra i filtri",toolbarFiltersTooltipActive:e=>e>1?e+" filtri attivi":e+" filtro attivo",columnsPanelTextFieldLabel:"Cerca colonna",columnsPanelTextFieldPlaceholder:"Titolo della colonna",columnsPanelDragIconLabel:"Riordina la colonna",columnsPanelShowAllButton:"Mostra tutto",columnsPanelHideAllButton:"Nascondi tutto",filterPanelAddFilter:"Aggiungi un filtro",filterPanelDeleteIconLabel:"Rimuovi",filterPanelOperators:"Operatori",filterPanelOperatorAnd:"E (and)",filterPanelOperatorOr:"O (or)",filterPanelColumns:"Colonne",filterPanelInputLabel:"Valore",filterPanelInputPlaceholder:"Filtra il valore",filterOperatorContains:"contiene",filterOperatorEquals:"uguale a",filterOperatorStartsWith:"comincia per",filterOperatorEndsWith:"termina per",filterOperatorIs:"uguale a",filterOperatorNot:"diversa da",filterOperatorOnOrAfter:"a partire dal",filterOperatorAfter:"dopo il",filterOperatorOnOrBefore:"fino al",filterOperatorBefore:"prima del",columnMenuLabel:"Menu",columnMenuShowColumns:"Mostra le colonne",columnMenuFilter:"Filtra",columnMenuHideColumn:"Nascondi",columnMenuUnsort:"Annulla l'ordinamento",columnMenuSortAsc:"Ordinamento crescente",columnMenuSortDesc:"Ordinamento decrescente",columnHeaderFiltersTooltipActive:e=>e>1?e+" filtri attivi":e+" filtro attivo",columnHeaderFiltersLabel:"Mostra i filtri",columnHeaderSortIconLabel:"Ordina",footerRowSelected:e=>e>1?e.toLocaleString()+" record selezionati":e.toLocaleString()+" record selezionato",footerTotalRows:"Record totali :",checkboxSelectionHeaderName:"Seleziona"},_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_28__.itIT),Ic=no({rootGridLabel:"grid",noRowsLabel:"行がありません",errorOverlayDefaultLabel:"エラーが発生しました。",toolbarDensity:"行間隔",toolbarDensityLabel:"行間隔",toolbarDensityCompact:"コンパクト",toolbarDensityStandard:"標準",toolbarDensityComfortable:"ひろめ",toolbarColumns:"列一覧",toolbarColumnsLabel:"列選択",toolbarFilters:"フィルター",toolbarFiltersLabel:"フィルター表示",toolbarFiltersTooltipHide:"フィルター非表示",toolbarFiltersTooltipShow:"フィルター表示",toolbarFiltersTooltipActive:e=>e+"件のフィルターを適用中",toolbarExport:"エクスポート",toolbarExportLabel:"エクスポート",toolbarExportCSV:"CSVダウンロード",columnsPanelTextFieldLabel:"列検索",columnsPanelTextFieldPlaceholder:"検索クエリを入力...",columnsPanelDragIconLabel:"列並べ替え",columnsPanelShowAllButton:"すべて表示",columnsPanelHideAllButton:"すべて非表示",filterPanelAddFilter:"フィルター追加",filterPanelDeleteIconLabel:"削除",filterPanelOperators:"オペレータ",filterPanelOperatorAnd:"And",filterPanelOperatorOr:"Or",filterPanelColumns:"列",filterPanelInputLabel:"値",filterPanelInputPlaceholder:"値を入力...",filterOperatorContains:"...を含む",filterOperatorEquals:"...に等しい",filterOperatorStartsWith:"...で始まる",filterOperatorEndsWith:"...で終わる",filterOperatorIs:"...である",filterOperatorNot:"...でない",filterOperatorAfter:"...より後ろ",filterOperatorOnOrAfter:"...以降",filterOperatorBefore:"...より前",filterOperatorOnOrBefore:"...以前",columnMenuLabel:"メニュー",columnMenuShowColumns:"列表示",columnMenuFilter:"フィルター",columnMenuHideColumn:"列非表示",columnMenuUnsort:"ソート解除",columnMenuSortAsc:"昇順ソート",columnMenuSortDesc:"降順ソート",columnHeaderFiltersTooltipActive:e=>e+"件のフィルターを適用中",columnHeaderFiltersLabel:"フィルター表示",columnHeaderSortIconLabel:"ソート",footerRowSelected:e=>e+"行を選択中",footerTotalRows:"総行数:"},_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_28__.jaJP),kc=no({rootGridLabel:"grid",noRowsLabel:"Geen resultaten.",errorOverlayDefaultLabel:"Er deed zich een fout voor.",toolbarDensity:"Grootte",toolbarDensityLabel:"Grootte",toolbarDensityCompact:"Compact",toolbarDensityStandard:"Normaal",toolbarDensityComfortable:"Breed",toolbarColumns:"Kolommen",toolbarColumnsLabel:"Kies kolommen",toolbarFilters:"Filters",toolbarFiltersLabel:"Toon filters",toolbarFiltersTooltipHide:"Verberg filters",toolbarFiltersTooltipShow:"Toon filters",toolbarFiltersTooltipActive:e=>e>1?e+" actieve filters":e+" filter actief",columnsPanelTextFieldLabel:"Zoek kolom",columnsPanelTextFieldPlaceholder:"Kolomtitel",columnsPanelDragIconLabel:"Kolom herschikken",columnsPanelShowAllButton:"Alles tonen",columnsPanelHideAllButton:"Alles verbergen",filterPanelAddFilter:"Filter toevoegen",filterPanelDeleteIconLabel:"Verwijderen",filterPanelOperators:"Operatoren",filterPanelOperatorAnd:"En",filterPanelOperatorOr:"Of",filterPanelColumns:"Kolommen",filterPanelInputLabel:"Waarde",filterPanelInputPlaceholder:"Filter waarde",filterOperatorContains:"bevat",filterOperatorEquals:"gelijk aan",filterOperatorStartsWith:"begint met",filterOperatorEndsWith:"eindigt met",filterOperatorIs:"is",filterOperatorNot:"is niet",filterOperatorOnOrAfter:"is gelijk of er voor",filterOperatorAfter:"is voor",filterOperatorOnOrBefore:"is gelijk of er na",filterOperatorBefore:"is na",columnMenuLabel:"Menu",columnMenuShowColumns:"Toon kolommen",columnMenuFilter:"Filteren",columnMenuHideColumn:"Verbergen",columnMenuUnsort:"Annuleer sortering",columnMenuSortAsc:"Oplopend sorteren",columnMenuSortDesc:"Aflopend sorteren",columnHeaderFiltersTooltipActive:e=>e>1?e+" actieve filters":e+" filter actief",columnHeaderFiltersLabel:"Toon filters",columnHeaderSortIconLabel:"Sorteren",footerRowSelected:e=>e>1?e.toLocaleString()+" rijen geselecteerd":e.toLocaleString()+" rij geselecteerd",footerTotalRows:"Totaal:"},_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_28__.nlNL),Dc={rootGridLabel:"grid",noRowsLabel:"Brak danych",errorOverlayDefaultLabel:"Wystąpił błąd.",toolbarDensity:"Wysokość rzędu",toolbarDensityLabel:"Wysokość rzędu",toolbarDensityCompact:"Kompakt",toolbarDensityStandard:"Standard",toolbarDensityComfortable:"Komfort",toolbarColumns:"Kolumny",toolbarColumnsLabel:"Zaznacz kolumny",toolbarFilters:"Filtry",toolbarFiltersLabel:"Pokaż filtry",toolbarFiltersTooltipHide:"Ukryj filtry",toolbarFiltersTooltipShow:"Pokaż filtry",toolbarFiltersTooltipActive:e=>"Liczba aktywnych filtrów: "+e,toolbarExport:"Eksportuj",toolbarExportLabel:"Eksportuj",toolbarExportCSV:"Pobierz jako plik CSV",columnsPanelTextFieldLabel:"Znajdź kolumnę",columnsPanelTextFieldPlaceholder:"Tytuł kolumny",columnsPanelDragIconLabel:"Zmień kolejność kolumn",columnsPanelShowAllButton:"Pokaż wszystko",columnsPanelHideAllButton:"Ukryj wszystko",filterPanelAddFilter:"Dodaj filtr",filterPanelDeleteIconLabel:"Usuń",filterPanelOperators:"Operator",filterPanelOperatorAnd:"I",filterPanelOperatorOr:"Lub",filterPanelColumns:"Kolumny",filterPanelInputLabel:"Wartość",filterPanelInputPlaceholder:"Filtrowana wartość",filterOperatorContains:"zawiera",filterOperatorEquals:"równa się",filterOperatorStartsWith:"zaczyna się od",filterOperatorEndsWith:"kończy się na",filterOperatorIs:"równa się",filterOperatorNot:"różne",filterOperatorAfter:"większe niż",filterOperatorOnOrAfter:"większe lub równe",filterOperatorBefore:"mniejsze niż",filterOperatorOnOrBefore:"mniejsze lub równe",columnMenuLabel:"Menu",columnMenuShowColumns:"Pokaż wszystkie kolumny",columnMenuFilter:"Filtr",columnMenuHideColumn:"Ukryj",columnMenuUnsort:"Anuluj sortowanie",columnMenuSortAsc:"Sortuj rosnąco",columnMenuSortDesc:"Sortuj malejąco",columnHeaderFiltersTooltipActive:e=>"Liczba aktywnych filtrów: "+e,columnHeaderFiltersLabel:"Pokaż filtry",columnHeaderSortIconLabel:"Sortuj",footerRowSelected:e=>"Liczba wybranych wierszy: "+e.toLocaleString(),footerTotalRows:"Łączna liczba wierszy:"},Pc=no(Dc,_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_28__.plPL),Rc=no({rootGridLabel:"Grade",noRowsLabel:"Nenhuma linha",noResultsOverlayLabel:"Nenhum resultado encontrado.",errorOverlayDefaultLabel:"Ocorreu um erro.",toolbarDensity:"Densidade",toolbarDensityLabel:"Densidade",toolbarDensityCompact:"Compacto",toolbarDensityStandard:"Padrão",toolbarDensityComfortable:"Confortável",toolbarColumns:"Colunas",toolbarColumnsLabel:"Exibir seletor de colunas",toolbarFilters:"Filtros",toolbarFiltersLabel:"Exibir filtros",toolbarFiltersTooltipHide:"Ocultar filtros",toolbarFiltersTooltipShow:"Exibir filtros",toolbarFiltersTooltipActive:e=>`${e} ${1!==e?"filtros":"filtro"} ${1!==e?"ativos":"ativo"}`,columnsPanelTextFieldLabel:"Localizar coluna",columnsPanelTextFieldPlaceholder:"Título da coluna",columnsPanelDragIconLabel:"Reordenar Coluna",columnsPanelShowAllButton:"Mostrar todas",columnsPanelHideAllButton:"Ocultar todas",filterPanelAddFilter:"Adicionar filtro",filterPanelDeleteIconLabel:"Excluir",filterPanelOperators:"Operadores",filterPanelOperatorAnd:"E",filterPanelOperatorOr:"Ou",filterPanelColumns:"Colunas",filterPanelInputLabel:"Valor",filterPanelInputPlaceholder:"Filtrar valor",filterOperatorContains:"contém",filterOperatorEquals:"é igual a",filterOperatorStartsWith:"começa com",filterOperatorEndsWith:"termina com",filterOperatorIs:"é",filterOperatorNot:"não é",filterOperatorOnOrAfter:"em ou após",filterOperatorBefore:"antes de",filterOperatorOnOrBefore:"em ou antes de",filterOperatorAfter:"após",columnMenuLabel:"Menu",columnMenuShowColumns:"Exibir colunas",columnMenuFilter:"Filtrar",columnMenuHideColumn:"Ocultar",columnMenuUnsort:"Desfazer ordenação",columnMenuSortAsc:"Ordenar do menor para o maior",columnMenuSortDesc:"Ordenar do maior para o menor",columnHeaderFiltersTooltipActive:e=>`${e} ${1!==e?"filtros":"filtro"} ${1!==e?"ativos":"ativo"}`,columnHeaderFiltersLabel:"Exibir Filtros",columnHeaderSortIconLabel:"Ordenar",footerRowSelected:e=>1!==e?e.toLocaleString()+" linhas selecionadas":e.toLocaleString()+" linha selecionada",footerTotalRows:"Total de linhas:",checkboxSelectionHeaderName:"Seleção",booleanCellTrueLabel:"sim",booleanCellFalseLabel:"não"},_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_28__.ptBR),Fc={noRowsLabel:"Нет строк",errorOverlayDefaultLabel:"Обнаружена ошибка.",toolbarDensity:"Высота строки",toolbarDensityLabel:"Высота строки",toolbarDensityCompact:"Компактная",toolbarDensityStandard:"Стандартная",toolbarDensityComfortable:"Комфортная",toolbarColumns:"Столбцы",toolbarColumnsLabel:"Выделите столбцы",toolbarFilters:"Фильтры",toolbarFiltersLabel:"Показать фильтры",toolbarFiltersTooltipHide:"Скрыть фильтры",toolbarFiltersTooltipShow:"Показать фильтры",toolbarFiltersTooltipActive:e=>{let t="активных фильтров";const r=e%10;return r>1&&r<5?t="активных фильтра":1===r&&(t="активный фильтр"),`${e} ${t}`},toolbarExport:"Экспорт",toolbarExportLabel:"Экспорт",toolbarExportCSV:"Скачать в формате CSV",columnsPanelTextFieldLabel:"Найти столбец",columnsPanelTextFieldPlaceholder:"Заголовок столбца",columnsPanelDragIconLabel:"Изменить порядок столбца",columnsPanelShowAllButton:"Показать все",columnsPanelHideAllButton:"Скрыть все",filterPanelAddFilter:"Добавить фильтр",filterPanelDeleteIconLabel:"Удалить",filterPanelOperators:"Операторы",filterPanelOperatorAnd:"И",filterPanelOperatorOr:"Или",filterPanelColumns:"Столбцы",filterPanelInputLabel:"Значение",filterPanelInputPlaceholder:"Значение фильтра",filterOperatorContains:"содержит",filterOperatorEquals:"равен",filterOperatorStartsWith:"начинается с",filterOperatorEndsWith:"заканчивается на",filterOperatorIs:"равен",filterOperatorNot:"не равен",filterOperatorAfter:"больше чем",filterOperatorOnOrAfter:"больше или равно",filterOperatorBefore:"меньше чем",filterOperatorOnOrBefore:"меньше или равно",filterValueAny:"любой",filterValueTrue:"истина",filterValueFalse:"ложь",columnMenuLabel:"Меню",columnMenuShowColumns:"Показать столбцы",columnMenuFilter:"Фильтр",columnMenuHideColumn:"Скрыть",columnMenuUnsort:"Отменить сортировку",columnMenuSortAsc:"Сортировать по возрастанию",columnMenuSortDesc:"Сортировать по убыванию",columnHeaderFiltersTooltipActive:e=>{let t="активных фильтров";const r=e%10;return r>1&&r<5?t="активных фильтра":1===r&&(t="активный фильтр"),`${e} ${t}`},columnHeaderFiltersLabel:"Показать фильтры",columnHeaderSortIconLabel:"Сортировать",footerRowSelected:e=>{let t="строк выбрано";const r=e%10;return r>1&&r<5?t="строки выбраны":1===r&&(t="строка выбрана"),`${e} ${t}`},footerTotalRows:"Всего строк:",checkboxSelectionHeaderName:"Выбор флажка",booleanCellTrueLabel:"истина",booleanCellFalseLabel:"ложь"},Lc=no(Fc,_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_28__.ruRU),jc={rootGridLabel:"сітка",noRowsLabel:"Немає рядків",errorOverlayDefaultLabel:"Виявлено помилку.",toolbarDensity:"Висота рядка",toolbarDensityLabel:"Висота рядка",toolbarDensityCompact:"Компактний",toolbarDensityStandard:"Стандартний",toolbarDensityComfortable:"Комфортний",toolbarColumns:"Стовпці",toolbarColumnsLabel:"Виділіть стовпці",toolbarFilters:"Фільтри",toolbarFiltersLabel:"Показати фільтри",toolbarFiltersTooltipHide:"Сховати фільтри",toolbarFiltersTooltipShow:"Показати фільтри",toolbarFiltersTooltipActive:e=>1!==e?e+" активні фільтри":e+" активний фільтр",toolbarExport:"Експорт",toolbarExportLabel:"Експорт",toolbarExportCSV:"Завантажити у форматі CSV",columnsPanelTextFieldLabel:"Знайти стовпець",columnsPanelTextFieldPlaceholder:"Заголовок стовпця",columnsPanelDragIconLabel:"Змінити порядок стовпця",columnsPanelShowAllButton:"Показати усі",columnsPanelHideAllButton:"Сховати усі",filterPanelAddFilter:"Додати фільтр",filterPanelDeleteIconLabel:"Видалити",filterPanelOperators:"Оператори",filterPanelOperatorAnd:"І",filterPanelOperatorOr:"Або",filterPanelColumns:"Стовпці",filterPanelInputLabel:"Значення",filterPanelInputPlaceholder:"Значення фільтра",filterOperatorContains:"містить",filterOperatorEquals:"дорівнює",filterOperatorStartsWith:"починається з",filterOperatorEndsWith:"закінчується на",filterOperatorIs:"дорівнює",filterOperatorNot:"не",filterOperatorAfter:"більше ніж",filterOperatorOnOrAfter:"більше або дорівнює",filterOperatorBefore:"менше ніж",filterOperatorOnOrBefore:"менше або дорівнює",filterValueAny:"будь-який",filterValueTrue:"правда",filterValueFalse:"помилковий",columnMenuLabel:"Меню",columnMenuShowColumns:"Показати стовпці",columnMenuFilter:"Фільтр",columnMenuHideColumn:"Сховати",columnMenuUnsort:"Скасувати сортування",columnMenuSortAsc:"Сортувати за зростанням",columnMenuSortDesc:"Сортувати за спаданням",columnHeaderFiltersTooltipActive:e=>1!==e?e+" активні фільтри":e+" активний фільтр",columnHeaderFiltersLabel:"Показати фільтри",columnHeaderSortIconLabel:"Сортувати",footerRowSelected:e=>1!==e?e.toLocaleString()+" вибрані рядки":e.toLocaleString()+" вибраний рядок",footerTotalRows:"Всього рядків:",checkboxSelectionHeaderName:"Вибір прапорця",booleanCellTrueLabel:"правда",booleanCellFalseLabel:"помилковий"},zc=no(jc,_material_ui_core_locale__WEBPACK_IMPORTED_MODULE_28__.ukUA);class Tc extends react__WEBPACK_IMPORTED_MODULE_0__.Component{static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){this.props.api.current&&(this.logError(e),this.props.api.current.showError({error:e,errorInfo:t}))}logError(e,t){this.props.logger.error(`An unexpected error occurred. Error: ${e&&e.message}. `,e,t)}render(){var e;return this.props.hasError||(null===(e=this.state)||void 0===e?void 0:e.hasError)?this.props.render(this.props.componentProps||this.state):this.props.children}}function Ac(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"MuiDataGrid-main"},e.children)}function _c(e,t){switch(t.type){case"options::UPDATE":return ro(e,t.payload);default:throw new Error(`Material-UI: Action ${t.type} not found.`)}}const Gc=e=>{if("string"==typeof e){const t=e.replace(/"/g,'""');return t.includes(",")?`"${t}"`:t}return e};function Hc(e,t,r,n){let l=[...t.keys()];const o=Object.keys(r);o.length&&(l=l.filter((e=>o.includes(""+e))));return`${e.filter((e=>e.field!==ri.field)).map((e=>Gc(e.headerName||e.field))).toString()+"\r\n"}${l.reduce(((t,r)=>`${t}${function(e,t,r){const n=[];return t.forEach((t=>t.field!==ri.field&&n.push(Gc(r(e,t.field))))),n}(r,e,n)}\r\n`),"").trim()}`.trim()}const Nc=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){var r,n,l,a,c,u;const d=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),p=(0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.useForkRef)(d,t),m=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),f=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),g=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),b=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),h=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),C=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),v=ic(e.apiRef),w=ea(v,ja),O=ea(v,Ka),y=function(e,t){var r,n;const l=Mo("useOptionsProp"),[o,a]=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{var t,r;if(null===(r=null===(t=e.current)||void 0===t?void 0:t.rootElementRef)||void 0===r?void 0:r.current){const t=io((0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__.ownerDocument)(e.current.rootElementRef.current));return l.debug(`Detected Scroll Bar size ${t}.`),t}return 0}),[e,l,null===(n=null===(r=e.current)||void 0===r?void 0:r.rootElementRef)||void 0===n?void 0:n.current]);oo((()=>{a(c())}),[c]);const u=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>Object.assign(Object.assign({},t),{localeText:Object.assign(Object.assign({},Do),t.localeText),scrollbarSize:null==t.scrollbarSize?o:t.scrollbarSize||0})),[o,t]),{gridState:d,dispatch:p}=_s(e,"options",_c,Object.assign({},Fo)),m=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{p({type:"options::UPDATE",payload:e})}),[p]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{m(u)}),[u,m]),d.options}(v,e);xo(y.logger,y.logLevel);const E=Mo("GridComponent");Cc(d,b,v);const S=function(e,t){const[r,n]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),l=e=>{n(e)};return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>e.current.subscribeEvent("componentError",l)),[e]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{e.current.showError(t.error)}),[e,t.error]),r}(v,e);!function(e,t){var r;const n=Mo("useEvents"),l=ea(t,Ea),o=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>(...r)=>t.current.publishEvent(e,...r)),[t]),a=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{t.current.publishEvent("focusout",e),null===e.relatedTarget&&t.current.publishEvent("gridFocusOut",e)}),[t]),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{var e;return t.current.publishEvent("resize",{containerSize:null===(e=t.current.getState().containerSizes)||void 0===e?void 0:e.windowSizes})}),[t]);Io(t,{resize:i},"GridEventsApi"),xi(t,"columnHeaderClick",l.onColumnHeaderClick),xi(t,"columnHeaderDoubleClick",l.onColumnHeaderDoubleClick),xi(t,"columnHeaderOver",l.onColumnHeaderOver),xi(t,"columnHeaderOut",l.onColumnHeaderOut),xi(t,"columnHeaderEnter",l.onColumnHeaderEnter),xi(t,"columnHeaderLeave",l.onColumnHeaderLeave),xi(t,"columnOrderChange",l.onColumnOrderChange),xi(t,"cellClick",l.onCellClick),xi(t,"cellDoubleClick",l.onCellDoubleClick),xi(t,"cellOver",l.onCellOver),xi(t,"cellOut",l.onCellOut),xi(t,"cellEnter",l.onCellEnter),xi(t,"cellLeave",l.onCellLeave),xi(t,"cellKeydown",l.onCellKeyDown),xi(t,"cellBlur",l.onCellBlur),xi(t,"rowDoubleClick",l.onRowDoubleClick),xi(t,"rowClick",l.onRowClick),xi(t,"rowOver",l.onRowOver),xi(t,"rowOut",l.onRowOut),xi(t,"rowEnter",l.onRowEnter),xi(t,"rowLeave",l.onRowLeave),xi(t,"resize",l.onResize),xi(t,"componentError",l.onError),xi(t,"stateChange",l.onStateChange),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{var r;if(e&&e.current&&(null===(r=t.current)||void 0===r?void 0:r.isInitialised)){n.debug("Binding events listeners");const r=o("keydown"),l=o("keyup"),i=e.current;i.addEventListener("focusout",a),i.addEventListener("keydown",r),i.addEventListener("keyup",l),t.current.isInitialised=!0;const s=t.current;return()=>{n.debug("Clearing all events listeners"),s.publishEvent("unmount"),i.removeEventListener("focusout",a),i.removeEventListener("keydown",r),i.removeEventListener("keyup",l),s.removeAllListeners()}}}),[e,null===(r=t.current)||void 0===r?void 0:r.isInitialised,o,n,a,t])}(d,v),(e=>{const{localeText:t}=ea(e,Ea);Io(e,{getLocaleText:react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{if(null==t[e])throw new Error(`Missing translation for key ${e}.`);return t[e]}),[t])},"LocaleTextApi")})(v);const x=function(e){const t=Mo("useResizeContainer"),{autoHeight:r}=ea(e,Ea);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((n=>{const l=/jsdom/.test(window.navigator.userAgent);0!==n.height||r||l||t.warn(["The parent of the grid has an empty height.","You need to make sure the container has an intrinsic height.","The grid displays with a height of 0px.","","You can find a solution in the docs:","https://material-ui.com/components/data-grid/rendering/#layout"].join("\n")),0!==n.width||l||t.warn(["The parent of the grid has an empty width.","You need to make sure the container has an intrinsic width.","The grid displays with a width of 0px.","","You can find a solution in the docs:","https://material-ui.com/components/data-grid/rendering/#layout"].join("\n")),t.info("resized...",n),e.current.resize()}),[t,e,r])}(v);As(e.columns,v),Zs(v),Js(v,e.rows,e.getRowId),Qs(v),Hs(v),Bs(0,v),$s(0,v),ec(v),tc(v,e.rows),Fs(v),Us(v),Gs(v,e.rows),vc(h,v),(e=>{const t=Mo("useDensity"),{density:r,rowHeight:n,headerHeight:l}=ea(e,Ea),[,o,a]=Qo(e),i=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,t,r)=>{switch(e){case Po.Compact:return{value:e,headerHeight:Math.floor(.7*t),rowHeight:Math.floor(.7*r)};case Po.Comfortable:return{value:e,headerHeight:Math.floor(1.3*t),rowHeight:Math.floor(1.3*r)};default:return{value:e,headerHeight:t,rowHeight:r}}}),[]),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((e,r=l,s=n)=>{t.debug("Set grid density to "+e),o((t=>Object.assign(Object.assign({},t),{density:Object.assign(Object.assign({},t.density),i(e,r,s))}))),a()}),[t,o,a,i,l,n]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{c(r,l,n)}),[c,r,n,l]),Io(e,{setDensity:c},"GridDensityApi")})(v),oc(g,h,C,v),js(v),dc(g,v),Ws(v),(e=>{const t=Mo("useGridCsvExport"),r=ea(e,ia),n=ea(e,$a),l=ea(e,Ja),o=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>(t.debug("Get data as CSV"),Hc(r,n,l,e.current.getCellValue))),[t,r,n,l,e]),a=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{t.debug("Export data as CSV");const e=o();so(new Blob([e],{type:"text/csv"}),"csv","data")}),[t,o]);Io(e,{getDataAsCsv:o,exportDataAsCsv:a},"GridCsvExportApi")})(v),(e=>{const t=ea(e,Ea),r=ea(e,ga),n=ea(e,ia),l=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),o=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!r)return;const o=e.current.getScrollPosition().top+r.windowSizes.height+t.scrollEndThreshold;if(o<r.dataContainerSizes.height&&(l.current=!1),o>=r.dataContainerSizes.height&&!l.current){const t={api:e,visibleColumns:n,viewportPageSize:r.viewportPageSize,virtualRowsCount:r.virtualRowsCount};e.current.publishEvent("scroll:rowEnd",t),l.current=!0}}),[t,r,e,n]);Ei(e,"scrolling:rows",o),xi(e,"scroll:rowEnd",t.onRowsScrollEnd)})(v);const M=bc(e.components,e.componentsProps,v);!function(e,t){const[,r,n]=Qo(e),l=Mo("useStateProp");react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{null!=t&&e.current.state!==t&&(l.debug("Overriding state with props.state"),r((e=>Object.assign(Object.assign({},e),t))),n())}),[e,n,l,t,r])}(v,e.state),function(e,t){const[r]=Qo(e);if(null!=r.rendering.renderContext){const{page:e,firstColIdx:n,lastColIdx:l,firstRowIdx:o,lastRowIdx:a}=r.rendering.renderContext;t.info(`Rendering, page: ${e}, col: ${n}-${l}, row: ${o}-${a}`)}}(v,E);const I=!e.loading&&0===w,k=!e.loading&&w>0&&0===O;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(co.Provider,{value:v},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_29__.default,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ma,{ref:p,className:e.className},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tc,{hasError:null!=S,componentProps:S,api:v,logger:E,render:t=>{var r;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ac,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.ErrorOverlay,Object.assign({},t,null===(r=e.componentsProps)||void 0===r?void 0:r.errorOverlay)))}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:f},react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.Header,Object.assign({},null===(r=e.componentsProps)||void 0===r?void 0:r.header))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ac,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Hi,{ContentComponent:M.ColumnMenu,contentComponentProps:Object.assign({},null===(n=e.componentsProps)||void 0===n?void 0:n.columnMenu)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ds,{licenseStatus:e.licenseStatus}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(fa,{ref:b},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Li,{ref:g})),I&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.NoRowsOverlay,Object.assign({},null===(l=e.componentsProps)||void 0===l?void 0:l.noRowsOverlay)),k&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.NoResultsOverlay,Object.assign({},null===(a=e.componentsProps)||void 0===a?void 0:a.noResultsOverlay)),e.loading&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.LoadingOverlay,Object.assign({},null===(c=e.componentsProps)||void 0===c?void 0:c.loadingOverlay)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(fs,{onResize:x,nonce:e.nonce,disableHeight:e.autoHeight},(e=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Sa,{ref:h,size:e},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Is,{ref:C}))))),!y.hideFooter&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:m},react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.Footer,Object.assign({},null===(u=e.componentsProps)||void 0===u?void 0:u.footer)))))))})),Vc={disableColumnResize:!0,disableColumnReorder:!0,disableMultipleColumnsFiltering:!0,disableMultipleColumnsSorting:!0,disableMultipleSelection:!0,pagination:!0,apiRef:void 0,onRowsScrollEnd:void 0},Bc=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(e,t){const r=ao({props:e,name:"MuiDataGrid"}),{className:n,pageSize:l,classes:o}=r,a=gl(r,["className","pageSize","classes"]);let i=l;return i&&i>100&&(i=100),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Nc,Object.assign({ref:t,className:Kn("MuiDataGrid-root",null==o?void 0:o.root,n),pageSize:i},a,Vc,{licenseStatus:"Valid"}))})),$c=react__WEBPACK_IMPORTED_MODULE_0__.memo(Bc);$c.propTypes={apiRef:(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_30__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),(e=>null!=e.apiRef?new Error(["Material-UI: `apiRef` is not a valid prop.","GridApiRef is not available in the MIT version.","","You need to upgrade to the XGrid component to unlock this feature."].join("\n")):null)),columns:(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_30__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_2___default().array.isRequired),(e=>e.columns&&e.columns.some((e=>e.resizable))?new Error(["Material-UI: `column.resizable = true` is not a valid prop.","Column resizing is not available in the MIT version.","","You need to upgrade to the XGrid component to unlock this feature."].join("\n")):null)),disableColumnReorder:(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_30__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),(e=>!1===e.disableColumnReorder?new Error(["Material-UI: `<DataGrid disableColumnReorder={false} />` is not a valid prop.","Column reordering is not available in the MIT version.","","You need to upgrade to the XGrid component to unlock this feature."].join("\n")):null)),disableColumnResize:(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_30__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),(e=>!1===e.disableColumnResize?new Error(["Material-UI: `<DataGrid disableColumnResize={false} />` is not a valid prop.","Column resizing is not available in the MIT version.","","You need to upgrade to the XGrid component to unlock this feature."].join("\n")):null)),disableMultipleColumnsFiltering:(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_30__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),(e=>!1===e.disableMultipleColumnsFiltering?new Error(["Material-UI: `<DataGrid disableMultipleColumnsFiltering={false} />` is not a valid prop.","Only single column sorting is available in the MIT version.","","You need to upgrade to the XGrid component to unlock this feature."].join("\n")):null)),disableMultipleColumnsSorting:(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_30__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),(e=>!1===e.disableMultipleColumnsSorting?new Error(["Material-UI: `<DataGrid disableMultipleColumnsSorting={false} />` is not a valid prop.","Only single column sorting is available in the MIT version.","","You need to upgrade to the XGrid component to unlock this feature."].join("\n")):null)),disableMultipleSelection:(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_30__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),(e=>!1===e.disableMultipleSelection?new Error(["Material-UI: `<DataGrid disableMultipleSelection={false} />` is not a valid prop.","Only single column selection is available in the MIT version.","","You need to upgrade to the XGrid component to unlock this feature."].join("\n")):null)),pageSize:(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_30__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),(e=>e.pageSize&&e.pageSize>100?new Error([`Material-UI: \`<DataGrid pageSize={${e.pageSize}} />\` is not a valid prop.`,"Only page size below 100 is available in the MIT version.","","You need to upgrade to the XGrid component to unlock this feature."].join("\n")):null)),pagination:e=>!1===e.pagination?new Error(["Material-UI: `<DataGrid pagination={false} />` is not a valid prop.","Infinite scrolling is not available in the MIT version.","","You need to upgrade to the XGrid component to disable the pagination."].join("\n")):null,onRowsScrollEnd:(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_30__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),(e=>null!=e.onRowsScrollEnd?new Error(["Material-UI: `onRowsScrollEnd` is not a valid prop.","onRowsScrollEnd is not available in the MIT version.","","You need to upgrade to the XGrid component to unlock this feature."].join("\n")):null)),rows:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().array.isRequired),scrollEndThreshold:(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_30__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),(e=>e.scrollEndThreshold?new Error([`Material-UI: \`<DataGrid scrollEndThreshold={${e.scrollEndThreshold}} />\` is not a valid prop.`,"scrollEndThreshold is not available in the MIT version.","","You need to upgrade to the XGrid component to unlock this feature."].join("\n")):null))};


/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/HTMLElementType.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/HTMLElementType.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HTMLElementType; }
/* harmony export */ });
function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (false) {}

  const propValue = props[propName];
  const safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  if (propValue && propValue.nodeType !== 1) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an HTMLElement.`);
  }

  return null;
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/capitalize.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/capitalize.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ capitalize; }
/* harmony export */ });

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( true ? `Material-UI: \`capitalize(string)\` expects a string argument.` : 0);
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/chainPropTypes.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/chainPropTypes.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ chainPropTypes; }
/* harmony export */ });
function chainPropTypes(propType1, propType2) {
  if (false) {}

  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/createChainedFunction.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/createChainedFunction.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createChainedFunction; }
/* harmony export */ });
/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }

    if (true) {
      if (typeof func !== 'function') {
        console.error('Material-UI: Invalid argument type - must only provide functions, undefined, or null.');
      }
    }

    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {});
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/debounce.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/debounce.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ debounce; }
/* harmony export */ });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func, wait = 166) {
  let timeout;

  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/deepmerge.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/deepmerge.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "default": function() { return /* binding */ deepmerge; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");

function isPlainObject(item) {
  return item !== null && typeof item === 'object' && // TS thinks `item is possibly null` even though this was our first guard.
  // @ts-expect-error
  item.constructor === Object;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/deprecatedPropType.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/deprecatedPropType.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ deprecatedPropType; }
/* harmony export */ });
function deprecatedPropType(validator, reason) {
  if (false) {}

  return (props, propName, componentName, location, propFullName) => {
    const componentNameSafe = componentName || '<<anonymous>>';
    const propFullNameSafe = propFullName || propName;

    if (typeof props[propName] !== 'undefined') {
      return new Error(`The ${location} \`${propFullNameSafe}\` of ` + `\`${componentNameSafe}\` is deprecated. ${reason}`);
    }

    return null;
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/elementAcceptingRef.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/elementAcceptingRef.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/chainPropTypes.js");



function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}

function acceptingRef(props, propName, componentName, location, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;

  if (element == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === 'undefined') {
    return null;
  }

  let warningHint;
  const elementType = element.type;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof elementType === 'function' && !isClassComponent(elementType)) {
    warningHint = 'Did you accidentally use a plain function component for an element instead?';
  }

  if (warningHint !== undefined) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element that can hold a ref. ${warningHint} ` + 'For more information see https://material-ui.com/r/caveat-with-refs-guide');
  }

  return null;
}

const elementAcceptingRef = (0,_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__.default)((prop_types__WEBPACK_IMPORTED_MODULE_0___default().element), acceptingRef);
elementAcceptingRef.isRequired = (0,_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__.default)((prop_types__WEBPACK_IMPORTED_MODULE_0___default().element.isRequired), acceptingRef);
/* harmony default export */ __webpack_exports__["default"] = (elementAcceptingRef);

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/chainPropTypes.js");



function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}

function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  const propValue = props[propName];
  const safePropName = propFullName || propName;

  if (propValue == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === 'undefined') {
    return null;
  }

  let warningHint;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof propValue === 'function' && !isClassComponent(propValue)) {
    warningHint = 'Did you accidentally provide a plain function component instead?';
  }

  if (warningHint !== undefined) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element type that can hold a ref. ${warningHint} ` + 'For more information see https://material-ui.com/r/caveat-with-refs-guide');
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__.default)((prop_types__WEBPACK_IMPORTED_MODULE_0___default().elementType), elementTypeAcceptingRef));

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/exactProp.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/exactProp.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ exactProp; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
const specialProperty = 'exact-prop: \u200b';
function exactProp(propTypes) {
  if (false) {}

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, propTypes, {
    [specialProperty]: props => {
      const unsupportedProps = Object.keys(props).filter(prop => !propTypes.hasOwnProperty(prop));

      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map(prop => `\`${prop}\``).join(', ')}. Please remove them.`);
      }

      return null;
    }
  });
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formatMuiErrorMessage; }
/* harmony export */ });
/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@material-ui/utils/macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe iff we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

  /* eslint-disable prefer-template */
  let url = 'https://material-ui.com/production-error/?code=' + code;

  for (let i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return 'Minified Material-UI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/getDisplayName.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/getDisplayName.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFunctionName": function() { return /* binding */ getFunctionName; },
/* harmony export */   "default": function() { return /* binding */ getDisplayName; }
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/@material-ui/data-grid/node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
 // Simplified polyfill for IE11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3

const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  const match = `${fn}`.match(fnNameMatchRegex);
  const name = match && match[1];
  return name || '';
}

function getFunctionComponentName(Component, fallback = '') {
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}

function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
}
/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE11 support
 */


function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  } // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`


  if (typeof Component === 'object') {
    switch (Component.$$typeof) {
      case react_is__WEBPACK_IMPORTED_MODULE_0__.ForwardRef:
        return getWrappedName(Component, Component.render, 'ForwardRef');

      case react_is__WEBPACK_IMPORTED_MODULE_0__.Memo:
        return getWrappedName(Component, Component.type, 'memo');

      default:
        return undefined;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/getScrollbarSize.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/getScrollbarSize.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getScrollbarSize; }
/* harmony export */ });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
function getScrollbarSize(doc) {
  const scrollDiv = doc.createElement('div');
  scrollDiv.style.width = '99px';
  scrollDiv.style.height = '99px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.overflow = 'scroll';
  doc.body.appendChild(scrollDiv);
  const scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  doc.body.removeChild(scrollDiv);
  return scrollbarSize;
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/index.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chainPropTypes": function() { return /* reexport safe */ _chainPropTypes__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "deepmerge": function() { return /* reexport safe */ _deepmerge__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "elementAcceptingRef": function() { return /* reexport safe */ _elementAcceptingRef__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "elementTypeAcceptingRef": function() { return /* reexport safe */ _elementTypeAcceptingRef__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "exactProp": function() { return /* reexport safe */ _exactProp__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "formatMuiErrorMessage": function() { return /* reexport safe */ _formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "getDisplayName": function() { return /* reexport safe */ _getDisplayName__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "HTMLElementType": function() { return /* reexport safe */ _HTMLElementType__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "ponyfillGlobal": function() { return /* reexport safe */ _ponyfillGlobal__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "refType": function() { return /* reexport safe */ _refType__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "unstable_capitalize": function() { return /* reexport safe */ _capitalize__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "unstable_createChainedFunction": function() { return /* reexport safe */ _createChainedFunction__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "unstable_debounce": function() { return /* reexport safe */ _debounce__WEBPACK_IMPORTED_MODULE_12__.default; },
/* harmony export */   "unstable_deprecatedPropType": function() { return /* reexport safe */ _deprecatedPropType__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "unstable_isMuiElement": function() { return /* reexport safe */ _isMuiElement__WEBPACK_IMPORTED_MODULE_14__.default; },
/* harmony export */   "unstable_ownerDocument": function() { return /* reexport safe */ _ownerDocument__WEBPACK_IMPORTED_MODULE_15__.default; },
/* harmony export */   "unstable_ownerWindow": function() { return /* reexport safe */ _ownerWindow__WEBPACK_IMPORTED_MODULE_16__.default; },
/* harmony export */   "unstable_requirePropFactory": function() { return /* reexport safe */ _requirePropFactory__WEBPACK_IMPORTED_MODULE_17__.default; },
/* harmony export */   "unstable_setRef": function() { return /* reexport safe */ _setRef__WEBPACK_IMPORTED_MODULE_18__.default; },
/* harmony export */   "unstable_useEnhancedEffect": function() { return /* reexport safe */ _useEnhancedEffect__WEBPACK_IMPORTED_MODULE_19__.default; },
/* harmony export */   "unstable_useId": function() { return /* reexport safe */ _useId__WEBPACK_IMPORTED_MODULE_20__.default; },
/* harmony export */   "unstable_unsupportedProp": function() { return /* reexport safe */ _unsupportedProp__WEBPACK_IMPORTED_MODULE_21__.default; },
/* harmony export */   "unstable_useControlled": function() { return /* reexport safe */ _useControlled__WEBPACK_IMPORTED_MODULE_22__.default; },
/* harmony export */   "unstable_useEventCallback": function() { return /* reexport safe */ _useEventCallback__WEBPACK_IMPORTED_MODULE_23__.default; },
/* harmony export */   "unstable_useForkRef": function() { return /* reexport safe */ _useForkRef__WEBPACK_IMPORTED_MODULE_24__.default; },
/* harmony export */   "unstable_useIsFocusVisible": function() { return /* reexport safe */ _useIsFocusVisible__WEBPACK_IMPORTED_MODULE_25__.default; },
/* harmony export */   "unstable_getScrollbarSize": function() { return /* reexport safe */ _getScrollbarSize__WEBPACK_IMPORTED_MODULE_26__.default; },
/* harmony export */   "unstable_detectScrollType": function() { return /* reexport safe */ _scrollLeft__WEBPACK_IMPORTED_MODULE_27__.detectScrollType; },
/* harmony export */   "unstable_getNormalizedScrollLeft": function() { return /* reexport safe */ _scrollLeft__WEBPACK_IMPORTED_MODULE_27__.getNormalizedScrollLeft; },
/* harmony export */   "usePreviousProps": function() { return /* reexport safe */ _usePreviousProps__WEBPACK_IMPORTED_MODULE_28__.default; },
/* harmony export */   "visuallyHidden": function() { return /* reexport safe */ _visuallyHidden__WEBPACK_IMPORTED_MODULE_29__.default; },
/* harmony export */   "integerPropType": function() { return /* reexport safe */ _integerPropType__WEBPACK_IMPORTED_MODULE_30__.default; }
/* harmony export */ });
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/chainPropTypes.js");
/* harmony import */ var _deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deepmerge */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/deepmerge.js");
/* harmony import */ var _elementAcceptingRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementAcceptingRef */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/elementAcceptingRef.js");
/* harmony import */ var _elementTypeAcceptingRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elementTypeAcceptingRef */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js");
/* harmony import */ var _exactProp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exactProp */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/exactProp.js");
/* harmony import */ var _formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatMuiErrorMessage */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js");
/* harmony import */ var _getDisplayName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDisplayName */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/getDisplayName.js");
/* harmony import */ var _HTMLElementType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HTMLElementType */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/HTMLElementType.js");
/* harmony import */ var _ponyfillGlobal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ponyfillGlobal */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/ponyfillGlobal.js");
/* harmony import */ var _refType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./refType */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/refType.js");
/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./capitalize */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/capitalize.js");
/* harmony import */ var _createChainedFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./createChainedFunction */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/createChainedFunction.js");
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./debounce */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/debounce.js");
/* harmony import */ var _deprecatedPropType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deprecatedPropType */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/deprecatedPropType.js");
/* harmony import */ var _isMuiElement__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isMuiElement */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/isMuiElement.js");
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/ownerDocument.js");
/* harmony import */ var _ownerWindow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ownerWindow */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/ownerWindow.js");
/* harmony import */ var _requirePropFactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./requirePropFactory */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/requirePropFactory.js");
/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./setRef */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/setRef.js");
/* harmony import */ var _useEnhancedEffect__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./useEnhancedEffect */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useEnhancedEffect.js");
/* harmony import */ var _useId__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./useId */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useId.js");
/* harmony import */ var _unsupportedProp__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./unsupportedProp */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/unsupportedProp.js");
/* harmony import */ var _useControlled__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./useControlled */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useControlled.js");
/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./useEventCallback */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useEventCallback.js");
/* harmony import */ var _useForkRef__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./useForkRef */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useForkRef.js");
/* harmony import */ var _useIsFocusVisible__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./useIsFocusVisible */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useIsFocusVisible.js");
/* harmony import */ var _getScrollbarSize__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./getScrollbarSize */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/getScrollbarSize.js");
/* harmony import */ var _scrollLeft__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./scrollLeft */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/scrollLeft.js");
/* harmony import */ var _usePreviousProps__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./usePreviousProps */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/usePreviousProps.js");
/* harmony import */ var _visuallyHidden__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./visuallyHidden */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/visuallyHidden.js");
/* harmony import */ var _integerPropType__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./integerPropType */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/integerPropType.js");
































/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/integerPropType.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/integerPropType.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTypeByValue": function() { return /* binding */ getTypeByValue; }
/* harmony export */ });
function getTypeByValue(value) {
  const valueType = typeof value;

  switch (valueType) {
    case 'number':
      if (Number.isNaN(value)) {
        return 'NaN';
      }

      if (!Number.isFinite(value)) {
        return 'Infinity';
      }

      if (value !== Math.floor(value)) {
        return 'float';
      }

      return 'number';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return value.constructor.name;

    default:
      return valueType;
  }
} // IE 11 support

function ponyfillIsInteger(x) {
  // eslint-disable-next-line no-restricted-globals
  return typeof x === 'number' && isFinite(x) && Math.floor(x) === x;
}

const isInteger = Number.isInteger || ponyfillIsInteger;

function requiredInteger(props, propName, componentName, location) {
  const propValue = props[propName];

  if (propValue == null || !isInteger(propValue)) {
    const propType = getTypeByValue(propValue);
    return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
  }

  return null;
}

function validator(props, propName, ...other) {
  const propValue = props[propName];

  if (propValue === undefined) {
    return null;
  }

  return requiredInteger(props, propName, ...other);
}

function validatorNoop() {
  return null;
}

validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
/* harmony default export */ __webpack_exports__["default"] = ( false ? 0 : validator);

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/isMuiElement.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/isMuiElement.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isMuiElement; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/ownerDocument.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/ownerDocument.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ownerDocument; }
/* harmony export */ });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/ownerWindow.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/ownerWindow.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ownerWindow; }
/* harmony export */ });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/ownerDocument.js");

function ownerWindow(node) {
  const doc = (0,_ownerDocument__WEBPACK_IMPORTED_MODULE_0__.default)(node);
  return doc.defaultView || window;
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/ponyfillGlobal.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/ponyfillGlobal.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
/* harmony default export */ __webpack_exports__["default"] = (typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')());

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/refType.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/refType.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

const refType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)]);
/* harmony default export */ __webpack_exports__["default"] = (refType);

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/requirePropFactory.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/requirePropFactory.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ requirePropFactory; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");

function requirePropFactory(componentNameInError, Component) {
  if (false) {} // eslint-disable-next-line react/forbid-foreign-prop-types


  const prevPropTypes = Component ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, Component.propTypes) : null;

  const requireProp = requiredProp => (props, propName, componentName, location, propFullName, ...args) => {
    const propFullNameSafe = propFullName || propName;
    const defaultTypeChecker = prevPropTypes === null || prevPropTypes === void 0 ? void 0 : prevPropTypes[propFullNameSafe];

    if (defaultTypeChecker) {
      const typeCheckerResult = defaultTypeChecker(props, propName, componentName, location, propFullName, ...args);

      if (typeCheckerResult) {
        return typeCheckerResult;
      }
    }

    if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
      return new Error(`The prop \`${propFullNameSafe}\` of ` + `\`${componentNameInError}\` can only be used together with the \`${requiredProp}\` prop.`);
    }

    return null;
  };

  return requireProp;
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/scrollLeft.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/scrollLeft.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detectScrollType": function() { return /* binding */ detectScrollType; },
/* harmony export */   "getNormalizedScrollLeft": function() { return /* binding */ getNormalizedScrollLeft; }
/* harmony export */ });
// Source from https://github.com/alitaheri/normalize-scroll-left
let cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  const dummy = document.createElement('div');
  const container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  const scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  const type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/setRef.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/setRef.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setRef; }
/* harmony export */ });
/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui-org/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/unsupportedProp.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/unsupportedProp.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ unsupportedProp; }
/* harmony export */ });
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (false) {}

  const propFullNameSafe = propFullName || propName;

  if (typeof props[propName] !== 'undefined') {
    return new Error(`The prop \`${propFullNameSafe}\` is not supported. Please remove it.`);
  }

  return null;
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useControlled.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useControlled.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useControlled; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value'
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = react__WEBPACK_IMPORTED_MODULE_0__.useRef(controlled !== undefined);
  const [valueState, setValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  if (true) {
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
      if (isControlled !== (controlled !== undefined)) {
        console.error([`Material-UI: A component is changing the ${isControlled ? '' : 'un'}controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`, 'Elements should not switch from uncontrolled to controlled (or vice versa).', `Decide between using a controlled or uncontrolled ${name} ` + 'element for the lifetime of the component.', "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", 'More info: https://fb.me/react-controlled-components'].join('\n'));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = react__WEBPACK_IMPORTED_MODULE_0__.useRef(defaultProp);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error([`Material-UI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` + `To suppress this warning opt to use a controlled ${name}.`].join('\n'));
      }
    }, [JSON.stringify(defaultProp)]);
  }

  const setValueIfUncontrolled = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useEnhancedEffect.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useEnhancedEffect.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/* harmony default export */ __webpack_exports__["default"] = (useEnhancedEffect);

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useEventCallback.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useEventCallback.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useEventCallback; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEnhancedEffect */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useEnhancedEffect.js");


/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */

function useEventCallback(fn) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);
  (0,_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__.default)(() => {
    ref.current = fn;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...args) => // @ts-expect-error hide `this`
  // tslint:disable-next-line:ban-comma-operator
  (0, ref.current)(...args), []);
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useForkRef.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useForkRef.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForkRef; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setRef */ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/setRef.js");


function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }

    return refValue => {
      (0,_setRef__WEBPACK_IMPORTED_MODULE_1__.default)(refA, refValue);
      (0,_setRef__WEBPACK_IMPORTED_MODULE_1__.default)(refB, refValue);
    };
  }, [refA, refB]);
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useId.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useId.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useId; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useId(idOverride) {
  const [defaultId, setDefaultId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(idOverride);
  const id = idOverride || defaultId;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the random value for client-side rendering only.
      // We can't use it server-side.
      setDefaultId(`mui-${Math.round(Math.random() * 1e5)}`);
    }
  }, [defaultId]);
  return id;
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useIsFocusVisible.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/useIsFocusVisible.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "teardown": function() { return /* binding */ teardown; },
/* harmony export */   "default": function() { return /* binding */ useIsFocusVisible; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js

let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
let hadFocusVisibleRecentlyTimeout = null;
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @returns {boolean}
 */

function focusTriggersKeyboardModality(node) {
  const {
    type,
    tagName
  } = node;

  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}
/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */


function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  hadKeyboardEvent = true;
}
/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */


function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}

function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}

function teardown(doc) {
  doc.removeEventListener('keydown', handleKeyDown, true);
  doc.removeEventListener('mousedown', handlePointerDown, true);
  doc.removeEventListener('pointerdown', handlePointerDown, true);
  doc.removeEventListener('touchstart', handlePointerDown, true);
  doc.removeEventListener('visibilitychange', handleVisibilityChange, true);
}

function isFocusVisible(event) {
  const {
    target
  } = event;

  try {
    return target.matches(':focus-visible');
  } catch (error) {// Browsers not implementing :focus-visible will throw a SyntaxError.
    // We use our own heuristic for those browsers.
    // Rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
  } // No need for validFocusTarget check. The user does that by attaching it to
  // focusable events only.


  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}

function useIsFocusVisible() {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  /**
   * Should be called if a blur event is fired
   */

  function handleBlurVisible() {
    // checking against potential state variable does not suffice if we focus and blur synchronously.
    // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
    // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
    // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
    // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
    if (isFocusVisibleRef.current) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
        hadFocusVisibleRecently = false;
      }, 100);
      isFocusVisibleRef.current = false;
      return true;
    }

    return false;
  }
  /**
   * Should be called if a blur event is fired
   */


  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }

    return false;
  }

  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/usePreviousProps.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/usePreviousProps.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const usePreviousProps = value => {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

/* harmony default export */ __webpack_exports__["default"] = (usePreviousProps);

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/visuallyHidden.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/@material-ui/utils/esm/visuallyHidden.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px'
};
/* harmony default export */ __webpack_exports__["default"] = (visuallyHidden);

/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/@material-ui/data-grid/node_modules/react-is/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/data-grid/node_modules/react-is/index.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/@material-ui/data-grid/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/Components/Home.jsx":
/*!***********************************!*\
  !*** ./pages/Components/Home.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./About */ "./pages/Components/About.jsx");
/* harmony import */ var _CompanyDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CompanyDetails */ "./pages/Components/CompanyDetails.jsx");
/* harmony import */ var _Comparison__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Comparison */ "./pages/Components/Comparison.jsx");
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NavigationBar */ "./pages/Components/NavigationBar.jsx");
/* harmony import */ var _PageNotFound__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PageNotFound */ "./pages/Components/PageNotFound.jsx");
/* harmony import */ var _Revenue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Revenue */ "./pages/Components/Revenue.jsx");
/* harmony import */ var _Sectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Sectors */ "./pages/Components/Sectors.jsx");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SideBar */ "./pages/Components/SideBar.jsx");
/* harmony import */ var _SP500__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SP500 */ "./pages/Components/SP500.jsx");
/* harmony import */ var _Top__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Top */ "./pages/Components/Top.jsx");
/* harmony import */ var _Simulation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Simulation */ "./pages/Components/Simulation.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Home.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










 // import Login from "./Login";


 // import Performance from "./Performance";







var drawerWidth = 300;

var styles = function styles(theme) {
  return {
    root: {
      display: "flex"
    },
    appBar: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth,
      paddingTop: theme.spacing(2)
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    // necessary for content to be below app bar
    toolbar: _objectSpread({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 30
    }, theme.mixins.toolbar),
    content: {
      // backgroundColor: theme.palette.background.default,
      backgroundColor: "white",
      flexGrow: 1,
      flexWrap: "wrap",
      padding: theme.spacing(3),
      minWidth: "480px",
      width: "auto",
      height: "100%",
      overflowX: "hidden",
      alignItems: "center"
    }
  };
};

var Home = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Home);

    _this = _super.call(this, props);

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "componentDidMount", function () {
      console.log("Home");
    });

    _this.state = {
      companyNames: []
    };
    return _this;
  }

  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Home, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      console.log(this.props);
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.HashRouter, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_21__.default, {
            position: "relative",
            className: classes.appBar,
            style: {
              backgroundColor: "#5CDB95",
              color: "#05386B"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_22__.default, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationBar__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.root,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_23__.default, {
              className: classes.drawer,
              variant: "permanent",
              classes: {
                paper: classes.drawerPaper
              },
              anchor: "left",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBar__WEBPACK_IMPORTED_MODULE_16__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
              className: classes.content,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Switch, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
                  exact: true,
                  path: "/"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
                  exact: true,
                  path: "/about",
                  component: _About__WEBPACK_IMPORTED_MODULE_9__.default
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
                  exact: true,
                  path: "/top/:num/:type",
                  render: function render(props) {
                    var _props$match$params = props.match.params,
                        num = _props$match$params.num,
                        type = _props$match$params.type;
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Top__WEBPACK_IMPORTED_MODULE_18__.default, _objectSpread({}, props), "num=".concat(num, "&type=").concat(type), false, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 26
                    }, _this2);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
                  exact: true,
                  path: "/sectors",
                  component: _Sectors__WEBPACK_IMPORTED_MODULE_15__.default
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
                  exact: true,
                  path: "/companydetails/:company",
                  render: function render(props) {
                    var company = props.match.params.company;
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CompanyDetails__WEBPACK_IMPORTED_MODULE_10__.default, _objectSpread({}, props), "company=".concat(company), false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 21
                    }, _this2);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
                  exact: true,
                  path: "/revenue",
                  component: function component() {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Revenue__WEBPACK_IMPORTED_MODULE_14__.default, {
                      companyNames: _this2.state.companyNames
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                      columnNumber: 19
                    }, _this2);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
                  exact: true,
                  path: "/sp500",
                  component: _SP500__WEBPACK_IMPORTED_MODULE_17__.default
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
                  exact: true,
                  path: "/comparison",
                  component: _Comparison__WEBPACK_IMPORTED_MODULE_11__.default
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
                  exact: true,
                  path: "/simulation",
                  component: _Simulation__WEBPACK_IMPORTED_MODULE_19__.default
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
                  component: _PageNotFound__WEBPACK_IMPORTED_MODULE_13__.default
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 15
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }, this);
    }
  }]);

  return Home;
}((react__WEBPACK_IMPORTED_MODULE_8___default().Component));

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24__.withStyles)(styles)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.withRouter)(Home)));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/Components/Simulation.jsx":
/*!*****************************************!*\
  !*** ./pages/Components/Simulation.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/data-grid */ "./node_modules/@material-ui/data-grid/dist/index-esm.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\venu\\Desktop\\Stock Market Analysis\\app\\pages\\Components\\Simulation.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var Simulation = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(Simulation, _React$Component);

  var _super = _createSuper(Simulation);

  function Simulation(props) {
    var _this;

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Simulation);

    _this = _super.call(this, props);

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "componentDidMount", function () {
      var SP500 = "https://raw.githubusercontent.com/saikr789/stock-analysis-tool-1011/master/Data/SP500Companies.json";
      axios__WEBPACK_IMPORTED_MODULE_9___default().get(SP500).then(function (s) {
        if (s.status === 200) {
          var SP500Companies = Object.keys(underscore__WEBPACK_IMPORTED_MODULE_10__.default.invert(s.data));

          _this.setState({
            companyNames: SP500Companies
          }, function () {});
        }
      })["catch"](function (e) {
        console.log(e);
      });
      console.log("Simulation");
    });

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "onClickSubmit", function () {
      if (_this.state.selectedCompany === "") {
        return;
      }

      var params = "company=" + _this.state.selectedCompany + "&" + "investment=" + _this.state.investment + "&" + "days=" + _this.state.days + "&" + "date=" + _this.state.startdate;

      _this.setState({
        loading: true
      });

      axios__WEBPACK_IMPORTED_MODULE_9___default().get("/api/simulation?" + params).then(function (s) {
        if (s.status === 200) {
          var resp = s.data;

          if (resp.length != 0) {
            var cols = [];
            Object.keys(resp[0]).map(function (key) {
              cols.push({
                field: key,
                headerName: key,
                width: 150
              });
            });
            var rows = [];

            for (var i = 0; i < resp.length; i++) {
              if (Object.keys(resp[i]).length === 0) {} else {
                resp[i]["id"] = i;
                rows.push(resp[i]);
              }
            }

            _this.setState({
              response: rows,
              cols: cols,
              loading: false
            }, function () {});
          } else {
            _this.setState({
              loading: false
            }, function () {});
          }
        } else {
          _this.setState({
            loading: false
          }, function () {});
        }
      })["catch"](function (e) {
        console.log(e);

        _this.setState({
          loading: false
        }, function () {});
      });
    });

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "onSelectDays", function (e) {
      var days = e.target.value;

      _this.setState({
        seldays: days
      }, function () {});

      axios__WEBPACK_IMPORTED_MODULE_9___default().get("/api/simulationtop" + "?" + "days=" + days).then(function (s) {
        console.log(s.data);

        if (s.status === 200) {
          _this.setState({
            simulationtop: s.data
          }, function () {});
        }
      })["catch"](function (e) {
        console.log(e);
      });
    });

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "getDataFromURL", function (url) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          fetch(url).then(function (response) {
            return response.text();
          }).then(function (data) {
            resolve(data);
          });
        });
      }, 2000);
    });

    (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "exportToCSV", function () {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_11__.GridToolbarContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_11__.GridToolbarExport, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 9
        }, (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 7
      }, (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    });

    _this.state = {
      selectedCompany: "",
      companyNames: [],
      days: 1,
      investment: 1,
      startdate: "2017-03-10",
      response: [],
      cols: [],
      loading: false,
      seldays: "",
      simulationtop: [],
      companyselectedaftersimulation: "",
      companydetailsaftersimulation: []
    };
    return _this;
  }

  (0,C_Users_venu_Desktop_Stock_Market_Analysis_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Simulation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var today = new Date();
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {
            children: "Select Number of days for simulation : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.FormControl, {
            style: {
              minWidth: "150px"
            },
            variant: "outlined",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.InputLabel, {
              style: {
                color: "#5CDB95"
              },
              children: "days"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Select, {
              style: {
                width: "100%",
                backgroundColor: "#05386B",
                color: "#5CDB95"
              },
              labelId: "days",
              id: "days",
              onChange: this.onSelectDays,
              value: this.state.seldays,
              children: [30, 60, 90, 180, 360, 720].map(function (period) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.MenuItem, {
                  value: period,
                  children: period
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 26
                }, _this2);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              padding: '20px'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 11
          }, this), this.state.simulationtop.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_13__.default, {
            component: _material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Paper,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_14__.default, {
              className: "Simualtion Results",
              minWidth: "650",
              "aria-label": "simple table",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_15__.default, {
                style: {
                  color: "#05386B",
                  backgroundColor: "#5CDB95"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__.default, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                    variant: "h5",
                    children: " Security Id"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                    align: "right",
                    variant: "h5",
                    children: "Company"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                    align: "right",
                    variant: "h5",
                    children: "Actual Average Returns"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                    align: "right",
                    variant: "h5",
                    children: "Minimum Prediction Range"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                    align: "right",
                    variant: "h5",
                    children: "Maximum Prediction Range"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_18__.default, {
                children: this.state.simulationtop.map(function (row) {
                  console.log(row);
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__.default, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                      component: "th",
                      scope: "row",
                      children: row.security_id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                      align: "right",
                      children: row.company
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 202,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                      align: "right",
                      children: row.actual_average_return_percent
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                      align: "right",
                      children: row.minimum_prediction_range
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 23
                    }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__.default, {
                      align: "right",
                      children: row.maximum_prediction_range
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 23
                    }, _this2)]
                  }, row.Company, true, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 21
                  }, _this2);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 7
      }, this);
    }
  }]);

  return Simulation;
}((react__WEBPACK_IMPORTED_MODULE_8___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (Simulation);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/reselect/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/reselect/es/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMemoize": function() { return /* binding */ defaultMemoize; },
/* harmony export */   "createSelectorCreator": function() { return /* binding */ createSelectorCreator; },
/* harmony export */   "createSelector": function() { return /* binding */ createSelector; },
/* harmony export */   "createStructuredSelector": function() { return /* binding */ createStructuredSelector; }
/* harmony export */ });
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2xvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9kYXRhLWdyaWQvZGlzdC9pbmRleC1lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvZGF0YS1ncmlkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL0hUTUxFbGVtZW50VHlwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9kYXRhLWdyaWQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vY2FwaXRhbGl6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9kYXRhLWdyaWQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vY2hhaW5Qcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvZGF0YS1ncmlkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9kYXRhLWdyaWQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvZGF0YS1ncmlkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL2RlZXBtZXJnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9kYXRhLWdyaWQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vZGVwcmVjYXRlZFByb3BUeXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9lbGVtZW50QWNjZXB0aW5nUmVmLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9lbGVtZW50VHlwZUFjY2VwdGluZ1JlZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9kYXRhLWdyaWQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vZXhhY3RQcm9wLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9mb3JtYXRNdWlFcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvZGF0YS1ncmlkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL2dldERpc3BsYXlOYW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9nZXRTY3JvbGxiYXJTaXplLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9kYXRhLWdyaWQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vaW50ZWdlclByb3BUeXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9pc011aUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvZGF0YS1ncmlkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL293bmVyRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvZGF0YS1ncmlkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL293bmVyV2luZG93LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9wb255ZmlsbEdsb2JhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9kYXRhLWdyaWQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vcmVmVHlwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9kYXRhLWdyaWQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vcmVxdWlyZVByb3BGYWN0b3J5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9zY3JvbGxMZWZ0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9zZXRSZWYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvZGF0YS1ncmlkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL3Vuc3VwcG9ydGVkUHJvcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9kYXRhLWdyaWQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vdXNlQ29udHJvbGxlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9kYXRhLWdyaWQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vdXNlRW5oYW5jZWRFZmZlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvZGF0YS1ncmlkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL3VzZUV2ZW50Q2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvZGF0YS1ncmlkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL3VzZUZvcmtSZWYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvZGF0YS1ncmlkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL3VzZUlkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS91c2VJc0ZvY3VzVmlzaWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9kYXRhLWdyaWQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vdXNlUHJldmlvdXNQcm9wcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9kYXRhLWdyaWQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vdmlzdWFsbHlIaWRkZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvZGF0YS1ncmlkL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvZGF0YS1ncmlkL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9Ib21lLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9TaW11bGF0aW9uLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Jlc2VsZWN0L2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImRyYXdlcldpZHRoIiwic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImFwcEJhciIsIndpZHRoIiwibWFyZ2luTGVmdCIsInBhZGRpbmdUb3AiLCJzcGFjaW5nIiwiZHJhd2VyIiwiZmxleFNocmluayIsImRyYXdlclBhcGVyIiwidG9vbGJhciIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtaXhpbnMiLCJjb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiZmxleEdyb3ciLCJmbGV4V3JhcCIsIm1pbldpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3dYIiwiSG9tZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiY29tcGFueU5hbWVzIiwiY2xhc3NlcyIsImNvbG9yIiwicGFwZXIiLCJBYm91dCIsIm1hdGNoIiwicGFyYW1zIiwibnVtIiwidHlwZSIsIlNlY3RvcnMiLCJjb21wYW55IiwiU1A1MDAiLCJDb21wYXJpc29uIiwiU2ltdWxhdGlvbiIsIlBhZ2VOb3RGb3VuZCIsIlJlYWN0Iiwid2l0aFN0eWxlcyIsIndpdGhSb3V0ZXIiLCJheGlvcyIsInRoZW4iLCJzIiwic3RhdHVzIiwiU1A1MDBDb21wYW5pZXMiLCJPYmplY3QiLCJrZXlzIiwidW5kZXJzY29yZSIsImRhdGEiLCJzZXRTdGF0ZSIsImUiLCJzZWxlY3RlZENvbXBhbnkiLCJpbnZlc3RtZW50IiwiZGF5cyIsInN0YXJ0ZGF0ZSIsImxvYWRpbmciLCJyZXNwIiwibGVuZ3RoIiwiY29scyIsIm1hcCIsImtleSIsInB1c2giLCJmaWVsZCIsImhlYWRlck5hbWUiLCJyb3dzIiwiaSIsInJlc3BvbnNlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWxkYXlzIiwic2ltdWxhdGlvbnRvcCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImZldGNoIiwidGV4dCIsImNvbXBhbnlzZWxlY3RlZGFmdGVyc2ltdWxhdGlvbiIsImNvbXBhbnlkZXRhaWxzYWZ0ZXJzaW11bGF0aW9uIiwidG9kYXkiLCJEYXRlIiwib25TZWxlY3REYXlzIiwicGVyaW9kIiwiUGFwZXIiLCJyb3ciLCJzZWN1cml0eV9pZCIsImFjdHVhbF9hdmVyYWdlX3JldHVybl9wZXJjZW50IiwibWluaW11bV9wcmVkaWN0aW9uX3JhbmdlIiwibWF4aW11bV9wcmVkaWN0aW9uX3JhbmdlIiwiQ29tcGFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLFlBQVk7QUFDN2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCLE9BQU8sS0FBSztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7O0FBRVI7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDLEtBQUssS0FBSyxHQUFHLEdBQUcsTUFBTSxvQ0FBb0MsR0FBRyxFQUFFO0FBQy9EO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0NBQWdDLE1BQU0sT0FBTyx1QkFBdUI7QUFDcEU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCLE9BQU8sS0FBSztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QixPQUFPLEtBQUs7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFROztBQUVSO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCLE9BQU8sS0FBSztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7O0FBRVI7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUIsT0FBTyxLQUFLO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTs7QUFFUjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUIsT0FBTyxLQUFLO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTs7QUFFUjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUIsT0FBTyxLQUFLO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTs7QUFFUjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QixPQUFPLEtBQUs7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFROztBQUVSO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QixPQUFPLEtBQUs7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFROztBQUVSO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVAsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQLDhGQUE4RixhQUFhO0FBQzNHO0FBQ0E7O0FBRUE7QUFDQSx1RUFBdUUsZUFBZTtBQUN0RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRUE7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsd0VBQXdFLGVBQWU7QUFDdkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVCxHQUFHO0FBQ0gsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MjU4ZDY0ODQwZjAxZmU0ZGJkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnpoQ04gPSBleHBvcnRzLnZpVk4gPSBleHBvcnRzLnVrVUEgPSBleHBvcnRzLnRyVFIgPSBleHBvcnRzLnN2U0UgPSBleHBvcnRzLnNrU0sgPSBleHBvcnRzLnJ1UlUgPSBleHBvcnRzLnJvUk8gPSBleHBvcnRzLnB0UFQgPSBleHBvcnRzLnB0QlIgPSBleHBvcnRzLnBsUEwgPSBleHBvcnRzLm5sTkwgPSBleHBvcnRzLmtvS1IgPSBleHBvcnRzLmphSlAgPSBleHBvcnRzLml0SVQgPSBleHBvcnRzLmlzSVMgPSBleHBvcnRzLmlkSUQgPSBleHBvcnRzLmh5QU0gPSBleHBvcnRzLmh1SFUgPSBleHBvcnRzLmhpSU4gPSBleHBvcnRzLmhlSUwgPSBleHBvcnRzLmZyRlIgPSBleHBvcnRzLmZpRkkgPSBleHBvcnRzLmZhSVIgPSBleHBvcnRzLmV0RUUgPSBleHBvcnRzLmVzRVMgPSBleHBvcnRzLmVuVVMgPSBleHBvcnRzLmRlREUgPSBleHBvcnRzLmNzQ1ogPSBleHBvcnRzLmNhRVMgPSBleHBvcnRzLmJnQkcgPSBleHBvcnRzLmF6QVogPSB2b2lkIDA7XG52YXIgYXpBWiA9IHtcbiAgcHJvcHM6IHtcbiAgICBNdWlCcmVhZGNydW1iczoge1xuICAgICAgZXhwYW5kVGV4dDogJ1lvbHUgZ8O2c3TJmXInXG4gICAgfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ8aPdnbJmWxraSBzyZloaWbJmScsXG4gICAgICBsYWJlbFJvd3NQZXJQYWdlOiAnU8mZaGlmyZl5yZkgZMO8xZ/JmW4gc8mZdHJsyZlyOicsXG4gICAgICBsYWJlbERpc3BsYXllZFJvd3M6IGZ1bmN0aW9uIGxhYmVsRGlzcGxheWVkUm93cyhfcmVmKSB7XG4gICAgICAgIHZhciBmcm9tID0gX3JlZi5mcm9tLFxuICAgICAgICAgICAgdG8gPSBfcmVmLnRvLFxuICAgICAgICAgICAgY291bnQgPSBfcmVmLmNvdW50O1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZnJvbSwgXCItXCIpLmNvbmNhdCh0bywgXCIgZFxcdTAyNTluIFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIm1vcmUgdGhhbiBcIi5jb25jYXQodG8pKTtcbiAgICAgIH0sXG4gICAgICBuZXh0SWNvbkJ1dHRvblRleHQ6ICdOw7Z2YsmZdGkgc8mZaGlmyZknXG4gICAgfSxcbiAgICBNdWlSYXRpbmc6IHtcbiAgICAgIGdldExhYmVsVGV4dDogZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KHZhbHVlKSB7XG4gICAgICAgIHZhciBwbHVyYWxGb3JtID0gJ1VsZHV6JztcbiAgICAgICAgdmFyIGxhc3REaWdpdCA9IHZhbHVlICUgMTA7XG5cbiAgICAgICAgaWYgKGxhc3REaWdpdCA+IDEgJiYgbGFzdERpZ2l0IDwgNSkge1xuICAgICAgICAgIHBsdXJhbEZvcm0gPSAnVWxkdXpsYXInO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHZhbHVlLCBcIiBcIikuY29uY2F0KHBsdXJhbEZvcm0pO1xuICAgICAgfSxcbiAgICAgIGVtcHR5TGFiZWxUZXh0OiAnQm/FnydcbiAgICB9LFxuICAgIE11aUF1dG9jb21wbGV0ZToge1xuICAgICAgY2xlYXJUZXh0OiAnU2lsbcmZaycsXG4gICAgICBjbG9zZVRleHQ6ICdCYcSfbGFtYXEnLFxuICAgICAgbG9hZGluZ1RleHQ6ICdZw7xrbMmZbmly4oCmJyxcbiAgICAgIG5vT3B0aW9uc1RleHQ6ICdTZcOnaW1syZlyIG3DtnZjdWQgZGV5aWwnLFxuICAgICAgb3BlblRleHQ6ICfQntGC0LrRgNGL0YLRjCdcbiAgICB9LFxuICAgIE11aUFsZXJ0OiB7XG4gICAgICBjbG9zZVRleHQ6ICdCYcSfbGFtYXEnXG4gICAgfSxcbiAgICBNdWlQYWdpbmF0aW9uOiB7XG4gICAgICAnYXJpYS1sYWJlbCc6ICdTyZloaWbJmW5pbiBuYXZpcWFzaXlhc8SxJyxcbiAgICAgIGdldEl0ZW1BcmlhTGFiZWw6IGZ1bmN0aW9uIGdldEl0ZW1BcmlhTGFiZWwodHlwZSwgcGFnZSwgc2VsZWN0ZWQpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwYWdlLCBcIiBcIikuY29uY2F0KHNlbGVjdGVkID8gJ3PJmWhpZsmZJyA6ICdzyZloaWbJmXnJmSBrZcOnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHJldHVybiAnQmlyaW5jaSBzyZloaWbJmXnJmSBrZcOnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbGFzdCcpIHtcbiAgICAgICAgICByZXR1cm4gJ1NvbnVuY3Ugc8mZaGlmyZl5yZkga2XDpyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgcmV0dXJuICdOw7Z2YsmZdGkgc8mZaGlmyZl5yZkga2XDpyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICAgIHJldHVybiAnxo92dsmZbGtpIHPJmWhpZsmZecmZIGtlw6cnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmF6QVogPSBhekFaO1xudmFyIGJnQkcgPSB7XG4gIHByb3BzOiB7XG4gICAgTXVpQnJlYWRjcnVtYnM6IHtcbiAgICAgIGV4cGFuZFRleHQ6ICfQn9C+0LrQsNC30LLQsNC90LUg0L3QsCDQv9GK0YLRjydcbiAgICB9LFxuICAgIE11aVRhYmxlUGFnaW5hdGlvbjoge1xuICAgICAgYmFja0ljb25CdXR0b25UZXh0OiAn0J/RgNC10LTQuNGI0L3QsCDRgdGC0YDQsNC90LjRhtCwJyxcbiAgICAgIGxhYmVsUm93c1BlclBhZ2U6ICfQoNC10LTQvtCy0LUg0L3QsCDRgdGC0YDQsNC90LjRhtCwOicsXG4gICAgICBsYWJlbERpc3BsYXllZFJvd3M6IGZ1bmN0aW9uIGxhYmVsRGlzcGxheWVkUm93cyhfcmVmMikge1xuICAgICAgICB2YXIgZnJvbSA9IF9yZWYyLmZyb20sXG4gICAgICAgICAgICB0byA9IF9yZWYyLnRvLFxuICAgICAgICAgICAgY291bnQgPSBfcmVmMi5jb3VudDtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGZyb20sIFwiLVwiKS5jb25jYXQodG8sIFwiIFxcdTA0M0VcXHUwNDQyIFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIm1vcmUgdGhhbiBcIi5jb25jYXQodG8pKTtcbiAgICAgIH0sXG4gICAgICBuZXh0SWNvbkJ1dHRvblRleHQ6ICfQodC70LXQtNCy0LDRidCwINGB0YLRgNCw0L3QuNGG0LAnXG4gICAgfSxcbiAgICBNdWlSYXRpbmc6IHtcbiAgICAgIGdldExhYmVsVGV4dDogZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgXFx1MDQxN1xcdTA0MzJcXHUwNDM1XFx1MDQzN1xcdTA0MzRcIikuY29uY2F0KHZhbHVlICE9PSAxID8gJ9C4JyA6ICfQsCcpO1xuICAgICAgfSxcbiAgICAgIGVtcHR5TGFiZWxUZXh0OiAn0JjQt9GH0LjRgdGC0LgnXG4gICAgfSxcbiAgICBNdWlBdXRvY29tcGxldGU6IHtcbiAgICAgIGNsZWFyVGV4dDogJ9CY0LfRh9C40YHRgtC4JyxcbiAgICAgIGNsb3NlVGV4dDogJ9CX0LDRgtCy0L7RgNC4JyxcbiAgICAgIGxvYWRpbmdUZXh0OiAn0JfQsNGA0LXQttC00LDQvdC14oCmJyxcbiAgICAgIG5vT3B0aW9uc1RleHQ6ICfQndGP0LzQsCDQvdCw0LvQuNGH0L3QuCDQvtC/0YbQuNC4JyxcbiAgICAgIG9wZW5UZXh0OiAn0J7RgtCy0L7RgNC4J1xuICAgIH0sXG4gICAgTXVpQWxlcnQ6IHtcbiAgICAgIGNsb3NlVGV4dDogJ9CX0LDRgtCy0L7RgNC4J1xuICAgIH0sXG4gICAgTXVpUGFnaW5hdGlvbjoge1xuICAgICAgJ2FyaWEtbGFiZWwnOiAn0J/QsNCz0LjQvdCw0YbQuNGPJyxcbiAgICAgIGdldEl0ZW1BcmlhTGFiZWw6IGZ1bmN0aW9uIGdldEl0ZW1BcmlhTGFiZWwodHlwZSwgcGFnZSwgc2VsZWN0ZWQpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChzZWxlY3RlZCA/ICcnIDogJ9Ca0YrQvCAnLCBcIlxcdTA0NDFcXHUwNDQyXFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0NDZcXHUwNDMwIFwiKS5jb25jYXQocGFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHJldHVybiAn0J7RgtC40LTQuCDQvdCwINC/0YrRgNCy0LDRgtCwINGB0YLRgNCw0L3QuNGG0LAnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdsYXN0Jykge1xuICAgICAgICAgIHJldHVybiAn0J7RgtC40LTQuCDQvdCwINC/0L7RgdC70LXQtNC90LDRgtCwINGB0YLRgNCw0L3QuNGG0LAnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICduZXh0Jykge1xuICAgICAgICAgIHJldHVybiAn0J7RgtC40LTQuCDQvdCwINGB0LvQtdC00LLQsNGJ0LDRgtCwINGB0YLRgNCw0L3QuNGG0LAnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdwcmV2aW91cycpIHtcbiAgICAgICAgICByZXR1cm4gJ9Ce0YLQuNC00Lgg0L3QsCDQv9GA0LXQtNC40YjQvdCw0YLQsCDRgdGC0YDQsNC90LjRhtCwJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5iZ0JHID0gYmdCRztcbnZhciBjYUVTID0ge1xuICBwcm9wczoge1xuICAgIC8vIE11aUJyZWFkY3J1bWJzOiB7XG4gICAgLy8gICBleHBhbmRUZXh0OiAnU2hvdyBwYXRoJyxcbiAgICAvLyB9LFxuICAgIE11aVRhYmxlUGFnaW5hdGlvbjoge1xuICAgICAgYmFja0ljb25CdXR0b25UZXh0OiAnUMOgZ2luYSBhbnRlcmlvcicsXG4gICAgICBsYWJlbFJvd3NQZXJQYWdlOiAnRmlsZXMgcGVyIHDDoGdpbmE6JyxcbiAgICAgIGxhYmVsRGlzcGxheWVkUm93czogZnVuY3Rpb24gbGFiZWxEaXNwbGF5ZWRSb3dzKF9yZWYzKSB7XG4gICAgICAgIHZhciBmcm9tID0gX3JlZjMuZnJvbSxcbiAgICAgICAgICAgIHRvID0gX3JlZjMudG8sXG4gICAgICAgICAgICBjb3VudCA9IF9yZWYzLmNvdW50O1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZnJvbSwgXCItXCIpLmNvbmNhdCh0bywgXCIgZGUgXCIpLmNvbmNhdChjb3VudCAhPT0gLTEgPyBjb3VudCA6IFwibW9yZSB0aGFuIFwiLmNvbmNhdCh0bykpO1xuICAgICAgfSxcbiAgICAgIG5leHRJY29uQnV0dG9uVGV4dDogJ1NlZ8O8ZW50IHDDoGdpbmEnXG4gICAgfSxcbiAgICBNdWlSYXRpbmc6IHtcbiAgICAgIGdldExhYmVsVGV4dDogZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgXCIpLmNvbmNhdCh2YWx1ZSAhPT0gMSA/ICdFc3RyZWxsZXMnIDogJ0VzdHJlbGxhJyk7XG4gICAgICB9LFxuICAgICAgZW1wdHlMYWJlbFRleHQ6ICdCdWl0J1xuICAgIH0sXG4gICAgTXVpQXV0b2NvbXBsZXRlOiB7XG4gICAgICBjbGVhclRleHQ6ICdOZXRlamFyJyxcbiAgICAgIGNsb3NlVGV4dDogJ1RhbmNhcicsXG4gICAgICBsb2FkaW5nVGV4dDogJ0NhcnJlZ2FudOKApicsXG4gICAgICBub09wdGlvbnNUZXh0OiAnU2Vuc2Ugb3BjaW9ucycsXG4gICAgICBvcGVuVGV4dDogJ09iZXJ0J1xuICAgIH0sXG4gICAgTXVpQWxlcnQ6IHtcbiAgICAgIGNsb3NlVGV4dDogJ1RhbmNhdCdcbiAgICB9IC8vIE11aVBhZ2luYXRpb246IHtcbiAgICAvLyAgICdhcmlhLWxhYmVsJzogJ1BhZ2luYXRpb24gbmF2aWdhdGlvbicsXG4gICAgLy8gICBnZXRJdGVtQXJpYUxhYmVsOiAodHlwZSwgcGFnZSwgc2VsZWN0ZWQpID0+IHtcbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgIC8vICAgICAgIHJldHVybiBgJHtzZWxlY3RlZCA/ICcnIDogJ0dvIHRvICd9cGFnZSAke3BhZ2V9YDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gZmlyc3QgcGFnZSc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdsYXN0Jykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gbGFzdCBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ25leHQnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBuZXh0IHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAncHJldmlvdXMnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBwcmV2aW91cyBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuXG4gIH1cbn07XG5leHBvcnRzLmNhRVMgPSBjYUVTO1xudmFyIGNzQ1ogPSB7XG4gIHByb3BzOiB7XG4gICAgTXVpQnJlYWRjcnVtYnM6IHtcbiAgICAgIGV4cGFuZFRleHQ6ICdVa8OhemF0IGNlc3R1J1xuICAgIH0sXG4gICAgTXVpVGFibGVQYWdpbmF0aW9uOiB7XG4gICAgICBiYWNrSWNvbkJ1dHRvblRleHQ6ICdQxZllZGNob3rDrSBzdHLDoW5rYScsXG4gICAgICBsYWJlbFJvd3NQZXJQYWdlOiAnxZjDoWRrxa8gbmEgc3Ryw6FuY2U6JyxcbiAgICAgIGxhYmVsRGlzcGxheWVkUm93czogZnVuY3Rpb24gbGFiZWxEaXNwbGF5ZWRSb3dzKF9yZWY0KSB7XG4gICAgICAgIHZhciBmcm9tID0gX3JlZjQuZnJvbSxcbiAgICAgICAgICAgIHRvID0gX3JlZjQudG8sXG4gICAgICAgICAgICBjb3VudCA9IF9yZWY0LmNvdW50O1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZnJvbSwgXCItXCIpLmNvbmNhdCh0bywgXCIgeiBcIikuY29uY2F0KGNvdW50ICE9PSAtMSA/IGNvdW50IDogXCJtb3JlIHRoYW4gXCIuY29uY2F0KHRvKSk7XG4gICAgICB9LFxuICAgICAgbmV4dEljb25CdXR0b25UZXh0OiAnRGFsxaHDrSBzdHLDoW5rYSdcbiAgICB9LFxuICAgIE11aVJhdGluZzoge1xuICAgICAgZ2V0TGFiZWxUZXh0OiBmdW5jdGlvbiBnZXRMYWJlbFRleHQodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHZhbHVlLCBcIiBodlxcdTAxMUJ6ZGlcXHUwMTBEa2FcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPj0gMiAmJiB2YWx1ZSA8PSA0KSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHZhbHVlLCBcIiBodlxcdTAxMUJ6ZGlcXHUwMTBEa3lcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodmFsdWUsIFwiIGh2XFx1MDExQnpkaVxcdTAxMERla1wiKTtcbiAgICAgIH0sXG4gICAgICBlbXB0eUxhYmVsVGV4dDogJ1Byw6F6ZG7DqSdcbiAgICB9LFxuICAgIE11aUF1dG9jb21wbGV0ZToge1xuICAgICAgY2xlYXJUZXh0OiAnVnltYXphdCcsXG4gICAgICBjbG9zZVRleHQ6ICdaYXbFmcOtdCcsXG4gICAgICBsb2FkaW5nVGV4dDogJ05hxI3DrXTDoW7DreKApicsXG4gICAgICBub09wdGlvbnNUZXh0OiAnxb3DoWRuw6kgbW/Fvm5vc3RpJyxcbiAgICAgIG9wZW5UZXh0OiAnT3RldsWZw610J1xuICAgIH0sXG4gICAgTXVpQWxlcnQ6IHtcbiAgICAgIGNsb3NlVGV4dDogJ1phdsWZw610J1xuICAgIH0sXG4gICAgTXVpUGFnaW5hdGlvbjoge1xuICAgICAgJ2FyaWEtbGFiZWwnOiAnTmF2aWdhY2Ugc3Ryw6Fua292w6Fuw61tJyxcbiAgICAgIGdldEl0ZW1BcmlhTGFiZWw6IGZ1bmN0aW9uIGdldEl0ZW1BcmlhTGFiZWwodHlwZSwgcGFnZSwgc2VsZWN0ZWQpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChzZWxlY3RlZCA/ICcnIDogJ0rDrXQgbmEgJykuY29uY2F0KHBhZ2UsIFwiIHN0clxceEUxbmt1XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcbiAgICAgICAgICByZXR1cm4gJ0rDrXQgbmEgcHJ2bsOtIHN0csOhbmt1JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbGFzdCcpIHtcbiAgICAgICAgICByZXR1cm4gJ0rDrXQgbmEgcG9zbGVkbsOtIHN0csOhbmt1JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbmV4dCcpIHtcbiAgICAgICAgICByZXR1cm4gJ0rDrXQgbmEgZGFsxaHDrSBzdHLDoW5rdSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICAgIHJldHVybiAnSsOtdCBuYSBwxZllZGNob3rDrSBzdHLDoW5rdSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuY3NDWiA9IGNzQ1o7XG52YXIgZGVERSA9IHtcbiAgcHJvcHM6IHtcbiAgICBNdWlCcmVhZGNydW1iczoge1xuICAgICAgZXhwYW5kVGV4dDogJ1BmYWQgYW56ZWlnZW4nXG4gICAgfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ07DpGNoc3RlIFNlaXRlJyxcbiAgICAgIGxhYmVsUm93c1BlclBhZ2U6ICdaZWlsZW4gcHJvIFNlaXRlOicsXG4gICAgICBsYWJlbERpc3BsYXllZFJvd3M6IGZ1bmN0aW9uIGxhYmVsRGlzcGxheWVkUm93cyhfcmVmNSkge1xuICAgICAgICB2YXIgZnJvbSA9IF9yZWY1LmZyb20sXG4gICAgICAgICAgICB0byA9IF9yZWY1LnRvLFxuICAgICAgICAgICAgY291bnQgPSBfcmVmNS5jb3VudDtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGZyb20sIFwiLVwiKS5jb25jYXQodG8sIFwiIHZvbiBcIikuY29uY2F0KGNvdW50ICE9PSAtMSA/IGNvdW50IDogXCJtb3JlIHRoYW4gXCIuY29uY2F0KHRvKSk7XG4gICAgICB9LFxuICAgICAgbmV4dEljb25CdXR0b25UZXh0OiAnTsOkY2hzdGUgU2VpdGUnXG4gICAgfSxcbiAgICBNdWlSYXRpbmc6IHtcbiAgICAgIGdldExhYmVsVGV4dDogZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgXCIpLmNvbmNhdCh2YWx1ZSAhPT0gMSA/ICdTdGVybmUnIDogJ1N0ZXJuJyk7XG4gICAgICB9LFxuICAgICAgZW1wdHlMYWJlbFRleHQ6ICdLZWluZSBXZXJ0dW5nJ1xuICAgIH0sXG4gICAgTXVpQXV0b2NvbXBsZXRlOiB7XG4gICAgICBjbGVhclRleHQ6ICdMZWVyZW4nLFxuICAgICAgY2xvc2VUZXh0OiAnU2NobGllw59lbicsXG4gICAgICBsb2FkaW5nVGV4dDogJ1dpcmQgZ2VsYWRlbuKApicsXG4gICAgICBub09wdGlvbnNUZXh0OiAnS2VpbmUgT3B0aW9uZW4nLFxuICAgICAgb3BlblRleHQ6ICfDlmZmbmVuJ1xuICAgIH0sXG4gICAgTXVpQWxlcnQ6IHtcbiAgICAgIGNsb3NlVGV4dDogJ1NjaGxpZcOfZW4nXG4gICAgfSxcbiAgICBNdWlQYWdpbmF0aW9uOiB7XG4gICAgICAnYXJpYS1sYWJlbCc6ICdOYXZpZ2F0aW9uIHZpYSBTZWl0ZW5udW1tZXJpZXJ1bmcnLFxuICAgICAgZ2V0SXRlbUFyaWFMYWJlbDogZnVuY3Rpb24gZ2V0SXRlbUFyaWFMYWJlbCh0eXBlLCBwYWdlLCBzZWxlY3RlZCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHNlbGVjdGVkID8gJycgOiAnR2VoZSB6dSAnLCBcIlNlaXRlIFwiKS5jb25jYXQocGFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHJldHVybiAnWnVyIGVyc3RlbiBTZWl0ZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xhc3QnKSB7XG4gICAgICAgICAgcmV0dXJuICdadXIgbGV0enRlbiBTZWl0ZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgcmV0dXJuICdadXIgbsOkY2hzdGVuIFNlaXRlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAncHJldmlvdXMnKSB7XG4gICAgICAgICAgcmV0dXJuICdadXIgdm9yaGVyaWdlbiBTZWl0ZSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTsgLy8gZGVmYXVsdFxuXG5leHBvcnRzLmRlREUgPSBkZURFO1xudmFyIGVuVVMgPSB7XG4gIC8qXG4gIHByb3BzOiB7XG4gICAgTXVpQnJlYWRjcnVtYnM6IHtcbiAgICAgIGV4cGFuZFRleHQ6ICdTaG93IHBhdGgnLFxuICAgIH0sXG4gICAgTXVpVGFibGVQYWdpbmF0aW9uOiB7XG4gICAgICBiYWNrSWNvbkJ1dHRvblRleHQ6ICdQcmV2aW91cyBwYWdlJyxcbiAgICAgIGxhYmVsUm93c1BlclBhZ2U6ICdSb3dzIHBlciBwYWdlOicsXG4gICAgICBsYWJlbERpc3BsYXllZFJvd3M6ICh7IGZyb20sIHRvLCBjb3VudCB9KSA9PlxuICBgJHtmcm9tfS0ke3RvfSBvZiAke2NvdW50ICE9PSAtMSA/IGNvdW50IDogYG1vcmUgdGhhbiAke3RvfWB9YCxcbiAgICAgIG5leHRJY29uQnV0dG9uVGV4dDogJ05leHQgcGFnZScsXG4gICAgfSxcbiAgICBNdWlSYXRpbmc6IHtcbiAgICAgIGdldExhYmVsVGV4dDogdmFsdWUgPT4gYCR7dmFsdWV9IFN0YXIke3ZhbHVlICE9PSAxID8gJ3MnIDogJyd9YCxcbiAgICAgIGVtcHR5TGFiZWxUZXh0OiAnRW1wdHknLFxuICAgIH0sXG4gICAgTXVpQXV0b2NvbXBsZXRlOiB7XG4gICAgICBjbGVhclRleHQ6ICdDbGVhcicsXG4gICAgICBjbG9zZVRleHQ6ICdDbG9zZScsXG4gICAgICBsb2FkaW5nVGV4dDogJ0xvYWRpbmfigKYnLFxuICAgICAgbm9PcHRpb25zVGV4dDogJ05vIG9wdGlvbnMnLFxuICAgICAgb3BlblRleHQ6ICdPcGVuJyxcbiAgICB9LFxuICAgIE11aUFsZXJ0OiB7XG4gICAgICBjbG9zZVRleHQ6ICdDbG9zZScsXG4gICAgfSxcbiAgICBNdWlQYWdpbmF0aW9uOiB7XG4gICAgICAnYXJpYS1sYWJlbCc6ICdQYWdpbmF0aW9uIG5hdmlnYXRpb24nLFxuICAgICAgZ2V0SXRlbUFyaWFMYWJlbDogKHR5cGUsIHBhZ2UsIHNlbGVjdGVkKSA9PiB7XG4gICAgICAgIGlmICh0eXBlID09PSAncGFnZScpIHtcbiAgICAgICAgICByZXR1cm4gYCR7c2VsZWN0ZWQgPyAnJyA6ICdHbyB0byAnfXBhZ2UgJHtwYWdlfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcbiAgICAgICAgICByZXR1cm4gJ0dvIHRvIGZpcnN0IHBhZ2UnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnbGFzdCcpIHtcbiAgICAgICAgICByZXR1cm4gJ0dvIHRvIGxhc3QgcGFnZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICduZXh0Jykge1xuICAgICAgICAgIHJldHVybiAnR28gdG8gbmV4dCBwYWdlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICAgIHJldHVybiAnR28gdG8gcHJldmlvdXMgcGFnZSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgKi9cbn07XG5leHBvcnRzLmVuVVMgPSBlblVTO1xudmFyIGVzRVMgPSB7XG4gIHByb3BzOiB7XG4gICAgTXVpQnJlYWRjcnVtYnM6IHtcbiAgICAgIGV4cGFuZFRleHQ6ICdNb3N0cmFyIHJ1dGEnXG4gICAgfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ1DDoWdpbmEgYW50ZXJpb3InLFxuICAgICAgbGFiZWxSb3dzUGVyUGFnZTogJ0ZpbGFzIHBvciBww6FnaW5hOicsXG4gICAgICBsYWJlbERpc3BsYXllZFJvd3M6IGZ1bmN0aW9uIGxhYmVsRGlzcGxheWVkUm93cyhfcmVmNikge1xuICAgICAgICB2YXIgZnJvbSA9IF9yZWY2LmZyb20sXG4gICAgICAgICAgICB0byA9IF9yZWY2LnRvLFxuICAgICAgICAgICAgY291bnQgPSBfcmVmNi5jb3VudDtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGZyb20sIFwiLVwiKS5jb25jYXQodG8sIFwiIGRlIFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIm1vcmUgdGhhbiBcIi5jb25jYXQodG8pKTtcbiAgICAgIH0sXG4gICAgICBuZXh0SWNvbkJ1dHRvblRleHQ6ICdTaWd1aWVudGUgcMOhZ2luYSdcbiAgICB9LFxuICAgIE11aVJhdGluZzoge1xuICAgICAgZ2V0TGFiZWxUZXh0OiBmdW5jdGlvbiBnZXRMYWJlbFRleHQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHZhbHVlLCBcIiBFc3RyZWxsYVwiKS5jb25jYXQodmFsdWUgIT09IDEgPyAncycgOiAnJyk7XG4gICAgICB9LFxuICAgICAgZW1wdHlMYWJlbFRleHQ6ICdWYWPDrW8nXG4gICAgfSxcbiAgICBNdWlBdXRvY29tcGxldGU6IHtcbiAgICAgIGNsZWFyVGV4dDogJ0xpbXBpYXInLFxuICAgICAgY2xvc2VUZXh0OiAnQ2VycmFyJyxcbiAgICAgIGxvYWRpbmdUZXh0OiAnQ2FyZ2FuZG/igKYnLFxuICAgICAgbm9PcHRpb25zVGV4dDogJ1NpbiBvcGNpb25lcycsXG4gICAgICBvcGVuVGV4dDogJ0FiaWVydG8nXG4gICAgfSxcbiAgICBNdWlBbGVydDoge1xuICAgICAgY2xvc2VUZXh0OiAnQ2VycmFyJ1xuICAgIH0sXG4gICAgTXVpUGFnaW5hdGlvbjoge1xuICAgICAgJ2FyaWEtbGFiZWwnOiAnUGFnaW5hZG9yJyxcbiAgICAgIGdldEl0ZW1BcmlhTGFiZWw6IGZ1bmN0aW9uIGdldEl0ZW1BcmlhTGFiZWwodHlwZSwgcGFnZSwgc2VsZWN0ZWQpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChzZWxlY3RlZCA/ICcnIDogJ0lyIGEgbGEgJywgXCJwXFx4RTFnaW5hIFwiKS5jb25jYXQocGFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHJldHVybiAnSXIgYSBsYSBwcmltZXJhIHDDoWdpbmEnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdsYXN0Jykge1xuICAgICAgICAgIHJldHVybiAnSXIgYSBsYSDDumx0aW1hIHDDoWdpbmEnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICduZXh0Jykge1xuICAgICAgICAgIHJldHVybiAnSXIgYSBsYSBww6FnaW5hIHNpZ3VpZW50ZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICAgIHJldHVybiAnSXIgYSBsYSBww6FnaW5hIGFudGVyaW9yJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5lc0VTID0gZXNFUztcbnZhciBldEVFID0ge1xuICBwcm9wczoge1xuICAgIE11aUJyZWFkY3J1bWJzOiB7XG4gICAgICBleHBhbmRUZXh0OiAnTsOkaXRhIHRlZWQnXG4gICAgfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ0VlbG1pbmUgbGVoZWvDvGxnJyxcbiAgICAgIGxhYmVsUm93c1BlclBhZ2U6ICdSaWR1IGxlaGVrw7xsamVsOicsXG4gICAgICBsYWJlbERpc3BsYXllZFJvd3M6IGZ1bmN0aW9uIGxhYmVsRGlzcGxheWVkUm93cyhfcmVmNykge1xuICAgICAgICB2YXIgZnJvbSA9IF9yZWY3LmZyb20sXG4gICAgICAgICAgICB0byA9IF9yZWY3LnRvLFxuICAgICAgICAgICAgY291bnQgPSBfcmVmNy5jb3VudDtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGZyb20sIFwiLVwiKS5jb25jYXQodG8sIFwiIC8gXCIpLmNvbmNhdChjb3VudCAhPT0gLTEgPyBjb3VudCA6IFwibW9yZSB0aGFuIFwiLmNvbmNhdCh0bykpO1xuICAgICAgfSxcbiAgICAgIG5leHRJY29uQnV0dG9uVGV4dDogJ0rDpHJnbWluZSBsZWhla8O8bGcnXG4gICAgfSxcbiAgICBNdWlSYXRpbmc6IHtcbiAgICAgIGdldExhYmVsVGV4dDogZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgVFxceEU0cm5cIikuY29uY2F0KHZhbHVlICE9PSAxID8gJ2knIDogJycpO1xuICAgICAgfSxcbiAgICAgIGVtcHR5TGFiZWxUZXh0OiAnVMO8aGknXG4gICAgfSxcbiAgICBNdWlBdXRvY29tcGxldGU6IHtcbiAgICAgIGNsZWFyVGV4dDogJ1TDvGhqZW5kYScsXG4gICAgICBjbG9zZVRleHQ6ICdTdWxnZScsXG4gICAgICBsb2FkaW5nVGV4dDogJ0xhZW7igKYnLFxuICAgICAgbm9PcHRpb25zVGV4dDogJ1ZhbGlrdWlkIGVpIG9sZScsXG4gICAgICBvcGVuVGV4dDogJ0F2YSdcbiAgICB9LFxuICAgIE11aUFsZXJ0OiB7XG4gICAgICBjbG9zZVRleHQ6ICdTdWxnZSdcbiAgICB9LFxuICAgIE11aVBhZ2luYXRpb246IHtcbiAgICAgICdhcmlhLWxhYmVsJzogJ0xlaGVrw7xsZ2VkZSB2YWxpaycsXG4gICAgICBnZXRJdGVtQXJpYUxhYmVsOiBmdW5jdGlvbiBnZXRJdGVtQXJpYUxhYmVsKHR5cGUsIHBhZ2UsIHNlbGVjdGVkKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAncGFnZScpIHtcbiAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoc2VsZWN0ZWQgPyAnJyA6ICdWYWxpICcsIFwibGVoZWtcXHhGQ2xnIFwiKS5jb25jYXQocGFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHJldHVybiAnVmFsaSBlc2ltZW5lIGxlaGVrw7xsZyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xhc3QnKSB7XG4gICAgICAgICAgcmV0dXJuICdWYWxpIHZpaW1hbmUgbGVoZWvDvGxnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbmV4dCcpIHtcbiAgICAgICAgICByZXR1cm4gJ1ZhbGkgasOkcmdtaW5lIGxlaGVrw7xsZyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICAgIHJldHVybiAnVmFsaSBlZWxtaW5lIGxlaGVrw7xsZyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZXRFRSA9IGV0RUU7XG52YXIgZmFJUiA9IHtcbiAgcHJvcHM6IHtcbiAgICAvLyBNdWlCcmVhZGNydW1iczoge1xuICAgIC8vICAgZXhwYW5kVGV4dDogJ1Nob3cgcGF0aCcsXG4gICAgLy8gfSxcbiAgICBNdWlCcmVhZGNydW1iczoge1xuICAgICAgZXhwYW5kVGV4dDogJ9mG2YXYp9uM2LQg2YXYs9uM2LEnXG4gICAgfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ9i12YHYrdmH2ZQg2YLYqNmEJyxcbiAgICAgIGxhYmVsUm93c1BlclBhZ2U6ICfYqti52K/Yp9ivINiz2LfYsdmH2KfbjCDZh9ixINi12YHYrdmHOicsXG4gICAgICBsYWJlbERpc3BsYXllZFJvd3M6IGZ1bmN0aW9uIGxhYmVsRGlzcGxheWVkUm93cyhfcmVmOCkge1xuICAgICAgICB2YXIgZnJvbSA9IF9yZWY4LmZyb20sXG4gICAgICAgICAgICB0byA9IF9yZWY4LnRvLFxuICAgICAgICAgICAgY291bnQgPSBfcmVmOC5jb3VudDtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGZyb20sIFwiLVwiKS5jb25jYXQodG8sIFwiIFxcdTA2MjdcXHUwNjMyIFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIm1vcmUgdGhhbiBcIi5jb25jYXQodG8pKTtcbiAgICAgIH0sXG4gICAgICBuZXh0SWNvbkJ1dHRvblRleHQ6ICfYtdmB2K3Zh9mUINio2LnYrydcbiAgICB9LFxuICAgIE11aVJhdGluZzoge1xuICAgICAgZ2V0TGFiZWxUZXh0OiBmdW5jdGlvbiBnZXRMYWJlbFRleHQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHZhbHVlLCBcIiBcXHUwNjMzXFx1MDYyQVxcdTA2MjdcXHUwNjMxXFx1MDY0N1wiKTtcbiAgICAgIH0sXG4gICAgICBlbXB0eUxhYmVsVGV4dDogJ9iu2KfZhNuMJ1xuICAgIH0sXG4gICAgTXVpQXV0b2NvbXBsZXRlOiB7XG4gICAgICBjbGVhclRleHQ6ICfZvtin2qnigIzaqdix2K/ZhicsXG4gICAgICBjbG9zZVRleHQ6ICfYqNiz2KrZhicsXG4gICAgICBsb2FkaW5nVGV4dDogJ9iv2LEg2K3Yp9mEINio2KfYsdqv2LDYp9ix24zigKYnLFxuICAgICAgbm9PcHRpb25zVGV4dDogJ9io24zigIzZhtiq24zYrNmHJyxcbiAgICAgIG9wZW5UZXh0OiAn2KjYp9iy2qnYsdiv2YYnXG4gICAgfSxcbiAgICBNdWlBbGVydDoge1xuICAgICAgY2xvc2VUZXh0OiAn2KjYs9iq2YYnXG4gICAgfSxcbiAgICBNdWlQYWdpbmF0aW9uOiB7XG4gICAgICAnYXJpYS1sYWJlbCc6ICfZhtin2YjYqNix24wg2LXZgdit2YcnLFxuICAgICAgZ2V0SXRlbUFyaWFMYWJlbDogZnVuY3Rpb24gZ2V0SXRlbUFyaWFMYWJlbCh0eXBlLCBwYWdlLCBzZWxlY3RlZCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHNlbGVjdGVkID8gJycgOiAn2LHZgdiq2YYg2KjZhyAnLCBcIlxcdTA2MzVcXHUwNjQxXFx1MDYyRFxcdTA2NDdcXHUwNjU0IFwiKS5jb25jYXQocGFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHJldHVybiAn2LHZgdiq2YYg2KjZhyDYp9mI2YTbjNmGINi12YHYrdmHJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbGFzdCcpIHtcbiAgICAgICAgICByZXR1cm4gJ9ix2YHYqtmGINio2Ycg2KLYrtix24zZhiDYtdmB2K3Zhyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgcmV0dXJuICfYsdmB2KrZhiDYqNmHINi12YHYrdmH4oCM24wg2KjYudiv24wnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdwcmV2aW91cycpIHtcbiAgICAgICAgICByZXR1cm4gJ9ix2YHYqtmGINio2Ycg2LXZgdit2YfigIzbjCDZgtio2YTbjCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZmFJUiA9IGZhSVI7XG52YXIgZmlGSSA9IHtcbiAgcHJvcHM6IHtcbiAgICBNdWlCcmVhZGNydW1iczoge1xuICAgICAgZXhwYW5kVGV4dDogJ07DpHl0w6QgcmVpdHRpJ1xuICAgIH0sXG4gICAgTXVpVGFibGVQYWdpbmF0aW9uOiB7XG4gICAgICBiYWNrSWNvbkJ1dHRvblRleHQ6ICdFZGVsbGluZW4gc2l2dScsXG4gICAgICBsYWJlbFJvd3NQZXJQYWdlOiAnUml2ZWrDpCBwZXIgc2l2dTonLFxuICAgICAgbGFiZWxEaXNwbGF5ZWRSb3dzOiBmdW5jdGlvbiBsYWJlbERpc3BsYXllZFJvd3MoX3JlZjkpIHtcbiAgICAgICAgdmFyIGZyb20gPSBfcmVmOS5mcm9tLFxuICAgICAgICAgICAgdG8gPSBfcmVmOS50byxcbiAgICAgICAgICAgIGNvdW50ID0gX3JlZjkuY291bnQ7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChmcm9tLCBcIi1cIikuY29uY2F0KHRvLCBcIiAvIFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIm1vcmUgdGhhbiBcIi5jb25jYXQodG8pKTtcbiAgICAgIH0sXG4gICAgICBuZXh0SWNvbkJ1dHRvblRleHQ6ICdTZXVyYWF2YSBzaXZ1J1xuICAgIH0sXG4gICAgTXVpUmF0aW5nOiB7XG4gICAgICBnZXRMYWJlbFRleHQ6IGZ1bmN0aW9uIGdldExhYmVsVGV4dCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodmFsdWUsIFwiIFRcXHhFNGh0XCIpLmNvbmNhdCh2YWx1ZSAhPT0gMSA/ICdlw6QnIDogJ2knKTtcbiAgICAgIH0sXG4gICAgICBlbXB0eUxhYmVsVGV4dDogJ1R5aGrDpCdcbiAgICB9LFxuICAgIE11aUF1dG9jb21wbGV0ZToge1xuICAgICAgY2xlYXJUZXh0OiAnVHloamVubsOkJyxcbiAgICAgIGNsb3NlVGV4dDogJ1N1bGplJyxcbiAgICAgIGxvYWRpbmdUZXh0OiAnTGFkYXRhYW7igKYnLFxuICAgICAgbm9PcHRpb25zVGV4dDogJ0VpIHZhbGludG9qYScsXG4gICAgICBvcGVuVGV4dDogJ0F2YWEnXG4gICAgfSxcbiAgICBNdWlBbGVydDoge1xuICAgICAgY2xvc2VUZXh0OiAnU3VsamUnXG4gICAgfSxcbiAgICBNdWlQYWdpbmF0aW9uOiB7XG4gICAgICAnYXJpYS1sYWJlbCc6ICdTaXZ1dHVzIG5hdmlnYWF0aW8nLFxuICAgICAgZ2V0SXRlbUFyaWFMYWJlbDogZnVuY3Rpb24gZ2V0SXRlbUFyaWFMYWJlbCh0eXBlLCBwYWdlLCBzZWxlY3RlZCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHNlbGVjdGVkID8gJ3NpdnUnIDogJ01lbmUgc2l2dWxsZScsIFwiIFwiKS5jb25jYXQocGFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHJldHVybiAnTWVuZSBlbnNpbW3DpGlzZWxsZSBzaXZ1bGxlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbGFzdCcpIHtcbiAgICAgICAgICByZXR1cm4gJ01lbmUgdmlpbWVpc2VsbGUgc2l2dWxsZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgcmV0dXJuICdNZW5lIHNldXJhYXZhbGxlIHNpdnVsbGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdwcmV2aW91cycpIHtcbiAgICAgICAgICByZXR1cm4gJ01lbmUgZWRlbGxpc2VsbGUgc2l2dWxsZSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZmlGSSA9IGZpRkk7XG52YXIgZnJGUiA9IHtcbiAgcHJvcHM6IHtcbiAgICBNdWlCcmVhZGNydW1iczoge1xuICAgICAgZXhwYW5kVGV4dDogJ01vbnRyZXIgbGUgY2hlbWluJ1xuICAgIH0sXG4gICAgTXVpVGFibGVQYWdpbmF0aW9uOiB7XG4gICAgICBiYWNrSWNvbkJ1dHRvblRleHQ6ICdQYWdlIHByw6ljw6lkZW50ZScsXG4gICAgICBsYWJlbFJvd3NQZXJQYWdlOiAnTGlnbmVzIHBhciBwYWdlIDonLFxuICAgICAgbGFiZWxEaXNwbGF5ZWRSb3dzOiBmdW5jdGlvbiBsYWJlbERpc3BsYXllZFJvd3MoX3JlZjEwKSB7XG4gICAgICAgIHZhciBmcm9tID0gX3JlZjEwLmZyb20sXG4gICAgICAgICAgICB0byA9IF9yZWYxMC50byxcbiAgICAgICAgICAgIGNvdW50ID0gX3JlZjEwLmNvdW50O1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZnJvbSwgXCItXCIpLmNvbmNhdCh0bywgXCIgc3VyIFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcInBsdXMgcXVlIFwiLmNvbmNhdCh0bykpO1xuICAgICAgfSxcbiAgICAgIG5leHRJY29uQnV0dG9uVGV4dDogJ1BhZ2Ugc3VpdmFudGUnXG4gICAgfSxcbiAgICBNdWlSYXRpbmc6IHtcbiAgICAgIGdldExhYmVsVGV4dDogZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgRXRvaWxlXCIpLmNvbmNhdCh2YWx1ZSAhPT0gMSA/ICdzJyA6ICcnKTtcbiAgICAgIH0sXG4gICAgICBlbXB0eUxhYmVsVGV4dDogJ1ZpZGUnXG4gICAgfSxcbiAgICBNdWlBdXRvY29tcGxldGU6IHtcbiAgICAgIGNsZWFyVGV4dDogJ1ZpZGVyJyxcbiAgICAgIGNsb3NlVGV4dDogJ0Zlcm1lcicsXG4gICAgICBsb2FkaW5nVGV4dDogJ0NoYXJnZW1lbnTigKYnLFxuICAgICAgbm9PcHRpb25zVGV4dDogJ1BhcyBkZSByw6lzdWx0YXRzJyxcbiAgICAgIG9wZW5UZXh0OiAnT3V2cmlyJ1xuICAgIH0sXG4gICAgTXVpQWxlcnQ6IHtcbiAgICAgIGNsb3NlVGV4dDogJ0Zlcm1lcidcbiAgICB9LFxuICAgIE11aVBhZ2luYXRpb246IHtcbiAgICAgICdhcmlhLWxhYmVsJzogJ25hdmlnYXRpb24gZGUgcGFnaW5hdGlvbicsXG4gICAgICBnZXRJdGVtQXJpYUxhYmVsOiBmdW5jdGlvbiBnZXRJdGVtQXJpYUxhYmVsKHR5cGUsIHBhZ2UsIHNlbGVjdGVkKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAncGFnZScpIHtcbiAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoc2VsZWN0ZWQgPyAnJyA6ICdBbGxlciDDoCBsYSAnLCBcInBhZ2UgXCIpLmNvbmNhdChwYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgcmV0dXJuICdBbGxlciDDoCBsYSBwcmVtacOocmUgcGFnZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xhc3QnKSB7XG4gICAgICAgICAgcmV0dXJuICdBbGxlciDDoCBsYSBkZXJuacOocmUgcGFnZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgcmV0dXJuICdBbGxlciDDoCBsYSBwYWdlIHN1aXZhbnRlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAncHJldmlvdXMnKSB7XG4gICAgICAgICAgcmV0dXJuICdBbGxlciDDoCBsYSBwYWdlIHByw6ljw6lkZW50ZSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZnJGUiA9IGZyRlI7XG52YXIgaGVJTCA9IHtcbiAgcHJvcHM6IHtcbiAgICAvLyBNdWlCcmVhZGNydW1iczoge1xuICAgIC8vICAgZXhwYW5kVGV4dDogJ1Nob3cgcGF0aCcsXG4gICAgLy8gfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ9eU16LXnteV15Mg15TXp9eV15PXnScsXG4gICAgICBsYWJlbFJvd3NQZXJQYWdlOiAn16nXldeo15XXqiDXkdei157XldeTOicsXG4gICAgICBsYWJlbERpc3BsYXllZFJvd3M6IGZ1bmN0aW9uIGxhYmVsRGlzcGxheWVkUm93cyhfcmVmMTEpIHtcbiAgICAgICAgdmFyIGZyb20gPSBfcmVmMTEuZnJvbSxcbiAgICAgICAgICAgIHRvID0gX3JlZjExLnRvLFxuICAgICAgICAgICAgY291bnQgPSBfcmVmMTEuY291bnQ7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChmcm9tLCBcIi1cIikuY29uY2F0KHRvLCBcIiBcXHUwNURFXFx1MDVFQVxcdTA1RDVcXHUwNURBIFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIm1vcmUgdGhhbiBcIi5jb25jYXQodG8pKTtcbiAgICAgIH0sXG4gICAgICBuZXh0SWNvbkJ1dHRvblRleHQ6ICfXlNei157XldeTINeU15HXkCdcbiAgICB9LFxuICAgIE11aVJhdGluZzoge1xuICAgICAgZ2V0TGFiZWxUZXh0OiBmdW5jdGlvbiBnZXRMYWJlbFRleHQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHZhbHVlLCBcIiBcXHUwNURCXFx1MDVENVxcdTA1REJcXHUwNUQxXCIpLmNvbmNhdCh2YWx1ZSAhPT0gMSA/ICfXmdedJyA6ICcnKTtcbiAgICAgIH0sXG4gICAgICBlbXB0eUxhYmVsVGV4dDogJ9eo15nXpydcbiAgICB9LFxuICAgIE11aUF1dG9jb21wbGV0ZToge1xuICAgICAgY2xlYXJUZXh0OiAn16DXp9eUJyxcbiAgICAgIGNsb3NlVGV4dDogJ9eh15LXldeoJyxcbiAgICAgIGxvYWRpbmdUZXh0OiAn15jXldei15/igKYnLFxuICAgICAgbm9PcHRpb25zVGV4dDogJ9eQ15nXnyDXkNeV16TXpteZ15XXqicsXG4gICAgICBvcGVuVGV4dDogJ9ek16rXlydcbiAgICB9LFxuICAgIE11aUFsZXJ0OiB7XG4gICAgICBjbG9zZVRleHQ6ICfXodeS15XXqCdcbiAgICB9IC8vIE11aVBhZ2luYXRpb246IHtcbiAgICAvLyAgICdhcmlhLWxhYmVsJzogJ1BhZ2luYXRpb24gbmF2aWdhdGlvbicsXG4gICAgLy8gICBnZXRJdGVtQXJpYUxhYmVsOiAodHlwZSwgcGFnZSwgc2VsZWN0ZWQpID0+IHtcbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgIC8vICAgICAgIHJldHVybiBgJHtzZWxlY3RlZCA/ICcnIDogJ0dvIHRvICd9cGFnZSAke3BhZ2V9YDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gZmlyc3QgcGFnZSc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdsYXN0Jykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gbGFzdCBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ25leHQnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBuZXh0IHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAncHJldmlvdXMnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBwcmV2aW91cyBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuXG4gIH1cbn07XG5leHBvcnRzLmhlSUwgPSBoZUlMO1xudmFyIGhpSU4gPSB7XG4gIHByb3BzOiB7XG4gICAgTXVpQnJlYWRjcnVtYnM6IHtcbiAgICAgIGV4cGFuZFRleHQ6ICfgpLDgpL7gpLjgpY3gpKTgpL4g4KSm4KS/4KSW4KS+4KSv4KWH4KSCJ1xuICAgIH0sXG4gICAgTXVpVGFibGVQYWdpbmF0aW9uOiB7XG4gICAgICBiYWNrSWNvbkJ1dHRvblRleHQ6ICfgpKrgpL/gpJvgpLLgpL4g4KSq4KWD4KS34KWN4KSgJyxcbiAgICAgIGxhYmVsUm93c1BlclBhZ2U6ICfgpKrgpILgpJXgpY3gpKTgpL/gpK/gpL7gpIEg4KSq4KWN4KSw4KSk4KS/IOCkquClg+Ckt+CljeCkoDonLFxuICAgICAgbGFiZWxEaXNwbGF5ZWRSb3dzOiBmdW5jdGlvbiBsYWJlbERpc3BsYXllZFJvd3MoX3JlZjEyKSB7XG4gICAgICAgIHZhciBmcm9tID0gX3JlZjEyLmZyb20sXG4gICAgICAgICAgICB0byA9IF9yZWYxMi50byxcbiAgICAgICAgICAgIGNvdW50ID0gX3JlZjEyLmNvdW50O1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZnJvbSwgXCItXCIpLmNvbmNhdCh0byA9PT0gLTEgPyBjb3VudCA6IHRvLCBcIiBcXHUwOTE1XFx1MDk0MVxcdTA5MzIgXCIpLmNvbmNhdChjb3VudCwgXCIgXFx1MDkyRVxcdTA5NDdcXHUwOTAyXCIpO1xuICAgICAgfSxcbiAgICAgIG5leHRJY29uQnV0dG9uVGV4dDogJ+CkheCkl+CksuCkviDgpKrgpYPgpLfgpY3gpKAnXG4gICAgfSxcbiAgICBNdWlSYXRpbmc6IHtcbiAgICAgIGdldExhYmVsVGV4dDogZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgXFx1MDkyNFxcdTA5M0VcXHUwOTMwXCIpLmNvbmNhdCh2YWx1ZSAhPT0gMSA/ICfgpYcnIDogJ+CkvicpO1xuICAgICAgfSxcbiAgICAgIGVtcHR5TGFiZWxUZXh0OiAn4KSw4KS/4KSV4KWN4KSkJ1xuICAgIH0sXG4gICAgTXVpQXV0b2NvbXBsZXRlOiB7XG4gICAgICBjbGVhclRleHQ6ICfgpLngpJ/gpL7gpK/gpYfgpIInLFxuICAgICAgY2xvc2VUZXh0OiAn4KSs4KSC4KSmIOCkleCksOClh+CkgicsXG4gICAgICBsb2FkaW5nVGV4dDogJ+CksuCli+CkoSDgpLngpYsg4KSw4KS54KS+IOCkueCliOKApicsXG4gICAgICBub09wdGlvbnNUZXh0OiAn4KSV4KWL4KSIIOCkteCkv+CkleCksuCljeCkqiDgpKjgpLngpYDgpIInLFxuICAgICAgb3BlblRleHQ6ICfgpJbgpYvgpLLgpYfgpIInXG4gICAgfSxcbiAgICBNdWlBbGVydDoge1xuICAgICAgY2xvc2VUZXh0OiAn4KSs4KSC4KSmIOCkleCksOClh+CkgidcbiAgICB9LFxuICAgIE11aVBhZ2luYXRpb246IHtcbiAgICAgICdhcmlhLWxhYmVsJzogJ+CkquClg+CkuOCljeCkoOCkvuCkqOClgeCkuOCkvuCksCDgpLjgpILgpJrgpL7gpLLgpKgnLFxuICAgICAgZ2V0SXRlbUFyaWFMYWJlbDogZnVuY3Rpb24gZ2V0SXRlbUFyaWFMYWJlbCh0eXBlLCBwYWdlLCBzZWxlY3RlZCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXFx1MDkyQVxcdTA5NDNcXHUwOTM3XFx1MDk0RFxcdTA5MjAgXCIuY29uY2F0KHBhZ2UsIFwiIFwiKS5jb25jYXQoc2VsZWN0ZWQgPyAnJyA6ICcg4KSq4KSwIOCknOCkvuCkj+CkgScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcbiAgICAgICAgICByZXR1cm4gJ+CkquCkueCksuClhyDgpKrgpYPgpLfgpY3gpKAg4KSq4KSwIOCknOCkvuCkj+CkgSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xhc3QnKSB7XG4gICAgICAgICAgcmV0dXJuICfgpIXgpILgpKTgpL/gpK4g4KSq4KWD4KS34KWN4KSgIOCkquCksCDgpJzgpL7gpI/gpIEnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICduZXh0Jykge1xuICAgICAgICAgIHJldHVybiAn4KSF4KSX4KSy4KWHIOCkquClg+Ckt+CljeCkoCDgpKrgpLAg4KSc4KS+4KSP4KSBJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAncHJldmlvdXMnKSB7XG4gICAgICAgICAgcmV0dXJuICfgpKrgpL/gpJvgpLLgpYcg4KSq4KWD4KS34KWN4KSgIOCkquCksCDgpJzgpL7gpI/gpIEnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmhpSU4gPSBoaUlOO1xudmFyIGh1SFUgPSB7XG4gIHByb3BzOiB7XG4gICAgTXVpQnJlYWRjcnVtYnM6IHtcbiAgICAgIGV4cGFuZFRleHQ6ICfDmnR2b25hbCdcbiAgICB9LFxuICAgIE11aVRhYmxlUGFnaW5hdGlvbjoge1xuICAgICAgYmFja0ljb25CdXR0b25UZXh0OiAnRWzFkXrFkSBvbGRhbCcsXG4gICAgICBsYWJlbFJvd3NQZXJQYWdlOiAnU29yb2sgc3rDoW1hOicsXG4gICAgICBsYWJlbERpc3BsYXllZFJvd3M6IGZ1bmN0aW9uIGxhYmVsRGlzcGxheWVkUm93cyhfcmVmMTMpIHtcbiAgICAgICAgdmFyIGZyb20gPSBfcmVmMTMuZnJvbSxcbiAgICAgICAgICAgIHRvID0gX3JlZjEzLnRvLFxuICAgICAgICAgICAgY291bnQgPSBfcmVmMTMuY291bnQ7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChmcm9tLCBcIi1cIikuY29uY2F0KHRvLCBcIiAvIFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIm1vcmUgdGhhbiBcIi5jb25jYXQodG8pKTtcbiAgICAgIH0sXG4gICAgICBuZXh0SWNvbkJ1dHRvblRleHQ6ICdLw7Z2ZXRrZXrFkSBvbGRhbCdcbiAgICB9LFxuICAgIE11aVJhdGluZzoge1xuICAgICAgZ2V0TGFiZWxUZXh0OiBmdW5jdGlvbiBnZXRMYWJlbFRleHQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHZhbHVlLCBcIiBDc2lsbGFnXCIpO1xuICAgICAgfSxcbiAgICAgIGVtcHR5TGFiZWxUZXh0OiAnw5xyZXMnXG4gICAgfSxcbiAgICBNdWlBdXRvY29tcGxldGU6IHtcbiAgICAgIGNsZWFyVGV4dDogJ1TDtnJsw6lzJyxcbiAgICAgIGNsb3NlVGV4dDogJ0JlesOhcsOhcycsXG4gICAgICBsb2FkaW5nVGV4dDogJ1TDtmx0w6lz4oCmJyxcbiAgICAgIG5vT3B0aW9uc1RleHQ6ICdOaW5jcyB0YWzDoWxhdCcsXG4gICAgICBvcGVuVGV4dDogJ01lZ255aXTDoXMnXG4gICAgfSxcbiAgICBNdWlBbGVydDoge1xuICAgICAgY2xvc2VUZXh0OiAnQmV6w6Fyw6FzJ1xuICAgIH0sXG4gICAgTXVpUGFnaW5hdGlvbjoge1xuICAgICAgJ2FyaWEtbGFiZWwnOiAnTGFwb3rDoXMnLFxuICAgICAgZ2V0SXRlbUFyaWFMYWJlbDogZnVuY3Rpb24gZ2V0SXRlbUFyaWFMYWJlbCh0eXBlLCBwYWdlLCBzZWxlY3RlZCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHBhZ2UsIFwiLiBvbGRhbFwiKS5jb25jYXQoc2VsZWN0ZWQgPyAnJyA6ICdyYScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcbiAgICAgICAgICByZXR1cm4gJ0Vsc8WRIG9sZGFscmEnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdsYXN0Jykge1xuICAgICAgICAgIHJldHVybiAnVXRvbHPDsyBvbGRhbHJhJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbmV4dCcpIHtcbiAgICAgICAgICByZXR1cm4gJ0vDtnZldGtlesWRIG9sZGFscmEnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdwcmV2aW91cycpIHtcbiAgICAgICAgICByZXR1cm4gJ0VsxZF6xZEgb2xkYWxyYSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuaHVIVSA9IGh1SFU7XG52YXIgaHlBTSA9IHtcbiAgcHJvcHM6IHtcbiAgICAvLyBNdWlCcmVhZGNydW1iczoge1xuICAgIC8vICAgZXhwYW5kVGV4dDogJ1Nob3cgcGF0aCcsXG4gICAgLy8gfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ9WG1aHVrdW41oDVpNWoJyxcbiAgICAgIGxhYmVsUm93c1BlclBhZ2U6ICfVj9W41bLVpdaAINW01aXVryDVp9W71bjWgtW0YCcsXG4gICAgICBsYWJlbERpc3BsYXllZFJvd3M6IGZ1bmN0aW9uIGxhYmVsRGlzcGxheWVkUm93cyhfcmVmMTQpIHtcbiAgICAgICAgdmFyIGZyb20gPSBfcmVmMTQuZnJvbSxcbiAgICAgICAgICAgIHRvID0gX3JlZjE0LnRvLFxuICAgICAgICAgICAgY291bnQgPSBfcmVmMTQuY291bnQ7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChmcm9tLCBcIi1cIikuY29uY2F0KHRvLCBcIiAvIFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIm1vcmUgdGhhbiBcIi5jb25jYXQodG8pKTtcbiAgICAgIH0sXG4gICAgICBuZXh0SWNvbkJ1dHRvblRleHQ6ICfVgNWh1bvVuNaA1aTVqCdcbiAgICB9LFxuICAgIE11aVJhdGluZzoge1xuICAgICAgZ2V0TGFiZWxUZXh0OiBmdW5jdGlvbiBnZXRMYWJlbFRleHQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHZhbHVlLCBcIiBcXHUwNTMxXFx1MDU3RFxcdTA1N0ZcXHUwNTcyXCIpO1xuICAgICAgfSxcbiAgICAgIGVtcHR5TGFiZWxUZXh0OiAn1LTVodW/1aHWgNWvJ1xuICAgIH0sXG4gICAgTXVpQXV0b2NvbXBsZXRlOiB7XG4gICAgICBjbGVhclRleHQ6ICfVhNWh1oTWgNWl1awnLFxuICAgICAgY2xvc2VUZXh0OiAn1ZPVodWv1aXVrCcsXG4gICAgICBsb2FkaW5nVGV4dDogJ9Sy1aXVvNW21bjWgtW04oCmJyxcbiAgICAgIG5vT3B0aW9uc1RleHQ6ICfVj9Wh1oDVotWl1oDVodWv1bbVpdaAINW51a/VodW2JyxcbiAgICAgIG9wZW5UZXh0OiAn1LLVodaB1aXVrCdcbiAgICB9LFxuICAgIE11aUFsZXJ0OiB7XG4gICAgICBjbG9zZVRleHQ6ICfVk9Wh1a/VpdWsJ1xuICAgIH0gLy8gTXVpUGFnaW5hdGlvbjoge1xuICAgIC8vICAgJ2FyaWEtbGFiZWwnOiAnUGFnaW5hdGlvbiBuYXZpZ2F0aW9uJyxcbiAgICAvLyAgIGdldEl0ZW1BcmlhTGFiZWw6ICh0eXBlLCBwYWdlLCBzZWxlY3RlZCkgPT4ge1xuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuIGAke3NlbGVjdGVkID8gJycgOiAnR28gdG8gJ31wYWdlICR7cGFnZX1gO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBmaXJzdCBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ2xhc3QnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBsYXN0IHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAnbmV4dCcpIHtcbiAgICAvLyAgICAgICByZXR1cm4gJ0dvIHRvIG5leHQgcGFnZSc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdwcmV2aW91cycpIHtcbiAgICAvLyAgICAgICByZXR1cm4gJ0dvIHRvIHByZXZpb3VzIHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG5cbiAgfVxufTtcbmV4cG9ydHMuaHlBTSA9IGh5QU07XG52YXIgaWRJRCA9IHtcbiAgcHJvcHM6IHtcbiAgICAvLyBNdWlCcmVhZGNydW1iczoge1xuICAgIC8vICAgZXhwYW5kVGV4dDogJ1Nob3cgcGF0aCcsXG4gICAgLy8gfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ0hhbGFtYW4gc2ViZWx1bW55YScsXG4gICAgICBsYWJlbFJvd3NQZXJQYWdlOiAnQmFyaXMgcGVyIGhhbGFtYW46JyxcbiAgICAgIGxhYmVsRGlzcGxheWVkUm93czogZnVuY3Rpb24gbGFiZWxEaXNwbGF5ZWRSb3dzKF9yZWYxNSkge1xuICAgICAgICB2YXIgZnJvbSA9IF9yZWYxNS5mcm9tLFxuICAgICAgICAgICAgdG8gPSBfcmVmMTUudG8sXG4gICAgICAgICAgICBjb3VudCA9IF9yZWYxNS5jb3VudDtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGZyb20sIFwiLVwiKS5jb25jYXQodG8sIFwiIGRhcmkgXCIpLmNvbmNhdChjb3VudCAhPT0gLTEgPyBjb3VudCA6IFwibW9yZSB0aGFuIFwiLmNvbmNhdCh0bykpO1xuICAgICAgfSxcbiAgICAgIG5leHRJY29uQnV0dG9uVGV4dDogJ0hhbGFtYW4gc2VsYW5qdXRueWEnXG4gICAgfSxcbiAgICBNdWlSYXRpbmc6IHtcbiAgICAgIGdldExhYmVsVGV4dDogZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgQmludGFuZ1wiKTtcbiAgICAgIH0gLy8gZW1wdHlMYWJlbFRleHQ6ICdFbXB0eScsXG5cbiAgICB9LFxuICAgIE11aUF1dG9jb21wbGV0ZToge1xuICAgICAgY2xlYXJUZXh0OiAnSGFwdXMnLFxuICAgICAgY2xvc2VUZXh0OiAnVHV0dXAnLFxuICAgICAgbG9hZGluZ1RleHQ6ICdNZW11YXTigKYnLFxuICAgICAgbm9PcHRpb25zVGV4dDogJ1RpZGFrIGFkYSBvcHNpJyxcbiAgICAgIG9wZW5UZXh0OiAnQnVrYSdcbiAgICB9LFxuICAgIE11aUFsZXJ0OiB7XG4gICAgICBjbG9zZVRleHQ6ICdUdXR1cCdcbiAgICB9IC8vIE11aVBhZ2luYXRpb246IHtcbiAgICAvLyAgICdhcmlhLWxhYmVsJzogJ1BhZ2luYXRpb24gbmF2aWdhdGlvbicsXG4gICAgLy8gICBnZXRJdGVtQXJpYUxhYmVsOiAodHlwZSwgcGFnZSwgc2VsZWN0ZWQpID0+IHtcbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgIC8vICAgICAgIHJldHVybiBgJHtzZWxlY3RlZCA/ICcnIDogJ0dvIHRvICd9cGFnZSAke3BhZ2V9YDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gZmlyc3QgcGFnZSc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdsYXN0Jykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gbGFzdCBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ25leHQnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBuZXh0IHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAncHJldmlvdXMnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBwcmV2aW91cyBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuXG4gIH1cbn07XG5leHBvcnRzLmlkSUQgPSBpZElEO1xudmFyIGlzSVMgPSB7XG4gIHByb3BzOiB7XG4gICAgLy8gTXVpQnJlYWRjcnVtYnM6IHtcbiAgICAvLyAgIGV4cGFuZFRleHQ6ICdTaG93IHBhdGgnLFxuICAgIC8vIH0sXG4gICAgTXVpVGFibGVQYWdpbmF0aW9uOiB7XG4gICAgICBiYWNrSWNvbkJ1dHRvblRleHQ6ICdGeXJyaSBzw63DsGEnLFxuICAgICAgbGFiZWxSb3dzUGVyUGFnZTogJ1Jhw7BpciDDoSBzw63DsHU6JyxcbiAgICAgIGxhYmVsRGlzcGxheWVkUm93czogZnVuY3Rpb24gbGFiZWxEaXNwbGF5ZWRSb3dzKF9yZWYxNikge1xuICAgICAgICB2YXIgZnJvbSA9IF9yZWYxNi5mcm9tLFxuICAgICAgICAgICAgdG8gPSBfcmVmMTYudG8sXG4gICAgICAgICAgICBjb3VudCA9IF9yZWYxNi5jb3VudDtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGZyb20sIFwiLVwiKS5jb25jYXQodG8sIFwiIGFmIFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIm1vcmUgdGhhbiBcIi5jb25jYXQodG8pKTtcbiAgICAgIH0sXG4gICAgICBuZXh0SWNvbkJ1dHRvblRleHQ6ICdOw6ZzdGEgc8Otw7BhJ1xuICAgIH0sXG4gICAgTXVpUmF0aW5nOiB7XG4gICAgICBnZXRMYWJlbFRleHQ6IGZ1bmN0aW9uIGdldExhYmVsVGV4dCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodmFsdWUsIFwiIFwiKS5jb25jYXQodmFsdWUgPT09IDEgPyAnU3RqYXJuYScgOiAnU3Rqw7ZybnVyJyk7XG4gICAgICB9LFxuICAgICAgZW1wdHlMYWJlbFRleHQ6ICdUw7NtdCdcbiAgICB9LFxuICAgIE11aUF1dG9jb21wbGV0ZToge1xuICAgICAgY2xlYXJUZXh0OiAnSHJlaW5zYScsXG4gICAgICBjbG9zZVRleHQ6ICdMb2thJyxcbiAgICAgIGxvYWRpbmdUZXh0OiAnSGxhw7Bh4oCmJyxcbiAgICAgIG5vT3B0aW9uc1RleHQ6ICdFbmdhciBuacOwdXJzdMO2w7B1cicsXG4gICAgICBvcGVuVGV4dDogJ09wbmEnXG4gICAgfSxcbiAgICBNdWlBbGVydDoge1xuICAgICAgY2xvc2VUZXh0OiAnTG9rYSdcbiAgICB9IC8vIE11aVBhZ2luYXRpb246IHtcbiAgICAvLyAgICdhcmlhLWxhYmVsJzogJ1BhZ2luYXRpb24gbmF2aWdhdGlvbicsXG4gICAgLy8gICBnZXRJdGVtQXJpYUxhYmVsOiAodHlwZSwgcGFnZSwgc2VsZWN0ZWQpID0+IHtcbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgIC8vICAgICAgIHJldHVybiBgJHtzZWxlY3RlZCA/ICcnIDogJ0dvIHRvICd9cGFnZSAke3BhZ2V9YDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gZmlyc3QgcGFnZSc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdsYXN0Jykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gbGFzdCBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ25leHQnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBuZXh0IHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAncHJldmlvdXMnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBwcmV2aW91cyBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuXG4gIH1cbn07XG5leHBvcnRzLmlzSVMgPSBpc0lTO1xudmFyIGl0SVQgPSB7XG4gIHByb3BzOiB7XG4gICAgTXVpQnJlYWRjcnVtYnM6IHtcbiAgICAgIGV4cGFuZFRleHQ6ICdWaXN1YWxpenphIHBlcmNvcnNvJ1xuICAgIH0sXG4gICAgTXVpVGFibGVQYWdpbmF0aW9uOiB7XG4gICAgICBiYWNrSWNvbkJ1dHRvblRleHQ6ICdQYWdpbmEgcHJlY2VkZW50ZScsXG4gICAgICBsYWJlbFJvd3NQZXJQYWdlOiAnUmlnaGUgcGVyIHBhZ2luYTonLFxuICAgICAgbGFiZWxEaXNwbGF5ZWRSb3dzOiBmdW5jdGlvbiBsYWJlbERpc3BsYXllZFJvd3MoX3JlZjE3KSB7XG4gICAgICAgIHZhciBmcm9tID0gX3JlZjE3LmZyb20sXG4gICAgICAgICAgICB0byA9IF9yZWYxNy50byxcbiAgICAgICAgICAgIGNvdW50ID0gX3JlZjE3LmNvdW50O1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZnJvbSwgXCItXCIpLmNvbmNhdCh0bywgXCIgZGkgXCIpLmNvbmNhdChjb3VudCAhPT0gLTEgPyBjb3VudCA6IFwibW9yZSB0aGFuIFwiLmNvbmNhdCh0bykpO1xuICAgICAgfSxcbiAgICAgIG5leHRJY29uQnV0dG9uVGV4dDogJ1BhZ2luYSBzdWNjZXNzaXZhJ1xuICAgIH0sXG4gICAgTXVpUmF0aW5nOiB7XG4gICAgICBnZXRMYWJlbFRleHQ6IGZ1bmN0aW9uIGdldExhYmVsVGV4dCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodmFsdWUsIFwiIFN0ZWxsXCIpLmNvbmNhdCh2YWx1ZSAhPT0gMSA/ICdlJyA6ICdhJyk7XG4gICAgICB9LFxuICAgICAgZW1wdHlMYWJlbFRleHQ6ICdWdW90bydcbiAgICB9LFxuICAgIE11aUF1dG9jb21wbGV0ZToge1xuICAgICAgY2xlYXJUZXh0OiAnU3Z1b3RhJyxcbiAgICAgIGNsb3NlVGV4dDogJ0NoaXVkaScsXG4gICAgICBsb2FkaW5nVGV4dDogJ0NhcmljYW1lbnRvIGluIGNvcnNv4oCmJyxcbiAgICAgIG5vT3B0aW9uc1RleHQ6ICdOZXNzdW5hIG9wemlvbmUnLFxuICAgICAgb3BlblRleHQ6ICdBcHJpJ1xuICAgIH0sXG4gICAgTXVpQWxlcnQ6IHtcbiAgICAgIGNsb3NlVGV4dDogJ0NoaXVkaSdcbiAgICB9LFxuICAgIE11aVBhZ2luYXRpb246IHtcbiAgICAgICdhcmlhLWxhYmVsJzogJ05hdmlnYXppb25lIGltcGFnaW5hdGEnLFxuICAgICAgZ2V0SXRlbUFyaWFMYWJlbDogZnVuY3Rpb24gZ2V0SXRlbUFyaWFMYWJlbCh0eXBlLCBwYWdlLCBzZWxlY3RlZCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHNlbGVjdGVkID8gJycgOiAnVmFpIGFsbGEgJywgXCJwYWdpbmEgXCIpLmNvbmNhdChwYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgcmV0dXJuICdWYWkgYWxsYSBwcmltYSBwYWdpbmEnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdsYXN0Jykge1xuICAgICAgICAgIHJldHVybiBcIlZhaSBhbGwndWx0aW1hIHBhZ2luYVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICduZXh0Jykge1xuICAgICAgICAgIHJldHVybiAnVmFpIGFsbGEgcGFnaW5hIHN1Y2Nlc3NpdmEnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdwcmV2aW91cycpIHtcbiAgICAgICAgICByZXR1cm4gJ1ZhaSBhbGxhIHBhZ2luYSBwcmVjZWRlbnRlJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5pdElUID0gaXRJVDtcbnZhciBqYUpQID0ge1xuICBwcm9wczoge1xuICAgIC8vIE11aUJyZWFkY3J1bWJzOiB7XG4gICAgLy8gICBleHBhbmRUZXh0OiAnU2hvdyBwYXRoJyxcbiAgICAvLyB9LFxuICAgIE11aVRhYmxlUGFnaW5hdGlvbjoge1xuICAgICAgYmFja0ljb25CdXR0b25UZXh0OiAn5YmN44Gu44Oa44O844K4JyxcbiAgICAgIGxhYmVsUm93c1BlclBhZ2U6ICfjg5rjg7zjgrjjgZTjgajjga7ooYw6JyxcbiAgICAgIGxhYmVsRGlzcGxheWVkUm93czogZnVuY3Rpb24gbGFiZWxEaXNwbGF5ZWRSb3dzKF9yZWYxOCkge1xuICAgICAgICB2YXIgZnJvbSA9IF9yZWYxOC5mcm9tLFxuICAgICAgICAgICAgdG8gPSBfcmVmMTgudG8sXG4gICAgICAgICAgICBjb3VudCA9IF9yZWYxOC5jb3VudDtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGZyb20sIFwiLVwiKS5jb25jYXQodG8sIFwiIG9mIFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIm1vcmUgdGhhbiBcIi5jb25jYXQodG8pKTtcbiAgICAgIH0sXG4gICAgICBuZXh0SWNvbkJ1dHRvblRleHQ6ICfmrKHjga7jg5rjg7zjgrgnXG4gICAgfSxcbiAgICBNdWlSYXRpbmc6IHtcbiAgICAgIGdldExhYmVsVGV4dDogZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgXCIpLmNvbmNhdCh2YWx1ZSAhPT0gMSA/ICflh7rmvJTogIUnIDogJ+aYnycpO1xuICAgICAgfSAvLyBlbXB0eUxhYmVsVGV4dDogJ0VtcHR5JyxcblxuICAgIH0sXG4gICAgTXVpQXV0b2NvbXBsZXRlOiB7XG4gICAgICBjbGVhclRleHQ6ICfjgq/jg6rjgqInLFxuICAgICAgY2xvc2VUZXh0OiAn6ZaJ44GY44KLJyxcbiAgICAgIGxvYWRpbmdUZXh0OiAn56mN44G/6L6844G/4oCmJyxcbiAgICAgIG5vT3B0aW9uc1RleHQ6ICfntZDmnpzjgYzjgYLjgorjgb7jgZvjgpMnLFxuICAgICAgb3BlblRleHQ6ICfplovjgYTjgZ8nXG4gICAgfSxcbiAgICBNdWlBbGVydDoge1xuICAgICAgY2xvc2VUZXh0OiAn6ZaJ44GY44KLJ1xuICAgIH0gLy8gTXVpUGFnaW5hdGlvbjoge1xuICAgIC8vICAgJ2FyaWEtbGFiZWwnOiAnUGFnaW5hdGlvbiBuYXZpZ2F0aW9uJyxcbiAgICAvLyAgIGdldEl0ZW1BcmlhTGFiZWw6ICh0eXBlLCBwYWdlLCBzZWxlY3RlZCkgPT4ge1xuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuIGAke3NlbGVjdGVkID8gJycgOiAnR28gdG8gJ31wYWdlICR7cGFnZX1gO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBmaXJzdCBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ2xhc3QnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBsYXN0IHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAnbmV4dCcpIHtcbiAgICAvLyAgICAgICByZXR1cm4gJ0dvIHRvIG5leHQgcGFnZSc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdwcmV2aW91cycpIHtcbiAgICAvLyAgICAgICByZXR1cm4gJ0dvIHRvIHByZXZpb3VzIHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG5cbiAgfVxufTtcbmV4cG9ydHMuamFKUCA9IGphSlA7XG52YXIga29LUiA9IHtcbiAgcHJvcHM6IHtcbiAgICAvLyBNdWlCcmVhZGNydW1iczoge1xuICAgIC8vICAgZXhwYW5kVGV4dDogJ1Nob3cgcGF0aCcsXG4gICAgLy8gfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ+ydtOyghCDtjpjsnbTsp4AnLFxuICAgICAgbGFiZWxSb3dzUGVyUGFnZTogJ+2OmOydtOyngCDri7kg7ZaJOicsXG4gICAgICBsYWJlbERpc3BsYXllZFJvd3M6IGZ1bmN0aW9uIGxhYmVsRGlzcGxheWVkUm93cyhfcmVmMTkpIHtcbiAgICAgICAgdmFyIGZyb20gPSBfcmVmMTkuZnJvbSxcbiAgICAgICAgICAgIHRvID0gX3JlZjE5LnRvLFxuICAgICAgICAgICAgY291bnQgPSBfcmVmMTkuY291bnQ7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChmcm9tLCBcIi1cIikuY29uY2F0KHRvLCBcIiAvIFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIm1vcmUgdGhhbiBcIi5jb25jYXQodG8pKTtcbiAgICAgIH0sXG4gICAgICBuZXh0SWNvbkJ1dHRvblRleHQ6ICfri6TsnYwg7Y6Y7J207KeAJ1xuICAgIH0sXG4gICAgTXVpUmF0aW5nOiB7XG4gICAgICBnZXRMYWJlbFRleHQ6IGZ1bmN0aW9uIGdldExhYmVsVGV4dCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodmFsdWUsIFwiIFxcdUM4MTBcIik7XG4gICAgICB9IC8vIGVtcHR5TGFiZWxUZXh0OiAnRW1wdHknLFxuXG4gICAgfSxcbiAgICBNdWlBdXRvY29tcGxldGU6IHtcbiAgICAgIGNsZWFyVGV4dDogJ+yngOyasOq4sCcsXG4gICAgICBjbG9zZVRleHQ6ICfri6vquLAnLFxuICAgICAgbG9hZGluZ1RleHQ6ICfrtojrn6zsmKTripQg7KSR4oCmJyxcbiAgICAgIG5vT3B0aW9uc1RleHQ6ICfsmLXshZgg7JeG7J2MJyxcbiAgICAgIG9wZW5UZXh0OiAn7Je06riwJ1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMua29LUiA9IGtvS1I7XG52YXIgbmxOTCA9IHtcbiAgcHJvcHM6IHtcbiAgICAvLyBNdWlCcmVhZGNydW1iczoge1xuICAgIC8vICAgZXhwYW5kVGV4dDogJ1Nob3cgcGF0aCcsXG4gICAgLy8gfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ1ZvcmlnZSBwYWdpbmEnLFxuICAgICAgbGFiZWxSb3dzUGVyUGFnZTogJ1JlZ2VscyBwZXIgcGFnaW5hIDonLFxuICAgICAgbGFiZWxEaXNwbGF5ZWRSb3dzOiBmdW5jdGlvbiBsYWJlbERpc3BsYXllZFJvd3MoX3JlZjIwKSB7XG4gICAgICAgIHZhciBmcm9tID0gX3JlZjIwLmZyb20sXG4gICAgICAgICAgICB0byA9IF9yZWYyMC50byxcbiAgICAgICAgICAgIGNvdW50ID0gX3JlZjIwLmNvdW50O1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZnJvbSwgXCItXCIpLmNvbmNhdCh0bywgXCIgdmFuIFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIm1vcmUgdGhhbiBcIi5jb25jYXQodG8pKTtcbiAgICAgIH0sXG4gICAgICBuZXh0SWNvbkJ1dHRvblRleHQ6ICdWb2xnZW5kZSBwYWdpbmEnXG4gICAgfSxcbiAgICBNdWlSYXRpbmc6IHtcbiAgICAgIGdldExhYmVsVGV4dDogZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgU3RlclwiKS5jb25jYXQodmFsdWUgIT09IDEgPyAncmVuJyA6ICcnKTtcbiAgICAgIH0gLy8gZW1wdHlMYWJlbFRleHQ6ICdFbXB0eScsXG5cbiAgICB9LFxuICAgIE11aUF1dG9jb21wbGV0ZToge1xuICAgICAgY2xlYXJUZXh0OiAnV2lzc2VuJyxcbiAgICAgIGNsb3NlVGV4dDogJ1NsdWl0ZW4nLFxuICAgICAgbG9hZGluZ1RleHQ6ICdMYWRlbuKApicsXG4gICAgICBub09wdGlvbnNUZXh0OiAnR2VlbiBvcHRpZXMnLFxuICAgICAgb3BlblRleHQ6ICdPcGVuZW4nXG4gICAgfSxcbiAgICBNdWlBbGVydDoge1xuICAgICAgY2xvc2VUZXh0OiAnU2x1aXRlbidcbiAgICB9IC8vIE11aVBhZ2luYXRpb246IHtcbiAgICAvLyAgICdhcmlhLWxhYmVsJzogJ1BhZ2luYXRpb24gbmF2aWdhdGlvbicsXG4gICAgLy8gICBnZXRJdGVtQXJpYUxhYmVsOiAodHlwZSwgcGFnZSwgc2VsZWN0ZWQpID0+IHtcbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgIC8vICAgICAgIHJldHVybiBgJHtzZWxlY3RlZCA/ICcnIDogJ0dvIHRvICd9cGFnZSAke3BhZ2V9YDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gZmlyc3QgcGFnZSc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdsYXN0Jykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gbGFzdCBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ25leHQnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBuZXh0IHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAncHJldmlvdXMnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBwcmV2aW91cyBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuXG4gIH1cbn07XG5leHBvcnRzLm5sTkwgPSBubE5MO1xudmFyIHBsUEwgPSB7XG4gIHByb3BzOiB7XG4gICAgTXVpQnJlYWRjcnVtYnM6IHtcbiAgICAgIGV4cGFuZFRleHQ6ICdQb2thxbwgxZtjaWXFvGvEmSdcbiAgICB9LFxuICAgIE11aVRhYmxlUGFnaW5hdGlvbjoge1xuICAgICAgYmFja0ljb25CdXR0b25UZXh0OiAnUG9wcnplZG5pYSBzdHJvbmEnLFxuICAgICAgbGFiZWxSb3dzUGVyUGFnZTogJ1dpZXJzenkgbmEgc3Ryb27EmTonLFxuICAgICAgbGFiZWxEaXNwbGF5ZWRSb3dzOiBmdW5jdGlvbiBsYWJlbERpc3BsYXllZFJvd3MoX3JlZjIxKSB7XG4gICAgICAgIHZhciBmcm9tID0gX3JlZjIxLmZyb20sXG4gICAgICAgICAgICB0byA9IF9yZWYyMS50byxcbiAgICAgICAgICAgIGNvdW50ID0gX3JlZjIxLmNvdW50O1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZnJvbSwgXCItXCIpLmNvbmNhdCh0bywgXCIgeiBcIikuY29uY2F0KGNvdW50ICE9PSAtMSA/IGNvdW50IDogXCJtb3JlIHRoYW4gXCIuY29uY2F0KHRvKSk7XG4gICAgICB9LFxuICAgICAgbmV4dEljb25CdXR0b25UZXh0OiAnTmFzdMSZcG5hIHN0cm9uYSdcbiAgICB9LFxuICAgIE11aVJhdGluZzoge1xuICAgICAgZ2V0TGFiZWxUZXh0OiBmdW5jdGlvbiBnZXRMYWJlbFRleHQodmFsdWUpIHtcbiAgICAgICAgdmFyIHBsdXJhbEZvcm0gPSAnZ3dpYXpkZWsnO1xuICAgICAgICB2YXIgbGFzdERpZ2l0ID0gdmFsdWUgJSAxMDtcblxuICAgICAgICBpZiAoKHZhbHVlIDwgMTAgfHwgdmFsdWUgPiAyMCkgJiYgbGFzdERpZ2l0ID4gMSAmJiBsYXN0RGlnaXQgPCA1KSB7XG4gICAgICAgICAgcGx1cmFsRm9ybSA9ICdnd2lhemRraSc7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICBwbHVyYWxGb3JtID0gJ2d3aWF6ZGthJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgXCIpLmNvbmNhdChwbHVyYWxGb3JtKTtcbiAgICAgIH0sXG4gICAgICBlbXB0eUxhYmVsVGV4dDogJ0JyYWsgZ3dpYXpkZWsnXG4gICAgfSxcbiAgICBNdWlBdXRvY29tcGxldGU6IHtcbiAgICAgIGNsZWFyVGV4dDogJ1d5Y3p5xZvEhycsXG4gICAgICBjbG9zZVRleHQ6ICdaYW1rbmlqJyxcbiAgICAgIGxvYWRpbmdUZXh0OiAnxYFhZG93YW5pZeKApicsXG4gICAgICBub09wdGlvbnNUZXh0OiAnQnJhayBvcGNqaScsXG4gICAgICBvcGVuVGV4dDogJ090d8OzcnonXG4gICAgfSxcbiAgICBNdWlBbGVydDoge1xuICAgICAgY2xvc2VUZXh0OiAnWmFta25paidcbiAgICB9LFxuICAgIE11aVBhZ2luYXRpb246IHtcbiAgICAgICdhcmlhLWxhYmVsJzogJ05hd2lnYWNqYSBwb2R6aWHFgnUgbmEgc3Ryb255JyxcbiAgICAgIGdldEl0ZW1BcmlhTGFiZWw6IGZ1bmN0aW9uIGdldEl0ZW1BcmlhTGFiZWwodHlwZSwgcGFnZSwgc2VsZWN0ZWQpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgICAgICAgIHJldHVybiBzZWxlY3RlZCA/IFwiXCIuY29uY2F0KHBhZ2UsIFwiLiBzdHJvbmFcIikgOiBcIlByemVqZFxcdTAxN0EgZG8gXCIuY29uY2F0KHBhZ2UsIFwiLiBzdHJvbnlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHJldHVybiAnUHJ6ZWpkxbogZG8gcGllcndzemVqIHN0cm9ueSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xhc3QnKSB7XG4gICAgICAgICAgcmV0dXJuICdQcnplamTFuiBkbyBvc3RhdG5pZWogc3Ryb255JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbmV4dCcpIHtcbiAgICAgICAgICByZXR1cm4gJ1ByemVqZMW6IGRvIG5hc3TEmXBuZWogc3Ryb255JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAncHJldmlvdXMnKSB7XG4gICAgICAgICAgcmV0dXJuICdQcnplamTFuiBkbyBwb3ByemVkbmllaiBzdHJvbnknO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLnBsUEwgPSBwbFBMO1xudmFyIHB0QlIgPSB7XG4gIHByb3BzOiB7XG4gICAgTXVpQnJlYWRjcnVtYnM6IHtcbiAgICAgIGV4cGFuZFRleHQ6ICdNb3N0cmFyIGNhbWluaG8nXG4gICAgfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ1DDoWdpbmEgYW50ZXJpb3InLFxuICAgICAgbGFiZWxSb3dzUGVyUGFnZTogJ0xpbmhhcyBwb3IgcMOhZ2luYTonLFxuICAgICAgbGFiZWxEaXNwbGF5ZWRSb3dzOiBmdW5jdGlvbiBsYWJlbERpc3BsYXllZFJvd3MoX3JlZjIyKSB7XG4gICAgICAgIHZhciBmcm9tID0gX3JlZjIyLmZyb20sXG4gICAgICAgICAgICB0byA9IF9yZWYyMi50byxcbiAgICAgICAgICAgIGNvdW50ID0gX3JlZjIyLmNvdW50O1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZnJvbSwgXCItXCIpLmNvbmNhdCh0bywgXCIgZGUgXCIpLmNvbmNhdChjb3VudCAhPT0gLTEgPyBjb3VudCA6IFwibW9yZSB0aGFuIFwiLmNvbmNhdCh0bykpO1xuICAgICAgfSxcbiAgICAgIG5leHRJY29uQnV0dG9uVGV4dDogJ1Byw7N4aW1hIHDDoWdpbmEnXG4gICAgfSxcbiAgICBNdWlSYXRpbmc6IHtcbiAgICAgIGdldExhYmVsVGV4dDogZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgRXN0cmVsYVwiKS5jb25jYXQodmFsdWUgIT09IDEgPyAncycgOiAnJyk7XG4gICAgICB9LFxuICAgICAgZW1wdHlMYWJlbFRleHQ6ICdWYXppbydcbiAgICB9LFxuICAgIE11aUF1dG9jb21wbGV0ZToge1xuICAgICAgY2xlYXJUZXh0OiAnTGltcGFyJyxcbiAgICAgIGNsb3NlVGV4dDogJ0ZlY2hhcicsXG4gICAgICBsb2FkaW5nVGV4dDogJ0NhcnJlZ2FuZG/igKYnLFxuICAgICAgbm9PcHRpb25zVGV4dDogJ1NlbSBvcMOnw7VlcycsXG4gICAgICBvcGVuVGV4dDogJ0FicmlyJ1xuICAgIH0sXG4gICAgTXVpQWxlcnQ6IHtcbiAgICAgIGNsb3NlVGV4dDogJ0ZlY2hhcidcbiAgICB9LFxuICAgIE11aVBhZ2luYXRpb246IHtcbiAgICAgICdhcmlhLWxhYmVsJzogJ05hdmVnYXIgcGVsYSBwYWdpbmHDp8OjbycsXG4gICAgICBnZXRJdGVtQXJpYUxhYmVsOiBmdW5jdGlvbiBnZXRJdGVtQXJpYUxhYmVsKHR5cGUsIHBhZ2UsIHNlbGVjdGVkKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAncGFnZScpIHtcbiAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoc2VsZWN0ZWQgPyAnJyA6ICdJciBwYXJhIGEgJywgXCJwXFx4RTFnaW5hIFwiKS5jb25jYXQocGFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHJldHVybiAnSXIgcGFyYSBhIHByaW1laXJhIHDDoWdpbmEnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdsYXN0Jykge1xuICAgICAgICAgIHJldHVybiAnSXIgcGFyYSBhIMO6bHRpbWEgcMOhZ2luYSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgcmV0dXJuICdJciBwYXJhIGEgcHLDs3hpbWEgcMOhZ2luYSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICAgIHJldHVybiAnSXIgcGFyYSBhIHDDoWdpbmEgYW50ZXJpb3InO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLnB0QlIgPSBwdEJSO1xudmFyIHB0UFQgPSB7XG4gIHByb3BzOiB7XG4gICAgTXVpQnJlYWRjcnVtYnM6IHtcbiAgICAgIGV4cGFuZFRleHQ6ICdNb3N0cmFyIGNhbWluaG8nXG4gICAgfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ1DDoWdpbmEgYW50ZXJpb3InLFxuICAgICAgbGFiZWxSb3dzUGVyUGFnZTogJ0xpbmhhcyBwb3IgcMOhZ2luYTonLFxuICAgICAgbGFiZWxEaXNwbGF5ZWRSb3dzOiBmdW5jdGlvbiBsYWJlbERpc3BsYXllZFJvd3MoX3JlZjIzKSB7XG4gICAgICAgIHZhciBmcm9tID0gX3JlZjIzLmZyb20sXG4gICAgICAgICAgICB0byA9IF9yZWYyMy50byxcbiAgICAgICAgICAgIGNvdW50ID0gX3JlZjIzLmNvdW50O1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZnJvbSwgXCItXCIpLmNvbmNhdCh0bywgXCIgZGUgXCIpLmNvbmNhdChjb3VudCAhPT0gLTEgPyBjb3VudCA6IFwibW9yZSB0aGFuIFwiLmNvbmNhdCh0bykpO1xuICAgICAgfSxcbiAgICAgIG5leHRJY29uQnV0dG9uVGV4dDogJ1Byw7N4aW1hIHDDoWdpbmEnXG4gICAgfSxcbiAgICBNdWlSYXRpbmc6IHtcbiAgICAgIGdldExhYmVsVGV4dDogZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgRXN0cmVsYVwiKS5jb25jYXQodmFsdWUgIT09IDEgPyAncycgOiAnJyk7XG4gICAgICB9LFxuICAgICAgZW1wdHlMYWJlbFRleHQ6ICdWYXppbydcbiAgICB9LFxuICAgIE11aUF1dG9jb21wbGV0ZToge1xuICAgICAgY2xlYXJUZXh0OiAnTGltcGFyJyxcbiAgICAgIGNsb3NlVGV4dDogJ0ZlY2hhcicsXG4gICAgICBsb2FkaW5nVGV4dDogJ0EgY2FycmVnYXLigKYnLFxuICAgICAgbm9PcHRpb25zVGV4dDogJ1NlbSBvcMOnw7VlcycsXG4gICAgICBvcGVuVGV4dDogJ0FicmlyJ1xuICAgIH0sXG4gICAgTXVpQWxlcnQ6IHtcbiAgICAgIGNsb3NlVGV4dDogJ0ZlY2hhcidcbiAgICB9LFxuICAgIE11aVBhZ2luYXRpb246IHtcbiAgICAgICdhcmlhLWxhYmVsJzogJ05hdmVnYXIgcG9yIHDDoWdpbmFzJyxcbiAgICAgIGdldEl0ZW1BcmlhTGFiZWw6IGZ1bmN0aW9uIGdldEl0ZW1BcmlhTGFiZWwodHlwZSwgcGFnZSwgc2VsZWN0ZWQpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChzZWxlY3RlZCA/ICcnIDogJ0lyIHBhcmEgYSAnLCBcInBcXHhFMWdpbmEgXCIpLmNvbmNhdChwYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgcmV0dXJuICdQcmltZWlyYSBww6FnaW5hJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbGFzdCcpIHtcbiAgICAgICAgICByZXR1cm4gJ8OabHRpbWEgcMOhZ2luYSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgcmV0dXJuICdQcsOzeGltYSBww6FnaW5hJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAncHJldmlvdXMnKSB7XG4gICAgICAgICAgcmV0dXJuICdQw6FnaW5hIGFudGVyaW9yJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5wdFBUID0gcHRQVDtcbnZhciByb1JPID0ge1xuICBwcm9wczoge1xuICAgIE11aUJyZWFkY3J1bWJzOiB7XG4gICAgICBleHBhbmRUZXh0OiAnQXJhdMSDIGNhbGVhJ1xuICAgIH0sXG4gICAgTXVpVGFibGVQYWdpbmF0aW9uOiB7XG4gICAgICBiYWNrSWNvbkJ1dHRvblRleHQ6ICdQYWdpbmEgcHJlY2VkZW50xIMnLFxuICAgICAgbGFiZWxSb3dzUGVyUGFnZTogJ1LDom5kdXJpIHBlIHBhZ2luxIM6JyxcbiAgICAgIGxhYmVsRGlzcGxheWVkUm93czogZnVuY3Rpb24gbGFiZWxEaXNwbGF5ZWRSb3dzKF9yZWYyNCkge1xuICAgICAgICB2YXIgZnJvbSA9IF9yZWYyNC5mcm9tLFxuICAgICAgICAgICAgdG8gPSBfcmVmMjQudG8sXG4gICAgICAgICAgICBjb3VudCA9IF9yZWYyNC5jb3VudDtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGZyb20sIFwiLVwiKS5jb25jYXQodG8sIFwiIGRpbiBcIikuY29uY2F0KGNvdW50ICE9PSAtMSA/IGNvdW50IDogXCJtb3JlIHRoYW4gXCIuY29uY2F0KHRvKSk7XG4gICAgICB9LFxuICAgICAgbmV4dEljb25CdXR0b25UZXh0OiAnUGFnaW5hIHVybcSDdG9hcmUnXG4gICAgfSxcbiAgICBNdWlSYXRpbmc6IHtcbiAgICAgIGdldExhYmVsVGV4dDogZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgU3RcIikuY29uY2F0KHZhbHVlICE9PSAxID8gJ2VsZScgOiAnZWEnKTtcbiAgICAgIH0sXG4gICAgICBlbXB0eUxhYmVsVGV4dDogJ0dvbCdcbiAgICB9LFxuICAgIE11aUF1dG9jb21wbGV0ZToge1xuICAgICAgY2xlYXJUZXh0OiAnyJh0ZXJnZScsXG4gICAgICBjbG9zZVRleHQ6ICfDjm5jaGlkZScsXG4gICAgICBsb2FkaW5nVGV4dDogJ1NlIMOubmNhcmPEg+KApicsXG4gICAgICBub09wdGlvbnNUZXh0OiAnTmljaW8gb3DIm2l1bmUnLFxuICAgICAgb3BlblRleHQ6ICdEZXNjaGlkZSdcbiAgICB9LFxuICAgIE11aUFsZXJ0OiB7XG4gICAgICBjbG9zZVRleHQ6ICfDjm5jaGlkZSdcbiAgICB9LFxuICAgIE11aVBhZ2luYXRpb246IHtcbiAgICAgICdhcmlhLWxhYmVsJzogJ05hdmlnYXJlIHByaW4gcGFnaW5hcmUnLFxuICAgICAgZ2V0SXRlbUFyaWFMYWJlbDogZnVuY3Rpb24gZ2V0SXRlbUFyaWFMYWJlbCh0eXBlLCBwYWdlLCBzZWxlY3RlZCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHNlbGVjdGVkID8gJycgOiAnTWVyZ2kgbGEgJywgXCJwYWdpbmEgXCIpLmNvbmNhdChwYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgcmV0dXJuICdNZXJnaSBsYSBwcmltYSBwYWdpbsSDJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbGFzdCcpIHtcbiAgICAgICAgICByZXR1cm4gJ01lcmdpIGxhIHVsdGltYSBwYWdpbsSDJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbmV4dCcpIHtcbiAgICAgICAgICByZXR1cm4gJ01lcmdpIGxhIHBhZ2luYSB1cm3Eg3RvYXJlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAncHJldmlvdXMnKSB7XG4gICAgICAgICAgcmV0dXJuICdNZXJnaSBsYSBwYWdpbmEgcHJlY2VkZW50xIMnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLnJvUk8gPSByb1JPO1xudmFyIHJ1UlUgPSB7XG4gIHByb3BzOiB7XG4gICAgLy8gTXVpQnJlYWRjcnVtYnM6IHtcbiAgICAvLyAgIGV4cGFuZFRleHQ6ICdTaG93IHBhdGgnLFxuICAgIC8vIH0sXG4gICAgTXVpVGFibGVQYWdpbmF0aW9uOiB7XG4gICAgICBiYWNrSWNvbkJ1dHRvblRleHQ6ICfQn9GA0LXQtNGL0LTRg9GJ0LDRjyDRgdGC0YDQsNC90LjRhtCwJyxcbiAgICAgIGxhYmVsUm93c1BlclBhZ2U6ICfQodGC0YDQvtC6INC90LAg0YHRgtGA0LDQvdC40YbQtTonLFxuICAgICAgbGFiZWxEaXNwbGF5ZWRSb3dzOiBmdW5jdGlvbiBsYWJlbERpc3BsYXllZFJvd3MoX3JlZjI1KSB7XG4gICAgICAgIHZhciBmcm9tID0gX3JlZjI1LmZyb20sXG4gICAgICAgICAgICB0byA9IF9yZWYyNS50byxcbiAgICAgICAgICAgIGNvdW50ID0gX3JlZjI1LmNvdW50O1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZnJvbSwgXCItXCIpLmNvbmNhdCh0bywgXCIgXFx1MDQzOFxcdTA0MzcgXCIpLmNvbmNhdChjb3VudCAhPT0gLTEgPyBjb3VudCA6IFwiXFx1MDQzMVxcdTA0M0VcXHUwNDNCXFx1MDQzNVxcdTA0MzUgXFx1MDQ0N1xcdTA0MzVcXHUwNDNDIFwiLmNvbmNhdCh0bykpO1xuICAgICAgfSxcbiAgICAgIG5leHRJY29uQnV0dG9uVGV4dDogJ9Ch0LvQtdC00YPRjtGJ0LDRjyDRgdGC0YDQsNC90LjRhtCwJ1xuICAgIH0sXG4gICAgTXVpUmF0aW5nOiB7XG4gICAgICBnZXRMYWJlbFRleHQ6IGZ1bmN0aW9uIGdldExhYmVsVGV4dCh2YWx1ZSkge1xuICAgICAgICB2YXIgcGx1cmFsRm9ybSA9ICfQl9Cy0ZHQt9C0JztcbiAgICAgICAgdmFyIGxhc3REaWdpdCA9IHZhbHVlICUgMTA7XG5cbiAgICAgICAgaWYgKGxhc3REaWdpdCA+IDEgJiYgbGFzdERpZ2l0IDwgNSkge1xuICAgICAgICAgIHBsdXJhbEZvcm0gPSAn0JfQstC10LfQtNGLJztcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDEpIHtcbiAgICAgICAgICBwbHVyYWxGb3JtID0gJ9CX0LLQtdC30LTQsCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodmFsdWUsIFwiIFwiKS5jb25jYXQocGx1cmFsRm9ybSk7XG4gICAgICB9IC8vIGVtcHR5TGFiZWxUZXh0OiAnRW1wdHknLFxuXG4gICAgfSxcbiAgICBNdWlBdXRvY29tcGxldGU6IHtcbiAgICAgIGNsZWFyVGV4dDogJ9Ce0YfQuNGB0YLQuNGC0YwnLFxuICAgICAgY2xvc2VUZXh0OiAn0JfQsNC60YDRi9GC0YwnLFxuICAgICAgbG9hZGluZ1RleHQ6ICfQl9Cw0LPRgNGD0LfQutCw4oCmJyxcbiAgICAgIG5vT3B0aW9uc1RleHQ6ICfQndC10YIg0LTQvtGB0YLRg9C/0L3Ri9GFINCy0LDRgNC40LDQvdGC0L7QsicsXG4gICAgICBvcGVuVGV4dDogJ9Ce0YLQutGA0YvRgtGMJ1xuICAgIH0sXG4gICAgTXVpQWxlcnQ6IHtcbiAgICAgIGNsb3NlVGV4dDogJ9CX0LDQutGA0YvRgtGMJ1xuICAgIH0gLy8gTXVpUGFnaW5hdGlvbjoge1xuICAgIC8vICAgJ2FyaWEtbGFiZWwnOiAnUGFnaW5hdGlvbiBuYXZpZ2F0aW9uJyxcbiAgICAvLyAgIGdldEl0ZW1BcmlhTGFiZWw6ICh0eXBlLCBwYWdlLCBzZWxlY3RlZCkgPT4ge1xuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuIGAke3NlbGVjdGVkID8gJycgOiAnR28gdG8gJ31wYWdlICR7cGFnZX1gO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBmaXJzdCBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ2xhc3QnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBsYXN0IHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAnbmV4dCcpIHtcbiAgICAvLyAgICAgICByZXR1cm4gJ0dvIHRvIG5leHQgcGFnZSc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdwcmV2aW91cycpIHtcbiAgICAvLyAgICAgICByZXR1cm4gJ0dvIHRvIHByZXZpb3VzIHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG5cbiAgfVxufTtcbmV4cG9ydHMucnVSVSA9IHJ1UlU7XG52YXIgc2tTSyA9IHtcbiAgcHJvcHM6IHtcbiAgICAvLyBNdWlCcmVhZGNydW1iczoge1xuICAgIC8vICAgZXhwYW5kVGV4dDogJ1Nob3cgcGF0aCcsXG4gICAgLy8gfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ1ByZWRjaMOhZHphasO6Y2Egc3Ryw6Fua2EnLFxuICAgICAgbGFiZWxSb3dzUGVyUGFnZTogJ1JpYWRrb3YgbmEgc3Ryw6Fua2U6JyxcbiAgICAgIGxhYmVsRGlzcGxheWVkUm93czogZnVuY3Rpb24gbGFiZWxEaXNwbGF5ZWRSb3dzKF9yZWYyNikge1xuICAgICAgICB2YXIgZnJvbSA9IF9yZWYyNi5mcm9tLFxuICAgICAgICAgICAgdG8gPSBfcmVmMjYudG8sXG4gICAgICAgICAgICBjb3VudCA9IF9yZWYyNi5jb3VudDtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGZyb20sIFwiLVwiKS5jb25jYXQodG8sIFwiIHogXCIpLmNvbmNhdChjb3VudCAhPT0gLTEgPyBjb3VudCA6IFwibW9yZSB0aGFuIFwiLmNvbmNhdCh0bykpO1xuICAgICAgfSxcbiAgICAgIG5leHRJY29uQnV0dG9uVGV4dDogJ8SOYWzFoWlhIHN0csOhbmthJ1xuICAgIH0sXG4gICAgTXVpUmF0aW5nOiB7XG4gICAgICBnZXRMYWJlbFRleHQ6IGZ1bmN0aW9uIGdldExhYmVsVGV4dCh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodmFsdWUsIFwiIGh2aWV6ZGlcXHUwMTBEa2FcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPj0gMiAmJiB2YWx1ZSA8PSA0KSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHZhbHVlLCBcIiBodmllemRpXFx1MDEwRGt5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHZhbHVlLCBcIiBodmllemRpXFx1MDEwRGlla1wiKTtcbiAgICAgIH0gLy8gZW1wdHlMYWJlbFRleHQ6ICdFbXB0eScsXG5cbiAgICB9LFxuICAgIE11aUF1dG9jb21wbGV0ZToge1xuICAgICAgY2xlYXJUZXh0OiAnVnltYXphxaUnLFxuICAgICAgY2xvc2VUZXh0OiAnWmF2cmllxaUnLFxuICAgICAgbG9hZGluZ1RleHQ6ICdOYcSNw610YW5pZeKApicsXG4gICAgICBub09wdGlvbnNUZXh0OiAnxb1pYWRuZSBtb8W+bm9zdGknLFxuICAgICAgb3BlblRleHQ6ICdPdHZvcmnFpSdcbiAgICB9LFxuICAgIE11aUFsZXJ0OiB7XG4gICAgICBjbG9zZVRleHQ6ICdaYXZyaWXFpSdcbiAgICB9IC8vIE11aVBhZ2luYXRpb246IHtcbiAgICAvLyAgICdhcmlhLWxhYmVsJzogJ1BhZ2luYXRpb24gbmF2aWdhdGlvbicsXG4gICAgLy8gICBnZXRJdGVtQXJpYUxhYmVsOiAodHlwZSwgcGFnZSwgc2VsZWN0ZWQpID0+IHtcbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgIC8vICAgICAgIHJldHVybiBgJHtzZWxlY3RlZCA/ICcnIDogJ0dvIHRvICd9cGFnZSAke3BhZ2V9YDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gZmlyc3QgcGFnZSc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdsYXN0Jykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gbGFzdCBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ25leHQnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBuZXh0IHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAncHJldmlvdXMnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBwcmV2aW91cyBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuXG4gIH1cbn07XG5leHBvcnRzLnNrU0sgPSBza1NLO1xudmFyIHN2U0UgPSB7XG4gIHByb3BzOiB7XG4gICAgLy8gTXVpQnJlYWRjcnVtYnM6IHtcbiAgICAvLyAgIGV4cGFuZFRleHQ6ICdTaG93IHBhdGgnLFxuICAgIC8vIH0sXG4gICAgTXVpVGFibGVQYWdpbmF0aW9uOiB7XG4gICAgICBiYWNrSWNvbkJ1dHRvblRleHQ6ICdGw7ZyZWfDpWVuZGUgc2lkYScsXG4gICAgICBsYWJlbFJvd3NQZXJQYWdlOiAnUmFkZXIgcGVyIHNpZGE6JyxcbiAgICAgIGxhYmVsRGlzcGxheWVkUm93czogZnVuY3Rpb24gbGFiZWxEaXNwbGF5ZWRSb3dzKF9yZWYyNykge1xuICAgICAgICB2YXIgZnJvbSA9IF9yZWYyNy5mcm9tLFxuICAgICAgICAgICAgdG8gPSBfcmVmMjcudG8sXG4gICAgICAgICAgICBjb3VudCA9IF9yZWYyNy5jb3VudDtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGZyb20sIFwiLVwiKS5jb25jYXQodG8sIFwiIGF2IFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIm1vcmUgdGhhbiBcIi5jb25jYXQodG8pKTtcbiAgICAgIH0sXG4gICAgICBuZXh0SWNvbkJ1dHRvblRleHQ6ICdOw6RzdGEgc2lkYSdcbiAgICB9LFxuICAgIE11aVJhdGluZzoge1xuICAgICAgZ2V0TGFiZWxUZXh0OiBmdW5jdGlvbiBnZXRMYWJlbFRleHQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHZhbHVlLCBcIiBcIikuY29uY2F0KHZhbHVlICE9PSAxID8gJ1N0asOkcm5vcicgOiAnU3Rqw6RybmEnKTtcbiAgICAgIH0gLy8gZW1wdHlMYWJlbFRleHQ6ICdFbXB0eScsXG5cbiAgICB9LFxuICAgIE11aUF1dG9jb21wbGV0ZToge1xuICAgICAgY2xlYXJUZXh0OiAnUmVuc2EnLFxuICAgICAgY2xvc2VUZXh0OiAnU3TDpG5nJyxcbiAgICAgIGxvYWRpbmdUZXh0OiAnTGFkZGFy4oCmJyxcbiAgICAgIG5vT3B0aW9uc1RleHQ6ICdJbmdhIGFsdGVybmF0aXYnLFxuICAgICAgb3BlblRleHQ6ICfDlnBwZW4nXG4gICAgfSxcbiAgICBNdWlBbGVydDoge1xuICAgICAgY2xvc2VUZXh0OiAnU3TDpG5nJ1xuICAgIH0gLy8gTXVpUGFnaW5hdGlvbjoge1xuICAgIC8vICAgJ2FyaWEtbGFiZWwnOiAnUGFnaW5hdGlvbiBuYXZpZ2F0aW9uJyxcbiAgICAvLyAgIGdldEl0ZW1BcmlhTGFiZWw6ICh0eXBlLCBwYWdlLCBzZWxlY3RlZCkgPT4ge1xuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuIGAke3NlbGVjdGVkID8gJycgOiAnR28gdG8gJ31wYWdlICR7cGFnZX1gO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBmaXJzdCBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ2xhc3QnKSB7XG4gICAgLy8gICAgICAgcmV0dXJuICdHbyB0byBsYXN0IHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAnbmV4dCcpIHtcbiAgICAvLyAgICAgICByZXR1cm4gJ0dvIHRvIG5leHQgcGFnZSc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdwcmV2aW91cycpIHtcbiAgICAvLyAgICAgICByZXR1cm4gJ0dvIHRvIHByZXZpb3VzIHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG5cbiAgfVxufTtcbmV4cG9ydHMuc3ZTRSA9IHN2U0U7XG52YXIgdHJUUiA9IHtcbiAgcHJvcHM6IHtcbiAgICBNdWlCcmVhZGNydW1iczoge1xuICAgICAgZXhwYW5kVGV4dDogJ1lvbHUgZ8O2c3RlcidcbiAgICB9LFxuICAgIE11aVRhYmxlUGFnaW5hdGlvbjoge1xuICAgICAgYmFja0ljb25CdXR0b25UZXh0OiAnw5ZuY2VraSBzYXlmYScsXG4gICAgICBsYWJlbFJvd3NQZXJQYWdlOiAnU2F5ZmEgYmHFn8SxbmEgc2F0xLFyOicsXG4gICAgICBsYWJlbERpc3BsYXllZFJvd3M6IGZ1bmN0aW9uIGxhYmVsRGlzcGxheWVkUm93cyhfcmVmMjgpIHtcbiAgICAgICAgdmFyIGZyb20gPSBfcmVmMjguZnJvbSxcbiAgICAgICAgICAgIHRvID0gX3JlZjI4LnRvLFxuICAgICAgICAgICAgY291bnQgPSBfcmVmMjguY291bnQ7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChmcm9tLCBcIi1cIikuY29uY2F0KHRvLCBcIiB0YW5lc2luZGVuIFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIm1vcmUgdGhhbiBcIi5jb25jYXQodG8pKTtcbiAgICAgIH0sXG4gICAgICBuZXh0SWNvbkJ1dHRvblRleHQ6ICdTb25yYWtpIHNheWZhJ1xuICAgIH0sXG4gICAgTXVpUmF0aW5nOiB7XG4gICAgICBnZXRMYWJlbFRleHQ6IGZ1bmN0aW9uIGdldExhYmVsVGV4dCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodmFsdWUsIFwiIFlcXHUwMTMxbGRcXHUwMTMxelwiKTtcbiAgICAgIH0sXG4gICAgICBlbXB0eUxhYmVsVGV4dDogJ0JvxZ8nXG4gICAgfSxcbiAgICBNdWlBdXRvY29tcGxldGU6IHtcbiAgICAgIGNsZWFyVGV4dDogJ1RlbWl6bGUnLFxuICAgICAgY2xvc2VUZXh0OiAnS2FwYXQnLFxuICAgICAgbG9hZGluZ1RleHQ6ICdZw7xrbGVuaXlvcuKApicsXG4gICAgICBub09wdGlvbnNUZXh0OiAnU2XDp2VuZWsgeW9rJyxcbiAgICAgIG9wZW5UZXh0OiAnQcOnJ1xuICAgIH0sXG4gICAgTXVpQWxlcnQ6IHtcbiAgICAgIGNsb3NlVGV4dDogJ0thcGF0J1xuICAgIH0sXG4gICAgTXVpUGFnaW5hdGlvbjoge1xuICAgICAgJ2FyaWEtbGFiZWwnOiAnU2F5ZmEgbmF2aWdhc3lvbnUnLFxuICAgICAgZ2V0SXRlbUFyaWFMYWJlbDogZnVuY3Rpb24gZ2V0SXRlbUFyaWFMYWJlbCh0eXBlLCBwYWdlLCBzZWxlY3RlZCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHBhZ2UsIFwiLiBcIikuY29uY2F0KHNlbGVjdGVkID8gJ3NheWZhJyA6ICdzYXlmYXlhIGdpdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcbiAgICAgICAgICByZXR1cm4gJ8SwbGsgc2F5ZmF5YSBnaXQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdsYXN0Jykge1xuICAgICAgICAgIHJldHVybiAnU29uIHNheWZheWEgZ2l0JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbmV4dCcpIHtcbiAgICAgICAgICByZXR1cm4gJ1NvbnJha2kgc2F5ZmF5YSBnaXQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdwcmV2aW91cycpIHtcbiAgICAgICAgICByZXR1cm4gJ8OWbmNla2kgc2F5ZmF5YSBnaXQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLnRyVFIgPSB0clRSO1xudmFyIHVrVUEgPSB7XG4gIHByb3BzOiB7XG4gICAgTXVpQnJlYWRjcnVtYnM6IHtcbiAgICAgIGV4cGFuZFRleHQ6ICfQn9C+0LrQsNC30LDRgtC4INGI0LvRj9GFINGB0YLQvtGA0ZbQvdC+0LonXG4gICAgfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ9Cf0L7Qv9C10YDQtdC00L3RjyDRgdGC0L7RgNGW0L3QutCwJyxcbiAgICAgIGxhYmVsUm93c1BlclBhZ2U6ICfQoNGP0LTQutGW0LIg0L3QsCDRgdGC0L7RgNGW0L3RhtGWOicsXG4gICAgICBsYWJlbERpc3BsYXllZFJvd3M6IGZ1bmN0aW9uIGxhYmVsRGlzcGxheWVkUm93cyhfcmVmMjkpIHtcbiAgICAgICAgdmFyIGZyb20gPSBfcmVmMjkuZnJvbSxcbiAgICAgICAgICAgIHRvID0gX3JlZjI5LnRvLFxuICAgICAgICAgICAgY291bnQgPSBfcmVmMjkuY291bnQ7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChmcm9tLCBcIi1cIikuY29uY2F0KHRvLCBcIiBcXHUwNDM3IFwiKS5jb25jYXQoY291bnQgIT09IC0xID8gY291bnQgOiBcIlxcdTA0M0ZcXHUwNDNFXFx1MDQzRFxcdTA0MzBcXHUwNDM0IFwiLmNvbmNhdCh0bykpO1xuICAgICAgfSxcbiAgICAgIG5leHRJY29uQnV0dG9uVGV4dDogJ9Cd0LDRgdGC0YPQv9C90LAg0YHRgtC+0YDRltC90LrQsCdcbiAgICB9LFxuICAgIE11aVJhdGluZzoge1xuICAgICAgZ2V0TGFiZWxUZXh0OiBmdW5jdGlvbiBnZXRMYWJlbFRleHQodmFsdWUpIHtcbiAgICAgICAgdmFyIHBsdXJhbEZvcm0gPSAn0JfRltGA0L7Quic7XG4gICAgICAgIHZhciBsYXN0RGlnaXQgPSB2YWx1ZSAlIDEwO1xuXG4gICAgICAgIGlmIChsYXN0RGlnaXQgPiAxICYmIGxhc3REaWdpdCA8IDUpIHtcbiAgICAgICAgICBwbHVyYWxGb3JtID0gJ9CX0ZbRgNC60LgnO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gMSkge1xuICAgICAgICAgIHBsdXJhbEZvcm0gPSAn0JfRltGA0LrQsCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodmFsdWUsIFwiIFwiKS5jb25jYXQocGx1cmFsRm9ybSk7XG4gICAgICB9LFxuICAgICAgZW1wdHlMYWJlbFRleHQ6ICfQoNC10LnRgtC40L3QsyDQstGW0LTRgdGD0YLQvdGW0LknXG4gICAgfSxcbiAgICBNdWlBdXRvY29tcGxldGU6IHtcbiAgICAgIGNsZWFyVGV4dDogJ9Ce0YfQuNGB0YLQuNGC0LgnLFxuICAgICAgY2xvc2VUZXh0OiAn0JfQs9C+0YDQvdGD0YLQuCcsXG4gICAgICBsb2FkaW5nVGV4dDogJ9CX0LDQstCw0L3RgtCw0LbQtdC90L3Rj+KApicsXG4gICAgICBub09wdGlvbnNUZXh0OiAn0J3QtdC80LDRlCDQstCw0YDRltCw0L3RgtGW0LInLFxuICAgICAgb3BlblRleHQ6ICfQoNC+0LfQs9C+0YDQvdGD0YLQuCdcbiAgICB9LFxuICAgIE11aUFsZXJ0OiB7XG4gICAgICBjbG9zZVRleHQ6ICfQl9Cz0L7RgNC90YPRgtC4J1xuICAgIH0sXG4gICAgTXVpUGFnaW5hdGlvbjoge1xuICAgICAgJ2FyaWEtbGFiZWwnOiAn0J3QsNCy0ZbQs9Cw0YbRltGPINGB0YLQvtGA0ZbQvdC60LDQvNC4JyxcbiAgICAgIGdldEl0ZW1BcmlhTGFiZWw6IGZ1bmN0aW9uIGdldEl0ZW1BcmlhTGFiZWwodHlwZSwgcGFnZSwgc2VsZWN0ZWQpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChzZWxlY3RlZCA/ICcnIDogJ9Cf0LXRgNC10LnRgtC4INC90LAgJywgXCJcXHUwNDQxXFx1MDQ0MlxcdTA0M0VcXHUwNDQwXFx1MDQ1NlxcdTA0M0RcXHUwNDNBXFx1MDQ0MyBcIikuY29uY2F0KHBhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcbiAgICAgICAgICByZXR1cm4gJ9Cf0LXRgNC10LnRgtC4INC90LAg0L/QtdGA0YjRgyDRgdGC0L7RgNGW0L3QutGDJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbGFzdCcpIHtcbiAgICAgICAgICByZXR1cm4gJ9Cf0LXRgNC10LnRgtC4INC90LAg0L7RgdGC0LDQvdC90Y4g0YHRgtC+0YDRltC90LrRgyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgcmV0dXJuICfQn9C10YDQtdC50YLQuCDQvdCwINC90LDRgdGC0YPQv9C90YMg0YHRgtC+0YDRltC90LrRgyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICAgIHJldHVybiAn0J/QtdGA0LXQudGC0Lgg0L3QsCDQv9C+0L/QtdGA0LXQtNC90Y4g0YHRgtC+0YDRltC90LrRgyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMudWtVQSA9IHVrVUE7XG52YXIgdmlWTiA9IHtcbiAgcHJvcHM6IHtcbiAgICAvLyBNdWlCcmVhZGNydW1iczoge1xuICAgIC8vICAgZXhwYW5kVGV4dDogJ1Nob3cgcGF0aCcsXG4gICAgLy8gfSxcbiAgICBNdWlUYWJsZVBhZ2luYXRpb246IHtcbiAgICAgIGJhY2tJY29uQnV0dG9uVGV4dDogJ1RyYW5nIHRyxrDhu5tjJyxcbiAgICAgIGxhYmVsUm93c1BlclBhZ2U6ICdT4buRIGjDoG5nIG3hu5dpIHRyYW5nOicsXG4gICAgICBsYWJlbERpc3BsYXllZFJvd3M6IGZ1bmN0aW9uIGxhYmVsRGlzcGxheWVkUm93cyhfcmVmMzApIHtcbiAgICAgICAgdmFyIGZyb20gPSBfcmVmMzAuZnJvbSxcbiAgICAgICAgICAgIHRvID0gX3JlZjMwLnRvLFxuICAgICAgICAgICAgY291bnQgPSBfcmVmMzAuY291bnQ7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChmcm9tLCBcIi1cIikuY29uY2F0KHRvLCBcIiB0cm9uZyBcIikuY29uY2F0KGNvdW50ICE9PSAtMSA/IGNvdW50IDogXCJuaGlcXHUxRUMxdSBoXFx1MDFBMW4gXCIuY29uY2F0KHRvKSk7XG4gICAgICB9LFxuICAgICAgbmV4dEljb25CdXR0b25UZXh0OiAnVHJhbmcgc2F1J1xuICAgIH0sXG4gICAgTXVpUmF0aW5nOiB7XG4gICAgICBnZXRMYWJlbFRleHQ6IGZ1bmN0aW9uIGdldExhYmVsVGV4dCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodmFsdWUsIFwiIHNhb1wiKTtcbiAgICAgIH0sXG4gICAgICBlbXB0eUxhYmVsVGV4dDogJ1Ry4buRbmcnXG4gICAgfSxcbiAgICBNdWlBdXRvY29tcGxldGU6IHtcbiAgICAgIGNsZWFyVGV4dDogJ1jDs2EnLFxuICAgICAgY2xvc2VUZXh0OiAnxJDDs25nJyxcbiAgICAgIGxvYWRpbmdUZXh0OiAnxJBhbmcgdOG6o2nigKYnLFxuICAgICAgbm9PcHRpb25zVGV4dDogJ0tow7RuZyBjw7MgbOG7sWEgY2jhu41uJyxcbiAgICAgIG9wZW5UZXh0OiAnTeG7nydcbiAgICB9LFxuICAgIE11aUFsZXJ0OiB7XG4gICAgICBjbG9zZVRleHQ6ICfEkMOzbmcnXG4gICAgfSAvLyBNdWlQYWdpbmF0aW9uOiB7XG4gICAgLy8gICAnYXJpYS1sYWJlbCc6ICdQYWdpbmF0aW9uIG5hdmlnYXRpb24nLFxuICAgIC8vICAgZ2V0SXRlbUFyaWFMYWJlbDogKHR5cGUsIHBhZ2UsIHNlbGVjdGVkKSA9PiB7XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAncGFnZScpIHtcbiAgICAvLyAgICAgICByZXR1cm4gYCR7c2VsZWN0ZWQgPyAnJyA6ICdHbyB0byAnfXBhZ2UgJHtwYWdlfWA7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcbiAgICAvLyAgICAgICByZXR1cm4gJ0dvIHRvIGZpcnN0IHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAnbGFzdCcpIHtcbiAgICAvLyAgICAgICByZXR1cm4gJ0dvIHRvIGxhc3QgcGFnZSc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICduZXh0Jykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gbmV4dCBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ3ByZXZpb3VzJykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gcHJldmlvdXMgcGFnZSc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcblxuICB9XG59O1xuZXhwb3J0cy52aVZOID0gdmlWTjtcbnZhciB6aENOID0ge1xuICBwcm9wczoge1xuICAgIC8vIE11aUJyZWFkY3J1bWJzOiB7XG4gICAgLy8gICBleHBhbmRUZXh0OiAnU2hvdyBwYXRoJyxcbiAgICAvLyB9LFxuICAgIE11aVRhYmxlUGFnaW5hdGlvbjoge1xuICAgICAgYmFja0ljb25CdXR0b25UZXh0OiAn5LiK5LiA6aG1JyxcbiAgICAgIGxhYmVsUm93c1BlclBhZ2U6ICfmr4/pobXooYzmlbA6JyxcbiAgICAgIGxhYmVsRGlzcGxheWVkUm93czogZnVuY3Rpb24gbGFiZWxEaXNwbGF5ZWRSb3dzKF9yZWYzMSkge1xuICAgICAgICB2YXIgZnJvbSA9IF9yZWYzMS5mcm9tLFxuICAgICAgICAgICAgdG8gPSBfcmVmMzEudG8sXG4gICAgICAgICAgICBjb3VudCA9IF9yZWYzMS5jb3VudDtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGZyb20sIFwiLVwiKS5jb25jYXQodG8sIFwiIFxcdTc2ODQgXCIpLmNvbmNhdChjb3VudCAhPT0gLTEgPyBjb3VudCA6IFwiXFx1OEQ4NVxcdThGQzcgXCIuY29uY2F0KHRvKSk7XG4gICAgICB9LFxuICAgICAgbmV4dEljb25CdXR0b25UZXh0OiAn5LiL5LiA6aG1J1xuICAgIH0sXG4gICAgTXVpUmF0aW5nOiB7XG4gICAgICBnZXRMYWJlbFRleHQ6IGZ1bmN0aW9uIGdldExhYmVsVGV4dCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodmFsdWUsIFwiIFxcdTY2MUZcIikuY29uY2F0KHZhbHVlICE9PSAxID8gJ+aYnycgOiAnJyk7XG4gICAgICB9IC8vIGVtcHR5TGFiZWxUZXh0OiAnRW1wdHknLFxuXG4gICAgfSxcbiAgICBNdWlBdXRvY29tcGxldGU6IHtcbiAgICAgIGNsZWFyVGV4dDogJ+aYjuehricsXG4gICAgICBjbG9zZVRleHQ6ICflhbMnLFxuICAgICAgbG9hZGluZ1RleHQ6ICfovb3lhaXkuK3igKYnLFxuICAgICAgbm9PcHRpb25zVGV4dDogJ+ayoeaciemAieaLqScsXG4gICAgICBvcGVuVGV4dDogJ+aJk+W8gCdcbiAgICB9LFxuICAgIE11aUFsZXJ0OiB7XG4gICAgICBjbG9zZVRleHQ6ICflhbMnXG4gICAgfSAvLyBNdWlQYWdpbmF0aW9uOiB7XG4gICAgLy8gICAnYXJpYS1sYWJlbCc6ICdQYWdpbmF0aW9uIG5hdmlnYXRpb24nLFxuICAgIC8vICAgZ2V0SXRlbUFyaWFMYWJlbDogKHR5cGUsIHBhZ2UsIHNlbGVjdGVkKSA9PiB7XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAncGFnZScpIHtcbiAgICAvLyAgICAgICByZXR1cm4gYCR7c2VsZWN0ZWQgPyAnJyA6ICdHbyB0byAnfXBhZ2UgJHtwYWdlfWA7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcbiAgICAvLyAgICAgICByZXR1cm4gJ0dvIHRvIGZpcnN0IHBhZ2UnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0eXBlID09PSAnbGFzdCcpIHtcbiAgICAvLyAgICAgICByZXR1cm4gJ0dvIHRvIGxhc3QgcGFnZSc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHR5cGUgPT09ICduZXh0Jykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gbmV4dCBwYWdlJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodHlwZSA9PT0gJ3ByZXZpb3VzJykge1xuICAgIC8vICAgICAgIHJldHVybiAnR28gdG8gcHJldmlvdXMgcGFnZSc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcblxuICB9XG59O1xuZXhwb3J0cy56aENOID0gemhDTjsiLCJpbXBvcnR7Y3JlYXRlU3ZnSWNvbiBhcyBlLHVzZUV2ZW50Q2FsbGJhY2sgYXMgdCxjYXBpdGFsaXplIGFzIHIsdW5zdGFibGVfdXNlSWQgYXMgbixvd25lcldpbmRvdyBhcyBsLHVzZUZvcmtSZWYgYXMgbyxkZWJvdW5jZSBhcyBhLG93bmVyRG9jdW1lbnQgYXMgaX1mcm9tXCJAbWF0ZXJpYWwtdWkvY29yZS91dGlsc1wiO2ltcG9ydCphcyBzIGZyb21cInJlYWN0XCI7aW1wb3J0e3VzZUNvbnRleHQgYXMgY31mcm9tXCJyZWFjdFwiO2ltcG9ydCphcyB1IGZyb21cIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO2ltcG9ydHt1c2VUaGVtZSBhcyBkLG1ha2VTdHlsZXMgYXMgcCxsaWdodGVuIGFzIG0sZGFya2VuIGFzIGZ9ZnJvbVwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7aW1wb3J0IGcgZnJvbVwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlXCI7aW1wb3J0IGIgZnJvbVwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7aW1wb3J0IGggZnJvbVwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtpbXBvcnR7Z2V0VGhlbWVQcm9wcyBhcyBDfWZyb21cIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtpbXBvcnR7Y3JlYXRlU2VsZWN0b3IgYXMgdn1mcm9tXCJyZXNlbGVjdFwiO2ltcG9ydCB3IGZyb21cIkBtYXRlcmlhbC11aS9jb3JlL0JhZGdlXCI7aW1wb3J0IE8gZnJvbVwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO2ltcG9ydCB5IGZyb21cIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIjtpbXBvcnQgRSBmcm9tXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO2ltcG9ydCBTIGZyb21cIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCI7aW1wb3J0IHggZnJvbVwiQG1hdGVyaWFsLXVpL2NvcmUvR3Jvd1wiO2ltcG9ydCBNIGZyb21cIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7aW1wb3J0IEkgZnJvbVwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCI7aW1wb3J0IGsgZnJvbVwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIjtpbXBvcnQgRCBmcm9tXCJAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2hcIjtpbXBvcnQgUCBmcm9tXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtpbXBvcnQgUiBmcm9tXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCI7aW1wb3J0IEYgZnJvbVwiQG1hdGVyaWFsLXVpL2NvcmUvVW5zdGFibGVfVHJhcEZvY3VzXCI7aW1wb3J0IEwgZnJvbVwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtpbXBvcnQgaiBmcm9tXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCI7aW1wb3J0IHogZnJvbVwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCI7aW1wb3J0IFQgZnJvbVwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7aW1wb3J0IEEgZnJvbVwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO2ltcG9ydCBfIGZyb21cIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUGFnaW5hdGlvblwiO2ltcG9ydHtiZ0JHIGFzIEcsZGVERSBhcyBILGVuVVMgYXMgTixlc0VTIGFzIFYsZnJGUiBhcyBCLGl0SVQgYXMgJCxqYUpQIGFzIFcsbmxOTCBhcyBVLHBsUEwgYXMgSyxwdEJSIGFzIFoscnVSVSBhcyBYLHVrVUEgYXMgcX1mcm9tXCJAbWF0ZXJpYWwtdWkvY29yZS9sb2NhbGVcIjtpbXBvcnQgWSBmcm9tXCJAbWF0ZXJpYWwtdWkvY29yZS9Ob1NzclwiO2ltcG9ydCBKIGZyb21cInByb3AtdHlwZXNcIjtpbXBvcnR7Y2hhaW5Qcm9wVHlwZXMgYXMgUX1mcm9tXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtjb25zdCBlZT1cIk11aURhdGFHcmlkLWNlbGxcIix0ZT1cIk11aURhdGFHcmlkLXJvd1wiLHJlPVwiTXVpRGF0YUdyaWQtY29sQ2VsbFwiLG5lPVwiTXVpRGF0YUdyaWQtY29sdW1uU2VwYXJhdG9yUmVzaXphYmxlXCIsbGU9XCJNdWlEYXRhR3JpZC1jb2xDZWxsVGl0bGVDb250YWluZXJcIixvZT1cImRhdGEtY29udGFpbmVyXCIsYWU9XCJNdWlEYXRhR3JpZC1jb2xDZWxsLWRyb3Bab25lXCIsaWU9XCJNdWlEYXRhR3JpZC1jb2xDZWxsLWRyYWdnaW5nXCIsc2U9XCJyZXNpemVcIixjZT1cImZvY3Vzb3V0XCIsdWU9XCJrZXlkb3duXCIsZGU9XCJrZXl1cFwiLHBlPVwic2Nyb2xsXCIsbWU9XCJkcmFnZW5kXCIsZmU9XCJjb21wb25lbnRFcnJvclwiLGdlPVwidW5tb3VudFwiLGJlPVwiZ3JpZEZvY3VzT3V0XCIsaGU9XCJjZWxsTW9kZUNoYW5nZVwiLENlPVwiY2VsbENsaWNrXCIsdmU9XCJjZWxsRG91YmxlQ2xpY2tcIix3ZT1cImNlbGxNb3VzZURvd25cIixPZT1cImNlbGxPdmVyXCIseWU9XCJjZWxsT3V0XCIsRWU9XCJjZWxsRW50ZXJcIixTZT1cImNlbGxMZWF2ZVwiLHhlPVwiY2VsbEtleWRvd25cIixNZT1cImNlbGxCbHVyXCIsSWU9XCJjZWxsRWRpdFByb3BzQ2hhbmdlXCIsa2U9XCJjZWxsRWRpdFByb3BzQ2hhbmdlQ29tbWl0dGVkXCIsRGU9XCJjZWxsVmFsdWVDaGFuZ2VcIixQZT1cImNlbGxFZGl0RW50ZXJcIixSZT1cImNlbGxFZGl0RXhpdFwiLEZlPVwiY2VsbE5hdmlnYXRpb25LZXlEb3duXCIsTGU9XCJjZWxsQ2VsbEZvY3VzXCIsamU9XCJjZWxsRHJhZ1N0YXJ0XCIsemU9XCJjZWxsRHJhZ0VudGVyXCIsVGU9XCJjZWxsRHJhZ092ZXJcIixBZT1cImNlbGxEcmFnRW5kXCIsX2U9XCJyb3dDbGlja1wiLEdlPVwicm93RG91YmxlQ2xpY2tcIixIZT1cInJvd092ZXJcIixOZT1cInJvd091dFwiLFZlPVwicm93RW50ZXJcIixCZT1cInJvd0xlYXZlXCIsJGU9XCJlZGl0Um93TW9kZWxDaGFuZ2VcIixXZT1cInJvd1NlbGVjdGVkXCIsVWU9XCJjb2x1bW5IZWFkZXJCbHVyXCIsS2U9XCJjb2x1bW5IZWFkZXJGb2N1c1wiLFplPVwiY29sdW1uSGVhZGVyTmF2aWdhdGlvbktleWRvd25cIixYZT1cImNvbHVtbkhlYWRlcktleWRvd25cIixxZT1cImNvbHVtbkhlYWRlckNsaWNrXCIsWWU9XCJjb2x1bW5IZWFkZXJEb3VibGVDbGlja1wiLEplPVwiY29sdW1uSGVhZGVyT3ZlclwiLFFlPVwiY29sdW1uSGVhZGVyT3V0XCIsZXQ9XCJjb2x1bW5IZWFkZXJFbnRlclwiLHR0PVwiY29sdW1uSGVhZGVyTGVhdmVcIixydD1cImNvbHVtbkhlYWRlckRyYWdTdGFydFwiLG50PVwiY29sdW1uSGVhZGVyRHJhZ092ZXJcIixsdD1cImNvbHVtbkhlYWRlckRyYWdFbnRlclwiLG90PVwiY29sdW1uSGVhZGVyRHJhZ0VuZFwiLGF0PVwic2VsZWN0aW9uQ2hhbmdlXCIsaXQ9XCJwYWdlQ2hhbmdlXCIsc3Q9XCJwYWdlU2l6ZUNoYW5nZVwiLGN0PVwic2Nyb2xsaW5nOnJvd3NcIix1dD1cInNjcm9sbDpyb3dFbmRcIixkdD1cImNvbHVtblNlcGFyYXRvck1vdXNlRG93blwiLHB0PVwiY29sdW1uUmVzaXplXCIsbXQ9XCJjb2x1bW5SZXNpemVDb21taXRlZFwiLGZ0PVwiY29sdW1uUmVzaXplU3RhcnRcIixndD1cImNvbHVtblJlc2l6ZVN0b3BcIixidD1cImNvbHVtbk9yZGVyQ2hhbmdlXCIsaHQ9XCJyb3dzVXBkYXRlZFwiLEN0PVwicm93c1NldFwiLHZ0PVwicm93c0NsZWFyZWRcIix3dD1cImNvbHVtbnNVcGRhdGVkXCIsT3Q9XCJzb3J0TW9kZWxDaGFuZ2VcIix5dD1cImZpbHRlck1vZGVsQ2hhbmdlXCIsRXQ9XCJzdGF0ZUNoYW5nZVwiO2Z1bmN0aW9uIFN0KGUsdCl7cmV0dXJuIGU9PT10fHxlIT1lJiZ0IT10fWZ1bmN0aW9uIHh0KGUsdCl7Zm9yKHZhciByPWUubGVuZ3RoO3ItLTspaWYoU3QoZVtyXVswXSx0KSlyZXR1cm4gcjtyZXR1cm4tMX12YXIgTXQ9QXJyYXkucHJvdG90eXBlLnNwbGljZTtmdW5jdGlvbiBJdChlKXt2YXIgdD0tMSxyPW51bGw9PWU/MDplLmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrdDxyOyl7dmFyIG49ZVt0XTt0aGlzLnNldChuWzBdLG5bMV0pfX1JdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPVtdLHRoaXMuc2l6ZT0wfSxJdC5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuX19kYXRhX18scj14dCh0LGUpO3JldHVybiEocjwwKSYmKHI9PXQubGVuZ3RoLTE/dC5wb3AoKTpNdC5jYWxsKHQsciwxKSwtLXRoaXMuc2l6ZSwhMCl9LEl0LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5fX2RhdGFfXyxyPXh0KHQsZSk7cmV0dXJuIHI8MD92b2lkIDA6dFtyXVsxXX0sSXQucHJvdG90eXBlLmhhcz1mdW5jdGlvbihlKXtyZXR1cm4geHQodGhpcy5fX2RhdGFfXyxlKT4tMX0sSXQucHJvdG90eXBlLnNldD1mdW5jdGlvbihlLHQpe3ZhciByPXRoaXMuX19kYXRhX18sbj14dChyLGUpO3JldHVybiBuPDA/KCsrdGhpcy5zaXplLHIucHVzaChbZSx0XSkpOnJbbl1bMV09dCx0aGlzfTt2YXIga3Q9XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsJiZnbG9iYWwuT2JqZWN0PT09T2JqZWN0JiZnbG9iYWwsRHQ9XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLFB0PWt0fHxEdHx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLFJ0PVB0LlN5bWJvbCxGdD1PYmplY3QucHJvdG90eXBlLEx0PUZ0Lmhhc093blByb3BlcnR5LGp0PUZ0LnRvU3RyaW5nLHp0PVJ0P1J0LnRvU3RyaW5nVGFnOnZvaWQgMDt2YXIgVHQ9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZzt2YXIgQXQ9UnQ/UnQudG9TdHJpbmdUYWc6dm9pZCAwO2Z1bmN0aW9uIF90KGUpe3JldHVybiBudWxsPT1lP3ZvaWQgMD09PWU/XCJbb2JqZWN0IFVuZGVmaW5lZF1cIjpcIltvYmplY3QgTnVsbF1cIjpBdCYmQXQgaW4gT2JqZWN0KGUpP2Z1bmN0aW9uKGUpe3ZhciB0PUx0LmNhbGwoZSx6dCkscj1lW3p0XTt0cnl7ZVt6dF09dm9pZCAwO3ZhciBuPSEwfWNhdGNoKGUpe312YXIgbD1qdC5jYWxsKGUpO3JldHVybiBuJiYodD9lW3p0XT1yOmRlbGV0ZSBlW3p0XSksbH0oZSk6ZnVuY3Rpb24oZSl7cmV0dXJuIFR0LmNhbGwoZSl9KGUpfWZ1bmN0aW9uIEd0KGUpe3ZhciB0PXR5cGVvZiBlO3JldHVybiBudWxsIT1lJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiBIdChlKXtpZighR3QoZSkpcmV0dXJuITE7dmFyIHQ9X3QoZSk7cmV0dXJuXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT10fHxcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI9PXR8fFwiW29iamVjdCBBc3luY0Z1bmN0aW9uXVwiPT10fHxcIltvYmplY3QgUHJveHldXCI9PXR9dmFyIE50LFZ0PVB0W1wiX19jb3JlLWpzX3NoYXJlZF9fXCJdLEJ0PShOdD0vW14uXSskLy5leGVjKFZ0JiZWdC5rZXlzJiZWdC5rZXlzLklFX1BST1RPfHxcIlwiKSk/XCJTeW1ib2woc3JjKV8xLlwiK050OlwiXCI7dmFyICR0PUZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztmdW5jdGlvbiBXdChlKXtpZihudWxsIT1lKXt0cnl7cmV0dXJuICR0LmNhbGwoZSl9Y2F0Y2goZSl7fXRyeXtyZXR1cm4gZStcIlwifWNhdGNoKGUpe319cmV0dXJuXCJcIn12YXIgVXQ9L15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLyxLdD1GdW5jdGlvbi5wcm90b3R5cGUsWnQ9T2JqZWN0LnByb3RvdHlwZSxYdD1LdC50b1N0cmluZyxxdD1adC5oYXNPd25Qcm9wZXJ0eSxZdD1SZWdFeHAoXCJeXCIrWHQuY2FsbChxdCkucmVwbGFjZSgvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csXCJcXFxcJCZcIikucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZyxcIiQxLio/XCIpK1wiJFwiKTtmdW5jdGlvbiBKdChlKXtyZXR1cm4hKCFHdChlKXx8KHQ9ZSxCdCYmQnQgaW4gdCkpJiYoSHQoZSk/WXQ6VXQpLnRlc3QoV3QoZSkpO3ZhciB0fWZ1bmN0aW9uIFF0KGUsdCl7dmFyIHI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09ZT92b2lkIDA6ZVt0XX0oZSx0KTtyZXR1cm4gSnQocik/cjp2b2lkIDB9dmFyIGVyPVF0KFB0LFwiTWFwXCIpLHRyPVF0KE9iamVjdCxcImNyZWF0ZVwiKTt2YXIgcnI9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgbnI9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiBscihlKXt2YXIgdD0tMSxyPW51bGw9PWU/MDplLmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrdDxyOyl7dmFyIG49ZVt0XTt0aGlzLnNldChuWzBdLG5bMV0pfX1mdW5jdGlvbiBvcihlLHQpe3ZhciByLG4sbD1lLl9fZGF0YV9fO3JldHVybihcInN0cmluZ1wiPT0obj10eXBlb2Yocj10KSl8fFwibnVtYmVyXCI9PW58fFwic3ltYm9sXCI9PW58fFwiYm9vbGVhblwiPT1uP1wiX19wcm90b19fXCIhPT1yOm51bGw9PT1yKT9sW1wic3RyaW5nXCI9PXR5cGVvZiB0P1wic3RyaW5nXCI6XCJoYXNoXCJdOmwubWFwfWZ1bmN0aW9uIGFyKGUpe3ZhciB0PS0xLHI9bnVsbD09ZT8wOmUubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7Kyt0PHI7KXt2YXIgbj1lW3RdO3RoaXMuc2V0KG5bMF0sblsxXSl9fWxyLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189dHI/dHIobnVsbCk6e30sdGhpcy5zaXplPTB9LGxyLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5oYXMoZSkmJmRlbGV0ZSB0aGlzLl9fZGF0YV9fW2VdO3JldHVybiB0aGlzLnNpemUtPXQ/MTowLHR9LGxyLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5fX2RhdGFfXztpZih0cil7dmFyIHI9dFtlXTtyZXR1cm5cIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIj09PXI/dm9pZCAwOnJ9cmV0dXJuIHJyLmNhbGwodCxlKT90W2VdOnZvaWQgMH0sbHIucHJvdG90eXBlLmhhcz1mdW5jdGlvbihlKXt2YXIgdD10aGlzLl9fZGF0YV9fO3JldHVybiB0cj92b2lkIDAhPT10W2VdOm5yLmNhbGwodCxlKX0sbHIucHJvdG90eXBlLnNldD1mdW5jdGlvbihlLHQpe3ZhciByPXRoaXMuX19kYXRhX187cmV0dXJuIHRoaXMuc2l6ZSs9dGhpcy5oYXMoZSk/MDoxLHJbZV09dHImJnZvaWQgMD09PXQ/XCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCI6dCx0aGlzfSxhci5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLnNpemU9MCx0aGlzLl9fZGF0YV9fPXtoYXNoOm5ldyBscixtYXA6bmV3KGVyfHxJdCksc3RyaW5nOm5ldyBscn19LGFyLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oZSl7dmFyIHQ9b3IodGhpcyxlKS5kZWxldGUoZSk7cmV0dXJuIHRoaXMuc2l6ZS09dD8xOjAsdH0sYXIucHJvdG90eXBlLmdldD1mdW5jdGlvbihlKXtyZXR1cm4gb3IodGhpcyxlKS5nZXQoZSl9LGFyLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24oZSl7cmV0dXJuIG9yKHRoaXMsZSkuaGFzKGUpfSxhci5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGUsdCl7dmFyIHI9b3IodGhpcyxlKSxuPXIuc2l6ZTtyZXR1cm4gci5zZXQoZSx0KSx0aGlzLnNpemUrPXIuc2l6ZT09bj8wOjEsdGhpc307ZnVuY3Rpb24gaXIoZSl7dmFyIHQ9dGhpcy5fX2RhdGFfXz1uZXcgSXQoZSk7dGhpcy5zaXplPXQuc2l6ZX1pci5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPW5ldyBJdCx0aGlzLnNpemU9MH0saXIucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLl9fZGF0YV9fLHI9dC5kZWxldGUoZSk7cmV0dXJuIHRoaXMuc2l6ZT10LnNpemUscn0saXIucHJvdG90eXBlLmdldD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoZSl9LGlyLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGUpfSxpci5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcy5fX2RhdGFfXztpZihyIGluc3RhbmNlb2YgSXQpe3ZhciBuPXIuX19kYXRhX187aWYoIWVyfHxuLmxlbmd0aDwxOTkpcmV0dXJuIG4ucHVzaChbZSx0XSksdGhpcy5zaXplPSsrci5zaXplLHRoaXM7cj10aGlzLl9fZGF0YV9fPW5ldyBhcihuKX1yZXR1cm4gci5zZXQoZSx0KSx0aGlzLnNpemU9ci5zaXplLHRoaXN9O2Z1bmN0aW9uIHNyKGUpe3ZhciB0PS0xLHI9bnVsbD09ZT8wOmUubGVuZ3RoO2Zvcih0aGlzLl9fZGF0YV9fPW5ldyBhcjsrK3Q8cjspdGhpcy5hZGQoZVt0XSl9ZnVuY3Rpb24gY3IoZSx0KXtmb3IodmFyIHI9LTEsbj1udWxsPT1lPzA6ZS5sZW5ndGg7KytyPG47KWlmKHQoZVtyXSxyLGUpKXJldHVybiEwO3JldHVybiExfXNyLnByb3RvdHlwZS5hZGQ9c3IucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX19kYXRhX18uc2V0KGUsXCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCIpLHRoaXN9LHNyLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGUpfTtmdW5jdGlvbiB1cihlLHQscixuLGwsbyl7dmFyIGE9MSZyLGk9ZS5sZW5ndGgscz10Lmxlbmd0aDtpZihpIT1zJiYhKGEmJnM+aSkpcmV0dXJuITE7dmFyIGM9by5nZXQoZSk7aWYoYyYmby5nZXQodCkpcmV0dXJuIGM9PXQ7dmFyIHU9LTEsZD0hMCxwPTImcj9uZXcgc3I6dm9pZCAwO2ZvcihvLnNldChlLHQpLG8uc2V0KHQsZSk7Kyt1PGk7KXt2YXIgbT1lW3VdLGY9dFt1XTtpZihuKXZhciBnPWE/bihmLG0sdSx0LGUsbyk6bihtLGYsdSxlLHQsbyk7aWYodm9pZCAwIT09Zyl7aWYoZyljb250aW51ZTtkPSExO2JyZWFrfWlmKHApe2lmKCFjcih0LChmdW5jdGlvbihlLHQpe2lmKGE9dCwhcC5oYXMoYSkmJihtPT09ZXx8bChtLGUscixuLG8pKSlyZXR1cm4gcC5wdXNoKHQpO3ZhciBhfSkpKXtkPSExO2JyZWFrfX1lbHNlIGlmKG0hPT1mJiYhbChtLGYscixuLG8pKXtkPSExO2JyZWFrfX1yZXR1cm4gby5kZWxldGUoZSksby5kZWxldGUodCksZH12YXIgZHI9UHQuVWludDhBcnJheTtmdW5jdGlvbiBwcihlKXt2YXIgdD0tMSxyPUFycmF5KGUuc2l6ZSk7cmV0dXJuIGUuZm9yRWFjaCgoZnVuY3Rpb24oZSxuKXtyWysrdF09W24sZV19KSkscn1mdW5jdGlvbiBtcihlKXt2YXIgdD0tMSxyPUFycmF5KGUuc2l6ZSk7cmV0dXJuIGUuZm9yRWFjaCgoZnVuY3Rpb24oZSl7clsrK3RdPWV9KSkscn12YXIgZnI9UnQ/UnQucHJvdG90eXBlOnZvaWQgMCxncj1mcj9mci52YWx1ZU9mOnZvaWQgMDt2YXIgYnI9QXJyYXkuaXNBcnJheTt2YXIgaHI9T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxDcj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLHZyPUNyP2Z1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1tdOihlPU9iamVjdChlKSxmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0tMSxuPW51bGw9PWU/MDplLmxlbmd0aCxsPTAsbz1bXTsrK3I8bjspe3ZhciBhPWVbcl07dChhLHIsZSkmJihvW2wrK109YSl9cmV0dXJuIG99KENyKGUpLChmdW5jdGlvbih0KXtyZXR1cm4gaHIuY2FsbChlLHQpfSkpKX06ZnVuY3Rpb24oKXtyZXR1cm5bXX07ZnVuY3Rpb24gd3IoZSl7cmV0dXJuIG51bGwhPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlfWZ1bmN0aW9uIE9yKGUpe3JldHVybiB3cihlKSYmXCJbb2JqZWN0IEFyZ3VtZW50c11cIj09X3QoZSl9dmFyIHlyPU9iamVjdC5wcm90b3R5cGUsRXI9eXIuaGFzT3duUHJvcGVydHksU3I9eXIucHJvcGVydHlJc0VudW1lcmFibGUseHI9T3IoZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzfSgpKT9PcjpmdW5jdGlvbihlKXtyZXR1cm4gd3IoZSkmJkVyLmNhbGwoZSxcImNhbGxlZVwiKSYmIVNyLmNhbGwoZSxcImNhbGxlZVwiKX07dmFyIE1yPVwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZleHBvcnRzJiYhZXhwb3J0cy5ub2RlVHlwZSYmZXhwb3J0cyxJcj1NciYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlJiYhbW9kdWxlLm5vZGVUeXBlJiZtb2R1bGUsa3I9SXImJklyLmV4cG9ydHM9PT1Ncj9QdC5CdWZmZXI6dm9pZCAwLERyPShrcj9rci5pc0J1ZmZlcjp2b2lkIDApfHxmdW5jdGlvbigpe3JldHVybiExfSxQcj0vXig/OjB8WzEtOV1cXGQqKSQvO2Z1bmN0aW9uIFJyKGUsdCl7dmFyIHI9dHlwZW9mIGU7cmV0dXJuISEodD1udWxsPT10PzkwMDcxOTkyNTQ3NDA5OTE6dCkmJihcIm51bWJlclwiPT1yfHxcInN5bWJvbFwiIT1yJiZQci50ZXN0KGUpKSYmZT4tMSYmZSUxPT0wJiZlPHR9ZnVuY3Rpb24gRnIoZSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGUmJmU+LTEmJmUlMT09MCYmZTw9OTAwNzE5OTI1NDc0MDk5MX12YXIgTHI9e307THJbXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIl09THJbXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIl09THJbXCJbb2JqZWN0IEludDhBcnJheV1cIl09THJbXCJbb2JqZWN0IEludDE2QXJyYXldXCJdPUxyW1wiW29iamVjdCBJbnQzMkFycmF5XVwiXT1McltcIltvYmplY3QgVWludDhBcnJheV1cIl09THJbXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiXT1McltcIltvYmplY3QgVWludDE2QXJyYXldXCJdPUxyW1wiW29iamVjdCBVaW50MzJBcnJheV1cIl09ITAsTHJbXCJbb2JqZWN0IEFyZ3VtZW50c11cIl09THJbXCJbb2JqZWN0IEFycmF5XVwiXT1McltcIltvYmplY3QgQXJyYXlCdWZmZXJdXCJdPUxyW1wiW29iamVjdCBCb29sZWFuXVwiXT1McltcIltvYmplY3QgRGF0YVZpZXddXCJdPUxyW1wiW29iamVjdCBEYXRlXVwiXT1McltcIltvYmplY3QgRXJyb3JdXCJdPUxyW1wiW29iamVjdCBGdW5jdGlvbl1cIl09THJbXCJbb2JqZWN0IE1hcF1cIl09THJbXCJbb2JqZWN0IE51bWJlcl1cIl09THJbXCJbb2JqZWN0IE9iamVjdF1cIl09THJbXCJbb2JqZWN0IFJlZ0V4cF1cIl09THJbXCJbb2JqZWN0IFNldF1cIl09THJbXCJbb2JqZWN0IFN0cmluZ11cIl09THJbXCJbb2JqZWN0IFdlYWtNYXBdXCJdPSExO3ZhciBqcix6cj1cIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmZXhwb3J0cyYmIWV4cG9ydHMubm9kZVR5cGUmJmV4cG9ydHMsVHI9enImJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZSYmIW1vZHVsZS5ub2RlVHlwZSYmbW9kdWxlLEFyPVRyJiZUci5leHBvcnRzPT09enImJmt0LnByb2Nlc3MsX3I9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIEFyJiZBci5iaW5kaW5nJiZBci5iaW5kaW5nKFwidXRpbFwiKX1jYXRjaChlKXt9fSgpLEdyPV9yJiZfci5pc1R5cGVkQXJyYXksSHI9R3I/KGpyPUdyLGZ1bmN0aW9uKGUpe3JldHVybiBqcihlKX0pOmZ1bmN0aW9uKGUpe3JldHVybiB3cihlKSYmRnIoZS5sZW5ndGgpJiYhIUxyW190KGUpXX0sTnI9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiBWcihlLHQpe3ZhciByPWJyKGUpLG49IXImJnhyKGUpLGw9IXImJiFuJiZEcihlKSxvPSFyJiYhbiYmIWwmJkhyKGUpLGE9cnx8bnx8bHx8byxpPWE/ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9LTEsbj1BcnJheShlKTsrK3I8ZTspbltyXT10KHIpO3JldHVybiBufShlLmxlbmd0aCxTdHJpbmcpOltdLHM9aS5sZW5ndGg7Zm9yKHZhciBjIGluIGUpIXQmJiFOci5jYWxsKGUsYyl8fGEmJihcImxlbmd0aFwiPT1jfHxsJiYoXCJvZmZzZXRcIj09Y3x8XCJwYXJlbnRcIj09Yyl8fG8mJihcImJ1ZmZlclwiPT1jfHxcImJ5dGVMZW5ndGhcIj09Y3x8XCJieXRlT2Zmc2V0XCI9PWMpfHxScihjLHMpKXx8aS5wdXNoKGMpO3JldHVybiBpfXZhciBCcj1PYmplY3QucHJvdG90eXBlO3ZhciAkcj1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gZSh0KHIpKX19KE9iamVjdC5rZXlzLE9iamVjdCksV3I9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiBVcihlKXtpZihyPSh0PWUpJiZ0LmNvbnN0cnVjdG9yLHQhPT0oXCJmdW5jdGlvblwiPT10eXBlb2YgciYmci5wcm90b3R5cGV8fEJyKSlyZXR1cm4gJHIoZSk7dmFyIHQscixuPVtdO2Zvcih2YXIgbCBpbiBPYmplY3QoZSkpV3IuY2FsbChlLGwpJiZcImNvbnN0cnVjdG9yXCIhPWwmJm4ucHVzaChsKTtyZXR1cm4gbn1mdW5jdGlvbiBLcihlKXtyZXR1cm4gbnVsbCE9KHQ9ZSkmJkZyKHQubGVuZ3RoKSYmIUh0KHQpP1ZyKGUpOlVyKGUpO3ZhciB0fWZ1bmN0aW9uIFpyKGUpe3JldHVybiBmdW5jdGlvbihlLHQscil7dmFyIG49dChlKTtyZXR1cm4gYnIoZSk/bjpmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0tMSxuPXQubGVuZ3RoLGw9ZS5sZW5ndGg7KytyPG47KWVbbCtyXT10W3JdO3JldHVybiBlfShuLHIoZSkpfShlLEtyLHZyKX12YXIgWHI9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcXI9UXQoUHQsXCJEYXRhVmlld1wiKSxZcj1RdChQdCxcIlByb21pc2VcIiksSnI9UXQoUHQsXCJTZXRcIiksUXI9UXQoUHQsXCJXZWFrTWFwXCIpLGVuPVd0KHFyKSx0bj1XdChlcikscm49V3QoWXIpLG5uPVd0KEpyKSxsbj1XdChRciksb249X3Q7KHFyJiZcIltvYmplY3QgRGF0YVZpZXddXCIhPW9uKG5ldyBxcihuZXcgQXJyYXlCdWZmZXIoMSkpKXx8ZXImJlwiW29iamVjdCBNYXBdXCIhPW9uKG5ldyBlcil8fFlyJiZcIltvYmplY3QgUHJvbWlzZV1cIiE9b24oWXIucmVzb2x2ZSgpKXx8SnImJlwiW29iamVjdCBTZXRdXCIhPW9uKG5ldyBKcil8fFFyJiZcIltvYmplY3QgV2Vha01hcF1cIiE9b24obmV3IFFyKSkmJihvbj1mdW5jdGlvbihlKXt2YXIgdD1fdChlKSxyPVwiW29iamVjdCBPYmplY3RdXCI9PXQ/ZS5jb25zdHJ1Y3Rvcjp2b2lkIDAsbj1yP1d0KHIpOlwiXCI7aWYobilzd2l0Y2gobil7Y2FzZSBlbjpyZXR1cm5cIltvYmplY3QgRGF0YVZpZXddXCI7Y2FzZSB0bjpyZXR1cm5cIltvYmplY3QgTWFwXVwiO2Nhc2Ugcm46cmV0dXJuXCJbb2JqZWN0IFByb21pc2VdXCI7Y2FzZSBubjpyZXR1cm5cIltvYmplY3QgU2V0XVwiO2Nhc2UgbG46cmV0dXJuXCJbb2JqZWN0IFdlYWtNYXBdXCJ9cmV0dXJuIHR9KTt2YXIgYW49b24sc249XCJbb2JqZWN0IE9iamVjdF1cIixjbj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O2Z1bmN0aW9uIHVuKGUsdCxyLG4sbCxvKXt2YXIgYT1icihlKSxpPWJyKHQpLHM9YT9cIltvYmplY3QgQXJyYXldXCI6YW4oZSksYz1pP1wiW29iamVjdCBBcnJheV1cIjphbih0KSx1PShzPVwiW29iamVjdCBBcmd1bWVudHNdXCI9PXM/c246cyk9PXNuLGQ9KGM9XCJbb2JqZWN0IEFyZ3VtZW50c11cIj09Yz9zbjpjKT09c24scD1zPT1jO2lmKHAmJkRyKGUpKXtpZighRHIodCkpcmV0dXJuITE7YT0hMCx1PSExfWlmKHAmJiF1KXJldHVybiBvfHwobz1uZXcgaXIpLGF8fEhyKGUpP3VyKGUsdCxyLG4sbCxvKTpmdW5jdGlvbihlLHQscixuLGwsbyxhKXtzd2l0Y2gocil7Y2FzZVwiW29iamVjdCBEYXRhVmlld11cIjppZihlLmJ5dGVMZW5ndGghPXQuYnl0ZUxlbmd0aHx8ZS5ieXRlT2Zmc2V0IT10LmJ5dGVPZmZzZXQpcmV0dXJuITE7ZT1lLmJ1ZmZlcix0PXQuYnVmZmVyO2Nhc2VcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI6cmV0dXJuIShlLmJ5dGVMZW5ndGghPXQuYnl0ZUxlbmd0aHx8IW8obmV3IGRyKGUpLG5ldyBkcih0KSkpO2Nhc2VcIltvYmplY3QgQm9vbGVhbl1cIjpjYXNlXCJbb2JqZWN0IERhdGVdXCI6Y2FzZVwiW29iamVjdCBOdW1iZXJdXCI6cmV0dXJuIFN0KCtlLCt0KTtjYXNlXCJbb2JqZWN0IEVycm9yXVwiOnJldHVybiBlLm5hbWU9PXQubmFtZSYmZS5tZXNzYWdlPT10Lm1lc3NhZ2U7Y2FzZVwiW29iamVjdCBSZWdFeHBdXCI6Y2FzZVwiW29iamVjdCBTdHJpbmddXCI6cmV0dXJuIGU9PXQrXCJcIjtjYXNlXCJbb2JqZWN0IE1hcF1cIjp2YXIgaT1wcjtjYXNlXCJbb2JqZWN0IFNldF1cIjp2YXIgcz0xJm47aWYoaXx8KGk9bXIpLGUuc2l6ZSE9dC5zaXplJiYhcylyZXR1cm4hMTt2YXIgYz1hLmdldChlKTtpZihjKXJldHVybiBjPT10O258PTIsYS5zZXQoZSx0KTt2YXIgdT11cihpKGUpLGkodCksbixsLG8sYSk7cmV0dXJuIGEuZGVsZXRlKGUpLHU7Y2FzZVwiW29iamVjdCBTeW1ib2xdXCI6aWYoZ3IpcmV0dXJuIGdyLmNhbGwoZSk9PWdyLmNhbGwodCl9cmV0dXJuITF9KGUsdCxzLHIsbixsLG8pO2lmKCEoMSZyKSl7dmFyIG09dSYmY24uY2FsbChlLFwiX193cmFwcGVkX19cIiksZj1kJiZjbi5jYWxsKHQsXCJfX3dyYXBwZWRfX1wiKTtpZihtfHxmKXt2YXIgZz1tP2UudmFsdWUoKTplLGI9Zj90LnZhbHVlKCk6dDtyZXR1cm4gb3x8KG89bmV3IGlyKSxsKGcsYixyLG4sbyl9fXJldHVybiEhcCYmKG98fChvPW5ldyBpciksZnVuY3Rpb24oZSx0LHIsbixsLG8pe3ZhciBhPTEmcixpPVpyKGUpLHM9aS5sZW5ndGg7aWYocyE9WnIodCkubGVuZ3RoJiYhYSlyZXR1cm4hMTtmb3IodmFyIGM9cztjLS07KXt2YXIgdT1pW2NdO2lmKCEoYT91IGluIHQ6WHIuY2FsbCh0LHUpKSlyZXR1cm4hMX12YXIgZD1vLmdldChlKTtpZihkJiZvLmdldCh0KSlyZXR1cm4gZD09dDt2YXIgcD0hMDtvLnNldChlLHQpLG8uc2V0KHQsZSk7Zm9yKHZhciBtPWE7KytjPHM7KXt2YXIgZj1lW3U9aVtjXV0sZz10W3VdO2lmKG4pdmFyIGI9YT9uKGcsZix1LHQsZSxvKTpuKGYsZyx1LGUsdCxvKTtpZighKHZvaWQgMD09PWI/Zj09PWd8fGwoZixnLHIsbixvKTpiKSl7cD0hMTticmVha31tfHwobT1cImNvbnN0cnVjdG9yXCI9PXUpfWlmKHAmJiFtKXt2YXIgaD1lLmNvbnN0cnVjdG9yLEM9dC5jb25zdHJ1Y3RvcjtoPT1DfHwhKFwiY29uc3RydWN0b3JcImluIGUpfHwhKFwiY29uc3RydWN0b3JcImluIHQpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBoJiZoIGluc3RhbmNlb2YgaCYmXCJmdW5jdGlvblwiPT10eXBlb2YgQyYmQyBpbnN0YW5jZW9mIEN8fChwPSExKX1yZXR1cm4gby5kZWxldGUoZSksby5kZWxldGUodCkscH0oZSx0LHIsbixsLG8pKX1mdW5jdGlvbiBkbihlLHQscixuLGwpe3JldHVybiBlPT09dHx8KG51bGw9PWV8fG51bGw9PXR8fCF3cihlKSYmIXdyKHQpP2UhPWUmJnQhPXQ6dW4oZSx0LHIsbixkbixsKSl9ZnVuY3Rpb24gcG4oZSx0KXtyZXR1cm4gZG4oZSx0KX1mdW5jdGlvbiBtbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIERhdGV9ZnVuY3Rpb24gZm4oe3ZhbHVlOmUsd2l0aFRpbWU6dH0pe2lmKG1uKGUpKXtjb25zdCByPWUuZ2V0VGltZXpvbmVPZmZzZXQoKTtyZXR1cm4gbmV3IERhdGUoZS5nZXRUaW1lKCktNjAqcioxZTMpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsdD8xNjoxMCl9cmV0dXJuIGV9ZnVuY3Rpb24gZ24oZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSl9ZnVuY3Rpb24gYm4oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGV9ZnVuY3Rpb24gaG4oZSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGV9ZnVuY3Rpb24gQ24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX1mdW5jdGlvbiB2bihlKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZX1mdW5jdGlvbiB3bihlKXtyZXR1cm4gZS50eXBlfHxlLm1vZGV9ZnVuY3Rpb24gT24oKXtyZXR1cm5cImFscGhhXCJpbiB1fWZ1bmN0aW9uIHluKGUsdCl7dmFyIHIsbjtyZXR1cm4gT24oKT9udWxsPT09KHI9dSl8fHZvaWQgMD09PXI/dm9pZCAwOnIuYWxwaGEoZSx0KTpudWxsPT09KG49dSl8fHZvaWQgMD09PW4/dm9pZCAwOm4uZmFkZShlLHQpfWZ1bmN0aW9uIEVuKCl7dHJ5e2NvbnN0IGU9XCJfX3NvbWVfcmFuZG9tX2tleV95b3VfYXJlX25vdF9nb2luZ190b191c2VfX1wiO3JldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oZSxlKSx3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZSksITB9Y2F0Y2goZSl7cmV0dXJuITF9fWZ1bmN0aW9uIFNuKGUpe3N3aXRjaChlKXtjYXNlXCJzdHJpbmdcIjpyZXR1cm5cInRleHRcIjtjYXNlXCJudW1iZXJcIjpjYXNlXCJkYXRlXCI6cmV0dXJuIGU7Y2FzZVwiZGF0ZVRpbWVcIjpyZXR1cm5cImRhdGV0aW1lLWxvY2FsXCI7ZGVmYXVsdDpyZXR1cm5cInRleHRcIn19Y29uc3QgeG49KGUsdCk9Pntjb25zdCByPWUuaW5kZXhPZih0KTtyZXR1cm4gdCYmLTEhPT1yJiZyKzEhPT1lLmxlbmd0aD9lW3IrMV06ZVswXX0sTW49ZT0+XCJkZXNjXCI9PT1lLEluPShlLHQpPT5udWxsPT1lJiZudWxsIT10Py0xOm51bGw9PXQmJm51bGwhPWU/MTpudWxsPT1lJiZudWxsPT10PzA6bnVsbCxrbj0oZSx0LHIsbik9Pntjb25zdCBsPXIuZ2V0VmFsdWUoci5maWVsZCksbz1uLmdldFZhbHVlKG4uZmllbGQpLGE9SW4obCxvKTtyZXR1cm4gbnVsbCE9PWE/YTpcInN0cmluZ1wiPT10eXBlb2YgbD9sLmxvY2FsZUNvbXBhcmUoby50b1N0cmluZygpKTpsLW99LERuPShlLHQscixuKT0+e2NvbnN0IGw9ci5nZXRWYWx1ZShyLmZpZWxkKSxvPW4uZ2V0VmFsdWUobi5maWVsZCksYT1JbihsLG8pO3JldHVybiBudWxsIT09YT9hOk51bWJlcihsKS1OdW1iZXIobyl9LFBuPShlLHQscixuKT0+e2NvbnN0IGw9ci5nZXRWYWx1ZShyLmZpZWxkKSxvPW4uZ2V0VmFsdWUobi5maWVsZCksYT1JbihsLG8pO3JldHVybiBudWxsIT09YT9hOmw+bz8xOmw8bz8tMTowfTtmdW5jdGlvbiBSbihlKXtyZXR1cm4gZS5zY3JvbGxIZWlnaHQ+ZS5jbGllbnRIZWlnaHR8fGUuc2Nyb2xsV2lkdGg+ZS5jbGllbnRXaWR0aH1mdW5jdGlvbiBGbihlLHQpe3JldHVybiBlLmNsb3Nlc3QoXCIuXCIrdCl9ZnVuY3Rpb24gTG4oZSl7cmV0dXJuIGU/Rm4oZSxcIk11aURhdGFHcmlkLXJvd1wiKTpudWxsfWZ1bmN0aW9uIGpuKGUpe3JldHVybiBudWxsIT1lJiZlLmNsYXNzTGlzdC5jb250YWlucyhcIk11aURhdGFHcmlkLWNlbGxcIil9ZnVuY3Rpb24gem4oZSl7cmV0dXJuIG51bGwhPWUmJmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiTXVpRGF0YUdyaWQtY29sQ2VsbFwiKX1mdW5jdGlvbiBUbihlKXtyZXR1cm4gZSYmbnVsbCE9PUZuKGUsXCJNdWlEYXRhR3JpZC1jb2xDZWxsVGl0bGVDb250YWluZXJcIil9ZnVuY3Rpb24gQW4oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKX1mdW5jdGlvbiBfbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkXCIpfWZ1bmN0aW9uIEduKGUsdCl7cmV0dXJuIGUucXVlcnlTZWxlY3RvcihgW2RhdGEtZmllbGQ9XCIke3R9XCJdYCl9ZnVuY3Rpb24gSG4oZSl7Y29uc3QgdD1lLmdldEF0dHJpYnV0ZShcImRhdGEtZmllbGRcIikscj1GbihlLFwiTXVpRGF0YUdyaWQtcm9vdFwiKTtpZighcil0aHJvdyBuZXcgRXJyb3IoXCJNYXRlcmlhbC1VSTogVGhlIHJvb3QgZWxlbWVudCBpcyBub3QgZm91bmQuXCIpO3JldHVybiByLnF1ZXJ5U2VsZWN0b3JBbGwoYDpzY29wZSAuTXVpRGF0YUdyaWQtY2VsbFtkYXRhLWZpZWxkPVwiJHt0fVwiXWApfWZ1bmN0aW9uIE5uKGUpe2lmKGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiTXVpRGF0YUdyaWQtcm9vdFwiKSlyZXR1cm4gZTtyZXR1cm4gRm4oZSxcIk11aURhdGFHcmlkLXJvb3RcIil9ZnVuY3Rpb24gVm4oZSl7Y29uc3QgdD1ObihlKTtyZXR1cm4gdD90LnF1ZXJ5U2VsZWN0b3IoXCI6c2NvcGUgLmRhdGEtY29udGFpbmVyXCIpOm51bGx9ZnVuY3Rpb24gQm4oZSx7Y29sSW5kZXg6dCxyb3dJbmRleDpyfSl7cmV0dXJuIGUucXVlcnlTZWxlY3RvcihgOnNjb3BlIC5NdWlEYXRhR3JpZC1jZWxsW2FyaWEtY29sSW5kZXg9JyR7dH0nXVtkYXRhLXJvd0luZGV4PScke3J9J11gKX1mdW5jdGlvbiAkbihlLHQpe3JldHVybiBlLnF1ZXJ5U2VsZWN0b3IoYFtyb2xlPSdjb2x1bW5oZWFkZXInXVtkYXRhLWZpZWxkPScke3R9J11gKX1mdW5jdGlvbiBXbihlLHQpe3JldHVybiBlLnF1ZXJ5U2VsZWN0b3IoYDpzY29wZSAuTXVpRGF0YUdyaWQtcm93W2RhdGEtaWQ9JyR7dH0nXWApfWZ1bmN0aW9uIFVuKGUse2lkOnQsZmllbGQ6cn0pe2NvbnN0IG49V24oZSx0KTtyZXR1cm4gbj9uLnF1ZXJ5U2VsZWN0b3IoYC5NdWlEYXRhR3JpZC1jZWxsW2RhdGEtZmllbGQ9JyR7cn0nXWApOm51bGx9ZnVuY3Rpb24gS24oLi4uZSl7cmV0dXJuIGUucmVkdWNlKCgoZSx0KT0+dD8oZ24odCk/ZSs9dC5qb2luKFwiIFwiKTpibih0KT9lKz10Olwib2JqZWN0XCI9PXR5cGVvZiB0JiYoT2JqZWN0LmtleXModCkuZm9yRWFjaCgocj0+e3Rbcl0mJihlKz1yK1wiIFwiKX0pKSxlPWUudHJpbSgpKSxlKz1cIiBcIik6ZSksXCJcIikudHJpbSgpfWNvbnN0IFpuPWU9PlwiRXNjYXBlXCI9PT1lLFhuPWU9PlwiRW50ZXJcIj09PWUscW49ZT0+XCJUYWJcIj09PWUsWW49ZT0+XCIgXCI9PT1lLEpuPWU9PjA9PT1lLmluZGV4T2YoXCJBcnJvd1wiKSxRbj1lPT5cIkhvbWVcIj09PWV8fFwiRW5kXCI9PT1lLGVsPWU9PjA9PT1lLmluZGV4T2YoXCJQYWdlXCIpLHRsPWU9PlwiRGVsZXRlXCI9PT1lfHxcIkJhY2tzcGFjZVwiPT09ZSxybD0vXihcXHB7TH18XFxwe019XFxwe0x9fFxccHtNfXxcXHB7Tn18XFxwe1p9fFxccHtTfXxcXHB7UH0pJC9pdSxubD1lPT5ybC50ZXN0KGUpLGxsPVtcIk1ldGFcIixcIkNvbnRyb2xcIixcIlNoaWZ0XCJdLG9sPVtcIkVudGVyXCIsXCJFc2NhcGVcIixcIlRhYlwiXSxhbD1bXCJFbnRlclwiLFwiVGFiXCJdLGlsPWU9PmxsLmluZGV4T2YoZSk+LTEsc2w9ZT0+WG4oZSl8fHRsKGUpfHxubChlKSxjbD1lPT5vbC5pbmRleE9mKGUpPi0xLHVsPWU9PmFsLmluZGV4T2YoZSk+LTEsZGw9ZT0+UW4oZSl8fEpuKGUpfHxlbChlKXx8WW4oZSkscGw9ZT0+ISFlLmtleSxtbD1lPT5xbihlKXx8Wm4oZSksZmw9ZT0+ZS5zaGlmdEtleXx8ZS5tZXRhS2V5fHxlLmN0cmxLZXlcbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLztmdW5jdGlvbiBnbChlLHQpe3ZhciByPXt9O2Zvcih2YXIgbiBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiZ0LmluZGV4T2Yobik8MCYmKHJbbl09ZVtuXSk7aWYobnVsbCE9ZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIGw9MDtmb3Iobj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO2w8bi5sZW5ndGg7bCsrKXQuaW5kZXhPZihuW2xdKTwwJiZPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZSxuW2xdKSYmKHJbbltsXV09ZVtuW2xdXSl9cmV0dXJuIHJ9ZnVuY3Rpb24gYmwoZSl7Y29uc3R7aWQ6dCx2YWx1ZTpyLGZvcm1hdHRlZFZhbHVlOm4sYXBpOmwsZmllbGQ6byxyb3c6YSxjb2xEZWY6aSxjZWxsTW9kZTpjLGdldFZhbHVlOnUscm93SW5kZXg6ZCxjb2xJbmRleDpwLGlzRWRpdGFibGU6bX09ZSxmPWdsKGUsW1wiaWRcIixcInZhbHVlXCIsXCJmb3JtYXR0ZWRWYWx1ZVwiLFwiYXBpXCIsXCJmaWVsZFwiLFwicm93XCIsXCJjb2xEZWZcIixcImNlbGxNb2RlXCIsXCJnZXRWYWx1ZVwiLFwicm93SW5kZXhcIixcImNvbEluZGV4XCIsXCJpc0VkaXRhYmxlXCJdKSxbYixoXT1zLnVzZVN0YXRlKHIpLEM9cy51c2VDYWxsYmFjaygoZT0+e2NvbnN0IHI9ZS50YXJnZXQudmFsdWUsbj17dmFsdWU6XCJkYXRlXCI9PT1pLnR5cGV8fFwiZGF0ZVRpbWVcIj09PWkudHlwZT9uZXcgRGF0ZShyKTpyfTtoKHIpLGwucHVibGlzaEV2ZW50KFwiY2VsbEVkaXRQcm9wc0NoYW5nZVwiLHtpZDp0LGZpZWxkOm8scHJvcHM6bn0sZSl9KSxbbCxpLnR5cGUsbyx0XSksdj1TbihpLnR5cGUpLHc9YiYmbW4oYik/Zm4oe3ZhbHVlOmIsd2l0aFRpbWU6XCJkYXRlVGltZVwiPT09aS50eXBlfSk6YjtyZXR1cm4gcy51c2VFZmZlY3QoKCgpPT57aChyKX0pLFtyXSkscy5jcmVhdGVFbGVtZW50KGcsT2JqZWN0LmFzc2lnbih7YXV0b0ZvY3VzOiEwLGNsYXNzTmFtZTpcIk11aURhdGFHcmlkLWVkaXRDZWxsSW5wdXRCYXNlXCIsZnVsbFdpZHRoOiEwLHR5cGU6dix2YWx1ZTp3LG9uQ2hhbmdlOkN9LGYpKX1jb25zdCBobD1lPT5zLmNyZWF0ZUVsZW1lbnQoYmwsT2JqZWN0LmFzc2lnbih7fSxlKSksQ2w9ZShzLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNNCAxMmwxLjQxIDEuNDFMMTEgNy44M1YyMGgyVjcuODNsNS41OCA1LjU5TDIwIDEybC04LTgtOCA4elwifSksXCJBcnJvd1Vwd2FyZFwiKSx2bD1lKHMuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0yMCAxMmwtMS40MS0xLjQxTDEzIDE2LjE3VjRoLTJ2MTIuMTdsLTUuNTgtNS41OUw0IDEybDggOCA4LTh6XCJ9KSxcIkFycm93RG93bndhcmRcIiksd2w9ZShzLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTAgMThoNHYtMmgtNHYyek0zIDZ2MmgxOFY2SDN6bTMgN2gxMnYtMkg2djJ6XCJ9KSxcIkZpbHRlckxpc3RcIiksT2w9ZShzLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNNC4yNSA1LjYxQzYuMjcgOC4yIDEwIDEzIDEwIDEzdjZjMCAuNTUuNDUgMSAxIDFoMmMuNTUgMCAxLS40NSAxLTF2LTZzMy43Mi00LjggNS43NC03LjM5Yy41MS0uNjYuMDQtMS42MS0uNzktMS42MUg1LjA0Yy0uODMgMC0xLjMuOTUtLjc5IDEuNjF6XCJ9KSxcIkZpbHRlckFsdFwiKSx5bD1lKHMuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwifSksXCJTZWFyY2hcIiksRWw9ZShzLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3pcIn0pLFwiTWVudVwiKSxTbD1lKHMuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNWwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5elwifSksXCJDaGVja0NpcmNsZVwiKSx4bD1lKHMuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk02IDVIM2MtLjU1IDAtMSAuNDUtMSAxdjEyYzAgLjU1LjQ1IDEgMSAxaDNjLjU1IDAgMS0uNDUgMS0xVjZjMC0uNTUtLjQ1LTEtMS0xem0xNCAwaC0zYy0uNTUgMC0xIC40NS0xIDF2MTJjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTFWNmMwLS41NS0uNDUtMS0xLTF6bS03IDBoLTNjLS41NSAwLTEgLjQ1LTEgMXYxMmMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMVY2YzAtLjU1LS40NS0xLTEtMXpcIn0pLFwiQ29sdW1uSWNvblwiKSxNbD1lKHMuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMSAxOVY1aDJ2MTR6XCJ9KSxcIlNlcGFyYXRvclwiKSxJbD1lKHMuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk00IDE1aDE2di0ySDR2MnptMCA0aDE2di0ySDR2MnptMC04aDE2VjlINHYyem0wLTZ2MmgxNlY1SDR6XCJ9KSxcIlZpZXdIZWFkbGluZVwiKSxrbD1lKHMuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0yMSw4SDNWNGgxOFY4eiBNMjEsMTBIM3Y0aDE4VjEweiBNMjEsMTZIM3Y0aDE4VjE2elwifSksXCJUYWJsZVJvd3NcIiksRGw9ZShzLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNNCAxOGgxN3YtNkg0djZ6TTQgNXY2aDE3VjVINHpcIn0pLFwiVmlld1N0cmVhbVwiKSxQbD1lKHMuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMiA4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnpcIn0pLFwiVHJpcGxlRG90c1ZlcnRpY2FsXCIpLFJsPWUocy5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcIn0pLFwiQ2xvc2VcIiksRmw9ZShzLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyelwifSksXCJBZGRcIiksTGw9ZShzLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTIgNFYxTDggNWw0IDRWNmMzLjMxIDAgNiAyLjY5IDYgNiAwIDEuMDEtLjI1IDEuOTctLjcgMi44bDEuNDYgMS40NkMxOS41NCAxNS4wMyAyMCAxMy41NyAyMCAxMmMwLTQuNDItMy41OC04LTgtOHptMCAxNGMtMy4zMSAwLTYtMi42OS02LTYgMC0xLjAxLjI1LTEuOTcuNy0yLjhMNS4yNCA3Ljc0QzQuNDYgOC45NyA0IDEwLjQzIDQgMTJjMCA0LjQyIDMuNTggOCA4IDh2M2w0LTQtNC00djN6XCJ9KSxcIkxvYWRcIiksamw9ZShzLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTEgMThjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0tMi04Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMC02Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptNiA0YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnpcIn0pLFwiRHJhZ1wiKSx6bD1lKHMuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xOSAxMnY3SDV2LTdIM3Y3YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ2LTdoLTJ6bS02IC42N2wyLjU5LTIuNThMMTcgMTEuNWwtNSA1LTUtNSAxLjQxLTEuNDFMMTEgMTIuNjdWM2gyelwifSksXCJTYXZlQWx0XCIpLFRsPWUocy5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxelwifSksXCJDaGVja1wiKSxBbD01MDA7ZnVuY3Rpb24gX2woZSl7Y29uc3R7aXRlbTp0LGFwcGx5VmFsdWU6cix0eXBlOm4sYXBpUmVmOmx9PWUsbz1nbChlLFtcIml0ZW1cIixcImFwcGx5VmFsdWVcIixcInR5cGVcIixcImFwaVJlZlwiXSksYT1zLnVzZVJlZigpLFtpLGNdPXMudXNlU3RhdGUodC52YWx1ZXx8XCJcIiksW3UsZF09cy51c2VTdGF0ZSghMSkscD1zLnVzZUNhbGxiYWNrKChlPT57Y2xlYXJUaW1lb3V0KGEuY3VycmVudCk7Y29uc3Qgbj1lLnRhcmdldC52YWx1ZTtjKG4pLGQoITApLGEuY3VycmVudD1zZXRUaW1lb3V0KCgoKT0+e3IoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQpLHt2YWx1ZTpufSkpLGQoITEpfSksNTAwKX0pLFtyLHRdKTtzLnVzZUVmZmVjdCgoKCk9PigpPT57Y2xlYXJUaW1lb3V0KGEuY3VycmVudCl9KSxbXSkscy51c2VFZmZlY3QoKCgpPT57Yyh0LnZhbHVlfHxcIlwiKX0pLFt0LnZhbHVlXSk7Y29uc3QgbT11P3tlbmRBZG9ybm1lbnQ6cy5jcmVhdGVFbGVtZW50KExsLG51bGwpfTpvLklucHV0UHJvcHM7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChiLE9iamVjdC5hc3NpZ24oe2xhYmVsOmwuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiZmlsdGVyUGFuZWxJbnB1dExhYmVsXCIpLHBsYWNlaG9sZGVyOmwuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiZmlsdGVyUGFuZWxJbnB1dFBsYWNlaG9sZGVyXCIpLHZhbHVlOmksb25DaGFuZ2U6cCx0eXBlOm58fFwidGV4dFwiLHZhcmlhbnQ6XCJzdGFuZGFyZFwiLElucHV0UHJvcHM6bSxJbnB1dExhYmVsUHJvcHM6e3NocmluazohMH19LG8pKX1jb25zdCBHbD0oKT0+W3t2YWx1ZTpcImNvbnRhaW5zXCIsZ2V0QXBwbHlGaWx0ZXJGbjooZSx0KT0+e2lmKCFlLmNvbHVtbkZpZWxkfHwhZS52YWx1ZXx8IWUub3BlcmF0b3JWYWx1ZSlyZXR1cm4gbnVsbDtjb25zdCByPW5ldyBSZWdFeHAoZS52YWx1ZSxcImlcIik7cmV0dXJuIGU9Pntjb25zdCBuPXQudmFsdWVHZXR0ZXI/dC52YWx1ZUdldHRlcihlKTplLnZhbHVlO3JldHVybiByLnRlc3QoKG51bGw9PW4/dm9pZCAwOm4udG9TdHJpbmcoKSl8fFwiXCIpfX0sSW5wdXRDb21wb25lbnQ6X2x9LHt2YWx1ZTpcImVxdWFsc1wiLGdldEFwcGx5RmlsdGVyRm46KGUsdCk9PmUuY29sdW1uRmllbGQmJmUudmFsdWUmJmUub3BlcmF0b3JWYWx1ZT9yPT57dmFyIG47Y29uc3QgbD10LnZhbHVlR2V0dGVyP3QudmFsdWVHZXR0ZXIocik6ci52YWx1ZTtyZXR1cm4gMD09PShudWxsPT09KG49ZS52YWx1ZSl8fHZvaWQgMD09PW4/dm9pZCAwOm4ubG9jYWxlQ29tcGFyZSgobnVsbD09bD92b2lkIDA6bC50b1N0cmluZygpKXx8XCJcIix2b2lkIDAse3NlbnNpdGl2aXR5OlwiYmFzZVwifSkpfTpudWxsLElucHV0Q29tcG9uZW50Ol9sfSx7dmFsdWU6XCJzdGFydHNXaXRoXCIsZ2V0QXBwbHlGaWx0ZXJGbjooZSx0KT0+e2lmKCFlLmNvbHVtbkZpZWxkfHwhZS52YWx1ZXx8IWUub3BlcmF0b3JWYWx1ZSlyZXR1cm4gbnVsbDtjb25zdCByPW5ldyBSZWdFeHAoYF4ke2UudmFsdWV9LiokYCxcImlcIik7cmV0dXJuIGU9Pntjb25zdCBuPXQudmFsdWVHZXR0ZXI/dC52YWx1ZUdldHRlcihlKTplLnZhbHVlO3JldHVybiByLnRlc3QoKG51bGw9PW4/dm9pZCAwOm4udG9TdHJpbmcoKSl8fFwiXCIpfX0sSW5wdXRDb21wb25lbnQ6X2x9LHt2YWx1ZTpcImVuZHNXaXRoXCIsZ2V0QXBwbHlGaWx0ZXJGbjooZSx0KT0+e2lmKCFlLmNvbHVtbkZpZWxkfHwhZS52YWx1ZXx8IWUub3BlcmF0b3JWYWx1ZSlyZXR1cm4gbnVsbDtjb25zdCByPW5ldyBSZWdFeHAoYC4qJHtlLnZhbHVlfSRgLFwiaVwiKTtyZXR1cm4gZT0+e2NvbnN0IG49dC52YWx1ZUdldHRlcj90LnZhbHVlR2V0dGVyKGUpOmUudmFsdWU7cmV0dXJuIHIudGVzdCgobnVsbD09bj92b2lkIDA6bi50b1N0cmluZygpKXx8XCJcIil9fSxJbnB1dENvbXBvbmVudDpfbH1dLEhsPXt3aWR0aDoxMDAsaGlkZTohMSxzb3J0YWJsZTohMCxyZXNpemFibGU6ITAsZmlsdGVyYWJsZTohMCxzb3J0Q29tcGFyYXRvcjprbix0eXBlOlwic3RyaW5nXCIsYWxpZ246XCJsZWZ0XCIsZmlsdGVyT3BlcmF0b3JzOkdsKCkscmVuZGVyRWRpdENlbGw6aGx9LE5sPSgpPT5be2xhYmVsOlwiPVwiLHZhbHVlOlwiPVwiLGdldEFwcGx5RmlsdGVyRm46KGUsdCk9PmUuY29sdW1uRmllbGQmJmUudmFsdWUmJmUub3BlcmF0b3JWYWx1ZT9yPT57Y29uc3Qgbj10LnZhbHVlR2V0dGVyP3QudmFsdWVHZXR0ZXIocik6ci52YWx1ZTtyZXR1cm4gTnVtYmVyKG4pPT09TnVtYmVyKGUudmFsdWUpfTpudWxsLElucHV0Q29tcG9uZW50Ol9sLElucHV0Q29tcG9uZW50UHJvcHM6e3R5cGU6XCJudW1iZXJcIn19LHtsYWJlbDpcIiE9XCIsdmFsdWU6XCIhPVwiLGdldEFwcGx5RmlsdGVyRm46KGUsdCk9PmUuY29sdW1uRmllbGQmJmUudmFsdWUmJmUub3BlcmF0b3JWYWx1ZT9yPT57Y29uc3Qgbj10LnZhbHVlR2V0dGVyP3QudmFsdWVHZXR0ZXIocik6ci52YWx1ZTtyZXR1cm4gTnVtYmVyKG4pIT09TnVtYmVyKGUudmFsdWUpfTpudWxsLElucHV0Q29tcG9uZW50Ol9sLElucHV0Q29tcG9uZW50UHJvcHM6e3R5cGU6XCJudW1iZXJcIn19LHtsYWJlbDpcIj5cIix2YWx1ZTpcIj5cIixnZXRBcHBseUZpbHRlckZuOihlLHQpPT5lLmNvbHVtbkZpZWxkJiZlLnZhbHVlJiZlLm9wZXJhdG9yVmFsdWU/cj0+e2NvbnN0IG49dC52YWx1ZUdldHRlcj90LnZhbHVlR2V0dGVyKHIpOnIudmFsdWU7cmV0dXJuIE51bWJlcihuKT5OdW1iZXIoZS52YWx1ZSl9Om51bGwsSW5wdXRDb21wb25lbnQ6X2wsSW5wdXRDb21wb25lbnRQcm9wczp7dHlwZTpcIm51bWJlclwifX0se2xhYmVsOlwiPj1cIix2YWx1ZTpcIj49XCIsZ2V0QXBwbHlGaWx0ZXJGbjooZSx0KT0+ZS5jb2x1bW5GaWVsZCYmZS52YWx1ZSYmZS5vcGVyYXRvclZhbHVlP3I9Pntjb25zdCBuPXQudmFsdWVHZXR0ZXI/dC52YWx1ZUdldHRlcihyKTpyLnZhbHVlO3JldHVybiBOdW1iZXIobik+PU51bWJlcihlLnZhbHVlKX06bnVsbCxJbnB1dENvbXBvbmVudDpfbCxJbnB1dENvbXBvbmVudFByb3BzOnt0eXBlOlwibnVtYmVyXCJ9fSx7bGFiZWw6XCI8XCIsdmFsdWU6XCI8XCIsZ2V0QXBwbHlGaWx0ZXJGbjooZSx0KT0+ZS5jb2x1bW5GaWVsZCYmZS52YWx1ZSYmZS5vcGVyYXRvclZhbHVlP3I9Pntjb25zdCBuPXQudmFsdWVHZXR0ZXI/dC52YWx1ZUdldHRlcihyKTpyLnZhbHVlO3JldHVybiBOdW1iZXIobik8TnVtYmVyKGUudmFsdWUpfTpudWxsLElucHV0Q29tcG9uZW50Ol9sLElucHV0Q29tcG9uZW50UHJvcHM6e3R5cGU6XCJudW1iZXJcIn19LHtsYWJlbDpcIjw9XCIsdmFsdWU6XCI8PVwiLGdldEFwcGx5RmlsdGVyRm46KGUsdCk9PmUuY29sdW1uRmllbGQmJmUudmFsdWUmJmUub3BlcmF0b3JWYWx1ZT9yPT57Y29uc3Qgbj10LnZhbHVlR2V0dGVyP3QudmFsdWVHZXR0ZXIocik6ci52YWx1ZTtyZXR1cm4gTnVtYmVyKG4pPD1OdW1iZXIoZS52YWx1ZSl9Om51bGwsSW5wdXRDb21wb25lbnQ6X2wsSW5wdXRDb21wb25lbnRQcm9wczp7dHlwZTpcIm51bWJlclwifX1dLFZsPU9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxIbCkse3R5cGU6XCJudW1iZXJcIixhbGlnbjpcInJpZ2h0XCIsaGVhZGVyQWxpZ246XCJyaWdodFwiLHNvcnRDb21wYXJhdG9yOkRuLHZhbHVlRm9ybWF0dGVyOih7dmFsdWU6ZX0pPT5lJiZobihlKSYmZS50b0xvY2FsZVN0cmluZygpfHxlLGZpbHRlck9wZXJhdG9yczpObCgpfSksQmw9ZT0+W3t2YWx1ZTpcImlzXCIsZ2V0QXBwbHlGaWx0ZXJGbjooZSx0KT0+e2lmKCFlLmNvbHVtbkZpZWxkfHwhZS52YWx1ZXx8IWUub3BlcmF0b3JWYWx1ZSlyZXR1cm4gbnVsbDtjb25zdCByPW5ldyBEYXRlKGUudmFsdWUpLmdldFRpbWUoKTtyZXR1cm4gZT0+e2NvbnN0IG49dC52YWx1ZUdldHRlcj90LnZhbHVlR2V0dGVyKGUpOmUudmFsdWU7cmV0dXJuISFuJiYobiBpbnN0YW5jZW9mIERhdGU/bi5nZXRUaW1lKCk9PT1yOm5ldyBEYXRlKG4udG9TdHJpbmcoKSkuZ2V0VGltZSgpPT09cil9fSxJbnB1dENvbXBvbmVudDpfbCxJbnB1dENvbXBvbmVudFByb3BzOnt0eXBlOmU/XCJkYXRldGltZS1sb2NhbFwiOlwiZGF0ZVwifX0se3ZhbHVlOlwibm90XCIsZ2V0QXBwbHlGaWx0ZXJGbjooZSx0KT0+e2lmKCFlLmNvbHVtbkZpZWxkfHwhZS52YWx1ZXx8IWUub3BlcmF0b3JWYWx1ZSlyZXR1cm4gbnVsbDtjb25zdCByPW5ldyBEYXRlKGUudmFsdWUpLmdldFRpbWUoKTtyZXR1cm4gZT0+e2NvbnN0IG49dC52YWx1ZUdldHRlcj90LnZhbHVlR2V0dGVyKGUpOmUudmFsdWU7cmV0dXJuISFuJiYobiBpbnN0YW5jZW9mIERhdGU/bi5nZXRUaW1lKCkhPT1yOm5ldyBEYXRlKG4udG9TdHJpbmcoKSkuZ2V0VGltZSgpIT09cil9fSxJbnB1dENvbXBvbmVudDpfbCxJbnB1dENvbXBvbmVudFByb3BzOnt0eXBlOmU/XCJkYXRldGltZS1sb2NhbFwiOlwiZGF0ZVwifX0se3ZhbHVlOlwiYWZ0ZXJcIixnZXRBcHBseUZpbHRlckZuOihlLHQpPT57aWYoIWUuY29sdW1uRmllbGR8fCFlLnZhbHVlfHwhZS5vcGVyYXRvclZhbHVlKXJldHVybiBudWxsO2NvbnN0IHI9bmV3IERhdGUoZS52YWx1ZSkuZ2V0VGltZSgpO3JldHVybiBlPT57Y29uc3Qgbj10LnZhbHVlR2V0dGVyP3QudmFsdWVHZXR0ZXIoZSk6ZS52YWx1ZTtyZXR1cm4hIW4mJihuIGluc3RhbmNlb2YgRGF0ZT9uLmdldFRpbWUoKT5yOm5ldyBEYXRlKG4udG9TdHJpbmcoKSkuZ2V0VGltZSgpPnIpfX0sSW5wdXRDb21wb25lbnQ6X2wsSW5wdXRDb21wb25lbnRQcm9wczp7dHlwZTplP1wiZGF0ZXRpbWUtbG9jYWxcIjpcImRhdGVcIn19LHt2YWx1ZTpcIm9uT3JBZnRlclwiLGdldEFwcGx5RmlsdGVyRm46KGUsdCk9PntpZighZS5jb2x1bW5GaWVsZHx8IWUudmFsdWV8fCFlLm9wZXJhdG9yVmFsdWUpcmV0dXJuIG51bGw7Y29uc3Qgcj1uZXcgRGF0ZShlLnZhbHVlKS5nZXRUaW1lKCk7cmV0dXJuIGU9Pntjb25zdCBuPXQudmFsdWVHZXR0ZXI/dC52YWx1ZUdldHRlcihlKTplLnZhbHVlO3JldHVybiEhbiYmKG4gaW5zdGFuY2VvZiBEYXRlP24uZ2V0VGltZSgpPj1yOm5ldyBEYXRlKG4udG9TdHJpbmcoKSkuZ2V0VGltZSgpPj1yKX19LElucHV0Q29tcG9uZW50Ol9sLElucHV0Q29tcG9uZW50UHJvcHM6e3R5cGU6ZT9cImRhdGV0aW1lLWxvY2FsXCI6XCJkYXRlXCJ9fSx7dmFsdWU6XCJiZWZvcmVcIixnZXRBcHBseUZpbHRlckZuOihlLHQpPT57aWYoIWUuY29sdW1uRmllbGR8fCFlLnZhbHVlfHwhZS5vcGVyYXRvclZhbHVlKXJldHVybiBudWxsO2NvbnN0IHI9bmV3IERhdGUoZS52YWx1ZSkuZ2V0VGltZSgpO3JldHVybiBlPT57Y29uc3Qgbj10LnZhbHVlR2V0dGVyP3QudmFsdWVHZXR0ZXIoZSk6ZS52YWx1ZTtyZXR1cm4hIW4mJihuIGluc3RhbmNlb2YgRGF0ZT9uLmdldFRpbWUoKTxyOm5ldyBEYXRlKG4udG9TdHJpbmcoKSkuZ2V0VGltZSgpPHIpfX0sSW5wdXRDb21wb25lbnQ6X2wsSW5wdXRDb21wb25lbnRQcm9wczp7dHlwZTplP1wiZGF0ZXRpbWUtbG9jYWxcIjpcImRhdGVcIn19LHt2YWx1ZTpcIm9uT3JCZWZvcmVcIixnZXRBcHBseUZpbHRlckZuOihlLHQpPT57aWYoIWUuY29sdW1uRmllbGR8fCFlLnZhbHVlfHwhZS5vcGVyYXRvclZhbHVlKXJldHVybiBudWxsO2NvbnN0IHI9bmV3IERhdGUoZS52YWx1ZSkuZ2V0VGltZSgpO3JldHVybiBlPT57Y29uc3Qgbj10LnZhbHVlR2V0dGVyP3QudmFsdWVHZXR0ZXIoZSk6ZS52YWx1ZTtyZXR1cm4hIW4mJihuIGluc3RhbmNlb2YgRGF0ZT9uLmdldFRpbWUoKTw9cjpuZXcgRGF0ZShuLnRvU3RyaW5nKCkpLmdldFRpbWUoKTw9cil9fSxJbnB1dENvbXBvbmVudDpfbCxJbnB1dENvbXBvbmVudFByb3BzOnt0eXBlOmU/XCJkYXRldGltZS1sb2NhbFwiOlwiZGF0ZVwifX1dO2Z1bmN0aW9uICRsKHt2YWx1ZTplfSl7cmV0dXJuIG1uKGUpP2UudG9Mb2NhbGVEYXRlU3RyaW5nKCk6ZX1mdW5jdGlvbiBXbCh7dmFsdWU6ZX0pe3JldHVybiBtbihlKT9lLnRvTG9jYWxlU3RyaW5nKCk6ZX1jb25zdCBVbD1PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sSGwpLHt0eXBlOlwiZGF0ZVwiLHNvcnRDb21wYXJhdG9yOlBuLHZhbHVlRm9ybWF0dGVyOiRsLGZpbHRlck9wZXJhdG9yczpCbCgpfSksS2w9T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LEhsKSx7dHlwZTpcImRhdGVUaW1lXCIsc29ydENvbXBhcmF0b3I6UG4sdmFsdWVGb3JtYXR0ZXI6V2wsZmlsdGVyT3BlcmF0b3JzOkJsKCEwKX0pO2Z1bmN0aW9uIFpsKGUpe2NvbnN0e2lkOnQsdmFsdWU6cixlbGVtZW50Om4sZm9ybWF0dGVkVmFsdWU6bCxhcGk6byxmaWVsZDphLHJvdzppLGNvbERlZjpjLGNlbGxNb2RlOnUsZ2V0VmFsdWU6ZCxyb3dJbmRleDpwLGNvbEluZGV4Om0saXNFZGl0YWJsZTpmfT1lLGc9Z2woZSxbXCJpZFwiLFwidmFsdWVcIixcImVsZW1lbnRcIixcImZvcm1hdHRlZFZhbHVlXCIsXCJhcGlcIixcImZpZWxkXCIsXCJyb3dcIixcImNvbERlZlwiLFwiY2VsbE1vZGVcIixcImdldFZhbHVlXCIsXCJyb3dJbmRleFwiLFwiY29sSW5kZXhcIixcImlzRWRpdGFibGVcIl0pLGI9cj9vLmNvbXBvbmVudHMuQm9vbGVhbkNlbGxUcnVlSWNvbjpvLmNvbXBvbmVudHMuQm9vbGVhbkNlbGxGYWxzZUljb247cmV0dXJuIHMuY3JlYXRlRWxlbWVudChiLE9iamVjdC5hc3NpZ24oe2ZvbnRTaXplOlwic21hbGxcIixjbGFzc05hbWU6XCJNdWlEYXRhR3JpZC1ib29sZWFuQ2VsbFwiLHRpdGxlQWNjZXNzOm8uZ2V0TG9jYWxlVGV4dChyP1wiYm9vbGVhbkNlbGxUcnVlTGFiZWxcIjpcImJvb2xlYW5DZWxsRmFsc2VMYWJlbFwiKSxcImRhdGEtdmFsdWVcIjpCb29sZWFuKHIpfSxnKSl9ZnVuY3Rpb24gWGwoZSl7Y29uc3R7aWQ6dCx2YWx1ZTpyLGVsZW1lbnQ6bixmb3JtYXR0ZWRWYWx1ZTpsLGFwaTpvLGZpZWxkOmEscm93OmksY29sRGVmOmMsY2VsbE1vZGU6dSxnZXRWYWx1ZTpkLHJvd0luZGV4OnAsY29sSW5kZXg6bSxpc0VkaXRhYmxlOmYsY2xhc3NOYW1lOmd9PWUsYj1nbChlLFtcImlkXCIsXCJ2YWx1ZVwiLFwiZWxlbWVudFwiLFwiZm9ybWF0dGVkVmFsdWVcIixcImFwaVwiLFwiZmllbGRcIixcInJvd1wiLFwiY29sRGVmXCIsXCJjZWxsTW9kZVwiLFwiZ2V0VmFsdWVcIixcInJvd0luZGV4XCIsXCJjb2xJbmRleFwiLFwiaXNFZGl0YWJsZVwiLFwiY2xhc3NOYW1lXCJdKSxbQyx2XT1zLnVzZVN0YXRlKHIpLHc9cy51c2VDYWxsYmFjaygoZT0+e2NvbnN0IHI9ZS50YXJnZXQuY2hlY2tlZCxuPXt2YWx1ZTpyfTt2KHIpLG8ucHVibGlzaEV2ZW50KFwiY2VsbEVkaXRQcm9wc0NoYW5nZVwiLHtpZDp0LGZpZWxkOmEscHJvcHM6bn0sZSl9KSxbbyxhLHRdKTtzLnVzZUVmZmVjdCgoKCk9Pnt2KHIpfSksW3JdKTtjb25zdCBPPWBNdWlEYXRhR3JpZC1jZWxsLSR7dH0tJHthfWA7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsT2JqZWN0LmFzc2lnbih7aHRtbEZvcjpPLGNsYXNzTmFtZTpLbihcIk11aURhdGFHcmlkLWVkaXRDZWxsQm9vbGVhblwiLGcpfSxiKSxzLmNyZWF0ZUVsZW1lbnQoaCx7YXV0b0ZvY3VzOiEwLGlkOk8sY2hlY2tlZDpCb29sZWFuKEMpLG9uQ2hhbmdlOncsc2l6ZTpcInNtYWxsXCJ9KSl9ZnVuY3Rpb24gcWwoZSl7Y29uc3R7aXRlbTp0LGFwcGx5VmFsdWU6cixhcGlSZWY6bn09ZSxsPWdsKGUsW1wiaXRlbVwiLFwiYXBwbHlWYWx1ZVwiLFwiYXBpUmVmXCJdKSxbbyxhXT1zLnVzZVN0YXRlKHQudmFsdWV8fFwiXCIpLGk9cy51c2VDYWxsYmFjaygoZT0+e2NvbnN0IG49ZS50YXJnZXQudmFsdWU7YShuKSxyKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7dmFsdWU6bn0pKX0pLFtyLHRdKTtyZXR1cm4gcy51c2VFZmZlY3QoKCgpPT57YSh0LnZhbHVlfHxcIlwiKX0pLFt0LnZhbHVlXSkscy5jcmVhdGVFbGVtZW50KGIsT2JqZWN0LmFzc2lnbih7bGFiZWw6bi5jdXJyZW50LmdldExvY2FsZVRleHQoXCJmaWx0ZXJQYW5lbElucHV0TGFiZWxcIiksdmFsdWU6byxvbkNoYW5nZTppLHZhcmlhbnQ6XCJzdGFuZGFyZFwiLHNlbGVjdDohMCxTZWxlY3RQcm9wczp7bmF0aXZlOiEwfSxJbnB1dExhYmVsUHJvcHM6e3NocmluazohMH19LGwpLHMuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLHt2YWx1ZTpcIlwifSxuLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcImZpbHRlclZhbHVlQW55XCIpKSxzLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIix7dmFsdWU6XCJ0cnVlXCJ9LG4uY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiZmlsdGVyVmFsdWVUcnVlXCIpKSxzLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIix7dmFsdWU6XCJmYWxzZVwifSxuLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcImZpbHRlclZhbHVlRmFsc2VcIikpKX1jb25zdCBZbD1PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sSGwpLHt0eXBlOlwiYm9vbGVhblwiLGFsaWduOlwiY2VudGVyXCIsaGVhZGVyQWxpZ246XCJjZW50ZXJcIixyZW5kZXJDZWxsOmU9PnMuY3JlYXRlRWxlbWVudChabCxPYmplY3QuYXNzaWduKHt9LGUpKSxyZW5kZXJFZGl0Q2VsbDplPT5zLmNyZWF0ZUVsZW1lbnQoWGwsT2JqZWN0LmFzc2lnbih7fSxlKSksc29ydENvbXBhcmF0b3I6RG4sZmlsdGVyT3BlcmF0b3JzOlt7dmFsdWU6XCJpc1wiLGdldEFwcGx5RmlsdGVyRm46KGUsdCk9PntpZighZS5jb2x1bW5GaWVsZHx8IWUudmFsdWV8fCFlLm9wZXJhdG9yVmFsdWUpcmV0dXJuIG51bGw7Y29uc3Qgcj1cInRydWVcIj09PWUudmFsdWU7cmV0dXJuIGU9Pntjb25zdCBuPXQudmFsdWVHZXR0ZXI/dC52YWx1ZUdldHRlcihlKTplLnZhbHVlO3JldHVybiBCb29sZWFuKG4pPT09cn19LElucHV0Q29tcG9uZW50OnFsfV19KSxKbD1cIl9fZGVmYXVsdF9fXCIsUWw9KCk9Pntjb25zdCBlPXtzdHJpbmc6SGwsbnVtYmVyOlZsLGRhdGU6VWwsZGF0ZVRpbWU6S2wsYm9vbGVhbjpZbH07cmV0dXJuIGUuX19kZWZhdWx0X189SGwsZX07ZnVuY3Rpb24gZW8oZSx0KXtjb25zdCByPU9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx0KSxuPXt9O3JldHVybiBPYmplY3QuZW50cmllcyhyKS5mb3JFYWNoKCgoW2UsdF0pPT57dD1PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sclt0LmV4dGVuZFR5cGV8fFwiX19kZWZhdWx0X19cIl0pLHQpLG5bZV09dH0pKSxufWZ1bmN0aW9uIHRvKGUpe2NvbnN0IHQ9T2JqZWN0LmFzc2lnbih7fSxlKTtyZXR1cm4gT2JqZWN0LmtleXMoZSkuZm9yRWFjaCgocj0+e2UuaGFzT3duUHJvcGVydHkocikmJnZvaWQgMD09PWVbcl0mJmRlbGV0ZSB0W3JdfSkpLHR9ZnVuY3Rpb24gcm8oZSx0KXt0PXRvKHQpO3JldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSksdCl9Y29uc3Qgbm89KGUsdCk9Pk9uKCk/e2NvbXBvbmVudHM6T2JqZWN0LmFzc2lnbih7TXVpRGF0YUdyaWQ6e2RlZmF1bHRQcm9wczp7bG9jYWxlVGV4dDplfX19LG51bGw9PXQ/dm9pZCAwOnQuY29tcG9uZW50cyl9Ontwcm9wczpPYmplY3QuYXNzaWduKHtNdWlEYXRhR3JpZDp7bG9jYWxlVGV4dDplfX0sbnVsbD09dD92b2lkIDA6dC5wcm9wcyl9O2Z1bmN0aW9uIGxvKGUpe3JldHVybiB0KGUpfWNvbnN0IG9vPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/cy51c2VMYXlvdXRFZmZlY3Q6cy51c2VFZmZlY3Q7ZnVuY3Rpb24gYW8oe3Byb3BzOmUsbmFtZTp0fSl7Y29uc3Qgcj1PYmplY3QuYXNzaWduKHt9LGUpLG49ZCgpLGw9Qyh7dGhlbWU6bixuYW1lOnQscHJvcHM6cn0pLG89bC50aGVtZXx8bixhPVwicnRsXCI9PT1vLmRpcmVjdGlvbjtyZXR1cm4gT2JqZWN0LmFzc2lnbih7dGhlbWU6byxpc1J0bDphfSxsKX1mdW5jdGlvbiBpbyhlKXtjb25zdCB0PWUuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LnN0eWxlLndpZHRoPVwiOTlweFwiLHQuc3R5bGUuaGVpZ2h0PVwiOTlweFwiLHQuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLHQuc3R5bGUudG9wPVwiLTk5OTlweFwiLHQuc3R5bGUub3ZlcmZsb3c9XCJzY3JvbGxcIixlLmJvZHkuYXBwZW5kQ2hpbGQodCk7Y29uc3Qgcj10Lm9mZnNldFdpZHRoLXQuY2xpZW50V2lkdGg7cmV0dXJuIGUuYm9keS5yZW1vdmVDaGlsZCh0KSxyfWZ1bmN0aW9uIHNvKGUsdD1cImNzdlwiLHI9ZG9jdW1lbnQudGl0bGUpe2NvbnN0IG49YCR7cn0uJHt0fWA7aWYoXCJkb3dubG9hZFwiaW4gSFRNTEFuY2hvckVsZW1lbnQucHJvdG90eXBlKXtjb25zdCB0PVVSTC5jcmVhdGVPYmplY3RVUkwoZSkscj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtyZXR1cm4gci5ocmVmPXQsci5kb3dubG9hZD1uLHIuY2xpY2soKSx2b2lkIHNldFRpbWVvdXQoKCgpPT57VVJMLnJldm9rZU9iamVjdFVSTCh0KX0pKX10aHJvdyBuZXcgRXJyb3IoXCJleHBvcnRBcyBub3Qgc3VwcG9ydGVkXCIpfWNvbnN0IGNvPXMuY3JlYXRlQ29udGV4dCh2b2lkIDApLHVvPXMubWVtbygoZT0+e2NvbnN0e2FsaWduOnQsY2hpbGRyZW46bixjb2xJbmRleDpsLGNlbGxNb2RlOm8sY3NzQ2xhc3M6YSxmaWVsZDppLGZvcm1hdHRlZFZhbHVlOmMsaGFzRm9jdXM6dSxoZWlnaHQ6ZCxpc0VkaXRhYmxlOnAscm93SW5kZXg6bSxyb3dJZDpmLHNob3dSaWdodEJvcmRlcjpnLHRhYkluZGV4OmIsdmFsdWU6aCx3aWR0aDpDfT1lLHY9bnVsbD09Yz9oOmMsdz1zLnVzZVJlZihudWxsKSxPPXMudXNlQ29udGV4dChjbykseT1LbihcIk11aURhdGFHcmlkLWNlbGxcIixhLFwiTXVpRGF0YUdyaWQtY2VsbFwiK3IodCkse1wiTXVpRGF0YUdyaWQtd2l0aEJvcmRlclwiOmcsXCJNdWlEYXRhR3JpZC1jZWxsRWRpdGFibGVcIjpwfSksRT1zLnVzZUNhbGxiYWNrKChlPT50PT57aWYodC5yZWxhdGVkVGFyZ2V0JiZ0LmN1cnJlbnRUYXJnZXQuY29udGFpbnModC5yZWxhdGVkVGFyZ2V0KSlyZXR1cm47Y29uc3Qgcj1PLmN1cnJlbnQuZ2V0Q2VsbFBhcmFtcyhmLGl8fFwiXCIpO08uY3VycmVudC5wdWJsaXNoRXZlbnQoZSxyLHQpfSksW08saSxmXSksUz1zLnVzZUNhbGxiYWNrKChlPT50PT57Y29uc3Qgcj1PLmN1cnJlbnQuZ2V0Q2VsbFBhcmFtcyhmLGl8fFwiXCIpO08uY3VycmVudC5wdWJsaXNoRXZlbnQoZSxyLHQpLChudWxsPT1yP3ZvaWQgMDpyLmNvbERlZi5kaXNhYmxlQ2xpY2tFdmVudEJ1YmJsaW5nKSYmdC5zdG9wUHJvcGFnYXRpb24oKX0pLFtPLGksZl0pLHg9cy51c2VDYWxsYmFjaygoZT0+dD0+e3QuY3VycmVudFRhcmdldC5jb250YWlucyh0LnRhcmdldCkmJk8uY3VycmVudC5wdWJsaXNoRXZlbnQoZSxPLmN1cnJlbnQuZ2V0Q2VsbFBhcmFtcyhmLGl8fFwiXCIpLHQpfSksW08saSxmXSksTT1zLnVzZU1lbW8oKCgpPT4oe29uQ2xpY2s6UyhcImNlbGxDbGlja1wiKSxvbkRvdWJsZUNsaWNrOngoXCJjZWxsRG91YmxlQ2xpY2tcIiksb25Nb3VzZURvd246eChcImNlbGxNb3VzZURvd25cIiksb25Nb3VzZU92ZXI6eChcImNlbGxPdmVyXCIpLG9uTW91c2VPdXQ6eChcImNlbGxPdXRcIiksb25Nb3VzZUVudGVyOngoXCJjZWxsRW50ZXJcIiksb25Nb3VzZUxlYXZlOngoXCJjZWxsTGVhdmVcIiksb25LZXlEb3duOngoXCJjZWxsS2V5ZG93blwiKSxvbkJsdXI6RShcImNlbGxCbHVyXCIpLG9uRm9jdXM6eChcImNlbGxDZWxsRm9jdXNcIiksb25EcmFnU3RhcnQ6eChcImNlbGxEcmFnU3RhcnRcIiksb25EcmFnRW50ZXI6eChcImNlbGxEcmFnRW50ZXJcIiksb25EcmFnT3Zlcjp4KFwiY2VsbERyYWdPdmVyXCIpfSkpLFt4LEUsU10pLEk9e21pbldpZHRoOkMsbWF4V2lkdGg6QyxsaW5lSGVpZ2h0OmQtMStcInB4XCIsbWluSGVpZ2h0OmQsbWF4SGVpZ2h0OmR9O3JldHVybiBzLnVzZUxheW91dEVmZmVjdCgoKCk9PntpZih1JiZ3LmN1cnJlbnQmJighZG9jdW1lbnQuYWN0aXZlRWxlbWVudHx8IXcuY3VycmVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkpe2NvbnN0IGU9dy5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0YWJpbmRleD1cIjBcIl0nKTtlP2UuZm9jdXMoKTp3LmN1cnJlbnQuZm9jdXMoKX19KSkscy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsT2JqZWN0LmFzc2lnbih7cmVmOncsY2xhc3NOYW1lOnkscm9sZTpcImNlbGxcIixcImRhdGEtdmFsdWVcIjpoLFwiZGF0YS1maWVsZFwiOmksXCJkYXRhLXJvd2luZGV4XCI6bSxcImRhdGEtZWRpdGFibGVcIjpwLFwiZGF0YS1tb2RlXCI6byxcImFyaWEtY29saW5kZXhcIjpsLHN0eWxlOkksdGFiSW5kZXg6Yn0sTSksbnx8KG51bGw9PXY/dm9pZCAwOnYudG9TdHJpbmcoKSkpfSkpO3VvLmRpc3BsYXlOYW1lPVwiR3JpZENlbGxcIjtjb25zdCBwbz1zLm1lbW8oKGZ1bmN0aW9uKHt3aWR0aDplLGhlaWdodDp0fSl7cmV0dXJuIGUmJnQ/cy5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnttaW5XaWR0aDplLG1heFdpZHRoOmUsbGluZUhlaWdodDp0LTErXCJweFwiLG1pbkhlaWdodDp0LG1heEhlaWdodDp0fSxjbGFzc05hbWU6XCJNdWlEYXRhR3JpZC1jZWxsXCJ9KTpudWxsfSkpLG1vPWU9PmUuZWRpdFJvd3MsZm89ZT0+ZS5kZW5zaXR5LGdvPXYoZm8sKGU9PmUudmFsdWUpKSxibz12KGZvLChlPT5lLnJvd0hlaWdodCkpLGhvPXYoZm8sKGU9PmUuaGVhZGVySGVpZ2h0KSksQ289RW4oKSYmbnVsbCE9d2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiREVCVUdcIiksdm89KCk9Pnt9LHdvPXtkZWJ1Zzp2byxpbmZvOnZvLHdhcm46dm8sZXJyb3I6dm99LE9vPVtcImRlYnVnXCIsXCJpbmZvXCIsXCJ3YXJuXCIsXCJlcnJvclwiXTtmdW5jdGlvbiB5byhlLHQscj1jb25zb2xlKXtjb25zdCBuPU9vLmluZGV4T2YodCk7aWYoLTE9PT1uKXRocm93IG5ldyBFcnJvcihgTWF0ZXJpYWwtVUk6IExvZyBsZXZlbCAke3R9IG5vdCByZWNvZ25pemVkLmApO3JldHVybiBPby5yZWR1Y2UoKCh0LGwsbyk9Pih0W2xdPW8+PW4/KC4uLnQpPT57Y29uc3RbbiwuLi5vXT10O3JbbF0oYE1hdGVyaWFsLVVJOiAke2V9IC0gJHtufWAsLi4ubyl9OnZvLHQpKSx7fSl9Y29uc3QgRW89ZT0+dD0+eW8odCxlKTtsZXQgU287ZnVuY3Rpb24geG8oZSx0PShcInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WP1wiZXJyb3JcIjpcIndhcm5cIikpe1NvPUNvP0VvKFwiZGVidWdcIik6ZT9DbihlKT9lOnQ/cj0+eW8ocix0LnRvU3RyaW5nKCksZSk6bnVsbDp0P0VvKHQudG9TdHJpbmcoKSk6bnVsbH1mdW5jdGlvbiBNbyhlKXtjb25zdHtjdXJyZW50OnR9PXMudXNlUmVmKFNvP1NvKGUpOndvKTtyZXR1cm4gdH1mdW5jdGlvbiBJbyhlLHQscil7Y29uc3Qgbj1NbyhcInVzZUdyaWRBcGlNZXRob2RcIiksbD1zLnVzZVJlZih0KSxbb109cy51c2VTdGF0ZShPYmplY3Qua2V5cyh0KSk7cy51c2VFZmZlY3QoKCgpPT57bC5jdXJyZW50PXR9KSxbdF0pLHMudXNlRWZmZWN0KCgoKT0+e28uZm9yRWFjaCgodD0+e2UuY3VycmVudC5oYXNPd25Qcm9wZXJ0eSh0KXx8KG4uZGVidWcoYEFkZGluZyAke3J9LiR7dH0gdG8gYXBpUmVmYCksZS5jdXJyZW50W3RdPSguLi5lKT0+bC5jdXJyZW50W3RdKC4uLmUpKX0pKX0pLFtvLHIsZSxuXSl9Y29uc3Qga289KCk9Pih7YWxsOltdLGxvb2t1cDp7fX0pLERvPXtyb290R3JpZExhYmVsOlwiZ3JpZFwiLG5vUm93c0xhYmVsOlwiTm8gcm93c1wiLG5vUmVzdWx0c092ZXJsYXlMYWJlbDpcIk5vIHJlc3VsdHMgZm91bmQuXCIsZXJyb3JPdmVybGF5RGVmYXVsdExhYmVsOlwiQW4gZXJyb3Igb2NjdXJyZWQuXCIsdG9vbGJhckRlbnNpdHk6XCJEZW5zaXR5XCIsdG9vbGJhckRlbnNpdHlMYWJlbDpcIkRlbnNpdHlcIix0b29sYmFyRGVuc2l0eUNvbXBhY3Q6XCJDb21wYWN0XCIsdG9vbGJhckRlbnNpdHlTdGFuZGFyZDpcIlN0YW5kYXJkXCIsdG9vbGJhckRlbnNpdHlDb21mb3J0YWJsZTpcIkNvbWZvcnRhYmxlXCIsdG9vbGJhckNvbHVtbnM6XCJDb2x1bW5zXCIsdG9vbGJhckNvbHVtbnNMYWJlbDpcIlNlbGVjdCBjb2x1bW5zXCIsdG9vbGJhckZpbHRlcnM6XCJGaWx0ZXJzXCIsdG9vbGJhckZpbHRlcnNMYWJlbDpcIlNob3cgZmlsdGVyc1wiLHRvb2xiYXJGaWx0ZXJzVG9vbHRpcEhpZGU6XCJIaWRlIGZpbHRlcnNcIix0b29sYmFyRmlsdGVyc1Rvb2x0aXBTaG93OlwiU2hvdyBmaWx0ZXJzXCIsdG9vbGJhckZpbHRlcnNUb29sdGlwQWN0aXZlOmU9PjEhPT1lP2UrXCIgYWN0aXZlIGZpbHRlcnNcIjplK1wiIGFjdGl2ZSBmaWx0ZXJcIix0b29sYmFyRXhwb3J0OlwiRXhwb3J0XCIsdG9vbGJhckV4cG9ydExhYmVsOlwiRXhwb3J0XCIsdG9vbGJhckV4cG9ydENTVjpcIkRvd25sb2FkIGFzIENTVlwiLGNvbHVtbnNQYW5lbFRleHRGaWVsZExhYmVsOlwiRmluZCBjb2x1bW5cIixjb2x1bW5zUGFuZWxUZXh0RmllbGRQbGFjZWhvbGRlcjpcIkNvbHVtbiB0aXRsZVwiLGNvbHVtbnNQYW5lbERyYWdJY29uTGFiZWw6XCJSZW9yZGVyIGNvbHVtblwiLGNvbHVtbnNQYW5lbFNob3dBbGxCdXR0b246XCJTaG93IGFsbFwiLGNvbHVtbnNQYW5lbEhpZGVBbGxCdXR0b246XCJIaWRlIGFsbFwiLGZpbHRlclBhbmVsQWRkRmlsdGVyOlwiQWRkIGZpbHRlclwiLGZpbHRlclBhbmVsRGVsZXRlSWNvbkxhYmVsOlwiRGVsZXRlXCIsZmlsdGVyUGFuZWxPcGVyYXRvcnM6XCJPcGVyYXRvcnNcIixmaWx0ZXJQYW5lbE9wZXJhdG9yQW5kOlwiQW5kXCIsZmlsdGVyUGFuZWxPcGVyYXRvck9yOlwiT3JcIixmaWx0ZXJQYW5lbENvbHVtbnM6XCJDb2x1bW5zXCIsZmlsdGVyUGFuZWxJbnB1dExhYmVsOlwiVmFsdWVcIixmaWx0ZXJQYW5lbElucHV0UGxhY2Vob2xkZXI6XCJGaWx0ZXIgdmFsdWVcIixmaWx0ZXJPcGVyYXRvckNvbnRhaW5zOlwiY29udGFpbnNcIixmaWx0ZXJPcGVyYXRvckVxdWFsczpcImVxdWFsc1wiLGZpbHRlck9wZXJhdG9yU3RhcnRzV2l0aDpcInN0YXJ0cyB3aXRoXCIsZmlsdGVyT3BlcmF0b3JFbmRzV2l0aDpcImVuZHMgd2l0aFwiLGZpbHRlck9wZXJhdG9ySXM6XCJpc1wiLGZpbHRlck9wZXJhdG9yTm90OlwiaXMgbm90XCIsZmlsdGVyT3BlcmF0b3JBZnRlcjpcImlzIGFmdGVyXCIsZmlsdGVyT3BlcmF0b3JPbk9yQWZ0ZXI6XCJpcyBvbiBvciBhZnRlclwiLGZpbHRlck9wZXJhdG9yQmVmb3JlOlwiaXMgYmVmb3JlXCIsZmlsdGVyT3BlcmF0b3JPbk9yQmVmb3JlOlwiaXMgb24gb3IgYmVmb3JlXCIsZmlsdGVyVmFsdWVBbnk6XCJhbnlcIixmaWx0ZXJWYWx1ZVRydWU6XCJ0cnVlXCIsZmlsdGVyVmFsdWVGYWxzZTpcImZhbHNlXCIsY29sdW1uTWVudUxhYmVsOlwiTWVudVwiLGNvbHVtbk1lbnVTaG93Q29sdW1uczpcIlNob3cgY29sdW1uc1wiLGNvbHVtbk1lbnVGaWx0ZXI6XCJGaWx0ZXJcIixjb2x1bW5NZW51SGlkZUNvbHVtbjpcIkhpZGVcIixjb2x1bW5NZW51VW5zb3J0OlwiVW5zb3J0XCIsY29sdW1uTWVudVNvcnRBc2M6XCJTb3J0IGJ5IEFTQ1wiLGNvbHVtbk1lbnVTb3J0RGVzYzpcIlNvcnQgYnkgREVTQ1wiLGNvbHVtbkhlYWRlckZpbHRlcnNUb29sdGlwQWN0aXZlOmU9PjEhPT1lP2UrXCIgYWN0aXZlIGZpbHRlcnNcIjplK1wiIGFjdGl2ZSBmaWx0ZXJcIixjb2x1bW5IZWFkZXJGaWx0ZXJzTGFiZWw6XCJTaG93IGZpbHRlcnNcIixjb2x1bW5IZWFkZXJTb3J0SWNvbkxhYmVsOlwiU29ydFwiLGZvb3RlclJvd1NlbGVjdGVkOmU9PjEhPT1lP2UudG9Mb2NhbGVTdHJpbmcoKStcIiByb3dzIHNlbGVjdGVkXCI6ZS50b0xvY2FsZVN0cmluZygpK1wiIHJvdyBzZWxlY3RlZFwiLGZvb3RlclRvdGFsUm93czpcIlRvdGFsIFJvd3M6XCIsY2hlY2tib3hTZWxlY3Rpb25IZWFkZXJOYW1lOlwiQ2hlY2tib3ggc2VsZWN0aW9uXCIsYm9vbGVhbkNlbGxUcnVlTGFiZWw6XCJ0cnVlXCIsYm9vbGVhbkNlbGxGYWxzZUxhYmVsOlwiZmFsc2VcIn07dmFyIFBvOyFmdW5jdGlvbihlKXtlLkNvbXBhY3Q9XCJjb21wYWN0XCIsZS5TdGFuZGFyZD1cInN0YW5kYXJkXCIsZS5Db21mb3J0YWJsZT1cImNvbWZvcnRhYmxlXCJ9KFBvfHwoUG89e30pKTtjb25zdCBSbz17Y2xpZW50OlwiY2xpZW50XCIsc2VydmVyOlwic2VydmVyXCJ9LEZvPXtjb2x1bW5CdWZmZXI6Mixjb2x1bW5UeXBlczpRbCgpLGRlbnNpdHk6UG8uU3RhbmRhcmQsZmlsdGVyTW9kZTpSby5jbGllbnQsaGVhZGVySGVpZ2h0OjU2LGxvY2FsZVRleHQ6RG8scGFnZVNpemU6MTAwLHBhZ2luYXRpb25Nb2RlOlJvLmNsaWVudCxyb3dIZWlnaHQ6NTIscm93c1BlclBhZ2VPcHRpb25zOlsyNSw1MCwxMDBdLHNjcm9sbEVuZFRocmVzaG9sZDo4MCxzb3J0aW5nTW9kZTpSby5jbGllbnQsc29ydGluZ09yZGVyOltcImFzY1wiLFwiZGVzY1wiLG51bGxdfTtmdW5jdGlvbiBMbygpe3JldHVybntkcmFnQ29sOlwiXCJ9fWZ1bmN0aW9uIGpvKCl7cmV0dXJue3Jlc2l6aW5nQ29sdW1uRmllbGQ6XCJcIn19dmFyIHpvOyFmdW5jdGlvbihlKXtlLkFuZD1cImFuZFwiLGUuT3I9XCJvclwifSh6b3x8KHpvPXt9KSk7Y29uc3QgVG89KCk9Pih7aXRlbXM6W10sbGlua09wZXJhdG9yOnpvLkFuZH0pLEFvPSgpPT4oe3Zpc2libGVSb3dzTG9va3VwOnt9fSk7ZnVuY3Rpb24gX28oZSl7cmV0dXJue3R5cGU6XCJTRVRfUEFHRV9BQ1RJT05cIixwYXlsb2FkOntwYWdlOmV9fX1mdW5jdGlvbiBHbyhlKXtyZXR1cm57dHlwZTpcIlNFVF9QQUdFU0laRV9BQ1RJT05cIixwYXlsb2FkOntwYWdlU2l6ZTplfX19ZnVuY3Rpb24gSG8oZSl7cmV0dXJue3R5cGU6XCJTRVRfUEFHSU5BVElPTl9NT0RFX0FDVElPTlwiLHBheWxvYWQ6ZX19ZnVuY3Rpb24gTm8oZSl7cmV0dXJue3R5cGU6XCJTRVRfUk9XQ09VTlRfQUNUSU9OXCIscGF5bG9hZDplfX1jb25zdCBWbz0oZSx0KT0+ZSYmdD4wP01hdGguY2VpbCh0L2UpOjEsQm89KGUse3BhZ2U6dH0pPT5lLnBhZ2UhPT10P09iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7cGFnZTp0fSk6ZSwkbz0oZSx0KT0+e2NvbnN0e3BhZ2VTaXplOnJ9PXQ7aWYoZS5wYWdlU2l6ZT09PXIpcmV0dXJuIGU7cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7cGFnZVNpemU6cixwYWdlQ291bnQ6Vm8ocixlLnJvd0NvdW50KX0pfSxXbz0oZSx0KT0+e2NvbnN0e3RvdGFsUm93Q291bnQ6cn09dDtpZihlLnJvd0NvdW50IT09cil7Y29uc3QgdD1WbyhlLnBhZ2VTaXplLHIpO3JldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse3BhZ2VDb3VudDp0LHJvd0NvdW50OnIscGFnZTplLnBhZ2U+dD90OmUucGFnZX0pfXJldHVybiBlfSxVbz17cGFnZTowLHBhZ2VDb3VudDowLHBhZ2VTaXplOjAscGFnaW5hdGlvbk1vZGU6XCJjbGllbnRcIixyb3dDb3VudDowfSxLbz0oZSx0KT0+e3N3aXRjaCh0LnR5cGUpe2Nhc2VcIlNFVF9QQUdFX0FDVElPTlwiOnJldHVybiBCbyhlLHQucGF5bG9hZCk7Y2FzZVwiU0VUX1BBR0VTSVpFX0FDVElPTlwiOnJldHVybiAkbyhlLHQucGF5bG9hZCk7Y2FzZVwiU0VUX1BBR0lOQVRJT05fTU9ERV9BQ1RJT05cIjpyZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtwYWdpbmF0aW9uTW9kZTp0LnBheWxvYWQucGFnaW5hdGlvbk1vZGV9KTtjYXNlXCJTRVRfUk9XQ09VTlRfQUNUSU9OXCI6cmV0dXJuIFdvKGUsdC5wYXlsb2FkKTtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihcIk1hdGVyaWFsLVVJOiBBY3Rpb24gbm90IGZvdW5kIC0gXCIrSlNPTi5zdHJpbmdpZnkodCkpfX0sWm89KCk9Pih7aWRSb3dzTG9va3VwOnt9LGFsbFJvd3M6W10sdG90YWxSb3dDb3VudDowfSk7ZnVuY3Rpb24gWG8oKXtyZXR1cm57c29ydGVkUm93czpbXSxzb3J0TW9kZWw6W119fWNvbnN0IHFvPSgpPT4oe3JlYWxTY3JvbGw6e2xlZnQ6MCx0b3A6MH0scmVuZGVyQ29udGV4dDpudWxsLHJlbmRlcmluZ1pvbmVTY3JvbGw6e2xlZnQ6MCx0b3A6MH0sdmlydHVhbFBhZ2U6MCx2aXJ0dWFsUm93c0NvdW50OjAscmVuZGVyZWRTaXplczpudWxsfSksWW89KCk9Pih7cm93czp7aWRSb3dzTG9va3VwOnt9LGFsbFJvd3M6W10sdG90YWxSb3dDb3VudDowfSxlZGl0Um93czp7fSxwYWdpbmF0aW9uOlVvLG9wdGlvbnM6Rm8saXNTY3JvbGxpbmc6ITEsY29sdW1uczp7YWxsOltdLGxvb2t1cDp7fX0sY29sdW1uUmVvcmRlcjp7ZHJhZ0NvbDpcIlwifSxjb2x1bW5SZXNpemU6e3Jlc2l6aW5nQ29sdW1uRmllbGQ6XCJcIn0scmVuZGVyaW5nOntyZWFsU2Nyb2xsOntsZWZ0OjAsdG9wOjB9LHJlbmRlckNvbnRleHQ6bnVsbCxyZW5kZXJpbmdab25lU2Nyb2xsOntsZWZ0OjAsdG9wOjB9LHZpcnR1YWxQYWdlOjAsdmlydHVhbFJvd3NDb3VudDowLHJlbmRlcmVkU2l6ZXM6bnVsbH0sY29udGFpbmVyU2l6ZXM6bnVsbCxzY3JvbGxCYXI6e2hhc1Njcm9sbFg6ITEsaGFzU2Nyb2xsWTohMSxzY3JvbGxCYXJTaXplOnt4OjAseTowfX0sdmlld3BvcnRTaXplczp7d2lkdGg6MCxoZWlnaHQ6MX0sc29ydGluZzp7c29ydGVkUm93czpbXSxzb3J0TW9kZWw6W119LGtleWJvYXJkOntpc011bHRpcGxlS2V5UHJlc3NlZDohMX0sZm9jdXM6e2NlbGw6bnVsbCxjb2x1bW5IZWFkZXI6bnVsbH0sdGFiSW5kZXg6e2NlbGw6bnVsbCxjb2x1bW5IZWFkZXI6bnVsbH0sc2VsZWN0aW9uOnt9LGZpbHRlcjpUbygpLGNvbHVtbk1lbnU6e29wZW46ITF9LHByZWZlcmVuY2VQYW5lbDp7b3BlbjohMX0sdmlzaWJsZVJvd3M6e3Zpc2libGVSb3dzTG9va3VwOnt9fSxkZW5zaXR5Ont2YWx1ZTpGby5kZW5zaXR5LHJvd0hlaWdodDpGby5yb3dIZWlnaHQsaGVhZGVySGVpZ2h0OkZvLmhlYWRlckhlaWdodH19KSxKbz1lPT57Y29uc3QgdD1NbyhcInVzZUdyaWRBcGlcIiksWyxyXT1zLnVzZVN0YXRlKCk7ZS5jdXJyZW50LmlzSW5pdGlhbGlzZWR8fGUuY3VycmVudC5zdGF0ZXx8KHQuaW5mbyhcIkluaXRpYWxpc2luZyBzdGF0ZS5cIiksZS5jdXJyZW50LnN0YXRlPVlvKCksZS5jdXJyZW50LmZvcmNlVXBkYXRlPXIpO2NvbnN0IG49cy51c2VDYWxsYmFjaygodD0+dD9lLmN1cnJlbnQuc3RhdGVbdF06ZS5jdXJyZW50LnN0YXRlKSxbZV0pLGw9cy51c2VDYWxsYmFjaygodD0+e2xldCBuO249Q24odCk/dChlLmN1cnJlbnQuc3RhdGUpOnQsZS5jdXJyZW50LnN0YXRlPW4scigoKCk9Pm4pKTtjb25zdCBsPXthcGk6ZS5jdXJyZW50LHN0YXRlOm59O2UuY3VycmVudC5wdWJsaXNoRXZlbnQoXCJzdGF0ZUNoYW5nZVwiLGwpfSksW2VdKTtyZXR1cm4gSW8oZSx7Z2V0U3RhdGU6bixzZXRTdGF0ZTpsfSxcIkdyaWRTdGF0ZUFwaVwiKSxlLmN1cnJlbnR9LFFvPWU9PntKbyhlKTtjb25zdCB0PXMudXNlQ2FsbGJhY2soKCgpPT5lLmN1cnJlbnQuZm9yY2VVcGRhdGUoKCgpPT5lLmN1cnJlbnQuc3RhdGUpKSksW2VdKSxyPXMudXNlQ2FsbGJhY2soKHQ9Pntjb25zdCByPXQoZS5jdXJyZW50LnN0YXRlKSxuPWUuY3VycmVudC5zdGF0ZSE9PXI7aWYoZS5jdXJyZW50LnN0YXRlPXIsbiYmZS5jdXJyZW50LnB1Ymxpc2hFdmVudCl7Y29uc3QgdD17YXBpOmUuY3VycmVudCxzdGF0ZTpyfTtlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwic3RhdGVDaGFuZ2VcIix0KX1yZXR1cm4gbn0pLFtlXSk7cmV0dXJuW2UuY3VycmVudC5zdGF0ZSxyLHRdfSxlYT0oZSx0KT0+e2NvbnN0W3JdPVFvKGUpO3JldHVybiB0KHIpfTtjb25zdCB0YT1zLm1lbW8oKGU9Pntjb25zdHtjb2x1bW5zOnQsZmlyc3RDb2xJZHg6cixoYXNTY3JvbGw6bixpZDpsLGxhc3RDb2xJZHg6byxyb3dJbmRleDphLGNlbGxGb2N1czppLGNlbGxUYWJJbmRleDpjLHNob3dDZWxsUmlnaHRCb3JkZXI6dX09ZSxkPXMudXNlQ29udGV4dChjbykscD1lYShkLGJvKSxtPWVhKGQsbW8pLGY9dC5zbGljZShyLG8rMSkubWFwKCgobyxzKT0+e2NvbnN0IGY9citzPT09dC5sZW5ndGgtMSxnPWYmJm4ueCYmIW4ueSxiPWY/IWcmJiFlLmV4dGVuZFJvd0Z1bGxXaWR0aDp1LGg9ZC5jdXJyZW50LmdldENlbGxQYXJhbXMobCxvLmZpZWxkKTtsZXQgQz17Y3NzQ2xhc3M6XCJcIn07aWYoby5jZWxsQ2xhc3NOYW1lJiYoQz1DbihvLmNlbGxDbGFzc05hbWUpP3tjc3NDbGFzczpvLmNlbGxDbGFzc05hbWUoaCl9Ontjc3NDbGFzczpLbihvLmNlbGxDbGFzc05hbWUpfSksby5jZWxsQ2xhc3NSdWxlcyl7Y29uc3QgZT0odj1vLmNlbGxDbGFzc1J1bGVzLHc9aCxPYmplY3QuZW50cmllcyh2KS5yZWR1Y2UoKChlLHQpPT5lKygoQ24odFsxXSk/dFsxXSh3KTp0WzFdKT90WzBdK1wiIFwiOlwiXCIpKSxcIlwiKSk7Qz17Y3NzQ2xhc3M6YCR7Qy5jc3NDbGFzc30gJHtlfWB9fXZhciB2LHc7Y29uc3QgTz1tW2xdJiZtW2xdW28uZmllbGRdO2xldCB5PW51bGw7aWYobnVsbD09TyYmby5yZW5kZXJDZWxsJiYoeT1vLnJlbmRlckNlbGwoaCksQz17Y3NzQ2xhc3M6Qy5jc3NDbGFzcytcIiBNdWlEYXRhR3JpZC1jZWxsV2l0aFJlbmRlcmVyXCJ9KSxudWxsIT1PJiZvLnJlbmRlckVkaXRDZWxsKXtjb25zdCBlPU9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxoKSxPKTt5PW8ucmVuZGVyRWRpdENlbGwoZSksQz17Y3NzQ2xhc3M6Qy5jc3NDbGFzcytcIiBNdWlEYXRhR3JpZC1jZWxsRWRpdGluZ1wifX1yZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt2YWx1ZTpoLnZhbHVlLGZpZWxkOm8uZmllbGQsd2lkdGg6by53aWR0aCxyb3dJZDpsLGhlaWdodDpwLHNob3dSaWdodEJvcmRlcjpiLGZvcm1hdHRlZFZhbHVlOmguZm9ybWF0dGVkVmFsdWUsYWxpZ246by5hbGlnbnx8XCJsZWZ0XCJ9LEMpLHtyb3dJbmRleDphLGNlbGxNb2RlOmguY2VsbE1vZGUsY29sSW5kZXg6aC5jb2xJbmRleCxjaGlsZHJlbjp5LGlzRWRpdGFibGU6aC5pc0VkaXRhYmxlLGhhc0ZvY3VzOm51bGwhPT1pJiZpLnJvd0luZGV4PT09YSYmaS5jb2xJbmRleD09PWguY29sSW5kZXgsdGFiSW5kZXg6bnVsbCE9PWMmJmMucm93SW5kZXg9PT1hJiZjLmNvbEluZGV4PT09aC5jb2xJbmRleD8wOi0xfSl9KSk7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChzLkZyYWdtZW50LG51bGwsZi5tYXAoKGU9PnMuY3JlYXRlRWxlbWVudCh1byxPYmplY3QuYXNzaWduKHtrZXk6ZS5maWVsZH0sZSkpKSkpfSkpO3RhLmRpc3BsYXlOYW1lPVwiR3JpZFJvd0NlbGxzXCI7Y29uc3QgcmE9cCgoZT0+e2NvbnN0IHQ9XCJsaWdodFwiPT09d24oZS5wYWxldHRlKT9tKHluKGUucGFsZXR0ZS5kaXZpZGVyLDEpLC44OCk6Zih5bihlLnBhbGV0dGUuZGl2aWRlciwxKSwuNjgpLHI9e3Jvb3Q6T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHtmbGV4OjEsYm94U2l6aW5nOlwiYm9yZGVyLWJveFwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIixib3JkZXI6XCIxcHggc29saWQgXCIrdCxib3JkZXJSYWRpdXM6ZS5zaGFwZS5ib3JkZXJSYWRpdXMsY29sb3I6ZS5wYWxldHRlLnRleHQucHJpbWFyeX0sZS50eXBvZ3JhcGh5LmJvZHkyKSx7b3V0bGluZTpcIm5vbmVcIixoZWlnaHQ6XCIxMDAlXCIsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXCImICosICYgKjo6YmVmb3JlLCAmICo6OmFmdGVyXCI6e2JveFNpemluZzpcImluaGVyaXRcIn0sXCImLk11aURhdGFHcmlkLWF1dG9IZWlnaHRcIjp7aGVpZ2h0OlwiYXV0b1wifSxcIiYgLk11aURhdGFHcmlkLW1haW5cIjp7cG9zaXRpb246XCJyZWxhdGl2ZVwiLGZsZXhHcm93OjEsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCJ9LFwiJiAuTXVpRGF0YUdyaWQtb3ZlcmxheVwiOntkaXNwbGF5OlwiZmxleFwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6MCxsZWZ0OjAscmlnaHQ6MCxib3R0b206MCxhbGlnblNlbGY6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixiYWNrZ3JvdW5kQ29sb3I6eW4oZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxlLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkT3BhY2l0eSl9LFwiJiAuTXVpRGF0YUdyaWQtdG9vbGJhclwiOntkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixwYWRkaW5nOlwiNHB4IDRweCAwXCJ9LFwiJiAuTXVpRGF0YUdyaWQtY29sdW1uc0NvbnRhaW5lclwiOntwb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOjAsbGVmdDowLHJpZ2h0OjAsb3ZlcmZsb3c6XCJoaWRkZW5cIixkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixib3JkZXJCb3R0b206XCIxcHggc29saWQgXCIrdH0sXCImIC5NdWlEYXRhR3JpZC1zY3JvbGxBcmVhXCI6e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6MCx6SW5kZXg6MTAxLHdpZHRoOjIwLGJvdHRvbTowfSxcIiYgLk11aURhdGFHcmlkLXNjcm9sbEFyZWEtbGVmdFwiOntsZWZ0OjB9LFwiJiAuTXVpRGF0YUdyaWQtc2Nyb2xsQXJlYS1yaWdodFwiOntyaWdodDowfSxcIiYgLk11aURhdGFHcmlkLWNvbENlbGxXcmFwcGVyXCI6e2Rpc3BsYXk6XCJmbGV4XCIsd2lkdGg6XCIxMDAlXCIsYWxpZ25JdGVtczpcImNlbnRlclwiLG92ZXJmbG93OlwiaGlkZGVuXCJ9LFwiJiAuTXVpRGF0YUdyaWQtY29sQ2VsbCwgJiAuTXVpRGF0YUdyaWQtY2VsbFwiOntXZWJraXRUYXBIaWdobGlnaHRDb2xvcjpcInRyYW5zcGFyZW50XCIsbGluZUhlaWdodDpudWxsLHBhZGRpbmc6ZS5zcGFjaW5nKDAsMil9LFwiJiAuTXVpRGF0YUdyaWQtY29sQ2VsbDpmb2N1cywgJiAuTXVpRGF0YUdyaWQtY2VsbDpmb2N1c1wiOntvdXRsaW5lOlwiZG90dGVkXCIsb3V0bGluZVdpZHRoOjEsb3V0bGluZU9mZnNldDotMn0sXCImIC5NdWlEYXRhR3JpZC1jb2xDZWxsQ2hlY2tib3gsICYgLk11aURhdGFHcmlkLWNlbGxDaGVja2JveFwiOntwYWRkaW5nOjAsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9LFwiJiAuTXVpRGF0YUdyaWQtY29sQ2VsbFwiOntwb3NpdGlvbjpcInJlbGF0aXZlXCIsZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9LFwiJiAuTXVpRGF0YUdyaWQtY29sQ2VsbFRpdGxlQ29udGFpbmVyXCI6e3RleHRPdmVyZmxvdzpcImVsbGlwc2lzXCIsb3ZlcmZsb3c6XCJoaWRkZW5cIix3aGl0ZVNwYWNlOlwibm93cmFwXCIsZGlzcGxheTpcImlubGluZS1mbGV4XCIsZmxleDoxfSxcIiYgLk11aURhdGFHcmlkLWNvbENlbGxOdW1lcmljIC5NdWlEYXRhR3JpZC1pY29uQnV0dG9uQ29udGFpbmVyXCI6e3BhZGRpbmdSaWdodDo1fSxcIiYgLk11aURhdGFHcmlkLWNvbENlbGxTb3J0YWJsZVwiOntjdXJzb3I6XCJwb2ludGVyXCJ9LFwiJiAuTXVpRGF0YUdyaWQtc29ydEljb25cIjp7Zm9udFNpemU6MTh9LFwiJiAuTXVpRGF0YUdyaWQtY29sQ2VsbENlbnRlciAuTXVpRGF0YUdyaWQtY29sQ2VsbFRpdGxlQ29udGFpbmVyXCI6e2p1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9LFwiJiAuTXVpRGF0YUdyaWQtY29sQ2VsbFJpZ2h0IC5NdWlEYXRhR3JpZC1jb2xDZWxsVGl0bGVDb250YWluZXJcIjp7anVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwifSxcIiYgLk11aURhdGFHcmlkLWNvbENlbGxUaXRsZVwiOnt0ZXh0T3ZlcmZsb3c6XCJlbGxpcHNpc1wiLG92ZXJmbG93OlwiaGlkZGVuXCIsd2hpdGVTcGFjZTpcIm5vd3JhcFwiLGZvbnRXZWlnaHQ6ZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW19LFwiJiAuTXVpRGF0YUdyaWQtY29sQ2VsbE1vdmluZ1wiOntiYWNrZ3JvdW5kQ29sb3I6ZS5wYWxldHRlLmFjdGlvbi5ob3Zlcn0sXCImIC5NdWlEYXRhR3JpZC1jb2x1bW5TZXBhcmF0b3JcIjp7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHJpZ2h0Oi0xMix6SW5kZXg6MTAwLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsY29sb3I6dH0sXCImIC5NdWlEYXRhR3JpZC1jb2x1bW5TZXBhcmF0b3JSZXNpemFibGVcIjp7Y3Vyc29yOlwiY29sLXJlc2l6ZVwiLHRvdWNoQWN0aW9uOlwibm9uZVwiLFwiJjpob3ZlclwiOntjb2xvcjplLnBhbGV0dGUudGV4dC5wcmltYXJ5LFwiQG1lZGlhIChob3Zlcjogbm9uZSlcIjp7Y29sb3I6dH19LFwiJi5NdWktcmVzaXppbmdcIjp7Y29sb3I6ZS5wYWxldHRlLnRleHQucHJpbWFyeX19LFwiJiAuTXVpRGF0YUdyaWQtaWNvblNlcGFyYXRvclwiOntjb2xvcjpcImluaGVyaXRcIn0sXCImIC5NdWlEYXRhR3JpZC1tZW51SWNvblwiOnt2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZm9udFNpemU6MjAsbWFyZ2luUmlnaHQ6LTYsZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9LFwiJiAuTXVpRGF0YUdyaWQtY29sQ2VsbDpob3ZlciAuTXVpRGF0YUdyaWQtbWVudUljb24sIC5NdWlEYXRhR3JpZC1tZW51T3BlblwiOnt2aXNpYmlsaXR5OlwidmlzaWJsZVwifSxcIiYgLk11aURhdGFHcmlkLWNvbENlbGxXcmFwcGVyLnNjcm9sbCAuTXVpRGF0YUdyaWQtY29sQ2VsbDpsYXN0LWNoaWxkXCI6e2JvcmRlclJpZ2h0Olwibm9uZVwifSxcIiYgLk11aURhdGFHcmlkLWRhdGFDb250YWluZXJcIjp7cG9zaXRpb246XCJyZWxhdGl2ZVwiLGZsZXhHcm93OjEsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCJ9LFwiJiAuTXVpRGF0YUdyaWQtd2luZG93XCI6e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIixib3R0b206MCxsZWZ0OjAscmlnaHQ6MCxvdmVyZmxvd1g6XCJhdXRvXCJ9LFwiJiAuTXVpRGF0YUdyaWQtdmlld3BvcnRcIjp7cG9zaXRpb246XCJzdGlja3lcIix0b3A6MCxsZWZ0OjAsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsb3ZlcmZsb3c6XCJoaWRkZW5cIn0sXCImIC5NdWlEYXRhR3JpZC1yb3dcIjp7ZGlzcGxheTpcImZsZXhcIix3aWR0aDpcImZpdC1jb250ZW50XCIsXCImOmhvdmVyXCI6e2JhY2tncm91bmRDb2xvcjplLnBhbGV0dGUuYWN0aW9uLmhvdmVyLFwiQG1lZGlhIChob3Zlcjogbm9uZSlcIjp7YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIn19LFwiJi5NdWktc2VsZWN0ZWRcIjp7YmFja2dyb3VuZENvbG9yOnluKGUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sZS5wYWxldHRlLmFjdGlvbi5zZWxlY3RlZE9wYWNpdHkpLFwiJjpob3ZlclwiOntiYWNrZ3JvdW5kQ29sb3I6eW4oZS5wYWxldHRlLnByaW1hcnkubWFpbixlLnBhbGV0dGUuYWN0aW9uLnNlbGVjdGVkT3BhY2l0eStlLnBhbGV0dGUuYWN0aW9uLmhvdmVyT3BhY2l0eSksXCJAbWVkaWEgKGhvdmVyOiBub25lKVwiOntiYWNrZ3JvdW5kQ29sb3I6eW4oZS5wYWxldHRlLnByaW1hcnkubWFpbixlLnBhbGV0dGUuYWN0aW9uLnNlbGVjdGVkT3BhY2l0eSl9fX19LFwiJiAuTXVpRGF0YUdyaWQtY2VsbFwiOntkaXNwbGF5OlwiYmxvY2tcIixvdmVyZmxvdzpcImhpZGRlblwiLHRleHRPdmVyZmxvdzpcImVsbGlwc2lzXCIsd2hpdGVTcGFjZTpcIm5vd3JhcFwiLGJvcmRlckJvdHRvbTpcIjFweCBzb2xpZCBcIit0LFwiJjpmb2N1cy13aXRoaW5cIjp7b3V0bGluZTpgc29saWQgJHtlLnBhbGV0dGUucHJpbWFyeS5tYWlufSAxcHhgLG91dGxpbmVPZmZzZXQ6XCItMXB4XCJ9fSxcIiYgLk11aURhdGFHcmlkLWNlbGwuTXVpRGF0YUdyaWQtY2VsbEVkaXRpbmdcIjp7cGFkZGluZzoxLGRpc3BsYXk6XCJmbGV4XCIsYm94U2hhZG93OmUuc2hhZG93c1syXSxiYWNrZ3JvdW5kQ29sb3I6ZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJ9LFwiJiAuTXVpRGF0YUdyaWQtZWRpdENlbGxJbnB1dEJhc2VcIjpPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZS50eXBvZ3JhcGh5LmJvZHkyKSx7cGFkZGluZzpcIjFweCAwXCIsXCImIGlucHV0XCI6e3BhZGRpbmc6XCIwIDE2cHhcIixoZWlnaHQ6XCIxMDAlXCJ9fSksXCImIC5NdWlEYXRhR3JpZC1lZGl0Q2VsbEJvb2xlYW5cIjp7ZGlzcGxheTpcImZsZXhcIixoZWlnaHQ6XCIxMDAlXCIsd2lkdGg6XCIxMDAlXCIsYWxpZ25JdGVtczpcImNlbnRlclwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9LCcmIC5NdWlEYXRhR3JpZC1ib29sZWFuQ2VsbFtkYXRhLXZhbHVlPVwidHJ1ZVwiXSc6e2NvbG9yOmUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeX0sJyYgLk11aURhdGFHcmlkLWJvb2xlYW5DZWxsW2RhdGEtdmFsdWU9XCJmYWxzZVwiXSc6e2NvbG9yOmUucGFsZXR0ZS50ZXh0LmRpc2FibGVkfSxcIiYgLk11aURhdGFHcmlkLWNvbENlbGxXcmFwcGVyIC5NdWlEYXRhR3JpZC1jZWxsXCI6e2JvcmRlckJvdHRvbTpcIm5vbmVcIn0sXCImIC5NdWlEYXRhR3JpZC1jZWxsV2l0aFJlbmRlcmVyXCI6e2Rpc3BsYXk6XCJmbGV4XCIsYWxpZ25JdGVtczpcImNlbnRlclwifSxcIiYgLk11aURhdGFHcmlkLXdpdGhCb3JkZXJcIjp7Ym9yZGVyUmlnaHQ6XCIxcHggc29saWQgXCIrdH0sXCImIC5NdWlEYXRhR3JpZC1jZWxsTGVmdFwiOnt0ZXh0QWxpZ246XCJsZWZ0XCJ9LFwiJiAuTXVpRGF0YUdyaWQtY2VsbExlZnQuTXVpRGF0YUdyaWQtY2VsbFdpdGhSZW5kZXJlciwgJiAuTXVpRGF0YUdyaWQtY2VsbExlZnQuTXVpRGF0YUdyaWQtY2VsbEVkaXRpbmdcIjp7anVzdGlmeUNvbnRlbnQ6XCJmbGV4LXN0YXJ0XCJ9LFwiJiAuTXVpRGF0YUdyaWQtY2VsbFJpZ2h0XCI6e3RleHRBbGlnbjpcInJpZ2h0XCJ9LFwiJiAuTXVpRGF0YUdyaWQtY2VsbFJpZ2h0Lk11aURhdGFHcmlkLWNlbGxXaXRoUmVuZGVyZXIsICYgLk11aURhdGFHcmlkLWNlbGxSaWdodC5NdWlEYXRhR3JpZC1jZWxsRWRpdGluZ1wiOntqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCJ9LFwiJiAuTXVpRGF0YUdyaWQtY2VsbENlbnRlclwiOnt0ZXh0QWxpZ246XCJjZW50ZXJcIn0sXCImIC5NdWlEYXRhR3JpZC1jZWxsQ2VudGVyLk11aURhdGFHcmlkLWNlbGxXaXRoUmVuZGVyZXIsICYgLk11aURhdGFHcmlkLWNlbGxDZW50ZXIuTXVpRGF0YUdyaWQtY2VsbEVkaXRpbmdcIjp7anVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn0sXCImIC5NdWlEYXRhR3JpZC1yb3dDb3VudCwgJiAuTXVpRGF0YUdyaWQtc2VsZWN0ZWRSb3dDb3VudFwiOnthbGlnbkl0ZW1zOlwiY2VudGVyXCIsZGlzcGxheTpcImZsZXhcIixtYXJnaW46ZS5zcGFjaW5nKDAsMil9LFwiJiAuTXVpRGF0YUdyaWQtZm9vdGVyXCI6e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCIsYWxpZ25JdGVtczpcImNlbnRlclwiLG1pbkhlaWdodDo1MixcIiYgLk11aURhdGFHcmlkLXNlbGVjdGVkUm93Q291bnRcIjp7dmlzaWJpbGl0eTpcImhpZGRlblwiLHdpZHRoOjAsaGVpZ2h0OjAsW2UuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06e3Zpc2liaWxpdHk6XCJ2aXNpYmxlXCIsd2lkdGg6XCJhdXRvXCIsaGVpZ2h0OlwiYXV0b1wifX19LFwiJiAuTXVpRGF0YUdyaWQtY29sQ2VsbC1kcm9wWm9uZSAuTXVpRGF0YUdyaWQtY29sQ2VsbC1kcmFnZ2FibGVcIjp7Y3Vyc29yOlwibW92ZVwifSxcIiYgLk11aURhdGFHcmlkLWNvbENlbGwtZHJhZ2dhYmxlXCI6e2Rpc3BsYXk6XCJmbGV4XCIsd2lkdGg6XCIxMDAlXCIsanVzdGlmeUNvbnRlbnQ6XCJpbmhlcml0XCJ9LFwiJiAuTXVpRGF0YUdyaWQtY29sQ2VsbC1kcmFnZ2luZ1wiOntiYWNrZ3JvdW5kOmUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLHBhZGRpbmc6XCIwIDEycHhcIixib3JkZXJSYWRpdXM6ZS5zaGFwZS5ib3JkZXJSYWRpdXMsb3BhY2l0eTplLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkT3BhY2l0eX19KX07aWYoXCJkYXJrXCI9PT13bihlLnBhbGV0dGUpKXtjb25zdCBlPVwiIzIwMjAyMlwiLHQ9XCIjNTg1ODU5XCIsbj1cIiM4MzgzODRcIjtyLnJvb3Q9T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHIucm9vdCkse3Njcm9sbGJhckNvbG9yOmAke3R9ICR7ZX1gLFwiJiAqOjotd2Via2l0LXNjcm9sbGJhclwiOntiYWNrZ3JvdW5kQ29sb3I6ZX0sXCImICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXCI6e2JvcmRlclJhZGl1czo4LGJhY2tncm91bmRDb2xvcjp0LG1pbkhlaWdodDoyNCxib3JkZXI6XCIzcHggc29saWQgXCIrZX0sXCImICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmZvY3VzXCI6e2JhY2tncm91bmRDb2xvcjpufSxcIiYgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlXCI6e2JhY2tncm91bmRDb2xvcjpufSxcIiYgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXJcIjp7YmFja2dyb3VuZENvbG9yOm59LFwiJiAqOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXJcIjp7YmFja2dyb3VuZENvbG9yOmV9fSl9cmV0dXJuIHJ9KSx7bmFtZTpcIk11aURhdGFHcmlkXCJ9KSxuYT1lPT5lLmNvbHVtbnMsbGE9ZT0+ZS5jb2x1bW5zLmFsbCxvYT1lPT5lLmNvbHVtbnMubG9va3VwLGFhPXYobGEsb2EsKChlLHQpPT5lLm1hcCgoZT0+dFtlXSkpKSksaWE9dihhYSwoZT0+ZS5maWx0ZXIoKGU9Pm51bGwhPWUuZmllbGQmJiFlLmhpZGUpKSkpLHNhPXYoaWEsKGU9Pntjb25zdCB0PVtdO3JldHVybnt0b3RhbFdpZHRoOmUucmVkdWNlKCgoZSxyKT0+KHQucHVzaChlKSxlK3Iud2lkdGgpKSwwKSxwb3NpdGlvbnM6dH19KSksY2E9dihhYSwoZT0+ZS5maWx0ZXIoKGU9PmUuZmlsdGVyYWJsZSkpKSksdWE9dihjYSwoZT0+ZS5tYXAoKGU9PmUuZmllbGQpKSkpLGRhPXYoaWEsKGU9PmUubGVuZ3RoKSkscGE9dihzYSwoZT0+ZS50b3RhbFdpZHRoKSksbWE9cy5mb3J3YXJkUmVmKChmdW5jdGlvbihlLHQpe2NvbnN0e2NsYXNzTmFtZTpyfT1lLG49Z2woZSxbXCJjbGFzc05hbWVcIl0pLGw9cmEoKSxvPXMudXNlQ29udGV4dChjbyksYT1lYShvLGRhKSxbaV09UW8obyk7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChcImRpdlwiLE9iamVjdC5hc3NpZ24oe3JlZjp0LGNsYXNzTmFtZTpLbihsLnJvb3Qscix7XCJNdWlEYXRhR3JpZC1hdXRvSGVpZ2h0XCI6aS5vcHRpb25zLmF1dG9IZWlnaHR9KSxyb2xlOlwiZ3JpZFwiLFwiYXJpYS1jb2xjb3VudFwiOmEsXCJhcmlhLXJvd2NvdW50XCI6aS5yb3dzLnRvdGFsUm93Q291bnQsXCJhcmlhLWxhYmVsXCI6by5jdXJyZW50LmdldExvY2FsZVRleHQoXCJyb290R3JpZExhYmVsXCIpLFwiYXJpYS1tdWx0aXNlbGVjdGFibGVcIjohaS5vcHRpb25zLmRpc2FibGVNdWx0aXBsZVNlbGVjdGlvbn0sbikpfSkpLGZhPXMuZm9yd2FyZFJlZigoZnVuY3Rpb24oZSx0KXtjb25zdHtjbGFzc05hbWU6cixzdHlsZTpufT1lLGw9Z2woZSxbXCJjbGFzc05hbWVcIixcInN0eWxlXCJdKSxvPXMudXNlQ29udGV4dChjbyksYT1lYShvLGhvKTtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsT2JqZWN0LmFzc2lnbih7cmVmOnQsY2xhc3NOYW1lOktuKFwiTXVpRGF0YUdyaWQtY29sdW1uc0NvbnRhaW5lclwiLHIpfSxsLHtzdHlsZTpPYmplY3QuYXNzaWduKHttaW5IZWlnaHQ6YSxtYXhIZWlnaHQ6YSxsaW5lSGVpZ2h0OmErXCJweFwifSxuKX0pKX0pKSxnYT1lPT5lLmNvbnRhaW5lclNpemVzLGJhPWU9PmUudmlld3BvcnRTaXplcyxoYT1lPT5lLnNjcm9sbEJhcixDYT12KGdhLChlPT5udWxsPT1lP251bGw6ZS5kYXRhQ29udGFpbmVyU2l6ZXMpKSx2YT12KGdhLChlPT5udWxsPT1lPzA6ZS5kYXRhQ29udGFpbmVyU2l6ZXMuaGVpZ2h0KSk7ZnVuY3Rpb24gd2EoZSl7Y29uc3R7Y2xhc3NOYW1lOnR9PWUscj1nbChlLFtcImNsYXNzTmFtZVwiXSksbj1zLnVzZUNvbnRleHQoY28pLGw9ZWEobixDYSksbz1lYShuLGhhKSxhPXttaW5XaWR0aDpudWxsPT1sP3ZvaWQgMDpsLndpZHRofTtyZXR1cm4gby5oYXNTY3JvbGxZJiYoYS5taW5IZWlnaHQ9bnVsbD09bD92b2lkIDA6bC5oZWlnaHQpLHMuY3JlYXRlRWxlbWVudChcImRpdlwiLE9iamVjdC5hc3NpZ24oe2NsYXNzTmFtZTpLbihcIk11aURhdGFHcmlkLWRhdGFDb250YWluZXJcIixcImRhdGEtY29udGFpbmVyXCIsdCksc3R5bGU6YX0scikpfWNvbnN0IE9hPXMuZm9yd2FyZFJlZigoZnVuY3Rpb24oZSx0KXtjb25zdHtjbGFzc05hbWU6cn09ZSxuPWdsKGUsW1wiY2xhc3NOYW1lXCJdKTtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsT2JqZWN0LmFzc2lnbih7cmVmOnQsY2xhc3NOYW1lOktuKFwiTXVpRGF0YUdyaWQtZm9vdGVyXCIscil9LG4pKX0pKSx5YT1zLmZvcndhcmRSZWYoKGZ1bmN0aW9uKGUsdCl7Y29uc3R7Y2xhc3NOYW1lOnIsc3R5bGU6bn09ZSxsPWdsKGUsW1wiY2xhc3NOYW1lXCIsXCJzdHlsZVwiXSksbz1zLnVzZUNvbnRleHQoY28pLGE9ZWEobyxobyk7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChcImRpdlwiLE9iamVjdC5hc3NpZ24oe3JlZjp0LGNsYXNzTmFtZTpLbihcIk11aURhdGFHcmlkLW92ZXJsYXlcIixyKSxzdHlsZTpPYmplY3QuYXNzaWduKHt0b3A6YX0sbil9LGwpKX0pKSxFYT1lPT5lLm9wdGlvbnMsU2E9cy5mb3J3YXJkUmVmKChmdW5jdGlvbihlLHQpe2NvbnN0e2NsYXNzTmFtZTpyLHNpemU6bn09ZSxsPWdsKGUsW1wiY2xhc3NOYW1lXCIsXCJzaXplXCJdKSxvPXMudXNlQ29udGV4dChjbykse2F1dG9IZWlnaHQ6YX09ZWEobyxFYSksaT1lYShvLGhvKSxjPWVhKG8sYm8pLHU9ZWEobyx2YSk7cy51c2VFZmZlY3QoKCgpPT57by5jdXJyZW50LnJlc2l6ZSgpfSksW29dKTtjb25zdCBkPXMudXNlTWVtbygoKCk9PntpZighYSlyZXR1cm4gbi5oZWlnaHQ7cmV0dXJuIGkrKHU8Yz8yKmM6dSl9KSxbYSx1LGksYyxuLmhlaWdodF0pO3JldHVybiBzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiTXVpRGF0YUdyaWQtd2luZG93Q29udGFpbmVyXCIsc3R5bGU6e3dpZHRoOm4ud2lkdGgsaGVpZ2h0OmR9fSxzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixPYmplY3QuYXNzaWduKHtyZWY6dCxjbGFzc05hbWU6S24oXCJNdWlEYXRhR3JpZC13aW5kb3dcIixyKX0sbCx7c3R5bGU6e3RvcDppLG92ZXJmbG93WTphP1wiaGlkZGVuXCI6XCJhdXRvXCJ9fSkpKX0pKSx4YT1zLmZvcndhcmRSZWYoKGZ1bmN0aW9uKGUsdCl7Y29uc3R7Y2xhc3NOYW1lOnIsY2hpbGRyZW46bn09ZSxsPWdsKGUsW1wiY2xhc3NOYW1lXCIsXCJjaGlsZHJlblwiXSk7cmV0dXJuIG4/cy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsT2JqZWN0LmFzc2lnbih7cmVmOnQsY2xhc3NOYW1lOktuKFwiTXVpRGF0YUdyaWQtdG9vbGJhclwiLHIpfSxsKSxuKTpudWxsfSkpLE1hPWU9PmUuZm9jdXMsSWE9dihNYSwoZT0+ZS5jZWxsKSksa2E9dihNYSwoZT0+ZS5jb2x1bW5IZWFkZXIpKSxEYT1lPT5lLnRhYkluZGV4LFBhPXYoRGEsKGU9PmUuY2VsbCkpLFJhPXYoRGEsKGU9PmUuY29sdW1uSGVhZGVyKSksRmE9cy5tZW1vKChlPT57Y29uc3R7Z2V0VmFsdWU6dCxmaWVsZDpyLGlkOm59PWUsbD1zLnVzZUNvbnRleHQoY28pLG89ZWEobCxQYSksYT1udWxsIT09byYmby5yb3dJbmRleD09PWUucm93SW5kZXgmJm8uY29sSW5kZXg9PT1lLmNvbEluZGV4PzA6LTE7cy51c2VMYXlvdXRFZmZlY3QoKCgpPT57MD09PWEmJmUuZWxlbWVudCYmKGUuZWxlbWVudC50YWJJbmRleD0tMSl9KSxbZS5lbGVtZW50LGFdKTtjb25zdCBpPXMudXNlQ2FsbGJhY2soKHQ9PntZbih0LmtleSkmJnQuc3RvcFByb3BhZ2F0aW9uKCksZGwodC5rZXkpJiYhdC5zaGlmdEtleSYmbC5jdXJyZW50LnB1Ymxpc2hFdmVudChcImNlbGxOYXZpZ2F0aW9uS2V5RG93blwiLGUsdCl9KSxbbCxlXSk7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChoLHt0YWJJbmRleDphLGNoZWNrZWQ6ISF0KHIpLG9uQ2hhbmdlOihlLHQpPT57bC5jdXJyZW50LnNlbGVjdFJvdyhuLHQsITApfSxjbGFzc05hbWU6XCJNdWlEYXRhR3JpZC1jaGVja2JveElucHV0XCIsY29sb3I6XCJwcmltYXJ5XCIsaW5wdXRQcm9wczp7XCJhcmlhLWxhYmVsXCI6XCJTZWxlY3QgUm93IGNoZWNrYm94XCJ9LG9uS2V5RG93bjppfSl9KSksTGE9ZT0+ZS5yb3dzLGphPXYoTGEsKGU9PmUmJmUudG90YWxSb3dDb3VudCkpLHphPXYoTGEsKGU9PmUmJmUuaWRSb3dzTG9va3VwKSksVGE9dihMYSwoZT0+ZS5hbGxSb3dzKSksQWE9dihMYSwoZT0+ZS5hbGxSb3dzLm1hcCgodD0+ZS5pZFJvd3NMb29rdXBbdF0pKSkpLF9hPWU9PmUuc29ydGluZyxHYT12KF9hLFRhLCgoZSx0KT0+ZS5zb3J0ZWRSb3dzLmxlbmd0aD9lLnNvcnRlZFJvd3M6dCkpLEhhPXYoR2EsemEsKChlLHQpPT57Y29uc3Qgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goKGU9PntyLnNldChlLHRbZV0pfSkpLHJ9KSksTmE9dihfYSwoZT0+ZS5zb3J0TW9kZWwpKSxWYT12KE5hLChlPT5lLnJlZHVjZSgoKHQscixuKT0+KHRbci5maWVsZF09e3NvcnREaXJlY3Rpb246ci5zb3J0LHNvcnRJbmRleDplLmxlbmd0aD4xP24rMTp2b2lkIDB9LHQpKSx7fSkpKSxCYT1lPT5lLnZpc2libGVSb3dzLCRhPXYoQmEsSGEsKChlLHQpPT57Y29uc3Qgcj1uZXcgTWFwO3JldHVybiB0LmZvckVhY2goKCh0LG4pPT57ITEhPT1lLnZpc2libGVSb3dzTG9va3VwW25dJiZyLnNldChuLHQpfSkpLHJ9KSksV2E9digkYSwoZT0+Wy4uLmUuZW50cmllcygpXSkpLFVhPXYoJGEsKGU9PlsuLi5lLmtleXMoKV0pKSxLYT12KEJhLGphLCgoZSx0KT0+bnVsbD09ZS52aXNpYmxlUm93cz90OmUudmlzaWJsZVJvd3MubGVuZ3RoKSksWmE9ZT0+ZS5maWx0ZXIsWGE9dihaYSwoZT0+e3ZhciB0O3JldHVybiBudWxsPT09KHQ9ZS5pdGVtcyl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuZmlsdGVyKChlPT57dmFyIHQ7cmV0dXJuIG51bGwhPWUudmFsdWUmJlwiXCIhPT0obnVsbD09PSh0PWUudmFsdWUpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LnRvU3RyaW5nKCkpfSkpfSkpLHFhPXYoWGEsKGU9PmUubGVuZ3RoKSksWWE9dihYYSwoZT0+ZS5yZWR1Y2UoKChlLHQpPT4oZVt0LmNvbHVtbkZpZWxkXT9lW3QuY29sdW1uRmllbGRdLnB1c2godCk6ZVt0LmNvbHVtbkZpZWxkXT1bdF0sZSkpLHt9KSkpLEphPWU9PmUuc2VsZWN0aW9uLFFhPXYoSmEsKGU9Pk9iamVjdC5rZXlzKGUpLmxlbmd0aCkpLGVpPXYoSmEsemEsKChlLHQpPT5uZXcgTWFwKE9iamVjdC52YWx1ZXMoZSkubWFwKChlPT5bZSx0W2VdXSkpKSkpLHRpPWU9Pntjb25zdCB0PXMudXNlQ29udGV4dChjbykscj1lYSh0LFVhKSxuPWVhKHQsUmEpLGw9ZWEodCxRYSksbz1lYSh0LGphKSxbYSxpXT1zLnVzZVN0YXRlKGw+MCYmbCE9PW8pLFtjLHVdPXMudXNlU3RhdGUobD09PW98fGEpO3MudXNlRWZmZWN0KCgoKT0+e2NvbnN0IGU9bD4wJiZsIT09bzt1KG8+MCYmbD09PW98fGEpLGkoZSl9KSxbYSxvLGxdKTtjb25zdCBkPW51bGwhPT1uJiZuLmNvbEluZGV4PT09ZS5jb2xJbmRleD8wOi0xO3MudXNlTGF5b3V0RWZmZWN0KCgoKT0+ezA9PT1kJiZlLmVsZW1lbnQmJihlLmVsZW1lbnQudGFiSW5kZXg9LTEpfSksW2UuZWxlbWVudCxkXSk7Y29uc3QgcD1zLnVzZUNhbGxiYWNrKChyPT57WW4oci5rZXkpJiZyLnN0b3BQcm9wYWdhdGlvbigpLGRsKHIua2V5KSYmIXIuc2hpZnRLZXkmJnQuY3VycmVudC5wdWJsaXNoRXZlbnQoXCJjb2x1bW5IZWFkZXJOYXZpZ2F0aW9uS2V5ZG93blwiLGUscil9KSxbdCxlXSk7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChoLHtpbmRldGVybWluYXRlOmEsY2hlY2tlZDpjLG9uQ2hhbmdlOihlLG4pPT57dShuKSx0LmN1cnJlbnQuc2VsZWN0Um93cyhyLG4pfSxjbGFzc05hbWU6XCJNdWlEYXRhR3JpZC1jaGVja2JveElucHV0XCIsY29sb3I6XCJwcmltYXJ5XCIsaW5wdXRQcm9wczp7XCJhcmlhLWxhYmVsXCI6XCJTZWxlY3QgQWxsIFJvd3MgY2hlY2tib3hcIn0sdGFiSW5kZXg6ZCxvbktleURvd246cH0pfSxyaT1PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sWWwpLHtmaWVsZDpcIl9fY2hlY2tfX1wiLHR5cGU6XCJjaGVja2JveFNlbGVjdGlvblwiLHdpZHRoOjQ4LHJlc2l6YWJsZTohMCxzb3J0YWJsZTohMSxmaWx0ZXJhYmxlOiExLGRpc2FibGVDbGlja0V2ZW50QnViYmxpbmc6ITAsZGlzYWJsZUNvbHVtbk1lbnU6ITAsdmFsdWVHZXR0ZXI6ZT0+dm9pZCAwIT09ZS5hcGkuZ2V0U3RhdGUoKS5zZWxlY3Rpb25bZS5pZF0scmVuZGVySGVhZGVyOmU9PnMuY3JlYXRlRWxlbWVudCh0aSxPYmplY3QuYXNzaWduKHt9LGUpKSxyZW5kZXJDZWxsOmU9PnMuY3JlYXRlRWxlbWVudChGYSxPYmplY3QuYXNzaWduKHt9LGUpKSxjZWxsQ2xhc3NOYW1lOlwiTXVpRGF0YUdyaWQtY2VsbENoZWNrYm94XCIsaGVhZGVyQ2xhc3NOYW1lOlwiTXVpRGF0YUdyaWQtY29sQ2VsbENoZWNrYm94XCJ9KSxuaT0oZSx0KT0+dD9lW3RdOmUuX19kZWZhdWx0X18sbGk9XCJzdHJpbmdcIixvaT1cIm51bWJlclwiLGFpPVwiZGF0ZVwiLGlpPVwiZGF0ZVRpbWVcIixzaT1cImJvb2xlYW5cIjtmdW5jdGlvbiBjaShlLHQpe2NvbnN0IHI9XCJhc2NcIj09PXQ/ZS5Db2x1bW5Tb3J0ZWRBc2NlbmRpbmdJY29uOmUuQ29sdW1uU29ydGVkRGVzY2VuZGluZ0ljb247cmV0dXJuIHMuY3JlYXRlRWxlbWVudChyLHtjbGFzc05hbWU6XCJNdWlEYXRhR3JpZC1zb3J0SWNvblwifSl9Y29uc3QgdWk9cy5tZW1vKChmdW5jdGlvbihlKXtjb25zdHtkaXJlY3Rpb246dCxpbmRleDpyLGhpZGU6bn09ZSxsPXMudXNlQ29udGV4dChjbyk7cmV0dXJuIG58fG51bGw9PXQ/bnVsbDpzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiTXVpRGF0YUdyaWQtaWNvbkJ1dHRvbkNvbnRhaW5lclwifSxzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixudWxsLG51bGwhPXImJnMuY3JlYXRlRWxlbWVudCh3LHtiYWRnZUNvbnRlbnQ6cixjb2xvcjpcImRlZmF1bHRcIn0scy5jcmVhdGVFbGVtZW50KE8se3RhYkluZGV4Oi0xLFwiYXJpYS1sYWJlbFwiOmwuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiY29sdW1uSGVhZGVyU29ydEljb25MYWJlbFwiKSx0aXRsZTpsLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcImNvbHVtbkhlYWRlclNvcnRJY29uTGFiZWxcIiksc2l6ZTpcInNtYWxsXCJ9LGNpKGwuY3VycmVudC5jb21wb25lbnRzLHQpKSksbnVsbD09ciYmcy5jcmVhdGVFbGVtZW50KE8se3RhYkluZGV4Oi0xLFwiYXJpYS1sYWJlbFwiOmwuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiY29sdW1uSGVhZGVyU29ydEljb25MYWJlbFwiKSx0aXRsZTpsLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcImNvbHVtbkhlYWRlclNvcnRJY29uTGFiZWxcIiksc2l6ZTpcInNtYWxsXCJ9LGNpKGwuY3VycmVudC5jb21wb25lbnRzLHQpKSkpfSkpLGRpPXMuZm9yd2FyZFJlZigoZnVuY3Rpb24oZSx0KXtjb25zdHtjbGFzc05hbWU6cn09ZSxuPWdsKGUsW1wiY2xhc3NOYW1lXCJdKTtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsT2JqZWN0LmFzc2lnbih7cmVmOnQsY2xhc3NOYW1lOktuKFwiTXVpRGF0YUdyaWQtY29sQ2VsbFRpdGxlXCIscil9LG4pKX0pKTtmdW5jdGlvbiBwaShlKXtjb25zdHtsYWJlbDp0LGRlc2NyaXB0aW9uOnIsY29sdW1uV2lkdGg6bn09ZSxsPXMudXNlUmVmKG51bGwpLFtvLGFdPXMudXNlU3RhdGUoXCJcIik7cmV0dXJuIHMudXNlRWZmZWN0KCgoKT0+e2lmKCFyJiZsJiZsLmN1cnJlbnQpe2NvbnN0IGU9Um4obC5jdXJyZW50KTthKGU/dDpcIlwiKX19KSxbbCxuLHIsdF0pLHMuY3JlYXRlRWxlbWVudCh5LHt0aXRsZTpyfHxvfSxzLmNyZWF0ZUVsZW1lbnQoZGkse3JlZjpsfSx0KSl9Y29uc3QgbWk9cy5tZW1vKChmdW5jdGlvbihlKXtjb25zdHtyZXNpemFibGU6dCxyZXNpemluZzpyLGhlaWdodDpufT1lLGw9Z2woZSxbXCJyZXNpemFibGVcIixcInJlc2l6aW5nXCIsXCJoZWlnaHRcIl0pLG89cy51c2VDb250ZXh0KGNvKSx7c2hvd0NvbHVtblJpZ2h0Qm9yZGVyOmF9PWVhKG8sRWEpLGk9by5jdXJyZW50LmNvbXBvbmVudHMuQ29sdW1uUmVzaXplSWNvbixjPXMudXNlQ2FsbGJhY2soKGU9PntlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKX0pLFtdKTtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsT2JqZWN0LmFzc2lnbih7Y2xhc3NOYW1lOktuKFwiTXVpRGF0YUdyaWQtY29sdW1uU2VwYXJhdG9yXCIse1wiTXVpRGF0YUdyaWQtY29sdW1uU2VwYXJhdG9yUmVzaXphYmxlXCI6dCxcIk11aS1yZXNpemluZ1wiOnJ9KSxzdHlsZTp7bWluSGVpZ2h0Om4sb3BhY2l0eTphPzA6MX19LGwse29uQ2xpY2s6Y30pLHMuY3JlYXRlRWxlbWVudChpLHtjbGFzc05hbWU6XCJNdWlEYXRhR3JpZC1pY29uU2VwYXJhdG9yXCJ9KSl9KSksZmk9ZT0+ZS5jb2x1bW5NZW51O2Z1bmN0aW9uIGdpKGUpe2NvbnN0e2NvbHVtbjp0fT1lLHI9cy51c2VDb250ZXh0KGNvKSxsPWVhKHIsZmkpLG89bigpLGE9bigpLGk9ci5jdXJyZW50LmNvbXBvbmVudHMuQ29sdW1uTWVudUljb24sYz1zLnVzZUNhbGxiYWNrKChlPT57ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCksci5jdXJyZW50LnRvZ2dsZUNvbHVtbk1lbnUodC5maWVsZCxhLG8pfSksW3IsdC5maWVsZCxhLG9dKSx1PWwub3BlbiYmbC5maWVsZD09PXQuZmllbGQ7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6S24oXCJNdWlEYXRhR3JpZC1tZW51SWNvblwiLHtcIk11aURhdGFHcmlkLW1lbnVPcGVuXCI6dX0pfSxzLmNyZWF0ZUVsZW1lbnQoTyx7dGFiSW5kZXg6LTEsY2xhc3NOYW1lOlwiTXVpRGF0YUdyaWQtbWVudUljb25CdXR0b25cIixcImFyaWEtbGFiZWxcIjpyLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcImNvbHVtbk1lbnVMYWJlbFwiKSx0aXRsZTpyLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcImNvbHVtbk1lbnVMYWJlbFwiKSxzaXplOlwic21hbGxcIixvbkNsaWNrOmMsXCJhcmlhLWV4cGFuZGVkXCI6dT9cInRydWVcIjp2b2lkIDAsXCJhcmlhLWhhc3BvcHVwXCI6XCJ0cnVlXCIsXCJhcmlhLWNvbnRyb2xzXCI6YSxpZDpvfSxzLmNyZWF0ZUVsZW1lbnQoaSx7Zm9udFNpemU6XCJzbWFsbFwifSkpKX1jb25zdCBiaT1lPT5lLnByZWZlcmVuY2VQYW5lbCxoaT1lPT5lLnZpZXdwb3J0U2l6ZXM7dmFyIENpO2Z1bmN0aW9uIHZpKGUpe2NvbnN0e2NvdW50ZXI6dH09ZSxyPXMudXNlQ29udGV4dChjbyksbj1lYShyLEVhKSxsPWVhKHIsYmkpLG89ci5jdXJyZW50LmNvbXBvbmVudHMuQ29sdW1uRmlsdGVyZWRJY29uLGE9cy51c2VDYWxsYmFjaygoZT0+e2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpO2NvbnN0e29wZW46dCxvcGVuZWRQYW5lbFZhbHVlOm59PWw7dCYmbj09PUNpLmZpbHRlcnM/ci5jdXJyZW50LmhpZGVGaWx0ZXJQYW5lbCgpOnIuY3VycmVudC5zaG93RmlsdGVyUGFuZWwoKX0pLFtyLGxdKTtpZighdHx8bi5kaXNhYmxlQ29sdW1uRmlsdGVyKXJldHVybiBudWxsO2NvbnN0IGk9cy5jcmVhdGVFbGVtZW50KE8se29uQ2xpY2s6YSxjb2xvcjpcImRlZmF1bHRcIixcImFyaWEtbGFiZWxcIjpyLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcImNvbHVtbkhlYWRlckZpbHRlcnNMYWJlbFwiKSxzaXplOlwic21hbGxcIix0YWJJbmRleDotMX0scy5jcmVhdGVFbGVtZW50KG8se2ZvbnRTaXplOlwic21hbGxcIn0pKTtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KHkse3RpdGxlOnIuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiY29sdW1uSGVhZGVyRmlsdGVyc1Rvb2x0aXBBY3RpdmVcIikodCksZW50ZXJEZWxheToxZTN9LHMuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJNdWlEYXRhR3JpZC1pY29uQnV0dG9uQ29udGFpbmVyXCJ9LHMuY3JlYXRlRWxlbWVudChcImRpdlwiLG51bGwsdD4xJiZzLmNyZWF0ZUVsZW1lbnQodyx7YmFkZ2VDb250ZW50OnQsY29sb3I6XCJkZWZhdWx0XCJ9LGkpLDE9PT10JiZpKSkpfSFmdW5jdGlvbihlKXtlLmZpbHRlcnM9XCJmaWx0ZXJzXCIsZS5jb2x1bW5zPVwiY29sdW1uc1wifShDaXx8KENpPXt9KSk7Y29uc3Qgd2k9cy5tZW1vKCgoe2NvbHVtbjplLGNvbEluZGV4OnQsaXNEcmFnZ2luZzpyLGlzUmVzaXppbmc6bixzb3J0RGlyZWN0aW9uOmwsc29ydEluZGV4Om8sb3B0aW9uczphLGZpbHRlckl0ZW1zQ291bnRlcjppLGhhc0ZvY3VzOmMsdGFiSW5kZXg6dX0pPT57Y29uc3QgZD1zLnVzZUNvbnRleHQoY28pLHA9cy51c2VSZWYobnVsbCksbT1lYShkLGhvKSx7ZGlzYWJsZUNvbHVtblJlb3JkZXI6ZixzaG93Q29sdW1uUmlnaHRCb3JkZXI6ZyxkaXNhYmxlQ29sdW1uUmVzaXplOmIsZGlzYWJsZUNvbHVtbk1lbnU6aH09YSxDPW51bGwhPWwsdj1cIm51bWJlclwiPT09ZS50eXBlO2xldCB3PW51bGw7ZS5yZW5kZXJIZWFkZXImJih3PWUucmVuZGVySGVhZGVyKGQuY3VycmVudC5nZXRDb2x1bW5IZWFkZXJQYXJhbXMoZS5maWVsZCkpKTtjb25zdCBPPXMudXNlQ2FsbGJhY2soKHQ9PnI9PmQuY3VycmVudC5wdWJsaXNoRXZlbnQodCxkLmN1cnJlbnQuZ2V0Q29sdW1uSGVhZGVyUGFyYW1zKGUuZmllbGQpLHIpKSxbZCxlLmZpZWxkXSkseT1zLnVzZU1lbW8oKCgpPT4oe29uQ2xpY2s6TyhcImNvbHVtbkhlYWRlckNsaWNrXCIpLG9uRG91YmxlQ2xpY2s6TyhcImNvbHVtbkhlYWRlckRvdWJsZUNsaWNrXCIpLG9uTW91c2VPdmVyOk8oXCJjb2x1bW5IZWFkZXJPdmVyXCIpLG9uTW91c2VPdXQ6TyhcImNvbHVtbkhlYWRlck91dFwiKSxvbk1vdXNlRW50ZXI6TyhcImNvbHVtbkhlYWRlckVudGVyXCIpLG9uTW91c2VMZWF2ZTpPKFwiY29sdW1uSGVhZGVyTGVhdmVcIiksb25LZXlEb3duOk8oXCJjb2x1bW5IZWFkZXJLZXlkb3duXCIpLG9uRm9jdXM6TyhcImNvbHVtbkhlYWRlckZvY3VzXCIpLG9uQmx1cjpPKFwiY29sdW1uSGVhZGVyQmx1clwiKX0pKSxbT10pLEU9cy51c2VNZW1vKCgoKT0+KHtvbkRyYWdTdGFydDpPKFwiY29sdW1uSGVhZGVyRHJhZ1N0YXJ0XCIpLG9uRHJhZ0VudGVyOk8oXCJjb2x1bW5IZWFkZXJEcmFnRW50ZXJcIiksb25EcmFnT3ZlcjpPKFwiY29sdW1uSGVhZGVyRHJhZ092ZXJcIiksb25EcmFnRW5kOk8oXCJjb2x1bW5IZWFkZXJEcmFnRW5kXCIpfSkpLFtPXSksUz1zLnVzZU1lbW8oKCgpPT4oe29uTW91c2VEb3duOk8oXCJjb2x1bW5TZXBhcmF0b3JNb3VzZURvd25cIil9KSksW09dKSx4PUtuKFwiTXVpRGF0YUdyaWQtY29sQ2VsbFwiLGUuaGVhZGVyQ2xhc3NOYW1lLFwiY2VudGVyXCI9PT1lLmhlYWRlckFsaWduJiZcIk11aURhdGFHcmlkLWNvbENlbGxDZW50ZXJcIixcInJpZ2h0XCI9PT1lLmhlYWRlckFsaWduJiZcIk11aURhdGFHcmlkLWNvbENlbGxSaWdodFwiLHtcIk11aURhdGFHcmlkLWNvbENlbGxTb3J0YWJsZVwiOmUuc29ydGFibGUsXCJNdWlEYXRhR3JpZC1jb2xDZWxsTW92aW5nXCI6cixcIk11aURhdGFHcmlkLWNvbENlbGxTb3J0ZWRcIjpDLFwiTXVpRGF0YUdyaWQtY29sQ2VsbE51bWVyaWNcIjp2LFwiTXVpRGF0YUdyaWQtd2l0aEJvcmRlclwiOmd9KSxNPWUud2lkdGg7bGV0IEk7bnVsbCE9bCYmKEk9e1wiYXJpYS1zb3J0XCI6XCJhc2NcIj09PWw/XCJhc2NlbmRpbmdcIjpcImRlc2NlbmRpbmdcIn0pO2NvbnN0IGs9cy5jcmVhdGVFbGVtZW50KHMuRnJhZ21lbnQsbnVsbCxzLmNyZWF0ZUVsZW1lbnQodWkse2RpcmVjdGlvbjpsLGluZGV4Om8saGlkZTplLmhpZGVTb3J0SWNvbnN9KSxzLmNyZWF0ZUVsZW1lbnQodmkse2NvdW50ZXI6aX0pKSxEPXMuY3JlYXRlRWxlbWVudChnaSx7Y29sdW1uOmV9KTtyZXR1cm4gcy51c2VMYXlvdXRFZmZlY3QoKCgpPT57Y29uc3QgZT1kLmN1cnJlbnQuZ2V0U3RhdGUoKS5jb2x1bW5NZW51O2lmKGMmJiFlLm9wZW4pe2NvbnN0IGU9cC5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0YWJpbmRleD1cIjBcIl0nKTtlP2UuZm9jdXMoKTpwLmN1cnJlbnQuZm9jdXMoKX19KSkscy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsT2JqZWN0LmFzc2lnbih7cmVmOnAsY2xhc3NOYW1lOngsa2V5OmUuZmllbGQsXCJkYXRhLWZpZWxkXCI6ZS5maWVsZCxzdHlsZTp7d2lkdGg6TSxtaW5XaWR0aDpNLG1heFdpZHRoOk19LHJvbGU6XCJjb2x1bW5oZWFkZXJcIix0YWJJbmRleDp1LFwiYXJpYS1jb2xpbmRleFwiOnQrMX0sSSx5KSxzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixPYmplY3QuYXNzaWduKHtjbGFzc05hbWU6XCJNdWlEYXRhR3JpZC1jb2xDZWxsLWRyYWdnYWJsZVwiLGRyYWdnYWJsZTohZn0sRSksIWgmJnYmJiFlLmRpc2FibGVDb2x1bW5NZW51JiZELHMuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJNdWlEYXRhR3JpZC1jb2xDZWxsVGl0bGVDb250YWluZXJcIn0sdiYmayx3fHxzLmNyZWF0ZUVsZW1lbnQocGkse2xhYmVsOmUuaGVhZGVyTmFtZXx8ZS5maWVsZCxkZXNjcmlwdGlvbjplLmRlc2NyaXB0aW9uLGNvbHVtbldpZHRoOk19KSwhdiYmayksIXYmJiFoJiYhZS5kaXNhYmxlQ29sdW1uTWVudSYmRCkscy5jcmVhdGVFbGVtZW50KG1pLE9iamVjdC5hc3NpZ24oe3Jlc2l6YWJsZTohYiYmISFlLnJlc2l6YWJsZSxyZXNpemluZzpuLGhlaWdodDptfSxTKSkpfSkpLE9pPWU9PmUucmVuZGVyaW5nLHlpPXYoT2ksKGU9PmUucmVhbFNjcm9sbCkpO2Z1bmN0aW9uIEVpKGUsdCxyLG4pe2NvbnN0IGw9TW8oXCJ1c2VHcmlkQXBpRXZlbnRIYW5kbGVyXCIpO3MudXNlRWZmZWN0KCgoKT0+e2lmKHImJnQpcmV0dXJuIGUuY3VycmVudC5zdWJzY3JpYmVFdmVudCh0LHIsbil9KSxbZSxsLHQscixuXSl9Y29uc3QgU2k9e2lzRmlyc3Q6ITB9O2Z1bmN0aW9uIHhpKGUsdCxyKXtFaShlLHQscixTaSl9Y29uc3QgTWk9cy5tZW1vKChmdW5jdGlvbihlKXtjb25zdHtzY3JvbGxEaXJlY3Rpb246dH09ZSxyPXMudXNlUmVmKG51bGwpLG49cy51c2VDb250ZXh0KGNvKSxsPXMudXNlUmVmKCksW28sYV09cy51c2VTdGF0ZSghMSksaT1zLnVzZVJlZih7bGVmdDowLHRvcDowfSksYz1zLnVzZUNhbGxiYWNrKChlPT57aS5jdXJyZW50PWV9KSxbXSksdT1zLnVzZUNhbGxiYWNrKChlPT57bGV0IG87aWYoXCJsZWZ0XCI9PT10KW89ZS5jbGllbnRYLXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodDtlbHNle2lmKFwicmlnaHRcIiE9PXQpdGhyb3cgbmV3IEVycm9yKFwid3JvbmcgZGlyXCIpO289TWF0aC5tYXgoMSxlLmNsaWVudFgtci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpfW89MS41KihvLTEpKzEsY2xlYXJUaW1lb3V0KGwuY3VycmVudCksbC5jdXJyZW50PXNldFRpbWVvdXQoKCgpPT57bi5jdXJyZW50LnNjcm9sbCh7bGVmdDppLmN1cnJlbnQubGVmdCtvLHRvcDppLmN1cnJlbnQudG9wfSl9KSl9KSxbdCxuXSk7cy51c2VFZmZlY3QoKCgpPT4oKT0+e2NsZWFyVGltZW91dChsLmN1cnJlbnQpfSksW10pO2NvbnN0IGQ9cy51c2VDYWxsYmFjaygoKCk9PnthKChlPT4hZSkpfSksW10pO3JldHVybiBFaShuLFwic2Nyb2xsaW5nOnJvd3NcIixjKSxFaShuLFwiY29sdW1uSGVhZGVyRHJhZ1N0YXJ0XCIsZCksRWkobixcImNvbHVtbkhlYWRlckRyYWdFbmRcIixkKSxvP3MuY3JlYXRlRWxlbWVudChcImRpdlwiLHtyZWY6cixjbGFzc05hbWU6S24oXCJNdWlEYXRhR3JpZC1zY3JvbGxBcmVhXCIsXCJNdWlEYXRhR3JpZC1zY3JvbGxBcmVhLVwiK3QpLG9uRHJhZ092ZXI6dX0pOm51bGx9KSksSWk9ZT0+ZS5jb2x1bW5SZW9yZGVyLGtpPXYoSWksKGU9PmUuZHJhZ0NvbCkpLERpPWU9PmUuY29sdW1uUmVzaXplLFBpPXYoRGksKGU9PmUucmVzaXppbmdDb2x1bW5GaWVsZCkpO2Z1bmN0aW9uIFJpKGUpe2NvbnN0e2NvbHVtbnM6dH09ZSxyPXMudXNlQ29udGV4dChjbyksbj1lYShyLEVhKSxsPWVhKHIsVmEpLG89ZWEocixZYSksYT1lYShyLGtpKSxpPWVhKHIsUGkpLGM9ZWEocixrYSksdT1lYShyLE9pKS5yZW5kZXJDb250ZXh0LGQ9ZWEocixSYSkscD1lYShyLFBhKSxtPWU9Pm51bGw9PXU/ZTplK3UuZmlyc3RDb2xJZHgsZj10Lm1hcCgoKGUsdCk9Pntjb25zdCByPW0odCksdT0wPT09cixmPSEobnVsbD09PWQmJm51bGw9PT1wKSxnPW51bGwhPT1kJiZkLmNvbEluZGV4PT09cnx8dSYmIWY/MDotMSxiPW51bGwhPT1jJiZjLmNvbEluZGV4PT09cjtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KHdpLE9iamVjdC5hc3NpZ24oe2tleTplLmZpZWxkfSxsW2UuZmllbGRdLHtmaWx0ZXJJdGVtc0NvdW50ZXI6b1tlLmZpZWxkXSYmb1tlLmZpZWxkXS5sZW5ndGgsb3B0aW9uczpuLGlzRHJhZ2dpbmc6ZS5maWVsZD09PWEsY29sdW1uOmUsY29sSW5kZXg6bSh0KSxpc1Jlc2l6aW5nOmk9PT1lLmZpZWxkLGhhc0ZvY3VzOmIsdGFiSW5kZXg6Z30pKX0pKTtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KHMuRnJhZ21lbnQsbnVsbCxmKX1jb25zdCBGaT1lPT5lLnNjcm9sbEJhcixMaT1zLmZvcndhcmRSZWYoKGZ1bmN0aW9uKGUsdCl7dmFyIHI7Y29uc3Qgbj1zLnVzZUNvbnRleHQoY28pLGw9ZWEobixpYSksbz1lYShuLGdhKSxhPWVhKG4saG8pLGk9ZWEobixPaSkucmVuZGVyQ29udGV4dCx7aGFzU2Nyb2xsWDpjfT1lYShuLEZpKSx1PUtuKFwiTXVpRGF0YUdyaWQtY29sQ2VsbFdyYXBwZXJcIix7c2Nyb2xsOmMsXCJNdWlEYXRhR3JpZC1jb2xDZWxsLWRyb3Bab25lXCI6ZWEobixraSl9KSxkPXMudXNlTWVtbygoKCk9Pm51bGw9PWk/W106bC5zbGljZShpLmZpcnN0Q29sSWR4LGkubGFzdENvbElkeCsxKSksW2wsaV0pO3JldHVybiBzLmNyZWF0ZUVsZW1lbnQocy5GcmFnbWVudCxudWxsLHMuY3JlYXRlRWxlbWVudChNaSx7c2Nyb2xsRGlyZWN0aW9uOlwibGVmdFwifSkscy5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3JlZjp0LGNsYXNzTmFtZTp1LFwiYXJpYS1yb3dpbmRleFwiOjEscm9sZTpcInJvd1wiLHN0eWxlOnttaW5XaWR0aDpudWxsPT09KHI9bnVsbD09bz92b2lkIDA6by50b3RhbFNpemVzKXx8dm9pZCAwPT09cj92b2lkIDA6ci53aWR0aH19LHMuY3JlYXRlRWxlbWVudChwbyx7d2lkdGg6bnVsbD09aT92b2lkIDA6aS5sZWZ0RW1wdHlXaWR0aCxoZWlnaHQ6YX0pLHMuY3JlYXRlRWxlbWVudChSaSx7Y29sdW1uczpkfSkscy5jcmVhdGVFbGVtZW50KHBvLHt3aWR0aDpudWxsPT1pP3ZvaWQgMDppLnJpZ2h0RW1wdHlXaWR0aCxoZWlnaHQ6YX0pKSxzLmNyZWF0ZUVsZW1lbnQoTWkse3Njcm9sbERpcmVjdGlvbjpcInJpZ2h0XCJ9KSl9KSksamk9ZT0+e2NvbnN0e29uQ2xpY2s6dH09ZSxyPXMudXNlQ29udGV4dChjbyksbj1lYShyLEVhKSxsPXMudXNlQ2FsbGJhY2soKGU9Pnt0KGUpLHIuY3VycmVudC5zaG93UHJlZmVyZW5jZXMoQ2kuY29sdW1ucyl9KSxbcix0XSk7cmV0dXJuIG4uZGlzYWJsZUNvbHVtblNlbGVjdG9yP251bGw6cy5jcmVhdGVFbGVtZW50KEUse29uQ2xpY2s6bH0sci5jdXJyZW50LmdldExvY2FsZVRleHQoXCJjb2x1bW5NZW51U2hvd0NvbHVtbnNcIikpfSx6aT1lPT57Y29uc3R7Y29sdW1uOnQsb25DbGljazpyfT1lLG49cy51c2VDb250ZXh0KGNvKSxsPWVhKG4sRWEpLG89cy51c2VDYWxsYmFjaygoZT0+e3IoZSksbi5jdXJyZW50LnNob3dGaWx0ZXJQYW5lbChudWxsPT10P3ZvaWQgMDp0LmZpZWxkKX0pLFtuLG51bGw9PXQ/dm9pZCAwOnQuZmllbGQscl0pO3JldHVybiBsLmRpc2FibGVDb2x1bW5GaWx0ZXJ8fCEobnVsbD09dD92b2lkIDA6dC5maWx0ZXJhYmxlKT9udWxsOnMuY3JlYXRlRWxlbWVudChFLHtvbkNsaWNrOm99LG4uY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiY29sdW1uTWVudUZpbHRlclwiKSl9LFRpPXAoKGU9Pih7cm9vdDp7ekluZGV4OmUuekluZGV4Lm1vZGFsLFwiJiAuTXVpRGF0YUdyaWQtZ3JpZE1lbnVMaXN0XCI6e291dGxpbmU6MH19fSkpLHtuYW1lOlwiTXVpRGF0YUdyaWRNZW51XCJ9KSxBaT17XCJib3R0b20tc3RhcnRcIjpcInRvcCBsZWZ0XCIsXCJib3R0b20tZW5kXCI6XCJ0b3AgcmlnaHRcIn0sX2k9ZT0+e2NvbnN0e29wZW46dCx0YXJnZXQ6cixvbkNsaWNrQXdheTpuLGNoaWxkcmVuOmwscG9zaXRpb246b309ZSxhPWdsKGUsW1wib3BlblwiLFwidGFyZ2V0XCIsXCJvbkNsaWNrQXdheVwiLFwiY2hpbGRyZW5cIixcInBvc2l0aW9uXCJdKSxpPXMudXNlUmVmKHIpLGM9cy51c2VSZWYodCksdT1UaSgpO3JldHVybiBzLnVzZUVmZmVjdCgoKCk9PntjLmN1cnJlbnQmJmkuY3VycmVudCYmaS5jdXJyZW50LmZvY3VzKCksYy5jdXJyZW50PXQsaS5jdXJyZW50PXJ9KSxbdCxyXSkscy5jcmVhdGVFbGVtZW50KEksT2JqZWN0LmFzc2lnbih7Y2xhc3NOYW1lOnUucm9vdCxvcGVuOnQsYW5jaG9yRWw6cix0cmFuc2l0aW9uOiEwLHBsYWNlbWVudDpvfSxhKSwoKHtUcmFuc2l0aW9uUHJvcHM6ZSxwbGFjZW1lbnQ6dH0pPT5zLmNyZWF0ZUVsZW1lbnQoUyx7b25DbGlja0F3YXk6bn0scy5jcmVhdGVFbGVtZW50KHgsT2JqZWN0LmFzc2lnbih7fSxlLHtzdHlsZTp7dHJhbnNmb3JtT3JpZ2luOkFpW3RdfX0pLHMuY3JlYXRlRWxlbWVudChNLG51bGwsbCkpKSkpfSxHaT1lPT5lLmNvbHVtbk1lbnU7ZnVuY3Rpb24gSGkoe0NvbnRlbnRDb21wb25lbnQ6ZSxjb250ZW50Q29tcG9uZW50UHJvcHM6dH0pe2NvbnN0IHI9cy51c2VDb250ZXh0KGNvKSxuPWVhKHIsR2kpLGw9bi5maWVsZD9udWxsPT1yP3ZvaWQgMDpyLmN1cnJlbnQuZ2V0Q29sdW1uRnJvbUZpZWxkKG4uZmllbGQpOm51bGwsW28sYV09cy51c2VTdGF0ZShudWxsKSxpPXMudXNlUmVmKCksYz1zLnVzZVJlZigpLHU9cy51c2VDYWxsYmFjaygoKCk9PntudWxsPT1yfHxyLmN1cnJlbnQuaGlkZUNvbHVtbk1lbnUoKX0pLFtyXSksZD1zLnVzZUNhbGxiYWNrKCgoKT0+e2kuY3VycmVudD1zZXRUaW1lb3V0KHUsNTApfSksW3VdKSxwPXMudXNlQ2FsbGJhY2soKCh7b3BlbjplLGZpZWxkOnR9KT0+e2lmKHQmJmUpe2MuY3VycmVudD1zZXRUaW1lb3V0KCgoKT0+Y2xlYXJUaW1lb3V0KGkuY3VycmVudCkpLDApO2NvbnN0IGU9R24oci5jdXJyZW50LnJvb3RFbGVtZW50UmVmLmN1cnJlbnQsdCkucXVlcnlTZWxlY3RvcihcIi5NdWlEYXRhR3JpZC1tZW51SWNvbkJ1dHRvblwiKTthKGUpfX0pLFtyXSk7cmV0dXJuIHMudXNlRWZmZWN0KCgoKT0+e3Aobil9KSxbbixwXSkscy51c2VFZmZlY3QoKCgpPT4oKT0+e2NsZWFyVGltZW91dChpLmN1cnJlbnQpLGNsZWFyVGltZW91dChjLmN1cnJlbnQpfSksW10pLG8mJmw/cy5jcmVhdGVFbGVtZW50KF9pLHtwbGFjZW1lbnQ6XCJib3R0b20tXCIrKFwicmlnaHRcIj09PWwuYWxpZ24/XCJzdGFydFwiOlwiZW5kXCIpLG9wZW46bi5vcGVuLHRhcmdldDpvLG9uQ2xpY2tBd2F5OmR9LHMuY3JlYXRlRWxlbWVudChlLE9iamVjdC5hc3NpZ24oe2N1cnJlbnRDb2x1bW46bCxoaWRlTWVudTp1LG9wZW46bi5vcGVuLGlkOm4uaWQsbGFiZWxsZWRieTpuLmxhYmVsbGVkYnl9LHQpKSk6bnVsbH1jb25zdCBOaT1lPT57Y29uc3R7Y29sdW1uOnQsb25DbGljazpyfT1lLG49cy51c2VDb250ZXh0KGNvKSxsPWVhKG4sRWEpLG89cy51c2VSZWYoKSxhPXMudXNlQ2FsbGJhY2soKGU9PntyKGUpLG8uY3VycmVudD1zZXRUaW1lb3V0KCgoKT0+e24uY3VycmVudC50b2dnbGVDb2x1bW4obnVsbD09dD92b2lkIDA6dC5maWVsZCwhMCl9KSwxMCl9KSxbbixudWxsPT10P3ZvaWQgMDp0LmZpZWxkLHJdKTtyZXR1cm4gcy51c2VFZmZlY3QoKCgpPT4oKT0+Y2xlYXJUaW1lb3V0KG8uY3VycmVudCkpLFtdKSxsLmRpc2FibGVDb2x1bW5TZWxlY3Rvcj9udWxsOnMuY3JlYXRlRWxlbWVudChFLHtvbkNsaWNrOmF9LG4uY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiY29sdW1uTWVudUhpZGVDb2x1bW5cIikpfSxWaT1lPT57Y29uc3R7Y29sdW1uOnQsb25DbGljazpyfT1lLG49cy51c2VDb250ZXh0KGNvKSxsPWVhKG4sTmEpLG89cy51c2VNZW1vKCgoKT0+e2lmKCF0KXJldHVybiBudWxsO2NvbnN0IGU9bC5maW5kKChlPT5lLmZpZWxkPT09dC5maWVsZCkpO3JldHVybiBudWxsPT1lP3ZvaWQgMDplLnNvcnR9KSxbdCxsXSksYT1zLnVzZUNhbGxiYWNrKChlPT57cihlKTtjb25zdCBsPWUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpfHxudWxsO251bGw9PW58fG4uY3VycmVudC5zb3J0Q29sdW1uKHQsbCl9KSxbbix0LHJdKTtyZXR1cm4gdCYmdC5zb3J0YWJsZT9zLmNyZWF0ZUVsZW1lbnQocy5GcmFnbWVudCxudWxsLHMuY3JlYXRlRWxlbWVudChFLHtvbkNsaWNrOmEsZGlzYWJsZWQ6bnVsbD09b30sbi5jdXJyZW50LmdldExvY2FsZVRleHQoXCJjb2x1bW5NZW51VW5zb3J0XCIpKSxzLmNyZWF0ZUVsZW1lbnQoRSx7b25DbGljazphLFwiZGF0YS12YWx1ZVwiOlwiYXNjXCIsZGlzYWJsZWQ6XCJhc2NcIj09PW99LG4uY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiY29sdW1uTWVudVNvcnRBc2NcIikpLHMuY3JlYXRlRWxlbWVudChFLHtvbkNsaWNrOmEsXCJkYXRhLXZhbHVlXCI6XCJkZXNjXCIsZGlzYWJsZWQ6XCJkZXNjXCI9PT1vfSxuLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcImNvbHVtbk1lbnVTb3J0RGVzY1wiKSkpOm51bGx9LEJpPXMuZm9yd2FyZFJlZigoZnVuY3Rpb24oZSx0KXtjb25zdHtoaWRlTWVudTpyLGN1cnJlbnRDb2x1bW46bixvcGVuOmwsaWQ6byxsYWJlbGxlZGJ5OmEsY2xhc3NOYW1lOml9PWUsYz1nbChlLFtcImhpZGVNZW51XCIsXCJjdXJyZW50Q29sdW1uXCIsXCJvcGVuXCIsXCJpZFwiLFwibGFiZWxsZWRieVwiLFwiY2xhc3NOYW1lXCJdKSx1PXMudXNlQ2FsbGJhY2soKGU9PntxbihlLmtleSkmJmUucHJldmVudERlZmF1bHQoKSxtbChlLmtleSkmJnIoKX0pLFtyXSk7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChrLE9iamVjdC5hc3NpZ24oe2lkOm8scmVmOnQsY2xhc3NOYW1lOktuKFwiTXVpRGF0YUdyaWQtZ3JpZE1lbnVMaXN0XCIsaSksXCJhcmlhLWxhYmVsbGVkYnlcIjphLG9uS2V5RG93bjp1LGF1dG9Gb2N1czpsfSxjKSxzLmNyZWF0ZUVsZW1lbnQoVmkse29uQ2xpY2s6cixjb2x1bW46bn0pLHMuY3JlYXRlRWxlbWVudCh6aSx7b25DbGljazpyLGNvbHVtbjpufSkscy5jcmVhdGVFbGVtZW50KE5pLHtvbkNsaWNrOnIsY29sdW1uOm59KSxzLmNyZWF0ZUVsZW1lbnQoamkse29uQ2xpY2s6cixjb2x1bW46bn0pKX0pKSwkaT1wKCgoKT0+KHtyb290OntkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixvdmVyZmxvdzpcImF1dG9cIixmbGV4OlwiMSAxXCIsbWF4SGVpZ2h0OjQwMH19KSkse25hbWU6XCJNdWlEYXRhR3JpZFBhbmVsQ29udGVudFwifSk7ZnVuY3Rpb24gV2koZSl7Y29uc3QgdD0kaSgpLHtjbGFzc05hbWU6cn09ZSxuPWdsKGUsW1wiY2xhc3NOYW1lXCJdKTtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsT2JqZWN0LmFzc2lnbih7Y2xhc3NOYW1lOktuKHQucm9vdCxyKX0sbikpfWNvbnN0IFVpPXAoKCgpPT4oe3Jvb3Q6e3BhZGRpbmc6NCxkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwifX0pKSx7bmFtZTpcIk11aURhdGFHcmlkUGFuZWxGb290ZXJcIn0pO2Z1bmN0aW9uIEtpKGUpe2NvbnN0IHQ9VWkoKSx7Y2xhc3NOYW1lOnJ9PWUsbj1nbChlLFtcImNsYXNzTmFtZVwiXSk7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChcImRpdlwiLE9iamVjdC5hc3NpZ24oe2NsYXNzTmFtZTpLbih0LnJvb3Qscil9LG4pKX1jb25zdCBaaT1wKChlPT4oe3Jvb3Q6e3BhZGRpbmc6ZS5zcGFjaW5nKDEpfX0pKSx7bmFtZTpcIk11aURhdGFHcmlkUGFuZWxIZWFkZXJcIn0pO2Z1bmN0aW9uIFhpKGUpe2NvbnN0IHQ9WmkoKSx7Y2xhc3NOYW1lOnJ9PWUsbj1nbChlLFtcImNsYXNzTmFtZVwiXSk7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChcImRpdlwiLE9iamVjdC5hc3NpZ24oe2NsYXNzTmFtZTpLbih0LnJvb3Qscil9LG4pKX1jb25zdCBxaT1wKCgoKT0+KHtyb290OntkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixmbGV4OjEsXCImOmZvY3VzXCI6e291dGxpbmU6MH19fSkpLHtuYW1lOlwiTXVpRGF0YUdyaWRQYW5lbFdyYXBwZXJcIn0pLFlpPSgpPT4hMDtmdW5jdGlvbiBKaShlKXtjb25zdCB0PXFpKCkse2NsYXNzTmFtZTpyfT1lLG49Z2woZSxbXCJjbGFzc05hbWVcIl0pO3JldHVybiBzLmNyZWF0ZUVsZW1lbnQoRix7b3BlbjohMCxkaXNhYmxlRW5mb3JjZUZvY3VzOiEwLGlzRW5hYmxlZDpZaSxnZXREb2M6KCk9PmRvY3VtZW50fSxzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixPYmplY3QuYXNzaWduKHt0YWJJbmRleDotMSxjbGFzc05hbWU6S24odC5yb290LHIpfSxuKSkpfWNvbnN0IFFpPXAoe2NvbnRhaW5lcjp7cGFkZGluZzpcIjhweCAwcHggOHB4IDhweFwifSxjb2x1bW46e2Rpc3BsYXk6XCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCIscGFkZGluZzpcIjFweCA4cHggMXB4IDdweFwifSxzd2l0Y2g6e21hcmdpblJpZ2h0OjR9LGRyYWdJY29uOntqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCJ9fSx7bmFtZTpcIk11aURhdGFHcmlkQ29sdW1uc1BhbmVsXCJ9KTtmdW5jdGlvbiBlcygpe2NvbnN0IGU9UWkoKSx0PXMudXNlQ29udGV4dChjbykscj1zLnVzZVJlZihudWxsKSxuPWVhKHQsYWEpLHtkaXNhYmxlQ29sdW1uUmVvcmRlcjpsfT1lYSh0LEVhKSxbbyxhXT1zLnVzZVN0YXRlKFwiXCIpLGk9cy51c2VDYWxsYmFjaygoZT0+e2NvbnN0e25hbWU6cn09ZS50YXJnZXQ7dC5jdXJyZW50LnRvZ2dsZUNvbHVtbihyKX0pLFt0XSksYz1zLnVzZUNhbGxiYWNrKChlPT57dC5jdXJyZW50LnVwZGF0ZUNvbHVtbnMobi5tYXAoKHQ9Pih0LmhpZGU9ZSx0KSkpKX0pLFt0LG5dKSx1PXMudXNlQ2FsbGJhY2soKCgpPT5jKCExKSksW2NdKSxkPXMudXNlQ2FsbGJhY2soKCgpPT5jKCEwKSksW2NdKSxwPXMudXNlQ2FsbGJhY2soKGU9PnthKGUudGFyZ2V0LnZhbHVlKX0pLFtdKSxtPXMudXNlTWVtbygoKCk9Pm8/bi5maWx0ZXIoKGU9PmUuZmllbGQudG9Mb3dlckNhc2UoKS5pbmRleE9mKG8udG9Mb3dlckNhc2UoKSk+LTF8fGUuaGVhZGVyTmFtZSYmZS5oZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihvLnRvTG93ZXJDYXNlKCkpPi0xKSk6biksW24sb10pO3JldHVybiBzLnVzZUVmZmVjdCgoKCk9PntyLmN1cnJlbnQuZm9jdXMoKX0pLFtdKSxzLmNyZWF0ZUVsZW1lbnQoSmksbnVsbCxzLmNyZWF0ZUVsZW1lbnQoWGksbnVsbCxzLmNyZWF0ZUVsZW1lbnQoYix7bGFiZWw6dC5jdXJyZW50LmdldExvY2FsZVRleHQoXCJjb2x1bW5zUGFuZWxUZXh0RmllbGRMYWJlbFwiKSxwbGFjZWhvbGRlcjp0LmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcImNvbHVtbnNQYW5lbFRleHRGaWVsZFBsYWNlaG9sZGVyXCIpLGlucHV0UmVmOnIsdmFsdWU6byxvbkNoYW5nZTpwLHZhcmlhbnQ6XCJzdGFuZGFyZFwiLGZ1bGxXaWR0aDohMH0pKSxzLmNyZWF0ZUVsZW1lbnQoV2ksbnVsbCxzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOmUuY29udGFpbmVyfSxtLm1hcCgocj0+cy5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2tleTpyLmZpZWxkLGNsYXNzTmFtZTplLmNvbHVtbn0scy5jcmVhdGVFbGVtZW50KFIse2NvbnRyb2w6cy5jcmVhdGVFbGVtZW50KEQse2NsYXNzTmFtZTplLnN3aXRjaCxjaGVja2VkOiFyLmhpZGUsb25DbGljazppLG5hbWU6ci5maWVsZCxjb2xvcjpcInByaW1hcnlcIixzaXplOlwic21hbGxcIn0pLGxhYmVsOnIuaGVhZGVyTmFtZXx8ci5maWVsZH0pLCFsJiZzLmNyZWF0ZUVsZW1lbnQoTyx7ZHJhZ2dhYmxlOiEwLGNsYXNzTmFtZTplLmRyYWdJY29uLFwiYXJpYS1sYWJlbFwiOnQuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiY29sdW1uc1BhbmVsRHJhZ0ljb25MYWJlbFwiKSx0aXRsZTp0LmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcImNvbHVtbnNQYW5lbERyYWdJY29uTGFiZWxcIiksc2l6ZTpcInNtYWxsXCIsZGlzYWJsZWQ6ITB9LHMuY3JlYXRlRWxlbWVudChqbCxudWxsKSkpKSkpKSxzLmNyZWF0ZUVsZW1lbnQoS2ksbnVsbCxzLmNyZWF0ZUVsZW1lbnQoUCx7b25DbGljazpkLGNvbG9yOlwicHJpbWFyeVwifSx0LmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcImNvbHVtbnNQYW5lbEhpZGVBbGxCdXR0b25cIikpLHMuY3JlYXRlRWxlbWVudChQLHtvbkNsaWNrOnUsY29sb3I6XCJwcmltYXJ5XCJ9LHQuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiY29sdW1uc1BhbmVsU2hvd0FsbEJ1dHRvblwiKSkpKX1jb25zdCB0cz1wKChlPT4oe3Jvb3Q6e3pJbmRleDplLnpJbmRleC5tb2RhbH0scGFwZXI6e2JhY2tncm91bmRDb2xvcjplLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixtaW5XaWR0aDozMDAsbWF4SGVpZ2h0OjQ1MCxkaXNwbGF5OlwiZmxleFwifX0pKSx7bmFtZTpcIk11aURhdGFHcmlkUGFuZWxcIn0pLHJzPXMuZm9yd2FyZFJlZigoZnVuY3Rpb24oZSx0KXt2YXIgcixuO2NvbnN0e2NoaWxkcmVuOmwsb3BlbjpvfT1lLGE9Z2woZSxbXCJjaGlsZHJlblwiLFwib3BlblwiXSksaT10cygpLGM9cy51c2VDb250ZXh0KGNvKSx1PXMudXNlQ2FsbGJhY2soKCgpPT57Yy5jdXJyZW50LmhpZGVQcmVmZXJlbmNlcygpfSksW2NdKSxkPXMudXNlQ2FsbGJhY2soKGU9PntabihlLmtleSkmJmMuY3VycmVudC5oaWRlUHJlZmVyZW5jZXMoKX0pLFtjXSk7bGV0IHA7cmV0dXJuIGMuY3VycmVudCYmKG51bGw9PT0ocj1jLmN1cnJlbnQuY29sdW1uSGVhZGVyc0VsZW1lbnRSZWYpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLmN1cnJlbnQpJiYocD1udWxsPT09KG49bnVsbD09Yz92b2lkIDA6Yy5jdXJyZW50LmNvbHVtbkhlYWRlcnNFbGVtZW50UmVmKXx8dm9pZCAwPT09bj92b2lkIDA6bi5jdXJyZW50KSxwP3MuY3JlYXRlRWxlbWVudChJLE9iamVjdC5hc3NpZ24oe3JlZjp0LHBsYWNlbWVudDpcImJvdHRvbS1zdGFydFwiLGNsYXNzTmFtZTppLnJvb3Qsb3BlbjpvLGFuY2hvckVsOnAsbW9kaWZpZXJzOk9uKCk/W3tuYW1lOlwiZmxpcFwiLGVuYWJsZWQ6ITF9XTp7ZmxpcDp7ZW5hYmxlZDohMX19fSxhKSxzLmNyZWF0ZUVsZW1lbnQoUyx7b25DbGlja0F3YXk6dX0scy5jcmVhdGVFbGVtZW50KE0se2NsYXNzTmFtZTppLnBhcGVyLGVsZXZhdGlvbjo4LG9uS2V5RG93bjpkfSxsKSkpOm51bGx9KSksbnM9cy5mb3J3YXJkUmVmKChmdW5jdGlvbihlLHQpe3ZhciByLG4sbDtjb25zdCBvPXMudXNlQ29udGV4dChjbyksYT1lYShvLGFhKSxpPWVhKG8sRWEpLGM9ZWEobyxiaSksdT1jLm9wZW5lZFBhbmVsVmFsdWU9PT1DaS5jb2x1bW5zLGQ9IWMub3BlbmVkUGFuZWxWYWx1ZXx8IXUscD1vLmN1cnJlbnQuY29tcG9uZW50cy5Db2x1bW5zUGFuZWwsbT1vLmN1cnJlbnQuY29tcG9uZW50cy5GaWx0ZXJQYW5lbCxmPW8uY3VycmVudC5jb21wb25lbnRzLlBhbmVsO3JldHVybiBzLmNyZWF0ZUVsZW1lbnQoZixPYmplY3QuYXNzaWduKHtyZWY6dCxvcGVuOmEubGVuZ3RoPjAmJmMub3Blbn0sbnVsbD09PShyPW51bGw9PW8/dm9pZCAwOm8uY3VycmVudC5jb21wb25lbnRzUHJvcHMpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLnBhbmVsLGUpLCFpLmRpc2FibGVDb2x1bW5TZWxlY3RvciYmdSYmcy5jcmVhdGVFbGVtZW50KHAsT2JqZWN0LmFzc2lnbih7fSxudWxsPT09KG49bnVsbD09bz92b2lkIDA6by5jdXJyZW50LmNvbXBvbmVudHNQcm9wcyl8fHZvaWQgMD09PW4/dm9pZCAwOm4uY29sdW1uc1BhbmVsKSksIWkuZGlzYWJsZUNvbHVtbkZpbHRlciYmZCYmcy5jcmVhdGVFbGVtZW50KG0sT2JqZWN0LmFzc2lnbih7fSxudWxsPT09KGw9bnVsbD09bz92b2lkIDA6by5jdXJyZW50LmNvbXBvbmVudHNQcm9wcyl8fHZvaWQgMD09PWw/dm9pZCAwOmwuZmlsdGVyUGFuZWwpKSl9KSksbHM9cCgoKCk9Pih7cm9vdDp7ZGlzcGxheTpcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwiLHBhZGRpbmc6OH0sbGlua09wZXJhdG9yU2VsZWN0Ont3aWR0aDo2MH0sY29sdW1uU2VsZWN0Ont3aWR0aDoxNTB9LG9wZXJhdG9yU2VsZWN0Ont3aWR0aDoxMjB9LGZpbHRlclZhbHVlSW5wdXQ6e3dpZHRoOjE5MH0sY2xvc2VJY29uOntmbGV4U2hyaW5rOjAsanVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwiLG1hcmdpblJpZ2h0OjYsbWFyZ2luQm90dG9tOjJ9fSkpLHtuYW1lOlwiTXVpRGF0YUdyaWRGaWx0ZXJGb3JtXCJ9KTtmdW5jdGlvbiBvcyhlKXt2YXIgdDtjb25zdHtpdGVtOm4saGFzTXVsdGlwbGVGaWx0ZXJzOmwsZGVsZXRlRmlsdGVyOm8sYXBwbHlGaWx0ZXJDaGFuZ2VzOmEsbXVsdGlGaWx0ZXJPcGVyYXRvcjppLHNob3dNdWx0aUZpbHRlck9wZXJhdG9yczpjLGRpc2FibGVNdWx0aUZpbHRlck9wZXJhdG9yOnUsYXBwbHlNdWx0aUZpbHRlck9wZXJhdG9yQ2hhbmdlczpkfT1lLHA9bHMoKSxtPXMudXNlQ29udGV4dChjbyksZj1lYShtLGNhKSxbZyxiXT1zLnVzZVN0YXRlKCgoKT0+bi5jb2x1bW5GaWVsZD9tLmN1cnJlbnQuZ2V0Q29sdW1uRnJvbUZpZWxkKG4uY29sdW1uRmllbGQpOm51bGwpKSxbaCxDXT1zLnVzZVN0YXRlKCgoKT0+e3ZhciBlO3JldHVybiBuLm9wZXJhdG9yVmFsdWUmJmcmJihudWxsPT09KGU9Zy5maWx0ZXJPcGVyYXRvcnMpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmZpbmQoKGU9PmUudmFsdWU9PT1uLm9wZXJhdG9yVmFsdWUpKSl8fG51bGx9KSksdj1zLnVzZUNhbGxiYWNrKChlPT57Y29uc3QgdD1lLnRhcmdldC52YWx1ZSxyPW0uY3VycmVudC5nZXRDb2x1bW5Gcm9tRmllbGQodCksbD1yLmZpbHRlck9wZXJhdG9yc1swXTtDKGwpLGIociksYShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sbikse3ZhbHVlOnZvaWQgMCxjb2x1bW5GaWVsZDp0LG9wZXJhdG9yVmFsdWU6bC52YWx1ZX0pKX0pLFttLGEsbl0pLHc9cy51c2VDYWxsYmFjaygoZT0+e3ZhciB0O2NvbnN0IHI9ZS50YXJnZXQudmFsdWU7YShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sbikse29wZXJhdG9yVmFsdWU6cn0pKTtjb25zdCBsPShudWxsPT09KHQ9Zy5maWx0ZXJPcGVyYXRvcnMpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LmZpbmQoKGU9PmUudmFsdWU9PT1yKSkpfHxudWxsO0MobCl9KSxbYSxnLG5dKSx5PXMudXNlQ2FsbGJhY2soKGU9Pntjb25zdCB0PWUudGFyZ2V0LnZhbHVlPT09em8uQW5kLnRvU3RyaW5nKCk/em8uQW5kOnpvLk9yO2QodCl9KSxbZF0pLEU9cy51c2VDYWxsYmFjaygoKCk9PntvKG4pfSksW28sbl0pO3JldHVybiBzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnAucm9vdH0scy5jcmVhdGVFbGVtZW50KEwse3ZhcmlhbnQ6XCJzdGFuZGFyZFwiLGNsYXNzTmFtZTpwLmNsb3NlSWNvbn0scy5jcmVhdGVFbGVtZW50KE8se1wiYXJpYS1sYWJlbFwiOm0uY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiZmlsdGVyUGFuZWxEZWxldGVJY29uTGFiZWxcIiksdGl0bGU6bS5jdXJyZW50LmdldExvY2FsZVRleHQoXCJmaWx0ZXJQYW5lbERlbGV0ZUljb25MYWJlbFwiKSxvbkNsaWNrOkUsc2l6ZTpcInNtYWxsXCJ9LHMuY3JlYXRlRWxlbWVudChSbCx7Zm9udFNpemU6XCJzbWFsbFwifSkpKSxzLmNyZWF0ZUVsZW1lbnQoTCx7Y2xhc3NOYW1lOnAubGlua09wZXJhdG9yU2VsZWN0LHN0eWxlOntkaXNwbGF5Omw/XCJibG9ja1wiOlwibm9uZVwiLHZpc2liaWxpdHk6Yz9cInZpc2libGVcIjpcImhpZGRlblwifX0scy5jcmVhdGVFbGVtZW50KGose2lkOlwiY29sdW1ucy1maWx0ZXItb3BlcmF0b3Itc2VsZWN0LWxhYmVsXCJ9LG0uY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiZmlsdGVyUGFuZWxPcGVyYXRvcnNcIikpLHMuY3JlYXRlRWxlbWVudCh6LHtsYWJlbElkOlwiY29sdW1ucy1maWx0ZXItb3BlcmF0b3Itc2VsZWN0LWxhYmVsXCIsaWQ6XCJjb2x1bW5zLWZpbHRlci1vcGVyYXRvci1zZWxlY3RcIix2YWx1ZTppLG9uQ2hhbmdlOnksZGlzYWJsZWQ6ISF1LG5hdGl2ZTohMH0scy5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIse2tleTp6by5BbmQudG9TdHJpbmcoKSx2YWx1ZTp6by5BbmQudG9TdHJpbmcoKX0sbS5jdXJyZW50LmdldExvY2FsZVRleHQoXCJmaWx0ZXJQYW5lbE9wZXJhdG9yQW5kXCIpKSxzLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIix7a2V5OnpvLk9yLnRvU3RyaW5nKCksdmFsdWU6em8uT3IudG9TdHJpbmcoKX0sbS5jdXJyZW50LmdldExvY2FsZVRleHQoXCJmaWx0ZXJQYW5lbE9wZXJhdG9yT3JcIikpKSkscy5jcmVhdGVFbGVtZW50KEwse3ZhcmlhbnQ6XCJzdGFuZGFyZFwiLGNsYXNzTmFtZTpwLmNvbHVtblNlbGVjdH0scy5jcmVhdGVFbGVtZW50KGose2lkOlwiY29sdW1ucy1maWx0ZXItc2VsZWN0LWxhYmVsXCJ9LG0uY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiZmlsdGVyUGFuZWxDb2x1bW5zXCIpKSxzLmNyZWF0ZUVsZW1lbnQoeix7bGFiZWxJZDpcImNvbHVtbnMtZmlsdGVyLXNlbGVjdC1sYWJlbFwiLGlkOlwiY29sdW1ucy1maWx0ZXItc2VsZWN0XCIsdmFsdWU6bi5jb2x1bW5GaWVsZHx8XCJcIixvbkNoYW5nZTp2LG5hdGl2ZTohMH0sZi5tYXAoKGU9PnMuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLHtrZXk6ZS5maWVsZCx2YWx1ZTplLmZpZWxkfSxlLmhlYWRlck5hbWV8fGUuZmllbGQpKSkpKSxzLmNyZWF0ZUVsZW1lbnQoTCx7dmFyaWFudDpcInN0YW5kYXJkXCIsY2xhc3NOYW1lOnAub3BlcmF0b3JTZWxlY3R9LHMuY3JlYXRlRWxlbWVudChqLHtpZDpcImNvbHVtbnMtb3BlcmF0b3JzLXNlbGVjdC1sYWJlbFwifSxtLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcImZpbHRlclBhbmVsT3BlcmF0b3JzXCIpKSxzLmNyZWF0ZUVsZW1lbnQoeix7bGFiZWxJZDpcImNvbHVtbnMtb3BlcmF0b3JzLXNlbGVjdC1sYWJlbFwiLGlkOlwiY29sdW1ucy1vcGVyYXRvcnMtc2VsZWN0XCIsdmFsdWU6bi5vcGVyYXRvclZhbHVlLG9uQ2hhbmdlOncsbmF0aXZlOiEwfSxudWxsPT09KHQ9bnVsbD09Zz92b2lkIDA6Zy5maWx0ZXJPcGVyYXRvcnMpfHx2b2lkIDA9PT10P3ZvaWQgMDp0Lm1hcCgoZT0+cy5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIse2tleTplLnZhbHVlLHZhbHVlOmUudmFsdWV9LGUubGFiZWx8fG0uY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiZmlsdGVyT3BlcmF0b3JcIityKGUudmFsdWUpKSkpKSkpLHMuY3JlYXRlRWxlbWVudChMLHt2YXJpYW50Olwic3RhbmRhcmRcIixjbGFzc05hbWU6cC5maWx0ZXJWYWx1ZUlucHV0fSxnJiZoJiZzLmNyZWF0ZUVsZW1lbnQoaC5JbnB1dENvbXBvbmVudCxPYmplY3QuYXNzaWduKHthcGlSZWY6bSxpdGVtOm4sYXBwbHlWYWx1ZTphfSxoLklucHV0Q29tcG9uZW50UHJvcHMpKSkpfWZ1bmN0aW9uIGFzKCl7Y29uc3QgZT1zLnVzZUNvbnRleHQoY28pLFt0XT1RbyhlKSx7ZGlzYWJsZU11bHRpcGxlQ29sdW1uc0ZpbHRlcmluZzpyfT1lYShlLEVhKSxuPXMudXNlTWVtbygoKCk9PnQuZmlsdGVyLml0ZW1zLmxlbmd0aD4xKSxbdC5maWx0ZXIuaXRlbXMubGVuZ3RoXSksbD1zLnVzZUNhbGxiYWNrKCh0PT57ZS5jdXJyZW50LnVwc2VydEZpbHRlcih0KX0pLFtlXSksbz1zLnVzZUNhbGxiYWNrKCh0PT57ZS5jdXJyZW50LmFwcGx5RmlsdGVyTGlua09wZXJhdG9yKHQpfSksW2VdKSxhPXMudXNlQ2FsbGJhY2soKCgpPT57ZS5jdXJyZW50LnVwc2VydEZpbHRlcih7fSl9KSxbZV0pLGk9cy51c2VDYWxsYmFjaygodD0+e2UuY3VycmVudC5kZWxldGVGaWx0ZXIodCl9KSxbZV0pO3JldHVybiBzLnVzZUVmZmVjdCgoKCk9PnswPT09dC5maWx0ZXIuaXRlbXMubGVuZ3RoJiZhKCl9KSxbYSx0LmZpbHRlci5pdGVtcy5sZW5ndGhdKSxzLmNyZWF0ZUVsZW1lbnQoSmksbnVsbCxzLmNyZWF0ZUVsZW1lbnQoV2ksbnVsbCx0LmZpbHRlci5pdGVtcy5tYXAoKChlLHIpPT5zLmNyZWF0ZUVsZW1lbnQob3Mse2tleTplLmlkLGl0ZW06ZSxhcHBseUZpbHRlckNoYW5nZXM6bCxkZWxldGVGaWx0ZXI6aSxoYXNNdWx0aXBsZUZpbHRlcnM6bixzaG93TXVsdGlGaWx0ZXJPcGVyYXRvcnM6cj4wLG11bHRpRmlsdGVyT3BlcmF0b3I6dC5maWx0ZXIubGlua09wZXJhdG9yLGRpc2FibGVNdWx0aUZpbHRlck9wZXJhdG9yOjEhPT1yLGFwcGx5TXVsdGlGaWx0ZXJPcGVyYXRvckNoYW5nZXM6b30pKSkpLCFyJiZzLmNyZWF0ZUVsZW1lbnQoS2ksbnVsbCxzLmNyZWF0ZUVsZW1lbnQoUCx7b25DbGljazphLHN0YXJ0SWNvbjpzLmNyZWF0ZUVsZW1lbnQoRmwsbnVsbCksY29sb3I6XCJwcmltYXJ5XCJ9LGUuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiZmlsdGVyUGFuZWxBZGRGaWx0ZXJcIikpKSl9Y29uc3QgaXM9cy5mb3J3YXJkUmVmKChmdW5jdGlvbihlLHQpe2NvbnN0IHI9cy51c2VDb250ZXh0KGNvKSxuPWVhKHIsRWEpLGw9ci5jdXJyZW50LmNvbXBvbmVudHMuQ29sdW1uU2VsZWN0b3JJY29uLHtvcGVuOm8sb3BlbmVkUGFuZWxWYWx1ZTphfT1lYShyLGJpKSxpPXMudXNlQ2FsbGJhY2soKCgpPT57byYmYT09PUNpLmNvbHVtbnM/ci5jdXJyZW50LmhpZGVQcmVmZXJlbmNlcygpOnIuY3VycmVudC5zaG93UHJlZmVyZW5jZXMoQ2kuY29sdW1ucyl9KSxbcixvLGFdKTtyZXR1cm4gbi5kaXNhYmxlQ29sdW1uU2VsZWN0b3I/bnVsbDpzLmNyZWF0ZUVsZW1lbnQoUCxPYmplY3QuYXNzaWduKHtyZWY6dCxvbkNsaWNrOmksc2l6ZTpcInNtYWxsXCIsY29sb3I6XCJwcmltYXJ5XCIsXCJhcmlhLWxhYmVsXCI6ci5jdXJyZW50LmdldExvY2FsZVRleHQoXCJ0b29sYmFyQ29sdW1uc0xhYmVsXCIpLHN0YXJ0SWNvbjpzLmNyZWF0ZUVsZW1lbnQobCxudWxsKX0sZSksci5jdXJyZW50LmdldExvY2FsZVRleHQoXCJ0b29sYmFyQ29sdW1uc1wiKSl9KSksc3M9cy5mb3J3YXJkUmVmKChmdW5jdGlvbihlLHQpe2NvbnN0IHI9cy51c2VDb250ZXh0KGNvKSxsPWVhKHIsRWEpLG89ZWEocixnbyksYT1uKCksaT1uKCksW2MsdV09cy51c2VTdGF0ZShudWxsKSxkPXIuY3VycmVudC5jb21wb25lbnRzLkRlbnNpdHlDb21wYWN0SWNvbixwPXIuY3VycmVudC5jb21wb25lbnRzLkRlbnNpdHlTdGFuZGFyZEljb24sbT1yLmN1cnJlbnQuY29tcG9uZW50cy5EZW5zaXR5Q29tZm9ydGFibGVJY29uLGY9W3tpY29uOnMuY3JlYXRlRWxlbWVudChkLG51bGwpLGxhYmVsOnIuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwidG9vbGJhckRlbnNpdHlDb21wYWN0XCIpLHZhbHVlOlBvLkNvbXBhY3R9LHtpY29uOnMuY3JlYXRlRWxlbWVudChwLG51bGwpLGxhYmVsOnIuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwidG9vbGJhckRlbnNpdHlTdGFuZGFyZFwiKSx2YWx1ZTpQby5TdGFuZGFyZH0se2ljb246cy5jcmVhdGVFbGVtZW50KG0sbnVsbCksbGFiZWw6ci5jdXJyZW50LmdldExvY2FsZVRleHQoXCJ0b29sYmFyRGVuc2l0eUNvbWZvcnRhYmxlXCIpLHZhbHVlOlBvLkNvbWZvcnRhYmxlfV0sZz1zLnVzZUNhbGxiYWNrKCgoKT0+e3N3aXRjaChvKXtjYXNlIFBvLkNvbXBhY3Q6cmV0dXJuIHMuY3JlYXRlRWxlbWVudChkLG51bGwpO2Nhc2UgUG8uQ29tZm9ydGFibGU6cmV0dXJuIHMuY3JlYXRlRWxlbWVudChtLG51bGwpO2RlZmF1bHQ6cmV0dXJuIHMuY3JlYXRlRWxlbWVudChwLG51bGwpfX0pLFtvLGQsbSxwXSksYj0oKT0+dShudWxsKTtpZihsLmRpc2FibGVEZW5zaXR5U2VsZWN0b3IpcmV0dXJuIG51bGw7Y29uc3QgaD1mLm1hcCgoKGUsdCk9PnMuY3JlYXRlRWxlbWVudChFLHtrZXk6dCxvbkNsaWNrOigpPT57cmV0dXJuIHQ9ZS52YWx1ZSxyLmN1cnJlbnQuc2V0RGVuc2l0eSh0KSx2b2lkIHUobnVsbCk7dmFyIHR9LHNlbGVjdGVkOmUudmFsdWU9PT1vfSxzLmNyZWF0ZUVsZW1lbnQoVCxudWxsLGUuaWNvbiksZS5sYWJlbCkpKTtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KHMuRnJhZ21lbnQsbnVsbCxzLmNyZWF0ZUVsZW1lbnQoUCxPYmplY3QuYXNzaWduKHtyZWY6dCxjb2xvcjpcInByaW1hcnlcIixzaXplOlwic21hbGxcIixzdGFydEljb246ZygpLG9uQ2xpY2s6ZT0+dShlLmN1cnJlbnRUYXJnZXQpLFwiYXJpYS1sYWJlbFwiOnIuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwidG9vbGJhckRlbnNpdHlMYWJlbFwiKSxcImFyaWEtZXhwYW5kZWRcIjpjP1widHJ1ZVwiOnZvaWQgMCxcImFyaWEtaGFzcG9wdXBcIjpcIm1lbnVcIixcImFyaWEtbGFiZWxsZWRieVwiOmksaWQ6YX0sZSksci5jdXJyZW50LmdldExvY2FsZVRleHQoXCJ0b29sYmFyRGVuc2l0eVwiKSkscy5jcmVhdGVFbGVtZW50KF9pLHtvcGVuOkJvb2xlYW4oYyksdGFyZ2V0OmMsb25DbGlja0F3YXk6Yixwb3NpdGlvbjpcImJvdHRvbS1zdGFydFwifSxzLmNyZWF0ZUVsZW1lbnQoayx7aWQ6aSxjbGFzc05hbWU6XCJNdWlEYXRhR3JpZC1ncmlkTWVudUxpc3RcIixcImFyaWEtbGFiZWxsZWRieVwiOmEsb25LZXlEb3duOmU9PntxbihlLmtleSkmJmUucHJldmVudERlZmF1bHQoKSxtbChlLmtleSkmJmIoKX0sYXV0b0ZvY3VzSXRlbTpCb29sZWFuKGMpfSxoKSkpfSkpLGNzPXAoKGU9Pih7bGlzdDp7bWFyZ2luOmUuc3BhY2luZygxLDEsLjUpLHBhZGRpbmc6ZS5zcGFjaW5nKDAsMSl9fSkpLHtuYW1lOlwiTXVpRGF0YUdyaWRGaWx0ZXJUb29sYmFyQnV0dG9uXCJ9KSx1cz1zLmZvcndhcmRSZWYoKGZ1bmN0aW9uKGUsdCl7Y29uc3Qgbj1jcygpLGw9cy51c2VDb250ZXh0KGNvKSxvPWVhKGwsRWEpLGE9ZWEobCxxYSksaT1lYShsLFhhKSxjPWVhKGwsb2EpLHU9ZWEobCxiaSksZD1zLnVzZU1lbW8oKCgpPT57aWYodS5vcGVuKXJldHVybiBsLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcInRvb2xiYXJGaWx0ZXJzVG9vbHRpcEhpZGVcIik7aWYoMD09PWEpcmV0dXJuIGwuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwidG9vbGJhckZpbHRlcnNUb29sdGlwU2hvd1wiKTtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsbnVsbCxsLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcInRvb2xiYXJGaWx0ZXJzVG9vbHRpcEFjdGl2ZVwiKShhKSxzLmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLHtjbGFzc05hbWU6bi5saXN0fSxpLm1hcCgoZT0+T2JqZWN0LmFzc2lnbih7fSxjW2UuY29sdW1uRmllbGRdJiZzLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLHtrZXk6ZS5pZH0sYCR7Y1tlLmNvbHVtbkZpZWxkXS5oZWFkZXJOYW1lfHxlLmNvbHVtbkZpZWxkfVxcbiAgICAgICAgICAgICAgICAgICR7KGU9PmNbZS5jb2x1bW5GaWVsZF0uZmlsdGVyT3BlcmF0b3JzLmZpbmQoKHQ9PnQudmFsdWU9PT1lLm9wZXJhdG9yVmFsdWUpKS5sYWJlbHx8bC5jdXJyZW50LmdldExvY2FsZVRleHQoXCJmaWx0ZXJPcGVyYXRvclwiK3IoZS5vcGVyYXRvclZhbHVlKSkudG9TdHJpbmcoKSkoZSl9XFxuICAgICAgICAgICAgICAgICAgJHtlLnZhbHVlfWApKSkpKSl9KSxbbCx1Lm9wZW4sYSxpLGMsbl0pLHA9cy51c2VDYWxsYmFjaygoKCk9Pntjb25zdHtvcGVuOmUsb3BlbmVkUGFuZWxWYWx1ZTp0fT11O2UmJnQ9PT1DaS5maWx0ZXJzP2wuY3VycmVudC5oaWRlRmlsdGVyUGFuZWwoKTpsLmN1cnJlbnQuc2hvd0ZpbHRlclBhbmVsKCl9KSxbbCx1XSk7aWYoby5kaXNhYmxlQ29sdW1uRmlsdGVyKXJldHVybiBudWxsO2NvbnN0IG09bC5jdXJyZW50LmNvbXBvbmVudHMuT3BlbkZpbHRlckJ1dHRvbkljb247cmV0dXJuIHMuY3JlYXRlRWxlbWVudCh5LHt0aXRsZTpkLGVudGVyRGVsYXk6MWUzfSxzLmNyZWF0ZUVsZW1lbnQoUCxPYmplY3QuYXNzaWduKHtyZWY6dH0sZSx7b25DbGljazpwLHNpemU6XCJzbWFsbFwiLGNvbG9yOlwicHJpbWFyeVwiLFwiYXJpYS1sYWJlbFwiOmwuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwidG9vbGJhckZpbHRlcnNMYWJlbFwiKSxzdGFydEljb246cy5jcmVhdGVFbGVtZW50KHcse2JhZGdlQ29udGVudDphLGNvbG9yOlwicHJpbWFyeVwifSxzLmNyZWF0ZUVsZW1lbnQobSxudWxsKSl9KSxsLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcInRvb2xiYXJGaWx0ZXJzXCIpKSl9KSksZHM9cy5mb3J3YXJkUmVmKChmdW5jdGlvbihlLHQpe2NvbnN0IHI9cy51c2VDb250ZXh0KGNvKSxsPW4oKSxvPW4oKSxbYSxpXT1zLnVzZVN0YXRlKG51bGwpLGM9ci5jdXJyZW50LmNvbXBvbmVudHMuRXhwb3J0SWNvbix1PVt7bGFiZWw6ci5jdXJyZW50LmdldExvY2FsZVRleHQoXCJ0b29sYmFyRXhwb3J0Q1NWXCIpLGZvcm1hdDpcImNzdlwifV0sZD0oKT0+aShudWxsKSxwPXUubWFwKCgoZSx0KT0+cy5jcmVhdGVFbGVtZW50KEUse2tleTp0LG9uQ2xpY2s6KCk9PihcImNzdlwiPT09ZS5mb3JtYXQmJnIuY3VycmVudC5leHBvcnREYXRhQXNDc3YoKSx2b2lkIGkobnVsbCkpfSxlLmxhYmVsKSkpO3JldHVybiBzLmNyZWF0ZUVsZW1lbnQocy5GcmFnbWVudCxudWxsLHMuY3JlYXRlRWxlbWVudChQLE9iamVjdC5hc3NpZ24oe3JlZjp0LGNvbG9yOlwicHJpbWFyeVwiLHNpemU6XCJzbWFsbFwiLHN0YXJ0SWNvbjpzLmNyZWF0ZUVsZW1lbnQoYyxudWxsKSxvbkNsaWNrOmU9PmkoZS5jdXJyZW50VGFyZ2V0KSxcImFyaWEtZXhwYW5kZWRcIjphP1widHJ1ZVwiOnZvaWQgMCxcImFyaWEtaGFzcG9wdXBcIjpcIm1lbnVcIixcImFyaWEtbGFiZWxsZWRieVwiOm8saWQ6bH0sZSksci5jdXJyZW50LmdldExvY2FsZVRleHQoXCJ0b29sYmFyRXhwb3J0XCIpKSxzLmNyZWF0ZUVsZW1lbnQoX2kse29wZW46Qm9vbGVhbihhKSx0YXJnZXQ6YSxvbkNsaWNrQXdheTpkLHBvc2l0aW9uOlwiYm90dG9tLXN0YXJ0XCJ9LHMuY3JlYXRlRWxlbWVudChrLHtpZDpvLGNsYXNzTmFtZTpcIk11aURhdGFHcmlkLWdyaWRNZW51TGlzdFwiLFwiYXJpYS1sYWJlbGxlZGJ5XCI6bCxvbktleURvd246ZT0+e3FuKGUua2V5KSYmZS5wcmV2ZW50RGVmYXVsdCgpLG1sKGUua2V5KSYmZCgpfSxhdXRvRm9jdXNJdGVtOkJvb2xlYW4oYSl9LHApKSl9KSkscHM9cy5mb3J3YXJkUmVmKChmdW5jdGlvbihlLHQpe2NvbnN0IHI9Yyhjbyksbj1lYShyLEVhKTtyZXR1cm4gbi5kaXNhYmxlQ29sdW1uRmlsdGVyJiZuLmRpc2FibGVDb2x1bW5TZWxlY3RvciYmbi5kaXNhYmxlRGVuc2l0eVNlbGVjdG9yP251bGw6cy5jcmVhdGVFbGVtZW50KHhhLE9iamVjdC5hc3NpZ24oe3JlZjp0fSxlKSxzLmNyZWF0ZUVsZW1lbnQoaXMsbnVsbCkscy5jcmVhdGVFbGVtZW50KHVzLG51bGwpLHMuY3JlYXRlRWxlbWVudChzcyxudWxsKSxzLmNyZWF0ZUVsZW1lbnQoZHMsbnVsbCkpfSkpO2Z1bmN0aW9uIG1zKGUsdCl7dmFyIHI9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5fX3Jlc2l6ZVRyaWdnZXJzX18scj10LmZpcnN0RWxlbWVudENoaWxkLG49dC5sYXN0RWxlbWVudENoaWxkLGw9ci5maXJzdEVsZW1lbnRDaGlsZDtuLnNjcm9sbExlZnQ9bi5zY3JvbGxXaWR0aCxuLnNjcm9sbFRvcD1uLnNjcm9sbEhlaWdodCxsLnN0eWxlLndpZHRoPXIub2Zmc2V0V2lkdGgrMStcInB4XCIsbC5zdHlsZS5oZWlnaHQ9ci5vZmZzZXRIZWlnaHQrMStcInB4XCIsci5zY3JvbGxMZWZ0PXIuc2Nyb2xsV2lkdGgsci5zY3JvbGxUb3A9ci5zY3JvbGxIZWlnaHR9LG49ZnVuY3Rpb24oZSl7aWYoIShlLnRhcmdldC5jbGFzc05hbWUuaW5kZXhPZihcImNvbnRyYWN0LXRyaWdnZXJcIik8MCYmZS50YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoXCJleHBhbmQtdHJpZ2dlclwiKTwwKSl7dmFyIG49dGhpcztyKHRoaXMpLHRoaXMuX19yZXNpemVSQUZfXyYmdC5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9fcmVzaXplUkFGX18pLHRoaXMuX19yZXNpemVSQUZfXz10LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXsoZnVuY3Rpb24oZSl7cmV0dXJuIGUub2Zmc2V0V2lkdGghPWUuX19yZXNpemVMYXN0X18ud2lkdGh8fGUub2Zmc2V0SGVpZ2h0IT1lLl9fcmVzaXplTGFzdF9fLmhlaWdodH0pKG4pJiYobi5fX3Jlc2l6ZUxhc3RfXy53aWR0aD1uLm9mZnNldFdpZHRoLG4uX19yZXNpemVMYXN0X18uaGVpZ2h0PW4ub2Zmc2V0SGVpZ2h0LG4uX19yZXNpemVMaXN0ZW5lcnNfXy5mb3JFYWNoKChmdW5jdGlvbih0KXt0LmNhbGwobixlKX0pKSl9KSl9fSxsPSExLG89XCJcIixhPVwiYW5pbWF0aW9uc3RhcnRcIixpPVwiV2Via2l0IE1veiBPIG1zXCIuc3BsaXQoXCIgXCIpLHM9XCJ3ZWJraXRBbmltYXRpb25TdGFydCBhbmltYXRpb25zdGFydCBvQW5pbWF0aW9uU3RhcnQgTVNBbmltYXRpb25TdGFydFwiLnNwbGl0KFwiIFwiKSxjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmYWtlZWxlbWVudFwiKTtpZih2b2lkIDAhPT1jLnN0eWxlLmFuaW1hdGlvbk5hbWUmJihsPSEwKSwhMT09PWwpZm9yKHZhciB1PTA7dTxpLmxlbmd0aDt1KyspaWYodm9pZCAwIT09Yy5zdHlsZVtpW3VdK1wiQW5pbWF0aW9uTmFtZVwiXSl7bz1cIi1cIitpW3VdLnRvTG93ZXJDYXNlKCkrXCItXCIsYT1zW3VdLGw9ITA7YnJlYWt9dmFyIGQ9XCJyZXNpemVhbmltXCIscD1cIkBcIitvK1wia2V5ZnJhbWVzIFwiK1wicmVzaXplYW5pbSB7IGZyb20geyBvcGFjaXR5OiAwOyB9IHRvIHsgb3BhY2l0eTogMDsgfSB9IFwiLG09bytcImFuaW1hdGlvbjogMW1zIFwiK1wicmVzaXplYW5pbTsgXCI7cmV0dXJue2FkZFJlc2l6ZUxpc3RlbmVyOmZ1bmN0aW9uKGwsbyl7aWYoIWwuX19yZXNpemVUcmlnZ2Vyc19fKXt2YXIgaT1sLm93bmVyRG9jdW1lbnQscz10LmdldENvbXB1dGVkU3R5bGUobCk7cyYmXCJzdGF0aWNcIj09cy5wb3NpdGlvbiYmKGwuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxmdW5jdGlvbih0KXtpZighdC5nZXRFbGVtZW50QnlJZChcIm11aURldGVjdEVsZW1lbnRSZXNpemVcIikpe3ZhciByPShwfHxcIlwiKStcIi5NdWktcmVzaXplVHJpZ2dlcnMgeyBcIisobXx8XCJcIikrJ3Zpc2liaWxpdHk6IGhpZGRlbjsgb3BhY2l0eTogMDsgfSAuTXVpLXJlc2l6ZVRyaWdnZXJzLCAuTXVpLXJlc2l6ZVRyaWdnZXJzID4gZGl2LCAuY29udHJhY3QtdHJpZ2dlcjpiZWZvcmUgeyBjb250ZW50OiBcIiBcIjsgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyB6LWluZGV4OiAtMTsgfSAuTXVpLXJlc2l6ZVRyaWdnZXJzID4gZGl2IHsgYmFja2dyb3VuZDogI2VlZTsgb3ZlcmZsb3c6IGF1dG87IH0gLmNvbnRyYWN0LXRyaWdnZXI6YmVmb3JlIHsgd2lkdGg6IDIwMCU7IGhlaWdodDogMjAwJTsgfScsbj10LmhlYWR8fHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLGw9dC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7bC5pZD1cIm11aURldGVjdEVsZW1lbnRSZXNpemVcIixsLnR5cGU9XCJ0ZXh0L2Nzc1wiLG51bGwhPWUmJmwuc2V0QXR0cmlidXRlKFwibm9uY2VcIixlKSxsLnN0eWxlU2hlZXQ/bC5zdHlsZVNoZWV0LmNzc1RleHQ9cjpsLmFwcGVuZENoaWxkKHQuY3JlYXRlVGV4dE5vZGUocikpLG4uYXBwZW5kQ2hpbGQobCl9fShpKSxsLl9fcmVzaXplTGFzdF9fPXt9LGwuX19yZXNpemVMaXN0ZW5lcnNfXz1bXSwobC5fX3Jlc2l6ZVRyaWdnZXJzX189aS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5jbGFzc05hbWU9XCJNdWktcmVzaXplVHJpZ2dlcnNcIixsLl9fcmVzaXplVHJpZ2dlcnNfXy5pbm5lckhUTUw9JzxkaXYgY2xhc3M9XCJleHBhbmQtdHJpZ2dlclwiPjxkaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNvbnRyYWN0LXRyaWdnZXJcIj48L2Rpdj4nLGwuYXBwZW5kQ2hpbGQobC5fX3Jlc2l6ZVRyaWdnZXJzX18pLHIobCksbC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsbiwhMCksYSYmKGwuX19yZXNpemVUcmlnZ2Vyc19fLl9fYW5pbWF0aW9uTGlzdGVuZXJfXz1mdW5jdGlvbihlKXtlLmFuaW1hdGlvbk5hbWU9PWQmJnIobCl9LGwuX19yZXNpemVUcmlnZ2Vyc19fLmFkZEV2ZW50TGlzdGVuZXIoYSxsLl9fcmVzaXplVHJpZ2dlcnNfXy5fX2FuaW1hdGlvbkxpc3RlbmVyX18pKX1sLl9fcmVzaXplTGlzdGVuZXJzX18ucHVzaChvKX0scmVtb3ZlUmVzaXplTGlzdGVuZXI6ZnVuY3Rpb24oZSx0KXtpZihlLl9fcmVzaXplTGlzdGVuZXJzX18uc3BsaWNlKGUuX19yZXNpemVMaXN0ZW5lcnNfXy5pbmRleE9mKHQpLDEpLCFlLl9fcmVzaXplTGlzdGVuZXJzX18ubGVuZ3RoKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixuLCEwKSxlLl9fcmVzaXplVHJpZ2dlcnNfXy5fX2FuaW1hdGlvbkxpc3RlbmVyX18mJihlLl9fcmVzaXplVHJpZ2dlcnNfXy5yZW1vdmVFdmVudExpc3RlbmVyKGEsZS5fX3Jlc2l6ZVRyaWdnZXJzX18uX19hbmltYXRpb25MaXN0ZW5lcl9fKSxlLl9fcmVzaXplVHJpZ2dlcnNfXy5fX2FuaW1hdGlvbkxpc3RlbmVyX189bnVsbCk7dHJ5e2UuX19yZXNpemVUcmlnZ2Vyc19fPSFlLnJlbW92ZUNoaWxkKGUuX19yZXNpemVUcmlnZ2Vyc19fKX1jYXRjaChlKXt9fX19fWNvbnN0IGZzPXMuZm9yd2FyZFJlZigoZnVuY3Rpb24oZSx0KXtjb25zdHtjaGlsZHJlbjpyLGRlZmF1bHRIZWlnaHQ6bj1udWxsLGRlZmF1bHRXaWR0aDphPW51bGwsZGlzYWJsZUhlaWdodDppPSExLGRpc2FibGVXaWR0aDpjPSExLG5vbmNlOnUsb25SZXNpemU6ZCxzdHlsZTpwfT1lLG09Z2woZSxbXCJjaGlsZHJlblwiLFwiZGVmYXVsdEhlaWdodFwiLFwiZGVmYXVsdFdpZHRoXCIsXCJkaXNhYmxlSGVpZ2h0XCIsXCJkaXNhYmxlV2lkdGhcIixcIm5vbmNlXCIsXCJvblJlc2l6ZVwiLFwic3R5bGVcIl0pLFtmLGddPXMudXNlU3RhdGUoe2hlaWdodDpuLHdpZHRoOmF9KSxiPXMudXNlUmVmKG51bGwpLGg9cy51c2VSZWYobnVsbCksQz1sbygoKCk9PntpZihoLmN1cnJlbnQpe2NvbnN0IGU9aC5jdXJyZW50Lm9mZnNldEhlaWdodHx8MCx0PWguY3VycmVudC5vZmZzZXRXaWR0aHx8MCxyPWwoaC5jdXJyZW50KS5nZXRDb21wdXRlZFN0eWxlKGguY3VycmVudCksbj1wYXJzZUludChyLnBhZGRpbmdMZWZ0LDEwKXx8MCxvPXBhcnNlSW50KHIucGFkZGluZ1JpZ2h0LDEwKXx8MCxhPWUtKHBhcnNlSW50KHIucGFkZGluZ1RvcCwxMCl8fDApLShwYXJzZUludChyLnBhZGRpbmdCb3R0b20sMTApfHwwKSxzPXQtbi1vOyghaSYmZi5oZWlnaHQhPT1hfHwhYyYmZi53aWR0aCE9PXMpJiYoZyh7aGVpZ2h0OmEsd2lkdGg6c30pLGQmJmQoe2hlaWdodDphLHdpZHRoOnN9KSl9fSkpO29vKCgoKT0+e3ZhciBlO2lmKGguY3VycmVudD1iLmN1cnJlbnQucGFyZW50RWxlbWVudCwhaClyZXR1cm47Y29uc3QgdD1sKG51bGwhPT0oZT1oLmN1cnJlbnQpJiZ2b2lkIDAhPT1lP2U6dm9pZCAwKSxyPW1zKHUsdCk7cmV0dXJuIHIuYWRkUmVzaXplTGlzdGVuZXIoaC5jdXJyZW50LEMpLEMoKSwoKT0+e3IucmVtb3ZlUmVzaXplTGlzdGVuZXIoaC5jdXJyZW50LEMpfX0pLFt1LENdKTtjb25zdCB2PXtvdmVyZmxvdzpcInZpc2libGVcIn0sdz17fTtpfHwodi5oZWlnaHQ9MCx3LmhlaWdodD1mLmhlaWdodCksY3x8KHYud2lkdGg9MCx3LndpZHRoPWYud2lkdGgpO2NvbnN0IE89byhiLHQpO3JldHVybiBzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixPYmplY3QuYXNzaWduKHtyZWY6TyxzdHlsZTpPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdikscCl9LG0pLG51bGw9PT1mLmhlaWdodCYmbnVsbD09PWYud2lkdGg/bnVsbDpyKHcpKX0pKSxncz1lPT5lLnBhZ2luYXRpb24sYnM9cy5mb3J3YXJkUmVmKChmdW5jdGlvbihlLHQpe2NvbnN0e2NsYXNzTmFtZTpyLHJvd0NvdW50Om59PWUsbD1nbChlLFtcImNsYXNzTmFtZVwiLFwicm93Q291bnRcIl0pLG89cy51c2VDb250ZXh0KGNvKTtyZXR1cm4gMD09PW4/bnVsbDpzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixPYmplY3QuYXNzaWduKHtyZWY6dCxjbGFzc05hbWU6S24oXCJNdWlEYXRhR3JpZC1yb3dDb3VudFwiLHIpfSxsKSxgJHtvLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcImZvb3RlclRvdGFsUm93c1wiKX0gJHtuLnRvTG9jYWxlU3RyaW5nKCl9YCl9KSksaHM9cy5mb3J3YXJkUmVmKChmdW5jdGlvbihlLHQpe2NvbnN0e2NsYXNzTmFtZTpyLHNlbGVjdGVkUm93Q291bnQ6bn09ZSxsPWdsKGUsW1wiY2xhc3NOYW1lXCIsXCJzZWxlY3RlZFJvd0NvdW50XCJdKSxvPXMudXNlQ29udGV4dChjbykuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwiZm9vdGVyUm93U2VsZWN0ZWRcIikobik7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChcImRpdlwiLE9iamVjdC5hc3NpZ24oe3JlZjp0LGNsYXNzTmFtZTpLbihcIk11aURhdGFHcmlkLXNlbGVjdGVkUm93Q291bnRcIixyKX0sbCksbyl9KSksQ3M9cy5mb3J3YXJkUmVmKChmdW5jdGlvbihlLHQpe3ZhciByO2NvbnN0IG49cy51c2VDb250ZXh0KGNvKSxsPWVhKG4samEpLG89ZWEobixFYSksYT1lYShuLFFhKSxpPWVhKG4sZ3MpLGM9IW8uaGlkZUZvb3RlclNlbGVjdGVkUm93Q291bnQmJmE+MD9zLmNyZWF0ZUVsZW1lbnQoaHMse3NlbGVjdGVkUm93Q291bnQ6YX0pOnMuY3JlYXRlRWxlbWVudChcImRpdlwiLG51bGwpLHU9by5oaWRlRm9vdGVyUm93Q291bnR8fG8ucGFnaW5hdGlvbj9udWxsOnMuY3JlYXRlRWxlbWVudChicyx7cm93Q291bnQ6bH0pLGQ9ISFvLnBhZ2luYXRpb24mJm51bGwhPWkucGFnZVNpemUmJiFvLmhpZGVGb290ZXJQYWdpbmF0aW9uJiYobnVsbD09bj92b2lkIDA6bi5jdXJyZW50LmNvbXBvbmVudHMuUGFnaW5hdGlvbikscD1kJiZzLmNyZWF0ZUVsZW1lbnQoZCxPYmplY3QuYXNzaWduKHt9LG51bGw9PT0ocj1udWxsPT1uP3ZvaWQgMDpuLmN1cnJlbnQuY29tcG9uZW50c1Byb3BzKXx8dm9pZCAwPT09cj92b2lkIDA6ci5wYWdpbmF0aW9uKSk7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChPYSxPYmplY3QuYXNzaWduKHtyZWY6dH0sZSksYyx1LHApfSkpLHZzPXMuZm9yd2FyZFJlZigoZnVuY3Rpb24oZSx0KXt2YXIgcixuO2NvbnN0IGw9cy51c2VDb250ZXh0KGNvKSxvPW51bGw9PWw/dm9pZCAwOmwuY3VycmVudC5jb21wb25lbnRzLlByZWZlcmVuY2VzUGFuZWwsYT1vJiZzLmNyZWF0ZUVsZW1lbnQobyxPYmplY3QuYXNzaWduKHt9LG51bGw9PT0ocj1udWxsPT1sP3ZvaWQgMDpsLmN1cnJlbnQuY29tcG9uZW50c1Byb3BzKXx8dm9pZCAwPT09cj92b2lkIDA6ci5wcmVmZXJlbmNlc1BhbmVsKSksaT1udWxsPT1sP3ZvaWQgMDpsLmN1cnJlbnQuY29tcG9uZW50cy5Ub29sYmFyLGM9aSYmcy5jcmVhdGVFbGVtZW50KGksT2JqZWN0LmFzc2lnbih7fSxudWxsPT09KG49bnVsbD09bD92b2lkIDA6bC5jdXJyZW50LmNvbXBvbmVudHNQcm9wcyl8fHZvaWQgMD09PW4/dm9pZCAwOm4udG9vbGJhcikpO3JldHVybiBzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixPYmplY3QuYXNzaWduKHtyZWY6dH0sZSksYSxjKX0pKSx3cz1zLmZvcndhcmRSZWYoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHMuY3JlYXRlRWxlbWVudCh5YSxPYmplY3QuYXNzaWduKHtyZWY6dH0sZSkscy5jcmVhdGVFbGVtZW50KEEsbnVsbCkpfSkpLE9zPXMuZm9yd2FyZFJlZigoZnVuY3Rpb24oZSx0KXtjb25zdCByPXMudXNlQ29udGV4dChjbykuY3VycmVudC5nZXRMb2NhbGVUZXh0KFwibm9Sb3dzTGFiZWxcIik7cmV0dXJuIHMuY3JlYXRlRWxlbWVudCh5YSxPYmplY3QuYXNzaWduKHtyZWY6dH0sZSkscil9KSkseXM9cCgoZT0+KHtzZWxlY3RMYWJlbDp7ZGlzcGxheTpcIm5vbmVcIixbZS5icmVha3BvaW50cy51cChcIm1kXCIpXTp7ZGlzcGxheTpcImJsb2NrXCJ9fSxjYXB0aW9uOntcIiZbaWRdXCI6e2Rpc3BsYXk6XCJub25lXCIsW2UuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06e2Rpc3BsYXk6XCJibG9ja1wifX19LGlucHV0OntkaXNwbGF5Olwibm9uZVwiLFtlLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOntkaXNwbGF5OlwiaW5saW5lLWZsZXhcIn19fSkpKSxFcz1zLmZvcndhcmRSZWYoKGZ1bmN0aW9uKGUsdCl7Y29uc3Qgcj15cygpLG49cy51c2VDb250ZXh0KGNvKSxsPWVhKG4sZ3MpLG89cy51c2VNZW1vKCgoKT0+TWF0aC5mbG9vcihsLnJvd0NvdW50LyhsLnBhZ2VTaXplfHwxKSkpLFtsLnJvd0NvdW50LGwucGFnZVNpemVdKSxhPWVhKG4sRWEpLGk9cy51c2VDYWxsYmFjaygoZT0+e2NvbnN0IHQ9TnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtuLmN1cnJlbnQuc2V0UGFnZVNpemUodCl9KSxbbl0pLGM9cy51c2VDYWxsYmFjaygoKGUsdCk9PntuLmN1cnJlbnQuc2V0UGFnZSh0KX0pLFtuXSk7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChfLE9iamVjdC5hc3NpZ24oe3JlZjp0LGNsYXNzZXM6T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LE9uKCk/e3NlbGVjdExhYmVsOnIuc2VsZWN0TGFiZWx9OntjYXB0aW9uOnIuY2FwdGlvbn0pLHtpbnB1dDpyLmlucHV0fSksY29tcG9uZW50OlwiZGl2XCIsY291bnQ6bC5yb3dDb3VudCxwYWdlOmwucGFnZTw9bz9sLnBhZ2U6byxyb3dzUGVyUGFnZU9wdGlvbnM6YS5yb3dzUGVyUGFnZU9wdGlvbnMmJmEucm93c1BlclBhZ2VPcHRpb25zLmluZGV4T2YobC5wYWdlU2l6ZSk+LTE/YS5yb3dzUGVyUGFnZU9wdGlvbnM6W10scm93c1BlclBhZ2U6bC5wYWdlU2l6ZX0sT24oKT97b25QYWdlQ2hhbmdlOmMsb25Sb3dzUGVyUGFnZUNoYW5nZTppfTp7b25DaGFuZ2VQYWdlOmMsb25DaGFuZ2VSb3dzUGVyUGFnZTppfSxlKSl9KSksU3M9cy5mb3J3YXJkUmVmKCgoe2hlaWdodDplLHdpZHRoOnQsY2hpbGRyZW46cn0sbik9PnMuY3JlYXRlRWxlbWVudChcImRpdlwiLHtyZWY6bixjbGFzc05hbWU6XCJNdWlEYXRhR3JpZC1yZW5kZXJpbmdab25lXCIsc3R5bGU6e21heEhlaWdodDplLHdpZHRoOnR9fSxyKSkpO1NzLmRpc3BsYXlOYW1lPVwiR3JpZFJlbmRlcmluZ1pvbmVcIjtjb25zdCB4cz1lPT57Y29uc3R7c2VsZWN0ZWQ6dCxpZDpyLGNsYXNzTmFtZTpuLHJvd0luZGV4OmwsY2hpbGRyZW46b309ZSxhPWwrMixpPXMudXNlQ29udGV4dChjbyksYz1lYShpLGJvKSx1PWVhKGksRWEpLGQ9cy51c2VDYWxsYmFjaygoZT0+dD0+e3QuY3VycmVudFRhcmdldC5jb250YWlucyh0LnRhcmdldCkmJmkuY3VycmVudC5wdWJsaXNoRXZlbnQoZSxudWxsPT1pP3ZvaWQgMDppLmN1cnJlbnQuZ2V0Um93UGFyYW1zKHIpLHQpfSksW2kscl0pLHA9cy51c2VNZW1vKCgoKT0+KHtvbkNsaWNrOmQoXCJyb3dDbGlja1wiKSxvbkRvdWJsZUNsaWNrOmQoXCJyb3dEb3VibGVDbGlja1wiKSxvbk1vdXNlT3ZlcjpkKFwicm93T3ZlclwiKSxvbk1vdXNlT3V0OmQoXCJyb3dPdXRcIiksb25Nb3VzZUVudGVyOmQoXCJyb3dFbnRlclwiKSxvbk1vdXNlTGVhdmU6ZChcInJvd0xlYXZlXCIpfSkpLFtkXSksbT17bWF4SGVpZ2h0OmMsbWluSGVpZ2h0OmN9LGY9S24oXCJNdWlEYXRhR3JpZC1yb3dcIixuLENuKHUuZ2V0Um93Q2xhc3NOYW1lKSYmdS5nZXRSb3dDbGFzc05hbWUoaS5jdXJyZW50LmdldFJvd1BhcmFtcyhyKSkse1wiTXVpLXNlbGVjdGVkXCI6dH0pO3JldHVybiBzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixPYmplY3QuYXNzaWduKHtrZXk6cixcImRhdGEtaWRcIjpyLFwiZGF0YS1yb3dpbmRleFwiOmwscm9sZTpcInJvd1wiLGNsYXNzTmFtZTpmLFwiYXJpYS1yb3dpbmRleFwiOmEsXCJhcmlhLXNlbGVjdGVkXCI6dCxzdHlsZTptfSxwKSxvKX07eHMuZGlzcGxheU5hbWU9XCJHcmlkUm93XCI7Y29uc3QgTXM9ZT0+e2NvbnN0e2hlaWdodDp0LHdpZHRoOnIsY2hpbGRyZW46bn09ZTtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIk11aURhdGFHcmlkLXZpZXdwb3J0XCIsc3R5bGU6e21pbldpZHRoOnIsbWF4V2lkdGg6cixtYXhIZWlnaHQ6dH19LG4pfSxJcz1zLmZvcndhcmRSZWYoKChlLHQpPT57Y29uc3Qgcj1zLnVzZUNvbnRleHQoY28pLG49ZWEocixFYSksbD1lYShyLGdhKSxvPWVhKHIsYmEpLGE9ZWEocixoYSksaT1lYShyLGlhKSxjPWVhKHIsT2kpLHU9ZWEocixJYSksZD1lYShyLFBhKSxwPWVhKHIsSmEpLG09ZWEocixXYSksZj1lYShyLGJvKTtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KHdhLG51bGwscy5jcmVhdGVFbGVtZW50KE1zLE9iamVjdC5hc3NpZ24oe30sbykscy5jcmVhdGVFbGVtZW50KFNzLE9iamVjdC5hc3NpZ24oe3JlZjp0fSwobnVsbD09bD92b2lkIDA6bC5yZW5kZXJpbmdab25lKXx8e3dpZHRoOjAsaGVpZ2h0OjB9KSwoKCk9PntpZihudWxsPT1jLnJlbmRlckNvbnRleHQpcmV0dXJuIG51bGw7cmV0dXJuIG0uc2xpY2UoYy5yZW5kZXJDb250ZXh0LmZpcnN0Um93SWR4LGMucmVuZGVyQ29udGV4dC5sYXN0Um93SWR4KS5tYXAoKChbZSx0XSxyKT0+cy5jcmVhdGVFbGVtZW50KHhzLHtjbGFzc05hbWU6KGMucmVuZGVyQ29udGV4dC5maXJzdFJvd0lkeCtyKSUyPT0wP1wiTXVpLWV2ZW5cIjpcIk11aS1vZGRcIixrZXk6ZSxpZDplLHNlbGVjdGVkOnZvaWQgMCE9PXBbZV0scm93SW5kZXg6Yy5yZW5kZXJDb250ZXh0LmZpcnN0Um93SWR4K3J9LHMuY3JlYXRlRWxlbWVudChwbyx7d2lkdGg6Yy5yZW5kZXJDb250ZXh0LmxlZnRFbXB0eVdpZHRoLGhlaWdodDpmfSkscy5jcmVhdGVFbGVtZW50KHRhLHtjb2x1bW5zOmkscm93OnQsaWQ6ZSxmaXJzdENvbElkeDpjLnJlbmRlckNvbnRleHQuZmlyc3RDb2xJZHgsbGFzdENvbElkeDpjLnJlbmRlckNvbnRleHQubGFzdENvbElkeCxoYXNTY3JvbGw6e3k6YS5oYXNTY3JvbGxZLHg6YS5oYXNTY3JvbGxYfSxzaG93Q2VsbFJpZ2h0Qm9yZGVyOiEhbi5zaG93Q2VsbFJpZ2h0Qm9yZGVyLGV4dGVuZFJvd0Z1bGxXaWR0aDohbi5kaXNhYmxlRXh0ZW5kUm93RnVsbFdpZHRoLHJvd0luZGV4OmMucmVuZGVyQ29udGV4dC5maXJzdFJvd0lkeCtyLGNlbGxGb2N1czp1LGNlbGxUYWJJbmRleDpkfSkscy5jcmVhdGVFbGVtZW50KHBvLHt3aWR0aDpjLnJlbmRlckNvbnRleHQucmlnaHRFbXB0eVdpZHRoLGhlaWdodDpmfSkpKSl9KSgpKSkpfSkpO3ZhciBrcztJcy5kaXNwbGF5TmFtZT1cIkdyaWRWaWV3cG9ydFwiLGZ1bmN0aW9uKGUpe2UuTm90Rm91bmQ9XCJOb3RGb3VuZFwiLGUuSW52YWxpZD1cIkludmFsaWRcIixlLkV4cGlyZWQ9XCJFeHBpcmVkXCIsZS5WYWxpZD1cIlZhbGlkXCJ9KGtzfHwoa3M9e30pKTtjb25zdCBEcz1lPT57Y29uc3R7bGljZW5zZVN0YXR1czp0fT1lO3JldHVybiB0PT09a3MuVmFsaWQudG9TdHJpbmcoKT9udWxsOnMuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHBvaW50ZXJFdmVudHM6XCJub25lXCIsY29sb3I6XCIjODI4MjgyOWVcIix6SW5kZXg6MWU1LHdpZHRoOlwiMTAwJVwiLHRleHRBbGlnbjpcImNlbnRlclwiLGJvdHRvbTpcIjUwJVwiLHJpZ2h0OjAsbGV0dGVyU3BhY2luZzo1LGZvbnRTaXplOjI0fX0sXCIgXCIsZnVuY3Rpb24oZSl7c3dpdGNoKGUpe2Nhc2Uga3MuRXhwaXJlZC50b1N0cmluZygpOnJldHVyblwiTWF0ZXJpYWwtVUkgWCBMaWNlbnNlIEV4cGlyZWRcIjtjYXNlIGtzLkludmFsaWQudG9TdHJpbmcoKTpyZXR1cm5cIk1hdGVyaWFsLVVJIFggSW52YWxpZCBMaWNlbnNlXCI7Y2FzZSBrcy5Ob3RGb3VuZC50b1N0cmluZygpOnJldHVyblwiTWF0ZXJpYWwtVUkgWCBVbmxpY2Vuc2VkIHByb2R1Y3RcIjtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihcIk1hdGVyaWFsLVVJOiBVbmhhbmRsZWQgbGljZW5zZSBzdGF0dXMuXCIpfX0odCksXCIgXCIpfTtsZXQgUHM9ITE7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJnZvaWQgMCE9PXByb2Nlc3MuZW52LkdSSURfRVhQRVJJTUVOVEFMX0VOQUJMRUQmJkVuKCkmJndpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkdSSURfRVhQRVJJTUVOVEFMX0VOQUJMRURcIik/UHM9XCJ0cnVlXCI9PT13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJHUklEX0VYUEVSSU1FTlRBTF9FTkFCTEVEXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiYoUHM9XCJ0cnVlXCI9PT1wcm9jZXNzLmVudi5HUklEX0VYUEVSSU1FTlRBTF9FTkFCTEVEKTtjb25zdCBScz1QcyxGcz1lPT57Y29uc3QgdD1NbyhcInVzZUdyaWRDb2x1bW5NZW51XCIpLFtyLG4sbF09UW8oZSksbz1zLnVzZUNhbGxiYWNrKCgocixvLGEpPT57dC5kZWJ1ZyhcIk9wZW5pbmcgQ29sdW1uIE1lbnVcIiksbigoZT0+T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtjb2x1bW5NZW51OntvcGVuOiEwLGZpZWxkOnIsaWQ6byxsYWJlbGxlZGJ5OmF9fSkpKSxlLmN1cnJlbnQuaGlkZVByZWZlcmVuY2VzKCksbCgpfSksW2UsbCx0LG5dKSxhPXMudXNlQ2FsbGJhY2soKCgpPT57dC5kZWJ1ZyhcIkhpZGluZyBDb2x1bW4gTWVudVwiKSxuKChlPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse2NvbHVtbk1lbnU6T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUuY29sdW1uTWVudSkse29wZW46ITEsaWQ6dm9pZCAwLGxhYmVsbGVkYnk6dm9pZCAwfSl9KSkpLGwoKX0pLFtsLHQsbl0pLGk9cy51c2VDYWxsYmFjaygoKGUsbixsKT0+e3QuZGVidWcoXCJUb2dnbGUgQ29sdW1uIE1lbnVcIiksci5jb2x1bW5NZW51Lm9wZW4mJnIuY29sdW1uTWVudS5maWVsZD09PWU/YSgpOm8oZSxuLGwpfSksW3QsbyxhLHJdKTtzLnVzZUVmZmVjdCgoKCk9PntyLmlzU2Nyb2xsaW5nJiZhKCl9KSxbci5pc1Njcm9sbGluZyxhXSksSW8oZSx7c2hvd0NvbHVtbk1lbnU6byxoaWRlQ29sdW1uTWVudTphLHRvZ2dsZUNvbHVtbk1lbnU6aX0sXCJDb2x1bW5NZW51QXBpXCIpfSxMcz0oZSx0KT0+ZS54PD10Lng/XCJyaWdodFwiOlwibGVmdFwiLGpzPWU9Pntjb25zdCB0PU1vKFwidXNlR3JpZENvbHVtblJlb3JkZXJcIiksWyxyLG5dPVFvKGUpLGw9ZWEoZSxraSksbz1zLnVzZVJlZihudWxsKSxhPXMudXNlUmVmKHt4OjAseTowfSksaT1zLnVzZVJlZihudWxsKSxjPXMudXNlUmVmKCk7cy51c2VFZmZlY3QoKCgpPT4oKT0+e2NsZWFyVGltZW91dChjLmN1cnJlbnQpfSksW10pO2NvbnN0IHU9cy51c2VDYWxsYmFjaygoKGwsYSk9Pnt0LmRlYnVnKFwiU3RhcnQgZHJhZ2dpbmcgY29sIFwiK2wuZmllbGQpLG8uY3VycmVudD1hLmN1cnJlbnRUYXJnZXQsby5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJNdWlEYXRhR3JpZC1jb2xDZWxsLWRyYWdnaW5nXCIpLHIoKGU9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7Y29sdW1uUmVvcmRlcjpPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZS5jb2x1bW5SZW9yZGVyKSx7ZHJhZ0NvbDpsLmZpZWxkfSl9KSkpLG4oKSxjLmN1cnJlbnQ9c2V0VGltZW91dCgoKCk9PntvLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcIk11aURhdGFHcmlkLWNvbENlbGwtZHJhZ2dpbmdcIil9KSksaS5jdXJyZW50PWUuY3VycmVudC5nZXRDb2x1bW5JbmRleChsLmZpZWxkLCExKX0pLFtuLHQscixlXSksZD1zLnVzZUNhbGxiYWNrKCgoZSx0KT0+e3QucHJldmVudERlZmF1bHQoKX0pLFtdKSxwPXMudXNlQ2FsbGJhY2soKChyLG4pPT57dC5kZWJ1ZyhcIkRyYWdnaW5nIG92ZXIgY29sIFwiK3IuZmllbGQpLG4ucHJldmVudERlZmF1bHQoKTtjb25zdCBvPXt4Om4uY2xpZW50WCx5Om4uY2xpZW50WX07aWYoci5maWVsZCE9PWwmJihpPWEuY3VycmVudCxzPW8saS54IT09cy54fHxpLnkhPT1zLnkpKXtjb25zdCB0PWUuY3VycmVudC5nZXRDb2x1bW5JbmRleChyLmZpZWxkLCExKSxuPWUuY3VycmVudC5nZXRDb2x1bW5JbmRleChsLCExKTsoXCJyaWdodFwiPT09THMoYS5jdXJyZW50LG8pJiZuPHR8fFwibGVmdFwiPT09THMoYS5jdXJyZW50LG8pJiZ0PG4pJiZlLmN1cnJlbnQuc2V0Q29sdW1uSW5kZXgobCx0KSxhLmN1cnJlbnQ9b312YXIgaSxzfSksW2UsbCx0XSksbT1zLnVzZUNhbGxiYWNrKCgobCxhKT0+e3QuZGVidWcoXCJFbmQgZHJhZ2dpbmcgY29sXCIpLGEucHJldmVudERlZmF1bHQoKSxjbGVhclRpbWVvdXQoYy5jdXJyZW50KSxvLmN1cnJlbnQ9bnVsbCxcIm5vbmVcIj09PWEuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QmJihlLmN1cnJlbnQuc2V0Q29sdW1uSW5kZXgobC5maWVsZCxpLmN1cnJlbnQpLGkuY3VycmVudD1udWxsKSxyKChlPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse2NvbHVtblJlb3JkZXI6T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUuY29sdW1uUmVvcmRlcikse2RyYWdDb2w6XCJcIn0pfSkpKSxuKCl9KSxbdCxyLG4sZV0pO0VpKGUsXCJjb2x1bW5IZWFkZXJEcmFnU3RhcnRcIix1KSxFaShlLFwiY29sdW1uSGVhZGVyRHJhZ0VudGVyXCIsZCksRWkoZSxcImNvbHVtbkhlYWRlckRyYWdPdmVyXCIscCksRWkoZSxcImNvbHVtbkhlYWRlckRyYWdFbmRcIixtKSxFaShlLFwiY2VsbERyYWdFbnRlclwiLGQpLEVpKGUsXCJjZWxsRHJhZ092ZXJcIixwKSxFaShlLFwiY2VsbERyYWdFbmRcIixtKX07ZnVuY3Rpb24genMoZSx0KXtjb25zdCByPWUuZmlsdGVyKChlPT4hIWUuZmxleCYmIWUuaGlkZSkpLmxlbmd0aDtsZXQgbj0wO3ImJnQmJmUuZm9yRWFjaCgoZT0+e2UuaGlkZXx8KGUuZmxleD9uKz1lLmZsZXg6dC09ZS53aWR0aCl9KSk7bGV0IGw9ZTtpZih0PjAmJnIpe2NvbnN0IHI9dC9uO2w9ZS5tYXAoKGU9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7d2lkdGg6ZS5mbGV4P01hdGguZmxvb3IociplLmZsZXgpOmUud2lkdGh9KSkpfXJldHVybiBsfWZ1bmN0aW9uIFRzKGUsdCl7cmV0dXJuIGUuZGVidWcoXCJCdWlsZGluZyBjb2x1bW5zIGxvb2t1cFwiKSx0LnJlZHVjZSgoKGUsdCk9PihlW3QuZmllbGRdPXQsZSkpLHt9KX1mdW5jdGlvbiBBcyhlLHQpe2NvbnN0IHI9TW8oXCJ1c2VHcmlkQ29sdW1uc1wiKSxbbixsLG9dPVFvKHQpLGE9ZWEodCxzYSksaT1lYSh0LGFhKSxjPWVhKHQsaWEpLHU9ZWEodCxFYSksZD1zLnVzZUNhbGxiYWNrKCgoZSxuPSEwKT0+e3IuZGVidWcoXCJVcGRhdGluZyBjb2x1bW5zIHN0YXRlLlwiKSxsKCh0PT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse2NvbHVtbnM6ZX0pKSksbygpLHQuY3VycmVudCYmbiYmdC5jdXJyZW50LnB1Ymxpc2hFdmVudChcImNvbHVtbnNVcGRhdGVkXCIsZS5hbGwpfSksW3IsbCxvLHRdKSxwPXMudXNlQ2FsbGJhY2soKGU9PnQuY3VycmVudC5zdGF0ZS5jb2x1bW5zLmxvb2t1cFtlXSksW3RdKSxtPXMudXNlQ2FsbGJhY2soKCgpPT5pKSxbaV0pLGY9cy51c2VDYWxsYmFjaygoKCk9PmMpLFtjXSksZz1zLnVzZUNhbGxiYWNrKCgoKT0+YSksW2FdKSxiPXMudXNlQ2FsbGJhY2soKChlLHQ9ITApPT50P2MuZmluZEluZGV4KCh0PT50LmZpZWxkPT09ZSkpOmkuZmluZEluZGV4KCh0PT50LmZpZWxkPT09ZSkpKSxbaSxjXSksaD1zLnVzZUNhbGxiYWNrKChlPT57Y29uc3QgdD1iKGUpO3JldHVybiBhLnBvc2l0aW9uc1t0XX0pLFthLnBvc2l0aW9ucyxiXSksQz1zLnVzZUNhbGxiYWNrKChlPT57ci5kZWJ1ZyhcInVwZGF0aW5nIEdyaWRDb2x1bW5zIHdpdGggbmV3IHN0YXRlXCIpO2NvbnN0IHQ9KChlLHQpPT57Y29uc3Qgcj17YWxsOlsuLi5lLmFsbF0sbG9va3VwOk9iamVjdC5hc3NpZ24oe30sZS5sb29rdXApfTtyZXR1cm4gdC5mb3JFYWNoKChlPT57bnVsbD09ci5sb29rdXBbZS5maWVsZF0/KHIubG9va3VwW2UuZmllbGRdPWUsci5hbGwucHVzaChlLmZpZWxkKSk6ci5sb29rdXBbZS5maWVsZF09T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHIubG9va3VwW2UuZmllbGRdKSxlKX0pKSxyfSkobi5jb2x1bW5zLGUpO2QodCwhMSl9KSxbcixuLmNvbHVtbnMsZF0pLHY9cy51c2VDYWxsYmFjaygoZT0+QyhbZV0pKSxbQ10pLHc9cy51c2VDYWxsYmFjaygoKGUsdCk9Pntjb25zdCByPXAoZSksbj1PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse2hpZGU6bnVsbD09dD8hci5oaWRlOnR9KTtDKFtuXSksbygpfSksW28scCxDXSksTz1zLnVzZUNhbGxiYWNrKCgoZSxsKT0+e2NvbnN0IG89bi5jb2x1bW5zLmFsbC5maW5kSW5kZXgoKHQ9PnQ9PT1lKSk7aWYobz09PWwpcmV0dXJuO3IuZGVidWcoYE1vdmluZyBjb2x1bW4gJHtlfSB0byBpbmRleCAke2x9YCk7Y29uc3QgYT17ZmllbGQ6ZSxlbGVtZW50OnQuY3VycmVudC5nZXRDb2x1bW5IZWFkZXJFbGVtZW50KGUpLGNvbERlZjp0LmN1cnJlbnQuZ2V0Q29sdW1uRnJvbUZpZWxkKGUpLHRhcmdldEluZGV4Omwsb2xkSW5kZXg6byxhcGk6dC5jdXJyZW50fTt0LmN1cnJlbnQucHVibGlzaEV2ZW50KFwiY29sdW1uT3JkZXJDaGFuZ2VcIixhKTtjb25zdCBpPVsuLi5uLmNvbHVtbnMuYWxsXTtpLnNwbGljZShsLDAsaS5zcGxpY2UobywxKVswXSksZChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sbi5jb2x1bW5zKSx7YWxsOml9KSl9KSxbdCxuLmNvbHVtbnMscixkXSkseT1zLnVzZUNhbGxiYWNrKCgoZSxuKT0+e3IuZGVidWcoYFVwZGF0aW5nIGNvbHVtbiAke2V9IHdpZHRoIHRvICR7bn1gKTtjb25zdCBsPXQuY3VycmVudC5nZXRDb2x1bW5Gcm9tRmllbGQoZSk7dC5jdXJyZW50LnVwZGF0ZUNvbHVtbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sbCkse3dpZHRoOm59KSksdC5jdXJyZW50LnB1Ymxpc2hFdmVudChcImNvbHVtblJlc2l6ZUNvbW1pdGVkXCIse2VsZW1lbnQ6dC5jdXJyZW50LmdldENvbHVtbkhlYWRlckVsZW1lbnQoZSksY29sRGVmOmwsYXBpOnQsd2lkdGg6bn0pfSksW3Qscl0pO0lvKHQse2dldENvbHVtbkZyb21GaWVsZDpwLGdldEFsbENvbHVtbnM6bSxnZXRDb2x1bW5JbmRleDpiLGdldENvbHVtblBvc2l0aW9uOmgsZ2V0VmlzaWJsZUNvbHVtbnM6ZixnZXRDb2x1bW5zTWV0YTpnLHVwZGF0ZUNvbHVtbjp2LHVwZGF0ZUNvbHVtbnM6Qyx0b2dnbGVDb2x1bW46dyxzZXRDb2x1bW5JbmRleDpPLHNldENvbHVtbldpZHRoOnl9LFwiQ29sQXBpXCIpLHMudXNlRWZmZWN0KCgoKT0+e2lmKHIuaW5mbyhcIkdyaWRDb2x1bW5zIGhhdmUgY2hhbmdlZCwgbmV3IGxlbmd0aCBcIitlLmxlbmd0aCksZS5sZW5ndGg+MCl7Y29uc3Qgbj16cyhmdW5jdGlvbihlLHQscixuLGwpe24uZGVidWcoXCJIeWRyYXRpbmcgR3JpZENvbHVtbnMgd2l0aCBkZWZhdWx0IGRlZmluaXRpb25zXCIpO2NvbnN0IG89ZW8oUWwoKSx0KSxhPWUubWFwKChlPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sbmkobyxlLnR5cGUpKSxlKSkpO2lmKHIpe2NvbnN0IGU9T2JqZWN0LmFzc2lnbih7fSxyaSk7cmV0dXJuIGUuaGVhZGVyTmFtZT1sKFwiY2hlY2tib3hTZWxlY3Rpb25IZWFkZXJOYW1lXCIpLFtlLC4uLmFdfXJldHVybiBhfShlLHUuY29sdW1uVHlwZXMsISF1LmNoZWNrYm94U2VsZWN0aW9uLHIsdC5jdXJyZW50LmdldExvY2FsZVRleHQpLHQuY3VycmVudC5nZXRTdGF0ZSgpLnZpZXdwb3J0U2l6ZXMud2lkdGgpO2Qoe2FsbDpuLm1hcCgoZT0+ZS5maWVsZCkpLGxvb2t1cDpUcyhyLG4pfSl9ZWxzZSBkKHthbGw6W10sbG9va3VwOnt9fSl9KSxbcix0LGUsdS5jb2x1bW5UeXBlcyx1LmNoZWNrYm94U2VsZWN0aW9uLGRdKSxzLnVzZUVmZmVjdCgoKCk9PntyLmRlYnVnKFwiR3JpZENvbHVtbnMgZ3JpZFN0YXRlLnZpZXdwb3J0U2l6ZXMud2lkdGgsIGNoYW5nZWQgXCIrbi52aWV3cG9ydFNpemVzLndpZHRoKTtjb25zdCBlPXpzKGFhKHQuY3VycmVudC5nZXRTdGF0ZSgpKSxuLnZpZXdwb3J0U2l6ZXMud2lkdGgpO3QuY3VycmVudC51cGRhdGVDb2x1bW5zKGUpfSksW3Qsbi52aWV3cG9ydFNpemVzLndpZHRoLHJdKX1jb25zdCBfcz0oZSx0LHIsbik9Pntjb25zdCBsPUpvKGUpLFtvLGEsaV09UW8oZSksYz1zLnVzZUNhbGxiYWNrKChlPT57dm9pZCAwPT09b1t0XSYmKG9bdF09biksYSgobj0+e2NvbnN0IGw9T2JqZWN0LmFzc2lnbih7fSxuKTtyZXR1cm4gbFt0XT1yKG5bdF0sZSksbH0pKSxpKCl9KSxbaSxvLG4scixhLHRdKSx1PXMudXNlUmVmKGMpO3MudXNlRWZmZWN0KCgoKT0+e3UuY3VycmVudD1jfSksW2NdKTtjb25zdCBkPXMudXNlQ2FsbGJhY2soKGU9PnUuY3VycmVudChlKSksW10pO3JldHVybntncmlkU3RhdGU6byxkaXNwYXRjaDpkLGdyaWRBcGk6bH19LEdzPShlLHQpPT57Y29uc3Qgcj1NbyhcInVzZUdyaWRGaWx0ZXJcIiksW24sbCxvXT1RbyhlKSxhPWVhKGUsdWEpLGk9ZWEoZSxFYSksYz1zLnVzZUNhbGxiYWNrKCgoKT0+KHtmaWx0ZXJNb2RlbDplLmN1cnJlbnQuZ2V0U3RhdGUoXCJmaWx0ZXJcIiksYXBpOmUuY3VycmVudCxjb2x1bW5zOmUuY3VycmVudC5nZXRBbGxDb2x1bW5zKCkscm93czplLmN1cnJlbnQuZ2V0Um93TW9kZWxzKCksdmlzaWJsZVJvd3M6ZS5jdXJyZW50LmdldFZpc2libGVSb3dNb2RlbHMoKX0pKSxbZV0pLHU9cy51c2VDYWxsYmFjaygoKCk9PntyLmRlYnVnKFwiY2xlYXJpbmcgZmlsdGVyZWQgcm93c1wiKSxsKChlPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse3Zpc2libGVSb3dzOnt2aXNpYmxlUm93c0xvb2t1cDp7fX19KSkpfSksW3IsbF0pLGQ9cy51c2VDYWxsYmFjaygoKHQsbj16by5BbmQpPT57aWYoIXQuY29sdW1uRmllbGR8fCF0Lm9wZXJhdG9yVmFsdWV8fCF0LnZhbHVlKXJldHVybjtyLmRlYnVnKGBGaWx0ZXJpbmcgY29sdW1uOiAke3QuY29sdW1uRmllbGR9ICR7dC5vcGVyYXRvclZhbHVlfSAke3QudmFsdWV9IGApO2NvbnN0IGE9ZS5jdXJyZW50LmdldENvbHVtbkZyb21GaWVsZCh0LmNvbHVtbkZpZWxkKTtpZighYSlyZXR1cm47Y29uc3QgaT1hLmZpbHRlck9wZXJhdG9ycztpZighKG51bGw9PWk/dm9pZCAwOmkubGVuZ3RoKSl0aHJvdyBuZXcgRXJyb3IoYE1hdGVyaWFsLVVJOiBObyBmaWx0ZXIgb3BlcmF0b3JzIGZvdW5kIGZvciBjb2x1bW4gJyR7YS5maWVsZH0nLmApO2NvbnN0IHM9aS5maW5kKChlPT5lLnZhbHVlPT09dC5vcGVyYXRvclZhbHVlKSk7aWYoIXMpdGhyb3cgbmV3IEVycm9yKGBNYXRlcmlhbC1VSTogTm8gZmlsdGVyIG9wZXJhdG9yIGZvdW5kIGZvciBjb2x1bW4gJyR7YS5maWVsZH0nIGFuZCBvcGVyYXRvciB2YWx1ZSAnJHt0Lm9wZXJhdG9yVmFsdWV9Jy5gKTtjb25zdCBjPXMuZ2V0QXBwbHlGaWx0ZXJGbih0LGEpO2woKHI9Pntjb25zdCBsPU9iamVjdC5hc3NpZ24oe30sci52aXNpYmxlUm93cy52aXNpYmxlUm93c0xvb2t1cCk7cmV0dXJuIEhhKHIpLmZvckVhY2goKChyLG8pPT57Y29uc3QgYT1lLmN1cnJlbnQuZ2V0Q2VsbFBhcmFtcyhvLHQuY29sdW1uRmllbGQpLGk9YyhhKTtudWxsPT1sW29dP2xbb109aTpsW29dPW49PT16by5BbmQ/bFtvXSYmaTpsW29dfHxpfSkpLE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7dmlzaWJsZVJvd3M6e3Zpc2libGVSb3dzTG9va3VwOmwsdmlzaWJsZVJvd3M6T2JqZWN0LmVudHJpZXMobCkuZmlsdGVyKCgoWyxlXSk9PmUpKS5tYXAoKChbZV0pPT5lKSl9fSl9KSksbygpfSksW2UsbyxyLGxdKSxwPXMudXNlQ2FsbGJhY2soKCgpPT57aWYoaS5maWx0ZXJNb2RlPT09Um8uc2VydmVyKXJldHVybiB2b2lkIG8oKTt1KCk7Y29uc3R7aXRlbXM6dCxsaW5rT3BlcmF0b3I6cn09ZS5jdXJyZW50LnN0YXRlLmZpbHRlcjt0LmZvckVhY2goKHQ9PntlLmN1cnJlbnQuYXBwbHlGaWx0ZXIodCxyKX0pKSxvKCl9KSxbZSx1LG8saS5maWx0ZXJNb2RlXSksbT1zLnVzZUNhbGxiYWNrKCh0PT57ci5kZWJ1ZyhcIlVwc2VydGluZyBmaWx0ZXJcIiksbCgocj0+e2NvbnN0IG49Wy4uLnIuZmlsdGVyLml0ZW1zXSxsPU9iamVjdC5hc3NpZ24oe30sdCksbz1uLmZpbmRJbmRleCgoZT0+ZS5pZD09PWwuaWQpKTtpZigxPT09bi5sZW5ndGgmJnBuKG5bMF0se30pP25bMF09bDotMT09PW8/bi5wdXNoKGwpOm5bb109bCxudWxsPT1sLmlkJiYobC5pZD0obmV3IERhdGUpLmdldFRpbWUoKSksbnVsbD09bC5jb2x1bW5GaWVsZCYmKGwuY29sdW1uRmllbGQ9YVswXSksbnVsbCE9bC5jb2x1bW5GaWVsZCYmbnVsbD09bC5vcGVyYXRvclZhbHVlKXtjb25zdCB0PWUuY3VycmVudC5nZXRDb2x1bW5Gcm9tRmllbGQobC5jb2x1bW5GaWVsZCk7bC5vcGVyYXRvclZhbHVlPXQmJnQuZmlsdGVyT3BlcmF0b3JzWzBdLnZhbHVlfWkuZGlzYWJsZU11bHRpcGxlQ29sdW1uc0ZpbHRlcmluZyYmbi5sZW5ndGg+MSYmKG4ubGVuZ3RoPTEpO3JldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse2ZpbHRlcjpPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sci5maWx0ZXIpLHtpdGVtczpufSl9KX0pKSxwKCksZS5jdXJyZW50LnB1Ymxpc2hFdmVudChcImZpbHRlck1vZGVsQ2hhbmdlXCIsYygpKX0pLFtyLGwsZSxjLHAsaS5kaXNhYmxlTXVsdGlwbGVDb2x1bW5zRmlsdGVyaW5nLGFdKSxmPXMudXNlQ2FsbGJhY2soKHQ9PntyLmRlYnVnKGBEZWxldGluZyBmaWx0ZXIgb24gY29sdW1uICR7dC5jb2x1bW5GaWVsZH0gd2l0aCB2YWx1ZSAke3QudmFsdWV9YCk7bGV0IG49ITE7bCgoZT0+e2NvbnN0IHI9Wy4uLmUuZmlsdGVyLml0ZW1zLmZpbHRlcigoZT0+ZS5pZCE9PXQuaWQpKV07bj0wPT09ci5sZW5ndGg7cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7ZmlsdGVyOk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlLmZpbHRlcikse2l0ZW1zOnJ9KX0pfSkpLG4mJm0oe30pLHAoKSxlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwiZmlsdGVyTW9kZWxDaGFuZ2VcIixjKCkpfSksW2UscCxjLHIsbCxtXSksZz1zLnVzZUNhbGxiYWNrKCh0PT57aWYoci5kZWJ1ZyhcIkRpc3BsYXlpbmcgZmlsdGVyIHBhbmVsXCIpLHQpe2NvbnN0IHI9bi5maWx0ZXIuaXRlbXMubGVuZ3RoPjA/bi5maWx0ZXIuaXRlbXNbbi5maWx0ZXIuaXRlbXMubGVuZ3RoLTFdOm51bGw7ciYmci5jb2x1bW5GaWVsZD09PXR8fGUuY3VycmVudC51cHNlcnRGaWx0ZXIoe2NvbHVtbkZpZWxkOnR9KX1lLmN1cnJlbnQuc2hvd1ByZWZlcmVuY2VzKENpLmZpbHRlcnMpfSksW2Usbi5maWx0ZXIuaXRlbXMscl0pLGI9cy51c2VDYWxsYmFjaygoKCk9PntyLmRlYnVnKFwiSGlkaW5nIGZpbHRlciBwYW5lbFwiKSxudWxsPT1lfHxlLmN1cnJlbnQuaGlkZVByZWZlcmVuY2VzKCl9KSxbZSxyXSksaD1zLnVzZUNhbGxiYWNrKCgoZT16by5BbmQpPT57ci5kZWJ1ZyhcIkFwcGx5aW5nIGZpbHRlciBsaW5rIG9wZXJhdG9yXCIpLGwoKHQ9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7ZmlsdGVyOk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0LmZpbHRlcikse2xpbmtPcGVyYXRvcjplfSl9KSkpLHAoKX0pLFtwLHIsbF0pLEM9cy51c2VDYWxsYmFjaygoKCk9Pnt1KCksci5kZWJ1ZyhcIkNsZWFyaW5nIGZpbHRlciBtb2RlbFwiKSxsKChlPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse2ZpbHRlcjpUbygpfSkpKX0pLFt1LHIsbF0pLHY9cy51c2VDYWxsYmFjaygodD0+e0MoKSxyLmRlYnVnKFwiU2V0dGluZyBmaWx0ZXIgbW9kZWxcIiksaCh0LmxpbmtPcGVyYXRvciksdC5pdGVtcy5mb3JFYWNoKChlPT5tKGUpKSksZS5jdXJyZW50LnB1Ymxpc2hFdmVudChcImZpbHRlck1vZGVsQ2hhbmdlXCIsYygpKX0pLFtlLGgsQyxjLHIsbV0pLHc9cy51c2VDYWxsYmFjaygoKCk9PiRhKGUuY3VycmVudC5zdGF0ZSkpLFtlXSk7SW8oZSx7YXBwbHlGaWx0ZXJMaW5rT3BlcmF0b3I6aCxhcHBseUZpbHRlcnM6cCxhcHBseUZpbHRlcjpkLGRlbGV0ZUZpbHRlcjpmLHVwc2VydEZpbHRlcjptLHNldEZpbHRlck1vZGVsOnYsc2hvd0ZpbHRlclBhbmVsOmcsaGlkZUZpbHRlclBhbmVsOmIsZ2V0VmlzaWJsZVJvd01vZGVsczp3fSxcIkZpbHRlckFwaVwiKSxFaShlLFwicm93c1NldFwiLGUuY3VycmVudC5hcHBseUZpbHRlcnMpLEVpKGUsXCJyb3dzVXBkYXRlZFwiLGUuY3VycmVudC5hcHBseUZpbHRlcnMpLHhpKGUsXCJmaWx0ZXJNb2RlbENoYW5nZVwiLGkub25GaWx0ZXJNb2RlbENoYW5nZSkscy51c2VFZmZlY3QoKCgpPT57Y29uc3QgdD1pLmZpbHRlck1vZGVsLG49ZS5jdXJyZW50LnN0YXRlLmZpbHRlcjt0JiYhcG4odCxuKSYmKHIuZGVidWcoXCJmaWx0ZXJNb2RlbCBwcm9wIGNoYW5nZWQsIGFwcGx5aW5nIGZpbHRlcnNcIiksZS5jdXJyZW50LnNldEZpbHRlck1vZGVsKHQpKX0pLFtlLHIsaS5maWx0ZXJNb2RlbF0pLHMudXNlRWZmZWN0KCgoKT0+e2UuY3VycmVudCYmKHIuZGVidWcoXCJSb3dzIHByb3AgY2hhbmdlZCwgYXBwbHlpbmcgZmlsdGVyc1wiKSx1KCksZS5jdXJyZW50LmFwcGx5RmlsdGVycygpKX0pLFtlLHUscix0XSk7Y29uc3QgTz1zLnVzZUNhbGxiYWNrKCgoKT0+e3IuZGVidWcoXCJvbkNvbFVwZGF0ZWQgLSBHcmlkQ29sdW1ucyBjaGFuZ2VkLCBhcHBseWluZyBmaWx0ZXJzXCIpO2NvbnN0IHQ9ZS5jdXJyZW50LmdldFN0YXRlKFwiZmlsdGVyXCIpLG49dWEoZS5jdXJyZW50LnN0YXRlKTtyLmRlYnVnKFwiR3JpZENvbHVtbnMgY2hhbmdlZCwgYXBwbHlpbmcgZmlsdGVyc1wiKSx0Lml0ZW1zLmZvckVhY2goKHQ9PntuLmZpbmQoKGU9PmU9PT10LmNvbHVtbkZpZWxkKSl8fGUuY3VycmVudC5kZWxldGVGaWx0ZXIodCl9KSksZS5jdXJyZW50LmFwcGx5RmlsdGVycygpfSksW2Uscl0pO0VpKGUsXCJjb2x1bW5zVXBkYXRlZFwiLE8pfSxIcz1lPT57Y29uc3QgdD1NbyhcInVzZUdyaWRGb2N1c1wiKSxbLHIsbl09UW8oZSksbD1zLnVzZUNhbGxiYWNrKChlPT57cigocj0+e2NvbnN0e3Jvd0luZGV4Om4sY29sSW5kZXg6bH09ZTtyZXR1cm4gdC5kZWJ1ZyhgRm9jdXNpbmcgb24gY2VsbCB3aXRoIHJvd0luZGV4PSR7bn0gYW5kIGNvbEluZGV4PSR7bH1gKSxPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3RhYkluZGV4OntjZWxsOntyb3dJbmRleDpuLGNvbEluZGV4Omx9LGNvbHVtbkhlYWRlcjpudWxsfSxmb2N1czp7Y2VsbDp7cm93SW5kZXg6bixjb2xJbmRleDpsfSxjb2x1bW5IZWFkZXI6bnVsbH19KX0pKSxuKCl9KSxbbix0LHJdKSxvPXMudXNlQ2FsbGJhY2soKGU9PntyKChyPT57Y29uc3R7Y29sSW5kZXg6bn09ZTtyZXR1cm4gdC5kZWJ1ZyhcIkZvY3VzaW5nIG9uIGNvbHVtbiBoZWFkZXIgd2l0aCBjb2xJbmRleD1cIituKSxPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3RhYkluZGV4Ontjb2x1bW5IZWFkZXI6e2NvbEluZGV4Om59LGNlbGw6bnVsbH0sZm9jdXM6e2NvbHVtbkhlYWRlcjp7Y29sSW5kZXg6bn0sY2VsbDpudWxsfX0pfSkpLG4oKX0pLFtuLHQscl0pLGE9cy51c2VDYWxsYmFjaygoKHQscik9PnsobnVsbD09cj92b2lkIDA6ci50YXJnZXQpPT09KG51bGw9PXI/dm9pZCAwOnIuY3VycmVudFRhcmdldCkmJmUuY3VycmVudC5zZXRDZWxsRm9jdXModCl9KSxbZV0pLGk9cy51c2VDYWxsYmFjaygoKHQscik9PnsobnVsbD09cj92b2lkIDA6ci50YXJnZXQpPT09KG51bGw9PXI/dm9pZCAwOnIuY3VycmVudFRhcmdldCkmJmUuY3VycmVudC5zZXRDb2x1bW5IZWFkZXJGb2N1cyh0KX0pLFtlXSksYz1zLnVzZUNhbGxiYWNrKCgoKT0+e3QuZGVidWcoXCJDbGVhcmluZyBmb2N1c1wiKSxyKChlPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse2ZvY3VzOntjZWxsOm51bGwsY29sdW1uSGVhZGVyOm51bGx9fSkpKX0pLFt0LHJdKTtJbyhlLHtzZXRDZWxsRm9jdXM6bCxzZXRDb2x1bW5IZWFkZXJGb2N1czpvfSxcIkdyaWRGb2N1c0FwaVwiKSxFaShlLFwiY29sdW1uSGVhZGVyQmx1clwiLGMpLEVpKGUsXCJjZWxsQmx1clwiLGMpLEVpKGUsXCJjZWxsQ2VsbEZvY3VzXCIsYSksRWkoZSxcImNvbHVtbkhlYWRlckZvY3VzXCIsaSl9LE5zPWU9PmUua2V5Ym9hcmQsVnM9dihOcywoZT0+ZS5pc011bHRpcGxlS2V5UHJlc3NlZCkpLEJzPShlLHQpPT57Y29uc3Qgcj1NbyhcInVzZUdyaWRLZXlib2FyZFwiKSxbLG4sbF09UW8odCksbz1lYSh0LEphKSxhPXMudXNlQ2FsbGJhY2soKGU9PntuKCh0PT57aWYodC5rZXlib2FyZC5pc011bHRpcGxlS2V5UHJlc3NlZD09PWUpcmV0dXJuIHQ7ci5kZWJ1ZyhcIlRvZ2dsaW5nIGtleWJvYXJkIG11bHRpcGxlIGtleSBwcmVzc2VkIHRvIFwiK2UpO2NvbnN0IG49T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQua2V5Ym9hcmQpLHtpc011bHRpcGxlS2V5UHJlc3NlZDplfSk7cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7a2V5Ym9hcmQ6bn0pfSkpJiZsKCl9KSxbbCxyLG5dKSxpPXMudXNlQ2FsbGJhY2soKChlLG4pPT57Y29uc3QgbD1Gbihkb2N1bWVudC5hY3RpdmVFbGVtZW50LFwiTXVpRGF0YUdyaWQtcm93XCIpLG89TnVtYmVyKGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dpbmRleFwiKSk7bGV0IGE9bztjb25zdCBpPVsuLi50LmN1cnJlbnQuZ2V0U2VsZWN0ZWRSb3dzKCkua2V5cygpXTtpZihpLmxlbmd0aD4wKXtjb25zdCBlPWkubWFwKChlPT50LmN1cnJlbnQuZ2V0Um93SW5kZXhGcm9tSWQoZSkpKSxyPWUubWFwKChlPT5NYXRoLmFicyhvLWUpKSksbj1NYXRoLm1heCguLi5yKTthPWVbci5pbmRleE9mKG4pXX10LmN1cnJlbnQucHVibGlzaEV2ZW50KFwiY2VsbE5hdmlnYXRpb25LZXlEb3duXCIsZSxuKTtjb25zdCBzPXQuY3VycmVudC5nZXRTdGF0ZSgpLmZvY3VzLmNlbGwsYz1BcnJheShNYXRoLmFicyhzLnJvd0luZGV4LWEpKzEpLmZpbGwocy5yb3dJbmRleD5hP2E6cy5yb3dJbmRleCk7ci5kZWJ1ZyhcIlNlbGVjdGluZyByb3dzIFwiKSx0LmN1cnJlbnQuc2VsZWN0Um93cyhjLCEwLCEwKX0pLFtyLHRdKSxjPXMudXNlQ2FsbGJhY2soKCgpPT57dmFyIGUsdDtjb25zdCByPUxuKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLG49QW4ocik7b1tuXT9udWxsPT09KGU9bnVsbD09PXdpbmRvd3x8dm9pZCAwPT09d2luZG93P3ZvaWQgMDp3aW5kb3cuZ2V0U2VsZWN0aW9uKCkpfHx2b2lkIDA9PT1lfHxlLnNlbGVjdEFsbENoaWxkcmVuKHIpOm51bGw9PT0odD1udWxsPT09d2luZG93fHx2b2lkIDA9PT13aW5kb3c/dm9pZCAwOndpbmRvdy5nZXRTZWxlY3Rpb24oKSl8fHZvaWQgMD09PXR8fHQuc2VsZWN0QWxsQ2hpbGRyZW4oZG9jdW1lbnQuYWN0aXZlRWxlbWVudCksZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpfSksW29dKSx1PXMudXNlQ2FsbGJhY2soKGU9PntpbChlLmtleSkmJihyLmRlYnVnKFwiTXVsdGlwbGUgU2VsZWN0IGtleSBwcmVzc2VkXCIpLGEoITApKX0pLFtyLGFdKSxkPXMudXNlQ2FsbGJhY2soKGU9PntpbChlLmtleSkmJihyLmRlYnVnKFwiTXVsdGlwbGUgU2VsZWN0IGtleSByZWxlYXNlZFwiKSxhKCExKSl9KSxbcixhXSkscD1zLnVzZUNhbGxiYWNrKChlPT57ci5kZWJ1ZyhcIkdyaWQgbG9zdCBmb2N1cywgcmVsZWFzaW5nIGtleSBwcmVzc1wiLGUpLGEoITEpfSksW3IsYV0pLG09cy51c2VDYWxsYmFjaygoKGUscik9PntpZigham4oZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpcmV0dXJuO2lmKHIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlyZXR1cm47aWYoIShcImVkaXRcIj09PWUuY2VsbE1vZGUpKXtpZihZbihyLmtleSkmJnIuc2hpZnRLZXkpcmV0dXJuIHIucHJldmVudERlZmF1bHQoKSx2b2lkIHQuY3VycmVudC5zZWxlY3RSb3coZS5pZCk7aWYoIWRsKHIua2V5KXx8ci5zaGlmdEtleSlyZXR1cm4gZGwoci5rZXkpJiZyLnNoaWZ0S2V5PyhyLnByZXZlbnREZWZhdWx0KCksdm9pZCBpKGUscikpOnZvaWQoXCJjXCIhPT1yLmtleS50b0xvd2VyQ2FzZSgpfHwhci5jdHJsS2V5JiYhci5tZXRhS2V5P1wiYVwiPT09ci5rZXkudG9Mb3dlckNhc2UoKSYmKHIuY3RybEtleXx8ci5tZXRhS2V5KSYmKHIucHJldmVudERlZmF1bHQoKSx0LmN1cnJlbnQuc2VsZWN0Um93cyh0LmN1cnJlbnQuZ2V0QWxsUm93SWRzKCksITApKTpjKCkpO3QuY3VycmVudC5wdWJsaXNoRXZlbnQoXCJjZWxsTmF2aWdhdGlvbktleURvd25cIixlLHIpfX0pLFt0LGksY10pLGY9cy51c2VDYWxsYmFjaygoKGUscik9Pnt6bihkb2N1bWVudC5hY3RpdmVFbGVtZW50KSYmKHIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKXx8KFluKHIua2V5KSYmem4oZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkmJnIucHJldmVudERlZmF1bHQoKSwhZGwoci5rZXkpfHxZbihyLmtleSl8fHIuc2hpZnRLZXk/WG4oci5rZXkpJiYoci5jdHJsS2V5fHxyLm1ldGFLZXkpJiZ0LmN1cnJlbnQudG9nZ2xlQ29sdW1uTWVudShlLmZpZWxkKTp0LmN1cnJlbnQucHVibGlzaEV2ZW50KFwiY29sdW1uSGVhZGVyTmF2aWdhdGlvbktleWRvd25cIixlLHIpKSl9KSxbdF0pO0VpKHQsXCJrZXlkb3duXCIsdSksRWkodCxcImNlbGxLZXlkb3duXCIsbSksRWkodCxcImNvbHVtbkhlYWRlcktleWRvd25cIixmKSxFaSh0LFwia2V5dXBcIixkKSxFaSh0LFwiZ3JpZEZvY3VzT3V0XCIscCl9LCRzPShlLHQpPT57Y29uc3Qgcj1NbyhcInVzZUdyaWRLZXlib2FyZE5hdmlnYXRpb25cIiksbj1lYSh0LEVhKSxsPWVhKHQsZ3MpLG89ZWEodCxqYSksYT1lYSh0LGRhKSxpPWVhKHQsZ2EpLGM9ZT0+WG4oZS5rZXkpP1wiQXJyb3dEb3duXCI6cW4oZS5rZXkpP2Uuc2hpZnRLZXk/XCJBcnJvd0xlZnRcIjpcIkFycm93UmlnaHRcIjplLmtleSx1PXMudXNlQ2FsbGJhY2soKChlLHMpPT57cy5wcmV2ZW50RGVmYXVsdCgpO2NvbnN0e2NvbEluZGV4OnUscm93SW5kZXg6ZH09ZSxwPWMocyksbT1zLmN0cmxLZXl8fHMubWV0YUtleXx8cy5zaGlmdEtleTtsZXQgZixnPW87aWYobi5wYWdpbmF0aW9uJiZvPmwucGFnZVNpemUmJihnPWwucGFnZVNpemUqKGwucGFnZSsxKSksSm4ocCkpZj0oKGUsdCk9PntpZighSm4oZSkpdGhyb3cgbmV3IEVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoZSBmaXJzdCBhcmd1bWVudCAoa2V5KSBzaG91bGQgYmUgYW4gYXJyb3cga2V5IGNvZGUuXCIpO3N3aXRjaChlKXtjYXNlXCJBcnJvd0xlZnRcIjpyZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQpLHtjb2xJbmRleDp0LmNvbEluZGV4LTF9KTtjYXNlXCJBcnJvd1JpZ2h0XCI6cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7Y29sSW5kZXg6dC5jb2xJbmRleCsxfSk7Y2FzZVwiQXJyb3dVcFwiOnJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse3Jvd0luZGV4OnQucm93SW5kZXgtMX0pO2RlZmF1bHQ6cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7cm93SW5kZXg6dC5yb3dJbmRleCsxfSl9fSkocCx7Y29sSW5kZXg6dSxyb3dJbmRleDpkfSk7ZWxzZSBpZihRbihwKSl7Y29uc3QgZT1cIkhvbWVcIj09PXA/MDphLTE7aWYobSl7bGV0IHQ9MDt0PTA9PT1lP24ucGFnaW5hdGlvbj9nLWwucGFnZVNpemU6MDpnLTEsZj17Y29sSW5kZXg6ZSxyb3dJbmRleDp0fX1lbHNlIGY9e2NvbEluZGV4OmUscm93SW5kZXg6ZH19ZWxzZXtpZighZWwocCkmJiFZbihwKSl0aHJvdyBuZXcgRXJyb3IoXCJNYXRlcmlhbC1VSS4gS2V5IG5vdCBtYXBwZWQgdG8gbmF2aWdhdGlvbiBiZWhhdmlvci5cIik7Zj17Y29sSW5kZXg6dSxyb3dJbmRleDpkKyhwLmluZGV4T2YoXCJEb3duXCIpPi0xfHxZbihwKT9pLnZpZXdwb3J0UGFnZVNpemU6LTEqaS52aWV3cG9ydFBhZ2VTaXplKX19Zi5yb3dJbmRleDwwP3QuY3VycmVudC5zZXRDb2x1bW5IZWFkZXJGb2N1cyh7Y29sSW5kZXg6Zi5jb2xJbmRleH0pOihmLnJvd0luZGV4PWYucm93SW5kZXg+PWcmJmc+MD9nLTE6Zi5yb3dJbmRleCxmLmNvbEluZGV4PWYuY29sSW5kZXg8PTA/MDpmLmNvbEluZGV4LGYuY29sSW5kZXg9Zi5jb2xJbmRleD49YT9hLTE6Zi5jb2xJbmRleCxyLmRlYnVnKGBOYXZpZ2F0aW5nIHRvIG5leHQgY2VsbCByb3cgJHtmLnJvd0luZGV4fSwgY29sICR7Zi5jb2xJbmRleH1gKSx0LmN1cnJlbnQuc2Nyb2xsVG9JbmRleGVzKGYpLHQuY3VycmVudC5zZXRDZWxsRm9jdXMoZikpfSksW28sbi5wYWdpbmF0aW9uLGwucGFnZVNpemUsbC5wYWdlLGEscix0LGldKSxkPXMudXNlQ2FsbGJhY2soKChlLG4pPT57bGV0IGw7bi5wcmV2ZW50RGVmYXVsdCgpO2NvbnN0e2NvbEluZGV4Om99PWUscz1jKG4pO2lmKEpuKHMpKWw9KChlLHQpPT57aWYoIUpuKGUpKXRocm93IG5ldyBFcnJvcihcIk1hdGVyaWFsLVVJOiBUaGUgZmlyc3QgYXJndW1lbnQgKGtleSkgc2hvdWxkIGJlIGFuIGFycm93IGtleSBjb2RlLlwiKTtzd2l0Y2goZSl7Y2FzZVwiQXJyb3dMZWZ0XCI6cmV0dXJue2NvbEluZGV4OnQuY29sSW5kZXgtMX07Y2FzZVwiQXJyb3dSaWdodFwiOnJldHVybntjb2xJbmRleDp0LmNvbEluZGV4KzF9O2Nhc2VcIkFycm93RG93blwiOnJldHVybiBudWxsO2RlZmF1bHQ6cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sdCl9fSkocyx7Y29sSW5kZXg6b30pO2Vsc2V7aWYoIVFuKHMpKXtpZihlbChzKSlyZXR1cm4gdm9pZChzLmluZGV4T2YoXCJEb3duXCIpPi0xJiZ0LmN1cnJlbnQuc2V0Q2VsbEZvY3VzKHtjb2xJbmRleDplLmNvbEluZGV4LHJvd0luZGV4Omkudmlld3BvcnRQYWdlU2l6ZS0xfSkpO3Rocm93IG5ldyBFcnJvcihcIk1hdGVyaWFsLVVJLiBLZXkgbm90IG1hcHBlZCB0byBuYXZpZ2F0aW9uIGJlaGF2aW9yLlwiKX1sPXtjb2xJbmRleDpcIkhvbWVcIj09PXM/MDphLTF9fWw/KGwuY29sSW5kZXg9TWF0aC5tYXgoMCxsLmNvbEluZGV4KSxsLmNvbEluZGV4PWwuY29sSW5kZXg+PWE/YS0xOmwuY29sSW5kZXgsci5kZWJ1ZyhcIk5hdmlnYXRpbmcgdG8gbmV4dCBjb2x1bW4gcm93IFwiK2wuY29sSW5kZXgpLHQuY3VycmVudC5zY3JvbGxUb0luZGV4ZXMobCksdC5jdXJyZW50LnNldENvbHVtbkhlYWRlckZvY3VzKGwpKTp0LmN1cnJlbnQuc2V0Q2VsbEZvY3VzKHtjb2xJbmRleDplLmNvbEluZGV4LHJvd0luZGV4OjB9KX0pLFt0LGEsaSxyXSk7RWkodCxcImNlbGxOYXZpZ2F0aW9uS2V5RG93blwiLHUpLEVpKHQsXCJjb2x1bW5IZWFkZXJOYXZpZ2F0aW9uS2V5ZG93blwiLGQpfSxXcz1lPT57Y29uc3QgdD1NbyhcInVzZUdyaWRQYWdpbmF0aW9uXCIpLHtkaXNwYXRjaDpyfT1fcyhlLFwicGFnaW5hdGlvblwiLEtvLE9iamVjdC5hc3NpZ24oe30sVW8pKSxuPWVhKGUsRWEpLGw9ZWEoZSxLYSksbz1lYShlLGdhKSxhPXMudXNlQ2FsbGJhY2soKG49Pnt0LmRlYnVnKFwiU2V0dGluZyBwYWdlIHRvIFwiK24pLHIoX28obikpO2NvbnN0IGw9ZS5jdXJyZW50LmdldFN0YXRlKFwicGFnaW5hdGlvblwiKTtlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwicGFnZUNoYW5nZVwiLGwpfSksW2Uscix0XSksaT1zLnVzZUNhbGxiYWNrKCh0PT57cihHbyh0KSksZS5jdXJyZW50LnB1Ymxpc2hFdmVudChcInBhZ2VTaXplQ2hhbmdlXCIsZS5jdXJyZW50LmdldFN0YXRlKFwicGFnaW5hdGlvblwiKSl9KSxbZSxyXSk7eGkoZSxcInBhZ2VDaGFuZ2VcIixuLm9uUGFnZUNoYW5nZSkseGkoZSxcInBhZ2VTaXplQ2hhbmdlXCIsbi5vblBhZ2VTaXplQ2hhbmdlKSxzLnVzZUVmZmVjdCgoKCk9PntyKEhvKHtwYWdpbmF0aW9uTW9kZTpuLnBhZ2luYXRpb25Nb2RlfSkpfSksW2UscixuLnBhZ2luYXRpb25Nb2RlXSkscy51c2VFZmZlY3QoKCgpPT57Y29uc3QgZT1udWxsIT1uLnBhZ2U/bi5wYWdlOjA7cihfbyhlKSl9KSxbcixuLnBhZ2VdKSxzLnVzZUVmZmVjdCgoKCk9Pnshbi5hdXRvUGFnZVNpemUmJm4ucGFnZVNpemUmJnIoR28obi5wYWdlU2l6ZSkpfSksW24uYXV0b1BhZ2VTaXplLG4ucGFnZVNpemUsdCxyXSkscy51c2VFZmZlY3QoKCgpPT57bi5hdXRvUGFnZVNpemUmJm8mJihudWxsPT1vP3ZvaWQgMDpvLnZpZXdwb3J0UGFnZVNpemUpPjAmJnIoR28obnVsbD09bz92b2lkIDA6by52aWV3cG9ydFBhZ2VTaXplKSl9KSxbbyxyLG4uYXV0b1BhZ2VTaXplXSkscy51c2VFZmZlY3QoKCgpPT57cihObyh7dG90YWxSb3dDb3VudDpsfSkpfSksW2UscixsXSk7SW8oZSx7c2V0UGFnZVNpemU6aSxzZXRQYWdlOmF9LFwicGFnaW5hdGlvbkFwaVwiKX0sVXM9ZT0+e2NvbnN0IHQ9TW8oXCJ1c2VHcmlkUHJlZmVyZW5jZXNQYW5lbFwiKSxbLHIsbl09UW8oZSksbD1zLnVzZVJlZigpLG89cy51c2VSZWYoKSxhPXMudXNlQ2FsbGJhY2soKCgpPT57dC5kZWJ1ZyhcIkhpZGluZyBQcmVmZXJlbmNlcyBQYW5lbFwiKSxyKChlPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse3ByZWZlcmVuY2VQYW5lbDp7b3BlbjohMX19KSkpLG4oKX0pLFtuLHQscl0pLGk9cy51c2VDYWxsYmFjaygoKCk9PntvLmN1cnJlbnQ9c2V0VGltZW91dCgoKCk9PmNsZWFyVGltZW91dChsLmN1cnJlbnQpKSwwKX0pLFtdKSxjPXMudXNlQ2FsbGJhY2soKCgpPT57bC5jdXJyZW50PXNldFRpbWVvdXQoYSwxMDApfSksW2FdKTtJbyhlLHtzaG93UHJlZmVyZW5jZXM6cy51c2VDYWxsYmFjaygoZT0+e3QuZGVidWcoXCJPcGVuaW5nIFByZWZlcmVuY2VzIFBhbmVsXCIpLGkoKSxyKCh0PT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse3ByZWZlcmVuY2VQYW5lbDpPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdC5wcmVmZXJlbmNlUGFuZWwpLHtvcGVuOiEwLG9wZW5lZFBhbmVsVmFsdWU6ZX0pfSkpKSxuKCl9KSxbaSxuLHQscl0pLGhpZGVQcmVmZXJlbmNlczpjfSxcIkNvbHVtbk1lbnVBcGlcIikscy51c2VFZmZlY3QoKCgpPT4oKT0+e2NsZWFyVGltZW91dChsLmN1cnJlbnQpLGNsZWFyVGltZW91dChvLmN1cnJlbnQpfSksW10pfTtsZXQgS3M9ITE7ZnVuY3Rpb24gWnMoZSl7Y29uc3QgdD1zLnVzZUNhbGxiYWNrKCh0PT4oe2ZpZWxkOnQsZWxlbWVudDplLmN1cnJlbnQuZ2V0Q29sdW1uSGVhZGVyRWxlbWVudCh0KSxjb2xEZWY6ZS5jdXJyZW50LmdldENvbHVtbkZyb21GaWVsZCh0KSxjb2xJbmRleDplLmN1cnJlbnQuZ2V0Q29sdW1uSW5kZXgodCwhMCksYXBpOmUuY3VycmVudH0pKSxbZV0pLHI9cy51c2VDYWxsYmFjaygodD0+KHtpZDp0LGVsZW1lbnQ6ZS5jdXJyZW50LmdldFJvd0VsZW1lbnQodCksY29sdW1uczplLmN1cnJlbnQuZ2V0QWxsQ29sdW1ucygpLGdldFZhbHVlOnI9PmUuY3VycmVudC5nZXRDZWxsVmFsdWUodCxyKSxyb3c6ZS5jdXJyZW50LmdldFJvd0Zyb21JZCh0KSxyb3dJbmRleDplLmN1cnJlbnQuZ2V0Um93SW5kZXhGcm9tSWQodCksYXBpOmUuY3VycmVudH0pKSxbZV0pLG49cy51c2VDYWxsYmFjaygoKHQscik9Pntjb25zdCBuPWUuY3VycmVudC5nZXRDZWxsRWxlbWVudCh0LHIpLGw9ZS5jdXJyZW50LmdldFJvd0Zyb21JZCh0KTtyZXR1cm57ZWxlbWVudDpuLGlkOnQsZmllbGQ6cixyb3c6bCx2YWx1ZTpsW3JdLGdldFZhbHVlOnI9PmUuY3VycmVudC5nZXRDZWxsVmFsdWUodCxyKSxjb2xEZWY6ZS5jdXJyZW50LmdldENvbHVtbkZyb21GaWVsZChyKSxjZWxsTW9kZTplLmN1cnJlbnQuZ2V0Q2VsbE1vZGUodCxyKSxyb3dJbmRleDplLmN1cnJlbnQuZ2V0Um93SW5kZXhGcm9tSWQodCksY29sSW5kZXg6ZS5jdXJyZW50LmdldENvbHVtbkluZGV4KHIsITApLGFwaTplLmN1cnJlbnR9fSksW2VdKSxsPXMudXNlQ2FsbGJhY2soKCh0LHIpPT57Y29uc3QgbD1lLmN1cnJlbnQuZ2V0Q29sdW1uRnJvbUZpZWxkKHIpLG89ZS5jdXJyZW50LmdldENlbGxWYWx1ZSh0LHIpLGE9bih0LHIpLGk9T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGEpLHt2YWx1ZTpvLGdldFZhbHVlOnI9PmUuY3VycmVudC5nZXRDZWxsVmFsdWUodCxyKSxmb3JtYXR0ZWRWYWx1ZTpvfSk7cmV0dXJuIGwudmFsdWVGb3JtYXR0ZXImJihpLmZvcm1hdHRlZFZhbHVlPWwudmFsdWVGb3JtYXR0ZXIoaSkpLGkuaXNFZGl0YWJsZT1sJiZlLmN1cnJlbnQuaXNDZWxsRWRpdGFibGUoaSksaX0pLFtlLG5dKSxvPXMudXNlQ2FsbGJhY2soKCh0LHIpPT57Y29uc3QgbD1lLmN1cnJlbnQuZ2V0Q29sdW1uRnJvbUZpZWxkKHIpO2lmKEtzfHxcInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WfHxsfHxmdW5jdGlvbihlKXtjb25zb2xlLndhcm4oW2BNYXRlcmlhbC1VSTogWW91IGFyZSBjYWxsaW5nIGdldFZhbHVlKCcke2V9JykgYnV0IHRoZSBjb2x1bW4gXFxgJHtlfVxcYCBpcyBub3QgZGVmaW5lZC5gLGBJbnN0ZWFkLCB5b3UgY2FuIGFjY2VzcyB0aGUgZGF0YSBmcm9tIFxcYHBhcmFtcy5yb3cuJHtlfVxcYC5gXS5qb2luKFwiXFxuXCIpKSxLcz0hMH0ociksIWx8fCFsLnZhbHVlR2V0dGVyKXtyZXR1cm4gZS5jdXJyZW50LmdldFJvd0Zyb21JZCh0KVtyXX1yZXR1cm4gbC52YWx1ZUdldHRlcihuKHQscikpfSksW2Usbl0pLGE9cy51c2VDYWxsYmFjaygodD0+ZS5jdXJyZW50LnJvb3RFbGVtZW50UmVmLmN1cnJlbnQ/JG4oZS5jdXJyZW50LnJvb3RFbGVtZW50UmVmLmN1cnJlbnQsdCk6bnVsbCksW2VdKSxpPXMudXNlQ2FsbGJhY2soKHQ9PmUuY3VycmVudC5yb290RWxlbWVudFJlZi5jdXJyZW50P1duKGUuY3VycmVudC5yb290RWxlbWVudFJlZi5jdXJyZW50LHQpOm51bGwpLFtlXSksYz1zLnVzZUNhbGxiYWNrKCgodCxyKT0+ZS5jdXJyZW50LnJvb3RFbGVtZW50UmVmLmN1cnJlbnQ/VW4oZS5jdXJyZW50LnJvb3RFbGVtZW50UmVmLmN1cnJlbnQse2lkOnQsZmllbGQ6cn0pOm51bGwpLFtlXSk7SW8oZSx7Z2V0Q2VsbFZhbHVlOm8sZ2V0Q2VsbFBhcmFtczpsLGdldENlbGxFbGVtZW50OmMsZ2V0Um93UGFyYW1zOnIsZ2V0Um93RWxlbWVudDppLGdldENvbHVtbkhlYWRlclBhcmFtczp0LGdldENvbHVtbkhlYWRlckVsZW1lbnQ6YX0sXCJDZWxsQXBpXCIpfWZ1bmN0aW9uIFhzKGUsdCxyKXtpZihudWxsPT1lKXRocm93IG5ldyBFcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGRhdGEgZ3JpZCBjb21wb25lbnQgcmVxdWlyZXMgYWxsIHJvd3MgdG8gaGF2ZSBhIHVuaXF1ZSBpZCBwcm9wZXJ0eS5cIixyfHxcIkEgcm93IHdhcyBwcm92aWRlZCB3aXRob3V0IGlkIGluIHRoZSByb3dzIHByb3A6XCIsSlNPTi5zdHJpbmdpZnkodCldLmpvaW4oXCJcXG5cIikpO3JldHVybiEwfWZ1bmN0aW9uIHFzKGUsdCxyKXtjb25zdCBuPXQ/dChlKTplLmlkO3JldHVybiBYcyhuLGUsciksbn1mdW5jdGlvbiBZcyhlLHQscil7Y29uc3Qgbj1PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30se2lkUm93c0xvb2t1cDp7fSxhbGxSb3dzOltdLHRvdGFsUm93Q291bnQ6MH0pLHt0b3RhbFJvd0NvdW50OnQmJnQ+ZS5sZW5ndGg/dDplLmxlbmd0aH0pO3JldHVybiBlLmZvckVhY2goKGU9Pntjb25zdCB0PXFzKGUscik7bi5hbGxSb3dzLnB1c2godCksbi5pZFJvd3NMb29rdXBbdF09ZX0pKSxufWNvbnN0IEpzPShlLHQscik9Pntjb25zdCBuPU1vKFwidXNlR3JpZFJvd3NcIiksW2wsbyxhXT1RbyhlKSxpPXMudXNlUmVmKCksYz1zLnVzZUNhbGxiYWNrKChlPT57bnVsbD09aS5jdXJyZW50JiYoaS5jdXJyZW50PXNldFRpbWVvdXQoKCgpPT57bi5kZWJ1ZyhcIlVwZGF0aW5nIGNvbXBvbmVudFwiKSxpLmN1cnJlbnQ9bnVsbCxlJiZlKCksYSgpfSksMTAwKSl9KSxbbixhXSksdT1zLnVzZVJlZihsLnJvd3MpO3MudXNlRWZmZWN0KCgoKT0+KCk9PmNsZWFyVGltZW91dChpLmN1cnJlbnQpKSxbXSkscy51c2VFZmZlY3QoKCgpPT57bygoZT0+KHUuY3VycmVudD1Zcyh0LGUub3B0aW9ucy5yb3dDb3VudCxyKSxPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse3Jvd3M6dS5jdXJyZW50fSkpKSl9KSxbcix0LG9dKTtjb25zdCBkPXMudXNlQ2FsbGJhY2soKHQ9PmUuY3VycmVudC5nZXRTb3J0ZWRSb3dJZHM/ZS5jdXJyZW50LmdldFNvcnRlZFJvd0lkcygpLmluZGV4T2YodCk6ZS5jdXJyZW50LnN0YXRlLnJvd3MuYWxsUm93cy5pbmRleE9mKHQpKSxbZV0pLHA9cy51c2VDYWxsYmFjaygodD0+ZS5jdXJyZW50LmdldFNvcnRlZFJvd0lkcz9lLmN1cnJlbnQuZ2V0U29ydGVkUm93SWRzKClbdF06ZS5jdXJyZW50LnN0YXRlLnJvd3MuYWxsUm93c1t0XSksW2VdKSxtPXMudXNlQ2FsbGJhY2soKHQ9PmUuY3VycmVudC5zdGF0ZS5yb3dzLmlkUm93c0xvb2t1cFt0XSksW2VdKSxmPXMudXNlQ2FsbGJhY2soKHQ9PntuLmRlYnVnKFwidXBkYXRpbmcgYWxsIHJvd3MsIG5ldyBsZW5ndGggXCIrdC5sZW5ndGgpLHUuY3VycmVudC5hbGxSb3dzLmxlbmd0aD4wJiZlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwicm93c0NsZWFyZWRcIik7Y29uc3QgYT1bXSxpPXQucmVkdWNlKCgoZSx0KT0+e2NvbnN0IG49cXModCxyKTtyZXR1cm4gZVtuXT10LGEucHVzaChuKSxlfSkse30pLHM9bC5vcHRpb25zJiZsLm9wdGlvbnMucm93Q291bnQmJmwub3B0aW9ucy5yb3dDb3VudD5hLmxlbmd0aD9sLm9wdGlvbnMucm93Q291bnQ6YS5sZW5ndGg7dS5jdXJyZW50PXtpZFJvd3NMb29rdXA6aSxhbGxSb3dzOmEsdG90YWxSb3dDb3VudDpzfSxvKChlPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse3Jvd3M6dS5jdXJyZW50fSkpKSxjKCgoKT0+ZS5jdXJyZW50LnB1Ymxpc2hFdmVudChcInJvd3NTZXRcIikpKX0pLFtuLGwub3B0aW9ucyxvLGMsZSxyXSksZz1zLnVzZUNhbGxiYWNrKCh0PT57Y29uc3Qgbj10LnJlZHVjZSgoKGUsdCk9Pntjb25zdCBuPXFzKHQscixcIkEgcm93IHdhcyBwcm92aWRlZCB3aXRob3V0IGlkIHdoZW4gY2FsbGluZyB1cGRhdGVSb3dzKCk6XCIpO3JldHVybiBlW25dPW51bGwhPWVbbl0/T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGVbbl0pLHQpOnQsZX0pLHt9KSxsPVtdLGE9W107aWYoT2JqZWN0LmVudHJpZXMobikuZm9yRWFjaCgoKFtlLHRdKT0+e2lmKFwiZGVsZXRlXCI9PT10Ll9hY3Rpb24pcmV0dXJuIHZvaWQgYS5wdXNoKGUpO2NvbnN0IHI9bShlKTtpZighcilyZXR1cm4gdm9pZCBsLnB1c2godCk7Y29uc3Qgbj1PYmplY3QuYXNzaWduKHt9LHUuY3VycmVudC5pZFJvd3NMb29rdXApO25bZV09T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHIpLHQpLHUuY3VycmVudC5pZFJvd3NMb29rdXA9bn0pKSxvKChlPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse3Jvd3M6T2JqZWN0LmFzc2lnbih7fSx1LmN1cnJlbnQpfSkpKSxhLmxlbmd0aD4wfHxsLmxlbmd0aD4wKXthLmZvckVhY2goKGU9PntkZWxldGUgdS5jdXJyZW50LmlkUm93c0xvb2t1cFtlXX0pKTtjb25zdCBlPVsuLi5PYmplY3QudmFsdWVzKHUuY3VycmVudC5pZFJvd3NMb29rdXApLC4uLmxdO2YoZSl9YygoKCk9PmUuY3VycmVudC5wdWJsaXNoRXZlbnQoXCJyb3dzVXBkYXRlZFwiKSkpfSksW2UsYyxtLHIsbyxmXSksYj1zLnVzZUNhbGxiYWNrKCgoKT0+bmV3IE1hcChlLmN1cnJlbnQuc3RhdGUucm93cy5hbGxSb3dzLm1hcCgodD0+W3QsZS5jdXJyZW50LnN0YXRlLnJvd3MuaWRSb3dzTG9va3VwW3RdXSkpKSksW2VdKSxoPXMudXNlQ2FsbGJhY2soKCgpPT5lLmN1cnJlbnQuc3RhdGUucm93cy50b3RhbFJvd0NvdW50KSxbZV0pLEM9cy51c2VDYWxsYmFjaygoKCk9PmUuY3VycmVudC5zdGF0ZS5yb3dzLmFsbFJvd3MpLFtlXSk7SW8oZSx7Z2V0Um93SW5kZXhGcm9tSWQ6ZCxnZXRSb3dJZEZyb21Sb3dJbmRleDpwLGdldFJvd0Zyb21JZDptLGdldFJvd01vZGVsczpiLGdldFJvd3NDb3VudDpoLGdldEFsbFJvd0lkczpDLHNldFJvd3M6Zix1cGRhdGVSb3dzOmd9LFwiR3JpZFJvd0FwaVwiKX07ZnVuY3Rpb24gUXMoZSl7Y29uc3QgdD1NbyhcInVzZUdyaWRFZGl0Um93c1wiKSxbLHIsbl09UW8oZSksbD1lYShlLEVhKSxvPXMudXNlUmVmKG51bGwpLGE9cy51c2VDYWxsYmFjaygoKGwsYSxpKT0+e2xldCBzPSExO2lmKHIoKHQ9Pntjb25zdCByPXQuZWRpdFJvd3NbbF0mJnQuZWRpdFJvd3NbbF1bYV0sbj1PYmplY3QuYXNzaWduKHt9LHQuZWRpdFJvd3MpO3JldHVyblwiZWRpdFwiPT09aSYmcnx8XCJ2aWV3XCI9PT1pJiYhcj90OihcImVkaXRcIj09PWk/KG5bbF09T2JqZWN0LmFzc2lnbih7fSxuW2xdKXx8e30sbltsXVthXT17dmFsdWU6ZS5jdXJyZW50LmdldENlbGxWYWx1ZShsLGEpfSxvLmN1cnJlbnQ9ZS5jdXJyZW50LmdldENlbGxQYXJhbXMobCxhKSk6KGRlbGV0ZSBuW2xdW2FdLG8uY3VycmVudD1udWxsLE9iamVjdC5rZXlzKG5bbF0pLmxlbmd0aHx8ZGVsZXRlIG5bbF0pLHM9ITAsT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQpLHtlZGl0Um93czpufSkpfSkpLCFzKXJldHVybjt0LmRlYnVnKGBTd2l0Y2hpbmcgY2VsbCBpZDogJHtsfSBmaWVsZDogJHthfSB0byBtb2RlOiAke2l9YCksbigpLGUuY3VycmVudC5wdWJsaXNoRXZlbnQoXCJjZWxsTW9kZUNoYW5nZVwiLHtpZDpsLGZpZWxkOmEsbW9kZTppLGFwaTplLmN1cnJlbnR9KTtjb25zdCBjPXthcGk6ZS5jdXJyZW50LG1vZGVsOmUuY3VycmVudC5nZXRTdGF0ZSgpLmVkaXRSb3dzfTtlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwiZWRpdFJvd01vZGVsQ2hhbmdlXCIsYyl9KSxbZSxuLHQscl0pLGk9cy51c2VDYWxsYmFjaygoKHQscik9Pntjb25zdCBuPWUuY3VycmVudC5nZXRTdGF0ZSgpLmVkaXRSb3dzO3JldHVybiBuW3RdJiZuW3RdW3JdP1wiZWRpdFwiOlwidmlld1wifSksW2VdKSxjPXMudXNlQ2FsbGJhY2soKGU9PmUuY29sRGVmLmVkaXRhYmxlJiZlLmNvbERlZi5yZW5kZXJFZGl0Q2VsbCYmKCFsLmlzQ2VsbEVkaXRhYmxlfHxsLmlzQ2VsbEVkaXRhYmxlKGUpKSksW2wuaXNDZWxsRWRpdGFibGVdKSx1PXMudXNlQ2FsbGJhY2soKChsLG8pPT57aWYobnVsbD09bz92b2lkIDA6by5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXJldHVybjtjb25zdHtpZDphLGZpZWxkOmkscHJvcHM6c309bDt0LmRlYnVnKGBTZXR0aW5nIGNlbGwgcHJvcHMgb24gaWQ6ICR7YX0gZmllbGQ6ICR7aX1gKSxyKChlPT57Y29uc3QgdD1PYmplY3QuYXNzaWduKHt9LGUuZWRpdFJvd3MpO3JldHVybiB0W2FdPU9iamVjdC5hc3NpZ24oe30sZS5lZGl0Um93c1thXSksdFthXVtpXT1zLE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7ZWRpdFJvd3M6dH0pfSkpLG4oKTtjb25zdCBjPXthcGk6ZS5jdXJyZW50LG1vZGVsOmUuY3VycmVudC5nZXRTdGF0ZSgpLmVkaXRSb3dzfTtlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwiZWRpdFJvd01vZGVsQ2hhbmdlXCIsYyl9KSxbZSxuLHQscl0pLGQ9cy51c2VDYWxsYmFjaygoKHQscik9Pntjb25zdCBuPWUuY3VycmVudC5nZXRFZGl0Um93c01vZGVsKCk7cmV0dXJuIG5bdF0mJm5bdF1bcl0/blt0XVtyXTp7aWQ6dCxmaWVsZDpyLHZhbHVlOmUuY3VycmVudC5nZXRDZWxsVmFsdWUodCxyKX19KSxbZV0pLHA9cy51c2VDYWxsYmFjaygoZT0+e3QuZGVidWcoXCJTZXR0aW5nIHJvdyBtb2RlbFwiKSxyKCh0PT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse2VkaXRSb3dzOmV9KSkpLG4oKX0pLFtuLHQscl0pLG09cy51c2VDYWxsYmFjaygoKCk9PmUuY3VycmVudC5nZXRTdGF0ZSgpLmVkaXRSb3dzKSxbZV0pLGY9cy51c2VDYWxsYmFjaygoKHQscik9Pih7aWQ6dCxmaWVsZDpyLHByb3BzOmUuY3VycmVudC5nZXRFZGl0Q2VsbFByb3BzKHQscil9KSksW2VdKSxnPXMudXNlQ2FsbGJhY2soKCh0LHIpPT57Y29uc3Qgbj1lLmN1cnJlbnQuZ2V0RWRpdENlbGxQcm9wcyh0LHIpO3JldHVybntpZDp0LGZpZWxkOnIsdmFsdWU6bnVsbD09bj92b2lkIDA6bi52YWx1ZX19KSxbZV0pLGI9cy51c2VDYWxsYmFjaygocj0+e3ZhciBuO3QuZGVidWcoYFNldHRpbmcgY2VsbCBpZDogJHtyLmlkfSBmaWVsZDogJHtyLmZpZWxkfSB0byB2YWx1ZTogJHtudWxsPT09KG49ci52YWx1ZSl8fHZvaWQgMD09PW4/dm9pZCAwOm4udG9TdHJpbmcoKX1gKTtjb25zdCBsPXtpZDpyLmlkfTtsW3IuZmllbGRdPXIudmFsdWUsZS5jdXJyZW50LnVwZGF0ZVJvd3MoW2xdKSxlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwiY2VsbFZhbHVlQ2hhbmdlXCIscil9KSxbZSx0XSksaD1zLnVzZUNhbGxiYWNrKCgocixuKT0+e2lmKG51bGw9PW4/dm9pZCAwOm4uaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlyZXR1cm47dC5kZWJ1ZyhgQ29tbWl0dGluZyBjZWxsIGNoYW5nZSBvbiBpZDogJHtyLmlkfSBmaWVsZDogJHtyLmZpZWxkfWApO2NvbnN0IGw9ci5wcm9wcyYmci5wcm9wcy52YWx1ZTtlLmN1cnJlbnQuc2V0Q2VsbFZhbHVlKHtpZDpyLmlkLGZpZWxkOnIuZmllbGQsdmFsdWU6bH0pfSksW2UsdF0pLEM9cy51c2VDYWxsYmFjaygoKHQscik9PnthKHQuaWQsdC5maWVsZCxcInZpZXdcIikscGwocikmJih1bChyLmtleSk/ZS5jdXJyZW50LnB1Ymxpc2hFdmVudChcImNlbGxOYXZpZ2F0aW9uS2V5RG93blwiLHQscik6KFpuKHIua2V5KXx8dGwoci5rZXkpKSYmZS5jdXJyZW50LnNldENlbGxGb2N1cyh0KSl9KSxbZSxhXSksdj1zLnVzZUNhbGxiYWNrKCgodCxyKT0+e2lmKHQuaXNFZGl0YWJsZSYmIXIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7aWYocGwocikmJm5sKHIua2V5KSl7Y29uc3Qgcj1lLmN1cnJlbnQuZ2V0RWRpdENlbGxQcm9wc1BhcmFtcyh0LmlkLHQuZmllbGQpO3IucHJvcHMudmFsdWU9XCJcIixlLmN1cnJlbnQuc2V0RWRpdENlbGxQcm9wcyhyKX1hKHQuaWQsdC5maWVsZCxcImVkaXRcIil9fSksW2UsYV0pLHc9cy51c2VDYWxsYmFjaygoKGUsdCk9Pntjb25zdCByPXQuZGV0YWlsPjE7ZS5pc0VkaXRhYmxlJiZcInZpZXdcIj09PWUuY2VsbE1vZGUmJnImJnQucHJldmVudERlZmF1bHQoKX0pLFtdKSxPPXMudXNlQ2FsbGJhY2soKCh0LHIpPT57aWYoci5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpfHxcInZpZXdcIj09PXQuY2VsbE1vZGUpcmV0dXJuO2NvbnN0IG49ZS5jdXJyZW50LmdldEVkaXRDZWxsUHJvcHNQYXJhbXModC5pZCx0LmZpZWxkKTtuLnByb3BzLmVycm9yfHxlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwiY2VsbEVkaXRQcm9wc0NoYW5nZUNvbW1pdHRlZFwiLG4sciksZS5jdXJyZW50LnB1Ymxpc2hFdmVudChcImNlbGxFZGl0RXhpdFwiLHQscil9KSxbZV0pLHk9cy51c2VDYWxsYmFjaygoKHQscik9PntpZighdC5pc0VkaXRhYmxlfHxyLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpcmV0dXJuO2NvbnN0IG49XCJlZGl0XCI9PT10LmNlbGxNb2RlO2lmKCFuJiZzbChyLmtleSkmJmUuY3VycmVudC5wdWJsaXNoRXZlbnQoXCJjZWxsRWRpdEVudGVyXCIsdCxyKSwhbiYmdGwoci5rZXkpKXtjb25zdCBuPWUuY3VycmVudC5nZXRFZGl0Q2VsbFByb3BzUGFyYW1zKHQuaWQsdC5maWVsZCk7bi5wcm9wcy52YWx1ZT1cIlwiLGUuY3VycmVudC5wdWJsaXNoRXZlbnQoXCJjZWxsRWRpdFByb3BzQ2hhbmdlQ29tbWl0dGVkXCIsbixyKSxlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwiY2VsbEVkaXRFeGl0XCIsdCxyKX1pZihuJiZ1bChyLmtleSkpe2NvbnN0IG49ZS5jdXJyZW50LmdldEVkaXRDZWxsUHJvcHNQYXJhbXModC5pZCx0LmZpZWxkKTtpZihuLnByb3BzLmVycm9yKXJldHVybjtlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwiY2VsbEVkaXRQcm9wc0NoYW5nZUNvbW1pdHRlZFwiLG4scil9biYmIXIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmY2woci5rZXkpJiZlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwiY2VsbEVkaXRFeGl0XCIsdCxyKX0pLFtlXSksRT1zLnVzZUNhbGxiYWNrKCgoLi4udCk9PntlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwiY2VsbEVkaXRFbnRlclwiLC4uLnQpfSksW2VdKTtFaShlLFwiY2VsbEtleWRvd25cIix5KSxFaShlLFwiY2VsbEJsdXJcIixPKSxFaShlLFwiY2VsbE1vdXNlRG93blwiLHcpLEVpKGUsXCJjZWxsRG91YmxlQ2xpY2tcIixFKSxFaShlLFwiY2VsbEVkaXRFbnRlclwiLHYpLEVpKGUsXCJjZWxsRWRpdEV4aXRcIixDKSxFaShlLFwiY2VsbEVkaXRQcm9wc0NoYW5nZVwiLHUpLEVpKGUsXCJjZWxsRWRpdFByb3BzQ2hhbmdlQ29tbWl0dGVkXCIsaCkseGkoZSxcImNlbGxFZGl0UHJvcHNDaGFuZ2VDb21taXR0ZWRcIixsLm9uRWRpdENlbGxDaGFuZ2VDb21taXR0ZWQpLHhpKGUsXCJjZWxsRWRpdFByb3BzQ2hhbmdlXCIsbC5vbkVkaXRDZWxsQ2hhbmdlKSx4aShlLFwiY2VsbFZhbHVlQ2hhbmdlXCIsbC5vbkNlbGxWYWx1ZUNoYW5nZSkseGkoZSxcImNlbGxNb2RlQ2hhbmdlXCIsbC5vbkNlbGxNb2RlQ2hhbmdlKSx4aShlLFwiZWRpdFJvd01vZGVsQ2hhbmdlXCIsbC5vbkVkaXRSb3dNb2RlbENoYW5nZSksSW8oZSx7c2V0Q2VsbE1vZGU6YSxnZXRDZWxsTW9kZTppLGlzQ2VsbEVkaXRhYmxlOmMsc2V0Q2VsbFZhbHVlOmIsY29tbWl0Q2VsbENoYW5nZTpoLHNldEVkaXRDZWxsUHJvcHM6dSxnZXRFZGl0Q2VsbFByb3BzOmQsZ2V0RWRpdENlbGxQcm9wc1BhcmFtczpmLGdldEVkaXRDZWxsVmFsdWVQYXJhbXM6ZyxzZXRFZGl0Um93c01vZGVsOnAsZ2V0RWRpdFJvd3NNb2RlbDptfSxcIkVkaXRSb3dBcGlcIikscy51c2VFZmZlY3QoKCgpPT57ZS5jdXJyZW50LnNldEVkaXRSb3dzTW9kZWwobC5lZGl0Um93c01vZGVsfHx7fSl9KSxbZSxsLmVkaXRSb3dzTW9kZWxdKX1jb25zdCBlYz1lPT57Y29uc3QgdD1NbyhcInVzZUdyaWRTZWxlY3Rpb25cIiksWyxyLG5dPVFvKGUpLGw9ZWEoZSxFYSksbz1lYShlLHphKSxhPWVhKGUsVnMpLGk9cy51c2VSZWYoITEpO3MudXNlRWZmZWN0KCgoKT0+e2kuY3VycmVudD0hbC5kaXNhYmxlTXVsdGlwbGVTZWxlY3Rpb24mJmF9KSxbYSxsLmRpc2FibGVNdWx0aXBsZVNlbGVjdGlvbl0pO2NvbnN0IGM9cy51c2VDYWxsYmFjaygoKCk9PmVpKGUuY3VycmVudC5nZXRTdGF0ZSgpKSksW2VdKSx1PXMudXNlQ2FsbGJhY2soKChvLGEscyxjKT0+e2lmKCFlLmN1cnJlbnQuaXNJbml0aWFsaXNlZClyZXR1cm4gdm9pZCByKChlPT57Y29uc3QgdD17fTtyZXR1cm4gdFtvXT1vLE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7c2VsZWN0aW9uOnR9KX0pKTt0LmRlYnVnKFwiU2VsZWN0aW5nIHJvdyBcIitvKTtjb25zdCB1PXN8fGkuY3VycmVudHx8bC5jaGVja2JveFNlbGVjdGlvbjtyKHU/ZT0+e2NvbnN0IHQ9T2JqZWN0LmFzc2lnbih7fSxlLnNlbGVjdGlvbik7cmV0dXJuKHUmJm51bGwhPWM/Yzp2b2lkIDA9PT10W29dKT90W29dPW86ZGVsZXRlIHRbb10sT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtzZWxlY3Rpb246dH0pfTplPT57Y29uc3QgdD17fTtyZXR1cm4gdFtvXT1vLE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7c2VsZWN0aW9uOnR9KX0pLG4oKTtjb25zdCBkPWUuY3VycmVudC5nZXRTdGF0ZShcInNlbGVjdGlvblwiKSxwPXthcGk6ZSxkYXRhOmEsaXNTZWxlY3RlZDp2b2lkIDAhPT1kW29dfSxtPXtzZWxlY3Rpb25Nb2RlbDpPYmplY3QudmFsdWVzKGQpfTtlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwicm93U2VsZWN0ZWRcIixwKSxlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwic2VsZWN0aW9uQ2hhbmdlXCIsbSl9KSxbZSx0LGwuY2hlY2tib3hTZWxlY3Rpb24sbixyXSksZD1zLnVzZUNhbGxiYWNrKCgodCxyPSEwLG49ITEpPT57dSh0LGUuY3VycmVudC5nZXRSb3dGcm9tSWQodCksbixyKX0pLFtlLHVdKSxwPXMudXNlQ2FsbGJhY2soKCh0LG89ITAsYT0hMSk9PntpZihsLmRpc2FibGVNdWx0aXBsZVNlbGVjdGlvbiYmdC5sZW5ndGg+MSYmIWwuY2hlY2tib3hTZWxlY3Rpb24pcmV0dXJuO3IoKGU9Pntjb25zdCByPWE/e306T2JqZWN0LmFzc2lnbih7fSxlLnNlbGVjdGlvbik7cmV0dXJuIHQuZm9yRWFjaCgoZT0+e28/cltlXT1lOnZvaWQgMCE9PXJbZV0mJmRlbGV0ZSByW2VdfSkpLE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7c2VsZWN0aW9uOnJ9KX0pKSxuKCk7Y29uc3QgaT17c2VsZWN0aW9uTW9kZWw6T2JqZWN0LnZhbHVlcyhlLmN1cnJlbnQuZ2V0U3RhdGUoXCJzZWxlY3Rpb25cIikpfTtlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwic2VsZWN0aW9uQ2hhbmdlXCIsaSl9KSxbbC5kaXNhYmxlTXVsdGlwbGVTZWxlY3Rpb24sbC5jaGVja2JveFNlbGVjdGlvbixyLG4sZV0pLG09cy51c2VDYWxsYmFjaygodD0+e2UuY3VycmVudC5zZWxlY3RSb3dzKHQsITAsITApfSksW2VdKSxmPXMudXNlQ2FsbGJhY2soKGU9PntsLmRpc2FibGVTZWxlY3Rpb25PbkNsaWNrfHx1KGUuaWQsZS5yb3cpfSksW2wuZGlzYWJsZVNlbGVjdGlvbk9uQ2xpY2ssdV0pO0VpKGUsXCJyb3dDbGlja1wiLGYpLHhpKGUsXCJyb3dTZWxlY3RlZFwiLGwub25Sb3dTZWxlY3RlZCkseGkoZSxcInNlbGVjdGlvbkNoYW5nZVwiLGwub25TZWxlY3Rpb25Nb2RlbENoYW5nZSk7SW8oZSx7c2VsZWN0Um93OmQsZ2V0U2VsZWN0ZWRSb3dzOmMsc2VsZWN0Um93czpwLHNldFNlbGVjdGlvbk1vZGVsOm19LFwiR3JpZFNlbGVjdGlvbkFwaVwiKSxzLnVzZUVmZmVjdCgoKCk9PntyKChlPT57Y29uc3QgdD1PYmplY3QuYXNzaWduKHt9LGUuc2VsZWN0aW9uKTtsZXQgcj0hMTtyZXR1cm4gT2JqZWN0LmtleXModCkuZm9yRWFjaCgoZT0+e29bZV18fChkZWxldGUgdFtlXSxyPSEwKX0pKSxyP09iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7c2VsZWN0aW9uOnR9KTplfSkpLG4oKX0pLFtvLGUscixuXSkscy51c2VFZmZlY3QoKCgpPT57cG4oT2JqZWN0LnZhbHVlcyhlLmN1cnJlbnQuZ2V0U3RhdGUoKS5zZWxlY3Rpb24pLGwuc2VsZWN0aW9uTW9kZWwpfHxlLmN1cnJlbnQuc2V0U2VsZWN0aW9uTW9kZWwobC5zZWxlY3Rpb25Nb2RlbHx8W10pfSksW2UsbC5zZWxlY3Rpb25Nb2RlbF0pfSx0Yz0oZSx0KT0+e2NvbnN0IHI9TW8oXCJ1c2VHcmlkU29ydGluZ1wiKSxuPXMudXNlUmVmKFtdKSxbbCxvLGFdPVFvKGUpLGk9ZWEoZSxFYSksYz1lYShlLGlhKSx1PWVhKGUsamEpLGQ9cy51c2VDYWxsYmFjaygodD0+KHtzb3J0TW9kZWw6dCxhcGk6ZS5jdXJyZW50LGNvbHVtbnM6ZS5jdXJyZW50LmdldEFsbENvbHVtbnMoKX0pKSxbZV0pLHA9cy51c2VDYWxsYmFjaygoKGUsdCk9Pntjb25zdCByPWwuc29ydGluZy5zb3J0TW9kZWwuZmluZEluZGV4KCh0PT50LmZpZWxkPT09ZSkpO2xldCBuPVsuLi5sLnNvcnRpbmcuc29ydE1vZGVsXTtyZXR1cm4gcj4tMT90P24uc3BsaWNlKHIsMSx0KTpuLnNwbGljZShyLDEpOm49Wy4uLmwuc29ydGluZy5zb3J0TW9kZWwsdF0sbn0pLFtsLnNvcnRpbmcuc29ydE1vZGVsXSksbT1zLnVzZUNhbGxiYWNrKCgoZSx0KT0+e2NvbnN0IHI9bC5zb3J0aW5nLnNvcnRNb2RlbC5maW5kKCh0PT50LmZpZWxkPT09ZS5maWVsZCkpO2lmKHIpe2NvbnN0IGU9dm9pZCAwPT09dD94bihpLnNvcnRpbmdPcmRlcixyLnNvcnQpOnQ7cmV0dXJuIG51bGw9PWU/dm9pZCAwOk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7c29ydDplfSl9cmV0dXJue2ZpZWxkOmUuZmllbGQsc29ydDp2b2lkIDA9PT10P3huKGkuc29ydGluZ09yZGVyKTp0fX0pLFtsLnNvcnRpbmcuc29ydE1vZGVsLGkuc29ydGluZ09yZGVyXSksZj1zLnVzZUNhbGxiYWNrKCgodCxyKT0+KHtpZDp0LGZpZWxkOnIscm93OmUuY3VycmVudC5nZXRSb3dGcm9tSWQodCksdmFsdWU6ZS5jdXJyZW50LmdldENlbGxWYWx1ZSh0LHIpLGdldFZhbHVlOnI9PmUuY3VycmVudC5nZXRDZWxsVmFsdWUodCxyKSxhcGk6ZS5jdXJyZW50fSkpLFtlXSksZz1zLnVzZUNhbGxiYWNrKCgoZSx0KT0+bi5jdXJyZW50LnJlZHVjZSgoKHIsbik9Pntjb25zdHtmaWVsZDpsLGNvbXBhcmF0b3I6b309bixhPWYoZSxsKSxpPWYodCxsKTtyZXR1cm4gcj1yfHxvKGEudmFsdWUsaS52YWx1ZSxhLGkpfSksMCkpLFtmXSksYj1zLnVzZUNhbGxiYWNrKCh0PT50Lm1hcCgodD0+e2NvbnN0IHI9ZS5jdXJyZW50LmdldENvbHVtbkZyb21GaWVsZCh0LmZpZWxkKTtpZighcil0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHNvcnRpbmc6IGNvbHVtbiB3aXRoIGZpZWxkICcke3QuZmllbGR9JyBub3QgZm91bmQuIGApO2NvbnN0IG49TW4odC5zb3J0KT8oZSx0LG4sbCk9Pi0xKnIuc29ydENvbXBhcmF0b3IoZSx0LG4sbCk6ci5zb3J0Q29tcGFyYXRvcjtyZXR1cm57ZmllbGQ6ci5maWVsZCxjb21wYXJhdG9yOm59fSkpKSxbZV0pLGg9cy51c2VDYWxsYmFjaygoKCk9Pntjb25zdCB0PWUuY3VycmVudC5nZXRBbGxSb3dJZHMoKTtpZihpLnNvcnRpbmdNb2RlPT09Um8uc2VydmVyKXJldHVybiByLmRlYnVnKFwiU2tpcHBpbmcgc29ydGluZyByb3dzIGFzIHNvcnRpbmdNb2RlID0gc2VydmVyXCIpLHZvaWQgbygoZT0+T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtzb3J0aW5nOk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlLnNvcnRpbmcpLHtzb3J0ZWRSb3dzOnR9KX0pKSk7Y29uc3QgbD1lLmN1cnJlbnQuZ2V0U3RhdGUoKS5zb3J0aW5nLnNvcnRNb2RlbDtyLmRlYnVnKFwiU29ydGluZyByb3dzIHdpdGggXCIsbCk7Y29uc3Qgcz1bLi4udF07bC5sZW5ndGg+MCYmKG4uY3VycmVudD1iKGwpLHMuc29ydChnKSksbygoZT0+T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtzb3J0aW5nOk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlLnNvcnRpbmcpLHtzb3J0ZWRSb3dzOnN9KX0pKSksYSgpfSksW2UscixvLGEsYixnLGkuc29ydGluZ01vZGVdKSxDPXMudXNlQ2FsbGJhY2soKHQ9PntvKChlPT57Y29uc3Qgcj1PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZS5zb3J0aW5nKSx7c29ydE1vZGVsOnR9KTtyZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtzb3J0aW5nOk9iamVjdC5hc3NpZ24oe30scil9KX0pKSxhKCksMCE9PWMubGVuZ3RoJiYoZS5jdXJyZW50LnB1Ymxpc2hFdmVudChcInNvcnRNb2RlbENoYW5nZVwiLGQodCkpLGUuY3VycmVudC5hcHBseVNvcnRpbmcoKSl9KSxbbyxhLGMubGVuZ3RoLGUsZF0pLHY9cy51c2VDYWxsYmFjaygoKGUsdCxyKT0+e2lmKCFlLnNvcnRhYmxlKXJldHVybjtjb25zdCBuPW0oZSx0KTtsZXQgbDtsPSFyfHxpLmRpc2FibGVNdWx0aXBsZUNvbHVtbnNTb3J0aW5nP24/W25dOltdOnAoZS5maWVsZCxuKSxDKGwpfSksW3AsQyxtLGkuZGlzYWJsZU11bHRpcGxlQ29sdW1uc1NvcnRpbmddKSx3PXMudXNlQ2FsbGJhY2soKCh7Y29sRGVmOmV9LHQpPT57dihlLHZvaWQgMCxmbCh0KSl9KSxbdl0pLE89cy51c2VDYWxsYmFjaygoKHtjb2xEZWY6ZX0sdCk9PnshWG4odC5rZXkpfHx0LmN0cmxLZXl8fHQubWV0YUtleXx8dihlLHZvaWQgMCx0LnNoaWZ0S2V5KX0pLFt2XSkseT1zLnVzZUNhbGxiYWNrKCgoKT0+e28oKGU9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7c29ydGluZzpPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZS5zb3J0aW5nKSx7c29ydGVkUm93czpbXX0pfSkpKX0pLFtvXSksRT1zLnVzZUNhbGxiYWNrKCgoKT0+bC5zb3J0aW5nLnNvcnRNb2RlbCksW2wuc29ydGluZy5zb3J0TW9kZWxdKSxTPXMudXNlQ2FsbGJhY2soKCgpPT5PYmplY3QudmFsdWVzKEhhKGUuY3VycmVudC5zdGF0ZSkpKSxbZV0pLHg9cy51c2VDYWxsYmFjaygoKCk9PkdhKGUuY3VycmVudC5zdGF0ZSkpLFtlXSksTT1zLnVzZUNhbGxiYWNrKCgoKT0+e28oKGU9Pntjb25zdCB0PWUuc29ydGluZy5zb3J0TW9kZWwscj1hYShlKTtsZXQgbj10O3JldHVybiB0Lmxlbmd0aD4wJiYobj10LnJlZHVjZSgoKGUsdCk9PihyLmZpbmQoKGU9PmUuZmllbGQ9PT10LmZpZWxkKSkmJmUucHVzaCh0KSxlKSksW10pKSxPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse3NvcnRpbmc6T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUuc29ydGluZykse3NvcnRNb2RlbDpufSl9KX0pKX0pLFtvXSk7RWkoZSxcImNvbHVtbkhlYWRlckNsaWNrXCIsdyksRWkoZSxcImNvbHVtbkhlYWRlcktleWRvd25cIixPKSxFaShlLFwicm93c1NldFwiLGUuY3VycmVudC5hcHBseVNvcnRpbmcpLEVpKGUsXCJyb3dzQ2xlYXJlZFwiLHkpLEVpKGUsXCJyb3dzVXBkYXRlZFwiLGUuY3VycmVudC5hcHBseVNvcnRpbmcpLEVpKGUsXCJjb2x1bW5zVXBkYXRlZFwiLE0pLHhpKGUsXCJzb3J0TW9kZWxDaGFuZ2VcIixpLm9uU29ydE1vZGVsQ2hhbmdlKTtJbyhlLHtnZXRTb3J0TW9kZWw6RSxnZXRTb3J0ZWRSb3dzOlMsZ2V0U29ydGVkUm93SWRzOngsc2V0U29ydE1vZGVsOkMsc29ydENvbHVtbjp2LGFwcGx5U29ydGluZzpofSxcIkdyaWRTb3J0QXBpXCIpLHMudXNlRWZmZWN0KCgoKT0+e2UuY3VycmVudC5hcHBseVNvcnRpbmcoKX0pLFtlLHRdKSxzLnVzZUVmZmVjdCgoKCk9Pnt1PjAmJihyLmRlYnVnKFwicm93IGNoYW5nZWQsIGFwcGx5aW5nIHNvcnRNb2RlbFwiKSxlLmN1cnJlbnQuYXBwbHlTb3J0aW5nKCkpfSksW3UsZSxyXSkscy51c2VFZmZlY3QoKCgpPT57Y29uc3QgdD1pLnNvcnRNb2RlbHx8W107cG4odCxlLmN1cnJlbnQuc3RhdGUuc29ydGluZy5zb3J0TW9kZWwpfHxlLmN1cnJlbnQuc2V0U29ydE1vZGVsKHQpfSksW2kuc29ydE1vZGVsLGVdKX0scmM9KGUsdCk9Pntjb25zdCByPU1vKFwidXNlR3JpZFZpcnR1YWxDb2x1bW5zXCIpLG49cy51c2VSZWYobnVsbCksbD1zLnVzZVJlZihudWxsKSxvPXMudXNlUmVmKDApLGE9ZWEodCxzYSksaT1lYSh0LGRhKSxjPWVhKHQsaWEpLHU9cy51c2VDYWxsYmFjaygoZT0+e2NvbnN0IHQ9YS5wb3NpdGlvbnM7aWYoIWkpcmV0dXJuLTE7bGV0IHI9Wy4uLnRdLnJldmVyc2UoKS5maW5kSW5kZXgoKHQ9PmU+PXQpKTtyZXR1cm4gcj10Lmxlbmd0aC0xLXIscn0pLFthLnBvc2l0aW9ucyxpXSksZD1zLnVzZUNhbGxiYWNrKChlPT5jLmxlbmd0aD9jW3UoZSldOm51bGwpLFt1LGNdKSxwPXMudXNlQ2FsbGJhY2soKGU9PntpZighbC5jdXJyZW50KXJldHVybiExO2NvbnN0IHQ9bC5jdXJyZW50LndpbmRvd1NpemVzLndpZHRoLHI9ZChvLmN1cnJlbnQpLG49ZChvLmN1cnJlbnQrdCksYT1jLmZpbmRJbmRleCgoZT0+ZS5maWVsZD09PShudWxsPT1yP3ZvaWQgMDpyLmZpZWxkKSkpKzEsaT1jLmZpbmRJbmRleCgoZT0+ZS5maWVsZD09PShudWxsPT1uP3ZvaWQgMDpuLmZpZWxkKSkpLTE7cmV0dXJuIGU+PWEmJmU8PWl9KSxbZCxjXSksbT1zLnVzZUNhbGxiYWNrKCgoaSxzKT0+e3ZhciBwLG0sZixnO2lmKCFpKXJldHVybiExO2wuY3VycmVudD1pO2NvbnN0IGI9aS53aW5kb3dTaXplcy53aWR0aDtvLmN1cnJlbnQ9cyxyLmRlYnVnKGBHcmlkQ29sdW1ucyBmcm9tICR7bnVsbD09PShwPWQocykpfHx2b2lkIDA9PT1wP3ZvaWQgMDpwLmZpZWxkfSB0byAke251bGw9PT0obT1kKHMrYikpfHx2b2lkIDA9PT1tP3ZvaWQgMDptLmZpZWxkfWApO2NvbnN0IGg9dShzKSxDPXUocytiKSx2PShudWxsPT09KGY9bnVsbD09bj92b2lkIDA6bi5jdXJyZW50KXx8dm9pZCAwPT09Zj92b2lkIDA6Zi5maXJzdENvbElkeCl8fDAsdz0obnVsbD09PShnPW51bGw9PW4/dm9pZCAwOm4uY3VycmVudCl8fHZvaWQgMD09PWc/dm9pZCAwOmcubGFzdENvbElkeCl8fDAsTz1lLmNvbHVtbkJ1ZmZlcix5PU8+MT9PLTE6TyxFPU1hdGguYWJzKGgteS12KSxTPU1hdGguYWJzKEMreS13KTtyLmRlYnVnKGBDb2x1bW4gYnVmZmVyOiAke099LCB0b2xlcmFuY2U6ICR7eX1gKSxyLmRlYnVnKGBQcmV2aW91cyB2YWx1ZXMgID0+IGZpcnN0OiAke3Z9LCBsYXN0OiAke3d9YCksci5kZWJ1ZyhgQ3VycmVudCBkaXNwbGF5ZWQgdmFsdWVzICA9PiBmaXJzdDogJHtofSwgbGFzdDogJHtDfWApLHIuZGVidWcoYERpZmZlcmVuY2Ugd2l0aCBmaXJzdDogJHtFfSBhbmQgbGFzdDogJHtTfSBgKTtjb25zdCB4PWMubGVuZ3RoPjA/Yy5sZW5ndGgtMTowLE09aC1PPj0wP2gtTzowLEk9e2xlZnRFbXB0eVdpZHRoOmEucG9zaXRpb25zW01dLHJpZ2h0RW1wdHlXaWR0aDowLGZpcnN0Q29sSWR4Ok0sbGFzdENvbElkeDpDK08+PXg/eDpDK099O3JldHVybiB0LmN1cnJlbnQuc3RhdGUuc2Nyb2xsQmFyLmhhc1Njcm9sbFg/SS5yaWdodEVtcHR5V2lkdGg9YS50b3RhbFdpZHRoLWEucG9zaXRpb25zW0kubGFzdENvbElkeF0tY1tJLmxhc3RDb2xJZHhdLndpZHRoOmUuZGlzYWJsZUV4dGVuZFJvd0Z1bGxXaWR0aHx8KEkucmlnaHRFbXB0eVdpZHRoPXQuY3VycmVudC5zdGF0ZS52aWV3cG9ydFNpemVzLndpZHRoLWEudG90YWxXaWR0aCkscG4oSSxuLmN1cnJlbnQpPyhyLmRlYnVnKFwiTm8gcmVuZGVyaW5nIG5lZWRlZCBvbiBjb2x1bW5zXCIpLCExKToobi5jdXJyZW50PUksci5kZWJ1ZyhcIk5ldyBjb2x1bW5zIHN0YXRlIHRvIHJlbmRlclwiLEkpLCEwKX0pLFtyLGQsdSxlLmNvbHVtbkJ1ZmZlcixlLmRpc2FibGVFeHRlbmRSb3dGdWxsV2lkdGgsYyxhLnBvc2l0aW9ucyxhLnRvdGFsV2lkdGgsdF0pO0lvKHQse2lzQ29sdW1uVmlzaWJsZUluV2luZG93OnB9LFwiQ29sdW1uVmlydHVhbGl6YXRpb25BcGlcIik7Y29uc3QgZj1zLnVzZUNhbGxiYWNrKCgoKT0+e3IuZGVidWcoXCJDbGVhcmluZyBwcmV2aW91cyByZW5kZXJlZENvbFJlZlwiKSxuLmN1cnJlbnQ9bnVsbH0pLFtyLG5dKTtyZXR1cm4gRWkodCxcImNvbHVtbnNVcGRhdGVkXCIsZiksRWkodCxcInJlc2l6ZVwiLGYpLFtuLG1dfSxuYz0oZSx0LHIsbixsKT0+e2NvbnN0IG89TW8oXCJ1c2VOYXRpdmVFdmVudExpc3RlbmVyXCIpLFthLGldPXMudXNlU3RhdGUoITEpLGM9cy51c2VSZWYobiksdT1zLnVzZUNhbGxiYWNrKChlPT5jLmN1cnJlbnQmJmMuY3VycmVudChlKSksW10pO3MudXNlRWZmZWN0KCgoKT0+e2MuY3VycmVudD1ufSksW25dKSxzLnVzZUVmZmVjdCgoKCk9PntsZXQgbjtpZihuPUNuKHQpP3QoKTp0JiZ0LmN1cnJlbnQ/dC5jdXJyZW50Om51bGwsbiYmdSYmciYmIWEpe28uZGVidWcoYEJpbmRpbmcgbmF0aXZlICR7cn0gZXZlbnRgKSxuLmFkZEV2ZW50TGlzdGVuZXIocix1LGwpO2NvbnN0IHQ9bjtpKCEwKTtjb25zdCBhPSgpPT57by5kZWJ1ZyhgQ2xlYXJpbmcgbmF0aXZlICR7cn0gZXZlbnRgKSx0LnJlbW92ZUV2ZW50TGlzdGVuZXIocix1LGwpfTtlLmN1cnJlbnQuc3Vic2NyaWJlRXZlbnQoXCJ1bm1vdW50XCIsYSl9fSksW3QsdSxyLGEsbyxsLGVdKX07ZnVuY3Rpb24gbGMoZSx0KXtjb25zdCByPU1vKFwidXNlR3JpZFNjcm9sbEZuXCIpLG49cy51c2VSZWYoKSxsPXMudXNlTWVtbygoKCk9PmEoKCgpPT57bnVsbCE9ZS5jdXJyZW50JiYoZS5jdXJyZW50LnN0eWxlLnBvaW50ZXJFdmVudHM9XCJ1bnNldFwiKX0pLDMwMCkpLFtlXSksbz1zLnVzZUNhbGxiYWNrKChvPT57dmFyIGE7by5sZWZ0PT09KG51bGw9PT0oYT1uLmN1cnJlbnQpfHx2b2lkIDA9PT1hP3ZvaWQgMDphLmxlZnQpJiZvLnRvcD09PW4uY3VycmVudC50b3B8fGUmJmUuY3VycmVudCYmKHIuZGVidWcoYE1vdmluZyAke2UuY3VycmVudC5jbGFzc05hbWV9IHRvOiAke28ubGVmdH0tJHtvLnRvcH1gKSxcIm5vbmVcIiE9PWUuY3VycmVudC5zdHlsZS5wb2ludGVyRXZlbnRzJiYoZS5jdXJyZW50LnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCIpLGUuY3VycmVudC5zdHlsZS50cmFuc2Zvcm09YHRyYW5zbGF0ZTNkKC0ke28ubGVmdH1weCwgLSR7by50b3B9cHgsIDApYCx0LmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtPWB0cmFuc2xhdGUzZCgtJHtvLmxlZnR9cHgsIDAsIDApYCxsKCksbi5jdXJyZW50PW8pfSksW2Uscix0LGxdKTtyZXR1cm4gcy51c2VFZmZlY3QoKCgpPT4oKT0+e2wuY2xlYXIoKX0pLFtlLGxdKSxbb119Y29uc3Qgb2M9KGUsdCxyLG4pPT57dmFyIGw7Y29uc3Qgbz1NbyhcInVzZUdyaWRWaXJ0dWFsUm93c1wiKSxbYSxpLGNdPVFvKG4pLHU9ZWEobixFYSksZD1lYShuLGJvKSxwPWVhKG4sZ3MpLG09ZWEobixqYSksZj1lYShuLGlhKSxnPWVhKG4sc2EpLFtiXT1sYyhyLGUpLFtoLENdPXJjKHUsbiksdj1zLnVzZUNhbGxiYWNrKChlPT57bGV0IHQ9ITE7cmV0dXJuIGkoKHI9Pntjb25zdCBuPU9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyLnJlbmRlcmluZyksZSk7cmV0dXJuIHBuKHIucmVuZGVyaW5nLG4pP3I6KHQ9ITAsT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHIpLHtyZW5kZXJpbmc6bn0pKX0pKSx0fSksW2ldKSx3PXMudXNlQ2FsbGJhY2soKGU9PntpZihudWxsPT1uLmN1cnJlbnQuc3RhdGUuY29udGFpbmVyU2l6ZXMpcmV0dXJuIG51bGw7bGV0IHQ9MDt1LnBhZ2luYXRpb24mJm51bGwhPXAucGFnZVNpemUmJlwiY2xpZW50XCI9PT1wLnBhZ2luYXRpb25Nb2RlJiYodD1wLnBhZ2VTaXplKnAucGFnZSk7Y29uc3Qgcj1lKm4uY3VycmVudC5zdGF0ZS5jb250YWluZXJTaXplcy52aWV3cG9ydFBhZ2VTaXplK3Q7bGV0IGw9cituLmN1cnJlbnQuc3RhdGUuY29udGFpbmVyU2l6ZXMucmVuZGVyaW5nWm9uZVBhZ2VTaXplO2NvbnN0IG89bi5jdXJyZW50LnN0YXRlLmNvbnRhaW5lclNpemVzLnZpcnR1YWxSb3dzQ291bnQrdDtsPm8mJihsPW8pO3JldHVybntwYWdlOmUsZmlyc3RSb3dJZHg6cixsYXN0Um93SWR4Omx9fSksW24sdS5wYWdpbmF0aW9uLHAucGFnZVNpemUscC5wYWdpbmF0aW9uTW9kZSxwLnBhZ2VdKSxPPXMudXNlQ2FsbGJhY2soKCgpPT57aWYobnVsbD09bi5jdXJyZW50LnN0YXRlLmNvbnRhaW5lclNpemVzKXJldHVybiBudWxsO3JldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxoLmN1cnJlbnQpLHcobi5jdXJyZW50LnN0YXRlLnJlbmRlcmluZy52aXJ0dWFsUGFnZSkpLHtwYWdpbmF0aW9uQ3VycmVudFBhZ2U6cC5wYWdlLHBhZ2VTaXplOnAucGFnZVNpemV9KX0pLFtoLHcsbixwLnBhZ2UscC5wYWdlU2l6ZV0pLHk9cy51c2VDYWxsYmFjaygoKCk9Pntjb25zdCBlPU8oKTt2KHtyZW5kZXJDb250ZXh0OmUscmVuZGVyZWRTaXplczpuLmN1cnJlbnQuc3RhdGUuY29udGFpbmVyU2l6ZXN9KSYmKG8uZGVidWcoXCJyZVJlbmRlcjogdHJpZ2dlciByZW5kZXJpbmdcIiksYygpKX0pLFtuLE8sbyxjLHZdKSxFPXMudXNlQ2FsbGJhY2soKChlPSExKT0+e2NvbnN0IHI9bi5jdXJyZW50LmdldFN0YXRlKCksbD1yLmNvbnRhaW5lclNpemVzO2lmKCF0fHwhdC5jdXJyZW50fHwhbClyZXR1cm47Y29uc3QgYT1yLnNjcm9sbEJhcix7c2Nyb2xsTGVmdDppLHNjcm9sbFRvcDpzfT10LmN1cnJlbnQ7by5kZWJ1ZyhgSGFuZGxpbmcgc2Nyb2xsIExlZnQ6ICR7aX0gVG9wOiAke3N9YCk7bGV0IGM9QyhsLGkpO2NvbnN0IHU9aSxkPXIuY29udGFpbmVyU2l6ZXMucmVuZGVyaW5nWm9uZVNjcm9sbEhlaWdodCxtPXIucmVuZGVyaW5nLnZpcnR1YWxQYWdlLGY9ZD4wP01hdGguZmxvb3Iocy9kKTowLGc9cyVkLGg9e2xlZnQ6YS5oYXNTY3JvbGxYP3U6MCx0b3A6bC5pc1ZpcnR1YWxpemVkP2c6c307bC5pc1ZpcnR1YWxpemVkJiZtIT09Zj8odih7dmlydHVhbFBhZ2U6Zn0pLG8uZGVidWcoYENoYW5naW5nIHBhZ2UgZnJvbSAke219IHRvICR7Zn1gKSxjPSEwKTooIWwuaXNWaXJ0dWFsaXplZCYmbT4wJiYoby5kZWJ1ZyhcIlZpcnR1YWxpemF0aW9uIGRpc2FibGVkLCBzZXR0aW5nIHZpcnR1YWxQYWdlIHRvIDBcIiksdih7dmlydHVhbFBhZ2U6MH0pKSxiKGgpKSx2KHtyZW5kZXJpbmdab25lU2Nyb2xsOmgscmVhbFNjcm9sbDp7bGVmdDp0LmN1cnJlbnQuc2Nyb2xsTGVmdCx0b3A6dC5jdXJyZW50LnNjcm9sbFRvcH19KSxuLmN1cnJlbnQucHVibGlzaEV2ZW50KFwic2Nyb2xsaW5nOnJvd3NcIixoKTtjb25zdCB3PXIucmVuZGVyaW5nLnJlbmRlckNvbnRleHQmJnIucmVuZGVyaW5nLnJlbmRlckNvbnRleHQucGFnaW5hdGlvbkN1cnJlbnRQYWdlIT09cC5wYWdlOyhlfHxjfHx3KSYmeSgpfSksW24sbyxwLnBhZ2UseSxiLHYsQyx0XSksUz1zLnVzZUNhbGxiYWNrKChlPT57aWYoMD09PW18fDA9PT1mLmxlbmd0aClyZXR1cm4hMTtvLmRlYnVnKGBTY3JvbGxpbmcgdG8gY2VsbCBhdCByb3cgJHtlLnJvd0luZGV4fSwgY29sOiAke2UuY29sSW5kZXh9IGApO2NvbnN0IHI9e30sbD1uLmN1cnJlbnQuaXNDb2x1bW5WaXNpYmxlSW5XaW5kb3coZS5jb2xJbmRleCk7aWYoby5kZWJ1ZyhgQ29sdW1uICR7ZS5jb2xJbmRleH0gaXMgJHtsP1wiYWxyZWFkeVwiOlwibm90XCJ9IHZpc2libGUuYCksIWwpe2lmKGUuY29sSW5kZXgrMT09PWcucG9zaXRpb25zLmxlbmd0aCl7Y29uc3QgdD1mW2UuY29sSW5kZXhdLndpZHRoO3IubGVmdD1nLnBvc2l0aW9uc1tlLmNvbEluZGV4XSt0LWEuY29udGFpbmVyU2l6ZXMud2luZG93U2l6ZXMud2lkdGh9ZWxzZSByLmxlZnQ9Zy5wb3NpdGlvbnNbZS5jb2xJbmRleCsxXS1hLmNvbnRhaW5lclNpemVzLndpbmRvd1NpemVzLndpZHRoK2Euc2Nyb2xsQmFyLnNjcm9sbEJhclNpemUueSxvLmRlYnVnKFwiU2Nyb2xsaW5nIHRvIHRoZSByaWdodCwgc2Nyb2xsTGVmdDogXCIrci5sZWZ0KTthLnJlbmRlcmluZy5yZW5kZXJpbmdab25lU2Nyb2xsLmxlZnQ+ci5sZWZ0JiYoci5sZWZ0PWcucG9zaXRpb25zW2UuY29sSW5kZXhdLG8uZGVidWcoXCJTY3JvbGxpbmcgdG8gdGhlIGxlZnQsIHNjcm9sbExlZnQ6IFwiK3IubGVmdCkpfWxldCBpPSExLHM9ITE7aWYoZS5yb3dJbmRleHx8MD09PWUucm93SW5kZXgpe2NvbnN0IG49KHUucGFnaW5hdGlvbj9lLnJvd0luZGV4LXAucGFnZSpwLnBhZ2VTaXplOmUucm93SW5kZXgpL2EuY29udGFpbmVyU2l6ZXMudmlld3BvcnRQYWdlU2l6ZSphLnZpZXdwb3J0U2l6ZXMuaGVpZ2h0LGw9YS52aWV3cG9ydFNpemVzLmhlaWdodDtpPXQuY3VycmVudC5zY3JvbGxUb3A+bixzPXQuY3VycmVudC5zY3JvbGxUb3ArbDxuLGk/KHIudG9wPW4sby5kZWJ1ZyhcIlJvdyBpcyBhYm92ZSwgc2V0dGluZyB0b3AgdG8gXCIrci50b3ApKTpzJiYoci50b3A9bi1sK2Qsby5kZWJ1ZyhcIlJvdyBpcyBiZWxvdywgc2V0dGluZyB0b3AgdG8gXCIrci50b3ApKX1jb25zdCBjPSFsfHxpfHxzO3JldHVybiBjJiZuLmN1cnJlbnQuc2Nyb2xsKHIpLGN9KSxbbSxmLG8sbix1LnBhZ2luYXRpb24scC5wYWdlLHAucGFnZVNpemUsYSx0LGcucG9zaXRpb25zLGRdKSx4PXMudXNlQ2FsbGJhY2soKCgpPT57Yih7bGVmdDowLHRvcDowfSksdih7dmlydHVhbFBhZ2U6MH0pLHQmJnQuY3VycmVudCYmKHQuY3VycmVudC5zY3JvbGxUb3A9MCx0LmN1cnJlbnQuc2Nyb2xsTGVmdD0wKSx2KHtyZW5kZXJpbmdab25lU2Nyb2xsOntsZWZ0OjAsdG9wOjB9fSl9KSxbYix2LHRdKSxNPXMudXNlUmVmKG51bGwpLEk9cy51c2VDYWxsYmFjaygoKCk9Pnt0LmN1cnJlbnQuc2Nyb2xsTGVmdDwwfHx0LmN1cnJlbnQuc2Nyb2xsVG9wPDB8fChNLmN1cnJlbnR8fGkoKGU9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7aXNTY3JvbGxpbmc6ITB9KSkpLGNsZWFyVGltZW91dChNLmN1cnJlbnQpLE0uY3VycmVudD1zZXRUaW1lb3V0KCgoKT0+e00uY3VycmVudD1udWxsLGkoKGU9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7aXNTY3JvbGxpbmc6ITF9KSkpLGMoKX0pLDMwMCksbi5jdXJyZW50LnVwZGF0ZVZpZXdwb3J0JiZuLmN1cnJlbnQudXBkYXRlVmlld3BvcnQoKSl9KSxbdCxuLGksY10pLGs9cy51c2VDYWxsYmFjaygocj0+e3QuY3VycmVudCYmbnVsbCE9ci5sZWZ0JiZlLmN1cnJlbnQmJihlLmN1cnJlbnQuc2Nyb2xsTGVmdD1yLmxlZnQsdC5jdXJyZW50LnNjcm9sbExlZnQ9ci5sZWZ0LG8uZGVidWcoXCJTY3JvbGxpbmcgbGVmdDogXCIrci5sZWZ0KSksdC5jdXJyZW50JiZudWxsIT1yLnRvcCYmKHQuY3VycmVudC5zY3JvbGxUb3A9ci50b3Asby5kZWJ1ZyhcIlNjcm9sbGluZyB0b3A6IFwiK3IudG9wKSksby5kZWJ1ZyhcIlNjcm9sbGluZywgdXBkYXRpbmcgY29udGFpbmVyLCBhbmQgdmlld3BvcnRcIil9KSxbdCxlLG9dKSxEPXMudXNlQ2FsbGJhY2soKCgpPT55aShuLmN1cnJlbnQuZ2V0U3RhdGUoKSkpLFtuXSksUD1zLnVzZUNhbGxiYWNrKCgoKT0+YS5jb250YWluZXJTaXplcyksW2EuY29udGFpbmVyU2l6ZXNdKSxSPXMudXNlQ2FsbGJhY2soKCgpPT5hLnJlbmRlcmluZy5yZW5kZXJDb250ZXh0fHx2b2lkIDApLFthLnJlbmRlcmluZy5yZW5kZXJDb250ZXh0XSk7b28oKCgpPT57ciYmci5jdXJyZW50JiYoby5kZWJ1ZyhcImFwcGx5aW5nIHNjcm9sbFRvcCBcIixhLnJlbmRlcmluZy5yZW5kZXJpbmdab25lU2Nyb2xsLnRvcCksYihhLnJlbmRlcmluZy5yZW5kZXJpbmdab25lU2Nyb2xsKSl9KSk7SW8obix7c2Nyb2xsOmssc2Nyb2xsVG9JbmRleGVzOlMsZ2V0Q29udGFpbmVyUHJvcHNTdGF0ZTpQLGdldFJlbmRlckNvbnRleHRTdGF0ZTpSLGdldFNjcm9sbFBvc2l0aW9uOkQsdXBkYXRlVmlld3BvcnQ6RX0sXCJHcmlkVmlydHVhbGl6YXRpb25BcGlcIikscy51c2VFZmZlY3QoKCgpPT57dmFyIGU7KG51bGw9PT0oZT1hLnJlbmRlcmluZy5yZW5kZXJDb250ZXh0KXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5wYWdpbmF0aW9uQ3VycmVudFBhZ2UpIT09YS5wYWdpbmF0aW9uLnBhZ2UmJm4uY3VycmVudC51cGRhdGVWaWV3cG9ydCYmKG8uZGVidWcoYFN0YXRlIHBhZ2luYXRpb24ucGFnZSBjaGFuZ2VkIHRvICR7YS5wYWdpbmF0aW9uLnBhZ2V9LiBgKSxuLmN1cnJlbnQudXBkYXRlVmlld3BvcnQoITApLHgoKSl9KSxbbixhLnBhZ2luYXRpb24ucGFnZSxudWxsPT09KGw9YS5yZW5kZXJpbmcucmVuZGVyQ29udGV4dCl8fHZvaWQgMD09PWw/dm9pZCAwOmwucGFnaW5hdGlvbkN1cnJlbnRQYWdlLG8seF0pLHMudXNlRWZmZWN0KCgoKT0+e2EuY29udGFpbmVyU2l6ZXMhPT1hLnJlbmRlcmluZy5yZW5kZXJlZFNpemVzJiZuLmN1cnJlbnQudXBkYXRlVmlld3BvcnQmJihvLmRlYnVnKFwiZ3JpZFN0YXRlLmNvbnRhaW5lclNpemVzIHVwZGF0ZWQsIHVwZGF0aW5nIHZpZXdwb3J0LiBcIiksbi5jdXJyZW50LnVwZGF0ZVZpZXdwb3J0KCEwKSl9KSxbbixhLmNvbnRhaW5lclNpemVzLGEucmVuZGVyaW5nLnJlbmRlcmVkU2l6ZXMsb10pLHMudXNlRWZmZWN0KCgoKT0+e24uY3VycmVudC51cGRhdGVWaWV3cG9ydCYmKG8uZGVidWcoYHRvdGFsUm93Q291bnQgaGFzIGNoYW5nZWQgdG8gJHttfSwgdXBkYXRpbmcgdmlld3BvcnQuYCksbi5jdXJyZW50LnVwZGF0ZVZpZXdwb3J0KCEwKSl9KSxbbyxtLGEudmlld3BvcnRTaXplcyxhLnNjcm9sbEJhcixhLmNvbnRhaW5lclNpemVzLG5dKSxzLnVzZUVmZmVjdCgoKCk9PigpPT57Y2xlYXJUaW1lb3V0KE0uY3VycmVudCl9KSxbXSk7Y29uc3QgRj1zLnVzZUNhbGxiYWNrKChlPT4oby5kZWJ1ZyhcIlVzaW5nIGtleWJvYXJkIHRvIG5hdmlnYXRlIGNlbGxzLCBjb252ZXJ0aW5nIHNjcm9sbCBldmVudHMgXCIpLGUudGFyZ2V0LnNjcm9sbExlZnQ9MCxlLnRhcmdldC5zY3JvbGxUb3A9MCxlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSwhMSkpLFtvXSk7bmMobix0LFwic2Nyb2xsXCIsSSx7cGFzc2l2ZTohMH0pLG5jKG4sKCgpPT57dmFyIGU7cmV0dXJuIG51bGw9PT0oZT1yLmN1cnJlbnQpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLnBhcmVudEVsZW1lbnR9KSxcInNjcm9sbFwiLEYpLG5jKG4sKCgpPT57dmFyIHQ7cmV0dXJuIG51bGw9PT0odD1lLmN1cnJlbnQpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LnBhcmVudEVsZW1lbnR9KSxcInNjcm9sbFwiLEYpLEVpKG4sXCJyZXNpemVcIixFKX07Y2xhc3MgYWMgZXh0ZW5kcyBjbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMubWF4TGlzdGVuZXJzPTEwLHRoaXMud2Fybk9uY2U9ITEsdGhpcy5ldmVudHM9e319b24oZSx0KXtBcnJheS5pc0FycmF5KHRoaXMuZXZlbnRzW2VdKXx8KHRoaXMuZXZlbnRzW2VdPVtdKSx0aGlzLmV2ZW50c1tlXS5wdXNoKHQpLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnRoaXMuZXZlbnRzW2VdLmxlbmd0aD50aGlzLm1heExpc3RlbmVycyYmITE9PT10aGlzLndhcm5PbmNlJiYodGhpcy53YXJuT25jZT0hMCxjb25zb2xlLndhcm4oW2BQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICR7dGhpcy5ldmVudHNbZV0ubGVuZ3RofSAke2V9IGxpc3RlbmVycyBhZGRlZC5gLFwiVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuXCJdLmpvaW4oXCJcXG5cIikpKX1yZW1vdmVMaXN0ZW5lcihlLHQpe2lmKEFycmF5LmlzQXJyYXkodGhpcy5ldmVudHNbZV0pKXtjb25zdCByPXRoaXMuZXZlbnRzW2VdLmluZGV4T2YodCk7cj4tMSYmdGhpcy5ldmVudHNbZV0uc3BsaWNlKHIsMSl9fXJlbW92ZUFsbExpc3RlbmVycyhlKXtlP0FycmF5LmlzQXJyYXkodGhpcy5ldmVudHNbZV0pJiYodGhpcy5ldmVudHNbZV09W10pOnRoaXMuZXZlbnRzPXt9fWVtaXQoZSwuLi50KXtpZihBcnJheS5pc0FycmF5KHRoaXMuZXZlbnRzW2VdKSl7Y29uc3Qgcj10aGlzLmV2ZW50c1tlXS5zbGljZSgpLG49ci5sZW5ndGg7Zm9yKGxldCBlPTA7ZTxuO2UrPTEpcltlXS5hcHBseSh0aGlzLHQpfX1vbmNlKGUsdCl7Y29uc3Qgcj10aGlzO3RoaXMub24oZSwoZnVuY3Rpb24gbiguLi5sKXtyLnJlbW92ZUxpc3RlbmVyKGUsbiksdC5hcHBseShyLGwpfSkpfX17b24oZSx0LHIpe0FycmF5LmlzQXJyYXkodGhpcy5ldmVudHNbZV0pfHwodGhpcy5ldmVudHNbZV09W10pLHImJnIuaXNGaXJzdD90aGlzLmV2ZW50c1tlXS5zcGxpY2UoMCwwLHQpOnRoaXMuZXZlbnRzW2VdLnB1c2godCksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdGhpcy5ldmVudHNbZV0ubGVuZ3RoPnRoaXMubWF4TGlzdGVuZXJzJiYhMT09PXRoaXMud2Fybk9uY2UmJih0aGlzLndhcm5PbmNlPSEwLGNvbnNvbGUud2FybihbYFBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJHt0aGlzLmV2ZW50c1tlXS5sZW5ndGh9ICR7ZX0gbGlzdGVuZXJzIGFkZGVkLmAsXCJVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC5cIl0uam9pbihcIlxcblwiKSkpfX1mdW5jdGlvbiBpYyguLi5lKXtjb25zdCB0PWVbMF0scj1zLnVzZVJlZigwPT09ZS5sZW5ndGg/bnVsbDpuZXcgYWMpO3JldHVybiBzLnVzZUltcGVyYXRpdmVIYW5kbGUodCwoKCk9PnIuY3VycmVudCksW3JdKSxyfWxldCBzYz0hMTtmdW5jdGlvbiBjYygpe2lmKCFzYyl7Y29uc3QgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Uuc3R5bGUudG91Y2hBY3Rpb249XCJub25lXCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKSxzYz1cIm5vbmVcIj09PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpLnRvdWNoQWN0aW9uLGUucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlKX1yZXR1cm4gc2N9ZnVuY3Rpb24gdWMoZSx0KXtpZih2b2lkIDAhPT10JiZlLmNoYW5nZWRUb3VjaGVzKXtmb3IobGV0IHI9MDtyPGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoO3IrPTEpe2NvbnN0IG49ZS5jaGFuZ2VkVG91Y2hlc1tyXTtpZihuLmlkZW50aWZpZXI9PT10KXJldHVybnt4Om4uY2xpZW50WCx5Om4uY2xpZW50WX19cmV0dXJuITF9cmV0dXJue3g6ZS5jbGllbnRYLHk6ZS5jbGllbnRZfX1jb25zdCBkYz0oZSx0KT0+e2NvbnN0IHI9TW8oXCJ1c2VHcmlkQ29sdW1uUmVzaXplXCIpLFssbixsXT1Rbyh0KSxvPXMudXNlUmVmKCksYT1zLnVzZVJlZigpLGM9cy51c2VSZWYoKSx1PXMudXNlUmVmKCksZD1zLnVzZVJlZigpLHA9cy51c2VSZWYoKSxtPWVhKHQsRWEpLGY9ZS5jdXJyZW50LGc9ZT0+e3IuZGVidWcoYFVwZGF0aW5nIHdpZHRoIHRvICR7ZX0gZm9yIGNvbCAke28uY3VycmVudC5maWVsZH1gKSxvLmN1cnJlbnQud2lkdGg9ZSxhLmN1cnJlbnQuc3R5bGUud2lkdGg9ZStcInB4XCIsYS5jdXJyZW50LnN0eWxlLm1pbldpZHRoPWUrXCJweFwiLGEuY3VycmVudC5zdHlsZS5tYXhXaWR0aD1lK1wicHhcIixjLmN1cnJlbnQuZm9yRWFjaCgodD0+e2NvbnN0IHI9dDtyLnN0eWxlLndpZHRoPWUrXCJweFwiLHIuc3R5bGUubWluV2lkdGg9ZStcInB4XCIsci5zdHlsZS5tYXhXaWR0aD1lK1wicHhcIn0pKX0sYj1sbygoKCk9Pnt5KCksdC5jdXJyZW50LnVwZGF0ZUNvbHVtbihvLmN1cnJlbnQpLGNsZWFyVGltZW91dChkLmN1cnJlbnQpLGQuY3VycmVudD1zZXRUaW1lb3V0KCgoKT0+e3ZhciBlO3QuY3VycmVudC5wdWJsaXNoRXZlbnQoXCJjb2x1bW5SZXNpemVTdG9wXCIpLHQuY3VycmVudC5wdWJsaXNoRXZlbnQoXCJjb2x1bW5SZXNpemVDb21taXRlZFwiLHtlbGVtZW50OmEuY3VycmVudCxjb2xEZWY6by5jdXJyZW50LGFwaTp0LHdpZHRoOm51bGw9PT0oZT1vLmN1cnJlbnQpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLndpZHRofSl9KSksci5kZWJ1ZyhgVXBkYXRpbmcgY29sICR7by5jdXJyZW50LmZpZWxkfSB3aXRoIG5ldyB3aWR0aDogJHtvLmN1cnJlbnQud2lkdGh9YCl9KSksaD1sbygoZT0+e2lmKDA9PT1lLmJ1dHRvbnMpcmV0dXJuIHZvaWQgYigpO2xldCByPXUuY3VycmVudCtlLmNsaWVudFgtYS5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7cj1NYXRoLm1heCg1MCxyKSxnKHIpLHQuY3VycmVudC5wdWJsaXNoRXZlbnQoXCJjb2x1bW5SZXNpemVcIix7ZWxlbWVudDphLmN1cnJlbnQsY29sRGVmOm8uY3VycmVudCxhcGk6dCx3aWR0aDpyfSl9KSksQz1sbygoKHtjb2xEZWY6ZX0sbik9PntpZigwIT09bi5idXR0b24pcmV0dXJuO2lmKCFuLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiTXVpRGF0YUdyaWQtY29sdW1uU2VwYXJhdG9yUmVzaXphYmxlXCIpKXJldHVybjtuLnByZXZlbnREZWZhdWx0KCksYS5jdXJyZW50PUZuKG4uY3VycmVudFRhcmdldCxcIk11aURhdGFHcmlkLWNvbENlbGxcIiksci5kZWJ1ZyhcIlN0YXJ0IFJlc2l6ZSBvbiBjb2wgXCIrZS5maWVsZCksdC5jdXJyZW50LnB1Ymxpc2hFdmVudChcImNvbHVtblJlc2l6ZVN0YXJ0XCIse2ZpZWxkOmUuZmllbGR9KSxvLmN1cnJlbnQ9ZSxhLmN1cnJlbnQ9Zi5xdWVyeVNlbGVjdG9yKGBbZGF0YS1maWVsZD1cIiR7ZS5maWVsZH1cIl1gKSxjLmN1cnJlbnQ9SG4oYS5jdXJyZW50KTtjb25zdCBsPWkodC5jdXJyZW50LnJvb3RFbGVtZW50UmVmLmN1cnJlbnQpO2wuYm9keS5zdHlsZS5jdXJzb3I9XCJjb2wtcmVzaXplXCIsdS5jdXJyZW50PW8uY3VycmVudC53aWR0aC0obi5jbGllbnRYLWEuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixoKSxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsYil9KSksdj1sbygoZT0+e3VjKGUscC5jdXJyZW50KSYmKHkoKSx0LmN1cnJlbnQudXBkYXRlQ29sdW1uKG8uY3VycmVudCksY2xlYXJUaW1lb3V0KGQuY3VycmVudCksZC5jdXJyZW50PXNldFRpbWVvdXQoKCgpPT57dC5jdXJyZW50LnB1Ymxpc2hFdmVudChcImNvbHVtblJlc2l6ZVN0b3BcIil9KSksci5kZWJ1ZyhgVXBkYXRpbmcgY29sICR7by5jdXJyZW50LmZpZWxkfSB3aXRoIG5ldyB3aWR0aDogJHtvLmN1cnJlbnQud2lkdGh9YCkpfSkpLHc9bG8oKGU9Pntjb25zdCByPXVjKGUscC5jdXJyZW50KTtpZighcilyZXR1cm47aWYoXCJtb3VzZW1vdmVcIj09PWUudHlwZSYmMD09PWUuYnV0dG9ucylyZXR1cm4gdm9pZCB2KGUpO2xldCBuPXUuY3VycmVudCtyLngtYS5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7bj1NYXRoLm1heCg1MCxuKSxnKG4pLHQuY3VycmVudC5wdWJsaXNoRXZlbnQoXCJjb2x1bW5SZXNpemVcIix7ZWxlbWVudDphLmN1cnJlbnQsY29sRGVmOm8uY3VycmVudCxhcGk6dCx3aWR0aDpufSl9KSksTz1sbygoZT0+e2lmKCFGbihlLnRhcmdldCxcIk11aURhdGFHcmlkLWNvbHVtblNlcGFyYXRvclJlc2l6YWJsZVwiKSlyZXR1cm47Y2MoKXx8ZS5wcmV2ZW50RGVmYXVsdCgpO2NvbnN0IG49ZS5jaGFuZ2VkVG91Y2hlc1swXTtudWxsIT1uJiYocC5jdXJyZW50PW4uaWRlbnRpZmllciksYS5jdXJyZW50PUZuKGUudGFyZ2V0LFwiTXVpRGF0YUdyaWQtY29sQ2VsbFwiKTtjb25zdCBsPV9uKGEuY3VycmVudCkscz10LmN1cnJlbnQuZ2V0Q29sdW1uRnJvbUZpZWxkKGwpO3IuZGVidWcoXCJTdGFydCBSZXNpemUgb24gY29sIFwiK3MuZmllbGQpLHQuY3VycmVudC5wdWJsaXNoRXZlbnQoXCJjb2x1bW5SZXNpemVTdGFydFwiLHtmaWVsZDpsfSksby5jdXJyZW50PXMsYS5jdXJyZW50PUduKGYscy5maWVsZCksYy5jdXJyZW50PUhuKGEuY3VycmVudCksdS5jdXJyZW50PW8uY3VycmVudC53aWR0aC0obi5jbGllbnRYLWEuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KTtjb25zdCBkPWkoZS5jdXJyZW50VGFyZ2V0KTtkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix3KSxkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHYpfSkpLHk9cy51c2VDYWxsYmFjaygoKCk9Pntjb25zdCBlPWkodC5jdXJyZW50LnJvb3RFbGVtZW50UmVmLmN1cnJlbnQpO2UuYm9keS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImN1cnNvclwiKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixoKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsYiksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdyksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix2KX0pLFt0LGgsYix3LHZdKSxFPXMudXNlQ2FsbGJhY2soKCh7ZmllbGQ6ZX0pPT57bigodD0+T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQpLHtjb2x1bW5SZXNpemU6T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQuY29sdW1uUmVzaXplKSx7cmVzaXppbmdDb2x1bW5GaWVsZDplfSl9KSkpLGwoKX0pLFtuLGxdKSxTPXMudXNlQ2FsbGJhY2soKCgpPT57bigoZT0+T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtjb2x1bW5SZXNpemU6T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUuY29sdW1uUmVzaXplKSx7cmVzaXppbmdDb2x1bW5GaWVsZDpcIlwifSl9KSkpLGwoKX0pLFtuLGxdKTtzLnVzZUVmZmVjdCgoKCk9PihudWxsPT1mfHxmLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsTyx7cGFzc2l2ZTpjYygpfSksKCk9PntudWxsPT1mfHxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsTyksY2xlYXJUaW1lb3V0KGQuY3VycmVudCkseSgpfSkpLFtmLE8seV0pLEVpKHQsXCJjb2x1bW5TZXBhcmF0b3JNb3VzZURvd25cIixDKSxFaSh0LFwiY29sdW1uUmVzaXplU3RhcnRcIixFKSxFaSh0LFwiY29sdW1uUmVzaXplU3RvcFwiLFMpLHhpKHQsXCJjb2x1bW5SZXNpemVcIixtLm9uQ29sdW1uUmVzaXplKSx4aSh0LFwiY29sdW1uUmVzaXplQ29tbWl0ZWRcIixtLm9uQ29sdW1uUmVzaXplQ29tbWl0dGVkKX0scGM9cy5mb3J3YXJkUmVmKChmdW5jdGlvbihlLHQpe2NvbnN0e21lc3NhZ2U6cn09ZSxuPWdsKGUsW1wibWVzc2FnZVwiXSksbD1zLnVzZUNvbnRleHQoY28pLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcImVycm9yT3ZlcmxheURlZmF1bHRMYWJlbFwiKTtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KHlhLE9iamVjdC5hc3NpZ24oe3JlZjp0fSxuKSxyfHxsKX0pKSxtYz1zLmZvcndhcmRSZWYoKGZ1bmN0aW9uKGUsdCl7Y29uc3Qgcj1zLnVzZUNvbnRleHQoY28pLmN1cnJlbnQuZ2V0TG9jYWxlVGV4dChcIm5vUmVzdWx0c092ZXJsYXlMYWJlbFwiKTtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KHlhLE9iamVjdC5hc3NpZ24oe3JlZjp0fSxlKSxyKX0pKSxmYz17Qm9vbGVhbkNlbGxUcnVlSWNvbjpUbCxCb29sZWFuQ2VsbEZhbHNlSWNvbjpSbCxPcGVuRmlsdGVyQnV0dG9uSWNvbjp3bCxDb2x1bW5GaWx0ZXJlZEljb246T2wsQ29sdW1uU2VsZWN0b3JJY29uOnhsLENvbHVtbk1lbnVJY29uOlBsLENvbHVtblNvcnRlZEFzY2VuZGluZ0ljb246Q2wsQ29sdW1uU29ydGVkRGVzY2VuZGluZ0ljb246dmwsQ29sdW1uUmVzaXplSWNvbjpNbCxEZW5zaXR5Q29tcGFjdEljb246SWwsRGVuc2l0eVN0YW5kYXJkSWNvbjprbCxEZW5zaXR5Q29tZm9ydGFibGVJY29uOkRsLEV4cG9ydEljb246emx9LGdjPU9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxmYykse0NvbHVtbk1lbnU6QmksQ29sdW1uc1BhbmVsOmVzLEVycm9yT3ZlcmxheTpwYyxGaWx0ZXJQYW5lbDphcyxGb290ZXI6Q3MsSGVhZGVyOnZzLFByZWZlcmVuY2VzUGFuZWw6bnMsTG9hZGluZ092ZXJsYXk6d3MsTm9SZXN1bHRzT3ZlcmxheTptYyxOb1Jvd3NPdmVybGF5Ok9zLFBhZ2luYXRpb246RXMsUGFuZWw6cnN9KSxiYz0oZSx0LHIpPT57Y29uc3Qgbj1zLnVzZU1lbW8oKCgpPT57Y29uc3QgdD17Qm9vbGVhbkNlbGxUcnVlSWNvbjplJiZlLkJvb2xlYW5DZWxsVHJ1ZUljb258fGdjLkJvb2xlYW5DZWxsVHJ1ZUljb24sQm9vbGVhbkNlbGxGYWxzZUljb246ZSYmZS5Cb29sZWFuQ2VsbEZhbHNlSWNvbnx8Z2MuQm9vbGVhbkNlbGxGYWxzZUljb24sQ29sdW1uRmlsdGVyZWRJY29uOmUmJmUuQ29sdW1uRmlsdGVyZWRJY29ufHxnYy5Db2x1bW5GaWx0ZXJlZEljb24sQ29sdW1uTWVudUljb246ZSYmZS5Db2x1bW5NZW51SWNvbnx8Z2MuQ29sdW1uTWVudUljb24sQ29sdW1uUmVzaXplSWNvbjplJiZlLkNvbHVtblJlc2l6ZUljb258fGdjLkNvbHVtblJlc2l6ZUljb24sQ29sdW1uU2VsZWN0b3JJY29uOmUmJmUuQ29sdW1uU2VsZWN0b3JJY29ufHxnYy5Db2x1bW5TZWxlY3Rvckljb24sQ29sdW1uU29ydGVkQXNjZW5kaW5nSWNvbjplJiZlLkNvbHVtblNvcnRlZEFzY2VuZGluZ0ljb258fGdjLkNvbHVtblNvcnRlZEFzY2VuZGluZ0ljb24sQ29sdW1uU29ydGVkRGVzY2VuZGluZ0ljb246ZSYmZS5Db2x1bW5Tb3J0ZWREZXNjZW5kaW5nSWNvbnx8Z2MuQ29sdW1uU29ydGVkRGVzY2VuZGluZ0ljb24sRGVuc2l0eUNvbWZvcnRhYmxlSWNvbjplJiZlLkRlbnNpdHlDb21mb3J0YWJsZUljb258fGdjLkRlbnNpdHlDb21mb3J0YWJsZUljb24sRGVuc2l0eUNvbXBhY3RJY29uOmUmJmUuRGVuc2l0eUNvbXBhY3RJY29ufHxnYy5EZW5zaXR5Q29tcGFjdEljb24sRGVuc2l0eVN0YW5kYXJkSWNvbjplJiZlLkRlbnNpdHlTdGFuZGFyZEljb258fGdjLkRlbnNpdHlTdGFuZGFyZEljb24sRXhwb3J0SWNvbjplJiZlLkV4cG9ydEljb258fGdjLkV4cG9ydEljb24sT3BlbkZpbHRlckJ1dHRvbkljb246ZSYmZS5PcGVuRmlsdGVyQnV0dG9uSWNvbnx8Z2MuT3BlbkZpbHRlckJ1dHRvbkljb24sQ29sdW1uTWVudTplJiZlLkNvbHVtbk1lbnV8fGdjLkNvbHVtbk1lbnUsRXJyb3JPdmVybGF5OmUmJmUuRXJyb3JPdmVybGF5fHxnYy5FcnJvck92ZXJsYXksRm9vdGVyOmUmJmUuRm9vdGVyfHxnYy5Gb290ZXIsSGVhZGVyOmUmJmUuSGVhZGVyfHxnYy5IZWFkZXIsVG9vbGJhcjplJiZlLlRvb2xiYXIsUHJlZmVyZW5jZXNQYW5lbDplJiZlLlByZWZlcmVuY2VzUGFuZWx8fGdjLlByZWZlcmVuY2VzUGFuZWwsTG9hZGluZ092ZXJsYXk6ZSYmZS5Mb2FkaW5nT3ZlcmxheXx8Z2MuTG9hZGluZ092ZXJsYXksTm9SZXN1bHRzT3ZlcmxheTplJiZlLk5vUmVzdWx0c092ZXJsYXl8fGdjLk5vUmVzdWx0c092ZXJsYXksTm9Sb3dzT3ZlcmxheTplJiZlLk5vUm93c092ZXJsYXl8fGdjLk5vUm93c092ZXJsYXksUGFnaW5hdGlvbjplJiZlLlBhZ2luYXRpb258fGdjLlBhZ2luYXRpb24sRmlsdGVyUGFuZWw6ZSYmZS5GaWx0ZXJQYW5lbHx8Z2MuRmlsdGVyUGFuZWwsQ29sdW1uc1BhbmVsOmUmJmUuQ29sdW1uc1BhbmVsfHxnYy5Db2x1bW5zUGFuZWwsUGFuZWw6ZSYmZS5QYW5lbHx8Z2MuUGFuZWx9O3JldHVybiByLmN1cnJlbnQuY29tcG9uZW50cz10LHR9KSxbcixlXSk7cmV0dXJuIHIuY3VycmVudC5jb21wb25lbnRzUHJvcHM9dCxufSxoYz0oKT0+e2NvbnN0IGU9cy51c2VDb250ZXh0KGNvKSx0PWVhKGUsRWEpLHI9ZWEoZSxBYSksbj1lYShlLGlhKSxbbF09UW8oZSk7cmV0dXJuIHMudXNlTWVtbygoKCk9Pih7c3RhdGU6bCxyb3dzOnIsY29sdW1uczpuLG9wdGlvbnM6dCxhcGlSZWY6ZSxyb290RWxlbWVudDplLmN1cnJlbnQucm9vdEVsZW1lbnRSZWZ9KSksW2wscixuLHQsZV0pfTtmdW5jdGlvbiBDYyhlLHQscil7Y29uc3RbbixsXT1zLnVzZVN0YXRlKCExKSxvPU1vKFwidXNlQXBpXCIpLGE9cy51c2VDYWxsYmFjaygoKGUsdCxuKT0+e24mJm4uaXNQcm9wYWdhdGlvblN0b3BwZWQoKXx8ci5jdXJyZW50LmVtaXQoZSx0LG4pfSksW3JdKSxpPXMudXNlQ2FsbGJhY2soKChlLHQsbik9PntvLmRlYnVnKGBCaW5kaW5nICR7ZX0gZXZlbnRgKSxyLmN1cnJlbnQub24oZSx0LG4pO2NvbnN0IGw9ci5jdXJyZW50O3JldHVybigpPT57by5kZWJ1ZyhgQ2xlYXJpbmcgJHtlfSBldmVudGApLGwucmVtb3ZlTGlzdGVuZXIoZSx0KX19KSxbcixvXSksYz1zLnVzZUNhbGxiYWNrKChlPT57YShcImNvbXBvbmVudEVycm9yXCIsZSl9KSxbYV0pO3JldHVybiBzLnVzZUVmZmVjdCgoKCk9PntvLmRlYnVnKFwiSW5pdGlhbGl6aW5nIGdyaWQgYXBpLlwiKSxyLmN1cnJlbnQuaXNJbml0aWFsaXNlZD0hMCxyLmN1cnJlbnQucm9vdEVsZW1lbnRSZWY9ZSxyLmN1cnJlbnQuY29sdW1uSGVhZGVyc0VsZW1lbnRSZWY9dCxsKCEwKTtjb25zdCBuPXIuY3VycmVudDtyZXR1cm4oKT0+e28uZGVidWcoXCJVbm1vdW50aW5nIEdyaWQgY29tcG9uZW50XCIpLG4uZW1pdChcInVubW91bnRcIiksby5kZWJ1ZyhcIkNsZWFyaW5nIGFsbCBldmVudHMgbGlzdGVuZXJzXCIpLG4ucmVtb3ZlQWxsTGlzdGVuZXJzKCl9fSksW2UsbyxyLHRdKSxJbyhyLHtzdWJzY3JpYmVFdmVudDppLHB1Ymxpc2hFdmVudDphLHNob3dFcnJvcjpjfSxcIkdyaWRDb3JlQXBpXCIpLG59Y29uc3QgdmM9KGUsdCk9Pntjb25zdCByPU1vKFwidXNlR3JpZENvbnRhaW5lclByb3BzXCIpLFtuLGwsb109UW8odCksYT1zLnVzZVJlZih7d2lkdGg6MCxoZWlnaHQ6MH0pLGk9ZWEodCxFYSksYz1lYSh0LGJvKSx1PWVhKHQscGEpLGQ9ZWEodCxLYSkscD1lYSh0LGdzKSxtPXMudXNlQ2FsbGJhY2soKCgpPT57aWYoci5kZWJ1ZyhcIkNhbGN1bGF0aW5nIHZpcnR1YWwgcm93IGNvdW50LlwiKSxpLnBhZ2luYXRpb24mJiFpLmF1dG9QYWdlU2l6ZSl7Y29uc3QgZT1kLXAucGFnZSpwLnBhZ2VTaXplO3JldHVybiBlPnAucGFnZVNpemU/cC5wYWdlU2l6ZTplfXJldHVybiBkfSksW3IsaS5hdXRvUGFnZVNpemUsaS5wYWdpbmF0aW9uLHAucGFnZSxwLnBhZ2VTaXplLGRdKSxmPXMudXNlQ2FsbGJhY2soKGU9PntyLmRlYnVnKFwiQ2FsY3VsYXRpbmcgc2Nyb2xsYmFyIHNpemVzLlwiKTtjb25zdCB0PXU+YS5jdXJyZW50LndpZHRoLG49e3k6MCx4OnQ/aS5zY3JvbGxiYXJTaXplOjB9O2lmKDA9PT1lKXJldHVybntoYXNTY3JvbGxYOnQsaGFzU2Nyb2xsWTohMSxzY3JvbGxCYXJTaXplOm59O2NvbnN0IGw9ZSpjLG89IWkuYXV0b1BhZ2VTaXplJiYhaS5hdXRvSGVpZ2h0JiZsK24ueD5hLmN1cnJlbnQuaGVpZ2h0O3JldHVybiBuLnk9bz9pLnNjcm9sbGJhclNpemU6MCxyLmRlYnVnKGBTY3JvbGxiYXIgc2l6ZSBvbiBheGlzIHg6ICR7bi54fSwgeTogJHtuLnl9YCkse2hhc1Njcm9sbFg6dCxoYXNTY3JvbGxZOm8sc2Nyb2xsQmFyU2l6ZTpufX0pLFtyLHUsaS5zY3JvbGxiYXJTaXplLGkuYXV0b1BhZ2VTaXplLGkuYXV0b0hlaWdodCxjXSksZz1zLnVzZUNhbGxiYWNrKCgodCxuKT0+e2lmKCFlLmN1cnJlbnQpcmV0dXJuIG51bGw7ci5kZWJ1ZyhcIkNhbGN1bGF0aW5nIGNvbnRhaW5lciBzaXplcy5cIik7Y29uc3QgbD1lLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7YS5jdXJyZW50PXt3aWR0aDpsLndpZHRoLGhlaWdodDpsLmhlaWdodH0sci5kZWJ1Zyhgd2luZG93IFNpemUgLSBXOiAke2EuY3VycmVudC53aWR0aH0gSDogJHthLmN1cnJlbnQuaGVpZ2h0fSBgKTtyZXR1cm57d2lkdGg6YS5jdXJyZW50LndpZHRoLW4uc2Nyb2xsQmFyU2l6ZS55LGhlaWdodDppLmF1dG9IZWlnaHQ/dCpjOmEuY3VycmVudC5oZWlnaHQtbi5zY3JvbGxCYXJTaXplLnh9fSksW3IsaS5hdXRvSGVpZ2h0LGMsZV0pLGI9cy51c2VDYWxsYmFjaygoKHQsbixsKT0+e2lmKCFlfHwhZS5jdXJyZW50fHwwPT09dXx8TnVtYmVyLmlzTmFOKHUpKXJldHVybiBudWxsO2NvbnN0IG89dCpjLWEuY3VycmVudC5oZWlnaHQ+MipjO2lmKGkuYXV0b1BhZ2VTaXplfHxpLmF1dG9IZWlnaHR8fCFvKXtjb25zdCBlPU1hdGguZmxvb3Iobi5oZWlnaHQvYyksbz1sLmhhc1Njcm9sbFl8fHQ8ZT90OmUsaT1vKmMrbC5zY3JvbGxCYXJTaXplLngscz17aXNWaXJ0dWFsaXplZDohMSx2aXJ0dWFsUm93c0NvdW50Om8scmVuZGVyaW5nWm9uZVBhZ2VTaXplOm8sdmlld3BvcnRQYWdlU2l6ZTpvLHRvdGFsU2l6ZXM6e3dpZHRoOnUsaGVpZ2h0Oml9LGRhdGFDb250YWluZXJTaXplczp7d2lkdGg6dSxoZWlnaHQ6aX0scmVuZGVyaW5nWm9uZVNjcm9sbEhlaWdodDppLW4uaGVpZ2h0LHJlbmRlcmluZ1pvbmU6e3dpZHRoOnUsaGVpZ2h0Oml9LHdpbmRvd1NpemVzOmEuY3VycmVudCxsYXN0UGFnZToxfTtyZXR1cm4gci5kZWJ1ZyhcIkZpeGVkIGNvbnRhaW5lciBwcm9wc1wiLHMpLHN9Y29uc3Qgcz1NYXRoLmZsb29yKG4uaGVpZ2h0L2MpLGQ9TWF0aC5jZWlsKHQvcyktMSxwPTIqcyxtPXAqYyxmPW0tbi5oZWlnaHQ7bGV0IGc9ZCpmK24uaGVpZ2h0O2NvbnN0IGI9dCVzO2I+MCYmKGc9Zy1mK2IqYyk7Y29uc3QgaD17aXNWaXJ0dWFsaXplZDpvLHZpcnR1YWxSb3dzQ291bnQ6dCx2aWV3cG9ydFBhZ2VTaXplOnMsdG90YWxTaXplczp7d2lkdGg6dSxoZWlnaHQ6Z3x8MX0sZGF0YUNvbnRhaW5lclNpemVzOnt3aWR0aDp1LGhlaWdodDpnfHwxfSxyZW5kZXJpbmdab25lUGFnZVNpemU6cCxyZW5kZXJpbmdab25lOnt3aWR0aDp1LGhlaWdodDptfSxyZW5kZXJpbmdab25lU2Nyb2xsSGVpZ2h0OmYsd2luZG93U2l6ZXM6YS5jdXJyZW50LGxhc3RQYWdlOmR9O3JldHVybiByLmRlYnVnKFwidmlydHVhbGl6ZWQgY29udGFpbmVyIHByb3BzXCIsaCksaH0pLFtlLHUsYyxpLmF1dG9QYWdlU2l6ZSxpLmF1dG9IZWlnaHQscl0pLGg9cy51c2VDYWxsYmFjaygoKGUsdCk9PntsZXQgcj0hMTtsKChuPT4ocj1lKG4pLHI/dChuKTpuKSkpLHImJm8oKX0pLFtvLGxdKSxDPXMudXNlQ2FsbGJhY2soKCgpPT57ci5kZWJ1ZyhcIlJlZnJlc2hpbmcgY29udGFpbmVyIHNpemVzXCIpO2NvbnN0IGU9bSgpLHQ9ZihlKSxuPWcoZSx0KTtpZighbilyZXR1cm47aCgoZT0+ZS5zY3JvbGxCYXIhPT10KSwoZT0+T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtzY3JvbGxCYXI6dH0pKSksaCgoZT0+ZS52aWV3cG9ydFNpemVzIT09biksKGU9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7dmlld3BvcnRTaXplczpufSkpKTtjb25zdCBsPWIoZSxuLHQpO2goKGU9PiFwbihlLmNvbnRhaW5lclNpemVzLGwpKSwoZT0+T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtjb250YWluZXJTaXplczpsfSkpKX0pLFtiLGYsZyxtLHIsaF0pO3MudXNlRWZmZWN0KCgoKT0+e0MoKX0pLFtuLmNvbHVtbnMsbi5vcHRpb25zLmhpZGVGb290ZXIsQyxkXSksRWkodCxcInJlc2l6ZVwiLEMpfSx3Yz1ubyh7cm9vdEdyaWRMYWJlbDpcItC80YDQtdC20LBcIixub1Jvd3NMYWJlbDpcItCd0Y/QvNCwINGA0LXQtNC+0LLQtVwiLGVycm9yT3ZlcmxheURlZmF1bHRMYWJlbDpcItCS0YrQt9C90LjQutC90LAg0LPRgNC10YjQutCwLlwiLHRvb2xiYXJEZW5zaXR5Olwi0JPRitGB0YLQvtGC0LBcIix0b29sYmFyRGVuc2l0eUxhYmVsOlwi0JPRitGB0YLQvtGC0LBcIix0b29sYmFyRGVuc2l0eUNvbXBhY3Q6XCLQmtC+0LzQv9Cw0LrRgtC90LBcIix0b29sYmFyRGVuc2l0eVN0YW5kYXJkOlwi0KHRgtCw0L3QtNCw0YDRgtC90LBcIix0b29sYmFyRGVuc2l0eUNvbWZvcnRhYmxlOlwi0JrQvtC80YTQvtGA0YLQvdCwXCIsdG9vbGJhckNvbHVtbnM6XCLQmtC+0LvQvtC90LhcIix0b29sYmFyQ29sdW1uc0xhYmVsOlwi0J/QvtC60LDQttC4INGB0LXQu9C10LrRgtC+0YDQsCDQvdCwINC60L7Qu9C+0L3QuFwiLHRvb2xiYXJGaWx0ZXJzOlwi0KTQuNC70YLRgNC4XCIsdG9vbGJhckZpbHRlcnNMYWJlbDpcItCf0L7QutCw0LbQuCDQpNC40LvRgtGA0LjRgtC1XCIsdG9vbGJhckZpbHRlcnNUb29sdGlwSGlkZTpcItCh0LrRgNC40Lkg0KTQuNC70YLRgNC40YLQtVwiLHRvb2xiYXJGaWx0ZXJzVG9vbHRpcFNob3c6XCLQn9C+0LrQsNC20Lgg0KTQuNC70YLRgNC40YLQtVwiLHRvb2xiYXJGaWx0ZXJzVG9vbHRpcEFjdGl2ZTplPT5lK1wiINCw0LrRgtC40LLQvdC4INGE0LjQu9GC0YDQuFwiLGNvbHVtbnNQYW5lbFRleHRGaWVsZExhYmVsOlwi0J3QsNC80LXRgNC4INC60L7Qu9C+0L3QsFwiLGNvbHVtbnNQYW5lbFRleHRGaWVsZFBsYWNlaG9sZGVyOlwi0JfQsNCz0LvQsNCy0LjQtSDQvdCwINC60L7Qu9C+0L3QsFwiLGNvbHVtbnNQYW5lbERyYWdJY29uTGFiZWw6XCLQn9GA0LXQvdCw0YDQtdC00Lgg0L3QsCDQutC+0LvQvtC90LBcIixjb2x1bW5zUGFuZWxTaG93QWxsQnV0dG9uOlwi0J/QvtC60LDQttC4INCS0YHQuNGH0LrQuFwiLGNvbHVtbnNQYW5lbEhpZGVBbGxCdXR0b246XCLQodC60YDQuNC5INCS0YHQuNGH0LrQuFwiLGZpbHRlclBhbmVsQWRkRmlsdGVyOlwi0JTQvtCx0LDQstC4INCk0LjQu9GC0YrRgFwiLGZpbHRlclBhbmVsRGVsZXRlSWNvbkxhYmVsOlwi0JjQt9GC0YDQuNC5XCIsZmlsdGVyUGFuZWxPcGVyYXRvcnM6XCLQntC/0LXRgNCw0YLQvtGA0LhcIixmaWx0ZXJQYW5lbE9wZXJhdG9yQW5kOlwi0JhcIixmaWx0ZXJQYW5lbE9wZXJhdG9yT3I6XCLQmNC70LhcIixmaWx0ZXJQYW5lbENvbHVtbnM6XCLQmtC+0LvQvtC90LhcIixmaWx0ZXJPcGVyYXRvckNvbnRhaW5zOlwi0YHRitC00YrRgNC20LBcIixmaWx0ZXJPcGVyYXRvckVxdWFsczpcItGA0LDQstC90L5cIixmaWx0ZXJPcGVyYXRvclN0YXJ0c1dpdGg6XCLQt9Cw0L/QvtGH0LLQsCDRgVwiLGZpbHRlck9wZXJhdG9yRW5kc1dpdGg6XCLQt9Cw0LLRitGA0YjQstCwINGBXCIsZmlsdGVyT3BlcmF0b3JJczpcItC1XCIsZmlsdGVyT3BlcmF0b3JOb3Q6XCLQvdC1INC1XCIsZmlsdGVyT3BlcmF0b3JBZnRlcjpcItC1INGB0LvQtdC0XCIsZmlsdGVyT3BlcmF0b3JPbk9yQWZ0ZXI6XCLQtSDQvdCwINC40LvQuCDRgdC70LXQtFwiLGZpbHRlck9wZXJhdG9yQmVmb3JlOlwi0LUg0L/RgNC10LTQuFwiLGZpbHRlck9wZXJhdG9yT25PckJlZm9yZTpcItC1INC90LAg0LjQu9C4INC/0YDQtdC00LhcIixmaWx0ZXJQYW5lbElucHV0TGFiZWw6XCLQodGC0L7QudC90L7RgdGCXCIsZmlsdGVyUGFuZWxJbnB1dFBsYWNlaG9sZGVyOlwi0KHRgtC+0LnQvdC+0YHRgiDQvdCwINGE0LjQu9GC0YrRgNCwXCIsY29sdW1uTWVudUxhYmVsOlwi0JzQtdC90Y5cIixjb2x1bW5NZW51U2hvd0NvbHVtbnM6XCLQn9C+0LrQsNC20Lgg0LrQvtC70L7QvdC40YLQtVwiLGNvbHVtbk1lbnVGaWx0ZXI6XCLQpNC40LvRgtGA0LhcIixjb2x1bW5NZW51SGlkZUNvbHVtbjpcItCh0LrRgNC40LlcIixjb2x1bW5NZW51VW5zb3J0Olwi0J7RgtC80LXQvdC4INGB0L7RgNGC0LjRgNCw0L3QtdGC0L5cIixjb2x1bW5NZW51U29ydEFzYzpcItCh0L7RgNGC0LjRgNCw0Lkg0L/QviDQstGK0LfRhdC+0LTRj9GJINGA0LXQtFwiLGNvbHVtbk1lbnVTb3J0RGVzYzpcItCh0L7RgNGC0LjRgNCw0Lkg0L/QviDQvdC40LfRhdC+0LTRj9GJINGA0LXQtFwiLGNvbHVtbkhlYWRlckZpbHRlcnNUb29sdGlwQWN0aXZlOmU9PmUrXCIg0LDQutGC0LjQstC90Lgg0YTQuNC70YLRgNC4XCIsY29sdW1uSGVhZGVyRmlsdGVyc0xhYmVsOlwi0J/QvtC60LDQttC4INCk0LjQu9GC0YDQuNGC0LVcIixjb2x1bW5IZWFkZXJTb3J0SWNvbkxhYmVsOlwi0KHQvtGA0YLQuNGA0LDQuVwiLGZvb3RlclJvd1NlbGVjdGVkOmU9PjEhPT1lP2UudG9Mb2NhbGVTdHJpbmcoKStcIiDQuNC30LHRgNCw0L3QuCDRgNC10LTQvtCy0LVcIjplLnRvTG9jYWxlU3RyaW5nKCkrXCIg0LjQt9Cx0YDQsNC9INGA0LXQtFwiLGZvb3RlclRvdGFsUm93czpcItCe0LHRidC+IFLQtdC00L7QstC1OlwifSxHKSxPYz1ubyh7cm9vdEdyaWRMYWJlbDpcImdyaWRcIixub1Jvd3NMYWJlbDpcIktlaW5lIEVpbnRyw6RnZVwiLGVycm9yT3ZlcmxheURlZmF1bHRMYWJlbDpcIkVpbiB1bnZvcmhlcmdlc2VoZW5lciBGZWhsZXIgaXN0IHBhc3NpZXJ0LlwiLHRvb2xiYXJEZW5zaXR5OlwiWmVpbGVuaMO2aGVcIix0b29sYmFyRGVuc2l0eUxhYmVsOlwiWmVpbGVuaMO2aGVcIix0b29sYmFyRGVuc2l0eUNvbXBhY3Q6XCJLb21wYWt0XCIsdG9vbGJhckRlbnNpdHlTdGFuZGFyZDpcIlN0YW5kYXJkXCIsdG9vbGJhckRlbnNpdHlDb21mb3J0YWJsZTpcIkJyZWl0XCIsdG9vbGJhckNvbHVtbnM6XCJTcGFsdGVuXCIsdG9vbGJhckNvbHVtbnNMYWJlbDpcIlplaWdlIFNwYWx0ZW5hdXN3YWhsXCIsdG9vbGJhckZpbHRlcnM6XCJGaWx0ZXJcIix0b29sYmFyRmlsdGVyc0xhYmVsOlwiWmVpZ2UgRmlsdGVyXCIsdG9vbGJhckZpbHRlcnNUb29sdGlwSGlkZTpcIlZlcnN0ZWNrZSBGaWx0ZXJcIix0b29sYmFyRmlsdGVyc1Rvb2x0aXBTaG93OlwiWmVpZ2UgRmlsdGVyXCIsdG9vbGJhckZpbHRlcnNUb29sdGlwQWN0aXZlOmU9PjEhPT1lP2UrXCIgYWt0aXZlIEZpbHRlclwiOmUrXCIgYWt0aXZlciBGaWx0ZXJcIixjb2x1bW5zUGFuZWxUZXh0RmllbGRMYWJlbDpcIkZpbmRlIFNwYWx0ZVwiLGNvbHVtbnNQYW5lbFRleHRGaWVsZFBsYWNlaG9sZGVyOlwiU3BhbHRlbsO8YmVyc2NocmlmdFwiLGNvbHVtbnNQYW5lbERyYWdJY29uTGFiZWw6XCJTcGFsdGUgdW1zb3J0aWVyZW5cIixjb2x1bW5zUGFuZWxTaG93QWxsQnV0dG9uOlwiWmVpZ2UgYWxsZVwiLGNvbHVtbnNQYW5lbEhpZGVBbGxCdXR0b246XCJWZXJzdGVja2UgYWxsZVwiLGZpbHRlclBhbmVsQWRkRmlsdGVyOlwiRmlsdGVyIGhpbnp1ZsO8Z2VuXCIsZmlsdGVyUGFuZWxEZWxldGVJY29uTGFiZWw6XCJMw7ZzY2hlblwiLGZpbHRlclBhbmVsT3BlcmF0b3JzOlwiT3BlcmF0b3JlblwiLGZpbHRlclBhbmVsT3BlcmF0b3JBbmQ6XCJVbmRcIixmaWx0ZXJQYW5lbE9wZXJhdG9yT3I6XCJPZGVyXCIsZmlsdGVyUGFuZWxDb2x1bW5zOlwiU3BhbHRlblwiLGZpbHRlclBhbmVsSW5wdXRMYWJlbDpcIldlcnRcIixmaWx0ZXJQYW5lbElucHV0UGxhY2Vob2xkZXI6XCJXZXJ0IGZpbHRlcm5cIixmaWx0ZXJPcGVyYXRvckNvbnRhaW5zOlwiYmVpbmhhbHRldFwiLGZpbHRlck9wZXJhdG9yRXF1YWxzOlwiaXN0IGdsZWljaFwiLGZpbHRlck9wZXJhdG9yU3RhcnRzV2l0aDpcImJlZ2lubnQgbWl0XCIsZmlsdGVyT3BlcmF0b3JFbmRzV2l0aDpcImVuZGV0IG1pdFwiLGZpbHRlck9wZXJhdG9ySXM6XCJpc3RcIixmaWx0ZXJPcGVyYXRvck5vdDpcImlzdCBuaWNodFwiLGZpbHRlck9wZXJhdG9yT25PckFmdGVyOlwiaXN0IGFuIG9kZXIgbmFjaFwiLGZpbHRlck9wZXJhdG9yQmVmb3JlOlwiaXN0IHZvclwiLGZpbHRlck9wZXJhdG9yT25PckJlZm9yZTpcImlzdCBhbiBvZGVyIHZvclwiLGZpbHRlck9wZXJhdG9yQWZ0ZXI6XCJpc3QgbmFjaFwiLGNvbHVtbk1lbnVMYWJlbDpcIk1lbnVcIixjb2x1bW5NZW51U2hvd0NvbHVtbnM6XCJaZWlnZSBhbGxlIFNwYWx0ZW5cIixjb2x1bW5NZW51RmlsdGVyOlwiRmlsdGVyXCIsY29sdW1uTWVudUhpZGVDb2x1bW46XCJWZXJzdGVja2VuXCIsY29sdW1uTWVudVVuc29ydDpcIlNvcnRpZXJ1bmcgZGVha3RpdmllcmVuXCIsY29sdW1uTWVudVNvcnRBc2M6XCJTb3J0aWVyZSBhdWZzdGVpZ2VuZFwiLGNvbHVtbk1lbnVTb3J0RGVzYzpcIlNvcnRpZXJlIGFic3RlaWdlbmRcIixjb2x1bW5IZWFkZXJGaWx0ZXJzVG9vbHRpcEFjdGl2ZTplPT4xIT09ZT9lK1wiIGFrdGl2ZSBGaWx0ZXJcIjplK1wiIGFrdGl2ZXIgRmlsdGVyXCIsY29sdW1uSGVhZGVyRmlsdGVyc0xhYmVsOlwiWmVpZ2UgRmlsdGVyXCIsY29sdW1uSGVhZGVyU29ydEljb25MYWJlbDpcIlNvcnRpZXJlblwiLGZvb3RlclJvd1NlbGVjdGVkOmU9PjEhPT1lP2UudG9Mb2NhbGVTdHJpbmcoKStcIiBFaW50csOkZ2UgYXVzZ2V3w6RobHRcIjplLnRvTG9jYWxlU3RyaW5nKCkrXCIgRWludHJhZyBhdXNnZXfDpGhsdFwiLGZvb3RlclRvdGFsUm93czpcIkdlc2FtdDpcIn0sSCkseWM9bm8oe3Jvb3RHcmlkTGFiZWw6XCLPgM67zq3Os868zrFcIixub1Jvd3NMYWJlbDpcIs6UzrXOvSDPhc+AzqzPgc+Hzr/Phc69IM66zrHPhM6xz4fPic+Bzq7Pg861zrnPglwiLGVycm9yT3ZlcmxheURlZmF1bHRMYWJlbDpcIs6gzrHPgc6/z4XPg865zqzPg8+EzrfOus61IM6xz4DPgc+MzrLOu861z4DPhM6/IM+Dz4bOrM67zrzOsS5cIix0b29sYmFyRGVuc2l0eTpcIs6Oz4jOv8+CIM+DzrXOuc+BzqzPglwiLHRvb2xiYXJEZW5zaXR5TGFiZWw6XCLOjs+Izr/PgiDPg861zrnPgc6sz4JcIix0b29sYmFyRGVuc2l0eUNvbXBhY3Q6XCLOo8+FzrzPgM6xzrPOrs+CXCIsdG9vbGJhckRlbnNpdHlTdGFuZGFyZDpcIs6gz4HOv866zrHOuM6/z4HOuc+DzrzOrc69zr9cIix0b29sYmFyRGVuc2l0eUNvbWZvcnRhYmxlOlwizqDOu86xz4TPjVwiLHRvb2xiYXJDb2x1bW5zOlwizqPPhM6uzrvOtc+CXCIsdG9vbGJhckNvbHVtbnNMYWJlbDpcIs6Vz4DOuc67zq3Ovs+EzrUgz4PPhM6uzrvOtc+CXCIsdG9vbGJhckZpbHRlcnM6XCLOps6vzrvPhM+BzrFcIix0b29sYmFyRmlsdGVyc0xhYmVsOlwizpXOvM+GzqzOvc65z4POtyDPhs6vzrvPhM+Bz4nOvVwiLHRvb2xiYXJGaWx0ZXJzVG9vbHRpcEhpZGU6XCLOkc+Az4zOus+Bz4XPiM63IM+Gzq/Ou8+Ez4HPic69XCIsdG9vbGJhckZpbHRlcnNUb29sdGlwU2hvdzpcIs6VzrzPhs6szr3Ouc+Dzrcgz4bOr867z4TPgc+Jzr1cIix0b29sYmFyRmlsdGVyc1Rvb2x0aXBBY3RpdmU6ZT0+MSE9PWU/ZStcIiDOtc69zrXPgc6zzqwgz4bOr867z4TPgc6xXCI6ZStcIiDOtc69zrXPgc6zz4wgz4bOr867z4TPgc6/XCIsdG9vbGJhckV4cG9ydDpcIs6Vzr7Osc6zz4nOs86uXCIsdG9vbGJhckV4cG9ydExhYmVsOlwizpXOvs6xzrPPic6zzq5cIix0b29sYmFyRXhwb3J0Q1NWOlwizpvOrs+Izrcgz4nPgiBDU1ZcIixjb2x1bW5zUGFuZWxUZXh0RmllbGRMYWJlbDpcIs6Vz43Pgc61z4POtyDPg8+Ezq7Ou863z4JcIixjb2x1bW5zUGFuZWxUZXh0RmllbGRQbGFjZWhvbGRlcjpcIs6Vz4DOuc66zrXPhs6xzrvOr860zrEgz4PPhM6uzrvOt8+CXCIsY29sdW1uc1BhbmVsRHJhZ0ljb25MYWJlbDpcIs6Rzr3Osc60zrnOrM+EzrHOvs63IM+Dz4TOrs67zrfPglwiLGNvbHVtbnNQYW5lbFNob3dBbGxCdXR0b246XCLOoM+Bzr/Oss6/zrvOriDPjM67z4nOvVwiLGNvbHVtbnNQYW5lbEhpZGVBbGxCdXR0b246XCLOkc+Az4zOus+Bz4XPiM63IM+MzrvPic69XCIsZmlsdGVyUGFuZWxBZGRGaWx0ZXI6XCLOoM+Bzr/Pg864zq7Ous63IM+Gzq/Ou8+Ez4HOv8+FXCIsZmlsdGVyUGFuZWxEZWxldGVJY29uTGFiZWw6XCLOlM65zrHOs8+BzrHPhs6uXCIsZmlsdGVyUGFuZWxPcGVyYXRvcnM6XCLOpM61zrvOtc+Dz4TOrc+CXCIsZmlsdGVyUGFuZWxPcGVyYXRvckFuZDpcIs6azrHOr1wiLGZpbHRlclBhbmVsT3BlcmF0b3JPcjpcIs6JXCIsZmlsdGVyUGFuZWxDb2x1bW5zOlwizqPPhM6uzrvOtc+CXCIsZmlsdGVyUGFuZWxJbnB1dExhYmVsOlwizqTOuc68zq5cIixmaWx0ZXJQYW5lbElucHV0UGxhY2Vob2xkZXI6XCLOpM65zrzOriDPhs6vzrvPhM+Bzr/PhVwiLGZpbHRlck9wZXJhdG9yQ29udGFpbnM6XCLPgM61z4HOuc6tz4fOtc65XCIsZmlsdGVyT3BlcmF0b3JFcXVhbHM6XCLOuc+Dzr/Pjc+EzrHOuVwiLGZpbHRlck9wZXJhdG9yU3RhcnRzV2l0aDpcIs6+zrXOus65zr3OrM61zrkgzrzOtVwiLGZpbHRlck9wZXJhdG9yRW5kc1dpdGg6XCLPhM61zrvOtc65z47Ovc61zrkgzrzOtVwiLGZpbHRlck9wZXJhdG9ySXM6XCLOtc6vzr3Osc65XCIsZmlsdGVyT3BlcmF0b3JOb3Q6XCLOtM61zr0gzrXOr869zrHOuVwiLGZpbHRlck9wZXJhdG9yQWZ0ZXI6XCLOtc6vzr3Osc65IM68zrXPhM6sXCIsZmlsdGVyT3BlcmF0b3JPbk9yQWZ0ZXI6XCLOtc6vzr3Osc65IM6vz4POvyDOriDOvM61z4TOrFwiLGZpbHRlck9wZXJhdG9yQmVmb3JlOlwizrXOr869zrHOuSDPgM+BzrnOvVwiLGZpbHRlck9wZXJhdG9yT25PckJlZm9yZTpcIs61zq/Ovc6xzrkgzq/Pg86/IM6uIM+Az4HOuc69XCIsY29sdW1uTWVudUxhYmVsOlwizpzOtc69zr/PjVwiLGNvbHVtbk1lbnVTaG93Q29sdW1uczpcIs6VzrzPhs6szr3Ouc+Dzrcgz4PPhM63zrvPjs69XCIsY29sdW1uTWVudUZpbHRlcjpcIs6mzq/Ou8+Ez4HOv1wiLGNvbHVtbk1lbnVIaWRlQ29sdW1uOlwizpHPgM+MzrrPgc+Fz4jOt1wiLGNvbHVtbk1lbnVVbnNvcnQ6XCLOkc+AzrXOvc61z4HOs86/z4DOv86vzrfPg863IM+EzrHOvs65zr3PjM68zrfPg863z4JcIixjb2x1bW5NZW51U29ydEFzYzpcIs6kzrHOvs65zr3PjM68zrfPg863IM+DzrUgzrHPjc6+zr/Phc+DzrEgz4POtc65z4HOrFwiLGNvbHVtbk1lbnVTb3J0RGVzYzpcIs6kzrHOvs65zr3PjM68zrfPg863IM+DzrUgz4bOuM6vzr3Ov8+Fz4POsSDPg861zrnPgc6sXCIsY29sdW1uSGVhZGVyRmlsdGVyc1Rvb2x0aXBBY3RpdmU6ZT0+MSE9PWU/ZStcIiDOtc69zrXPgc6zzqwgz4bOr867z4TPgc6xXCI6ZStcIiDOtc69zrXPgc6zz4wgz4bOr867z4TPgc6/XCIsY29sdW1uSGVhZGVyRmlsdGVyc0xhYmVsOlwizpXOvM+GzqzOvc65z4POtyDPhs6vzrvPhM+Bz4nOvVwiLGNvbHVtbkhlYWRlclNvcnRJY29uTGFiZWw6XCLOpM6xzr7Ouc69z4zOvM63z4POt1wiLGZvb3RlclJvd1NlbGVjdGVkOmU9PjEhPT1lP2UudG9Mb2NhbGVTdHJpbmcoKStcIiDOtc+AzrnOu861zrPOvM6tzr3Otc+CIM6zz4HOsc68zrzOrc+CXCI6ZS50b0xvY2FsZVN0cmluZygpK1wiIM61z4DOuc67zrXOs868zq3Ovc63IM6zz4HOsc68zrzOrlwiLGZvb3RlclRvdGFsUm93czpcIs6jz43Ovc6/zrvOvyDOk8+BzrHOvM68z47OvTpcIn0pLEVjPW5vKERvLE4pLFNjPW5vKHtyb290R3JpZExhYmVsOlwiZ3JpbGxhXCIsbm9Sb3dzTGFiZWw6XCJTaW4gZmlsYXNcIixlcnJvck92ZXJsYXlEZWZhdWx0TGFiZWw6XCJIYSBvY3VycmlkbyB1biBlcnJvci5cIix0b29sYmFyRGVuc2l0eTpcIkRlbnNpZGFkXCIsdG9vbGJhckRlbnNpdHlMYWJlbDpcIkRlbnNpZGFkXCIsdG9vbGJhckRlbnNpdHlDb21wYWN0OlwiQ29tcGFjdGFcIix0b29sYmFyRGVuc2l0eVN0YW5kYXJkOlwiU3RhbmRhcmRcIix0b29sYmFyRGVuc2l0eUNvbWZvcnRhYmxlOlwiQ29tb2RhXCIsdG9vbGJhckNvbHVtbnM6XCJDb2x1bW5hc1wiLHRvb2xiYXJDb2x1bW5zTGFiZWw6XCJTZWxlY2Npb25hciBjb2x1bW5hc1wiLHRvb2xiYXJGaWx0ZXJzOlwiRmlsdHJvc1wiLHRvb2xiYXJGaWx0ZXJzTGFiZWw6XCJNb3N0cmFyIGZpbHRyb3NcIix0b29sYmFyRmlsdGVyc1Rvb2x0aXBIaWRlOlwiT2N1bHRhciBmaWx0cm9zXCIsdG9vbGJhckZpbHRlcnNUb29sdGlwU2hvdzpcIk1vc3RyYXIgZmlsdHJvc1wiLHRvb2xiYXJGaWx0ZXJzVG9vbHRpcEFjdGl2ZTplPT5lPjE/ZStcIiBmaWx0cm9zIGFjdGl2b3NcIjplK1wiIGZpbHRybyBhY3Rpdm9cIix0b29sYmFyRXhwb3J0OlwiRXhwb3J0YXJcIix0b29sYmFyRXhwb3J0TGFiZWw6XCJFeHBvcnRhclwiLHRvb2xiYXJFeHBvcnRDU1Y6XCJEZXNjYXJnYXIgY29tbyBDU1ZcIixjb2x1bW5zUGFuZWxUZXh0RmllbGRMYWJlbDpcIkNvbHVtbmEgZGUgYsO6c3F1ZWRhXCIsY29sdW1uc1BhbmVsVGV4dEZpZWxkUGxhY2Vob2xkZXI6XCJUw610dWxvIGRlIGNvbHVtbmFcIixjb2x1bW5zUGFuZWxEcmFnSWNvbkxhYmVsOlwiUmVvcmRlciBjb2x1bW5hXCIsY29sdW1uc1BhbmVsU2hvd0FsbEJ1dHRvbjpcIk1vc3RyYXIgdG9kb1wiLGNvbHVtbnNQYW5lbEhpZGVBbGxCdXR0b246XCJPY3VsdGFyIHRvZG9cIixmaWx0ZXJQYW5lbEFkZEZpbHRlcjpcIkFncmVnYXIgZmlsdHJvXCIsZmlsdGVyUGFuZWxEZWxldGVJY29uTGFiZWw6XCJCb3JyYXJcIixmaWx0ZXJQYW5lbE9wZXJhdG9yczpcIk9wZXJhZG9yZXNcIixmaWx0ZXJQYW5lbE9wZXJhdG9yQW5kOlwiWVwiLGZpbHRlclBhbmVsT3BlcmF0b3JPcjpcIk9cIixmaWx0ZXJQYW5lbENvbHVtbnM6XCJDb2x1bW5hc1wiLGZpbHRlclBhbmVsSW5wdXRMYWJlbDpcIlZhbG9yXCIsZmlsdGVyUGFuZWxJbnB1dFBsYWNlaG9sZGVyOlwiVmFsb3IgZGUgZmlsdHJvXCIsZmlsdGVyT3BlcmF0b3JDb250YWluczpcImNvbnRpZW5lXCIsZmlsdGVyT3BlcmF0b3JFcXVhbHM6XCJlcyBpZ3VhbFwiLGZpbHRlck9wZXJhdG9yU3RhcnRzV2l0aDpcImNvbWllbnphIGNvblwiLGZpbHRlck9wZXJhdG9yRW5kc1dpdGg6XCJ0ZXJtaW5hIGNvblwiLGZpbHRlck9wZXJhdG9ySXM6XCJlc1wiLGZpbHRlck9wZXJhdG9yTm90Olwibm8gZXNcIixmaWx0ZXJPcGVyYXRvckFmdGVyOlwiZXMgcG9zdGVyaW9yXCIsZmlsdGVyT3BlcmF0b3JPbk9yQWZ0ZXI6XCJlcyBlbiBvIHBvc3RlcmlvclwiLGZpbHRlck9wZXJhdG9yQmVmb3JlOlwiZXMgYW50ZXJpb3JcIixmaWx0ZXJPcGVyYXRvck9uT3JCZWZvcmU6XCJlcyBlbiBvIGFudGVyaW9yXCIsY29sdW1uTWVudUxhYmVsOlwiTWVuw7pcIixjb2x1bW5NZW51U2hvd0NvbHVtbnM6XCJNb3N0cmFyIGNvbHVtbmFzXCIsY29sdW1uTWVudUZpbHRlcjpcIkZpbHRyb1wiLGNvbHVtbk1lbnVIaWRlQ29sdW1uOlwiT2N1bHRhclwiLGNvbHVtbk1lbnVVbnNvcnQ6XCJEZXNvcmRlbmFyXCIsY29sdW1uTWVudVNvcnRBc2M6XCJPcmRlbmFyIEFTQ1wiLGNvbHVtbk1lbnVTb3J0RGVzYzpcIk9yZGVuYXIgREVTQ1wiLGNvbHVtbkhlYWRlckZpbHRlcnNUb29sdGlwQWN0aXZlOmU9PmU+MT9lK1wiIGZpbHRyb3MgYWN0aXZvc1wiOmUrXCIgZmlsdHJvIGFjdGl2b1wiLGNvbHVtbkhlYWRlckZpbHRlcnNMYWJlbDpcIk1vc3RyYXIgZmlsdHJvc1wiLGNvbHVtbkhlYWRlclNvcnRJY29uTGFiZWw6XCJPcmRlbmFyXCIsZm9vdGVyUm93U2VsZWN0ZWQ6ZT0+ZT4xP2UudG9Mb2NhbGVTdHJpbmcoKStcIiBmaWxhcyBzZWxlY2Npb25hZGFzXCI6ZS50b0xvY2FsZVN0cmluZygpK1wiIGZpbGEgc2VsZWNjaW9uYWRhXCIsZm9vdGVyVG90YWxSb3dzOlwiRmlsYXMgVG90YWxlczpcIn0sVikseGM9bm8oe3Jvb3RHcmlkTGFiZWw6XCJncmlkXCIsbm9Sb3dzTGFiZWw6XCJQYXMgZGUgcsOpc3VsdGF0c1wiLG5vUmVzdWx0c092ZXJsYXlMYWJlbDpcIkF1Y3VuIHLDqXN1bHRhdC5cIixlcnJvck92ZXJsYXlEZWZhdWx0TGFiZWw6XCJVbmUgZXJyZXVyIGVzdCBhcHBhcnVlLlwiLHRvb2xiYXJEZW5zaXR5OlwiRGVuc2l0w6lcIix0b29sYmFyRGVuc2l0eUxhYmVsOlwiRGVuc2l0w6lcIix0b29sYmFyRGVuc2l0eUNvbXBhY3Q6XCJDb21wYWN0XCIsdG9vbGJhckRlbnNpdHlTdGFuZGFyZDpcIlN0YW5kYXJkXCIsdG9vbGJhckRlbnNpdHlDb21mb3J0YWJsZTpcIkNvbmZvcnRhYmxlXCIsdG9vbGJhckNvbHVtbnM6XCJDb2xvbm5lc1wiLHRvb2xiYXJDb2x1bW5zTGFiZWw6XCJDaG9pc2lyIGxlcyBjb2xvbm5lc1wiLHRvb2xiYXJGaWx0ZXJzOlwiRmlsdHJlc1wiLHRvb2xiYXJGaWx0ZXJzTGFiZWw6XCJBZmZpY2hlciBsZXMgZmlsdHJlc1wiLHRvb2xiYXJGaWx0ZXJzVG9vbHRpcEhpZGU6XCJDYWNoZXIgbGVzIGZpbHRyZXNcIix0b29sYmFyRmlsdGVyc1Rvb2x0aXBTaG93OlwiQWZmaWNoZXIgbGVzIGZpbHRyZXNcIix0b29sYmFyRmlsdGVyc1Rvb2x0aXBBY3RpdmU6ZT0+ZT4xP2UrXCIgZmlsdHJlcyBhY3RpZnNcIjplK1wiIGZpbHRyZSBhY3RpZlwiLGNvbHVtbnNQYW5lbFRleHRGaWVsZExhYmVsOlwiQ2hlcmNoZXIgY29sb25uZVwiLGNvbHVtbnNQYW5lbFRleHRGaWVsZFBsYWNlaG9sZGVyOlwiVGl0cmUgZGUgbGEgY29sb25uZVwiLGNvbHVtbnNQYW5lbERyYWdJY29uTGFiZWw6XCJSw6lvcmdhbmlzZXIgbGEgY29sb25uZVwiLGNvbHVtbnNQYW5lbFNob3dBbGxCdXR0b246XCJUb3V0IGFmZmljaGVyXCIsY29sdW1uc1BhbmVsSGlkZUFsbEJ1dHRvbjpcIlRvdXQgY2FjaGVyXCIsZmlsdGVyUGFuZWxBZGRGaWx0ZXI6XCJBam91dGVyIHVuIGZpbHRyZVwiLGZpbHRlclBhbmVsRGVsZXRlSWNvbkxhYmVsOlwiU3VwcHJpbWVyXCIsZmlsdGVyUGFuZWxPcGVyYXRvcnM6XCJPcMOpcmF0ZXVyc1wiLGZpbHRlclBhbmVsT3BlcmF0b3JBbmQ6XCJFdFwiLGZpbHRlclBhbmVsT3BlcmF0b3JPcjpcIk91XCIsZmlsdGVyUGFuZWxDb2x1bW5zOlwiQ29sb25uZXNcIixmaWx0ZXJQYW5lbElucHV0TGFiZWw6XCJWYWxldXJcIixmaWx0ZXJQYW5lbElucHV0UGxhY2Vob2xkZXI6XCJGaWx0cmVyIGxhIHZhbGV1clwiLGZpbHRlck9wZXJhdG9yQ29udGFpbnM6XCJjb250aWVudFwiLGZpbHRlck9wZXJhdG9yRXF1YWxzOlwiw6lnYWwgw6BcIixmaWx0ZXJPcGVyYXRvclN0YXJ0c1dpdGg6XCJjb21tZW5jZSBwYXJcIixmaWx0ZXJPcGVyYXRvckVuZHNXaXRoOlwic2UgdGVybWluZSBwYXJcIixmaWx0ZXJPcGVyYXRvcklzOlwiZXN0XCIsZmlsdGVyT3BlcmF0b3JOb3Q6XCJuJ2VzdCBwYXNcIixmaWx0ZXJPcGVyYXRvck9uT3JBZnRlcjpcIsOpZ2FsIG91IHBvc3TDqXJpZXVyXCIsZmlsdGVyT3BlcmF0b3JBZnRlcjpcInBvc3TDqXJpZXVyXCIsZmlsdGVyT3BlcmF0b3JPbk9yQmVmb3JlOlwiw6lnYWwgb3UgcG9zdMOpcmlldXJcIixmaWx0ZXJPcGVyYXRvckJlZm9yZTpcImFudMOpcmlldXJcIixjb2x1bW5NZW51TGFiZWw6XCJNZW51XCIsY29sdW1uTWVudVNob3dDb2x1bW5zOlwiQWZmaWNoZXIgbGVzIGNvbG9ubmVzXCIsY29sdW1uTWVudUZpbHRlcjpcIkZpbHRyZXJcIixjb2x1bW5NZW51SGlkZUNvbHVtbjpcIkNhY2hlclwiLGNvbHVtbk1lbnVVbnNvcnQ6XCJBbm51bGVyIGxlIHRyaVwiLGNvbHVtbk1lbnVTb3J0QXNjOlwiVHJpIGFzY2VuZGFudFwiLGNvbHVtbk1lbnVTb3J0RGVzYzpcIlRyaSBkZXNjZW5kYW50XCIsY29sdW1uSGVhZGVyRmlsdGVyc1Rvb2x0aXBBY3RpdmU6ZT0+ZT4xP2UrXCIgZmlsdHJlcyBhY3RpZnNcIjplK1wiIGZpbHRyZSBhY3RpZlwiLGNvbHVtbkhlYWRlckZpbHRlcnNMYWJlbDpcIkFmZmljaGVyIGxlcyBmaWx0cmVzXCIsY29sdW1uSGVhZGVyU29ydEljb25MYWJlbDpcIlRyaWVyXCIsZm9vdGVyUm93U2VsZWN0ZWQ6ZT0+ZT4xP2UudG9Mb2NhbGVTdHJpbmcoKStcIiBsaWduZXMgc8OpbGVjdGlvbm7DqWVzXCI6ZS50b0xvY2FsZVN0cmluZygpK1wiIGxpZ25lIHPDqWxlY3Rpb25uw6llXCIsZm9vdGVyVG90YWxSb3dzOlwiTGlnbmVzIHRvdGFsZXMgOlwiLGNoZWNrYm94U2VsZWN0aW9uSGVhZGVyTmFtZTpcIlPDqWxlY3Rpb25cIn0sQiksTWM9bm8oe25vUm93c0xhYmVsOlwiTmVzc3VuIHJlY29yZFwiLGVycm9yT3ZlcmxheURlZmF1bHRMYWJlbDpcIlNpIMOoIHZlcmlmaWNhdG8gdW4gZXJyb3JlLlwiLHRvb2xiYXJEZW5zaXR5OlwiRGVuc2l0w6BcIix0b29sYmFyRGVuc2l0eUxhYmVsOlwiRGVuc2l0w6BcIix0b29sYmFyRGVuc2l0eUNvbXBhY3Q6XCJDb21wYWN0XCIsdG9vbGJhckRlbnNpdHlTdGFuZGFyZDpcIlN0YW5kYXJkXCIsdG9vbGJhckRlbnNpdHlDb21mb3J0YWJsZTpcIkNvbmZvcnRhYmxlXCIsdG9vbGJhckNvbHVtbnM6XCJDb2xvbm5lXCIsdG9vbGJhckNvbHVtbnNMYWJlbDpcIlNlbGV6aW9uYSBsZSBjb2xvbm5lXCIsdG9vbGJhckZpbHRlcnM6XCJGaWx0cmlcIix0b29sYmFyRmlsdGVyc0xhYmVsOlwiTW9zdHJhIGkgZmlsdHJpXCIsdG9vbGJhckZpbHRlcnNUb29sdGlwSGlkZTpcIk5hc2NvbmRpIGkgZmlsdHJpXCIsdG9vbGJhckZpbHRlcnNUb29sdGlwU2hvdzpcIk1vc3RyYSBpIGZpbHRyaVwiLHRvb2xiYXJGaWx0ZXJzVG9vbHRpcEFjdGl2ZTplPT5lPjE/ZStcIiBmaWx0cmkgYXR0aXZpXCI6ZStcIiBmaWx0cm8gYXR0aXZvXCIsY29sdW1uc1BhbmVsVGV4dEZpZWxkTGFiZWw6XCJDZXJjYSBjb2xvbm5hXCIsY29sdW1uc1BhbmVsVGV4dEZpZWxkUGxhY2Vob2xkZXI6XCJUaXRvbG8gZGVsbGEgY29sb25uYVwiLGNvbHVtbnNQYW5lbERyYWdJY29uTGFiZWw6XCJSaW9yZGluYSBsYSBjb2xvbm5hXCIsY29sdW1uc1BhbmVsU2hvd0FsbEJ1dHRvbjpcIk1vc3RyYSB0dXR0b1wiLGNvbHVtbnNQYW5lbEhpZGVBbGxCdXR0b246XCJOYXNjb25kaSB0dXR0b1wiLGZpbHRlclBhbmVsQWRkRmlsdGVyOlwiQWdnaXVuZ2kgdW4gZmlsdHJvXCIsZmlsdGVyUGFuZWxEZWxldGVJY29uTGFiZWw6XCJSaW11b3ZpXCIsZmlsdGVyUGFuZWxPcGVyYXRvcnM6XCJPcGVyYXRvcmlcIixmaWx0ZXJQYW5lbE9wZXJhdG9yQW5kOlwiRSAoYW5kKVwiLGZpbHRlclBhbmVsT3BlcmF0b3JPcjpcIk8gKG9yKVwiLGZpbHRlclBhbmVsQ29sdW1uczpcIkNvbG9ubmVcIixmaWx0ZXJQYW5lbElucHV0TGFiZWw6XCJWYWxvcmVcIixmaWx0ZXJQYW5lbElucHV0UGxhY2Vob2xkZXI6XCJGaWx0cmEgaWwgdmFsb3JlXCIsZmlsdGVyT3BlcmF0b3JDb250YWluczpcImNvbnRpZW5lXCIsZmlsdGVyT3BlcmF0b3JFcXVhbHM6XCJ1Z3VhbGUgYVwiLGZpbHRlck9wZXJhdG9yU3RhcnRzV2l0aDpcImNvbWluY2lhIHBlclwiLGZpbHRlck9wZXJhdG9yRW5kc1dpdGg6XCJ0ZXJtaW5hIHBlclwiLGZpbHRlck9wZXJhdG9ySXM6XCJ1Z3VhbGUgYVwiLGZpbHRlck9wZXJhdG9yTm90OlwiZGl2ZXJzYSBkYVwiLGZpbHRlck9wZXJhdG9yT25PckFmdGVyOlwiYSBwYXJ0aXJlIGRhbFwiLGZpbHRlck9wZXJhdG9yQWZ0ZXI6XCJkb3BvIGlsXCIsZmlsdGVyT3BlcmF0b3JPbk9yQmVmb3JlOlwiZmlubyBhbFwiLGZpbHRlck9wZXJhdG9yQmVmb3JlOlwicHJpbWEgZGVsXCIsY29sdW1uTWVudUxhYmVsOlwiTWVudVwiLGNvbHVtbk1lbnVTaG93Q29sdW1uczpcIk1vc3RyYSBsZSBjb2xvbm5lXCIsY29sdW1uTWVudUZpbHRlcjpcIkZpbHRyYVwiLGNvbHVtbk1lbnVIaWRlQ29sdW1uOlwiTmFzY29uZGlcIixjb2x1bW5NZW51VW5zb3J0OlwiQW5udWxsYSBsJ29yZGluYW1lbnRvXCIsY29sdW1uTWVudVNvcnRBc2M6XCJPcmRpbmFtZW50byBjcmVzY2VudGVcIixjb2x1bW5NZW51U29ydERlc2M6XCJPcmRpbmFtZW50byBkZWNyZXNjZW50ZVwiLGNvbHVtbkhlYWRlckZpbHRlcnNUb29sdGlwQWN0aXZlOmU9PmU+MT9lK1wiIGZpbHRyaSBhdHRpdmlcIjplK1wiIGZpbHRybyBhdHRpdm9cIixjb2x1bW5IZWFkZXJGaWx0ZXJzTGFiZWw6XCJNb3N0cmEgaSBmaWx0cmlcIixjb2x1bW5IZWFkZXJTb3J0SWNvbkxhYmVsOlwiT3JkaW5hXCIsZm9vdGVyUm93U2VsZWN0ZWQ6ZT0+ZT4xP2UudG9Mb2NhbGVTdHJpbmcoKStcIiByZWNvcmQgc2VsZXppb25hdGlcIjplLnRvTG9jYWxlU3RyaW5nKCkrXCIgcmVjb3JkIHNlbGV6aW9uYXRvXCIsZm9vdGVyVG90YWxSb3dzOlwiUmVjb3JkIHRvdGFsaSA6XCIsY2hlY2tib3hTZWxlY3Rpb25IZWFkZXJOYW1lOlwiU2VsZXppb25hXCJ9LCQpLEljPW5vKHtyb290R3JpZExhYmVsOlwiZ3JpZFwiLG5vUm93c0xhYmVsOlwi6KGM44GM44GC44KK44G+44Gb44KTXCIsZXJyb3JPdmVybGF5RGVmYXVsdExhYmVsOlwi44Ko44Op44O844GM55m655Sf44GX44G+44GX44Gf44CCXCIsdG9vbGJhckRlbnNpdHk6XCLooYzplpPpmpRcIix0b29sYmFyRGVuc2l0eUxhYmVsOlwi6KGM6ZaT6ZqUXCIsdG9vbGJhckRlbnNpdHlDb21wYWN0Olwi44Kz44Oz44OR44Kv44OIXCIsdG9vbGJhckRlbnNpdHlTdGFuZGFyZDpcIuaomea6llwiLHRvb2xiYXJEZW5zaXR5Q29tZm9ydGFibGU6XCLjgbLjgo3jgoFcIix0b29sYmFyQ29sdW1uczpcIuWIl+S4gOimp1wiLHRvb2xiYXJDb2x1bW5zTGFiZWw6XCLliJfpgbjmip5cIix0b29sYmFyRmlsdGVyczpcIuODleOCo+ODq+OCv+ODvFwiLHRvb2xiYXJGaWx0ZXJzTGFiZWw6XCLjg5XjgqPjg6vjgr/jg7zooajnpLpcIix0b29sYmFyRmlsdGVyc1Rvb2x0aXBIaWRlOlwi44OV44Kj44Or44K/44O86Z2e6KGo56S6XCIsdG9vbGJhckZpbHRlcnNUb29sdGlwU2hvdzpcIuODleOCo+ODq+OCv+ODvOihqOekulwiLHRvb2xiYXJGaWx0ZXJzVG9vbHRpcEFjdGl2ZTplPT5lK1wi5Lu244Gu44OV44Kj44Or44K/44O844KS6YGp55So5LitXCIsdG9vbGJhckV4cG9ydDpcIuOCqOOCr+OCueODneODvOODiFwiLHRvb2xiYXJFeHBvcnRMYWJlbDpcIuOCqOOCr+OCueODneODvOODiFwiLHRvb2xiYXJFeHBvcnRDU1Y6XCJDU1bjg4Djgqbjg7Pjg63jg7zjg4lcIixjb2x1bW5zUGFuZWxUZXh0RmllbGRMYWJlbDpcIuWIl+aknOe0olwiLGNvbHVtbnNQYW5lbFRleHRGaWVsZFBsYWNlaG9sZGVyOlwi5qSc57Si44Kv44Ko44Oq44KS5YWl5YqbLi4uXCIsY29sdW1uc1BhbmVsRHJhZ0ljb25MYWJlbDpcIuWIl+S4puOBueabv+OBiFwiLGNvbHVtbnNQYW5lbFNob3dBbGxCdXR0b246XCLjgZnjgbnjgabooajnpLpcIixjb2x1bW5zUGFuZWxIaWRlQWxsQnV0dG9uOlwi44GZ44G544Gm6Z2e6KGo56S6XCIsZmlsdGVyUGFuZWxBZGRGaWx0ZXI6XCLjg5XjgqPjg6vjgr/jg7zov73liqBcIixmaWx0ZXJQYW5lbERlbGV0ZUljb25MYWJlbDpcIuWJiumZpFwiLGZpbHRlclBhbmVsT3BlcmF0b3JzOlwi44Kq44Oa44Os44O844K/XCIsZmlsdGVyUGFuZWxPcGVyYXRvckFuZDpcIkFuZFwiLGZpbHRlclBhbmVsT3BlcmF0b3JPcjpcIk9yXCIsZmlsdGVyUGFuZWxDb2x1bW5zOlwi5YiXXCIsZmlsdGVyUGFuZWxJbnB1dExhYmVsOlwi5YCkXCIsZmlsdGVyUGFuZWxJbnB1dFBsYWNlaG9sZGVyOlwi5YCk44KS5YWl5YqbLi4uXCIsZmlsdGVyT3BlcmF0b3JDb250YWluczpcIi4uLuOCkuWQq+OCgFwiLGZpbHRlck9wZXJhdG9yRXF1YWxzOlwiLi4u44Gr562J44GX44GEXCIsZmlsdGVyT3BlcmF0b3JTdGFydHNXaXRoOlwiLi4u44Gn5aeL44G+44KLXCIsZmlsdGVyT3BlcmF0b3JFbmRzV2l0aDpcIi4uLuOBp+e1guOCj+OCi1wiLGZpbHRlck9wZXJhdG9ySXM6XCIuLi7jgafjgYLjgotcIixmaWx0ZXJPcGVyYXRvck5vdDpcIi4uLuOBp+OBquOBhFwiLGZpbHRlck9wZXJhdG9yQWZ0ZXI6XCIuLi7jgojjgorlvozjgo1cIixmaWx0ZXJPcGVyYXRvck9uT3JBZnRlcjpcIi4uLuS7pemZjVwiLGZpbHRlck9wZXJhdG9yQmVmb3JlOlwiLi4u44KI44KK5YmNXCIsZmlsdGVyT3BlcmF0b3JPbk9yQmVmb3JlOlwiLi4u5Lul5YmNXCIsY29sdW1uTWVudUxhYmVsOlwi44Oh44OL44Ol44O8XCIsY29sdW1uTWVudVNob3dDb2x1bW5zOlwi5YiX6KGo56S6XCIsY29sdW1uTWVudUZpbHRlcjpcIuODleOCo+ODq+OCv+ODvFwiLGNvbHVtbk1lbnVIaWRlQ29sdW1uOlwi5YiX6Z2e6KGo56S6XCIsY29sdW1uTWVudVVuc29ydDpcIuOCveODvOODiOino+mZpFwiLGNvbHVtbk1lbnVTb3J0QXNjOlwi5piH6aCG44K944O844OIXCIsY29sdW1uTWVudVNvcnREZXNjOlwi6ZmN6aCG44K944O844OIXCIsY29sdW1uSGVhZGVyRmlsdGVyc1Rvb2x0aXBBY3RpdmU6ZT0+ZStcIuS7tuOBruODleOCo+ODq+OCv+ODvOOCkumBqeeUqOS4rVwiLGNvbHVtbkhlYWRlckZpbHRlcnNMYWJlbDpcIuODleOCo+ODq+OCv+ODvOihqOekulwiLGNvbHVtbkhlYWRlclNvcnRJY29uTGFiZWw6XCLjgr3jg7zjg4hcIixmb290ZXJSb3dTZWxlY3RlZDplPT5lK1wi6KGM44KS6YG45oqe5LitXCIsZm9vdGVyVG90YWxSb3dzOlwi57eP6KGM5pWwOlwifSxXKSxrYz1ubyh7cm9vdEdyaWRMYWJlbDpcImdyaWRcIixub1Jvd3NMYWJlbDpcIkdlZW4gcmVzdWx0YXRlbi5cIixlcnJvck92ZXJsYXlEZWZhdWx0TGFiZWw6XCJFciBkZWVkIHppY2ggZWVuIGZvdXQgdm9vci5cIix0b29sYmFyRGVuc2l0eTpcIkdyb290dGVcIix0b29sYmFyRGVuc2l0eUxhYmVsOlwiR3Jvb3R0ZVwiLHRvb2xiYXJEZW5zaXR5Q29tcGFjdDpcIkNvbXBhY3RcIix0b29sYmFyRGVuc2l0eVN0YW5kYXJkOlwiTm9ybWFhbFwiLHRvb2xiYXJEZW5zaXR5Q29tZm9ydGFibGU6XCJCcmVlZFwiLHRvb2xiYXJDb2x1bW5zOlwiS29sb21tZW5cIix0b29sYmFyQ29sdW1uc0xhYmVsOlwiS2llcyBrb2xvbW1lblwiLHRvb2xiYXJGaWx0ZXJzOlwiRmlsdGVyc1wiLHRvb2xiYXJGaWx0ZXJzTGFiZWw6XCJUb29uIGZpbHRlcnNcIix0b29sYmFyRmlsdGVyc1Rvb2x0aXBIaWRlOlwiVmVyYmVyZyBmaWx0ZXJzXCIsdG9vbGJhckZpbHRlcnNUb29sdGlwU2hvdzpcIlRvb24gZmlsdGVyc1wiLHRvb2xiYXJGaWx0ZXJzVG9vbHRpcEFjdGl2ZTplPT5lPjE/ZStcIiBhY3RpZXZlIGZpbHRlcnNcIjplK1wiIGZpbHRlciBhY3RpZWZcIixjb2x1bW5zUGFuZWxUZXh0RmllbGRMYWJlbDpcIlpvZWsga29sb21cIixjb2x1bW5zUGFuZWxUZXh0RmllbGRQbGFjZWhvbGRlcjpcIktvbG9tdGl0ZWxcIixjb2x1bW5zUGFuZWxEcmFnSWNvbkxhYmVsOlwiS29sb20gaGVyc2NoaWtrZW5cIixjb2x1bW5zUGFuZWxTaG93QWxsQnV0dG9uOlwiQWxsZXMgdG9uZW5cIixjb2x1bW5zUGFuZWxIaWRlQWxsQnV0dG9uOlwiQWxsZXMgdmVyYmVyZ2VuXCIsZmlsdGVyUGFuZWxBZGRGaWx0ZXI6XCJGaWx0ZXIgdG9ldm9lZ2VuXCIsZmlsdGVyUGFuZWxEZWxldGVJY29uTGFiZWw6XCJWZXJ3aWpkZXJlblwiLGZpbHRlclBhbmVsT3BlcmF0b3JzOlwiT3BlcmF0b3JlblwiLGZpbHRlclBhbmVsT3BlcmF0b3JBbmQ6XCJFblwiLGZpbHRlclBhbmVsT3BlcmF0b3JPcjpcIk9mXCIsZmlsdGVyUGFuZWxDb2x1bW5zOlwiS29sb21tZW5cIixmaWx0ZXJQYW5lbElucHV0TGFiZWw6XCJXYWFyZGVcIixmaWx0ZXJQYW5lbElucHV0UGxhY2Vob2xkZXI6XCJGaWx0ZXIgd2FhcmRlXCIsZmlsdGVyT3BlcmF0b3JDb250YWluczpcImJldmF0XCIsZmlsdGVyT3BlcmF0b3JFcXVhbHM6XCJnZWxpamsgYWFuXCIsZmlsdGVyT3BlcmF0b3JTdGFydHNXaXRoOlwiYmVnaW50IG1ldFwiLGZpbHRlck9wZXJhdG9yRW5kc1dpdGg6XCJlaW5kaWd0IG1ldFwiLGZpbHRlck9wZXJhdG9ySXM6XCJpc1wiLGZpbHRlck9wZXJhdG9yTm90OlwiaXMgbmlldFwiLGZpbHRlck9wZXJhdG9yT25PckFmdGVyOlwiaXMgZ2VsaWprIG9mIGVyIHZvb3JcIixmaWx0ZXJPcGVyYXRvckFmdGVyOlwiaXMgdm9vclwiLGZpbHRlck9wZXJhdG9yT25PckJlZm9yZTpcImlzIGdlbGlqayBvZiBlciBuYVwiLGZpbHRlck9wZXJhdG9yQmVmb3JlOlwiaXMgbmFcIixjb2x1bW5NZW51TGFiZWw6XCJNZW51XCIsY29sdW1uTWVudVNob3dDb2x1bW5zOlwiVG9vbiBrb2xvbW1lblwiLGNvbHVtbk1lbnVGaWx0ZXI6XCJGaWx0ZXJlblwiLGNvbHVtbk1lbnVIaWRlQ29sdW1uOlwiVmVyYmVyZ2VuXCIsY29sdW1uTWVudVVuc29ydDpcIkFubnVsZWVyIHNvcnRlcmluZ1wiLGNvbHVtbk1lbnVTb3J0QXNjOlwiT3Bsb3BlbmQgc29ydGVyZW5cIixjb2x1bW5NZW51U29ydERlc2M6XCJBZmxvcGVuZCBzb3J0ZXJlblwiLGNvbHVtbkhlYWRlckZpbHRlcnNUb29sdGlwQWN0aXZlOmU9PmU+MT9lK1wiIGFjdGlldmUgZmlsdGVyc1wiOmUrXCIgZmlsdGVyIGFjdGllZlwiLGNvbHVtbkhlYWRlckZpbHRlcnNMYWJlbDpcIlRvb24gZmlsdGVyc1wiLGNvbHVtbkhlYWRlclNvcnRJY29uTGFiZWw6XCJTb3J0ZXJlblwiLGZvb3RlclJvd1NlbGVjdGVkOmU9PmU+MT9lLnRvTG9jYWxlU3RyaW5nKCkrXCIgcmlqZW4gZ2VzZWxlY3RlZXJkXCI6ZS50b0xvY2FsZVN0cmluZygpK1wiIHJpaiBnZXNlbGVjdGVlcmRcIixmb290ZXJUb3RhbFJvd3M6XCJUb3RhYWw6XCJ9LFUpLERjPXtyb290R3JpZExhYmVsOlwiZ3JpZFwiLG5vUm93c0xhYmVsOlwiQnJhayBkYW55Y2hcIixlcnJvck92ZXJsYXlEZWZhdWx0TGFiZWw6XCJXeXN0xIVwacWCIGLFgsSFZC5cIix0b29sYmFyRGVuc2l0eTpcIld5c29rb8WbxIcgcnrEmWR1XCIsdG9vbGJhckRlbnNpdHlMYWJlbDpcIld5c29rb8WbxIcgcnrEmWR1XCIsdG9vbGJhckRlbnNpdHlDb21wYWN0OlwiS29tcGFrdFwiLHRvb2xiYXJEZW5zaXR5U3RhbmRhcmQ6XCJTdGFuZGFyZFwiLHRvb2xiYXJEZW5zaXR5Q29tZm9ydGFibGU6XCJLb21mb3J0XCIsdG9vbGJhckNvbHVtbnM6XCJLb2x1bW55XCIsdG9vbGJhckNvbHVtbnNMYWJlbDpcIlphem5hY3oga29sdW1ueVwiLHRvb2xiYXJGaWx0ZXJzOlwiRmlsdHJ5XCIsdG9vbGJhckZpbHRlcnNMYWJlbDpcIlBva2HFvCBmaWx0cnlcIix0b29sYmFyRmlsdGVyc1Rvb2x0aXBIaWRlOlwiVWtyeWogZmlsdHJ5XCIsdG9vbGJhckZpbHRlcnNUb29sdGlwU2hvdzpcIlBva2HFvCBmaWx0cnlcIix0b29sYmFyRmlsdGVyc1Rvb2x0aXBBY3RpdmU6ZT0+XCJMaWN6YmEgYWt0eXdueWNoIGZpbHRyw7N3OiBcIitlLHRvb2xiYXJFeHBvcnQ6XCJFa3Nwb3J0dWpcIix0b29sYmFyRXhwb3J0TGFiZWw6XCJFa3Nwb3J0dWpcIix0b29sYmFyRXhwb3J0Q1NWOlwiUG9iaWVyeiBqYWtvIHBsaWsgQ1NWXCIsY29sdW1uc1BhbmVsVGV4dEZpZWxkTGFiZWw6XCJabmFqZMW6IGtvbHVtbsSZXCIsY29sdW1uc1BhbmVsVGV4dEZpZWxkUGxhY2Vob2xkZXI6XCJUeXR1xYIga29sdW1ueVwiLGNvbHVtbnNQYW5lbERyYWdJY29uTGFiZWw6XCJabWllxYQga29sZWpub8WbxIcga29sdW1uXCIsY29sdW1uc1BhbmVsU2hvd0FsbEJ1dHRvbjpcIlBva2HFvCB3c3p5c3Rrb1wiLGNvbHVtbnNQYW5lbEhpZGVBbGxCdXR0b246XCJVa3J5aiB3c3p5c3Rrb1wiLGZpbHRlclBhbmVsQWRkRmlsdGVyOlwiRG9kYWogZmlsdHJcIixmaWx0ZXJQYW5lbERlbGV0ZUljb25MYWJlbDpcIlVzdcWEXCIsZmlsdGVyUGFuZWxPcGVyYXRvcnM6XCJPcGVyYXRvclwiLGZpbHRlclBhbmVsT3BlcmF0b3JBbmQ6XCJJXCIsZmlsdGVyUGFuZWxPcGVyYXRvck9yOlwiTHViXCIsZmlsdGVyUGFuZWxDb2x1bW5zOlwiS29sdW1ueVwiLGZpbHRlclBhbmVsSW5wdXRMYWJlbDpcIldhcnRvxZvEh1wiLGZpbHRlclBhbmVsSW5wdXRQbGFjZWhvbGRlcjpcIkZpbHRyb3dhbmEgd2FydG/Fm8SHXCIsZmlsdGVyT3BlcmF0b3JDb250YWluczpcInphd2llcmFcIixmaWx0ZXJPcGVyYXRvckVxdWFsczpcInLDs3duYSBzacSZXCIsZmlsdGVyT3BlcmF0b3JTdGFydHNXaXRoOlwiemFjenluYSBzacSZIG9kXCIsZmlsdGVyT3BlcmF0b3JFbmRzV2l0aDpcImtvxYRjenkgc2nEmSBuYVwiLGZpbHRlck9wZXJhdG9ySXM6XCJyw7N3bmEgc2nEmVwiLGZpbHRlck9wZXJhdG9yTm90OlwicsOzxbxuZVwiLGZpbHRlck9wZXJhdG9yQWZ0ZXI6XCJ3acSZa3N6ZSBuacW8XCIsZmlsdGVyT3BlcmF0b3JPbk9yQWZ0ZXI6XCJ3acSZa3N6ZSBsdWIgcsOzd25lXCIsZmlsdGVyT3BlcmF0b3JCZWZvcmU6XCJtbmllanN6ZSBuacW8XCIsZmlsdGVyT3BlcmF0b3JPbk9yQmVmb3JlOlwibW5pZWpzemUgbHViIHLDs3duZVwiLGNvbHVtbk1lbnVMYWJlbDpcIk1lbnVcIixjb2x1bW5NZW51U2hvd0NvbHVtbnM6XCJQb2thxbwgd3N6eXN0a2llIGtvbHVtbnlcIixjb2x1bW5NZW51RmlsdGVyOlwiRmlsdHJcIixjb2x1bW5NZW51SGlkZUNvbHVtbjpcIlVrcnlqXCIsY29sdW1uTWVudVVuc29ydDpcIkFudWx1aiBzb3J0b3dhbmllXCIsY29sdW1uTWVudVNvcnRBc2M6XCJTb3J0dWogcm9zbsSFY29cIixjb2x1bW5NZW51U29ydERlc2M6XCJTb3J0dWogbWFsZWrEhWNvXCIsY29sdW1uSGVhZGVyRmlsdGVyc1Rvb2x0aXBBY3RpdmU6ZT0+XCJMaWN6YmEgYWt0eXdueWNoIGZpbHRyw7N3OiBcIitlLGNvbHVtbkhlYWRlckZpbHRlcnNMYWJlbDpcIlBva2HFvCBmaWx0cnlcIixjb2x1bW5IZWFkZXJTb3J0SWNvbkxhYmVsOlwiU29ydHVqXCIsZm9vdGVyUm93U2VsZWN0ZWQ6ZT0+XCJMaWN6YmEgd3licmFueWNoIHdpZXJzenk6IFwiK2UudG9Mb2NhbGVTdHJpbmcoKSxmb290ZXJUb3RhbFJvd3M6XCLFgcSFY3puYSBsaWN6YmEgd2llcnN6eTpcIn0sUGM9bm8oRGMsSyksUmM9bm8oe3Jvb3RHcmlkTGFiZWw6XCJHcmFkZVwiLG5vUm93c0xhYmVsOlwiTmVuaHVtYSBsaW5oYVwiLG5vUmVzdWx0c092ZXJsYXlMYWJlbDpcIk5lbmh1bSByZXN1bHRhZG8gZW5jb250cmFkby5cIixlcnJvck92ZXJsYXlEZWZhdWx0TGFiZWw6XCJPY29ycmV1IHVtIGVycm8uXCIsdG9vbGJhckRlbnNpdHk6XCJEZW5zaWRhZGVcIix0b29sYmFyRGVuc2l0eUxhYmVsOlwiRGVuc2lkYWRlXCIsdG9vbGJhckRlbnNpdHlDb21wYWN0OlwiQ29tcGFjdG9cIix0b29sYmFyRGVuc2l0eVN0YW5kYXJkOlwiUGFkcsOjb1wiLHRvb2xiYXJEZW5zaXR5Q29tZm9ydGFibGU6XCJDb25mb3J0w6F2ZWxcIix0b29sYmFyQ29sdW1uczpcIkNvbHVuYXNcIix0b29sYmFyQ29sdW1uc0xhYmVsOlwiRXhpYmlyIHNlbGV0b3IgZGUgY29sdW5hc1wiLHRvb2xiYXJGaWx0ZXJzOlwiRmlsdHJvc1wiLHRvb2xiYXJGaWx0ZXJzTGFiZWw6XCJFeGliaXIgZmlsdHJvc1wiLHRvb2xiYXJGaWx0ZXJzVG9vbHRpcEhpZGU6XCJPY3VsdGFyIGZpbHRyb3NcIix0b29sYmFyRmlsdGVyc1Rvb2x0aXBTaG93OlwiRXhpYmlyIGZpbHRyb3NcIix0b29sYmFyRmlsdGVyc1Rvb2x0aXBBY3RpdmU6ZT0+YCR7ZX0gJHsxIT09ZT9cImZpbHRyb3NcIjpcImZpbHRyb1wifSAkezEhPT1lP1wiYXRpdm9zXCI6XCJhdGl2b1wifWAsY29sdW1uc1BhbmVsVGV4dEZpZWxkTGFiZWw6XCJMb2NhbGl6YXIgY29sdW5hXCIsY29sdW1uc1BhbmVsVGV4dEZpZWxkUGxhY2Vob2xkZXI6XCJUw610dWxvIGRhIGNvbHVuYVwiLGNvbHVtbnNQYW5lbERyYWdJY29uTGFiZWw6XCJSZW9yZGVuYXIgQ29sdW5hXCIsY29sdW1uc1BhbmVsU2hvd0FsbEJ1dHRvbjpcIk1vc3RyYXIgdG9kYXNcIixjb2x1bW5zUGFuZWxIaWRlQWxsQnV0dG9uOlwiT2N1bHRhciB0b2Rhc1wiLGZpbHRlclBhbmVsQWRkRmlsdGVyOlwiQWRpY2lvbmFyIGZpbHRyb1wiLGZpbHRlclBhbmVsRGVsZXRlSWNvbkxhYmVsOlwiRXhjbHVpclwiLGZpbHRlclBhbmVsT3BlcmF0b3JzOlwiT3BlcmFkb3Jlc1wiLGZpbHRlclBhbmVsT3BlcmF0b3JBbmQ6XCJFXCIsZmlsdGVyUGFuZWxPcGVyYXRvck9yOlwiT3VcIixmaWx0ZXJQYW5lbENvbHVtbnM6XCJDb2x1bmFzXCIsZmlsdGVyUGFuZWxJbnB1dExhYmVsOlwiVmFsb3JcIixmaWx0ZXJQYW5lbElucHV0UGxhY2Vob2xkZXI6XCJGaWx0cmFyIHZhbG9yXCIsZmlsdGVyT3BlcmF0b3JDb250YWluczpcImNvbnTDqW1cIixmaWx0ZXJPcGVyYXRvckVxdWFsczpcIsOpIGlndWFsIGFcIixmaWx0ZXJPcGVyYXRvclN0YXJ0c1dpdGg6XCJjb21lw6dhIGNvbVwiLGZpbHRlck9wZXJhdG9yRW5kc1dpdGg6XCJ0ZXJtaW5hIGNvbVwiLGZpbHRlck9wZXJhdG9ySXM6XCLDqVwiLGZpbHRlck9wZXJhdG9yTm90OlwibsOjbyDDqVwiLGZpbHRlck9wZXJhdG9yT25PckFmdGVyOlwiZW0gb3UgYXDDs3NcIixmaWx0ZXJPcGVyYXRvckJlZm9yZTpcImFudGVzIGRlXCIsZmlsdGVyT3BlcmF0b3JPbk9yQmVmb3JlOlwiZW0gb3UgYW50ZXMgZGVcIixmaWx0ZXJPcGVyYXRvckFmdGVyOlwiYXDDs3NcIixjb2x1bW5NZW51TGFiZWw6XCJNZW51XCIsY29sdW1uTWVudVNob3dDb2x1bW5zOlwiRXhpYmlyIGNvbHVuYXNcIixjb2x1bW5NZW51RmlsdGVyOlwiRmlsdHJhclwiLGNvbHVtbk1lbnVIaWRlQ29sdW1uOlwiT2N1bHRhclwiLGNvbHVtbk1lbnVVbnNvcnQ6XCJEZXNmYXplciBvcmRlbmHDp8Ojb1wiLGNvbHVtbk1lbnVTb3J0QXNjOlwiT3JkZW5hciBkbyBtZW5vciBwYXJhIG8gbWFpb3JcIixjb2x1bW5NZW51U29ydERlc2M6XCJPcmRlbmFyIGRvIG1haW9yIHBhcmEgbyBtZW5vclwiLGNvbHVtbkhlYWRlckZpbHRlcnNUb29sdGlwQWN0aXZlOmU9PmAke2V9ICR7MSE9PWU/XCJmaWx0cm9zXCI6XCJmaWx0cm9cIn0gJHsxIT09ZT9cImF0aXZvc1wiOlwiYXRpdm9cIn1gLGNvbHVtbkhlYWRlckZpbHRlcnNMYWJlbDpcIkV4aWJpciBGaWx0cm9zXCIsY29sdW1uSGVhZGVyU29ydEljb25MYWJlbDpcIk9yZGVuYXJcIixmb290ZXJSb3dTZWxlY3RlZDplPT4xIT09ZT9lLnRvTG9jYWxlU3RyaW5nKCkrXCIgbGluaGFzIHNlbGVjaW9uYWRhc1wiOmUudG9Mb2NhbGVTdHJpbmcoKStcIiBsaW5oYSBzZWxlY2lvbmFkYVwiLGZvb3RlclRvdGFsUm93czpcIlRvdGFsIGRlIGxpbmhhczpcIixjaGVja2JveFNlbGVjdGlvbkhlYWRlck5hbWU6XCJTZWxlw6fDo29cIixib29sZWFuQ2VsbFRydWVMYWJlbDpcInNpbVwiLGJvb2xlYW5DZWxsRmFsc2VMYWJlbDpcIm7Do29cIn0sWiksRmM9e25vUm93c0xhYmVsOlwi0J3QtdGCINGB0YLRgNC+0LpcIixlcnJvck92ZXJsYXlEZWZhdWx0TGFiZWw6XCLQntCx0L3QsNGA0YPQttC10L3QsCDQvtGI0LjQsdC60LAuXCIsdG9vbGJhckRlbnNpdHk6XCLQktGL0YHQvtGC0LAg0YHRgtGA0L7QutC4XCIsdG9vbGJhckRlbnNpdHlMYWJlbDpcItCS0YvRgdC+0YLQsCDRgdGC0YDQvtC60LhcIix0b29sYmFyRGVuc2l0eUNvbXBhY3Q6XCLQmtC+0LzQv9Cw0LrRgtC90LDRj1wiLHRvb2xiYXJEZW5zaXR5U3RhbmRhcmQ6XCLQodGC0LDQvdC00LDRgNGC0L3QsNGPXCIsdG9vbGJhckRlbnNpdHlDb21mb3J0YWJsZTpcItCa0L7QvNGE0L7RgNGC0L3QsNGPXCIsdG9vbGJhckNvbHVtbnM6XCLQodGC0L7Qu9Cx0YbRi1wiLHRvb2xiYXJDb2x1bW5zTGFiZWw6XCLQktGL0LTQtdC70LjRgtC1INGB0YLQvtC70LHRhtGLXCIsdG9vbGJhckZpbHRlcnM6XCLQpNC40LvRjNGC0YDRi1wiLHRvb2xiYXJGaWx0ZXJzTGFiZWw6XCLQn9C+0LrQsNC30LDRgtGMINGE0LjQu9GM0YLRgNGLXCIsdG9vbGJhckZpbHRlcnNUb29sdGlwSGlkZTpcItCh0LrRgNGL0YLRjCDRhNC40LvRjNGC0YDRi1wiLHRvb2xiYXJGaWx0ZXJzVG9vbHRpcFNob3c6XCLQn9C+0LrQsNC30LDRgtGMINGE0LjQu9GM0YLRgNGLXCIsdG9vbGJhckZpbHRlcnNUb29sdGlwQWN0aXZlOmU9PntsZXQgdD1cItCw0LrRgtC40LLQvdGL0YUg0YTQuNC70YzRgtGA0L7QslwiO2NvbnN0IHI9ZSUxMDtyZXR1cm4gcj4xJiZyPDU/dD1cItCw0LrRgtC40LLQvdGL0YUg0YTQuNC70YzRgtGA0LBcIjoxPT09ciYmKHQ9XCLQsNC60YLQuNCy0L3Ri9C5INGE0LjQu9GM0YLRgFwiKSxgJHtlfSAke3R9YH0sdG9vbGJhckV4cG9ydDpcItCt0LrRgdC/0L7RgNGCXCIsdG9vbGJhckV4cG9ydExhYmVsOlwi0K3QutGB0L/QvtGA0YJcIix0b29sYmFyRXhwb3J0Q1NWOlwi0KHQutCw0YfQsNGC0Ywg0LIg0YTQvtGA0LzQsNGC0LUgQ1NWXCIsY29sdW1uc1BhbmVsVGV4dEZpZWxkTGFiZWw6XCLQndCw0LnRgtC4INGB0YLQvtC70LHQtdGGXCIsY29sdW1uc1BhbmVsVGV4dEZpZWxkUGxhY2Vob2xkZXI6XCLQl9Cw0LPQvtC70L7QstC+0Log0YHRgtC+0LvQsdGG0LBcIixjb2x1bW5zUGFuZWxEcmFnSWNvbkxhYmVsOlwi0JjQt9C80LXQvdC40YLRjCDQv9C+0YDRj9C00L7QuiDRgdGC0L7Qu9Cx0YbQsFwiLGNvbHVtbnNQYW5lbFNob3dBbGxCdXR0b246XCLQn9C+0LrQsNC30LDRgtGMINCy0YHQtVwiLGNvbHVtbnNQYW5lbEhpZGVBbGxCdXR0b246XCLQodC60YDRi9GC0Ywg0LLRgdC1XCIsZmlsdGVyUGFuZWxBZGRGaWx0ZXI6XCLQlNC+0LHQsNCy0LjRgtGMINGE0LjQu9GM0YLRgFwiLGZpbHRlclBhbmVsRGVsZXRlSWNvbkxhYmVsOlwi0KPQtNCw0LvQuNGC0YxcIixmaWx0ZXJQYW5lbE9wZXJhdG9yczpcItCe0L/QtdGA0LDRgtC+0YDRi1wiLGZpbHRlclBhbmVsT3BlcmF0b3JBbmQ6XCLQmFwiLGZpbHRlclBhbmVsT3BlcmF0b3JPcjpcItCY0LvQuFwiLGZpbHRlclBhbmVsQ29sdW1uczpcItCh0YLQvtC70LHRhtGLXCIsZmlsdGVyUGFuZWxJbnB1dExhYmVsOlwi0JfQvdCw0YfQtdC90LjQtVwiLGZpbHRlclBhbmVsSW5wdXRQbGFjZWhvbGRlcjpcItCX0L3QsNGH0LXQvdC40LUg0YTQuNC70YzRgtGA0LBcIixmaWx0ZXJPcGVyYXRvckNvbnRhaW5zOlwi0YHQvtC00LXRgNC20LjRglwiLGZpbHRlck9wZXJhdG9yRXF1YWxzOlwi0YDQsNCy0LXQvVwiLGZpbHRlck9wZXJhdG9yU3RhcnRzV2l0aDpcItC90LDRh9C40L3QsNC10YLRgdGPINGBXCIsZmlsdGVyT3BlcmF0b3JFbmRzV2l0aDpcItC30LDQutCw0L3Rh9C40LLQsNC10YLRgdGPINC90LBcIixmaWx0ZXJPcGVyYXRvcklzOlwi0YDQsNCy0LXQvVwiLGZpbHRlck9wZXJhdG9yTm90Olwi0L3QtSDRgNCw0LLQtdC9XCIsZmlsdGVyT3BlcmF0b3JBZnRlcjpcItCx0L7Qu9GM0YjQtSDRh9C10LxcIixmaWx0ZXJPcGVyYXRvck9uT3JBZnRlcjpcItCx0L7Qu9GM0YjQtSDQuNC70Lgg0YDQsNCy0L3QvlwiLGZpbHRlck9wZXJhdG9yQmVmb3JlOlwi0LzQtdC90YzRiNC1INGH0LXQvFwiLGZpbHRlck9wZXJhdG9yT25PckJlZm9yZTpcItC80LXQvdGM0YjQtSDQuNC70Lgg0YDQsNCy0L3QvlwiLGZpbHRlclZhbHVlQW55Olwi0LvRjtCx0L7QuVwiLGZpbHRlclZhbHVlVHJ1ZTpcItC40YHRgtC40L3QsFwiLGZpbHRlclZhbHVlRmFsc2U6XCLQu9C+0LbRjFwiLGNvbHVtbk1lbnVMYWJlbDpcItCc0LXQvdGOXCIsY29sdW1uTWVudVNob3dDb2x1bW5zOlwi0J/QvtC60LDQt9Cw0YLRjCDRgdGC0L7Qu9Cx0YbRi1wiLGNvbHVtbk1lbnVGaWx0ZXI6XCLQpNC40LvRjNGC0YBcIixjb2x1bW5NZW51SGlkZUNvbHVtbjpcItCh0LrRgNGL0YLRjFwiLGNvbHVtbk1lbnVVbnNvcnQ6XCLQntGC0LzQtdC90LjRgtGMINGB0L7RgNGC0LjRgNC+0LLQutGDXCIsY29sdW1uTWVudVNvcnRBc2M6XCLQodC+0YDRgtC40YDQvtCy0LDRgtGMINC/0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjlwiLGNvbHVtbk1lbnVTb3J0RGVzYzpcItCh0L7RgNGC0LjRgNC+0LLQsNGC0Ywg0L/QviDRg9Cx0YvQstCw0L3QuNGOXCIsY29sdW1uSGVhZGVyRmlsdGVyc1Rvb2x0aXBBY3RpdmU6ZT0+e2xldCB0PVwi0LDQutGC0LjQstC90YvRhSDRhNC40LvRjNGC0YDQvtCyXCI7Y29uc3Qgcj1lJTEwO3JldHVybiByPjEmJnI8NT90PVwi0LDQutGC0LjQstC90YvRhSDRhNC40LvRjNGC0YDQsFwiOjE9PT1yJiYodD1cItCw0LrRgtC40LLQvdGL0Lkg0YTQuNC70YzRgtGAXCIpLGAke2V9ICR7dH1gfSxjb2x1bW5IZWFkZXJGaWx0ZXJzTGFiZWw6XCLQn9C+0LrQsNC30LDRgtGMINGE0LjQu9GM0YLRgNGLXCIsY29sdW1uSGVhZGVyU29ydEljb25MYWJlbDpcItCh0L7RgNGC0LjRgNC+0LLQsNGC0YxcIixmb290ZXJSb3dTZWxlY3RlZDplPT57bGV0IHQ9XCLRgdGC0YDQvtC6INCy0YvQsdGA0LDQvdC+XCI7Y29uc3Qgcj1lJTEwO3JldHVybiByPjEmJnI8NT90PVwi0YHRgtGA0L7QutC4INCy0YvQsdGA0LDQvdGLXCI6MT09PXImJih0PVwi0YHRgtGA0L7QutCwINCy0YvQsdGA0LDQvdCwXCIpLGAke2V9ICR7dH1gfSxmb290ZXJUb3RhbFJvd3M6XCLQktGB0LXQs9C+INGB0YLRgNC+0Lo6XCIsY2hlY2tib3hTZWxlY3Rpb25IZWFkZXJOYW1lOlwi0JLRi9Cx0L7RgCDRhNC70LDQttC60LBcIixib29sZWFuQ2VsbFRydWVMYWJlbDpcItC40YHRgtC40L3QsFwiLGJvb2xlYW5DZWxsRmFsc2VMYWJlbDpcItC70L7QttGMXCJ9LExjPW5vKEZjLFgpLGpjPXtyb290R3JpZExhYmVsOlwi0YHRltGC0LrQsFwiLG5vUm93c0xhYmVsOlwi0J3QtdC80LDRlCDRgNGP0LTQutGW0LJcIixlcnJvck92ZXJsYXlEZWZhdWx0TGFiZWw6XCLQktC40Y/QstC70LXQvdC+INC/0L7QvNC40LvQutGDLlwiLHRvb2xiYXJEZW5zaXR5Olwi0JLQuNGB0L7RgtCwINGA0Y/QtNC60LBcIix0b29sYmFyRGVuc2l0eUxhYmVsOlwi0JLQuNGB0L7RgtCwINGA0Y/QtNC60LBcIix0b29sYmFyRGVuc2l0eUNvbXBhY3Q6XCLQmtC+0LzQv9Cw0LrRgtC90LjQuVwiLHRvb2xiYXJEZW5zaXR5U3RhbmRhcmQ6XCLQodGC0LDQvdC00LDRgNGC0L3QuNC5XCIsdG9vbGJhckRlbnNpdHlDb21mb3J0YWJsZTpcItCa0L7QvNGE0L7RgNGC0L3QuNC5XCIsdG9vbGJhckNvbHVtbnM6XCLQodGC0L7QstC/0YbRllwiLHRvb2xiYXJDb2x1bW5zTGFiZWw6XCLQktC40LTRltC70ZbRgtGMINGB0YLQvtCy0L/RhtGWXCIsdG9vbGJhckZpbHRlcnM6XCLQpNGW0LvRjNGC0YDQuFwiLHRvb2xiYXJGaWx0ZXJzTGFiZWw6XCLQn9C+0LrQsNC30LDRgtC4INGE0ZbQu9GM0YLRgNC4XCIsdG9vbGJhckZpbHRlcnNUb29sdGlwSGlkZTpcItCh0YXQvtCy0LDRgtC4INGE0ZbQu9GM0YLRgNC4XCIsdG9vbGJhckZpbHRlcnNUb29sdGlwU2hvdzpcItCf0L7QutCw0LfQsNGC0Lgg0YTRltC70YzRgtGA0LhcIix0b29sYmFyRmlsdGVyc1Rvb2x0aXBBY3RpdmU6ZT0+MSE9PWU/ZStcIiDQsNC60YLQuNCy0L3RliDRhNGW0LvRjNGC0YDQuFwiOmUrXCIg0LDQutGC0LjQstC90LjQuSDRhNGW0LvRjNGC0YBcIix0b29sYmFyRXhwb3J0Olwi0JXQutGB0L/QvtGA0YJcIix0b29sYmFyRXhwb3J0TGFiZWw6XCLQldC60YHQv9C+0YDRglwiLHRvb2xiYXJFeHBvcnRDU1Y6XCLQl9Cw0LLQsNC90YLQsNC20LjRgtC4INGDINGE0L7RgNC80LDRgtGWIENTVlwiLGNvbHVtbnNQYW5lbFRleHRGaWVsZExhYmVsOlwi0JfQvdCw0LnRgtC4INGB0YLQvtCy0L/QtdGG0YxcIixjb2x1bW5zUGFuZWxUZXh0RmllbGRQbGFjZWhvbGRlcjpcItCX0LDQs9C+0LvQvtCy0L7QuiDRgdGC0L7QstC/0YbRj1wiLGNvbHVtbnNQYW5lbERyYWdJY29uTGFiZWw6XCLQl9C80ZbQvdC40YLQuCDQv9C+0YDRj9C00L7QuiDRgdGC0L7QstC/0YbRj1wiLGNvbHVtbnNQYW5lbFNob3dBbGxCdXR0b246XCLQn9C+0LrQsNC30LDRgtC4INGD0YHRllwiLGNvbHVtbnNQYW5lbEhpZGVBbGxCdXR0b246XCLQodGF0L7QstCw0YLQuCDRg9GB0ZZcIixmaWx0ZXJQYW5lbEFkZEZpbHRlcjpcItCU0L7QtNCw0YLQuCDRhNGW0LvRjNGC0YBcIixmaWx0ZXJQYW5lbERlbGV0ZUljb25MYWJlbDpcItCS0LjQtNCw0LvQuNGC0LhcIixmaWx0ZXJQYW5lbE9wZXJhdG9yczpcItCe0L/QtdGA0LDRgtC+0YDQuFwiLGZpbHRlclBhbmVsT3BlcmF0b3JBbmQ6XCLQhlwiLGZpbHRlclBhbmVsT3BlcmF0b3JPcjpcItCQ0LHQvlwiLGZpbHRlclBhbmVsQ29sdW1uczpcItCh0YLQvtCy0L/RhtGWXCIsZmlsdGVyUGFuZWxJbnB1dExhYmVsOlwi0JfQvdCw0YfQtdC90L3Rj1wiLGZpbHRlclBhbmVsSW5wdXRQbGFjZWhvbGRlcjpcItCX0L3QsNGH0LXQvdC90Y8g0YTRltC70YzRgtGA0LBcIixmaWx0ZXJPcGVyYXRvckNvbnRhaW5zOlwi0LzRltGB0YLQuNGC0YxcIixmaWx0ZXJPcGVyYXRvckVxdWFsczpcItC00L7RgNGW0LLQvdGO0ZRcIixmaWx0ZXJPcGVyYXRvclN0YXJ0c1dpdGg6XCLQv9C+0YfQuNC90LDRlNGC0YzRgdGPINC3XCIsZmlsdGVyT3BlcmF0b3JFbmRzV2l0aDpcItC30LDQutGW0L3Rh9GD0ZTRgtGM0YHRjyDQvdCwXCIsZmlsdGVyT3BlcmF0b3JJczpcItC00L7RgNGW0LLQvdGO0ZRcIixmaWx0ZXJPcGVyYXRvck5vdDpcItC90LVcIixmaWx0ZXJPcGVyYXRvckFmdGVyOlwi0LHRltC70YzRiNC1INC90ZbQtlwiLGZpbHRlck9wZXJhdG9yT25PckFmdGVyOlwi0LHRltC70YzRiNC1INCw0LHQviDQtNC+0YDRltCy0L3RjtGUXCIsZmlsdGVyT3BlcmF0b3JCZWZvcmU6XCLQvNC10L3RiNC1INC90ZbQtlwiLGZpbHRlck9wZXJhdG9yT25PckJlZm9yZTpcItC80LXQvdGI0LUg0LDQsdC+INC00L7RgNGW0LLQvdGO0ZRcIixmaWx0ZXJWYWx1ZUFueTpcItCx0YPQtNGMLdGP0LrQuNC5XCIsZmlsdGVyVmFsdWVUcnVlOlwi0L/RgNCw0LLQtNCwXCIsZmlsdGVyVmFsdWVGYWxzZTpcItC/0L7QvNC40LvQutC+0LLQuNC5XCIsY29sdW1uTWVudUxhYmVsOlwi0JzQtdC90Y5cIixjb2x1bW5NZW51U2hvd0NvbHVtbnM6XCLQn9C+0LrQsNC30LDRgtC4INGB0YLQvtCy0L/RhtGWXCIsY29sdW1uTWVudUZpbHRlcjpcItCk0ZbQu9GM0YLRgFwiLGNvbHVtbk1lbnVIaWRlQ29sdW1uOlwi0KHRhdC+0LLQsNGC0LhcIixjb2x1bW5NZW51VW5zb3J0Olwi0KHQutCw0YHRg9Cy0LDRgtC4INGB0L7RgNGC0YPQstCw0L3QvdGPXCIsY29sdW1uTWVudVNvcnRBc2M6XCLQodC+0YDRgtGD0LLQsNGC0Lgg0LfQsCDQt9GA0L7RgdGC0LDQvdC90Y/QvFwiLGNvbHVtbk1lbnVTb3J0RGVzYzpcItCh0L7RgNGC0YPQstCw0YLQuCDQt9CwINGB0L/QsNC00LDQvdC90Y/QvFwiLGNvbHVtbkhlYWRlckZpbHRlcnNUb29sdGlwQWN0aXZlOmU9PjEhPT1lP2UrXCIg0LDQutGC0LjQstC90ZYg0YTRltC70YzRgtGA0LhcIjplK1wiINCw0LrRgtC40LLQvdC40Lkg0YTRltC70YzRgtGAXCIsY29sdW1uSGVhZGVyRmlsdGVyc0xhYmVsOlwi0J/QvtC60LDQt9Cw0YLQuCDRhNGW0LvRjNGC0YDQuFwiLGNvbHVtbkhlYWRlclNvcnRJY29uTGFiZWw6XCLQodC+0YDRgtGD0LLQsNGC0LhcIixmb290ZXJSb3dTZWxlY3RlZDplPT4xIT09ZT9lLnRvTG9jYWxlU3RyaW5nKCkrXCIg0LLQuNCx0YDQsNC90ZYg0YDRj9C00LrQuFwiOmUudG9Mb2NhbGVTdHJpbmcoKStcIiDQstC40LHRgNCw0L3QuNC5INGA0Y/QtNC+0LpcIixmb290ZXJUb3RhbFJvd3M6XCLQktGB0YzQvtCz0L4g0YDRj9C00LrRltCyOlwiLGNoZWNrYm94U2VsZWN0aW9uSGVhZGVyTmFtZTpcItCS0LjQsdGW0YAg0L/RgNCw0L/QvtGA0YbRj1wiLGJvb2xlYW5DZWxsVHJ1ZUxhYmVsOlwi0L/RgNCw0LLQtNCwXCIsYm9vbGVhbkNlbGxGYWxzZUxhYmVsOlwi0L/QvtC80LjQu9C60L7QstC40LlcIn0semM9bm8oamMscSk7Y2xhc3MgVGMgZXh0ZW5kcyBzLkNvbXBvbmVudHtzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGUpe3JldHVybntoYXNFcnJvcjohMCxlcnJvcjplfX1jb21wb25lbnREaWRDYXRjaChlLHQpe3RoaXMucHJvcHMuYXBpLmN1cnJlbnQmJih0aGlzLmxvZ0Vycm9yKGUpLHRoaXMucHJvcHMuYXBpLmN1cnJlbnQuc2hvd0Vycm9yKHtlcnJvcjplLGVycm9ySW5mbzp0fSkpfWxvZ0Vycm9yKGUsdCl7dGhpcy5wcm9wcy5sb2dnZXIuZXJyb3IoYEFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQuIEVycm9yOiAke2UmJmUubWVzc2FnZX0uIGAsZSx0KX1yZW5kZXIoKXt2YXIgZTtyZXR1cm4gdGhpcy5wcm9wcy5oYXNFcnJvcnx8KG51bGw9PT0oZT10aGlzLnN0YXRlKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5oYXNFcnJvcik/dGhpcy5wcm9wcy5yZW5kZXIodGhpcy5wcm9wcy5jb21wb25lbnRQcm9wc3x8dGhpcy5zdGF0ZSk6dGhpcy5wcm9wcy5jaGlsZHJlbn19ZnVuY3Rpb24gQWMoZSl7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJNdWlEYXRhR3JpZC1tYWluXCJ9LGUuY2hpbGRyZW4pfWZ1bmN0aW9uIF9jKGUsdCl7c3dpdGNoKHQudHlwZSl7Y2FzZVwib3B0aW9uczo6VVBEQVRFXCI6cmV0dXJuIHJvKGUsdC5wYXlsb2FkKTtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihgTWF0ZXJpYWwtVUk6IEFjdGlvbiAke3QudHlwZX0gbm90IGZvdW5kLmApfX1jb25zdCBHYz1lPT57aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe2NvbnN0IHQ9ZS5yZXBsYWNlKC9cIi9nLCdcIlwiJyk7cmV0dXJuIHQuaW5jbHVkZXMoXCIsXCIpP2BcIiR7dH1cImA6dH1yZXR1cm4gZX07ZnVuY3Rpb24gSGMoZSx0LHIsbil7bGV0IGw9Wy4uLnQua2V5cygpXTtjb25zdCBvPU9iamVjdC5rZXlzKHIpO28ubGVuZ3RoJiYobD1sLmZpbHRlcigoZT0+by5pbmNsdWRlcyhcIlwiK2UpKSkpO3JldHVybmAke2UuZmlsdGVyKChlPT5lLmZpZWxkIT09cmkuZmllbGQpKS5tYXAoKGU9PkdjKGUuaGVhZGVyTmFtZXx8ZS5maWVsZCkpKS50b1N0cmluZygpK1wiXFxyXFxuXCJ9JHtsLnJlZHVjZSgoKHQscik9PmAke3R9JHtmdW5jdGlvbihlLHQscil7Y29uc3Qgbj1bXTtyZXR1cm4gdC5mb3JFYWNoKCh0PT50LmZpZWxkIT09cmkuZmllbGQmJm4ucHVzaChHYyhyKGUsdC5maWVsZCkpKSkpLG59KHIsZSxuKX1cXHJcXG5gKSxcIlwiKS50cmltKCl9YC50cmltKCl9Y29uc3QgTmM9cy5mb3J3YXJkUmVmKChmdW5jdGlvbihlLHQpe3ZhciByLG4sbCxhLGMsdTtjb25zdCBkPXMudXNlUmVmKG51bGwpLHA9byhkLHQpLG09cy51c2VSZWYobnVsbCksZj1zLnVzZVJlZihudWxsKSxnPXMudXNlUmVmKG51bGwpLGI9cy51c2VSZWYobnVsbCksaD1zLnVzZVJlZihudWxsKSxDPXMudXNlUmVmKG51bGwpLHY9aWMoZS5hcGlSZWYpLHc9ZWEodixqYSksTz1lYSh2LEthKSx5PWZ1bmN0aW9uKGUsdCl7dmFyIHIsbjtjb25zdCBsPU1vKFwidXNlT3B0aW9uc1Byb3BcIiksW28sYV09cy51c2VTdGF0ZSgwKSxjPXMudXNlQ2FsbGJhY2soKCgpPT57dmFyIHQscjtpZihudWxsPT09KHI9bnVsbD09PSh0PWUuY3VycmVudCl8fHZvaWQgMD09PXQ/dm9pZCAwOnQucm9vdEVsZW1lbnRSZWYpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLmN1cnJlbnQpe2NvbnN0IHQ9aW8oaShlLmN1cnJlbnQucm9vdEVsZW1lbnRSZWYuY3VycmVudCkpO3JldHVybiBsLmRlYnVnKGBEZXRlY3RlZCBTY3JvbGwgQmFyIHNpemUgJHt0fS5gKSx0fXJldHVybiAwfSksW2UsbCxudWxsPT09KG49bnVsbD09PShyPWUuY3VycmVudCl8fHZvaWQgMD09PXI/dm9pZCAwOnIucm9vdEVsZW1lbnRSZWYpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLmN1cnJlbnRdKTtvbygoKCk9PnthKGMoKSl9KSxbY10pO2NvbnN0IHU9cy51c2VNZW1vKCgoKT0+T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQpLHtsb2NhbGVUZXh0Ok9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxEbyksdC5sb2NhbGVUZXh0KSxzY3JvbGxiYXJTaXplOm51bGw9PXQuc2Nyb2xsYmFyU2l6ZT9vOnQuc2Nyb2xsYmFyU2l6ZXx8MH0pKSxbbyx0XSkse2dyaWRTdGF0ZTpkLGRpc3BhdGNoOnB9PV9zKGUsXCJvcHRpb25zXCIsX2MsT2JqZWN0LmFzc2lnbih7fSxGbykpLG09cy51c2VDYWxsYmFjaygoZT0+e3Aoe3R5cGU6XCJvcHRpb25zOjpVUERBVEVcIixwYXlsb2FkOmV9KX0pLFtwXSk7cmV0dXJuIHMudXNlRWZmZWN0KCgoKT0+e20odSl9KSxbdSxtXSksZC5vcHRpb25zfSh2LGUpO3hvKHkubG9nZ2VyLHkubG9nTGV2ZWwpO2NvbnN0IEU9TW8oXCJHcmlkQ29tcG9uZW50XCIpO0NjKGQsYix2KTtjb25zdCBTPWZ1bmN0aW9uKGUsdCl7Y29uc3RbcixuXT1zLnVzZVN0YXRlKG51bGwpLGw9ZT0+e24oZSl9O3JldHVybiBzLnVzZUVmZmVjdCgoKCk9PmUuY3VycmVudC5zdWJzY3JpYmVFdmVudChcImNvbXBvbmVudEVycm9yXCIsbCkpLFtlXSkscy51c2VFZmZlY3QoKCgpPT57ZS5jdXJyZW50LnNob3dFcnJvcih0LmVycm9yKX0pLFtlLHQuZXJyb3JdKSxyfSh2LGUpOyFmdW5jdGlvbihlLHQpe3ZhciByO2NvbnN0IG49TW8oXCJ1c2VFdmVudHNcIiksbD1lYSh0LEVhKSxvPXMudXNlQ2FsbGJhY2soKGU9PiguLi5yKT0+dC5jdXJyZW50LnB1Ymxpc2hFdmVudChlLC4uLnIpKSxbdF0pLGE9cy51c2VDYWxsYmFjaygoZT0+e3QuY3VycmVudC5wdWJsaXNoRXZlbnQoXCJmb2N1c291dFwiLGUpLG51bGw9PT1lLnJlbGF0ZWRUYXJnZXQmJnQuY3VycmVudC5wdWJsaXNoRXZlbnQoXCJncmlkRm9jdXNPdXRcIixlKX0pLFt0XSksaT1zLnVzZUNhbGxiYWNrKCgoKT0+e3ZhciBlO3JldHVybiB0LmN1cnJlbnQucHVibGlzaEV2ZW50KFwicmVzaXplXCIse2NvbnRhaW5lclNpemU6bnVsbD09PShlPXQuY3VycmVudC5nZXRTdGF0ZSgpLmNvbnRhaW5lclNpemVzKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS53aW5kb3dTaXplc30pfSksW3RdKTtJbyh0LHtyZXNpemU6aX0sXCJHcmlkRXZlbnRzQXBpXCIpLHhpKHQsXCJjb2x1bW5IZWFkZXJDbGlja1wiLGwub25Db2x1bW5IZWFkZXJDbGljaykseGkodCxcImNvbHVtbkhlYWRlckRvdWJsZUNsaWNrXCIsbC5vbkNvbHVtbkhlYWRlckRvdWJsZUNsaWNrKSx4aSh0LFwiY29sdW1uSGVhZGVyT3ZlclwiLGwub25Db2x1bW5IZWFkZXJPdmVyKSx4aSh0LFwiY29sdW1uSGVhZGVyT3V0XCIsbC5vbkNvbHVtbkhlYWRlck91dCkseGkodCxcImNvbHVtbkhlYWRlckVudGVyXCIsbC5vbkNvbHVtbkhlYWRlckVudGVyKSx4aSh0LFwiY29sdW1uSGVhZGVyTGVhdmVcIixsLm9uQ29sdW1uSGVhZGVyTGVhdmUpLHhpKHQsXCJjb2x1bW5PcmRlckNoYW5nZVwiLGwub25Db2x1bW5PcmRlckNoYW5nZSkseGkodCxcImNlbGxDbGlja1wiLGwub25DZWxsQ2xpY2spLHhpKHQsXCJjZWxsRG91YmxlQ2xpY2tcIixsLm9uQ2VsbERvdWJsZUNsaWNrKSx4aSh0LFwiY2VsbE92ZXJcIixsLm9uQ2VsbE92ZXIpLHhpKHQsXCJjZWxsT3V0XCIsbC5vbkNlbGxPdXQpLHhpKHQsXCJjZWxsRW50ZXJcIixsLm9uQ2VsbEVudGVyKSx4aSh0LFwiY2VsbExlYXZlXCIsbC5vbkNlbGxMZWF2ZSkseGkodCxcImNlbGxLZXlkb3duXCIsbC5vbkNlbGxLZXlEb3duKSx4aSh0LFwiY2VsbEJsdXJcIixsLm9uQ2VsbEJsdXIpLHhpKHQsXCJyb3dEb3VibGVDbGlja1wiLGwub25Sb3dEb3VibGVDbGljaykseGkodCxcInJvd0NsaWNrXCIsbC5vblJvd0NsaWNrKSx4aSh0LFwicm93T3ZlclwiLGwub25Sb3dPdmVyKSx4aSh0LFwicm93T3V0XCIsbC5vblJvd091dCkseGkodCxcInJvd0VudGVyXCIsbC5vblJvd0VudGVyKSx4aSh0LFwicm93TGVhdmVcIixsLm9uUm93TGVhdmUpLHhpKHQsXCJyZXNpemVcIixsLm9uUmVzaXplKSx4aSh0LFwiY29tcG9uZW50RXJyb3JcIixsLm9uRXJyb3IpLHhpKHQsXCJzdGF0ZUNoYW5nZVwiLGwub25TdGF0ZUNoYW5nZSkscy51c2VFZmZlY3QoKCgpPT57dmFyIHI7aWYoZSYmZS5jdXJyZW50JiYobnVsbD09PShyPXQuY3VycmVudCl8fHZvaWQgMD09PXI/dm9pZCAwOnIuaXNJbml0aWFsaXNlZCkpe24uZGVidWcoXCJCaW5kaW5nIGV2ZW50cyBsaXN0ZW5lcnNcIik7Y29uc3Qgcj1vKFwia2V5ZG93blwiKSxsPW8oXCJrZXl1cFwiKSxpPWUuY3VycmVudDtpLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLGEpLGkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixyKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLGwpLHQuY3VycmVudC5pc0luaXRpYWxpc2VkPSEwO2NvbnN0IHM9dC5jdXJyZW50O3JldHVybigpPT57bi5kZWJ1ZyhcIkNsZWFyaW5nIGFsbCBldmVudHMgbGlzdGVuZXJzXCIpLHMucHVibGlzaEV2ZW50KFwidW5tb3VudFwiKSxpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLGEpLGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixyKSxpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLGwpLHMucmVtb3ZlQWxsTGlzdGVuZXJzKCl9fX0pLFtlLG51bGw9PT0ocj10LmN1cnJlbnQpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLmlzSW5pdGlhbGlzZWQsbyxuLGEsdF0pfShkLHYpLChlPT57Y29uc3R7bG9jYWxlVGV4dDp0fT1lYShlLEVhKTtJbyhlLHtnZXRMb2NhbGVUZXh0OnMudXNlQ2FsbGJhY2soKGU9PntpZihudWxsPT10W2VdKXRocm93IG5ldyBFcnJvcihgTWlzc2luZyB0cmFuc2xhdGlvbiBmb3Iga2V5ICR7ZX0uYCk7cmV0dXJuIHRbZV19KSxbdF0pfSxcIkxvY2FsZVRleHRBcGlcIil9KSh2KTtjb25zdCB4PWZ1bmN0aW9uKGUpe2NvbnN0IHQ9TW8oXCJ1c2VSZXNpemVDb250YWluZXJcIikse2F1dG9IZWlnaHQ6cn09ZWEoZSxFYSk7cmV0dXJuIHMudXNlQ2FsbGJhY2soKG49Pntjb25zdCBsPS9qc2RvbS8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7MCE9PW4uaGVpZ2h0fHxyfHxsfHx0Lndhcm4oW1wiVGhlIHBhcmVudCBvZiB0aGUgZ3JpZCBoYXMgYW4gZW1wdHkgaGVpZ2h0LlwiLFwiWW91IG5lZWQgdG8gbWFrZSBzdXJlIHRoZSBjb250YWluZXIgaGFzIGFuIGludHJpbnNpYyBoZWlnaHQuXCIsXCJUaGUgZ3JpZCBkaXNwbGF5cyB3aXRoIGEgaGVpZ2h0IG9mIDBweC5cIixcIlwiLFwiWW91IGNhbiBmaW5kIGEgc29sdXRpb24gaW4gdGhlIGRvY3M6XCIsXCJodHRwczovL21hdGVyaWFsLXVpLmNvbS9jb21wb25lbnRzL2RhdGEtZ3JpZC9yZW5kZXJpbmcvI2xheW91dFwiXS5qb2luKFwiXFxuXCIpKSwwIT09bi53aWR0aHx8bHx8dC53YXJuKFtcIlRoZSBwYXJlbnQgb2YgdGhlIGdyaWQgaGFzIGFuIGVtcHR5IHdpZHRoLlwiLFwiWW91IG5lZWQgdG8gbWFrZSBzdXJlIHRoZSBjb250YWluZXIgaGFzIGFuIGludHJpbnNpYyB3aWR0aC5cIixcIlRoZSBncmlkIGRpc3BsYXlzIHdpdGggYSB3aWR0aCBvZiAwcHguXCIsXCJcIixcIllvdSBjYW4gZmluZCBhIHNvbHV0aW9uIGluIHRoZSBkb2NzOlwiLFwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vY29tcG9uZW50cy9kYXRhLWdyaWQvcmVuZGVyaW5nLyNsYXlvdXRcIl0uam9pbihcIlxcblwiKSksdC5pbmZvKFwicmVzaXplZC4uLlwiLG4pLGUuY3VycmVudC5yZXNpemUoKX0pLFt0LGUscl0pfSh2KTtBcyhlLmNvbHVtbnMsdiksWnModiksSnModixlLnJvd3MsZS5nZXRSb3dJZCksUXModiksSHModiksQnMoMCx2KSwkcygwLHYpLGVjKHYpLHRjKHYsZS5yb3dzKSxGcyh2KSxVcyh2KSxHcyh2LGUucm93cyksdmMoaCx2KSwoZT0+e2NvbnN0IHQ9TW8oXCJ1c2VEZW5zaXR5XCIpLHtkZW5zaXR5OnIscm93SGVpZ2h0Om4saGVhZGVySGVpZ2h0Omx9PWVhKGUsRWEpLFssbyxhXT1RbyhlKSxpPXMudXNlQ2FsbGJhY2soKChlLHQscik9Pntzd2l0Y2goZSl7Y2FzZSBQby5Db21wYWN0OnJldHVybnt2YWx1ZTplLGhlYWRlckhlaWdodDpNYXRoLmZsb29yKC43KnQpLHJvd0hlaWdodDpNYXRoLmZsb29yKC43KnIpfTtjYXNlIFBvLkNvbWZvcnRhYmxlOnJldHVybnt2YWx1ZTplLGhlYWRlckhlaWdodDpNYXRoLmZsb29yKDEuMyp0KSxyb3dIZWlnaHQ6TWF0aC5mbG9vcigxLjMqcil9O2RlZmF1bHQ6cmV0dXJue3ZhbHVlOmUsaGVhZGVySGVpZ2h0OnQscm93SGVpZ2h0OnJ9fX0pLFtdKSxjPXMudXNlQ2FsbGJhY2soKChlLHI9bCxzPW4pPT57dC5kZWJ1ZyhcIlNldCBncmlkIGRlbnNpdHkgdG8gXCIrZSksbygodD0+T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQpLHtkZW5zaXR5Ok9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0LmRlbnNpdHkpLGkoZSxyLHMpKX0pKSksYSgpfSksW3QsbyxhLGksbCxuXSk7cy51c2VFZmZlY3QoKCgpPT57YyhyLGwsbil9KSxbYyxyLG4sbF0pLElvKGUse3NldERlbnNpdHk6Y30sXCJHcmlkRGVuc2l0eUFwaVwiKX0pKHYpLG9jKGcsaCxDLHYpLGpzKHYpLGRjKGcsdiksV3ModiksKGU9Pntjb25zdCB0PU1vKFwidXNlR3JpZENzdkV4cG9ydFwiKSxyPWVhKGUsaWEpLG49ZWEoZSwkYSksbD1lYShlLEphKSxvPXMudXNlQ2FsbGJhY2soKCgpPT4odC5kZWJ1ZyhcIkdldCBkYXRhIGFzIENTVlwiKSxIYyhyLG4sbCxlLmN1cnJlbnQuZ2V0Q2VsbFZhbHVlKSkpLFt0LHIsbixsLGVdKSxhPXMudXNlQ2FsbGJhY2soKCgpPT57dC5kZWJ1ZyhcIkV4cG9ydCBkYXRhIGFzIENTVlwiKTtjb25zdCBlPW8oKTtzbyhuZXcgQmxvYihbZV0se3R5cGU6XCJ0ZXh0L2NzdlwifSksXCJjc3ZcIixcImRhdGFcIil9KSxbdCxvXSk7SW8oZSx7Z2V0RGF0YUFzQ3N2Om8sZXhwb3J0RGF0YUFzQ3N2OmF9LFwiR3JpZENzdkV4cG9ydEFwaVwiKX0pKHYpLChlPT57Y29uc3QgdD1lYShlLEVhKSxyPWVhKGUsZ2EpLG49ZWEoZSxpYSksbD1zLnVzZVJlZighMSksbz1zLnVzZUNhbGxiYWNrKCgoKT0+e2lmKCFyKXJldHVybjtjb25zdCBvPWUuY3VycmVudC5nZXRTY3JvbGxQb3NpdGlvbigpLnRvcCtyLndpbmRvd1NpemVzLmhlaWdodCt0LnNjcm9sbEVuZFRocmVzaG9sZDtpZihvPHIuZGF0YUNvbnRhaW5lclNpemVzLmhlaWdodCYmKGwuY3VycmVudD0hMSksbz49ci5kYXRhQ29udGFpbmVyU2l6ZXMuaGVpZ2h0JiYhbC5jdXJyZW50KXtjb25zdCB0PXthcGk6ZSx2aXNpYmxlQ29sdW1uczpuLHZpZXdwb3J0UGFnZVNpemU6ci52aWV3cG9ydFBhZ2VTaXplLHZpcnR1YWxSb3dzQ291bnQ6ci52aXJ0dWFsUm93c0NvdW50fTtlLmN1cnJlbnQucHVibGlzaEV2ZW50KFwic2Nyb2xsOnJvd0VuZFwiLHQpLGwuY3VycmVudD0hMH19KSxbdCxyLGUsbl0pO0VpKGUsXCJzY3JvbGxpbmc6cm93c1wiLG8pLHhpKGUsXCJzY3JvbGw6cm93RW5kXCIsdC5vblJvd3NTY3JvbGxFbmQpfSkodik7Y29uc3QgTT1iYyhlLmNvbXBvbmVudHMsZS5jb21wb25lbnRzUHJvcHMsdik7IWZ1bmN0aW9uKGUsdCl7Y29uc3RbLHIsbl09UW8oZSksbD1NbyhcInVzZVN0YXRlUHJvcFwiKTtzLnVzZUVmZmVjdCgoKCk9PntudWxsIT10JiZlLmN1cnJlbnQuc3RhdGUhPT10JiYobC5kZWJ1ZyhcIk92ZXJyaWRpbmcgc3RhdGUgd2l0aCBwcm9wcy5zdGF0ZVwiKSxyKChlPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSksdCkpKSxuKCkpfSksW2UsbixsLHQscl0pfSh2LGUuc3RhdGUpLGZ1bmN0aW9uKGUsdCl7Y29uc3Rbcl09UW8oZSk7aWYobnVsbCE9ci5yZW5kZXJpbmcucmVuZGVyQ29udGV4dCl7Y29uc3R7cGFnZTplLGZpcnN0Q29sSWR4Om4sbGFzdENvbElkeDpsLGZpcnN0Um93SWR4Om8sbGFzdFJvd0lkeDphfT1yLnJlbmRlcmluZy5yZW5kZXJDb250ZXh0O3QuaW5mbyhgUmVuZGVyaW5nLCBwYWdlOiAke2V9LCBjb2w6ICR7bn0tJHtsfSwgcm93OiAke299LSR7YX1gKX19KHYsRSk7Y29uc3QgST0hZS5sb2FkaW5nJiYwPT09dyxrPSFlLmxvYWRpbmcmJnc+MCYmMD09PU87cmV0dXJuIHMuY3JlYXRlRWxlbWVudChjby5Qcm92aWRlcix7dmFsdWU6dn0scy5jcmVhdGVFbGVtZW50KFksbnVsbCxzLmNyZWF0ZUVsZW1lbnQobWEse3JlZjpwLGNsYXNzTmFtZTplLmNsYXNzTmFtZX0scy5jcmVhdGVFbGVtZW50KFRjLHtoYXNFcnJvcjpudWxsIT1TLGNvbXBvbmVudFByb3BzOlMsYXBpOnYsbG9nZ2VyOkUscmVuZGVyOnQ9Pnt2YXIgcjtyZXR1cm4gcy5jcmVhdGVFbGVtZW50KEFjLG51bGwscy5jcmVhdGVFbGVtZW50KE0uRXJyb3JPdmVybGF5LE9iamVjdC5hc3NpZ24oe30sdCxudWxsPT09KHI9ZS5jb21wb25lbnRzUHJvcHMpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLmVycm9yT3ZlcmxheSkpKX19LHMuY3JlYXRlRWxlbWVudChcImRpdlwiLHtyZWY6Zn0scy5jcmVhdGVFbGVtZW50KE0uSGVhZGVyLE9iamVjdC5hc3NpZ24oe30sbnVsbD09PShyPWUuY29tcG9uZW50c1Byb3BzKXx8dm9pZCAwPT09cj92b2lkIDA6ci5oZWFkZXIpKSkscy5jcmVhdGVFbGVtZW50KEFjLG51bGwscy5jcmVhdGVFbGVtZW50KEhpLHtDb250ZW50Q29tcG9uZW50Ok0uQ29sdW1uTWVudSxjb250ZW50Q29tcG9uZW50UHJvcHM6T2JqZWN0LmFzc2lnbih7fSxudWxsPT09KG49ZS5jb21wb25lbnRzUHJvcHMpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLmNvbHVtbk1lbnUpfSkscy5jcmVhdGVFbGVtZW50KERzLHtsaWNlbnNlU3RhdHVzOmUubGljZW5zZVN0YXR1c30pLHMuY3JlYXRlRWxlbWVudChmYSx7cmVmOmJ9LHMuY3JlYXRlRWxlbWVudChMaSx7cmVmOmd9KSksSSYmcy5jcmVhdGVFbGVtZW50KE0uTm9Sb3dzT3ZlcmxheSxPYmplY3QuYXNzaWduKHt9LG51bGw9PT0obD1lLmNvbXBvbmVudHNQcm9wcyl8fHZvaWQgMD09PWw/dm9pZCAwOmwubm9Sb3dzT3ZlcmxheSkpLGsmJnMuY3JlYXRlRWxlbWVudChNLk5vUmVzdWx0c092ZXJsYXksT2JqZWN0LmFzc2lnbih7fSxudWxsPT09KGE9ZS5jb21wb25lbnRzUHJvcHMpfHx2b2lkIDA9PT1hP3ZvaWQgMDphLm5vUmVzdWx0c092ZXJsYXkpKSxlLmxvYWRpbmcmJnMuY3JlYXRlRWxlbWVudChNLkxvYWRpbmdPdmVybGF5LE9iamVjdC5hc3NpZ24oe30sbnVsbD09PShjPWUuY29tcG9uZW50c1Byb3BzKXx8dm9pZCAwPT09Yz92b2lkIDA6Yy5sb2FkaW5nT3ZlcmxheSkpLHMuY3JlYXRlRWxlbWVudChmcyx7b25SZXNpemU6eCxub25jZTplLm5vbmNlLGRpc2FibGVIZWlnaHQ6ZS5hdXRvSGVpZ2h0fSwoZT0+cy5jcmVhdGVFbGVtZW50KFNhLHtyZWY6aCxzaXplOmV9LHMuY3JlYXRlRWxlbWVudChJcyx7cmVmOkN9KSkpKSksIXkuaGlkZUZvb3RlciYmcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3JlZjptfSxzLmNyZWF0ZUVsZW1lbnQoTS5Gb290ZXIsT2JqZWN0LmFzc2lnbih7fSxudWxsPT09KHU9ZS5jb21wb25lbnRzUHJvcHMpfHx2b2lkIDA9PT11P3ZvaWQgMDp1LmZvb3RlcikpKSkpKSl9KSksVmM9e2Rpc2FibGVDb2x1bW5SZXNpemU6ITAsZGlzYWJsZUNvbHVtblJlb3JkZXI6ITAsZGlzYWJsZU11bHRpcGxlQ29sdW1uc0ZpbHRlcmluZzohMCxkaXNhYmxlTXVsdGlwbGVDb2x1bW5zU29ydGluZzohMCxkaXNhYmxlTXVsdGlwbGVTZWxlY3Rpb246ITAscGFnaW5hdGlvbjohMCxhcGlSZWY6dm9pZCAwLG9uUm93c1Njcm9sbEVuZDp2b2lkIDB9LEJjPXMuZm9yd2FyZFJlZigoZnVuY3Rpb24oZSx0KXtjb25zdCByPWFvKHtwcm9wczplLG5hbWU6XCJNdWlEYXRhR3JpZFwifSkse2NsYXNzTmFtZTpuLHBhZ2VTaXplOmwsY2xhc3NlczpvfT1yLGE9Z2wocixbXCJjbGFzc05hbWVcIixcInBhZ2VTaXplXCIsXCJjbGFzc2VzXCJdKTtsZXQgaT1sO3JldHVybiBpJiZpPjEwMCYmKGk9MTAwKSxzLmNyZWF0ZUVsZW1lbnQoTmMsT2JqZWN0LmFzc2lnbih7cmVmOnQsY2xhc3NOYW1lOktuKFwiTXVpRGF0YUdyaWQtcm9vdFwiLG51bGw9PW8/dm9pZCAwOm8ucm9vdCxuKSxwYWdlU2l6ZTppfSxhLFZjLHtsaWNlbnNlU3RhdHVzOlwiVmFsaWRcIn0pKX0pKSwkYz1zLm1lbW8oQmMpOyRjLnByb3BUeXBlcz17YXBpUmVmOlEoSi5hbnksKGU9Pm51bGwhPWUuYXBpUmVmP25ldyBFcnJvcihbXCJNYXRlcmlhbC1VSTogYGFwaVJlZmAgaXMgbm90IGEgdmFsaWQgcHJvcC5cIixcIkdyaWRBcGlSZWYgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgTUlUIHZlcnNpb24uXCIsXCJcIixcIllvdSBuZWVkIHRvIHVwZ3JhZGUgdG8gdGhlIFhHcmlkIGNvbXBvbmVudCB0byB1bmxvY2sgdGhpcyBmZWF0dXJlLlwiXS5qb2luKFwiXFxuXCIpKTpudWxsKSksY29sdW1uczpRKEouYXJyYXkuaXNSZXF1aXJlZCwoZT0+ZS5jb2x1bW5zJiZlLmNvbHVtbnMuc29tZSgoZT0+ZS5yZXNpemFibGUpKT9uZXcgRXJyb3IoW1wiTWF0ZXJpYWwtVUk6IGBjb2x1bW4ucmVzaXphYmxlID0gdHJ1ZWAgaXMgbm90IGEgdmFsaWQgcHJvcC5cIixcIkNvbHVtbiByZXNpemluZyBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBNSVQgdmVyc2lvbi5cIixcIlwiLFwiWW91IG5lZWQgdG8gdXBncmFkZSB0byB0aGUgWEdyaWQgY29tcG9uZW50IHRvIHVubG9jayB0aGlzIGZlYXR1cmUuXCJdLmpvaW4oXCJcXG5cIikpOm51bGwpKSxkaXNhYmxlQ29sdW1uUmVvcmRlcjpRKEouYm9vbCwoZT0+ITE9PT1lLmRpc2FibGVDb2x1bW5SZW9yZGVyP25ldyBFcnJvcihbXCJNYXRlcmlhbC1VSTogYDxEYXRhR3JpZCBkaXNhYmxlQ29sdW1uUmVvcmRlcj17ZmFsc2V9IC8+YCBpcyBub3QgYSB2YWxpZCBwcm9wLlwiLFwiQ29sdW1uIHJlb3JkZXJpbmcgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgTUlUIHZlcnNpb24uXCIsXCJcIixcIllvdSBuZWVkIHRvIHVwZ3JhZGUgdG8gdGhlIFhHcmlkIGNvbXBvbmVudCB0byB1bmxvY2sgdGhpcyBmZWF0dXJlLlwiXS5qb2luKFwiXFxuXCIpKTpudWxsKSksZGlzYWJsZUNvbHVtblJlc2l6ZTpRKEouYm9vbCwoZT0+ITE9PT1lLmRpc2FibGVDb2x1bW5SZXNpemU/bmV3IEVycm9yKFtcIk1hdGVyaWFsLVVJOiBgPERhdGFHcmlkIGRpc2FibGVDb2x1bW5SZXNpemU9e2ZhbHNlfSAvPmAgaXMgbm90IGEgdmFsaWQgcHJvcC5cIixcIkNvbHVtbiByZXNpemluZyBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBNSVQgdmVyc2lvbi5cIixcIlwiLFwiWW91IG5lZWQgdG8gdXBncmFkZSB0byB0aGUgWEdyaWQgY29tcG9uZW50IHRvIHVubG9jayB0aGlzIGZlYXR1cmUuXCJdLmpvaW4oXCJcXG5cIikpOm51bGwpKSxkaXNhYmxlTXVsdGlwbGVDb2x1bW5zRmlsdGVyaW5nOlEoSi5ib29sLChlPT4hMT09PWUuZGlzYWJsZU11bHRpcGxlQ29sdW1uc0ZpbHRlcmluZz9uZXcgRXJyb3IoW1wiTWF0ZXJpYWwtVUk6IGA8RGF0YUdyaWQgZGlzYWJsZU11bHRpcGxlQ29sdW1uc0ZpbHRlcmluZz17ZmFsc2V9IC8+YCBpcyBub3QgYSB2YWxpZCBwcm9wLlwiLFwiT25seSBzaW5nbGUgY29sdW1uIHNvcnRpbmcgaXMgYXZhaWxhYmxlIGluIHRoZSBNSVQgdmVyc2lvbi5cIixcIlwiLFwiWW91IG5lZWQgdG8gdXBncmFkZSB0byB0aGUgWEdyaWQgY29tcG9uZW50IHRvIHVubG9jayB0aGlzIGZlYXR1cmUuXCJdLmpvaW4oXCJcXG5cIikpOm51bGwpKSxkaXNhYmxlTXVsdGlwbGVDb2x1bW5zU29ydGluZzpRKEouYm9vbCwoZT0+ITE9PT1lLmRpc2FibGVNdWx0aXBsZUNvbHVtbnNTb3J0aW5nP25ldyBFcnJvcihbXCJNYXRlcmlhbC1VSTogYDxEYXRhR3JpZCBkaXNhYmxlTXVsdGlwbGVDb2x1bW5zU29ydGluZz17ZmFsc2V9IC8+YCBpcyBub3QgYSB2YWxpZCBwcm9wLlwiLFwiT25seSBzaW5nbGUgY29sdW1uIHNvcnRpbmcgaXMgYXZhaWxhYmxlIGluIHRoZSBNSVQgdmVyc2lvbi5cIixcIlwiLFwiWW91IG5lZWQgdG8gdXBncmFkZSB0byB0aGUgWEdyaWQgY29tcG9uZW50IHRvIHVubG9jayB0aGlzIGZlYXR1cmUuXCJdLmpvaW4oXCJcXG5cIikpOm51bGwpKSxkaXNhYmxlTXVsdGlwbGVTZWxlY3Rpb246UShKLmJvb2wsKGU9PiExPT09ZS5kaXNhYmxlTXVsdGlwbGVTZWxlY3Rpb24/bmV3IEVycm9yKFtcIk1hdGVyaWFsLVVJOiBgPERhdGFHcmlkIGRpc2FibGVNdWx0aXBsZVNlbGVjdGlvbj17ZmFsc2V9IC8+YCBpcyBub3QgYSB2YWxpZCBwcm9wLlwiLFwiT25seSBzaW5nbGUgY29sdW1uIHNlbGVjdGlvbiBpcyBhdmFpbGFibGUgaW4gdGhlIE1JVCB2ZXJzaW9uLlwiLFwiXCIsXCJZb3UgbmVlZCB0byB1cGdyYWRlIHRvIHRoZSBYR3JpZCBjb21wb25lbnQgdG8gdW5sb2NrIHRoaXMgZmVhdHVyZS5cIl0uam9pbihcIlxcblwiKSk6bnVsbCkpLHBhZ2VTaXplOlEoSi5udW1iZXIsKGU9PmUucGFnZVNpemUmJmUucGFnZVNpemU+MTAwP25ldyBFcnJvcihbYE1hdGVyaWFsLVVJOiBcXGA8RGF0YUdyaWQgcGFnZVNpemU9eyR7ZS5wYWdlU2l6ZX19IC8+XFxgIGlzIG5vdCBhIHZhbGlkIHByb3AuYCxcIk9ubHkgcGFnZSBzaXplIGJlbG93IDEwMCBpcyBhdmFpbGFibGUgaW4gdGhlIE1JVCB2ZXJzaW9uLlwiLFwiXCIsXCJZb3UgbmVlZCB0byB1cGdyYWRlIHRvIHRoZSBYR3JpZCBjb21wb25lbnQgdG8gdW5sb2NrIHRoaXMgZmVhdHVyZS5cIl0uam9pbihcIlxcblwiKSk6bnVsbCkpLHBhZ2luYXRpb246ZT0+ITE9PT1lLnBhZ2luYXRpb24/bmV3IEVycm9yKFtcIk1hdGVyaWFsLVVJOiBgPERhdGFHcmlkIHBhZ2luYXRpb249e2ZhbHNlfSAvPmAgaXMgbm90IGEgdmFsaWQgcHJvcC5cIixcIkluZmluaXRlIHNjcm9sbGluZyBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBNSVQgdmVyc2lvbi5cIixcIlwiLFwiWW91IG5lZWQgdG8gdXBncmFkZSB0byB0aGUgWEdyaWQgY29tcG9uZW50IHRvIGRpc2FibGUgdGhlIHBhZ2luYXRpb24uXCJdLmpvaW4oXCJcXG5cIikpOm51bGwsb25Sb3dzU2Nyb2xsRW5kOlEoSi5hbnksKGU9Pm51bGwhPWUub25Sb3dzU2Nyb2xsRW5kP25ldyBFcnJvcihbXCJNYXRlcmlhbC1VSTogYG9uUm93c1Njcm9sbEVuZGAgaXMgbm90IGEgdmFsaWQgcHJvcC5cIixcIm9uUm93c1Njcm9sbEVuZCBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBNSVQgdmVyc2lvbi5cIixcIlwiLFwiWW91IG5lZWQgdG8gdXBncmFkZSB0byB0aGUgWEdyaWQgY29tcG9uZW50IHRvIHVubG9jayB0aGlzIGZlYXR1cmUuXCJdLmpvaW4oXCJcXG5cIikpOm51bGwpKSxyb3dzOkouYXJyYXkuaXNSZXF1aXJlZCxzY3JvbGxFbmRUaHJlc2hvbGQ6UShKLm51bWJlciwoZT0+ZS5zY3JvbGxFbmRUaHJlc2hvbGQ/bmV3IEVycm9yKFtgTWF0ZXJpYWwtVUk6IFxcYDxEYXRhR3JpZCBzY3JvbGxFbmRUaHJlc2hvbGQ9eyR7ZS5zY3JvbGxFbmRUaHJlc2hvbGR9fSAvPlxcYCBpcyBub3QgYSB2YWxpZCBwcm9wLmAsXCJzY3JvbGxFbmRUaHJlc2hvbGQgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgTUlUIHZlcnNpb24uXCIsXCJcIixcIllvdSBuZWVkIHRvIHVwZ3JhZGUgdG8gdGhlIFhHcmlkIGNvbXBvbmVudCB0byB1bmxvY2sgdGhpcyBmZWF0dXJlLlwiXS5qb2luKFwiXFxuXCIpKTpudWxsKSl9O2V4cG9ydHtKbCBhcyBERUZBVUxUX0dSSURfQ09MX1RZUEVfS0VZLEZvIGFzIERFRkFVTFRfR1JJRF9PUFRJT05TLGdjIGFzIERFRkFVTFRfR1JJRF9TTE9UU19DT01QT05FTlRTLGZjIGFzIERFRkFVTFRfR1JJRF9TTE9UU19JQ09OUywkYyBhcyBEYXRhR3JpZCxzaSBhcyBHUklEX0JPT0xFQU5fQ09MVU1OX1RZUEUsTWUgYXMgR1JJRF9DRUxMX0JMVVIsQ2UgYXMgR1JJRF9DRUxMX0NMSUNLLGVlIGFzIEdSSURfQ0VMTF9DU1NfQ0xBU1MsdmUgYXMgR1JJRF9DRUxMX0RPVUJMRV9DTElDSyxBZSBhcyBHUklEX0NFTExfRFJBR19FTkQsemUgYXMgR1JJRF9DRUxMX0RSQUdfRU5URVIsVGUgYXMgR1JJRF9DRUxMX0RSQUdfT1ZFUixqZSBhcyBHUklEX0NFTExfRFJBR19TVEFSVCxhbCBhcyBHUklEX0NFTExfRURJVF9DT01NSVRfS0VZUyxQZSBhcyBHUklEX0NFTExfRURJVF9FTlRFUixSZSBhcyBHUklEX0NFTExfRURJVF9FWElULEllIGFzIEdSSURfQ0VMTF9FRElUX1BST1BTX0NIQU5HRSxrZSBhcyBHUklEX0NFTExfRURJVF9QUk9QU19DSEFOR0VfQ09NTUlUVEVELEVlIGFzIEdSSURfQ0VMTF9FTlRFUixvbCBhcyBHUklEX0NFTExfRVhJVF9FRElUX01PREVfS0VZUyxMZSBhcyBHUklEX0NFTExfRk9DVVMseGUgYXMgR1JJRF9DRUxMX0tFWURPV04sU2UgYXMgR1JJRF9DRUxMX0xFQVZFLGhlIGFzIEdSSURfQ0VMTF9NT0RFX0NIQU5HRSx3ZSBhcyBHUklEX0NFTExfTU9VU0VfRE9XTixGZSBhcyBHUklEX0NFTExfTkFWSUdBVElPTl9LRVlET1dOLHllIGFzIEdSSURfQ0VMTF9PVVQsT2UgYXMgR1JJRF9DRUxMX09WRVIsRGUgYXMgR1JJRF9DRUxMX1ZBTFVFX0NIQU5HRSx3dCBhcyBHUklEX0NPTFVNTlNfVVBEQVRFRCxVZSBhcyBHUklEX0NPTFVNTl9IRUFERVJfQkxVUixxZSBhcyBHUklEX0NPTFVNTl9IRUFERVJfQ0xJQ0ssWWUgYXMgR1JJRF9DT0xVTU5fSEVBREVSX0RPVUJMRV9DTElDSyxvdCBhcyBHUklEX0NPTFVNTl9IRUFERVJfRFJBR19FTkQsbHQgYXMgR1JJRF9DT0xVTU5fSEVBREVSX0RSQUdfRU5URVIsbnQgYXMgR1JJRF9DT0xVTU5fSEVBREVSX0RSQUdfT1ZFUixydCBhcyBHUklEX0NPTFVNTl9IRUFERVJfRFJBR19TVEFSVCxldCBhcyBHUklEX0NPTFVNTl9IRUFERVJfRU5URVIsS2UgYXMgR1JJRF9DT0xVTU5fSEVBREVSX0ZPQ1VTLFhlIGFzIEdSSURfQ09MVU1OX0hFQURFUl9LRVlET1dOLHR0IGFzIEdSSURfQ09MVU1OX0hFQURFUl9MRUFWRSxaZSBhcyBHUklEX0NPTFVNTl9IRUFERVJfTkFWSUdBVElPTl9LRVlET1dOLFFlIGFzIEdSSURfQ09MVU1OX0hFQURFUl9PVVQsSmUgYXMgR1JJRF9DT0xVTU5fSEVBREVSX09WRVIsYnQgYXMgR1JJRF9DT0xVTU5fT1JERVJfQ0hBTkdFLHB0IGFzIEdSSURfQ09MVU1OX1JFU0laRSxtdCBhcyBHUklEX0NPTFVNTl9SRVNJWkVfQ09NTUlURUQsZnQgYXMgR1JJRF9DT0xVTU5fUkVTSVpFX1NUQVJULGd0IGFzIEdSSURfQ09MVU1OX1JFU0laRV9TVE9QLGR0IGFzIEdSSURfQ09MVU1OX1NFUEFSQVRPUl9NT1VTRV9ET1dOLGZlIGFzIEdSSURfQ09NUE9ORU5UX0VSUk9SLG9lIGFzIEdSSURfREFUQV9DT05UQUlORVJfQ1NTX0NMQVNTLGlpIGFzIEdSSURfREFURVRJTUVfQ09MVU1OX1RZUEUsS2wgYXMgR1JJRF9EQVRFVElNRV9DT0xfREVGLGFpIGFzIEdSSURfREFURV9DT0xVTU5fVFlQRSxVbCBhcyBHUklEX0RBVEVfQ09MX0RFRixEbyBhcyBHUklEX0RFRkFVTFRfTE9DQUxFX1RFWFQsbWUgYXMgR1JJRF9EUkFHRU5ELGJlIGFzIEdSSURfRUxFTUVOVF9GT0NVU19PVVQsUnMgYXMgR1JJRF9FWFBFUklNRU5UQUxfRU5BQkxFRCx5dCBhcyBHUklEX0ZJTFRFUl9NT0RFTF9DSEFOR0UsY2UgYXMgR1JJRF9GT0NVU19PVVQscmUgYXMgR1JJRF9IRUFERVJfQ0VMTF9DU1NfQ0xBU1MsaWUgYXMgR1JJRF9IRUFERVJfQ0VMTF9EUkFHR0lOR19DU1NfQ0xBU1MsYWUgYXMgR1JJRF9IRUFERVJfQ0VMTF9EUk9QX1pPTkVfQ1NTX0NMQVNTLG5lIGFzIEdSSURfSEVBREVSX0NFTExfU0VQQVJBVE9SX1JFU0laQUJMRV9DU1NfQ0xBU1MsbGUgYXMgR1JJRF9IRUFERVJfQ0VMTF9USVRMRV9DU1NfQ0xBU1MsVW8gYXMgR1JJRF9JTklUSUFMX1BBR0lOQVRJT05fU1RBVEUsdWUgYXMgR1JJRF9LRVlET1dOLGRlIGFzIEdSSURfS0VZVVAsbGwgYXMgR1JJRF9NVUxUSVBMRV9TRUxFQ1RJT05fS0VZUyxwZSBhcyBHUklEX05BVElWRV9TQ1JPTEwsb2kgYXMgR1JJRF9OVU1CRVJfQ09MVU1OX1RZUEUsVmwgYXMgR1JJRF9OVU1FUklDX0NPTF9ERUYsc3QgYXMgR1JJRF9QQUdFU0laRV9DSEFOR0VELGl0IGFzIEdSSURfUEFHRV9DSEFOR0VELHNlIGFzIEdSSURfUkVTSVpFLHZ0IGFzIEdSSURfUk9XU19DTEVBUkVELGN0IGFzIEdSSURfUk9XU19TQ1JPTEwsdXQgYXMgR1JJRF9ST1dTX1NDUk9MTF9FTkQsQ3QgYXMgR1JJRF9ST1dTX1NFVCxodCBhcyBHUklEX1JPV1NfVVBEQVRFRCxfZSBhcyBHUklEX1JPV19DTElDSyx0ZSBhcyBHUklEX1JPV19DU1NfQ0xBU1MsR2UgYXMgR1JJRF9ST1dfRE9VQkxFX0NMSUNLLCRlIGFzIEdSSURfUk9XX0VESVRfTU9ERUxfQ0hBTkdFLFZlIGFzIEdSSURfUk9XX0VOVEVSLEJlIGFzIEdSSURfUk9XX0xFQVZFLE5lIGFzIEdSSURfUk9XX09VVCxIZSBhcyBHUklEX1JPV19PVkVSLFdlIGFzIEdSSURfUk9XX1NFTEVDVEVELGF0IGFzIEdSSURfU0VMRUNUSU9OX0NIQU5HRUQsT3QgYXMgR1JJRF9TT1JUX01PREVMX0NIQU5HRSxFdCBhcyBHUklEX1NUQVRFX0NIQU5HRSxsaSBhcyBHUklEX1NUUklOR19DT0xVTU5fVFlQRSxIbCBhcyBHUklEX1NUUklOR19DT0xfREVGLGdlIGFzIEdSSURfVU5NT1VOVCxGbCBhcyBHcmlkQWRkSWNvbixjbyBhcyBHcmlkQXBpQ29udGV4dCx2bCBhcyBHcmlkQXJyb3dEb3dud2FyZEljb24sQ2wgYXMgR3JpZEFycm93VXB3YXJkSWNvbixmcyBhcyBHcmlkQXV0b1NpemVyLHVvIGFzIEdyaWRDZWxsLEZhIGFzIEdyaWRDZWxsQ2hlY2tib3hSZW5kZXJlcixTbCBhcyBHcmlkQ2hlY2tDaXJjbGVJY29uLFRsIGFzIEdyaWRDaGVja0ljb24sUmwgYXMgR3JpZENsb3NlSWNvbix3aSBhcyBHcmlkQ29sdW1uSGVhZGVySXRlbSxIaSBhcyBHcmlkQ29sdW1uSGVhZGVyTWVudSxtaSBhcyBHcmlkQ29sdW1uSGVhZGVyU2VwYXJhdG9yLHVpIGFzIEdyaWRDb2x1bW5IZWFkZXJTb3J0SWNvbixwaSBhcyBHcmlkQ29sdW1uSGVhZGVyVGl0bGUsUmkgYXMgR3JpZENvbHVtbkhlYWRlcnNJdGVtQ29sbGVjdGlvbix4bCBhcyBHcmlkQ29sdW1uSWNvbixCaSBhcyBHcmlkQ29sdW1uTWVudSxmYSBhcyBHcmlkQ29sdW1uc0NvbnRhaW5lcixMaSBhcyBHcmlkQ29sdW1uc0hlYWRlcixqaSBhcyBHcmlkQ29sdW1uc01lbnVJdGVtLGVzIGFzIEdyaWRDb2x1bW5zUGFuZWwsaXMgYXMgR3JpZENvbHVtbnNUb29sYmFyQnV0dG9uLE5jIGFzIEdyaWRDb21wb25lbnQsd2EgYXMgR3JpZERhdGFDb250YWluZXIsc3MgYXMgR3JpZERlbnNpdHlTZWxlY3RvcixQbyBhcyBHcmlkRGVuc2l0eVR5cGVzLGpsIGFzIEdyaWREcmFnSWNvbixibCBhcyBHcmlkRWRpdElucHV0Q2VsbCxwbyBhcyBHcmlkRW1wdHlDZWxsLFJvIGFzIEdyaWRGZWF0dXJlTW9kZUNvbnN0YW50LE9sIGFzIEdyaWRGaWx0ZXJBbHRJY29uLG9zIGFzIEdyaWRGaWx0ZXJGb3JtLF9sIGFzIEdyaWRGaWx0ZXJJbnB1dFZhbHVlLHdsIGFzIEdyaWRGaWx0ZXJMaXN0SWNvbix6aSBhcyBHcmlkRmlsdGVyTWVudUl0ZW0sYXMgYXMgR3JpZEZpbHRlclBhbmVsLHVzIGFzIEdyaWRGaWx0ZXJUb29sYmFyQnV0dG9uLENzIGFzIEdyaWRGb290ZXIsT2EgYXMgR3JpZEZvb3RlckNvbnRhaW5lcix2cyBhcyBHcmlkSGVhZGVyLHRpIGFzIEdyaWRIZWFkZXJDaGVja2JveCx6byBhcyBHcmlkTGlua09wZXJhdG9yLExsIGFzIEdyaWRMb2FkSWNvbix3cyBhcyBHcmlkTG9hZGluZ092ZXJsYXksX2kgYXMgR3JpZE1lbnUsRWwgYXMgR3JpZE1lbnVJY29uLE9zIGFzIEdyaWROb1Jvd3NPdmVybGF5LHlhIGFzIEdyaWRPdmVybGF5LEVzIGFzIEdyaWRQYWdpbmF0aW9uLHJzIGFzIEdyaWRQYW5lbCxXaSBhcyBHcmlkUGFuZWxDb250ZW50LEtpIGFzIEdyaWRQYW5lbEZvb3RlcixYaSBhcyBHcmlkUGFuZWxIZWFkZXIsSmkgYXMgR3JpZFBhbmVsV3JhcHBlcixDaSBhcyBHcmlkUHJlZmVyZW5jZVBhbmVsc1ZhbHVlLG5zIGFzIEdyaWRQcmVmZXJlbmNlc1BhbmVsLFNzIGFzIEdyaWRSZW5kZXJpbmdab25lLG1hIGFzIEdyaWRSb290LHhzIGFzIEdyaWRSb3csdGEgYXMgR3JpZFJvd0NlbGxzLGJzIGFzIEdyaWRSb3dDb3VudCx6bCBhcyBHcmlkU2F2ZUFsdEljb24sTWkgYXMgR3JpZFNjcm9sbEFyZWEseWwgYXMgR3JpZFNlYXJjaEljb24saHMgYXMgR3JpZFNlbGVjdGVkUm93Q291bnQsTWwgYXMgR3JpZFNlcGFyYXRvckljb24sTXMgYXMgR3JpZFN0aWNreUNvbnRhaW5lcixrbCBhcyBHcmlkVGFibGVSb3dzSWNvbixwcyBhcyBHcmlkVG9vbGJhcix4YSBhcyBHcmlkVG9vbGJhckNvbnRhaW5lcixkcyBhcyBHcmlkVG9vbGJhckV4cG9ydCxQbCBhcyBHcmlkVHJpcGxlRG90c1ZlcnRpY2FsSWNvbixJbCBhcyBHcmlkVmlld0hlYWRsaW5lSWNvbixEbCBhcyBHcmlkVmlld1N0cmVhbUljb24sSXMgYXMgR3JpZFZpZXdwb3J0LFNhIGFzIEdyaWRXaW5kb3csTmkgYXMgSGlkZUdyaWRDb2xNZW51SXRlbSxBbCBhcyBTVUJNSVRfRklMVEVSX1NUUk9LRV9USU1FLFZpIGFzIFNvcnRHcmlkTWVudUl0ZW1zLERzIGFzIFdhdGVybWFyayxYYSBhcyBhY3RpdmVHcmlkRmlsdGVySXRlbXNTZWxlY3RvcixsYSBhcyBhbGxHcmlkQ29sdW1uc0ZpZWxkc1NlbGVjdG9yLGFhIGFzIGFsbEdyaWRDb2x1bW5zU2VsZWN0b3Isd2MgYXMgYmdCRyxYcyBhcyBjaGVja0dyaWRSb3dJZElzVmFsaWQsS24gYXMgY2xhc3NuYW1lcyxZcyBhcyBjb252ZXJ0R3JpZFJvd3NQcm9wVG9TdGF0ZSxPYyBhcyBkZURFLHljIGFzIGVsR1IsRWMgYXMgZW5VUyxTYyBhcyBlc0VTLHNvIGFzIGV4cG9ydEFzLFlhIGFzIGZpbHRlckdyaWRDb2x1bW5Mb29rdXBTZWxlY3RvcixxYSBhcyBmaWx0ZXJHcmlkSXRlbXNDb3VudGVyU2VsZWN0b3IsWmEgYXMgZmlsdGVyR3JpZFN0YXRlU2VsZWN0b3IsdWEgYXMgZmlsdGVyYWJsZUdyaWRDb2x1bW5zSWRzU2VsZWN0b3IsY2EgYXMgZmlsdGVyYWJsZUdyaWRDb2x1bW5zU2VsZWN0b3IsSG4gYXMgZmluZEdyaWRDZWxsRWxlbWVudHNGcm9tQ29sLFZuIGFzIGZpbmRHcmlkRGF0YUNvbnRhaW5lckZyb21DdXJyZW50LE5uIGFzIGZpbmRHcmlkUm9vdEZyb21DdXJyZW50LEduIGFzIGZpbmRIZWFkZXJFbGVtZW50RnJvbUZpZWxkLEZuIGFzIGZpbmRQYXJlbnRFbGVtZW50RnJvbUNsYXNzTmFtZSxmbiBhcyBmb3JtYXREYXRlVG9Mb2NhbElucHV0RGF0ZSx4YyBhcyBmckZSLF9uIGFzIGdldEZpZWxkRnJvbUhlYWRlckVsZW0sVW4gYXMgZ2V0R3JpZENlbGxFbGVtZW50LEJuIGFzIGdldEdyaWRDZWxsRWxlbWVudEZyb21JbmRleGVzLG5pIGFzIGdldEdyaWRDb2xEZWYsJG4gYXMgZ2V0R3JpZENvbHVtbkhlYWRlckVsZW1lbnQsQmwgYXMgZ2V0R3JpZERhdGVPcGVyYXRvcnMsUWwgYXMgZ2V0R3JpZERlZmF1bHRDb2x1bW5UeXBlcyxubyBhcyBnZXRHcmlkTG9jYWxpemF0aW9uLE5sIGFzIGdldEdyaWROdW1lcmljQ29sdW1uT3BlcmF0b3JzLFZvIGFzIGdldEdyaWRQYWdlQ291bnQsV24gYXMgZ2V0R3JpZFJvd0VsZW1lbnQsR2wgYXMgZ2V0R3JpZFN0cmluZ09wZXJhdG9ycyxBbiBhcyBnZXRJZEZyb21Sb3dFbGVtLExvIGFzIGdldEluaXRpYWxHcmlkQ29sdW1uUmVvcmRlclN0YXRlLGpvIGFzIGdldEluaXRpYWxHcmlkQ29sdW1uUmVzaXplU3RhdGUsa28gYXMgZ2V0SW5pdGlhbEdyaWRDb2x1bW5zU3RhdGUsVG8gYXMgZ2V0SW5pdGlhbEdyaWRGaWx0ZXJTdGF0ZSxxbyBhcyBnZXRJbml0aWFsR3JpZFJlbmRlcmluZ1N0YXRlLFpvIGFzIGdldEluaXRpYWxHcmlkUm93U3RhdGUsWG8gYXMgZ2V0SW5pdGlhbEdyaWRTb3J0aW5nU3RhdGUsWW8gYXMgZ2V0SW5pdGlhbEdyaWRTdGF0ZSxBbyBhcyBnZXRJbml0aWFsVmlzaWJsZUdyaWRSb3dzU3RhdGUsTG4gYXMgZ2V0Um93RWwsaW8gYXMgZ2V0U2Nyb2xsYmFyU2l6ZSx3biBhcyBnZXRUaGVtZVBhbGV0dGVNb2RlLHJpIGFzIGdyaWRDaGVja2JveFNlbGVjdGlvbkNvbERlZixvYSBhcyBncmlkQ29sdW1uTG9va3VwU2VsZWN0b3IsZmkgYXMgZ3JpZENvbHVtbk1lbnVTdGF0ZVNlbGVjdG9yLGtpIGFzIGdyaWRDb2x1bW5SZW9yZGVyRHJhZ0NvbFNlbGVjdG9yLElpIGFzIGdyaWRDb2x1bW5SZW9yZGVyU2VsZWN0b3IsRGkgYXMgZ3JpZENvbHVtblJlc2l6ZVNlbGVjdG9yLHNhIGFzIGdyaWRDb2x1bW5zTWV0YVNlbGVjdG9yLG5hIGFzIGdyaWRDb2x1bW5zU2VsZWN0b3IscGEgYXMgZ3JpZENvbHVtbnNUb3RhbFdpZHRoU2VsZWN0b3IsUG4gYXMgZ3JpZERhdGVDb21wYXJlciwkbCBhcyBncmlkRGF0ZUZvcm1hdHRlcixXbCBhcyBncmlkRGF0ZVRpbWVGb3JtYXR0ZXIsbW8gYXMgZ3JpZEVkaXRSb3dzU3RhdGVTZWxlY3RvcixJYSBhcyBncmlkRm9jdXNDZWxsU2VsZWN0b3Isa2EgYXMgZ3JpZEZvY3VzQ29sdW1uSGVhZGVyU2VsZWN0b3IsTWEgYXMgZ3JpZEZvY3VzU3RhdGVTZWxlY3RvcixWcyBhcyBncmlkS2V5Ym9hcmRNdWx0aXBsZUtleVNlbGVjdG9yLE5zIGFzIGdyaWRLZXlib2FyZFN0YXRlU2VsZWN0b3IsSW4gYXMgZ3JpZE5pbGxDb21wYXJlcixEbiBhcyBncmlkTnVtYmVyQ29tcGFyZXIsS28gYXMgZ3JpZFBhZ2luYXRpb25SZWR1Y2VyLGdzIGFzIGdyaWRQYWdpbmF0aW9uU2VsZWN0b3IsYmkgYXMgZ3JpZFByZWZlcmVuY2VQYW5lbFN0YXRlU2VsZWN0b3IsUGkgYXMgZ3JpZFJlc2l6aW5nQ29sdW1uRmllbGRTZWxlY3RvcixqYSBhcyBncmlkUm93Q291bnRTZWxlY3Rvcix6YSBhcyBncmlkUm93c0xvb2t1cFNlbGVjdG9yLExhIGFzIGdyaWRSb3dzU3RhdGVTZWxlY3RvcixGaSBhcyBncmlkU2Nyb2xsYmFyU3RhdGVTZWxlY3RvcixKYSBhcyBncmlkU2VsZWN0aW9uU3RhdGVTZWxlY3RvcixWYSBhcyBncmlkU29ydENvbHVtbkxvb2t1cFNlbGVjdG9yLE5hIGFzIGdyaWRTb3J0TW9kZWxTZWxlY3RvcixrbiBhcyBncmlkU3RyaW5nTnVtYmVyQ29tcGFyZXIsUGEgYXMgZ3JpZFRhYkluZGV4Q2VsbFNlbGVjdG9yLFJhIGFzIGdyaWRUYWJJbmRleENvbHVtbkhlYWRlclNlbGVjdG9yLERhIGFzIGdyaWRUYWJJbmRleFN0YXRlU2VsZWN0b3IsaGkgYXMgZ3JpZFZpZXdwb3J0U2l6ZVN0YXRlU2VsZWN0b3IsZ24gYXMgaXNBcnJheSxKbiBhcyBpc0Fycm93S2V5cyx1bCBhcyBpc0NlbGxFZGl0Q29tbWl0S2V5cyxzbCBhcyBpc0NlbGxFbnRlckVkaXRNb2RlS2V5cyxjbCBhcyBpc0NlbGxFeGl0RWRpdE1vZGVLZXlzLG1uIGFzIGlzRGF0ZSxwbiBhcyBpc0RlZXBFcXVhbCx0bCBhcyBpc0RlbGV0ZUtleXMsTW4gYXMgaXNEZXNjLFhuIGFzIGlzRW50ZXJLZXksWm4gYXMgaXNFc2NhcGVLZXksQ24gYXMgaXNGdW5jdGlvbixqbiBhcyBpc0dyaWRDZWxsUm9vdCx6biBhcyBpc0dyaWRIZWFkZXJDZWxsUm9vdCxUbiBhcyBpc0dyaWRIZWFkZXJUaXRsZUNvbnRhaW5lcixtbCBhcyBpc0hpZGVNZW51S2V5LFFuIGFzIGlzSG9tZU9yRW5kS2V5cyxwbCBhcyBpc0tleWJvYXJkRXZlbnQsT24gYXMgaXNNdWlWNSxpbCBhcyBpc011bHRpcGxlS2V5LGZsIGFzIGlzTXVsdGlwbGVLZXlQcmVzc2VkLGRsIGFzIGlzTmF2aWdhdGlvbktleSxobiBhcyBpc051bWJlcix2biBhcyBpc09iamVjdCxSbiBhcyBpc092ZXJmbG93bixlbCBhcyBpc1BhZ2VLZXlzLG5sIGFzIGlzUHJpbnRhYmxlS2V5LFluIGFzIGlzU3BhY2VLZXksYm4gYXMgaXNTdHJpbmcscW4gYXMgaXNUYWJLZXksTWMgYXMgaXRJVCxJYyBhcyBqYUpQLEVuIGFzIGxvY2FsU3RvcmFnZUF2YWlsYWJsZSxTbiBhcyBtYXBDb2xEZWZUeXBlVG9JbnB1dFR5cGUsZW8gYXMgbWVyZ2VHcmlkQ29sVHlwZXMscm8gYXMgbWVyZ2VHcmlkT3B0aW9ucyx5biBhcyBtdWlTdHlsZUFscGhhLHhuIGFzIG5leHRHcmlkU29ydERpcmVjdGlvbixrYyBhcyBubE5MLFBjIGFzIHBsUEwsRGMgYXMgcGxQTEdyaWQsUmMgYXMgcHRCUix0byBhcyByZW1vdmVVbmRlZmluZWRQcm9wcyxobCBhcyByZW5kZXJFZGl0SW5wdXRDZWxsLExjIGFzIHJ1UlUsRmMgYXMgcnVSVUdyaWQsUWEgYXMgc2VsZWN0ZWRHcmlkUm93c0NvdW50U2VsZWN0b3IsZWkgYXMgc2VsZWN0ZWRHcmlkUm93c1NlbGVjdG9yLF9vIGFzIHNldEdyaWRQYWdlQWN0aW9uQ3JlYXRvcixHbyBhcyBzZXRHcmlkUGFnZVNpemVBY3Rpb25DcmVhdG9yLCRvIGFzIHNldEdyaWRQYWdlU2l6ZVN0YXRlVXBkYXRlLEJvIGFzIHNldEdyaWRQYWdlU3RhdGVVcGRhdGUsSG8gYXMgc2V0R3JpZFBhZ2luYXRpb25Nb2RlQWN0aW9uQ3JlYXRvcixObyBhcyBzZXRHcmlkUm93Q291bnRBY3Rpb25DcmVhdG9yLFdvIGFzIHNldEdyaWRSb3dDb3VudFN0YXRlVXBkYXRlLEdhIGFzIHNvcnRlZEdyaWRSb3dJZHNTZWxlY3RvcixIYSBhcyBzb3J0ZWRHcmlkUm93c1NlbGVjdG9yLHpjIGFzIHVrVUEsamMgYXMgdWtVQUdyaWQsVGEgYXMgdW5vcmRlcmVkR3JpZFJvd0lkc1NlbGVjdG9yLEFhIGFzIHVub3JkZXJlZEdyaWRSb3dNb2RlbHNTZWxlY3RvcixDYyBhcyB1c2VBcGksb28gYXMgdXNlRW5oYW5jZWRFZmZlY3QsbG8gYXMgdXNlRXZlbnRDYWxsYmFjayxKbyBhcyB1c2VHcmlkQXBpLEVpIGFzIHVzZUdyaWRBcGlFdmVudEhhbmRsZXIsSW8gYXMgdXNlR3JpZEFwaU1ldGhvZCx4aSBhcyB1c2VHcmlkQXBpT3B0aW9uSGFuZGxlcixpYyBhcyB1c2VHcmlkQXBpUmVmLEZzIGFzIHVzZUdyaWRDb2x1bW5NZW51LGpzIGFzIHVzZUdyaWRDb2x1bW5SZW9yZGVyLGRjIGFzIHVzZUdyaWRDb2x1bW5SZXNpemUsQXMgYXMgdXNlR3JpZENvbHVtbnMsYmMgYXMgdXNlR3JpZENvbXBvbmVudHMsdmMgYXMgdXNlR3JpZENvbnRhaW5lclByb3BzLFFzIGFzIHVzZUdyaWRFZGl0Um93cyxHcyBhcyB1c2VHcmlkRmlsdGVyLEhzIGFzIHVzZUdyaWRGb2N1cyxCcyBhcyB1c2VHcmlkS2V5Ym9hcmQsJHMgYXMgdXNlR3JpZEtleWJvYXJkTmF2aWdhdGlvbixXcyBhcyB1c2VHcmlkUGFnaW5hdGlvbixacyBhcyB1c2VHcmlkUGFyYW1zQXBpLFVzIGFzIHVzZUdyaWRQcmVmZXJlbmNlc1BhbmVsLF9zIGFzIHVzZUdyaWRSZWR1Y2VyLEpzIGFzIHVzZUdyaWRSb3dzLGxjIGFzIHVzZUdyaWRTY3JvbGxGbixlYyBhcyB1c2VHcmlkU2VsZWN0aW9uLGVhIGFzIHVzZUdyaWRTZWxlY3RvcixoYyBhcyB1c2VHcmlkU2xvdENvbXBvbmVudFByb3BzLHRjIGFzIHVzZUdyaWRTb3J0aW5nLFFvIGFzIHVzZUdyaWRTdGF0ZSxyYyBhcyB1c2VHcmlkVmlydHVhbENvbHVtbnMsb2MgYXMgdXNlR3JpZFZpcnR1YWxSb3dzLE1vIGFzIHVzZUxvZ2dlcix4byBhcyB1c2VMb2dnZXJGYWN0b3J5LG5jIGFzIHVzZU5hdGl2ZUV2ZW50TGlzdGVuZXIsYW8gYXMgdXNlVGhlbWVQcm9wcyxkYSBhcyB2aXNpYmxlR3JpZENvbHVtbnNMZW5ndGhTZWxlY3RvcixpYSBhcyB2aXNpYmxlR3JpZENvbHVtbnNTZWxlY3RvcixLYSBhcyB2aXNpYmxlR3JpZFJvd0NvdW50U2VsZWN0b3IsQmEgYXMgdmlzaWJsZUdyaWRSb3dzU3RhdGVTZWxlY3RvcixVYSBhcyB2aXNpYmxlU29ydGVkR3JpZFJvd0lkc1NlbGVjdG9yLFdhIGFzIHZpc2libGVTb3J0ZWRHcmlkUm93c0FzQXJyYXlTZWxlY3RvciwkYSBhcyB2aXNpYmxlU29ydGVkR3JpZFJvd3NTZWxlY3Rvcn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIVE1MRWxlbWVudFR5cGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gIGNvbnN0IHNhZmVQcm9wTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICBpZiAocHJvcFZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChwcm9wVmFsdWUgJiYgcHJvcFZhbHVlLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgSW52YWxpZCAke2xvY2F0aW9ufSBcXGAke3NhZmVQcm9wTmFtZX1cXGAgc3VwcGxpZWQgdG8gXFxgJHtjb21wb25lbnROYW1lfVxcYC4gYCArIGBFeHBlY3RlZCBhbiBIVE1MRWxlbWVudC5gKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSIsImltcG9ydCBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGZyb20gXCIuL2Zvcm1hdE11aUVycm9yTWVzc2FnZVwiO1xuLy8gSXQgc2hvdWxkIHRvIGJlIG5vdGVkIHRoYXQgdGhpcyBmdW5jdGlvbiBpc24ndCBlcXVpdmFsZW50IHRvIGB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZWAuXG4vL1xuLy8gQSBzdHJpY3QgY2FwaXRhbGl6YXRpb24gc2hvdWxkIHVwcGVyY2FzZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGVhY2ggd29yZCBpbiB0aGUgc2VudGVuY2UuXG4vLyBXZSBvbmx5IGhhbmRsZSB0aGUgZmlyc3Qgd29yZC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBgTWF0ZXJpYWwtVUk6IFxcYGNhcGl0YWxpemUoc3RyaW5nKVxcYCBleHBlY3RzIGEgc3RyaW5nIGFyZ3VtZW50LmAgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDcpKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhaW5Qcm9wVHlwZXMocHJvcFR5cGUxLCBwcm9wVHlwZTIpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gKCkgPT4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB2YWxpZGF0ZSguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHByb3BUeXBlMSguLi5hcmdzKSB8fCBwcm9wVHlwZTIoLi4uYXJncyk7XG4gIH07XG59IiwiLyoqXG4gKiBTYWZlIGNoYWluZWQgZnVuY3Rpb24uXG4gKlxuICogV2lsbCBvbmx5IGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBpZiBuZWVkZWQsXG4gKiBvdGhlcndpc2Ugd2lsbCBwYXNzIGJhY2sgZXhpc3RpbmcgZnVuY3Rpb25zIG9yIG51bGwuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jdGlvbnMgdG8gY2hhaW5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbnxudWxsfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oLi4uZnVuY3MpIHtcbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZSgoYWNjLCBmdW5jKSA9PiB7XG4gICAgaWYgKGZ1bmMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBJbnZhbGlkIGFyZ3VtZW50IHR5cGUgLSBtdXN0IG9ubHkgcHJvdmlkZSBmdW5jdGlvbnMsIHVuZGVmaW5lZCwgb3IgbnVsbC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIGFjYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfSwgKCkgPT4ge30pO1xufSIsIi8vIENvcnJlc3BvbmRzIHRvIDEwIGZyYW1lcyBhdCA2MCBIei5cbi8vIEEgZmV3IGJ5dGVzIHBheWxvYWQgb3ZlcmhlYWQgd2hlbiBsb2Rhc2gvZGVib3VuY2UgaXMgfjMga0IgYW5kIGRlYm91bmNlIH4zMDAgQi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQgPSAxNjYpIHtcbiAgbGV0IHRpbWVvdXQ7XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gIH1cblxuICBkZWJvdW5jZWQuY2xlYXIgPSAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB9O1xuXG4gIHJldHVybiBkZWJvdW5jZWQ7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdChpdGVtKSB7XG4gIHJldHVybiBpdGVtICE9PSBudWxsICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAvLyBUUyB0aGlua3MgYGl0ZW0gaXMgcG9zc2libHkgbnVsbGAgZXZlbiB0aG91Z2ggdGhpcyB3YXMgb3VyIGZpcnN0IGd1YXJkLlxuICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIGl0ZW0uY29uc3RydWN0b3IgPT09IE9iamVjdDtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucyA9IHtcbiAgY2xvbmU6IHRydWVcbn0pIHtcbiAgY29uc3Qgb3V0cHV0ID0gb3B0aW9ucy5jbG9uZSA/IF9leHRlbmRzKHt9LCB0YXJnZXQpIDogdGFyZ2V0O1xuXG4gIGlmIChpc1BsYWluT2JqZWN0KHRhcmdldCkgJiYgaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAvLyBBdm9pZCBwcm90b3R5cGUgcG9sbHV0aW9uXG4gICAgICBpZiAoa2V5ID09PSAnX19wcm90b19fJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KHNvdXJjZVtrZXldKSAmJiBrZXkgaW4gdGFyZ2V0ICYmIGlzUGxhaW5PYmplY3QodGFyZ2V0W2tleV0pKSB7XG4gICAgICAgIC8vIFNpbmNlIGBvdXRwdXRgIGlzIGEgY2xvbmUgb2YgYHRhcmdldGAgYW5kIHdlIGhhdmUgbmFycm93ZWQgYHRhcmdldGAgaW4gdGhpcyBibG9jayB3ZSBjYW4gY2FzdCB0byB0aGUgc2FtZSB0eXBlLlxuICAgICAgICBvdXRwdXRba2V5XSA9IGRlZXBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVwcmVjYXRlZFByb3BUeXBlKHZhbGlkYXRvciwgcmVhc29uKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuICgpID0+IG51bGw7XG4gIH1cblxuICByZXR1cm4gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudE5hbWVTYWZlID0gY29tcG9uZW50TmFtZSB8fCAnPDxhbm9ueW1vdXM+Pic7XG4gICAgY29uc3QgcHJvcEZ1bGxOYW1lU2FmZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgVGhlICR7bG9jYXRpb259IFxcYCR7cHJvcEZ1bGxOYW1lU2FmZX1cXGAgb2YgYCArIGBcXGAke2NvbXBvbmVudE5hbWVTYWZlfVxcYCBpcyBkZXByZWNhdGVkLiAke3JlYXNvbn1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn0iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNoYWluUHJvcFR5cGVzIGZyb20gJy4vY2hhaW5Qcm9wVHlwZXMnO1xuXG5mdW5jdGlvbiBpc0NsYXNzQ29tcG9uZW50KGVsZW1lbnRUeXBlKSB7XG4gIC8vIGVsZW1lbnRUeXBlLnByb3RvdHlwZT8uaXNSZWFjdENvbXBvbmVudFxuICBjb25zdCB7XG4gICAgcHJvdG90eXBlID0ge31cbiAgfSA9IGVsZW1lbnRUeXBlO1xuICByZXR1cm4gQm9vbGVhbihwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGFjY2VwdGluZ1JlZihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgY29uc3QgZWxlbWVudCA9IHByb3BzW3Byb3BOYW1lXTtcbiAgY29uc3Qgc2FmZVByb3BOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gIGlmIChlbGVtZW50ID09IG51bGwgfHwgLy8gV2hlbiBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgUmVhY3QgZG9lc24ndCB3YXJuIGVpdGhlci5cbiAgLy8gVGhpcyBpcyBub3QgYW4gYWNjdXJhdGUgY2hlY2sgZm9yIFNTUi5cbiAgLy8gVGhpcyBpcyBvbmx5IGluIHBsYWNlIGZvciBlbW90aW9uIGNvbXBhdC5cbiAgLy8gVE9ETzogUmV2aXNpdCBvbmNlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMjAwNDcgaXMgcmVzb2x2ZWQuXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgd2FybmluZ0hpbnQ7XG4gIGNvbnN0IGVsZW1lbnRUeXBlID0gZWxlbWVudC50eXBlO1xuICAvKipcbiAgICogQmxhY2tsaXN0aW5nIGluc3RlYWQgb2Ygd2hpdGVsaXN0aW5nXG4gICAqXG4gICAqIEJsYWNrbGlzdGluZyB3aWxsIG1pc3Mgc29tZSBjb21wb25lbnRzLCBzdWNoIGFzIFJlYWN0LkZyYWdtZW50LiBUaG9zZSB3aWxsIGF0IGxlYXN0XG4gICAqIHRyaWdnZXIgYSB3YXJuaW5nIGluIFJlYWN0LlxuICAgKiBXZSBjYW4ndCB3aGl0ZWxpc3QgYmVjYXVzZSB0aGVyZSBpcyBubyBzYWZlIHdheSB0byBkZXRlY3QgUmVhY3QuZm9yd2FyZFJlZlxuICAgKiBvciBjbGFzcyBjb21wb25lbnRzLiBcIlNhZmVcIiBtZWFucyB0aGVyZSdzIG5vIHB1YmxpYyBBUEkuXG4gICAqXG4gICAqL1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudFR5cGUgPT09ICdmdW5jdGlvbicgJiYgIWlzQ2xhc3NDb21wb25lbnQoZWxlbWVudFR5cGUpKSB7XG4gICAgd2FybmluZ0hpbnQgPSAnRGlkIHlvdSBhY2NpZGVudGFsbHkgdXNlIGEgcGxhaW4gZnVuY3Rpb24gY29tcG9uZW50IGZvciBhbiBlbGVtZW50IGluc3RlYWQ/JztcbiAgfVxuXG4gIGlmICh3YXJuaW5nSGludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgSW52YWxpZCAke2xvY2F0aW9ufSBcXGAke3NhZmVQcm9wTmFtZX1cXGAgc3VwcGxpZWQgdG8gXFxgJHtjb21wb25lbnROYW1lfVxcYC4gYCArIGBFeHBlY3RlZCBhbiBlbGVtZW50IHRoYXQgY2FuIGhvbGQgYSByZWYuICR7d2FybmluZ0hpbnR9IGAgKyAnRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvY2F2ZWF0LXdpdGgtcmVmcy1ndWlkZScpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IGVsZW1lbnRBY2NlcHRpbmdSZWYgPSBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMuZWxlbWVudCwgYWNjZXB0aW5nUmVmKTtcbmVsZW1lbnRBY2NlcHRpbmdSZWYuaXNSZXF1aXJlZCA9IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsIGFjY2VwdGluZ1JlZik7XG5leHBvcnQgZGVmYXVsdCBlbGVtZW50QWNjZXB0aW5nUmVmOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2hhaW5Qcm9wVHlwZXMgZnJvbSAnLi9jaGFpblByb3BUeXBlcyc7XG5cbmZ1bmN0aW9uIGlzQ2xhc3NDb21wb25lbnQoZWxlbWVudFR5cGUpIHtcbiAgLy8gZWxlbWVudFR5cGUucHJvdG90eXBlPy5pc1JlYWN0Q29tcG9uZW50XG4gIGNvbnN0IHtcbiAgICBwcm90b3R5cGUgPSB7fVxuICB9ID0gZWxlbWVudFR5cGU7XG4gIHJldHVybiBCb29sZWFuKHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudFR5cGVBY2NlcHRpbmdSZWYocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIGNvbnN0IHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgY29uc3Qgc2FmZVByb3BOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gIGlmIChwcm9wVmFsdWUgPT0gbnVsbCB8fCAvLyBXaGVuIHNlcnZlci1zaWRlIHJlbmRlcmluZyBSZWFjdCBkb2Vzbid0IHdhcm4gZWl0aGVyLlxuICAvLyBUaGlzIGlzIG5vdCBhbiBhY2N1cmF0ZSBjaGVjayBmb3IgU1NSLlxuICAvLyBUaGlzIGlzIG9ubHkgaW4gcGxhY2UgZm9yIGVtb3Rpb24gY29tcGF0LlxuICAvLyBUT0RPOiBSZXZpc2l0IG9uY2UgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8yMDA0NyBpcyByZXNvbHZlZC5cbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCB3YXJuaW5nSGludDtcbiAgLyoqXG4gICAqIEJsYWNrbGlzdGluZyBpbnN0ZWFkIG9mIHdoaXRlbGlzdGluZ1xuICAgKlxuICAgKiBCbGFja2xpc3Rpbmcgd2lsbCBtaXNzIHNvbWUgY29tcG9uZW50cywgc3VjaCBhcyBSZWFjdC5GcmFnbWVudC4gVGhvc2Ugd2lsbCBhdCBsZWFzdFxuICAgKiB0cmlnZ2VyIGEgd2FybmluZyBpbiBSZWFjdC5cbiAgICogV2UgY2FuJ3Qgd2hpdGVsaXN0IGJlY2F1c2UgdGhlcmUgaXMgbm8gc2FmZSB3YXkgdG8gZGV0ZWN0IFJlYWN0LmZvcndhcmRSZWZcbiAgICogb3IgY2xhc3MgY29tcG9uZW50cy4gXCJTYWZlXCIgbWVhbnMgdGhlcmUncyBubyBwdWJsaWMgQVBJLlxuICAgKlxuICAgKi9cblxuICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNDbGFzc0NvbXBvbmVudChwcm9wVmFsdWUpKSB7XG4gICAgd2FybmluZ0hpbnQgPSAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcHJvdmlkZSBhIHBsYWluIGZ1bmN0aW9uIGNvbXBvbmVudCBpbnN0ZWFkPyc7XG4gIH1cblxuICBpZiAod2FybmluZ0hpbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYEludmFsaWQgJHtsb2NhdGlvbn0gXFxgJHtzYWZlUHJvcE5hbWV9XFxgIHN1cHBsaWVkIHRvIFxcYCR7Y29tcG9uZW50TmFtZX1cXGAuIGAgKyBgRXhwZWN0ZWQgYW4gZWxlbWVudCB0eXBlIHRoYXQgY2FuIGhvbGQgYSByZWYuICR7d2FybmluZ0hpbnR9IGAgKyAnRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvY2F2ZWF0LXdpdGgtcmVmcy1ndWlkZScpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5lbGVtZW50VHlwZSwgZWxlbWVudFR5cGVBY2NlcHRpbmdSZWYpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuLy8gVGhpcyBtb2R1bGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2FpcmJuYi9wcm9wLXR5cGVzLWV4YWN0IHJlcG9zaXRvcnkuXG4vLyBIb3dldmVyLCBpbiBvcmRlciB0byByZWR1Y2UgdGhlIG51bWJlciBvZiBkZXBlbmRlbmNpZXMgYW5kIHRvIHJlbW92ZSBzb21lIGV4dHJhIHNhZmUgY2hlY2tzXG4vLyB0aGUgbW9kdWxlIHdhcyBmb3JrZWQuXG5jb25zdCBzcGVjaWFsUHJvcGVydHkgPSAnZXhhY3QtcHJvcDogXFx1MjAwYic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGFjdFByb3AocHJvcFR5cGVzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIHByb3BUeXBlcztcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJvcFR5cGVzLCB7XG4gICAgW3NwZWNpYWxQcm9wZXJ0eV06IHByb3BzID0+IHtcbiAgICAgIGNvbnN0IHVuc3VwcG9ydGVkUHJvcHMgPSBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKHByb3AgPT4gIXByb3BUeXBlcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSk7XG5cbiAgICAgIGlmICh1bnN1cHBvcnRlZFByb3BzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgVGhlIGZvbGxvd2luZyBwcm9wcyBhcmUgbm90IHN1cHBvcnRlZDogJHt1bnN1cHBvcnRlZFByb3BzLm1hcChwcm9wID0+IGBcXGAke3Byb3B9XFxgYCkuam9pbignLCAnKX0uIFBsZWFzZSByZW1vdmUgdGhlbS5gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9KTtcbn0iLCIvKipcbiAqIFdBUk5JTkc6IERvbid0IGltcG9ydCB0aGlzIGRpcmVjdGx5LlxuICogVXNlIGBNdWlFcnJvcmAgZnJvbSBgQG1hdGVyaWFsLXVpL3V0aWxzL21hY3Jvcy9NdWlFcnJvci5tYWNyb2AgaW5zdGVhZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2RlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdE11aUVycm9yTWVzc2FnZShjb2RlKSB7XG4gIC8vIEFwcGx5IGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tdGVtcGxhdGUtbGl0ZXJhbHMgaW4gbG9vc2UgbW9kZVxuICAvLyBsb29zZSBtb2RlIGlzIHNhZmUgaWZmIHdlJ3JlIGNvbmNhdGVuYXRpbmcgcHJpbWl0aXZlc1xuICAvLyBzZWUgaHR0cHM6Ly9iYWJlbGpzLmlvL2RvY3MvZW4vYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS10ZW1wbGF0ZS1saXRlcmFscyNsb29zZVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIHByZWZlci10ZW1wbGF0ZSAqL1xuICBsZXQgdXJsID0gJ2h0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3Byb2R1Y3Rpb24tZXJyb3IvP2NvZGU9JyArIGNvZGU7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAvLyByZXN0IHBhcmFtcyBvdmVyLXRyYW5zcGlsZSBmb3IgdGhpcyBjYXNlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgIHVybCArPSAnJmFyZ3NbXT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tpXSk7XG4gIH1cblxuICByZXR1cm4gJ01pbmlmaWVkIE1hdGVyaWFsLVVJIGVycm9yICMnICsgY29kZSArICc7IHZpc2l0ICcgKyB1cmwgKyAnIGZvciB0aGUgZnVsbCBtZXNzYWdlLic7XG4gIC8qIGVzbGludC1lbmFibGUgcHJlZmVyLXRlbXBsYXRlICovXG59IiwiaW1wb3J0IHsgRm9yd2FyZFJlZiwgTWVtbyB9IGZyb20gJ3JlYWN0LWlzJzsgLy8gU2ltcGxpZmllZCBwb2x5ZmlsbCBmb3IgSUUxMSBzdXBwb3J0XG4vLyBodHRwczovL2dpdGh1Yi5jb20vSmFtZXNNR3JlZW5lL0Z1bmN0aW9uLm5hbWUvYmxvYi81OGIzMTRkNGE5ODMxMTBjMzY4MmYxMjI4Zjg0NWQzOWNjY2ExODE3L0Z1bmN0aW9uLm5hbWUuanMjTDNcblxuY29uc3QgZm5OYW1lTWF0Y2hSZWdleCA9IC9eXFxzKmZ1bmN0aW9uKD86XFxzfFxccypcXC9cXCouKlxcKlxcL1xccyopKyhbXihcXHMvXSopXFxzKi87XG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVuY3Rpb25OYW1lKGZuKSB7XG4gIGNvbnN0IG1hdGNoID0gYCR7Zm59YC5tYXRjaChmbk5hbWVNYXRjaFJlZ2V4KTtcbiAgY29uc3QgbmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICByZXR1cm4gbmFtZSB8fCAnJztcbn1cblxuZnVuY3Rpb24gZ2V0RnVuY3Rpb25Db21wb25lbnROYW1lKENvbXBvbmVudCwgZmFsbGJhY2sgPSAnJykge1xuICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8IGdldEZ1bmN0aW9uTmFtZShDb21wb25lbnQpIHx8IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgY29uc3QgZnVuY3Rpb25OYW1lID0gZ2V0RnVuY3Rpb25Db21wb25lbnROYW1lKGlubmVyVHlwZSk7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyBgJHt3cmFwcGVyTmFtZX0oJHtmdW5jdGlvbk5hbWV9KWAgOiB3cmFwcGVyTmFtZSk7XG59XG4vKipcbiAqIGNoZXJyeS1waWNrIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzc2OWIxZjI3MGUxMjUxZDlkYmRjZTBmY2JkOWU5MmU1MDJkMDU5YjgvcGFja2FnZXMvc2hhcmVkL2dldENvbXBvbmVudE5hbWUuanNcbiAqIG9yaWdpbmFsbHkgZm9ya2VkIGZyb20gcmVjb21wb3NlL2dldERpc3BsYXlOYW1lIHdpdGggYWRkZWQgSUUxMSBzdXBwb3J0XG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgaWYgKENvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBnZXRGdW5jdGlvbkNvbXBvbmVudE5hbWUoQ29tcG9uZW50LCAnQ29tcG9uZW50Jyk7XG4gIH0gLy8gVHlwZVNjcmlwdCBjYW4ndCBoYXZlIGNvbXBvbmVudHMgYXMgb2JqZWN0cyBidXQgdGhleSBleGlzdCBpbiB0aGUgZm9ybSBvZiBgbWVtb2Agb3IgYFN1c3BlbnNlYFxuXG5cbiAgaWYgKHR5cGVvZiBDb21wb25lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoIChDb21wb25lbnQuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgRm9yd2FyZFJlZjpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKENvbXBvbmVudCwgQ29tcG9uZW50LnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBNZW1vOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUoQ29tcG9uZW50LCBDb21wb25lbnQudHlwZSwgJ21lbW8nKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsIi8vIEEgY2hhbmdlIG9mIHRoZSBicm93c2VyIHpvb20gY2hhbmdlIHRoZSBzY3JvbGxiYXIgc2l6ZS5cbi8vIENyZWRpdCBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi8zZmZlM2E1ZDgyZjZmNTYxYjgyZmY3OGQ4MmIzMmE3ZDE0YWVkNTU4L2pzL3NyYy9tb2RhbC5qcyNMNTEyLUw1MTlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbGJhclNpemUoZG9jKSB7XG4gIGNvbnN0IHNjcm9sbERpdiA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2Nyb2xsRGl2LnN0eWxlLndpZHRoID0gJzk5cHgnO1xuICBzY3JvbGxEaXYuc3R5bGUuaGVpZ2h0ID0gJzk5cHgnO1xuICBzY3JvbGxEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBzY3JvbGxEaXYuc3R5bGUudG9wID0gJy05OTk5cHgnO1xuICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgY29uc3Qgc2Nyb2xsYmFyU2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgZG9jLmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgcmV0dXJuIHNjcm9sbGJhclNpemU7XG59IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGFpblByb3BUeXBlcyB9IGZyb20gJy4vY2hhaW5Qcm9wVHlwZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWVwbWVyZ2UgfSBmcm9tICcuL2RlZXBtZXJnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVsZW1lbnRBY2NlcHRpbmdSZWYgfSBmcm9tICcuL2VsZW1lbnRBY2NlcHRpbmdSZWYnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbGVtZW50VHlwZUFjY2VwdGluZ1JlZiB9IGZyb20gJy4vZWxlbWVudFR5cGVBY2NlcHRpbmdSZWYnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBleGFjdFByb3AgfSBmcm9tICcuL2V4YWN0UHJvcCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gJy4vZm9ybWF0TXVpRXJyb3JNZXNzYWdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0RGlzcGxheU5hbWUgfSBmcm9tICcuL2dldERpc3BsYXlOYW1lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSFRNTEVsZW1lbnRUeXBlIH0gZnJvbSAnLi9IVE1MRWxlbWVudFR5cGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwb255ZmlsbEdsb2JhbCB9IGZyb20gJy4vcG9ueWZpbGxHbG9iYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWZUeXBlIH0gZnJvbSAnLi9yZWZUeXBlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5zdGFibGVfY2FwaXRhbGl6ZSB9IGZyb20gJy4vY2FwaXRhbGl6ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuc3RhYmxlX2NyZWF0ZUNoYWluZWRGdW5jdGlvbiB9IGZyb20gJy4vY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5zdGFibGVfZGVib3VuY2UgfSBmcm9tICcuL2RlYm91bmNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5zdGFibGVfZGVwcmVjYXRlZFByb3BUeXBlIH0gZnJvbSAnLi9kZXByZWNhdGVkUHJvcFR5cGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnN0YWJsZV9pc011aUVsZW1lbnQgfSBmcm9tICcuL2lzTXVpRWxlbWVudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuc3RhYmxlX293bmVyRG9jdW1lbnQgfSBmcm9tICcuL293bmVyRG9jdW1lbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnN0YWJsZV9vd25lcldpbmRvdyB9IGZyb20gJy4vb3duZXJXaW5kb3cnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnN0YWJsZV9yZXF1aXJlUHJvcEZhY3RvcnkgfSBmcm9tICcuL3JlcXVpcmVQcm9wRmFjdG9yeSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuc3RhYmxlX3NldFJlZiB9IGZyb20gJy4vc2V0UmVmJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5zdGFibGVfdXNlRW5oYW5jZWRFZmZlY3QgfSBmcm9tICcuL3VzZUVuaGFuY2VkRWZmZWN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5zdGFibGVfdXNlSWQgfSBmcm9tICcuL3VzZUlkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5zdGFibGVfdW5zdXBwb3J0ZWRQcm9wIH0gZnJvbSAnLi91bnN1cHBvcnRlZFByb3AnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnN0YWJsZV91c2VDb250cm9sbGVkIH0gZnJvbSAnLi91c2VDb250cm9sbGVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5zdGFibGVfdXNlRXZlbnRDYWxsYmFjayB9IGZyb20gJy4vdXNlRXZlbnRDYWxsYmFjayc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuc3RhYmxlX3VzZUZvcmtSZWYgfSBmcm9tICcuL3VzZUZvcmtSZWYnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnN0YWJsZV91c2VJc0ZvY3VzVmlzaWJsZSB9IGZyb20gJy4vdXNlSXNGb2N1c1Zpc2libGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnN0YWJsZV9nZXRTY3JvbGxiYXJTaXplIH0gZnJvbSAnLi9nZXRTY3JvbGxiYXJTaXplJztcbmV4cG9ydCB7IGRldGVjdFNjcm9sbFR5cGUgYXMgdW5zdGFibGVfZGV0ZWN0U2Nyb2xsVHlwZSwgZ2V0Tm9ybWFsaXplZFNjcm9sbExlZnQgYXMgdW5zdGFibGVfZ2V0Tm9ybWFsaXplZFNjcm9sbExlZnQgfSBmcm9tICcuL3Njcm9sbExlZnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VQcmV2aW91c1Byb3BzIH0gZnJvbSAnLi91c2VQcmV2aW91c1Byb3BzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmlzdWFsbHlIaWRkZW4gfSBmcm9tICcuL3Zpc3VhbGx5SGlkZGVuJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW50ZWdlclByb3BUeXBlIH0gZnJvbSAnLi9pbnRlZ2VyUHJvcFR5cGUnOyIsImV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlQnlWYWx1ZSh2YWx1ZSkge1xuICBjb25zdCB2YWx1ZVR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cbiAgc3dpdGNoICh2YWx1ZVR5cGUpIHtcbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICdOYU4nO1xuICAgICAgfVxuXG4gICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICdJbmZpbml0eSc7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gTWF0aC5mbG9vcih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICdmbG9hdCc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnbnVtYmVyJztcblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHZhbHVlVHlwZTtcbiAgfVxufSAvLyBJRSAxMSBzdXBwb3J0XG5cbmZ1bmN0aW9uIHBvbnlmaWxsSXNJbnRlZ2VyKHgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICByZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInICYmIGlzRmluaXRlKHgpICYmIE1hdGguZmxvb3IoeCkgPT09IHg7XG59XG5cbmNvbnN0IGlzSW50ZWdlciA9IE51bWJlci5pc0ludGVnZXIgfHwgcG9ueWZpbGxJc0ludGVnZXI7XG5cbmZ1bmN0aW9uIHJlcXVpcmVkSW50ZWdlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uKSB7XG4gIGNvbnN0IHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICBpZiAocHJvcFZhbHVlID09IG51bGwgfHwgIWlzSW50ZWdlcihwcm9wVmFsdWUpKSB7XG4gICAgY29uc3QgcHJvcFR5cGUgPSBnZXRUeXBlQnlWYWx1ZShwcm9wVmFsdWUpO1xuICAgIHJldHVybiBuZXcgUmFuZ2VFcnJvcihgSW52YWxpZCAke2xvY2F0aW9ufSBcXGAke3Byb3BOYW1lfVxcYCBvZiB0eXBlIFxcYCR7cHJvcFR5cGV9XFxgIHN1cHBsaWVkIHRvIFxcYCR7Y29tcG9uZW50TmFtZX1cXGAsIGV4cGVjdGVkIFxcYGludGVnZXJcXGAuYCk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdG9yKHByb3BzLCBwcm9wTmFtZSwgLi4ub3RoZXIpIHtcbiAgY29uc3QgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gIGlmIChwcm9wVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVpcmVkSW50ZWdlcihwcm9wcywgcHJvcE5hbWUsIC4uLm90aGVyKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdG9yTm9vcCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhbGlkYXRvci5pc1JlcXVpcmVkID0gcmVxdWlyZWRJbnRlZ2VyO1xudmFsaWRhdG9yTm9vcC5pc1JlcXVpcmVkID0gdmFsaWRhdG9yTm9vcDtcbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyB2YWxpZGF0b3JOb29wIDogdmFsaWRhdG9yOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTXVpRWxlbWVudChlbGVtZW50LCBtdWlOYW1lcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpICYmIG11aU5hbWVzLmluZGV4T2YoZWxlbWVudC50eXBlLm11aU5hbWUpICE9PSAtMTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvd25lckRvY3VtZW50KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgJiYgbm9kZS5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xufSIsImltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4vb3duZXJEb2N1bWVudCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvd25lcldpbmRvdyhub2RlKSB7XG4gIGNvbnN0IGRvYyA9IG93bmVyRG9jdW1lbnQobm9kZSk7XG4gIHJldHVybiBkb2MuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xufSIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuY29uc3QgcmVmVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCByZWZUeXBlOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZVByb3BGYWN0b3J5KGNvbXBvbmVudE5hbWVJbkVycm9yLCBDb21wb25lbnQpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gKCkgPT4gbnVsbDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZm9yYmlkLWZvcmVpZ24tcHJvcC10eXBlc1xuXG5cbiAgY29uc3QgcHJldlByb3BUeXBlcyA9IENvbXBvbmVudCA/IF9leHRlbmRzKHt9LCBDb21wb25lbnQucHJvcFR5cGVzKSA6IG51bGw7XG5cbiAgY29uc3QgcmVxdWlyZVByb3AgPSByZXF1aXJlZFByb3AgPT4gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG4gICAgY29uc3QgZGVmYXVsdFR5cGVDaGVja2VyID0gcHJldlByb3BUeXBlcyA9PT0gbnVsbCB8fCBwcmV2UHJvcFR5cGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcmV2UHJvcFR5cGVzW3Byb3BGdWxsTmFtZVNhZmVdO1xuXG4gICAgaWYgKGRlZmF1bHRUeXBlQ2hlY2tlcikge1xuICAgICAgY29uc3QgdHlwZUNoZWNrZXJSZXN1bHQgPSBkZWZhdWx0VHlwZUNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCAuLi5hcmdzKTtcblxuICAgICAgaWYgKHR5cGVDaGVja2VyUmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB0eXBlQ2hlY2tlclJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ3VuZGVmaW5lZCcgJiYgIXByb3BzW3JlcXVpcmVkUHJvcF0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoYFRoZSBwcm9wIFxcYCR7cHJvcEZ1bGxOYW1lU2FmZX1cXGAgb2YgYCArIGBcXGAke2NvbXBvbmVudE5hbWVJbkVycm9yfVxcYCBjYW4gb25seSBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggdGhlIFxcYCR7cmVxdWlyZWRQcm9wfVxcYCBwcm9wLmApO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiByZXF1aXJlUHJvcDtcbn0iLCIvLyBTb3VyY2UgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWxpdGFoZXJpL25vcm1hbGl6ZS1zY3JvbGwtbGVmdFxubGV0IGNhY2hlZFR5cGU7XG4vKipcbiAqIEJhc2VkIG9uIHRoZSBqcXVlcnkgcGx1Z2luIGh0dHBzOi8vZ2l0aHViLmNvbS9vdGhyZWUvanF1ZXJ5LnJ0bC1zY3JvbGwtdHlwZVxuICpcbiAqIFR5cGVzIG9mIHNjcm9sbExlZnQsIGFzc3VtaW5nIHNjcm9sbFdpZHRoPTEwMCBhbmQgZGlyZWN0aW9uIGlzIHJ0bC5cbiAqXG4gKiBUeXBlICAgICAgICAgICAgIHwgPC0gTW9zdCBMZWZ0IHwgTW9zdCBSaWdodCAtPiB8IEluaXRpYWxcbiAqIC0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tIHwgLS0tLS0tLVxuICogZGVmYXVsdCAgICAgICAgICB8IDAgICAgICAgICAgICB8IDEwMCAgICAgICAgICAgfCAxMDBcbiAqIG5lZ2F0aXZlIChzcGVjKikgfCAtMTAwICAgICAgICAgfCAwICAgICAgICAgICAgIHwgMFxuICogcmV2ZXJzZSAgICAgICAgICB8IDEwMCAgICAgICAgICB8IDAgICAgICAgICAgICAgfCAwXG4gKlxuICogRWRnZSA4NTogZGVmYXVsdFxuICogU2FmYXJpIDE0OiBuZWdhdGl2ZVxuICogQ2hyb21lIDg1OiBuZWdhdGl2ZVxuICogRmlyZWZveCA4MTogbmVnYXRpdmVcbiAqIElFMTE6IHJldmVyc2VcbiAqXG4gKiBzcGVjKiBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20tdmlldy8jZG9tLXdpbmRvdy1zY3JvbGxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0U2Nyb2xsVHlwZSgpIHtcbiAgaWYgKGNhY2hlZFR5cGUpIHtcbiAgICByZXR1cm4gY2FjaGVkVHlwZTtcbiAgfVxuXG4gIGNvbnN0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnMTBweCc7XG4gIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMXB4JztcbiAgZHVtbXkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgZHVtbXkuZGlyID0gJ3J0bCc7XG4gIGR1bW15LnN0eWxlLmZvbnRTaXplID0gJzE0cHgnO1xuICBkdW1teS5zdHlsZS53aWR0aCA9ICc0cHgnO1xuICBkdW1teS5zdHlsZS5oZWlnaHQgPSAnMXB4JztcbiAgZHVtbXkuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBkdW1teS5zdHlsZS50b3AgPSAnLTEwMDBweCc7XG4gIGR1bW15LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHVtbXkpO1xuICBjYWNoZWRUeXBlID0gJ3JldmVyc2UnO1xuXG4gIGlmIChkdW1teS5zY3JvbGxMZWZ0ID4gMCkge1xuICAgIGNhY2hlZFR5cGUgPSAnZGVmYXVsdCc7XG4gIH0gZWxzZSB7XG4gICAgZHVtbXkuc2Nyb2xsTGVmdCA9IDE7XG5cbiAgICBpZiAoZHVtbXkuc2Nyb2xsTGVmdCA9PT0gMCkge1xuICAgICAgY2FjaGVkVHlwZSA9ICduZWdhdGl2ZSc7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkdW1teSk7XG4gIHJldHVybiBjYWNoZWRUeXBlO1xufSAvLyBCYXNlZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjQzOTQzNzZcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRTY3JvbGxMZWZ0KGVsZW1lbnQsIGRpcmVjdGlvbikge1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0OyAvLyBQZXJmb3JtIHRoZSBjYWxjdWxhdGlvbnMgb25seSB3aGVuIGRpcmVjdGlvbiBpcyBydGwgdG8gYXZvaWQgbWVzc2luZyB1cCB0aGUgbHRyIGJlaGF2aW9yXG5cbiAgaWYgKGRpcmVjdGlvbiAhPT0gJ3J0bCcpIHtcbiAgICByZXR1cm4gc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIGNvbnN0IHR5cGUgPSBkZXRlY3RTY3JvbGxUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnbmVnYXRpdmUnOlxuICAgICAgcmV0dXJuIGVsZW1lbnQuc2Nyb2xsV2lkdGggLSBlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsTGVmdDtcblxuICAgIGNhc2UgJ3JldmVyc2UnOlxuICAgICAgcmV0dXJuIGVsZW1lbnQuc2Nyb2xsV2lkdGggLSBlbGVtZW50LmNsaWVudFdpZHRoIC0gc2Nyb2xsTGVmdDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc2Nyb2xsTGVmdDtcbiAgfVxufSIsIi8qKlxuICogVE9ETyB2NTogY29uc2lkZXIgbWFraW5nIGl0IHByaXZhdGVcbiAqXG4gKiBwYXNzZXMge3ZhbHVlfSB0byB7cmVmfVxuICpcbiAqIFdBUk5JTkc6IEJlIHN1cmUgdG8gb25seSBjYWxsIHRoaXMgaW5zaWRlIGEgY2FsbGJhY2sgdGhhdCBpcyBwYXNzZWQgYXMgYSByZWYuXG4gKiBPdGhlcndpc2UsIG1ha2Ugc3VyZSB0byBjbGVhbnVwIHRoZSBwcmV2aW91cyB7cmVmfSBpZiBpdCBjaGFuZ2VzLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWktb3JnL21hdGVyaWFsLXVpL2lzc3Vlcy8xMzUzOVxuICpcbiAqIFVzZWZ1bCBpZiB5b3Ugd2FudCB0byBleHBvc2UgdGhlIHJlZiBvZiBhbiBpbm5lciBjb21wb25lbnQgdG8gdGhlIHB1YmxpYyBBUElcbiAqIHdoaWxlIHN0aWxsIHVzaW5nIGl0IGluc2lkZSB0aGUgY29tcG9uZW50LlxuICogQHBhcmFtIHJlZiBBIHJlZiBjYWxsYmFjayBvciByZWYgb2JqZWN0LiBJZiBhbnl0aGluZyBmYWxzeSwgdGhpcyBpcyBhIG5vLW9wLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRSZWYocmVmLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJlZih2YWx1ZSk7XG4gIH0gZWxzZSBpZiAocmVmKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuc3VwcG9ydGVkUHJvcChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgaWYgKHR5cGVvZiBwcm9wc1twcm9wTmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgVGhlIHByb3AgXFxgJHtwcm9wRnVsbE5hbWVTYWZlfVxcYCBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgcmVtb3ZlIGl0LmApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MsIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ29udHJvbGxlZCh7XG4gIGNvbnRyb2xsZWQsXG4gIGRlZmF1bHQ6IGRlZmF1bHRQcm9wLFxuICBuYW1lLFxuICBzdGF0ZSA9ICd2YWx1ZSdcbn0pIHtcbiAgLy8gaXNDb250cm9sbGVkIGlzIGlnbm9yZWQgaW4gdGhlIGhvb2sgZGVwZW5kZW5jeSBsaXN0cyBhcyBpdCBzaG91bGQgbmV2ZXIgY2hhbmdlLlxuICBjb25zdCB7XG4gICAgY3VycmVudDogaXNDb250cm9sbGVkXG4gIH0gPSBSZWFjdC51c2VSZWYoY29udHJvbGxlZCAhPT0gdW5kZWZpbmVkKTtcbiAgY29uc3QgW3ZhbHVlU3RhdGUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRQcm9wKTtcbiAgY29uc3QgdmFsdWUgPSBpc0NvbnRyb2xsZWQgPyBjb250cm9sbGVkIDogdmFsdWVTdGF0ZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoaXNDb250cm9sbGVkICE9PSAoY29udHJvbGxlZCAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtgTWF0ZXJpYWwtVUk6IEEgY29tcG9uZW50IGlzIGNoYW5naW5nIHRoZSAke2lzQ29udHJvbGxlZCA/ICcnIDogJ3VuJ31jb250cm9sbGVkICR7c3RhdGV9IHN0YXRlIG9mICR7bmFtZX0gdG8gYmUgJHtpc0NvbnRyb2xsZWQgPyAndW4nIDogJyd9Y29udHJvbGxlZC5gLCAnRWxlbWVudHMgc2hvdWxkIG5vdCBzd2l0Y2ggZnJvbSB1bmNvbnRyb2xsZWQgdG8gY29udHJvbGxlZCAob3IgdmljZSB2ZXJzYSkuJywgYERlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgJHtuYW1lfSBgICsgJ2VsZW1lbnQgZm9yIHRoZSBsaWZldGltZSBvZiB0aGUgY29tcG9uZW50LicsIFwiVGhlIG5hdHVyZSBvZiB0aGUgc3RhdGUgaXMgZGV0ZXJtaW5lZCBkdXJpbmcgdGhlIGZpcnN0IHJlbmRlci4gSXQncyBjb25zaWRlcmVkIGNvbnRyb2xsZWQgaWYgdGhlIHZhbHVlIGlzIG5vdCBgdW5kZWZpbmVkYC5cIiwgJ01vcmUgaW5mbzogaHR0cHM6Ly9mYi5tZS9yZWFjdC1jb250cm9sbGVkLWNvbXBvbmVudHMnXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfSwgW3N0YXRlLCBuYW1lLCBjb250cm9sbGVkXSk7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVudDogZGVmYXVsdFZhbHVlXG4gICAgfSA9IFJlYWN0LnVzZVJlZihkZWZhdWx0UHJvcCk7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICghaXNDb250cm9sbGVkICYmIGRlZmF1bHRWYWx1ZSAhPT0gZGVmYXVsdFByb3ApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbYE1hdGVyaWFsLVVJOiBBIGNvbXBvbmVudCBpcyBjaGFuZ2luZyB0aGUgZGVmYXVsdCAke3N0YXRlfSBzdGF0ZSBvZiBhbiB1bmNvbnRyb2xsZWQgJHtuYW1lfSBhZnRlciBiZWluZyBpbml0aWFsaXplZC4gYCArIGBUbyBzdXBwcmVzcyB0aGlzIHdhcm5pbmcgb3B0IHRvIHVzZSBhIGNvbnRyb2xsZWQgJHtuYW1lfS5gXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfSwgW0pTT04uc3RyaW5naWZ5KGRlZmF1bHRQcm9wKV0pO1xuICB9XG5cbiAgY29uc3Qgc2V0VmFsdWVJZlVuY29udHJvbGxlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKG5ld1ZhbHVlID0+IHtcbiAgICBpZiAoIWlzQ29udHJvbGxlZCkge1xuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZUlmVW5jb250cm9sbGVkXTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0O1xuZXhwb3J0IGRlZmF1bHQgdXNlRW5oYW5jZWRFZmZlY3Q7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUVuaGFuY2VkRWZmZWN0IGZyb20gJy4vdXNlRW5oYW5jZWRFZmZlY3QnO1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE0MDk5I2lzc3VlY29tbWVudC00NDAwMTM4OTJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VFdmVudENhbGxiYWNrKGZuKSB7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihmbik7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudCA9IGZuO1xuICB9KTtcbiAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKCguLi5hcmdzKSA9PiAvLyBAdHMtZXhwZWN0LWVycm9yIGhpZGUgYHRoaXNgXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiYW4tY29tbWEtb3BlcmF0b3JcbiAgKDAsIHJlZi5jdXJyZW50KSguLi5hcmdzKSwgW10pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzZXRSZWYgZnJvbSAnLi9zZXRSZWYnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9ya1JlZihyZWZBLCByZWZCKSB7XG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIGlmIHRoZSByZWYgcHJvcHMgY2hhbmdlIGFuZCBhcmUgZGVmaW5lZC5cbiAgICogVGhpcyBtZWFucyByZWFjdCB3aWxsIGNhbGwgdGhlIG9sZCBmb3JrUmVmIHdpdGggYG51bGxgIGFuZCB0aGUgbmV3IGZvcmtSZWZcbiAgICogd2l0aCB0aGUgcmVmLiBDbGVhbnVwIG5hdHVyYWxseSBlbWVyZ2VzIGZyb20gdGhpcyBiZWhhdmlvci5cbiAgICovXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAocmVmQSA9PSBudWxsICYmIHJlZkIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZlZhbHVlID0+IHtcbiAgICAgIHNldFJlZihyZWZBLCByZWZWYWx1ZSk7XG4gICAgICBzZXRSZWYocmVmQiwgcmVmVmFsdWUpO1xuICAgIH07XG4gIH0sIFtyZWZBLCByZWZCXSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSWQoaWRPdmVycmlkZSkge1xuICBjb25zdCBbZGVmYXVsdElkLCBzZXREZWZhdWx0SWRdID0gUmVhY3QudXNlU3RhdGUoaWRPdmVycmlkZSk7XG4gIGNvbnN0IGlkID0gaWRPdmVycmlkZSB8fCBkZWZhdWx0SWQ7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRlZmF1bHRJZCA9PSBudWxsKSB7XG4gICAgICAvLyBGYWxsYmFjayB0byB0aGlzIGRlZmF1bHQgaWQgd2hlbiBwb3NzaWJsZS5cbiAgICAgIC8vIFVzZSB0aGUgcmFuZG9tIHZhbHVlIGZvciBjbGllbnQtc2lkZSByZW5kZXJpbmcgb25seS5cbiAgICAgIC8vIFdlIGNhbid0IHVzZSBpdCBzZXJ2ZXItc2lkZS5cbiAgICAgIHNldERlZmF1bHRJZChgbXVpLSR7TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWU1KX1gKTtcbiAgICB9XG4gIH0sIFtkZWZhdWx0SWRdKTtcbiAgcmV0dXJuIGlkO1xufSIsIi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGUvYmxvYi92NC4xLjUvc3JjL2ZvY3VzLXZpc2libGUuanNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmxldCBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbmxldCBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IGZhbHNlO1xubGV0IGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5VGltZW91dCA9IG51bGw7XG5jb25zdCBpbnB1dFR5cGVzV2hpdGVsaXN0ID0ge1xuICB0ZXh0OiB0cnVlLFxuICBzZWFyY2g6IHRydWUsXG4gIHVybDogdHJ1ZSxcbiAgdGVsOiB0cnVlLFxuICBlbWFpbDogdHJ1ZSxcbiAgcGFzc3dvcmQ6IHRydWUsXG4gIG51bWJlcjogdHJ1ZSxcbiAgZGF0ZTogdHJ1ZSxcbiAgbW9udGg6IHRydWUsXG4gIHdlZWs6IHRydWUsXG4gIHRpbWU6IHRydWUsXG4gIGRhdGV0aW1lOiB0cnVlLFxuICAnZGF0ZXRpbWUtbG9jYWwnOiB0cnVlXG59O1xuLyoqXG4gKiBDb21wdXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBhdXRvbWF0aWNhbGx5IHRyaWdnZXIgdGhlXG4gKiBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgYmVpbmcgYWRkZWQsIGkuZS4gd2hldGhlciBpdCBzaG91bGQgYWx3YXlzIG1hdGNoXG4gKiBgOmZvY3VzLXZpc2libGVgIHdoZW4gZm9jdXNlZC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gZm9jdXNUcmlnZ2Vyc0tleWJvYXJkTW9kYWxpdHkobm9kZSkge1xuICBjb25zdCB7XG4gICAgdHlwZSxcbiAgICB0YWdOYW1lXG4gIH0gPSBub2RlO1xuXG4gIGlmICh0YWdOYW1lID09PSAnSU5QVVQnICYmIGlucHV0VHlwZXNXaGl0ZWxpc3RbdHlwZV0gJiYgIW5vZGUucmVhZE9ubHkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0YWdOYW1lID09PSAnVEVYVEFSRUEnICYmICFub2RlLnJlYWRPbmx5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAobm9kZS5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKiBLZWVwIHRyYWNrIG9mIG91ciBrZXlib2FyZCBtb2RhbGl0eSBzdGF0ZSB3aXRoIGBoYWRLZXlib2FyZEV2ZW50YC5cbiAqIElmIHRoZSBtb3N0IHJlY2VudCB1c2VyIGludGVyYWN0aW9uIHdhcyB2aWEgdGhlIGtleWJvYXJkO1xuICogYW5kIHRoZSBrZXkgcHJlc3MgZGlkIG5vdCBpbmNsdWRlIGEgbWV0YSwgYWx0L29wdGlvbiwgb3IgY29udHJvbCBrZXk7XG4gKiB0aGVuIHRoZSBtb2RhbGl0eSBpcyBrZXlib2FyZC4gT3RoZXJ3aXNlLCB0aGUgbW9kYWxpdHkgaXMgbm90IGtleWJvYXJkLlxuICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICovXG5cblxuZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICBpZiAoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGhhZEtleWJvYXJkRXZlbnQgPSB0cnVlO1xufVxuLyoqXG4gKiBJZiBhdCBhbnkgcG9pbnQgYSB1c2VyIGNsaWNrcyB3aXRoIGEgcG9pbnRpbmcgZGV2aWNlLCBlbnN1cmUgdGhhdCB3ZSBjaGFuZ2VcbiAqIHRoZSBtb2RhbGl0eSBhd2F5IGZyb20ga2V5Ym9hcmQuXG4gKiBUaGlzIGF2b2lkcyB0aGUgc2l0dWF0aW9uIHdoZXJlIGEgdXNlciBwcmVzc2VzIGEga2V5IG9uIGFuIGFscmVhZHkgZm9jdXNlZFxuICogZWxlbWVudCwgYW5kIHRoZW4gY2xpY2tzIG9uIGEgZGlmZmVyZW50IGVsZW1lbnQsIGZvY3VzaW5nIGl0IHdpdGggYVxuICogcG9pbnRpbmcgZGV2aWNlLCB3aGlsZSB3ZSBzdGlsbCB0aGluayB3ZSdyZSBpbiBrZXlib2FyZCBtb2RhbGl0eS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGhhbmRsZVBvaW50ZXJEb3duKCkge1xuICBoYWRLZXlib2FyZEV2ZW50ID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gIGlmICh0aGlzLnZpc2liaWxpdHlTdGF0ZSA9PT0gJ2hpZGRlbicpIHtcbiAgICAvLyBJZiB0aGUgdGFiIGJlY29tZXMgYWN0aXZlIGFnYWluLCB0aGUgYnJvd3NlciB3aWxsIGhhbmRsZSBjYWxsaW5nIGZvY3VzXG4gICAgLy8gb24gdGhlIGVsZW1lbnQgKFNhZmFyaSBhY3R1YWxseSBjYWxscyBpdCB0d2ljZSkuXG4gICAgLy8gSWYgdGhpcyB0YWIgY2hhbmdlIGNhdXNlZCBhIGJsdXIgb24gYW4gZWxlbWVudCB3aXRoIGZvY3VzLXZpc2libGUsXG4gICAgLy8gcmUtYXBwbHkgdGhlIGNsYXNzIHdoZW4gdGhlIHVzZXIgc3dpdGNoZXMgYmFjayB0byB0aGUgdGFiLlxuICAgIGlmIChoYWRGb2N1c1Zpc2libGVSZWNlbnRseSkge1xuICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZXBhcmUoZG9jKSB7XG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93biwgdHJ1ZSk7XG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVQb2ludGVyRG93biwgdHJ1ZSk7XG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGhhbmRsZVBvaW50ZXJEb3duLCB0cnVlKTtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVQb2ludGVyRG93biwgdHJ1ZSk7XG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSwgdHJ1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZWFyZG93bihkb2MpIHtcbiAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duLCB0cnVlKTtcbiAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVBvaW50ZXJEb3duLCB0cnVlKTtcbiAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgaGFuZGxlUG9pbnRlckRvd24sIHRydWUpO1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVBvaW50ZXJEb3duLCB0cnVlKTtcbiAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gaXNGb2N1c1Zpc2libGUoZXZlbnQpIHtcbiAgY29uc3Qge1xuICAgIHRhcmdldFxuICB9ID0gZXZlbnQ7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gdGFyZ2V0Lm1hdGNoZXMoJzpmb2N1cy12aXNpYmxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7Ly8gQnJvd3NlcnMgbm90IGltcGxlbWVudGluZyA6Zm9jdXMtdmlzaWJsZSB3aWxsIHRocm93IGEgU3ludGF4RXJyb3IuXG4gICAgLy8gV2UgdXNlIG91ciBvd24gaGV1cmlzdGljIGZvciB0aG9zZSBicm93c2Vycy5cbiAgICAvLyBSZXRocm93IG1pZ2h0IGJlIGJldHRlciBpZiBpdCdzIG5vdCB0aGUgZXhwZWN0ZWQgZXJyb3IgYnV0IGRvIHdlIHJlYWxseVxuICAgIC8vIHdhbnQgdG8gY3Jhc2ggaWYgZm9jdXMtdmlzaWJsZSBtYWxmdW5jdGlvbmVkP1xuICB9IC8vIE5vIG5lZWQgZm9yIHZhbGlkRm9jdXNUYXJnZXQgY2hlY2suIFRoZSB1c2VyIGRvZXMgdGhhdCBieSBhdHRhY2hpbmcgaXQgdG9cbiAgLy8gZm9jdXNhYmxlIGV2ZW50cyBvbmx5LlxuXG5cbiAgcmV0dXJuIGhhZEtleWJvYXJkRXZlbnQgfHwgZm9jdXNUcmlnZ2Vyc0tleWJvYXJkTW9kYWxpdHkodGFyZ2V0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSXNGb2N1c1Zpc2libGUoKSB7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKG5vZGUgPT4ge1xuICAgIGlmIChub2RlICE9IG51bGwpIHtcbiAgICAgIHByZXBhcmUobm9kZS5vd25lckRvY3VtZW50KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgY29uc3QgaXNGb2N1c1Zpc2libGVSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAvKipcbiAgICogU2hvdWxkIGJlIGNhbGxlZCBpZiBhIGJsdXIgZXZlbnQgaXMgZmlyZWRcbiAgICovXG5cbiAgZnVuY3Rpb24gaGFuZGxlQmx1clZpc2libGUoKSB7XG4gICAgLy8gY2hlY2tpbmcgYWdhaW5zdCBwb3RlbnRpYWwgc3RhdGUgdmFyaWFibGUgZG9lcyBub3Qgc3VmZmljZSBpZiB3ZSBmb2N1cyBhbmQgYmx1ciBzeW5jaHJvbm91c2x5LlxuICAgIC8vIFJlYWN0IHdvdWxkbid0IGhhdmUgdGltZSB0byB0cmlnZ2VyIGEgcmUtcmVuZGVyIHNvIGBmb2N1c1Zpc2libGVgIHdvdWxkIGJlIHN0YWxlLlxuICAgIC8vIElkZWFsbHkgd2Ugd291bGQgYWRqdXN0IGBpc0ZvY3VzVmlzaWJsZShldmVudClgIHRvIGxvb2sgYXQgYHJlbGF0ZWRUYXJnZXRgIGZvciBibHVyIGV2ZW50cy5cbiAgICAvLyBUaGlzIGRvZXNuJ3Qgd29yayBpbiBJRTExIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzM3NTFcbiAgICAvLyBUT0RPOiBjaGVjayBhZ2FpbiBpZiBSZWFjdCByZWxlYXNlcyB0aGVpciBpbnRlcm5hbCBjaGFuZ2VzIHRvIGZvY3VzIGV2ZW50IGhhbmRsaW5nIChodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8xOTE4NikuXG4gICAgaWYgKGlzRm9jdXNWaXNpYmxlUmVmLmN1cnJlbnQpIHtcbiAgICAgIC8vIFRvIGRldGVjdCBhIHRhYi93aW5kb3cgc3dpdGNoLCB3ZSBsb29rIGZvciBhIGJsdXIgZXZlbnQgZm9sbG93ZWRcbiAgICAgIC8vIHJhcGlkbHkgYnkgYSB2aXNpYmlsaXR5IGNoYW5nZS5cbiAgICAgIC8vIElmIHdlIGRvbid0IHNlZSBhIHZpc2liaWxpdHkgY2hhbmdlIHdpdGhpbiAxMDBtcywgaXQncyBwcm9iYWJseSBhXG4gICAgICAvLyByZWd1bGFyIGZvY3VzIGNoYW5nZS5cbiAgICAgIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gdHJ1ZTtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0KTtcbiAgICAgIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSBmYWxzZTtcbiAgICAgIH0sIDEwMCk7XG4gICAgICBpc0ZvY3VzVmlzaWJsZVJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIFNob3VsZCBiZSBjYWxsZWQgaWYgYSBibHVyIGV2ZW50IGlzIGZpcmVkXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaGFuZGxlRm9jdXNWaXNpYmxlKGV2ZW50KSB7XG4gICAgaWYgKGlzRm9jdXNWaXNpYmxlKGV2ZW50KSkge1xuICAgICAgaXNGb2N1c1Zpc2libGVSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzRm9jdXNWaXNpYmxlUmVmLFxuICAgIG9uRm9jdXM6IGhhbmRsZUZvY3VzVmlzaWJsZSxcbiAgICBvbkJsdXI6IGhhbmRsZUJsdXJWaXNpYmxlLFxuICAgIHJlZlxuICB9O1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlUHJldmlvdXNQcm9wcyA9IHZhbHVlID0+IHtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUHJldmlvdXNQcm9wczsiLCJjb25zdCB2aXN1YWxseUhpZGRlbiA9IHtcbiAgYm9yZGVyOiAwLFxuICBjbGlwOiAncmVjdCgwIDAgMCAwKScsXG4gIGhlaWdodDogJzFweCcsXG4gIG1hcmdpbjogLTEsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcGFkZGluZzogMCxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICB3aWR0aDogJzFweCdcbn07XG5leHBvcnQgZGVmYXVsdCB2aXN1YWxseUhpZGRlbjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCB3aXRoUm91dGVyLCBIYXNoUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL0Fib3V0XCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuXG5pbXBvcnQgQ29tcGFueURldGFpbHMgZnJvbSBcIi4vQ29tcGFueURldGFpbHNcIjtcbmltcG9ydCBDb21wYXJpc29uIGZyb20gXCIuL0NvbXBhcmlzb25cIjtcbi8vIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSBcIi4vTmF2aWdhdGlvbkJhclwiO1xuaW1wb3J0IFBhZ2VOb3RGb3VuZCBmcm9tIFwiLi9QYWdlTm90Rm91bmRcIjtcbi8vIGltcG9ydCBQZXJmb3JtYW5jZSBmcm9tIFwiLi9QZXJmb3JtYW5jZVwiO1xuaW1wb3J0IFJldmVudWUgZnJvbSBcIi4vUmV2ZW51ZVwiO1xuaW1wb3J0IFNlY3RvcnMgZnJvbSBcIi4vU2VjdG9yc1wiO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4vU2lkZUJhclwiO1xuaW1wb3J0IFNQNTAwIGZyb20gXCIuL1NQNTAwXCI7XG5pbXBvcnQgVG9wIGZyb20gXCIuL1RvcFwiO1xuaW1wb3J0IFNpbXVsYXRpb24gZnJvbSBcIi4vU2ltdWxhdGlvblwiO1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDMwMDtcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICB9LFxuICBhcHBCYXI6IHtcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgZmxleFNocmluazogMCxcbiAgfSxcbiAgZHJhd2VyUGFwZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gIH0sXG4gIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXG4gIHRvb2xiYXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IDMwLFxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOiBcIndoaXRlXCIsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgbWluV2lkdGg6IFwiNDgwcHhcIixcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICB9LFxufSk7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29tcGFueU5hbWVzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJIb21lXCIpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEhhc2hSb3V0ZXI+XG4gICAgICAgIDxBcHBCYXJcbiAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfVxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjNUNEQjk1XCIsIGNvbG9yOiBcIiMwNTM4NkJcIn19XG4gICAgICAgID5cbiAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIC8+XG4gICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxuICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhbmNob3I9XCJsZWZ0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlN0b2NrIFRyZW5kczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDxTaWRlQmFyIC8+XG4gICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgLz5cbiAgICAgICAgICAgICAgey8qIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz4gKi99XG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgICAgICAgICAgey8qIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BlcmZvcm1hbmNlXCIgY29tcG9uZW50PXtQZXJmb3JtYW5jZX0gLz4gKi99XG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgcGF0aD1cIi90b3AvOm51bS86dHlwZVwiXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgbnVtLCB0eXBlIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9ID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPFRvcCBrZXk9e2BudW09JHtudW19JnR5cGU9JHt0eXBlfWB9IHsuLi5wcm9wc30gLz47XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2VjdG9yc1wiIGNvbXBvbmVudD17U2VjdG9yc30gLz5cbiAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICBwYXRoPVwiL2NvbXBhbnlkZXRhaWxzLzpjb21wYW55XCJcbiAgICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBjb21wYW55IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9ID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29tcGFueURldGFpbHMga2V5PXtgY29tcGFueT0ke2NvbXBhbnl9YH0gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgIHBhdGg9XCIvcmV2ZW51ZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXsoKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8UmV2ZW51ZSBjb21wYW55TmFtZXM9e3RoaXMuc3RhdGUuY29tcGFueU5hbWVzfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3NwNTAwXCIgY29tcG9uZW50PXtTUDUwMH0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY29tcGFyaXNvblwiIGNvbXBvbmVudD17Q29tcGFyaXNvbn0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2ltdWxhdGlvblwiIGNvbXBvbmVudD17U2ltdWxhdGlvbn0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17UGFnZU5vdEZvdW5kfSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9IYXNoUm91dGVyPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKSh3aXRoUm91dGVyKEhvbWUpKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEdyaWQsXG4gIEZvcm1Db250cm9sLFxuICBJbnB1dExhYmVsLFxuICBTZWxlY3QsXG4gIE1lbnVJdGVtLFxuICBQYXBlcixcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgdW5kZXJzY29yZSBmcm9tIFwidW5kZXJzY29yZVwiO1xuaW1wb3J0IHtcbiAgR3JpZFRvb2xiYXJDb250YWluZXIsXG4gIEdyaWRUb29sYmFyRXhwb3J0LFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZFwiO1xuXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5cblxuY2xhc3MgU2ltdWxhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZENvbXBhbnk6IFwiXCIsXG4gICAgICBjb21wYW55TmFtZXM6IFtdLFxuICAgICAgZGF5czogMSxcbiAgICAgIGludmVzdG1lbnQ6IDEsXG4gICAgICBzdGFydGRhdGU6IFwiMjAxNy0wMy0xMFwiLFxuICAgICAgcmVzcG9uc2U6IFtdLFxuICAgICAgY29sczogW10sXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHNlbGRheXM6IFwiXCIsXG4gICAgICBzaW11bGF0aW9udG9wOiBbXSxcbiAgICAgIGNvbXBhbnlzZWxlY3RlZGFmdGVyc2ltdWxhdGlvbiA6IFwiXCIsXG4gICAgICBjb21wYW55ZGV0YWlsc2FmdGVyc2ltdWxhdGlvbiA6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBTUDUwMCA9XG4gICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYWlrcjc4OS9zdG9jay1hbmFseXNpcy10b29sLTEwMTEvbWFzdGVyL0RhdGEvU1A1MDBDb21wYW5pZXMuanNvblwiO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFNQNTAwKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBsZXQgU1A1MDBDb21wYW5pZXMgPSBPYmplY3Qua2V5cyh1bmRlcnNjb3JlLmludmVydChzLmRhdGEpKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGFueU5hbWVzOiBTUDUwMENvbXBhbmllcyB9LCAoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIlNpbXVsYXRpb25cIik7XG4gIH07XG5cbiAgb25DbGlja1N1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBhbnkgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFyYW1zID1cbiAgICAgIFwiY29tcGFueT1cIiArXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcGFueSArXG4gICAgICBcIiZcIiArXG4gICAgICBcImludmVzdG1lbnQ9XCIgK1xuICAgICAgdGhpcy5zdGF0ZS5pbnZlc3RtZW50ICtcbiAgICAgIFwiJlwiICtcbiAgICAgIFwiZGF5cz1cIiArXG4gICAgICB0aGlzLnN0YXRlLmRheXMgK1xuICAgICAgXCImXCIgK1xuICAgICAgXCJkYXRlPVwiICtcbiAgICAgIHRoaXMuc3RhdGUuc3RhcnRkYXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9zaW11bGF0aW9uP1wiICsgcGFyYW1zKVxuICAgICAgLnRoZW4oKHMpID0+IHtcbiAgICAgICAgaWYgKHMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBsZXQgcmVzcCA9IHMuZGF0YTtcbiAgICAgICAgICBpZiAocmVzcC5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgbGV0IGNvbHMgPSBbXTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlc3BbMF0pLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbHMucHVzaCh7IGZpZWxkOiBrZXksIGhlYWRlck5hbWU6IGtleSwgd2lkdGg6IDE1MCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IHJvd3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocmVzcFtpXSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzcFtpXVtcImlkXCJdID0gaTtcbiAgICAgICAgICAgICAgICByb3dzLnB1c2gocmVzcFtpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgIHsgcmVzcG9uc2U6IHJvd3MsIGNvbHM6IGNvbHMsIGxvYWRpbmc6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSwgKCkgPT4ge30pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgb25TZWxlY3REYXlzID0gKGUpID0+IHtcbiAgICBjb25zdCBkYXlzID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGRheXM6IGRheXMgfSwgKCkgPT4ge30pO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9zaW11bGF0aW9udG9wXCIgKyBcIj9cIiArIFwiZGF5cz1cIiArIGRheXMpXG4gICAgICAudGhlbigocykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzLmRhdGEpO1xuICAgICAgICBpZiAocy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaW11bGF0aW9udG9wOiBzLmRhdGEgfSwgKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfSk7XG4gIH07XG5cblxuXG4gIGdldERhdGFGcm9tVVJMID0gKHVybCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpXG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbiAgICB9LCAyMDAwKTtcblxuICBcblxuICBleHBvcnRUb0NTViA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEdyaWRUb29sYmFyQ29udGFpbmVyPlxuICAgICAgICA8R3JpZFRvb2xiYXJFeHBvcnQgLz5cbiAgICAgIDwvR3JpZFRvb2xiYXJDb250YWluZXI+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxHcmlkPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5PlNlbGVjdCBOdW1iZXIgb2YgZGF5cyBmb3Igc2ltdWxhdGlvbiA6IDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3R5bGU9e3sgbWluV2lkdGg6IFwiMTUwcHhcIiB9fSB2YXJpYW50PVwib3V0bGluZWRcIj5cbiAgICAgICAgICAgIDxJbnB1dExhYmVsIHN0eWxlID0ge3sgY29sb3IgOiBcIiM1Q0RCOTVcIn19PmRheXM8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHN0eWxlPXt7IFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1Mzg2QlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1Q0RCOTVcIlxuICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgbGFiZWxJZD1cImRheXNcIlxuICAgICAgICAgICAgICBpZD1cImRheXNcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdERheXN9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGRheXN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtbMzAsIDYwLCA5MCwgMTgwLCAzNjAsIDcyMF0ubWFwKFxuICAgICAgICAgICAgICAgIChwZXJpb2QpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8TWVudUl0ZW0gdmFsdWU9e3BlcmlvZH0+e3BlcmlvZH08L01lbnVJdGVtPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e1xuICAgICAgICAgICAgcGFkZGluZyA6ICcyMHB4JyxcbiAgICAgICAgICB9fT48L2Rpdj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaW11bGF0aW9udG9wLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cIlNpbXVhbHRpb24gUmVzdWx0c1wiIG1pbldpZHRoPSBcIjY1MFwiIGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8VGFibGVIZWFkIHN0eWxlID0ge3sgY29sb3IgOiBcIiMwNTM4NkJcIiwgYmFja2dyb3VuZENvbG9yOiBcIiM1Q0RCOTVcIix9fT5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCB2YXJpYW50ID0gXCJoNVwiPiBTZWN1cml0eSBJZDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiB2YXJpYW50ID0gXCJoNVwiPkNvbXBhbnk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgdmFyaWFudCA9IFwiaDVcIj5BY3R1YWwgQXZlcmFnZSBSZXR1cm5zPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHZhcmlhbnQgPSBcImg1XCI+TWluaW11bSBQcmVkaWN0aW9uIFJhbmdlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHZhcmlhbnQgPSBcImg1XCI+TWF4aW11bSBQcmVkaWN0aW9uIFJhbmdlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaW11bGF0aW9udG9wLm1hcCgocm93KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5Db21wYW55fT5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuc2VjdXJpdHlfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jb21wYW55fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuYWN0dWFsX2F2ZXJhZ2VfcmV0dXJuX3BlcmNlbnR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5taW5pbXVtX3ByZWRpY3Rpb25fcmFuZ2V9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5tYXhpbXVtX3ByZWRpY3Rpb25fcmFuZ2V9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJSZXN1bHRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0ge3Jvd1tcInNlY3VyaXR5X2lkXCJdICsgXCJfXCIgKyB0aGlzLnN0YXRlLnNlbGRheXMgKyBcIi5jc3ZcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWUgPSBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBleHBvcnRGaWxlID0geygpID0+ICBQcm9taXNlLnJlc29sdmUodGhpcy4gZ2V0RGF0YUZyb21VUkwoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVmVudUdvcGFsSmlsbGEvU3RvY2tBbmFseXNpc1Rvb2wvbWFpbi9EYXRhL1NQNTAwX3NpbXVsYXRpb25fcmVzdWx0cy9cIiArIHJvd1tcInNlY3VyaXR5X2lkXCJdICsgXCJfXCIgKyB0aGlzLnN0YXRlLnNlbGRheXMgKyBcImRheXMuY3N2XCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydEZpbGUgPSB7KCkgPT4gIFByb21pc2UucmVzb2x2ZSh0aGlzLiBnZXREYXRhRnJvbVVSTChcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYWlrcjc4OS9zdG9jay1pbmRleC1yaXNrL21hc3Rlci9EYXRhL1NpbXVsYXRpb25SZXN1bHQvXCIgKyByb3dbXCJzZWN1cml0eV9pZFwiXSArIFwiX1wiICsgdGhpcy5zdGF0ZS5zZWxkYXlzICsgXCIuY3N2XCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICApfSl9XG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW11bGF0aW9uO1xuIiwiZnVuY3Rpb24gZGVmYXVsdEVxdWFsaXR5Q2hlY2soYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cblxuZnVuY3Rpb24gYXJlQXJndW1lbnRzU2hhbGxvd2x5RXF1YWwoZXF1YWxpdHlDaGVjaywgcHJldiwgbmV4dCkge1xuICBpZiAocHJldiA9PT0gbnVsbCB8fCBuZXh0ID09PSBudWxsIHx8IHByZXYubGVuZ3RoICE9PSBuZXh0Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIERvIHRoaXMgaW4gYSBmb3IgbG9vcCAoYW5kIG5vdCBhIGBmb3JFYWNoYCBvciBhbiBgZXZlcnlgKSBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGVxdWFsaXR5IGFzIGZhc3QgYXMgcG9zc2libGUuXG4gIHZhciBsZW5ndGggPSBwcmV2Lmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICghZXF1YWxpdHlDaGVjayhwcmV2W2ldLCBuZXh0W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lbW9pemUoZnVuYykge1xuICB2YXIgZXF1YWxpdHlDaGVjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVmYXVsdEVxdWFsaXR5Q2hlY2s7XG5cbiAgdmFyIGxhc3RBcmdzID0gbnVsbDtcbiAgdmFyIGxhc3RSZXN1bHQgPSBudWxsO1xuICAvLyB3ZSByZWZlcmVuY2UgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIHRoZW0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWFyZUFyZ3VtZW50c1NoYWxsb3dseUVxdWFsKGVxdWFsaXR5Q2hlY2ssIGxhc3RBcmdzLCBhcmd1bWVudHMpKSB7XG4gICAgICAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuICAgICAgbGFzdFJlc3VsdCA9IGZ1bmMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKSB7XG4gIHZhciBkZXBlbmRlbmNpZXMgPSBBcnJheS5pc0FycmF5KGZ1bmNzWzBdKSA/IGZ1bmNzWzBdIDogZnVuY3M7XG5cbiAgaWYgKCFkZXBlbmRlbmNpZXMuZXZlcnkoZnVuY3Rpb24gKGRlcCkge1xuICAgIHJldHVybiB0eXBlb2YgZGVwID09PSAnZnVuY3Rpb24nO1xuICB9KSkge1xuICAgIHZhciBkZXBlbmRlbmN5VHlwZXMgPSBkZXBlbmRlbmNpZXMubWFwKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZGVwO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RvciBjcmVhdG9ycyBleHBlY3QgYWxsIGlucHV0LXNlbGVjdG9ycyB0byBiZSBmdW5jdGlvbnMsICcgKyAoJ2luc3RlYWQgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyB0eXBlczogWycgKyBkZXBlbmRlbmN5VHlwZXMgKyAnXScpKTtcbiAgfVxuXG4gIHJldHVybiBkZXBlbmRlbmNpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvckNyZWF0b3IobWVtb2l6ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVtb2l6ZU9wdGlvbnMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWVtb2l6ZU9wdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGZ1bmNzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIHJlY29tcHV0YXRpb25zID0gMDtcbiAgICB2YXIgcmVzdWx0RnVuYyA9IGZ1bmNzLnBvcCgpO1xuICAgIHZhciBkZXBlbmRlbmNpZXMgPSBnZXREZXBlbmRlbmNpZXMoZnVuY3MpO1xuXG4gICAgdmFyIG1lbW9pemVkUmVzdWx0RnVuYyA9IG1lbW9pemUuYXBwbHkodW5kZWZpbmVkLCBbZnVuY3Rpb24gKCkge1xuICAgICAgcmVjb21wdXRhdGlvbnMrKztcbiAgICAgIC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICByZXR1cm4gcmVzdWx0RnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1dLmNvbmNhdChtZW1vaXplT3B0aW9ucykpO1xuXG4gICAgLy8gSWYgYSBzZWxlY3RvciBpcyBjYWxsZWQgd2l0aCB0aGUgZXhhY3Qgc2FtZSBhcmd1bWVudHMgd2UgZG9uJ3QgbmVlZCB0byB0cmF2ZXJzZSBvdXIgZGVwZW5kZW5jaWVzIGFnYWluLlxuICAgIHZhciBzZWxlY3RvciA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgdmFyIGxlbmd0aCA9IGRlcGVuZGVuY2llcy5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGFuZCBtdXRhdGUgYSBsb2NhbCBsaXN0IG9mIHBhcmFtcyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICAgIHBhcmFtcy5wdXNoKGRlcGVuZGVuY2llc1tpXS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cbiAgICAgIHJldHVybiBtZW1vaXplZFJlc3VsdEZ1bmMuYXBwbHkobnVsbCwgcGFyYW1zKTtcbiAgICB9KTtcblxuICAgIHNlbGVjdG9yLnJlc3VsdEZ1bmMgPSByZXN1bHRGdW5jO1xuICAgIHNlbGVjdG9yLmRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llcztcbiAgICBzZWxlY3Rvci5yZWNvbXB1dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWNvbXB1dGF0aW9ucztcbiAgICB9O1xuICAgIHNlbGVjdG9yLnJlc2V0UmVjb21wdXRhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgIH07XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9O1xufVxuXG5leHBvcnQgdmFyIGNyZWF0ZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKGRlZmF1bHRNZW1vaXplKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvcihzZWxlY3RvcnMpIHtcbiAgdmFyIHNlbGVjdG9yQ3JlYXRvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogY3JlYXRlU2VsZWN0b3I7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgZXhwZWN0cyBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QgJyArICgnd2hlcmUgZWFjaCBwcm9wZXJ0eSBpcyBhIHNlbGVjdG9yLCBpbnN0ZWFkIHJlY2VpdmVkIGEgJyArIHR5cGVvZiBzZWxlY3RvcnMpKTtcbiAgfVxuICB2YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKHNlbGVjdG9ycyk7XG4gIHJldHVybiBzZWxlY3RvckNyZWF0b3Iob2JqZWN0S2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RvcnNba2V5XTtcbiAgfSksIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICB2YWx1ZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoY29tcG9zaXRpb24sIHZhbHVlLCBpbmRleCkge1xuICAgICAgY29tcG9zaXRpb25bb2JqZWN0S2V5c1tpbmRleF1dID0gdmFsdWU7XG4gICAgICByZXR1cm4gY29tcG9zaXRpb247XG4gICAgfSwge30pO1xuICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9