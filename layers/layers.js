var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_union_1 = new ol.format.GeoJSON();
var features_union_1 = format_union_1.readFeatures(json_union_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_union_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_union_1.addFeatures(features_union_1);
var lyr_union_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_union_1, 
                style: style_union_1,
                popuplayertitle: 'union',
                interactive: true,
    title: 'union<br />\
    <img src="styles/legend/union_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/union_1_1.png" /> 2,4km (30 menit)<br />' });
var format_univ_surabaya_2 = new ol.format.GeoJSON();
var features_univ_surabaya_2 = format_univ_surabaya_2.readFeatures(json_univ_surabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_univ_surabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_2.addFeatures(features_univ_surabaya_2);
var lyr_univ_surabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_2, 
                style: style_univ_surabaya_2,
                popuplayertitle: 'univ_surabaya',
                interactive: true,
    title: 'univ_surabaya<br />\
    <img src="styles/legend/univ_surabaya_2_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/univ_surabaya_2_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/univ_surabaya_2_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/univ_surabaya_2_3.png" /> UNAIR A<br />\
    <img src="styles/legend/univ_surabaya_2_4.png" /> UNAIR B<br />\
    <img src="styles/legend/univ_surabaya_2_5.png" /> UNAIR C<br />\
    <img src="styles/legend/univ_surabaya_2_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/univ_surabaya_2_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/univ_surabaya_2_8.png" /> UPNV Jatim<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_union_1.setVisible(true);lyr_univ_surabaya_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_union_1,lyr_univ_surabaya_2];
lyr_union_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', });
lyr_union_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_univ_surabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', });
lyr_union_1.set('fieldLabels', {'fid': 'no label', 'Access': 'inline label - always visible', });
lyr_univ_surabaya_2.set('fieldLabels', {'fid': 'no label', 'Nama': 'inline label - always visible', 'Kampus': 'inline label - always visible', });
lyr_univ_surabaya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});