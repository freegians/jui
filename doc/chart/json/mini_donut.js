var chart = jui.include("chart.builder");

chart("#chart", {
    width : 100,
    height : 50,
    padding : "empty",
    data : [
        { browser : "IE", share : 70 },
        { browser : "Firefox", share : 11 },
        { browser : "Chrome", share : 9 },
        { browser : "Safari", share : 6 },
        { browser : "Other", share : 4 }
    ],
    brush : {
        type : "donut",
        target : "share",
        size: 10
    }
});