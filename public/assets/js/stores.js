var sliderRange = document.getElementById('slider-range');    
noUiSlider.create(sliderRange, {
    start: [0, 24],
    step: 1,
    range: {
      'min': [0],
      'max': [24]
    },
    connect: true
  });
  sliderRange.noUiSlider.on('update', function(values, handle) {
    let start = values[0].toString().split(".")[0];
    let end = values[1].toString().split(".")[0];
    $('#start-time').val(start)
    $('#end-time').val(end)
  });