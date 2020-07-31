/**
 * Created by Administrator on 2019/4/2.
 */
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

// global status
export const globalStore = {
  methods: {
    ...mapActions({

    }),
    ...mapMutations({
      Setzmloverlin: 'Setzmloverlin'
    })
  },
  computed: {
    ...mapState([
      'zmloverlin'
    ]),
    ...mapGetters([
      'Getzmloverlin'
    ])
  }
}
