var wms_layers = [];


        var lyr_Waze_0 = new ol.layer.Tile({
            'title': 'Waze',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://worldtiles1.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_HousingProvider_1 = new ol.format.GeoJSON();
var features_HousingProvider_1 = format_HousingProvider_1.readFeatures(json_HousingProvider_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HousingProvider_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HousingProvider_1.addFeatures(features_HousingProvider_1);
var lyr_HousingProvider_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HousingProvider_1, 
                style: style_HousingProvider_1,
                popuplayertitle: 'Housing Provider',
                interactive: true,
                title: '<img src="styles/legend/HousingProvider_1.png" /> Housing Provider'
            });

lyr_Waze_0.setVisible(true);lyr_HousingProvider_1.setVisible(true);
var layersList = [lyr_Waze_0,lyr_HousingProvider_1];
lyr_HousingProvider_1.set('fieldAliases', {'Reg Code': 'Reg Code', 'Landlord': 'Landlord', 'Landlord Type': 'Landlord Type', 'Name and Reg Code Change Details': 'Name and Reg Code Change Details', 'Other landlords included in the judgement': 'Other landlords included in the judgement', 'Status': 'Status', 'Consumer grade': 'Consumer grade', 'Consumer Grade Change': 'Consumer Grade Change', 'Consumer Grade Date': 'Consumer Grade Date', 'Governance Grade': 'Governance Grade', 'Governance Grade Change': 'Governance Grade Change', 'Governance Date': 'Governance Date', 'Viability Grade': 'Viability Grade', 'Viability Grade Change': 'Viability Grade Change', 'Viability Grade Date': 'Viability Grade Date', 'Rent': 'Rent', 'Rent Date': 'Rent Date', 'Rent Change': 'Rent Change', 'Type of Publication': 'Type of Publication', 'Publication Date': 'Publication Date', 'Engagement Process': 'Engagement Process', 'Number of Properties': 'Number of Properties', 'Region': 'Region', 'Consumer Grade Meaning': 'Consumer Grade Meaning', 'Governance Grade Meaning': 'Governance Grade Meaning', 'Viability Grade Meaning': 'Viability Grade Meaning', 'Consumer Failure Reasons': 'Consumer Failure Reasons', 'Governance Failure Reasons': 'Governance Failure Reasons', 'Viability Failure Reasons / Concerns': 'Viability Failure Reasons / Concerns', 'Key Improvement Actions Required': 'Key Improvement Actions Required', 'Head Office Address': 'Head Office Address', 'Postcode (old)': 'Postcode (old)', 'Postcode (use this)': 'Postcode (use this)', 'Description': 'Description', 'Grid Reference': 'Grid Reference', 'X (easting)': 'X (easting)', 'Y (northing)': 'Y (northing)', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_HousingProvider_1.set('fieldImages', {'Reg Code': 'TextEdit', 'Landlord': 'TextEdit', 'Landlord Type': 'TextEdit', 'Name and Reg Code Change Details': 'TextEdit', 'Other landlords included in the judgement': 'TextEdit', 'Status': 'TextEdit', 'Consumer grade': 'TextEdit', 'Consumer Grade Change': 'TextEdit', 'Consumer Grade Date': 'TextEdit', 'Governance Grade': 'TextEdit', 'Governance Grade Change': 'TextEdit', 'Governance Date': 'TextEdit', 'Viability Grade': 'TextEdit', 'Viability Grade Change': 'TextEdit', 'Viability Grade Date': 'TextEdit', 'Rent': 'TextEdit', 'Rent Date': 'TextEdit', 'Rent Change': 'TextEdit', 'Type of Publication': 'TextEdit', 'Publication Date': 'TextEdit', 'Engagement Process': 'TextEdit', 'Number of Properties': 'TextEdit', 'Region': 'TextEdit', 'Consumer Grade Meaning': 'TextEdit', 'Governance Grade Meaning': 'TextEdit', 'Viability Grade Meaning': 'TextEdit', 'Consumer Failure Reasons': 'TextEdit', 'Governance Failure Reasons': 'TextEdit', 'Viability Failure Reasons / Concerns': 'TextEdit', 'Key Improvement Actions Required': 'TextEdit', 'Head Office Address': 'TextEdit', 'Postcode (old)': 'TextEdit', 'Postcode (use this)': 'TextEdit', 'Description': 'TextEdit', 'Grid Reference': 'TextEdit', 'X (easting)': 'Range', 'Y (northing)': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_HousingProvider_1.set('fieldLabels', {'Reg Code': 'hidden field', 'Landlord': 'no label', 'Landlord Type': 'hidden field', 'Name and Reg Code Change Details': 'hidden field', 'Other landlords included in the judgement': 'hidden field', 'Status': 'hidden field', 'Consumer grade': 'hidden field', 'Consumer Grade Change': 'hidden field', 'Consumer Grade Date': 'hidden field', 'Governance Grade': 'hidden field', 'Governance Grade Change': 'hidden field', 'Governance Date': 'hidden field', 'Viability Grade': 'hidden field', 'Viability Grade Change': 'hidden field', 'Viability Grade Date': 'hidden field', 'Rent': 'hidden field', 'Rent Date': 'hidden field', 'Rent Change': 'hidden field', 'Type of Publication': 'hidden field', 'Publication Date': 'hidden field', 'Engagement Process': 'hidden field', 'Number of Properties': 'hidden field', 'Region': 'inline label - always visible', 'Consumer Grade Meaning': 'hidden field', 'Governance Grade Meaning': 'hidden field', 'Viability Grade Meaning': 'hidden field', 'Consumer Failure Reasons': 'hidden field', 'Governance Failure Reasons': 'hidden field', 'Viability Failure Reasons / Concerns': 'hidden field', 'Key Improvement Actions Required': 'hidden field', 'Head Office Address': 'hidden field', 'Postcode (old)': 'hidden field', 'Postcode (use this)': 'hidden field', 'Description': 'hidden field', 'Grid Reference': 'hidden field', 'X (easting)': 'hidden field', 'Y (northing)': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_HousingProvider_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});