# socialShareSVGbranded
Work flow to generate social sharing svg buttons with branding colors

## Contents

- [Facebook (share dialog)](#facebook)
- [Twitter](#twitter)
- [Google+](#googleplus)
- [Pinterest](#pinterest)
- [Linked In](#linkedin)
- [Buffer](#buffer)
- [Digg](#digg)
- [Tumblr](#tumblr)
- [Reddit](#reddit)
- [StumbleUpon](#stumbleupon)
- [Delicious](#delicious)
- [Delicious](#delicious)
- [Blogger](#blogger)
- [LiveJournal](#livejournal)
- [Facebook Messenger](#messenger)
- [MySpace](#myspace)
- [Yahoo](#yahoo)
- [Hacker News](#ycombinator)
- [NewsVine](#newsvine)
- [EverNote](#evernote)
- [GetPocket](#pocket)
- [FlipBoard](#flipboard)
- [InstaPaper](#instapaper)
- [Slashdot](#slashdot)
- [LineMe](#line)
- [Skype](#skype)
- [Viber](#viber)
- [WhatsApp](#whatsapp)
- [Telegram.me](#telegram)
- [Vkontakte](#vk)
- [OK.ru](#odnoklassniki)
- [Douban](#douban)
- [E-mail](#email)
- [Baidu](#baidu)
- [Xing](#xing)
- [RenRen](#renren)
- [Weibo](#sinaweibo)

## Facebook (share dialog)
- host:  www.facebook.com
- color: #3b5998
- Branding Information:  <https://www.facebookbrand.com>
- Hover title:  Share on Facebook
- Parameters:
  -  URL:  href
  -  APP_ID:  app_id
  -  MISC:  display=page&redirect_uri=%7Bredirect_url%7D

Example:
```html
https://www.facebook.com/dialog/share?app_id={app_id}&display=page&href={url}&redirect_uri={redirect_url}
```

## Twitter
- host:  twitter.com
- color: #1da1f2
- Branding Information:  <https://brand.twitter.com>
- Hover title:  Tweet this on Twitter
- Parameters:
  -  URL:  url
  -  TITLE:  text
  -  HASHTAGS:  hashtags

Example:
```html
https://twitter.com/intent/tweet?url={url}&text={title}&via={via}&hashtags={hashtags}
```

## Google+
- host:  plus.google.com
- color: #dc4e41
- Branding Information:  <https://developers.google.com/+/branding-guidelines>
- Hover title:  +1 on Google+
- Parameters:
  -  URL:  url

Example:
```html
https://plus.google.com/share?url={url}
```

## Pinterest
- host:  pinterest.com
- color: #bd081c
- Branding Information:  <https://business.pinterest.com/en/brand-guidelines>
- Hover title:  Pin it on Pinterest
- Parameters:
  -  URL:  url
  -  TITLE:  description
  -  IMAGE:  media
  -  MISC:  is_video=false

Example:
```html
https://pinterest.com/pin/create/bookmarklet/?media={img}&url={url}&is_video=false&description={title}
```

## Linked In
- host:  www.linkedin.com
- color: #0077b5
- Branding Information:  <https://brand.linkedin.com>
- Hover title:  Post to LinkedIn
- Parameters:
  -  URL:  url
  -  TITLE:  title
  -  MISC:  mini=true

Example:
```html
https://www.linkedin.com/shareArticle?url={url}&title={title}&mini=true
```

## Buffer
- host:  buffer.com
- color: #168eea
- Branding Information:  <https://buffer.com/press>
- Hover title:  Queue up on Buffer
- Parameters:
  -  URL:  url
  -  TITLE:  text

Example:
```html
https://buffer.com/add?text={title}&url={url}
```

## Digg
- host:  digg.com
- color: #000000
- Branding Information:  <https://en.wikipedia.org/wiki/Digg>
- Hover title:  Submit to Digg
- Parameters:
  -  URL:  url
  -  TITLE:  title

Example:
```html
http://digg.com/submit?url={url}&title={title}
```

## Tumblr
- host:  www.tumblr.com
- color: #36465d
- Branding Information:  <https://www.tumblr.com/logo>
- Hover title:  Share on Tumblr
- Parameters:
  -  URL:  canonicalUrl
  -  TITLE:  title
  -  DESCRIPTION:  caption

Example:
```html
https://www.tumblr.com/widgets/share/tool?canonicalUrl={url}&title={title}&caption={desc}
```

## Reddit
- host:  reddit.com
- color: #ff4500
- Branding Information:  <https://worldvectorlogo.com/logo/reddit-2>
- Hover title:  Post to Reddit
- Parameters:
  -  URL:  url
  -  TITLE:  title

Example:
```html
https://reddit.com/submit?url={url}&title={title}
```

## StumbleUpon
- host:  www.stumbleupon.com
- color: #eb4924
- Branding Information:  <http://corp.stumbleupon.com/press>
- Hover title:  Post to StumbleUpon
- Parameters:
  -  URL:  url
  -  TITLE:  title

Example:
```html
http://www.stumbleupon.com/submit?url={url}&title={title}
```

## Delicious
- host:  delicious.com
- color: #3399ff
- Branding Information:  <https://en.wikipedia.org/wiki/Delicious_(website)>
- Hover title:  Save this on Delicious
- Parameters:
  -  URL:  url
  -  TITLE:  title
  -  MISC:  v=5&provider=%7Bprovider%7D&noui=&jump=close

Example:
```html
https://delicious.com/save?v=5&provider={provider}&noui&jump=close&url={url}&title={title}
```

## Delicious
- host:  delicious.com
- color: #3399ff
- Branding Information:  <https://en.wikipedia.org/wiki/Delicious_(website)>
- Hover title:  Save this on Delicious
- Parameters:
  -  URL:  url
  -  TITLE:  title

Example:
```html
http://delicious.com/save?url={url}&title={title}
```

## Blogger
- host:  www.blogger.com
- color: #f38936
- Branding Information:  <https://www.blogger.com>
- Hover title:  Share on Blogger
- Parameters:
  -  URL:  u
  -  TITLE:  n
  -  DESCRIPTION:  t

Example:
```html
https://www.blogger.com/blog-this.g?u={url}&n={title}&t={desc}
```

## LiveJournal
- host:  www.livejournal.com
- color: #00b0ea
- Branding Information:  <http://www.livejournal.com>
- Hover title:  Share on LiveJournal
- Parameters:
  -  URL:  event
  -  TITLE:  subject

Example:
```html
http://www.livejournal.com/update.bml?subject={title}&event={url}
```

## Facebook Messenger
- host:  share
- color: #0084ff
- Branding Information:  <https://worldvectorlogo.com/logo/facebook-messenger>
- Hover title:  Send via Messenger
- Parameters:
  -  URL:  link
  -  APP_ID:  app_id

Example:
```html
fb-messenger://share?link={url}&app_id={app_id}
```

## MySpace
- host:  myspace.com
- color: #030303
- Branding Information:  <https://myspace.com/pressroom/assetslogos>
- Hover title:  Share on Myspace
- Parameters:
  -  URL:  u
  -  TITLE:  t
 -  DESCRIPTION:  c

Example:
```html
https://myspace.com/post?u={url}&t={title}&c={desc}
```

## Yahoo
- host:  compose.mail.yahoo.com
- color: #440099
- Branding Information:  <https://en.wikipedia.org/wiki/Yahoo!>
- Hover title:  Share on Yahoo!
- Parameters:
  -  URL:  body

Example:
```html
http://compose.mail.yahoo.com/?body={url}
```

## Hacker News
- host:  news.ycombinator.com
- color: #f0652f
- Branding Information:  <https://www.ycombinator.com/press/>
- Hover title:  Share on Y Combinator
- Parameters:
  -  URL:  u
  -  TITLE:  t

Example:
```html
http://news.ycombinator.com/submitlink?u={url}&t={title}
```

## NewsVine
- host:  www.newsvine.com
- color: #116600
- Branding Information:  <https://www.newsvine.com/_tps/about/code>
- Hover title:  Share on NewsVine
- Parameters:
  -  URL:  u

Example:
```html
http://www.newsvine.com/_tools/seed&save?u={url}
```

## EverNote
- host:  www.evernote.com
- color: #2dbe60
- Branding Information:  <https://evernote.com/brand/color-palette/>
- Hover title:  Share on Evernote
- Parameters:
  -  URL:  url

Example:
```html
http://www.evernote.com/clip.action?url={url}
```

## GetPocket
- host:  getpocket.com
- color: #ef3f56
- Branding Information:  <https://getpocket.com/blog/press/>
- Hover title:  Pocket Pocket
- Parameters:
  -  URL:  url
  -  TITLE:  title

Example:
```html
https://getpocket.com/save?url={url}&title={title}
```

## FlipBoard
- host:  share.flipboard.com
- color: #e12828
- Branding Information:  <https://about.flipboard.com/brand-guidelines>
- Hover title:  Share on Flipboard
- Parameters:
  -  URL:  url
  -  TITLE:  title
  -  MISC:  v=2

Example:
```html
https://share.flipboard.com/bookmarklet/popout?v=2&title={title}&url={url}
```

## InstaPaper
- host:  www.instapaper.com
- color: #1f1f1f
- Branding Information:  <>
- Hover title:  Share on Instapaper
- Parameters:
  -  URL:  url
  -  TITLE:  title
  -  DESCRIPTION:  description

Example:
```html
http://www.instapaper.com/edit?url={url}&title={title}&description={desc}
```

## Slashdot
- host:  slashdot.org
- color: #026664
- Branding Information:  <https://commons.wikimedia.org/wiki/File:Slashdot_wordmark_and_logo.svg>
- Hover title:  Share on Slashdot
- Parameters:
  -  URL:  url
  -  TITLE:  title






Example:
```html
http://slashdot.org/bookmark.pl?url={url}&title={title}
```

## LineMe
- host:  line.me
- color: #00c300
- Branding Information:  <http://line.me/en/logo>
- Hover title:  LINE Line
- Parameters:
  -  MISC:  %7Burl%7D=

Example:
```html
http://line.me/R/msg/text?{url}
```

## Skype
- host:  web.skype.com
- color: #00aff0
- Branding Information:  <http://blogs.skype.com/?attachment_id=56273>
- Hover title:  Share on Skype
- Parameters:
  -  URL:  url

Example:
```html
https://web.skype.com/share?url={url}
```

## Viber
- host:  forward
- color: #7c529e
- Branding Information:  <http://www.viber.com/en/media-kit>
- Hover title:  Share on Viber
- Parameters:
  -  URL:  text

Example:
```html
viber://forward?text={url}
```

## WhatsApp
- host:  send
- color: #25d366
- Branding Information:  <https://www.whatsappbrand.com>
- Hover title:  Share on WhatsApp
- Parameters:
  -  URL:  text

Example:
```html
whatsapp://send?text={url}
```

## Telegram.me
- host:  telegram.me
- color: #2ca5e0
- Branding Information:  <https://commons.wikimedia.org/wiki/File:Telegram_alternative_logo.svg>
- Hover title:  Share on Telegram
- Parameters:
  -  URL:  url
  -  TITLE:  text

Example:
```html
https://telegram.me/share/url?url={url}&text={title}
```

## Vkontakte
- host:  vk.com
- color: #6383a8
- Branding Information:  <https://vk.com/about>
- Hover title:  Share on VK
- Parameters:
  -  URL:  url
  -  TITLE:  title
  -  DESCRIPTION:  description
  -  IMAGE:  image

Example:
```html
http://vk.com/share.php?url={url}&title={title}&description={desc}&image={img}
```

## OK.ru
- host:  connect.ok.ru
- color: #f4731c
- Branding Information:  <http://v.ok.ru/logo.html>
- Hover title:  Share on Odnoklassniki
- Parameters:
  -  URL:  st.shareUrl
  -  TITLE:  title
  -  MISC:  st.cmd=WidgetSharePreview

Example:
```html
https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl={url}&title={title}
```

## Douban
- host:  www.douban.com
- color: #007711
- Branding Information:  <https://www.douban.com/about?link=2us>
- Hover title:  Share on Douban
- Parameters:
  -  URL:  url
  -  TITLE:  title

Example:
```html
http://www.douban.com/recommend/?url={url}&title={title}
```

## E-mail
- host:  example.com
- color: #0166ff
- Branding Information:  <http://www.email.com>
- Hover title:  Send via E-mail
- Parameters:
  -  URL:  body
  -  TITLE:  subject

Example:
```html
mailto:{someone@example.com}?subject={title}&body={url}
```

## Baidu
- host:  cang.baidu.com
- color: #2319dc
- Branding Information:  <https://en.wikipedia.org/wiki/File:Baidu.svg>
- Hover title:  Share on Baidu
- Parameters:
  -  URL:  iu
  -  TITLE:  it

Example:
```html
http://cang.baidu.com/do/add?it={title}&iu={url}
```

## Xing
- host:  www.xing.com
- color: #005a5f
- Branding Information:  <https://worldvectorlogo.com/logo/xing-icon>
- Hover title:  Share on Xing
- Parameters:
  -  URL:  url
  -  MISC:  op=share

Example:
```html
https://www.xing.com/app/user?op=share&url={url}
```

## RenRen
- host:  widget.renren.com
- color: #005eac
- Branding Information:  <https://en.wikipedia.org/wiki/Renren#/media/File:Renren.png>
- Hover title:  Share on Ren Ren
- Parameters:
  -  URL:  srcUrl
  -  TITLE:  title

Example:
```html
http://widget.renren.com/dialog/share?resourceUrl={url}&srcUrl={url}&title={title}
```

## Weibo
- host:  service.weibo.com
- color: #e6162d
- Branding Information:  <https://en.wikipedia.org/wiki/Sina_Weibo>
- Hover title:  Share on Sina Weibo
- Parameters:
  -  URL:  url
  -  TITLE:  title
  -  MISC:  appkey=&pic=&ralateUid=

Example:
```html
http://service.weibo.com/share/share.php?url={url}&appkey=&title={title}&pic=&ralateUid=
```
