cc.Class({
    extends: cc.Component,

    properties: {
       progressBar: {
            default: null,
            type: cc.ProgressBar
        },
        progressTips: {
            default: null,
            type: cc.Label
        },
    },

    // use this for initialization
    onLoad: function () {
        this.progressBar.progress = 0;
        

    },
    update:function(dt){
        cc.log("=======")
        var progress = this.progressBar.progress;
        if(progress>=1)
        {
        
            this.progressTips.textKey = "加载资源完毕";
            return;
        }
           
        if(progress < 1)
        {
            progress += dt;
            this.progressTips.textKey = "资源正在加载中" + parseInt(progress * 100)   + "%";
        }
         this.progressBar.progress = progress;
         
         
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
