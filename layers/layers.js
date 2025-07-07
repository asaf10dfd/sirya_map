var wms_layers = [];

var lyr_syria_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "syria",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/syria_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3823685.902938, 3713082.702677, 4787556.829614, 4553566.728478]
                            })
                        });
var format_syr_admbnda_adm0_uncs_unochacopy_1 = new ol.format.GeoJSON();
var features_syr_admbnda_adm0_uncs_unochacopy_1 = format_syr_admbnda_adm0_uncs_unochacopy_1.readFeatures(json_syr_admbnda_adm0_uncs_unochacopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_syr_admbnda_adm0_uncs_unochacopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_syr_admbnda_adm0_uncs_unochacopy_1.addFeatures(features_syr_admbnda_adm0_uncs_unochacopy_1);
var lyr_syr_admbnda_adm0_uncs_unochacopy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_syr_admbnda_adm0_uncs_unochacopy_1, 
                style: style_syr_admbnda_adm0_uncs_unochacopy_1,
                popuplayertitle: "syr_admbnda_adm0_uncs_unocha copy",
                interactive: true,
                title: 'syr_admbnda_adm0_uncs_unocha copy'
            });
var format_Syria_CulturalSites_2013May22_HIU_USDoS_2 = new ol.format.GeoJSON();
var features_Syria_CulturalSites_2013May22_HIU_USDoS_2 = format_Syria_CulturalSites_2013May22_HIU_USDoS_2.readFeatures(json_Syria_CulturalSites_2013May22_HIU_USDoS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Syria_CulturalSites_2013May22_HIU_USDoS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Syria_CulturalSites_2013May22_HIU_USDoS_2.addFeatures(features_Syria_CulturalSites_2013May22_HIU_USDoS_2);
var lyr_Syria_CulturalSites_2013May22_HIU_USDoS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Syria_CulturalSites_2013May22_HIU_USDoS_2, 
                style: style_Syria_CulturalSites_2013May22_HIU_USDoS_2,
                popuplayertitle: "Syria_CulturalSites_2013May22_HIU_USDoS",
                interactive: true,
                title: '<img src="styles/legend/Syria_CulturalSites_2013May22_HIU_USDoS_2.png" /> Syria_CulturalSites_2013May22_HIU_USDoS'
            });
var format_syr_admbnda_adm0_uncs_unocha_3 = new ol.format.GeoJSON();
var features_syr_admbnda_adm0_uncs_unocha_3 = format_syr_admbnda_adm0_uncs_unocha_3.readFeatures(json_syr_admbnda_adm0_uncs_unocha_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_syr_admbnda_adm0_uncs_unocha_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_syr_admbnda_adm0_uncs_unocha_3.addFeatures(features_syr_admbnda_adm0_uncs_unocha_3);
var lyr_syr_admbnda_adm0_uncs_unocha_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_syr_admbnda_adm0_uncs_unocha_3, 
                style: style_syr_admbnda_adm0_uncs_unocha_3,
                popuplayertitle: "syr_admbnda_adm0_uncs_unocha",
                interactive: true,
                title: '<img src="styles/legend/syr_admbnda_adm0_uncs_unocha_3.png" /> syr_admbnda_adm0_uncs_unocha'
            });
var format_syr_admbnda_adm1_uncs_unocha_4 = new ol.format.GeoJSON();
var features_syr_admbnda_adm1_uncs_unocha_4 = format_syr_admbnda_adm1_uncs_unocha_4.readFeatures(json_syr_admbnda_adm1_uncs_unocha_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_syr_admbnda_adm1_uncs_unocha_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_syr_admbnda_adm1_uncs_unocha_4.addFeatures(features_syr_admbnda_adm1_uncs_unocha_4);
var lyr_syr_admbnda_adm1_uncs_unocha_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_syr_admbnda_adm1_uncs_unocha_4, 
                style: style_syr_admbnda_adm1_uncs_unocha_4,
                popuplayertitle: "syr_admbnda_adm1_uncs_unocha",
                interactive: true,
                title: '<img src="styles/legend/syr_admbnda_adm1_uncs_unocha_4.png" /> syr_admbnda_adm1_uncs_unocha'
            });

lyr_syria_0.setVisible(true);lyr_syr_admbnda_adm0_uncs_unochacopy_1.setVisible(true);lyr_Syria_CulturalSites_2013May22_HIU_USDoS_2.setVisible(true);lyr_syr_admbnda_adm0_uncs_unocha_3.setVisible(true);lyr_syr_admbnda_adm1_uncs_unocha_4.setVisible(true);
var layersList = [lyr_syria_0,lyr_syr_admbnda_adm0_uncs_unochacopy_1,lyr_Syria_CulturalSites_2013May22_HIU_USDoS_2,lyr_syr_admbnda_adm0_uncs_unocha_3,lyr_syr_admbnda_adm1_uncs_unocha_4];
lyr_syr_admbnda_adm0_uncs_unochacopy_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM0_EN': 'ADM0_EN', 'ADM0_AR': 'ADM0_AR', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM0_REF': 'ADM0_REF', 'ADM0ALT1EN': 'ADM0ALT1EN', 'ADM0ALT2EN': 'ADM0ALT2EN', 'ADM0ALT1AR': 'ADM0ALT1AR', 'ADM0ALT2AR': 'ADM0ALT2AR', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Syria_CulturalSites_2013May22_HIU_USDoS_2.set('fieldAliases', {'FACILITY_N': 'FACILITY_N', 'DMS_LAT': 'DMS_LAT', 'FAC_DES': 'FAC_DES', 'CLASS': 'CLASS', 'DMS_LONG': 'DMS_LONG', 'LENGTH_M': 'LENGTH_M', 'WIDTH_M': 'WIDTH_M', });
lyr_syr_admbnda_adm0_uncs_unocha_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM0_EN': 'ADM0_EN', 'ADM0_AR': 'ADM0_AR', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM0_REF': 'ADM0_REF', 'ADM0ALT1EN': 'ADM0ALT1EN', 'ADM0ALT2EN': 'ADM0ALT2EN', 'ADM0ALT1AR': 'ADM0ALT1AR', 'ADM0ALT2AR': 'ADM0ALT2AR', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_syr_admbnda_adm1_uncs_unocha_4.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_AR': 'ADM1_AR', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1AR': 'ADM1ALT1AR', 'ADM1ALT2AR': 'ADM1ALT2AR', 'ADM0_EN': 'ADM0_EN', 'ADM0_AR': 'ADM0_AR', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_syr_admbnda_adm0_uncs_unochacopy_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_AR': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'ADM0_REF': 'TextEdit', 'ADM0ALT1EN': 'TextEdit', 'ADM0ALT2EN': 'TextEdit', 'ADM0ALT1AR': 'TextEdit', 'ADM0ALT2AR': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_Syria_CulturalSites_2013May22_HIU_USDoS_2.set('fieldImages', {'FACILITY_N': 'TextEdit', 'DMS_LAT': 'TextEdit', 'FAC_DES': 'TextEdit', 'CLASS': 'TextEdit', 'DMS_LONG': 'TextEdit', 'LENGTH_M': 'TextEdit', 'WIDTH_M': 'TextEdit', });
lyr_syr_admbnda_adm0_uncs_unocha_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_AR': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'ADM0_REF': 'TextEdit', 'ADM0ALT1EN': 'TextEdit', 'ADM0ALT2EN': 'TextEdit', 'ADM0ALT1AR': 'TextEdit', 'ADM0ALT2AR': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_syr_admbnda_adm1_uncs_unocha_4.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_AR': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1AR': 'TextEdit', 'ADM1ALT2AR': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_AR': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_syr_admbnda_adm0_uncs_unochacopy_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM0_EN': 'no label', 'ADM0_AR': 'no label', 'ADM0_PCODE': 'no label', 'ADM0_REF': 'no label', 'ADM0ALT1EN': 'no label', 'ADM0ALT2EN': 'no label', 'ADM0ALT1AR': 'no label', 'ADM0ALT2AR': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Syria_CulturalSites_2013May22_HIU_USDoS_2.set('fieldLabels', {'FACILITY_N': 'no label', 'DMS_LAT': 'no label', 'FAC_DES': 'no label', 'CLASS': 'no label', 'DMS_LONG': 'no label', 'LENGTH_M': 'no label', 'WIDTH_M': 'no label', });
lyr_syr_admbnda_adm0_uncs_unocha_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM0_EN': 'no label', 'ADM0_AR': 'no label', 'ADM0_PCODE': 'no label', 'ADM0_REF': 'no label', 'ADM0ALT1EN': 'no label', 'ADM0ALT2EN': 'no label', 'ADM0ALT1AR': 'no label', 'ADM0ALT2AR': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_syr_admbnda_adm1_uncs_unocha_4.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_AR': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1AR': 'no label', 'ADM1ALT2AR': 'no label', 'ADM0_EN': 'no label', 'ADM0_AR': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_syr_admbnda_adm1_uncs_unocha_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});