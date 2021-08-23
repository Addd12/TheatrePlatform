<template>

    <body>
    <div class="container">
    <section class="u-align-center u-clearfix u-section-1" id="carousel_fbd9">
      <div class="container-new">
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1" v-for="(album, index) in albumModel" :key="index">
        <div class="u-container-style u-expanded-width u-product u-product-1">
          <div class="u-container-layout u-valign-middle-lg u-valign-middle-xl u-valign-top-sm u-valign-top-xs u-container-layout-1">
            <img alt="" class="u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-product-control u-image-1" v-bind:src="album.imgsrc">
            <br>
            <br>
            <br>
            <div class="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-shape-rectangle u-group-1">
              <div class="u-container-layout u-valign-middle u-container-layout-2">
                <div class="u-border-3 u-border-palette-4-base u-line u-line-horizontal u-line-1"></div>
                <h2 class="u-custom-font u-font-merriweather u-product-control u-text u-text-1">
                  <a class="u-product-title-link">{{album.title}}</a>
                  <hr>
                </h2>
                <div class="u-custom-font u-font-merriweather u-product-control u-product-price u-product-price-1">
                  <div class="u-price-wrapper u-spacing-10">
                    <div class="u-price u-text-palette-4-base" style="font-size: 1.5rem; font-weight: 700;">${{ album.albumPrice }}</div>
                    <br>
                    <div class="u-text-palette-4-base" style="font-size: 1.2rem; font-weight: 400; margin-left: -0.1px;">
                      <i class="fas fa-image" style="display: inline-block margin-right: 1em;;">{{ album.noOfpic }}</i>
                    </div>
                    <div class="u-text-palette-4-base" style="font-size: 1.2rem; font-weight: 400; margin-left: -0.1px;">
                      <i class="fas fa-video" style="display: inline-block margin-right: 1em;;">{{ album.noOfvid }}</i>
                    </div>
                  </div>
                </div>
                <div class="u-product-control u-product-desc u-text u-text-default u-text-2">
                  <p style="padding-right: 31px;">{{ album.description }}</p>
                </div>
                <br>
                <div class="u-price-wrapper u-spacing-10"> 
                  <div class="u-price u-text-palette-4-base" style="font-size: 0.9rem; font-weight: 800; margin-left: -0.1px; color: gray;">Category Type: {{ album.category }}</div>
                  <div class="u-price u-text-palette-4-base" style="font-size: 0.9rem; font-weight: 800;margin-left: -0.1px; color: gray;">Payment: {{ album.payment }}</div>
                  </div>

              </div>
            </div>
          </div>
        </div>
        </div>
        <br>
        <br>
</div>

<div class="container">
    <ul class="nav nav-tabs tabBtns" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" href="#addPost" role="tab" data-toggle="tab"><i class="far fa-image"></i> Photos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#addAlbum" role="tab" data-toggle="tab"><i class="fas fa-photo-video"></i> Videos</a>
      </li>
    </ul>
    <br>
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="addPost">
  <div class="column" v-for="(album, index) in albumModel" :key="index">
    <img alt="Snow" style="width:100%" v-bind:src="album.imgsrc">
  </div>
      </div>
      <div role="tabpanel" class="tab-pane fade" id="addAlbum">
      <div class="column" v-for="(album, index) in albumModel" :key="index">
        <video width="320" height="240" controls>
          <source src="https://www.youtube.com/watch?v=f9CPymNwkYw" type="video/mp4">
        </video>

      </div>
    </div>
  </div>
</div>


</section>

</div>



    </body>
</template>


<script>

// import ViewPhotos from './modules/viewPhotos';

export default {
  name: 'detailsPage',
  //     components: {
  //   'viewphoto-secreter': ViewPhotos
  // },
  data (){
    return {
      albumModel: [],
    };
  },
  mounted(){
    let testAlbum1 = {
      title: "A Summer Spent Seaside",
      noOfpic: 10,
      noOfvid: 5,
      noOfrct: 1,
      albumPrice: 20,
      crateTime: "3 minutes ago",
      imgsrc: 'http://sl.agilab.io/modules/demoimg/albumcover.jpg',
      description : "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. ",
      category: "Category 1",
      payment : "Paid"
    };
    
    this.albumModel.push(testAlbum1);


  },



}
</script>


<style scoped>

.container-new{
  background-color:#f2f3f4;
  /* margin-right: 275px;
  margin-left: 275px; */
}


#container-new .tabBtns a{
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  justify-content: center;
}
#container-new .tabBtns .active{
  color: #9500ae;
}

.fa-image:before{
  margin-right: 10px;
}

.fa-video:before{
  margin-right: 10px;
}

.row {
  display: flex;
}

.column {
  flex: 33.33%;
  padding: 5px;
}

.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

@media screen and (max-width: 500px) {
  .column {
    width: 100%;
  }
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.fr-clearfix::after {
  clear: both;
  display: block;
  content: "";
  height: 0; }

.fr-hide-by-clipping {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0; }

.fr-view img.fr-rounded, .fr-view .fr-img-caption.fr-rounded img {
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box; }

.fr-view img.fr-shadow, .fr-view .fr-img-caption.fr-shadow img {
  -webkit-box-shadow: 10px 10px 5px 0px #cccccc;
  -moz-box-shadow: 10px 10px 5px 0px #cccccc;
  box-shadow: 10px 10px 5px 0px #cccccc; }

.fr-view img.fr-bordered, .fr-view .fr-img-caption.fr-bordered img {
  border: solid 5px #CCC; }

.fr-view img.fr-bordered {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box; }

.fr-view .fr-img-caption.fr-bordered img {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; }

.fr-view {
  word-wrap: break-word; }
  .fr-view span[style~="color:"] a {
    color: inherit; }
  .fr-view strong {
    font-weight: 700; }
  .fr-view table {
    border: none;
    border-collapse: collapse;
    empty-cells: show;
    max-width: 100%; }
    .fr-view table td {
      min-width: 5px; }
    .fr-view table.fr-dashed-borders td, .fr-view table.fr-dashed-borders th {
      border-style: dashed; }
    .fr-view table.fr-alternate-rows tbody tr:nth-child(2n) {
      background: whitesmoke; }
    .fr-view table td, .fr-view table th {
      border: 1px solid #DDD; }
      .fr-view table td:empty, .fr-view table th:empty {
        height: 20px; }
      .fr-view table td.fr-highlighted, .fr-view table th.fr-highlighted {
        border: 1px double red; }
      .fr-view table td.fr-thick, .fr-view table th.fr-thick {
        border-width: 2px; }
    .fr-view table th {
      background: #ececec; }
  .fr-view hr {
    clear: both;
    user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    break-after: always;
    page-break-after: always; }
  .fr-view .fr-file {
    position: relative; }
    .fr-view .fr-file::after {
      position: relative;
      content: "\1F4CE";
      font-weight: normal; }
  .fr-view pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: visible; }
/*.fr-view[dir="rtl"] blockquote {
  border-left: none;
  border-right: solid 2px #5E35B1;
  margin-right: 0;
  padding-right: 5px;
  padding-left: 0; }
  .fr-view[dir="rtl"] blockquote blockquote {
    border-color: #00BCD4; }
    .fr-view[dir="rtl"] blockquote blockquote blockquote {
      border-color: #43A047; }
.fr-view blockquote {
  border-left: solid 2px #5E35B1;
  margin-left: 0;
  padding-left: 5px;
  color: #5E35B1; }
  .fr-view blockquote blockquote {
    border-color: #00BCD4;
    color: #00BCD4; }
    .fr-view blockquote blockquote blockquote {
      border-color: #43A047;
      color: #43A047; }*/
  .fr-view span.fr-emoticon {
    font-weight: normal;
    font-family: "Apple Color Emoji","Segoe UI Emoji","NotoColorEmoji","Segoe UI Symbol","Android Emoji","EmojiSymbols";
    display: inline;
    line-height: 0; }
    .fr-view span.fr-emoticon.fr-emoticon-img {
      background-repeat: no-repeat !important;
      font-size: inherit;
      height: 1em;
      width: 1em;
      min-height: 20px;
      min-width: 20px;
      display: inline-block;
      margin: -.1em .1em .1em;
      line-height: 1;
      vertical-align: middle; }
  .fr-view .fr-text-gray {
    color: #AAA !important; }
  .fr-view .fr-text-bordered {
    border-top: solid 1px #222;
    border-bottom: solid 1px #222;
    padding: 10px 0; }
  .fr-view .fr-text-spaced {
    letter-spacing: 1px; }
  .fr-view .fr-text-uppercase {
    text-transform: uppercase; }
  .fr-view .fr-class-highlighted {
    background-color: #ffff00; }
  .fr-view .fr-class-code {
    border-color: #cccccc;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    background: #f5f5f5;
    padding: 10px;
    font-family: "Courier New", Courier, monospace; }
  .fr-view .fr-class-transparency {
    opacity: 0.5; }
  .fr-view img {
    position: relative;
    max-width: 100%; }
    .fr-view img.fr-dib {
      margin: 10px auto;
      display: block;
      float: none;
      vertical-align: top; }
      .fr-view img.fr-dib.fr-fil {
        margin-left: 0;
        text-align: left; }
      .fr-view img.fr-dib.fr-fir {
        margin-right: 0;
        text-align: right; }
    .fr-view img.fr-dii {
      display: inline-block;
      float: none;
      vertical-align: bottom;
      margin-left: 5px;
      margin-right: 5px;
      max-width: calc(100% - (2 * 5px)); }
      .fr-view img.fr-dii.fr-fil {
        float: left;
        margin: 10px 15px 10px 0;
        max-width: calc(100% - 5px); }
      .fr-view img.fr-dii.fr-fir {
        float: right;
        margin: 10px 0 10px 15px;
        max-width: calc(100% - 5px); }
  .fr-view span.fr-img-caption {
    position: relative;
    max-width: 100%; }
    .fr-view span.fr-img-caption.fr-dib {
      margin: 5px auto;
      display: block;
      float: none;
      vertical-align: top; }
      .fr-view span.fr-img-caption.fr-dib.fr-fil {
        margin-left: 0;
        text-align: left; }
      .fr-view span.fr-img-caption.fr-dib.fr-fir {
        margin-right: 0;
        text-align: right; }
    .fr-view span.fr-img-caption.fr-dii {
      display: inline-block;
      float: none;
      vertical-align: bottom;
      margin-left: 5px;
      margin-right: 5px;
      max-width: calc(100% - (2 * 5px)); }
      .fr-view span.fr-img-caption.fr-dii.fr-fil {
        float: left;
        margin: 5px 5px 5px 0;
        max-width: calc(100% - 5px); }
      .fr-view span.fr-img-caption.fr-dii.fr-fir {
        float: right;
        margin: 5px 0 5px 5px;
        max-width: calc(100% - 5px); }
  .fr-view .fr-video {
    text-align: center;
    position: relative; }
    .fr-view .fr-video.fr-rv {
      padding-bottom: 56.25%;
      padding-top: 30px;
      height: 0;
      overflow: hidden; }
      .fr-view .fr-video.fr-rv > iframe, .fr-view .fr-video.fr-rv object, .fr-view .fr-video.fr-rv embed {
        position: absolute !important;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%; }
    .fr-view .fr-video > * {
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
      max-width: 100%;
      border: none; }
    .fr-view .fr-video.fr-dvb {
      display: block;
      clear: both; }
      .fr-view .fr-video.fr-dvb.fr-fvl {
        text-align: left; }
      .fr-view .fr-video.fr-dvb.fr-fvr {
        text-align: right; }
    .fr-view .fr-video.fr-dvi {
      display: inline-block; }
      .fr-view .fr-video.fr-dvi.fr-fvl {
        float: left; }
      .fr-view .fr-video.fr-dvi.fr-fvr {
        float: right; }
  .fr-view a.fr-strong {
    font-weight: 700; }
  .fr-view a.fr-green {
    color: green; }
  .fr-view .fr-img-caption {
    text-align: center; }
    .fr-view .fr-img-caption .fr-img-wrap {
      padding: 0;
      margin: auto;
      text-align: center;
      width: 100%; }
      .fr-view .fr-img-caption .fr-img-wrap a {
        display: block; }
      .fr-view .fr-img-caption .fr-img-wrap img {
        display: block;
        margin: auto;
        width: 100%; }
      .fr-view .fr-img-caption .fr-img-wrap > span {
        margin: auto;
        display: block;
        padding: 5px 5px 10px;
        font-size: 14px;
        font-weight: initial;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-opacity: 0.9;
        -moz-opacity: 0.9;
        opacity: 0.9;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        width: 100%;
        text-align: center; }
  .fr-view button.fr-rounded, .fr-view input.fr-rounded, .fr-view textarea.fr-rounded {
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box; }
  .fr-view button.fr-large, .fr-view input.fr-large, .fr-view textarea.fr-large {
    font-size: 24px; }
  .fr-view ul, .fr-view ol {
    list-style-position: inside; }

/**
 * Image style.
 */
a.fr-view.fr-strong {
  font-weight: 700; }
a.fr-view.fr-green {
  color: green; }

/**
 * Link style.
 */
img.fr-view {
  position: relative;
  max-width: 100%; }
  img.fr-view.fr-dib {
    margin: 5px auto;
    display: block;
    float: none;
    vertical-align: top; }
    img.fr-view.fr-dib.fr-fil {
      margin-left: 0;
      text-align: left; }
    img.fr-view.fr-dib.fr-fir {
      margin-right: 0;
      text-align: right; }
  img.fr-view.fr-dii {
    display: inline-block;
    float: none;
    vertical-align: bottom;
    margin-left: 5px;
    margin-right: 5px;
    max-width: calc(100% - (2 * 5px)); }
    img.fr-view.fr-dii.fr-fil {
      float: left;
      margin: 5px 5px 5px 0;
      max-width: calc(100% - 5px); }
    img.fr-view.fr-dii.fr-fir {
      float: right;
      margin: 5px 0 5px 5px;
      max-width: calc(100% - 5px); }

span.fr-img-caption.fr-view {
  position: relative;
  max-width: 100%; }
  span.fr-img-caption.fr-view.fr-dib {
    margin: 5px auto;
    display: block;
    float: none;
    vertical-align: top; }
    span.fr-img-caption.fr-view.fr-dib.fr-fil {
      margin-left: 0;
      text-align: left; }
    span.fr-img-caption.fr-view.fr-dib.fr-fir {
      margin-right: 0;
      text-align: right; }
  span.fr-img-caption.fr-view.fr-dii {
    display: inline-block;
    float: none;
    vertical-align: bottom;
    margin-left: 5px;
    margin-right: 5px;
    max-width: calc(100% - (2 * 5px)); }
    span.fr-img-caption.fr-view.fr-dii.fr-fil {
      float: left;
      margin: 5px 5px 5px 0;
      max-width: calc(100% - 5px); }
    span.fr-img-caption.fr-view.fr-dii.fr-fir {
      float: right;
      margin: 5px 0 5px 5px;
      max-width: calc(100% - 5px); }
/*end-commonstyles library*//*begin-commonstyles library*/@charset "UTF-8";

/*!
 * animate.css -https://daneden.github.io/animate.css/
 * Version - 3.7.2
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2019 Daniel Eden
 */

@-webkit-keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}

@-webkit-keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}

@keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}

.flash {
  -webkit-animation-name: flash;
  animation-name: flash;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
}

@-webkit-keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
}

@-webkit-keyframes shake {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

@keyframes shake {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

.shake {
  -webkit-animation-name: shake;
  animation-name: shake;
}

@-webkit-keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

.headShake {
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-name: headShake;
  animation-name: headShake;
}

@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

@keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

.swing {
  -webkit-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
}

@-webkit-keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes wobble {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes wobble {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.wobble {
  -webkit-animation-name: wobble;
  animation-name: wobble;
}

@-webkit-keyframes jello {
  from,
  11.1%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

@keyframes jello {
  from,
  11.1%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

.jello {
  -webkit-animation-name: jello;
  animation-name: jello;
  -webkit-transform-origin: center;
  transform-origin: center;
}

@-webkit-keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.heartBeat {
  -webkit-animation-name: heartBeat;
  animation-name: heartBeat;
  -webkit-animation-duration: 1.3s;
  animation-duration: 1.3s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}

@-webkit-keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.bounceIn {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}

@-webkit-keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}

@-webkit-keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}

@-webkit-keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}

@-webkit-keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}

@-webkit-keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

@keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

.bounceOut {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-name: bounceOut;
  animation-name: bounceOut;
}

@-webkit-keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

.bounceOutDown {
  -webkit-animation-name: bounceOutDown;
  animation-name: bounceOutDown;
}

@-webkit-keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

.bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}

@-webkit-keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

@keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

.bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}

@-webkit-keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

.bounceOutUp {
  -webkit-animation-name: bounceOutUp;
  animation-name: bounceOutUp;
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

@-webkit-keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInDownBig {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}

@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

@-webkit-keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInLeftBig {
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
}

@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

@-webkit-keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInRightBig {
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@-webkit-keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}

@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@-webkit-keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

.fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}

@-webkit-keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

.fadeOutDownBig {
  -webkit-animation-name: fadeOutDownBig;
  animation-name: fadeOutDownBig;
}

@-webkit-keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

@-webkit-keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

.fadeOutLeftBig {
  -webkit-animation-name: fadeOutLeftBig;
  animation-name: fadeOutLeftBig;
}

@-webkit-keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

.fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}

@-webkit-keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

@keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

.fadeOutRightBig {
  -webkit-animation-name: fadeOutRightBig;
  animation-name: fadeOutRightBig;
}

@-webkit-keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

.fadeOutUp {
  -webkit-animation-name: fadeOutUp;
  animation-name: fadeOutUp;
}

@-webkit-keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

.fadeOutUpBig {
  -webkit-animation-name: fadeOutUpBig;
  animation-name: fadeOutUpBig;
}

@-webkit-keyframes flip {
  from {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

@keyframes flip {
  from {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

.animated.flip {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: flip;
  animation-name: flip;
}

@-webkit-keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}

@-webkit-keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.flipInY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
}

@-webkit-keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

@keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.flipOutX {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}

@-webkit-keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

@keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

.flipOutY {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipOutY;
  animation-name: flipOutY;
}

@-webkit-keyframes lightSpeedIn {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes lightSpeedIn {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.lightSpeedIn {
  -webkit-animation-name: lightSpeedIn;
  animation-name: lightSpeedIn;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}

@-webkit-keyframes lightSpeedOut {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}

@keyframes lightSpeedOut {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}

.lightSpeedOut {
  -webkit-animation-name: lightSpeedOut;
  animation-name: lightSpeedOut;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}

@-webkit-keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.rotateIn {
  -webkit-animation-name: rotateIn;
  animation-name: rotateIn;
}

@-webkit-keyframes rotateInDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes rotateInDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.rotateInDownLeft {
  -webkit-animation-name: rotateInDownLeft;
  animation-name: rotateInDownLeft;
}

@-webkit-keyframes rotateInDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes rotateInDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.rotateInDownRight {
  -webkit-animation-name: rotateInDownRight;
  animation-name: rotateInDownRight;
}

@-webkit-keyframes rotateInUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes rotateInUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.rotateInUpLeft {
  -webkit-animation-name: rotateInUpLeft;
  animation-name: rotateInUpLeft;
}

@-webkit-keyframes rotateInUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes rotateInUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.rotateInUpRight {
  -webkit-animation-name: rotateInUpRight;
  animation-name: rotateInUpRight;
}

@-webkit-keyframes rotateOut {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

@keyframes rotateOut {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

.rotateOut {
  -webkit-animation-name: rotateOut;
  animation-name: rotateOut;
}

@-webkit-keyframes rotateOutDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}

.rotateOutDownLeft {
  -webkit-animation-name: rotateOutDownLeft;
  animation-name: rotateOutDownLeft;
}

@-webkit-keyframes rotateOutDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutDownRight {
  -webkit-animation-name: rotateOutDownRight;
  animation-name: rotateOutDownRight;
}

@-webkit-keyframes rotateOutUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

@keyframes rotateOutUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutUpLeft {
  -webkit-animation-name: rotateOutUpLeft;
  animation-name: rotateOutUpLeft;
}

@-webkit-keyframes rotateOutUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}

@keyframes rotateOutUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}

.rotateOutUpRight {
  -webkit-animation-name: rotateOutUpRight;
  animation-name: rotateOutUpRight;
}

@-webkit-keyframes hinge {
  0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}

@keyframes hinge {
  0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}

.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-name: hinge;
  animation-name: hinge;
}

@-webkit-keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.jackInTheBox {
  -webkit-animation-name: jackInTheBox;
  animation-name: jackInTheBox;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

@keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

.rollOut {
  -webkit-animation-name: rollOut;
  animation-name: rollOut;
}

@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}

@-webkit-keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomInDown {
  -webkit-animation-name: zoomInDown;
  animation-name: zoomInDown;
}

@-webkit-keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomInLeft {
  -webkit-animation-name: zoomInLeft;
  animation-name: zoomInLeft;
}

@-webkit-keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomInRight {
  -webkit-animation-name: zoomInRight;
  animation-name: zoomInRight;
}

@-webkit-keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomInUp {
  -webkit-animation-name: zoomInUp;
  animation-name: zoomInUp;
}

@-webkit-keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

.zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}

@-webkit-keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomOutDown {
  -webkit-animation-name: zoomOutDown;
  animation-name: zoomOutDown;
}

@-webkit-keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
}

@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
}

.zoomOutLeft {
  -webkit-animation-name: zoomOutLeft;
  animation-name: zoomOutLeft;
}

@-webkit-keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    transform-origin: right center;
  }
}

@keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    transform-origin: right center;
  }
}

.zoomOutRight {
  -webkit-animation-name: zoomOutRight;
  animation-name: zoomOutRight;
}

@-webkit-keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomOutUp {
  -webkit-animation-name: zoomOutUp;
  animation-name: zoomOutUp;
}

@-webkit-keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
}

@-webkit-keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}

@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}

@-webkit-keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
}

@-webkit-keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

.slideOutDown {
  -webkit-animation-name: slideOutDown;
  animation-name: slideOutDown;
}

@-webkit-keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}

@-webkit-keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

.slideOutRight {
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
}

@-webkit-keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

.slideOutUp {
  -webkit-animation-name: slideOutUp;
  animation-name: slideOutUp;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animated.delay-1s {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.animated.delay-2s {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

.animated.delay-3s {
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}

.animated.delay-4s {
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}

.animated.delay-5s {
  -webkit-animation-delay: 5s;
  animation-delay: 5s;
}

.animated.fast {
  -webkit-animation-duration: 800ms;
  animation-duration: 800ms;
}

.animated.faster {
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
}

.animated.slow {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

.animated.slower {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}

@media (print), (prefers-reduced-motion: reduce) {
  .animated {
    -webkit-animation-duration: 1ms !important;
    animation-duration: 1ms !important;
    -webkit-transition-duration: 1ms !important;
    transition-duration: 1ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
  }
}
/*end-commonstyles library*//*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
progress {
  vertical-align: baseline;
}
template,
[hidden] {
  display: none;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
a:active,
a:hover {
  outline-width: 0;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
}
b,
strong {
  font-weight: inherit;
  font-weight: bold;
}
dfn {
  font-style: italic;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
mark {
  background-color: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
svg:not(:root) {
  overflow: hidden;
}
code,
kbd,
pre,
samp {
  font-family: monospace,monospace;
  font-size: 1em;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
optgroup {
  font-weight: 700;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
ul,
ol {
  padding-left: 20px;
  justify-content: center;
  margin-top: 50px;
}
/* Fade effect */
/* Over effect */
/* Slide effect */
/* Over and Slide effect */
/* Flip Left effect */
/* Flip Right effect */
/* Flip Top effect */
/* Flip Bottom effect */
/* Wobble Left effect */
/* Wobble Right effect */
/* Wobble top effect */
/* Wobble bottom effect */
/* Zoom and Rotate Effects */
/* Utility */
.u-over-slide {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.u-background-effect {
  overflow: hidden;
}
.u-background-effect ~ .u-container-layout {
  cursor: pointer;
}
/* Fade effect */
.u-effect-fade .u-over-slide {
  opacity: 0;
  transition: all 500ms ease;
}
.u-effect-fade:hover .u-over-slide,
.u-effect-fade.u-effect-active .u-over-slide {
  opacity: 1;
}
/* Over effect */
.u-effect-over-left .u-over-slide {
  transform: translate(-100%, 0);
  transition: all 500ms ease;
}
.u-effect-over-left:hover .u-over-slide,
.u-effect-over-left.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-over-right .u-over-slide {
  transform: translate(100%, 0);
  transition: all 500ms ease;
}
.u-effect-over-right:hover .u-over-slide,
.u-effect-over-right.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-over-top .u-over-slide {
  transform: translate(0, -100%);
  transition: all 500ms ease;
}
.u-effect-over-top:hover .u-over-slide,
.u-effect-over-top.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-over-bottom .u-over-slide {
  transform: translate(0, 100%);
  transition: all 500ms ease;
}
.u-effect-over-bottom:hover .u-over-slide,
.u-effect-over-bottom.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-over-topleft .u-over-slide {
  transform: translate(-100%, -100%);
  transition: all 500ms ease;
}
.u-effect-over-topleft:hover .u-over-slide,
.u-effect-over-topleft.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-over-topright .u-over-slide {
  transform: translate(100%, -100%);
  transition: all 500ms ease;
}
.u-effect-over-topright:hover .u-over-slide,
.u-effect-over-topright.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-over-bottomleft .u-over-slide {
  transform: translate(-100%, 100%);
  transition: all 500ms ease;
}
.u-effect-over-bottomleft:hover .u-over-slide,
.u-effect-over-bottomleft.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-over-bottomright .u-over-slide {
  transform: translate(100%, 100%);
  transition: all 500ms ease;
}
.u-effect-over-bottomright:hover .u-over-slide,
.u-effect-over-bottomright.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
/* Slide effect */
.u-effect-slide-left .u-over-slide {
  transform: translate(-100%, 0);
  transition: all 500ms ease;
}
.u-effect-slide-left:hover .u-over-slide,
.u-effect-slide-left.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-slide-left .u-back-slide {
  transition: all 500ms ease;
}
.u-effect-slide-left:hover .u-back-slide,
.u-effect-slide-left.u-effect-active .u-back-slide {
  transform: translate(100%, 0);
}
.u-effect-slide-right .u-over-slide {
  transform: translate(100%, 0);
  transition: all 500ms ease;
}
.u-effect-slide-right:hover .u-over-slide,
.u-effect-slide-right.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-slide-right .u-back-slide {
  transition: all 500ms ease;
}
.u-effect-slide-right:hover .u-back-slide,
.u-effect-slide-right.u-effect-active .u-back-slide {
  transform: translate(-100%, 0);
}
.u-effect-slide-top .u-over-slide {
  transform: translate(0, -100%);
  transition: all 500ms ease;
}
.u-effect-slide-top:hover .u-over-slide,
.u-effect-slide-top.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-slide-top .u-back-slide {
  transition: all 500ms ease;
}
.u-effect-slide-top:hover .u-back-slide,
.u-effect-slide-top.u-effect-active .u-back-slide {
  transform: translate(0, 100%);
}
.u-effect-slide-bottom .u-over-slide {
  transform: translate(0, 100%);
  transition: all 500ms ease;
}
.u-effect-slide-bottom:hover .u-over-slide,
.u-effect-slide-bottom.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-slide-bottom .u-back-slide {
  transition: all 500ms ease;
}
.u-effect-slide-bottom:hover .u-back-slide,
.u-effect-slide-bottom.u-effect-active .u-back-slide {
  transform: translate(0, -100%);
}
.u-effect-slide-topleft .u-over-slide {
  transform: translate(-100%, -100%);
  transition: all 500ms ease;
}
.u-effect-slide-topleft:hover .u-over-slide,
.u-effect-slide-topleft.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-slide-topleft .u-back-slide {
  transition: all 500ms ease;
}
.u-effect-slide-topleft:hover .u-back-slide,
.u-effect-slide-topleft.u-effect-active .u-back-slide {
  transform: translate(100%, 100%);
}
.u-effect-slide-topright .u-over-slide {
  transform: translate(100%, -100%);
  transition: all 500ms ease;
}
.u-effect-slide-topright:hover .u-over-slide,
.u-effect-slide-topright.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-slide-topright .u-back-slide {
  transition: all 500ms ease;
}
.u-effect-slide-topright:hover .u-back-slide,
.u-effect-slide-topright.u-effect-active .u-back-slide {
  transform: translate(-100%, 100%);
}
.u-effect-slide-bottomleft .u-over-slide {
  transform: translate(-100%, 100%);
  transition: all 500ms ease;
}
.u-effect-slide-bottomleft:hover .u-over-slide,
.u-effect-slide-bottomleft.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-slide-bottomleft .u-back-slide {
  transition: all 500ms ease;
}
.u-effect-slide-bottomleft:hover .u-back-slide,
.u-effect-slide-bottomleft.u-effect-active .u-back-slide {
  transform: translate(100%, -100%);
}
.u-effect-slide-bottomright .u-over-slide {
  transform: translate(100%, 100%);
  transition: all 500ms ease;
}
.u-effect-slide-bottomright:hover .u-over-slide,
.u-effect-slide-bottomright.u-effect-active .u-over-slide {
  transform: translate(0, 0);
}
.u-effect-slide-bottomright .u-back-slide {
  transition: all 500ms ease;
}
.u-effect-slide-bottomright:hover .u-back-slide,
.u-effect-slide-bottomright.u-effect-active .u-back-slide {
  transform: translate(-100%, -100%);
}
/* Flip */
.u-effect-flip-left,
.u-effect-flip-left .u-slidesWrapper {
  perspective: 300px;
}
.u-effect-flip-left .u-over-slide {
  opacity: 0;
  transform: rotateY(130deg);
  transform-origin: center left;
  transition: transform 500ms ease, transform-origin 500ms ease, opacity 0ms ease 500ms;
}
.u-effect-flip-left:hover .u-over-slide,
.u-effect-flip-left.u-effect-active .u-over-slide {
  opacity: 1;
  transform: rotateY(0deg);
  transition: transform 500ms ease, transform-origin 500ms ease;
}
.u-effect-flip-right,
.u-effect-flip-right .u-slidesWrapper {
  perspective: 300px;
}
.u-effect-flip-right .u-over-slide {
  opacity: 0;
  transform: rotateY(-130deg);
  transform-origin: center right;
  transition: transform 500ms ease, transform-origin 500ms ease, opacity 0ms ease 500ms;
}
.u-effect-flip-right:hover .u-over-slide,
.u-effect-flip-right.u-effect-active .u-over-slide {
  opacity: 1;
  transform: rotateY(0deg);
  transition: transform 500ms ease, transform-origin 500ms ease;
}
.u-effect-flip-top,
.u-effect-flip-top .u-slidesWrapper {
  perspective: 300px;
}
.u-effect-flip-top .u-over-slide {
  opacity: 0;
  transform: rotateX(-130deg);
  transform-origin: center top;
  transition: transform 500ms ease, transform-origin 500ms ease, opacity 0ms ease 500ms;
}
.u-effect-flip-top:hover .u-over-slide,
.u-effect-flip-top.u-effect-active .u-over-slide {
  opacity: 1;
  transform: rotateX(0deg);
  transition: transform 500ms ease, transform-origin 500ms ease;
}
.u-effect-flip-bottom,
.u-effect-flip-bottom .u-slidesWrapper {
  perspective: 300px;
}
.u-effect-flip-bottom .u-over-slide {
  opacity: 0;
  transform: rotateX(130deg);
  transform-origin: center bottom;
  transition: transform 500ms ease, transform-origin 500ms ease, opacity 0ms ease 500ms;
}
.u-effect-flip-bottom:hover .u-over-slide,
.u-effect-flip-bottom.u-effect-active .u-over-slide {
  opacity: 1;
  transform: rotateX(0deg);
  transition: transform 500ms ease, transform-origin 500ms ease;
}
/* Wooble */
.u-effect-wobble-left,
.u-effect-wobble-left .u-slidesWrapper {
  perspective: 300px;
}
.u-effect-wobble-left .u-over-slide {
  opacity: 0;
  transform: rotateY(130deg);
  transform-origin: center left;
  transition: transform 500ms ease, transform-origin 500ms ease, opacity 0ms ease 500ms;
}
.u-effect-wobble-left:hover .u-over-slide,
.u-effect-wobble-left.u-effect-active .u-over-slide {
  opacity: 1;
  transform: rotateY(0deg);
  transform-origin: center right;
  transition: transform 500ms ease, transform-origin 500ms ease;
}
.u-effect-wobble-right,
.u-effect-wobble-right .u-slidesWrapper {
  perspective: 300px;
}
.u-effect-wobble-right .u-over-slide {
  opacity: 0;
  transform: rotateY(-130deg);
  transform-origin: center right;
  transition: transform 500ms ease, transform-origin 500ms ease, opacity 0ms ease 500ms;
}
.u-effect-wobble-right:hover .u-over-slide,
.u-effect-wobble-right.u-effect-active .u-over-slide {
  opacity: 1;
  transform: rotateY(0deg);
  transform-origin: center left;
  transition: transform 500ms ease, transform-origin 500ms ease;
}
.u-effect-wobble-top,
.u-effect-wobble-top .u-slidesWrapper {
  perspective: 300px;
}
.u-effect-wobble-top .u-over-slide {
  opacity: 0;
  transform: rotateX(-130deg);
  transform-origin: center top;
  transition: transform 500ms ease, transform-origin 500ms ease, opacity 0ms ease 500ms;
}
.u-effect-wobble-top:hover .u-over-slide,
.u-effect-wobble-top.u-effect-active .u-over-slide {
  opacity: 1;
  transform: rotateX(0deg);
  transform-origin: center bottom;
  transition: transform 500ms ease, transform-origin 500ms ease;
}
.u-effect-wobble-bottom,
.u-effect-wobble-bottom .u-slidesWrapper {
  perspective: 300px;
}
.u-effect-wobble-bottom .u-over-slide {
  opacity: 0;
  transform: rotateX(130deg);
  transform-origin: center bottom;
  transition: transform 500ms ease, transform-origin 500ms ease, opacity 0ms ease 500ms;
}
.u-effect-wobble-bottom:hover .u-over-slide,
.u-effect-wobble-bottom.u-effect-active .u-over-slide {
  opacity: 1;
  transform: rotateX(0deg);
  transform-origin: center top;
  transition: transform 500ms ease, transform-origin 500ms ease;
}
/* Zoom */
.u-effect-zoom .u-over-slide {
  transition: transform 500ms ease;
  transform: scale(0, 0);
}
.u-effect-zoom:hover .u-over-slide,
.u-effect-zoom.u-effect-active .u-over-slide {
  transform: scale(1, 1);
}
.u-effect-hover-zoom .u-back-slide,
.u-effect-hover-zoom .u-background-effect-image {
  transition: transform 500ms ease;
  transform: scale(1);
}
.u-effect-hover-zoom:hover .u-back-slide,
.u-effect-hover-zoom:hover .u-background-effect-image,
.u-effect-hover-zoom.u-effect-active .u-back-slide,
.u-effect-hover-zoom.u-effect-active .u-background-effect-image {
  transform: scale(1.1);
}
.u-effect-hover-zoomOut .u-back-slide,
.u-effect-hover-zoomOut .u-background-effect-image {
  transition: transform 500ms ease;
  transform: scale(1.1);
}
.u-effect-hover-zoomOut:hover .u-back-slide,
.u-effect-hover-zoomOut:hover .u-background-effect-image,
.u-effect-hover-zoomOut.u-effect-active .u-back-slide,
.u-effect-hover-zoomOut.u-effect-active .u-background-effect-image {
  transform: scale(1);
}
.u-effect-hover-liftUp {
  transition: transform 500ms ease;
  transform: scale(1);
}
.u-effect-hover-liftUp:hover,
.u-effect-hover-liftUp.u-effect-active {
  transform: scale(1.03);
  z-index: 1;
}
.u-effect-zoom-rotate .u-over-slide {
  transition: transform 500ms ease;
  transform: rotate(0deg) scale(0, 0);
}
.u-effect-zoom-rotate:hover .u-over-slide,
.u-effect-zoom-rotate.u-effect-active .u-over-slide {
  transform: rotate(360deg) scale(1, 1);
}
.u-effect-zoom-rotateX .u-over-slide {
  transition: transform 500ms ease;
  transform: rotateX(0deg) scale(0, 0);
}
.u-effect-zoom-rotateX:hover .u-over-slide,
.u-effect-zoom-rotateX.u-effect-active .u-over-slide {
  transform: rotateX(360deg) scale(1, 1);
}
.u-effect-zoom-rotateY .u-over-slide {
  transition: transform 500ms ease;
  transform: rotateY(0deg) scale(0, 0);
}
.u-effect-zoom-rotateY:hover .u-over-slide,
.u-effect-zoom-rotateY.u-effect-active .u-over-slide {
  transform: rotateY(360deg) scale(1, 1);
}
.u-btn {
  /*display: inline-block;*/
  display: table;
  /*TODO maye need another solution for negative marin*/
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  font-style: inherit;
  font-weight: inherit;
  text-decoration: none;
  border: 0 none transparent;
  outline-width: 0;
  background-color: transparent;
  margin: 0;
  -webkit-text-decoration-skip: objects;
  font-style: initial;
  white-space: nowrap;
  -webkit-user-select: none;
      -ms-user-select: none;
          user-select: none;
  vertical-align: middle;
  text-align: center;
  padding: 10px 30px;
  border-radius: 0;
  align-self: flex-start;
}
.u-btn:focus,
.u-btn:active:focus,
.u-btn.active:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.u-btn:hover,
.u-btn:focus {
  text-decoration: none;
}
.u-btn:active,
.u-btn.active {
  outline: 0;
  background-image: none;
}
.u-btn.disabled,
.u-btn[disabled] {
  opacity: 0.6;
}
.u-btn-circle {
  border-radius: 50%;
}
.u-btn-round {
  border-radius: 4px;
}
.u-btn-rectangle {
  border-radius: 0 !important;
}
.u-text a,
.u-post-content a,
.u-tab-item a,
.u-nav-item a {
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
}
.u-text:not(ul):not(ol):not(p):not(.u-post-content):not(.u-block-content):not(.u-product-desc):not(.u-cart-block-content) a {
  color: inherit;
}
.u-text:not(ul):not(ol):not(p):not(.u-post-content):not(.u-block-content):not(.u-product-desc):not(.u-cart-block-content) a,
.u-text:not(ul):not(ol):not(p):not(.u-post-content):not(.u-block-content):not(.u-product-desc):not(.u-cart-block-content) a:hover {
  text-decoration: none;
}
.u-link,
a {
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
}
.u-link {
  display: table;
  border-style: solid;
  border-bottom-width: 0;
  white-space: nowrap;
  align-self: flex-start;
}
.u-link,
.u-link:hover,
.u-link:focus {
  text-decoration: none;
}
.u-link:focus,
.u-link:active:focus,
.u-link.active:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.u-underline,
.u-underline:hover {
  text-decoration: underline;
  border-bottom-width: 0;
}
.u-no-underline,
.u-no-underline:hover {
  text-decoration: none;
  border-bottom-width: 0;
}
.u-block-content > :first-child,
.u-product-desc > :first-child,
.u-product-tab-pane > :first-child,
.u-post-content > :first-child {
  margin-top: 0;
}
.u-block-content > :last-child,
.u-product-desc > :last-child,
.u-product-tab-pane > :last-child,
.u-post-content > :last-child {
  margin-bottom: 0;
}
.u-block-content p,
.u-product-desc p,
.u-product-tab-pane p,
.u-post-content p {
  text-decoration: inherit !important;
  color: inherit !important;
  font-style: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  font-family: inherit !important;
  line-height: inherit !important;
  letter-spacing: inherit !important;
  text-transform: inherit !important;
}
.u-logo {
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  font-style: inherit;
  font-weight: inherit;
  text-decoration: none;
  border: 0 none transparent;
  outline-width: 0;
  background-color: transparent;
  margin: 0;
  -webkit-text-decoration-skip: objects;
}
.u-image.u-logo {
  display: table;
  white-space: nowrap;
}
.u-image.u-logo img {
  display: block;
}
.u-form-horizontal {
  display: flex;
  flex-flow: row;
  align-items: center;
  flex-grow: 1;
}
.u-input {
  display: block;
  width: 100%;
  padding: 10px 12px;
  background-image: none;
  background-clip: padding-box;
  border: none;
  border-radius: 3px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  background-color: transparent;
  color: inherit;
  height: auto;
}
.u-form-horizontal label,
.u-form-horizontal input,
.u-form-horizontal .u-form-select-wrapper,
.u-form-horizontal .u-form-radio-button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  flex-grow: 1;
}
.u-form-vertical {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}
.u-form-vertical.u-form-spacing-50 {
  margin-left: -50px;
  width: calc(100% +  50px);
}
.u-form-vertical.u-form-spacing-50 .u-form-group {
  margin-bottom: 50px;
  padding-left: 50px;
}
.u-form-vertical.u-form-spacing-49 {
  margin-left: -49px;
  width: calc(100% +  49px);
}
.u-form-vertical.u-form-spacing-49 .u-form-group {
  margin-bottom: 49px;
  padding-left: 49px;
}
.u-form-vertical.u-form-spacing-48 {
  margin-left: -48px;
  width: calc(100% +  48px);
}
.u-form-vertical.u-form-spacing-48 .u-form-group {
  margin-bottom: 48px;
  padding-left: 48px;
}
.u-form-vertical.u-form-spacing-47 {
  margin-left: -47px;
  width: calc(100% +  47px);
}
.u-form-vertical.u-form-spacing-47 .u-form-group {
  margin-bottom: 47px;
  padding-left: 47px;
}
.u-form-vertical.u-form-spacing-46 {
  margin-left: -46px;
  width: calc(100% +  46px);
}
.u-form-vertical.u-form-spacing-46 .u-form-group {
  margin-bottom: 46px;
  padding-left: 46px;
}
.u-form-vertical.u-form-spacing-45 {
  margin-left: -45px;
  width: calc(100% +  45px);
}
.u-form-vertical.u-form-spacing-45 .u-form-group {
  margin-bottom: 45px;
  padding-left: 45px;
}
.u-form-vertical.u-form-spacing-44 {
  margin-left: -44px;
  width: calc(100% +  44px);
}
.u-form-vertical.u-form-spacing-44 .u-form-group {
  margin-bottom: 44px;
  padding-left: 44px;
}
.u-form-vertical.u-form-spacing-43 {
  margin-left: -43px;
  width: calc(100% +  43px);
}
.u-form-vertical.u-form-spacing-43 .u-form-group {
  margin-bottom: 43px;
  padding-left: 43px;
}
.u-form-vertical.u-form-spacing-42 {
  margin-left: -42px;
  width: calc(100% +  42px);
}
.u-form-vertical.u-form-spacing-42 .u-form-group {
  margin-bottom: 42px;
  padding-left: 42px;
}
.u-form-vertical.u-form-spacing-41 {
  margin-left: -41px;
  width: calc(100% +  41px);
}
.u-form-vertical.u-form-spacing-41 .u-form-group {
  margin-bottom: 41px;
  padding-left: 41px;
}
.u-form-vertical.u-form-spacing-40 {
  margin-left: -40px;
  width: calc(100% +  40px);
}
.u-form-vertical.u-form-spacing-40 .u-form-group {
  margin-bottom: 40px;
  padding-left: 40px;
}
.u-form-vertical.u-form-spacing-39 {
  margin-left: -39px;
  width: calc(100% +  39px);
}
.u-form-vertical.u-form-spacing-39 .u-form-group {
  margin-bottom: 39px;
  padding-left: 39px;
}
.u-form-vertical.u-form-spacing-38 {
  margin-left: -38px;
  width: calc(100% +  38px);
}
.u-form-vertical.u-form-spacing-38 .u-form-group {
  margin-bottom: 38px;
  padding-left: 38px;
}
.u-form-vertical.u-form-spacing-37 {
  margin-left: -37px;
  width: calc(100% +  37px);
}
.u-form-vertical.u-form-spacing-37 .u-form-group {
  margin-bottom: 37px;
  padding-left: 37px;
}
.u-form-vertical.u-form-spacing-36 {
  margin-left: -36px;
  width: calc(100% +  36px);
}
.u-form-vertical.u-form-spacing-36 .u-form-group {
  margin-bottom: 36px;
  padding-left: 36px;
}
.u-form-vertical.u-form-spacing-35 {
  margin-left: -35px;
  width: calc(100% +  35px);
}
.u-form-vertical.u-form-spacing-35 .u-form-group {
  margin-bottom: 35px;
  padding-left: 35px;
}
.u-form-vertical.u-form-spacing-34 {
  margin-left: -34px;
  width: calc(100% +  34px);
}
.u-form-vertical.u-form-spacing-34 .u-form-group {
  margin-bottom: 34px;
  padding-left: 34px;
}
.u-form-vertical.u-form-spacing-33 {
  margin-left: -33px;
  width: calc(100% +  33px);
}
.u-form-vertical.u-form-spacing-33 .u-form-group {
  margin-bottom: 33px;
  padding-left: 33px;
}
.u-form-vertical.u-form-spacing-32 {
  margin-left: -32px;
  width: calc(100% +  32px);
}
.u-form-vertical.u-form-spacing-32 .u-form-group {
  margin-bottom: 32px;
  padding-left: 32px;
}
.u-form-vertical.u-form-spacing-31 {
  margin-left: -31px;
  width: calc(100% +  31px);
}
.u-form-vertical.u-form-spacing-31 .u-form-group {
  margin-bottom: 31px;
  padding-left: 31px;
}
.u-form-vertical.u-form-spacing-30 {
  margin-left: -30px;
  width: calc(100% +  30px);
}
.u-form-vertical.u-form-spacing-30 .u-form-group {
  margin-bottom: 30px;
  padding-left: 30px;
}
.u-form-vertical.u-form-spacing-29 {
  margin-left: -29px;
  width: calc(100% +  29px);
}
.u-form-vertical.u-form-spacing-29 .u-form-group {
  margin-bottom: 29px;
  padding-left: 29px;
}
.u-form-vertical.u-form-spacing-28 {
  margin-left: -28px;
  width: calc(100% +  28px);
}
.u-form-vertical.u-form-spacing-28 .u-form-group {
  margin-bottom: 28px;
  padding-left: 28px;
}
.u-form-vertical.u-form-spacing-27 {
  margin-left: -27px;
  width: calc(100% +  27px);
}
.u-form-vertical.u-form-spacing-27 .u-form-group {
  margin-bottom: 27px;
  padding-left: 27px;
}
.u-form-vertical.u-form-spacing-26 {
  margin-left: -26px;
  width: calc(100% +  26px);
}
.u-form-vertical.u-form-spacing-26 .u-form-group {
  margin-bottom: 26px;
  padding-left: 26px;
}
.u-form-vertical.u-form-spacing-25 {
  margin-left: -25px;
  width: calc(100% +  25px);
}
.u-form-vertical.u-form-spacing-25 .u-form-group {
  margin-bottom: 25px;
  padding-left: 25px;
}
.u-form-vertical.u-form-spacing-24 {
  margin-left: -24px;
  width: calc(100% +  24px);
}
.u-form-vertical.u-form-spacing-24 .u-form-group {
  margin-bottom: 24px;
  padding-left: 24px;
}
.u-form-vertical.u-form-spacing-23 {
  margin-left: -23px;
  width: calc(100% +  23px);
}
.u-form-vertical.u-form-spacing-23 .u-form-group {
  margin-bottom: 23px;
  padding-left: 23px;
}
.u-form-vertical.u-form-spacing-22 {
  margin-left: -22px;
  width: calc(100% +  22px);
}
.u-form-vertical.u-form-spacing-22 .u-form-group {
  margin-bottom: 22px;
  padding-left: 22px;
}
.u-form-vertical.u-form-spacing-21 {
  margin-left: -21px;
  width: calc(100% +  21px);
}
.u-form-vertical.u-form-spacing-21 .u-form-group {
  margin-bottom: 21px;
  padding-left: 21px;
}
.u-form-vertical.u-form-spacing-20 {
  margin-left: -20px;
  width: calc(100% +  20px);
}
.u-form-vertical.u-form-spacing-20 .u-form-group {
  margin-bottom: 20px;
  padding-left: 20px;
}
.u-form-vertical.u-form-spacing-19 {
  margin-left: -19px;
  width: calc(100% +  19px);
}
.u-form-vertical.u-form-spacing-19 .u-form-group {
  margin-bottom: 19px;
  padding-left: 19px;
}
.u-form-vertical.u-form-spacing-18 {
  margin-left: -18px;
  width: calc(100% +  18px);
}
.u-form-vertical.u-form-spacing-18 .u-form-group {
  margin-bottom: 18px;
  padding-left: 18px;
}
.u-form-vertical.u-form-spacing-17 {
  margin-left: -17px;
  width: calc(100% +  17px);
}
.u-form-vertical.u-form-spacing-17 .u-form-group {
  margin-bottom: 17px;
  padding-left: 17px;
}
.u-form-vertical.u-form-spacing-16 {
  margin-left: -16px;
  width: calc(100% +  16px);
}
.u-form-vertical.u-form-spacing-16 .u-form-group {
  margin-bottom: 16px;
  padding-left: 16px;
}
.u-form-vertical.u-form-spacing-15 {
  margin-left: -15px;
  width: calc(100% +  15px);
}
.u-form-vertical.u-form-spacing-15 .u-form-group {
  margin-bottom: 15px;
  padding-left: 15px;
}
.u-form-vertical.u-form-spacing-14 {
  margin-left: -14px;
  width: calc(100% +  14px);
}
.u-form-vertical.u-form-spacing-14 .u-form-group {
  margin-bottom: 14px;
  padding-left: 14px;
}
.u-form-vertical.u-form-spacing-13 {
  margin-left: -13px;
  width: calc(100% +  13px);
}
.u-form-vertical.u-form-spacing-13 .u-form-group {
  margin-bottom: 13px;
  padding-left: 13px;
}
.u-form-vertical.u-form-spacing-12 {
  margin-left: -12px;
  width: calc(100% +  12px);
}
.u-form-vertical.u-form-spacing-12 .u-form-group {
  margin-bottom: 12px;
  padding-left: 12px;
}
.u-form-vertical.u-form-spacing-11 {
  margin-left: -11px;
  width: calc(100% +  11px);
}
.u-form-vertical.u-form-spacing-11 .u-form-group {
  margin-bottom: 11px;
  padding-left: 11px;
}
.u-form-vertical.u-form-spacing-10 {
  margin-left: -10px;
  width: calc(100% +  10px);
}
.u-form-vertical.u-form-spacing-10 .u-form-group {
  margin-bottom: 10px;
  padding-left: 10px;
}
.u-form-vertical.u-form-spacing-9 {
  margin-left: -9px;
  width: calc(100% +  9px);
}
.u-form-vertical.u-form-spacing-9 .u-form-group {
  margin-bottom: 9px;
  padding-left: 9px;
}
.u-form-vertical.u-form-spacing-8 {
  margin-left: -8px;
  width: calc(100% +  8px);
}
.u-form-vertical.u-form-spacing-8 .u-form-group {
  margin-bottom: 8px;
  padding-left: 8px;
}
.u-form-vertical.u-form-spacing-7 {
  margin-left: -7px;
  width: calc(100% +  7px);
}
.u-form-vertical.u-form-spacing-7 .u-form-group {
  margin-bottom: 7px;
  padding-left: 7px;
}
.u-form-vertical.u-form-spacing-6 {
  margin-left: -6px;
  width: calc(100% +  6px);
}
.u-form-vertical.u-form-spacing-6 .u-form-group {
  margin-bottom: 6px;
  padding-left: 6px;
}
.u-form-vertical.u-form-spacing-5 {
  margin-left: -5px;
  width: calc(100% +  5px);
}
.u-form-vertical.u-form-spacing-5 .u-form-group {
  margin-bottom: 5px;
  padding-left: 5px;
}
.u-form-vertical.u-form-spacing-4 {
  margin-left: -4px;
  width: calc(100% +  4px);
}
.u-form-vertical.u-form-spacing-4 .u-form-group {
  margin-bottom: 4px;
  padding-left: 4px;
}
.u-form-vertical.u-form-spacing-3 {
  margin-left: -3px;
  width: calc(100% +  3px);
}
.u-form-vertical.u-form-spacing-3 .u-form-group {
  margin-bottom: 3px;
  padding-left: 3px;
}
.u-form-vertical.u-form-spacing-2 {
  margin-left: -2px;
  width: calc(100% +  2px);
}
.u-form-vertical.u-form-spacing-2 .u-form-group {
  margin-bottom: 2px;
  padding-left: 2px;
}
.u-form-vertical.u-form-spacing-1 {
  margin-left: -1px;
  width: calc(100% +  1px);
}
.u-form-vertical.u-form-spacing-1 .u-form-group {
  margin-bottom: 1px;
  padding-left: 1px;
}
.u-form-vertical.u-form-spacing-0 {
  margin-left: 0px;
  width: calc(100% +  0px);
}
.u-form-vertical.u-form-spacing-0 .u-form-group {
  margin-bottom: 0px;
  padding-left: 0px;
}
.u-form-vertical .u-form-group {
  width: 100%;
}
.u-form-vertical .u-form-partition-factor-10 {
  width: 10%;
}
.u-form-vertical .u-form-partition-factor-9 {
  width: 11.11111111%;
}
.u-form-vertical .u-form-partition-factor-8 {
  width: 12.5%;
}
.u-form-vertical .u-form-partition-factor-7 {
  width: 14.28571429%;
}
.u-form-vertical .u-form-partition-factor-6 {
  width: 16.66666667%;
}
.u-form-vertical .u-form-partition-factor-5 {
  width: 20%;
}
.u-form-vertical .u-form-partition-factor-4 {
  width: 25%;
}
.u-form-vertical .u-form-partition-factor-3 {
  width: 33.33333333%;
}
.u-form-vertical .u-form-partition-factor-2 {
  width: 50%;
}
.u-form-vertical .u-form-partition-factor-1 {
  width: 100%;
}
@media (max-width: 575px) {
  .u-form-vertical .u-form-group {
    width: 100%;
  }
}
.u-form-horizontal .u-form-group {
  display: flex;
  flex: 0 0 auto;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: 0;
  flex-grow: 1;
}
.u-form-horizontal .u-form-submit {
  display: flex;
  flex-grow: 0;
}
.u-form-horizontal .u-form-group label {
  display: flex;
  flex-grow: 0;
  margin-right: 10px;
}
.u-form-horizontal .u-input {
  display: flex;
  width: 0;
  vertical-align: middle;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 0px;
}
.u-form-horizontal .input-group {
  width: auto;
}
.u-form-control-hidden {
  display: none !important;
}
.u-form-horizontal .u-btn-submit,
.u-form-vertical .u-btn-submit {
  margin-top: 1px;
  margin-bottom: 1px;
  position: relative;
}
.u-form-horizontal .u-form-group {
  flex-shrink: 1;
  min-width: 0;
}
/* ********  spacing ******** */
.u-form-horizontal.u-form-spacing-50 .u-form-group {
  margin-right: 50px;
}
.u-form-horizontal.u-form-spacing-49 .u-form-group {
  margin-right: 49px;
}
.u-form-horizontal.u-form-spacing-48 .u-form-group {
  margin-right: 48px;
}
.u-form-horizontal.u-form-spacing-47 .u-form-group {
  margin-right: 47px;
}
.u-form-horizontal.u-form-spacing-46 .u-form-group {
  margin-right: 46px;
}
.u-form-horizontal.u-form-spacing-45 .u-form-group {
  margin-right: 45px;
}
.u-form-horizontal.u-form-spacing-44 .u-form-group {
  margin-right: 44px;
}
.u-form-horizontal.u-form-spacing-43 .u-form-group {
  margin-right: 43px;
}
.u-form-horizontal.u-form-spacing-42 .u-form-group {
  margin-right: 42px;
}
.u-form-horizontal.u-form-spacing-41 .u-form-group {
  margin-right: 41px;
}
.u-form-horizontal.u-form-spacing-40 .u-form-group {
  margin-right: 40px;
}
.u-form-horizontal.u-form-spacing-39 .u-form-group {
  margin-right: 39px;
}
.u-form-horizontal.u-form-spacing-38 .u-form-group {
  margin-right: 38px;
}
.u-form-horizontal.u-form-spacing-37 .u-form-group {
  margin-right: 37px;
}
.u-form-horizontal.u-form-spacing-36 .u-form-group {
  margin-right: 36px;
}
.u-form-horizontal.u-form-spacing-35 .u-form-group {
  margin-right: 35px;
}
.u-form-horizontal.u-form-spacing-34 .u-form-group {
  margin-right: 34px;
}
.u-form-horizontal.u-form-spacing-33 .u-form-group {
  margin-right: 33px;
}
.u-form-horizontal.u-form-spacing-32 .u-form-group {
  margin-right: 32px;
}
.u-form-horizontal.u-form-spacing-31 .u-form-group {
  margin-right: 31px;
}
.u-form-horizontal.u-form-spacing-30 .u-form-group {
  margin-right: 30px;
}
.u-form-horizontal.u-form-spacing-29 .u-form-group {
  margin-right: 29px;
}
.u-form-horizontal.u-form-spacing-28 .u-form-group {
  margin-right: 28px;
}
.u-form-horizontal.u-form-spacing-27 .u-form-group {
  margin-right: 27px;
}
.u-form-horizontal.u-form-spacing-26 .u-form-group {
  margin-right: 26px;
}
.u-form-horizontal.u-form-spacing-25 .u-form-group {
  margin-right: 25px;
}
.u-form-horizontal.u-form-spacing-24 .u-form-group {
  margin-right: 24px;
}
.u-form-horizontal.u-form-spacing-23 .u-form-group {
  margin-right: 23px;
}
.u-form-horizontal.u-form-spacing-22 .u-form-group {
  margin-right: 22px;
}
.u-form-horizontal.u-form-spacing-21 .u-form-group {
  margin-right: 21px;
}
.u-form-horizontal.u-form-spacing-20 .u-form-group {
  margin-right: 20px;
}
.u-form-horizontal.u-form-spacing-19 .u-form-group {
  margin-right: 19px;
}
.u-form-horizontal.u-form-spacing-18 .u-form-group {
  margin-right: 18px;
}
.u-form-horizontal.u-form-spacing-17 .u-form-group {
  margin-right: 17px;
}
.u-form-horizontal.u-form-spacing-16 .u-form-group {
  margin-right: 16px;
}
.u-form-horizontal.u-form-spacing-15 .u-form-group {
  margin-right: 15px;
}
.u-form-horizontal.u-form-spacing-14 .u-form-group {
  margin-right: 14px;
}
.u-form-horizontal.u-form-spacing-13 .u-form-group {
  margin-right: 13px;
}
.u-form-horizontal.u-form-spacing-12 .u-form-group {
  margin-right: 12px;
}
.u-form-horizontal.u-form-spacing-11 .u-form-group {
  margin-right: 11px;
}
.u-form-horizontal.u-form-spacing-10 .u-form-group {
  margin-right: 10px;
}
.u-form-horizontal.u-form-spacing-9 .u-form-group {
  margin-right: 9px;
}
.u-form-horizontal.u-form-spacing-8 .u-form-group {
  margin-right: 8px;
}
.u-form-horizontal.u-form-spacing-7 .u-form-group {
  margin-right: 7px;
}
.u-form-horizontal.u-form-spacing-6 .u-form-group {
  margin-right: 6px;
}
.u-form-horizontal.u-form-spacing-5 .u-form-group {
  margin-right: 5px;
}
.u-form-horizontal.u-form-spacing-4 .u-form-group {
  margin-right: 4px;
}
.u-form-horizontal.u-form-spacing-3 .u-form-group {
  margin-right: 3px;
}
.u-form-horizontal.u-form-spacing-2 .u-form-group {
  margin-right: 2px;
}
.u-form-horizontal.u-form-spacing-1 .u-form-group {
  margin-right: 1px;
}
.u-form-horizontal.u-form-spacing-0 .u-form-group {
  margin-right: 0px;
}
/* ********  end of spacing ******** */
.u-form-horizontal .u-form-group.u-form-submit {
  margin-right: 0;
}
.u-form div.u-form-send-error,
.u-form div.u-form-send-success {
  display: none;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  text-align: center;
  color: #fff;
  padding: 20px 0px 20px 0px;
  border: none;
}
.u-form .u-form-group.u-form-checkbox,
.u-form .u-form-group.u-form-agree {
  display: flex;
}
.u-form .u-form-group.u-form-checkbox input[type="checkbox"],
.u-form .u-form-group.u-form-agree input[type="checkbox"] {
  float: left;
  flex-shrink: 0;
}
.u-form .u-form-group.u-form-checkbox label.u-label,
.u-form .u-form-group.u-form-agree label.u-label {
  margin-left: 5px;
}
.u-form .u-form-group.u-form-checkbox label.u-label a,
.u-form .u-form-group.u-form-agree label.u-label a {
  margin-top: 0;
  margin-bottom: 0;
}
.u-form .u-form-horizontal .u-form-group.u-form-checkbox,
.u-form .u-form-horizontal .u-form-group.u-form-agree {
  align-items: center;
}
.u-form .u-form-horizontal input[type="checkbox"] {
  width: 13px;
  max-width: 13px;
  margin-bottom: 3px;
  min-width: 13px;
}
.u-form .u-form-vertical .u-form-group.u-form-checkbox,
.u-form .u-form-vertical .u-form-group.u-form-agree {
  align-items: baseline;
}
.u-form-send-message {
  z-index: 1;
}
.u-form-send-error {
  background: #F95D51;
}
.u-form-send-success {
  background: #62C584;
}
.u-form {
  position: relative;
  font-size: 1rem;
  height: auto !important;
}
.u-form-group {
  text-align: start;
}
.u-btn-submit {
  display: inline-block;
}
.u-label {
  font-weight: normal;
}
.u-form ::placeholder {
  opacity: 0.5;
}
.u-form :-ms-input-placeholder {
  opacity: 1;
}
.u-form-horizontal .u-form-submit {
  margin-right: 0 !important;
}
.u-form-vertical .u-form-submit {
  margin-bottom: 0 !important;
}
@media (max-width: 767px) {
  .u-form-horizontal {
    flex-direction: column;
    align-items: stretch;
    margin: -0.5rem !important;
  }
  .u-form-horizontal .u-form-group {
    border: 0.5rem solid transparent !important;
    margin-right: 0 !important;
  }
  .u-form-horizontal label {
    display: none;
  }
  .u-form-horizontal .u-btn-submit {
    flex-grow: 1;
  }
}
.u-input-round {
  border-radius: 4px;
}
.u-input-rectangle {
  border-radius: 0;
}
.u-form-select-wrapper {
  position: relative;
}
.u-form-select-wrapper select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.u-form-select-wrapper .u-caret {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  pointer-events: none;
}
.u-form-select-wrapper select[size] ~ .u-caret {
  display: none;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
html {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
body {
  height: auto;
  min-height: 100%;
}
body,
aside,
.u-sidebar-block,
section,
header,
footer {
  position: relative;
}
section > *,
header > *,
footer > *,
.u-sheet > * {
  position: relative;
}
base {
  display: none;
}
a {
  color: #259bca;
  text-decoration: none;
}
a:hover {
  color: #0676a4;
}
a:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.u-sheet-left {
  left: calc((100% - 1140px) / 2);
}
.u-sheet-right {
  right: calc((100% - 1140px) / 2);
}
.u-clearfix:after,
.u-clearfix:before {
  content: '';
  display: table;
}
.u-clearfix:after {
  clear: both;
}
.u-textlink,
.u-textlink:hover,
.u-textlink:focus,
.u-textlink:active {
  color: inherit;
}
.u-opacity-100,
.u-opacity-100:before {
  opacity: 1;
}
.u-opacity-95,
.u-opacity-95:before {
  opacity: 0.95;
}
.u-opacity-90,
.u-opacity-90:before {
  opacity: 0.9;
}
.u-opacity-85,
.u-opacity-85:before {
  opacity: 0.85;
}
.u-opacity-80,
.u-opacity-80:before {
  opacity: 0.8;
}
.u-opacity-75,
.u-opacity-75:before {
  opacity: 0.75;
}
.u-opacity-70,
.u-opacity-70:before {
  opacity: 0.7;
}
.u-opacity-65,
.u-opacity-65:before {
  opacity: 0.65;
}
.u-opacity-60,
.u-opacity-60:before {
  opacity: 0.6;
}
.u-opacity-55,
.u-opacity-55:before {
  opacity: 0.55;
}
.u-opacity-50,
.u-opacity-50:before {
  opacity: 0.5;
}
.u-opacity-45,
.u-opacity-45:before {
  opacity: 0.45;
}
.u-opacity-40,
.u-opacity-40:before {
  opacity: 0.4;
}
.u-opacity-35,
.u-opacity-35:before {
  opacity: 0.35;
}
.u-opacity-30,
.u-opacity-30:before {
  opacity: 0.3;
}
.u-opacity-25,
.u-opacity-25:before {
  opacity: 0.25;
}
.u-opacity-20,
.u-opacity-20:before {
  opacity: 0.2;
}
.u-opacity-15,
.u-opacity-15:before {
  opacity: 0.15;
}
.u-opacity-10,
.u-opacity-10:before {
  opacity: 0.1;
}
.u-opacity-5,
.u-opacity-5:before {
  opacity: 0.05;
}
.u-opacity-0,
.u-opacity-0:before {
  opacity: 0;
}
.u-text.u-spacing-100 li {
  margin-bottom: 100px;
}
.u-text.u-indent-100,
.u-text.u-indent-100 ul,
.u-text.u-indent-100 ol {
  padding-left: 120px;
}
.u-spacing-100.u-price-wrapper > div + div,
.u-spacing-100 .u-social-url + .u-social-url {
  margin-left: 100px;
}
.u-spacing-100.u-icon,
.u-spacing-100.u-search-icon,
.u-spacing-100.u-gallery-nav,
.u-spacing-100.u-carousel-control {
  padding: 100px;
}
blockquote.u-text.u-indent-100 {
  padding-left: 100px;
}
.u-text.u-spacing-99 li {
  margin-bottom: 99px;
}
.u-text.u-indent-99,
.u-text.u-indent-99 ul,
.u-text.u-indent-99 ol {
  padding-left: 119px;
}
.u-spacing-99.u-price-wrapper > div + div,
.u-spacing-99 .u-social-url + .u-social-url {
  margin-left: 99px;
}
.u-spacing-99.u-icon,
.u-spacing-99.u-search-icon,
.u-spacing-99.u-gallery-nav,
.u-spacing-99.u-carousel-control {
  padding: 99px;
}
blockquote.u-text.u-indent-99 {
  padding-left: 99px;
}
.u-text.u-spacing-98 li {
  margin-bottom: 98px;
}
.u-text.u-indent-98,
.u-text.u-indent-98 ul,
.u-text.u-indent-98 ol {
  padding-left: 118px;
}
.u-spacing-98.u-price-wrapper > div + div,
.u-spacing-98 .u-social-url + .u-social-url {
  margin-left: 98px;
}
.u-spacing-98.u-icon,
.u-spacing-98.u-search-icon,
.u-spacing-98.u-gallery-nav,
.u-spacing-98.u-carousel-control {
  padding: 98px;
}
blockquote.u-text.u-indent-98 {
  padding-left: 98px;
}
.u-text.u-spacing-97 li {
  margin-bottom: 97px;
}
.u-text.u-indent-97,
.u-text.u-indent-97 ul,
.u-text.u-indent-97 ol {
  padding-left: 117px;
}
.u-spacing-97.u-price-wrapper > div + div,
.u-spacing-97 .u-social-url + .u-social-url {
  margin-left: 97px;
}
.u-spacing-97.u-icon,
.u-spacing-97.u-search-icon,
.u-spacing-97.u-gallery-nav,
.u-spacing-97.u-carousel-control {
  padding: 97px;
}
blockquote.u-text.u-indent-97 {
  padding-left: 97px;
}
.u-text.u-spacing-96 li {
  margin-bottom: 96px;
}
.u-text.u-indent-96,
.u-text.u-indent-96 ul,
.u-text.u-indent-96 ol {
  padding-left: 116px;
}
.u-spacing-96.u-price-wrapper > div + div,
.u-spacing-96 .u-social-url + .u-social-url {
  margin-left: 96px;
}
.u-spacing-96.u-icon,
.u-spacing-96.u-search-icon,
.u-spacing-96.u-gallery-nav,
.u-spacing-96.u-carousel-control {
  padding: 96px;
}
blockquote.u-text.u-indent-96 {
  padding-left: 96px;
}
.u-text.u-spacing-95 li {
  margin-bottom: 95px;
}
.u-text.u-indent-95,
.u-text.u-indent-95 ul,
.u-text.u-indent-95 ol {
  padding-left: 115px;
}
.u-spacing-95.u-price-wrapper > div + div,
.u-spacing-95 .u-social-url + .u-social-url {
  margin-left: 95px;
}
.u-spacing-95.u-icon,
.u-spacing-95.u-search-icon,
.u-spacing-95.u-gallery-nav,
.u-spacing-95.u-carousel-control {
  padding: 95px;
}
blockquote.u-text.u-indent-95 {
  padding-left: 95px;
}
.u-text.u-spacing-94 li {
  margin-bottom: 94px;
}
.u-text.u-indent-94,
.u-text.u-indent-94 ul,
.u-text.u-indent-94 ol {
  padding-left: 114px;
}
.u-spacing-94.u-price-wrapper > div + div,
.u-spacing-94 .u-social-url + .u-social-url {
  margin-left: 94px;
}
.u-spacing-94.u-icon,
.u-spacing-94.u-search-icon,
.u-spacing-94.u-gallery-nav,
.u-spacing-94.u-carousel-control {
  padding: 94px;
}
blockquote.u-text.u-indent-94 {
  padding-left: 94px;
}
.u-text.u-spacing-93 li {
  margin-bottom: 93px;
}
.u-text.u-indent-93,
.u-text.u-indent-93 ul,
.u-text.u-indent-93 ol {
  padding-left: 113px;
}
.u-spacing-93.u-price-wrapper > div + div,
.u-spacing-93 .u-social-url + .u-social-url {
  margin-left: 93px;
}
.u-spacing-93.u-icon,
.u-spacing-93.u-search-icon,
.u-spacing-93.u-gallery-nav,
.u-spacing-93.u-carousel-control {
  padding: 93px;
}
blockquote.u-text.u-indent-93 {
  padding-left: 93px;
}
.u-text.u-spacing-92 li {
  margin-bottom: 92px;
}
.u-text.u-indent-92,
.u-text.u-indent-92 ul,
.u-text.u-indent-92 ol {
  padding-left: 112px;
}
.u-spacing-92.u-price-wrapper > div + div,
.u-spacing-92 .u-social-url + .u-social-url {
  margin-left: 92px;
}
.u-spacing-92.u-icon,
.u-spacing-92.u-search-icon,
.u-spacing-92.u-gallery-nav,
.u-spacing-92.u-carousel-control {
  padding: 92px;
}
blockquote.u-text.u-indent-92 {
  padding-left: 92px;
}
.u-text.u-spacing-91 li {
  margin-bottom: 91px;
}
.u-text.u-indent-91,
.u-text.u-indent-91 ul,
.u-text.u-indent-91 ol {
  padding-left: 111px;
}
.u-spacing-91.u-price-wrapper > div + div,
.u-spacing-91 .u-social-url + .u-social-url {
  margin-left: 91px;
}
.u-spacing-91.u-icon,
.u-spacing-91.u-search-icon,
.u-spacing-91.u-gallery-nav,
.u-spacing-91.u-carousel-control {
  padding: 91px;
}
blockquote.u-text.u-indent-91 {
  padding-left: 91px;
}
.u-text.u-spacing-90 li {
  margin-bottom: 90px;
}
.u-text.u-indent-90,
.u-text.u-indent-90 ul,
.u-text.u-indent-90 ol {
  padding-left: 110px;
}
.u-spacing-90.u-price-wrapper > div + div,
.u-spacing-90 .u-social-url + .u-social-url {
  margin-left: 90px;
}
.u-spacing-90.u-icon,
.u-spacing-90.u-search-icon,
.u-spacing-90.u-gallery-nav,
.u-spacing-90.u-carousel-control {
  padding: 90px;
}
blockquote.u-text.u-indent-90 {
  padding-left: 90px;
}
.u-text.u-spacing-89 li {
  margin-bottom: 89px;
}
.u-text.u-indent-89,
.u-text.u-indent-89 ul,
.u-text.u-indent-89 ol {
  padding-left: 109px;
}
.u-spacing-89.u-price-wrapper > div + div,
.u-spacing-89 .u-social-url + .u-social-url {
  margin-left: 89px;
}
.u-spacing-89.u-icon,
.u-spacing-89.u-search-icon,
.u-spacing-89.u-gallery-nav,
.u-spacing-89.u-carousel-control {
  padding: 89px;
}
blockquote.u-text.u-indent-89 {
  padding-left: 89px;
}
.u-text.u-spacing-88 li {
  margin-bottom: 88px;
}
.u-text.u-indent-88,
.u-text.u-indent-88 ul,
.u-text.u-indent-88 ol {
  padding-left: 108px;
}
.u-spacing-88.u-price-wrapper > div + div,
.u-spacing-88 .u-social-url + .u-social-url {
  margin-left: 88px;
}
.u-spacing-88.u-icon,
.u-spacing-88.u-search-icon,
.u-spacing-88.u-gallery-nav,
.u-spacing-88.u-carousel-control {
  padding: 88px;
}
blockquote.u-text.u-indent-88 {
  padding-left: 88px;
}
.u-text.u-spacing-87 li {
  margin-bottom: 87px;
}
.u-text.u-indent-87,
.u-text.u-indent-87 ul,
.u-text.u-indent-87 ol {
  padding-left: 107px;
}
.u-spacing-87.u-price-wrapper > div + div,
.u-spacing-87 .u-social-url + .u-social-url {
  margin-left: 87px;
}
.u-spacing-87.u-icon,
.u-spacing-87.u-search-icon,
.u-spacing-87.u-gallery-nav,
.u-spacing-87.u-carousel-control {
  padding: 87px;
}
blockquote.u-text.u-indent-87 {
  padding-left: 87px;
}
.u-text.u-spacing-86 li {
  margin-bottom: 86px;
}
.u-text.u-indent-86,
.u-text.u-indent-86 ul,
.u-text.u-indent-86 ol {
  padding-left: 106px;
}
.u-spacing-86.u-price-wrapper > div + div,
.u-spacing-86 .u-social-url + .u-social-url {
  margin-left: 86px;
}
.u-spacing-86.u-icon,
.u-spacing-86.u-search-icon,
.u-spacing-86.u-gallery-nav,
.u-spacing-86.u-carousel-control {
  padding: 86px;
}
blockquote.u-text.u-indent-86 {
  padding-left: 86px;
}
.u-text.u-spacing-85 li {
  margin-bottom: 85px;
}
.u-text.u-indent-85,
.u-text.u-indent-85 ul,
.u-text.u-indent-85 ol {
  padding-left: 105px;
}
.u-spacing-85.u-price-wrapper > div + div,
.u-spacing-85 .u-social-url + .u-social-url {
  margin-left: 85px;
}
.u-spacing-85.u-icon,
.u-spacing-85.u-search-icon,
.u-spacing-85.u-gallery-nav,
.u-spacing-85.u-carousel-control {
  padding: 85px;
}
blockquote.u-text.u-indent-85 {
  padding-left: 85px;
}
.u-text.u-spacing-84 li {
  margin-bottom: 84px;
}
.u-text.u-indent-84,
.u-text.u-indent-84 ul,
.u-text.u-indent-84 ol {
  padding-left: 104px;
}
.u-spacing-84.u-price-wrapper > div + div,
.u-spacing-84 .u-social-url + .u-social-url {
  margin-left: 84px;
}
.u-spacing-84.u-icon,
.u-spacing-84.u-search-icon,
.u-spacing-84.u-gallery-nav,
.u-spacing-84.u-carousel-control {
  padding: 84px;
}
blockquote.u-text.u-indent-84 {
  padding-left: 84px;
}
.u-text.u-spacing-83 li {
  margin-bottom: 83px;
}
.u-text.u-indent-83,
.u-text.u-indent-83 ul,
.u-text.u-indent-83 ol {
  padding-left: 103px;
}
.u-spacing-83.u-price-wrapper > div + div,
.u-spacing-83 .u-social-url + .u-social-url {
  margin-left: 83px;
}
.u-spacing-83.u-icon,
.u-spacing-83.u-search-icon,
.u-spacing-83.u-gallery-nav,
.u-spacing-83.u-carousel-control {
  padding: 83px;
}
blockquote.u-text.u-indent-83 {
  padding-left: 83px;
}
.u-text.u-spacing-82 li {
  margin-bottom: 82px;
}
.u-text.u-indent-82,
.u-text.u-indent-82 ul,
.u-text.u-indent-82 ol {
  padding-left: 102px;
}
.u-spacing-82.u-price-wrapper > div + div,
.u-spacing-82 .u-social-url + .u-social-url {
  margin-left: 82px;
}
.u-spacing-82.u-icon,
.u-spacing-82.u-search-icon,
.u-spacing-82.u-gallery-nav,
.u-spacing-82.u-carousel-control {
  padding: 82px;
}
blockquote.u-text.u-indent-82 {
  padding-left: 82px;
}
.u-text.u-spacing-81 li {
  margin-bottom: 81px;
}
.u-text.u-indent-81,
.u-text.u-indent-81 ul,
.u-text.u-indent-81 ol {
  padding-left: 101px;
}
.u-spacing-81.u-price-wrapper > div + div,
.u-spacing-81 .u-social-url + .u-social-url {
  margin-left: 81px;
}
.u-spacing-81.u-icon,
.u-spacing-81.u-search-icon,
.u-spacing-81.u-gallery-nav,
.u-spacing-81.u-carousel-control {
  padding: 81px;
}
blockquote.u-text.u-indent-81 {
  padding-left: 81px;
}
.u-text.u-spacing-80 li {
  margin-bottom: 80px;
}
.u-text.u-indent-80,
.u-text.u-indent-80 ul,
.u-text.u-indent-80 ol {
  padding-left: 100px;
}
.u-spacing-80.u-price-wrapper > div + div,
.u-spacing-80 .u-social-url + .u-social-url {
  margin-left: 80px;
}
.u-spacing-80.u-icon,
.u-spacing-80.u-search-icon,
.u-spacing-80.u-gallery-nav,
.u-spacing-80.u-carousel-control {
  padding: 80px;
}
blockquote.u-text.u-indent-80 {
  padding-left: 80px;
}
.u-text.u-spacing-79 li {
  margin-bottom: 79px;
}
.u-text.u-indent-79,
.u-text.u-indent-79 ul,
.u-text.u-indent-79 ol {
  padding-left: 99px;
}
.u-spacing-79.u-price-wrapper > div + div,
.u-spacing-79 .u-social-url + .u-social-url {
  margin-left: 79px;
}
.u-spacing-79.u-icon,
.u-spacing-79.u-search-icon,
.u-spacing-79.u-gallery-nav,
.u-spacing-79.u-carousel-control {
  padding: 79px;
}
blockquote.u-text.u-indent-79 {
  padding-left: 79px;
}
.u-text.u-spacing-78 li {
  margin-bottom: 78px;
}
.u-text.u-indent-78,
.u-text.u-indent-78 ul,
.u-text.u-indent-78 ol {
  padding-left: 98px;
}
.u-spacing-78.u-price-wrapper > div + div,
.u-spacing-78 .u-social-url + .u-social-url {
  margin-left: 78px;
}
.u-spacing-78.u-icon,
.u-spacing-78.u-search-icon,
.u-spacing-78.u-gallery-nav,
.u-spacing-78.u-carousel-control {
  padding: 78px;
}
blockquote.u-text.u-indent-78 {
  padding-left: 78px;
}
.u-text.u-spacing-77 li {
  margin-bottom: 77px;
}
.u-text.u-indent-77,
.u-text.u-indent-77 ul,
.u-text.u-indent-77 ol {
  padding-left: 97px;
}
.u-spacing-77.u-price-wrapper > div + div,
.u-spacing-77 .u-social-url + .u-social-url {
  margin-left: 77px;
}
.u-spacing-77.u-icon,
.u-spacing-77.u-search-icon,
.u-spacing-77.u-gallery-nav,
.u-spacing-77.u-carousel-control {
  padding: 77px;
}
blockquote.u-text.u-indent-77 {
  padding-left: 77px;
}
.u-text.u-spacing-76 li {
  margin-bottom: 76px;
}
.u-text.u-indent-76,
.u-text.u-indent-76 ul,
.u-text.u-indent-76 ol {
  padding-left: 96px;
}
.u-spacing-76.u-price-wrapper > div + div,
.u-spacing-76 .u-social-url + .u-social-url {
  margin-left: 76px;
}
.u-spacing-76.u-icon,
.u-spacing-76.u-search-icon,
.u-spacing-76.u-gallery-nav,
.u-spacing-76.u-carousel-control {
  padding: 76px;
}
blockquote.u-text.u-indent-76 {
  padding-left: 76px;
}
.u-text.u-spacing-75 li {
  margin-bottom: 75px;
}
.u-text.u-indent-75,
.u-text.u-indent-75 ul,
.u-text.u-indent-75 ol {
  padding-left: 95px;
}
.u-spacing-75.u-price-wrapper > div + div,
.u-spacing-75 .u-social-url + .u-social-url {
  margin-left: 75px;
}
.u-spacing-75.u-icon,
.u-spacing-75.u-search-icon,
.u-spacing-75.u-gallery-nav,
.u-spacing-75.u-carousel-control {
  padding: 75px;
}
blockquote.u-text.u-indent-75 {
  padding-left: 75px;
}
.u-text.u-spacing-74 li {
  margin-bottom: 74px;
}
.u-text.u-indent-74,
.u-text.u-indent-74 ul,
.u-text.u-indent-74 ol {
  padding-left: 94px;
}
.u-spacing-74.u-price-wrapper > div + div,
.u-spacing-74 .u-social-url + .u-social-url {
  margin-left: 74px;
}
.u-spacing-74.u-icon,
.u-spacing-74.u-search-icon,
.u-spacing-74.u-gallery-nav,
.u-spacing-74.u-carousel-control {
  padding: 74px;
}
blockquote.u-text.u-indent-74 {
  padding-left: 74px;
}
.u-text.u-spacing-73 li {
  margin-bottom: 73px;
}
.u-text.u-indent-73,
.u-text.u-indent-73 ul,
.u-text.u-indent-73 ol {
  padding-left: 93px;
}
.u-spacing-73.u-price-wrapper > div + div,
.u-spacing-73 .u-social-url + .u-social-url {
  margin-left: 73px;
}
.u-spacing-73.u-icon,
.u-spacing-73.u-search-icon,
.u-spacing-73.u-gallery-nav,
.u-spacing-73.u-carousel-control {
  padding: 73px;
}
blockquote.u-text.u-indent-73 {
  padding-left: 73px;
}
.u-text.u-spacing-72 li {
  margin-bottom: 72px;
}
.u-text.u-indent-72,
.u-text.u-indent-72 ul,
.u-text.u-indent-72 ol {
  padding-left: 92px;
}
.u-spacing-72.u-price-wrapper > div + div,
.u-spacing-72 .u-social-url + .u-social-url {
  margin-left: 72px;
}
.u-spacing-72.u-icon,
.u-spacing-72.u-search-icon,
.u-spacing-72.u-gallery-nav,
.u-spacing-72.u-carousel-control {
  padding: 72px;
}
blockquote.u-text.u-indent-72 {
  padding-left: 72px;
}
.u-text.u-spacing-71 li {
  margin-bottom: 71px;
}
.u-text.u-indent-71,
.u-text.u-indent-71 ul,
.u-text.u-indent-71 ol {
  padding-left: 91px;
}
.u-spacing-71.u-price-wrapper > div + div,
.u-spacing-71 .u-social-url + .u-social-url {
  margin-left: 71px;
}
.u-spacing-71.u-icon,
.u-spacing-71.u-search-icon,
.u-spacing-71.u-gallery-nav,
.u-spacing-71.u-carousel-control {
  padding: 71px;
}
blockquote.u-text.u-indent-71 {
  padding-left: 71px;
}
.u-text.u-spacing-70 li {
  margin-bottom: 70px;
}
.u-text.u-indent-70,
.u-text.u-indent-70 ul,
.u-text.u-indent-70 ol {
  padding-left: 90px;
}
.u-spacing-70.u-price-wrapper > div + div,
.u-spacing-70 .u-social-url + .u-social-url {
  margin-left: 70px;
}
.u-spacing-70.u-icon,
.u-spacing-70.u-search-icon,
.u-spacing-70.u-gallery-nav,
.u-spacing-70.u-carousel-control {
  padding: 70px;
}
blockquote.u-text.u-indent-70 {
  padding-left: 70px;
}
.u-text.u-spacing-69 li {
  margin-bottom: 69px;
}
.u-text.u-indent-69,
.u-text.u-indent-69 ul,
.u-text.u-indent-69 ol {
  padding-left: 89px;
}
.u-spacing-69.u-price-wrapper > div + div,
.u-spacing-69 .u-social-url + .u-social-url {
  margin-left: 69px;
}
.u-spacing-69.u-icon,
.u-spacing-69.u-search-icon,
.u-spacing-69.u-gallery-nav,
.u-spacing-69.u-carousel-control {
  padding: 69px;
}
blockquote.u-text.u-indent-69 {
  padding-left: 69px;
}
.u-text.u-spacing-68 li {
  margin-bottom: 68px;
}
.u-text.u-indent-68,
.u-text.u-indent-68 ul,
.u-text.u-indent-68 ol {
  padding-left: 88px;
}
.u-spacing-68.u-price-wrapper > div + div,
.u-spacing-68 .u-social-url + .u-social-url {
  margin-left: 68px;
}
.u-spacing-68.u-icon,
.u-spacing-68.u-search-icon,
.u-spacing-68.u-gallery-nav,
.u-spacing-68.u-carousel-control {
  padding: 68px;
}
blockquote.u-text.u-indent-68 {
  padding-left: 68px;
}
.u-text.u-spacing-67 li {
  margin-bottom: 67px;
}
.u-text.u-indent-67,
.u-text.u-indent-67 ul,
.u-text.u-indent-67 ol {
  padding-left: 87px;
}
.u-spacing-67.u-price-wrapper > div + div,
.u-spacing-67 .u-social-url + .u-social-url {
  margin-left: 67px;
}
.u-spacing-67.u-icon,
.u-spacing-67.u-search-icon,
.u-spacing-67.u-gallery-nav,
.u-spacing-67.u-carousel-control {
  padding: 67px;
}
blockquote.u-text.u-indent-67 {
  padding-left: 67px;
}
.u-text.u-spacing-66 li {
  margin-bottom: 66px;
}
.u-text.u-indent-66,
.u-text.u-indent-66 ul,
.u-text.u-indent-66 ol {
  padding-left: 86px;
}
.u-spacing-66.u-price-wrapper > div + div,
.u-spacing-66 .u-social-url + .u-social-url {
  margin-left: 66px;
}
.u-spacing-66.u-icon,
.u-spacing-66.u-search-icon,
.u-spacing-66.u-gallery-nav,
.u-spacing-66.u-carousel-control {
  padding: 66px;
}
blockquote.u-text.u-indent-66 {
  padding-left: 66px;
}
.u-text.u-spacing-65 li {
  margin-bottom: 65px;
}
.u-text.u-indent-65,
.u-text.u-indent-65 ul,
.u-text.u-indent-65 ol {
  padding-left: 85px;
}
.u-spacing-65.u-price-wrapper > div + div,
.u-spacing-65 .u-social-url + .u-social-url {
  margin-left: 65px;
}
.u-spacing-65.u-icon,
.u-spacing-65.u-search-icon,
.u-spacing-65.u-gallery-nav,
.u-spacing-65.u-carousel-control {
  padding: 65px;
}
blockquote.u-text.u-indent-65 {
  padding-left: 65px;
}
.u-text.u-spacing-64 li {
  margin-bottom: 64px;
}
.u-text.u-indent-64,
.u-text.u-indent-64 ul,
.u-text.u-indent-64 ol {
  padding-left: 84px;
}
.u-spacing-64.u-price-wrapper > div + div,
.u-spacing-64 .u-social-url + .u-social-url {
  margin-left: 64px;
}
.u-spacing-64.u-icon,
.u-spacing-64.u-search-icon,
.u-spacing-64.u-gallery-nav,
.u-spacing-64.u-carousel-control {
  padding: 64px;
}
blockquote.u-text.u-indent-64 {
  padding-left: 64px;
}
.u-text.u-spacing-63 li {
  margin-bottom: 63px;
}
.u-text.u-indent-63,
.u-text.u-indent-63 ul,
.u-text.u-indent-63 ol {
  padding-left: 83px;
}
.u-spacing-63.u-price-wrapper > div + div,
.u-spacing-63 .u-social-url + .u-social-url {
  margin-left: 63px;
}
.u-spacing-63.u-icon,
.u-spacing-63.u-search-icon,
.u-spacing-63.u-gallery-nav,
.u-spacing-63.u-carousel-control {
  padding: 63px;
}
blockquote.u-text.u-indent-63 {
  padding-left: 63px;
}
.u-text.u-spacing-62 li {
  margin-bottom: 62px;
}
.u-text.u-indent-62,
.u-text.u-indent-62 ul,
.u-text.u-indent-62 ol {
  padding-left: 82px;
}
.u-spacing-62.u-price-wrapper > div + div,
.u-spacing-62 .u-social-url + .u-social-url {
  margin-left: 62px;
}
.u-spacing-62.u-icon,
.u-spacing-62.u-search-icon,
.u-spacing-62.u-gallery-nav,
.u-spacing-62.u-carousel-control {
  padding: 62px;
}
blockquote.u-text.u-indent-62 {
  padding-left: 62px;
}
.u-text.u-spacing-61 li {
  margin-bottom: 61px;
}
.u-text.u-indent-61,
.u-text.u-indent-61 ul,
.u-text.u-indent-61 ol {
  padding-left: 81px;
}
.u-spacing-61.u-price-wrapper > div + div,
.u-spacing-61 .u-social-url + .u-social-url {
  margin-left: 61px;
}
.u-spacing-61.u-icon,
.u-spacing-61.u-search-icon,
.u-spacing-61.u-gallery-nav,
.u-spacing-61.u-carousel-control {
  padding: 61px;
}
blockquote.u-text.u-indent-61 {
  padding-left: 61px;
}
.u-text.u-spacing-60 li {
  margin-bottom: 60px;
}
.u-text.u-indent-60,
.u-text.u-indent-60 ul,
.u-text.u-indent-60 ol {
  padding-left: 80px;
}
.u-spacing-60.u-price-wrapper > div + div,
.u-spacing-60 .u-social-url + .u-social-url {
  margin-left: 60px;
}
.u-spacing-60.u-icon,
.u-spacing-60.u-search-icon,
.u-spacing-60.u-gallery-nav,
.u-spacing-60.u-carousel-control {
  padding: 60px;
}
blockquote.u-text.u-indent-60 {
  padding-left: 60px;
}
.u-text.u-spacing-59 li {
  margin-bottom: 59px;
}
.u-text.u-indent-59,
.u-text.u-indent-59 ul,
.u-text.u-indent-59 ol {
  padding-left: 79px;
}
.u-spacing-59.u-price-wrapper > div + div,
.u-spacing-59 .u-social-url + .u-social-url {
  margin-left: 59px;
}
.u-spacing-59.u-icon,
.u-spacing-59.u-search-icon,
.u-spacing-59.u-gallery-nav,
.u-spacing-59.u-carousel-control {
  padding: 59px;
}
blockquote.u-text.u-indent-59 {
  padding-left: 59px;
}
.u-text.u-spacing-58 li {
  margin-bottom: 58px;
}
.u-text.u-indent-58,
.u-text.u-indent-58 ul,
.u-text.u-indent-58 ol {
  padding-left: 78px;
}
.u-spacing-58.u-price-wrapper > div + div,
.u-spacing-58 .u-social-url + .u-social-url {
  margin-left: 58px;
}
.u-spacing-58.u-icon,
.u-spacing-58.u-search-icon,
.u-spacing-58.u-gallery-nav,
.u-spacing-58.u-carousel-control {
  padding: 58px;
}
blockquote.u-text.u-indent-58 {
  padding-left: 58px;
}
.u-text.u-spacing-57 li {
  margin-bottom: 57px;
}
.u-text.u-indent-57,
.u-text.u-indent-57 ul,
.u-text.u-indent-57 ol {
  padding-left: 77px;
}
.u-spacing-57.u-price-wrapper > div + div,
.u-spacing-57 .u-social-url + .u-social-url {
  margin-left: 57px;
}
.u-spacing-57.u-icon,
.u-spacing-57.u-search-icon,
.u-spacing-57.u-gallery-nav,
.u-spacing-57.u-carousel-control {
  padding: 57px;
}
blockquote.u-text.u-indent-57 {
  padding-left: 57px;
}
.u-text.u-spacing-56 li {
  margin-bottom: 56px;
}
.u-text.u-indent-56,
.u-text.u-indent-56 ul,
.u-text.u-indent-56 ol {
  padding-left: 76px;
}
.u-spacing-56.u-price-wrapper > div + div,
.u-spacing-56 .u-social-url + .u-social-url {
  margin-left: 56px;
}
.u-spacing-56.u-icon,
.u-spacing-56.u-search-icon,
.u-spacing-56.u-gallery-nav,
.u-spacing-56.u-carousel-control {
  padding: 56px;
}
blockquote.u-text.u-indent-56 {
  padding-left: 56px;
}
.u-text.u-spacing-55 li {
  margin-bottom: 55px;
}
.u-text.u-indent-55,
.u-text.u-indent-55 ul,
.u-text.u-indent-55 ol {
  padding-left: 75px;
}
.u-spacing-55.u-price-wrapper > div + div,
.u-spacing-55 .u-social-url + .u-social-url {
  margin-left: 55px;
}
.u-spacing-55.u-icon,
.u-spacing-55.u-search-icon,
.u-spacing-55.u-gallery-nav,
.u-spacing-55.u-carousel-control {
  padding: 55px;
}
blockquote.u-text.u-indent-55 {
  padding-left: 55px;
}
.u-text.u-spacing-54 li {
  margin-bottom: 54px;
}
.u-text.u-indent-54,
.u-text.u-indent-54 ul,
.u-text.u-indent-54 ol {
  padding-left: 74px;
}
.u-spacing-54.u-price-wrapper > div + div,
.u-spacing-54 .u-social-url + .u-social-url {
  margin-left: 54px;
}
.u-spacing-54.u-icon,
.u-spacing-54.u-search-icon,
.u-spacing-54.u-gallery-nav,
.u-spacing-54.u-carousel-control {
  padding: 54px;
}
blockquote.u-text.u-indent-54 {
  padding-left: 54px;
}
.u-text.u-spacing-53 li {
  margin-bottom: 53px;
}
.u-text.u-indent-53,
.u-text.u-indent-53 ul,
.u-text.u-indent-53 ol {
  padding-left: 73px;
}
.u-spacing-53.u-price-wrapper > div + div,
.u-spacing-53 .u-social-url + .u-social-url {
  margin-left: 53px;
}
.u-spacing-53.u-icon,
.u-spacing-53.u-search-icon,
.u-spacing-53.u-gallery-nav,
.u-spacing-53.u-carousel-control {
  padding: 53px;
}
blockquote.u-text.u-indent-53 {
  padding-left: 53px;
}
.u-text.u-spacing-52 li {
  margin-bottom: 52px;
}
.u-text.u-indent-52,
.u-text.u-indent-52 ul,
.u-text.u-indent-52 ol {
  padding-left: 72px;
}
.u-spacing-52.u-price-wrapper > div + div,
.u-spacing-52 .u-social-url + .u-social-url {
  margin-left: 52px;
}
.u-spacing-52.u-icon,
.u-spacing-52.u-search-icon,
.u-spacing-52.u-gallery-nav,
.u-spacing-52.u-carousel-control {
  padding: 52px;
}
blockquote.u-text.u-indent-52 {
  padding-left: 52px;
}
.u-text.u-spacing-51 li {
  margin-bottom: 51px;
}
.u-text.u-indent-51,
.u-text.u-indent-51 ul,
.u-text.u-indent-51 ol {
  padding-left: 71px;
}
.u-spacing-51.u-price-wrapper > div + div,
.u-spacing-51 .u-social-url + .u-social-url {
  margin-left: 51px;
}
.u-spacing-51.u-icon,
.u-spacing-51.u-search-icon,
.u-spacing-51.u-gallery-nav,
.u-spacing-51.u-carousel-control {
  padding: 51px;
}
blockquote.u-text.u-indent-51 {
  padding-left: 51px;
}
.u-text.u-spacing-50 li {
  margin-bottom: 50px;
}
.u-text.u-indent-50,
.u-text.u-indent-50 ul,
.u-text.u-indent-50 ol {
  padding-left: 70px;
}
.u-spacing-50.u-price-wrapper > div + div,
.u-spacing-50 .u-social-url + .u-social-url {
  margin-left: 50px;
}
.u-spacing-50.u-icon,
.u-spacing-50.u-search-icon,
.u-spacing-50.u-gallery-nav,
.u-spacing-50.u-carousel-control {
  padding: 50px;
}
blockquote.u-text.u-indent-50 {
  padding-left: 50px;
}
.u-text.u-spacing-49 li {
  margin-bottom: 49px;
}
.u-text.u-indent-49,
.u-text.u-indent-49 ul,
.u-text.u-indent-49 ol {
  padding-left: 69px;
}
.u-spacing-49.u-price-wrapper > div + div,
.u-spacing-49 .u-social-url + .u-social-url {
  margin-left: 49px;
}
.u-spacing-49.u-icon,
.u-spacing-49.u-search-icon,
.u-spacing-49.u-gallery-nav,
.u-spacing-49.u-carousel-control {
  padding: 49px;
}
blockquote.u-text.u-indent-49 {
  padding-left: 49px;
}
.u-text.u-spacing-48 li {
  margin-bottom: 48px;
}
.u-text.u-indent-48,
.u-text.u-indent-48 ul,
.u-text.u-indent-48 ol {
  padding-left: 68px;
}
.u-spacing-48.u-price-wrapper > div + div,
.u-spacing-48 .u-social-url + .u-social-url {
  margin-left: 48px;
}
.u-spacing-48.u-icon,
.u-spacing-48.u-search-icon,
.u-spacing-48.u-gallery-nav,
.u-spacing-48.u-carousel-control {
  padding: 48px;
}
blockquote.u-text.u-indent-48 {
  padding-left: 48px;
}
.u-text.u-spacing-47 li {
  margin-bottom: 47px;
}
.u-text.u-indent-47,
.u-text.u-indent-47 ul,
.u-text.u-indent-47 ol {
  padding-left: 67px;
}
.u-spacing-47.u-price-wrapper > div + div,
.u-spacing-47 .u-social-url + .u-social-url {
  margin-left: 47px;
}
.u-spacing-47.u-icon,
.u-spacing-47.u-search-icon,
.u-spacing-47.u-gallery-nav,
.u-spacing-47.u-carousel-control {
  padding: 47px;
}
blockquote.u-text.u-indent-47 {
  padding-left: 47px;
}
.u-text.u-spacing-46 li {
  margin-bottom: 46px;
}
.u-text.u-indent-46,
.u-text.u-indent-46 ul,
.u-text.u-indent-46 ol {
  padding-left: 66px;
}
.u-spacing-46.u-price-wrapper > div + div,
.u-spacing-46 .u-social-url + .u-social-url {
  margin-left: 46px;
}
.u-spacing-46.u-icon,
.u-spacing-46.u-search-icon,
.u-spacing-46.u-gallery-nav,
.u-spacing-46.u-carousel-control {
  padding: 46px;
}
blockquote.u-text.u-indent-46 {
  padding-left: 46px;
}
.u-text.u-spacing-45 li {
  margin-bottom: 45px;
}
.u-text.u-indent-45,
.u-text.u-indent-45 ul,
.u-text.u-indent-45 ol {
  padding-left: 65px;
}
.u-spacing-45.u-price-wrapper > div + div,
.u-spacing-45 .u-social-url + .u-social-url {
  margin-left: 45px;
}
.u-spacing-45.u-icon,
.u-spacing-45.u-search-icon,
.u-spacing-45.u-gallery-nav,
.u-spacing-45.u-carousel-control {
  padding: 45px;
}
blockquote.u-text.u-indent-45 {
  padding-left: 45px;
}
.u-text.u-spacing-44 li {
  margin-bottom: 44px;
}
.u-text.u-indent-44,
.u-text.u-indent-44 ul,
.u-text.u-indent-44 ol {
  padding-left: 64px;
}
.u-spacing-44.u-price-wrapper > div + div,
.u-spacing-44 .u-social-url + .u-social-url {
  margin-left: 44px;
}
.u-spacing-44.u-icon,
.u-spacing-44.u-search-icon,
.u-spacing-44.u-gallery-nav,
.u-spacing-44.u-carousel-control {
  padding: 44px;
}
blockquote.u-text.u-indent-44 {
  padding-left: 44px;
}
.u-text.u-spacing-43 li {
  margin-bottom: 43px;
}
.u-text.u-indent-43,
.u-text.u-indent-43 ul,
.u-text.u-indent-43 ol {
  padding-left: 63px;
}
.u-spacing-43.u-price-wrapper > div + div,
.u-spacing-43 .u-social-url + .u-social-url {
  margin-left: 43px;
}
.u-spacing-43.u-icon,
.u-spacing-43.u-search-icon,
.u-spacing-43.u-gallery-nav,
.u-spacing-43.u-carousel-control {
  padding: 43px;
}
blockquote.u-text.u-indent-43 {
  padding-left: 43px;
}
.u-text.u-spacing-42 li {
  margin-bottom: 42px;
}
.u-text.u-indent-42,
.u-text.u-indent-42 ul,
.u-text.u-indent-42 ol {
  padding-left: 62px;
}
.u-spacing-42.u-price-wrapper > div + div,
.u-spacing-42 .u-social-url + .u-social-url {
  margin-left: 42px;
}
.u-spacing-42.u-icon,
.u-spacing-42.u-search-icon,
.u-spacing-42.u-gallery-nav,
.u-spacing-42.u-carousel-control {
  padding: 42px;
}
blockquote.u-text.u-indent-42 {
  padding-left: 42px;
}
.u-text.u-spacing-41 li {
  margin-bottom: 41px;
}
.u-text.u-indent-41,
.u-text.u-indent-41 ul,
.u-text.u-indent-41 ol {
  padding-left: 61px;
}
.u-spacing-41.u-price-wrapper > div + div,
.u-spacing-41 .u-social-url + .u-social-url {
  margin-left: 41px;
}
.u-spacing-41.u-icon,
.u-spacing-41.u-search-icon,
.u-spacing-41.u-gallery-nav,
.u-spacing-41.u-carousel-control {
  padding: 41px;
}
blockquote.u-text.u-indent-41 {
  padding-left: 41px;
}
.u-text.u-spacing-40 li {
  margin-bottom: 40px;
}
.u-text.u-indent-40,
.u-text.u-indent-40 ul,
.u-text.u-indent-40 ol {
  padding-left: 60px;
}
.u-spacing-40.u-price-wrapper > div + div,
.u-spacing-40 .u-social-url + .u-social-url {
  margin-left: 40px;
}
.u-spacing-40.u-icon,
.u-spacing-40.u-search-icon,
.u-spacing-40.u-gallery-nav,
.u-spacing-40.u-carousel-control {
  padding: 40px;
}
blockquote.u-text.u-indent-40 {
  padding-left: 40px;
}
.u-text.u-spacing-39 li {
  margin-bottom: 39px;
}
.u-text.u-indent-39,
.u-text.u-indent-39 ul,
.u-text.u-indent-39 ol {
  padding-left: 59px;
}
.u-spacing-39.u-price-wrapper > div + div,
.u-spacing-39 .u-social-url + .u-social-url {
  margin-left: 39px;
}
.u-spacing-39.u-icon,
.u-spacing-39.u-search-icon,
.u-spacing-39.u-gallery-nav,
.u-spacing-39.u-carousel-control {
  padding: 39px;
}
blockquote.u-text.u-indent-39 {
  padding-left: 39px;
}
.u-text.u-spacing-38 li {
  margin-bottom: 38px;
}
.u-text.u-indent-38,
.u-text.u-indent-38 ul,
.u-text.u-indent-38 ol {
  padding-left: 58px;
}
.u-spacing-38.u-price-wrapper > div + div,
.u-spacing-38 .u-social-url + .u-social-url {
  margin-left: 38px;
}
.u-spacing-38.u-icon,
.u-spacing-38.u-search-icon,
.u-spacing-38.u-gallery-nav,
.u-spacing-38.u-carousel-control {
  padding: 38px;
}
blockquote.u-text.u-indent-38 {
  padding-left: 38px;
}
.u-text.u-spacing-37 li {
  margin-bottom: 37px;
}
.u-text.u-indent-37,
.u-text.u-indent-37 ul,
.u-text.u-indent-37 ol {
  padding-left: 57px;
}
.u-spacing-37.u-price-wrapper > div + div,
.u-spacing-37 .u-social-url + .u-social-url {
  margin-left: 37px;
}
.u-spacing-37.u-icon,
.u-spacing-37.u-search-icon,
.u-spacing-37.u-gallery-nav,
.u-spacing-37.u-carousel-control {
  padding: 37px;
}
blockquote.u-text.u-indent-37 {
  padding-left: 37px;
}
.u-text.u-spacing-36 li {
  margin-bottom: 36px;
}
.u-text.u-indent-36,
.u-text.u-indent-36 ul,
.u-text.u-indent-36 ol {
  padding-left: 56px;
}
.u-spacing-36.u-price-wrapper > div + div,
.u-spacing-36 .u-social-url + .u-social-url {
  margin-left: 36px;
}
.u-spacing-36.u-icon,
.u-spacing-36.u-search-icon,
.u-spacing-36.u-gallery-nav,
.u-spacing-36.u-carousel-control {
  padding: 36px;
}
blockquote.u-text.u-indent-36 {
  padding-left: 36px;
}
.u-text.u-spacing-35 li {
  margin-bottom: 35px;
}
.u-text.u-indent-35,
.u-text.u-indent-35 ul,
.u-text.u-indent-35 ol {
  padding-left: 55px;
}
.u-spacing-35.u-price-wrapper > div + div,
.u-spacing-35 .u-social-url + .u-social-url {
  margin-left: 35px;
}
.u-spacing-35.u-icon,
.u-spacing-35.u-search-icon,
.u-spacing-35.u-gallery-nav,
.u-spacing-35.u-carousel-control {
  padding: 35px;
}
blockquote.u-text.u-indent-35 {
  padding-left: 35px;
}
.u-text.u-spacing-34 li {
  margin-bottom: 34px;
}
.u-text.u-indent-34,
.u-text.u-indent-34 ul,
.u-text.u-indent-34 ol {
  padding-left: 54px;
}
.u-spacing-34.u-price-wrapper > div + div,
.u-spacing-34 .u-social-url + .u-social-url {
  margin-left: 34px;
}
.u-spacing-34.u-icon,
.u-spacing-34.u-search-icon,
.u-spacing-34.u-gallery-nav,
.u-spacing-34.u-carousel-control {
  padding: 34px;
}
blockquote.u-text.u-indent-34 {
  padding-left: 34px;
}
.u-text.u-spacing-33 li {
  margin-bottom: 33px;
}
.u-text.u-indent-33,
.u-text.u-indent-33 ul,
.u-text.u-indent-33 ol {
  padding-left: 53px;
}
.u-spacing-33.u-price-wrapper > div + div,
.u-spacing-33 .u-social-url + .u-social-url {
  margin-left: 33px;
}
.u-spacing-33.u-icon,
.u-spacing-33.u-search-icon,
.u-spacing-33.u-gallery-nav,
.u-spacing-33.u-carousel-control {
  padding: 33px;
}
blockquote.u-text.u-indent-33 {
  padding-left: 33px;
}
.u-text.u-spacing-32 li {
  margin-bottom: 32px;
}
.u-text.u-indent-32,
.u-text.u-indent-32 ul,
.u-text.u-indent-32 ol {
  padding-left: 52px;
}
.u-spacing-32.u-price-wrapper > div + div,
.u-spacing-32 .u-social-url + .u-social-url {
  margin-left: 32px;
}
.u-spacing-32.u-icon,
.u-spacing-32.u-search-icon,
.u-spacing-32.u-gallery-nav,
.u-spacing-32.u-carousel-control {
  padding: 32px;
}
blockquote.u-text.u-indent-32 {
  padding-left: 32px;
}
.u-text.u-spacing-31 li {
  margin-bottom: 31px;
}
.u-text.u-indent-31,
.u-text.u-indent-31 ul,
.u-text.u-indent-31 ol {
  padding-left: 51px;
}
.u-spacing-31.u-price-wrapper > div + div,
.u-spacing-31 .u-social-url + .u-social-url {
  margin-left: 31px;
}
.u-spacing-31.u-icon,
.u-spacing-31.u-search-icon,
.u-spacing-31.u-gallery-nav,
.u-spacing-31.u-carousel-control {
  padding: 31px;
}
blockquote.u-text.u-indent-31 {
  padding-left: 31px;
}
.u-text.u-spacing-30 li {
  margin-bottom: 30px;
}
.u-text.u-indent-30,
.u-text.u-indent-30 ul,
.u-text.u-indent-30 ol {
  padding-left: 50px;
}
.u-spacing-30.u-price-wrapper > div + div,
.u-spacing-30 .u-social-url + .u-social-url {
  margin-left: 30px;
}
.u-spacing-30.u-icon,
.u-spacing-30.u-search-icon,
.u-spacing-30.u-gallery-nav,
.u-spacing-30.u-carousel-control {
  padding: 30px;
}
blockquote.u-text.u-indent-30 {
  padding-left: 30px;
}
.u-text.u-spacing-29 li {
  margin-bottom: 29px;
}
.u-text.u-indent-29,
.u-text.u-indent-29 ul,
.u-text.u-indent-29 ol {
  padding-left: 49px;
}
.u-spacing-29.u-price-wrapper > div + div,
.u-spacing-29 .u-social-url + .u-social-url {
  margin-left: 29px;
}
.u-spacing-29.u-icon,
.u-spacing-29.u-search-icon,
.u-spacing-29.u-gallery-nav,
.u-spacing-29.u-carousel-control {
  padding: 29px;
}
blockquote.u-text.u-indent-29 {
  padding-left: 29px;
}
.u-text.u-spacing-28 li {
  margin-bottom: 28px;
}
.u-text.u-indent-28,
.u-text.u-indent-28 ul,
.u-text.u-indent-28 ol {
  padding-left: 48px;
}
.u-spacing-28.u-price-wrapper > div + div,
.u-spacing-28 .u-social-url + .u-social-url {
  margin-left: 28px;
}
.u-spacing-28.u-icon,
.u-spacing-28.u-search-icon,
.u-spacing-28.u-gallery-nav,
.u-spacing-28.u-carousel-control {
  padding: 28px;
}
blockquote.u-text.u-indent-28 {
  padding-left: 28px;
}
.u-text.u-spacing-27 li {
  margin-bottom: 27px;
}
.u-text.u-indent-27,
.u-text.u-indent-27 ul,
.u-text.u-indent-27 ol {
  padding-left: 47px;
}
.u-spacing-27.u-price-wrapper > div + div,
.u-spacing-27 .u-social-url + .u-social-url {
  margin-left: 27px;
}
.u-spacing-27.u-icon,
.u-spacing-27.u-search-icon,
.u-spacing-27.u-gallery-nav,
.u-spacing-27.u-carousel-control {
  padding: 27px;
}
blockquote.u-text.u-indent-27 {
  padding-left: 27px;
}
.u-text.u-spacing-26 li {
  margin-bottom: 26px;
}
.u-text.u-indent-26,
.u-text.u-indent-26 ul,
.u-text.u-indent-26 ol {
  padding-left: 46px;
}
.u-spacing-26.u-price-wrapper > div + div,
.u-spacing-26 .u-social-url + .u-social-url {
  margin-left: 26px;
}
.u-spacing-26.u-icon,
.u-spacing-26.u-search-icon,
.u-spacing-26.u-gallery-nav,
.u-spacing-26.u-carousel-control {
  padding: 26px;
}
blockquote.u-text.u-indent-26 {
  padding-left: 26px;
}
.u-text.u-spacing-25 li {
  margin-bottom: 25px;
}
.u-text.u-indent-25,
.u-text.u-indent-25 ul,
.u-text.u-indent-25 ol {
  padding-left: 45px;
}
.u-spacing-25.u-price-wrapper > div + div,
.u-spacing-25 .u-social-url + .u-social-url {
  margin-left: 25px;
}
.u-spacing-25.u-icon,
.u-spacing-25.u-search-icon,
.u-spacing-25.u-gallery-nav,
.u-spacing-25.u-carousel-control {
  padding: 25px;
}
blockquote.u-text.u-indent-25 {
  padding-left: 25px;
}
.u-text.u-spacing-24 li {
  margin-bottom: 24px;
}
.u-text.u-indent-24,
.u-text.u-indent-24 ul,
.u-text.u-indent-24 ol {
  padding-left: 44px;
}
.u-spacing-24.u-price-wrapper > div + div,
.u-spacing-24 .u-social-url + .u-social-url {
  margin-left: 24px;
}
.u-spacing-24.u-icon,
.u-spacing-24.u-search-icon,
.u-spacing-24.u-gallery-nav,
.u-spacing-24.u-carousel-control {
  padding: 24px;
}
blockquote.u-text.u-indent-24 {
  padding-left: 24px;
}
.u-text.u-spacing-23 li {
  margin-bottom: 23px;
}
.u-text.u-indent-23,
.u-text.u-indent-23 ul,
.u-text.u-indent-23 ol {
  padding-left: 43px;
}
.u-spacing-23.u-price-wrapper > div + div,
.u-spacing-23 .u-social-url + .u-social-url {
  margin-left: 23px;
}
.u-spacing-23.u-icon,
.u-spacing-23.u-search-icon,
.u-spacing-23.u-gallery-nav,
.u-spacing-23.u-carousel-control {
  padding: 23px;
}
blockquote.u-text.u-indent-23 {
  padding-left: 23px;
}
.u-text.u-spacing-22 li {
  margin-bottom: 22px;
}
.u-text.u-indent-22,
.u-text.u-indent-22 ul,
.u-text.u-indent-22 ol {
  padding-left: 42px;
}
.u-spacing-22.u-price-wrapper > div + div,
.u-spacing-22 .u-social-url + .u-social-url {
  margin-left: 22px;
}
.u-spacing-22.u-icon,
.u-spacing-22.u-search-icon,
.u-spacing-22.u-gallery-nav,
.u-spacing-22.u-carousel-control {
  padding: 22px;
}
blockquote.u-text.u-indent-22 {
  padding-left: 22px;
}
.u-text.u-spacing-21 li {
  margin-bottom: 21px;
}
.u-text.u-indent-21,
.u-text.u-indent-21 ul,
.u-text.u-indent-21 ol {
  padding-left: 41px;
}
.u-spacing-21.u-price-wrapper > div + div,
.u-spacing-21 .u-social-url + .u-social-url {
  margin-left: 21px;
}
.u-spacing-21.u-icon,
.u-spacing-21.u-search-icon,
.u-spacing-21.u-gallery-nav,
.u-spacing-21.u-carousel-control {
  padding: 21px;
}
blockquote.u-text.u-indent-21 {
  padding-left: 21px;
}
.u-text.u-spacing-20 li {
  margin-bottom: 20px;
}
.u-text.u-indent-20,
.u-text.u-indent-20 ul,
.u-text.u-indent-20 ol {
  padding-left: 40px;
}
.u-spacing-20.u-price-wrapper > div + div,
.u-spacing-20 .u-social-url + .u-social-url {
  margin-left: 20px;
}
.u-spacing-20.u-icon,
.u-spacing-20.u-search-icon,
.u-spacing-20.u-gallery-nav,
.u-spacing-20.u-carousel-control {
  padding: 20px;
}
blockquote.u-text.u-indent-20 {
  padding-left: 20px;
}
.u-text.u-spacing-19 li {
  margin-bottom: 19px;
}
.u-text.u-indent-19,
.u-text.u-indent-19 ul,
.u-text.u-indent-19 ol {
  padding-left: 39px;
}
.u-spacing-19.u-price-wrapper > div + div,
.u-spacing-19 .u-social-url + .u-social-url {
  margin-left: 19px;
}
.u-spacing-19.u-icon,
.u-spacing-19.u-search-icon,
.u-spacing-19.u-gallery-nav,
.u-spacing-19.u-carousel-control {
  padding: 19px;
}
blockquote.u-text.u-indent-19 {
  padding-left: 19px;
}
.u-text.u-spacing-18 li {
  margin-bottom: 18px;
}
.u-text.u-indent-18,
.u-text.u-indent-18 ul,
.u-text.u-indent-18 ol {
  padding-left: 38px;
}
.u-spacing-18.u-price-wrapper > div + div,
.u-spacing-18 .u-social-url + .u-social-url {
  margin-left: 18px;
}
.u-spacing-18.u-icon,
.u-spacing-18.u-search-icon,
.u-spacing-18.u-gallery-nav,
.u-spacing-18.u-carousel-control {
  padding: 18px;
}
blockquote.u-text.u-indent-18 {
  padding-left: 18px;
}
.u-text.u-spacing-17 li {
  margin-bottom: 17px;
}
.u-text.u-indent-17,
.u-text.u-indent-17 ul,
.u-text.u-indent-17 ol {
  padding-left: 37px;
}
.u-spacing-17.u-price-wrapper > div + div,
.u-spacing-17 .u-social-url + .u-social-url {
  margin-left: 17px;
}
.u-spacing-17.u-icon,
.u-spacing-17.u-search-icon,
.u-spacing-17.u-gallery-nav,
.u-spacing-17.u-carousel-control {
  padding: 17px;
}
blockquote.u-text.u-indent-17 {
  padding-left: 17px;
}
.u-text.u-spacing-16 li {
  margin-bottom: 16px;
}
.u-text.u-indent-16,
.u-text.u-indent-16 ul,
.u-text.u-indent-16 ol {
  padding-left: 36px;
}
.u-spacing-16.u-price-wrapper > div + div,
.u-spacing-16 .u-social-url + .u-social-url {
  margin-left: 16px;
}
.u-spacing-16.u-icon,
.u-spacing-16.u-search-icon,
.u-spacing-16.u-gallery-nav,
.u-spacing-16.u-carousel-control {
  padding: 16px;
}
blockquote.u-text.u-indent-16 {
  padding-left: 16px;
}
.u-text.u-spacing-15 li {
  margin-bottom: 15px;
}
.u-text.u-indent-15,
.u-text.u-indent-15 ul,
.u-text.u-indent-15 ol {
  padding-left: 35px;
}
.u-spacing-15.u-price-wrapper > div + div,
.u-spacing-15 .u-social-url + .u-social-url {
  margin-left: 15px;
}
.u-spacing-15.u-icon,
.u-spacing-15.u-search-icon,
.u-spacing-15.u-gallery-nav,
.u-spacing-15.u-carousel-control {
  padding: 15px;
}
blockquote.u-text.u-indent-15 {
  padding-left: 15px;
}
.u-text.u-spacing-14 li {
  margin-bottom: 14px;
}
.u-text.u-indent-14,
.u-text.u-indent-14 ul,
.u-text.u-indent-14 ol {
  padding-left: 34px;
}
.u-spacing-14.u-price-wrapper > div + div,
.u-spacing-14 .u-social-url + .u-social-url {
  margin-left: 14px;
}
.u-spacing-14.u-icon,
.u-spacing-14.u-search-icon,
.u-spacing-14.u-gallery-nav,
.u-spacing-14.u-carousel-control {
  padding: 14px;
}
blockquote.u-text.u-indent-14 {
  padding-left: 14px;
}
.u-text.u-spacing-13 li {
  margin-bottom: 13px;
}
.u-text.u-indent-13,
.u-text.u-indent-13 ul,
.u-text.u-indent-13 ol {
  padding-left: 33px;
}
.u-spacing-13.u-price-wrapper > div + div,
.u-spacing-13 .u-social-url + .u-social-url {
  margin-left: 13px;
}
.u-spacing-13.u-icon,
.u-spacing-13.u-search-icon,
.u-spacing-13.u-gallery-nav,
.u-spacing-13.u-carousel-control {
  padding: 13px;
}
blockquote.u-text.u-indent-13 {
  padding-left: 13px;
}
.u-text.u-spacing-12 li {
  margin-bottom: 12px;
}
.u-text.u-indent-12,
.u-text.u-indent-12 ul,
.u-text.u-indent-12 ol {
  padding-left: 32px;
}
.u-spacing-12.u-price-wrapper > div + div,
.u-spacing-12 .u-social-url + .u-social-url {
  margin-left: 12px;
}
.u-spacing-12.u-icon,
.u-spacing-12.u-search-icon,
.u-spacing-12.u-gallery-nav,
.u-spacing-12.u-carousel-control {
  padding: 12px;
}
blockquote.u-text.u-indent-12 {
  padding-left: 12px;
}
.u-text.u-spacing-11 li {
  margin-bottom: 11px;
}
.u-text.u-indent-11,
.u-text.u-indent-11 ul,
.u-text.u-indent-11 ol {
  padding-left: 31px;
}
.u-spacing-11.u-price-wrapper > div + div,
.u-spacing-11 .u-social-url + .u-social-url {
  margin-left: 11px;
}
.u-spacing-11.u-icon,
.u-spacing-11.u-search-icon,
.u-spacing-11.u-gallery-nav,
.u-spacing-11.u-carousel-control {
  padding: 11px;
}
blockquote.u-text.u-indent-11 {
  padding-left: 11px;
}
.u-text.u-spacing-10 li {
  margin-bottom: 10px;
}
.u-text.u-indent-10,
.u-text.u-indent-10 ul,
.u-text.u-indent-10 ol {
  padding-left: 30px;
}
.u-spacing-10.u-price-wrapper > div + div,
.u-spacing-10 .u-social-url + .u-social-url {
  margin-left: 10px;
}
.u-spacing-10.u-icon,
.u-spacing-10.u-search-icon,
.u-spacing-10.u-gallery-nav,
.u-spacing-10.u-carousel-control {
  padding: 10px;
}
blockquote.u-text.u-indent-10 {
  padding-left: 10px;
}
.u-text.u-spacing-9 li {
  margin-bottom: 9px;
}
.u-text.u-indent-9,
.u-text.u-indent-9 ul,
.u-text.u-indent-9 ol {
  padding-left: 29px;
}
.u-spacing-9.u-price-wrapper > div + div,
.u-spacing-9 .u-social-url + .u-social-url {
  margin-left: 9px;
}
.u-spacing-9.u-icon,
.u-spacing-9.u-search-icon,
.u-spacing-9.u-gallery-nav,
.u-spacing-9.u-carousel-control {
  padding: 9px;
}
blockquote.u-text.u-indent-9 {
  padding-left: 9px;
}
.u-text.u-spacing-8 li {
  margin-bottom: 8px;
}
.u-text.u-indent-8,
.u-text.u-indent-8 ul,
.u-text.u-indent-8 ol {
  padding-left: 28px;
}
.u-spacing-8.u-price-wrapper > div + div,
.u-spacing-8 .u-social-url + .u-social-url {
  margin-left: 8px;
}
.u-spacing-8.u-icon,
.u-spacing-8.u-search-icon,
.u-spacing-8.u-gallery-nav,
.u-spacing-8.u-carousel-control {
  padding: 8px;
}
blockquote.u-text.u-indent-8 {
  padding-left: 8px;
}
.u-text.u-spacing-7 li {
  margin-bottom: 7px;
}
.u-text.u-indent-7,
.u-text.u-indent-7 ul,
.u-text.u-indent-7 ol {
  padding-left: 27px;
}
.u-spacing-7.u-price-wrapper > div + div,
.u-spacing-7 .u-social-url + .u-social-url {
  margin-left: 7px;
}
.u-spacing-7.u-icon,
.u-spacing-7.u-search-icon,
.u-spacing-7.u-gallery-nav,
.u-spacing-7.u-carousel-control {
  padding: 7px;
}
blockquote.u-text.u-indent-7 {
  padding-left: 7px;
}
.u-text.u-spacing-6 li {
  margin-bottom: 6px;
}
.u-text.u-indent-6,
.u-text.u-indent-6 ul,
.u-text.u-indent-6 ol {
  padding-left: 26px;
}
.u-spacing-6.u-price-wrapper > div + div,
.u-spacing-6 .u-social-url + .u-social-url {
  margin-left: 6px;
}
.u-spacing-6.u-icon,
.u-spacing-6.u-search-icon,
.u-spacing-6.u-gallery-nav,
.u-spacing-6.u-carousel-control {
  padding: 6px;
}
blockquote.u-text.u-indent-6 {
  padding-left: 6px;
}
.u-text.u-spacing-5 li {
  margin-bottom: 5px;
}
.u-text.u-indent-5,
.u-text.u-indent-5 ul,
.u-text.u-indent-5 ol {
  padding-left: 25px;
}
.u-spacing-5.u-price-wrapper > div + div,
.u-spacing-5 .u-social-url + .u-social-url {
  margin-left: 5px;
}
.u-spacing-5.u-icon,
.u-spacing-5.u-search-icon,
.u-spacing-5.u-gallery-nav,
.u-spacing-5.u-carousel-control {
  padding: 5px;
}
blockquote.u-text.u-indent-5 {
  padding-left: 5px;
}
.u-text.u-spacing-4 li {
  margin-bottom: 4px;
}
.u-text.u-indent-4,
.u-text.u-indent-4 ul,
.u-text.u-indent-4 ol {
  padding-left: 24px;
}
.u-spacing-4.u-price-wrapper > div + div,
.u-spacing-4 .u-social-url + .u-social-url {
  margin-left: 4px;
}
.u-spacing-4.u-icon,
.u-spacing-4.u-search-icon,
.u-spacing-4.u-gallery-nav,
.u-spacing-4.u-carousel-control {
  padding: 4px;
}
blockquote.u-text.u-indent-4 {
  padding-left: 4px;
}
.u-text.u-spacing-3 li {
  margin-bottom: 3px;
}
.u-text.u-indent-3,
.u-text.u-indent-3 ul,
.u-text.u-indent-3 ol {
  padding-left: 23px;
}
.u-spacing-3.u-price-wrapper > div + div,
.u-spacing-3 .u-social-url + .u-social-url {
  margin-left: 3px;
}
.u-spacing-3.u-icon,
.u-spacing-3.u-search-icon,
.u-spacing-3.u-gallery-nav,
.u-spacing-3.u-carousel-control {
  padding: 3px;
}
blockquote.u-text.u-indent-3 {
  padding-left: 3px;
}
.u-text.u-spacing-2 li {
  margin-bottom: 2px;
}
.u-text.u-indent-2,
.u-text.u-indent-2 ul,
.u-text.u-indent-2 ol {
  padding-left: 22px;
}
.u-spacing-2.u-price-wrapper > div + div,
.u-spacing-2 .u-social-url + .u-social-url {
  margin-left: 2px;
}
.u-spacing-2.u-icon,
.u-spacing-2.u-search-icon,
.u-spacing-2.u-gallery-nav,
.u-spacing-2.u-carousel-control {
  padding: 2px;
}
blockquote.u-text.u-indent-2 {
  padding-left: 2px;
}
.u-text.u-spacing-1 li {
  margin-bottom: 1px;
}
.u-text.u-indent-1,
.u-text.u-indent-1 ul,
.u-text.u-indent-1 ol {
  padding-left: 21px;
}
.u-spacing-1.u-price-wrapper > div + div,
.u-spacing-1 .u-social-url + .u-social-url {
  margin-left: 1px;
}
.u-spacing-1.u-icon,
.u-spacing-1.u-search-icon,
.u-spacing-1.u-gallery-nav,
.u-spacing-1.u-carousel-control {
  padding: 1px;
}
blockquote.u-text.u-indent-1 {
  padding-left: 1px;
}
.u-text.u-spacing-0 li {
  margin-bottom: 0px;
}
.u-text.u-indent-0,
.u-text.u-indent-0 ul,
.u-text.u-indent-0 ol {
  padding-left: 20px;
}
.u-spacing-0.u-price-wrapper > div + div,
.u-spacing-0 .u-social-url + .u-social-url {
  margin-left: 0px;
}
.u-spacing-0.u-icon,
.u-spacing-0.u-search-icon,
.u-spacing-0.u-gallery-nav,
.u-spacing-0.u-carousel-control {
  padding: 0px;
}
blockquote.u-text.u-indent-0 {
  padding-left: 0px;
}
ul.u-text li:last-child {
  margin-bottom: 0;
}
.u-vertical-spacing.u-spacing-100 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 100px;
}
.u-vertical-spacing.u-spacing-99 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 99px;
}
.u-vertical-spacing.u-spacing-98 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 98px;
}
.u-vertical-spacing.u-spacing-97 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 97px;
}
.u-vertical-spacing.u-spacing-96 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 96px;
}
.u-vertical-spacing.u-spacing-95 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 95px;
}
.u-vertical-spacing.u-spacing-94 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 94px;
}
.u-vertical-spacing.u-spacing-93 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 93px;
}
.u-vertical-spacing.u-spacing-92 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 92px;
}
.u-vertical-spacing.u-spacing-91 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 91px;
}
.u-vertical-spacing.u-spacing-90 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 90px;
}
.u-vertical-spacing.u-spacing-89 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 89px;
}
.u-vertical-spacing.u-spacing-88 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 88px;
}
.u-vertical-spacing.u-spacing-87 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 87px;
}
.u-vertical-spacing.u-spacing-86 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 86px;
}
.u-vertical-spacing.u-spacing-85 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 85px;
}
.u-vertical-spacing.u-spacing-84 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 84px;
}
.u-vertical-spacing.u-spacing-83 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 83px;
}
.u-vertical-spacing.u-spacing-82 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 82px;
}
.u-vertical-spacing.u-spacing-81 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 81px;
}
.u-vertical-spacing.u-spacing-80 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 80px;
}
.u-vertical-spacing.u-spacing-79 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 79px;
}
.u-vertical-spacing.u-spacing-78 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 78px;
}
.u-vertical-spacing.u-spacing-77 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 77px;
}
.u-vertical-spacing.u-spacing-76 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 76px;
}
.u-vertical-spacing.u-spacing-75 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 75px;
}
.u-vertical-spacing.u-spacing-74 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 74px;
}
.u-vertical-spacing.u-spacing-73 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 73px;
}
.u-vertical-spacing.u-spacing-72 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 72px;
}
.u-vertical-spacing.u-spacing-71 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 71px;
}
.u-vertical-spacing.u-spacing-70 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 70px;
}
.u-vertical-spacing.u-spacing-69 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 69px;
}
.u-vertical-spacing.u-spacing-68 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 68px;
}
.u-vertical-spacing.u-spacing-67 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 67px;
}
.u-vertical-spacing.u-spacing-66 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 66px;
}
.u-vertical-spacing.u-spacing-65 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 65px;
}
.u-vertical-spacing.u-spacing-64 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 64px;
}
.u-vertical-spacing.u-spacing-63 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 63px;
}
.u-vertical-spacing.u-spacing-62 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 62px;
}
.u-vertical-spacing.u-spacing-61 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 61px;
}
.u-vertical-spacing.u-spacing-60 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 60px;
}
.u-vertical-spacing.u-spacing-59 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 59px;
}
.u-vertical-spacing.u-spacing-58 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 58px;
}
.u-vertical-spacing.u-spacing-57 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 57px;
}
.u-vertical-spacing.u-spacing-56 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 56px;
}
.u-vertical-spacing.u-spacing-55 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 55px;
}
.u-vertical-spacing.u-spacing-54 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 54px;
}
.u-vertical-spacing.u-spacing-53 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 53px;
}
.u-vertical-spacing.u-spacing-52 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 52px;
}
.u-vertical-spacing.u-spacing-51 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 51px;
}
.u-vertical-spacing.u-spacing-50 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 50px;
}
.u-vertical-spacing.u-spacing-49 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 49px;
}
.u-vertical-spacing.u-spacing-48 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 48px;
}
.u-vertical-spacing.u-spacing-47 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 47px;
}
.u-vertical-spacing.u-spacing-46 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 46px;
}
.u-vertical-spacing.u-spacing-45 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 45px;
}
.u-vertical-spacing.u-spacing-44 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 44px;
}
.u-vertical-spacing.u-spacing-43 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 43px;
}
.u-vertical-spacing.u-spacing-42 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 42px;
}
.u-vertical-spacing.u-spacing-41 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 41px;
}
.u-vertical-spacing.u-spacing-40 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 40px;
}
.u-vertical-spacing.u-spacing-39 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 39px;
}
.u-vertical-spacing.u-spacing-38 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 38px;
}
.u-vertical-spacing.u-spacing-37 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 37px;
}
.u-vertical-spacing.u-spacing-36 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 36px;
}
.u-vertical-spacing.u-spacing-35 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 35px;
}
.u-vertical-spacing.u-spacing-34 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 34px;
}
.u-vertical-spacing.u-spacing-33 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 33px;
}
.u-vertical-spacing.u-spacing-32 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 32px;
}
.u-vertical-spacing.u-spacing-31 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 31px;
}
.u-vertical-spacing.u-spacing-30 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 30px;
}
.u-vertical-spacing.u-spacing-29 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 29px;
}
.u-vertical-spacing.u-spacing-28 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 28px;
}
.u-vertical-spacing.u-spacing-27 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 27px;
}
.u-vertical-spacing.u-spacing-26 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 26px;
}
.u-vertical-spacing.u-spacing-25 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 25px;
}
.u-vertical-spacing.u-spacing-24 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 24px;
}
.u-vertical-spacing.u-spacing-23 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 23px;
}
.u-vertical-spacing.u-spacing-22 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 22px;
}
.u-vertical-spacing.u-spacing-21 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 21px;
}
.u-vertical-spacing.u-spacing-20 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 20px;
}
.u-vertical-spacing.u-spacing-19 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 19px;
}
.u-vertical-spacing.u-spacing-18 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 18px;
}
.u-vertical-spacing.u-spacing-17 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 17px;
}
.u-vertical-spacing.u-spacing-16 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 16px;
}
.u-vertical-spacing.u-spacing-15 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 15px;
}
.u-vertical-spacing.u-spacing-14 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 14px;
}
.u-vertical-spacing.u-spacing-13 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 13px;
}
.u-vertical-spacing.u-spacing-12 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 12px;
}
.u-vertical-spacing.u-spacing-11 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 11px;
}
.u-vertical-spacing.u-spacing-10 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 10px;
}
.u-vertical-spacing.u-spacing-9 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 9px;
}
.u-vertical-spacing.u-spacing-8 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 8px;
}
.u-vertical-spacing.u-spacing-7 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 7px;
}
.u-vertical-spacing.u-spacing-6 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 6px;
}
.u-vertical-spacing.u-spacing-5 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 5px;
}
.u-vertical-spacing.u-spacing-4 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 4px;
}
.u-vertical-spacing.u-spacing-3 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 3px;
}
.u-vertical-spacing.u-spacing-2 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 2px;
}
.u-vertical-spacing.u-spacing-1 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 1px;
}
.u-vertical-spacing.u-spacing-0 > li:not(:last-child) {
  margin-right: 0 !important;
  margin-bottom: 0px;
}
.u-backlink {
  position: relative;
  text-align: center;
  padding: 1em;
}
.u-backlink a:first-letter {
  text-transform: capitalize;
}
.u-backlink a,
.u-backlink p {
  display: inline-block;
}
.u-backlink span {
  font-size: 0.8rem;
}
.u-backlink .u-link {
  text-decoration: underline;
}
.u-backlink span,
.u-backlink .u-link:hover {
  text-decoration: none;
}
.u-hidden {
  display: none !important;
}
@media (min-width: 1200px) {
  .u-hidden-xl {
    display: none !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .u-hidden-lg {
    display: none !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .u-hidden-md {
    display: none !important;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .u-hidden-sm {
    display: none !important;
  }
}
@media (max-width: 575px) {
  .u-hidden-xs {
    display: none !important;
  }
}
.u-invisible {
  visibility: hidden;
}
.u-border-none {
  border-width: 0 !important;
}
[class*="u-border-"].u-border-no-top {
  border-top-width: 0;
  border-top-style: none;
}
[class*="u-border-"].u-border-no-right {
  border-right-width: 0;
  border-right-style: none;
}
[class*="u-border-"].u-border-no-bottom {
  border-bottom-width: 0;
  border-bottom-style: none;
}
[class*="u-border-"].u-border-no-left {
  border-left-width: 0;
  border-left-style: none;
}
.u-border-color-none {
  background-color: transparent;
}
.u-text.u-indent-none {
  padding-left: 0 !important;
}
.u-text-default {
  display: table;
  align-self: flex-start;
}
.u-text-default:empty {
  display: block;
  width: 15px;
}
@media (min-width: 1200px) {
  .u-text-default-xl {
    display: table;
    align-self: flex-start;
  }
  .u-text-default-xl:empty {
    display: block;
    width: 15px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .u-text-default-lg {
    display: table;
    align-self: flex-start;
  }
  .u-text-default-lg:empty {
    display: block;
    width: 15px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .u-text-default-md {
    display: table;
    align-self: flex-start;
  }
  .u-text-default-md:empty {
    display: block;
    width: 15px;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .u-text-default-sm {
    display: table;
    align-self: flex-start;
  }
  .u-text-default-sm:empty {
    display: block;
    width: 15px;
  }
}
@media (max-width: 575px) {
  .u-text-default-xs {
    display: table;
    align-self: flex-start;
  }
  .u-text-default-xs:empty {
    display: block;
    width: 15px;
  }
}
.u-image,
.u-background-effect-image,
.u-video-poster {
  object-fit: cover;
  display: block;
  vertical-align: middle;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
img.u-image,
.u-video-poster {
  overflow: hidden;
}
.u-back-image.u-image-contain,
.u-image.u-image-contain {
  object-fit: contain;
  background-size: contain;
}
.u-back-image.u-image-tiles,
.u-image.u-image-tiles {
  background-size: initial;
  background-repeat: repeat;
  background-position: top left !important;
}
section.u-image,
.u-sheet.u-image,
.u-group.u-image,
.u-layout-cell.u-image {
  overflow: visible;
}
.u-text .u-image {
  display: inline-block;
}
.u-post-content .u-image {
  margin-bottom: 0.5rem;
}
.u-image-circle.u-image {
  border-radius: 50% !important;
}
.u-image-round {
  border-radius: 10px;
}
.u-image-square {
  border-radius: 0;
}
[data-post-link],
[data-href] {
  cursor: pointer;
}
.u-sheet {
  position: relative;
  width: 1140px;
  margin: 0 auto;
}
@media (min-width: 1200px) {
  .u-sheet {
    width: 1140px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .u-sheet {
    width: 940px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .u-sheet {
    width: 720px;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .u-sheet {
    width: 540px;
  }
}
@media (max-width: 575px) {
  .u-sheet {
    width: 340px;
  }
}
.u-sheet .u-sheet {
  width: 100%;
}
.u-container-layout {
  position: relative;
  flex: 1;
  max-width: 100%;
}
.u-inner-container-layout,
.u-container-layout > * {
  position: relative;
}
.u-expanded {
  position: absolute !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.u-expanded-width {
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
@media (min-width: 1200px) {
  .u-expanded-width-xl {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .u-expanded-width-lg {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .u-expanded-width-md {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .u-expanded-width-sm {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
@media (max-width: 575px) {
  .u-expanded-width-xs {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
.u-preserve-proportions.u-expanded-width > * {
  position: absolute !important;
}
.u-preserve-proportions.u-expanded-width-xl > * {
  position: absolute !important;
}
.u-preserve-proportions.u-expanded-width-lg > * {
  position: absolute !important;
}
.u-preserve-proportions.u-expanded-width-md > * {
  position: absolute !important;
}
.u-preserve-proportions.u-expanded-width-sm > * {
  position: absolute !important;
}
.u-preserve-proportions.u-expanded-width-xs > * {
  position: absolute !important;
}
.u-preserve-proportions.u-expanded-width > .u-preserve-proportions-child {
  position: relative !important;
}
.u-preserve-proportions.u-expanded-width-xl > .u-preserve-proportions-child {
  position: relative !important;
}
.u-preserve-proportions.u-expanded-width-lg > .u-preserve-proportions-child {
  position: relative !important;
}
.u-preserve-proportions.u-expanded-width-md > .u-preserve-proportions-child {
  position: relative !important;
}
.u-preserve-proportions.u-expanded-width-sm > .u-preserve-proportions-child {
  position: relative !important;
}
.u-preserve-proportions.u-expanded-width-xs > .u-preserve-proportions-child {
  position: relative !important;
}
.u-expanded-height {
  position: absolute !important;
  height: 100% !important;
  top: 0 !important;
}
@media (min-width: 1200px) {
  .u-expanded-height-xl {
    position: absolute !important;
    height: 100% !important;
    top: 0 !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .u-expanded-height-lg {
    position: absolute !important;
    height: 100% !important;
    top: 0 !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .u-expanded-height-md {
    position: absolute !important;
    height: 100% !important;
    top: 0 !important;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .u-expanded-height-sm {
    position: absolute !important;
    height: 100% !important;
    top: 0 !important;
  }
}
@media (max-width: 575px) {
  .u-expanded-height-xs {
    position: absolute !important;
    height: 100% !important;
    top: 0 !important;
  }
}
.u-valign-middle,
.u-valign-top,
.u-valign-bottom {
  display: flex;
  flex-direction: column;
}
@media (min-width: 1200px) {
  .u-valign-middle-xl,
  .u-valign-top-xl,
  .u-valign-bottom-xl {
    display: flex;
    flex-direction: column;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .u-valign-middle-lg,
  .u-valign-top-lg,
  .u-valign-bottom-lg {
    display: flex;
    flex-direction: column;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .u-valign-middle-md,
  .u-valign-top-md,
  .u-valign-bottom-md {
    display: flex;
    flex-direction: column;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .u-valign-middle-sm,
  .u-valign-top-sm,
  .u-valign-bottom-sm {
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 575px) {
  .u-valign-middle-xs,
  .u-valign-top-xs,
  .u-valign-bottom-xs {
    display: flex;
    flex-direction: column;
  }
}
.u-valign-middle > *,
.u-valign-top > *,
.u-valign-bottom > * {
  flex-shrink: 0;
}
.u-valign-middle {
  justify-content: center;
}
@media (min-width: 1200px) {
  .u-valign-middle-xl {
    justify-content: center;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .u-valign-middle-lg {
    justify-content: center;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .u-valign-middle-md {
    justify-content: center;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .u-valign-middle-sm {
    justify-content: center;
  }
}
@media (max-width: 575px) {
  .u-valign-middle-xs {
    justify-content: center;
  }
}
.u-valign-top {
  justify-content: flex-start;
}
@media (min-width: 1200px) {
  .u-valign-top-xl {
    justify-content: flex-start;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .u-valign-top-lg {
    justify-content: flex-start;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .u-valign-top-md {
    justify-content: flex-start;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .u-valign-top-sm {
    justify-content: flex-start;
  }
}
@media (max-width: 575px) {
  .u-valign-top-xs {
    justify-content: flex-start;
  }
}
.u-valign-bottom {
  justify-content: flex-end;
}
@media (min-width: 1200px) {
  .u-valign-bottom-xl {
    justify-content: flex-end;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .u-valign-bottom-lg {
    justify-content: flex-end;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .u-valign-bottom-md {
    justify-content: flex-end;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .u-valign-bottom-sm {
    justify-content: flex-end;
  }
}
@media (max-width: 575px) {
  .u-valign-bottom-xs {
    justify-content: flex-end;
  }
}
@media (max-width: 767px) {
  :not(.u-sheet) > [class*="u-gutter-"]:not(.u-gutter-0).u-expanded-width {
    overflow: hidden;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .u-layout-wrap:not(.u-layout-custom-sm) .u-layout-row > * {
    min-width: 100%;
  }
  .u-layout-wrap:not(.u-layout-custom-sm) .u-layout {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .u-layout-wrap:not(.u-layout-custom-sm) .u-layout .u-layout-cell {
    border-left: 0 !important;
    border-right: 0 !important;
  }
  .u-absolute-hcenter,
  .u-absolute-hcenter-sm {
    max-width: 100%;
  }
}
@media (max-width: 575px) {
  .u-layout-wrap:not(.u-layout-custom-xs) .u-layout-row > * {
    min-width: 100%;
  }
  .u-layout-wrap:not(.u-layout-custom-xs) .u-layout {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .u-layout-wrap:not(.u-layout-custom-xs) .u-layout .u-layout-cell {
    border-left: 0 !important;
    border-right: 0 !important;
  }
  .u-absolute-hcenter,
  .u-absolute-hcenter-xs {
    max-width: 100%;
  }
}
.u-layout-row > .u-size-60 {
  flex: 0 0 100%;
  max-width: 100%;
  min-width: 100%;
}
.u-layout-col > .u-size-60 {
  flex: 60 0 100%;
}
.u-layout-row > .u-size-59 {
  flex: 0 0 98.33333333%;
  max-width: 98.33333333%;
  min-width: 98.33333333%;
}
.u-layout-col > .u-size-59 {
  flex: 59 0 98.33333333%;
}
.u-layout-row > .u-size-58 {
  flex: 0 0 96.66666667%;
  max-width: 96.66666667%;
  min-width: 96.66666667%;
}
.u-layout-col > .u-size-58 {
  flex: 58 0 96.66666667%;
}
.u-layout-row > .u-size-57 {
  flex: 0 0 95%;
  max-width: 95%;
  min-width: 95%;
}
.u-layout-col > .u-size-57 {
  flex: 57 0 95%;
}
.u-layout-row > .u-size-56 {
  flex: 0 0 93.33333333%;
  max-width: 93.33333333%;
  min-width: 93.33333333%;
}
.u-layout-col > .u-size-56 {
  flex: 56 0 93.33333333%;
}
.u-layout-row > .u-size-55 {
  flex: 0 0 91.66666667%;
  max-width: 91.66666667%;
  min-width: 91.66666667%;
}
.u-layout-col > .u-size-55 {
  flex: 55 0 91.66666667%;
}
.u-layout-row > .u-size-54 {
  flex: 0 0 90%;
  max-width: 90%;
  min-width: 90%;
}
.u-layout-col > .u-size-54 {
  flex: 54 0 90%;
}
.u-layout-row > .u-size-53 {
  flex: 0 0 88.33333333%;
  max-width: 88.33333333%;
  min-width: 88.33333333%;
}
.u-layout-col > .u-size-53 {
  flex: 53 0 88.33333333%;
}
.u-layout-row > .u-size-52 {
  flex: 0 0 86.66666667%;
  max-width: 86.66666667%;
  min-width: 86.66666667%;
}
.u-layout-col > .u-size-52 {
  flex: 52 0 86.66666667%;
}
.u-layout-row > .u-size-51 {
  flex: 0 0 85%;
  max-width: 85%;
  min-width: 85%;
}
.u-layout-col > .u-size-51 {
  flex: 51 0 85%;
}
.u-layout-row > .u-size-50 {
  flex: 0 0 83.33333333%;
  max-width: 83.33333333%;
  min-width: 83.33333333%;
}
.u-layout-col > .u-size-50 {
  flex: 50 0 83.33333333%;
}
.u-layout-row > .u-size-49 {
  flex: 0 0 81.66666667%;
  max-width: 81.66666667%;
  min-width: 81.66666667%;
}
.u-layout-col > .u-size-49 {
  flex: 49 0 81.66666667%;
}
.u-layout-row > .u-size-48 {
  flex: 0 0 80%;
  max-width: 80%;
  min-width: 80%;
}
.u-layout-col > .u-size-48 {
  flex: 48 0 80%;
}
.u-layout-row > .u-size-47 {
  flex: 0 0 78.33333333%;
  max-width: 78.33333333%;
  min-width: 78.33333333%;
}
.u-layout-col > .u-size-47 {
  flex: 47 0 78.33333333%;
}
.u-layout-row > .u-size-46 {
  flex: 0 0 76.66666667%;
  max-width: 76.66666667%;
  min-width: 76.66666667%;
}
.u-layout-col > .u-size-46 {
  flex: 46 0 76.66666667%;
}
.u-layout-row > .u-size-45 {
  flex: 0 0 75%;
  max-width: 75%;
  min-width: 75%;
}
.u-layout-col > .u-size-45 {
  flex: 45 0 75%;
}
.u-layout-row > .u-size-44 {
  flex: 0 0 73.33333333%;
  max-width: 73.33333333%;
  min-width: 73.33333333%;
}
.u-layout-col > .u-size-44 {
  flex: 44 0 73.33333333%;
}
.u-layout-row > .u-size-43 {
  flex: 0 0 71.66666667%;
  max-width: 71.66666667%;
  min-width: 71.66666667%;
}
.u-layout-col > .u-size-43 {
  flex: 43 0 71.66666667%;
}
.u-layout-row > .u-size-42 {
  flex: 0 0 70%;
  max-width: 70%;
  min-width: 70%;
}
.u-layout-col > .u-size-42 {
  flex: 42 0 70%;
}
.u-layout-row > .u-size-41 {
  flex: 0 0 68.33333333%;
  max-width: 68.33333333%;
  min-width: 68.33333333%;
}
.u-layout-col > .u-size-41 {
  flex: 41 0 68.33333333%;
}
.u-layout-row > .u-size-40 {
  flex: 0 0 66.66666667%;
  max-width: 66.66666667%;
  min-width: 66.66666667%;
}
.u-layout-col > .u-size-40 {
  flex: 40 0 66.66666667%;
}
.u-layout-row > .u-size-39 {
  flex: 0 0 65%;
  max-width: 65%;
  min-width: 65%;
}
.u-layout-col > .u-size-39 {
  flex: 39 0 65%;
}
.u-layout-row > .u-size-38 {
  flex: 0 0 63.33333333%;
  max-width: 63.33333333%;
  min-width: 63.33333333%;
}
.u-layout-col > .u-size-38 {
  flex: 38 0 63.33333333%;
}
.u-layout-row > .u-size-37 {
  flex: 0 0 61.66666667%;
  max-width: 61.66666667%;
  min-width: 61.66666667%;
}
.u-layout-col > .u-size-37 {
  flex: 37 0 61.66666667%;
}
.u-layout-row > .u-size-36 {
  flex: 0 0 60%;
  max-width: 60%;
  min-width: 60%;
}
.u-layout-col > .u-size-36 {
  flex: 36 0 60%;
}
.u-layout-row > .u-size-35 {
  flex: 0 0 58.33333333%;
  max-width: 58.33333333%;
  min-width: 58.33333333%;
}
.u-layout-col > .u-size-35 {
  flex: 35 0 58.33333333%;
}
.u-layout-row > .u-size-34 {
  flex: 0 0 56.66666667%;
  max-width: 56.66666667%;
  min-width: 56.66666667%;
}
.u-layout-col > .u-size-34 {
  flex: 34 0 56.66666667%;
}
.u-layout-row > .u-size-33 {
  flex: 0 0 55%;
  max-width: 55%;
  min-width: 55%;
}
.u-layout-col > .u-size-33 {
  flex: 33 0 55%;
}
.u-layout-row > .u-size-32 {
  flex: 0 0 53.33333333%;
  max-width: 53.33333333%;
  min-width: 53.33333333%;
}
.u-layout-col > .u-size-32 {
  flex: 32 0 53.33333333%;
}
.u-layout-row > .u-size-31 {
  flex: 0 0 51.66666667%;
  max-width: 51.66666667%;
  min-width: 51.66666667%;
}
.u-layout-col > .u-size-31 {
  flex: 31 0 51.66666667%;
}
.u-layout-row > .u-size-30 {
  flex: 0 0 50%;
  max-width: 50%;
  min-width: 50%;
}
.u-layout-col > .u-size-30 {
  flex: 30 0 50%;
}
.u-layout-row > .u-size-29 {
  flex: 0 0 48.33333333%;
  max-width: 48.33333333%;
  min-width: 48.33333333%;
}
.u-layout-col > .u-size-29 {
  flex: 29 0 48.33333333%;
}
.u-layout-row > .u-size-28 {
  flex: 0 0 46.66666667%;
  max-width: 46.66666667%;
  min-width: 46.66666667%;
}
.u-layout-col > .u-size-28 {
  flex: 28 0 46.66666667%;
}
.u-layout-row > .u-size-27 {
  flex: 0 0 45%;
  max-width: 45%;
  min-width: 45%;
}
.u-layout-col > .u-size-27 {
  flex: 27 0 45%;
}
.u-layout-row > .u-size-26 {
  flex: 0 0 43.33333333%;
  max-width: 43.33333333%;
  min-width: 43.33333333%;
}
.u-layout-col > .u-size-26 {
  flex: 26 0 43.33333333%;
}
.u-layout-row > .u-size-25 {
  flex: 0 0 41.66666667%;
  max-width: 41.66666667%;
  min-width: 41.66666667%;
}
.u-layout-col > .u-size-25 {
  flex: 25 0 41.66666667%;
}
.u-layout-row > .u-size-24 {
  flex: 0 0 40%;
  max-width: 40%;
  min-width: 40%;
}
.u-layout-col > .u-size-24 {
  flex: 24 0 40%;
}
.u-layout-row > .u-size-23 {
  flex: 0 0 38.33333333%;
  max-width: 38.33333333%;
  min-width: 38.33333333%;
}
.u-layout-col > .u-size-23 {
  flex: 23 0 38.33333333%;
}
.u-layout-row > .u-size-22 {
  flex: 0 0 36.66666667%;
  max-width: 36.66666667%;
  min-width: 36.66666667%;
}
.u-layout-col > .u-size-22 {
  flex: 22 0 36.66666667%;
}
.u-layout-row > .u-size-21 {
  flex: 0 0 35%;
  max-width: 35%;
  min-width: 35%;
}
.u-layout-col > .u-size-21 {
  flex: 21 0 35%;
}
.u-layout-row > .u-size-20 {
  flex: 0 0 33.33333333%;
  max-width: 33.33333333%;
  min-width: 33.33333333%;
}
.u-layout-col > .u-size-20 {
  flex: 20 0 33.33333333%;
}
.u-layout-row > .u-size-19 {
  flex: 0 0 31.66666667%;
  max-width: 31.66666667%;
  min-width: 31.66666667%;
}
.u-layout-col > .u-size-19 {
  flex: 19 0 31.66666667%;
}
.u-layout-row > .u-size-18 {
  flex: 0 0 30%;
  max-width: 30%;
  min-width: 30%;
}
.u-layout-col > .u-size-18 {
  flex: 18 0 30%;
}
.u-layout-row > .u-size-17 {
  flex: 0 0 28.33333333%;
  max-width: 28.33333333%;
  min-width: 28.33333333%;
}
.u-layout-col > .u-size-17 {
  flex: 17 0 28.33333333%;
}
.u-layout-row > .u-size-16 {
  flex: 0 0 26.66666667%;
  max-width: 26.66666667%;
  min-width: 26.66666667%;
}
.u-layout-col > .u-size-16 {
  flex: 16 0 26.66666667%;
}
.u-layout-row > .u-size-15 {
  flex: 0 0 25%;
  max-width: 25%;
  min-width: 25%;
}
.u-layout-col > .u-size-15 {
  flex: 15 0 25%;
}
.u-layout-row > .u-size-14 {
  flex: 0 0 23.33333333%;
  max-width: 23.33333333%;
  min-width: 23.33333333%;
}
.u-layout-col > .u-size-14 {
  flex: 14 0 23.33333333%;
}
.u-layout-row > .u-size-13 {
  flex: 0 0 21.66666667%;
  max-width: 21.66666667%;
  min-width: 21.66666667%;
}
.u-layout-col > .u-size-13 {
  flex: 13 0 21.66666667%;
}
.u-layout-row > .u-size-12 {
  flex: 0 0 20%;
  max-width: 20%;
  min-width: 20%;
}
.u-layout-col > .u-size-12 {
  flex: 12 0 20%;
}
.u-layout-row > .u-size-11 {
  flex: 0 0 18.33333333%;
  max-width: 18.33333333%;
  min-width: 18.33333333%;
}
.u-layout-col > .u-size-11 {
  flex: 11 0 18.33333333%;
}
.u-layout-row > .u-size-10 {
  flex: 0 0 16.66666667%;
  max-width: 16.66666667%;
  min-width: 16.66666667%;
}
.u-layout-col > .u-size-10 {
  flex: 10 0 16.66666667%;
}
.u-layout-row > .u-size-9 {
  flex: 0 0 15%;
  max-width: 15%;
  min-width: 15%;
}
.u-layout-col > .u-size-9 {
  flex: 9 0 15%;
}
.u-layout-row > .u-size-8 {
  flex: 0 0 13.33333333%;
  max-width: 13.33333333%;
  min-width: 13.33333333%;
}
.u-layout-col > .u-size-8 {
  flex: 8 0 13.33333333%;
}
.u-layout-row > .u-size-7 {
  flex: 0 0 11.66666667%;
  max-width: 11.66666667%;
  min-width: 11.66666667%;
}
.u-layout-col > .u-size-7 {
  flex: 7 0 11.66666667%;
}
.u-layout-row > .u-size-6 {
  flex: 0 0 10%;
  max-width: 10%;
  min-width: 10%;
}
.u-layout-col > .u-size-6 {
  flex: 6 0 10%;
}
.u-layout-row > .u-size-5 {
  flex: 0 0 8.33333333%;
  max-width: 8.33333333%;
  min-width: 8.33333333%;
}
.u-layout-col > .u-size-5 {
  flex: 5 0 8.33333333%;
}
.u-layout-row > .u-size-4 {
  flex: 0 0 6.66666667%;
  max-width: 6.66666667%;
  min-width: 6.66666667%;
}
.u-layout-col > .u-size-4 {
  flex: 4 0 6.66666667%;
}
.u-layout-row > .u-size-3 {
  flex: 0 0 5%;
  max-width: 5%;
  min-width: 5%;
}
.u-layout-col > .u-size-3 {
  flex: 3 0 5%;
}
.u-layout-row > .u-size-2 {
  flex: 0 0 3.33333333%;
  max-width: 3.33333333%;
  min-width: 3.33333333%;
}
.u-layout-col > .u-size-2 {
  flex: 2 0 3.33333333%;
}
.u-layout-row > .u-size-1 {
  flex: 0 0 1.66666667%;
  max-width: 1.66666667%;
  min-width: 1.66666667%;
}
.u-layout-col > .u-size-1 {
  flex: 1 0 1.66666667%;
}
.u-layout-row > .u-size-0 {
  flex: 0 0 0%;
  max-width: 0%;
  min-width: 0%;
}
.u-layout-col > .u-size-0 {
  flex: 0 0 0%;
}
@media (min-width: 1200px) {
  .u-layout-row > .u-size-60-xl {
    flex: 0 0 100%;
    max-width: 100%;
    min-width: 100%;
  }
  .u-layout-col > .u-size-60-xl {
    flex: 60 0 100%;
  }
  .u-layout-row > .u-size-59-xl {
    flex: 0 0 98.33333333%;
    max-width: 98.33333333%;
    min-width: 98.33333333%;
  }
  .u-layout-col > .u-size-59-xl {
    flex: 59 0 98.33333333%;
  }
  .u-layout-row > .u-size-58-xl {
    flex: 0 0 96.66666667%;
    max-width: 96.66666667%;
    min-width: 96.66666667%;
  }
  .u-layout-col > .u-size-58-xl {
    flex: 58 0 96.66666667%;
  }
  .u-layout-row > .u-size-57-xl {
    flex: 0 0 95%;
    max-width: 95%;
    min-width: 95%;
  }
  .u-layout-col > .u-size-57-xl {
    flex: 57 0 95%;
  }
  .u-layout-row > .u-size-56-xl {
    flex: 0 0 93.33333333%;
    max-width: 93.33333333%;
    min-width: 93.33333333%;
  }
  .u-layout-col > .u-size-56-xl {
    flex: 56 0 93.33333333%;
  }
  .u-layout-row > .u-size-55-xl {
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
    min-width: 91.66666667%;
  }
  .u-layout-col > .u-size-55-xl {
    flex: 55 0 91.66666667%;
  }
  .u-layout-row > .u-size-54-xl {
    flex: 0 0 90%;
    max-width: 90%;
    min-width: 90%;
  }
  .u-layout-col > .u-size-54-xl {
    flex: 54 0 90%;
  }
  .u-layout-row > .u-size-53-xl {
    flex: 0 0 88.33333333%;
    max-width: 88.33333333%;
    min-width: 88.33333333%;
  }
  .u-layout-col > .u-size-53-xl {
    flex: 53 0 88.33333333%;
  }
  .u-layout-row > .u-size-52-xl {
    flex: 0 0 86.66666667%;
    max-width: 86.66666667%;
    min-width: 86.66666667%;
  }
  .u-layout-col > .u-size-52-xl {
    flex: 52 0 86.66666667%;
  }
  .u-layout-row > .u-size-51-xl {
    flex: 0 0 85%;
    max-width: 85%;
    min-width: 85%;
  }
  .u-layout-col > .u-size-51-xl {
    flex: 51 0 85%;
  }
  .u-layout-row > .u-size-50-xl {
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
    min-width: 83.33333333%;
  }
  .u-layout-col > .u-size-50-xl {
    flex: 50 0 83.33333333%;
  }
  .u-layout-row > .u-size-49-xl {
    flex: 0 0 81.66666667%;
    max-width: 81.66666667%;
    min-width: 81.66666667%;
  }
  .u-layout-col > .u-size-49-xl {
    flex: 49 0 81.66666667%;
  }
  .u-layout-row > .u-size-48-xl {
    flex: 0 0 80%;
    max-width: 80%;
    min-width: 80%;
  }
  .u-layout-col > .u-size-48-xl {
    flex: 48 0 80%;
  }
  .u-layout-row > .u-size-47-xl {
    flex: 0 0 78.33333333%;
    max-width: 78.33333333%;
    min-width: 78.33333333%;
  }
  .u-layout-col > .u-size-47-xl {
    flex: 47 0 78.33333333%;
  }
  .u-layout-row > .u-size-46-xl {
    flex: 0 0 76.66666667%;
    max-width: 76.66666667%;
    min-width: 76.66666667%;
  }
  .u-layout-col > .u-size-46-xl {
    flex: 46 0 76.66666667%;
  }
  .u-layout-row > .u-size-45-xl {
    flex: 0 0 75%;
    max-width: 75%;
    min-width: 75%;
  }
  .u-layout-col > .u-size-45-xl {
    flex: 45 0 75%;
  }
  .u-layout-row > .u-size-44-xl {
    flex: 0 0 73.33333333%;
    max-width: 73.33333333%;
    min-width: 73.33333333%;
  }
  .u-layout-col > .u-size-44-xl {
    flex: 44 0 73.33333333%;
  }
  .u-layout-row > .u-size-43-xl {
    flex: 0 0 71.66666667%;
    max-width: 71.66666667%;
    min-width: 71.66666667%;
  }
  .u-layout-col > .u-size-43-xl {
    flex: 43 0 71.66666667%;
  }
  .u-layout-row > .u-size-42-xl {
    flex: 0 0 70%;
    max-width: 70%;
    min-width: 70%;
  }
  .u-layout-col > .u-size-42-xl {
    flex: 42 0 70%;
  }
  .u-layout-row > .u-size-41-xl {
    flex: 0 0 68.33333333%;
    max-width: 68.33333333%;
    min-width: 68.33333333%;
  }
  .u-layout-col > .u-size-41-xl {
    flex: 41 0 68.33333333%;
  }
  .u-layout-row > .u-size-40-xl {
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
    min-width: 66.66666667%;
  }
  .u-layout-col > .u-size-40-xl {
    flex: 40 0 66.66666667%;
  }
  .u-layout-row > .u-size-39-xl {
    flex: 0 0 65%;
    max-width: 65%;
    min-width: 65%;
  }
  .u-layout-col > .u-size-39-xl {
    flex: 39 0 65%;
  }
  .u-layout-row > .u-size-38-xl {
    flex: 0 0 63.33333333%;
    max-width: 63.33333333%;
    min-width: 63.33333333%;
  }
  .u-layout-col > .u-size-38-xl {
    flex: 38 0 63.33333333%;
  }
  .u-layout-row > .u-size-37-xl {
    flex: 0 0 61.66666667%;
    max-width: 61.66666667%;
    min-width: 61.66666667%;
  }
  .u-layout-col > .u-size-37-xl {
    flex: 37 0 61.66666667%;
  }
  .u-layout-row > .u-size-36-xl {
    flex: 0 0 60%;
    max-width: 60%;
    min-width: 60%;
  }
  .u-layout-col > .u-size-36-xl {
    flex: 36 0 60%;
  }
  .u-layout-row > .u-size-35-xl {
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
    min-width: 58.33333333%;
  }
  .u-layout-col > .u-size-35-xl {
    flex: 35 0 58.33333333%;
  }
  .u-layout-row > .u-size-34-xl {
    flex: 0 0 56.66666667%;
    max-width: 56.66666667%;
    min-width: 56.66666667%;
  }
  .u-layout-col > .u-size-34-xl {
    flex: 34 0 56.66666667%;
  }
  .u-layout-row > .u-size-33-xl {
    flex: 0 0 55%;
    max-width: 55%;
    min-width: 55%;
  }
  .u-layout-col > .u-size-33-xl {
    flex: 33 0 55%;
  }
  .u-layout-row > .u-size-32-xl {
    flex: 0 0 53.33333333%;
    max-width: 53.33333333%;
    min-width: 53.33333333%;
  }
  .u-layout-col > .u-size-32-xl {
    flex: 32 0 53.33333333%;
  }
  .u-layout-row > .u-size-31-xl {
    flex: 0 0 51.66666667%;
    max-width: 51.66666667%;
    min-width: 51.66666667%;
  }
  .u-layout-col > .u-size-31-xl {
    flex: 31 0 51.66666667%;
  }
  .u-layout-row > .u-size-30-xl {
    flex: 0 0 50%;
    max-width: 50%;
    min-width: 50%;
  }
  .u-layout-col > .u-size-30-xl {
    flex: 30 0 50%;
  }
  .u-layout-row > .u-size-29-xl {
    flex: 0 0 48.33333333%;
    max-width: 48.33333333%;
    min-width: 48.33333333%;
  }
  .u-layout-col > .u-size-29-xl {
    flex: 29 0 48.33333333%;
  }
  .u-layout-row > .u-size-28-xl {
    flex: 0 0 46.66666667%;
    max-width: 46.66666667%;
    min-width: 46.66666667%;
  }
  .u-layout-col > .u-size-28-xl {
    flex: 28 0 46.66666667%;
  }
  .u-layout-row > .u-size-27-xl {
    flex: 0 0 45%;
    max-width: 45%;
    min-width: 45%;
  }
  .u-layout-col > .u-size-27-xl {
    flex: 27 0 45%;
  }
  .u-layout-row > .u-size-26-xl {
    flex: 0 0 43.33333333%;
    max-width: 43.33333333%;
    min-width: 43.33333333%;
  }
  .u-layout-col > .u-size-26-xl {
    flex: 26 0 43.33333333%;
  }
  .u-layout-row > .u-size-25-xl {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
    min-width: 41.66666667%;
  }
  .u-layout-col > .u-size-25-xl {
    flex: 25 0 41.66666667%;
  }
  .u-layout-row > .u-size-24-xl {
    flex: 0 0 40%;
    max-width: 40%;
    min-width: 40%;
  }
  .u-layout-col > .u-size-24-xl {
    flex: 24 0 40%;
  }
  .u-layout-row > .u-size-23-xl {
    flex: 0 0 38.33333333%;
    max-width: 38.33333333%;
    min-width: 38.33333333%;
  }
  .u-layout-col > .u-size-23-xl {
    flex: 23 0 38.33333333%;
  }
  .u-layout-row > .u-size-22-xl {
    flex: 0 0 36.66666667%;
    max-width: 36.66666667%;
    min-width: 36.66666667%;
  }
  .u-layout-col > .u-size-22-xl {
    flex: 22 0 36.66666667%;
  }
  .u-layout-row > .u-size-21-xl {
    flex: 0 0 35%;
    max-width: 35%;
    min-width: 35%;
  }
  .u-layout-col > .u-size-21-xl {
    flex: 21 0 35%;
  }
  .u-layout-row > .u-size-20-xl {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
    min-width: 33.33333333%;
  }
  .u-layout-col > .u-size-20-xl {
    flex: 20 0 33.33333333%;
  }
  .u-layout-row > .u-size-19-xl {
    flex: 0 0 31.66666667%;
    max-width: 31.66666667%;
    min-width: 31.66666667%;
  }
  .u-layout-col > .u-size-19-xl {
    flex: 19 0 31.66666667%;
  }
  .u-layout-row > .u-size-18-xl {
    flex: 0 0 30%;
    max-width: 30%;
    min-width: 30%;
  }
  .u-layout-col > .u-size-18-xl {
    flex: 18 0 30%;
  }
  .u-layout-row > .u-size-17-xl {
    flex: 0 0 28.33333333%;
    max-width: 28.33333333%;
    min-width: 28.33333333%;
  }
  .u-layout-col > .u-size-17-xl {
    flex: 17 0 28.33333333%;
  }
  .u-layout-row > .u-size-16-xl {
    flex: 0 0 26.66666667%;
    max-width: 26.66666667%;
    min-width: 26.66666667%;
  }
  .u-layout-col > .u-size-16-xl {
    flex: 16 0 26.66666667%;
  }
  .u-layout-row > .u-size-15-xl {
    flex: 0 0 25%;
    max-width: 25%;
    min-width: 25%;
  }
  .u-layout-col > .u-size-15-xl {
    flex: 15 0 25%;
  }
  .u-layout-row > .u-size-14-xl {
    flex: 0 0 23.33333333%;
    max-width: 23.33333333%;
    min-width: 23.33333333%;
  }
  .u-layout-col > .u-size-14-xl {
    flex: 14 0 23.33333333%;
  }
  .u-layout-row > .u-size-13-xl {
    flex: 0 0 21.66666667%;
    max-width: 21.66666667%;
    min-width: 21.66666667%;
  }
  .u-layout-col > .u-size-13-xl {
    flex: 13 0 21.66666667%;
  }
  .u-layout-row > .u-size-12-xl {
    flex: 0 0 20%;
    max-width: 20%;
    min-width: 20%;
  }
  .u-layout-col > .u-size-12-xl {
    flex: 12 0 20%;
  }
  .u-layout-row > .u-size-11-xl {
    flex: 0 0 18.33333333%;
    max-width: 18.33333333%;
    min-width: 18.33333333%;
  }
  .u-layout-col > .u-size-11-xl {
    flex: 11 0 18.33333333%;
  }
  .u-layout-row > .u-size-10-xl {
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
    min-width: 16.66666667%;
  }
  .u-layout-col > .u-size-10-xl {
    flex: 10 0 16.66666667%;
  }
  .u-layout-row > .u-size-9-xl {
    flex: 0 0 15%;
    max-width: 15%;
    min-width: 15%;
  }
  .u-layout-col > .u-size-9-xl {
    flex: 9 0 15%;
  }
  .u-layout-row > .u-size-8-xl {
    flex: 0 0 13.33333333%;
    max-width: 13.33333333%;
    min-width: 13.33333333%;
  }
  .u-layout-col > .u-size-8-xl {
    flex: 8 0 13.33333333%;
  }
  .u-layout-row > .u-size-7-xl {
    flex: 0 0 11.66666667%;
    max-width: 11.66666667%;
    min-width: 11.66666667%;
  }
  .u-layout-col > .u-size-7-xl {
    flex: 7 0 11.66666667%;
  }
  .u-layout-row > .u-size-6-xl {
    flex: 0 0 10%;
    max-width: 10%;
    min-width: 10%;
  }
  .u-layout-col > .u-size-6-xl {
    flex: 6 0 10%;
  }
  .u-layout-row > .u-size-5-xl {
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
    min-width: 8.33333333%;
  }
  .u-layout-col > .u-size-5-xl {
    flex: 5 0 8.33333333%;
  }
  .u-layout-row > .u-size-4-xl {
    flex: 0 0 6.66666667%;
    max-width: 6.66666667%;
    min-width: 6.66666667%;
  }
  .u-layout-col > .u-size-4-xl {
    flex: 4 0 6.66666667%;
  }
  .u-layout-row > .u-size-3-xl {
    flex: 0 0 5%;
    max-width: 5%;
    min-width: 5%;
  }
  .u-layout-col > .u-size-3-xl {
    flex: 3 0 5%;
  }
  .u-layout-row > .u-size-2-xl {
    flex: 0 0 3.33333333%;
    max-width: 3.33333333%;
    min-width: 3.33333333%;
  }
  .u-layout-col > .u-size-2-xl {
    flex: 2 0 3.33333333%;
  }
  .u-layout-row > .u-size-1-xl {
    flex: 0 0 1.66666667%;
    max-width: 1.66666667%;
    min-width: 1.66666667%;
  }
  .u-layout-col > .u-size-1-xl {
    flex: 1 0 1.66666667%;
  }
  .u-layout-row > .u-size-0-xl {
    flex: 0 0 0%;
    max-width: 0%;
    min-width: 0%;
  }
  .u-layout-col > .u-size-0-xl {
    flex: 0 0 0%;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .u-layout-row > .u-size-60-lg {
    flex: 0 0 100%;
    max-width: 100%;
    min-width: 100%;
  }
  .u-layout-col > .u-size-60-lg {
    flex: 60 0 100%;
  }
  .u-layout-row > .u-size-59-lg {
    flex: 0 0 98.33333333%;
    max-width: 98.33333333%;
    min-width: 98.33333333%;
  }
  .u-layout-col > .u-size-59-lg {
    flex: 59 0 98.33333333%;
  }
  .u-layout-row > .u-size-58-lg {
    flex: 0 0 96.66666667%;
    max-width: 96.66666667%;
    min-width: 96.66666667%;
  }
  .u-layout-col > .u-size-58-lg {
    flex: 58 0 96.66666667%;
  }
  .u-layout-row > .u-size-57-lg {
    flex: 0 0 95%;
    max-width: 95%;
    min-width: 95%;
  }
  .u-layout-col > .u-size-57-lg {
    flex: 57 0 95%;
  }
  .u-layout-row > .u-size-56-lg {
    flex: 0 0 93.33333333%;
    max-width: 93.33333333%;
    min-width: 93.33333333%;
  }
  .u-layout-col > .u-size-56-lg {
    flex: 56 0 93.33333333%;
  }
  .u-layout-row > .u-size-55-lg {
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
    min-width: 91.66666667%;
  }
  .u-layout-col > .u-size-55-lg {
    flex: 55 0 91.66666667%;
  }
  .u-layout-row > .u-size-54-lg {
    flex: 0 0 90%;
    max-width: 90%;
    min-width: 90%;
  }
  .u-layout-col > .u-size-54-lg {
    flex: 54 0 90%;
  }
  .u-layout-row > .u-size-53-lg {
    flex: 0 0 88.33333333%;
    max-width: 88.33333333%;
    min-width: 88.33333333%;
  }
  .u-layout-col > .u-size-53-lg {
    flex: 53 0 88.33333333%;
  }
  .u-layout-row > .u-size-52-lg {
    flex: 0 0 86.66666667%;
    max-width: 86.66666667%;
    min-width: 86.66666667%;
  }
  .u-layout-col > .u-size-52-lg {
    flex: 52 0 86.66666667%;
  }
  .u-layout-row > .u-size-51-lg {
    flex: 0 0 85%;
    max-width: 85%;
    min-width: 85%;
  }
  .u-layout-col > .u-size-51-lg {
    flex: 51 0 85%;
  }
  .u-layout-row > .u-size-50-lg {
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
    min-width: 83.33333333%;
  }
  .u-layout-col > .u-size-50-lg {
    flex: 50 0 83.33333333%;
  }
  .u-layout-row > .u-size-49-lg {
    flex: 0 0 81.66666667%;
    max-width: 81.66666667%;
    min-width: 81.66666667%;
  }
  .u-layout-col > .u-size-49-lg {
    flex: 49 0 81.66666667%;
  }
  .u-layout-row > .u-size-48-lg {
    flex: 0 0 80%;
    max-width: 80%;
    min-width: 80%;
  }
  .u-layout-col > .u-size-48-lg {
    flex: 48 0 80%;
  }
  .u-layout-row > .u-size-47-lg {
    flex: 0 0 78.33333333%;
    max-width: 78.33333333%;
    min-width: 78.33333333%;
  }
  .u-layout-col > .u-size-47-lg {
    flex: 47 0 78.33333333%;
  }
  .u-layout-row > .u-size-46-lg {
    flex: 0 0 76.66666667%;
    max-width: 76.66666667%;
    min-width: 76.66666667%;
  }
  .u-layout-col > .u-size-46-lg {
    flex: 46 0 76.66666667%;
  }
  .u-layout-row > .u-size-45-lg {
    flex: 0 0 75%;
    max-width: 75%;
    min-width: 75%;
  }
  .u-layout-col > .u-size-45-lg {
    flex: 45 0 75%;
  }
  .u-layout-row > .u-size-44-lg {
    flex: 0 0 73.33333333%;
    max-width: 73.33333333%;
    min-width: 73.33333333%;
  }
  .u-layout-col > .u-size-44-lg {
    flex: 44 0 73.33333333%;
  }
  .u-layout-row > .u-size-43-lg {
    flex: 0 0 71.66666667%;
    max-width: 71.66666667%;
    min-width: 71.66666667%;
  }
  .u-layout-col > .u-size-43-lg {
    flex: 43 0 71.66666667%;
  }
  .u-layout-row > .u-size-42-lg {
    flex: 0 0 70%;
    max-width: 70%;
    min-width: 70%;
  }
  .u-layout-col > .u-size-42-lg {
    flex: 42 0 70%;
  }
  .u-layout-row > .u-size-41-lg {
    flex: 0 0 68.33333333%;
    max-width: 68.33333333%;
    min-width: 68.33333333%;
  }
  .u-layout-col > .u-size-41-lg {
    flex: 41 0 68.33333333%;
  }
  .u-layout-row > .u-size-40-lg {
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
    min-width: 66.66666667%;
  }
  .u-layout-col > .u-size-40-lg {
    flex: 40 0 66.66666667%;
  }
  .u-layout-row > .u-size-39-lg {
    flex: 0 0 65%;
    max-width: 65%;
    min-width: 65%;
  }
  .u-layout-col > .u-size-39-lg {
    flex: 39 0 65%;
  }
  .u-layout-row > .u-size-38-lg {
    flex: 0 0 63.33333333%;
    max-width: 63.33333333%;
    min-width: 63.33333333%;
  }
  .u-layout-col > .u-size-38-lg {
    flex: 38 0 63.33333333%;
  }
  .u-layout-row > .u-size-37-lg {
    flex: 0 0 61.66666667%;
    max-width: 61.66666667%;
    min-width: 61.66666667%;
  }
  .u-layout-col > .u-size-37-lg {
    flex: 37 0 61.66666667%;
  }
  
}

a.u-link.u-hover-color-1:hover {
  color: #478ac9 !important;
}
.u-color-1-light-1,
.u-body.u-color-1-light-1,
.u-container-style.u-color-1-light-1:before,
.u-table-alt-color-1-light-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #77aad9;
}
.u-button-style.u-color-1-light-1,
.u-button-style.u-color-1-light-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #77aad9 !important;
}
.u-button-style.u-color-1-light-1:hover,
.u-button-style.u-color-1-light-1[class*="u-border-"]:hover,
.u-button-style.u-color-1-light-1:focus,
.u-button-style.u-color-1-light-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-1-light-1:active,
.u-button-style.u-button-style.u-color-1-light-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-1-light-1.active,
.u-button-style.u-button-style.u-color-1-light-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-1-light-1,
li.active > .u-button-style.u-button-style.u-color-1-light-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #5d9ad2 !important;
}
.u-hover-color-1-light-1:hover,
.u-hover-color-1-light-1[class*="u-border-"]:hover,
.u-hover-color-1-light-1:focus,
.u-hover-color-1-light-1[class*="u-border-"]:focus,
.u-active-color-1-light-1.u-active.u-active,
.u-active-color-1-light-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-1-light-1:hover,
a.u-button-style.u-hover-color-1-light-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-1-light-1,
a.u-button-style:hover > .u-hover-color-1-light-1[class*="u-border-"],
a.u-button-style.u-hover-color-1-light-1:focus,
a.u-button-style.u-hover-color-1-light-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-1-light-1:active,
a.u-button-style.u-button-style.u-active-color-1-light-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-1-light-1.active,
a.u-button-style.u-button-style.u-active-color-1-light-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-1-light-1,
a.u-button-style.u-button-style.active > .u-active-color-1-light-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-1-light-1,
li.active > a.u-button-style.u-button-style.u-active-color-1-light-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #77aad9 !important;
}
a.u-link.u-hover-color-1-light-1:hover {
  color: #77aad9 !important;
}
.u-color-1-light-2,
.u-body.u-color-1-light-2,
.u-container-style.u-color-1-light-2:before,
.u-table-alt-color-1-light-2 tr:nth-child(even) {
  color: #111111;
  background-color: #adcce9;
}
.u-button-style.u-color-1-light-2,
.u-button-style.u-color-1-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #adcce9 !important;
}
.u-button-style.u-color-1-light-2:hover,
.u-button-style.u-color-1-light-2[class*="u-border-"]:hover,
.u-button-style.u-color-1-light-2:focus,
.u-button-style.u-color-1-light-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-1-light-2:active,
.u-button-style.u-button-style.u-color-1-light-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-1-light-2.active,
.u-button-style.u-button-style.u-color-1-light-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-1-light-2,
li.active > .u-button-style.u-button-style.u-color-1-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #8db8e0 !important;
}
.u-hover-color-1-light-2:hover,
.u-hover-color-1-light-2[class*="u-border-"]:hover,
.u-hover-color-1-light-2:focus,
.u-hover-color-1-light-2[class*="u-border-"]:focus,
.u-active-color-1-light-2.u-active.u-active,
.u-active-color-1-light-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-1-light-2:hover,
a.u-button-style.u-hover-color-1-light-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-1-light-2,
a.u-button-style:hover > .u-hover-color-1-light-2[class*="u-border-"],
a.u-button-style.u-hover-color-1-light-2:focus,
a.u-button-style.u-hover-color-1-light-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-1-light-2:active,
a.u-button-style.u-button-style.u-active-color-1-light-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-1-light-2.active,
a.u-button-style.u-button-style.u-active-color-1-light-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-1-light-2,
a.u-button-style.u-button-style.active > .u-active-color-1-light-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-1-light-2,
li.active > a.u-button-style.u-button-style.u-active-color-1-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #adcce9 !important;
}
a.u-link.u-hover-color-1-light-2:hover {
  color: #adcce9 !important;
}
.u-color-1-light-3,
.u-body.u-color-1-light-3,
.u-container-style.u-color-1-light-3:before,
.u-table-alt-color-1-light-3 tr:nth-child(even) {
  color: #111111;
  background-color: #e9f2fa;
}
.u-button-style.u-color-1-light-3,
.u-button-style.u-color-1-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #e9f2fa !important;
}
.u-button-style.u-color-1-light-3:hover,
.u-button-style.u-color-1-light-3[class*="u-border-"]:hover,
.u-button-style.u-color-1-light-3:focus,
.u-button-style.u-color-1-light-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-1-light-3:active,
.u-button-style.u-button-style.u-color-1-light-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-1-light-3.active,
.u-button-style.u-button-style.u-color-1-light-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-1-light-3,
li.active > .u-button-style.u-button-style.u-color-1-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #c2dbf1 !important;
}
.u-hover-color-1-light-3:hover,
.u-hover-color-1-light-3[class*="u-border-"]:hover,
.u-hover-color-1-light-3:focus,
.u-hover-color-1-light-3[class*="u-border-"]:focus,
.u-active-color-1-light-3.u-active.u-active,
.u-active-color-1-light-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-1-light-3:hover,
a.u-button-style.u-hover-color-1-light-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-1-light-3,
a.u-button-style:hover > .u-hover-color-1-light-3[class*="u-border-"],
a.u-button-style.u-hover-color-1-light-3:focus,
a.u-button-style.u-hover-color-1-light-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-1-light-3:active,
a.u-button-style.u-button-style.u-active-color-1-light-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-1-light-3.active,
a.u-button-style.u-button-style.u-active-color-1-light-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-1-light-3,
a.u-button-style.u-button-style.active > .u-active-color-1-light-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-1-light-3,
li.active > a.u-button-style.u-button-style.u-active-color-1-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #e9f2fa !important;
}
a.u-link.u-hover-color-1-light-3:hover {
  color: #e9f2fa !important;
}
.u-color-1-base,
.u-body.u-color-1-base,
.u-container-style.u-color-1-base:before,
.u-table-alt-color-1-base tr:nth-child(even) {
  color: #ffffff;
  background-color: #478ac9;
}
.u-button-style.u-color-1-base,
.u-button-style.u-color-1-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #478ac9 !important;
}
.u-button-style.u-color-1-base:hover,
.u-button-style.u-color-1-base[class*="u-border-"]:hover,
.u-button-style.u-color-1-base:focus,
.u-button-style.u-color-1-base[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-1-base:active,
.u-button-style.u-button-style.u-color-1-base[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-1-base.active,
.u-button-style.u-button-style.u-color-1-base[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-1-base,
li.active > .u-button-style.u-button-style.u-color-1-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #387cbd !important;
}
.u-hover-color-1-base:hover,
.u-hover-color-1-base[class*="u-border-"]:hover,
.u-hover-color-1-base:focus,
.u-hover-color-1-base[class*="u-border-"]:focus,
.u-active-color-1-base.u-active.u-active,
.u-active-color-1-base[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-1-base:hover,
a.u-button-style.u-hover-color-1-base[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-1-base,
a.u-button-style:hover > .u-hover-color-1-base[class*="u-border-"],
a.u-button-style.u-hover-color-1-base:focus,
a.u-button-style.u-hover-color-1-base[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-1-base:active,
a.u-button-style.u-button-style.u-active-color-1-base[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-1-base.active,
a.u-button-style.u-button-style.u-active-color-1-base[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-1-base,
a.u-button-style.u-button-style.active > .u-active-color-1-base[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-1-base,
li.active > a.u-button-style.u-button-style.u-active-color-1-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #478ac9 !important;
}
a.u-link.u-hover-color-1-base:hover {
  color: #478ac9 !important;
}
.u-color-2-dark-3,
.u-body.u-color-2-dark-3,
.u-container-style.u-color-2-dark-3:before,
.u-table-alt-color-2-dark-3 tr:nth-child(even) {
  color: #ffffff;
  background-color: #332929;
}
.u-button-style.u-color-2-dark-3,
.u-button-style.u-color-2-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #332929 !important;
}
.u-button-style.u-color-2-dark-3:hover,
.u-button-style.u-color-2-dark-3[class*="u-border-"]:hover,
.u-button-style.u-color-2-dark-3:focus,
.u-button-style.u-color-2-dark-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-2-dark-3:active,
.u-button-style.u-button-style.u-color-2-dark-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-2-dark-3.active,
.u-button-style.u-button-style.u-color-2-dark-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-2-dark-3,
li.active > .u-button-style.u-button-style.u-color-2-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #2e2525 !important;
}
.u-hover-color-2-dark-3:hover,
.u-hover-color-2-dark-3[class*="u-border-"]:hover,
.u-hover-color-2-dark-3:focus,
.u-hover-color-2-dark-3[class*="u-border-"]:focus,
.u-active-color-2-dark-3.u-active.u-active,
.u-active-color-2-dark-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-2-dark-3:hover,
a.u-button-style.u-hover-color-2-dark-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-2-dark-3,
a.u-button-style:hover > .u-hover-color-2-dark-3[class*="u-border-"],
a.u-button-style.u-hover-color-2-dark-3:focus,
a.u-button-style.u-hover-color-2-dark-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-2-dark-3:active,
a.u-button-style.u-button-style.u-active-color-2-dark-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-2-dark-3.active,
a.u-button-style.u-button-style.u-active-color-2-dark-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-2-dark-3,
a.u-button-style.u-button-style.active > .u-active-color-2-dark-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-2-dark-3,
li.active > a.u-button-style.u-button-style.u-active-color-2-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #332929 !important;
}
a.u-link.u-hover-color-2-dark-3:hover {
  color: #332929 !important;
}
.u-color-2-dark-2,
.u-body.u-color-2-dark-2,
.u-container-style.u-color-2-dark-2:before,
.u-table-alt-color-2-dark-2 tr:nth-child(even) {
  color: #ffffff;
  background-color: #6b4748;
}
.u-button-style.u-color-2-dark-2,
.u-button-style.u-color-2-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #6b4748 !important;
}
.u-button-style.u-color-2-dark-2:hover,
.u-button-style.u-color-2-dark-2[class*="u-border-"]:hover,
.u-button-style.u-color-2-dark-2:focus,
.u-button-style.u-color-2-dark-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-2-dark-2:active,
.u-button-style.u-button-style.u-color-2-dark-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-2-dark-2.active,
.u-button-style.u-button-style.u-color-2-dark-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-2-dark-2,
li.active > .u-button-style.u-button-style.u-color-2-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #604041 !important;
}
.u-hover-color-2-dark-2:hover,
.u-hover-color-2-dark-2[class*="u-border-"]:hover,
.u-hover-color-2-dark-2:focus,
.u-hover-color-2-dark-2[class*="u-border-"]:focus,
.u-active-color-2-dark-2.u-active.u-active,
.u-active-color-2-dark-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-2-dark-2:hover,
a.u-button-style.u-hover-color-2-dark-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-2-dark-2,
a.u-button-style:hover > .u-hover-color-2-dark-2[class*="u-border-"],
a.u-button-style.u-hover-color-2-dark-2:focus,
a.u-button-style.u-hover-color-2-dark-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-2-dark-2:active,
a.u-button-style.u-button-style.u-active-color-2-dark-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-2-dark-2.active,
a.u-button-style.u-button-style.u-active-color-2-dark-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-2-dark-2,
a.u-button-style.u-button-style.active > .u-active-color-2-dark-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-2-dark-2,
li.active > a.u-button-style.u-button-style.u-active-color-2-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #6b4748 !important;
}
a.u-link.u-hover-color-2-dark-2:hover {
  color: #6b4748 !important;
}
.u-color-2-dark-1,
.u-body.u-color-2-dark-1,
.u-container-style.u-color-2-dark-1:before,
.u-table-alt-color-2-dark-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #a35559;
}
.u-button-style.u-color-2-dark-1,
.u-button-style.u-color-2-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #a35559 !important;
}
.u-button-style.u-color-2-dark-1:hover,
.u-button-style.u-color-2-dark-1[class*="u-border-"]:hover,
.u-button-style.u-color-2-dark-1:focus,
.u-button-style.u-color-2-dark-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-2-dark-1:active,
.u-button-style.u-button-style.u-color-2-dark-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-2-dark-1.active,
.u-button-style.u-button-style.u-color-2-dark-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-2-dark-1,
li.active > .u-button-style.u-button-style.u-color-2-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #934c50 !important;
}
.u-hover-color-2-dark-1:hover,
.u-hover-color-2-dark-1[class*="u-border-"]:hover,
.u-hover-color-2-dark-1:focus,
.u-hover-color-2-dark-1[class*="u-border-"]:focus,
.u-active-color-2-dark-1.u-active.u-active,
.u-active-color-2-dark-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-2-dark-1:hover,
a.u-button-style.u-hover-color-2-dark-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-2-dark-1,
a.u-button-style:hover > .u-hover-color-2-dark-1[class*="u-border-"],
a.u-button-style.u-hover-color-2-dark-1:focus,
a.u-button-style.u-hover-color-2-dark-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-2-dark-1:active,
a.u-button-style.u-button-style.u-active-color-2-dark-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-2-dark-1.active,
a.u-button-style.u-button-style.u-active-color-2-dark-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-2-dark-1,
a.u-button-style.u-button-style.active > .u-active-color-2-dark-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-2-dark-1,
li.active > a.u-button-style.u-button-style.u-active-color-2-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #a35559 !important;
}
a.u-link.u-hover-color-2-dark-1:hover {
  color: #a35559 !important;
}
.u-color-2,
.u-body.u-color-2,
.u-container-style.u-color-2:before,
.u-table-alt-color-2 tr:nth-child(even) {
  color: #ffffff;
  background-color: #db545a;
}
.u-button-style.u-color-2,
.u-button-style.u-color-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #db545a !important;
}
.u-button-style.u-color-2:hover,
.u-button-style.u-color-2[class*="u-border-"]:hover,
.u-button-style.u-color-2:focus,
.u-button-style.u-color-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-2:active,
.u-button-style.u-button-style.u-color-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-2.active,
.u-button-style.u-button-style.u-color-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-2,
li.active > .u-button-style.u-button-style.u-color-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #d63b42 !important;
}
.u-hover-color-2:hover,
.u-hover-color-2[class*="u-border-"]:hover,
.u-hover-color-2:focus,
.u-hover-color-2[class*="u-border-"]:focus,
.u-active-color-2.u-active.u-active,
.u-active-color-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-2:hover,
a.u-button-style.u-hover-color-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-2,
a.u-button-style:hover > .u-hover-color-2[class*="u-border-"],
a.u-button-style.u-hover-color-2:focus,
a.u-button-style.u-hover-color-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-2:active,
a.u-button-style.u-button-style.u-active-color-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-2.active,
a.u-button-style.u-button-style.u-active-color-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-2,
a.u-button-style.u-button-style.active > .u-active-color-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-2,
li.active > a.u-button-style.u-button-style.u-active-color-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #db545a !important;
}
a.u-link.u-hover-color-2:hover {
  color: #db545a !important;
}
.u-color-2-light-1,
.u-body.u-color-2-light-1,
.u-container-style.u-color-2-light-1:before,
.u-table-alt-color-2-light-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #e68387;
}
.u-button-style.u-color-2-light-1,
.u-button-style.u-color-2-light-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #e68387 !important;
}
.u-button-style.u-color-2-light-1:hover,
.u-button-style.u-color-2-light-1[class*="u-border-"]:hover,
.u-button-style.u-color-2-light-1:focus,
.u-button-style.u-color-2-light-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-2-light-1:active,
.u-button-style.u-button-style.u-color-2-light-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-2-light-1.active,
.u-button-style.u-button-style.u-color-2-light-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-2-light-1,
li.active > .u-button-style.u-button-style.u-color-2-light-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #e0656a !important;
}
.u-hover-color-2-light-1:hover,
.u-hover-color-2-light-1[class*="u-border-"]:hover,
.u-hover-color-2-light-1:focus,
.u-hover-color-2-light-1[class*="u-border-"]:focus,
.u-active-color-2-light-1.u-active.u-active,
.u-active-color-2-light-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-2-light-1:hover,
a.u-button-style.u-hover-color-2-light-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-2-light-1,
a.u-button-style:hover > .u-hover-color-2-light-1[class*="u-border-"],
a.u-button-style.u-hover-color-2-light-1:focus,
a.u-button-style.u-hover-color-2-light-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-2-light-1:active,
a.u-button-style.u-button-style.u-active-color-2-light-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-2-light-1.active,
a.u-button-style.u-button-style.u-active-color-2-light-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-2-light-1,
a.u-button-style.u-button-style.active > .u-active-color-2-light-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-2-light-1,
li.active > a.u-button-style.u-button-style.u-active-color-2-light-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #e68387 !important;
}
a.u-link.u-hover-color-2-light-1:hover {
  color: #e68387 !important;
}
.u-color-2-light-2,
.u-body.u-color-2-light-2,
.u-container-style.u-color-2-light-2:before,
.u-table-alt-color-2-light-2 tr:nth-child(even) {
  color: #111111;
  background-color: #f1b5b8;
}
.u-button-style.u-color-2-light-2,
.u-button-style.u-color-2-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f1b5b8 !important;
}
.u-button-style.u-color-2-light-2:hover,
.u-button-style.u-color-2-light-2[class*="u-border-"]:hover,
.u-button-style.u-color-2-light-2:focus,
.u-button-style.u-color-2-light-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-2-light-2:active,
.u-button-style.u-button-style.u-color-2-light-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-2-light-2.active,
.u-button-style.u-button-style.u-color-2-light-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-2-light-2,
li.active > .u-button-style.u-button-style.u-color-2-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #ea9296 !important;
}
.u-hover-color-2-light-2:hover,
.u-hover-color-2-light-2[class*="u-border-"]:hover,
.u-hover-color-2-light-2:focus,
.u-hover-color-2-light-2[class*="u-border-"]:focus,
.u-active-color-2-light-2.u-active.u-active,
.u-active-color-2-light-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-2-light-2:hover,
a.u-button-style.u-hover-color-2-light-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-2-light-2,
a.u-button-style:hover > .u-hover-color-2-light-2[class*="u-border-"],
a.u-button-style.u-hover-color-2-light-2:focus,
a.u-button-style.u-hover-color-2-light-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-2-light-2:active,
a.u-button-style.u-button-style.u-active-color-2-light-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-2-light-2.active,
a.u-button-style.u-button-style.u-active-color-2-light-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-2-light-2,
a.u-button-style.u-button-style.active > .u-active-color-2-light-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-2-light-2,
li.active > a.u-button-style.u-button-style.u-active-color-2-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f1b5b8 !important;
}
a.u-link.u-hover-color-2-light-2:hover {
  color: #f1b5b8 !important;
}
.u-color-2-light-3,
.u-body.u-color-2-light-3,
.u-container-style.u-color-2-light-3:before,
.u-table-alt-color-2-light-3 tr:nth-child(even) {
  color: #111111;
  background-color: #fbeced;
}
.u-button-style.u-color-2-light-3,
.u-button-style.u-color-2-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #fbeced !important;
}
.u-button-style.u-color-2-light-3:hover,
.u-button-style.u-color-2-light-3[class*="u-border-"]:hover,
.u-button-style.u-color-2-light-3:focus,
.u-button-style.u-color-2-light-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-2-light-3:active,
.u-button-style.u-button-style.u-color-2-light-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-2-light-3.active,
.u-button-style.u-button-style.u-color-2-light-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-2-light-3,
li.active > .u-button-style.u-button-style.u-color-2-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f3c4c7 !important;
}
.u-hover-color-2-light-3:hover,
.u-hover-color-2-light-3[class*="u-border-"]:hover,
.u-hover-color-2-light-3:focus,
.u-hover-color-2-light-3[class*="u-border-"]:focus,
.u-active-color-2-light-3.u-active.u-active,
.u-active-color-2-light-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-2-light-3:hover,
a.u-button-style.u-hover-color-2-light-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-2-light-3,
a.u-button-style:hover > .u-hover-color-2-light-3[class*="u-border-"],
a.u-button-style.u-hover-color-2-light-3:focus,
a.u-button-style.u-hover-color-2-light-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-2-light-3:active,
a.u-button-style.u-button-style.u-active-color-2-light-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-2-light-3.active,
a.u-button-style.u-button-style.u-active-color-2-light-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-2-light-3,
a.u-button-style.u-button-style.active > .u-active-color-2-light-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-2-light-3,
li.active > a.u-button-style.u-button-style.u-active-color-2-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #fbeced !important;
}
a.u-link.u-hover-color-2-light-3:hover {
  color: #fbeced !important;
}
.u-color-2-base,
.u-body.u-color-2-base,
.u-container-style.u-color-2-base:before,
.u-table-alt-color-2-base tr:nth-child(even) {
  color: #ffffff;
  background-color: #db545a;
}
.u-button-style.u-color-2-base,
.u-button-style.u-color-2-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #db545a !important;
}
.u-button-style.u-color-2-base:hover,
.u-button-style.u-color-2-base[class*="u-border-"]:hover,
.u-button-style.u-color-2-base:focus,
.u-button-style.u-color-2-base[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-2-base:active,
.u-button-style.u-button-style.u-color-2-base[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-2-base.active,
.u-button-style.u-button-style.u-color-2-base[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-2-base,
li.active > .u-button-style.u-button-style.u-color-2-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #d63b42 !important;
}
.u-hover-color-2-base:hover,
.u-hover-color-2-base[class*="u-border-"]:hover,
.u-hover-color-2-base:focus,
.u-hover-color-2-base[class*="u-border-"]:focus,
.u-active-color-2-base.u-active.u-active,
.u-active-color-2-base[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-2-base:hover,
a.u-button-style.u-hover-color-2-base[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-2-base,
a.u-button-style:hover > .u-hover-color-2-base[class*="u-border-"],
a.u-button-style.u-hover-color-2-base:focus,
a.u-button-style.u-hover-color-2-base[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-2-base:active,
a.u-button-style.u-button-style.u-active-color-2-base[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-2-base.active,
a.u-button-style.u-button-style.u-active-color-2-base[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-2-base,
a.u-button-style.u-button-style.active > .u-active-color-2-base[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-2-base,
li.active > a.u-button-style.u-button-style.u-active-color-2-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #db545a !important;
}
a.u-link.u-hover-color-2-base:hover {
  color: #db545a !important;
}
.u-color-3-dark-3,
.u-body.u-color-3-dark-3,
.u-container-style.u-color-3-dark-3:before,
.u-table-alt-color-3-dark-3 tr:nth-child(even) {
  color: #ffffff;
  background-color: #333129;
}
.u-button-style.u-color-3-dark-3,
.u-button-style.u-color-3-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #333129 !important;
}
.u-button-style.u-color-3-dark-3:hover,
.u-button-style.u-color-3-dark-3[class*="u-border-"]:hover,
.u-button-style.u-color-3-dark-3:focus,
.u-button-style.u-color-3-dark-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-3-dark-3:active,
.u-button-style.u-button-style.u-color-3-dark-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-3-dark-3.active,
.u-button-style.u-button-style.u-color-3-dark-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-3-dark-3,
li.active > .u-button-style.u-button-style.u-color-3-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #2e2c25 !important;
}
.u-hover-color-3-dark-3:hover,
.u-hover-color-3-dark-3[class*="u-border-"]:hover,
.u-hover-color-3-dark-3:focus,
.u-hover-color-3-dark-3[class*="u-border-"]:focus,
.u-active-color-3-dark-3.u-active.u-active,
.u-active-color-3-dark-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-3-dark-3:hover,
a.u-button-style.u-hover-color-3-dark-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-3-dark-3,
a.u-button-style:hover > .u-hover-color-3-dark-3[class*="u-border-"],
a.u-button-style.u-hover-color-3-dark-3:focus,
a.u-button-style.u-hover-color-3-dark-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-3-dark-3:active,
a.u-button-style.u-button-style.u-active-color-3-dark-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-3-dark-3.active,
a.u-button-style.u-button-style.u-active-color-3-dark-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-3-dark-3,
a.u-button-style.u-button-style.active > .u-active-color-3-dark-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-3-dark-3,
li.active > a.u-button-style.u-button-style.u-active-color-3-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #333129 !important;
}
a.u-link.u-hover-color-3-dark-3:hover {
  color: #333129 !important;
}
.u-color-3-dark-2,
.u-body.u-color-3-dark-2,
.u-container-style.u-color-3-dark-2:before,
.u-table-alt-color-3-dark-2 tr:nth-child(even) {
  color: #ffffff;
  background-color: #72683f;
}
.u-button-style.u-color-3-dark-2,
.u-button-style.u-color-3-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #72683f !important;
}
.u-button-style.u-color-3-dark-2:hover,
.u-button-style.u-color-3-dark-2[class*="u-border-"]:hover,
.u-button-style.u-color-3-dark-2:focus,
.u-button-style.u-color-3-dark-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-3-dark-2:active,
.u-button-style.u-button-style.u-color-3-dark-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-3-dark-2.active,
.u-button-style.u-button-style.u-color-3-dark-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-3-dark-2,
li.active > .u-button-style.u-button-style.u-color-3-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #675e39 !important;
}
.u-hover-color-3-dark-2:hover,
.u-hover-color-3-dark-2[class*="u-border-"]:hover,
.u-hover-color-3-dark-2:focus,
.u-hover-color-3-dark-2[class*="u-border-"]:focus,
.u-active-color-3-dark-2.u-active.u-active,
.u-active-color-3-dark-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-3-dark-2:hover,
a.u-button-style.u-hover-color-3-dark-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-3-dark-2,
a.u-button-style:hover > .u-hover-color-3-dark-2[class*="u-border-"],
a.u-button-style.u-hover-color-3-dark-2:focus,
a.u-button-style.u-hover-color-3-dark-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-3-dark-2:active,
a.u-button-style.u-button-style.u-active-color-3-dark-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-3-dark-2.active,
a.u-button-style.u-button-style.u-active-color-3-dark-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-3-dark-2,
a.u-button-style.u-button-style.active > .u-active-color-3-dark-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-3-dark-2,
li.active > a.u-button-style.u-button-style.u-active-color-3-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #72683f !important;
}
a.u-link.u-hover-color-3-dark-2:hover {
  color: #72683f !important;
}
.u-color-3-dark-1,
.u-body.u-color-3-dark-1,
.u-container-style.u-color-3-dark-1:before,
.u-table-alt-color-3-dark-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #b29a36;
}
.u-button-style.u-color-3-dark-1,
.u-button-style.u-color-3-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #b29a36 !important;
}
.u-button-style.u-color-3-dark-1:hover,
.u-button-style.u-color-3-dark-1[class*="u-border-"]:hover,
.u-button-style.u-color-3-dark-1:focus,
.u-button-style.u-color-3-dark-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-3-dark-1:active,
.u-button-style.u-button-style.u-color-3-dark-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-3-dark-1.active,
.u-button-style.u-button-style.u-color-3-dark-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-3-dark-1,
li.active > .u-button-style.u-button-style.u-color-3-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #a08b31 !important;
}
.u-hover-color-3-dark-1:hover,
.u-hover-color-3-dark-1[class*="u-border-"]:hover,
.u-hover-color-3-dark-1:focus,
.u-hover-color-3-dark-1[class*="u-border-"]:focus,
.u-active-color-3-dark-1.u-active.u-active,
.u-active-color-3-dark-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-3-dark-1:hover,
a.u-button-style.u-hover-color-3-dark-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-3-dark-1,
a.u-button-style:hover > .u-hover-color-3-dark-1[class*="u-border-"],
a.u-button-style.u-hover-color-3-dark-1:focus,
a.u-button-style.u-hover-color-3-dark-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-3-dark-1:active,
a.u-button-style.u-button-style.u-active-color-3-dark-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-3-dark-1.active,
a.u-button-style.u-button-style.u-active-color-3-dark-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-3-dark-1,
a.u-button-style.u-button-style.active > .u-active-color-3-dark-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-3-dark-1,
li.active > a.u-button-style.u-button-style.u-active-color-3-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #b29a36 !important;
}
a.u-link.u-hover-color-3-dark-1:hover {
  color: #b29a36 !important;
}
.u-color-3,
.u-body.u-color-3,
.u-container-style.u-color-3:before,
.u-table-alt-color-3 tr:nth-child(even) {
  color: #111111;
  background-color: #f1c50e;
}
.u-button-style.u-color-3,
.u-button-style.u-color-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f1c50e !important;
}
.u-button-style.u-color-3:hover,
.u-button-style.u-color-3[class*="u-border-"]:hover,
.u-button-style.u-color-3:focus,
.u-button-style.u-color-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-3:active,
.u-button-style.u-button-style.u-color-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-3.active,
.u-button-style.u-button-style.u-color-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-3,
li.active > .u-button-style.u-button-style.u-color-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #d9b10d !important;
}
.u-hover-color-3:hover,
.u-hover-color-3[class*="u-border-"]:hover,
.u-hover-color-3:focus,
.u-hover-color-3[class*="u-border-"]:focus,
.u-active-color-3.u-active.u-active,
.u-active-color-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-3:hover,
a.u-button-style.u-hover-color-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-3,
a.u-button-style:hover > .u-hover-color-3[class*="u-border-"],
a.u-button-style.u-hover-color-3:focus,
a.u-button-style.u-hover-color-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-3:active,
a.u-button-style.u-button-style.u-active-color-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-3.active,
a.u-button-style.u-button-style.u-active-color-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-3,
a.u-button-style.u-button-style.active > .u-active-color-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-3,
li.active > a.u-button-style.u-button-style.u-active-color-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f1c50e !important;
}
a.u-link.u-hover-color-3:hover {
  color: #f1c50e !important;
}
.u-color-3-light-1,
.u-body.u-color-3-light-1,
.u-container-style.u-color-3-light-1:before,
.u-table-alt-color-3-light-1 tr:nth-child(even) {
  color: #111111;
  background-color: #f5d654;
}
.u-button-style.u-color-3-light-1,
.u-button-style.u-color-3-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f5d654 !important;
}
.u-button-style.u-color-3-light-1:hover,
.u-button-style.u-color-3-light-1[class*="u-border-"]:hover,
.u-button-style.u-color-3-light-1:focus,
.u-button-style.u-color-3-light-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-3-light-1:active,
.u-button-style.u-button-style.u-color-3-light-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-3-light-1.active,
.u-button-style.u-button-style.u-color-3-light-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-3-light-1,
li.active > .u-button-style.u-button-style.u-color-3-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f3cf35 !important;
}
.u-hover-color-3-light-1:hover,
.u-hover-color-3-light-1[class*="u-border-"]:hover,
.u-hover-color-3-light-1:focus,
.u-hover-color-3-light-1[class*="u-border-"]:focus,
.u-active-color-3-light-1.u-active.u-active,
.u-active-color-3-light-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-3-light-1:hover,
a.u-button-style.u-hover-color-3-light-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-3-light-1,
a.u-button-style:hover > .u-hover-color-3-light-1[class*="u-border-"],
a.u-button-style.u-hover-color-3-light-1:focus,
a.u-button-style.u-hover-color-3-light-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-3-light-1:active,
a.u-button-style.u-button-style.u-active-color-3-light-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-3-light-1.active,
a.u-button-style.u-button-style.u-active-color-3-light-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-3-light-1,
a.u-button-style.u-button-style.active > .u-active-color-3-light-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-3-light-1,
li.active > a.u-button-style.u-button-style.u-active-color-3-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f5d654 !important;
}
a.u-link.u-hover-color-3-light-1:hover {
  color: #f5d654 !important;
}
.u-color-3-light-2,
.u-body.u-color-3-light-2,
.u-container-style.u-color-3-light-2:before,
.u-table-alt-color-3-light-2 tr:nth-child(even) {
  color: #111111;
  background-color: #f9e79b;
}
.u-button-style.u-color-3-light-2,
.u-button-style.u-color-3-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f9e79b !important;
}
.u-button-style.u-color-3-light-2:hover,
.u-button-style.u-color-3-light-2[class*="u-border-"]:hover,
.u-button-style.u-color-3-light-2:focus,
.u-button-style.u-color-3-light-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-3-light-2:active,
.u-button-style.u-button-style.u-color-3-light-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-3-light-2.active,
.u-button-style.u-button-style.u-color-3-light-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-3-light-2,
li.active > .u-button-style.u-button-style.u-color-3-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f7de75 !important;
}
.u-hover-color-3-light-2:hover,
.u-hover-color-3-light-2[class*="u-border-"]:hover,
.u-hover-color-3-light-2:focus,
.u-hover-color-3-light-2[class*="u-border-"]:focus,
.u-active-color-3-light-2.u-active.u-active,
.u-active-color-3-light-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-3-light-2:hover,
a.u-button-style.u-hover-color-3-light-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-3-light-2,
a.u-button-style:hover > .u-hover-color-3-light-2[class*="u-border-"],
a.u-button-style.u-hover-color-3-light-2:focus,
a.u-button-style.u-hover-color-3-light-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-3-light-2:active,
a.u-button-style.u-button-style.u-active-color-3-light-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-3-light-2.active,
a.u-button-style.u-button-style.u-active-color-3-light-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-3-light-2,
a.u-button-style.u-button-style.active > .u-active-color-3-light-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-3-light-2,
li.active > a.u-button-style.u-button-style.u-active-color-3-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f9e79b !important;
}
a.u-link.u-hover-color-3-light-2:hover {
  color: #f9e79b !important;
}
.u-color-3-light-3,
.u-body.u-color-3-light-3,
.u-container-style.u-color-3-light-3:before,
.u-table-alt-color-3-light-3 tr:nth-child(even) {
  color: #111111;
  background-color: #fef9e6;
}
.u-button-style.u-color-3-light-3,
.u-button-style.u-color-3-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #fef9e6 !important;
}
.u-button-style.u-color-3-light-3:hover,
.u-button-style.u-color-3-light-3[class*="u-border-"]:hover,
.u-button-style.u-color-3-light-3:focus,
.u-button-style.u-color-3-light-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-3-light-3:active,
.u-button-style.u-button-style.u-color-3-light-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-3-light-3.active,
.u-button-style.u-button-style.u-color-3-light-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-3-light-3,
li.active > .u-button-style.u-button-style.u-color-3-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #fceeb7 !important;
}
.u-hover-color-3-light-3:hover,
.u-hover-color-3-light-3[class*="u-border-"]:hover,
.u-hover-color-3-light-3:focus,
.u-hover-color-3-light-3[class*="u-border-"]:focus,
.u-active-color-3-light-3.u-active.u-active,
.u-active-color-3-light-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-3-light-3:hover,
a.u-button-style.u-hover-color-3-light-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-3-light-3,
a.u-button-style:hover > .u-hover-color-3-light-3[class*="u-border-"],
a.u-button-style.u-hover-color-3-light-3:focus,
a.u-button-style.u-hover-color-3-light-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-3-light-3:active,
a.u-button-style.u-button-style.u-active-color-3-light-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-3-light-3.active,
a.u-button-style.u-button-style.u-active-color-3-light-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-3-light-3,
a.u-button-style.u-button-style.active > .u-active-color-3-light-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-3-light-3,
li.active > a.u-button-style.u-button-style.u-active-color-3-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #fef9e6 !important;
}
a.u-link.u-hover-color-3-light-3:hover {
  color: #fef9e6 !important;
}
.u-color-3-base,
.u-body.u-color-3-base,
.u-container-style.u-color-3-base:before,
.u-table-alt-color-3-base tr:nth-child(even) {
  color: #111111;
  background-color: #f1c50e;
}
.u-button-style.u-color-3-base,
.u-button-style.u-color-3-base[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f1c50e !important;
}
.u-button-style.u-color-3-base:hover,
.u-button-style.u-color-3-base[class*="u-border-"]:hover,
.u-button-style.u-color-3-base:focus,
.u-button-style.u-color-3-base[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-3-base:active,
.u-button-style.u-button-style.u-color-3-base[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-3-base.active,
.u-button-style.u-button-style.u-color-3-base[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-3-base,
li.active > .u-button-style.u-button-style.u-color-3-base[class*="u-border-"] {
  color: #111111 !important;
  background-color: #d9b10d !important;
}
.u-hover-color-3-base:hover,
.u-hover-color-3-base[class*="u-border-"]:hover,
.u-hover-color-3-base:focus,
.u-hover-color-3-base[class*="u-border-"]:focus,
.u-active-color-3-base.u-active.u-active,
.u-active-color-3-base[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-3-base:hover,
a.u-button-style.u-hover-color-3-base[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-3-base,
a.u-button-style:hover > .u-hover-color-3-base[class*="u-border-"],
a.u-button-style.u-hover-color-3-base:focus,
a.u-button-style.u-hover-color-3-base[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-3-base:active,
a.u-button-style.u-button-style.u-active-color-3-base[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-3-base.active,
a.u-button-style.u-button-style.u-active-color-3-base[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-3-base,
a.u-button-style.u-button-style.active > .u-active-color-3-base[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-3-base,
li.active > a.u-button-style.u-button-style.u-active-color-3-base[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f1c50e !important;
}
a.u-link.u-hover-color-3-base:hover {
  color: #f1c50e !important;
}
.u-color-4-dark-3,
.u-body.u-color-4-dark-3,
.u-container-style.u-color-4-dark-3:before,
.u-table-alt-color-4-dark-3 tr:nth-child(even) {
  color: #ffffff;
  background-color: #293332;
}
.u-button-style.u-color-4-dark-3,
.u-button-style.u-color-4-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #293332 !important;
}
.u-button-style.u-color-4-dark-3:hover,
.u-button-style.u-color-4-dark-3[class*="u-border-"]:hover,
.u-button-style.u-color-4-dark-3:focus,
.u-button-style.u-color-4-dark-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-4-dark-3:active,
.u-button-style.u-button-style.u-color-4-dark-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-4-dark-3.active,
.u-button-style.u-button-style.u-color-4-dark-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-4-dark-3,
li.active > .u-button-style.u-button-style.u-color-4-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #252e2d !important;
}
.u-hover-color-4-dark-3:hover,
.u-hover-color-4-dark-3[class*="u-border-"]:hover,
.u-hover-color-4-dark-3:focus,
.u-hover-color-4-dark-3[class*="u-border-"]:focus,
.u-active-color-4-dark-3.u-active.u-active,
.u-active-color-4-dark-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-4-dark-3:hover,
a.u-button-style.u-hover-color-4-dark-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-4-dark-3,
a.u-button-style:hover > .u-hover-color-4-dark-3[class*="u-border-"],
a.u-button-style.u-hover-color-4-dark-3:focus,
a.u-button-style.u-hover-color-4-dark-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-4-dark-3:active,
a.u-button-style.u-button-style.u-active-color-4-dark-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-4-dark-3.active,
a.u-button-style.u-button-style.u-active-color-4-dark-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-4-dark-3,
a.u-button-style.u-button-style.active > .u-active-color-4-dark-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-4-dark-3,
li.active > a.u-button-style.u-button-style.u-active-color-4-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #293332 !important;
}
a.u-link.u-hover-color-4-dark-3:hover {
  color: #293332 !important;
}
.u-color-4-dark-2,
.u-body.u-color-4-dark-2,
.u-container-style.u-color-4-dark-2:before,
.u-table-alt-color-4-dark-2 tr:nth-child(even) {
  color: #ffffff;
  background-color: #41807c;
}
.u-button-style.u-color-4-dark-2,
.u-button-style.u-color-4-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #41807c !important;
}
.u-button-style.u-color-4-dark-2:hover,
.u-button-style.u-color-4-dark-2[class*="u-border-"]:hover,
.u-button-style.u-color-4-dark-2:focus,
.u-button-style.u-color-4-dark-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-4-dark-2:active,
.u-button-style.u-button-style.u-color-4-dark-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-4-dark-2.active,
.u-button-style.u-button-style.u-color-4-dark-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-4-dark-2,
li.active > .u-button-style.u-button-style.u-color-4-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #3a7370 !important;
}
.u-hover-color-4-dark-2:hover,
.u-hover-color-4-dark-2[class*="u-border-"]:hover,
.u-hover-color-4-dark-2:focus,
.u-hover-color-4-dark-2[class*="u-border-"]:focus,
.u-active-color-4-dark-2.u-active.u-active,
.u-active-color-4-dark-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-4-dark-2:hover,
a.u-button-style.u-hover-color-4-dark-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-4-dark-2,
a.u-button-style:hover > .u-hover-color-4-dark-2[class*="u-border-"],
a.u-button-style.u-hover-color-4-dark-2:focus,
a.u-button-style.u-hover-color-4-dark-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-4-dark-2:active,
a.u-button-style.u-button-style.u-active-color-4-dark-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-4-dark-2.active,
a.u-button-style.u-button-style.u-active-color-4-dark-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-4-dark-2,
a.u-button-style.u-button-style.active > .u-active-color-4-dark-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-4-dark-2,
li.active > a.u-button-style.u-button-style.u-active-color-4-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #41807c !important;
}
a.u-link.u-hover-color-4-dark-2:hover {
  color: #41807c !important;
}
.u-color-4-dark-1,
.u-body.u-color-4-dark-1,
.u-container-style.u-color-4-dark-1:before,
.u-table-alt-color-4-dark-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #2cccc4;
}
.u-button-style.u-color-4-dark-1,
.u-button-style.u-color-4-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #2cccc4 !important;
}
.u-button-style.u-color-4-dark-1:hover,
.u-button-style.u-color-4-dark-1[class*="u-border-"]:hover,
.u-button-style.u-color-4-dark-1:focus,
.u-button-style.u-color-4-dark-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-4-dark-1:active,
.u-button-style.u-button-style.u-color-4-dark-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-4-dark-1.active,
.u-button-style.u-button-style.u-color-4-dark-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-4-dark-1,
li.active > .u-button-style.u-button-style.u-color-4-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #28b8b0 !important;
}
.u-hover-color-4-dark-1:hover,
.u-hover-color-4-dark-1[class*="u-border-"]:hover,
.u-hover-color-4-dark-1:focus,
.u-hover-color-4-dark-1[class*="u-border-"]:focus,
.u-active-color-4-dark-1.u-active.u-active,
.u-active-color-4-dark-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-4-dark-1:hover,
a.u-button-style.u-hover-color-4-dark-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-4-dark-1,
a.u-button-style:hover > .u-hover-color-4-dark-1[class*="u-border-"],
a.u-button-style.u-hover-color-4-dark-1:focus,
a.u-button-style.u-hover-color-4-dark-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-4-dark-1:active,
a.u-button-style.u-button-style.u-active-color-4-dark-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-4-dark-1.active,
a.u-button-style.u-button-style.u-active-color-4-dark-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-4-dark-1,
a.u-button-style.u-button-style.active > .u-active-color-4-dark-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-4-dark-1,
li.active > a.u-button-style.u-button-style.u-active-color-4-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #2cccc4 !important;
}
a.u-link.u-hover-color-4-dark-1:hover {
  color: #2cccc4 !important;
}
.u-color-4,
.u-body.u-color-4,
.u-container-style.u-color-4:before,
.u-table-alt-color-4 tr:nth-child(even) {
  color: #111111;
  background-color: #3be8e0;
}
.u-button-style.u-color-4,
.u-button-style.u-color-4[class*="u-border-"] {
  color: #111111 !important;
  background-color: #3be8e0 !important;
}
.u-button-style.u-color-4:hover,
.u-button-style.u-color-4[class*="u-border-"]:hover,
.u-button-style.u-color-4:focus,
.u-button-style.u-color-4[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-4:active,
.u-button-style.u-button-style.u-color-4[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-4.active,
.u-button-style.u-button-style.u-color-4[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-4,
li.active > .u-button-style.u-button-style.u-color-4[class*="u-border-"] {
  color: #111111 !important;
  background-color: #21e5dc !important;
}
.u-hover-color-4:hover,
.u-hover-color-4[class*="u-border-"]:hover,
.u-hover-color-4:focus,
.u-hover-color-4[class*="u-border-"]:focus,
.u-active-color-4.u-active.u-active,
.u-active-color-4[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-4:hover,
a.u-button-style.u-hover-color-4[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-4,
a.u-button-style:hover > .u-hover-color-4[class*="u-border-"],
a.u-button-style.u-hover-color-4:focus,
a.u-button-style.u-hover-color-4[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-4:active,
a.u-button-style.u-button-style.u-active-color-4[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-4.active,
a.u-button-style.u-button-style.u-active-color-4[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-4,
a.u-button-style.u-button-style.active > .u-active-color-4[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-4,
li.active > a.u-button-style.u-button-style.u-active-color-4[class*="u-border-"] {
  color: #111111 !important;
  background-color: #3be8e0 !important;
}
a.u-link.u-hover-color-4:hover {
  color: #3be8e0 !important;
}
.u-color-4-light-1,
.u-body.u-color-4-light-1,
.u-container-style.u-color-4-light-1:before,
.u-table-alt-color-4-light-1 tr:nth-child(even) {
  color: #111111;
  background-color: #72efe9;
}
.u-button-style.u-color-4-light-1,
.u-button-style.u-color-4-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #72efe9 !important;
}
.u-button-style.u-color-4-light-1:hover,
.u-button-style.u-color-4-light-1[class*="u-border-"]:hover,
.u-button-style.u-color-4-light-1:focus,
.u-button-style.u-color-4-light-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-4-light-1:active,
.u-button-style.u-button-style.u-color-4-light-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-4-light-1.active,
.u-button-style.u-button-style.u-color-4-light-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-4-light-1,
li.active > .u-button-style.u-button-style.u-color-4-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #52ebe4 !important;
}
.u-hover-color-4-light-1:hover,
.u-hover-color-4-light-1[class*="u-border-"]:hover,
.u-hover-color-4-light-1:focus,
.u-hover-color-4-light-1[class*="u-border-"]:focus,
.u-active-color-4-light-1.u-active.u-active,
.u-active-color-4-light-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-4-light-1:hover,
a.u-button-style.u-hover-color-4-light-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-4-light-1,
a.u-button-style:hover > .u-hover-color-4-light-1[class*="u-border-"],
a.u-button-style.u-hover-color-4-light-1:focus,
a.u-button-style.u-hover-color-4-light-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-4-light-1:active,
a.u-button-style.u-button-style.u-active-color-4-light-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-4-light-1.active,
a.u-button-style.u-button-style.u-active-color-4-light-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-4-light-1,
a.u-button-style.u-button-style.active > .u-active-color-4-light-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-4-light-1,
li.active > a.u-button-style.u-button-style.u-active-color-4-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #72efe9 !important;
}
a.u-link.u-hover-color-4-light-1:hover {
  color: #72efe9 !important;
}
.u-color-4-light-2,
.u-body.u-color-4-light-2,
.u-container-style.u-color-4-light-2:before,
.u-table-alt-color-4-light-2 tr:nth-child(even) {
  color: #111111;
  background-color: #adf6f2;
}
.u-button-style.u-color-4-light-2,
.u-button-style.u-color-4-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #adf6f2 !important;
}
.u-button-style.u-color-4-light-2:hover,
.u-button-style.u-color-4-light-2[class*="u-border-"]:hover,
.u-button-style.u-color-4-light-2:focus,
.u-button-style.u-color-4-light-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-4-light-2:active,
.u-button-style.u-button-style.u-color-4-light-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-4-light-2.active,
.u-button-style.u-button-style.u-color-4-light-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-4-light-2,
li.active > .u-button-style.u-button-style.u-color-4-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #87f2ec !important;
}
.u-hover-color-4-light-2:hover,
.u-hover-color-4-light-2[class*="u-border-"]:hover,
.u-hover-color-4-light-2:focus,
.u-hover-color-4-light-2[class*="u-border-"]:focus,
.u-active-color-4-light-2.u-active.u-active,
.u-active-color-4-light-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-4-light-2:hover,
a.u-button-style.u-hover-color-4-light-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-4-light-2,
a.u-button-style:hover > .u-hover-color-4-light-2[class*="u-border-"],
a.u-button-style.u-hover-color-4-light-2:focus,
a.u-button-style.u-hover-color-4-light-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-4-light-2:active,
a.u-button-style.u-button-style.u-active-color-4-light-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-4-light-2.active,
a.u-button-style.u-button-style.u-active-color-4-light-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-4-light-2,
a.u-button-style.u-button-style.active > .u-active-color-4-light-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-4-light-2,
li.active > a.u-button-style.u-button-style.u-active-color-4-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #adf6f2 !important;
}
a.u-link.u-hover-color-4-light-2:hover {
  color: #adf6f2 !important;
}
.u-color-4-light-3,
.u-body.u-color-4-light-3,
.u-container-style.u-color-4-light-3:before,
.u-table-alt-color-4-light-3 tr:nth-child(even) {
  color: #111111;
  background-color: #eafdfc;
}
.u-button-style.u-color-4-light-3,
.u-button-style.u-color-4-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #eafdfc !important;
}
.u-button-style.u-color-4-light-3:hover,
.u-button-style.u-color-4-light-3[class*="u-border-"]:hover,
.u-button-style.u-color-4-light-3:focus,
.u-button-style.u-color-4-light-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-4-light-3:active,
.u-button-style.u-button-style.u-color-4-light-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-4-light-3.active,
.u-button-style.u-button-style.u-color-4-light-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-4-light-3,
li.active > .u-button-style.u-button-style.u-color-4-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #bef9f6 !important;
}
.u-hover-color-4-light-3:hover,
.u-hover-color-4-light-3[class*="u-border-"]:hover,
.u-hover-color-4-light-3:focus,
.u-hover-color-4-light-3[class*="u-border-"]:focus,
.u-active-color-4-light-3.u-active.u-active,
.u-active-color-4-light-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-4-light-3:hover,
a.u-button-style.u-hover-color-4-light-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-4-light-3,
a.u-button-style:hover > .u-hover-color-4-light-3[class*="u-border-"],
a.u-button-style.u-hover-color-4-light-3:focus,
a.u-button-style.u-hover-color-4-light-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-4-light-3:active,
a.u-button-style.u-button-style.u-active-color-4-light-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-4-light-3.active,
a.u-button-style.u-button-style.u-active-color-4-light-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-4-light-3,
a.u-button-style.u-button-style.active > .u-active-color-4-light-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-4-light-3,
li.active > a.u-button-style.u-button-style.u-active-color-4-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #eafdfc !important;
}
a.u-link.u-hover-color-4-light-3:hover {
  color: #eafdfc !important;
}
.u-color-4-base,
.u-body.u-color-4-base,
.u-container-style.u-color-4-base:before,
.u-table-alt-color-4-base tr:nth-child(even) {
  color: #ffffff;
  background-color: #2cccc4;
}
.u-button-style.u-color-4-base,
.u-button-style.u-color-4-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #2cccc4 !important;
}
.u-button-style.u-color-4-base:hover,
.u-button-style.u-color-4-base[class*="u-border-"]:hover,
.u-button-style.u-color-4-base:focus,
.u-button-style.u-color-4-base[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-4-base:active,
.u-button-style.u-button-style.u-color-4-base[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-4-base.active,
.u-button-style.u-button-style.u-color-4-base[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-4-base,
li.active > .u-button-style.u-button-style.u-color-4-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #28b8b0 !important;
}
.u-hover-color-4-base:hover,
.u-hover-color-4-base[class*="u-border-"]:hover,
.u-hover-color-4-base:focus,
.u-hover-color-4-base[class*="u-border-"]:focus,
.u-active-color-4-base.u-active.u-active,
.u-active-color-4-base[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-4-base:hover,
a.u-button-style.u-hover-color-4-base[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-4-base,
a.u-button-style:hover > .u-hover-color-4-base[class*="u-border-"],
a.u-button-style.u-hover-color-4-base:focus,
a.u-button-style.u-hover-color-4-base[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-4-base:active,
a.u-button-style.u-button-style.u-active-color-4-base[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-4-base.active,
a.u-button-style.u-button-style.u-active-color-4-base[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-4-base,
a.u-button-style.u-button-style.active > .u-active-color-4-base[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-4-base,
li.active > a.u-button-style.u-button-style.u-active-color-4-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #2cccc4 !important;
}
a.u-link.u-hover-color-4-base:hover {
  color: #2cccc4 !important;
}
.u-color-5-dark-3,
.u-body.u-color-5-dark-3,
.u-container-style.u-color-5-dark-3:before,
.u-table-alt-color-5-dark-3 tr:nth-child(even) {
  color: #ffffff;
  background-color: #292d33;
}
.u-button-style.u-color-5-dark-3,
.u-button-style.u-color-5-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #292d33 !important;
}
.u-button-style.u-color-5-dark-3:hover,
.u-button-style.u-color-5-dark-3[class*="u-border-"]:hover,
.u-button-style.u-color-5-dark-3:focus,
.u-button-style.u-color-5-dark-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-5-dark-3:active,
.u-button-style.u-button-style.u-color-5-dark-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-5-dark-3.active,
.u-button-style.u-button-style.u-color-5-dark-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-5-dark-3,
li.active > .u-button-style.u-button-style.u-color-5-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #25292e !important;
}
.u-hover-color-5-dark-3:hover,
.u-hover-color-5-dark-3[class*="u-border-"]:hover,
.u-hover-color-5-dark-3:focus,
.u-hover-color-5-dark-3[class*="u-border-"]:focus,
.u-active-color-5-dark-3.u-active.u-active,
.u-active-color-5-dark-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-5-dark-3:hover,
a.u-button-style.u-hover-color-5-dark-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-5-dark-3,
a.u-button-style:hover > .u-hover-color-5-dark-3[class*="u-border-"],
a.u-button-style.u-hover-color-5-dark-3:focus,
a.u-button-style.u-hover-color-5-dark-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-5-dark-3:active,
a.u-button-style.u-button-style.u-active-color-5-dark-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-5-dark-3.active,
a.u-button-style.u-button-style.u-active-color-5-dark-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-5-dark-3,
a.u-button-style.u-button-style.active > .u-active-color-5-dark-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-5-dark-3,
li.active > a.u-button-style.u-button-style.u-active-color-5-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #292d33 !important;
}
a.u-link.u-hover-color-5-dark-3:hover {
  color: #292d33 !important;
}
.u-color-5-dark-2,
.u-body.u-color-5-dark-2,
.u-container-style.u-color-5-dark-2:before,
.u-table-alt-color-5-dark-2 tr:nth-child(even) {
  color: #ffffff;
  background-color: #555c66;
}
.u-button-style.u-color-5-dark-2,
.u-button-style.u-color-5-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #555c66 !important;
}
.u-button-style.u-color-5-dark-2:hover,
.u-button-style.u-color-5-dark-2[class*="u-border-"]:hover,
.u-button-style.u-color-5-dark-2:focus,
.u-button-style.u-color-5-dark-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-5-dark-2:active,
.u-button-style.u-button-style.u-color-5-dark-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-5-dark-2.active,
.u-button-style.u-button-style.u-color-5-dark-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-5-dark-2,
li.active > .u-button-style.u-button-style.u-color-5-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #4d535c !important;
}
.u-hover-color-5-dark-2:hover,
.u-hover-color-5-dark-2[class*="u-border-"]:hover,
.u-hover-color-5-dark-2:focus,
.u-hover-color-5-dark-2[class*="u-border-"]:focus,
.u-active-color-5-dark-2.u-active.u-active,
.u-active-color-5-dark-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-5-dark-2:hover,
a.u-button-style.u-hover-color-5-dark-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-5-dark-2,
a.u-button-style:hover > .u-hover-color-5-dark-2[class*="u-border-"],
a.u-button-style.u-hover-color-5-dark-2:focus,
a.u-button-style.u-hover-color-5-dark-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-5-dark-2:active,
a.u-button-style.u-button-style.u-active-color-5-dark-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-5-dark-2.active,
a.u-button-style.u-button-style.u-active-color-5-dark-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-5-dark-2,
a.u-button-style.u-button-style.active > .u-active-color-5-dark-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-5-dark-2,
li.active > a.u-button-style.u-button-style.u-active-color-5-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #555c66 !important;
}
a.u-link.u-hover-color-5-dark-2:hover {
  color: #555c66 !important;
}
.u-color-5-dark-1,
.u-body.u-color-5-dark-1,
.u-container-style.u-color-5-dark-1:before,
.u-table-alt-color-5-dark-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #858e99;
}
.u-button-style.u-color-5-dark-1,
.u-button-style.u-color-5-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #858e99 !important;
}
.u-button-style.u-color-5-dark-1:hover,
.u-button-style.u-color-5-dark-1[class*="u-border-"]:hover,
.u-button-style.u-color-5-dark-1:focus,
.u-button-style.u-color-5-dark-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-5-dark-1:active,
.u-button-style.u-button-style.u-color-5-dark-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-5-dark-1.active,
.u-button-style.u-button-style.u-color-5-dark-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-5-dark-1,
li.active > .u-button-style.u-button-style.u-color-5-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #75808c !important;
}
.u-hover-color-5-dark-1:hover,
.u-hover-color-5-dark-1[class*="u-border-"]:hover,
.u-hover-color-5-dark-1:focus,
.u-hover-color-5-dark-1[class*="u-border-"]:focus,
.u-active-color-5-dark-1.u-active.u-active,
.u-active-color-5-dark-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-5-dark-1:hover,
a.u-button-style.u-hover-color-5-dark-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-5-dark-1,
a.u-button-style:hover > .u-hover-color-5-dark-1[class*="u-border-"],
a.u-button-style.u-hover-color-5-dark-1:focus,
a.u-button-style.u-hover-color-5-dark-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-5-dark-1:active,
a.u-button-style.u-button-style.u-active-color-5-dark-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-5-dark-1.active,
a.u-button-style.u-button-style.u-active-color-5-dark-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-5-dark-1,
a.u-button-style.u-button-style.active > .u-active-color-5-dark-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-5-dark-1,
li.active > a.u-button-style.u-button-style.u-active-color-5-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #858e99 !important;
}
a.u-link.u-hover-color-5-dark-1:hover {
  color: #858e99 !important;
}
.u-color-5,
.u-body.u-color-5,
.u-container-style.u-color-5:before,
.u-table-alt-color-5 tr:nth-child(even) {
  color: #111111;
  background-color: #b9c1cc;
}
.u-button-style.u-color-5,
.u-button-style.u-color-5[class*="u-border-"] {
  color: #111111 !important;
  background-color: #b9c1cc !important;
}
.u-button-style.u-color-5:hover,
.u-button-style.u-color-5[class*="u-border-"]:hover,
.u-button-style.u-color-5:focus,
.u-button-style.u-color-5[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-5:active,
.u-button-style.u-button-style.u-color-5[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-5.active,
.u-button-style.u-button-style.u-color-5[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-5,
li.active > .u-button-style.u-button-style.u-color-5[class*="u-border-"] {
  color: #111111 !important;
  background-color: #a2adbc !important;
}
.u-hover-color-5:hover,
.u-hover-color-5[class*="u-border-"]:hover,
.u-hover-color-5:focus,
.u-hover-color-5[class*="u-border-"]:focus,
.u-active-color-5.u-active.u-active,
.u-active-color-5[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-5:hover,
a.u-button-style.u-hover-color-5[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-5,
a.u-button-style:hover > .u-hover-color-5[class*="u-border-"],
a.u-button-style.u-hover-color-5:focus,
a.u-button-style.u-hover-color-5[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-5:active,
a.u-button-style.u-button-style.u-active-color-5[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-5.active,
a.u-button-style.u-button-style.u-active-color-5[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-5,
a.u-button-style.u-button-style.active > .u-active-color-5[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-5,
li.active > a.u-button-style.u-button-style.u-active-color-5[class*="u-border-"] {
  color: #111111 !important;
  background-color: #b9c1cc !important;
}
a.u-link.u-hover-color-5:hover {
  color: #b9c1cc !important;
}
.u-color-5-light-1,
.u-body.u-color-5-light-1,
.u-container-style.u-color-5-light-1:before,
.u-table-alt-color-5-light-1 tr:nth-child(even) {
  color: #111111;
  background-color: #ccd3db;
}
.u-button-style.u-color-5-light-1,
.u-button-style.u-color-5-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #ccd3db !important;
}
.u-button-style.u-color-5-light-1:hover,
.u-button-style.u-color-5-light-1[class*="u-border-"]:hover,
.u-button-style.u-color-5-light-1:focus,
.u-button-style.u-color-5-light-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-5-light-1:active,
.u-button-style.u-button-style.u-color-5-light-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-5-light-1.active,
.u-button-style.u-button-style.u-color-5-light-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-5-light-1,
li.active > .u-button-style.u-button-style.u-color-5-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #b3bec9 !important;
}
.u-hover-color-5-light-1:hover,
.u-hover-color-5-light-1[class*="u-border-"]:hover,
.u-hover-color-5-light-1:focus,
.u-hover-color-5-light-1[class*="u-border-"]:focus,
.u-active-color-5-light-1.u-active.u-active,
.u-active-color-5-light-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-5-light-1:hover,
a.u-button-style.u-hover-color-5-light-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-5-light-1,
a.u-button-style:hover > .u-hover-color-5-light-1[class*="u-border-"],
a.u-button-style.u-hover-color-5-light-1:focus,
a.u-button-style.u-hover-color-5-light-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-5-light-1:active,
a.u-button-style.u-button-style.u-active-color-5-light-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-5-light-1.active,
a.u-button-style.u-button-style.u-active-color-5-light-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-5-light-1,
a.u-button-style.u-button-style.active > .u-active-color-5-light-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-5-light-1,
li.active > a.u-button-style.u-button-style.u-active-color-5-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #ccd3db !important;
}
a.u-link.u-hover-color-5-light-1:hover {
  color: #ccd3db !important;
}
.u-color-5-light-2,
.u-body.u-color-5-light-2,
.u-container-style.u-color-5-light-2:before,
.u-table-alt-color-5-light-2 tr:nth-child(even) {
  color: #111111;
  background-color: #e0e5eb;
}
.u-button-style.u-color-5-light-2,
.u-button-style.u-color-5-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #e0e5eb !important;
}
.u-button-style.u-color-5-light-2:hover,
.u-button-style.u-color-5-light-2[class*="u-border-"]:hover,
.u-button-style.u-color-5-light-2:focus,
.u-button-style.u-color-5-light-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-5-light-2:active,
.u-button-style.u-button-style.u-color-5-light-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-5-light-2.active,
.u-button-style.u-button-style.u-color-5-light-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-5-light-2,
li.active > .u-button-style.u-button-style.u-color-5-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #c4ced9 !important;
}
.u-hover-color-5-light-2:hover,
.u-hover-color-5-light-2[class*="u-border-"]:hover,
.u-hover-color-5-light-2:focus,
.u-hover-color-5-light-2[class*="u-border-"]:focus,
.u-active-color-5-light-2.u-active.u-active,
.u-active-color-5-light-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-5-light-2:hover,
a.u-button-style.u-hover-color-5-light-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-5-light-2,
a.u-button-style:hover > .u-hover-color-5-light-2[class*="u-border-"],
a.u-button-style.u-hover-color-5-light-2:focus,
a.u-button-style.u-hover-color-5-light-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-5-light-2:active,
a.u-button-style.u-button-style.u-active-color-5-light-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-5-light-2.active,
a.u-button-style.u-button-style.u-active-color-5-light-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-5-light-2,
a.u-button-style.u-button-style.active > .u-active-color-5-light-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-5-light-2,
li.active > a.u-button-style.u-button-style.u-active-color-5-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #e0e5eb !important;
}
a.u-link.u-hover-color-5-light-2:hover {
  color: #e0e5eb !important;
}
.u-color-5-light-3,
.u-body.u-color-5-light-3,
.u-container-style.u-color-5-light-3:before,
.u-table-alt-color-5-light-3 tr:nth-child(even) {
  color: #111111;
  background-color: #f5f7fa;
}
.u-button-style.u-color-5-light-3,
.u-button-style.u-color-5-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f5f7fa !important;
}
.u-button-style.u-color-5-light-3:hover,
.u-button-style.u-color-5-light-3[class*="u-border-"]:hover,
.u-button-style.u-color-5-light-3:focus,
.u-button-style.u-color-5-light-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-5-light-3:active,
.u-button-style.u-button-style.u-color-5-light-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-5-light-3.active,
.u-button-style.u-button-style.u-color-5-light-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-5-light-3,
li.active > .u-button-style.u-button-style.u-color-5-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #d4dde9 !important;
}
.u-hover-color-5-light-3:hover,
.u-hover-color-5-light-3[class*="u-border-"]:hover,
.u-hover-color-5-light-3:focus,
.u-hover-color-5-light-3[class*="u-border-"]:focus,
.u-active-color-5-light-3.u-active.u-active,
.u-active-color-5-light-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-5-light-3:hover,
a.u-button-style.u-hover-color-5-light-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-5-light-3,
a.u-button-style:hover > .u-hover-color-5-light-3[class*="u-border-"],
a.u-button-style.u-hover-color-5-light-3:focus,
a.u-button-style.u-hover-color-5-light-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-5-light-3:active,
a.u-button-style.u-button-style.u-active-color-5-light-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-5-light-3.active,
a.u-button-style.u-button-style.u-active-color-5-light-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-5-light-3,
a.u-button-style.u-button-style.active > .u-active-color-5-light-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-5-light-3,
li.active > a.u-button-style.u-button-style.u-active-color-5-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f5f7fa !important;
}
a.u-link.u-hover-color-5-light-3:hover {
  color: #f5f7fa !important;
}
.u-color-5-base,
.u-body.u-color-5-base,
.u-container-style.u-color-5-base:before,
.u-table-alt-color-5-base tr:nth-child(even) {
  color: #111111;
  background-color: #b9c1cc;
}
.u-button-style.u-color-5-base,
.u-button-style.u-color-5-base[class*="u-border-"] {
  color: #111111 !important;
  background-color: #b9c1cc !important;
}
.u-button-style.u-color-5-base:hover,
.u-button-style.u-color-5-base[class*="u-border-"]:hover,
.u-button-style.u-color-5-base:focus,
.u-button-style.u-color-5-base[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-color-5-base:active,
.u-button-style.u-button-style.u-color-5-base[class*="u-border-"]:active,
.u-button-style.u-button-style.u-color-5-base.active,
.u-button-style.u-button-style.u-color-5-base[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-color-5-base,
li.active > .u-button-style.u-button-style.u-color-5-base[class*="u-border-"] {
  color: #111111 !important;
  background-color: #a2adbc !important;
}
.u-hover-color-5-base:hover,
.u-hover-color-5-base[class*="u-border-"]:hover,
.u-hover-color-5-base:focus,
.u-hover-color-5-base[class*="u-border-"]:focus,
.u-active-color-5-base.u-active.u-active,
.u-active-color-5-base[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-color-5-base:hover,
a.u-button-style.u-hover-color-5-base[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-color-5-base,
a.u-button-style:hover > .u-hover-color-5-base[class*="u-border-"],
a.u-button-style.u-hover-color-5-base:focus,
a.u-button-style.u-hover-color-5-base[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-color-5-base:active,
a.u-button-style.u-button-style.u-active-color-5-base[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-color-5-base.active,
a.u-button-style.u-button-style.u-active-color-5-base[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-color-5-base,
a.u-button-style.u-button-style.active > .u-active-color-5-base[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-color-5-base,
li.active > a.u-button-style.u-button-style.u-active-color-5-base[class*="u-border-"] {
  color: #111111 !important;
  background-color: #b9c1cc !important;
}
a.u-link.u-hover-color-5-base:hover {
  color: #b9c1cc !important;
}
.u-palette-1-dark-3,
.u-body.u-palette-1-dark-3,
.u-container-style.u-palette-1-dark-3:before,
.u-table-alt-palette-1-dark-3 tr:nth-child(even) {
  color: #ffffff;
  background-color: #292e33;
}
.u-button-style.u-palette-1-dark-3,
.u-button-style.u-palette-1-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #292e33 !important;
}
.u-button-style.u-palette-1-dark-3:hover,
.u-button-style.u-palette-1-dark-3[class*="u-border-"]:hover,
.u-button-style.u-palette-1-dark-3:focus,
.u-button-style.u-palette-1-dark-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-1-dark-3:active,
.u-button-style.u-button-style.u-palette-1-dark-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-1-dark-3.active,
.u-button-style.u-button-style.u-palette-1-dark-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-1-dark-3,
li.active > .u-button-style.u-button-style.u-palette-1-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #25292e !important;
}
.u-hover-palette-1-dark-3:hover,
.u-hover-palette-1-dark-3[class*="u-border-"]:hover,
.u-hover-palette-1-dark-3:focus,
.u-hover-palette-1-dark-3[class*="u-border-"]:focus,
.u-active-palette-1-dark-3.u-active.u-active,
.u-active-palette-1-dark-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-1-dark-3:hover,
a.u-button-style.u-hover-palette-1-dark-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-1-dark-3,
a.u-button-style:hover > .u-hover-palette-1-dark-3[class*="u-border-"],
a.u-button-style.u-hover-palette-1-dark-3:focus,
a.u-button-style.u-hover-palette-1-dark-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-1-dark-3:active,
a.u-button-style.u-button-style.u-active-palette-1-dark-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-1-dark-3.active,
a.u-button-style.u-button-style.u-active-palette-1-dark-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-1-dark-3,
a.u-button-style.u-button-style.active > .u-active-palette-1-dark-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-1-dark-3,
li.active > a.u-button-style.u-button-style.u-active-palette-1-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #292e33 !important;
}
a.u-link.u-hover-palette-1-dark-3:hover {
  color: #292e33 !important;
}
.u-palette-1-dark-2,
.u-body.u-palette-1-dark-2,
.u-container-style.u-palette-1-dark-2:before,
.u-table-alt-palette-1-dark-2 tr:nth-child(even) {
  color: #ffffff;
  background-color: #425465;
}
.u-button-style.u-palette-1-dark-2,
.u-button-style.u-palette-1-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #425465 !important;
}
.u-button-style.u-palette-1-dark-2:hover,
.u-button-style.u-palette-1-dark-2[class*="u-border-"]:hover,
.u-button-style.u-palette-1-dark-2:focus,
.u-button-style.u-palette-1-dark-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-1-dark-2:active,
.u-button-style.u-button-style.u-palette-1-dark-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-1-dark-2.active,
.u-button-style.u-button-style.u-palette-1-dark-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-1-dark-2,
li.active > .u-button-style.u-button-style.u-palette-1-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #3b4c5b !important;
}
.u-hover-palette-1-dark-2:hover,
.u-hover-palette-1-dark-2[class*="u-border-"]:hover,
.u-hover-palette-1-dark-2:focus,
.u-hover-palette-1-dark-2[class*="u-border-"]:focus,
.u-active-palette-1-dark-2.u-active.u-active,
.u-active-palette-1-dark-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-1-dark-2:hover,
a.u-button-style.u-hover-palette-1-dark-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-1-dark-2,
a.u-button-style:hover > .u-hover-palette-1-dark-2[class*="u-border-"],
a.u-button-style.u-hover-palette-1-dark-2:focus,
a.u-button-style.u-hover-palette-1-dark-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-1-dark-2:active,
a.u-button-style.u-button-style.u-active-palette-1-dark-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-1-dark-2.active,
a.u-button-style.u-button-style.u-active-palette-1-dark-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-1-dark-2,
a.u-button-style.u-button-style.active > .u-active-palette-1-dark-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-1-dark-2,
li.active > a.u-button-style.u-button-style.u-active-palette-1-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #425465 !important;
}
a.u-link.u-hover-palette-1-dark-2:hover {
  color: #425465 !important;
}
.u-palette-1-dark-1,
.u-body.u-palette-1-dark-1,
.u-container-style.u-palette-1-dark-1:before,
.u-table-alt-palette-1-dark-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #4c7397;
}
.u-button-style.u-palette-1-dark-1,
.u-button-style.u-palette-1-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #4c7397 !important;
}
.u-button-style.u-palette-1-dark-1:hover,
.u-button-style.u-palette-1-dark-1[class*="u-border-"]:hover,
.u-button-style.u-palette-1-dark-1:focus,
.u-button-style.u-palette-1-dark-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-1-dark-1:active,
.u-button-style.u-button-style.u-palette-1-dark-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-1-dark-1.active,
.u-button-style.u-button-style.u-palette-1-dark-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-1-dark-1,
li.active > .u-button-style.u-button-style.u-palette-1-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #446888 !important;
}
.u-hover-palette-1-dark-1:hover,
.u-hover-palette-1-dark-1[class*="u-border-"]:hover,
.u-hover-palette-1-dark-1:focus,
.u-hover-palette-1-dark-1[class*="u-border-"]:focus,
.u-active-palette-1-dark-1.u-active.u-active,
.u-active-palette-1-dark-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-1-dark-1:hover,
a.u-button-style.u-hover-palette-1-dark-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-1-dark-1,
a.u-button-style:hover > .u-hover-palette-1-dark-1[class*="u-border-"],
a.u-button-style.u-hover-palette-1-dark-1:focus,
a.u-button-style.u-hover-palette-1-dark-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-1-dark-1:active,
a.u-button-style.u-button-style.u-active-palette-1-dark-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-1-dark-1.active,
a.u-button-style.u-button-style.u-active-palette-1-dark-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-1-dark-1,
a.u-button-style.u-button-style.active > .u-active-palette-1-dark-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-1-dark-1,
li.active > a.u-button-style.u-button-style.u-active-palette-1-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #4c7397 !important;
}
a.u-link.u-hover-palette-1-dark-1:hover {
  color: #4c7397 !important;
}
.u-palette-1,
.u-body.u-palette-1,
.u-container-style.u-palette-1:before,
.u-table-alt-palette-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #478ac9;
}
.u-button-style.u-palette-1,
.u-button-style.u-palette-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #478ac9 !important;
}
.u-button-style.u-palette-1:hover,
.u-button-style.u-palette-1[class*="u-border-"]:hover,
.u-button-style.u-palette-1:focus,
.u-button-style.u-palette-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-1:active,
.u-button-style.u-button-style.u-palette-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-1.active,
.u-button-style.u-button-style.u-palette-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-1,
li.active > .u-button-style.u-button-style.u-palette-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #387cbd !important;
}
.u-hover-palette-1:hover,
.u-hover-palette-1[class*="u-border-"]:hover,
.u-hover-palette-1:focus,
.u-hover-palette-1[class*="u-border-"]:focus,
.u-active-palette-1.u-active.u-active,
.u-active-palette-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-1:hover,
a.u-button-style.u-hover-palette-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-1,
a.u-button-style:hover > .u-hover-palette-1[class*="u-border-"],
a.u-button-style.u-hover-palette-1:focus,
a.u-button-style.u-hover-palette-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-1:active,
a.u-button-style.u-button-style.u-active-palette-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-1.active,
a.u-button-style.u-button-style.u-active-palette-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-1,
a.u-button-style.u-button-style.active > .u-active-palette-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-1,
li.active > a.u-button-style.u-button-style.u-active-palette-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #478ac9 !important;
}
a.u-link.u-hover-palette-1:hover {
  color: #478ac9 !important;
}
.u-palette-1-light-1,
.u-body.u-palette-1-light-1,
.u-container-style.u-palette-1-light-1:before,
.u-table-alt-palette-1-light-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #77aad9;
}
.u-button-style.u-palette-1-light-1,
.u-button-style.u-palette-1-light-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #77aad9 !important;
}
.u-button-style.u-palette-1-light-1:hover,
.u-button-style.u-palette-1-light-1[class*="u-border-"]:hover,
.u-button-style.u-palette-1-light-1:focus,
.u-button-style.u-palette-1-light-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-1-light-1:active,
.u-button-style.u-button-style.u-palette-1-light-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-1-light-1.active,
.u-button-style.u-button-style.u-palette-1-light-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-1-light-1,
li.active > .u-button-style.u-button-style.u-palette-1-light-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #5d9ad2 !important;
}
.u-hover-palette-1-light-1:hover,
.u-hover-palette-1-light-1[class*="u-border-"]:hover,
.u-hover-palette-1-light-1:focus,
.u-hover-palette-1-light-1[class*="u-border-"]:focus,
.u-active-palette-1-light-1.u-active.u-active,
.u-active-palette-1-light-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-1-light-1:hover,
a.u-button-style.u-hover-palette-1-light-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-1-light-1,
a.u-button-style:hover > .u-hover-palette-1-light-1[class*="u-border-"],
a.u-button-style.u-hover-palette-1-light-1:focus,
a.u-button-style.u-hover-palette-1-light-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-1-light-1:active,
a.u-button-style.u-button-style.u-active-palette-1-light-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-1-light-1.active,
a.u-button-style.u-button-style.u-active-palette-1-light-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-1-light-1,
a.u-button-style.u-button-style.active > .u-active-palette-1-light-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-1-light-1,
li.active > a.u-button-style.u-button-style.u-active-palette-1-light-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #77aad9 !important;
}
a.u-link.u-hover-palette-1-light-1:hover {
  color: #77aad9 !important;
}
.u-palette-1-light-2,
.u-body.u-palette-1-light-2,
.u-container-style.u-palette-1-light-2:before,
.u-table-alt-palette-1-light-2 tr:nth-child(even) {
  color: #111111;
  background-color: #adcce9;
}
.u-button-style.u-palette-1-light-2,
.u-button-style.u-palette-1-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #adcce9 !important;
}
.u-button-style.u-palette-1-light-2:hover,
.u-button-style.u-palette-1-light-2[class*="u-border-"]:hover,
.u-button-style.u-palette-1-light-2:focus,
.u-button-style.u-palette-1-light-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-1-light-2:active,
.u-button-style.u-button-style.u-palette-1-light-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-1-light-2.active,
.u-button-style.u-button-style.u-palette-1-light-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-1-light-2,
li.active > .u-button-style.u-button-style.u-palette-1-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #8db8e0 !important;
}
.u-hover-palette-1-light-2:hover,
.u-hover-palette-1-light-2[class*="u-border-"]:hover,
.u-hover-palette-1-light-2:focus,
.u-hover-palette-1-light-2[class*="u-border-"]:focus,
.u-active-palette-1-light-2.u-active.u-active,
.u-active-palette-1-light-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-1-light-2:hover,
a.u-button-style.u-hover-palette-1-light-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-1-light-2,
a.u-button-style:hover > .u-hover-palette-1-light-2[class*="u-border-"],
a.u-button-style.u-hover-palette-1-light-2:focus,
a.u-button-style.u-hover-palette-1-light-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-1-light-2:active,
a.u-button-style.u-button-style.u-active-palette-1-light-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-1-light-2.active,
a.u-button-style.u-button-style.u-active-palette-1-light-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-1-light-2,
a.u-button-style.u-button-style.active > .u-active-palette-1-light-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-1-light-2,
li.active > a.u-button-style.u-button-style.u-active-palette-1-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #adcce9 !important;
}
a.u-link.u-hover-palette-1-light-2:hover {
  color: #adcce9 !important;
}
.u-palette-1-light-3,
.u-body.u-palette-1-light-3,
.u-container-style.u-palette-1-light-3:before,
.u-table-alt-palette-1-light-3 tr:nth-child(even) {
  color: #111111;
  background-color: #e9f2fa;
}
.u-button-style.u-palette-1-light-3,
.u-button-style.u-palette-1-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #e9f2fa !important;
}
.u-button-style.u-palette-1-light-3:hover,
.u-button-style.u-palette-1-light-3[class*="u-border-"]:hover,
.u-button-style.u-palette-1-light-3:focus,
.u-button-style.u-palette-1-light-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-1-light-3:active,
.u-button-style.u-button-style.u-palette-1-light-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-1-light-3.active,
.u-button-style.u-button-style.u-palette-1-light-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-1-light-3,
li.active > .u-button-style.u-button-style.u-palette-1-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #c2dbf1 !important;
}
.u-hover-palette-1-light-3:hover,
.u-hover-palette-1-light-3[class*="u-border-"]:hover,
.u-hover-palette-1-light-3:focus,
.u-hover-palette-1-light-3[class*="u-border-"]:focus,
.u-active-palette-1-light-3.u-active.u-active,
.u-active-palette-1-light-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-1-light-3:hover,
a.u-button-style.u-hover-palette-1-light-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-1-light-3,
a.u-button-style:hover > .u-hover-palette-1-light-3[class*="u-border-"],
a.u-button-style.u-hover-palette-1-light-3:focus,
a.u-button-style.u-hover-palette-1-light-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-1-light-3:active,
a.u-button-style.u-button-style.u-active-palette-1-light-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-1-light-3.active,
a.u-button-style.u-button-style.u-active-palette-1-light-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-1-light-3,
a.u-button-style.u-button-style.active > .u-active-palette-1-light-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-1-light-3,
li.active > a.u-button-style.u-button-style.u-active-palette-1-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #e9f2fa !important;
}
a.u-link.u-hover-palette-1-light-3:hover {
  color: #e9f2fa !important;
}
.u-palette-1-base,
.u-body.u-palette-1-base,
.u-container-style.u-palette-1-base:before,
.u-table-alt-palette-1-base tr:nth-child(even) {
  color: #ffffff;
  background-color: #478ac9;
}
.u-button-style.u-palette-1-base,
.u-button-style.u-palette-1-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #478ac9 !important;
}
.u-button-style.u-palette-1-base:hover,
.u-button-style.u-palette-1-base[class*="u-border-"]:hover,
.u-button-style.u-palette-1-base:focus,
.u-button-style.u-palette-1-base[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-1-base:active,
.u-button-style.u-button-style.u-palette-1-base[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-1-base.active,
.u-button-style.u-button-style.u-palette-1-base[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-1-base,
li.active > .u-button-style.u-button-style.u-palette-1-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #387cbd !important;
}
.u-hover-palette-1-base:hover,
.u-hover-palette-1-base[class*="u-border-"]:hover,
.u-hover-palette-1-base:focus,
.u-hover-palette-1-base[class*="u-border-"]:focus,
.u-active-palette-1-base.u-active.u-active,
.u-active-palette-1-base[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-1-base:hover,
a.u-button-style.u-hover-palette-1-base[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-1-base,
a.u-button-style:hover > .u-hover-palette-1-base[class*="u-border-"],
a.u-button-style.u-hover-palette-1-base:focus,
a.u-button-style.u-hover-palette-1-base[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-1-base:active,
a.u-button-style.u-button-style.u-active-palette-1-base[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-1-base.active,
a.u-button-style.u-button-style.u-active-palette-1-base[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-1-base,
a.u-button-style.u-button-style.active > .u-active-palette-1-base[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-1-base,
li.active > a.u-button-style.u-button-style.u-active-palette-1-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #478ac9 !important;
}
a.u-link.u-hover-palette-1-base:hover {
  color: #478ac9 !important;
}
.u-palette-2-dark-3,
.u-body.u-palette-2-dark-3,
.u-container-style.u-palette-2-dark-3:before,
.u-table-alt-palette-2-dark-3 tr:nth-child(even) {
  color: #ffffff;
  background-color: #332929;
}
.u-button-style.u-palette-2-dark-3,
.u-button-style.u-palette-2-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #332929 !important;
}
.u-button-style.u-palette-2-dark-3:hover,
.u-button-style.u-palette-2-dark-3[class*="u-border-"]:hover,
.u-button-style.u-palette-2-dark-3:focus,
.u-button-style.u-palette-2-dark-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-2-dark-3:active,
.u-button-style.u-button-style.u-palette-2-dark-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-2-dark-3.active,
.u-button-style.u-button-style.u-palette-2-dark-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-2-dark-3,
li.active > .u-button-style.u-button-style.u-palette-2-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #2e2525 !important;
}
.u-hover-palette-2-dark-3:hover,
.u-hover-palette-2-dark-3[class*="u-border-"]:hover,
.u-hover-palette-2-dark-3:focus,
.u-hover-palette-2-dark-3[class*="u-border-"]:focus,
.u-active-palette-2-dark-3.u-active.u-active,
.u-active-palette-2-dark-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-2-dark-3:hover,
a.u-button-style.u-hover-palette-2-dark-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-2-dark-3,
a.u-button-style:hover > .u-hover-palette-2-dark-3[class*="u-border-"],
a.u-button-style.u-hover-palette-2-dark-3:focus,
a.u-button-style.u-hover-palette-2-dark-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-2-dark-3:active,
a.u-button-style.u-button-style.u-active-palette-2-dark-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-2-dark-3.active,
a.u-button-style.u-button-style.u-active-palette-2-dark-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-2-dark-3,
a.u-button-style.u-button-style.active > .u-active-palette-2-dark-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-2-dark-3,
li.active > a.u-button-style.u-button-style.u-active-palette-2-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #332929 !important;
}
a.u-link.u-hover-palette-2-dark-3:hover {
  color: #332929 !important;
}
.u-palette-2-dark-2,
.u-body.u-palette-2-dark-2,
.u-container-style.u-palette-2-dark-2:before,
.u-table-alt-palette-2-dark-2 tr:nth-child(even) {
  color: #ffffff;
  background-color: #6b4748;
}
.u-button-style.u-palette-2-dark-2,
.u-button-style.u-palette-2-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #6b4748 !important;
}
.u-button-style.u-palette-2-dark-2:hover,
.u-button-style.u-palette-2-dark-2[class*="u-border-"]:hover,
.u-button-style.u-palette-2-dark-2:focus,
.u-button-style.u-palette-2-dark-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-2-dark-2:active,
.u-button-style.u-button-style.u-palette-2-dark-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-2-dark-2.active,
.u-button-style.u-button-style.u-palette-2-dark-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-2-dark-2,
li.active > .u-button-style.u-button-style.u-palette-2-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #604041 !important;
}
.u-hover-palette-2-dark-2:hover,
.u-hover-palette-2-dark-2[class*="u-border-"]:hover,
.u-hover-palette-2-dark-2:focus,
.u-hover-palette-2-dark-2[class*="u-border-"]:focus,
.u-active-palette-2-dark-2.u-active.u-active,
.u-active-palette-2-dark-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-2-dark-2:hover,
a.u-button-style.u-hover-palette-2-dark-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-2-dark-2,
a.u-button-style:hover > .u-hover-palette-2-dark-2[class*="u-border-"],
a.u-button-style.u-hover-palette-2-dark-2:focus,
a.u-button-style.u-hover-palette-2-dark-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-2-dark-2:active,
a.u-button-style.u-button-style.u-active-palette-2-dark-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-2-dark-2.active,
a.u-button-style.u-button-style.u-active-palette-2-dark-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-2-dark-2,
a.u-button-style.u-button-style.active > .u-active-palette-2-dark-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-2-dark-2,
li.active > a.u-button-style.u-button-style.u-active-palette-2-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #6b4748 !important;
}
a.u-link.u-hover-palette-2-dark-2:hover {
  color: #6b4748 !important;
}
.u-palette-2-dark-1,
.u-body.u-palette-2-dark-1,
.u-container-style.u-palette-2-dark-1:before,
.u-table-alt-palette-2-dark-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #a35559;
}
.u-button-style.u-palette-2-dark-1,
.u-button-style.u-palette-2-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #a35559 !important;
}
.u-button-style.u-palette-2-dark-1:hover,
.u-button-style.u-palette-2-dark-1[class*="u-border-"]:hover,
.u-button-style.u-palette-2-dark-1:focus,
.u-button-style.u-palette-2-dark-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-2-dark-1:active,
.u-button-style.u-button-style.u-palette-2-dark-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-2-dark-1.active,
.u-button-style.u-button-style.u-palette-2-dark-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-2-dark-1,
li.active > .u-button-style.u-button-style.u-palette-2-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #934c50 !important;
}
.u-hover-palette-2-dark-1:hover,
.u-hover-palette-2-dark-1[class*="u-border-"]:hover,
.u-hover-palette-2-dark-1:focus,
.u-hover-palette-2-dark-1[class*="u-border-"]:focus,
.u-active-palette-2-dark-1.u-active.u-active,
.u-active-palette-2-dark-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-2-dark-1:hover,
a.u-button-style.u-hover-palette-2-dark-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-2-dark-1,
a.u-button-style:hover > .u-hover-palette-2-dark-1[class*="u-border-"],
a.u-button-style.u-hover-palette-2-dark-1:focus,
a.u-button-style.u-hover-palette-2-dark-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-2-dark-1:active,
a.u-button-style.u-button-style.u-active-palette-2-dark-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-2-dark-1.active,
a.u-button-style.u-button-style.u-active-palette-2-dark-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-2-dark-1,
a.u-button-style.u-button-style.active > .u-active-palette-2-dark-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-2-dark-1,
li.active > a.u-button-style.u-button-style.u-active-palette-2-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #a35559 !important;
}
a.u-link.u-hover-palette-2-dark-1:hover {
  color: #a35559 !important;
}
.u-palette-2,
.u-body.u-palette-2,
.u-container-style.u-palette-2:before,
.u-table-alt-palette-2 tr:nth-child(even) {
  color: #ffffff;
  background-color: #db545a;
}
.u-button-style.u-palette-2,
.u-button-style.u-palette-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #db545a !important;
}
.u-button-style.u-palette-2:hover,
.u-button-style.u-palette-2[class*="u-border-"]:hover,
.u-button-style.u-palette-2:focus,
.u-button-style.u-palette-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-2:active,
.u-button-style.u-button-style.u-palette-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-2.active,
.u-button-style.u-button-style.u-palette-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-2,
li.active > .u-button-style.u-button-style.u-palette-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #d63b42 !important;
}
.u-hover-palette-2:hover,
.u-hover-palette-2[class*="u-border-"]:hover,
.u-hover-palette-2:focus,
.u-hover-palette-2[class*="u-border-"]:focus,
.u-active-palette-2.u-active.u-active,
.u-active-palette-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-2:hover,
a.u-button-style.u-hover-palette-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-2,
a.u-button-style:hover > .u-hover-palette-2[class*="u-border-"],
a.u-button-style.u-hover-palette-2:focus,
a.u-button-style.u-hover-palette-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-2:active,
a.u-button-style.u-button-style.u-active-palette-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-2.active,
a.u-button-style.u-button-style.u-active-palette-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-2,
a.u-button-style.u-button-style.active > .u-active-palette-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-2,
li.active > a.u-button-style.u-button-style.u-active-palette-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #db545a !important;
}
a.u-link.u-hover-palette-2:hover {
  color: #db545a !important;
}
.u-palette-2-light-1,
.u-body.u-palette-2-light-1,
.u-container-style.u-palette-2-light-1:before,
.u-table-alt-palette-2-light-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #e68387;
}
.u-button-style.u-palette-2-light-1,
.u-button-style.u-palette-2-light-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #e68387 !important;
}
.u-button-style.u-palette-2-light-1:hover,
.u-button-style.u-palette-2-light-1[class*="u-border-"]:hover,
.u-button-style.u-palette-2-light-1:focus,
.u-button-style.u-palette-2-light-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-2-light-1:active,
.u-button-style.u-button-style.u-palette-2-light-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-2-light-1.active,
.u-button-style.u-button-style.u-palette-2-light-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-2-light-1,
li.active > .u-button-style.u-button-style.u-palette-2-light-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #e0656a !important;
}
.u-hover-palette-2-light-1:hover,
.u-hover-palette-2-light-1[class*="u-border-"]:hover,
.u-hover-palette-2-light-1:focus,
.u-hover-palette-2-light-1[class*="u-border-"]:focus,
.u-active-palette-2-light-1.u-active.u-active,
.u-active-palette-2-light-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-2-light-1:hover,
a.u-button-style.u-hover-palette-2-light-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-2-light-1,
a.u-button-style:hover > .u-hover-palette-2-light-1[class*="u-border-"],
a.u-button-style.u-hover-palette-2-light-1:focus,
a.u-button-style.u-hover-palette-2-light-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-2-light-1:active,
a.u-button-style.u-button-style.u-active-palette-2-light-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-2-light-1.active,
a.u-button-style.u-button-style.u-active-palette-2-light-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-2-light-1,
a.u-button-style.u-button-style.active > .u-active-palette-2-light-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-2-light-1,
li.active > a.u-button-style.u-button-style.u-active-palette-2-light-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #e68387 !important;
}
a.u-link.u-hover-palette-2-light-1:hover {
  color: #e68387 !important;
}
.u-palette-2-light-2,
.u-body.u-palette-2-light-2,
.u-container-style.u-palette-2-light-2:before,
.u-table-alt-palette-2-light-2 tr:nth-child(even) {
  color: #111111;
  background-color: #f1b5b8;
}
.u-button-style.u-palette-2-light-2,
.u-button-style.u-palette-2-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f1b5b8 !important;
}
.u-button-style.u-palette-2-light-2:hover,
.u-button-style.u-palette-2-light-2[class*="u-border-"]:hover,
.u-button-style.u-palette-2-light-2:focus,
.u-button-style.u-palette-2-light-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-2-light-2:active,
.u-button-style.u-button-style.u-palette-2-light-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-2-light-2.active,
.u-button-style.u-button-style.u-palette-2-light-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-2-light-2,
li.active > .u-button-style.u-button-style.u-palette-2-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #ea9296 !important;
}
.u-hover-palette-2-light-2:hover,
.u-hover-palette-2-light-2[class*="u-border-"]:hover,
.u-hover-palette-2-light-2:focus,
.u-hover-palette-2-light-2[class*="u-border-"]:focus,
.u-active-palette-2-light-2.u-active.u-active,
.u-active-palette-2-light-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-2-light-2:hover,
a.u-button-style.u-hover-palette-2-light-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-2-light-2,
a.u-button-style:hover > .u-hover-palette-2-light-2[class*="u-border-"],
a.u-button-style.u-hover-palette-2-light-2:focus,
a.u-button-style.u-hover-palette-2-light-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-2-light-2:active,
a.u-button-style.u-button-style.u-active-palette-2-light-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-2-light-2.active,
a.u-button-style.u-button-style.u-active-palette-2-light-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-2-light-2,
a.u-button-style.u-button-style.active > .u-active-palette-2-light-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-2-light-2,
li.active > a.u-button-style.u-button-style.u-active-palette-2-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f1b5b8 !important;
}
a.u-link.u-hover-palette-2-light-2:hover {
  color: #f1b5b8 !important;
}
.u-palette-2-light-3,
.u-body.u-palette-2-light-3,
.u-container-style.u-palette-2-light-3:before,
.u-table-alt-palette-2-light-3 tr:nth-child(even) {
  color: #111111;
  background-color: #fbeced;
}
.u-button-style.u-palette-2-light-3,
.u-button-style.u-palette-2-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #fbeced !important;
}
.u-button-style.u-palette-2-light-3:hover,
.u-button-style.u-palette-2-light-3[class*="u-border-"]:hover,
.u-button-style.u-palette-2-light-3:focus,
.u-button-style.u-palette-2-light-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-2-light-3:active,
.u-button-style.u-button-style.u-palette-2-light-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-2-light-3.active,
.u-button-style.u-button-style.u-palette-2-light-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-2-light-3,
li.active > .u-button-style.u-button-style.u-palette-2-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f3c4c7 !important;
}
.u-hover-palette-2-light-3:hover,
.u-hover-palette-2-light-3[class*="u-border-"]:hover,
.u-hover-palette-2-light-3:focus,
.u-hover-palette-2-light-3[class*="u-border-"]:focus,
.u-active-palette-2-light-3.u-active.u-active,
.u-active-palette-2-light-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-2-light-3:hover,
a.u-button-style.u-hover-palette-2-light-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-2-light-3,
a.u-button-style:hover > .u-hover-palette-2-light-3[class*="u-border-"],
a.u-button-style.u-hover-palette-2-light-3:focus,
a.u-button-style.u-hover-palette-2-light-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-2-light-3:active,
a.u-button-style.u-button-style.u-active-palette-2-light-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-2-light-3.active,
a.u-button-style.u-button-style.u-active-palette-2-light-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-2-light-3,
a.u-button-style.u-button-style.active > .u-active-palette-2-light-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-2-light-3,
li.active > a.u-button-style.u-button-style.u-active-palette-2-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #fbeced !important;
}
a.u-link.u-hover-palette-2-light-3:hover {
  color: #fbeced !important;
}
.u-palette-2-base,
.u-body.u-palette-2-base,
.u-container-style.u-palette-2-base:before,
.u-table-alt-palette-2-base tr:nth-child(even) {
  color: #ffffff;
  background-color: #db545a;
}
.u-button-style.u-palette-2-base,
.u-button-style.u-palette-2-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #db545a !important;
}
.u-button-style.u-palette-2-base:hover,
.u-button-style.u-palette-2-base[class*="u-border-"]:hover,
.u-button-style.u-palette-2-base:focus,
.u-button-style.u-palette-2-base[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-2-base:active,
.u-button-style.u-button-style.u-palette-2-base[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-2-base.active,
.u-button-style.u-button-style.u-palette-2-base[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-2-base,
li.active > .u-button-style.u-button-style.u-palette-2-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #d63b42 !important;
}
.u-hover-palette-2-base:hover,
.u-hover-palette-2-base[class*="u-border-"]:hover,
.u-hover-palette-2-base:focus,
.u-hover-palette-2-base[class*="u-border-"]:focus,
.u-active-palette-2-base.u-active.u-active,
.u-active-palette-2-base[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-2-base:hover,
a.u-button-style.u-hover-palette-2-base[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-2-base,
a.u-button-style:hover > .u-hover-palette-2-base[class*="u-border-"],
a.u-button-style.u-hover-palette-2-base:focus,
a.u-button-style.u-hover-palette-2-base[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-2-base:active,
a.u-button-style.u-button-style.u-active-palette-2-base[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-2-base.active,
a.u-button-style.u-button-style.u-active-palette-2-base[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-2-base,
a.u-button-style.u-button-style.active > .u-active-palette-2-base[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-2-base,
li.active > a.u-button-style.u-button-style.u-active-palette-2-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #db545a !important;
}
a.u-link.u-hover-palette-2-base:hover {
  color: #db545a !important;
}
.u-palette-3-dark-3,
.u-body.u-palette-3-dark-3,
.u-container-style.u-palette-3-dark-3:before,
.u-table-alt-palette-3-dark-3 tr:nth-child(even) {
  color: #ffffff;
  background-color: #333129;
}
.u-button-style.u-palette-3-dark-3,
.u-button-style.u-palette-3-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #333129 !important;
}
.u-button-style.u-palette-3-dark-3:hover,
.u-button-style.u-palette-3-dark-3[class*="u-border-"]:hover,
.u-button-style.u-palette-3-dark-3:focus,
.u-button-style.u-palette-3-dark-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-3-dark-3:active,
.u-button-style.u-button-style.u-palette-3-dark-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-3-dark-3.active,
.u-button-style.u-button-style.u-palette-3-dark-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-3-dark-3,
li.active > .u-button-style.u-button-style.u-palette-3-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #2e2c25 !important;
}
.u-hover-palette-3-dark-3:hover,
.u-hover-palette-3-dark-3[class*="u-border-"]:hover,
.u-hover-palette-3-dark-3:focus,
.u-hover-palette-3-dark-3[class*="u-border-"]:focus,
.u-active-palette-3-dark-3.u-active.u-active,
.u-active-palette-3-dark-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-3-dark-3:hover,
a.u-button-style.u-hover-palette-3-dark-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-3-dark-3,
a.u-button-style:hover > .u-hover-palette-3-dark-3[class*="u-border-"],
a.u-button-style.u-hover-palette-3-dark-3:focus,
a.u-button-style.u-hover-palette-3-dark-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-3-dark-3:active,
a.u-button-style.u-button-style.u-active-palette-3-dark-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-3-dark-3.active,
a.u-button-style.u-button-style.u-active-palette-3-dark-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-3-dark-3,
a.u-button-style.u-button-style.active > .u-active-palette-3-dark-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-3-dark-3,
li.active > a.u-button-style.u-button-style.u-active-palette-3-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #333129 !important;
}
a.u-link.u-hover-palette-3-dark-3:hover {
  color: #333129 !important;
}
.u-palette-3-dark-2,
.u-body.u-palette-3-dark-2,
.u-container-style.u-palette-3-dark-2:before,
.u-table-alt-palette-3-dark-2 tr:nth-child(even) {
  color: #ffffff;
  background-color: #72683f;
}
.u-button-style.u-palette-3-dark-2,
.u-button-style.u-palette-3-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #72683f !important;
}
.u-button-style.u-palette-3-dark-2:hover,
.u-button-style.u-palette-3-dark-2[class*="u-border-"]:hover,
.u-button-style.u-palette-3-dark-2:focus,
.u-button-style.u-palette-3-dark-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-3-dark-2:active,
.u-button-style.u-button-style.u-palette-3-dark-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-3-dark-2.active,
.u-button-style.u-button-style.u-palette-3-dark-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-3-dark-2,
li.active > .u-button-style.u-button-style.u-palette-3-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #675e39 !important;
}
.u-hover-palette-3-dark-2:hover,
.u-hover-palette-3-dark-2[class*="u-border-"]:hover,
.u-hover-palette-3-dark-2:focus,
.u-hover-palette-3-dark-2[class*="u-border-"]:focus,
.u-active-palette-3-dark-2.u-active.u-active,
.u-active-palette-3-dark-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-3-dark-2:hover,
a.u-button-style.u-hover-palette-3-dark-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-3-dark-2,
a.u-button-style:hover > .u-hover-palette-3-dark-2[class*="u-border-"],
a.u-button-style.u-hover-palette-3-dark-2:focus,
a.u-button-style.u-hover-palette-3-dark-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-3-dark-2:active,
a.u-button-style.u-button-style.u-active-palette-3-dark-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-3-dark-2.active,
a.u-button-style.u-button-style.u-active-palette-3-dark-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-3-dark-2,
a.u-button-style.u-button-style.active > .u-active-palette-3-dark-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-3-dark-2,
li.active > a.u-button-style.u-button-style.u-active-palette-3-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #72683f !important;
}
a.u-link.u-hover-palette-3-dark-2:hover {
  color: #72683f !important;
}
.u-palette-3-dark-1,
.u-body.u-palette-3-dark-1,
.u-container-style.u-palette-3-dark-1:before,
.u-table-alt-palette-3-dark-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #b29a36;
}
.u-button-style.u-palette-3-dark-1,
.u-button-style.u-palette-3-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #b29a36 !important;
}
.u-button-style.u-palette-3-dark-1:hover,
.u-button-style.u-palette-3-dark-1[class*="u-border-"]:hover,
.u-button-style.u-palette-3-dark-1:focus,
.u-button-style.u-palette-3-dark-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-3-dark-1:active,
.u-button-style.u-button-style.u-palette-3-dark-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-3-dark-1.active,
.u-button-style.u-button-style.u-palette-3-dark-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-3-dark-1,
li.active > .u-button-style.u-button-style.u-palette-3-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #a08b31 !important;
}
.u-hover-palette-3-dark-1:hover,
.u-hover-palette-3-dark-1[class*="u-border-"]:hover,
.u-hover-palette-3-dark-1:focus,
.u-hover-palette-3-dark-1[class*="u-border-"]:focus,
.u-active-palette-3-dark-1.u-active.u-active,
.u-active-palette-3-dark-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-3-dark-1:hover,
a.u-button-style.u-hover-palette-3-dark-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-3-dark-1,
a.u-button-style:hover > .u-hover-palette-3-dark-1[class*="u-border-"],
a.u-button-style.u-hover-palette-3-dark-1:focus,
a.u-button-style.u-hover-palette-3-dark-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-3-dark-1:active,
a.u-button-style.u-button-style.u-active-palette-3-dark-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-3-dark-1.active,
a.u-button-style.u-button-style.u-active-palette-3-dark-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-3-dark-1,
a.u-button-style.u-button-style.active > .u-active-palette-3-dark-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-3-dark-1,
li.active > a.u-button-style.u-button-style.u-active-palette-3-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #b29a36 !important;
}
a.u-link.u-hover-palette-3-dark-1:hover {
  color: #b29a36 !important;
}
.u-palette-3,
.u-body.u-palette-3,
.u-container-style.u-palette-3:before,
.u-table-alt-palette-3 tr:nth-child(even) {
  color: #111111;
  background-color: #f1c50e;
}
.u-button-style.u-palette-3,
.u-button-style.u-palette-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f1c50e !important;
}
.u-button-style.u-palette-3:hover,
.u-button-style.u-palette-3[class*="u-border-"]:hover,
.u-button-style.u-palette-3:focus,
.u-button-style.u-palette-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-3:active,
.u-button-style.u-button-style.u-palette-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-3.active,
.u-button-style.u-button-style.u-palette-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-3,
li.active > .u-button-style.u-button-style.u-palette-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #d9b10d !important;
}
.u-hover-palette-3:hover,
.u-hover-palette-3[class*="u-border-"]:hover,
.u-hover-palette-3:focus,
.u-hover-palette-3[class*="u-border-"]:focus,
.u-active-palette-3.u-active.u-active,
.u-active-palette-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-3:hover,
a.u-button-style.u-hover-palette-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-3,
a.u-button-style:hover > .u-hover-palette-3[class*="u-border-"],
a.u-button-style.u-hover-palette-3:focus,
a.u-button-style.u-hover-palette-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-3:active,
a.u-button-style.u-button-style.u-active-palette-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-3.active,
a.u-button-style.u-button-style.u-active-palette-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-3,
a.u-button-style.u-button-style.active > .u-active-palette-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-3,
li.active > a.u-button-style.u-button-style.u-active-palette-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f1c50e !important;
}
a.u-link.u-hover-palette-3:hover {
  color: #f1c50e !important;
}
.u-palette-3-light-1,
.u-body.u-palette-3-light-1,
.u-container-style.u-palette-3-light-1:before,
.u-table-alt-palette-3-light-1 tr:nth-child(even) {
  color: #111111;
  background-color: #f5d654;
}
.u-button-style.u-palette-3-light-1,
.u-button-style.u-palette-3-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f5d654 !important;
}
.u-button-style.u-palette-3-light-1:hover,
.u-button-style.u-palette-3-light-1[class*="u-border-"]:hover,
.u-button-style.u-palette-3-light-1:focus,
.u-button-style.u-palette-3-light-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-3-light-1:active,
.u-button-style.u-button-style.u-palette-3-light-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-3-light-1.active,
.u-button-style.u-button-style.u-palette-3-light-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-3-light-1,
li.active > .u-button-style.u-button-style.u-palette-3-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f3cf35 !important;
}
.u-hover-palette-3-light-1:hover,
.u-hover-palette-3-light-1[class*="u-border-"]:hover,
.u-hover-palette-3-light-1:focus,
.u-hover-palette-3-light-1[class*="u-border-"]:focus,
.u-active-palette-3-light-1.u-active.u-active,
.u-active-palette-3-light-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-3-light-1:hover,
a.u-button-style.u-hover-palette-3-light-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-3-light-1,
a.u-button-style:hover > .u-hover-palette-3-light-1[class*="u-border-"],
a.u-button-style.u-hover-palette-3-light-1:focus,
a.u-button-style.u-hover-palette-3-light-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-3-light-1:active,
a.u-button-style.u-button-style.u-active-palette-3-light-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-3-light-1.active,
a.u-button-style.u-button-style.u-active-palette-3-light-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-3-light-1,
a.u-button-style.u-button-style.active > .u-active-palette-3-light-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-3-light-1,
li.active > a.u-button-style.u-button-style.u-active-palette-3-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f5d654 !important;
}
a.u-link.u-hover-palette-3-light-1:hover {
  color: #f5d654 !important;
}
.u-palette-3-light-2,
.u-body.u-palette-3-light-2,
.u-container-style.u-palette-3-light-2:before,
.u-table-alt-palette-3-light-2 tr:nth-child(even) {
  color: #111111;
  background-color: #f9e79b;
}
.u-button-style.u-palette-3-light-2,
.u-button-style.u-palette-3-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f9e79b !important;
}
.u-button-style.u-palette-3-light-2:hover,
.u-button-style.u-palette-3-light-2[class*="u-border-"]:hover,
.u-button-style.u-palette-3-light-2:focus,
.u-button-style.u-palette-3-light-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-3-light-2:active,
.u-button-style.u-button-style.u-palette-3-light-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-3-light-2.active,
.u-button-style.u-button-style.u-palette-3-light-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-3-light-2,
li.active > .u-button-style.u-button-style.u-palette-3-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f7de75 !important;
}
.u-hover-palette-3-light-2:hover,
.u-hover-palette-3-light-2[class*="u-border-"]:hover,
.u-hover-palette-3-light-2:focus,
.u-hover-palette-3-light-2[class*="u-border-"]:focus,
.u-active-palette-3-light-2.u-active.u-active,
.u-active-palette-3-light-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-3-light-2:hover,
a.u-button-style.u-hover-palette-3-light-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-3-light-2,
a.u-button-style:hover > .u-hover-palette-3-light-2[class*="u-border-"],
a.u-button-style.u-hover-palette-3-light-2:focus,
a.u-button-style.u-hover-palette-3-light-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-3-light-2:active,
a.u-button-style.u-button-style.u-active-palette-3-light-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-3-light-2.active,
a.u-button-style.u-button-style.u-active-palette-3-light-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-3-light-2,
a.u-button-style.u-button-style.active > .u-active-palette-3-light-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-3-light-2,
li.active > a.u-button-style.u-button-style.u-active-palette-3-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f9e79b !important;
}
a.u-link.u-hover-palette-3-light-2:hover {
  color: #f9e79b !important;
}
.u-palette-3-light-3,
.u-body.u-palette-3-light-3,
.u-container-style.u-palette-3-light-3:before,
.u-table-alt-palette-3-light-3 tr:nth-child(even) {
  color: #111111;
  background-color: #fef9e6;
}
.u-button-style.u-palette-3-light-3,
.u-button-style.u-palette-3-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #fef9e6 !important;
}
.u-button-style.u-palette-3-light-3:hover,
.u-button-style.u-palette-3-light-3[class*="u-border-"]:hover,
.u-button-style.u-palette-3-light-3:focus,
.u-button-style.u-palette-3-light-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-3-light-3:active,
.u-button-style.u-button-style.u-palette-3-light-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-3-light-3.active,
.u-button-style.u-button-style.u-palette-3-light-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-3-light-3,
li.active > .u-button-style.u-button-style.u-palette-3-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #fceeb7 !important;
}
.u-hover-palette-3-light-3:hover,
.u-hover-palette-3-light-3[class*="u-border-"]:hover,
.u-hover-palette-3-light-3:focus,
.u-hover-palette-3-light-3[class*="u-border-"]:focus,
.u-active-palette-3-light-3.u-active.u-active,
.u-active-palette-3-light-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-3-light-3:hover,
a.u-button-style.u-hover-palette-3-light-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-3-light-3,
a.u-button-style:hover > .u-hover-palette-3-light-3[class*="u-border-"],
a.u-button-style.u-hover-palette-3-light-3:focus,
a.u-button-style.u-hover-palette-3-light-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-3-light-3:active,
a.u-button-style.u-button-style.u-active-palette-3-light-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-3-light-3.active,
a.u-button-style.u-button-style.u-active-palette-3-light-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-3-light-3,
a.u-button-style.u-button-style.active > .u-active-palette-3-light-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-3-light-3,
li.active > a.u-button-style.u-button-style.u-active-palette-3-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #fef9e6 !important;
}
a.u-link.u-hover-palette-3-light-3:hover {
  color: #fef9e6 !important;
}
.u-palette-3-base,
.u-body.u-palette-3-base,
.u-container-style.u-palette-3-base:before,
.u-table-alt-palette-3-base tr:nth-child(even) {
  color: #111111;
  background-color: #f1c50e;
}
.u-button-style.u-palette-3-base,
.u-button-style.u-palette-3-base[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f1c50e !important;
}
.u-button-style.u-palette-3-base:hover,
.u-button-style.u-palette-3-base[class*="u-border-"]:hover,
.u-button-style.u-palette-3-base:focus,
.u-button-style.u-palette-3-base[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-3-base:active,
.u-button-style.u-button-style.u-palette-3-base[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-3-base.active,
.u-button-style.u-button-style.u-palette-3-base[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-3-base,
li.active > .u-button-style.u-button-style.u-palette-3-base[class*="u-border-"] {
  color: #111111 !important;
  background-color: #d9b10d !important;
}
.u-hover-palette-3-base:hover,
.u-hover-palette-3-base[class*="u-border-"]:hover,
.u-hover-palette-3-base:focus,
.u-hover-palette-3-base[class*="u-border-"]:focus,
.u-active-palette-3-base.u-active.u-active,
.u-active-palette-3-base[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-3-base:hover,
a.u-button-style.u-hover-palette-3-base[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-3-base,
a.u-button-style:hover > .u-hover-palette-3-base[class*="u-border-"],
a.u-button-style.u-hover-palette-3-base:focus,
a.u-button-style.u-hover-palette-3-base[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-3-base:active,
a.u-button-style.u-button-style.u-active-palette-3-base[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-3-base.active,
a.u-button-style.u-button-style.u-active-palette-3-base[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-3-base,
a.u-button-style.u-button-style.active > .u-active-palette-3-base[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-3-base,
li.active > a.u-button-style.u-button-style.u-active-palette-3-base[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f1c50e !important;
}
a.u-link.u-hover-palette-3-base:hover {
  color: #f1c50e !important;
}
.u-palette-4-dark-3,
.u-body.u-palette-4-dark-3,
.u-container-style.u-palette-4-dark-3:before,
.u-table-alt-palette-4-dark-3 tr:nth-child(even) {
  color: #ffffff;
  background-color: #293332;
}
.u-button-style.u-palette-4-dark-3,
.u-button-style.u-palette-4-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #293332 !important;
}
.u-button-style.u-palette-4-dark-3:hover,
.u-button-style.u-palette-4-dark-3[class*="u-border-"]:hover,
.u-button-style.u-palette-4-dark-3:focus,
.u-button-style.u-palette-4-dark-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-4-dark-3:active,
.u-button-style.u-button-style.u-palette-4-dark-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-4-dark-3.active,
.u-button-style.u-button-style.u-palette-4-dark-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-4-dark-3,
li.active > .u-button-style.u-button-style.u-palette-4-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #252e2d !important;
}
.u-hover-palette-4-dark-3:hover,
.u-hover-palette-4-dark-3[class*="u-border-"]:hover,
.u-hover-palette-4-dark-3:focus,
.u-hover-palette-4-dark-3[class*="u-border-"]:focus,
.u-active-palette-4-dark-3.u-active.u-active,
.u-active-palette-4-dark-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-4-dark-3:hover,
a.u-button-style.u-hover-palette-4-dark-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-4-dark-3,
a.u-button-style:hover > .u-hover-palette-4-dark-3[class*="u-border-"],
a.u-button-style.u-hover-palette-4-dark-3:focus,
a.u-button-style.u-hover-palette-4-dark-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-4-dark-3:active,
a.u-button-style.u-button-style.u-active-palette-4-dark-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-4-dark-3.active,
a.u-button-style.u-button-style.u-active-palette-4-dark-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-4-dark-3,
a.u-button-style.u-button-style.active > .u-active-palette-4-dark-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-4-dark-3,
li.active > a.u-button-style.u-button-style.u-active-palette-4-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #293332 !important;
}
a.u-link.u-hover-palette-4-dark-3:hover {
  color: #293332 !important;
}
.u-palette-4-dark-2,
.u-body.u-palette-4-dark-2,
.u-container-style.u-palette-4-dark-2:before,
.u-table-alt-palette-4-dark-2 tr:nth-child(even) {
  color: #ffffff;
  background-color: #41807c;
}
.u-button-style.u-palette-4-dark-2,
.u-button-style.u-palette-4-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #41807c !important;
}
.u-button-style.u-palette-4-dark-2:hover,
.u-button-style.u-palette-4-dark-2[class*="u-border-"]:hover,
.u-button-style.u-palette-4-dark-2:focus,
.u-button-style.u-palette-4-dark-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-4-dark-2:active,
.u-button-style.u-button-style.u-palette-4-dark-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-4-dark-2.active,
.u-button-style.u-button-style.u-palette-4-dark-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-4-dark-2,
li.active > .u-button-style.u-button-style.u-palette-4-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #3a7370 !important;
}
.u-hover-palette-4-dark-2:hover,
.u-hover-palette-4-dark-2[class*="u-border-"]:hover,
.u-hover-palette-4-dark-2:focus,
.u-hover-palette-4-dark-2[class*="u-border-"]:focus,
.u-active-palette-4-dark-2.u-active.u-active,
.u-active-palette-4-dark-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-4-dark-2:hover,
a.u-button-style.u-hover-palette-4-dark-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-4-dark-2,
a.u-button-style:hover > .u-hover-palette-4-dark-2[class*="u-border-"],
a.u-button-style.u-hover-palette-4-dark-2:focus,
a.u-button-style.u-hover-palette-4-dark-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-4-dark-2:active,
a.u-button-style.u-button-style.u-active-palette-4-dark-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-4-dark-2.active,
a.u-button-style.u-button-style.u-active-palette-4-dark-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-4-dark-2,
a.u-button-style.u-button-style.active > .u-active-palette-4-dark-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-4-dark-2,
li.active > a.u-button-style.u-button-style.u-active-palette-4-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #41807c !important;
}
a.u-link.u-hover-palette-4-dark-2:hover {
  color: #41807c !important;
}
.u-palette-4-dark-1,
.u-body.u-palette-4-dark-1,
.u-container-style.u-palette-4-dark-1:before,
.u-table-alt-palette-4-dark-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #2cccc4;
}
.u-button-style.u-palette-4-dark-1,
.u-button-style.u-palette-4-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #2cccc4 !important;
}
.u-button-style.u-palette-4-dark-1:hover,
.u-button-style.u-palette-4-dark-1[class*="u-border-"]:hover,
.u-button-style.u-palette-4-dark-1:focus,
.u-button-style.u-palette-4-dark-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-4-dark-1:active,
.u-button-style.u-button-style.u-palette-4-dark-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-4-dark-1.active,
.u-button-style.u-button-style.u-palette-4-dark-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-4-dark-1,
li.active > .u-button-style.u-button-style.u-palette-4-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #28b8b0 !important;
}
.u-hover-palette-4-dark-1:hover,
.u-hover-palette-4-dark-1[class*="u-border-"]:hover,
.u-hover-palette-4-dark-1:focus,
.u-hover-palette-4-dark-1[class*="u-border-"]:focus,
.u-active-palette-4-dark-1.u-active.u-active,
.u-active-palette-4-dark-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-4-dark-1:hover,
a.u-button-style.u-hover-palette-4-dark-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-4-dark-1,
a.u-button-style:hover > .u-hover-palette-4-dark-1[class*="u-border-"],
a.u-button-style.u-hover-palette-4-dark-1:focus,
a.u-button-style.u-hover-palette-4-dark-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-4-dark-1:active,
a.u-button-style.u-button-style.u-active-palette-4-dark-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-4-dark-1.active,
a.u-button-style.u-button-style.u-active-palette-4-dark-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-4-dark-1,
a.u-button-style.u-button-style.active > .u-active-palette-4-dark-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-4-dark-1,
li.active > a.u-button-style.u-button-style.u-active-palette-4-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #2cccc4 !important;
}
a.u-link.u-hover-palette-4-dark-1:hover {
  color: #2cccc4 !important;
}
.u-palette-4,
.u-body.u-palette-4,
.u-container-style.u-palette-4:before,
.u-table-alt-palette-4 tr:nth-child(even) {
  color: #111111;
  background-color: #3be8e0;
}
.u-button-style.u-palette-4,
.u-button-style.u-palette-4[class*="u-border-"] {
  color: #111111 !important;
  background-color: #3be8e0 !important;
}
.u-button-style.u-palette-4:hover,
.u-button-style.u-palette-4[class*="u-border-"]:hover,
.u-button-style.u-palette-4:focus,
.u-button-style.u-palette-4[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-4:active,
.u-button-style.u-button-style.u-palette-4[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-4.active,
.u-button-style.u-button-style.u-palette-4[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-4,
li.active > .u-button-style.u-button-style.u-palette-4[class*="u-border-"] {
  color: #111111 !important;
  background-color: #21e5dc !important;
}
.u-hover-palette-4:hover,
.u-hover-palette-4[class*="u-border-"]:hover,
.u-hover-palette-4:focus,
.u-hover-palette-4[class*="u-border-"]:focus,
.u-active-palette-4.u-active.u-active,
.u-active-palette-4[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-4:hover,
a.u-button-style.u-hover-palette-4[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-4,
a.u-button-style:hover > .u-hover-palette-4[class*="u-border-"],
a.u-button-style.u-hover-palette-4:focus,
a.u-button-style.u-hover-palette-4[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-4:active,
a.u-button-style.u-button-style.u-active-palette-4[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-4.active,
a.u-button-style.u-button-style.u-active-palette-4[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-4,
a.u-button-style.u-button-style.active > .u-active-palette-4[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-4,
li.active > a.u-button-style.u-button-style.u-active-palette-4[class*="u-border-"] {
  color: #111111 !important;
  background-color: #3be8e0 !important;
}
a.u-link.u-hover-palette-4:hover {
  color: #3be8e0 !important;
}
.u-palette-4-light-1,
.u-body.u-palette-4-light-1,
.u-container-style.u-palette-4-light-1:before,
.u-table-alt-palette-4-light-1 tr:nth-child(even) {
  color: #111111;
  background-color: #72efe9;
}
.u-button-style.u-palette-4-light-1,
.u-button-style.u-palette-4-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #72efe9 !important;
}
.u-button-style.u-palette-4-light-1:hover,
.u-button-style.u-palette-4-light-1[class*="u-border-"]:hover,
.u-button-style.u-palette-4-light-1:focus,
.u-button-style.u-palette-4-light-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-4-light-1:active,
.u-button-style.u-button-style.u-palette-4-light-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-4-light-1.active,
.u-button-style.u-button-style.u-palette-4-light-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-4-light-1,
li.active > .u-button-style.u-button-style.u-palette-4-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #52ebe4 !important;
}
.u-hover-palette-4-light-1:hover,
.u-hover-palette-4-light-1[class*="u-border-"]:hover,
.u-hover-palette-4-light-1:focus,
.u-hover-palette-4-light-1[class*="u-border-"]:focus,
.u-active-palette-4-light-1.u-active.u-active,
.u-active-palette-4-light-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-4-light-1:hover,
a.u-button-style.u-hover-palette-4-light-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-4-light-1,
a.u-button-style:hover > .u-hover-palette-4-light-1[class*="u-border-"],
a.u-button-style.u-hover-palette-4-light-1:focus,
a.u-button-style.u-hover-palette-4-light-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-4-light-1:active,
a.u-button-style.u-button-style.u-active-palette-4-light-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-4-light-1.active,
a.u-button-style.u-button-style.u-active-palette-4-light-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-4-light-1,
a.u-button-style.u-button-style.active > .u-active-palette-4-light-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-4-light-1,
li.active > a.u-button-style.u-button-style.u-active-palette-4-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #72efe9 !important;
}
a.u-link.u-hover-palette-4-light-1:hover {
  color: #72efe9 !important;
}
.u-palette-4-light-2,
.u-body.u-palette-4-light-2,
.u-container-style.u-palette-4-light-2:before,
.u-table-alt-palette-4-light-2 tr:nth-child(even) {
  color: #111111;
  background-color: #adf6f2;
}
.u-button-style.u-palette-4-light-2,
.u-button-style.u-palette-4-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #adf6f2 !important;
}
.u-button-style.u-palette-4-light-2:hover,
.u-button-style.u-palette-4-light-2[class*="u-border-"]:hover,
.u-button-style.u-palette-4-light-2:focus,
.u-button-style.u-palette-4-light-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-4-light-2:active,
.u-button-style.u-button-style.u-palette-4-light-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-4-light-2.active,
.u-button-style.u-button-style.u-palette-4-light-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-4-light-2,
li.active > .u-button-style.u-button-style.u-palette-4-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #87f2ec !important;
}
.u-hover-palette-4-light-2:hover,
.u-hover-palette-4-light-2[class*="u-border-"]:hover,
.u-hover-palette-4-light-2:focus,
.u-hover-palette-4-light-2[class*="u-border-"]:focus,
.u-active-palette-4-light-2.u-active.u-active,
.u-active-palette-4-light-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-4-light-2:hover,
a.u-button-style.u-hover-palette-4-light-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-4-light-2,
a.u-button-style:hover > .u-hover-palette-4-light-2[class*="u-border-"],
a.u-button-style.u-hover-palette-4-light-2:focus,
a.u-button-style.u-hover-palette-4-light-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-4-light-2:active,
a.u-button-style.u-button-style.u-active-palette-4-light-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-4-light-2.active,
a.u-button-style.u-button-style.u-active-palette-4-light-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-4-light-2,
a.u-button-style.u-button-style.active > .u-active-palette-4-light-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-4-light-2,
li.active > a.u-button-style.u-button-style.u-active-palette-4-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #adf6f2 !important;
}
a.u-link.u-hover-palette-4-light-2:hover {
  color: #adf6f2 !important;
}
.u-palette-4-light-3,
.u-body.u-palette-4-light-3,
.u-container-style.u-palette-4-light-3:before,
.u-table-alt-palette-4-light-3 tr:nth-child(even) {
  color: #111111;
  background-color: #eafdfc;
}
.u-button-style.u-palette-4-light-3,
.u-button-style.u-palette-4-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #eafdfc !important;
}
.u-button-style.u-palette-4-light-3:hover,
.u-button-style.u-palette-4-light-3[class*="u-border-"]:hover,
.u-button-style.u-palette-4-light-3:focus,
.u-button-style.u-palette-4-light-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-4-light-3:active,
.u-button-style.u-button-style.u-palette-4-light-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-4-light-3.active,
.u-button-style.u-button-style.u-palette-4-light-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-4-light-3,
li.active > .u-button-style.u-button-style.u-palette-4-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #bef9f6 !important;
}
.u-hover-palette-4-light-3:hover,
.u-hover-palette-4-light-3[class*="u-border-"]:hover,
.u-hover-palette-4-light-3:focus,
.u-hover-palette-4-light-3[class*="u-border-"]:focus,
.u-active-palette-4-light-3.u-active.u-active,
.u-active-palette-4-light-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-4-light-3:hover,
a.u-button-style.u-hover-palette-4-light-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-4-light-3,
a.u-button-style:hover > .u-hover-palette-4-light-3[class*="u-border-"],
a.u-button-style.u-hover-palette-4-light-3:focus,
a.u-button-style.u-hover-palette-4-light-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-4-light-3:active,
a.u-button-style.u-button-style.u-active-palette-4-light-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-4-light-3.active,
a.u-button-style.u-button-style.u-active-palette-4-light-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-4-light-3,
a.u-button-style.u-button-style.active > .u-active-palette-4-light-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-4-light-3,
li.active > a.u-button-style.u-button-style.u-active-palette-4-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #eafdfc !important;
}
a.u-link.u-hover-palette-4-light-3:hover {
  color: #eafdfc !important;
}
.u-palette-4-base,
.u-body.u-palette-4-base,
.u-container-style.u-palette-4-base:before,
.u-table-alt-palette-4-base tr:nth-child(even) {
  color: #ffffff;
  background-color: #2cccc4;
}
.u-button-style.u-palette-4-base,
.u-button-style.u-palette-4-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #2cccc4 !important;
}
.u-button-style.u-palette-4-base:hover,
.u-button-style.u-palette-4-base[class*="u-border-"]:hover,
.u-button-style.u-palette-4-base:focus,
.u-button-style.u-palette-4-base[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-4-base:active,
.u-button-style.u-button-style.u-palette-4-base[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-4-base.active,
.u-button-style.u-button-style.u-palette-4-base[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-4-base,
li.active > .u-button-style.u-button-style.u-palette-4-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #28b8b0 !important;
}
.u-hover-palette-4-base:hover,
.u-hover-palette-4-base[class*="u-border-"]:hover,
.u-hover-palette-4-base:focus,
.u-hover-palette-4-base[class*="u-border-"]:focus,
.u-active-palette-4-base.u-active.u-active,
.u-active-palette-4-base[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-4-base:hover,
a.u-button-style.u-hover-palette-4-base[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-4-base,
a.u-button-style:hover > .u-hover-palette-4-base[class*="u-border-"],
a.u-button-style.u-hover-palette-4-base:focus,
a.u-button-style.u-hover-palette-4-base[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-4-base:active,
a.u-button-style.u-button-style.u-active-palette-4-base[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-4-base.active,
a.u-button-style.u-button-style.u-active-palette-4-base[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-4-base,
a.u-button-style.u-button-style.active > .u-active-palette-4-base[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-4-base,
li.active > a.u-button-style.u-button-style.u-active-palette-4-base[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #2cccc4 !important;
}
a.u-link.u-hover-palette-4-base:hover {
  color: #2cccc4 !important;
}
.u-palette-5-dark-3,
.u-body.u-palette-5-dark-3,
.u-container-style.u-palette-5-dark-3:before,
.u-table-alt-palette-5-dark-3 tr:nth-child(even) {
  color: #ffffff;
  background-color: #292d33;
}
.u-button-style.u-palette-5-dark-3,
.u-button-style.u-palette-5-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #292d33 !important;
}
.u-button-style.u-palette-5-dark-3:hover,
.u-button-style.u-palette-5-dark-3[class*="u-border-"]:hover,
.u-button-style.u-palette-5-dark-3:focus,
.u-button-style.u-palette-5-dark-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-5-dark-3:active,
.u-button-style.u-button-style.u-palette-5-dark-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-5-dark-3.active,
.u-button-style.u-button-style.u-palette-5-dark-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-5-dark-3,
li.active > .u-button-style.u-button-style.u-palette-5-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #25292e !important;
}
.u-hover-palette-5-dark-3:hover,
.u-hover-palette-5-dark-3[class*="u-border-"]:hover,
.u-hover-palette-5-dark-3:focus,
.u-hover-palette-5-dark-3[class*="u-border-"]:focus,
.u-active-palette-5-dark-3.u-active.u-active,
.u-active-palette-5-dark-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-5-dark-3:hover,
a.u-button-style.u-hover-palette-5-dark-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-5-dark-3,
a.u-button-style:hover > .u-hover-palette-5-dark-3[class*="u-border-"],
a.u-button-style.u-hover-palette-5-dark-3:focus,
a.u-button-style.u-hover-palette-5-dark-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-5-dark-3:active,
a.u-button-style.u-button-style.u-active-palette-5-dark-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-5-dark-3.active,
a.u-button-style.u-button-style.u-active-palette-5-dark-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-5-dark-3,
a.u-button-style.u-button-style.active > .u-active-palette-5-dark-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-5-dark-3,
li.active > a.u-button-style.u-button-style.u-active-palette-5-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #292d33 !important;
}
a.u-link.u-hover-palette-5-dark-3:hover {
  color: #292d33 !important;
}
.u-palette-5-dark-2,
.u-body.u-palette-5-dark-2,
.u-container-style.u-palette-5-dark-2:before,
.u-table-alt-palette-5-dark-2 tr:nth-child(even) {
  color: #ffffff;
  background-color: #555c66;
}
.u-button-style.u-palette-5-dark-2,
.u-button-style.u-palette-5-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #555c66 !important;
}
.u-button-style.u-palette-5-dark-2:hover,
.u-button-style.u-palette-5-dark-2[class*="u-border-"]:hover,
.u-button-style.u-palette-5-dark-2:focus,
.u-button-style.u-palette-5-dark-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-5-dark-2:active,
.u-button-style.u-button-style.u-palette-5-dark-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-5-dark-2.active,
.u-button-style.u-button-style.u-palette-5-dark-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-5-dark-2,
li.active > .u-button-style.u-button-style.u-palette-5-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #4d535c !important;
}
.u-hover-palette-5-dark-2:hover,
.u-hover-palette-5-dark-2[class*="u-border-"]:hover,
.u-hover-palette-5-dark-2:focus,
.u-hover-palette-5-dark-2[class*="u-border-"]:focus,
.u-active-palette-5-dark-2.u-active.u-active,
.u-active-palette-5-dark-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-5-dark-2:hover,
a.u-button-style.u-hover-palette-5-dark-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-5-dark-2,
a.u-button-style:hover > .u-hover-palette-5-dark-2[class*="u-border-"],
a.u-button-style.u-hover-palette-5-dark-2:focus,
a.u-button-style.u-hover-palette-5-dark-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-5-dark-2:active,
a.u-button-style.u-button-style.u-active-palette-5-dark-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-5-dark-2.active,
a.u-button-style.u-button-style.u-active-palette-5-dark-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-5-dark-2,
a.u-button-style.u-button-style.active > .u-active-palette-5-dark-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-5-dark-2,
li.active > a.u-button-style.u-button-style.u-active-palette-5-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #555c66 !important;
}
a.u-link.u-hover-palette-5-dark-2:hover {
  color: #555c66 !important;
}
.u-palette-5-dark-1,
.u-body.u-palette-5-dark-1,
.u-container-style.u-palette-5-dark-1:before,
.u-table-alt-palette-5-dark-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #858e99;
}
.u-button-style.u-palette-5-dark-1,
.u-button-style.u-palette-5-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #858e99 !important;
}
.u-button-style.u-palette-5-dark-1:hover,
.u-button-style.u-palette-5-dark-1[class*="u-border-"]:hover,
.u-button-style.u-palette-5-dark-1:focus,
.u-button-style.u-palette-5-dark-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-5-dark-1:active,
.u-button-style.u-button-style.u-palette-5-dark-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-5-dark-1.active,
.u-button-style.u-button-style.u-palette-5-dark-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-5-dark-1,
li.active > .u-button-style.u-button-style.u-palette-5-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #75808c !important;
}
.u-hover-palette-5-dark-1:hover,
.u-hover-palette-5-dark-1[class*="u-border-"]:hover,
.u-hover-palette-5-dark-1:focus,
.u-hover-palette-5-dark-1[class*="u-border-"]:focus,
.u-active-palette-5-dark-1.u-active.u-active,
.u-active-palette-5-dark-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-5-dark-1:hover,
a.u-button-style.u-hover-palette-5-dark-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-5-dark-1,
a.u-button-style:hover > .u-hover-palette-5-dark-1[class*="u-border-"],
a.u-button-style.u-hover-palette-5-dark-1:focus,
a.u-button-style.u-hover-palette-5-dark-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-5-dark-1:active,
a.u-button-style.u-button-style.u-active-palette-5-dark-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-5-dark-1.active,
a.u-button-style.u-button-style.u-active-palette-5-dark-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-5-dark-1,
a.u-button-style.u-button-style.active > .u-active-palette-5-dark-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-5-dark-1,
li.active > a.u-button-style.u-button-style.u-active-palette-5-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #858e99 !important;
}
a.u-link.u-hover-palette-5-dark-1:hover {
  color: #858e99 !important;
}
.u-palette-5,
.u-body.u-palette-5,
.u-container-style.u-palette-5:before,
.u-table-alt-palette-5 tr:nth-child(even) {
  color: #111111;
  background-color: #b9c1cc;
}
.u-button-style.u-palette-5,
.u-button-style.u-palette-5[class*="u-border-"] {
  color: #111111 !important;
  background-color: #b9c1cc !important;
}
.u-button-style.u-palette-5:hover,
.u-button-style.u-palette-5[class*="u-border-"]:hover,
.u-button-style.u-palette-5:focus,
.u-button-style.u-palette-5[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-5:active,
.u-button-style.u-button-style.u-palette-5[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-5.active,
.u-button-style.u-button-style.u-palette-5[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-5,
li.active > .u-button-style.u-button-style.u-palette-5[class*="u-border-"] {
  color: #111111 !important;
  background-color: #a2adbc !important;
}
.u-hover-palette-5:hover,
.u-hover-palette-5[class*="u-border-"]:hover,
.u-hover-palette-5:focus,
.u-hover-palette-5[class*="u-border-"]:focus,
.u-active-palette-5.u-active.u-active,
.u-active-palette-5[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-5:hover,
a.u-button-style.u-hover-palette-5[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-5,
a.u-button-style:hover > .u-hover-palette-5[class*="u-border-"],
a.u-button-style.u-hover-palette-5:focus,
a.u-button-style.u-hover-palette-5[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-5:active,
a.u-button-style.u-button-style.u-active-palette-5[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-5.active,
a.u-button-style.u-button-style.u-active-palette-5[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-5,
a.u-button-style.u-button-style.active > .u-active-palette-5[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-5,
li.active > a.u-button-style.u-button-style.u-active-palette-5[class*="u-border-"] {
  color: #111111 !important;
  background-color: #b9c1cc !important;
}
a.u-link.u-hover-palette-5:hover {
  color: #b9c1cc !important;
}
.u-palette-5-light-1,
.u-body.u-palette-5-light-1,
.u-container-style.u-palette-5-light-1:before,
.u-table-alt-palette-5-light-1 tr:nth-child(even) {
  color: #111111;
  background-color: #ccd3db;
}
.u-button-style.u-palette-5-light-1,
.u-button-style.u-palette-5-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #ccd3db !important;
}
.u-button-style.u-palette-5-light-1:hover,
.u-button-style.u-palette-5-light-1[class*="u-border-"]:hover,
.u-button-style.u-palette-5-light-1:focus,
.u-button-style.u-palette-5-light-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-5-light-1:active,
.u-button-style.u-button-style.u-palette-5-light-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-5-light-1.active,
.u-button-style.u-button-style.u-palette-5-light-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-5-light-1,
li.active > .u-button-style.u-button-style.u-palette-5-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #b3bec9 !important;
}
.u-hover-palette-5-light-1:hover,
.u-hover-palette-5-light-1[class*="u-border-"]:hover,
.u-hover-palette-5-light-1:focus,
.u-hover-palette-5-light-1[class*="u-border-"]:focus,
.u-active-palette-5-light-1.u-active.u-active,
.u-active-palette-5-light-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-5-light-1:hover,
a.u-button-style.u-hover-palette-5-light-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-5-light-1,
a.u-button-style:hover > .u-hover-palette-5-light-1[class*="u-border-"],
a.u-button-style.u-hover-palette-5-light-1:focus,
a.u-button-style.u-hover-palette-5-light-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-5-light-1:active,
a.u-button-style.u-button-style.u-active-palette-5-light-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-5-light-1.active,
a.u-button-style.u-button-style.u-active-palette-5-light-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-5-light-1,
a.u-button-style.u-button-style.active > .u-active-palette-5-light-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-5-light-1,
li.active > a.u-button-style.u-button-style.u-active-palette-5-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #ccd3db !important;
}
a.u-link.u-hover-palette-5-light-1:hover {
  color: #ccd3db !important;
}
.u-palette-5-light-2,
.u-body.u-palette-5-light-2,
.u-container-style.u-palette-5-light-2:before,
.u-table-alt-palette-5-light-2 tr:nth-child(even) {
  color: #111111;
  background-color: #e0e5eb;
}
.u-button-style.u-palette-5-light-2,
.u-button-style.u-palette-5-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #e0e5eb !important;
}
.u-button-style.u-palette-5-light-2:hover,
.u-button-style.u-palette-5-light-2[class*="u-border-"]:hover,
.u-button-style.u-palette-5-light-2:focus,
.u-button-style.u-palette-5-light-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-5-light-2:active,
.u-button-style.u-button-style.u-palette-5-light-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-5-light-2.active,
.u-button-style.u-button-style.u-palette-5-light-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-5-light-2,
li.active > .u-button-style.u-button-style.u-palette-5-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #c4ced9 !important;
}
.u-hover-palette-5-light-2:hover,
.u-hover-palette-5-light-2[class*="u-border-"]:hover,
.u-hover-palette-5-light-2:focus,
.u-hover-palette-5-light-2[class*="u-border-"]:focus,
.u-active-palette-5-light-2.u-active.u-active,
.u-active-palette-5-light-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-5-light-2:hover,
a.u-button-style.u-hover-palette-5-light-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-5-light-2,
a.u-button-style:hover > .u-hover-palette-5-light-2[class*="u-border-"],
a.u-button-style.u-hover-palette-5-light-2:focus,
a.u-button-style.u-hover-palette-5-light-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-5-light-2:active,
a.u-button-style.u-button-style.u-active-palette-5-light-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-5-light-2.active,
a.u-button-style.u-button-style.u-active-palette-5-light-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-5-light-2,
a.u-button-style.u-button-style.active > .u-active-palette-5-light-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-5-light-2,
li.active > a.u-button-style.u-button-style.u-active-palette-5-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #e0e5eb !important;
}
a.u-link.u-hover-palette-5-light-2:hover {
  color: #e0e5eb !important;
}
.u-palette-5-light-3,
.u-body.u-palette-5-light-3,
.u-container-style.u-palette-5-light-3:before,
.u-table-alt-palette-5-light-3 tr:nth-child(even) {
  color: #111111;
  background-color: #f5f7fa;
}
.u-button-style.u-palette-5-light-3,
.u-button-style.u-palette-5-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f5f7fa !important;
}
.u-button-style.u-palette-5-light-3:hover,
.u-button-style.u-palette-5-light-3[class*="u-border-"]:hover,
.u-button-style.u-palette-5-light-3:focus,
.u-button-style.u-palette-5-light-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-5-light-3:active,
.u-button-style.u-button-style.u-palette-5-light-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-5-light-3.active,
.u-button-style.u-button-style.u-palette-5-light-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-5-light-3,
li.active > .u-button-style.u-button-style.u-palette-5-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #d4dde9 !important;
}
.u-hover-palette-5-light-3:hover,
.u-hover-palette-5-light-3[class*="u-border-"]:hover,
.u-hover-palette-5-light-3:focus,
.u-hover-palette-5-light-3[class*="u-border-"]:focus,
.u-active-palette-5-light-3.u-active.u-active,
.u-active-palette-5-light-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-5-light-3:hover,
a.u-button-style.u-hover-palette-5-light-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-5-light-3,
a.u-button-style:hover > .u-hover-palette-5-light-3[class*="u-border-"],
a.u-button-style.u-hover-palette-5-light-3:focus,
a.u-button-style.u-hover-palette-5-light-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-5-light-3:active,
a.u-button-style.u-button-style.u-active-palette-5-light-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-5-light-3.active,
a.u-button-style.u-button-style.u-active-palette-5-light-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-5-light-3,
a.u-button-style.u-button-style.active > .u-active-palette-5-light-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-5-light-3,
li.active > a.u-button-style.u-button-style.u-active-palette-5-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f5f7fa !important;
}
a.u-link.u-hover-palette-5-light-3:hover {
  color: #f5f7fa !important;
}
.u-palette-5-base,
.u-body.u-palette-5-base,
.u-container-style.u-palette-5-base:before,
.u-table-alt-palette-5-base tr:nth-child(even) {
  color: #111111;
  background-color: #b9c1cc;
}
.u-button-style.u-palette-5-base,
.u-button-style.u-palette-5-base[class*="u-border-"] {
  color: #111111 !important;
  background-color: #b9c1cc !important;
}
.u-button-style.u-palette-5-base:hover,
.u-button-style.u-palette-5-base[class*="u-border-"]:hover,
.u-button-style.u-palette-5-base:focus,
.u-button-style.u-palette-5-base[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-palette-5-base:active,
.u-button-style.u-button-style.u-palette-5-base[class*="u-border-"]:active,
.u-button-style.u-button-style.u-palette-5-base.active,
.u-button-style.u-button-style.u-palette-5-base[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-palette-5-base,
li.active > .u-button-style.u-button-style.u-palette-5-base[class*="u-border-"] {
  color: #111111 !important;
  background-color: #a2adbc !important;
}
.u-hover-palette-5-base:hover,
.u-hover-palette-5-base[class*="u-border-"]:hover,
.u-hover-palette-5-base:focus,
.u-hover-palette-5-base[class*="u-border-"]:focus,
.u-active-palette-5-base.u-active.u-active,
.u-active-palette-5-base[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-palette-5-base:hover,
a.u-button-style.u-hover-palette-5-base[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-palette-5-base,
a.u-button-style:hover > .u-hover-palette-5-base[class*="u-border-"],
a.u-button-style.u-hover-palette-5-base:focus,
a.u-button-style.u-hover-palette-5-base[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-palette-5-base:active,
a.u-button-style.u-button-style.u-active-palette-5-base[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-palette-5-base.active,
a.u-button-style.u-button-style.u-active-palette-5-base[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-palette-5-base,
a.u-button-style.u-button-style.active > .u-active-palette-5-base[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-palette-5-base,
li.active > a.u-button-style.u-button-style.u-active-palette-5-base[class*="u-border-"] {
  color: #111111 !important;
  background-color: #b9c1cc !important;
}
a.u-link.u-hover-palette-5-base:hover {
  color: #b9c1cc !important;
}
.u-grey-dark-3,
.u-body.u-grey-dark-3,
.u-container-style.u-grey-dark-3:before,
.u-table-alt-grey-dark-3 tr:nth-child(even) {
  color: #ffffff;
  background-color: #212121;
}
.u-button-style.u-grey-dark-3,
.u-button-style.u-grey-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #212121 !important;
}
.u-button-style.u-grey-dark-3:hover,
.u-button-style.u-grey-dark-3[class*="u-border-"]:hover,
.u-button-style.u-grey-dark-3:focus,
.u-button-style.u-grey-dark-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-dark-3:active,
.u-button-style.u-button-style.u-grey-dark-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-dark-3.active,
.u-button-style.u-button-style.u-grey-dark-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-dark-3,
li.active > .u-button-style.u-button-style.u-grey-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #1e1e1e !important;
}
.u-hover-grey-dark-3:hover,
.u-hover-grey-dark-3[class*="u-border-"]:hover,
.u-hover-grey-dark-3:focus,
.u-hover-grey-dark-3[class*="u-border-"]:focus,
.u-active-grey-dark-3.u-active.u-active,
.u-active-grey-dark-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-dark-3:hover,
a.u-button-style.u-hover-grey-dark-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-dark-3,
a.u-button-style:hover > .u-hover-grey-dark-3[class*="u-border-"],
a.u-button-style.u-hover-grey-dark-3:focus,
a.u-button-style.u-hover-grey-dark-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-dark-3:active,
a.u-button-style.u-button-style.u-active-grey-dark-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-dark-3.active,
a.u-button-style.u-button-style.u-active-grey-dark-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-dark-3,
a.u-button-style.u-button-style.active > .u-active-grey-dark-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-dark-3,
li.active > a.u-button-style.u-button-style.u-active-grey-dark-3[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #212121 !important;
}
a.u-link.u-hover-grey-dark-3:hover {
  color: #212121 !important;
}
.u-grey-dark-2,
.u-body.u-grey-dark-2,
.u-container-style.u-grey-dark-2:before,
.u-table-alt-grey-dark-2 tr:nth-child(even) {
  color: #ffffff;
  background-color: #333333;
}
.u-button-style.u-grey-dark-2,
.u-button-style.u-grey-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #333333 !important;
}
.u-button-style.u-grey-dark-2:hover,
.u-button-style.u-grey-dark-2[class*="u-border-"]:hover,
.u-button-style.u-grey-dark-2:focus,
.u-button-style.u-grey-dark-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-dark-2:active,
.u-button-style.u-button-style.u-grey-dark-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-dark-2.active,
.u-button-style.u-button-style.u-grey-dark-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-dark-2,
li.active > .u-button-style.u-button-style.u-grey-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #2e2e2e !important;
}
.u-hover-grey-dark-2:hover,
.u-hover-grey-dark-2[class*="u-border-"]:hover,
.u-hover-grey-dark-2:focus,
.u-hover-grey-dark-2[class*="u-border-"]:focus,
.u-active-grey-dark-2.u-active.u-active,
.u-active-grey-dark-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-dark-2:hover,
a.u-button-style.u-hover-grey-dark-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-dark-2,
a.u-button-style:hover > .u-hover-grey-dark-2[class*="u-border-"],
a.u-button-style.u-hover-grey-dark-2:focus,
a.u-button-style.u-hover-grey-dark-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-dark-2:active,
a.u-button-style.u-button-style.u-active-grey-dark-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-dark-2.active,
a.u-button-style.u-button-style.u-active-grey-dark-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-dark-2,
a.u-button-style.u-button-style.active > .u-active-grey-dark-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-dark-2,
li.active > a.u-button-style.u-button-style.u-active-grey-dark-2[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #333333 !important;
}
a.u-link.u-hover-grey-dark-2:hover {
  color: #333333 !important;
}
.u-grey-dark-1,
.u-body.u-grey-dark-1,
.u-container-style.u-grey-dark-1:before,
.u-table-alt-grey-dark-1 tr:nth-child(even) {
  color: #ffffff;
  background-color: #454545;
}
.u-button-style.u-grey-dark-1,
.u-button-style.u-grey-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #454545 !important;
}
.u-button-style.u-grey-dark-1:hover,
.u-button-style.u-grey-dark-1[class*="u-border-"]:hover,
.u-button-style.u-grey-dark-1:focus,
.u-button-style.u-grey-dark-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-dark-1:active,
.u-button-style.u-button-style.u-grey-dark-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-dark-1.active,
.u-button-style.u-button-style.u-grey-dark-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-dark-1,
li.active > .u-button-style.u-button-style.u-grey-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #3e3e3e !important;
}
.u-hover-grey-dark-1:hover,
.u-hover-grey-dark-1[class*="u-border-"]:hover,
.u-hover-grey-dark-1:focus,
.u-hover-grey-dark-1[class*="u-border-"]:focus,
.u-active-grey-dark-1.u-active.u-active,
.u-active-grey-dark-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-dark-1:hover,
a.u-button-style.u-hover-grey-dark-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-dark-1,
a.u-button-style:hover > .u-hover-grey-dark-1[class*="u-border-"],
a.u-button-style.u-hover-grey-dark-1:focus,
a.u-button-style.u-hover-grey-dark-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-dark-1:active,
a.u-button-style.u-button-style.u-active-grey-dark-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-dark-1.active,
a.u-button-style.u-button-style.u-active-grey-dark-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-dark-1,
a.u-button-style.u-button-style.active > .u-active-grey-dark-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-dark-1,
li.active > a.u-button-style.u-button-style.u-active-grey-dark-1[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #454545 !important;
}
a.u-link.u-hover-grey-dark-1:hover {
  color: #454545 !important;
}
.u-grey,
.u-body.u-grey,
.u-container-style.u-grey:before,
.u-table-alt-grey tr:nth-child(even) {
  color: #ffffff;
  background-color: #b3b3b3;
}
.u-button-style.u-grey,
.u-button-style.u-grey[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #b3b3b3 !important;
}
.u-button-style.u-grey:hover,
.u-button-style.u-grey[class*="u-border-"]:hover,
.u-button-style.u-grey:focus,
.u-button-style.u-grey[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey:active,
.u-button-style.u-button-style.u-grey[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey.active,
.u-button-style.u-button-style.u-grey[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey,
li.active > .u-button-style.u-button-style.u-grey[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #a1a1a1 !important;
}
.u-hover-grey:hover,
.u-hover-grey[class*="u-border-"]:hover,
.u-hover-grey:focus,
.u-hover-grey[class*="u-border-"]:focus,
.u-active-grey.u-active.u-active,
.u-active-grey[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey:hover,
a.u-button-style.u-hover-grey[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey,
a.u-button-style:hover > .u-hover-grey[class*="u-border-"],
a.u-button-style.u-hover-grey:focus,
a.u-button-style.u-hover-grey[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey:active,
a.u-button-style.u-button-style.u-active-grey[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey.active,
a.u-button-style.u-button-style.u-active-grey[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey,
a.u-button-style.u-button-style.active > .u-active-grey[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey,
li.active > a.u-button-style.u-button-style.u-active-grey[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #b3b3b3 !important;
}
a.u-link.u-hover-grey:hover {
  color: #b3b3b3 !important;
}
.u-grey-light-1,
.u-body.u-grey-light-1,
.u-container-style.u-grey-light-1:before,
.u-table-alt-grey-light-1 tr:nth-child(even) {
  color: #111111;
  background-color: #d9d9d9;
}
.u-button-style.u-grey-light-1,
.u-button-style.u-grey-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #d9d9d9 !important;
}
.u-button-style.u-grey-light-1:hover,
.u-button-style.u-grey-light-1[class*="u-border-"]:hover,
.u-button-style.u-grey-light-1:focus,
.u-button-style.u-grey-light-1[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-light-1:active,
.u-button-style.u-button-style.u-grey-light-1[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-light-1.active,
.u-button-style.u-button-style.u-grey-light-1[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-light-1,
li.active > .u-button-style.u-button-style.u-grey-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #c3c3c3 !important;
}
.u-hover-grey-light-1:hover,
.u-hover-grey-light-1[class*="u-border-"]:hover,
.u-hover-grey-light-1:focus,
.u-hover-grey-light-1[class*="u-border-"]:focus,
.u-active-grey-light-1.u-active.u-active,
.u-active-grey-light-1[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-light-1:hover,
a.u-button-style.u-hover-grey-light-1[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-light-1,
a.u-button-style:hover > .u-hover-grey-light-1[class*="u-border-"],
a.u-button-style.u-hover-grey-light-1:focus,
a.u-button-style.u-hover-grey-light-1[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-light-1:active,
a.u-button-style.u-button-style.u-active-grey-light-1[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-light-1.active,
a.u-button-style.u-button-style.u-active-grey-light-1[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-light-1,
a.u-button-style.u-button-style.active > .u-active-grey-light-1[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-light-1,
li.active > a.u-button-style.u-button-style.u-active-grey-light-1[class*="u-border-"] {
  color: #111111 !important;
  background-color: #d9d9d9 !important;
}
a.u-link.u-hover-grey-light-1:hover {
  color: #d9d9d9 !important;
}
.u-grey-light-2,
.u-body.u-grey-light-2,
.u-container-style.u-grey-light-2:before,
.u-table-alt-grey-light-2 tr:nth-child(even) {
  color: #111111;
  background-color: #eeeeee;
}
.u-button-style.u-grey-light-2,
.u-button-style.u-grey-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #eeeeee !important;
}
.u-button-style.u-grey-light-2:hover,
.u-button-style.u-grey-light-2[class*="u-border-"]:hover,
.u-button-style.u-grey-light-2:focus,
.u-button-style.u-grey-light-2[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-light-2:active,
.u-button-style.u-button-style.u-grey-light-2[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-light-2.active,
.u-button-style.u-button-style.u-grey-light-2[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-light-2,
li.active > .u-button-style.u-button-style.u-grey-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #d6d6d6 !important;
}
.u-hover-grey-light-2:hover,
.u-hover-grey-light-2[class*="u-border-"]:hover,
.u-hover-grey-light-2:focus,
.u-hover-grey-light-2[class*="u-border-"]:focus,
.u-active-grey-light-2.u-active.u-active,
.u-active-grey-light-2[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-light-2:hover,
a.u-button-style.u-hover-grey-light-2[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-light-2,
a.u-button-style:hover > .u-hover-grey-light-2[class*="u-border-"],
a.u-button-style.u-hover-grey-light-2:focus,
a.u-button-style.u-hover-grey-light-2[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-light-2:active,
a.u-button-style.u-button-style.u-active-grey-light-2[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-light-2.active,
a.u-button-style.u-button-style.u-active-grey-light-2[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-light-2,
a.u-button-style.u-button-style.active > .u-active-grey-light-2[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-light-2,
li.active > a.u-button-style.u-button-style.u-active-grey-light-2[class*="u-border-"] {
  color: #111111 !important;
  background-color: #eeeeee !important;
}
a.u-link.u-hover-grey-light-2:hover {
  color: #eeeeee !important;
}
.u-grey-light-3,
.u-body.u-grey-light-3,
.u-container-style.u-grey-light-3:before,
.u-table-alt-grey-light-3 tr:nth-child(even) {
  color: #111111;
  background-color: #f6f6f6;
}
.u-button-style.u-grey-light-3,
.u-button-style.u-grey-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f6f6f6 !important;
}
.u-button-style.u-grey-light-3:hover,
.u-button-style.u-grey-light-3[class*="u-border-"]:hover,
.u-button-style.u-grey-light-3:focus,
.u-button-style.u-grey-light-3[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-light-3:active,
.u-button-style.u-button-style.u-grey-light-3[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-light-3.active,
.u-button-style.u-button-style.u-grey-light-3[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-light-3,
li.active > .u-button-style.u-button-style.u-grey-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #dddddd !important;
}
.u-hover-grey-light-3:hover,
.u-hover-grey-light-3[class*="u-border-"]:hover,
.u-hover-grey-light-3:focus,
.u-hover-grey-light-3[class*="u-border-"]:focus,
.u-active-grey-light-3.u-active.u-active,
.u-active-grey-light-3[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-light-3:hover,
a.u-button-style.u-hover-grey-light-3[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-light-3,
a.u-button-style:hover > .u-hover-grey-light-3[class*="u-border-"],
a.u-button-style.u-hover-grey-light-3:focus,
a.u-button-style.u-hover-grey-light-3[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-light-3:active,
a.u-button-style.u-button-style.u-active-grey-light-3[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-light-3.active,
a.u-button-style.u-button-style.u-active-grey-light-3[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-light-3,
a.u-button-style.u-button-style.active > .u-active-grey-light-3[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-light-3,
li.active > a.u-button-style.u-button-style.u-active-grey-light-3[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f6f6f6 !important;
}
a.u-link.u-hover-grey-light-3:hover {
  color: #f6f6f6 !important;
}
.u-white,
.u-body.u-white,
.u-container-style.u-white:before,
.u-table-alt-white tr:nth-child(even) {
  color: #111111;
  background-color: #ffffff;
}
.u-button-style.u-white,
.u-button-style.u-white[class*="u-border-"] {
  color: #111111 !important;
  background-color: #ffffff !important;
}
.u-button-style.u-white:hover,
.u-button-style.u-white[class*="u-border-"]:hover,
.u-button-style.u-white:focus,
.u-button-style.u-white[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-white:active,
.u-button-style.u-button-style.u-white[class*="u-border-"]:active,
.u-button-style.u-button-style.u-white.active,
.u-button-style.u-button-style.u-white[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-white,
li.active > .u-button-style.u-button-style.u-white[class*="u-border-"] {
  color: #111111 !important;
  background-color: #e6e6e6 !important;
}
.u-hover-white:hover,
.u-hover-white[class*="u-border-"]:hover,
.u-hover-white:focus,
.u-hover-white[class*="u-border-"]:focus,
.u-active-white.u-active.u-active,
.u-active-white[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-white:hover,
a.u-button-style.u-hover-white[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-white,
a.u-button-style:hover > .u-hover-white[class*="u-border-"],
a.u-button-style.u-hover-white:focus,
a.u-button-style.u-hover-white[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-white:active,
a.u-button-style.u-button-style.u-active-white[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-white.active,
a.u-button-style.u-button-style.u-active-white[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-white,
a.u-button-style.u-button-style.active > .u-active-white[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-white,
li.active > a.u-button-style.u-button-style.u-active-white[class*="u-border-"] {
  color: #111111 !important;
  background-color: #ffffff !important;
}
a.u-link.u-hover-white:hover {
  color: #ffffff !important;
}
.u-black,
.u-body.u-black,
.u-container-style.u-black:before,
.u-table-alt-black tr:nth-child(even) {
  color: #ffffff;
  background-color: #000000;
}
.u-button-style.u-black,
.u-button-style.u-black[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #000000 !important;
}
.u-button-style.u-black:hover,
.u-button-style.u-black[class*="u-border-"]:hover,
.u-button-style.u-black:focus,
.u-button-style.u-black[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-black:active,
.u-button-style.u-button-style.u-black[class*="u-border-"]:active,
.u-button-style.u-button-style.u-black.active,
.u-button-style.u-button-style.u-black[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-black,
li.active > .u-button-style.u-button-style.u-black[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #000000 !important;
}
.u-hover-black:hover,
.u-hover-black[class*="u-border-"]:hover,
.u-hover-black:focus,
.u-hover-black[class*="u-border-"]:focus,
.u-active-black.u-active.u-active,
.u-active-black[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-black:hover,
a.u-button-style.u-hover-black[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-black,
a.u-button-style:hover > .u-hover-black[class*="u-border-"],
a.u-button-style.u-hover-black:focus,
a.u-button-style.u-hover-black[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-black:active,
a.u-button-style.u-button-style.u-active-black[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-black.active,
a.u-button-style.u-button-style.u-active-black[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-black,
a.u-button-style.u-button-style.active > .u-active-black[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-black,
li.active > a.u-button-style.u-button-style.u-active-black[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #000000 !important;
}
a.u-link.u-hover-black:hover {
  color: #000000 !important;
}
.u-body-color,
.u-body.u-body-color,
.u-container-style.u-body-color:before,
.u-table-alt-body-color tr:nth-child(even) {
  color: #ffffff;
  background-color: #111111;
}
.u-button-style.u-body-color,
.u-button-style.u-body-color[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #111111 !important;
}
.u-button-style.u-body-color:hover,
.u-button-style.u-body-color[class*="u-border-"]:hover,
.u-button-style.u-body-color:focus,
.u-button-style.u-body-color[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-body-color:active,
.u-button-style.u-button-style.u-body-color[class*="u-border-"]:active,
.u-button-style.u-button-style.u-body-color.active,
.u-button-style.u-button-style.u-body-color[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-body-color,
li.active > .u-button-style.u-button-style.u-body-color[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #0f0f0f !important;
}
.u-hover-body-color:hover,
.u-hover-body-color[class*="u-border-"]:hover,
.u-hover-body-color:focus,
.u-hover-body-color[class*="u-border-"]:focus,
.u-active-body-color.u-active.u-active,
.u-active-body-color[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-body-color:hover,
a.u-button-style.u-hover-body-color[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-body-color,
a.u-button-style:hover > .u-hover-body-color[class*="u-border-"],
a.u-button-style.u-hover-body-color:focus,
a.u-button-style.u-hover-body-color[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-body-color:active,
a.u-button-style.u-button-style.u-active-body-color[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-body-color.active,
a.u-button-style.u-button-style.u-active-body-color[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-body-color,
a.u-button-style.u-button-style.active > .u-active-body-color[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-body-color,
li.active > a.u-button-style.u-button-style.u-active-body-color[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #111111 !important;
}
a.u-link.u-hover-body-color:hover {
  color: #111111 !important;
}
.u-body-alt-color,
.u-body.u-body-alt-color,
.u-container-style.u-body-alt-color:before,
.u-table-alt-body-alt-color tr:nth-child(even) {
  color: #111111;
  background-color: #ffffff;
}
.u-button-style.u-body-alt-color,
.u-button-style.u-body-alt-color[class*="u-border-"] {
  color: #111111 !important;
  background-color: #ffffff !important;
}
.u-button-style.u-body-alt-color:hover,
.u-button-style.u-body-alt-color[class*="u-border-"]:hover,
.u-button-style.u-body-alt-color:focus,
.u-button-style.u-body-alt-color[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-body-alt-color:active,
.u-button-style.u-button-style.u-body-alt-color[class*="u-border-"]:active,
.u-button-style.u-button-style.u-body-alt-color.active,
.u-button-style.u-button-style.u-body-alt-color[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-body-alt-color,
li.active > .u-button-style.u-button-style.u-body-alt-color[class*="u-border-"] {
  color: #111111 !important;
  background-color: #e6e6e6 !important;
}
.u-hover-body-alt-color:hover,
.u-hover-body-alt-color[class*="u-border-"]:hover,
.u-hover-body-alt-color:focus,
.u-hover-body-alt-color[class*="u-border-"]:focus,
.u-active-body-alt-color.u-active.u-active,
.u-active-body-alt-color[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-body-alt-color:hover,
a.u-button-style.u-hover-body-alt-color[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-body-alt-color,
a.u-button-style:hover > .u-hover-body-alt-color[class*="u-border-"],
a.u-button-style.u-hover-body-alt-color:focus,
a.u-button-style.u-hover-body-alt-color[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-body-alt-color:active,
a.u-button-style.u-button-style.u-active-body-alt-color[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-body-alt-color.active,
a.u-button-style.u-button-style.u-active-body-alt-color[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-body-alt-color,
a.u-button-style.u-button-style.active > .u-active-body-alt-color[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-body-alt-color,
li.active > a.u-button-style.u-button-style.u-active-body-alt-color[class*="u-border-"] {
  color: #111111 !important;
  background-color: #ffffff !important;
}
a.u-link.u-hover-body-alt-color:hover {
  color: #ffffff !important;
}
.u-grey-25,
.u-body.u-grey-25,
.u-container-style.u-grey-25:before,
.u-table-alt-grey-25 tr:nth-child(even) {
  color: #111111;
  background-color: #c0c0c0;
}
.u-button-style.u-grey-25,
.u-button-style.u-grey-25[class*="u-border-"] {
  color: #111111 !important;
  background-color: #c0c0c0 !important;
}
.u-button-style.u-grey-25:hover,
.u-button-style.u-grey-25[class*="u-border-"]:hover,
.u-button-style.u-grey-25:focus,
.u-button-style.u-grey-25[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-25:active,
.u-button-style.u-button-style.u-grey-25[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-25.active,
.u-button-style.u-button-style.u-grey-25[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-25,
li.active > .u-button-style.u-button-style.u-grey-25[class*="u-border-"] {
  color: #111111 !important;
  background-color: #adadad !important;
}
.u-hover-grey-25:hover,
.u-hover-grey-25[class*="u-border-"]:hover,
.u-hover-grey-25:focus,
.u-hover-grey-25[class*="u-border-"]:focus,
.u-active-grey-25.u-active.u-active,
.u-active-grey-25[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-25:hover,
a.u-button-style.u-hover-grey-25[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-25,
a.u-button-style:hover > .u-hover-grey-25[class*="u-border-"],
a.u-button-style.u-hover-grey-25:focus,
a.u-button-style.u-hover-grey-25[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-25:active,
a.u-button-style.u-button-style.u-active-grey-25[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-25.active,
a.u-button-style.u-button-style.u-active-grey-25[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-25,
a.u-button-style.u-button-style.active > .u-active-grey-25[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-25,
li.active > a.u-button-style.u-button-style.u-active-grey-25[class*="u-border-"] {
  color: #111111 !important;
  background-color: #c0c0c0 !important;
}
a.u-link.u-hover-grey-25:hover {
  color: #c0c0c0 !important;
}
.u-grey-5,
.u-body.u-grey-5,
.u-container-style.u-grey-5:before,
.u-table-alt-grey-5 tr:nth-child(even) {
  color: #111111;
  background-color: #f2f2f2;
}
.u-button-style.u-grey-5,
.u-button-style.u-grey-5[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f2f2f2 !important;
}
.u-button-style.u-grey-5:hover,
.u-button-style.u-grey-5[class*="u-border-"]:hover,
.u-button-style.u-grey-5:focus,
.u-button-style.u-grey-5[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-5:active,
.u-button-style.u-button-style.u-grey-5[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-5.active,
.u-button-style.u-button-style.u-grey-5[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-5,
li.active > .u-button-style.u-button-style.u-grey-5[class*="u-border-"] {
  color: #111111 !important;
  background-color: #dadada !important;
}
.u-hover-grey-5:hover,
.u-hover-grey-5[class*="u-border-"]:hover,
.u-hover-grey-5:focus,
.u-hover-grey-5[class*="u-border-"]:focus,
.u-active-grey-5.u-active.u-active,
.u-active-grey-5[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-5:hover,
a.u-button-style.u-hover-grey-5[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-5,
a.u-button-style:hover > .u-hover-grey-5[class*="u-border-"],
a.u-button-style.u-hover-grey-5:focus,
a.u-button-style.u-hover-grey-5[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-5:active,
a.u-button-style.u-button-style.u-active-grey-5[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-5.active,
a.u-button-style.u-button-style.u-active-grey-5[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-5,
a.u-button-style.u-button-style.active > .u-active-grey-5[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-5,
li.active > a.u-button-style.u-button-style.u-active-grey-5[class*="u-border-"] {
  color: #111111 !important;
  background-color: #f2f2f2 !important;
}
a.u-link.u-hover-grey-5:hover {
  color: #f2f2f2 !important;
}
.u-grey-10,
.u-body.u-grey-10,
.u-container-style.u-grey-10:before,
.u-table-alt-grey-10 tr:nth-child(even) {
  color: #111111;
  background-color: #e5e5e5;
}
.u-button-style.u-grey-10,
.u-button-style.u-grey-10[class*="u-border-"] {
  color: #111111 !important;
  background-color: #e5e5e5 !important;
}
.u-button-style.u-grey-10:hover,
.u-button-style.u-grey-10[class*="u-border-"]:hover,
.u-button-style.u-grey-10:focus,
.u-button-style.u-grey-10[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-10:active,
.u-button-style.u-button-style.u-grey-10[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-10.active,
.u-button-style.u-button-style.u-grey-10[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-10,
li.active > .u-button-style.u-button-style.u-grey-10[class*="u-border-"] {
  color: #111111 !important;
  background-color: #cecece !important;
}
.u-hover-grey-10:hover,
.u-hover-grey-10[class*="u-border-"]:hover,
.u-hover-grey-10:focus,
.u-hover-grey-10[class*="u-border-"]:focus,
.u-active-grey-10.u-active.u-active,
.u-active-grey-10[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-10:hover,
a.u-button-style.u-hover-grey-10[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-10,
a.u-button-style:hover > .u-hover-grey-10[class*="u-border-"],
a.u-button-style.u-hover-grey-10:focus,
a.u-button-style.u-hover-grey-10[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-10:active,
a.u-button-style.u-button-style.u-active-grey-10[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-10.active,
a.u-button-style.u-button-style.u-active-grey-10[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-10,
a.u-button-style.u-button-style.active > .u-active-grey-10[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-10,
li.active > a.u-button-style.u-button-style.u-active-grey-10[class*="u-border-"] {
  color: #111111 !important;
  background-color: #e5e5e5 !important;
}
a.u-link.u-hover-grey-10:hover {
  color: #e5e5e5 !important;
}
.u-grey-15,
.u-body.u-grey-15,
.u-container-style.u-grey-15:before,
.u-table-alt-grey-15 tr:nth-child(even) {
  color: #111111;
  background-color: #d9d9d9;
}
.u-button-style.u-grey-15,
.u-button-style.u-grey-15[class*="u-border-"] {
  color: #111111 !important;
  background-color: #d9d9d9 !important;
}
.u-button-style.u-grey-15:hover,
.u-button-style.u-grey-15[class*="u-border-"]:hover,
.u-button-style.u-grey-15:focus,
.u-button-style.u-grey-15[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-15:active,
.u-button-style.u-button-style.u-grey-15[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-15.active,
.u-button-style.u-button-style.u-grey-15[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-15,
li.active > .u-button-style.u-button-style.u-grey-15[class*="u-border-"] {
  color: #111111 !important;
  background-color: #c3c3c3 !important;
}
.u-hover-grey-15:hover,
.u-hover-grey-15[class*="u-border-"]:hover,
.u-hover-grey-15:focus,
.u-hover-grey-15[class*="u-border-"]:focus,
.u-active-grey-15.u-active.u-active,
.u-active-grey-15[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-15:hover,
a.u-button-style.u-hover-grey-15[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-15,
a.u-button-style:hover > .u-hover-grey-15[class*="u-border-"],
a.u-button-style.u-hover-grey-15:focus,
a.u-button-style.u-hover-grey-15[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-15:active,
a.u-button-style.u-button-style.u-active-grey-15[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-15.active,
a.u-button-style.u-button-style.u-active-grey-15[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-15,
a.u-button-style.u-button-style.active > .u-active-grey-15[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-15,
li.active > a.u-button-style.u-button-style.u-active-grey-15[class*="u-border-"] {
  color: #111111 !important;
  background-color: #d9d9d9 !important;
}
a.u-link.u-hover-grey-15:hover {
  color: #d9d9d9 !important;
}
.u-grey-25,
.u-body.u-grey-25,
.u-container-style.u-grey-25:before,
.u-table-alt-grey-25 tr:nth-child(even) {
  color: #111111;
  background-color: #c0c0c0;
}
.u-button-style.u-grey-25,
.u-button-style.u-grey-25[class*="u-border-"] {
  color: #111111 !important;
  background-color: #c0c0c0 !important;
}
.u-button-style.u-grey-25:hover,
.u-button-style.u-grey-25[class*="u-border-"]:hover,
.u-button-style.u-grey-25:focus,
.u-button-style.u-grey-25[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-25:active,
.u-button-style.u-button-style.u-grey-25[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-25.active,
.u-button-style.u-button-style.u-grey-25[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-25,
li.active > .u-button-style.u-button-style.u-grey-25[class*="u-border-"] {
  color: #111111 !important;
  background-color: #adadad !important;
}
.u-hover-grey-25:hover,
.u-hover-grey-25[class*="u-border-"]:hover,
.u-hover-grey-25:focus,
.u-hover-grey-25[class*="u-border-"]:focus,
.u-active-grey-25.u-active.u-active,
.u-active-grey-25[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-25:hover,
a.u-button-style.u-hover-grey-25[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-25,
a.u-button-style:hover > .u-hover-grey-25[class*="u-border-"],
a.u-button-style.u-hover-grey-25:focus,
a.u-button-style.u-hover-grey-25[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-25:active,
a.u-button-style.u-button-style.u-active-grey-25[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-25.active,
a.u-button-style.u-button-style.u-active-grey-25[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-25,
a.u-button-style.u-button-style.active > .u-active-grey-25[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-25,
li.active > a.u-button-style.u-button-style.u-active-grey-25[class*="u-border-"] {
  color: #111111 !important;
  background-color: #c0c0c0 !important;
}
a.u-link.u-hover-grey-25:hover {
  color: #c0c0c0 !important;
}
.u-grey-30,
.u-body.u-grey-30,
.u-container-style.u-grey-30:before,
.u-table-alt-grey-30 tr:nth-child(even) {
  color: #ffffff;
  background-color: #b3b3b3;
}
.u-button-style.u-grey-30,
.u-button-style.u-grey-30[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #b3b3b3 !important;
}
.u-button-style.u-grey-30:hover,
.u-button-style.u-grey-30[class*="u-border-"]:hover,
.u-button-style.u-grey-30:focus,
.u-button-style.u-grey-30[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-30:active,
.u-button-style.u-button-style.u-grey-30[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-30.active,
.u-button-style.u-button-style.u-grey-30[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-30,
li.active > .u-button-style.u-button-style.u-grey-30[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #a1a1a1 !important;
}
.u-hover-grey-30:hover,
.u-hover-grey-30[class*="u-border-"]:hover,
.u-hover-grey-30:focus,
.u-hover-grey-30[class*="u-border-"]:focus,
.u-active-grey-30.u-active.u-active,
.u-active-grey-30[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-30:hover,
a.u-button-style.u-hover-grey-30[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-30,
a.u-button-style:hover > .u-hover-grey-30[class*="u-border-"],
a.u-button-style.u-hover-grey-30:focus,
a.u-button-style.u-hover-grey-30[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-30:active,
a.u-button-style.u-button-style.u-active-grey-30[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-30.active,
a.u-button-style.u-button-style.u-active-grey-30[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-30,
a.u-button-style.u-button-style.active > .u-active-grey-30[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-30,
li.active > a.u-button-style.u-button-style.u-active-grey-30[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #b3b3b3 !important;
}
a.u-link.u-hover-grey-30:hover {
  color: #b3b3b3 !important;
}
.u-grey-40,
.u-body.u-grey-40,
.u-container-style.u-grey-40:before,
.u-table-alt-grey-40 tr:nth-child(even) {
  color: #ffffff;
  background-color: #999999;
}
.u-button-style.u-grey-40,
.u-button-style.u-grey-40[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #999999 !important;
}
.u-button-style.u-grey-40:hover,
.u-button-style.u-grey-40[class*="u-border-"]:hover,
.u-button-style.u-grey-40:focus,
.u-button-style.u-grey-40[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-40:active,
.u-button-style.u-button-style.u-grey-40[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-40.active,
.u-button-style.u-button-style.u-grey-40[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-40,
li.active > .u-button-style.u-button-style.u-grey-40[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #8a8a8a !important;
}
.u-hover-grey-40:hover,
.u-hover-grey-40[class*="u-border-"]:hover,
.u-hover-grey-40:focus,
.u-hover-grey-40[class*="u-border-"]:focus,
.u-active-grey-40.u-active.u-active,
.u-active-grey-40[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-40:hover,
a.u-button-style.u-hover-grey-40[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-40,
a.u-button-style:hover > .u-hover-grey-40[class*="u-border-"],
a.u-button-style.u-hover-grey-40:focus,
a.u-button-style.u-hover-grey-40[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-40:active,
a.u-button-style.u-button-style.u-active-grey-40[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-40.active,
a.u-button-style.u-button-style.u-active-grey-40[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-40,
a.u-button-style.u-button-style.active > .u-active-grey-40[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-40,
li.active > a.u-button-style.u-button-style.u-active-grey-40[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #999999 !important;
}
a.u-link.u-hover-grey-40:hover {
  color: #999999 !important;
}
.u-grey-50,
.u-body.u-grey-50,
.u-container-style.u-grey-50:before,
.u-table-alt-grey-50 tr:nth-child(even) {
  color: #ffffff;
  background-color: #808080;
}
.u-button-style.u-grey-50,
.u-button-style.u-grey-50[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #808080 !important;
}
.u-button-style.u-grey-50:hover,
.u-button-style.u-grey-50[class*="u-border-"]:hover,
.u-button-style.u-grey-50:focus,
.u-button-style.u-grey-50[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-50:active,
.u-button-style.u-button-style.u-grey-50[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-50.active,
.u-button-style.u-button-style.u-grey-50[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-50,
li.active > .u-button-style.u-button-style.u-grey-50[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #737373 !important;
}
.u-hover-grey-50:hover,
.u-hover-grey-50[class*="u-border-"]:hover,
.u-hover-grey-50:focus,
.u-hover-grey-50[class*="u-border-"]:focus,
.u-active-grey-50.u-active.u-active,
.u-active-grey-50[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-50:hover,
a.u-button-style.u-hover-grey-50[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-50,
a.u-button-style:hover > .u-hover-grey-50[class*="u-border-"],
a.u-button-style.u-hover-grey-50:focus,
a.u-button-style.u-hover-grey-50[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-50:active,
a.u-button-style.u-button-style.u-active-grey-50[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-50.active,
a.u-button-style.u-button-style.u-active-grey-50[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-50,
a.u-button-style.u-button-style.active > .u-active-grey-50[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-50,
li.active > a.u-button-style.u-button-style.u-active-grey-50[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #808080 !important;
}
a.u-link.u-hover-grey-50:hover {
  color: #808080 !important;
}
.u-grey-60,
.u-body.u-grey-60,
.u-container-style.u-grey-60:before,
.u-table-alt-grey-60 tr:nth-child(even) {
  color: #ffffff;
  background-color: #666666;
}
.u-button-style.u-grey-60,
.u-button-style.u-grey-60[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #666666 !important;
}
.u-button-style.u-grey-60:hover,
.u-button-style.u-grey-60[class*="u-border-"]:hover,
.u-button-style.u-grey-60:focus,
.u-button-style.u-grey-60[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-60:active,
.u-button-style.u-button-style.u-grey-60[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-60.active,
.u-button-style.u-button-style.u-grey-60[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-60,
li.active > .u-button-style.u-button-style.u-grey-60[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #5c5c5c !important;
}
.u-hover-grey-60:hover,
.u-hover-grey-60[class*="u-border-"]:hover,
.u-hover-grey-60:focus,
.u-hover-grey-60[class*="u-border-"]:focus,
.u-active-grey-60.u-active.u-active,
.u-active-grey-60[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-60:hover,
a.u-button-style.u-hover-grey-60[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-60,
a.u-button-style:hover > .u-hover-grey-60[class*="u-border-"],
a.u-button-style.u-hover-grey-60:focus,
a.u-button-style.u-hover-grey-60[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-60:active,
a.u-button-style.u-button-style.u-active-grey-60[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-60.active,
a.u-button-style.u-button-style.u-active-grey-60[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-60,
a.u-button-style.u-button-style.active > .u-active-grey-60[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-60,
li.active > a.u-button-style.u-button-style.u-active-grey-60[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #666666 !important;
}
a.u-link.u-hover-grey-60:hover {
  color: #666666 !important;
}
.u-grey-70,
.u-body.u-grey-70,
.u-container-style.u-grey-70:before,
.u-table-alt-grey-70 tr:nth-child(even) {
  color: #ffffff;
  background-color: #4d4d4d;
}
.u-button-style.u-grey-70,
.u-button-style.u-grey-70[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #4d4d4d !important;
}
.u-button-style.u-grey-70:hover,
.u-button-style.u-grey-70[class*="u-border-"]:hover,
.u-button-style.u-grey-70:focus,
.u-button-style.u-grey-70[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-70:active,
.u-button-style.u-button-style.u-grey-70[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-70.active,
.u-button-style.u-button-style.u-grey-70[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-70,
li.active > .u-button-style.u-button-style.u-grey-70[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #454545 !important;
}
.u-hover-grey-70:hover,
.u-hover-grey-70[class*="u-border-"]:hover,
.u-hover-grey-70:focus,
.u-hover-grey-70[class*="u-border-"]:focus,
.u-active-grey-70.u-active.u-active,
.u-active-grey-70[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-70:hover,
a.u-button-style.u-hover-grey-70[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-70,
a.u-button-style:hover > .u-hover-grey-70[class*="u-border-"],
a.u-button-style.u-hover-grey-70:focus,
a.u-button-style.u-hover-grey-70[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-70:active,
a.u-button-style.u-button-style.u-active-grey-70[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-70.active,
a.u-button-style.u-button-style.u-active-grey-70[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-70,
a.u-button-style.u-button-style.active > .u-active-grey-70[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-70,
li.active > a.u-button-style.u-button-style.u-active-grey-70[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #4d4d4d !important;
}
a.u-link.u-hover-grey-70:hover {
  color: #4d4d4d !important;
}
.u-grey-75,
.u-body.u-grey-75,
.u-container-style.u-grey-75:before,
.u-table-alt-grey-75 tr:nth-child(even) {
  color: #ffffff;
  background-color: #404040;
}
.u-button-style.u-grey-75,
.u-button-style.u-grey-75[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #404040 !important;
}
.u-button-style.u-grey-75:hover,
.u-button-style.u-grey-75[class*="u-border-"]:hover,
.u-button-style.u-grey-75:focus,
.u-button-style.u-grey-75[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-75:active,
.u-button-style.u-button-style.u-grey-75[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-75.active,
.u-button-style.u-button-style.u-grey-75[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-75,
li.active > .u-button-style.u-button-style.u-grey-75[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #3a3a3a !important;
}
.u-hover-grey-75:hover,
.u-hover-grey-75[class*="u-border-"]:hover,
.u-hover-grey-75:focus,
.u-hover-grey-75[class*="u-border-"]:focus,
.u-active-grey-75.u-active.u-active,
.u-active-grey-75[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-75:hover,
a.u-button-style.u-hover-grey-75[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-75,
a.u-button-style:hover > .u-hover-grey-75[class*="u-border-"],
a.u-button-style.u-hover-grey-75:focus,
a.u-button-style.u-hover-grey-75[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-75:active,
a.u-button-style.u-button-style.u-active-grey-75[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-75.active,
a.u-button-style.u-button-style.u-active-grey-75[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-75,
a.u-button-style.u-button-style.active > .u-active-grey-75[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-75,
li.active > a.u-button-style.u-button-style.u-active-grey-75[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #404040 !important;
}
a.u-link.u-hover-grey-75:hover {
  color: #404040 !important;
}
.u-grey-80,
.u-body.u-grey-80,
.u-container-style.u-grey-80:before,
.u-table-alt-grey-80 tr:nth-child(even) {
  color: #ffffff;
  background-color: #333333;
}
.u-button-style.u-grey-80,
.u-button-style.u-grey-80[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #333333 !important;
}
.u-button-style.u-grey-80:hover,
.u-button-style.u-grey-80[class*="u-border-"]:hover,
.u-button-style.u-grey-80:focus,
.u-button-style.u-grey-80[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-80:active,
.u-button-style.u-button-style.u-grey-80[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-80.active,
.u-button-style.u-button-style.u-grey-80[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-80,
li.active > .u-button-style.u-button-style.u-grey-80[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #2e2e2e !important;
}
.u-hover-grey-80:hover,
.u-hover-grey-80[class*="u-border-"]:hover,
.u-hover-grey-80:focus,
.u-hover-grey-80[class*="u-border-"]:focus,
.u-active-grey-80.u-active.u-active,
.u-active-grey-80[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-80:hover,
a.u-button-style.u-hover-grey-80[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-80,
a.u-button-style:hover > .u-hover-grey-80[class*="u-border-"],
a.u-button-style.u-hover-grey-80:focus,
a.u-button-style.u-hover-grey-80[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-80:active,
a.u-button-style.u-button-style.u-active-grey-80[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-80.active,
a.u-button-style.u-button-style.u-active-grey-80[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-80,
a.u-button-style.u-button-style.active > .u-active-grey-80[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-80,
li.active > a.u-button-style.u-button-style.u-active-grey-80[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #333333 !important;
}
a.u-link.u-hover-grey-80:hover {
  color: #333333 !important;
}
.u-grey-90,
.u-body.u-grey-90,
.u-container-style.u-grey-90:before,
.u-table-alt-grey-90 tr:nth-child(even) {
  color: #ffffff;
  background-color: #1a1a1a;
}
.u-button-style.u-grey-90,
.u-button-style.u-grey-90[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #1a1a1a !important;
}
.u-button-style.u-grey-90:hover,
.u-button-style.u-grey-90[class*="u-border-"]:hover,
.u-button-style.u-grey-90:focus,
.u-button-style.u-grey-90[class*="u-border-"]:focus,
.u-button-style.u-button-style.u-grey-90:active,
.u-button-style.u-button-style.u-grey-90[class*="u-border-"]:active,
.u-button-style.u-button-style.u-grey-90.active,
.u-button-style.u-button-style.u-grey-90[class*="u-border-"].active,
li.active > .u-button-style.u-button-style.u-grey-90,
li.active > .u-button-style.u-button-style.u-grey-90[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #171717 !important;
}
.u-hover-grey-90:hover,
.u-hover-grey-90[class*="u-border-"]:hover,
.u-hover-grey-90:focus,
.u-hover-grey-90[class*="u-border-"]:focus,
.u-active-grey-90.u-active.u-active,
.u-active-grey-90[class*="u-border-"].u-active.u-active,
a.u-button-style.u-hover-grey-90:hover,
a.u-button-style.u-hover-grey-90[class*="u-border-"]:hover,
a.u-button-style:hover > .u-hover-grey-90,
a.u-button-style:hover > .u-hover-grey-90[class*="u-border-"],
a.u-button-style.u-hover-grey-90:focus,
a.u-button-style.u-hover-grey-90[class*="u-border-"]:focus,
a.u-button-style.u-button-style.u-active-grey-90:active,
a.u-button-style.u-button-style.u-active-grey-90[class*="u-border-"]:active,
a.u-button-style.u-button-style.u-active-grey-90.active,
a.u-button-style.u-button-style.u-active-grey-90[class*="u-border-"].active,
a.u-button-style.u-button-style.active > .u-active-grey-90,
a.u-button-style.u-button-style.active > .u-active-grey-90[class*="u-border-"],
li.active > a.u-button-style.u-button-style.u-active-grey-90,
li.active > a.u-button-style.u-button-style.u-active-grey-90[class*="u-border-"] {
  color: #ffffff !important;
  background-color: #1a1a1a !important;
}
a.u-link.u-hover-grey-90:hover {
  color: #1a1a1a !important;
}
.u-border-color-1-dark-3,
.u-separator-color-1-dark-3:after {
  border-color: #292e33;
  stroke: #292e33;
}
.u-button-style.u-border-color-1-dark-3 {
  border-color: #292e33 !important;
  color: #292e33 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-1-dark-3:hover,
.u-button-style.u-border-color-1-dark-3:focus {
  border-color: transparent !important;
  color: #25292e !important;
  background-color: transparent !important;
}
.u-border-hover-color-1-dark-3:hover,
.u-border-hover-color-1-dark-3:focus,
.u-border-active-color-1-dark-3.u-active.u-active,
a.u-button-style.u-border-hover-color-1-dark-3:hover,
a.u-button-style:hover > .u-border-hover-color-1-dark-3,
a.u-button-style.u-border-hover-color-1-dark-3:focus,
a.u-button-style.u-button-style.u-border-active-color-1-dark-3:active,
a.u-button-style.u-button-style.u-border-active-color-1-dark-3.active,
a.u-button-style.u-button-style.active > .u-border-active-color-1-dark-3,
li.active > a.u-button-style.u-button-style.u-border-active-color-1-dark-3 {
  color: #292e33 !important;
  border-color: #292e33 !important;
}
.u-link.u-border-color-1-dark-3[class*="u-border-"] {
  border-color: #292e33 !important;
}
.u-link.u-border-color-1-dark-3[class*="u-border-"]:hover {
  border-color: #25292e !important;
}
.u-border-color-1-dark-2,
.u-separator-color-1-dark-2:after {
  border-color: #425465;
  stroke: #425465;
}
.u-button-style.u-border-color-1-dark-2 {
  border-color: #425465 !important;
  color: #425465 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-1-dark-2:hover,
.u-button-style.u-border-color-1-dark-2:focus {
  border-color: transparent !important;
  color: #3b4c5b !important;
  background-color: transparent !important;
}
.u-border-hover-color-1-dark-2:hover,
.u-border-hover-color-1-dark-2:focus,
.u-border-active-color-1-dark-2.u-active.u-active,
a.u-button-style.u-border-hover-color-1-dark-2:hover,
a.u-button-style:hover > .u-border-hover-color-1-dark-2,
a.u-button-style.u-border-hover-color-1-dark-2:focus,
a.u-button-style.u-button-style.u-border-active-color-1-dark-2:active,
a.u-button-style.u-button-style.u-border-active-color-1-dark-2.active,
a.u-button-style.u-button-style.active > .u-border-active-color-1-dark-2,
li.active > a.u-button-style.u-button-style.u-border-active-color-1-dark-2 {
  color: #425465 !important;
  border-color: #425465 !important;
}
.u-link.u-border-color-1-dark-2[class*="u-border-"] {
  border-color: #425465 !important;
}
.u-link.u-border-color-1-dark-2[class*="u-border-"]:hover {
  border-color: #3b4c5b !important;
}
.u-border-color-1-dark-1,
.u-separator-color-1-dark-1:after {
  border-color: #4c7397;
  stroke: #4c7397;
}
.u-button-style.u-border-color-1-dark-1 {
  border-color: #4c7397 !important;
  color: #4c7397 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-1-dark-1:hover,
.u-button-style.u-border-color-1-dark-1:focus {
  border-color: transparent !important;
  color: #446888 !important;
  background-color: transparent !important;
}
.u-border-hover-color-1-dark-1:hover,
.u-border-hover-color-1-dark-1:focus,
.u-border-active-color-1-dark-1.u-active.u-active,
a.u-button-style.u-border-hover-color-1-dark-1:hover,
a.u-button-style:hover > .u-border-hover-color-1-dark-1,
a.u-button-style.u-border-hover-color-1-dark-1:focus,
a.u-button-style.u-button-style.u-border-active-color-1-dark-1:active,
a.u-button-style.u-button-style.u-border-active-color-1-dark-1.active,
a.u-button-style.u-button-style.active > .u-border-active-color-1-dark-1,
li.active > a.u-button-style.u-button-style.u-border-active-color-1-dark-1 {
  color: #4c7397 !important;
  border-color: #4c7397 !important;
}
.u-link.u-border-color-1-dark-1[class*="u-border-"] {
  border-color: #4c7397 !important;
}
.u-link.u-border-color-1-dark-1[class*="u-border-"]:hover {
  border-color: #446888 !important;
}
.u-border-color-1,
.u-separator-color-1:after {
  border-color: #478ac9;
  stroke: #478ac9;
}
.u-button-style.u-border-color-1 {
  border-color: #478ac9 !important;
  color: #478ac9 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-1:hover,
.u-button-style.u-border-color-1:focus {
  border-color: transparent !important;
  color: #387cbd !important;
  background-color: transparent !important;
}
.u-border-hover-color-1:hover,
.u-border-hover-color-1:focus,
.u-border-active-color-1.u-active.u-active,
a.u-button-style.u-border-hover-color-1:hover,
a.u-button-style:hover > .u-border-hover-color-1,
a.u-button-style.u-border-hover-color-1:focus,
a.u-button-style.u-button-style.u-border-active-color-1:active,
a.u-button-style.u-button-style.u-border-active-color-1.active,
a.u-button-style.u-button-style.active > .u-border-active-color-1,
li.active > a.u-button-style.u-button-style.u-border-active-color-1 {
  color: #478ac9 !important;
  border-color: #478ac9 !important;
}
.u-link.u-border-color-1[class*="u-border-"] {
  border-color: #478ac9 !important;
}
.u-link.u-border-color-1[class*="u-border-"]:hover {
  border-color: #387cbd !important;
}
.u-border-color-1-light-1,
.u-separator-color-1-light-1:after {
  border-color: #77aad9;
  stroke: #77aad9;
}
.u-button-style.u-border-color-1-light-1 {
  border-color: #77aad9 !important;
  color: #77aad9 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-1-light-1:hover,
.u-button-style.u-border-color-1-light-1:focus {
  border-color: transparent !important;
  color: #5d9ad2 !important;
  background-color: transparent !important;
}
.u-border-hover-color-1-light-1:hover,
.u-border-hover-color-1-light-1:focus,
.u-border-active-color-1-light-1.u-active.u-active,
a.u-button-style.u-border-hover-color-1-light-1:hover,
a.u-button-style:hover > .u-border-hover-color-1-light-1,
a.u-button-style.u-border-hover-color-1-light-1:focus,
a.u-button-style.u-button-style.u-border-active-color-1-light-1:active,
a.u-button-style.u-button-style.u-border-active-color-1-light-1.active,
a.u-button-style.u-button-style.active > .u-border-active-color-1-light-1,
li.active > a.u-button-style.u-button-style.u-border-active-color-1-light-1 {
  color: #77aad9 !important;
  border-color: #77aad9 !important;
}
.u-link.u-border-color-1-light-1[class*="u-border-"] {
  border-color: #77aad9 !important;
}
.u-link.u-border-color-1-light-1[class*="u-border-"]:hover {
  border-color: #5d9ad2 !important;
}
.u-border-color-1-light-2,
.u-separator-color-1-light-2:after {
  border-color: #adcce9;
  stroke: #adcce9;
}
.u-button-style.u-border-color-1-light-2 {
  border-color: #adcce9 !important;
  color: #adcce9 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-1-light-2:hover,
.u-button-style.u-border-color-1-light-2:focus {
  border-color: transparent !important;
  color: #8db8e0 !important;
  background-color: transparent !important;
}
.u-border-hover-color-1-light-2:hover,
.u-border-hover-color-1-light-2:focus,
.u-border-active-color-1-light-2.u-active.u-active,
a.u-button-style.u-border-hover-color-1-light-2:hover,
a.u-button-style:hover > .u-border-hover-color-1-light-2,
a.u-button-style.u-border-hover-color-1-light-2:focus,
a.u-button-style.u-button-style.u-border-active-color-1-light-2:active,
a.u-button-style.u-button-style.u-border-active-color-1-light-2.active,
a.u-button-style.u-button-style.active > .u-border-active-color-1-light-2,
li.active > a.u-button-style.u-button-style.u-border-active-color-1-light-2 {
  color: #adcce9 !important;
  border-color: #adcce9 !important;
}
.u-link.u-border-color-1-light-2[class*="u-border-"] {
  border-color: #adcce9 !important;
}
.u-link.u-border-color-1-light-2[class*="u-border-"]:hover {
  border-color: #8db8e0 !important;
}
.u-border-color-1-light-3,
.u-separator-color-1-light-3:after {
  border-color: #e9f2fa;
  stroke: #e9f2fa;
}
.u-button-style.u-border-color-1-light-3 {
  border-color: #e9f2fa !important;
  color: #e9f2fa !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-1-light-3:hover,
.u-button-style.u-border-color-1-light-3:focus {
  border-color: transparent !important;
  color: #c2dbf1 !important;
  background-color: transparent !important;
}
.u-border-hover-color-1-light-3:hover,
.u-border-hover-color-1-light-3:focus,
.u-border-active-color-1-light-3.u-active.u-active,
a.u-button-style.u-border-hover-color-1-light-3:hover,
a.u-button-style:hover > .u-border-hover-color-1-light-3,
a.u-button-style.u-border-hover-color-1-light-3:focus,
a.u-button-style.u-button-style.u-border-active-color-1-light-3:active,
a.u-button-style.u-button-style.u-border-active-color-1-light-3.active,
a.u-button-style.u-button-style.active > .u-border-active-color-1-light-3,
li.active > a.u-button-style.u-button-style.u-border-active-color-1-light-3 {
  color: #e9f2fa !important;
  border-color: #e9f2fa !important;
}
.u-link.u-border-color-1-light-3[class*="u-border-"] {
  border-color: #e9f2fa !important;
}
.u-link.u-border-color-1-light-3[class*="u-border-"]:hover {
  border-color: #c2dbf1 !important;
}
.u-border-color-1-base,
.u-separator-color-1-base:after {
  border-color: #478ac9;
  stroke: #478ac9;
}
.u-button-style.u-border-color-1-base {
  border-color: #478ac9 !important;
  color: #478ac9 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-1-base:hover,
.u-button-style.u-border-color-1-base:focus {
  border-color: transparent !important;
  color: #387cbd !important;
  background-color: transparent !important;
}
.u-border-hover-color-1-base:hover,
.u-border-hover-color-1-base:focus,
.u-border-active-color-1-base.u-active.u-active,
a.u-button-style.u-border-hover-color-1-base:hover,
a.u-button-style:hover > .u-border-hover-color-1-base,
a.u-button-style.u-border-hover-color-1-base:focus,
a.u-button-style.u-button-style.u-border-active-color-1-base:active,
a.u-button-style.u-button-style.u-border-active-color-1-base.active,
a.u-button-style.u-button-style.active > .u-border-active-color-1-base,
li.active > a.u-button-style.u-button-style.u-border-active-color-1-base {
  color: #478ac9 !important;
  border-color: #478ac9 !important;
}
.u-link.u-border-color-1-base[class*="u-border-"] {
  border-color: #478ac9 !important;
}
.u-link.u-border-color-1-base[class*="u-border-"]:hover {
  border-color: #387cbd !important;
}
.u-border-color-2-dark-3,
.u-separator-color-2-dark-3:after {
  border-color: #332929;
  stroke: #332929;
}
.u-button-style.u-border-color-2-dark-3 {
  border-color: #332929 !important;
  color: #332929 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-2-dark-3:hover,
.u-button-style.u-border-color-2-dark-3:focus {
  border-color: transparent !important;
  color: #2e2525 !important;
  background-color: transparent !important;
}
.u-border-hover-color-2-dark-3:hover,
.u-border-hover-color-2-dark-3:focus,
.u-border-active-color-2-dark-3.u-active.u-active,
a.u-button-style.u-border-hover-color-2-dark-3:hover,
a.u-button-style:hover > .u-border-hover-color-2-dark-3,
a.u-button-style.u-border-hover-color-2-dark-3:focus,
a.u-button-style.u-button-style.u-border-active-color-2-dark-3:active,
a.u-button-style.u-button-style.u-border-active-color-2-dark-3.active,
a.u-button-style.u-button-style.active > .u-border-active-color-2-dark-3,
li.active > a.u-button-style.u-button-style.u-border-active-color-2-dark-3 {
  color: #332929 !important;
  border-color: #332929 !important;
}
.u-link.u-border-color-2-dark-3[class*="u-border-"] {
  border-color: #332929 !important;
}
.u-link.u-border-color-2-dark-3[class*="u-border-"]:hover {
  border-color: #2e2525 !important;
}
.u-border-color-2-dark-2,
.u-separator-color-2-dark-2:after {
  border-color: #6b4748;
  stroke: #6b4748;
}
.u-button-style.u-border-color-2-dark-2 {
  border-color: #6b4748 !important;
  color: #6b4748 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-2-dark-2:hover,
.u-button-style.u-border-color-2-dark-2:focus {
  border-color: transparent !important;
  color: #604041 !important;
  background-color: transparent !important;
}
.u-border-hover-color-2-dark-2:hover,
.u-border-hover-color-2-dark-2:focus,
.u-border-active-color-2-dark-2.u-active.u-active,
a.u-button-style.u-border-hover-color-2-dark-2:hover,
a.u-button-style:hover > .u-border-hover-color-2-dark-2,
a.u-button-style.u-border-hover-color-2-dark-2:focus,
a.u-button-style.u-button-style.u-border-active-color-2-dark-2:active,
a.u-button-style.u-button-style.u-border-active-color-2-dark-2.active,
a.u-button-style.u-button-style.active > .u-border-active-color-2-dark-2,
li.active > a.u-button-style.u-button-style.u-border-active-color-2-dark-2 {
  color: #6b4748 !important;
  border-color: #6b4748 !important;
}
.u-link.u-border-color-2-dark-2[class*="u-border-"] {
  border-color: #6b4748 !important;
}
.u-link.u-border-color-2-dark-2[class*="u-border-"]:hover {
  border-color: #604041 !important;
}
.u-border-color-2-dark-1,
.u-separator-color-2-dark-1:after {
  border-color: #a35559;
  stroke: #a35559;
}
.u-button-style.u-border-color-2-dark-1 {
  border-color: #a35559 !important;
  color: #a35559 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-2-dark-1:hover,
.u-button-style.u-border-color-2-dark-1:focus {
  border-color: transparent !important;
  color: #934c50 !important;
  background-color: transparent !important;
}
.u-border-hover-color-2-dark-1:hover,
.u-border-hover-color-2-dark-1:focus,
.u-border-active-color-2-dark-1.u-active.u-active,
a.u-button-style.u-border-hover-color-2-dark-1:hover,
a.u-button-style:hover > .u-border-hover-color-2-dark-1,
a.u-button-style.u-border-hover-color-2-dark-1:focus,
a.u-button-style.u-button-style.u-border-active-color-2-dark-1:active,
a.u-button-style.u-button-style.u-border-active-color-2-dark-1.active,
a.u-button-style.u-button-style.active > .u-border-active-color-2-dark-1,
li.active > a.u-button-style.u-button-style.u-border-active-color-2-dark-1 {
  color: #a35559 !important;
  border-color: #a35559 !important;
}
.u-link.u-border-color-2-dark-1[class*="u-border-"] {
  border-color: #a35559 !important;
}
.u-link.u-border-color-2-dark-1[class*="u-border-"]:hover {
  border-color: #934c50 !important;
}
.u-border-color-2,
.u-separator-color-2:after {
  border-color: #db545a;
  stroke: #db545a;
}
.u-button-style.u-border-color-2 {
  border-color: #db545a !important;
  color: #db545a !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-2:hover,
.u-button-style.u-border-color-2:focus {
  border-color: transparent !important;
  color: #d63b42 !important;
  background-color: transparent !important;
}
.u-border-hover-color-2:hover,
.u-border-hover-color-2:focus,
.u-border-active-color-2.u-active.u-active,
a.u-button-style.u-border-hover-color-2:hover,
a.u-button-style:hover > .u-border-hover-color-2,
a.u-button-style.u-border-hover-color-2:focus,
a.u-button-style.u-button-style.u-border-active-color-2:active,
a.u-button-style.u-button-style.u-border-active-color-2.active,
a.u-button-style.u-button-style.active > .u-border-active-color-2,
li.active > a.u-button-style.u-button-style.u-border-active-color-2 {
  color: #db545a !important;
  border-color: #db545a !important;
}
.u-link.u-border-color-2[class*="u-border-"] {
  border-color: #db545a !important;
}
.u-link.u-border-color-2[class*="u-border-"]:hover {
  border-color: #d63b42 !important;
}
.u-border-color-2-light-1,
.u-separator-color-2-light-1:after {
  border-color: #e68387;
  stroke: #e68387;
}
.u-button-style.u-border-color-2-light-1 {
  border-color: #e68387 !important;
  color: #e68387 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-2-light-1:hover,
.u-button-style.u-border-color-2-light-1:focus {
  border-color: transparent !important;
  color: #e0656a !important;
  background-color: transparent !important;
}
.u-border-hover-color-2-light-1:hover,
.u-border-hover-color-2-light-1:focus,
.u-border-active-color-2-light-1.u-active.u-active,
a.u-button-style.u-border-hover-color-2-light-1:hover,
a.u-button-style:hover > .u-border-hover-color-2-light-1,
a.u-button-style.u-border-hover-color-2-light-1:focus,
a.u-button-style.u-button-style.u-border-active-color-2-light-1:active,
a.u-button-style.u-button-style.u-border-active-color-2-light-1.active,
a.u-button-style.u-button-style.active > .u-border-active-color-2-light-1,
li.active > a.u-button-style.u-button-style.u-border-active-color-2-light-1 {
  color: #e68387 !important;
  border-color: #e68387 !important;
}
.u-link.u-border-color-2-light-1[class*="u-border-"] {
  border-color: #e68387 !important;
}
.u-link.u-border-color-2-light-1[class*="u-border-"]:hover {
  border-color: #e0656a !important;
}
.u-border-color-2-light-2,
.u-separator-color-2-light-2:after {
  border-color: #f1b5b8;
  stroke: #f1b5b8;
}
.u-button-style.u-border-color-2-light-2 {
  border-color: #f1b5b8 !important;
  color: #f1b5b8 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-2-light-2:hover,
.u-button-style.u-border-color-2-light-2:focus {
  border-color: transparent !important;
  color: #ea9296 !important;
  background-color: transparent !important;
}
.u-border-hover-color-2-light-2:hover,
.u-border-hover-color-2-light-2:focus,
.u-border-active-color-2-light-2.u-active.u-active,
a.u-button-style.u-border-hover-color-2-light-2:hover,
a.u-button-style:hover > .u-border-hover-color-2-light-2,
a.u-button-style.u-border-hover-color-2-light-2:focus,
a.u-button-style.u-button-style.u-border-active-color-2-light-2:active,
a.u-button-style.u-button-style.u-border-active-color-2-light-2.active,
a.u-button-style.u-button-style.active > .u-border-active-color-2-light-2,
li.active > a.u-button-style.u-button-style.u-border-active-color-2-light-2 {
  color: #f1b5b8 !important;
  border-color: #f1b5b8 !important;
}
.u-link.u-border-color-2-light-2[class*="u-border-"] {
  border-color: #f1b5b8 !important;
}
.u-link.u-border-color-2-light-2[class*="u-border-"]:hover {
  border-color: #ea9296 !important;
}
.u-border-color-2-light-3,
.u-separator-color-2-light-3:after {
  border-color: #fbeced;
  stroke: #fbeced;
}
.u-button-style.u-border-color-2-light-3 {
  border-color: #fbeced !important;
  color: #fbeced !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-2-light-3:hover,
.u-button-style.u-border-color-2-light-3:focus {
  border-color: transparent !important;
  color: #f3c4c7 !important;
  background-color: transparent !important;
}
.u-border-hover-color-2-light-3:hover,
.u-border-hover-color-2-light-3:focus,
.u-border-active-color-2-light-3.u-active.u-active,
a.u-button-style.u-border-hover-color-2-light-3:hover,
a.u-button-style:hover > .u-border-hover-color-2-light-3,
a.u-button-style.u-border-hover-color-2-light-3:focus,
a.u-button-style.u-button-style.u-border-active-color-2-light-3:active,
a.u-button-style.u-button-style.u-border-active-color-2-light-3.active,
a.u-button-style.u-button-style.active > .u-border-active-color-2-light-3,
li.active > a.u-button-style.u-button-style.u-border-active-color-2-light-3 {
  color: #fbeced !important;
  border-color: #fbeced !important;
}
.u-link.u-border-color-2-light-3[class*="u-border-"] {
  border-color: #fbeced !important;
}
.u-link.u-border-color-2-light-3[class*="u-border-"]:hover {
  border-color: #f3c4c7 !important;
}
.u-border-color-2-base,
.u-separator-color-2-base:after {
  border-color: #db545a;
  stroke: #db545a;
}
.u-button-style.u-border-color-2-base {
  border-color: #db545a !important;
  color: #db545a !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-2-base:hover,
.u-button-style.u-border-color-2-base:focus {
  border-color: transparent !important;
  color: #d63b42 !important;
  background-color: transparent !important;
}
.u-border-hover-color-2-base:hover,
.u-border-hover-color-2-base:focus,
.u-border-active-color-2-base.u-active.u-active,
a.u-button-style.u-border-hover-color-2-base:hover,
a.u-button-style:hover > .u-border-hover-color-2-base,
a.u-button-style.u-border-hover-color-2-base:focus,
a.u-button-style.u-button-style.u-border-active-color-2-base:active,
a.u-button-style.u-button-style.u-border-active-color-2-base.active,
a.u-button-style.u-button-style.active > .u-border-active-color-2-base,
li.active > a.u-button-style.u-button-style.u-border-active-color-2-base {
  color: #db545a !important;
  border-color: #db545a !important;
}
.u-link.u-border-color-2-base[class*="u-border-"] {
  border-color: #db545a !important;
}
.u-link.u-border-color-2-base[class*="u-border-"]:hover {
  border-color: #d63b42 !important;
}
.u-border-color-3-dark-3,
.u-separator-color-3-dark-3:after {
  border-color: #333129;
  stroke: #333129;
}
.u-button-style.u-border-color-3-dark-3 {
  border-color: #333129 !important;
  color: #333129 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-3-dark-3:hover,
.u-button-style.u-border-color-3-dark-3:focus {
  border-color: transparent !important;
  color: #2e2c25 !important;
  background-color: transparent !important;
}
.u-border-hover-color-3-dark-3:hover,
.u-border-hover-color-3-dark-3:focus,
.u-border-active-color-3-dark-3.u-active.u-active,
a.u-button-style.u-border-hover-color-3-dark-3:hover,
a.u-button-style:hover > .u-border-hover-color-3-dark-3,
a.u-button-style.u-border-hover-color-3-dark-3:focus,
a.u-button-style.u-button-style.u-border-active-color-3-dark-3:active,
a.u-button-style.u-button-style.u-border-active-color-3-dark-3.active,
a.u-button-style.u-button-style.active > .u-border-active-color-3-dark-3,
li.active > a.u-button-style.u-button-style.u-border-active-color-3-dark-3 {
  color: #333129 !important;
  border-color: #333129 !important;
}
.u-link.u-border-color-3-dark-3[class*="u-border-"] {
  border-color: #333129 !important;
}
.u-link.u-border-color-3-dark-3[class*="u-border-"]:hover {
  border-color: #2e2c25 !important;
}
.u-border-color-3-dark-2,
.u-separator-color-3-dark-2:after {
  border-color: #72683f;
  stroke: #72683f;
}
.u-button-style.u-border-color-3-dark-2 {
  border-color: #72683f !important;
  color: #72683f !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-3-dark-2:hover,
.u-button-style.u-border-color-3-dark-2:focus {
  border-color: transparent !important;
  color: #675e39 !important;
  background-color: transparent !important;
}
.u-border-hover-color-3-dark-2:hover,
.u-border-hover-color-3-dark-2:focus,
.u-border-active-color-3-dark-2.u-active.u-active,
a.u-button-style.u-border-hover-color-3-dark-2:hover,
a.u-button-style:hover > .u-border-hover-color-3-dark-2,
a.u-button-style.u-border-hover-color-3-dark-2:focus,
a.u-button-style.u-button-style.u-border-active-color-3-dark-2:active,
a.u-button-style.u-button-style.u-border-active-color-3-dark-2.active,
a.u-button-style.u-button-style.active > .u-border-active-color-3-dark-2,
li.active > a.u-button-style.u-button-style.u-border-active-color-3-dark-2 {
  color: #72683f !important;
  border-color: #72683f !important;
}
.u-link.u-border-color-3-dark-2[class*="u-border-"] {
  border-color: #72683f !important;
}
.u-link.u-border-color-3-dark-2[class*="u-border-"]:hover {
  border-color: #675e39 !important;
}
.u-border-color-3-dark-1,
.u-separator-color-3-dark-1:after {
  border-color: #b29a36;
  stroke: #b29a36;
}
.u-button-style.u-border-color-3-dark-1 {
  border-color: #b29a36 !important;
  color: #b29a36 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-3-dark-1:hover,
.u-button-style.u-border-color-3-dark-1:focus {
  border-color: transparent !important;
  color: #a08b31 !important;
  background-color: transparent !important;
}
.u-border-hover-color-3-dark-1:hover,
.u-border-hover-color-3-dark-1:focus,
.u-border-active-color-3-dark-1.u-active.u-active,
a.u-button-style.u-border-hover-color-3-dark-1:hover,
a.u-button-style:hover > .u-border-hover-color-3-dark-1,
a.u-button-style.u-border-hover-color-3-dark-1:focus,
a.u-button-style.u-button-style.u-border-active-color-3-dark-1:active,
a.u-button-style.u-button-style.u-border-active-color-3-dark-1.active,
a.u-button-style.u-button-style.active > .u-border-active-color-3-dark-1,
li.active > a.u-button-style.u-button-style.u-border-active-color-3-dark-1 {
  color: #b29a36 !important;
  border-color: #b29a36 !important;
}
.u-link.u-border-color-3-dark-1[class*="u-border-"] {
  border-color: #b29a36 !important;
}
.u-link.u-border-color-3-dark-1[class*="u-border-"]:hover {
  border-color: #a08b31 !important;
}
.u-border-color-3,
.u-separator-color-3:after {
  border-color: #f1c50e;
  stroke: #f1c50e;
}
.u-button-style.u-border-color-3 {
  border-color: #f1c50e !important;
  color: #f1c50e !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-3:hover,
.u-button-style.u-border-color-3:focus {
  border-color: transparent !important;
  color: #d9b10d !important;
  background-color: transparent !important;
}
.u-border-hover-color-3:hover,
.u-border-hover-color-3:focus,
.u-border-active-color-3.u-active.u-active,
a.u-button-style.u-border-hover-color-3:hover,
a.u-button-style:hover > .u-border-hover-color-3,
a.u-button-style.u-border-hover-color-3:focus,
a.u-button-style.u-button-style.u-border-active-color-3:active,
a.u-button-style.u-button-style.u-border-active-color-3.active,
a.u-button-style.u-button-style.active > .u-border-active-color-3,
li.active > a.u-button-style.u-button-style.u-border-active-color-3 {
  color: #f1c50e !important;
  border-color: #f1c50e !important;
}
.u-link.u-border-color-3[class*="u-border-"] {
  border-color: #f1c50e !important;
}
.u-link.u-border-color-3[class*="u-border-"]:hover {
  border-color: #d9b10d !important;
}
.u-border-color-3-light-1,
.u-separator-color-3-light-1:after {
  border-color: #f5d654;
  stroke: #f5d654;
}
.u-button-style.u-border-color-3-light-1 {
  border-color: #f5d654 !important;
  color: #f5d654 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-3-light-1:hover,
.u-button-style.u-border-color-3-light-1:focus {
  border-color: transparent !important;
  color: #f3cf35 !important;
  background-color: transparent !important;
}
.u-border-hover-color-3-light-1:hover,
.u-border-hover-color-3-light-1:focus,
.u-border-active-color-3-light-1.u-active.u-active,
a.u-button-style.u-border-hover-color-3-light-1:hover,
a.u-button-style:hover > .u-border-hover-color-3-light-1,
a.u-button-style.u-border-hover-color-3-light-1:focus,
a.u-button-style.u-button-style.u-border-active-color-3-light-1:active,
a.u-button-style.u-button-style.u-border-active-color-3-light-1.active,
a.u-button-style.u-button-style.active > .u-border-active-color-3-light-1,
li.active > a.u-button-style.u-button-style.u-border-active-color-3-light-1 {
  color: #f5d654 !important;
  border-color: #f5d654 !important;
}
.u-link.u-border-color-3-light-1[class*="u-border-"] {
  border-color: #f5d654 !important;
}
.u-link.u-border-color-3-light-1[class*="u-border-"]:hover {
  border-color: #f3cf35 !important;
}
.u-border-color-3-light-2,
.u-separator-color-3-light-2:after {
  border-color: #f9e79b;
  stroke: #f9e79b;
}
.u-button-style.u-border-color-3-light-2 {
  border-color: #f9e79b !important;
  color: #f9e79b !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-3-light-2:hover,
.u-button-style.u-border-color-3-light-2:focus {
  border-color: transparent !important;
  color: #f7de75 !important;
  background-color: transparent !important;
}
.u-border-hover-color-3-light-2:hover,
.u-border-hover-color-3-light-2:focus,
.u-border-active-color-3-light-2.u-active.u-active,
a.u-button-style.u-border-hover-color-3-light-2:hover,
a.u-button-style:hover > .u-border-hover-color-3-light-2,
a.u-button-style.u-border-hover-color-3-light-2:focus,
a.u-button-style.u-button-style.u-border-active-color-3-light-2:active,
a.u-button-style.u-button-style.u-border-active-color-3-light-2.active,
a.u-button-style.u-button-style.active > .u-border-active-color-3-light-2,
li.active > a.u-button-style.u-button-style.u-border-active-color-3-light-2 {
  color: #f9e79b !important;
  border-color: #f9e79b !important;
}
.u-link.u-border-color-3-light-2[class*="u-border-"] {
  border-color: #f9e79b !important;
}
.u-link.u-border-color-3-light-2[class*="u-border-"]:hover {
  border-color: #f7de75 !important;
}
.u-border-color-3-light-3,
.u-separator-color-3-light-3:after {
  border-color: #fef9e6;
  stroke: #fef9e6;
}
.u-button-style.u-border-color-3-light-3 {
  border-color: #fef9e6 !important;
  color: #fef9e6 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-3-light-3:hover,
.u-button-style.u-border-color-3-light-3:focus {
  border-color: transparent !important;
  color: #fceeb7 !important;
  background-color: transparent !important;
}
.u-border-hover-color-3-light-3:hover,
.u-border-hover-color-3-light-3:focus,
.u-border-active-color-3-light-3.u-active.u-active,
a.u-button-style.u-border-hover-color-3-light-3:hover,
a.u-button-style:hover > .u-border-hover-color-3-light-3,
a.u-button-style.u-border-hover-color-3-light-3:focus,
a.u-button-style.u-button-style.u-border-active-color-3-light-3:active,
a.u-button-style.u-button-style.u-border-active-color-3-light-3.active,
a.u-button-style.u-button-style.active > .u-border-active-color-3-light-3,
li.active > a.u-button-style.u-button-style.u-border-active-color-3-light-3 {
  color: #fef9e6 !important;
  border-color: #fef9e6 !important;
}
.u-link.u-border-color-3-light-3[class*="u-border-"] {
  border-color: #fef9e6 !important;
}
.u-link.u-border-color-3-light-3[class*="u-border-"]:hover {
  border-color: #fceeb7 !important;
}
.u-border-color-3-base,
.u-separator-color-3-base:after {
  border-color: #f1c50e;
  stroke: #f1c50e;
}
.u-button-style.u-border-color-3-base {
  border-color: #f1c50e !important;
  color: #f1c50e !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-3-base:hover,
.u-button-style.u-border-color-3-base:focus {
  border-color: transparent !important;
  color: #d9b10d !important;
  background-color: transparent !important;
}
.u-border-hover-color-3-base:hover,
.u-border-hover-color-3-base:focus,
.u-border-active-color-3-base.u-active.u-active,
a.u-button-style.u-border-hover-color-3-base:hover,
a.u-button-style:hover > .u-border-hover-color-3-base,
a.u-button-style.u-border-hover-color-3-base:focus,
a.u-button-style.u-button-style.u-border-active-color-3-base:active,
a.u-button-style.u-button-style.u-border-active-color-3-base.active,
a.u-button-style.u-button-style.active > .u-border-active-color-3-base,
li.active > a.u-button-style.u-button-style.u-border-active-color-3-base {
  color: #f1c50e !important;
  border-color: #f1c50e !important;
}
.u-link.u-border-color-3-base[class*="u-border-"] {
  border-color: #f1c50e !important;
}
.u-link.u-border-color-3-base[class*="u-border-"]:hover {
  border-color: #d9b10d !important;
}
.u-border-color-4-dark-3,
.u-separator-color-4-dark-3:after {
  border-color: #293332;
  stroke: #293332;
}
.u-button-style.u-border-color-4-dark-3 {
  border-color: #293332 !important;
  color: #293332 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-4-dark-3:hover,
.u-button-style.u-border-color-4-dark-3:focus {
  border-color: transparent !important;
  color: #252e2d !important;
  background-color: transparent !important;
}
.u-border-hover-color-4-dark-3:hover,
.u-border-hover-color-4-dark-3:focus,
.u-border-active-color-4-dark-3.u-active.u-active,
a.u-button-style.u-border-hover-color-4-dark-3:hover,
a.u-button-style:hover > .u-border-hover-color-4-dark-3,
a.u-button-style.u-border-hover-color-4-dark-3:focus,
a.u-button-style.u-button-style.u-border-active-color-4-dark-3:active,
a.u-button-style.u-button-style.u-border-active-color-4-dark-3.active,
a.u-button-style.u-button-style.active > .u-border-active-color-4-dark-3,
li.active > a.u-button-style.u-button-style.u-border-active-color-4-dark-3 {
  color: #293332 !important;
  border-color: #293332 !important;
}
.u-link.u-border-color-4-dark-3[class*="u-border-"] {
  border-color: #293332 !important;
}
.u-link.u-border-color-4-dark-3[class*="u-border-"]:hover {
  border-color: #252e2d !important;
}
.u-border-color-4-dark-2,
.u-separator-color-4-dark-2:after {
  border-color: #41807c;
  stroke: #41807c;
}
.u-button-style.u-border-color-4-dark-2 {
  border-color: #41807c !important;
  color: #41807c !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-4-dark-2:hover,
.u-button-style.u-border-color-4-dark-2:focus {
  border-color: transparent !important;
  color: #3a7370 !important;
  background-color: transparent !important;
}
.u-border-hover-color-4-dark-2:hover,
.u-border-hover-color-4-dark-2:focus,
.u-border-active-color-4-dark-2.u-active.u-active,
a.u-button-style.u-border-hover-color-4-dark-2:hover,
a.u-button-style:hover > .u-border-hover-color-4-dark-2,
a.u-button-style.u-border-hover-color-4-dark-2:focus,
a.u-button-style.u-button-style.u-border-active-color-4-dark-2:active,
a.u-button-style.u-button-style.u-border-active-color-4-dark-2.active,
a.u-button-style.u-button-style.active > .u-border-active-color-4-dark-2,
li.active > a.u-button-style.u-button-style.u-border-active-color-4-dark-2 {
  color: #41807c !important;
  border-color: #41807c !important;
}
.u-link.u-border-color-4-dark-2[class*="u-border-"] {
  border-color: #41807c !important;
}
.u-link.u-border-color-4-dark-2[class*="u-border-"]:hover {
  border-color: #3a7370 !important;
}
.u-border-color-4-dark-1,
.u-separator-color-4-dark-1:after {
  border-color: #2cccc4;
  stroke: #2cccc4;
}
.u-button-style.u-border-color-4-dark-1 {
  border-color: #2cccc4 !important;
  color: #2cccc4 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-4-dark-1:hover,
.u-button-style.u-border-color-4-dark-1:focus {
  border-color: transparent !important;
  color: #28b8b0 !important;
  background-color: transparent !important;
}
.u-border-hover-color-4-dark-1:hover,
.u-border-hover-color-4-dark-1:focus,
.u-border-active-color-4-dark-1.u-active.u-active,
a.u-button-style.u-border-hover-color-4-dark-1:hover,
a.u-button-style:hover > .u-border-hover-color-4-dark-1,
a.u-button-style.u-border-hover-color-4-dark-1:focus,
a.u-button-style.u-button-style.u-border-active-color-4-dark-1:active,
a.u-button-style.u-button-style.u-border-active-color-4-dark-1.active,
a.u-button-style.u-button-style.active > .u-border-active-color-4-dark-1,
li.active > a.u-button-style.u-button-style.u-border-active-color-4-dark-1 {
  color: #2cccc4 !important;
  border-color: #2cccc4 !important;
}
.u-link.u-border-color-4-dark-1[class*="u-border-"] {
  border-color: #2cccc4 !important;
}
.u-link.u-border-color-4-dark-1[class*="u-border-"]:hover {
  border-color: #28b8b0 !important;
}
.u-border-color-4,
.u-separator-color-4:after {
  border-color: #3be8e0;
  stroke: #3be8e0;
}
.u-button-style.u-border-color-4 {
  border-color: #3be8e0 !important;
  color: #3be8e0 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-4:hover,
.u-button-style.u-border-color-4:focus {
  border-color: transparent !important;
  color: #21e5dc !important;
  background-color: transparent !important;
}
.u-border-hover-color-4:hover,
.u-border-hover-color-4:focus,
.u-border-active-color-4.u-active.u-active,
a.u-button-style.u-border-hover-color-4:hover,
a.u-button-style:hover > .u-border-hover-color-4,
a.u-button-style.u-border-hover-color-4:focus,
a.u-button-style.u-button-style.u-border-active-color-4:active,
a.u-button-style.u-button-style.u-border-active-color-4.active,
a.u-button-style.u-button-style.active > .u-border-active-color-4,
li.active > a.u-button-style.u-button-style.u-border-active-color-4 {
  color: #3be8e0 !important;
  border-color: #3be8e0 !important;
}
.u-link.u-border-color-4[class*="u-border-"] {
  border-color: #3be8e0 !important;
}
.u-link.u-border-color-4[class*="u-border-"]:hover {
  border-color: #21e5dc !important;
}
.u-border-color-4-light-1,
.u-separator-color-4-light-1:after {
  border-color: #72efe9;
  stroke: #72efe9;
}
.u-button-style.u-border-color-4-light-1 {
  border-color: #72efe9 !important;
  color: #72efe9 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-4-light-1:hover,
.u-button-style.u-border-color-4-light-1:focus {
  border-color: transparent !important;
  color: #52ebe4 !important;
  background-color: transparent !important;
}
.u-border-hover-color-4-light-1:hover,
.u-border-hover-color-4-light-1:focus,
.u-border-active-color-4-light-1.u-active.u-active,
a.u-button-style.u-border-hover-color-4-light-1:hover,
a.u-button-style:hover > .u-border-hover-color-4-light-1,
a.u-button-style.u-border-hover-color-4-light-1:focus,
a.u-button-style.u-button-style.u-border-active-color-4-light-1:active,
a.u-button-style.u-button-style.u-border-active-color-4-light-1.active,
a.u-button-style.u-button-style.active > .u-border-active-color-4-light-1,
li.active > a.u-button-style.u-button-style.u-border-active-color-4-light-1 {
  color: #72efe9 !important;
  border-color: #72efe9 !important;
}
.u-link.u-border-color-4-light-1[class*="u-border-"] {
  border-color: #72efe9 !important;
}
.u-link.u-border-color-4-light-1[class*="u-border-"]:hover {
  border-color: #52ebe4 !important;
}
.u-border-color-4-light-2,
.u-separator-color-4-light-2:after {
  border-color: #adf6f2;
  stroke: #adf6f2;
}
.u-button-style.u-border-color-4-light-2 {
  border-color: #adf6f2 !important;
  color: #adf6f2 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-4-light-2:hover,
.u-button-style.u-border-color-4-light-2:focus {
  border-color: transparent !important;
  color: #87f2ec !important;
  background-color: transparent !important;
}
.u-border-hover-color-4-light-2:hover,
.u-border-hover-color-4-light-2:focus,
.u-border-active-color-4-light-2.u-active.u-active,
a.u-button-style.u-border-hover-color-4-light-2:hover,
a.u-button-style:hover > .u-border-hover-color-4-light-2,
a.u-button-style.u-border-hover-color-4-light-2:focus,
a.u-button-style.u-button-style.u-border-active-color-4-light-2:active,
a.u-button-style.u-button-style.u-border-active-color-4-light-2.active,
a.u-button-style.u-button-style.active > .u-border-active-color-4-light-2,
li.active > a.u-button-style.u-button-style.u-border-active-color-4-light-2 {
  color: #adf6f2 !important;
  border-color: #adf6f2 !important;
}
.u-link.u-border-color-4-light-2[class*="u-border-"] {
  border-color: #adf6f2 !important;
}
.u-link.u-border-color-4-light-2[class*="u-border-"]:hover {
  border-color: #87f2ec !important;
}
.u-border-color-4-light-3,
.u-separator-color-4-light-3:after {
  border-color: #eafdfc;
  stroke: #eafdfc;
}
.u-button-style.u-border-color-4-light-3 {
  border-color: #eafdfc !important;
  color: #eafdfc !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-4-light-3:hover,
.u-button-style.u-border-color-4-light-3:focus {
  border-color: transparent !important;
  color: #bef9f6 !important;
  background-color: transparent !important;
}
.u-border-hover-color-4-light-3:hover,
.u-border-hover-color-4-light-3:focus,
.u-border-active-color-4-light-3.u-active.u-active,
a.u-button-style.u-border-hover-color-4-light-3:hover,
a.u-button-style:hover > .u-border-hover-color-4-light-3,
a.u-button-style.u-border-hover-color-4-light-3:focus,
a.u-button-style.u-button-style.u-border-active-color-4-light-3:active,
a.u-button-style.u-button-style.u-border-active-color-4-light-3.active,
a.u-button-style.u-button-style.active > .u-border-active-color-4-light-3,
li.active > a.u-button-style.u-button-style.u-border-active-color-4-light-3 {
  color: #eafdfc !important;
  border-color: #eafdfc !important;
}
.u-link.u-border-color-4-light-3[class*="u-border-"] {
  border-color: #eafdfc !important;
}
.u-link.u-border-color-4-light-3[class*="u-border-"]:hover {
  border-color: #bef9f6 !important;
}
.u-border-color-4-base,
.u-separator-color-4-base:after {
  border-color: #2cccc4;
  stroke: #2cccc4;
}
.u-button-style.u-border-color-4-base {
  border-color: #2cccc4 !important;
  color: #2cccc4 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-4-base:hover,
.u-button-style.u-border-color-4-base:focus {
  border-color: transparent !important;
  color: #28b8b0 !important;
  background-color: transparent !important;
}
.u-border-hover-color-4-base:hover,
.u-border-hover-color-4-base:focus,
.u-border-active-color-4-base.u-active.u-active,
a.u-button-style.u-border-hover-color-4-base:hover,
a.u-button-style:hover > .u-border-hover-color-4-base,
a.u-button-style.u-border-hover-color-4-base:focus,
a.u-button-style.u-button-style.u-border-active-color-4-base:active,
a.u-button-style.u-button-style.u-border-active-color-4-base.active,
a.u-button-style.u-button-style.active > .u-border-active-color-4-base,
li.active > a.u-button-style.u-button-style.u-border-active-color-4-base {
  color: #2cccc4 !important;
  border-color: #2cccc4 !important;
}
.u-link.u-border-color-4-base[class*="u-border-"] {
  border-color: #2cccc4 !important;
}
.u-link.u-border-color-4-base[class*="u-border-"]:hover {
  border-color: #28b8b0 !important;
}
.u-border-color-5-dark-3,
.u-separator-color-5-dark-3:after {
  border-color: #292d33;
  stroke: #292d33;
}
.u-button-style.u-border-color-5-dark-3 {
  border-color: #292d33 !important;
  color: #292d33 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-5-dark-3:hover,
.u-button-style.u-border-color-5-dark-3:focus {
  border-color: transparent !important;
  color: #25292e !important;
  background-color: transparent !important;
}
.u-border-hover-color-5-dark-3:hover,
.u-border-hover-color-5-dark-3:focus,
.u-border-active-color-5-dark-3.u-active.u-active,
a.u-button-style.u-border-hover-color-5-dark-3:hover,
a.u-button-style:hover > .u-border-hover-color-5-dark-3,
a.u-button-style.u-border-hover-color-5-dark-3:focus,
a.u-button-style.u-button-style.u-border-active-color-5-dark-3:active,
a.u-button-style.u-button-style.u-border-active-color-5-dark-3.active,
a.u-button-style.u-button-style.active > .u-border-active-color-5-dark-3,
li.active > a.u-button-style.u-button-style.u-border-active-color-5-dark-3 {
  color: #292d33 !important;
  border-color: #292d33 !important;
}
.u-link.u-border-color-5-dark-3[class*="u-border-"] {
  border-color: #292d33 !important;
}
.u-link.u-border-color-5-dark-3[class*="u-border-"]:hover {
  border-color: #25292e !important;
}
.u-border-color-5-dark-2,
.u-separator-color-5-dark-2:after {
  border-color: #555c66;
  stroke: #555c66;
}
.u-button-style.u-border-color-5-dark-2 {
  border-color: #555c66 !important;
  color: #555c66 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-5-dark-2:hover,
.u-button-style.u-border-color-5-dark-2:focus {
  border-color: transparent !important;
  color: #4d535c !important;
  background-color: transparent !important;
}
.u-border-hover-color-5-dark-2:hover,
.u-border-hover-color-5-dark-2:focus,
.u-border-active-color-5-dark-2.u-active.u-active,
a.u-button-style.u-border-hover-color-5-dark-2:hover,
a.u-button-style:hover > .u-border-hover-color-5-dark-2,
a.u-button-style.u-border-hover-color-5-dark-2:focus,
a.u-button-style.u-button-style.u-border-active-color-5-dark-2:active,
a.u-button-style.u-button-style.u-border-active-color-5-dark-2.active,
a.u-button-style.u-button-style.active > .u-border-active-color-5-dark-2,
li.active > a.u-button-style.u-button-style.u-border-active-color-5-dark-2 {
  color: #555c66 !important;
  border-color: #555c66 !important;
}
.u-link.u-border-color-5-dark-2[class*="u-border-"] {
  border-color: #555c66 !important;
}
.u-link.u-border-color-5-dark-2[class*="u-border-"]:hover {
  border-color: #4d535c !important;
}
.u-border-color-5-dark-1,
.u-separator-color-5-dark-1:after {
  border-color: #858e99;
  stroke: #858e99;
}
.u-button-style.u-border-color-5-dark-1 {
  border-color: #858e99 !important;
  color: #858e99 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-5-dark-1:hover,
.u-button-style.u-border-color-5-dark-1:focus {
  border-color: transparent !important;
  color: #75808c !important;
  background-color: transparent !important;
}
.u-border-hover-color-5-dark-1:hover,
.u-border-hover-color-5-dark-1:focus,
.u-border-active-color-5-dark-1.u-active.u-active,
a.u-button-style.u-border-hover-color-5-dark-1:hover,
a.u-button-style:hover > .u-border-hover-color-5-dark-1,
a.u-button-style.u-border-hover-color-5-dark-1:focus,
a.u-button-style.u-button-style.u-border-active-color-5-dark-1:active,
a.u-button-style.u-button-style.u-border-active-color-5-dark-1.active,
a.u-button-style.u-button-style.active > .u-border-active-color-5-dark-1,
li.active > a.u-button-style.u-button-style.u-border-active-color-5-dark-1 {
  color: #858e99 !important;
  border-color: #858e99 !important;
}
.u-link.u-border-color-5-dark-1[class*="u-border-"] {
  border-color: #858e99 !important;
}
.u-link.u-border-color-5-dark-1[class*="u-border-"]:hover {
  border-color: #75808c !important;
}
.u-border-color-5,
.u-separator-color-5:after {
  border-color: #b9c1cc;
  stroke: #b9c1cc;
}
.u-button-style.u-border-color-5 {
  border-color: #b9c1cc !important;
  color: #b9c1cc !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-5:hover,
.u-button-style.u-border-color-5:focus {
  border-color: transparent !important;
  color: #a2adbc !important;
  background-color: transparent !important;
}
.u-border-hover-color-5:hover,
.u-border-hover-color-5:focus,
.u-border-active-color-5.u-active.u-active,
a.u-button-style.u-border-hover-color-5:hover,
a.u-button-style:hover > .u-border-hover-color-5,
a.u-button-style.u-border-hover-color-5:focus,
a.u-button-style.u-button-style.u-border-active-color-5:active,
a.u-button-style.u-button-style.u-border-active-color-5.active,
a.u-button-style.u-button-style.active > .u-border-active-color-5,
li.active > a.u-button-style.u-button-style.u-border-active-color-5 {
  color: #b9c1cc !important;
  border-color: #b9c1cc !important;
}
.u-link.u-border-color-5[class*="u-border-"] {
  border-color: #b9c1cc !important;
}
.u-link.u-border-color-5[class*="u-border-"]:hover {
  border-color: #a2adbc !important;
}
.u-border-color-5-light-1,
.u-separator-color-5-light-1:after {
  border-color: #ccd3db;
  stroke: #ccd3db;
}
.u-button-style.u-border-color-5-light-1 {
  border-color: #ccd3db !important;
  color: #ccd3db !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-5-light-1:hover,
.u-button-style.u-border-color-5-light-1:focus {
  border-color: transparent !important;
  color: #b3bec9 !important;
  background-color: transparent !important;
}
.u-border-hover-color-5-light-1:hover,
.u-border-hover-color-5-light-1:focus,
.u-border-active-color-5-light-1.u-active.u-active,
a.u-button-style.u-border-hover-color-5-light-1:hover,
a.u-button-style:hover > .u-border-hover-color-5-light-1,
a.u-button-style.u-border-hover-color-5-light-1:focus,
a.u-button-style.u-button-style.u-border-active-color-5-light-1:active,
a.u-button-style.u-button-style.u-border-active-color-5-light-1.active,
a.u-button-style.u-button-style.active > .u-border-active-color-5-light-1,
li.active > a.u-button-style.u-button-style.u-border-active-color-5-light-1 {
  color: #ccd3db !important;
  border-color: #ccd3db !important;
}
.u-link.u-border-color-5-light-1[class*="u-border-"] {
  border-color: #ccd3db !important;
}
.u-link.u-border-color-5-light-1[class*="u-border-"]:hover {
  border-color: #b3bec9 !important;
}
.u-border-color-5-light-2,
.u-separator-color-5-light-2:after {
  border-color: #e0e5eb;
  stroke: #e0e5eb;
}
.u-button-style.u-border-color-5-light-2 {
  border-color: #e0e5eb !important;
  color: #e0e5eb !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-5-light-2:hover,
.u-button-style.u-border-color-5-light-2:focus {
  border-color: transparent !important;
  color: #c4ced9 !important;
  background-color: transparent !important;
}
.u-border-hover-color-5-light-2:hover,
.u-border-hover-color-5-light-2:focus,
.u-border-active-color-5-light-2.u-active.u-active,
a.u-button-style.u-border-hover-color-5-light-2:hover,
a.u-button-style:hover > .u-border-hover-color-5-light-2,
a.u-button-style.u-border-hover-color-5-light-2:focus,
a.u-button-style.u-button-style.u-border-active-color-5-light-2:active,
a.u-button-style.u-button-style.u-border-active-color-5-light-2.active,
a.u-button-style.u-button-style.active > .u-border-active-color-5-light-2,
li.active > a.u-button-style.u-button-style.u-border-active-color-5-light-2 {
  color: #e0e5eb !important;
  border-color: #e0e5eb !important;
}
.u-link.u-border-color-5-light-2[class*="u-border-"] {
  border-color: #e0e5eb !important;
}
.u-link.u-border-color-5-light-2[class*="u-border-"]:hover {
  border-color: #c4ced9 !important;
}
.u-border-color-5-light-3,
.u-separator-color-5-light-3:after {
  border-color: #f5f7fa;
  stroke: #f5f7fa;
}
.u-button-style.u-border-color-5-light-3 {
  border-color: #f5f7fa !important;
  color: #f5f7fa !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-5-light-3:hover,
.u-button-style.u-border-color-5-light-3:focus {
  border-color: transparent !important;
  color: #d4dde9 !important;
  background-color: transparent !important;
}
.u-border-hover-color-5-light-3:hover,
.u-border-hover-color-5-light-3:focus,
.u-border-active-color-5-light-3.u-active.u-active,
a.u-button-style.u-border-hover-color-5-light-3:hover,
a.u-button-style:hover > .u-border-hover-color-5-light-3,
a.u-button-style.u-border-hover-color-5-light-3:focus,
a.u-button-style.u-button-style.u-border-active-color-5-light-3:active,
a.u-button-style.u-button-style.u-border-active-color-5-light-3.active,
a.u-button-style.u-button-style.active > .u-border-active-color-5-light-3,
li.active > a.u-button-style.u-button-style.u-border-active-color-5-light-3 {
  color: #f5f7fa !important;
  border-color: #f5f7fa !important;
}
.u-link.u-border-color-5-light-3[class*="u-border-"] {
  border-color: #f5f7fa !important;
}
.u-link.u-border-color-5-light-3[class*="u-border-"]:hover {
  border-color: #d4dde9 !important;
}
.u-border-color-5-base,
.u-separator-color-5-base:after {
  border-color: #b9c1cc;
  stroke: #b9c1cc;
}
.u-button-style.u-border-color-5-base {
  border-color: #b9c1cc !important;
  color: #b9c1cc !important;
  background-color: transparent !important;
}
.u-button-style.u-border-color-5-base:hover,
.u-button-style.u-border-color-5-base:focus {
  border-color: transparent !important;
  color: #a2adbc !important;
  background-color: transparent !important;
}
.u-border-hover-color-5-base:hover,
.u-border-hover-color-5-base:focus,
.u-border-active-color-5-base.u-active.u-active,
a.u-button-style.u-border-hover-color-5-base:hover,
a.u-button-style:hover > .u-border-hover-color-5-base,
a.u-button-style.u-border-hover-color-5-base:focus,
a.u-button-style.u-button-style.u-border-active-color-5-base:active,
a.u-button-style.u-button-style.u-border-active-color-5-base.active,
a.u-button-style.u-button-style.active > .u-border-active-color-5-base,
li.active > a.u-button-style.u-button-style.u-border-active-color-5-base {
  color: #b9c1cc !important;
  border-color: #b9c1cc !important;
}
.u-link.u-border-color-5-base[class*="u-border-"] {
  border-color: #b9c1cc !important;
}
.u-link.u-border-color-5-base[class*="u-border-"]:hover {
  border-color: #a2adbc !important;
}
.u-border-palette-1-dark-3,
.u-separator-palette-1-dark-3:after {
  border-color: #292e33;
  stroke: #292e33;
}
.u-button-style.u-border-palette-1-dark-3 {
  border-color: #292e33 !important;
  color: #292e33 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-1-dark-3:hover,
.u-button-style.u-border-palette-1-dark-3:focus {
  border-color: transparent !important;
  color: #25292e !important;
  background-color: transparent !important;
}
.u-border-hover-palette-1-dark-3:hover,
.u-border-hover-palette-1-dark-3:focus,
.u-border-active-palette-1-dark-3.u-active.u-active,
a.u-button-style.u-border-hover-palette-1-dark-3:hover,
a.u-button-style:hover > .u-border-hover-palette-1-dark-3,
a.u-button-style.u-border-hover-palette-1-dark-3:focus,
a.u-button-style.u-button-style.u-border-active-palette-1-dark-3:active,
a.u-button-style.u-button-style.u-border-active-palette-1-dark-3.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-1-dark-3,
li.active > a.u-button-style.u-button-style.u-border-active-palette-1-dark-3 {
  color: #292e33 !important;
  border-color: #292e33 !important;
}
.u-link.u-border-palette-1-dark-3[class*="u-border-"] {
  border-color: #292e33 !important;
}
.u-link.u-border-palette-1-dark-3[class*="u-border-"]:hover {
  border-color: #25292e !important;
}
.u-border-palette-1-dark-2,
.u-separator-palette-1-dark-2:after {
  border-color: #425465;
  stroke: #425465;
}
.u-button-style.u-border-palette-1-dark-2 {
  border-color: #425465 !important;
  color: #425465 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-1-dark-2:hover,
.u-button-style.u-border-palette-1-dark-2:focus {
  border-color: transparent !important;
  color: #3b4c5b !important;
  background-color: transparent !important;
}
.u-border-hover-palette-1-dark-2:hover,
.u-border-hover-palette-1-dark-2:focus,
.u-border-active-palette-1-dark-2.u-active.u-active,
a.u-button-style.u-border-hover-palette-1-dark-2:hover,
a.u-button-style:hover > .u-border-hover-palette-1-dark-2,
a.u-button-style.u-border-hover-palette-1-dark-2:focus,
a.u-button-style.u-button-style.u-border-active-palette-1-dark-2:active,
a.u-button-style.u-button-style.u-border-active-palette-1-dark-2.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-1-dark-2,
li.active > a.u-button-style.u-button-style.u-border-active-palette-1-dark-2 {
  color: #425465 !important;
  border-color: #425465 !important;
}
.u-link.u-border-palette-1-dark-2[class*="u-border-"] {
  border-color: #425465 !important;
}
.u-link.u-border-palette-1-dark-2[class*="u-border-"]:hover {
  border-color: #3b4c5b !important;
}
.u-border-palette-1-dark-1,
.u-separator-palette-1-dark-1:after {
  border-color: #4c7397;
  stroke: #4c7397;
}
.u-button-style.u-border-palette-1-dark-1 {
  border-color: #4c7397 !important;
  color: #4c7397 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-1-dark-1:hover,
.u-button-style.u-border-palette-1-dark-1:focus {
  border-color: transparent !important;
  color: #446888 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-1-dark-1:hover,
.u-border-hover-palette-1-dark-1:focus,
.u-border-active-palette-1-dark-1.u-active.u-active,
a.u-button-style.u-border-hover-palette-1-dark-1:hover,
a.u-button-style:hover > .u-border-hover-palette-1-dark-1,
a.u-button-style.u-border-hover-palette-1-dark-1:focus,
a.u-button-style.u-button-style.u-border-active-palette-1-dark-1:active,
a.u-button-style.u-button-style.u-border-active-palette-1-dark-1.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-1-dark-1,
li.active > a.u-button-style.u-button-style.u-border-active-palette-1-dark-1 {
  color: #4c7397 !important;
  border-color: #4c7397 !important;
}
.u-link.u-border-palette-1-dark-1[class*="u-border-"] {
  border-color: #4c7397 !important;
}
.u-link.u-border-palette-1-dark-1[class*="u-border-"]:hover {
  border-color: #446888 !important;
}
.u-border-palette-1,
.u-separator-palette-1:after {
  border-color: #478ac9;
  stroke: #478ac9;
}
.u-button-style.u-border-palette-1 {
  border-color: #478ac9 !important;
  color: #478ac9 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-1:hover,
.u-button-style.u-border-palette-1:focus {
  border-color: transparent !important;
  color: #387cbd !important;
  background-color: transparent !important;
}
.u-border-hover-palette-1:hover,
.u-border-hover-palette-1:focus,
.u-border-active-palette-1.u-active.u-active,
a.u-button-style.u-border-hover-palette-1:hover,
a.u-button-style:hover > .u-border-hover-palette-1,
a.u-button-style.u-border-hover-palette-1:focus,
a.u-button-style.u-button-style.u-border-active-palette-1:active,
a.u-button-style.u-button-style.u-border-active-palette-1.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-1,
li.active > a.u-button-style.u-button-style.u-border-active-palette-1 {
  color: #478ac9 !important;
  border-color: #478ac9 !important;
}
.u-link.u-border-palette-1[class*="u-border-"] {
  border-color: #478ac9 !important;
}
.u-link.u-border-palette-1[class*="u-border-"]:hover {
  border-color: #387cbd !important;
}
.u-border-palette-1-light-1,
.u-separator-palette-1-light-1:after {
  border-color: #77aad9;
  stroke: #77aad9;
}
.u-button-style.u-border-palette-1-light-1 {
  border-color: #77aad9 !important;
  color: #77aad9 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-1-light-1:hover,
.u-button-style.u-border-palette-1-light-1:focus {
  border-color: transparent !important;
  color: #5d9ad2 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-1-light-1:hover,
.u-border-hover-palette-1-light-1:focus,
.u-border-active-palette-1-light-1.u-active.u-active,
a.u-button-style.u-border-hover-palette-1-light-1:hover,
a.u-button-style:hover > .u-border-hover-palette-1-light-1,
a.u-button-style.u-border-hover-palette-1-light-1:focus,
a.u-button-style.u-button-style.u-border-active-palette-1-light-1:active,
a.u-button-style.u-button-style.u-border-active-palette-1-light-1.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-1-light-1,
li.active > a.u-button-style.u-button-style.u-border-active-palette-1-light-1 {
  color: #77aad9 !important;
  border-color: #77aad9 !important;
}
.u-link.u-border-palette-1-light-1[class*="u-border-"] {
  border-color: #77aad9 !important;
}
.u-link.u-border-palette-1-light-1[class*="u-border-"]:hover {
  border-color: #5d9ad2 !important;
}
.u-border-palette-1-light-2,
.u-separator-palette-1-light-2:after {
  border-color: #adcce9;
  stroke: #adcce9;
}
.u-button-style.u-border-palette-1-light-2 {
  border-color: #adcce9 !important;
  color: #adcce9 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-1-light-2:hover,
.u-button-style.u-border-palette-1-light-2:focus {
  border-color: transparent !important;
  color: #8db8e0 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-1-light-2:hover,
.u-border-hover-palette-1-light-2:focus,
.u-border-active-palette-1-light-2.u-active.u-active,
a.u-button-style.u-border-hover-palette-1-light-2:hover,
a.u-button-style:hover > .u-border-hover-palette-1-light-2,
a.u-button-style.u-border-hover-palette-1-light-2:focus,
a.u-button-style.u-button-style.u-border-active-palette-1-light-2:active,
a.u-button-style.u-button-style.u-border-active-palette-1-light-2.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-1-light-2,
li.active > a.u-button-style.u-button-style.u-border-active-palette-1-light-2 {
  color: #adcce9 !important;
  border-color: #adcce9 !important;
}
.u-link.u-border-palette-1-light-2[class*="u-border-"] {
  border-color: #adcce9 !important;
}
.u-link.u-border-palette-1-light-2[class*="u-border-"]:hover {
  border-color: #8db8e0 !important;
}
.u-border-palette-1-light-3,
.u-separator-palette-1-light-3:after {
  border-color: #e9f2fa;
  stroke: #e9f2fa;
}
.u-button-style.u-border-palette-1-light-3 {
  border-color: #e9f2fa !important;
  color: #e9f2fa !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-1-light-3:hover,
.u-button-style.u-border-palette-1-light-3:focus {
  border-color: transparent !important;
  color: #c2dbf1 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-1-light-3:hover,
.u-border-hover-palette-1-light-3:focus,
.u-border-active-palette-1-light-3.u-active.u-active,
a.u-button-style.u-border-hover-palette-1-light-3:hover,
a.u-button-style:hover > .u-border-hover-palette-1-light-3,
a.u-button-style.u-border-hover-palette-1-light-3:focus,
a.u-button-style.u-button-style.u-border-active-palette-1-light-3:active,
a.u-button-style.u-button-style.u-border-active-palette-1-light-3.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-1-light-3,
li.active > a.u-button-style.u-button-style.u-border-active-palette-1-light-3 {
  color: #e9f2fa !important;
  border-color: #e9f2fa !important;
}
.u-link.u-border-palette-1-light-3[class*="u-border-"] {
  border-color: #e9f2fa !important;
}
.u-link.u-border-palette-1-light-3[class*="u-border-"]:hover {
  border-color: #c2dbf1 !important;
}
.u-border-palette-1-base,
.u-separator-palette-1-base:after {
  border-color: #478ac9;
  stroke: #478ac9;
}
.u-button-style.u-border-palette-1-base {
  border-color: #478ac9 !important;
  color: #478ac9 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-1-base:hover,
.u-button-style.u-border-palette-1-base:focus {
  border-color: transparent !important;
  color: #387cbd !important;
  background-color: transparent !important;
}
.u-border-hover-palette-1-base:hover,
.u-border-hover-palette-1-base:focus,
.u-border-active-palette-1-base.u-active.u-active,
a.u-button-style.u-border-hover-palette-1-base:hover,
a.u-button-style:hover > .u-border-hover-palette-1-base,
a.u-button-style.u-border-hover-palette-1-base:focus,
a.u-button-style.u-button-style.u-border-active-palette-1-base:active,
a.u-button-style.u-button-style.u-border-active-palette-1-base.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-1-base,
li.active > a.u-button-style.u-button-style.u-border-active-palette-1-base {
  color: #478ac9 !important;
  border-color: #478ac9 !important;
}
.u-link.u-border-palette-1-base[class*="u-border-"] {
  border-color: #478ac9 !important;
}
.u-link.u-border-palette-1-base[class*="u-border-"]:hover {
  border-color: #387cbd !important;
}
.u-border-palette-2-dark-3,
.u-separator-palette-2-dark-3:after {
  border-color: #332929;
  stroke: #332929;
}
.u-button-style.u-border-palette-2-dark-3 {
  border-color: #332929 !important;
  color: #332929 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-2-dark-3:hover,
.u-button-style.u-border-palette-2-dark-3:focus {
  border-color: transparent !important;
  color: #2e2525 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-2-dark-3:hover,
.u-border-hover-palette-2-dark-3:focus,
.u-border-active-palette-2-dark-3.u-active.u-active,
a.u-button-style.u-border-hover-palette-2-dark-3:hover,
a.u-button-style:hover > .u-border-hover-palette-2-dark-3,
a.u-button-style.u-border-hover-palette-2-dark-3:focus,
a.u-button-style.u-button-style.u-border-active-palette-2-dark-3:active,
a.u-button-style.u-button-style.u-border-active-palette-2-dark-3.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-2-dark-3,
li.active > a.u-button-style.u-button-style.u-border-active-palette-2-dark-3 {
  color: #332929 !important;
  border-color: #332929 !important;
}
.u-link.u-border-palette-2-dark-3[class*="u-border-"] {
  border-color: #332929 !important;
}
.u-link.u-border-palette-2-dark-3[class*="u-border-"]:hover {
  border-color: #2e2525 !important;
}
.u-border-palette-2-dark-2,
.u-separator-palette-2-dark-2:after {
  border-color: #6b4748;
  stroke: #6b4748;
}
.u-button-style.u-border-palette-2-dark-2 {
  border-color: #6b4748 !important;
  color: #6b4748 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-2-dark-2:hover,
.u-button-style.u-border-palette-2-dark-2:focus {
  border-color: transparent !important;
  color: #604041 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-2-dark-2:hover,
.u-border-hover-palette-2-dark-2:focus,
.u-border-active-palette-2-dark-2.u-active.u-active,
a.u-button-style.u-border-hover-palette-2-dark-2:hover,
a.u-button-style:hover > .u-border-hover-palette-2-dark-2,
a.u-button-style.u-border-hover-palette-2-dark-2:focus,
a.u-button-style.u-button-style.u-border-active-palette-2-dark-2:active,
a.u-button-style.u-button-style.u-border-active-palette-2-dark-2.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-2-dark-2,
li.active > a.u-button-style.u-button-style.u-border-active-palette-2-dark-2 {
  color: #6b4748 !important;
  border-color: #6b4748 !important;
}
.u-link.u-border-palette-2-dark-2[class*="u-border-"] {
  border-color: #6b4748 !important;
}
.u-link.u-border-palette-2-dark-2[class*="u-border-"]:hover {
  border-color: #604041 !important;
}
.u-border-palette-2-dark-1,
.u-separator-palette-2-dark-1:after {
  border-color: #a35559;
  stroke: #a35559;
}
.u-button-style.u-border-palette-2-dark-1 {
  border-color: #a35559 !important;
  color: #a35559 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-2-dark-1:hover,
.u-button-style.u-border-palette-2-dark-1:focus {
  border-color: transparent !important;
  color: #934c50 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-2-dark-1:hover,
.u-border-hover-palette-2-dark-1:focus,
.u-border-active-palette-2-dark-1.u-active.u-active,
a.u-button-style.u-border-hover-palette-2-dark-1:hover,
a.u-button-style:hover > .u-border-hover-palette-2-dark-1,
a.u-button-style.u-border-hover-palette-2-dark-1:focus,
a.u-button-style.u-button-style.u-border-active-palette-2-dark-1:active,
a.u-button-style.u-button-style.u-border-active-palette-2-dark-1.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-2-dark-1,
li.active > a.u-button-style.u-button-style.u-border-active-palette-2-dark-1 {
  color: #a35559 !important;
  border-color: #a35559 !important;
}
.u-link.u-border-palette-2-dark-1[class*="u-border-"] {
  border-color: #a35559 !important;
}
.u-link.u-border-palette-2-dark-1[class*="u-border-"]:hover {
  border-color: #934c50 !important;
}
.u-border-palette-2,
.u-separator-palette-2:after {
  border-color: #db545a;
  stroke: #db545a;
}
.u-button-style.u-border-palette-2 {
  border-color: #db545a !important;
  color: #db545a !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-2:hover,
.u-button-style.u-border-palette-2:focus {
  border-color: transparent !important;
  color: #d63b42 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-2:hover,
.u-border-hover-palette-2:focus,
.u-border-active-palette-2.u-active.u-active,
a.u-button-style.u-border-hover-palette-2:hover,
a.u-button-style:hover > .u-border-hover-palette-2,
a.u-button-style.u-border-hover-palette-2:focus,
a.u-button-style.u-button-style.u-border-active-palette-2:active,
a.u-button-style.u-button-style.u-border-active-palette-2.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-2,
li.active > a.u-button-style.u-button-style.u-border-active-palette-2 {
  color: #db545a !important;
  border-color: #db545a !important;
}
.u-link.u-border-palette-2[class*="u-border-"] {
  border-color: #db545a !important;
}
.u-link.u-border-palette-2[class*="u-border-"]:hover {
  border-color: #d63b42 !important;
}
.u-border-palette-2-light-1,
.u-separator-palette-2-light-1:after {
  border-color: #e68387;
  stroke: #e68387;
}
.u-button-style.u-border-palette-2-light-1 {
  border-color: #e68387 !important;
  color: #e68387 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-2-light-1:hover,
.u-button-style.u-border-palette-2-light-1:focus {
  border-color: transparent !important;
  color: #e0656a !important;
  background-color: transparent !important;
}
.u-border-hover-palette-2-light-1:hover,
.u-border-hover-palette-2-light-1:focus,
.u-border-active-palette-2-light-1.u-active.u-active,
a.u-button-style.u-border-hover-palette-2-light-1:hover,
a.u-button-style:hover > .u-border-hover-palette-2-light-1,
a.u-button-style.u-border-hover-palette-2-light-1:focus,
a.u-button-style.u-button-style.u-border-active-palette-2-light-1:active,
a.u-button-style.u-button-style.u-border-active-palette-2-light-1.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-2-light-1,
li.active > a.u-button-style.u-button-style.u-border-active-palette-2-light-1 {
  color: #e68387 !important;
  border-color: #e68387 !important;
}
.u-link.u-border-palette-2-light-1[class*="u-border-"] {
  border-color: #e68387 !important;
}
.u-link.u-border-palette-2-light-1[class*="u-border-"]:hover {
  border-color: #e0656a !important;
}
.u-border-palette-2-light-2,
.u-separator-palette-2-light-2:after {
  border-color: #f1b5b8;
  stroke: #f1b5b8;
}
.u-button-style.u-border-palette-2-light-2 {
  border-color: #f1b5b8 !important;
  color: #f1b5b8 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-2-light-2:hover,
.u-button-style.u-border-palette-2-light-2:focus {
  border-color: transparent !important;
  color: #ea9296 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-2-light-2:hover,
.u-border-hover-palette-2-light-2:focus,
.u-border-active-palette-2-light-2.u-active.u-active,
a.u-button-style.u-border-hover-palette-2-light-2:hover,
a.u-button-style:hover > .u-border-hover-palette-2-light-2,
a.u-button-style.u-border-hover-palette-2-light-2:focus,
a.u-button-style.u-button-style.u-border-active-palette-2-light-2:active,
a.u-button-style.u-button-style.u-border-active-palette-2-light-2.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-2-light-2,
li.active > a.u-button-style.u-button-style.u-border-active-palette-2-light-2 {
  color: #f1b5b8 !important;
  border-color: #f1b5b8 !important;
}
.u-link.u-border-palette-2-light-2[class*="u-border-"] {
  border-color: #f1b5b8 !important;
}
.u-link.u-border-palette-2-light-2[class*="u-border-"]:hover {
  border-color: #ea9296 !important;
}
.u-border-palette-2-light-3,
.u-separator-palette-2-light-3:after {
  border-color: #fbeced;
  stroke: #fbeced;
}
.u-button-style.u-border-palette-2-light-3 {
  border-color: #fbeced !important;
  color: #fbeced !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-2-light-3:hover,
.u-button-style.u-border-palette-2-light-3:focus {
  border-color: transparent !important;
  color: #f3c4c7 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-2-light-3:hover,
.u-border-hover-palette-2-light-3:focus,
.u-border-active-palette-2-light-3.u-active.u-active,
a.u-button-style.u-border-hover-palette-2-light-3:hover,
a.u-button-style:hover > .u-border-hover-palette-2-light-3,
a.u-button-style.u-border-hover-palette-2-light-3:focus,
a.u-button-style.u-button-style.u-border-active-palette-2-light-3:active,
a.u-button-style.u-button-style.u-border-active-palette-2-light-3.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-2-light-3,
li.active > a.u-button-style.u-button-style.u-border-active-palette-2-light-3 {
  color: #fbeced !important;
  border-color: #fbeced !important;
}
.u-link.u-border-palette-2-light-3[class*="u-border-"] {
  border-color: #fbeced !important;
}
.u-link.u-border-palette-2-light-3[class*="u-border-"]:hover {
  border-color: #f3c4c7 !important;
}
.u-border-palette-2-base,
.u-separator-palette-2-base:after {
  border-color: #db545a;
  stroke: #db545a;
}
.u-button-style.u-border-palette-2-base {
  border-color: #db545a !important;
  color: #db545a !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-2-base:hover,
.u-button-style.u-border-palette-2-base:focus {
  border-color: transparent !important;
  color: #d63b42 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-2-base:hover,
.u-border-hover-palette-2-base:focus,
.u-border-active-palette-2-base.u-active.u-active,
a.u-button-style.u-border-hover-palette-2-base:hover,
a.u-button-style:hover > .u-border-hover-palette-2-base,
a.u-button-style.u-border-hover-palette-2-base:focus,
a.u-button-style.u-button-style.u-border-active-palette-2-base:active,
a.u-button-style.u-button-style.u-border-active-palette-2-base.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-2-base,
li.active > a.u-button-style.u-button-style.u-border-active-palette-2-base {
  color: #db545a !important;
  border-color: #db545a !important;
}
.u-link.u-border-palette-2-base[class*="u-border-"] {
  border-color: #db545a !important;
}
.u-link.u-border-palette-2-base[class*="u-border-"]:hover {
  border-color: #d63b42 !important;
}
.u-border-palette-3-dark-3,
.u-separator-palette-3-dark-3:after {
  border-color: #333129;
  stroke: #333129;
}
.u-button-style.u-border-palette-3-dark-3 {
  border-color: #333129 !important;
  color: #333129 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-3-dark-3:hover,
.u-button-style.u-border-palette-3-dark-3:focus {
  border-color: transparent !important;
  color: #2e2c25 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-3-dark-3:hover,
.u-border-hover-palette-3-dark-3:focus,
.u-border-active-palette-3-dark-3.u-active.u-active,
a.u-button-style.u-border-hover-palette-3-dark-3:hover,
a.u-button-style:hover > .u-border-hover-palette-3-dark-3,
a.u-button-style.u-border-hover-palette-3-dark-3:focus,
a.u-button-style.u-button-style.u-border-active-palette-3-dark-3:active,
a.u-button-style.u-button-style.u-border-active-palette-3-dark-3.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-3-dark-3,
li.active > a.u-button-style.u-button-style.u-border-active-palette-3-dark-3 {
  color: #333129 !important;
  border-color: #333129 !important;
}
.u-link.u-border-palette-3-dark-3[class*="u-border-"] {
  border-color: #333129 !important;
}
.u-link.u-border-palette-3-dark-3[class*="u-border-"]:hover {
  border-color: #2e2c25 !important;
}
.u-border-palette-3-dark-2,
.u-separator-palette-3-dark-2:after {
  border-color: #72683f;
  stroke: #72683f;
}
.u-button-style.u-border-palette-3-dark-2 {
  border-color: #72683f !important;
  color: #72683f !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-3-dark-2:hover,
.u-button-style.u-border-palette-3-dark-2:focus {
  border-color: transparent !important;
  color: #675e39 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-3-dark-2:hover,
.u-border-hover-palette-3-dark-2:focus,
.u-border-active-palette-3-dark-2.u-active.u-active,
a.u-button-style.u-border-hover-palette-3-dark-2:hover,
a.u-button-style:hover > .u-border-hover-palette-3-dark-2,
a.u-button-style.u-border-hover-palette-3-dark-2:focus,
a.u-button-style.u-button-style.u-border-active-palette-3-dark-2:active,
a.u-button-style.u-button-style.u-border-active-palette-3-dark-2.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-3-dark-2,
li.active > a.u-button-style.u-button-style.u-border-active-palette-3-dark-2 {
  color: #72683f !important;
  border-color: #72683f !important;
}
.u-link.u-border-palette-3-dark-2[class*="u-border-"] {
  border-color: #72683f !important;
}
.u-link.u-border-palette-3-dark-2[class*="u-border-"]:hover {
  border-color: #675e39 !important;
}
.u-border-palette-3-dark-1,
.u-separator-palette-3-dark-1:after {
  border-color: #b29a36;
  stroke: #b29a36;
}
.u-button-style.u-border-palette-3-dark-1 {
  border-color: #b29a36 !important;
  color: #b29a36 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-3-dark-1:hover,
.u-button-style.u-border-palette-3-dark-1:focus {
  border-color: transparent !important;
  color: #a08b31 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-3-dark-1:hover,
.u-border-hover-palette-3-dark-1:focus,
.u-border-active-palette-3-dark-1.u-active.u-active,
a.u-button-style.u-border-hover-palette-3-dark-1:hover,
a.u-button-style:hover > .u-border-hover-palette-3-dark-1,
a.u-button-style.u-border-hover-palette-3-dark-1:focus,
a.u-button-style.u-button-style.u-border-active-palette-3-dark-1:active,
a.u-button-style.u-button-style.u-border-active-palette-3-dark-1.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-3-dark-1,
li.active > a.u-button-style.u-button-style.u-border-active-palette-3-dark-1 {
  color: #b29a36 !important;
  border-color: #b29a36 !important;
}
.u-link.u-border-palette-3-dark-1[class*="u-border-"] {
  border-color: #b29a36 !important;
}
.u-link.u-border-palette-3-dark-1[class*="u-border-"]:hover {
  border-color: #a08b31 !important;
}
.u-border-palette-3,
.u-separator-palette-3:after {
  border-color: #f1c50e;
  stroke: #f1c50e;
}
.u-button-style.u-border-palette-3 {
  border-color: #f1c50e !important;
  color: #f1c50e !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-3:hover,
.u-button-style.u-border-palette-3:focus {
  border-color: transparent !important;
  color: #d9b10d !important;
  background-color: transparent !important;
}
.u-border-hover-palette-3:hover,
.u-border-hover-palette-3:focus,
.u-border-active-palette-3.u-active.u-active,
a.u-button-style.u-border-hover-palette-3:hover,
a.u-button-style:hover > .u-border-hover-palette-3,
a.u-button-style.u-border-hover-palette-3:focus,
a.u-button-style.u-button-style.u-border-active-palette-3:active,
a.u-button-style.u-button-style.u-border-active-palette-3.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-3,
li.active > a.u-button-style.u-button-style.u-border-active-palette-3 {
  color: #f1c50e !important;
  border-color: #f1c50e !important;
}
.u-link.u-border-palette-3[class*="u-border-"] {
  border-color: #f1c50e !important;
}
.u-link.u-border-palette-3[class*="u-border-"]:hover {
  border-color: #d9b10d !important;
}
.u-border-palette-3-light-1,
.u-separator-palette-3-light-1:after {
  border-color: #f5d654;
  stroke: #f5d654;
}
.u-button-style.u-border-palette-3-light-1 {
  border-color: #f5d654 !important;
  color: #f5d654 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-3-light-1:hover,
.u-button-style.u-border-palette-3-light-1:focus {
  border-color: transparent !important;
  color: #f3cf35 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-3-light-1:hover,
.u-border-hover-palette-3-light-1:focus,
.u-border-active-palette-3-light-1.u-active.u-active,
a.u-button-style.u-border-hover-palette-3-light-1:hover,
a.u-button-style:hover > .u-border-hover-palette-3-light-1,
a.u-button-style.u-border-hover-palette-3-light-1:focus,
a.u-button-style.u-button-style.u-border-active-palette-3-light-1:active,
a.u-button-style.u-button-style.u-border-active-palette-3-light-1.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-3-light-1,
li.active > a.u-button-style.u-button-style.u-border-active-palette-3-light-1 {
  color: #f5d654 !important;
  border-color: #f5d654 !important;
}
.u-link.u-border-palette-3-light-1[class*="u-border-"] {
  border-color: #f5d654 !important;
}
.u-link.u-border-palette-3-light-1[class*="u-border-"]:hover {
  border-color: #f3cf35 !important;
}
.u-border-palette-3-light-2,
.u-separator-palette-3-light-2:after {
  border-color: #f9e79b;
  stroke: #f9e79b;
}
.u-button-style.u-border-palette-3-light-2 {
  border-color: #f9e79b !important;
  color: #f9e79b !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-3-light-2:hover,
.u-button-style.u-border-palette-3-light-2:focus {
  border-color: transparent !important;
  color: #f7de75 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-3-light-2:hover,
.u-border-hover-palette-3-light-2:focus,
.u-border-active-palette-3-light-2.u-active.u-active,
a.u-button-style.u-border-hover-palette-3-light-2:hover,
a.u-button-style:hover > .u-border-hover-palette-3-light-2,
a.u-button-style.u-border-hover-palette-3-light-2:focus,
a.u-button-style.u-button-style.u-border-active-palette-3-light-2:active,
a.u-button-style.u-button-style.u-border-active-palette-3-light-2.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-3-light-2,
li.active > a.u-button-style.u-button-style.u-border-active-palette-3-light-2 {
  color: #f9e79b !important;
  border-color: #f9e79b !important;
}
.u-link.u-border-palette-3-light-2[class*="u-border-"] {
  border-color: #f9e79b !important;
}
.u-link.u-border-palette-3-light-2[class*="u-border-"]:hover {
  border-color: #f7de75 !important;
}
.u-border-palette-3-light-3,
.u-separator-palette-3-light-3:after {
  border-color: #fef9e6;
  stroke: #fef9e6;
}
.u-button-style.u-border-palette-3-light-3 {
  border-color: #fef9e6 !important;
  color: #fef9e6 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-3-light-3:hover,
.u-button-style.u-border-palette-3-light-3:focus {
  border-color: transparent !important;
  color: #fceeb7 !important;
  background-color: transparent !important;
}
.u-border-hover-palette-3-light-3:hover,
.u-border-hover-palette-3-light-3:focus,
.u-border-active-palette-3-light-3.u-active.u-active,
a.u-button-style.u-border-hover-palette-3-light-3:hover,
a.u-button-style:hover > .u-border-hover-palette-3-light-3,
a.u-button-style.u-border-hover-palette-3-light-3:focus,
a.u-button-style.u-button-style.u-border-active-palette-3-light-3:active,
a.u-button-style.u-button-style.u-border-active-palette-3-light-3.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-3-light-3,
li.active > a.u-button-style.u-button-style.u-border-active-palette-3-light-3 {
  color: #fef9e6 !important;
  border-color: #fef9e6 !important;
}
.u-link.u-border-palette-3-light-3[class*="u-border-"] {
  border-color: #fef9e6 !important;
}
.u-link.u-border-palette-3-light-3[class*="u-border-"]:hover {
  border-color: #fceeb7 !important;
}
.u-border-palette-3-base,
.u-separator-palette-3-base:after {
  border-color: #f1c50e;
  stroke: #f1c50e;
}
.u-button-style.u-border-palette-3-base {
  border-color: #f1c50e !important;
  color: #f1c50e !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-3-base:hover,
.u-button-style.u-border-palette-3-base:focus {
  border-color: transparent !important;
  color: #d9b10d !important;
  background-color: transparent !important;
}
.u-border-hover-palette-3-base:hover,
.u-border-hover-palette-3-base:focus,
.u-border-active-palette-3-base.u-active.u-active,
a.u-button-style.u-border-hover-palette-3-base:hover,
a.u-button-style:hover > .u-border-hover-palette-3-base,
a.u-button-style.u-border-hover-palette-3-base:focus,
a.u-button-style.u-button-style.u-border-active-palette-3-base:active,
a.u-button-style.u-button-style.u-border-active-palette-3-base.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-3-base,
li.active > a.u-button-style.u-button-style.u-border-active-palette-3-base {
  color: #f1c50e !important;
  border-color: #f1c50e !important;
}
.u-link.u-border-palette-3-base[class*="u-border-"] {
  border-color: #f1c50e !important;
}
.u-link.u-border-palette-3-base[class*="u-border-"]:hover {
  border-color: #d9b10d !important;
}
.u-border-palette-4-dark-3,
.u-separator-palette-4-dark-3:after {
  border-color: #293332;
  stroke: #293332;
}
.u-button-style.u-border-palette-4-dark-3 {
  border-color: #293332 !important;
  color: #293332 !important;
  background-color: transparent !important;
}
.u-button-style.u-border-palette-4-dark-3:hover,
.u-button-style.u-border-palette-4-dark-3:focus {
  border-color: transparent !important;
  color: #252e2d !important;
  background-color: transparent !important;
}
.u-border-hover-palette-4-dark-3:hover,
.u-border-hover-palette-4-dark-3:focus,
.u-border-active-palette-4-dark-3.u-active.u-active,
a.u-button-style.u-border-hover-palette-4-dark-3:hover,
a.u-button-style:hover > .u-border-hover-palette-4-dark-3,
a.u-button-style.u-border-hover-palette-4-dark-3:focus,
a.u-button-style.u-button-style.u-border-active-palette-4-dark-3:active,
a.u-button-style.u-button-style.u-border-active-palette-4-dark-3.active,
a.u-button-style.u-button-style.active > .u-border-active-palette-4-dark-3,
li.active > a.u-button-style.u-button-style.u-border-active-palette-4-dark-3 {
  color: #293332 !important;
  border-color: #293332 !important;
}
.u-link.u-border-palette-4-dark-3[class*="u-border-"] {
  border-color: #293332 !important;
}
.u-link.u-border-palette-4-dark-3[class*="u-border-"]:hover {
  border-color: #252e2d !important;
}
.u-border-palette-4-dark-2,
.u-separator-palette-4-dark-2:after {
  border-color: #41807c;
  stroke: #41807c;
}


.u-header {
  background-image: none;
}

.u-header .u-sheet-1 {
  min-height: 80px;
}

.u-header .u-image-1 {
  width: 64px;
  height: 32px;
  margin: 22px auto 0 0;
}

.u-header .u-logo-image-1 {
  width: 100%;
  height: 100%;
}

.u-header .u-menu-1 {
  margin: -32px 0 22px auto;
}

.u-header .u-nav-1 {
  font-size: 1rem;
  letter-spacing: 0px;
}

.u-header .u-nav-2 {
  font-size: 1.25rem;
}
@media (max-width: 1199px) {
  .u-header .u-menu-1 {
    width: auto;
  }
}



.u-footer {
  background-image: none;
}

.u-footer .u-sheet-1 {
  min-height: 120px;
}

.u-footer .u-text-1 {
  width: 417px;
  margin: 49px auto;
}
@media (max-width: 1199px) {
  .u-footer .u-sheet-1 {
    min-height: 99px;
  }
}
@media (max-width: 991px) {
  .u-footer .u-sheet-1 {
    min-height: 76px;
  }
}
@media (max-width: 767px) {
  .u-footer .u-sheet-1 {
    min-height: 57px;
  }
}
@media (max-width: 575px) {
  .u-footer .u-sheet-1 {
    min-height: 36px;
  }

  .u-footer .u-text-1 {
    width: 340px;
  }
}

 /*begin-variables base-font-size*/ 
 html { font-size: 16px; }
 /*end-variables base-font-size*/

.u-section-1 .u-sheet-1 {
  min-height: 730px;
}

.u-section-1 .u-product-1 {
  min-height: 574px;
  margin: 60px auto 0 0;
}

.u-section-1 .u-container-layout-1 {
  padding: 30px 0 30px 30px;
}

.u-section-1 .u-image-1 {
  width: 540px;
  height: 615px;
  margin: 0 auto 0 0;
}

.u-section-1 .u-group-1 {
  width: 512px;
  min-height: 514px;
  margin: -514px 0 0 auto;
}

.u-section-1 .u-container-layout-2 {
  padding: 30px;
}

.u-section-1 .u-line-1 {
  width: 43px;
  height: 3px;
  transform-origin: left center;
  margin: 0 auto 0 0;
}

.u-section-1 .u-text-1 {
  font-size: 3rem;
  font-weight: 700;
  margin: -90px 60px 0 0;
}

.u-section-1 .u-product-price-1 {
  margin: 22px auto 0 0;
}

.u-section-1 .u-text-2 {
  font-weight: 700;
  font-size: 1.125rem;
  margin: 18px auto 0 0;
}

.u-section-1 .u-btn-1 {
  border-style: none;
  letter-spacing: 3px;
  background-image: none;
  text-transform: uppercase;
  font-weight: 400;
  margin: 28px auto 0 0;
  padding: 10px 65px;
}

.u-section-1 .u-text-3 {
  font-family: Poppins;
  margin: 11px auto 60px;
}

.u-section-1 .u-btn-2 {
  border-style: none none solid;
  padding: 0;
}

@media (max-width: 1199px) {
  .u-section-1 .u-product-1 {
    height: auto;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-image-1 {
    width: 440px;
  }

  .u-section-1 .u-group-1 {
    width: 470px;
  }

  .u-section-1 .u-container-layout-2 {
    padding-left: 40px;
  }

  .u-section-1 .u-text-1 {
    margin-right: 0;
  }
}

@media (max-width: 991px) {
  .u-section-1 .u-sheet-1 {
    min-height: 638px;
  }

  .u-section-1 .u-product-1 {
    min-height: 477px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-image-1 {
    width: 330px;
    height: 417px;
  }

  .u-section-1 .u-group-1 {
    width: 360px;
    min-height: 417px;
    margin-top: -417px;
  }

  .u-section-1 .u-text-1 {
    font-size: 2.25rem;
  }

  .u-section-1 .u-text-3 {
    width: auto;
    margin-top: 16px;
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-sheet-1 {
    min-height: 948px;
  }

  .u-section-1 .u-product-1 {
    min-height: 836px;
    margin-top: 30px;
    margin-right: initial;
    margin-left: initial;
  }

  .u-section-1 .u-container-layout-1 {
    padding-left: 0;
  }

  .u-section-1 .u-image-1 {
    height: 458px;
    margin-right: initial;
    margin-left: initial;
    width: auto;
  }

  .u-section-1 .u-group-1 {
    min-height: 318px;
    margin-top: 0;
    margin-right: initial;
    margin-left: initial;
    width: auto;
  }

  .u-section-1 .u-container-layout-2 {
    padding-right: 0;
    padding-left: 10px;
  }

  .u-section-1 .u-line-1 {
    margin-left: auto;
  }

  .u-section-1 .u-product-price-1 {
    margin-left: auto;
  }

  .u-section-1 .u-text-2 {
    margin-right: 0;
  }

  .u-section-1 .u-btn-1 {
    margin-left: auto;
  }

  .u-section-1 .u-text-3 {
    margin-bottom: 30px;
  }
}

@media (max-width: 575px) {
  .u-section-1 .u-text-1 {
    font-size: 1.5rem;
  }
}.u-section-2 {
  background-image: linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJkZWZhdWx0LWltYWdlLXNvbGlkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDAwIDI2NSIgc3R5bGU9IndpZHRoOiA0MDBweDsgaGVpZ2h0OiAyNjVweDsiPg0KPHJlY3QgZmlsbD0iI0M2RDhFMSIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNjUiLz4NCjxwYXRoIGZpbGw9IiNEOUUzRTgiIGQ9Ik0zOTUuMyw5Ni4yYy01LTAuOC02LjEsMS4xLTguNSwyLjljLTEtMi4zLTIuNi02LjItNy43LTVjMS41LTUuMy0yLjYtOC40LTcuNy04LjRjLTAuNiwwLTEuMiwwLjEtMS44LDAuMg0KCWMtMS44LTQuMS02LTYuOS0xMC43LTYuOWMtNi41LDAtMTEuOCw1LjMtMTEuOCwxMS44YzAsMC40LDAsMC45LDAuMSwxLjNjLTEuMi0wLjgtMi41LTEuMy0zLjktMS4zYy00LjMsMC03LjksNC4yLTcuOSw5LjQNCgljMCwxLjIsMC4yLDIuNCwwLjYsMy41Yy0wLjUtMC4xLTEtMC4xLTEuNi0wLjFjLTYuOSwwLTEyLjUsNS41LTEyLjcsMTIuNGMtMC45LTAuMi0xLjktMC40LTIuOS0wLjRjLTYuNCwwLTExLjcsNS4yLTEyLjUsMTEuOA0KCWMtMS4yLTAuNC0yLjUtMC42LTMuOS0wLjZjLTUuOSwwLTEwLjgsMy44LTEyLjEsOC45Yy0yLjQtMi01LjUtMy4yLTguOS0zLjJjLTYsMC0xMS4xLDMuNy0xMi44LDguOGMtMS41LTEuNC0zLjgtMi4zLTYuMy0yLjMNCgljLTIuMSwwLTQuMSwwLjYtNS41LDEuN2gtMC4xYy0xLjMtNS41LTYuMi05LjUtMTIuMS05LjVjLTIuNCwwLTQuNywwLjctNi42LDEuOWMtMS40LTAuNy0zLTEuMi00LjgtMS4yYy0wLjMsMC0wLjUsMC0wLjgsMA0KCWMtMS41LTQuMS01LjItNy05LjUtN2MtMy4xLDAtNS45LDEuNS03LjgsMy45Yy0yLjItNC44LTYuOC04LjItMTIuMi04LjJjLTUuNiwwLTEwLjUsMy43LTEyLjUsOC44Yy0yLjEtMC45LTQuNC0xLjUtNi45LTEuNQ0KCWMtNi44LDAtMTIuNSwzLjktMTQuNSw5LjNjLTAuMiwwLTAuNSwwLTAuNywwYy01LjIsMC05LjYsMy4yLTExLjQsNy44Yy0yLjctMi44LTctNC41LTExLjgtNC41Yy0zLjMsMC02LjQsMC45LTguOSwyLjMNCgljLTIuMS02LjUtOC0xMi4yLTE4LjEtOS45Yy0yLjctMi4zLTYuMy0zLjctMTAuMS0zLjdjLTIuNSwwLTQuOCwwLjYtNi45LDEuNmMtMi4yLTUuOS03LjktMTAuMS0xNC42LTEwLjFjLTguNiwwLTE1LjYsNy0xNS42LDE1LjYNCgljMCwwLjksMC4xLDEuNywwLjIsMi41Yy0yLjYtNS03LjgtOC40LTEzLjgtOC40Yy04LjMsMC0xNS4xLDYuNS0xNS42LDE0LjZjLTIuOS0zLjItNy01LjMtMTEuNy01LjNjLTcuNCwwLTEzLjUsNS4xLTE1LjIsMTINCgljLTIuOS0zLjUtOS44LTYtMTQuNy02djExOS4yaDQwMFYxMDJDNDAwLDEwMiw0MDAsOTcsMzk1LjMsOTYuMnoiLz4NCjxwYXRoIGZpbGw9IiM4RUE4QkIiIGQ9Ik00MDAsMjA2LjJjMCwwLTI1LjMtMTkuMi0zMy42LTI1LjdjLTEzLjQtMTAuNi0yMy4xLTEyLjktMzEuNy03cy0yMy45LDE5LjctMjMuOSwxOS43cy01OC45LTYzLjktNjEuNS02Ni40DQoJYy0xLjUtMS40LTMuNi0xLjctNS41LTAuOWMtNS4yLDIuNC0xNy42LDkuNy0yNC41LDEyLjdjLTYuOSwyLjktNDEtNTAuNy00OS42LTUzcy04NC4zLDgzLjMtMTAxLjQsNzUuMXMtMjYuOS0yLjMtMzUuNCwzLjUNCgljLTguNiw1LjktMTEsNS45LTE1LjksOC4ycy0xNy4xLTUuOS0xNy4xLTUuOVYyNjVjMCwwLDQwMCwwLjIsNDAwLDB2LTU4LjhINDAweiIvPg0KPHBhdGggZmlsbD0iIzdFOTZBNiIgZD0iTTMzMy40LDE3OWMtMTMuMS05LjMtNDAsNC42LTU1LjEsMTAuN2MtMjMuNiw5LjYtOTQtNTQuNC0xMDcuMi01OS43YzAsMC00LjIsMy43LTkuNiw3LjYNCgljLTMuNS0wLjQtOC40LTUuNy05LjktNC43Yy00LjYsMy4xLTE3LjgsMTUuNC0yOC4zLDI2LjZjLTEwLjUsMTEuMy0xMS43LDAtMTUuOC0wLjZjLTIuNS0wLjQtNTQuMSw0Mi41LTU4LjcsNDMuMQ0KCUMyMi4zLDIwNS4zLDAsMTk3LjUsMCwxOTcuNVYyNjVsNDAwLTAuMXYtNTMuM0M0MDAsMjExLjYsMzQ0LjgsMTg3LjEsMzMzLjQsMTc5eiIvPg0KPHBhdGggZmlsbD0iIzc4OEY5RSIgZD0iTTAsMjY0Ljl2LTU4LjZjMCwwLDguMiwxLjgsMTEuMyw1LjNjMy4xLDMuNiwyNi4xLTQuMiwyNi4xLDQuN3MwLjUsNC4yLDAuNSwxNC44YzAsMTAuNywyMy00LjIsMzguMS0xOC40DQoJczM0LjktNDkuMiwzNi0zNWMxLDE0LjItMTUuMSwzOS4yLTI0LDU2LjRDNzkuMSwyNTEuNCw1MS43LDI2NSw1MS43LDI2NUwwLDI2NC45eiIvPg0KPHBhdGggZmlsbD0iIzc4OEY5RSIgZD0iTTEwMCwyNjVjMCwwLDY2LjctMTI1LjEsNjguMy0xMTYuOHMtNi44LDI5LjcsMi4xLDI2LjFjOC45LTMuNiwxNC42LTE2LDE4LjgtOS41czE2LjIsMzguNiwyMS45LDMzLjgNCgljNS43LTQuNywyMS40LTEzLjEsMjIuNC02LjVjMSw2LjUtMSw1LjMtNS43LDIwLjJDMjIzLjEsMjI3LjEsMjAwLDI2NSwyMDAsMjY1aC0xMGMwLDAsNi0yNC44LDguNi0zNC45YzIuNi0xMC4xLTMuNy0xOS0xMi04LjMNCglzLTIzLDIyLTI0LDE3LjhzLTUuNy0zMC4zLTE4LjgtMTQuMmMtMTMsMTYtMzMuOCwzOS43LTMzLjgsMzkuN2gtMTBWMjY1eiIvPg0KPHBhdGggZmlsbD0iIzc4OEY5RSIgZD0iTTI0NSwyNjVjMCwwLDE5LjgtNTQuNywzMy40LTY0LjJzNTMuNy0yNy45LDQ2LjktMTMuNmMtNi44LDE0LjItMTEsMzQuNC0yMC4zLDQ5LjgNCgljLTkuNCwxNS40LTE4LjgsMjYuMS0xNC4xLDEzLjZjNC43LTEyLjUsNi40LTIzLjMsMy43LTIzLjFDMjcxLjMsMjI5LjEsMjYwLDI2NSwyNjAsMjY1SDI0NXoiLz4NCjwvc3ZnPg0K");
  background-position: 50% 50%;
}

.u-section-2 .u-sheet-1 {
  min-height: 800px;
}

.u-section-2 .u-text-1 {
  font-size: 6rem;
  font-weight: 700;
  margin: 60px auto 0;
}

.u-section-2 .u-text-2 {
  margin: 30px auto 0;
}

.u-section-2 .u-btn-1 {
  background-image: none;
  text-transform: uppercase;
  font-weight: 700;
  margin: 40px auto 60px;
}

@media (max-width: 1199px) {
  .u-section-2 .u-sheet-1 {
    min-height: 660px;
  }
}

@media (max-width: 991px) {
  .u-section-2 .u-sheet-1 {
    min-height: 506px;
  }
}

@media (max-width: 767px) {
  .u-section-2 .u-sheet-1 {
    min-height: 380px;
  }
}

@media (max-width: 575px) {
  .u-section-2 .u-sheet-1 {
    min-height: 239px;
  }

  .u-section-2 .u-text-1 {
    font-size: 3.75rem;
  }
}.u-section-3 .u-sheet-1 {
  min-height: 500px;
}

.u-section-3 .u-layout-wrap-1 {
  margin-top: 60px;
  margin-bottom: 60px;
  position: relative;
}

.u-section-3 .u-layout-cell-1 {
  min-height: 400px;
}

.u-section-3 .u-container-layout-1 {
  padding: 30px;
}

.u-section-3 .u-layout-cell-2 {
  min-height: 400px;
}

.u-section-3 .u-container-layout-2 {
  padding: 30px;
}

@media (max-width: 1199px) {
  .u-section-3 .u-sheet-1 {
    min-height: 430px;
  }

  .u-section-3 .u-layout-cell-1 {
    min-height: 330px;
  }

  .u-section-3 .u-layout-cell-2 {
    min-height: 330px;
  }
}

@media (max-width: 991px) {
  .u-section-3 .u-sheet-1 {
    min-height: 353px;
  }

  .u-section-3 .u-layout-cell-1 {
    min-height: 253px;
  }

  .u-section-3 .u-layout-cell-2 {
    min-height: 253px;
  }
}

@media (max-width: 767px) {
  .u-section-3 .u-sheet-1 {
    min-height: 860px;
  }

  .u-section-3 .u-layout-cell-1 {
    min-height: 380px;
  }

  .u-section-3 .u-container-layout-1 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-3 .u-layout-cell-2 {
    min-height: 380px;
  }

  .u-section-3 .u-container-layout-2 {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 575px) {
  .u-section-3 .u-sheet-1 {
    min-height: 578px;
  }

  .u-section-3 .u-layout-cell-1 {
    min-height: 239px;
  }

  .u-section-3 .u-layout-cell-2 {
    min-height: 239px;
  }
}
</style>

