var wms_layers = [];


        var lyr_3_0 = new ol.layer.Tile({
            'title': '高德地图 - 矢量地图3',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://wprd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=10&x={x}&y={y}&z={z}'
            })
        });
var format_countylevelregion_1 = new ol.format.GeoJSON();
var features_countylevelregion_1 = format_countylevelregion_1.readFeatures(json_countylevelregion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_countylevelregion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_countylevelregion_1.addFeatures(features_countylevelregion_1);
var lyr_countylevelregion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_countylevelregion_1, 
                style: style_countylevelregion_1,
                popuplayertitle: 'county-level region',
                interactive: true,
                title: '<img src="styles/legend/countylevelregion_1.png" /> county-level region'
            });
var format_BOC_2 = new ol.format.GeoJSON();
var features_BOC_2 = format_BOC_2.readFeatures(json_BOC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOC_2.addFeatures(features_BOC_2);
var lyr_BOC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOC_2, 
                style: style_BOC_2,
                popuplayertitle: 'BOC',
                interactive: true,
                title: '<img src="styles/legend/BOC_2.png" /> BOC'
            });
var format_ABC_3 = new ol.format.GeoJSON();
var features_ABC_3 = format_ABC_3.readFeatures(json_ABC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABC_3.addFeatures(features_ABC_3);
var lyr_ABC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABC_3, 
                style: style_ABC_3,
                popuplayertitle: 'ABC',
                interactive: true,
                title: '<img src="styles/legend/ABC_3.png" /> ABC'
            });
var format_ICBC_4 = new ol.format.GeoJSON();
var features_ICBC_4 = format_ICBC_4.readFeatures(json_ICBC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICBC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICBC_4.addFeatures(features_ICBC_4);
var lyr_ICBC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ICBC_4, 
                style: style_ICBC_4,
                popuplayertitle: 'ICBC',
                interactive: true,
                title: '<img src="styles/legend/ICBC_4.png" /> ICBC'
            });
var format_CCB_5 = new ol.format.GeoJSON();
var features_CCB_5 = format_CCB_5.readFeatures(json_CCB_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCB_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCB_5.addFeatures(features_CCB_5);
var lyr_CCB_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCB_5, 
                style: style_CCB_5,
                popuplayertitle: 'CCB',
                interactive: true,
                title: '<img src="styles/legend/CCB_5.png" /> CCB'
            });
var group_layer = new ol.layer.Group({
                                layers: [lyr_3_0,lyr_countylevelregion_1,lyr_BOC_2,lyr_ABC_3,lyr_ICBC_4,lyr_CCB_5,],
                                fold: 'open',
                                title: 'layer'});

lyr_3_0.setVisible(true);lyr_countylevelregion_1.setVisible(false);lyr_BOC_2.setVisible(true);lyr_ABC_3.setVisible(true);lyr_ICBC_4.setVisible(true);lyr_CCB_5.setVisible(true);
var layersList = [group_layer];
lyr_countylevelregion_1.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr_BOC_2.set('fieldAliases', {'名称': '名称', '行政区': '行政区', 'lng（百度经度）': 'lng（百度经度）', 'lat（百度纬度）': 'lat（百度纬度）', });
lyr_ABC_3.set('fieldAliases', {'名称': '名称', '行政区': '行政区', 'lng（百度经度）': 'lng（百度经度）', 'lat（百度纬度）': 'lat（百度纬度）', });
lyr_ICBC_4.set('fieldAliases', {'名称': '名称', '行政区': '行政区', 'lng（百度经度）': 'lng（百度经度）', 'lat（百度纬度）': 'lat（百度纬度）', });
lyr_CCB_5.set('fieldAliases', {'名称': '名称', '行政区': '行政区', 'lng（百度经度）': 'lng（百度经度）', 'lat（百度纬度）': 'lat（百度纬度）', });
lyr_countylevelregion_1.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', });
lyr_BOC_2.set('fieldImages', {'名称': 'TextEdit', '行政区': 'TextEdit', 'lng（百度经度）': 'TextEdit', 'lat（百度纬度）': 'TextEdit', });
lyr_ABC_3.set('fieldImages', {'名称': 'TextEdit', '行政区': 'TextEdit', 'lng（百度经度）': 'TextEdit', 'lat（百度纬度）': 'TextEdit', });
lyr_ICBC_4.set('fieldImages', {'名称': 'TextEdit', '行政区': 'TextEdit', 'lng（百度经度）': 'TextEdit', 'lat（百度纬度）': 'TextEdit', });
lyr_CCB_5.set('fieldImages', {'名称': 'TextEdit', '行政区': 'TextEdit', 'lng（百度经度）': 'TextEdit', 'lat（百度纬度）': 'TextEdit', });
lyr_countylevelregion_1.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr_BOC_2.set('fieldLabels', {'名称': 'inline label - always visible', '行政区': 'inline label - always visible', 'lng（百度经度）': 'no label', 'lat（百度纬度）': 'no label', });
lyr_ABC_3.set('fieldLabels', {'名称': 'inline label - always visible', '行政区': 'inline label - always visible', 'lng（百度经度）': 'no label', 'lat（百度纬度）': 'no label', });
lyr_ICBC_4.set('fieldLabels', {'名称': 'inline label - always visible', '行政区': 'inline label - always visible', 'lng（百度经度）': 'no label', 'lat（百度纬度）': 'no label', });
lyr_CCB_5.set('fieldLabels', {'名称': 'header label - always visible', '行政区': 'header label - visible with data', 'lng（百度经度）': 'no label', 'lat（百度纬度）': 'no label', });
lyr_CCB_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});