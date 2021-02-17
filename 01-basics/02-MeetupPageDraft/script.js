import Vue from './vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api/';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение митапа для митапа
 * @param meetup - объект с описанием митапа (и параметром meetupId)
 * @return {string} - ссылка на изображение митапа
 */
function getMeetupCoverLink(meetup) {
  return `${API_URL}/images/${meetup.imageId}`;
}


/**
 * Словарь заголовков по умолчанию для всех типов элементов программы
 */
const agendaItemTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов элементов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

export const app = new Vue({
  el: '#app',

  data() {
    return {
      meetupRaw: null,
      agendaItemIcons: {
        registration: 'key',
        opening: 'cal-sm',
        talk: 'tv',
        break: 'clock',
        coffee: 'coffee',
        closing: 'key',
        afterparty: 'cal-sm',
        other: 'cal-sm',
      },
      agendaItemTitles: {
        registration: 'Регистрация',
        opening: 'Открытие',
        break: 'Перерыв',
        coffee: 'Coffee Break',
        closing: 'Закрытие',
        afterparty: 'Afterparty',
        talk: 'Доклад',
        other: 'Другое',
      }
    };
  },

  mounted() {
    this.getMeetup();
  },

  computed: {
    meetup() {
      if (!this.meetupRaw) {
        return null;
      }
      
      return {
        ...this.meetupRaw,
        localDate: new Date(this.meetupRaw.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        dateOnlyString: new Date(this.meetupRaw.date).toISOString().split('T')[0],
        coverStyle: this.meetupRaw.imageId
          ? {
              '--bg-url': `url(https://course-vue.javascript.ru/api/images/${this.meetupRaw.imageId})`,
            }
          : undefined
      };
    },
  },
  
  methods: {
    getMeetup(){
      fetch('https://course-vue.javascript.ru/api/meetups/6')
      .then(response => response.json())
      .then((meetups) => {
        this.meetupRaw = meetups;
      });
    },

    getIcon(){
      alert(agendaItemIcons.indexOf( 'clock' ) != -1);
    }
    
  }
});
