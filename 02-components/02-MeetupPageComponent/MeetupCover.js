export const MeetupCover = {
  template: `<div class="meetup-cover" :style="link ? \`--bg-url: url('\${link}')\` : 'https://course-vue.javascript.ru/api/images/2'">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,

  props: {
    title: {
      type: String
    },
    link: {
      type: String
    }
  }
};
