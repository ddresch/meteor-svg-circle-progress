Template.SvgCircleProgress.helpers({
  svgDimension: function(){
    return this.radius * 2;
  },

  outlineOnlyRadius: function(){
    return this.radius - 20;
  },

  drawProgress: function(total, position) {
    var angle = Math.ceil(360 * position / total);
    var startAngle = -90;
    var endAngle = 0;
    var arcSweepFlag = '0,1';
    var circleDimension = this.radius;
    
    endAngle = startAngle + angle;

    if(angle > 180) arcSweepFlag = '1,1';
    
    x1 = (circleDimension + this.radius * Math.cos(Math.PI * startAngle / 180));
    y1 = (circleDimension + this.radius * Math.sin(Math.PI * startAngle / 180));
    x2 = (circleDimension + this.radius * Math.cos(Math.PI * endAngle / 180));
    y2 = (circleDimension + this.radius * Math.sin(Math.PI * endAngle / 180));                
    
    var d = 'M' + circleDimension + ',' + circleDimension + '  L' + x1 + ',' + y1 + '  A' + this.radius + ',' + this.radius + ' 0 ' + arcSweepFlag + ' ' + x2 + ',' + y2 + ' z';

    return d;
  }
});