import { agendaItemTitles, agendaItemIcons } from './data.js';
export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="\`/assets/icons/icon-\${agendaItemIconsImg[agendaItem.type]}.svg\`"/>
      </div>
      <div class="meetup-agenda__item-col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 v-if="agendaItem.title===null" class="meetup-agenda__title">{{ agendaItemTitlesIfEmpty[agendaItem.type] }}</h5>
        <h5 v-else class="meetup-agenda__title">{{ agendaItem.title }}</h5>
        <p v-if="agendaItem.speaker">
          <span>{{ agendaItem.speaker }}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,

  props: {
    agendaItem: {
      required: true,
      type: Object,
    },
  },
  computed: {
    agendaItemTitlesIfEmpty() {
      return agendaItemTitles;
    },
    agendaItemIconsImg() {
      return agendaItemIcons;
    }
  }

};
