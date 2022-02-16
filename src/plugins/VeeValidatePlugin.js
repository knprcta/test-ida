import {
  Form,
  Field,
  ErrorMessage,
  defineRule,
  configure,
} from 'vee-validate';
import { required, url, regex } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
export default (app) => {
  defineRule('required', required);
  defineRule('url', url);
  defineRule('regex', regex);

  configure({
    generateMessage: localize({
      ru: {
        messages: {
          required: 'Поле является обязательным',
          url: 'Невалидная ссылка',
          numeric: 'Необходимо ввести числовое значение',
          regex: 'Необходимо ввести числовое значение',
        },
      },
    }),
    validateOnInput: true,
  });

  setLocale('ru');

  app.component('VeeForm', Form);
  app.component('VeeField', Field);
  app.component('VeeErrorMessage', ErrorMessage);
};
