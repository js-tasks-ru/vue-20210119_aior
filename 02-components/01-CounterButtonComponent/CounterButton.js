export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="increment(count)" :count="count">{{ count }}</button>',
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  model: {
    prop: 'count',
    event: 'increment'
  },
  methods: {
    increment(newValue) {
      newValue++
      this.$emit('increment', newValue)
    }
  }

  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы
};
