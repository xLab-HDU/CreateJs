(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"走马灯_atlas_1", frames: [[0,0,800,800],[0,802,800,800],[802,0,800,800]]}
];


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



(lib.九宫格抽奖_选框800X800 = function() {
	this.initialize(ss["走马灯_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.九宫格抽奖_按钮800X800 = function() {
	this.initialize(ss["走马灯_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.九宫格抽奖_底图800X800 = function() {
	this.initialize(ss["走马灯_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.light = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 灯带
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,209,64,0.949)").s().p("AgNBaIgBgFQhVgKAFhjIAAgKQBvh6BMCPQACAEAAAFQgEBfheAAIgKgBg");
	this.shape.setTransform(635.4861,761.456);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(240,212,65,0.965)").s().p("AgJBdQhSgOAChfIAAgKQBbiFBVCGQADAEAAAFQAGBphgAEIgJAAg");
	this.shape_1.setTransform(47.0163,640.7061);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(242,213,65,0.969)").s().p("AhegUIAAgKQBnh5BUCEQACAEAAAFQgBBchZAGIgJABQhbgJABhkg");
	this.shape_2.setTransform(47.4995,400.1247);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(245,216,66,0.98)").s().p("AgTBaQhKgVAEhiIAAgKQBihpBPB0QACAEAAAFQAEBrhnACIgKAAg");
	this.shape_3.setTransform(46.9929,280.0113);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(244,215,66,0.976)").s().p("AgSBaIAAgFQhTgIAMhlIABgKQBghzBQB+QADAEAAAFQAEBohhAAIgQAAg");
	this.shape_4.setTransform(164.9056,38.5448);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(242,214,66,0.973)").s().p("AhZgQIAAgKQBciEBUCFQADAEAAAFQAEBnheAFIgJABQhSgNAChgg");
	this.shape_5.setTransform(400.0078,38.7311);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(242,214,65,0.969)").s().p("EgAIA58IgKAAQhEgbAHhnIABgKQBuhoBDCHQACAEAAAFQgCBkhkAAIgHAAgEglAA58QhIgYAChgIAAgKQBsh6BGCPQACAEAAAFQAABkhkAAIgKAAgEASJA53IAAgFQhRgKAKhkIABgKQByh/BACdQACAFAAAFQgGBVhWAAIgSAAgEgSkA5zIgKgBQhKgRANhnIABgKQBxhrBBCKQACAEAAAFQgLBehGAAQgOAAgPgDgEgmAATjQgXgWAHgzQAeg8BQgKIAKAAQBXAhgaBhIgBAKQgqAqgqAAQgoAAgogngEgBYg4vIAAgKQBciEBUCFQADAEAAAFQAFBkhVAJIgKABQhcgHADhngEAkkg3KIgJgBQhLgPAOhpIABgKQB2hsA8CUQACAFAAAFQgMBVhCAAQgPAAgSgEg");
	this.shape_6.setTransform(281.9284,400.232);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(243,215,66,0.973)").s().p("EAHrA4TIAAgKQA7hTA6AUQAjANAkAzQACAEAAAFQAABVhJAMIgRACIgKABQhZgGgBhegEgJfg3BIgBgFQhSgIAMhmIAAgKQBph4BJCNQACAEAAAFQAABfhbAAIgSAAg");
	this.shape_7.setTransform(694.8988,399.7414);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(244,216,66,0.98)").s().p("EA2sAnEIgKgBQg6gaAIheIAAgKQBwhtBCCMQACAEAAAFQgEBchhAAIgTgBgEg3TgkQIgKAAQhKgUAEhkIAAgKQBshtBGCCQACAEAAAFQACBkhiAAIgEAAg");
	this.shape_8.setTransform(399.9872,400.0682);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(241,213,65,0.969)").s().p("AgiBXIgKAAQg3gZAFhUIAAgKQBrh4BQCNQACAEAAAFQgGBbhhAAIgagCg");
	this.shape_9.setTransform(753.4543,520.334);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(241,213,65,0.965)").s().p("EASIA5+QhLgUAFhkIAAgKQBqh8BICRQACAEAAAFQgCBjhiABIgKAAgEA1mgATIAAgKIAIgIQBbhjBLBjIAOAUQACADAAAFQgBBehZAFIgKAAQhdgHADhmgEA22gRVQhKgVAEhjIAAgKQBrh8BHCRQACAEAAAFQgBBihjACIgKAAgEA1mglzIAAgKQBfiHBdCIQACAEAAAFQgBBfhZAEIgKABQhZgGgBhegEA1wg4tIAAgKQBeiCBeCEQACADAAAFQgEBbhNASIgJABQhmgDAChrgEg3yg3IIgJgBQgygZAAhLIAAgKQAdgzA+gRQAEgCAFAAQBZAQABBoIAAAKQgfA4g8AAQgSAAgWgFg");
	this.shape_10.setTransform(400,400);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,255,0,0.965)").s().p("EgSkA5+IgKAAQhEgbAHhnIABgKQBvhoBDCHQACAEAAAFQgCBkhlAAIgHAAgEASJA5+QhLgVAFhjIAAgKQBqh8BICRQACAEAAAFQgCBihiACIgKAAgEg3cA5+QhIgYAChgIAAgKQBsh6BGCPQACAEAAAFQAABkhkAAIgKAAgEgASA55IAAgFQhRgKAKhkIABgKQBxh/BACdQACAFAAAFQgGBWhVAAIgSgBgEAklA55IAAgFQhVgKAFhkIAAgKQBwh6BMCPQACAEAAAFQgFBfheAAIgLAAgEglAA51IgKgBQhKgRANhnIABgKQBxhrBBCKQACAEAAAFQgLBehGAAQgOAAgPgDgEA1xA4QIAAgKQBeiGBdCHQADAEAAAFQgBBehZAFIgKABQhagGAAhegEA2tAnEIgKAAQg7gbAIhdIABgKQBwhuBCCNQACAEAAAFQgFBbhgAAIgTgBgEg3SAnEQhSgOAChgIAAgKQBciFBVCGQADAEAAAFQAGBqhgAEIgKAAgEg4cATlQgXgWAHgzQAeg8BQgKIAKAAQBXAhgaBhIgBAKQgqAqgqAAQgoAAgogngEA2tAUKIgKAAQg4gZAFhVIABgKQBsh4BQCNQACAEAAAFQgHBchiAAIgZgCgEA1ngATIAAgKQBoh5BTCEQADAEAAAFQgBBdhZAFIgKABQhdgHADhmgEg4igATIAAgKQBnh5BUCEQADAEAAAFQgCBchYAGIgKABQhbgJABhkgEA23gRVQhKgWAEhiIAAgKQBqh8BICRQACAEAAAFQgCBihiACIgKAAgEg3cgRVQhLgVAFhjIAAgKQBjhpBOB0QADAEAAAFQADBshnACIgKAAgEg3SgkPIgKAAQhLgVAFhjIAAgKQBshuBGCDQACAEAAAFQACBkhiAAIgEAAgEA1nglzIAAgKQBfiHBcCIQADAEAAAFQgBBehZAFIgKABQhagGAAhegEA1xg4tIAAgKQBdiCBeCDQADAEAAAFQgEBbhNASIgJABQhmgDAChrgEgBYg4tIAAgKQBciEBUCFQADAEAAAFQAEBoheAFIgJABQhSgNAChhgEgT0g4tIAAgKQBdiEBUCFQADAEAAAFQAFBkhVAJIgKABQhdgHADhngEg3xg3IIgJgBQgygaAAhKIAAgKQAdgzA9gSQAFgBAFAAQBYAQACBoIAAAKQggA4g7AAQgTAAgVgFgEAklg3EIAAgFQhTgIAMhmIABgKQBph4BJCNQACAEAAAFQAABghcAAIgSgBgEglAg3EIAAgFQhTgIAMhmIABgKQBhhzBQB+QADAEAAAFQADBqhhAAIgQgBgEASIg3IIgJgBQhLgPAOhpIABgKQB2hsA8CUQACAFAAAFQgMBVhCAAQgPAAgSgEg");
	this.shape_11.setTransform(399.9284,400.0057);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,0,153,0.965)").s().p("EgSkA5+IgKAAQhEgbAHhnIABgKQBvhoBDCHQACAEAAAFQgCBkhlAAIgHAAgEASJA5+QhLgVAFhjIAAgKQBqh8BICRQACAEAAAFQgCBihiACIgKAAgEg3cA5+QhIgYAChgIAAgKQBsh6BGCPQACAEAAAFQAABkhkAAIgKAAgEgASA55IAAgFQhRgKAKhkIABgKQBxh/BACdQACAFAAAFQgGBWhVAAIgSgBgEAklA55IAAgFQhVgKAFhkIAAgKQBwh6BMCPQACAEAAAFQgFBfheAAIgLAAgEglAA51IgKgBQhKgRANhnIABgKQBxhrBBCKQACAEAAAFQgLBehGAAQgOAAgPgDgEA1xA4QIAAgKQBeiGBdCHQADAEAAAFQgBBehZAFIgKABQhagGAAhegEA2tAnEIgKAAQg7gbAIhdIABgKQBwhuBCCNQACAEAAAFQgFBbhgAAIgTgBgEg3SAnEQhSgOAChgIAAgKQBciFBVCGQADAEAAAFQAGBqhgAEIgKAAgEg4cATlQgXgWAHgzQAeg8BQgKIAKAAQBXAhgaBhIgBAKQgqAqgqAAQgoAAgogngEA2tAUKIgKAAQg4gZAFhVIABgKQBsh4BQCNQACAEAAAFQgHBchiAAIgZgCgEA1ngATIAAgKQBoh5BTCEQADAEAAAFQgBBdhZAFIgKABQhdgHADhmgEg4igATIAAgKQBnh5BUCEQADAEAAAFQgCBchYAGIgKABQhbgJABhkgEA23gRVQhKgWAEhiIAAgKQBqh8BICRQACAEAAAFQgCBihiACIgKAAgEg3cgRVQhLgVAFhjIAAgKQBjhpBOB0QADAEAAAFQADBshnACIgKAAgEg3SgkPIgKAAQhLgVAFhjIAAgKQBshuBGCDQACAEAAAFQACBkhiAAIgEAAgEA1nglzIAAgKQBfiHBcCIQADAEAAAFQgBBehZAFIgKABQhagGAAhegEA1xg4tIAAgKQBdiCBeCDQADAEAAAFQgEBbhNASIgJABQhmgDAChrgEgBYg4tIAAgKQBciEBUCFQADAEAAAFQAEBoheAFIgJABQhSgNAChhgEgT0g4tIAAgKQBdiEBUCFQADAEAAAFQAFBkhVAJIgKABQhdgHADhngEg3xg3IIgJgBQgygaAAhKIAAgKQAdgzA9gSQAFgBAFAAQBYAQACBoIAAAKQggA4g7AAQgTAAgVgFgEAklg3EIAAgFQhTgIAMhmIABgKQBph4BJCNQACAEAAAFQAABghcAAIgSgBgEglAg3EIAAgFQhTgIAMhmIABgKQBhhzBQB+QADAEAAAFQADBqhhAAIgQgBgEASIg3IIgJgBQhLgPAOhpIABgKQB2hsA8CUQACAFAAAFQgMBVhCAAQgPAAgSgEg");
	this.shape_12.setTransform(399.9284,400.0057);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.9,29,726.1,742);


(lib.maDeng = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.九宫格抽奖_选框800X800();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.maDeng, new cjs.Rectangle(0,0,800,800), null);


(lib.button = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.九宫格抽奖_按钮800X800();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(0,0,800,800), null);


// stage content:
(lib.走马灯 = function(mode,startPosition,loop,reversed) {
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
		var STEP = 216;//每次移动的像素步长
		var detaX = 0;//左上角坐标X
		var detaY = 0;//左上角坐标Y
		var col = 3;//列
		var row = 3;//行
		var totalGrid = 0;//总格子数量
		var currentGrid = 0;//当前所在格子序号
		var targetGrid = 0;//目标格子序号
		
		var round = 0;//总圈数
		var totalStep = 0;//本轮需要走的总步数
		var mStepCount = 0;//目前已经移动的步数
		var mStepCtrl = 0;//每次移动的帧间隔
		var mframeCtrl = 0;//目前已经经过的帧数
		var totalStepPer16 = 0;//总步数的1/16（用于后续的减速计算）
		var isStart = false;
		var stagePointer = this;//舞台对象引用
		
		var GridEnum = {
		    Dragen: 0,
		    Cow: 1,
		    Tiger: 2,
		    Monkey: 3,
		    Pig: 4,
		    Dog: 5,
		    Chick: 6,
		    Rabbit: 7,
		};
		var rndArray = [GridEnum.Dragen, GridEnum.Cow,
		    GridEnum.Tiger, GridEnum.Monkey, GridEnum.Pig,
		    GridEnum.Dog, GridEnum.Chick, GridEnum.Rabbit
		];
		var backupArray = structuredClone(rndArray);//结构化克隆
		
		var maDeng = new lib.maDeng();
		var btn = new lib.button();
		var light = new lib.light();
		this.addChild(maDeng);
		this.addChild(btn);
		this.addChild(light);
		maDeng.x = 0;
		maDeng.y = 0;
		
		btn.addEventListener("click",onStart.bind(this));
		this.addEventListener("tick",GameRule.bind(this));
		
		function onStart(){
			if(isStart == false){
				setParameters();
				isStart = true;
			}else{
				stopMove();
				isStart = false;
			}
		}
		function GameRule(){
			if(isStart == true)
				Run();
			else
				WaitRun();
		}
		function Run(){
			if(mframeCtrl % mStepCtrl ==0){
				Move();//移动马灯选框
				mStepCount++;
				slowSet();//减速设置
				//走完本轮的全部格子数
				if(totalStep == mStepCount){
					light.visible = true;
					isStart = false;
					mframeCtrl = 5000;
				}
			}
			mframeCtrl++;
		}
		function WaitRun(){
			if(mframeCtrl >= 5000){
				if(mframeCtrl == 5120){
					mframeCtrl = 0;
					onStart();//隔段时间自动开始抽奖
				}
			}else if(mframeCtrl % 12 ==0){
				Move();
				mStepCount++;
				mframeCtrl = 0;
			}
			mframeCtrl++;
		}
		
		function gridCalc(){
			totalGrid = 2*(col + row) - 4;
		}
		function setParameters(){
			round = 5;
			mStepCtrl = 2;
			gridCalc();//计算所有的格子数量
			currentGrid = mStepCount % totalGrid;//计算当前所在格子序号
			mStepCount = 0;
			//随机获取目标格子
			var tmp = Math.floor(Math.random() * rndArray.length);
			targetGrid = rndArray[tmp];
			rndArray.splice(tmp,1);
			//清空后重置数组
			if(rndArray.length == 0)
				rndArray = structuredClone(backupArray);
			//计算总共要走的格子数
			totalStep = round * totalGrid + targetGrid - currentGrid;
			//将总步数分为16份，作为后续减速设置的参考
			totalStepPer16 = totalStep / 16;
			//隐藏灯带
			light.visible = false;
			
		}
		
		function Move(){
			if(maDeng.x >= detaX && maDeng.x < detaX + (col - 1)*STEP && maDeng.y == detaY)
				dt =3;//在上方
			else if(maDeng.x == detaX + (col - 1) * STEP && maDeng.y >= detaY && maDeng.y < detaY + (row - 1) * STEP)
				dt = 2;//在右边
			else if(maDeng.x > detaX && maDeng.x <= detaX + (col - 1) * STEP && maDeng.y == detaY + (row - 1) * STEP)
				dt = 1;//在下方
			else if (maDeng.x == detaX && maDeng.y > detaY && maDeng.y <= detaY + (row - 1) * STEP)
				dt = 0;//在左边
			
			switch(dt){
				case 0:
					maDeng.y -= STEP;//在左边，上移
					break;
				case 1:
					maDeng.x -= STEP;//在下方，左移
					break;
				case 2:
					maDeng.y += STEP;//在右边，下移
					break;
				case 3:
					maDeng.x += STEP;//在上方，右移
			}
		maDeng.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 100, 0))];	
		maDeng.cache(0,0,300,300);
		}
		function stopMove(){
			light.visible = true;
		}
		function slowSet(){
			if(mStepCount == Math.floor(totalStepPer16 * 8))
				mStepCtrl = 2;
			if(mStepCount == Math.floor(totalStepPer16 * 12))
				mStepCtrl = 4;
			if(mStepCount == Math.floor(totalStepPer16 * 14))
				mStepCtrl = 8;
			if(mStepCount == Math.floor(totalStepPer16 * 15))
				mStepCtrl = 16;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 背景
	this.instance = new lib.九宫格抽奖_底图800X800();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(400,400,400,400);
// library properties:
lib.properties = {
	id: '96D0AF77A9FF9645BFBC959E234AFB22',
	width: 800,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/走马灯_atlas_1.png?1755168619837", id:"走马灯_atlas_1"}
	],
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
an.compositions['96D0AF77A9FF9645BFBC959E234AFB22'] = {
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