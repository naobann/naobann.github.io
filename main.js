/* ====================================
Midterm Project Yijun Liu CPLN 692-401
======================================= */
//get Map
var map = L.map('map').setView([37, -115], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 0,
        maxZoom: 20,
    }).addTo(map);
//get data
var dataURL="https://raw.githubusercontent.com/naobann/Yijun-Liu_Midterm/master/map.geojson"

var featureGroup;

var myFilter1 = function(feature) {if(feature.properties.DICluster!==" " && feature.properties.TPCICluster!==" ") {return true}};
var myFilter2 = function(feature) {if(feature.properties.DICluster!==" " && feature.properties.TPCICluster!==" ") {return true}};
var myFilter3 = function(feature) {if(feature.properties.DICluster===1) {return true}};
var myFilter4 = function(feature) {if(feature.properties.DICluster===2) {return true}};
var myFilter5 = function(feature) {if(feature.properties.DICluster===3) {return true}};
var myFilter6 = function(feature) {if(feature.properties.TPCICluster===1) {return true}};
var myFilter7 = function(feature) {if(feature.properties.TPCICluster===2) {return true}};
var myFilter8 = function(feature) {if(feature.properties.TPCICluster===3) {return true}};
var myFilter9 = function(feature) {if(feature.properties.DI>5 || feature.properties.TPCI>1.9) {return true}};

var myFilterDeck=[myFilter1,myFilter2,myFilter3,myFilter4,myFilter5,myFilter6,myFilter7,myFilter8,myFilter9]


var pageCount = 1;
var slidebarTitle;
var slidebarText;
$('#previous').hide()

var slideOne = {
    pageNumber: 1,
    slidebarTitle: $("#page1"),
    slidebarText: $("#pagetext1")

}
var slideTwo = {
  pageNumber: 2,
  slidebarTitle: $('#page2'),
  slidebarText: $('#pagetext2')
}
var slideThree = {
  pageNumber: 3,
  slidebarTitle: $('#page3'),
  slidebarText: $('#pagetext3')
}
var slideFour = {
  pageNumber: 4,
  slidebarTitle: $('#page4'),
  slidebarText: $('#pagetext4')
}
var slideFive = {
  pageNumber: 5,
  slidebarTitle: $('#page5'),
  slidebarText: $('#pagetext5')
}
var slideSix = {
  pageNumber: 6,
  slidebarTitle: $('#page6'),
  slidebarText: $('#pagetext6')
}
var slideSeven = {
  pageNumber: 7,
  slidebarTitle: $('#page7'),
  slidebarText: $('#pagetext7')
}
var slideEight = {
  pageNumber: 8,
  slidebarTitle: $('#page8'),
  slidebarText: $('#pagetext8')
}
var slideNine = {
  pageNumber:9,
  slidebarTitle: $('#page9'),
  slidebarText: $('#pagetext9')
}
var slideDeck = [slideOne, slideTwo, slideThree, slideFour, slideFive,
                 slideSix, slideSeven, slideEight, slideNine]


$(document).ready(function() {
  $.ajax(dataURL).done(function(data) {
    var parsedData = JSON.parse(data);


//page1
    function onEachFeature1(layer) {
    layer.bindPopup(layer.feature.properties.State + ", " +
    layer.feature.properties.County + ", " + layer.feature.properties.Station_Na).openPopup();
    map.setView([37, -115], 4);
  };


//page2
    function onEachFeature2(layer){
      var showIndex;
      $('#my-button').click(function(){
        var view = $('#goals').find(":selected").text();
        function reader (input){
          if (input === "Economic Development") {return "DI"}
          else if (input === "Transit Ridership Increase") {return "TPCI"};
        };
        showIndex = reader(view);

      if(layer.feature.properties && layer.feature.properties[showIndex]){
        layer.bindPopup("For the goal you selected, " +
          layer.feature.properties.Station_Na +
        "in " + layer.feature.properties.County + ", " + layer.feature.properties.State + ", " +
        "has a performance index of " +
        layer.feature.properties[showIndex].toFixed(2)).openPopup();
        map.setView([37, -115], 4);
      }
    });
  }


 //page3
function onEachFeature3(layer) {
  if (layer.feature.properties && layer.feature.properties.Station_Na) {
    layer.bindPopup(layer.feature.properties.State + ", " +
    layer.feature.properties.County + ", " + layer.feature.properties.Station_Na
    + ", for the goal of economic development, this station falls in Cluster A, and its Economic Development Index is " +
    layer.feature.properties.DI.toFixed(2)).openPopup();
    map.setView([37, -115], 4);
  }
};


//page4
 function onEachFeature4(layer) {
   if (layer.feature.properties && layer.feature.properties.Station_Na) {
     layer.bindPopup(layer.feature.properties.State + ", " +
     layer.feature.properties.County + ", " + layer.feature.properties.Station_Na
     + ", for the goal of economic development, this station falls in Cluster B, and its Economic Development Index is " +
     layer.feature.properties.DI.toFixed(2)).openPopup();
     map.setView([37, -115], 4);
   }
 };


//page5
 function onEachFeature5(layer) {
   if (layer.feature.properties && layer.feature.properties.Station_Na) {
     layer.bindPopup(layer.feature.properties.State + ", " +
     layer.feature.properties.County + ", " + layer.feature.properties.Station_Na
     + ", for the goal of economic development, this station falls in Cluster C, and its Economic Development Index is " +
     layer.feature.properties.DI.toFixed(2)).openPopup();
     map.setView([37, -115], 4);
   }
 };


//page 6
function onEachFeature6(layer) {
  if (layer.feature.properties && layer.feature.properties.Station_Na) {
    layer.bindPopup(layer.feature.properties.State + ", " +
    layer.feature.properties.County + ", " + layer.feature.properties.Station_Na
    + ", for the goal of transit ridership increase, this station falls in Cluster D, and its Travel Pattern Change Index is " +
    layer.feature.properties.TPCI.toFixed(2)).openPopup();
    map.setView([37, -115], 4);
  }
};


//page7
function onEachFeature7(layer) {
  if (layer.feature.properties && layer.feature.properties.Station_Na) {
    layer.bindPopup(layer.feature.properties.State + ", " +
    layer.feature.properties.County + ", " + layer.feature.properties.Station_Na
    + ", for the goal of transit ridership increase, this station falls in Cluster E, and its Travel Pattern Change Index is " +
    layer.feature.properties.TPCI.toFixed(2)).openPopup();
    map.setView([37, -115], 4);
  }
};


//page8
function onEachFeature8(layer) {
  if (layer.feature.properties && layer.feature.properties.Station_Na) {
    layer.bindPopup(layer.feature.properties.State + ", " +
    layer.feature.properties.County + ", " + layer.feature.properties.Station_Na
    + ", for the goal of transit ridership increase, this station falls in Cluster F, and its Travel Pattern Change Index is " +
    layer.feature.properties.TPCI.toFixed(2)).openPopup();
    map.setView([37, -115], 4);
  };
};


//page9
function onEachFeature9(layer){
    layer.bindPopup(layer.feature.properties.Station_Na +
  "in " + layer.feature.properties.County + ", " + layer.feature.properties.State +
     " is one of the top performers with an Economic Development Index of " + layer.feature.properties.DI.toFixed(2)
     + ", and a Travel Pattern Change Index of " + layer.feature.properties.TPCI.toFixed(2)).openPopup();
     map.setView([38.917015, -77.029169], 16);

};

var onEachFeatureDeck = [onEachFeature1,onEachFeature2,onEachFeature3,onEachFeature4,onEachFeature5,onEachFeature6,onEachFeature7,onEachFeature8,onEachFeature9]

//initial dispaly
   featureGroup = L.geoJson(parsedData,{
      filter: myFilter1,
    }).addTo(map);
   featureGroup.eachLayer(onEachFeature1);

//click
    $('#next').click(function(){
      pageCount++;
      if (pageCount===slideDeck.length){$('#next').hide()}
      else {$('#next').show()};
      if (pageCount === 1) {$('#previous').hide()}
      else {$('#previous').show()};
      for (i=0;i<slideDeck.length;i++) {
        if (slideDeck[i].pageNumber===pageCount){
       slideDeck[i].slidebarTitle.show();
       slideDeck[i].slidebarText.show();
       map.removeLayer(featureGroup);
       featureGroup = L.geoJson(parsedData,{
         filter: myFilterDeck[i]
       }).addTo(map);
       featureGroup.eachLayer(onEachFeatureDeck[i]);
       }

        else {slideDeck[i].slidebarTitle.hide();
              slideDeck[i].slidebarText.hide();
            };
      };
    });


    $('#previous').click(function(){
      pageCount--;
      if (pageCount===slideDeck.length){$('#next').hide()}
      else {$('#next').show()};
      if (pageCount === 1) {$('#previous').hide()}
      else {$('#previous').show()};
      for (i=0;i<slideDeck.length;i++) {
        if (slideDeck[i].pageNumber === pageCount){
       slideDeck[i].slidebarTitle.show();
       slideDeck[i].slidebarText.show();

       map.removeLayer(featureGroup);

       featureGroup = L.geoJson(parsedData,{
         filter: myFilterDeck[i]
       }).addTo(map);
       featureGroup.eachLayer(onEachFeatureDeck[i]);
       }

        else {slideDeck[i].slidebarTitle.hide();
              slideDeck[i].slidebarText.hide();
            };
     };
    })
  });
});
