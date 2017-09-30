(function() {

    var width, height, largeHeader, canvas, ctx, triangles, target, animateHeader = true;
    // var colors = ['239,154,154', '183,28,28'];
    var colors = ['62, 35, 255', '60, 255, 60', '255, 35, 98', '45, 175, 230', '255, 0, 255', '255, 128, 0'];


    if ($("#large-header").length > 0) {
        initHeader();
        addListeners();
        initAnimation();
    }

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {
            x: 0,
            y: height
        };

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height + 'px';

        canvas = document.getElementById('canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        triangles = [];
        for (var x = 0; x < 480; x++) {
            addTriangle(x * 10);
        }
    }

    function addTriangle(delay) {
        setTimeout(function() {
            var t = new Triangle();
            triangles.push(t);
            tweenTriangle(t);
        }, delay);
    }

    function initAnimation() {
        animate();
    }

    function tweenTriangle(tri) {
        var t = Math.random() * (2 * Math.PI);
        var x = (200 + Math.random() * 100) * Math.cos(t) + width * 0.5;
        var y = (200 + Math.random() * 100) * Math.sin(t) + height * 0.5 - 20;
        var time = 4 + 3 * Math.random();

        TweenLite.to(tri.pos, time, {
            x: x,
            y: y,
            ease: Circ.easeOut,
            onComplete: function() {
                tri.init();
                tweenTriangle(tri);
            }
        });
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if (document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height + 'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if (animateHeader) {
            ctx.clearRect(0, 0, width, height);
            for (var i in triangles) {
                triangles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Triangle() {
        var _this = this;

        // constructor
        (function() {
            _this.coords = [{}, {}, {}];
            _this.pos = {};
            init();
        })();

        function init() {
            _this.pos.x = width * 0.5;
            _this.pos.y = height * 0.5 - 20;
            _this.coords[0].x = -10 + Math.random() * 40;
            _this.coords[0].y = -10 + Math.random() * 40;
            _this.coords[1].x = -10 + Math.random() * 40;
            _this.coords[1].y = -10 + Math.random() * 40;
            _this.coords[2].x = -10 + Math.random() * 40;
            _this.coords[2].y = -10 + Math.random() * 40;
            _this.scale = 0.1 + Math.random() * 0.3;
            _this.color = colors[Math.floor(Math.random() * colors.length)];
            setTimeout(function() {
                _this.alpha = 0.8;
            }, 10);
        }

        this.draw = function() {
            if (_this.alpha >= 0.005) _this.alpha -= 0.005;
            else _this.alpha = 0;
            ctx.beginPath();
            ctx.moveTo(_this.coords[0].x + _this.pos.x, _this.coords[0].y + _this.pos.y);
            ctx.lineTo(_this.coords[1].x + _this.pos.x, _this.coords[1].y + _this.pos.y);
            ctx.lineTo(_this.coords[2].x + _this.pos.x, _this.coords[2].y + _this.pos.y);
            ctx.closePath();
            ctx.fillStyle = 'rgba(' + _this.color + ',' + _this.alpha + ')';
            ctx.fill();
        };

        this.init = init;
    }

})();


(function() {

    var colors = new Array([62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);

    var step = 0;
    var colorIndices = [0, 1, 2, 3];

    //transition speed
    var gradientSpeed = 0.002;

    function updateGradient() {

        if ($ === undefined) return;

        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

        $('.home_cover').css({
            background: "-webkit-gradient(linear, left top, right bottom, from(" + color1 + "), to(" + color2 + "))"
        }).css({
            background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
        });
        $('.page-header').css({
            background: "-webkit-gradient(linear, left top, right bottom, from(" + color1 + "), to(" + color2 + "))"
        }).css({
            background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
        });
        $('.top-bar').css({
            background: "-webkit-gradient(linear, left top, right bottom, from(" + color1 + "), to(" + color2 + "))"
        }).css({
            background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
        });

        step += gradientSpeed;
        if (step >= 1) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];
            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

        }
    }
    setInterval(updateGradient, 7);
})();

new WOW({ offset: 80 }).init();
var windowHeight = $(window).height();
var viewContentElement = $('.view-content');
var topNavElement = $('.top-nav');
var elementHeight = viewContentElement.height();
var elementOffsetTop = viewContentElement.offset().top;
var oldOffset = $(window).scrollTop();
$(document).on("scroll", function() {
    var windowScrollTop = $(window).scrollTop();
    if ((elementOffsetTop <= windowScrollTop + windowHeight) && (elementOffsetTop + elementHeight >= windowScrollTop) || (windowScrollTop < oldOffset)) {
        $(topNavElement).fadeIn();
    } else {
        $(topNavElement).fadeOut();
    }
    oldOffset = windowScrollTop;
})