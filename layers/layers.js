var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_RRZEOpenStreetMapStandardHD_1 = new ol.layer.Tile({
            'title': 'RRZE OpenStreetMap Standard HD',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://a.osm.rrze.fau.de/osmhd/{z}/{x}/{y}.png'
            })
        });
var format_DensidadeDemogrfica_2 = new ol.format.GeoJSON();
var features_DensidadeDemogrfica_2 = format_DensidadeDemogrfica_2.readFeatures(json_DensidadeDemogrfica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidadeDemogrfica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadeDemogrfica_2.addFeatures(features_DensidadeDemogrfica_2);
var lyr_DensidadeDemogrfica_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DensidadeDemogrfica_2, 
                style: style_DensidadeDemogrfica_2,
                popuplayertitle: 'Densidade Demográfica',
                interactive: true,
    title: 'Densidade Demográfica<br />\
    <img src="styles/legend/DensidadeDemogrfica_2_0.png" /> 5 - 1666<br />\
    <img src="styles/legend/DensidadeDemogrfica_2_1.png" /> 1666 - 4022<br />\
    <img src="styles/legend/DensidadeDemogrfica_2_2.png" /> 4022 - 6385<br />\
    <img src="styles/legend/DensidadeDemogrfica_2_3.png" /> 6385 - 9941<br />\
    <img src="styles/legend/DensidadeDemogrfica_2_4.png" /> 9941 - 49417<br />' });
var format_PermetroUrbano_3 = new ol.format.GeoJSON();
var features_PermetroUrbano_3 = format_PermetroUrbano_3.readFeatures(json_PermetroUrbano_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermetroUrbano_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermetroUrbano_3.addFeatures(features_PermetroUrbano_3);
var lyr_PermetroUrbano_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermetroUrbano_3, 
                style: style_PermetroUrbano_3,
                popuplayertitle: 'Perímetro Urbano',
                interactive: true,
                title: '<img src="styles/legend/PermetroUrbano_3.png" /> Perímetro Urbano'
            });
var format_DistritosRurais_4 = new ol.format.GeoJSON();
var features_DistritosRurais_4 = format_DistritosRurais_4.readFeatures(json_DistritosRurais_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosRurais_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosRurais_4.addFeatures(features_DistritosRurais_4);
var lyr_DistritosRurais_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosRurais_4, 
                style: style_DistritosRurais_4,
                popuplayertitle: 'Distritos Rurais',
                interactive: true,
                title: '<img src="styles/legend/DistritosRurais_4.png" /> Distritos Rurais'
            });
var format_Bairros_5 = new ol.format.GeoJSON();
var features_Bairros_5 = format_Bairros_5.readFeatures(json_Bairros_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bairros_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairros_5.addFeatures(features_Bairros_5);
var lyr_Bairros_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bairros_5, 
                style: style_Bairros_5,
                popuplayertitle: 'Bairros',
                interactive: true,
                title: '<img src="styles/legend/Bairros_5.png" /> Bairros'
            });
var format_PGVs_6 = new ol.format.GeoJSON();
var features_PGVs_6 = format_PGVs_6.readFeatures(json_PGVs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PGVs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PGVs_6.addFeatures(features_PGVs_6);
var lyr_PGVs_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PGVs_6, 
                style: style_PGVs_6,
                popuplayertitle: 'PGVs',
                interactive: true,
                title: '<img src="styles/legend/PGVs_6.png" /> PGVs'
            });
var format_HierarquiaViria_7 = new ol.format.GeoJSON();
var features_HierarquiaViria_7 = format_HierarquiaViria_7.readFeatures(json_HierarquiaViria_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HierarquiaViria_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HierarquiaViria_7.addFeatures(features_HierarquiaViria_7);
var lyr_HierarquiaViria_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HierarquiaViria_7, 
                style: style_HierarquiaViria_7,
                popuplayertitle: 'Hierarquia Viária',
                interactive: true,
    title: 'Hierarquia Viária<br />\
    <img src="styles/legend/HierarquiaViria_7_0.png" /> Perimetral<br />\
    <img src="styles/legend/HierarquiaViria_7_1.png" /> Perimetral - a executar<br />\
    <img src="styles/legend/HierarquiaViria_7_2.png" /> Estrutural I<br />\
    <img src="styles/legend/HierarquiaViria_7_3.png" /> Estrutural I - a executar<br />\
    <img src="styles/legend/HierarquiaViria_7_4.png" /> Estrutural II<br />\
    <img src="styles/legend/HierarquiaViria_7_5.png" /> Estrutural II - a executar<br />\
    <img src="styles/legend/HierarquiaViria_7_6.png" /> Coletora<br />\
    <img src="styles/legend/HierarquiaViria_7_7.png" /> Coletora - a executar<br />\
    <img src="styles/legend/HierarquiaViria_7_8.png" /> Subcoletora<br />\
    <img src="styles/legend/HierarquiaViria_7_9.png" /> Subcoletora - a executar<br />\
    <img src="styles/legend/HierarquiaViria_7_10.png" /> Local<br />\
    <img src="styles/legend/HierarquiaViria_7_11.png" /> <br />' });
var format_Linha14Variao08Frequncia01viagem_8 = new ol.format.GeoJSON();
var features_Linha14Variao08Frequncia01viagem_8 = format_Linha14Variao08Frequncia01viagem_8.readFeatures(json_Linha14Variao08Frequncia01viagem_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha14Variao08Frequncia01viagem_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha14Variao08Frequncia01viagem_8.addFeatures(features_Linha14Variao08Frequncia01viagem_8);
var lyr_Linha14Variao08Frequncia01viagem_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha14Variao08Frequncia01viagem_8, 
                style: style_Linha14Variao08Frequncia01viagem_8,
                popuplayertitle: 'Linha 14 - Variação 08 - Frequência 01 viagem',
                interactive: true,
                title: '<img src="styles/legend/Linha14Variao08Frequncia01viagem_8.png" /> Linha 14 - Variação 08 - Frequência 01 viagem'
            });
var format_Linha14Variao07Frequncia01viagem_9 = new ol.format.GeoJSON();
var features_Linha14Variao07Frequncia01viagem_9 = format_Linha14Variao07Frequncia01viagem_9.readFeatures(json_Linha14Variao07Frequncia01viagem_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha14Variao07Frequncia01viagem_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha14Variao07Frequncia01viagem_9.addFeatures(features_Linha14Variao07Frequncia01viagem_9);
var lyr_Linha14Variao07Frequncia01viagem_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha14Variao07Frequncia01viagem_9, 
                style: style_Linha14Variao07Frequncia01viagem_9,
                popuplayertitle: 'Linha 14 - Variação 07 - Frequência 01 viagem',
                interactive: true,
                title: '<img src="styles/legend/Linha14Variao07Frequncia01viagem_9.png" /> Linha 14 - Variação 07 - Frequência 01 viagem'
            });
var format_Linha14Variao06Frequncia01viagem_10 = new ol.format.GeoJSON();
var features_Linha14Variao06Frequncia01viagem_10 = format_Linha14Variao06Frequncia01viagem_10.readFeatures(json_Linha14Variao06Frequncia01viagem_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha14Variao06Frequncia01viagem_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha14Variao06Frequncia01viagem_10.addFeatures(features_Linha14Variao06Frequncia01viagem_10);
var lyr_Linha14Variao06Frequncia01viagem_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha14Variao06Frequncia01viagem_10, 
                style: style_Linha14Variao06Frequncia01viagem_10,
                popuplayertitle: 'Linha 14 - Variação 06 - Frequência 01 viagem',
                interactive: true,
                title: '<img src="styles/legend/Linha14Variao06Frequncia01viagem_10.png" /> Linha 14 - Variação 06 - Frequência 01 viagem'
            });
var format_Linha14Variao05Frequncia01viagem_11 = new ol.format.GeoJSON();
var features_Linha14Variao05Frequncia01viagem_11 = format_Linha14Variao05Frequncia01viagem_11.readFeatures(json_Linha14Variao05Frequncia01viagem_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha14Variao05Frequncia01viagem_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha14Variao05Frequncia01viagem_11.addFeatures(features_Linha14Variao05Frequncia01viagem_11);
var lyr_Linha14Variao05Frequncia01viagem_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha14Variao05Frequncia01viagem_11, 
                style: style_Linha14Variao05Frequncia01viagem_11,
                popuplayertitle: 'Linha 14 - Variação 05 - Frequência 01 viagem',
                interactive: true,
                title: '<img src="styles/legend/Linha14Variao05Frequncia01viagem_11.png" /> Linha 14 - Variação 05 - Frequência 01 viagem'
            });
var format_Linha14Variao04Frequncia01viagem_12 = new ol.format.GeoJSON();
var features_Linha14Variao04Frequncia01viagem_12 = format_Linha14Variao04Frequncia01viagem_12.readFeatures(json_Linha14Variao04Frequncia01viagem_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha14Variao04Frequncia01viagem_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha14Variao04Frequncia01viagem_12.addFeatures(features_Linha14Variao04Frequncia01viagem_12);
var lyr_Linha14Variao04Frequncia01viagem_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha14Variao04Frequncia01viagem_12, 
                style: style_Linha14Variao04Frequncia01viagem_12,
                popuplayertitle: 'Linha 14 - Variação 04 - Frequência 01 viagem',
                interactive: true,
                title: '<img src="styles/legend/Linha14Variao04Frequncia01viagem_12.png" /> Linha 14 - Variação 04 - Frequência 01 viagem'
            });
var format_Linha14Variao03Frequncia01viagem_13 = new ol.format.GeoJSON();
var features_Linha14Variao03Frequncia01viagem_13 = format_Linha14Variao03Frequncia01viagem_13.readFeatures(json_Linha14Variao03Frequncia01viagem_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha14Variao03Frequncia01viagem_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha14Variao03Frequncia01viagem_13.addFeatures(features_Linha14Variao03Frequncia01viagem_13);
var lyr_Linha14Variao03Frequncia01viagem_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha14Variao03Frequncia01viagem_13, 
                style: style_Linha14Variao03Frequncia01viagem_13,
                popuplayertitle: 'Linha 14 - Variação 03 - Frequência 01 viagem',
                interactive: true,
                title: '<img src="styles/legend/Linha14Variao03Frequncia01viagem_13.png" /> Linha 14 - Variação 03 - Frequência 01 viagem'
            });
var format_Linha14Variao02Frequncia01viagem_14 = new ol.format.GeoJSON();
var features_Linha14Variao02Frequncia01viagem_14 = format_Linha14Variao02Frequncia01viagem_14.readFeatures(json_Linha14Variao02Frequncia01viagem_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha14Variao02Frequncia01viagem_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha14Variao02Frequncia01viagem_14.addFeatures(features_Linha14Variao02Frequncia01viagem_14);
var lyr_Linha14Variao02Frequncia01viagem_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha14Variao02Frequncia01viagem_14, 
                style: style_Linha14Variao02Frequncia01viagem_14,
                popuplayertitle: 'Linha 14 - Variação 02 - Frequência 01 viagem',
                interactive: true,
                title: '<img src="styles/legend/Linha14Variao02Frequncia01viagem_14.png" /> Linha 14 - Variação 02 - Frequência 01 viagem'
            });
var format_Linha14Variao01Frequncia01viagem_15 = new ol.format.GeoJSON();
var features_Linha14Variao01Frequncia01viagem_15 = format_Linha14Variao01Frequncia01viagem_15.readFeatures(json_Linha14Variao01Frequncia01viagem_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha14Variao01Frequncia01viagem_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha14Variao01Frequncia01viagem_15.addFeatures(features_Linha14Variao01Frequncia01viagem_15);
var lyr_Linha14Variao01Frequncia01viagem_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha14Variao01Frequncia01viagem_15, 
                style: style_Linha14Variao01Frequncia01viagem_15,
                popuplayertitle: 'Linha 14 - Variação 01 - Frequência 01 viagem',
                interactive: true,
                title: '<img src="styles/legend/Linha14Variao01Frequncia01viagem_15.png" /> Linha 14 - Variação 01 - Frequência 01 viagem'
            });
var format_Linha12Variao01Frequncia12viagens_16 = new ol.format.GeoJSON();
var features_Linha12Variao01Frequncia12viagens_16 = format_Linha12Variao01Frequncia12viagens_16.readFeatures(json_Linha12Variao01Frequncia12viagens_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha12Variao01Frequncia12viagens_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha12Variao01Frequncia12viagens_16.addFeatures(features_Linha12Variao01Frequncia12viagens_16);
var lyr_Linha12Variao01Frequncia12viagens_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha12Variao01Frequncia12viagens_16, 
                style: style_Linha12Variao01Frequncia12viagens_16,
                popuplayertitle: 'Linha 12 - Variação 01 - Frequência 12 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha12Variao01Frequncia12viagens_16.png" /> Linha 12 - Variação 01 - Frequência 12 viagens'
            });
var format_Linha12Variao02Frequncia02viagens_17 = new ol.format.GeoJSON();
var features_Linha12Variao02Frequncia02viagens_17 = format_Linha12Variao02Frequncia02viagens_17.readFeatures(json_Linha12Variao02Frequncia02viagens_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha12Variao02Frequncia02viagens_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha12Variao02Frequncia02viagens_17.addFeatures(features_Linha12Variao02Frequncia02viagens_17);
var lyr_Linha12Variao02Frequncia02viagens_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha12Variao02Frequncia02viagens_17, 
                style: style_Linha12Variao02Frequncia02viagens_17,
                popuplayertitle: 'Linha 12 - Variação 02 - Frequência 02 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha12Variao02Frequncia02viagens_17.png" /> Linha 12 - Variação 02 - Frequência 02 viagens'
            });
var format_Linha11Variao05Frequncia11viagens_18 = new ol.format.GeoJSON();
var features_Linha11Variao05Frequncia11viagens_18 = format_Linha11Variao05Frequncia11viagens_18.readFeatures(json_Linha11Variao05Frequncia11viagens_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha11Variao05Frequncia11viagens_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha11Variao05Frequncia11viagens_18.addFeatures(features_Linha11Variao05Frequncia11viagens_18);
var lyr_Linha11Variao05Frequncia11viagens_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha11Variao05Frequncia11viagens_18, 
                style: style_Linha11Variao05Frequncia11viagens_18,
                popuplayertitle: 'Linha 11 - Variação 05 - Frequência 11 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha11Variao05Frequncia11viagens_18.png" /> Linha 11 - Variação 05 - Frequência 11 viagens'
            });
var format_Linha11Variao01Frequncia06viagens_19 = new ol.format.GeoJSON();
var features_Linha11Variao01Frequncia06viagens_19 = format_Linha11Variao01Frequncia06viagens_19.readFeatures(json_Linha11Variao01Frequncia06viagens_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha11Variao01Frequncia06viagens_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha11Variao01Frequncia06viagens_19.addFeatures(features_Linha11Variao01Frequncia06viagens_19);
var lyr_Linha11Variao01Frequncia06viagens_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha11Variao01Frequncia06viagens_19, 
                style: style_Linha11Variao01Frequncia06viagens_19,
                popuplayertitle: 'Linha 11 - Variação 01 - Frequência 06 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha11Variao01Frequncia06viagens_19.png" /> Linha 11 - Variação 01 - Frequência 06 viagens'
            });
var format_Linha11Variao03Frequncia05viagens_20 = new ol.format.GeoJSON();
var features_Linha11Variao03Frequncia05viagens_20 = format_Linha11Variao03Frequncia05viagens_20.readFeatures(json_Linha11Variao03Frequncia05viagens_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha11Variao03Frequncia05viagens_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha11Variao03Frequncia05viagens_20.addFeatures(features_Linha11Variao03Frequncia05viagens_20);
var lyr_Linha11Variao03Frequncia05viagens_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha11Variao03Frequncia05viagens_20, 
                style: style_Linha11Variao03Frequncia05viagens_20,
                popuplayertitle: 'Linha 11 - Variação 03 - Frequência 05 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha11Variao03Frequncia05viagens_20.png" /> Linha 11 - Variação 03 - Frequência 05 viagens'
            });
var format_Linha11Variao02Frequncia01viagem_21 = new ol.format.GeoJSON();
var features_Linha11Variao02Frequncia01viagem_21 = format_Linha11Variao02Frequncia01viagem_21.readFeatures(json_Linha11Variao02Frequncia01viagem_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha11Variao02Frequncia01viagem_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha11Variao02Frequncia01viagem_21.addFeatures(features_Linha11Variao02Frequncia01viagem_21);
var lyr_Linha11Variao02Frequncia01viagem_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha11Variao02Frequncia01viagem_21, 
                style: style_Linha11Variao02Frequncia01viagem_21,
                popuplayertitle: 'Linha 11 - Variação 02 - Frequência 01 viagem',
                interactive: true,
                title: '<img src="styles/legend/Linha11Variao02Frequncia01viagem_21.png" /> Linha 11 - Variação 02 - Frequência 01 viagem'
            });
var format_Linha11Variao04Frequncia00viagens_22 = new ol.format.GeoJSON();
var features_Linha11Variao04Frequncia00viagens_22 = format_Linha11Variao04Frequncia00viagens_22.readFeatures(json_Linha11Variao04Frequncia00viagens_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha11Variao04Frequncia00viagens_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha11Variao04Frequncia00viagens_22.addFeatures(features_Linha11Variao04Frequncia00viagens_22);
var lyr_Linha11Variao04Frequncia00viagens_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha11Variao04Frequncia00viagens_22, 
                style: style_Linha11Variao04Frequncia00viagens_22,
                popuplayertitle: 'Linha 11 - Variação 04 - Frequência 00 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha11Variao04Frequncia00viagens_22.png" /> Linha 11 - Variação 04 - Frequência 00 viagens'
            });
var format_Linha10Variao01Frequncia15viagens_23 = new ol.format.GeoJSON();
var features_Linha10Variao01Frequncia15viagens_23 = format_Linha10Variao01Frequncia15viagens_23.readFeatures(json_Linha10Variao01Frequncia15viagens_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha10Variao01Frequncia15viagens_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha10Variao01Frequncia15viagens_23.addFeatures(features_Linha10Variao01Frequncia15viagens_23);
var lyr_Linha10Variao01Frequncia15viagens_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha10Variao01Frequncia15viagens_23, 
                style: style_Linha10Variao01Frequncia15viagens_23,
                popuplayertitle: 'Linha 10 - Variação 01 - Frequência 15 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha10Variao01Frequncia15viagens_23.png" /> Linha 10 - Variação 01 - Frequência 15 viagens'
            });
var format_Linha10Variao02Frequncia03viagens_24 = new ol.format.GeoJSON();
var features_Linha10Variao02Frequncia03viagens_24 = format_Linha10Variao02Frequncia03viagens_24.readFeatures(json_Linha10Variao02Frequncia03viagens_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha10Variao02Frequncia03viagens_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha10Variao02Frequncia03viagens_24.addFeatures(features_Linha10Variao02Frequncia03viagens_24);
var lyr_Linha10Variao02Frequncia03viagens_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha10Variao02Frequncia03viagens_24, 
                style: style_Linha10Variao02Frequncia03viagens_24,
                popuplayertitle: 'Linha 10 - Variação 02 - Frequência 03 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha10Variao02Frequncia03viagens_24.png" /> Linha 10 - Variação 02 - Frequência 03 viagens'
            });
var format_Linha10Variao04Frequncia01viagem_25 = new ol.format.GeoJSON();
var features_Linha10Variao04Frequncia01viagem_25 = format_Linha10Variao04Frequncia01viagem_25.readFeatures(json_Linha10Variao04Frequncia01viagem_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha10Variao04Frequncia01viagem_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha10Variao04Frequncia01viagem_25.addFeatures(features_Linha10Variao04Frequncia01viagem_25);
var lyr_Linha10Variao04Frequncia01viagem_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha10Variao04Frequncia01viagem_25, 
                style: style_Linha10Variao04Frequncia01viagem_25,
                popuplayertitle: 'Linha 10 - Variação 04 - Frequência 01 viagem',
                interactive: true,
                title: '<img src="styles/legend/Linha10Variao04Frequncia01viagem_25.png" /> Linha 10 - Variação 04 - Frequência 01 viagem'
            });
var format_Linha10Variao03Frequncia01viagem_26 = new ol.format.GeoJSON();
var features_Linha10Variao03Frequncia01viagem_26 = format_Linha10Variao03Frequncia01viagem_26.readFeatures(json_Linha10Variao03Frequncia01viagem_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha10Variao03Frequncia01viagem_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha10Variao03Frequncia01viagem_26.addFeatures(features_Linha10Variao03Frequncia01viagem_26);
var lyr_Linha10Variao03Frequncia01viagem_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha10Variao03Frequncia01viagem_26, 
                style: style_Linha10Variao03Frequncia01viagem_26,
                popuplayertitle: 'Linha 10 - Variação 03 - Frequência 01 viagem',
                interactive: true,
                title: '<img src="styles/legend/Linha10Variao03Frequncia01viagem_26.png" /> Linha 10 - Variação 03 - Frequência 01 viagem'
            });
var format_Linha09Variao01Frequncia18viagens_27 = new ol.format.GeoJSON();
var features_Linha09Variao01Frequncia18viagens_27 = format_Linha09Variao01Frequncia18viagens_27.readFeatures(json_Linha09Variao01Frequncia18viagens_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha09Variao01Frequncia18viagens_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha09Variao01Frequncia18viagens_27.addFeatures(features_Linha09Variao01Frequncia18viagens_27);
var lyr_Linha09Variao01Frequncia18viagens_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha09Variao01Frequncia18viagens_27, 
                style: style_Linha09Variao01Frequncia18viagens_27,
                popuplayertitle: 'Linha 09 - Variação 01 - Frequência 18 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha09Variao01Frequncia18viagens_27.png" /> Linha 09 - Variação 01 - Frequência 18 viagens'
            });
var format_Linha09Variao02Frequncia01viagem_28 = new ol.format.GeoJSON();
var features_Linha09Variao02Frequncia01viagem_28 = format_Linha09Variao02Frequncia01viagem_28.readFeatures(json_Linha09Variao02Frequncia01viagem_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha09Variao02Frequncia01viagem_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha09Variao02Frequncia01viagem_28.addFeatures(features_Linha09Variao02Frequncia01viagem_28);
var lyr_Linha09Variao02Frequncia01viagem_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha09Variao02Frequncia01viagem_28, 
                style: style_Linha09Variao02Frequncia01viagem_28,
                popuplayertitle: 'Linha 09 - Variação 02 - Frequência 01 viagem',
                interactive: true,
                title: '<img src="styles/legend/Linha09Variao02Frequncia01viagem_28.png" /> Linha 09 - Variação 02 - Frequência 01 viagem'
            });
var format_Linha04Variao02Frequncia17viagens_29 = new ol.format.GeoJSON();
var features_Linha04Variao02Frequncia17viagens_29 = format_Linha04Variao02Frequncia17viagens_29.readFeatures(json_Linha04Variao02Frequncia17viagens_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha04Variao02Frequncia17viagens_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha04Variao02Frequncia17viagens_29.addFeatures(features_Linha04Variao02Frequncia17viagens_29);
var lyr_Linha04Variao02Frequncia17viagens_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha04Variao02Frequncia17viagens_29, 
                style: style_Linha04Variao02Frequncia17viagens_29,
                popuplayertitle: 'Linha 04 - Variação 02 - Frequência 17 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha04Variao02Frequncia17viagens_29.png" /> Linha 04 - Variação 02 - Frequência 17 viagens'
            });
var format_Linha04Variao01Frequncia00viagens_30 = new ol.format.GeoJSON();
var features_Linha04Variao01Frequncia00viagens_30 = format_Linha04Variao01Frequncia00viagens_30.readFeatures(json_Linha04Variao01Frequncia00viagens_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha04Variao01Frequncia00viagens_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha04Variao01Frequncia00viagens_30.addFeatures(features_Linha04Variao01Frequncia00viagens_30);
var lyr_Linha04Variao01Frequncia00viagens_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha04Variao01Frequncia00viagens_30, 
                style: style_Linha04Variao01Frequncia00viagens_30,
                popuplayertitle: 'Linha 04 - Variação 01 - Frequência 00 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha04Variao01Frequncia00viagens_30.png" /> Linha 04 - Variação 01 - Frequência 00 viagens'
            });
var format_Linha02Variao01Frequncia05viagens_31 = new ol.format.GeoJSON();
var features_Linha02Variao01Frequncia05viagens_31 = format_Linha02Variao01Frequncia05viagens_31.readFeatures(json_Linha02Variao01Frequncia05viagens_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha02Variao01Frequncia05viagens_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha02Variao01Frequncia05viagens_31.addFeatures(features_Linha02Variao01Frequncia05viagens_31);
var lyr_Linha02Variao01Frequncia05viagens_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha02Variao01Frequncia05viagens_31, 
                style: style_Linha02Variao01Frequncia05viagens_31,
                popuplayertitle: 'Linha 02 - Variação 01 - Frequência 05 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha02Variao01Frequncia05viagens_31.png" /> Linha 02 - Variação 01 - Frequência 05 viagens'
            });
var format_Linha02Variao02Frequncia02viagens_32 = new ol.format.GeoJSON();
var features_Linha02Variao02Frequncia02viagens_32 = format_Linha02Variao02Frequncia02viagens_32.readFeatures(json_Linha02Variao02Frequncia02viagens_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha02Variao02Frequncia02viagens_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha02Variao02Frequncia02viagens_32.addFeatures(features_Linha02Variao02Frequncia02viagens_32);
var lyr_Linha02Variao02Frequncia02viagens_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha02Variao02Frequncia02viagens_32, 
                style: style_Linha02Variao02Frequncia02viagens_32,
                popuplayertitle: 'Linha 02 - Variação 02 - Frequência 02 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha02Variao02Frequncia02viagens_32.png" /> Linha 02 - Variação 02 - Frequência 02 viagens'
            });
var format_Linha01Variao01Frequncia13viagens_33 = new ol.format.GeoJSON();
var features_Linha01Variao01Frequncia13viagens_33 = format_Linha01Variao01Frequncia13viagens_33.readFeatures(json_Linha01Variao01Frequncia13viagens_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha01Variao01Frequncia13viagens_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha01Variao01Frequncia13viagens_33.addFeatures(features_Linha01Variao01Frequncia13viagens_33);
var lyr_Linha01Variao01Frequncia13viagens_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha01Variao01Frequncia13viagens_33, 
                style: style_Linha01Variao01Frequncia13viagens_33,
                popuplayertitle: 'Linha 01 - Variação 01 - Frequência 13 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha01Variao01Frequncia13viagens_33.png" /> Linha 01 - Variação 01 - Frequência 13 viagens'
            });
var format_Linha01Variao02Frequncia03viagens_34 = new ol.format.GeoJSON();
var features_Linha01Variao02Frequncia03viagens_34 = format_Linha01Variao02Frequncia03viagens_34.readFeatures(json_Linha01Variao02Frequncia03viagens_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha01Variao02Frequncia03viagens_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha01Variao02Frequncia03viagens_34.addFeatures(features_Linha01Variao02Frequncia03viagens_34);
var lyr_Linha01Variao02Frequncia03viagens_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha01Variao02Frequncia03viagens_34, 
                style: style_Linha01Variao02Frequncia03viagens_34,
                popuplayertitle: 'Linha 01 - Variação 02 - Frequência 03 viagens',
                interactive: true,
                title: '<img src="styles/legend/Linha01Variao02Frequncia03viagens_34.png" /> Linha 01 - Variação 02 - Frequência 03 viagens'
            });
var format_Linha01Variao03Frequncia01viagem_35 = new ol.format.GeoJSON();
var features_Linha01Variao03Frequncia01viagem_35 = format_Linha01Variao03Frequncia01viagem_35.readFeatures(json_Linha01Variao03Frequncia01viagem_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linha01Variao03Frequncia01viagem_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha01Variao03Frequncia01viagem_35.addFeatures(features_Linha01Variao03Frequncia01viagem_35);
var lyr_Linha01Variao03Frequncia01viagem_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha01Variao03Frequncia01viagem_35, 
                style: style_Linha01Variao03Frequncia01viagem_35,
                popuplayertitle: 'Linha 01 - Variação 03 - Frequência 01 viagem',
                interactive: true,
                title: '<img src="styles/legend/Linha01Variao03Frequncia01viagem_35.png" /> Linha 01 - Variação 03 - Frequência 01 viagem'
            });
var format_SistemaProposto_36 = new ol.format.GeoJSON();
var features_SistemaProposto_36 = format_SistemaProposto_36.readFeatures(json_SistemaProposto_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistemaProposto_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaProposto_36.addFeatures(features_SistemaProposto_36);
var lyr_SistemaProposto_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaProposto_36, 
                style: style_SistemaProposto_36,
                popuplayertitle: 'Sistema Proposto',
                interactive: true,
                title: '<img src="styles/legend/SistemaProposto_36.png" /> Sistema Proposto'
            });
var format_LinhaCircularNorteAH_37 = new ol.format.GeoJSON();
var features_LinhaCircularNorteAH_37 = format_LinhaCircularNorteAH_37.readFeatures(json_LinhaCircularNorteAH_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaCircularNorteAH_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaCircularNorteAH_37.addFeatures(features_LinhaCircularNorteAH_37);
var lyr_LinhaCircularNorteAH_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaCircularNorteAH_37, 
                style: style_LinhaCircularNorteAH_37,
                popuplayertitle: 'Linha Circular-Norte AH',
                interactive: true,
                title: '<img src="styles/legend/LinhaCircularNorteAH_37.png" /> Linha Circular-Norte AH'
            });
var format_LinhaCircularNorteH_38 = new ol.format.GeoJSON();
var features_LinhaCircularNorteH_38 = format_LinhaCircularNorteH_38.readFeatures(json_LinhaCircularNorteH_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaCircularNorteH_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaCircularNorteH_38.addFeatures(features_LinhaCircularNorteH_38);
var lyr_LinhaCircularNorteH_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaCircularNorteH_38, 
                style: style_LinhaCircularNorteH_38,
                popuplayertitle: 'Linha Circular-Norte H',
                interactive: true,
                title: '<img src="styles/legend/LinhaCircularNorteH_38.png" /> Linha Circular-Norte H'
            });
var format_LinhaCircularUniversitriaAH_39 = new ol.format.GeoJSON();
var features_LinhaCircularUniversitriaAH_39 = format_LinhaCircularUniversitriaAH_39.readFeatures(json_LinhaCircularUniversitriaAH_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaCircularUniversitriaAH_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaCircularUniversitriaAH_39.addFeatures(features_LinhaCircularUniversitriaAH_39);
var lyr_LinhaCircularUniversitriaAH_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaCircularUniversitriaAH_39, 
                style: style_LinhaCircularUniversitriaAH_39,
                popuplayertitle: 'Linha Circular-Universitária AH',
                interactive: true,
                title: '<img src="styles/legend/LinhaCircularUniversitriaAH_39.png" /> Linha Circular-Universitária AH'
            });
var format_LinhaCircularUniversitriaH_40 = new ol.format.GeoJSON();
var features_LinhaCircularUniversitriaH_40 = format_LinhaCircularUniversitriaH_40.readFeatures(json_LinhaCircularUniversitriaH_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaCircularUniversitriaH_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaCircularUniversitriaH_40.addFeatures(features_LinhaCircularUniversitriaH_40);
var lyr_LinhaCircularUniversitriaH_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaCircularUniversitriaH_40, 
                style: style_LinhaCircularUniversitriaH_40,
                popuplayertitle: 'Linha Circular-Universitária H',
                interactive: true,
                title: '<img src="styles/legend/LinhaCircularUniversitriaH_40.png" /> Linha Circular-Universitária H'
            });
var format_LinhaCristoRei_41 = new ol.format.GeoJSON();
var features_LinhaCristoRei_41 = format_LinhaCristoRei_41.readFeatures(json_LinhaCristoRei_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaCristoRei_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaCristoRei_41.addFeatures(features_LinhaCristoRei_41);
var lyr_LinhaCristoRei_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaCristoRei_41, 
                style: style_LinhaCristoRei_41,
                popuplayertitle: 'Linha Cristo-Rei',
                interactive: true,
                title: '<img src="styles/legend/LinhaCristoRei_41.png" /> Linha Cristo-Rei'
            });
var format_LinhaHospitaisRodoviaria_42 = new ol.format.GeoJSON();
var features_LinhaHospitaisRodoviaria_42 = format_LinhaHospitaisRodoviaria_42.readFeatures(json_LinhaHospitaisRodoviaria_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaHospitaisRodoviaria_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaHospitaisRodoviaria_42.addFeatures(features_LinhaHospitaisRodoviaria_42);
var lyr_LinhaHospitaisRodoviaria_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaHospitaisRodoviaria_42, 
                style: style_LinhaHospitaisRodoviaria_42,
                popuplayertitle: 'Linha Hospitais - Rodoviaria',
                interactive: true,
                title: '<img src="styles/legend/LinhaHospitaisRodoviaria_42.png" /> Linha Hospitais - Rodoviaria'
            });
var format_LinhaPinheiro_43 = new ol.format.GeoJSON();
var features_LinhaPinheiro_43 = format_LinhaPinheiro_43.readFeatures(json_LinhaPinheiro_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaPinheiro_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaPinheiro_43.addFeatures(features_LinhaPinheiro_43);
var lyr_LinhaPinheiro_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaPinheiro_43, 
                style: style_LinhaPinheiro_43,
                popuplayertitle: 'Linha Pinheirão',
                interactive: true,
                title: '<img src="styles/legend/LinhaPinheiro_43.png" /> Linha Pinheirão'
            });
var format_LinhaBRF_44 = new ol.format.GeoJSON();
var features_LinhaBRF_44 = format_LinhaBRF_44.readFeatures(json_LinhaBRF_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaBRF_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaBRF_44.addFeatures(features_LinhaBRF_44);
var lyr_LinhaBRF_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaBRF_44, 
                style: style_LinhaBRF_44,
                popuplayertitle: 'Linha BRF',
                interactive: true,
                title: '<img src="styles/legend/LinhaBRF_44.png" /> Linha BRF'
            });
var format_LinhaSadiaviaJdFloresta_45 = new ol.format.GeoJSON();
var features_LinhaSadiaviaJdFloresta_45 = format_LinhaSadiaviaJdFloresta_45.readFeatures(json_LinhaSadiaviaJdFloresta_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaSadiaviaJdFloresta_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaSadiaviaJdFloresta_45.addFeatures(features_LinhaSadiaviaJdFloresta_45);
var lyr_LinhaSadiaviaJdFloresta_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaSadiaviaJdFloresta_45, 
                style: style_LinhaSadiaviaJdFloresta_45,
                popuplayertitle: 'Linha Sadia via Jd Floresta',
                interactive: true,
                title: '<img src="styles/legend/LinhaSadiaviaJdFloresta_45.png" /> Linha Sadia via Jd Floresta'
            });
var format_LinhaTerraNossa_46 = new ol.format.GeoJSON();
var features_LinhaTerraNossa_46 = format_LinhaTerraNossa_46.readFeatures(json_LinhaTerraNossa_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaTerraNossa_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaTerraNossa_46.addFeatures(features_LinhaTerraNossa_46);
var lyr_LinhaTerraNossa_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaTerraNossa_46, 
                style: style_LinhaTerraNossa_46,
                popuplayertitle: 'Linha Terra Nossa',
                interactive: true,
                title: '<img src="styles/legend/LinhaTerraNossa_46.png" /> Linha Terra Nossa'
            });
var format_LinhaUTFPRviaMarrecas_47 = new ol.format.GeoJSON();
var features_LinhaUTFPRviaMarrecas_47 = format_LinhaUTFPRviaMarrecas_47.readFeatures(json_LinhaUTFPRviaMarrecas_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaUTFPRviaMarrecas_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaUTFPRviaMarrecas_47.addFeatures(features_LinhaUTFPRviaMarrecas_47);
var lyr_LinhaUTFPRviaMarrecas_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaUTFPRviaMarrecas_47, 
                style: style_LinhaUTFPRviaMarrecas_47,
                popuplayertitle: 'Linha UTFPR via Marrecas',
                interactive: true,
                title: '<img src="styles/legend/LinhaUTFPRviaMarrecas_47.png" /> Linha UTFPR via Marrecas'
            });
var format_LinhaUTFPRviaSoMiguel_48 = new ol.format.GeoJSON();
var features_LinhaUTFPRviaSoMiguel_48 = format_LinhaUTFPRviaSoMiguel_48.readFeatures(json_LinhaUTFPRviaSoMiguel_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaUTFPRviaSoMiguel_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaUTFPRviaSoMiguel_48.addFeatures(features_LinhaUTFPRviaSoMiguel_48);
var lyr_LinhaUTFPRviaSoMiguel_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaUTFPRviaSoMiguel_48, 
                style: style_LinhaUTFPRviaSoMiguel_48,
                popuplayertitle: 'Linha UTFPR via São Miguel',
                interactive: true,
                title: '<img src="styles/legend/LinhaUTFPRviaSoMiguel_48.png" /> Linha UTFPR via São Miguel'
            });
var format_LinhaConcen_49 = new ol.format.GeoJSON();
var features_LinhaConcen_49 = format_LinhaConcen_49.readFeatures(json_LinhaConcen_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaConcen_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaConcen_49.addFeatures(features_LinhaConcen_49);
var lyr_LinhaConcen_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaConcen_49, 
                style: style_LinhaConcen_49,
                popuplayertitle: 'Linha Concen',
                interactive: true,
                title: '<img src="styles/legend/LinhaConcen_49.png" /> Linha Concen'
            });
var format_TerminalUrbano_50 = new ol.format.GeoJSON();
var features_TerminalUrbano_50 = format_TerminalUrbano_50.readFeatures(json_TerminalUrbano_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminalUrbano_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminalUrbano_50.addFeatures(features_TerminalUrbano_50);
var lyr_TerminalUrbano_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminalUrbano_50, 
                style: style_TerminalUrbano_50,
                popuplayertitle: 'Terminal Urbano',
                interactive: true,
                title: '<img src="styles/legend/TerminalUrbano_50.png" /> Terminal Urbano'
            });
var group_PropostaNovoSistema = new ol.layer.Group({
                                layers: [lyr_SistemaProposto_36,lyr_LinhaCircularNorteAH_37,lyr_LinhaCircularNorteH_38,lyr_LinhaCircularUniversitriaAH_39,lyr_LinhaCircularUniversitriaH_40,lyr_LinhaCristoRei_41,lyr_LinhaHospitaisRodoviaria_42,lyr_LinhaPinheiro_43,lyr_LinhaBRF_44,lyr_LinhaSadiaviaJdFloresta_45,lyr_LinhaTerraNossa_46,lyr_LinhaUTFPRviaMarrecas_47,lyr_LinhaUTFPRviaSoMiguel_48,lyr_LinhaConcen_49,],
                                fold: 'close',
                                title: 'Proposta Novo Sistema'});
var group_TransportePblicoAtualDU = new ol.layer.Group({
                                layers: [lyr_Linha14Variao08Frequncia01viagem_8,lyr_Linha14Variao07Frequncia01viagem_9,lyr_Linha14Variao06Frequncia01viagem_10,lyr_Linha14Variao05Frequncia01viagem_11,lyr_Linha14Variao04Frequncia01viagem_12,lyr_Linha14Variao03Frequncia01viagem_13,lyr_Linha14Variao02Frequncia01viagem_14,lyr_Linha14Variao01Frequncia01viagem_15,lyr_Linha12Variao01Frequncia12viagens_16,lyr_Linha12Variao02Frequncia02viagens_17,lyr_Linha11Variao05Frequncia11viagens_18,lyr_Linha11Variao01Frequncia06viagens_19,lyr_Linha11Variao03Frequncia05viagens_20,lyr_Linha11Variao02Frequncia01viagem_21,lyr_Linha11Variao04Frequncia00viagens_22,lyr_Linha10Variao01Frequncia15viagens_23,lyr_Linha10Variao02Frequncia03viagens_24,lyr_Linha10Variao04Frequncia01viagem_25,lyr_Linha10Variao03Frequncia01viagem_26,lyr_Linha09Variao01Frequncia18viagens_27,lyr_Linha09Variao02Frequncia01viagem_28,lyr_Linha04Variao02Frequncia17viagens_29,lyr_Linha04Variao01Frequncia00viagens_30,lyr_Linha02Variao01Frequncia05viagens_31,lyr_Linha02Variao02Frequncia02viagens_32,lyr_Linha01Variao01Frequncia13viagens_33,lyr_Linha01Variao02Frequncia03viagens_34,lyr_Linha01Variao03Frequncia01viagem_35,],
                                fold: 'close',
                                title: 'Transporte Público Atual DU'});
var group_Municpio = new ol.layer.Group({
                                layers: [lyr_DensidadeDemogrfica_2,lyr_PermetroUrbano_3,lyr_DistritosRurais_4,lyr_Bairros_5,lyr_PGVs_6,lyr_HierarquiaViria_7,],
                                fold: 'close',
                                title: 'Município'});

lyr_GoogleSatellite_0.setVisible(true);lyr_RRZEOpenStreetMapStandardHD_1.setVisible(true);lyr_DensidadeDemogrfica_2.setVisible(true);lyr_PermetroUrbano_3.setVisible(true);lyr_DistritosRurais_4.setVisible(true);lyr_Bairros_5.setVisible(true);lyr_PGVs_6.setVisible(true);lyr_HierarquiaViria_7.setVisible(true);lyr_Linha14Variao08Frequncia01viagem_8.setVisible(true);lyr_Linha14Variao07Frequncia01viagem_9.setVisible(true);lyr_Linha14Variao06Frequncia01viagem_10.setVisible(true);lyr_Linha14Variao05Frequncia01viagem_11.setVisible(true);lyr_Linha14Variao04Frequncia01viagem_12.setVisible(true);lyr_Linha14Variao03Frequncia01viagem_13.setVisible(true);lyr_Linha14Variao02Frequncia01viagem_14.setVisible(true);lyr_Linha14Variao01Frequncia01viagem_15.setVisible(true);lyr_Linha12Variao01Frequncia12viagens_16.setVisible(true);lyr_Linha12Variao02Frequncia02viagens_17.setVisible(true);lyr_Linha11Variao05Frequncia11viagens_18.setVisible(true);lyr_Linha11Variao01Frequncia06viagens_19.setVisible(true);lyr_Linha11Variao03Frequncia05viagens_20.setVisible(true);lyr_Linha11Variao02Frequncia01viagem_21.setVisible(true);lyr_Linha11Variao04Frequncia00viagens_22.setVisible(true);lyr_Linha10Variao01Frequncia15viagens_23.setVisible(true);lyr_Linha10Variao02Frequncia03viagens_24.setVisible(true);lyr_Linha10Variao04Frequncia01viagem_25.setVisible(true);lyr_Linha10Variao03Frequncia01viagem_26.setVisible(true);lyr_Linha09Variao01Frequncia18viagens_27.setVisible(true);lyr_Linha09Variao02Frequncia01viagem_28.setVisible(true);lyr_Linha04Variao02Frequncia17viagens_29.setVisible(true);lyr_Linha04Variao01Frequncia00viagens_30.setVisible(true);lyr_Linha02Variao01Frequncia05viagens_31.setVisible(true);lyr_Linha02Variao02Frequncia02viagens_32.setVisible(true);lyr_Linha01Variao01Frequncia13viagens_33.setVisible(true);lyr_Linha01Variao02Frequncia03viagens_34.setVisible(true);lyr_Linha01Variao03Frequncia01viagem_35.setVisible(true);lyr_SistemaProposto_36.setVisible(true);lyr_LinhaCircularNorteAH_37.setVisible(true);lyr_LinhaCircularNorteH_38.setVisible(true);lyr_LinhaCircularUniversitriaAH_39.setVisible(true);lyr_LinhaCircularUniversitriaH_40.setVisible(true);lyr_LinhaCristoRei_41.setVisible(true);lyr_LinhaHospitaisRodoviaria_42.setVisible(true);lyr_LinhaPinheiro_43.setVisible(true);lyr_LinhaBRF_44.setVisible(true);lyr_LinhaSadiaviaJdFloresta_45.setVisible(true);lyr_LinhaTerraNossa_46.setVisible(true);lyr_LinhaUTFPRviaMarrecas_47.setVisible(true);lyr_LinhaUTFPRviaSoMiguel_48.setVisible(true);lyr_LinhaConcen_49.setVisible(true);lyr_TerminalUrbano_50.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_RRZEOpenStreetMapStandardHD_1,group_Municpio,group_TransportePblicoAtualDU,group_PropostaNovoSistema,lyr_TerminalUrbano_50];
lyr_DensidadeDemogrfica_2.set('fieldAliases', {'fid': 'fid', 'CD_SETOR': 'CD_SETOR', 'AREA_KM2': 'AREA_KM2', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_MICRO': 'CD_MICRO', 'NM_MICRO': 'NM_MICRO', 'CD_MESO': 'CD_MESO', 'NM_MESO': 'NM_MESO', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'v0001': 'v0001', 'v0002': 'v0002', 'v0003': 'v0003', 'v0004': 'v0004', 'v0005': 'v0005', 'v0006': 'v0006', 'v0007': 'v0007', 'DENSIDADE': 'DENSIDADE', });
lyr_PermetroUrbano_3.set('fieldAliases', {'fid': 'fid', 'PERÍMETRO': 'PERÍMETRO', 'AREA_KM2': 'AREA_KM2', 'ÁREA M2': 'ÁREA M2', });
lyr_DistritosRurais_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'DISTRITOS': 'DISTRITOS', 'ÁREA_KM2': 'ÁREA_KM2', });
lyr_Bairros_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Nome', 'Codigo': 'Codigo', });
lyr_PGVs_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'tipo_uso': 'tipo_uso', 'porte': 'porte', });
lyr_HierarquiaViria_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'CATEGORIA': 'CATEGORIA', 'NOME RUA': 'NOME RUA', 'NOME ANTER': 'NOME ANTER', 'STATUS': 'STATUS', 'Nº INICIO': 'Nº INICIO', 'Nº  FIM': 'Nº  FIM', 'BAIRRO DIR': 'BAIRRO DIR', 'BAIRRO ESQ': 'BAIRRO ESQ', 'DISTRITO': 'DISTRITO', 'SETOR': 'SETOR', 'PAVIMENTO': 'PAVIMENTO', 'REDE AGUA': 'REDE AGUA', 'REDE ESGOT': 'REDE ESGOT', 'LARGURA': 'LARGURA', 'PROJETO': 'PROJETO', 'classif_urbanidade': 'classif_urbanidade', 'mob_H': 'mob_H', 'classif_paisagistica': 'classif_paisagistica', 'classif_hierarquia': 'classif_hierarquia', 'mob_LINK': 'mob_LINK', });
lyr_Linha14Variao08Frequncia01viagem_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha14Variao07Frequncia01viagem_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha14Variao06Frequncia01viagem_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha14Variao05Frequncia01viagem_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', 'PARTIDAS_SAB': 'PARTIDAS_SAB', });
lyr_Linha14Variao04Frequncia01viagem_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha14Variao03Frequncia01viagem_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha14Variao02Frequncia01viagem_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha14Variao01Frequncia01viagem_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'linha': 'linha', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha12Variao01Frequncia12viagens_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'linha': 'linha', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha12Variao02Frequncia02viagens_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha11Variao05Frequncia11viagens_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha11Variao01Frequncia06viagens_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', 'PARTIDAS_SAB': 'PARTIDAS_SAB', 'PARTIDAS_DOM': 'PARTIDAS_DOM', });
lyr_Linha11Variao03Frequncia05viagens_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha11Variao02Frequncia01viagem_21.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'linha': 'linha', 'PARTIDAS_DU': 'PARTIDAS_DU', 'PARTIDAS_SAB': 'PARTIDAS_SAB', });
lyr_Linha11Variao04Frequncia00viagens_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_SAB': 'PARTIDAS_SAB', 'PARTIDAS_DOM': 'PARTIDAS_DOM', });
lyr_Linha10Variao01Frequncia15viagens_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', 'PARTIDAS_SAB': 'PARTIDAS_SAB', 'PARTIDAS_DOM': 'PARTIDAS_DOM', });
lyr_Linha10Variao02Frequncia03viagens_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', 'PARTIDAS_SAB': 'PARTIDAS_SAB', 'PARTIDAS_DOM': 'PARTIDAS_DOM', });
lyr_Linha10Variao04Frequncia01viagem_25.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'linha': 'linha', 'PARTIDAS_DU': 'PARTIDAS_DU', 'PARTIDAS_ SAB': 'PARTIDAS_ SAB', });
lyr_Linha10Variao03Frequncia01viagem_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha09Variao01Frequncia18viagens_27.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', 'PARTIDAS_SAB': 'PARTIDAS_SAB', });
lyr_Linha09Variao02Frequncia01viagem_28.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'linha': 'linha', 'PARTIDAS_DU': 'PARTIDAS_DU', 'PARTIDAS_SAB': 'PARTIDAS_SAB', });
lyr_Linha04Variao02Frequncia17viagens_29.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'linha': 'linha', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha04Variao01Frequncia00viagens_30.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'PARTIDAS_DU': 'PARTIDAS_DU', 'PARTIDAS_SAB': 'PARTIDAS_SAB', 'PARTIDAS_DOM': 'PARTIDAS_DOM', });
lyr_Linha02Variao01Frequncia05viagens_31.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'linha': 'linha', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha02Variao02Frequncia02viagens_32.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'linha': 'linha', 'PARTIDAS_DU': 'PARTIDAS_DU', });
lyr_Linha01Variao01Frequncia13viagens_33.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'CATEGORIA': 'CATEGORIA', 'NOME RUA': 'NOME RUA', 'NOME ANTER': 'NOME ANTER', 'STATUS': 'STATUS', 'Nº INICIO': 'Nº INICIO', 'Nº  FIM': 'Nº  FIM', 'BAIRRO DIR': 'BAIRRO DIR', 'BAIRRO ESQ': 'BAIRRO ESQ', 'CEP DIR': 'CEP DIR', 'CEP ESQ': 'CEP ESQ', 'DISTRITO': 'DISTRITO', 'SETOR': 'SETOR', 'PAVIMENTO': 'PAVIMENTO', 'REDE AGUA': 'REDE AGUA', 'REDE ESGOT': 'REDE ESGOT', 'LARGURA': 'LARGURA', 'layer': 'layer', 'path': 'path', 'SENTIDO': 'SENTIDO', 'instance': 'instance', 'offset': 'offset', 'LINHA': 'LINHA', 'PARTIDAS_DU': 'PARTIDAS_DU', 'PARTIDAS_SAB': 'PARTIDAS_SAB', 'PARTIDAS_DOM': 'PARTIDAS_DOM', });
lyr_Linha01Variao02Frequncia03viagens_34.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'linha': 'linha', 'PARTIDAS_DU': 'PARTIDAS_DU', 'PARTIDAS_SAB': 'PARTIDAS_SAB', 'PARTIDAS_DOM': 'PARTIDAS_DOM', });
lyr_Linha01Variao03Frequncia01viagem_35.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'categoria': 'categoria', 'nome rua': 'nome rua', 'nome anter': 'nome anter', 'status': 'status', 'nº inicio': 'nº inicio', 'nº  fim': 'nº  fim', 'bairro dir': 'bairro dir', 'bairro esq': 'bairro esq', 'cep dir': 'cep dir', 'cep esq': 'cep esq', 'distrito': 'distrito', 'setor': 'setor', 'pavimento': 'pavimento', 'rede agua': 'rede agua', 'rede esgot': 'rede esgot', 'largura': 'largura', 'layer': 'layer', 'path': 'path', 'instance': 'instance', 'offset': 'offset', 'linha': 'linha', 'PARTIDAS_DU': 'PARTIDAS_DU', 'PARTIDAS_SAB': 'PARTIDAS_SAB', 'PARTIDAS_DOM': 'PARTIDAS_DOM', });
lyr_SistemaProposto_36.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_LinhaCircularNorteAH_37.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LinhaCircularNorteH_38.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LinhaCircularUniversitriaAH_39.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LinhaCircularUniversitriaH_40.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LinhaCristoRei_41.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LinhaHospitaisRodoviaria_42.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LinhaPinheiro_43.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LinhaBRF_44.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LinhaSadiaviaJdFloresta_45.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LinhaTerraNossa_46.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LinhaUTFPRviaMarrecas_47.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LinhaUTFPRviaSoMiguel_48.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LinhaConcen_49.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TerminalUrbano_50.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_DensidadeDemogrfica_2.set('fieldImages', {'fid': 'TextEdit', 'CD_SETOR': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_MICRO': 'TextEdit', 'NM_MICRO': 'TextEdit', 'CD_MESO': 'TextEdit', 'NM_MESO': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'v0003': 'TextEdit', 'v0004': 'TextEdit', 'v0005': 'TextEdit', 'v0006': 'TextEdit', 'v0007': 'TextEdit', 'DENSIDADE': 'TextEdit', });
lyr_PermetroUrbano_3.set('fieldImages', {'fid': '', 'PERÍMETRO': 'TextEdit', 'AREA_KM2': 'TextEdit', 'ÁREA M2': 'TextEdit', });
lyr_DistritosRurais_4.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'DISTRITOS': 'TextEdit', 'ÁREA_KM2': 'TextEdit', });
lyr_Bairros_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', 'Codigo': 'TextEdit', });
lyr_PGVs_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nome': 'TextEdit', 'tipo_uso': 'TextEdit', 'porte': 'TextEdit', });
lyr_HierarquiaViria_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'CATEGORIA': 'TextEdit', 'NOME RUA': 'TextEdit', 'NOME ANTER': 'TextEdit', 'STATUS': 'TextEdit', 'Nº INICIO': 'TextEdit', 'Nº  FIM': 'TextEdit', 'BAIRRO DIR': 'TextEdit', 'BAIRRO ESQ': 'TextEdit', 'DISTRITO': 'TextEdit', 'SETOR': 'TextEdit', 'PAVIMENTO': 'TextEdit', 'REDE AGUA': 'TextEdit', 'REDE ESGOT': 'TextEdit', 'LARGURA': 'TextEdit', 'PROJETO': 'TextEdit', 'classif_urbanidade': 'TextEdit', 'mob_H': 'TextEdit', 'classif_paisagistica': 'TextEdit', 'classif_hierarquia': 'TextEdit', 'mob_LINK': 'TextEdit', });
lyr_Linha14Variao08Frequncia01viagem_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha14Variao07Frequncia01viagem_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha14Variao06Frequncia01viagem_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha14Variao05Frequncia01viagem_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', 'PARTIDAS_SAB': 'Range', });
lyr_Linha14Variao04Frequncia01viagem_12.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha14Variao03Frequncia01viagem_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha14Variao02Frequncia01viagem_14.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha14Variao01Frequncia01viagem_15.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'linha': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha12Variao01Frequncia12viagens_16.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'linha': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha12Variao02Frequncia02viagens_17.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha11Variao05Frequncia11viagens_18.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha11Variao01Frequncia06viagens_19.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', 'PARTIDAS_SAB': 'Range', 'PARTIDAS_DOM': 'Range', });
lyr_Linha11Variao03Frequncia05viagens_20.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha11Variao02Frequncia01viagem_21.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'linha': 'TextEdit', 'PARTIDAS_DU': 'Range', 'PARTIDAS_SAB': 'Range', });
lyr_Linha11Variao04Frequncia00viagens_22.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_SAB': 'Range', 'PARTIDAS_DOM': 'Range', });
lyr_Linha10Variao01Frequncia15viagens_23.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', 'PARTIDAS_SAB': 'Range', 'PARTIDAS_DOM': 'Range', });
lyr_Linha10Variao02Frequncia03viagens_24.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', 'PARTIDAS_SAB': 'Range', 'PARTIDAS_DOM': 'Range', });
lyr_Linha10Variao04Frequncia01viagem_25.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'linha': 'TextEdit', 'PARTIDAS_DU': 'Range', 'PARTIDAS_ SAB': 'Range', });
lyr_Linha10Variao03Frequncia01viagem_26.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha09Variao01Frequncia18viagens_27.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', 'PARTIDAS_SAB': 'Range', });
lyr_Linha09Variao02Frequncia01viagem_28.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'linha': 'TextEdit', 'PARTIDAS_DU': 'Range', 'PARTIDAS_SAB': 'Range', });
lyr_Linha04Variao02Frequncia17viagens_29.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'linha': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha04Variao01Frequncia00viagens_30.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'PARTIDAS_DU': 'Range', 'PARTIDAS_SAB': 'Range', 'PARTIDAS_DOM': 'Range', });
lyr_Linha02Variao01Frequncia05viagens_31.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'linha': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha02Variao02Frequncia02viagens_32.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'linha': 'TextEdit', 'PARTIDAS_DU': 'Range', });
lyr_Linha01Variao01Frequncia13viagens_33.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'CATEGORIA': 'TextEdit', 'NOME RUA': 'TextEdit', 'NOME ANTER': 'TextEdit', 'STATUS': 'TextEdit', 'Nº INICIO': 'TextEdit', 'Nº  FIM': 'TextEdit', 'BAIRRO DIR': 'TextEdit', 'BAIRRO ESQ': 'TextEdit', 'CEP DIR': 'TextEdit', 'CEP ESQ': 'TextEdit', 'DISTRITO': 'TextEdit', 'SETOR': 'TextEdit', 'PAVIMENTO': 'TextEdit', 'REDE AGUA': 'TextEdit', 'REDE ESGOT': 'TextEdit', 'LARGURA': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'SENTIDO': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'LINHA': 'TextEdit', 'PARTIDAS_DU': 'Range', 'PARTIDAS_SAB': 'Range', 'PARTIDAS_DOM': 'Range', });
lyr_Linha01Variao02Frequncia03viagens_34.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'linha': 'TextEdit', 'PARTIDAS_DU': 'Range', 'PARTIDAS_SAB': 'Range', 'PARTIDAS_DOM': 'Range', });
lyr_Linha01Variao03Frequncia01viagem_35.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'categoria': 'TextEdit', 'nome rua': 'TextEdit', 'nome anter': 'TextEdit', 'status': 'TextEdit', 'nº inicio': 'TextEdit', 'nº  fim': 'TextEdit', 'bairro dir': 'TextEdit', 'bairro esq': 'TextEdit', 'cep dir': 'TextEdit', 'cep esq': 'TextEdit', 'distrito': 'TextEdit', 'setor': 'TextEdit', 'pavimento': 'TextEdit', 'rede agua': 'TextEdit', 'rede esgot': 'TextEdit', 'largura': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'instance': 'TextEdit', 'offset': 'TextEdit', 'linha': 'TextEdit', 'PARTIDAS_DU': 'Range', 'PARTIDAS_SAB': 'Range', 'PARTIDAS_DOM': 'Range', });
lyr_SistemaProposto_36.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_LinhaCircularNorteAH_37.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LinhaCircularNorteH_38.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LinhaCircularUniversitriaAH_39.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LinhaCircularUniversitriaH_40.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LinhaCristoRei_41.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LinhaHospitaisRodoviaria_42.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LinhaPinheiro_43.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LinhaBRF_44.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LinhaSadiaviaJdFloresta_45.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LinhaTerraNossa_46.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LinhaUTFPRviaMarrecas_47.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LinhaUTFPRviaSoMiguel_48.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LinhaConcen_49.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_TerminalUrbano_50.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_DensidadeDemogrfica_2.set('fieldLabels', {'fid': 'no label', 'CD_SETOR': 'no label', 'AREA_KM2': 'no label', 'CD_REGIAO': 'no label', 'NM_REGIAO': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_DIST': 'no label', 'NM_DIST': 'no label', 'CD_SUBDIST': 'no label', 'NM_SUBDIST': 'no label', 'CD_MICRO': 'no label', 'NM_MICRO': 'no label', 'CD_MESO': 'no label', 'NM_MESO': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_CONCURB': 'no label', 'NM_CONCURB': 'no label', 'v0001': 'no label', 'v0002': 'no label', 'v0003': 'no label', 'v0004': 'no label', 'v0005': 'no label', 'v0006': 'no label', 'v0007': 'no label', 'DENSIDADE': 'inline label - visible with data', });
lyr_PermetroUrbano_3.set('fieldLabels', {'fid': 'no label', 'PERÍMETRO': 'no label', 'AREA_KM2': 'no label', 'ÁREA M2': 'no label', });
lyr_DistritosRurais_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'DISTRITOS': 'no label', 'ÁREA_KM2': 'no label', });
lyr_Bairros_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nome': 'no label', 'Codigo': 'no label', });
lyr_PGVs_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nome': 'no label', 'tipo_uso': 'no label', 'porte': 'no label', });
lyr_HierarquiaViria_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'CATEGORIA': 'no label', 'NOME RUA': 'no label', 'NOME ANTER': 'no label', 'STATUS': 'no label', 'Nº INICIO': 'no label', 'Nº  FIM': 'no label', 'BAIRRO DIR': 'no label', 'BAIRRO ESQ': 'no label', 'DISTRITO': 'no label', 'SETOR': 'no label', 'PAVIMENTO': 'no label', 'REDE AGUA': 'no label', 'REDE ESGOT': 'no label', 'LARGURA': 'no label', 'PROJETO': 'no label', 'classif_urbanidade': 'no label', 'mob_H': 'no label', 'classif_paisagistica': 'no label', 'classif_hierarquia': 'no label', 'mob_LINK': 'no label', });
lyr_Linha14Variao08Frequncia01viagem_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha14Variao07Frequncia01viagem_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha14Variao06Frequncia01viagem_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha14Variao05Frequncia01viagem_11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', 'PARTIDAS_SAB': 'no label', });
lyr_Linha14Variao04Frequncia01viagem_12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha14Variao03Frequncia01viagem_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha14Variao02Frequncia01viagem_14.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha14Variao01Frequncia01viagem_15.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'linha': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha12Variao01Frequncia12viagens_16.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'linha': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha12Variao02Frequncia02viagens_17.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha11Variao05Frequncia11viagens_18.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha11Variao01Frequncia06viagens_19.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', 'PARTIDAS_SAB': 'no label', 'PARTIDAS_DOM': 'no label', });
lyr_Linha11Variao03Frequncia05viagens_20.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha11Variao02Frequncia01viagem_21.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'linha': 'no label', 'PARTIDAS_DU': 'no label', 'PARTIDAS_SAB': 'no label', });
lyr_Linha11Variao04Frequncia00viagens_22.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_SAB': 'no label', 'PARTIDAS_DOM': 'no label', });
lyr_Linha10Variao01Frequncia15viagens_23.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', 'PARTIDAS_SAB': 'no label', 'PARTIDAS_DOM': 'no label', });
lyr_Linha10Variao02Frequncia03viagens_24.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', 'PARTIDAS_SAB': 'no label', 'PARTIDAS_DOM': 'no label', });
lyr_Linha10Variao04Frequncia01viagem_25.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'linha': 'no label', 'PARTIDAS_DU': 'no label', 'PARTIDAS_ SAB': 'no label', });
lyr_Linha10Variao03Frequncia01viagem_26.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha09Variao01Frequncia18viagens_27.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', 'PARTIDAS_SAB': 'no label', });
lyr_Linha09Variao02Frequncia01viagem_28.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'linha': 'no label', 'PARTIDAS_DU': 'no label', 'PARTIDAS_SAB': 'no label', });
lyr_Linha04Variao02Frequncia17viagens_29.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'linha': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha04Variao01Frequncia00viagens_30.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'PARTIDAS_DU': 'no label', 'PARTIDAS_SAB': 'no label', 'PARTIDAS_DOM': 'no label', });
lyr_Linha02Variao01Frequncia05viagens_31.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'linha': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha02Variao02Frequncia02viagens_32.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'linha': 'no label', 'PARTIDAS_DU': 'no label', });
lyr_Linha01Variao01Frequncia13viagens_33.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'CATEGORIA': 'no label', 'NOME RUA': 'no label', 'NOME ANTER': 'no label', 'STATUS': 'no label', 'Nº INICIO': 'no label', 'Nº  FIM': 'no label', 'BAIRRO DIR': 'no label', 'BAIRRO ESQ': 'no label', 'CEP DIR': 'no label', 'CEP ESQ': 'no label', 'DISTRITO': 'no label', 'SETOR': 'no label', 'PAVIMENTO': 'no label', 'REDE AGUA': 'no label', 'REDE ESGOT': 'no label', 'LARGURA': 'no label', 'layer': 'no label', 'path': 'no label', 'SENTIDO': 'no label', 'instance': 'no label', 'offset': 'no label', 'LINHA': 'no label', 'PARTIDAS_DU': 'no label', 'PARTIDAS_SAB': 'no label', 'PARTIDAS_DOM': 'no label', });
lyr_Linha01Variao02Frequncia03viagens_34.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'linha': 'no label', 'PARTIDAS_DU': 'no label', 'PARTIDAS_SAB': 'no label', 'PARTIDAS_DOM': 'no label', });
lyr_Linha01Variao03Frequncia01viagem_35.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'categoria': 'no label', 'nome rua': 'no label', 'nome anter': 'no label', 'status': 'no label', 'nº inicio': 'no label', 'nº  fim': 'no label', 'bairro dir': 'no label', 'bairro esq': 'no label', 'cep dir': 'no label', 'cep esq': 'no label', 'distrito': 'no label', 'setor': 'no label', 'pavimento': 'no label', 'rede agua': 'no label', 'rede esgot': 'no label', 'largura': 'no label', 'layer': 'no label', 'path': 'no label', 'instance': 'no label', 'offset': 'no label', 'linha': 'no label', 'PARTIDAS_DU': 'no label', 'PARTIDAS_SAB': 'no label', 'PARTIDAS_DOM': 'no label', });
lyr_SistemaProposto_36.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_LinhaCircularNorteAH_37.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LinhaCircularNorteH_38.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LinhaCircularUniversitriaAH_39.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LinhaCircularUniversitriaH_40.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LinhaCristoRei_41.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LinhaHospitaisRodoviaria_42.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LinhaPinheiro_43.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LinhaBRF_44.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LinhaSadiaviaJdFloresta_45.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LinhaTerraNossa_46.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LinhaUTFPRviaMarrecas_47.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LinhaUTFPRviaSoMiguel_48.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LinhaConcen_49.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TerminalUrbano_50.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_TerminalUrbano_50.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});