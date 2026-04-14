function setup() {
  createCanvas(windowWidth, windowHeight);
  // 背景維持清爽的冰河藍 dbe9ee
  background('#dbe9ee'); 
}

function draw() {
  // 1. 定義酪梨綠系列的兩極端 (大幅強化對比)
  let darkContrast = color('#8a9a7a');  // 深橄欖綠
  let lightContrast = color('#fafff0'); // 奶油高光綠
  
  // 2. 使用 random(0, 1) 讓每一顆圓隨機決定深淺比例
  // 每次 draw 執行時，這顆圓的顏色都會是隨機生成的
  let randomAmount = random(0, 1);
  let finalFillColor = lerpColor(darkContrast, lightContrast, randomAmount);
  
  // 3. 強化邊框：深灰色邊框讓圓點更分明
  stroke('#5a6263'); 
  strokeWeight(3);   
  
  // 4. 設定隨機生成的填充色並繪製
  fill(finalFillColor);
  
  // 當滑鼠移動時，在當前位置畫下一顆隨機深淺的圓
  // 為了更有層次感，圓的大小也可以加一點點隨機變化 (例如 60-90 之間)
  let randomSize = random(60, 90);
  ellipse(mouseX, mouseY, randomSize, randomSize);
}