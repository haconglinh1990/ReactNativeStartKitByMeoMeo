import I18n from 'react-native-i18n';
import en from './en.json';
import ko from './ko.json';
import ja from './ja.json';
import pt from './pt.json';
import vi from './vi.json';
import zh_hans from './zh_simple.json';
import zh_hant from './zh.json';
import ru from './ru.json';
import es from './es.json';


I18n.fallbacks = true;

I18n.translations = {
  en,
  ko,
  ja,
  pt,
  vi,
  'zh-Hans-US':zh_hans,
  'zh-Hant-US': zh_hant,
  ru,
  es
};

export default I18n;