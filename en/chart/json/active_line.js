var chart = jui.include("chart.builder");

chart("#chart", {
    data : [
        { apple : 26.1, microsoft : 24.86, oracle : 22.08 },
        { apple : 43.83, microsoft : 27.14, oracle : 30.15 },
        { apple : 55.03, microsoft : 24, oracle : 36.88 },
        { apple : 72.95, microsoft : 25.39, oracle : 32.78 }
    ],
    grid : {
        x : {
            domain : [ "2010", "2011", "2012", "2013" ],
            line : true,
            full : true
        },
        y : {
            type : "range",
            target : [ "apple", "microsoft", "oracle" ],
            step : 10
        }
    },
    brush : {
        type : "line",
        display : "max",
        active : "microsoft",
        activeEvent : "click"
    },
    widget : [
    	{ type : "title", text : "Line Sample" },
    	{ type : "legend" }
    ]
});