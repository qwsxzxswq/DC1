esources\qgis2web.js
esources\qgis2web.css
/* 彈出式圖例按鈕樣式 */
.legend-button {
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 2px 5px;
    margin-left: 5px;
    cursor: pointer;
    font-size: 11px;
}

.legend-button:hover {
    background-color: #e8e8e8;
}

/* 彈出式圖例容器樣式 */
.legend-popup {
    display: none;
    position: absolute;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 3px 14px rgba(0,0,0,0.4);
    padding: 10px;
    z-index: 1000;
    max-width: 300px;
    right: 10px;
    top: 40px;
}

.legend-header {
    font-weight: bold;
    margin-bottom: 8px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
    position: relative;
}

.legend-closer {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    font-weight: bold;
}

.legend-content {
    max-height: 300px;
    overflow-y: auto;
    line-height: 1.5;
}

.legend-content img {
    vertical-align: middle;
    margin-right: 5px;
}

// 添加彈出式圖例功能
function setupLegendPopups() {
    // 將圖層的legendContent添加到body
    var layers = layersList.getArray();
    layers.forEach(function(layer) {
        if (layer.get('legendContent')) {
            document.body.insertAdjacentHTML('beforeend', layer.get('legendContent'));
        }
    });
    
    // 為所有圖例按鈕添加點擊事件
    document.querySelectorAll('.legend-button').forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // 防止事件冒泡
            var legendId = this.id.replace('-button', '');
            var legendElement = document.getElementById(legendId);
            
            // 隱藏所有其他圖例
            document.querySelectorAll('.legend-popup').forEach(function(popup) {
                if (popup.id !== legendId) {
                    popup.style.display = 'none';
                }
            });
            
            // 顯示或隱藏當前圖例
            if (legendElement.style.display === 'block') {
                legendElement.style.display = 'none';
            } else {
                legendElement.style.display = 'block';
                
                // 定位圖例在按鈕附近
                var buttonRect = button.getBoundingClientRect();
                legendElement.style.top = (buttonRect.bottom + 5) + 'px';
                legendElement.style.left = buttonRect.left + 'px';
            }
        });
    });
    
    // 為所有圖例關閉按鈕添加點擊事件
    document.querySelectorAll('.legend-closer').forEach(function(closer) {
        closer.addEventListener('click', function() {
            this.closest('.legend-popup').style.display = 'none';
        });
    });
    
    // 點擊頁面其他地方時關閉所有圖例
    document.addEventListener('click', function() {
        document.querySelectorAll('.legend-popup').forEach(function(popup) {
            popup.style.display = 'none';
        });
    });
}

// 頁面加載完成後初始化彈出式圖例
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(setupLegendPopups, 1000); // 延遲執行，確保圖層已加載
});