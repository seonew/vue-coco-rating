
Vue.component('coco-rating', {
  template: 
    '<div>\
      <div style="font-size:1.5em; color:#e64980">\
        <span v-for="index in maxScore" class="fa-stack" @mousemove="onMouseMove(index)" @mouseup="onMouseUp()" @mousedown="onMouseDown(index)" @dragstart="onDragStart()">\
          <i class="far fa-star fa-stack-1x"></i>\
          <i class="far fa-star fa-stack-1x"></i>\
        </span>\
      </div>\
    </div>',
    props: { 
      score: {
        type: Number,
        required: true
      },
      maxScore: {
        type: Number,
        required: true
      }
    },
    data: {
      mouseFlag: false
    },
    methods: {
      update: function(index){
        let currentCount = this.score

        for (var i = 0; i < this.maxScore; i++) {
          let star = this.$el.childNodes[0].children[i].children[0].classList
          
          if (i < index) {
            star.remove('far')
            star.add('fas')
          }
          else {
            star.remove('fas')
            star.add('far')
          }
        }

        this.score = index
      },
      onMouseMove: function(index) {
        if (this.mouseFlag) {
          this.update(index)
        }
      },
      onMouseUp: function() {
        this.mouseFlag = false
      },
      onMouseDown: function(index) {
        this.mouseFlag = true
        this.update(index)
      },
      onDragStart: function() {
        event.preventDefault()
      }
    },
    mounted: function() {
      let score = this.score
      if (score > 0) {
        this.update(score)
      }
    }
})