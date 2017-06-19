(function() {
  function e(e) {
    return "#" + e.split(" ").join("").toLowerCase()
  }

  function t(e) {
    var t = (screen.width - 570) / 2,
      l = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + (screen.height - 570) / 2 + ",left=" + t;
    window.open(e, "NewWindow", l)
  }! function() {
    var l = encodeURIComponent(location.href),
      r = encodeURIComponent(document.title),
      o = document.getElementsByTagName("img")[0];
    o && (o = o.getAttribute("src"));
    n = document.querySelector("meta[name='description']");
    n = n ? n.getAttribute("content") : "";
    var n = encodeURIComponent(n),
      c = document.querySelector("meta[property='fb:app_id']");
    c && (c = c.getAttribute("content"));
    var u = document.querySelector("meta[property='twitter:site']");
    u && (u = u.getAttribute("content") || "");
    for (var a = [], i = document.querySelectorAll("meta[property='article:tag']"), s = 0; s < i.length; s++) a = a.push(e(i[s].getAttribute("content")));
    elements = document.querySelectorAll(".social-share.facebook"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://www.facebook.com/dialog/share?", url += "display=page&redirect_uri=%7Bredirect_url%7D", url += "&href=" + l, c && (url += "&app_id=" + c), t(url)
      })
    }), elements = document.querySelectorAll(".social-share.twitter"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://twitter.com/intent/tweet?", url += "&url=" + l, url += "&text=" + r, u && (url += "&via=" + u), a && (url += "&hashtags=" + a), t(url)
      })
    }), elements = document.querySelectorAll(".social-share.googleplus"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://plus.google.com/share?", url += "&url=" + l, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.pinterest"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://pinterest.com/pin/create/bookmarklet/?", url += "is_video=false", url += "&url=" + l, url += "&description=" + r, url += "&media=" + o, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.linkedin"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://www.linkedin.com/shareArticle?", url += "mini=true", url += "&url=" + l, url += "&title=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.buffer"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://buffer.com/add?", url += "&url=" + l, url += "&text=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.digg"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://digg.com/submit?", url += "&url=" + l, url += "&title=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.tumblr"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://www.tumblr.com/widgets/share/tool?", url += "&canonicalUrl=" + l, url += "&title=" + r, url += "&caption=" + n, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.reddit"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://reddit.com/submit?", url += "&url=" + l, url += "&title=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.stumbleupon"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://www.stumbleupon.com/submit?", url += "&url=" + l, url += "&title=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.delicious"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://delicious.com/save?", url += "v=5&provider=%7Bprovider%7D&noui=&jump=close", url += "&url=" + l, url += "&title=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.delicious"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://delicious.com/save?", url += "&url=" + l, url += "&title=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.blogger"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://www.blogger.com/blog-this.g?", url += "&u=" + l, url += "&n=" + r, url += "&t=" + n, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.livejournal"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://www.livejournal.com/update.bml?", url += "&event=" + l, url += "&subject=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.messenger"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "fb-messenger://share?", url += "&link=" + l, c && (url += "&app_id=" + c), t(url)
      })
    }), elements = document.querySelectorAll(".social-share.myspace"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://myspace.com/post?", url += "&u=" + l, url += "&t=" + r, url += "&c=" + n, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.yahoo"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://compose.mail.yahoo.com/?", url += "&body=" + l, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.ycombinator"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://news.ycombinator.com/submitlink?", url += "&u=" + l, url += "&t=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.newsvine"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://www.newsvine.com/_tools/seed&amp;save?", url += "&u=" + l, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.evernote"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://www.evernote.com/clip.action?", url += "&url=" + l, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.pocket"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://getpocket.com/save?", url += "&url=" + l, url += "&title=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.flipboard"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://share.flipboard.com/bookmarklet/popout?", url += "v=2", url += "&url=" + l, url += "&title=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.instapaper"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://www.instapaper.com/edit?", url += "&url=" + l, url += "&title=" + r, url += "&description=" + n, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.slashdot"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://slashdot.org/bookmark.pl?", url += "&url=" + l, url += "&title=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.line"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://line.me/R/msg/text?", url += "%7Burl%7D=", t(url)
      })
    }), elements = document.querySelectorAll(".social-share.skype"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://web.skype.com/share?", url += "&url=" + l, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.viber"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "viber://forward?", url += "&text=" + l, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.whatsapp"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "whatsapp://send?", url += "&text=" + l, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.telegram"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://telegram.me/share/url?", url += "&url=" + l, url += "&text=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.vk"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://vk.com/share.php?", url += "&url=" + l, url += "&title=" + r, url += "&description=" + n, url += "&image=" + o, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.odnoklassniki"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://connect.ok.ru/dk?", url += "st.cmd=WidgetSharePreview", url += "&st.shareUrl=" + l, url += "&title=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.douban"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://www.douban.com/recommend/?", url += "&url=" + l, url += "&title=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.email"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "mailto://example.com%7D?", url += "&body=" + l, url += "&subject=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.baidu"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://cang.baidu.com/do/add?", url += "&iu=" + l, url += "&it=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.xing"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "https://www.xing.com/app/user?", url += "op=share", url += "&url=" + l, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.renren"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://widget.renren.com/dialog/share?", url += "&srcUrl=" + l, url += "&title=" + r, t(url)
      })
    }), elements = document.querySelectorAll(".social-share.sinaweibo"), Array.prototype.forEach.call(elements, function(e) {
      e.addEventListener("click", function() {
        url = "http://service.weibo.com/share/share.php?", url += "appkey=&pic=&ralateUid=", url += "&url=" + l, url += "&title=" + r, t(url)
      })
    })
  }()
}).call(this);