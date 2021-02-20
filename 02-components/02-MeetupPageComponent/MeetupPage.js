import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `<div v-if="meetupRaw"><meetup-view :meetup="meetupRaw"/></div>`,

  components: {
    MeetupView
  },

  data() {
    return {
      meetupRaw: null,
    };
  },

  mounted() {
    this.getMeetup();
  },

  methods: {
    getMeetup(){
      fetchMeetup(MEETUP_ID).then((meetups) => {
        this.meetupRaw = meetups;
      });
    }
  },

  computed: {
    meetup() {
      if (!this.meetupRaw) {
        return null;
      }
    },
  },
};
