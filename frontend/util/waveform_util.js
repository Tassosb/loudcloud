const defaults = {
  barWidth: 3,
  regColor: '#666',
  progressColor: '#ff5500',
  width: 500,
  height: 60,
  currentTime: 0,
  peaks: [],
  duration: 0,
  barGap: .4
}

const COLORS = {
  played: {
    upper: '#ff5500',
    lower: '#ffaa80'
  },
  default: {
    upper: '#666',
    lower: '#d0d0d0'
  }
}

function rootMeanSquare(bufferStartIdx, amtDataPoints, data) {
  var sum = data.slice(bufferStartIdx, bufferStartIdx + amtDataPoints).reduce(
    function(accum, dataPointVal){
      return accum + Math.pow(dataPointVal, 2);
    }, 0.0);

  return Math.sqrt(sum / amtDataPoints);
}

export default class Waveform {
  constructor (options) {
    this.duration = options.duration || defaults.duration;
    this.peaks = options.peaks || defaults.peaks
    this.barWidth = options.barWidth || defaults.barWidth;
    this.currentTime = options.currentTime || defaults.currentTime;
    this.canvas = options.canvas;
    this.canvasWidth = this.canvas.width;
    this.maxHeight = this.canvas.height
    this.ctx = options.canvas.getContext('2d');
    this.barGap = options.barGap || defaults.barGap;

    this.draw()
  }

  draw () {
    const numBars = this.canvasWidth / this.barWidth;
    const bufferFactor = this.peaks.length / this.canvasWidth;

    let vals = [];
    let maxVal = 0;
    for (let i = 0 ; i < this.canvasWidth; i += this.barWidth) {
      let bufferIdx = Math.floor(i * this.barWidth);
      let val = rootMeanSquare(bufferIdx, bufferFactor, this.peaks);
      vals.push(val);
      if (maxVal < val) { maxVal = val }
    }

    const scale = this.maxHeight / maxVal;

    this.ctx.clearRect(0, 0, this.canvasWidth, this.maxHeight)

    let barHeight, barPos;
    for (let i = 0; i < vals.length; i++) {
      barHeight = vals[i] * scale;
      barPos = i * this.barWidth;
      this.drawBar(barHeight, barPos);
    }
  }

  drawBar (height, pos) {
    const diminishRatio = 0.7;
    this.ctx.fillStyle = this.barColor(pos, 'upper');

    let width = this.barWidth * Math.abs(1 - this.barGap);
    let x = pos + (width / 2)
    let y1 = (this.maxHeight - height) * diminishRatio - 1;
    let y2 = this.maxHeight * diminishRatio;
    this.ctx.fillRect(x, y1, width, height * diminishRatio);
    this.ctx.fillStyle = this.barColor(pos, 'lower');

    this.ctx.fillRect(x, y2, width, height * (1 - diminishRatio));
  }

  barColor (pos, barHalf) {
    const posTime = (pos / this.canvasWidth) * this.duration;
    if (posTime < this.currentTime) {
      return COLORS.played[barHalf]
    } else {
      return COLORS.default[barHalf]
    }
  }
}
