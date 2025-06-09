var wms_layers = [];

var lyr__0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.nlsc.gov.tw/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "EMAP",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "臺灣通用電子地圖",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr__0, 0]);
var lyr__1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.nlsc.gov.tw/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "PHOTO2",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "正射影像圖",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr__1, 0]);

    var projection__2 = ol.proj.get('EPSG:3857');
    var projectionExtent__2 = projection__2.getExtent();
    var size__2 = ol.extent.getWidth(projectionExtent__2) / 256;
    var resolutions__2 = new Array(14);
    var matrixIds__2 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions__2[z] = size__2 / Math.pow(2, z);
        matrixIds__2[z] = z;
    }
    var lyr__2 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "http://maps.nlsc.gov.tw/S_Maps/wmts",
    attributions: ' ',
                                "layer": "TOWN",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection__2,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent__2),
                resolutions: resolutions__2,
                matrixIds: matrixIds__2
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "鄉鎮區界",
                            opacity: 1.0,
                            
                            
                          });

    var projection__3 = ol.proj.get('EPSG:3857');
    var projectionExtent__3 = projection__3.getExtent();
    var size__3 = ol.extent.getWidth(projectionExtent__3) / 256;
    var resolutions__3 = new Array(14);
    var matrixIds__3 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions__3[z] = size__3 / Math.pow(2, z);
        matrixIds__3[z] = z;
    }
    var lyr__3 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "http://maps.nlsc.gov.tw/S_Maps/wmts",
    attributions: ' ',
                                "layer": "LandOffice",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection__3,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent__3),
                resolutions: resolutions__3,
                matrixIds: matrixIds__3
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "地政事務所轄區圖",
                            opacity: 1.0,
                            
                            
                          });

    var projection__4 = ol.proj.get('EPSG:3857');
    var projectionExtent__4 = projection__4.getExtent();
    var size__4 = ol.extent.getWidth(projectionExtent__4) / 256;
    var resolutions__4 = new Array(14);
    var matrixIds__4 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions__4[z] = size__4 / Math.pow(2, z);
        matrixIds__4[z] = z;
    }
    var lyr__4 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "http://maps.nlsc.gov.tw/S_Maps/wmts",
    attributions: ' ',
                                "layer": "LANDSECT",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection__4,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent__4),
                resolutions: resolutions__4,
                matrixIds: matrixIds__4
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "地段外圍圖(段籍圖)",
                            opacity: 0.396078,
                            
                            
                          });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: "東南所段籍圖",
                interactive: false,
                title: '<img src="styles/legend/_5.png" /> 東南所段籍圖'
            });
var format_1874n_6 = new ol.format.GeoJSON();
var features_1874n_6 = format_1874n_6.readFeatures(json_1874n_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1874n_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1874n_6.addFeatures(features_1874n_6);
var lyr_1874n_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1874n_6, 
                style: style_1874n_6,
                popuplayertitle: "1874下林段n",
                interactive: false,
                title: '<img src="styles/legend/1874n_6.png" /> 1874下林段n'
            });
var format_1871n_7 = new ol.format.GeoJSON();
var features_1871n_7 = format_1871n_7.readFeatures(json_1871n_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1871n_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1871n_7.addFeatures(features_1871n_7);
var lyr_1871n_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1871n_7, 
                style: style_1871n_7,
                popuplayertitle: "1871大山段n",
                interactive: false,
                title: '<img src="styles/legend/1871n_7.png" /> 1871大山段n'
            });
var format_1870n_8 = new ol.format.GeoJSON();
var features_1870n_8 = format_1870n_8.readFeatures(json_1870n_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1870n_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1870n_8.addFeatures(features_1870n_8);
var lyr_1870n_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1870n_8, 
                style: style_1870n_8,
                popuplayertitle: "1870南華段n",
                interactive: false,
                title: '<img src="styles/legend/1870n_8.png" /> 1870南華段n'
            });
var format_1869n_9 = new ol.format.GeoJSON();
var features_1869n_9 = format_1869n_9.readFeatures(json_1869n_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1869n_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1869n_9.addFeatures(features_1869n_9);
var lyr_1869n_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1869n_9, 
                style: style_1869n_9,
                popuplayertitle: "1869白雪段n",
                interactive: false,
                title: '<img src="styles/legend/1869n_9.png" /> 1869白雪段n'
            });
var format_1868n_10 = new ol.format.GeoJSON();
var features_1868n_10 = format_1868n_10.readFeatures(json_1868n_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1868n_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1868n_10.addFeatures(features_1868n_10);
var lyr_1868n_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1868n_10, 
                style: style_1868n_10,
                popuplayertitle: "1868天后段n",
                interactive: false,
                title: '<img src="styles/legend/1868n_10.png" /> 1868天后段n'
            });
var format_1867n_11 = new ol.format.GeoJSON();
var features_1867n_11 = format_1867n_11.readFeatures(json_1867n_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1867n_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1867n_11.addFeatures(features_1867n_11);
var lyr_1867n_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1867n_11, 
                style: style_1867n_11,
                popuplayertitle: "1867日新段n",
                interactive: false,
                title: '<img src="styles/legend/1867n_11.png" /> 1867日新段n'
            });
var format_1866n_12 = new ol.format.GeoJSON();
var features_1866n_12 = format_1866n_12.readFeatures(json_1866n_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1866n_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1866n_12.addFeatures(features_1866n_12);
var lyr_1866n_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1866n_12, 
                style: style_1866n_12,
                popuplayertitle: "1866水交社段n",
                interactive: false,
                title: '<img src="styles/legend/1866n_12.png" /> 1866水交社段n'
            });
var format_1865s_13 = new ol.format.GeoJSON();
var features_1865s_13 = format_1865s_13.readFeatures(json_1865s_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1865s_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1865s_13.addFeatures(features_1865s_13);
var lyr_1865s_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1865s_13, 
                style: style_1865s_13,
                popuplayertitle: "1865正義段s",
                interactive: false,
                title: '<img src="styles/legend/1865s_13.png" /> 1865正義段s'
            });
var format_1864s_14 = new ol.format.GeoJSON();
var features_1864s_14 = format_1864s_14.readFeatures(json_1864s_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1864s_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1864s_14.addFeatures(features_1864s_14);
var lyr_1864s_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1864s_14, 
                style: style_1864s_14,
                popuplayertitle: "1864明興段s",
                interactive: false,
                title: '<img src="styles/legend/1864s_14.png" /> 1864明興段s'
            });
var format_1863s_15 = new ol.format.GeoJSON();
var features_1863s_15 = format_1863s_15.readFeatures(json_1863s_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1863s_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1863s_15.addFeatures(features_1863s_15);
var lyr_1863s_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1863s_15, 
                style: style_1863s_15,
                popuplayertitle: "1863南豐段s",
                interactive: false,
                title: '<img src="styles/legend/1863s_15.png" /> 1863南豐段s'
            });
var format_1862s_16 = new ol.format.GeoJSON();
var features_1862s_16 = format_1862s_16.readFeatures(json_1862s_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1862s_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1862s_16.addFeatures(features_1862s_16);
var lyr_1862s_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1862s_16, 
                style: style_1862s_16,
                popuplayertitle: "1862華南段s",
                interactive: false,
                title: '<img src="styles/legend/1862s_16.png" /> 1862華南段s'
            });
var format_1861s_17 = new ol.format.GeoJSON();
var features_1861s_17 = format_1861s_17.readFeatures(json_1861s_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1861s_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1861s_17.addFeatures(features_1861s_17);
var lyr_1861s_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1861s_17, 
                style: style_1861s_17,
                popuplayertitle: "1861龍崗段s",
                interactive: false,
                title: '<img src="styles/legend/1861s_17.png" /> 1861龍崗段s'
            });
var format_1860s_18 = new ol.format.GeoJSON();
var features_1860s_18 = format_1860s_18.readFeatures(json_1860s_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1860s_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1860s_18.addFeatures(features_1860s_18);
var lyr_1860s_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1860s_18, 
                style: style_1860s_18,
                popuplayertitle: "1860同安段s",
                interactive: false,
                title: '<img src="styles/legend/1860s_18.png" /> 1860同安段s'
            });
var format_1859s_19 = new ol.format.GeoJSON();
var features_1859s_19 = format_1859s_19.readFeatures(json_1859s_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1859s_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1859s_19.addFeatures(features_1859s_19);
var lyr_1859s_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1859s_19, 
                style: style_1859s_19,
                popuplayertitle: "1859舉喜段s",
                interactive: false,
                title: '<img src="styles/legend/1859s_19.png" /> 1859舉喜段s'
            });
var format_1858s_20 = new ol.format.GeoJSON();
var features_1858s_20 = format_1858s_20.readFeatures(json_1858s_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1858s_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1858s_20.addFeatures(features_1858s_20);
var lyr_1858s_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1858s_20, 
                style: style_1858s_20,
                popuplayertitle: "1858興農段s",
                interactive: false,
                title: '<img src="styles/legend/1858s_20.png" /> 1858興農段s'
            });
var format_1857s_21 = new ol.format.GeoJSON();
var features_1857s_21 = format_1857s_21.readFeatures(json_1857s_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1857s_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1857s_21.addFeatures(features_1857s_21);
var lyr_1857s_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1857s_21, 
                style: style_1857s_21,
                popuplayertitle: "1857永寧段s",
                interactive: false,
                title: '<img src="styles/legend/1857s_21.png" /> 1857永寧段s'
            });
var format_1856s_22 = new ol.format.GeoJSON();
var features_1856s_22 = format_1856s_22.readFeatures(json_1856s_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1856s_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1856s_22.addFeatures(features_1856s_22);
var lyr_1856s_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1856s_22, 
                style: style_1856s_22,
                popuplayertitle: "1856南鞍段s",
                interactive: false,
                title: '<img src="styles/legend/1856s_22.png" /> 1856南鞍段s'
            });
var format_1855s_23 = new ol.format.GeoJSON();
var features_1855s_23 = format_1855s_23.readFeatures(json_1855s_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1855s_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1855s_23.addFeatures(features_1855s_23);
var lyr_1855s_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1855s_23, 
                style: style_1855s_23,
                popuplayertitle: "1855建南段s",
                interactive: false,
                title: '<img src="styles/legend/1855s_23.png" /> 1855建南段s'
            });
var format_1854s_24 = new ol.format.GeoJSON();
var features_1854s_24 = format_1854s_24.readFeatures(json_1854s_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1854s_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1854s_24.addFeatures(features_1854s_24);
var lyr_1854s_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1854s_24, 
                style: style_1854s_24,
                popuplayertitle: "1854新都段s",
                interactive: false,
                title: '<img src="styles/legend/1854s_24.png" /> 1854新都段s'
            });
var format_1853s_25 = new ol.format.GeoJSON();
var features_1853s_25 = format_1853s_25.readFeatures(json_1853s_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1853s_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1853s_25.addFeatures(features_1853s_25);
var lyr_1853s_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1853s_25, 
                style: style_1853s_25,
                popuplayertitle: "1853大恩段s",
                interactive: false,
                title: '<img src="styles/legend/1853s_25.png" /> 1853大恩段s'
            });
var format_1852s_26 = new ol.format.GeoJSON();
var features_1852s_26 = format_1852s_26.readFeatures(json_1852s_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1852s_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1852s_26.addFeatures(features_1852s_26);
var lyr_1852s_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1852s_26, 
                style: style_1852s_26,
                popuplayertitle: "1852大忠段s",
                interactive: false,
                title: '<img src="styles/legend/1852s_26.png" /> 1852大忠段s'
            });
var format_1851s_27 = new ol.format.GeoJSON();
var features_1851s_27 = format_1851s_27.readFeatures(json_1851s_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1851s_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1851s_27.addFeatures(features_1851s_27);
var lyr_1851s_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1851s_27, 
                style: style_1851s_27,
                popuplayertitle: "1851大林段s",
                interactive: false,
                title: '<img src="styles/legend/1851s_27.png" /> 1851大林段s'
            });
var format_18140_28 = new ol.format.GeoJSON();
var features_18140_28 = format_18140_28.readFeatures(json_18140_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18140_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18140_28.addFeatures(features_18140_28);
var lyr_18140_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18140_28, 
                style: style_18140_28,
                popuplayertitle: "18140福吉段",
                interactive: false,
                title: '<img src="styles/legend/18140_28.png" /> 18140福吉段'
            });
var format_18130_29 = new ol.format.GeoJSON();
var features_18130_29 = format_18130_29.readFeatures(json_18130_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18130_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18130_29.addFeatures(features_18130_29);
var lyr_18130_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18130_29, 
                style: style_18130_29,
                popuplayertitle: "18130南山段",
                interactive: false,
                title: '<img src="styles/legend/18130_29.png" /> 18130南山段'
            });
var format_18120_30 = new ol.format.GeoJSON();
var features_18120_30 = format_18120_30.readFeatures(json_18120_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18120_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18120_30.addFeatures(features_18120_30);
var lyr_18120_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18120_30, 
                style: style_18120_30,
                popuplayertitle: "18120中和段",
                interactive: false,
                title: '<img src="styles/legend/18120_30.png" /> 18120中和段'
            });
var format_18110_31 = new ol.format.GeoJSON();
var features_18110_31 = format_18110_31.readFeatures(json_18110_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18110_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18110_31.addFeatures(features_18110_31);
var lyr_18110_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18110_31, 
                style: style_18110_31,
                popuplayertitle: "18110省躬段",
                interactive: false,
                title: '<img src="styles/legend/18110_31.png" /> 18110省躬段'
            });
var format_18100_32 = new ol.format.GeoJSON();
var features_18100_32 = format_18100_32.readFeatures(json_18100_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18100_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18100_32.addFeatures(features_18100_32);
var lyr_18100_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18100_32, 
                style: style_18100_32,
                popuplayertitle: "18100喜北段",
                interactive: false,
                title: '<img src="styles/legend/18100_32.png" /> 18100喜北段'
            });
var format_18090_33 = new ol.format.GeoJSON();
var features_18090_33 = format_18090_33.readFeatures(json_18090_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18090_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18090_33.addFeatures(features_18090_33);
var lyr_18090_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18090_33, 
                style: style_18090_33,
                popuplayertitle: "18090喜東段",
                interactive: false,
                title: '<img src="styles/legend/18090_33.png" /> 18090喜東段'
            });
var format_18080_34 = new ol.format.GeoJSON();
var features_18080_34 = format_18080_34.readFeatures(json_18080_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18080_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18080_34.addFeatures(features_18080_34);
var lyr_18080_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18080_34, 
                style: style_18080_34,
                popuplayertitle: "18080新興段",
                interactive: false,
                title: '<img src="styles/legend/18080_34.png" /> 18080新興段'
            });
var format_18039_35 = new ol.format.GeoJSON();
var features_18039_35 = format_18039_35.readFeatures(json_18039_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18039_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18039_35.addFeatures(features_18039_35);
var lyr_18039_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18039_35, 
                style: style_18039_35,
                popuplayertitle: "18039鹽埕段",
                interactive: false,
                title: '<img src="styles/legend/18039_35.png" /> 18039鹽埕段'
            });
var format_18038_36 = new ol.format.GeoJSON();
var features_18038_36 = format_18038_36.readFeatures(json_18038_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18038_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18038_36.addFeatures(features_18038_36);
var lyr_18038_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18038_36, 
                style: style_18038_36,
                popuplayertitle: "18038鹽埕段",
                interactive: false,
                title: '<img src="styles/legend/18038_36.png" /> 18038鹽埕段'
            });
var format_18037_37 = new ol.format.GeoJSON();
var features_18037_37 = format_18037_37.readFeatures(json_18037_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18037_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18037_37.addFeatures(features_18037_37);
var lyr_18037_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18037_37, 
                style: style_18037_37,
                popuplayertitle: "18037鹽埕段",
                interactive: false,
                title: '<img src="styles/legend/18037_37.png" /> 18037鹽埕段'
            });
var format_18036_38 = new ol.format.GeoJSON();
var features_18036_38 = format_18036_38.readFeatures(json_18036_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18036_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18036_38.addFeatures(features_18036_38);
var lyr_18036_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18036_38, 
                style: style_18036_38,
                popuplayertitle: "18036鹽埕段",
                interactive: false,
                title: '<img src="styles/legend/18036_38.png" /> 18036鹽埕段'
            });
var format_18035_39 = new ol.format.GeoJSON();
var features_18035_39 = format_18035_39.readFeatures(json_18035_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18035_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18035_39.addFeatures(features_18035_39);
var lyr_18035_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18035_39, 
                style: style_18035_39,
                popuplayertitle: "18035鹽埕段",
                interactive: false,
                title: '<img src="styles/legend/18035_39.png" /> 18035鹽埕段'
            });
var format_18033_40 = new ol.format.GeoJSON();
var features_18033_40 = format_18033_40.readFeatures(json_18033_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18033_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18033_40.addFeatures(features_18033_40);
var lyr_18033_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18033_40, 
                style: style_18033_40,
                popuplayertitle: "18033鹽埕段",
                interactive: false,
                title: '<img src="styles/legend/18033_40.png" /> 18033鹽埕段'
            });
var format_18032_41 = new ol.format.GeoJSON();
var features_18032_41 = format_18032_41.readFeatures(json_18032_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18032_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18032_41.addFeatures(features_18032_41);
var lyr_18032_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18032_41, 
                style: style_18032_41,
                popuplayertitle: "18032鹽埕段",
                interactive: false,
                title: '<img src="styles/legend/18032_41.png" /> 18032鹽埕段'
            });
var format_18031_42 = new ol.format.GeoJSON();
var features_18031_42 = format_18031_42.readFeatures(json_18031_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18031_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18031_42.addFeatures(features_18031_42);
var lyr_18031_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18031_42, 
                style: style_18031_42,
                popuplayertitle: "18031鹽埕段",
                interactive: false,
                title: '<img src="styles/legend/18031_42.png" /> 18031鹽埕段'
            });
var format_1803A_43 = new ol.format.GeoJSON();
var features_1803A_43 = format_1803A_43.readFeatures(json_1803A_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1803A_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1803A_43.addFeatures(features_1803A_43);
var lyr_1803A_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1803A_43, 
                style: style_1803A_43,
                popuplayertitle: "1803A鹽埕段",
                interactive: false,
                title: '<img src="styles/legend/1803A_43.png" /> 1803A鹽埕段'
            });
var format_18022_44 = new ol.format.GeoJSON();
var features_18022_44 = format_18022_44.readFeatures(json_18022_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18022_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18022_44.addFeatures(features_18022_44);
var lyr_18022_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18022_44, 
                style: style_18022_44,
                popuplayertitle: "18022公英段",
                interactive: false,
                title: '<img src="styles/legend/18022_44.png" /> 18022公英段'
            });
var format_18021_45 = new ol.format.GeoJSON();
var features_18021_45 = format_18021_45.readFeatures(json_18021_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18021_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18021_45.addFeatures(features_18021_45);
var lyr_18021_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18021_45, 
                style: style_18021_45,
                popuplayertitle: "18021公英段",
                interactive: false,
                title: '<img src="styles/legend/18021_45.png" /> 18021公英段'
            });
var format_1802n_46 = new ol.format.GeoJSON();
var features_1802n_46 = format_1802n_46.readFeatures(json_1802n_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1802n_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1802n_46.addFeatures(features_1802n_46);
var lyr_1802n_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1802n_46, 
                style: style_1802n_46,
                popuplayertitle: "1802公英段n",
                interactive: false,
                title: '<img src="styles/legend/1802n_46.png" /> 1802公英段n'
            });
var format_18010_47 = new ol.format.GeoJSON();
var features_18010_47 = format_18010_47.readFeatures(json_18010_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18010_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18010_47.addFeatures(features_18010_47);
var lyr_18010_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18010_47, 
                style: style_18010_47,
                popuplayertitle: "18010桶盤淺段",
                interactive: false,
                title: '<img src="styles/legend/18010_47.png" /> 18010桶盤淺段'
            });
var format_1569n_48 = new ol.format.GeoJSON();
var features_1569n_48 = format_1569n_48.readFeatures(json_1569n_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1569n_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1569n_48.addFeatures(features_1569n_48);
var lyr_1569n_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1569n_48, 
                style: style_1569n_48,
                popuplayertitle: "1569復興段n",
                interactive: false,
                title: '<img src="styles/legend/1569n_48.png" /> 1569復興段n'
            });
var format_1568n_49 = new ol.format.GeoJSON();
var features_1568n_49 = format_1568n_49.readFeatures(json_1568n_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1568n_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1568n_49.addFeatures(features_1568n_49);
var lyr_1568n_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1568n_49, 
                style: style_1568n_49,
                popuplayertitle: "1568新後甲段n",
                interactive: false,
                title: '<img src="styles/legend/1568n_49.png" /> 1568新後甲段n'
            });
var format_1567n_50 = new ol.format.GeoJSON();
var features_1567n_50 = format_1567n_50.readFeatures(json_1567n_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1567n_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1567n_50.addFeatures(features_1567n_50);
var lyr_1567n_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1567n_50, 
                style: style_1567n_50,
                popuplayertitle: "1567裕南段n",
                interactive: false,
                title: '<img src="styles/legend/1567n_50.png" /> 1567裕南段n'
            });
var format_1566n_51 = new ol.format.GeoJSON();
var features_1566n_51 = format_1566n_51.readFeatures(json_1566n_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1566n_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1566n_51.addFeatures(features_1566n_51);
var lyr_1566n_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1566n_51, 
                style: style_1566n_51,
                popuplayertitle: "1566虎尾段n",
                interactive: false,
                title: '<img src="styles/legend/1566n_51.png" /> 1566虎尾段n'
            });
var format_1565n_52 = new ol.format.GeoJSON();
var features_1565n_52 = format_1565n_52.readFeatures(json_1565n_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1565n_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1565n_52.addFeatures(features_1565n_52);
var lyr_1565n_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1565n_52, 
                style: style_1565n_52,
                popuplayertitle: "1565富農段n",
                interactive: false,
                title: '<img src="styles/legend/1565n_52.png" /> 1565富農段n'
            });
var format_1564n_53 = new ol.format.GeoJSON();
var features_1564n_53 = format_1564n_53.readFeatures(json_1564n_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1564n_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1564n_53.addFeatures(features_1564n_53);
var lyr_1564n_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1564n_53, 
                style: style_1564n_53,
                popuplayertitle: "1564平實段n",
                interactive: false,
                title: '<img src="styles/legend/1564n_53.png" /> 1564平實段n'
            });
var format_1563n_54 = new ol.format.GeoJSON();
var features_1563n_54 = format_1563n_54.readFeatures(json_1563n_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1563n_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1563n_54.addFeatures(features_1563n_54);
var lyr_1563n_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1563n_54, 
                style: style_1563n_54,
                popuplayertitle: "1563龍泉段n",
                interactive: false,
                title: '<img src="styles/legend/1563n_54.png" /> 1563龍泉段n'
            });
var format_1562n_55 = new ol.format.GeoJSON();
var features_1562n_55 = format_1562n_55.readFeatures(json_1562n_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1562n_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1562n_55.addFeatures(features_1562n_55);
var lyr_1562n_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1562n_55, 
                style: style_1562n_55,
                popuplayertitle: "1562泉南段n",
                interactive: false,
                title: '<img src="styles/legend/1562n_55.png" /> 1562泉南段n'
            });
var format_1561n_56 = new ol.format.GeoJSON();
var features_1561n_56 = format_1561n_56.readFeatures(json_1561n_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1561n_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1561n_56.addFeatures(features_1561n_56);
var lyr_1561n_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1561n_56, 
                style: style_1561n_56,
                popuplayertitle: "1561新都心段n",
                interactive: false,
                title: '<img src="styles/legend/1561n_56.png" /> 1561新都心段n'
            });
var format_1560n_57 = new ol.format.GeoJSON();
var features_1560n_57 = format_1560n_57.readFeatures(json_1560n_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1560n_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1560n_57.addFeatures(features_1560n_57);
var lyr_1560n_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1560n_57, 
                style: style_1560n_57,
                popuplayertitle: "1560府東段n",
                interactive: false,
                title: '<img src="styles/legend/1560n_57.png" /> 1560府東段n'
            });
var format_1559n_58 = new ol.format.GeoJSON();
var features_1559n_58 = format_1559n_58.readFeatures(json_1559n_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1559n_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1559n_58.addFeatures(features_1559n_58);
var lyr_1559n_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1559n_58, 
                style: style_1559n_58,
                popuplayertitle: "1559府連段n",
                interactive: false,
                title: '<img src="styles/legend/1559n_58.png" /> 1559府連段n'
            });
var format_1558n_59 = new ol.format.GeoJSON();
var features_1558n_59 = format_1558n_59.readFeatures(json_1558n_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1558n_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1558n_59.addFeatures(features_1558n_59);
var lyr_1558n_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1558n_59, 
                style: style_1558n_59,
                popuplayertitle: "1558自由段n",
                interactive: false,
                title: '<img src="styles/legend/1558n_59.png" /> 1558自由段n'
            });
var format_1557n_60 = new ol.format.GeoJSON();
var features_1557n_60 = format_1557n_60.readFeatures(json_1557n_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1557n_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1557n_60.addFeatures(features_1557n_60);
var lyr_1557n_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1557n_60, 
                style: style_1557n_60,
                popuplayertitle: "1557關帝段n",
                interactive: false,
                title: '<img src="styles/legend/1557n_60.png" /> 1557關帝段n'
            });
var format_1556n_61 = new ol.format.GeoJSON();
var features_1556n_61 = format_1556n_61.readFeatures(json_1556n_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1556n_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1556n_61.addFeatures(features_1556n_61);
var lyr_1556n_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1556n_61, 
                style: style_1556n_61,
                popuplayertitle: "1556富強段n",
                interactive: false,
                title: '<img src="styles/legend/1556n_61.png" /> 1556富強段n'
            });
var format_1555n_62 = new ol.format.GeoJSON();
var features_1555n_62 = format_1555n_62.readFeatures(json_1555n_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1555n_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1555n_62.addFeatures(features_1555n_62);
var lyr_1555n_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1555n_62, 
                style: style_1555n_62,
                popuplayertitle: "1555富裕段n",
                interactive: false,
                title: '<img src="styles/legend/1555n_62.png" /> 1555富裕段n'
            });
var format_1554n_63 = new ol.format.GeoJSON();
var features_1554n_63 = format_1554n_63.readFeatures(json_1554n_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1554n_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1554n_63.addFeatures(features_1554n_63);
var lyr_1554n_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1554n_63, 
                style: style_1554n_63,
                popuplayertitle: "1554路東段n",
                interactive: false,
                title: '<img src="styles/legend/1554n_63.png" /> 1554路東段n'
            });
var format_1553n_64 = new ol.format.GeoJSON();
var features_1553n_64 = format_1553n_64.readFeatures(json_1553n_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1553n_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1553n_64.addFeatures(features_1553n_64);
var lyr_1553n_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1553n_64, 
                style: style_1553n_64,
                popuplayertitle: "1553立德段n",
                interactive: false,
                title: '<img src="styles/legend/1553n_64.png" /> 1553立德段n'
            });
var format_1552n_65 = new ol.format.GeoJSON();
var features_1552n_65 = format_1552n_65.readFeatures(json_1552n_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1552n_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1552n_65.addFeatures(features_1552n_65);
var lyr_1552n_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1552n_65, 
                style: style_1552n_65,
                popuplayertitle: "1552大同段n",
                interactive: false,
                title: '<img src="styles/legend/1552n_65.png" /> 1552大同段n'
            });
var format_1551s_66 = new ol.format.GeoJSON();
var features_1551s_66 = format_1551s_66.readFeatures(json_1551s_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1551s_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1551s_66.addFeatures(features_1551s_66);
var lyr_1551s_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1551s_66, 
                style: style_1551s_66,
                popuplayertitle: "1551裕東段s",
                interactive: false,
                title: '<img src="styles/legend/1551s_66.png" /> 1551裕東段s'
            });
var format_15183_67 = new ol.format.GeoJSON();
var features_15183_67 = format_15183_67.readFeatures(json_15183_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15183_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15183_67.addFeatures(features_15183_67);
var lyr_15183_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15183_67, 
                style: style_15183_67,
                popuplayertitle: "15183育樂段",
                interactive: false,
                title: '<img src="styles/legend/15183_67.png" /> 15183育樂段'
            });
var format_15182_68 = new ol.format.GeoJSON();
var features_15182_68 = format_15182_68.readFeatures(json_15182_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15182_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15182_68.addFeatures(features_15182_68);
var lyr_15182_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15182_68, 
                style: style_15182_68,
                popuplayertitle: "15182育樂段",
                interactive: false,
                title: '<img src="styles/legend/15182_68.png" /> 15182育樂段'
            });
var format_15181_69 = new ol.format.GeoJSON();
var features_15181_69 = format_15181_69.readFeatures(json_15181_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15181_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15181_69.addFeatures(features_15181_69);
var lyr_15181_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15181_69, 
                style: style_15181_69,
                popuplayertitle: "15181育樂段",
                interactive: false,
                title: '<img src="styles/legend/15181_69.png" /> 15181育樂段'
            });
var format_15180_70 = new ol.format.GeoJSON();
var features_15180_70 = format_15180_70.readFeatures(json_15180_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15180_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15180_70.addFeatures(features_15180_70);
var lyr_15180_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15180_70, 
                style: style_15180_70,
                popuplayertitle: "15180育樂段",
                interactive: false,
                title: '<img src="styles/legend/15180_70.png" /> 15180育樂段'
            });
var format_15170_71 = new ol.format.GeoJSON();
var features_15170_71 = format_15170_71.readFeatures(json_15170_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15170_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15170_71.addFeatures(features_15170_71);
var lyr_15170_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15170_71, 
                style: style_15170_71,
                popuplayertitle: "15170光華段",
                interactive: false,
                title: '<img src="styles/legend/15170_71.png" /> 15170光華段'
            });
var format_15160_72 = new ol.format.GeoJSON();
var features_15160_72 = format_15160_72.readFeatures(json_15160_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15160_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15160_72.addFeatures(features_15160_72);
var lyr_15160_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15160_72, 
                style: style_15160_72,
                popuplayertitle: "15160東安段",
                interactive: false,
                title: '<img src="styles/legend/15160_72.png" /> 15160東安段'
            });
var format_15150_73 = new ol.format.GeoJSON();
var features_15150_73 = format_15150_73.readFeatures(json_15150_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15150_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15150_73.addFeatures(features_15150_73);
var lyr_15150_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15150_73, 
                style: style_15150_73,
                popuplayertitle: "15150龍山段",
                interactive: false,
                title: '<img src="styles/legend/15150_73.png" /> 15150龍山段'
            });
var format_15143_74 = new ol.format.GeoJSON();
var features_15143_74 = format_15143_74.readFeatures(json_15143_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15143_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15143_74.addFeatures(features_15143_74);
var lyr_15143_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15143_74, 
                style: style_15143_74,
                popuplayertitle: "15143東光段",
                interactive: false,
                title: '<img src="styles/legend/15143_74.png" /> 15143東光段'
            });
var format_15142_75 = new ol.format.GeoJSON();
var features_15142_75 = format_15142_75.readFeatures(json_15142_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15142_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15142_75.addFeatures(features_15142_75);
var lyr_15142_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15142_75, 
                style: style_15142_75,
                popuplayertitle: "15142東光段",
                interactive: false,
                title: '<img src="styles/legend/15142_75.png" /> 15142東光段'
            });
var format_15141_76 = new ol.format.GeoJSON();
var features_15141_76 = format_15141_76.readFeatures(json_15141_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15141_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15141_76.addFeatures(features_15141_76);
var lyr_15141_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15141_76, 
                style: style_15141_76,
                popuplayertitle: "15141東光段",
                interactive: false,
                title: '<img src="styles/legend/15141_76.png" /> 15141東光段'
            });
var format_1514n_77 = new ol.format.GeoJSON();
var features_1514n_77 = format_1514n_77.readFeatures(json_1514n_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1514n_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1514n_77.addFeatures(features_1514n_77);
var lyr_1514n_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1514n_77, 
                style: style_1514n_77,
                popuplayertitle: "1514東光段n",
                interactive: false,
                title: '<img src="styles/legend/1514n_77.png" /> 1514東光段n'
            });
var format_15131_78 = new ol.format.GeoJSON();
var features_15131_78 = format_15131_78.readFeatures(json_15131_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15131_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15131_78.addFeatures(features_15131_78);
var lyr_15131_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15131_78, 
                style: style_15131_78,
                popuplayertitle: "15131東寧段",
                interactive: false,
                title: '<img src="styles/legend/15131_78.png" /> 15131東寧段'
            });
var format_15130_79 = new ol.format.GeoJSON();
var features_15130_79 = format_15130_79.readFeatures(json_15130_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15130_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15130_79.addFeatures(features_15130_79);
var lyr_15130_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15130_79, 
                style: style_15130_79,
                popuplayertitle: "15130東寧段",
                interactive: false,
                title: '<img src="styles/legend/15130_79.png" /> 15130東寧段'
            });
var format_15111_80 = new ol.format.GeoJSON();
var features_15111_80 = format_15111_80.readFeatures(json_15111_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15111_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15111_80.addFeatures(features_15111_80);
var lyr_15111_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15111_80, 
                style: style_15111_80,
                popuplayertitle: "15111光明段",
                interactive: false,
                title: '<img src="styles/legend/15111_80.png" /> 15111光明段'
            });
var format_15110_81 = new ol.format.GeoJSON();
var features_15110_81 = format_15110_81.readFeatures(json_15110_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15110_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15110_81.addFeatures(features_15110_81);
var lyr_15110_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15110_81, 
                style: style_15110_81,
                popuplayertitle: "15110光明段",
                interactive: false,
                title: '<img src="styles/legend/15110_81.png" /> 15110光明段'
            });
var format_1511n_82 = new ol.format.GeoJSON();
var features_1511n_82 = format_1511n_82.readFeatures(json_1511n_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1511n_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1511n_82.addFeatures(features_1511n_82);
var lyr_1511n_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1511n_82, 
                style: style_1511n_82,
                popuplayertitle: "1511光明段n",
                interactive: false,
                title: '<img src="styles/legend/1511n_82.png" /> 1511光明段n'
            });
var format_15100_83 = new ol.format.GeoJSON();
var features_15100_83 = format_15100_83.readFeatures(json_15100_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15100_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15100_83.addFeatures(features_15100_83);
var lyr_15100_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15100_83, 
                style: style_15100_83,
                popuplayertitle: "15100新東段",
                interactive: false,
                title: '<img src="styles/legend/15100_83.png" /> 15100新東段'
            });
var format_15090_84 = new ol.format.GeoJSON();
var features_15090_84 = format_15090_84.readFeatures(json_15090_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15090_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15090_84.addFeatures(features_15090_84);
var lyr_15090_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15090_84, 
                style: style_15090_84,
                popuplayertitle: "15090仁和段",
                interactive: false,
                title: '<img src="styles/legend/15090_84.png" /> 15090仁和段'
            });
var format_1509n_85 = new ol.format.GeoJSON();
var features_1509n_85 = format_1509n_85.readFeatures(json_1509n_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1509n_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1509n_85.addFeatures(features_1509n_85);
var lyr_1509n_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1509n_85, 
                style: style_1509n_85,
                popuplayertitle: "1509仁和段n",
                interactive: false,
                title: '<img src="styles/legend/1509n_85.png" /> 1509仁和段n'
            });
var format_15080_86 = new ol.format.GeoJSON();
var features_15080_86 = format_15080_86.readFeatures(json_15080_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15080_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15080_86.addFeatures(features_15080_86);
var lyr_15080_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15080_86, 
                style: style_15080_86,
                popuplayertitle: "15080德高段",
                interactive: false,
                title: '<img src="styles/legend/15080_86.png" /> 15080德高段'
            });
var format_1508n_87 = new ol.format.GeoJSON();
var features_1508n_87 = format_1508n_87.readFeatures(json_1508n_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1508n_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1508n_87.addFeatures(features_1508n_87);
var lyr_1508n_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1508n_87, 
                style: style_1508n_87,
                popuplayertitle: "1508德高段n",
                interactive: false,
                title: '<img src="styles/legend/1508n_87.png" /> 1508德高段n'
            });
var format_15020_88 = new ol.format.GeoJSON();
var features_15020_88 = format_15020_88.readFeatures(json_15020_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15020_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15020_88.addFeatures(features_15020_88);
var lyr_15020_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15020_88, 
                style: style_15020_88,
                popuplayertitle: "15020虎尾寮段",
                interactive: false,
                title: '<img src="styles/legend/15020_88.png" /> 15020虎尾寮段'
            });
var format_1502s_89 = new ol.format.GeoJSON();
var features_1502s_89 = format_1502s_89.readFeatures(json_1502s_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1502s_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1502s_89.addFeatures(features_1502s_89);
var lyr_1502s_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1502s_89, 
                style: style_1502s_89,
                popuplayertitle: "1502虎尾寮段s",
                interactive: false,
                title: '<img src="styles/legend/1502s_89.png" /> 1502虎尾寮段s'
            });
var format_15012_90 = new ol.format.GeoJSON();
var features_15012_90 = format_15012_90.readFeatures(json_15012_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15012_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15012_90.addFeatures(features_15012_90);
var lyr_15012_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15012_90, 
                style: style_15012_90,
                popuplayertitle: "15012竹篙厝段",
                interactive: false,
                title: '<img src="styles/legend/15012_90.png" /> 15012竹篙厝段'
            });
var format_15011_91 = new ol.format.GeoJSON();
var features_15011_91 = format_15011_91.readFeatures(json_15011_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15011_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15011_91.addFeatures(features_15011_91);
var lyr_15011_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15011_91, 
                style: style_15011_91,
                popuplayertitle: "15011竹篙厝段",
                interactive: false,
                title: '<img src="styles/legend/15011_91.png" /> 15011竹篙厝段'
            });
var format_1501n_92 = new ol.format.GeoJSON();
var features_1501n_92 = format_1501n_92.readFeatures(json_1501n_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1501n_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1501n_92.addFeatures(features_1501n_92);
var lyr_1501n_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1501n_92, 
                style: style_1501n_92,
                popuplayertitle: "1501竹篙厝段n",
                interactive: false,
                title: '<img src="styles/legend/1501n_92.png" /> 1501竹篙厝段n'
            });
var format_s_93 = new ol.format.GeoJSON();
var features_s_93 = format_s_93.readFeatures(json_s_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_s_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_s_93.addFeatures(features_s_93);
var lyr_s_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_s_93, 
                style: style_s_93,
                popuplayertitle: "東南圖根s",
                interactive: true,
    title: '<img src="styles/legend/s_93_0.png" />東南圖根s'
        });
var format_n_94 = new ol.format.GeoJSON();
var features_n_94 = format_n_94.readFeatures(json_n_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_n_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_n_94.addFeatures(features_n_94);
var lyr_n_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_n_94, 
                style: style_n_94,
                popuplayertitle: "東南圖根n",
                interactive: true,
    title: '<img src="styles/legend/n_94_0.png" />東南圖根n'
        });
var format__95 = new ol.format.GeoJSON();
var features__95 = format__95.readFeatures(json__95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__95.addFeatures(features__95);
var lyr__95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__95, 
                style: style__95,
                popuplayertitle: "複丈樁位",
                interactive: true,
    title: '<img src="styles/legend/_95_0.png" />複丈樁位'
        });

lyr__0.setVisible(true);lyr__1.setVisible(false);lyr__2.setVisible(false);lyr__3.setVisible(false);lyr__4.setVisible(false);lyr__5.setVisible(true);lyr_1874n_6.setVisible(false);lyr_1871n_7.setVisible(false);lyr_1870n_8.setVisible(false);lyr_1869n_9.setVisible(false);lyr_1868n_10.setVisible(false);lyr_1867n_11.setVisible(false);lyr_1866n_12.setVisible(false);lyr_1865s_13.setVisible(false);lyr_1864s_14.setVisible(false);lyr_1863s_15.setVisible(false);lyr_1862s_16.setVisible(false);lyr_1861s_17.setVisible(false);lyr_1860s_18.setVisible(false);lyr_1859s_19.setVisible(false);lyr_1858s_20.setVisible(false);lyr_1857s_21.setVisible(false);lyr_1856s_22.setVisible(false);lyr_1855s_23.setVisible(false);lyr_1854s_24.setVisible(false);lyr_1853s_25.setVisible(false);lyr_1852s_26.setVisible(false);lyr_1851s_27.setVisible(false);lyr_18140_28.setVisible(false);lyr_18130_29.setVisible(false);lyr_18120_30.setVisible(false);lyr_18110_31.setVisible(false);lyr_18100_32.setVisible(false);lyr_18090_33.setVisible(false);lyr_18080_34.setVisible(false);lyr_18039_35.setVisible(false);lyr_18038_36.setVisible(false);lyr_18037_37.setVisible(false);lyr_18036_38.setVisible(false);lyr_18035_39.setVisible(false);lyr_18033_40.setVisible(false);lyr_18032_41.setVisible(false);lyr_18031_42.setVisible(false);lyr_1803A_43.setVisible(false);lyr_18022_44.setVisible(false);lyr_18021_45.setVisible(false);lyr_1802n_46.setVisible(false);lyr_18010_47.setVisible(false);lyr_1569n_48.setVisible(false);lyr_1568n_49.setVisible(false);lyr_1567n_50.setVisible(false);lyr_1566n_51.setVisible(false);lyr_1565n_52.setVisible(false);lyr_1564n_53.setVisible(false);lyr_1563n_54.setVisible(false);lyr_1562n_55.setVisible(false);lyr_1561n_56.setVisible(false);lyr_1560n_57.setVisible(false);lyr_1559n_58.setVisible(false);lyr_1558n_59.setVisible(false);lyr_1557n_60.setVisible(false);lyr_1556n_61.setVisible(false);lyr_1555n_62.setVisible(false);lyr_1554n_63.setVisible(false);lyr_1553n_64.setVisible(false);lyr_1552n_65.setVisible(false);lyr_1551s_66.setVisible(false);lyr_15183_67.setVisible(false);lyr_15182_68.setVisible(false);lyr_15181_69.setVisible(false);lyr_15180_70.setVisible(false);lyr_15170_71.setVisible(false);lyr_15160_72.setVisible(false);lyr_15150_73.setVisible(false);lyr_15143_74.setVisible(false);lyr_15142_75.setVisible(false);lyr_15141_76.setVisible(false);lyr_1514n_77.setVisible(false);lyr_15131_78.setVisible(false);lyr_15130_79.setVisible(false);lyr_15111_80.setVisible(false);lyr_15110_81.setVisible(false);lyr_1511n_82.setVisible(false);lyr_15100_83.setVisible(false);lyr_15090_84.setVisible(false);lyr_1509n_85.setVisible(false);lyr_15080_86.setVisible(false);lyr_1508n_87.setVisible(false);lyr_15020_88.setVisible(false);lyr_1502s_89.setVisible(false);lyr_15012_90.setVisible(false);lyr_15011_91.setVisible(false);lyr_1501n_92.setVisible(false);lyr_s_93.setVisible(false);lyr_n_94.setVisible(false);lyr__95.setVisible(false);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr_1874n_6,lyr_1871n_7,lyr_1870n_8,lyr_1869n_9,lyr_1868n_10,lyr_1867n_11,lyr_1866n_12,lyr_1865s_13,lyr_1864s_14,lyr_1863s_15,lyr_1862s_16,lyr_1861s_17,lyr_1860s_18,lyr_1859s_19,lyr_1858s_20,lyr_1857s_21,lyr_1856s_22,lyr_1855s_23,lyr_1854s_24,lyr_1853s_25,lyr_1852s_26,lyr_1851s_27,lyr_18140_28,lyr_18130_29,lyr_18120_30,lyr_18110_31,lyr_18100_32,lyr_18090_33,lyr_18080_34,lyr_18039_35,lyr_18038_36,lyr_18037_37,lyr_18036_38,lyr_18035_39,lyr_18033_40,lyr_18032_41,lyr_18031_42,lyr_1803A_43,lyr_18022_44,lyr_18021_45,lyr_1802n_46,lyr_18010_47,lyr_1569n_48,lyr_1568n_49,lyr_1567n_50,lyr_1566n_51,lyr_1565n_52,lyr_1564n_53,lyr_1563n_54,lyr_1562n_55,lyr_1561n_56,lyr_1560n_57,lyr_1559n_58,lyr_1558n_59,lyr_1557n_60,lyr_1556n_61,lyr_1555n_62,lyr_1554n_63,lyr_1553n_64,lyr_1552n_65,lyr_1551s_66,lyr_15183_67,lyr_15182_68,lyr_15181_69,lyr_15180_70,lyr_15170_71,lyr_15160_72,lyr_15150_73,lyr_15143_74,lyr_15142_75,lyr_15141_76,lyr_1514n_77,lyr_15131_78,lyr_15130_79,lyr_15111_80,lyr_15110_81,lyr_1511n_82,lyr_15100_83,lyr_15090_84,lyr_1509n_85,lyr_15080_86,lyr_1508n_87,lyr_15020_88,lyr_1502s_89,lyr_15012_90,lyr_15011_91,lyr_1501n_92,lyr_s_93,lyr_n_94,lyr__95];
lyr__5.set('fieldAliases', {'SECTION': '段別', 'CRS': '坐標系統', });
lyr_1874n_6.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1871n_7.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1870n_8.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1869n_9.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1868n_10.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1867n_11.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1866n_12.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1865s_13.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1864s_14.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1863s_15.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1862s_16.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1861s_17.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1860s_18.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1859s_19.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1858s_20.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1857s_21.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1856s_22.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1855s_23.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1854s_24.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1853s_25.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1852s_26.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1851s_27.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18140_28.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18130_29.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18120_30.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18110_31.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18100_32.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18090_33.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18080_34.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18039_35.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18038_36.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18037_37.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18036_38.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18035_39.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18033_40.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18032_41.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18031_42.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1803A_43.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18022_44.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18021_45.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1802n_46.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_18010_47.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1569n_48.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1568n_49.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1567n_50.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1566n_51.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1565n_52.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1564n_53.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1563n_54.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1562n_55.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1561n_56.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1560n_57.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1559n_58.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1558n_59.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1557n_60.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1556n_61.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1555n_62.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1554n_63.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1553n_64.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1552n_65.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1551s_66.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15183_67.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15182_68.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15181_69.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15180_70.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15170_71.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15160_72.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15150_73.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15143_74.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15142_75.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15141_76.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1514n_77.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15131_78.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15130_79.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15111_80.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15110_81.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1511n_82.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15100_83.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15090_84.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1509n_85.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15080_86.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1508n_87.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15020_88.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1502s_89.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15012_90.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_15011_91.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_1501n_92.set('fieldAliases', {'name': 'name', 'oldsect': 'oldsect', 'oldname': 'oldname', 'oldArea': 'oldArea', 'newArea': 'newArea', });
lyr_s_93.set('fieldAliases', {'DATE': '日期', 'NO': '點號', 'TYPE': '樁類', 'TRANS_TYPE': '轉換種類', 'PS': '備註', 'Y_67': 'Y_67', 'X_67': 'X_67', 'PHOTO1': '影像1', 'PHOTO2': '影像2', 'PHOTO3': '影像3', 'PHOTO4': '影像4', 'PHOTO5': '影像5', });
lyr_n_94.set('fieldAliases', {'DATE': '日期', 'NO': '點號', 'TYPE': '樁類', 'Y_97': 'Y_97', 'X_97': 'X_97', 'PS': '備註', 'repeat': 'repeat', 'PHOTO1': '影像1', 'PHOTO2': '影像2', 'PHOTO3': '影像3', 'PHOTO4': '影像4', 'PHOTO5': '影像5', });
lyr__95.set('fieldAliases', {'DATE': '日期', 'POINT_NO': '點號', 'POINT_TYPE': '樁類', 'PS': '備註', 'CASE': '項目', 'PHOTO1': '影像1', 'PHOTO2': '影像2', 'PHOTO3': '影像3', });
lyr__5.set('fieldImages', {'SECTION': 'TextEdit', 'CRS': 'Hidden', });
lyr_1874n_6.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1871n_7.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1870n_8.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1869n_9.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1868n_10.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1867n_11.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1866n_12.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1865s_13.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1864s_14.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1863s_15.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1862s_16.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1861s_17.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1860s_18.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1859s_19.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1858s_20.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1857s_21.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1856s_22.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1855s_23.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1854s_24.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1853s_25.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1852s_26.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1851s_27.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18140_28.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18130_29.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18120_30.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18110_31.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18100_32.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18090_33.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18080_34.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18039_35.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18038_36.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18037_37.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18036_38.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18035_39.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18033_40.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18032_41.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18031_42.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1803A_43.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18022_44.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18021_45.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1802n_46.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_18010_47.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1569n_48.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1568n_49.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1567n_50.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1566n_51.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1565n_52.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1564n_53.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1563n_54.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1562n_55.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1561n_56.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1560n_57.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1559n_58.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1558n_59.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1557n_60.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1556n_61.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1555n_62.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1554n_63.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1553n_64.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1552n_65.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1551s_66.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15183_67.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15182_68.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15181_69.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15180_70.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15170_71.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15160_72.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15150_73.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15143_74.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15142_75.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15141_76.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1514n_77.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15131_78.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15130_79.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15111_80.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15110_81.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1511n_82.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15100_83.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15090_84.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1509n_85.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15080_86.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1508n_87.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15020_88.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1502s_89.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15012_90.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_15011_91.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_1501n_92.set('fieldImages', {'name': 'TextEdit', 'oldsect': 'Hidden', 'oldname': 'Hidden', 'oldArea': 'Hidden', 'newArea': 'Hidden', });
lyr_s_93.set('fieldImages', {'DATE': 'Hidden', 'NO': 'TextEdit', 'TYPE': 'TextEdit', 'TRANS_TYPE': 'Hidden', 'PS': 'TextEdit', 'Y_67': 'TextEdit', 'X_67': 'TextEdit', 'PHOTO1': 'ExternalResource', 'PHOTO2': 'Hidden', 'PHOTO3': 'Hidden', 'PHOTO4': 'Hidden', 'PHOTO5': 'Hidden', });
lyr_n_94.set('fieldImages', {'DATE': 'Hidden', 'NO': 'TextEdit', 'TYPE': 'TextEdit', 'Y_97': 'TextEdit', 'X_97': 'TextEdit', 'PS': 'TextEdit', 'repeat': 'Hidden', 'PHOTO1': 'ExternalResource', 'PHOTO2': 'Hidden', 'PHOTO3': 'Hidden', 'PHOTO4': 'Hidden', 'PHOTO5': 'Hidden', });
lyr__95.set('fieldImages', {'DATE': 'TextEdit', 'POINT_NO': 'TextEdit', 'POINT_TYPE': 'TextEdit', 'PS': 'TextEdit', 'CASE': 'TextEdit', 'PHOTO1': 'ExternalResource', 'PHOTO2': 'Hidden', 'PHOTO3': 'Hidden', });
lyr__5.set('fieldLabels', {'SECTION': 'no label', });
lyr_1874n_6.set('fieldLabels', {'name': 'no label', });
lyr_1871n_7.set('fieldLabels', {'name': 'no label', });
lyr_1870n_8.set('fieldLabels', {'name': 'no label', });
lyr_1869n_9.set('fieldLabels', {'name': 'no label', });
lyr_1868n_10.set('fieldLabels', {'name': 'no label', });
lyr_1867n_11.set('fieldLabels', {'name': 'no label', });
lyr_1866n_12.set('fieldLabels', {'name': 'no label', });
lyr_1865s_13.set('fieldLabels', {'name': 'no label', });
lyr_1864s_14.set('fieldLabels', {'name': 'no label', });
lyr_1863s_15.set('fieldLabels', {'name': 'no label', });
lyr_1862s_16.set('fieldLabels', {'name': 'no label', });
lyr_1861s_17.set('fieldLabels', {'name': 'no label', });
lyr_1860s_18.set('fieldLabels', {'name': 'no label', });
lyr_1859s_19.set('fieldLabels', {'name': 'no label', });
lyr_1858s_20.set('fieldLabels', {'name': 'no label', });
lyr_1857s_21.set('fieldLabels', {'name': 'no label', });
lyr_1856s_22.set('fieldLabels', {'name': 'no label', });
lyr_1855s_23.set('fieldLabels', {'name': 'no label', });
lyr_1854s_24.set('fieldLabels', {'name': 'no label', });
lyr_1853s_25.set('fieldLabels', {'name': 'no label', });
lyr_1852s_26.set('fieldLabels', {'name': 'no label', });
lyr_1851s_27.set('fieldLabels', {'name': 'no label', });
lyr_18140_28.set('fieldLabels', {'name': 'no label', });
lyr_18130_29.set('fieldLabels', {'name': 'no label', });
lyr_18120_30.set('fieldLabels', {'name': 'no label', });
lyr_18110_31.set('fieldLabels', {'name': 'no label', });
lyr_18100_32.set('fieldLabels', {'name': 'no label', });
lyr_18090_33.set('fieldLabels', {'name': 'no label', });
lyr_18080_34.set('fieldLabels', {'name': 'no label', });
lyr_18039_35.set('fieldLabels', {'name': 'no label', });
lyr_18038_36.set('fieldLabels', {'name': 'no label', });
lyr_18037_37.set('fieldLabels', {'name': 'no label', });
lyr_18036_38.set('fieldLabels', {'name': 'no label', });
lyr_18035_39.set('fieldLabels', {'name': 'no label', });
lyr_18033_40.set('fieldLabels', {'name': 'no label', });
lyr_18032_41.set('fieldLabels', {'name': 'no label', });
lyr_18031_42.set('fieldLabels', {'name': 'no label', });
lyr_1803A_43.set('fieldLabels', {'name': 'no label', });
lyr_18022_44.set('fieldLabels', {'name': 'no label', });
lyr_18021_45.set('fieldLabels', {'name': 'no label', });
lyr_1802n_46.set('fieldLabels', {'name': 'no label', });
lyr_18010_47.set('fieldLabels', {'name': 'no label', });
lyr_1569n_48.set('fieldLabels', {'name': 'no label', });
lyr_1568n_49.set('fieldLabels', {'name': 'no label', });
lyr_1567n_50.set('fieldLabels', {'name': 'no label', });
lyr_1566n_51.set('fieldLabels', {'name': 'no label', });
lyr_1565n_52.set('fieldLabels', {'name': 'no label', });
lyr_1564n_53.set('fieldLabels', {'name': 'no label', });
lyr_1563n_54.set('fieldLabels', {'name': 'no label', });
lyr_1562n_55.set('fieldLabels', {'name': 'no label', });
lyr_1561n_56.set('fieldLabels', {'name': 'no label', });
lyr_1560n_57.set('fieldLabels', {'name': 'no label', });
lyr_1559n_58.set('fieldLabels', {'name': 'no label', });
lyr_1558n_59.set('fieldLabels', {'name': 'no label', });
lyr_1557n_60.set('fieldLabels', {'name': 'no label', });
lyr_1556n_61.set('fieldLabels', {'name': 'no label', });
lyr_1555n_62.set('fieldLabels', {'name': 'no label', });
lyr_1554n_63.set('fieldLabels', {'name': 'no label', });
lyr_1553n_64.set('fieldLabels', {'name': 'no label', });
lyr_1552n_65.set('fieldLabels', {'name': 'no label', });
lyr_1551s_66.set('fieldLabels', {'name': 'no label', });
lyr_15183_67.set('fieldLabels', {'name': 'no label', });
lyr_15182_68.set('fieldLabels', {'name': 'no label', });
lyr_15181_69.set('fieldLabels', {'name': 'no label', });
lyr_15180_70.set('fieldLabels', {'name': 'no label', });
lyr_15170_71.set('fieldLabels', {'name': 'no label', });
lyr_15160_72.set('fieldLabels', {'name': 'no label', });
lyr_15150_73.set('fieldLabels', {'name': 'no label', });
lyr_15143_74.set('fieldLabels', {'name': 'no label', });
lyr_15142_75.set('fieldLabels', {'name': 'no label', });
lyr_15141_76.set('fieldLabels', {'name': 'no label', });
lyr_1514n_77.set('fieldLabels', {'name': 'no label', });
lyr_15131_78.set('fieldLabels', {'name': 'no label', });
lyr_15130_79.set('fieldLabels', {'name': 'no label', });
lyr_15111_80.set('fieldLabels', {'name': 'no label', });
lyr_15110_81.set('fieldLabels', {'name': 'no label', });
lyr_1511n_82.set('fieldLabels', {'name': 'no label', });
lyr_15100_83.set('fieldLabels', {'name': 'no label', });
lyr_15090_84.set('fieldLabels', {'name': 'no label', });
lyr_1509n_85.set('fieldLabels', {'name': 'no label', });
lyr_15080_86.set('fieldLabels', {'name': 'no label', });
lyr_1508n_87.set('fieldLabels', {'name': 'no label', });
lyr_15020_88.set('fieldLabels', {'name': 'no label', });
lyr_1502s_89.set('fieldLabels', {'name': 'no label', });
lyr_15012_90.set('fieldLabels', {'name': 'no label', });
lyr_15011_91.set('fieldLabels', {'name': 'no label', });
lyr_1501n_92.set('fieldLabels', {'name': 'no label', });
lyr_s_93.set('fieldLabels', {'NO': 'inline label - visible with data', 'TYPE': 'inline label - visible with data', 'PS': 'inline label - visible with data', 'Y_67': 'inline label - visible with data', 'X_67': 'inline label - visible with data', 'PHOTO1': 'header label - visible with data', });
lyr_n_94.set('fieldLabels', {'NO': 'inline label - visible with data', 'TYPE': 'inline label - visible with data', 'Y_97': 'inline label - visible with data', 'X_97': 'inline label - visible with data', 'PS': 'inline label - visible with data', 'PHOTO1': 'header label - visible with data', });
lyr__95.set('fieldLabels', {'DATE': 'inline label - visible with data', 'POINT_NO': 'inline label - visible with data', 'POINT_TYPE': 'inline label - visible with data', 'PS': 'inline label - visible with data', 'CASE': 'inline label - visible with data', 'PHOTO1': 'header label - visible with data', });
lyr__95.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});