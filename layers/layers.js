ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-17.101528, -12.383057, 59.847080, 37.383675]);
var wms_layers = [];

var format_Arabic_Countries_0 = new ol.format.GeoJSON();
var features_Arabic_Countries_0 = format_Arabic_Countries_0.readFeatures(json_Arabic_Countries_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Arabic_Countries_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arabic_Countries_0.addFeatures(features_Arabic_Countries_0);
var lyr_Arabic_Countries_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arabic_Countries_0, 
                style: style_Arabic_Countries_0,
                interactive: false,
                title: '<img src="styles/legend/Arabic_Countries_0.png" /> Arabic_Countries'
            });

lyr_Arabic_Countries_0.setVisible(true);
var layersList = [lyr_Arabic_Countries_0];
lyr_Arabic_Countries_0.set('fieldAliases', {'FIPS_CNTRY': 'FIPS_CNTRY', 'GMI_CNTRY': 'GMI_CNTRY', 'CNTRY_NAME': 'CNTRY_NAME', 'SOVEREIGN': 'SOVEREIGN', 'POP_CNTRY': 'POP_CNTRY', 'SQKM_CNTRY': 'SQKM_CNTRY', 'SQMI_CNTRY': 'SQMI_CNTRY', 'CURR_TYPE': 'CURR_TYPE', 'CURR_CODE': 'CURR_CODE', 'LANDLOCKED': 'LANDLOCKED', 'COLOR_MAP': 'COLOR_MAP', 'Mame_AR': 'Mame_AR', });
lyr_Arabic_Countries_0.set('fieldImages', {'FIPS_CNTRY': 'TextEdit', 'GMI_CNTRY': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'SOVEREIGN': 'TextEdit', 'POP_CNTRY': 'TextEdit', 'SQKM_CNTRY': 'TextEdit', 'SQMI_CNTRY': 'TextEdit', 'CURR_TYPE': 'TextEdit', 'CURR_CODE': 'TextEdit', 'LANDLOCKED': 'TextEdit', 'COLOR_MAP': 'TextEdit', 'Mame_AR': 'TextEdit', });
lyr_Arabic_Countries_0.set('fieldLabels', {'FIPS_CNTRY': 'inline label', 'GMI_CNTRY': 'inline label', 'CNTRY_NAME': 'header label', 'SOVEREIGN': 'header label', 'POP_CNTRY': 'inline label', 'SQKM_CNTRY': 'inline label', 'SQMI_CNTRY': 'inline label', 'CURR_TYPE': 'inline label', 'CURR_CODE': 'inline label', 'LANDLOCKED': 'inline label', 'COLOR_MAP': 'inline label', 'Mame_AR': 'inline label', });
lyr_Arabic_Countries_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});