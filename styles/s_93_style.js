var size = 0;
var placement = 'point';
function categories_s_93(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '鋼釘':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(1,234,255,1.0)'})}),
        text: createTextStyle_1(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.15384 + size, points: 4,
            radius2: 0, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(0,0,0,0.0)'})}),
        text: createTextStyle_1(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '道釘':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(1,234,255,1.0)'})}),
        text: createTextStyle_1(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.15384 + size,
                                          points: 4,
                                          radius2: 0,
                                          angle: Math.PI / 4,
                                          stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}),
                                          fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
        text: createTextStyle_1(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '鋼標':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(1,243,255,1.0)'})}),
        text: createTextStyle_1(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 2.76924 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})}),
        text: createTextStyle_1(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '塑膠樁':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(1,234,255,1.0)'})}),
        text: createTextStyle_1(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.61538 + size,
                                          points: 4,
                                          radius2: 0,
                                          angle: Math.PI / 4,
                                          stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}),
                                          fill: new ol.style.Fill({color: 'rgba(0,0,0,0.0)'})}),
        text: createTextStyle_1(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '水泥樁':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(1,234,255,1.0)'})}),
        text: createTextStyle_1(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.61538 + size, points: 4,
            radius2: 0, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(0,0,0,0.0)'})}),
        text: createTextStyle_1(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '滅失':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.8 + size,
                                          points: 4,
                                          radius2: 0,
                                          angle: Math.PI / 4,
                                          stroke: new ol.style.Stroke({color: 'rgba(1,234,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),
                                          fill: new ol.style.Fill({color: 'rgba(183,72,75,1.0)'})}),
        text: createTextStyle_1(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '待確認':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.2 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(1,234,255,0.0)'})}),
        text: createTextStyle_1(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_s_93 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("TYPE");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'微軟正黑體\', sans-serif";
    var labelFill = "#037dff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NO") !== null) {
        labelText = String(feature.get("NO"));
    }
    
var style = categories_s_93(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
