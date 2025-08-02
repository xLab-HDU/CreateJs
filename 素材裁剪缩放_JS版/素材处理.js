(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.buttonMc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CA69").s().p("AmoETIAAolINRAAIAAIlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-27.5,85,55);


// stage content:
(lib.素材处理 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// ========== 创建 DOM 控件部分 ==========
		const domHTML = `
		  <style>
		  #anCropUI {
		    position: fixed;  /* 固定在页面上方 */
		    top: 0;
		    left: 0;
		    width: 100%;
		    background: #fff;
		    padding: 10px 20px;
		    border-bottom: 1px solid #ccc;
		    z-index: 9999;
		    font-size: 18px;
		  }
		  #canvas {
		    margin-top: 300px !important; /* canvas下移，避免被遮住 */
		  }
		</style>
		
		  <div id="anCropUI">
		    缩放比例（scale）：<input type="number" id="scaleInput" step="0.1" min="0.1" max="2" value="1"><br>
		    <input type="file" id="refImageInput" accept="image/*">
		    <button id="confirmCrop">确认裁剪区域</button>
		    <input type="file" id="imageFolderInput" webkitdirectory multiple>
		    <button id="startBatchCrop">开始批量裁剪导出</button><br>
		    <strong>裁剪预览图：</strong><br>
		    <img id="previewImage" style="border:1px solid #999; margin-top:5px; max-width:200px;">
		  </div>
		`;
		document.body.insertAdjacentHTML("beforeend", domHTML);
		
		// ========== CreateJS 初始化 ==========
		const canvas = exportRoot.stage.canvas;
		const stage = exportRoot.stage;
		
		let refBitmap, cropRect, cropContainer, handles = [];
		let cropData = null;
		let isDragging = false;
		let offset = {x:0, y:0};
		let scale = 1;
		const handleSize = 10;
		
		function createCropBox(x, y, w, h) {
		  cropContainer = new createjs.Container();
		  cropRect = new createjs.Shape();
		  drawCropRect(x, y, w, h);
		  cropRect.cursor = "move";
		  cropContainer.addChild(cropRect);
		  stage.addChild(cropContainer);
		
		  cropRect.on("mousedown", evt => {
		    isDragging = true;
		    offset.x = evt.stageX - cropRect.x;
		    offset.y = evt.stageY - cropRect.y;
		  });
		
		  stage.on("stagemousemove", evt => {
		    if (isDragging) {
		      cropRect.x = evt.stageX - offset.x;
		      cropRect.y = evt.stageY - offset.y;
		      updateHandles();
		      stage.update();
		    }
		  });
		
		  stage.on("stagemouseup", () => isDragging = false);
		
		  const positions = ["tl", "tr", "bl", "br"];
		  for (let i = 0; i < 4; i++) {
		    const h = new createjs.Shape();
		    h.graphics.beginFill("blue").drawRect(0, 0, handleSize, handleSize);
		    h.cursor = "nwse-resize";
		    h.name = positions[i];
		    cropContainer.addChild(h);
		    handles.push(h);
		
		    h.on("pressmove", evt => {
		      const dx = evt.stageX;
		      const dy = evt.stageY;
		      const oldX = cropRect.x;
		      const oldY = cropRect.y;
		      const oldW = cropRect.graphics.command.w;
		      const oldH = cropRect.graphics.command.h;
		
		      if (h.name === "br") {
		        drawCropRect(oldX, oldY, dx - oldX, dy - oldY);
		      } else if (h.name === "tr") {
		        const newH = oldY + oldH - dy;
		        drawCropRect(oldX, dy, dx - oldX, newH);
		      } else if (h.name === "bl") {
		        const newW = oldX + oldW - dx;
		        drawCropRect(dx, oldY, newW, dy - oldY);
		      } else if (h.name === "tl") {
		        const newW = oldX + oldW - dx;
		        const newH = oldY + oldH - dy;
		        drawCropRect(dx, dy, newW, newH);
		      }
		
		      updateHandles();
		      stage.update();
		    });
		  }
		
		  updateHandles();
		  stage.update();
		}
		
		function drawCropRect(x, y, w, h) {
		  cropRect.graphics.clear().setStrokeStyle(2).beginStroke("red").drawRect(0, 0, w, h);
		  cropRect.x = x;
		  cropRect.y = y;
		  cropRect.graphics.command.w = w;
		  cropRect.graphics.command.h = h;
		}
		
		function updateHandles() {
		  const x = cropRect.x, y = cropRect.y;
		  const w = cropRect.graphics.command.w;
		  const h = cropRect.graphics.command.h;
		  handles[0].x = x - handleSize / 2;
		  handles[0].y = y - handleSize / 2;
		  handles[1].x = x + w - handleSize / 2;
		  handles[1].y = y - handleSize / 2;
		  handles[2].x = x - handleSize / 2;
		  handles[2].y = y + h - handleSize / 2;
		  handles[3].x = x + w - handleSize / 2;
		  handles[3].y = y + h - handleSize / 2;
		}
		
		// 缩放输入
		document.getElementById("scaleInput").addEventListener("input", () => {
		  scale = parseFloat(document.getElementById("scaleInput").value) || 1;
		  if (refBitmap) {
		    refBitmap.scaleX = scale;
		    refBitmap.scaleY = scale;
		    stage.update();
		  }
		});
		
		// 载入参考图
		document.getElementById("refImageInput").addEventListener("change", e => {
		  const file = e.target.files[0];
		  if (!file) return;
		  scale = parseFloat(document.getElementById("scaleInput").value) || 1;
		
		  const reader = new FileReader();
		  reader.onload = evt => {
		    const img = new Image();
		    img.onload = () => {
		      stage.removeAllChildren();
		      handles = [];
		      refBitmap = new createjs.Bitmap(img);
		      refBitmap.scaleX = scale;
		      refBitmap.scaleY = scale;
		      stage.addChild(refBitmap);
		      createCropBox(100, 100, 200, 200);
		    };
		    img.src = evt.target.result;
		  };
		  reader.readAsDataURL(file);
		});
		
		// 确认裁剪
		document.getElementById("confirmCrop").addEventListener("click", () => {
		  if (!cropRect || !refBitmap) return;
		  cropData = {
		    x: cropRect.x,
		    y: cropRect.y,
		    width:  cropRect.graphics.command.w,
		    height: cropRect.graphics.command.h,
		    scale: scale
		  };
		  alert("已锁定裁剪区域：" + JSON.stringify(cropData));
		
		  // 预览图
		  const imgSrc = refBitmap.image.src;
		  const img = new Image();
		  img.onload = () => {
		    const tempCanvas = document.createElement("canvas");
		    tempCanvas.width = cropData.width;
		    tempCanvas.height = cropData.height;
		    const ctx = tempCanvas.getContext("2d");
		    ctx.imageSmoothingEnabled = false;
		
		    ctx.drawImage(
		      img,
		      0, 0, img.width, img.height,
		      -cropData.x, -cropData.y,
		      img.width * scale,
		      img.height * scale
		    );
		    document.getElementById("previewImage").src = tempCanvas.toDataURL("image/png");
		  };
		  img.src = imgSrc;
		});
		
		// 批量裁剪
		document.getElementById("startBatchCrop").addEventListener("click", () => {
		  const files = document.getElementById("imageFolderInput").files;
		  if (!cropData || files.length === 0) {
		    alert("请先确认裁剪区域并选择文件夹！");
		    return;
		  }
		
		  for (let file of files) {
		    if (!file.type.startsWith("image/")) continue;
		
		    const reader = new FileReader();
		    reader.onload = evt => {
		      const img = new Image();
		      img.onload = () => {
		        const tempCanvas = document.createElement("canvas");
		        tempCanvas.width = cropData.width;
		        tempCanvas.height = cropData.height;
		        const ctx = tempCanvas.getContext("2d");
		        ctx.imageSmoothingEnabled = false;
		
		        ctx.drawImage(
		          img,
		          0, 0, img.width, img.height,
		          -cropData.x,
		          -cropData.y,
		          img.width * cropData.scale,
		          img.height * cropData.scale
		        );
		
		        tempCanvas.toBlob(blob => {
		          const link = document.createElement("a");
		          link.href = URL.createObjectURL(blob);
		          link.download = file.name.replace(/\.[^/.]+$/, "") + "_crop.png";
		          link.click();
		        }, "image/png");
		      };
		      img.src = evt.target.result;
		    };
		    reader.readAsDataURL(file);
		  }
		});
		
		// 启动动画刷新
		createjs.Ticker.framerate = 30;
		createjs.Ticker.addEventListener("tick", stage);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '008896D7CD5D4E45B14E0F4A3F7228C8',
	width: 800,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['008896D7CD5D4E45B14E0F4A3F7228C8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;