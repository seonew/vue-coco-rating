
Vue.component('coco-rating', {
  template: 
    '<div>\
      <div style="font-size:1.5em; color:#e64980">\
        <span v-for="index in 5" class="fa-stack" @click="onClick(index)">\
          <i class="far fa-star fa-stack-1x"></i>\
          <i class="far fa-star fa-stack-1x"></i>\
        </span>\
      </div>\
    </div>',
    props: { 
      count: {
        type: Number,
        required: true
      }
    },
    methods: {
      onClick: function(index){
        let currentCount = this.count

        if (index != currentCount) {
          this.init(currentCount)
        }

        for (var i = 0; i < index; i++) {
          let star = this.$el.childNodes[0].children[i].children[0].classList

          if (star.contains('fas')) { 
            star.remove('fas')
            star.add('far')
          }
          else { 
            star.remove('far')
            star.add('fas')
          }
        }
        this.count = index
      },
      init: function(currentCount){
        for(var i = 0; i < currentCount; i++){
          let currentStar = this.$el.childNodes[0].children[i].children[0].classList
          
          currentStar.remove('fas')
          currentStar.add('far')
        }
      }
    },
    mounted: function() {
      let count = this.count
      if (count > 0) {
        this.onClick(count)
      }
    }
})