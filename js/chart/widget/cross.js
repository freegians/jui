jui.define("chart.widget.cross", [ "util.base" ], function(_) {

    var CrossWidget = function(chart, widget) {
        var self = this;
        var tw = 50, th = 18, ta = tw / 10; // 툴팁 넓이, 높이, 앵커 크기
        var g, xline, yline, xTooltip, yTooltip;
        var tspan = [];

        function printTooltip(index, text, message) {
            if(!tspan[index]) {
                var elem = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                text.element.appendChild(elem);
                tspan[index] = elem;
            }

            tspan[index].textContent = message;
        }

        this.drawBefore = function() {
            g = chart.svg.group({
                visibility: "hidden"
            }, function() {
                // 포맷 옵션이 없을 경우, 툴팁을 생성하지 않음
                if(_.typeCheck("function", widget.yFormat)) {
                    xline = chart.svg.line({
                        x1: 0,
                        y1: 0,
                        x2: chart.width(),
                        y2: 0,
                        stroke: chart.theme("crossBorderColor"),
                        "stroke-width": chart.theme("crossBorderWidth"),
                        opacity: chart.theme("crossBorderOpacity")
                    });

                    yTooltip = chart.svg.group({}, function () {
                        chart.svg.polygon({
                            fill: chart.theme("crossBalloonBackgroundColor"),
                            "fill-opacity": chart.theme("crossBalloonOpacity"),
                            points: self.balloonPoints("left", tw, th, ta)
                        });

                        chart.svg.text({
                            "font-family": chart.theme("fontFamily"),
                            "font-size": chart.theme("crossBalloonFontSize"),
                            "fill": chart.theme("crossBalloonFontColor"),
                            "text-anchor": "middle",
                            x: tw / 2,
                            y: 12
                        });
                    }).translate(-(tw + ta), 0);
                }

                if(_.typeCheck("function", widget.xFormat)) {
                    yline = chart.svg.line({
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: chart.height(),
                        stroke: chart.theme("crossBorderColor"),
                        "stroke-width": chart.theme("crossBorderWidth"),
                        opacity: chart.theme("crossBorderOpacity")
                    });

                    xTooltip = chart.svg.group({}, function () {
                        chart.svg.polygon({
                            fill: chart.theme("crossBalloonBackgroundColor"),
                            "fill-opacity": chart.theme("crossBalloonOpacity"),
                            points: self.balloonPoints("bottom", tw, th, ta)
                        });

                        chart.svg.text({
                            "font-family": chart.theme("fontFamily"),
                            "font-size": chart.theme("crossBalloonFontSize"),
                            "fill": chart.theme("crossBalloonFontColor"),
                            "text-anchor": "middle",
                            x: tw / 2,
                            y: 17
                        });
                    }).translate(0, chart.height() + ta);
                }
            }).translate(chart.x(), chart.y());
        }

        this.draw = function() {
            this.on("chart.mouseover", function(e) {
                g.attr({ visibility: "visible" });
            });

            this.on("chart.mouseout", function(e) {
                g.attr({ visibility: "hidden" });
            });

            this.on("chart.mousemove", function(e) {
                var left = e.chartX + 2,
                    top = e.chartY + 2,
                    brush = self.getBrush(0);

                if(xline) {
                    xline.attr({
                        y1: top,
                        y2: top
                    });
                }

                if(yline) {
                    yline.attr({
                        x1: left,
                        x2: left
                    });
                }

                // 포맷 옵션이 없을 경우, 처리하지 않음
                if (yTooltip) {
                    yTooltip.translate(-(tw + ta), top - (th / 2));

                    var value = brush.y.invert(top),
                        message = widget.yFormat.call(self.chart, value);
                    printTooltip(0, yTooltip.get(1), message);
                }

                if (xTooltip) {
                    xTooltip.translate(left - (tw / 2), chart.height() + ta);

                    var value = brush.x.invert(left),
                        message = widget.xFormat.call(self.chart, value);
                    printTooltip(1, xTooltip.get(1), message);
                }
            });

            return g;
        }

        this.drawSetup = function() {
            return this.getOptions({
                xFormat: null,
                yFormat: null
            });
        }
    }

    return CrossWidget;
}, "chart.widget.core");