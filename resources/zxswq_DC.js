
// 定義分割線和左右區塊
    var Pcontainer = document.getElementById('Pcontainer');
    var divider = document.getElementById('divider');
    var Mcontainer = document.getElementById('Mcontainer');

    // 初始化滑鼠事件
    var isDragging = false;
    divider.addEventListener('mousedown', function (event) {
        isDragging = true;
    });

// 建立視窗改變函式
function checkWindowSize() {
// 偵測視窗寬高
  const width = window.innerWidth;
  const height = window.innerHeight;
// 判斷視窗寬高，並調整分割畫面
  if (height > width) {
// 直式時，設定上下分割
   Pcontainer.style.height = '40.5%';
    Pcontainer.style.width = '100%';
    Pcontainer.style.float = 'top';
    Mcontainer.style.height = '59%';
    Mcontainer.style.width = '100%';
    Mcontainer.style.float = 'top';
  divider.style.width = '100%';
  divider.style.height = '0.5%';
  divider.style.float = 'top';
  divider.style.cursor = 'ns-resize';
  map.updateSize();
// 監聽滑鼠移動事件
  window.addEventListener('mousemove', function (event) {
        if (isDragging) {
            var mouseY = event.clientY;
            var totalHeight = window.innerHeight;
            var PcontainerHeight = (mouseY / totalHeight) * 100;
            var McontainerHeight = 99.5 - PcontainerHeight  ;
            Pcontainer.style.height = PcontainerHeight + '%';
            Pcontainer.style.width = '100%';
            Mcontainer.style.height = McontainerHeight + '%';
            Mcontainer.style.width = '100%';
            map.updateSize();
        }
 })
} else {
   
// 橫式時，設定左右分割
     Pcontainer.style.height = '100%';
     Pcontainer.style.width = '44.5%';
     Pcontainer.style.float = 'left';
     Mcontainer.style.width = '55%';
     Mcontainer.style.height = '100%';
     Mcontainer.style.float = 'left';
 divider.style.width = '0.5%';
 divider.style.height = '100%';
 divider.style.float = 'left';
 divider.style.cursor = 'ew-resize';
 map.updateSize();
// 監聽滑鼠移動事件
 window.addEventListener('mousemove', function (event) {
        if (isDragging) {
            var mouseX = event.clientX;
            var totalWidth = window.innerWidth;
            var PcontainerWidth = (mouseX / totalWidth) * 100;
            var McontainerWidth = 99.5 - PcontainerWidth  ;
            Pcontainer.style.width = PcontainerWidth + '%';
            Pcontainer.style.height = '100%';
            Mcontainer.style.width = McontainerWidth + '%';
            Mcontainer.style.height = '100%';
            map.updateSize();
}
  })
  }
 }


  window.addEventListener('mouseup', function () {
        isDragging = false;
    });

// 監聽視窗大小改變事件
window.addEventListener('resize', checkWindowSize);

// 初始執行一次
checkWindowSize();

// Add a marker on the map with icon style
        var markerStyle = new ol.style.Style({
            image: new ol.style.Icon({
                anchor: [0.5, 0.5],
                src: 'images/1.png', 
                rotation: 0, // initial rotation
            }),
        });

        var marker = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([120.2202, 22.9833])));
        marker.setStyle(markerStyle);

        var vectorSource = new ol.source.Vector({
            features: [marker],
        });

        var vectorLayer = new ol.layer.Vector({
            source: vectorSource,
        });

        map.addLayer(vectorLayer);

 // Google Street View
        var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'),
            {
                position: { lat: 22.9833, lng: 120.2202 },
                pov: { heading: 153	, pitch: 10 },
                zoom: 2,
            }
        );

        // Set the panorama to the marker position
        map.on('click', function (event) {
            var lonLat = ol.proj.toLonLat(event.coordinate);
            //marker.setPosition(ol.proj.fromLonLat(lonLat));
           marker.getGeometry().setCoordinates(ol.proj.fromLonLat(lonLat));
            panorama.setPosition({ lat: lonLat[1], lng: lonLat[0] });
        });

// Listen for Google Street View position changes
        panorama.addListener('position_changed', function() {
            var streetViewPosition = panorama.getPosition();
            var lon = streetViewPosition.lng();
            var lat = streetViewPosition.lat();
            marker.getGeometry().setCoordinates(ol.proj.fromLonLat([lon, lat]));
            map.getView().setCenter(ol.proj.fromLonLat([lon, lat]));
        });

        panorama.addListener('pov_changed', function() {
            var heading = panorama.getPov().heading;
            markerStyle.getImage().setRotation(heading * Math.PI / 180);
            marker.setStyle(markerStyle); // 需重新套用樣式
        });

        // 添加标记加载失败处理
        marker.getIcon().addEventListener('error', function() {
            console.error('標記圖片載入失敗，請檢查1.png路徑');
            document.getElementById('pano').innerHTML = '街景載入失敗：標記圖片遺失';
        });

        var streetViewPosition = panorama.getPosition();
        marker.setPosition(streetViewPosition);
        map.getView().setCenter(ol.proj.fromLonLat([
            streetViewPosition.lng(),
            streetViewPosition.lat()
        ]));


