jui.define("chart.theme.pastel", [], function() {
	var themeColors = [
		"#73e9d2",
		"#fef92c",
		"#ff9248",
		"#b7eef6",
		"#08c4e0",
		"#ffb9ce",
		"#ffd4ba",
		"#14be9d",
		"#ebebeb",
		"#666666",
		"#cdbfe3",
		"#bee982",
		"#c22269"
	];

	return {
		// common styles
		backgroundColor : "white",
		fontSize : "11px",
		fontColor : "#333333",
		fontFamily : "Caslon540BT-Regular,Times,New Roman,serif",
		colors : themeColors,

		// grid styles
		gridFontColor : "#333333",
		gridActiveFontColor : "#ff7800",
		gridBorderColor : "#bfbfbf",
		gridBorderWidth : 1,
		gridBorderDashArray : "1, 3",
		gridAxisBorderColor : "#bfbfbf",
		gridAxisBorderWidth : 1,
		gridActiveBorderColor : "#ff7800",
		gridActiveBorderWidth : 1,

		// brush styles
		tooltipPointRadius : 5, // common
		tooltipPointBorderWidth : 1, // common
		tooltipPointFontWeight : "bold", // common
		barBorderColor : "none",
		barBorderWidth : 0,
		barBorderOpacity : 0,
		barActiveBackgroundColor : "#ffb9ce",
		barCircleBorderColor : "#ebebeb",
		barDisableBackgroundOpacity : 0.5,
		gaugeBackgroundColor : "#f5f5f5",
        gaugeArrowColor : "gray",
		gaugeFontColor : "#666666",
		pieBorderColor : "white",
		pieBorderWidth : 1,
		donutBorderColor : "white",
		donutBorderWidth : 3,
		areaBackgroundOpacity : 0.4,
		areaSplitBackgroundColor : "#ebebeb",
		bubbleBackgroundOpacity : 0.5,
		bubbleBorderWidth : 1,
		candlestickBorderColor : "#14be9d",
		candlestickBackgroundColor : "#14be9d",
		candlestickInvertBorderColor : "#ff4848",
		candlestickInvertBackgroundColor : "#ff4848",
        ohlcBorderColor : "#14be9d",
        ohlcInvertBorderColor : "#ff4848",
        ohlcBorderRadius : 5,
		lineBorderWidth : 2,
		lineDisableBorderOpacity : 0.3,
		lineCircleBorderColor : "white",
		lineSplitBorderColor : null,
		lineSplitBorderOpacity : 0.5,
		pathBackgroundOpacity : 0.5,
		pathBorderWidth : 1,
		scatterBorderColor : "white",
		scatterBorderWidth : 1,
		scatterHoverColor : "white",
		waterfallBackgroundColor : "#73e9d2",
		waterfallInvertBackgroundColor : "#ffb9ce",
		waterfallEdgeBackgroundColor : "#08c4e0",
		waterfallLineColor : "#a9a9a9",
		waterfallLineDashArray : "0.9",
		focusBorderColor : "#FF7800",
		focusBorderWidth : 1,
		focusBackgroundColor : "#FF7800",
		focusBackgroundOpacity : 0.1,

        // widget styles
        titleFontColor : "#333",
        titleFontSize : "18px",
		titleFontWeight : "normal",
        legendFontColor : "#333",
        legendFontSize : "11px",
        tooltipFontColor : "#fff",
        tooltipFontSize : "12px",
        tooltipBackgroundColor : "black",
        tooltipBorderColor : "black",
		tooltipBackgroundOpacity : 0.7,
		scrollBackgroundColor :	"#f5f5f5",
		scrollThumbBackgroundColor : "#b2b2b2",
		scrollThumbBorderColor : "#9f9fa4",
		zoomBackgroundColor : "red",
		zoomFocusColor : "gray",
		crossBorderColor : "#a9a9a9",
		crossBorderWidth : 1,
		crossBorderOpacity : 0.8,
		crossBalloonFontSize : "11px",
		crossBalloonFontColor :	"white",
		crossBalloonBackgroundColor : "black",
		crossBalloonBackgroundOpacity : 0.7,
		pinBorderColor : "#FF7800",
		pinBorderWidth : 0.7
	}
}); 