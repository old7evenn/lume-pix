type LocaleMessageId = keyof typeof import('@/static/locales/en.json');
type Locale = 'en' | 'uk';

declare global {
  namespace FormatjsItnl {
    interface IntlConfig {
      locale: Locale;
    }

    interface Messages {
      ids: LocaleMessageId;
    }
  }
}
