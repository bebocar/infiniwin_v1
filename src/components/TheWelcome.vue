<script setup>
// import WelcomeItem from './WelcomeItem.vue'
// import DocumentationIcon from './icons/IconDocumentation.vue'
// import ToolingIcon from './icons/IconTooling.vue'
// import EcosystemIcon from './icons/IconEcosystem.vue'
// import CommunityIcon from './icons/IconCommunity.vue'
// import SupportIcon from './icons/IconSupport.vue'
import '../assets/infiniwin/css/color.css'
import '../assets/infiniwin/css/font.css'
import '../assets/infiniwin/css/header.css'
import '../assets/infiniwin/css/input.css'
import '../assets/infiniwin/css/footer.css'
import '../assets/infiniwin/css/sidebanner.css'
import '../assets/infiniwin/css/index.css'
import '../assets/infiniwin/css/slider.css'
import '../assets/infiniwin/css/owl.carousel.min.css'
import '../assets/infiniwin/css/owl.theme.default.min.css'
import '../assets/infiniwin/css/loginpopup.css'
import '../assets/infiniwin/js/jquery-3.4.1.min.js'
// import '../assets/infiniwin/js/jquery-ui.js'
// import '../assets/infiniwin/js/sidebanner.js'
// import '../assets/infiniwin/js/header.js'
// import '../assets/infiniwin/js/date.js'
// import '../assets/infiniwin/js/jackpot.js'
// import '../assets/infiniwin/js/slider.js'
// import '../assets/infiniwin/js/index.js'
// import '../assets/infiniwin/js/owl.carousel.min.js'
// import '../assets/infiniwin/js/all.min.js'
</script>

<template>
  <div class="sidebanners">

    <div class="sidenav sidebanner banner_left">

      <a href="javascript:void(0);" onclick=" alert('Please login');" class="sidenav_item">
        <img src="https://www.infiniwin3.com/infiniwin/img/sidebanner/referral_en.png" alt="">
      </a>
      <a href="javascript:void(0);" class="sidenav_item" onclick="window.open('https://iwbonus.com?lang=en&crc=MYR&domain=infiniwin3.com')">
        <img src="https://www.infiniwin3.com/infiniwin/img/sidebanner/vip.png" alt="">
      </a>
      <a href="https://www.infiniwin3.com/my/callbackservice" class="sidenav_item">
        <img src="https://www.infiniwin3.com/infiniwin/img/sidebanner/callback_en.png" alt="">
      </a>
      <a href="javascript:void(0);" class="sidenav_item" onclick="window.open('//infiniwin1.net')">
        <img src="https://www.infiniwin3.com/infiniwin/img/sidebanner/backup_en.png" alt="">
      </a>

    </div>

  </div>

  <div class="sidenav sidebanner banner_right">

    <a href="javascript:void(0);" class="sidenav_item" onclick="javascript:livechat();">
      <img src="https://www.infiniwin3.com/infiniwin/img/sidebanner/livechat_en.png" alt="">
    </a>
    <a href="https://www.infiniwin3.com/my/register" class="sidenav_item">
      <img src="https://www.infiniwin3.com/infiniwin/img/sidebanner/join_en.png" alt="">
    </a>
    <a href="javascript:void(0);" class="sidenav_item" onClick="window.open('https://t.me/infiniwincs')">
      <img src="https://www.infiniwin3.com/infiniwin/img/sidebanner/telegram.png" alt="">
    </a>
    <a href="javascript:void(0);" class="sidenav_item">
      <img style="transform: unset;cursor: auto;" src="https://www.infiniwin3.com/infiniwin/img/sidebanner/skype.png" alt="">
      <p>ID: infiniwin</p>
    </a>
  </div>


  <div class="header">

    <section class="top_header content_width">
      <img src="https://www.infiniwin3.com/infiniwin/img/theme/halloween2023/mainlogo.gif" width="250px" height="90px" alt="Infiniwin" class="logo" onclick="window.location.href='https://www.infiniwin3.com/my'" style="cursor: pointer;">

      <div class="header_content">

        <div class="login_header">
          <a href="javascript:void(0)" onclick="javascript:livechat();" class="live_chat" id="live_chat_button">
            <span>LIVE CHAT</span>
            <img src="https://www.infiniwin3.com/infiniwin/img/header/live_chat.png" width="15px" height="13px" alt="live chat">
          </a>

          <div class="lang_btn">
            <img src="https://www.infiniwin3.com/infiniwin/img/header/my.png" width="16px" height="16px" alt="Infiniwin" >
            <span>EN</span>
            <i class="fa-solid fa-caret-down" style="margin-left: 5px;"></i>
          </div>

          <div class="lang_dropdown">
            <ul>
              <li>
                <img class="SG" src="https://www.infiniwin3.com/infiniwin/img/header/sg.png" alt="">
                <a class="EN" href="#" onclick="window.location.href='https://www.infiniwin3.com/sg?lang=en'">English</a>|
                <a class="CN" href="#" onclick="window.location.href='https://www.infiniwin3.com/sg?lang=cn'">中文</a>
              </li>
              <li>
                <img class="SG" src="https://www.infiniwin3.com/infiniwin/img/header/my.png" alt="">
                <a class="EN" href="#" onclick="window.location.href='https://www.infiniwin3.com/my?lang=en'">English</a>|
                <a class="CN" href="#" onclick="window.location.href='https://www.infiniwin3.com/my?lang=cn'">中文</a>
              </li>
              <li>
                <img class="SG" src="https://www.infiniwin3.com/infiniwin/img/header/th.png" alt="">
                <a class="EN" href="#" onclick="window.location.href='https://www.infiniwin3.com/th?lang=en'">English</a>|
                <a class="TH" href="#" onclick="window.location.href='https://www.infiniwin3.com/th?lang=th'">Thai</a>
              </li>
            </ul>
          </div>

          <form action="#" class="login_section">

            <input type="text" placeholder="USERNAME" id="username" autofocus onKeyPress="enterpressalert(event, this, login)">
            <input type="password" placeholder="PASSWORD" id="password" onKeyPress="enterpressalert(event, this, login)">

            <button class="login_btn bling" onclick="login();">LOGIN</button>
            <button onclick="window.location.href='https://www.infiniwin3.com/my/register'" class="register_btn bling">JOIN NOW</button>

          </form>

        </div>

        <div class="marquee_header">
          <div class="marquee" onclick="window.open('https://www.infiniwin3.com/announcement?lang=en', 'Notice', 'width=800,height=600');">
            <span>NEWS</span>
            <img src="https://www.infiniwin3.com/infiniwin/img/header/speaker.png" width="26px" height="26px"  alt="infiniwin speaker">
            <marquee behavior="scroll" direction="left">4D Lottery is Now LIVE! Bet 4D Online With Your Lucky Number & Win Big now!</marquee>
          </div>

          <a href="https://www.infiniwin3.com/my/forgot-password" class="forgot_password">Forgot Password?</a>

          <div class="datetime">
            <span class="date">01/01/2020</span>
            <span class="time">00:00:00</span>
            <span>(GMT+8)</span>
          </div>


        </div>

      </div>

    </section>

    <section class="nav">

      <div class="nav_content content_width">

        <div class="nav_item_container">
          <a href="https://www.infiniwin3.com/my" class="nav_item nav_active">
            <img src="https://www.infiniwin3.com/infiniwin/img/nav/home.png"  width="45px" height="56px" alt="">
          </a>
        </div>

        <div class="nav_item_container">
          <a href="https://www.infiniwin3.com/my/mobile-tutorial" class="nav_item ">
            <img src="https://www.infiniwin3.com/infiniwin/img/nav/mobile.png"  width="23px" height="50px" alt="">
          </a>
        </div>

        <div class="nav_item_container">
          <a href="https://www.infiniwin3.com/my/live-casino" class="nav_item ">
            <img src="https://www.infiniwin3.com/infiniwin/img/nav/lc.png" width="47px" height="49px" alt="ilive casino">

            <span class="nav_text">Live Casino</span>
          </a>
          <div class="nav_dropdown">

            <div class="nav_dropdown_content content_width">

              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/game/YEE?type=casino">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/lc/yeebet.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>

              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/game/BGG?type=casino">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/lc/big.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>

              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/game/PPG?type=casino">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/lc/ppg.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>



              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/game/PRG?type=casino">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/lc/pretty.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/game/AGGB?type=casino">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/lc/ag.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>

              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this)" data-url="https://www.infiniwin3.com/my/game/ALB?type=casino">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/lc/allbet.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>


              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this)" data-url="https://www.infiniwin3.com/my/game/EVO?type=casino">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/lc/evolution.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>

              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this)" data-url="https://www.infiniwin3.com/my/game/HOG?type=casino">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/lc/hogaming.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>


              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this)" data-url="https://www.infiniwin3.com/my/game/XPG?type=casino">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/lc/xprogram.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>


              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this)" data-url="https://www.infiniwin3.com/my/game/PLTM?type=casino">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/lc/playtech.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>



              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this)" data-url="https://www.infiniwin3.com/my/game/WMC?type=casino">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/lc/wm.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>

            </div>


          </div>
        </div>

        <div class="nav_item_container">
          <a href="https://www.infiniwin3.com/my/sportsbook?product=IBCX" class="nav_item ">
            <img src="https://www.infiniwin3.com/infiniwin/img/nav/sb.png" width="58px" height="46px" alt="infiniwin sportsbook">
            <span class="nav_text">SportsBook</span>
          </a>
          <div class="nav_dropdown">

            <div class="nav_dropdown_content content_width">

              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this)" data-url="https://www.infiniwin3.com/my/game/RSC">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/sb/umbet1.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="https://www.infiniwin3.com/my/sportsbook?product=IBCX" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/sb/isport.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="https://www.infiniwin3.com/my/sportsbook?product=M8B" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/sb/msport.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this)" data-url="https://www.infiniwin3.com/my/game/CTBA">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/sb/racebook.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
            </div>

          </div>
        </div>

        <div class="nav_item_container">
          <a href="https://www.infiniwin3.com/my/slot" class="nav_item ">
            <img src="https://www.infiniwin3.com/infiniwin/img/nav/slot.png" width="67px" height="51px" alt="infiniwin slot">
            <span class="nav_text">Slots</span>
          </a>

          <div class="nav_dropdown">

            <div class="nav_dropdown_content content_width">
              <a href="javascript:void(0)" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/game/JOK" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/slot/slot4.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="https://www.infiniwin3.com/my/slot/NSP" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/slot/nsp.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="https://www.infiniwin3.com/my/slot/MAC" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/slot/mac.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="javascript:void(0)" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/game/XPG?type=slot" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/slot/slot1.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="https://www.infiniwin3.com/my/slot/SPG2" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/slot/slot2.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="https://www.infiniwin3.com/my/slot/PLTM" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/slot/slot3.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="javascript:void(0)" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/game/H918" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/slot/slot6.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="https://www.infiniwin3.com/my/slot/wmgames" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/slot/slot7.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="https://www.infiniwin3.com/my/slot/MGA" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/slot/slot9.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="https://www.infiniwin3.com/my/slot/PPG" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/slot/slot10.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="https://www.infiniwin3.com/my/slot/AMB" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/slot/slot11-ams.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
            </div>


          </div>
        </div>

        <div class="nav_item_container">
          <a href="#" class="nav_item">
            <img src="https://www.infiniwin3.com/infiniwin/img/nav/fortune.png" width="45px" height="57px"  alt="fortune 4d" >
            <span class="nav_text">Infini Rewards</span>
          </a>
          <div class="nav_dropdown">

            <div class="nav_dropdown_content content_width">
              <a href="javascript:void(0)" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/Api/gps-game/goToGame?game=fish&amp;returnurl=https%3A%2F%2Fwww.infiniwin3.com%2Fmy%2Ftransaction" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/reward/nav-fish.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="javascript:void(0)" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/fortune/4d" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/reward/f4d.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>

              <a href="javascript:void(0)" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/fortune/gd" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/reward/fout.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>

              <a href="javascript:void(0)" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/Api/gps-game/goToGame?game=dropgrab" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/reward/moneysen.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
            </div>

          </div>
        </div>
        <div class="nav_item_container">
          <a href="https://www.infiniwin3.com/my/e-sport" class="nav_item ">
            <img src="https://www.infiniwin3.com/infiniwin/img/nav/esport.png" width="56px" height="58px" alt="Infiniwin esport" >
            <span class="nav_text">E-Sport</span>
          </a>
          <div class="nav_dropdown">

            <div class="nav_dropdown_content content_width">
              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="alert('Coming Soon');">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/esport/inpa.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>

              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/game/IBCX?type=esport">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/esport/isport.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>


            </div>
          </div>
        </div>
        <div class="nav_item_container ">
          <a href="https://www.infiniwin3.com/my/grand-dragon-results" class="nav_item ">
            <img src="https://www.infiniwin3.com/infiniwin/img/nav/4d.png" width="43px" height="53px"  alt="4d">
            <span class="nav_text">4D</span>
          </a>
          <div class="nav_dropdown">

            <div class="nav_dropdown_content content_width">
              <a href="https://www.infiniwin3.com/my/live-4d-malaysia-results" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/index/new.png" alt="" style="position:absolute;width: 80px;">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/4d/4d1.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="https://www.infiniwin3.com/my/grand-dragon-results" class="nav_dropdown_item">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/4d/4d2.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
            </div>
          </div>
        </div>
        <div class="nav_item_container">
          <a href="https://www.infiniwin3.com/my/fishingworld" class="nav_item ">
            <img src="https://www.infiniwin3.com/infiniwin/img/nav/fishing.png" alt="">
            <span class="nav_text">Fishing</span>
          </a>
          <div class="nav_dropdown">

            <div class="nav_dropdown_content content_width">
              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/game/OCT?type=fishing&amp;code=886-860-024">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/fishing/nav-fishing-wm.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/game/AGGB?type=fishing">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/fishing/ag.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/game/BGG?type=fishing">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/fishing/bg.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
              <a href="javascript:void(0)" class="nav_dropdown_item" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/game/JOK?type=fishing">
                <img src="https://www.infiniwin3.com/infiniwin/img/nav/fishing/joker.png" alt="">
                <span class="nav_play">Play Now</span>
              </a>
            </div>


          </div>
        </div>


        <div class="nav_item_container">
          <a href="https://www.infiniwin3.com/my/promotion" class="nav_item ">
            <img src="https://www.infiniwin3.com/infiniwin/img/nav/promotion.png" alt="">
            <span class="nav_text">Promotions</span>
          </a>
        </div>

        <div class="nav_item_container">
          <a href="javascript:void(0)" onclick="window.open('https://iwbonus.com?lang=en&crc=MYR&domain=infiniwin3.com')" class="nav_item">
            <img src="https://www.infiniwin3.com/infiniwin/img/nav/vip.png" alt="">
            <span class="nav_text">VIP</span>
          </a>
        </div>


      </div>

    </section>

  </div>

  <div class="container">


    <section class="slider">

      <div class="slider_content">

        <div class="slide slide0">
          <a target="_blank" href="#">
            <img src="https://uploads.infiniwin3.com/banner/Halloween23_EN_slide_1_1697771205.png" class="slide_img" alt="Halloween23 EN slide">
          </a>
        </div>
        <div class="slide slide1">
          <a target="_blank" href="#">
            <img src="https://uploads.infiniwin3.com/banner/money_sense_slide_1_1697771313.png" class="slide_img" alt="money sense slide">
          </a>
        </div>
        <div class="slide slide2">
          <a target="_blank" href="#">
            <img src="https://uploads.infiniwin3.com/banner/5_Unlimited_MY_Slide_1_1697771241.png" class="slide_img" alt="5% Unlimited MY Slide">
          </a>
        </div>
        <div class="slide slide3">
          <a target="_blank" href="#">
            <img src="https://uploads.infiniwin3.com/banner/iquarium_en_slider_1_1697771473.png" class="slide_img" alt="iquarium en slider">
          </a>
        </div>
        <div class="slide slide4">
          <a target="_blank" href="my/fortune/4d">
            <img src="https://uploads.infiniwin3.com/banner/fortune_4d_slide_1_1697771445.png" class="slide_img" alt="fortune 4d slide">
          </a>
        </div>

        <div class="slider_control">
          <div class="slide_btn">
            <span class="slide_dot"></span>
          </div>
          <div class="slide_btn">
            <span class="slide_dot"></span>
          </div>
          <div class="slide_btn">
            <span class="slide_dot"></span>
          </div>
          <div class="slide_btn">
            <span class="slide_dot"></span>
          </div>
          <div class="slide_btn">
            <span class="slide_dot"></span>
          </div>
        </div>

      </div>

    </section>
    <section class="index">













      <div class="index_boxes content_width">

        <div class="big_box bling">

          <div class="box_header">
            <img src="https://www.infiniwin3.com/infiniwin/img/index/fortune_logo.png" alt="Infiniwin" >

            <span>Fortune 4D</span>
          </div>

          <a href="javascript:void(0)" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/fortune/4d" class="box_banner">
            <img src="https://www.infiniwin3.com/infiniwin/img/index/fortune_en.jpg" alt="infiniwin" class="fortune_banner" >
          </a>


          <div class="jackpot">
            <span>MYR</span>
            <span class="jackpot_amount">100,000,000.00</span>
          </div>

        </div>

        <div class="big_box">

          <div class="small_box bling">
            <div class="box_header">
              <img src="https://www.infiniwin3.com/infiniwin/img/index/sense_logo.png" alt="">
              <span>Money Sense</span>
            </div>

            <a href="javascript:void(0)" onclick="openGame(this);" data-url="https://www.infiniwin3.com/my/dropgrab" class="box_banner">
              <img src="https://www.infiniwin3.com/infiniwin/img/index/sense_en.jpg" alt="infiniwin sense" >
            </a>

          </div>

          <div class="small_box bling">
            <div class="box_header">
              <img src="https://www.infiniwin3.com/infiniwin/img/index/bitcoin_logo.png" alt="infiniwin bigtcoin">
              <span>Bitcoin</span>
            </div>

            <a href="https://www.infiniwin3.com/my/bitcoin-casino" class="box_banner">
              <img src="https://www.infiniwin3.com/infiniwin/img/index/bitcoin_en.png" alt="infiniwin bitcoin">
            </a>

          </div>


        </div>

      </div>


    </section>

    <div class="seo_content content_width">
      <h1 style="font-size:18px;">Best Online Casino Malaysia</h1>

      <p>InfiniWin is one of the foremost online casino in Malaysia. Focusing on Malaysia allows InfiniWin to have a dedicated customer service team that is able to provide support in multiple languages like Malay and Mandarin. The customer service is also available 24/7 to ensure that your online casino experience will not be interrupted. If you encounter any problems while using InfiniWin platform, the customer service is the place to start.</p>

      <p>If you are new to online casino games or sportsbook, you can try to register a new account at InfiniWin. Registering is easy, where you will need to fill in a user name, password, a valid e-mail address, full name, as well as contact number. The contact number, full name and e-mail address are very important because it will be used for bank withdrawals and deposits. Therefore, double check these items when you are registering.</p>

      <p>Once you have joined InfiniWin, you will notice that InfiniWin is more than just an online casino in Malaysia. It is a place where you can earn a lot of money while having fun. There are hundreds of games to choose from and you will certainly find a game that you will love.</p>

      <p>Since the World Cup 2022 is coming, it is worth mentioning that InfiniWin hold special event and promotion to celebrate this grand football tournament. The sportsbook for World Cup 2020 will surely be a hot place for both new and experienced sportsbook enthusiasts. The odds will be better and the stakes will be high as well. If sportsbook is not your thing, there are always other games to play like slot games, 4D, racebook and online casinos.</p>

      <h2 style="font-size:16px;">InfiniWin Online Casino is the Only Choice for You!</h2>

      <p>Casinos in Malaysia are aplenty but those who are at the same standard as InfiniWin are few. Create an InfiniWin account now to get all those promotions and rewards currently available. If you wait, you might missed them so hurry up!</p>

      <h2 style="font-size:16px;">A lot of Big Prize is Waiting you at Luckypool!</h2>

      <p>At first glance, you may think that the prizes are not that high, if you are a high roller. You will be surprised that the prize is actually for every RM1 bet you made. Just imagine the amount of money you will get if you won the first prize with a RM1,000 bet!</p>

      <p>Currently, InfiniWin is having a Fortune 4D deposit promotion for all members. Every deposit worth RM300 will get a free Fortune 4D ticket. However, keep in mind that the Fortune 4D ticket is not transferable and your account will be locked if you violates this rule. Every players in InfiniWin is also not allowed to create a second or third account with InfiniWin. If you want to get money for you and your family’s long-awaited overseas trip fast, then Fortune 4D is where your destiny awaits!</p>

      <p>Aside from Fortune 4D, there are other games that you can play at InfiniWin. If you are a new InfiniWin player, you can get a lot of rewards and promotions special for new players. Make sure that you do not put these rewards to waste! </p>

    </div>


    <section class="login_popup" style="z-index: 99999;">
      <div class="login_box_border">
        <div class="login_box">
          <img src="https://www.infiniwin3.com/infiniwin/img/logo.png" alt="" class="popup_logo">
          <i class="fa fa-times login_popup_close" aria-hidden="true"></i>
          <form action="#" class="login_form">
            <input type="text" id="username2" placeholder="Username" onKeyPress="enterpressalert(event, this, login2)">
            <input type="password" id="password2" placeholder="Password" onKeyPress="enterpressalert(event, this, login2)">
            <button class="popup_login_btn" type="button" onclick="login2()">Login</button>
          </form>
          <div class="login_box_bottom">
            <a href="https://www.infiniwin3.com/my/register">Not a member? <b>REGISTER NOW</b></a>
            <a href="https://www.infiniwin3.com/my/forgot-password">Forgot Password?</a>
          </div>
        </div>
      </div>
    </section>

    <section class="footer">

      <div class="footer_nav">
        <div class="footer_nav_content content_width">
          <a href="https://www.infiniwin3.com/my/about-us">About Us</a>
          <a href="https://www.infiniwin3.com/my/banking">Banking Options</a>
          <a href="https://www.infiniwin3.com/my/contact-us">Contact Us</a>
          <a href="https://www.infiniwin3.com/my/faq">FAQ</a>
          <a href="https://www.infiniwin3.com/my/how-to-join">How To Join</a>
          <a href="https://www.infiniwin3.com/my/terms-and-conditions">Terms And Conditions</a>
          <a href="//affiliate.infiniwin3.com">Affiliate</a>
          <a href="https://www.infiniwin3.com/my/bitcoin-casino">About Bitcoin</a>
        </div>
      </div>

      <div class="footer_content content_width">
        <div class="footer_subnav">

          <a href="//affiliate.infiniwin3.com" class="footer_subnav_item">
            <img src="https://www.infiniwin3.com/infiniwin/img/footer/affiliate_logo.png"  width="107px" height="77px" alt="infiniwin affiliate">
            <h2>Affiliate Program</h2>
            <p>Free to join affiliates program and earn commissions based</p>
          </a>

          <a href="https://www.infiniwin3.com/my/promotion" class="footer_subnav_item">
            <img src="https://www.infiniwin3.com/infiniwin/img/footer/promotion_logo.png" width="107px" height="77px" alt="infiniwin promotion">
            <h2>Promotions</h2>
            <p>Apply for special financing and earn rewards</p>
          </a>

          <a href="javascript:void(0)" onclick="livechat();" class="footer_subnav_item">
            <img src="https://www.infiniwin3.com/infiniwin/img/footer/cs_logo.png" width="107px" height="77px" alt="infiniwin cs">
            <h2>Customer Service</h2>
            <p>Have any problem? Call a Specialist or chat online.</p>
          </a>

          <a href="https://www.infiniwin3.com/my/faq" class="footer_subnav_item">
            <img src="https://www.infiniwin3.com/infiniwin/img/footer/faq_logo.png" width="107px" height="77px" alt="infiniwin faq">
            <h2>FAQ</h2>
            <p>Have a question? Kindly refer to our FAQ page</p>
          </a>

          <a href="https://iwbonus.com?lang=en&crc=MYR&domain=infiniwin3.com" class="footer_subnav_item">
            <img src="https://www.infiniwin3.com/infiniwin/img/footer/vip_logo.png" width="107px" height="77px" alt="infiniwin vip">
            <h2>VIP BONUS</h2>
            <p>Experience All New Infiniwin VIP Program</p>
          </a>

        </div>
        <section class="game_status owl-carousel">

          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/AGGB.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="AGGB"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/ALB.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="ALB"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/AMB.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="AMB"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/BGG.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="BGG"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/CTB.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="CTBA"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/EVO.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="EVO"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/GDL.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="GDL"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/H918.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="H918"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/HOG.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="HOG"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/IBCX.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="IBCX"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/JOK.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="JOK"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/M8B.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="M8B"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/MAC.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="MAC"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/MGA.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="MGA"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/NSP.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="NSP"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/OCT.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="OCT"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/PLT8.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="PLTM"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/PPG.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="PPG"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/PRG.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="PRG"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/RSC.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="RSC"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/SPG2.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="SPG2"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/WMC.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="WMC"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/MXB.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="XPG"></a>
              </div>
            </div>
          </div>
          <div class="m_item">
            <div class="game_status_item">
              <img class="game_status_logo" src="https://www.infiniwin3.com/infiniwin/mobile/img/index/logo/YEE.png">
              <div class="game_status_text">
                <a class="mcontent" data-game="YEE"></a>
              </div>
            </div>
          </div>

        </section>

        <div class="footer_info">

          <div class="footer_info_item">
            <h2>Live Casino</h2>

            <p>Infiniwin is the best Malaysia online casino. Not only that they have a good customer service to help with any problems, Infiniwin also has partnerships with trusted and reputable live casino providers in the region. In total, there are six different live casino providers inside Infiniwin and each of them is good in their own way. To play at Infiniwin’s live casinos, make sure to create an account. Without a login, you will not be able to get an exclusive access to the live casinos.</p>

            <h2>Fortune 4D</h2>

            <p>4D is legal in Malaysia and you can get lots of money if your number is picked. To cater for the need of the customers, Infiniwin now has live 4D results for players to check the draw results. Since life is all about taking chances, Infiniwin added a game based on the 4D result.</p>

          </div>

          <div class="footer_info_item">
            <h2>Sportsbook</h2>

            <p>It is actually not that difficult to win a few wagers on sports betting. If you bet on all the possible outcomes, you are surely going to hit some of them right. However, this is not the best way for you to win big and get rich doing sports betting. These three simple sportsbook tips will surely help you achieve that target.</p>

            <h2>4D</h2>

            <p>Infiniwin is undeniably one of the best online casinos in Malaysia. Not only that it has casino games with great graphics and interesting gameplay, Infiniwin also provides simpler but addictive games for their loyal players. These games are not only for fun, it is also a way for Infiniwin to reward their players with great prizes. Slot games, sportsbook, and fortune 4D are just some of these ‘simpler’ games currently available.</p>

          </div>

          <div class="footer_info_item">
            <h2>Slots</h2>

            <p>Casino-goers will understand the pain of having to wait or completely not being able to get onto their favourite slot among the huge crowds. Online slot players, on the other hand, will never have to face such an issue. With a wide variety of online slot game providers on InfiniWin such as 918Kiss, Sky3888, SpadeGaming, and Playtech, users will never run out of gaming options!</p>

            <h2>Mobile Download</h2>

            <p>Mobile casinos is perhaps the best thing that comes to mind when you are thinking about a thing that combines fun and money. You can get mobile casinos from Google Playstore or Apple Store but these apps are not that good. The quality of the games are not well made and the rewards are also not that much. Therefore, you must go to Infiniwin, the best website that has the best mobile casinos in Malaysia.</p>

          </div>

          <div class="footer_info_item">
            <h2>Promotions</h2>

            <p>Gambling is a great way for you to have fun. You can interact with other players and share stories or you can choose to lay back and play the slot games to have a peace of mind. Thanks to the technology, you can now play these casino games at the comfort of your house. Online casinos are aplenty in Malaysia but the best among all of them would be Infiniwin. Infiniwin has a really beautiful and responsive website as well as hundreds of casino games to play with.
              <br><br>

              Another thing to like about Infiniwin is that it is very generous in terms of promotions and rewards. These two items are vital to increase as well as retain the number of players currently playing on their platform. The more players there are, the easier for Infiniwin to profit and thus improve the quality of their games.</p>


          </div>

        </div>
        <div class="footer_bottom">

          <div class="footer_bottom_item" style="width:95%; margin-bottom:40px;">
            <h4>POWERED BY:</h4>
            <div class="owl-carousel provider-carousel">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/918.png" alt="918kiss"  width="200px"  height="50px">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/ab.png"  width="200px"  height="50px" alt="allbet">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/ag.png"   width="200px"  height="50px"  alt="ag gaming">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/bg.png"  width="200px"  height="50px" alt="biggaming">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/maxbet.png"  width="200px" height="50px" alt="maxbet">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/bs.png"  width="200px" height="50px" alt="bestsoft">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/ppy.png"  width="200px"  height="50px" alt="pragmaticplay">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/wmc.png"  width="200px"  height="50px" alt="wm casino">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/hog.png"  width="200px"  height="50px" alt="hogaming">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/jok.png"  width="200px"  height="50px" alt="joker123">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/live.png"  width="200px" height="50px"  alt="live22">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/mega.png"  width="200px"  height="50px" alt="mega888">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/pg.png"  width="200px"  height="50px" alt="prettygaming">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/pt.png"  width="200px"  height="50px" alt="playtech">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/dreagaming.png"  width="200px"  height="50px" alt="dreagaming">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/sky.png"  alt="sky3888" width="200px"  height="50px">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/spgb.png"  width="200px"  height="50px" alt="spadegaming">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/vgs.png"  width="200px"  height="50px" alt="evolution gaming">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/wm.png"  width="200px"  height="50px" alt="world match">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/xpg.png"  width="200px"   height="50px" alt="xprogaming">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/sagaming.png"  width="200px" height="50px" alt="sagaming">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/m8bet.png"  width="200px" height="50px" alt="m8bet">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/ibcbet.png"  width="200px" height="50px" alt="ibcbet">
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/citibet.png" alt="citibet"  width="200px" height="50px" >
              <img src="https://www.infiniwin3.com/infiniwin/img/footer/umbet.png"   width="200px" height="50px" alt="umbet">



            </div>
          </div>

          <div class="footer_bottom_item">
            <h4>PAYMENT METHOD:</h4>
            <div class="footer_banks">
              <div class="footer_bank" style="color:black; background:#ffc80b;">M<span>aybank</span></div>
              <div class="footer_bank" style="color:white; background:#ff0000;">C<span>imb Bank</span></div>
              <div class="footer_bank" style="color:#005cce; background:linear-gradient(rgb(200,200,200),white);">A<span>FFIN Bank</span></div>
              <div class="footer_bank" style="color:#00429a; background:#55c5e2;">R<span>HB Bank</span></div>
              <div class="footer_bank" style="color:#252842; background:linear-gradient(rgb(200,200,200),white);">H<span>ongLeong</span></div>

              <div class="footer_bank" style="color:#fff400; background:#ff000b;">A<span>M Bank</span></div>
              <div class="footer_bank" style="color:red; background:linear-gradient(rgb(200,200,200),white);">P<span>ublic Bank</span></div>

              <div class="footer_bank" style="color:#ffffff; background:#b6c836;">H<span>elp2Pay</span></div>
              <div class="footer_bank" style="color:#ffb61a; background:linear-gradient(rgb(200,200,200),white);">P<span>aytust</span></div>
              <div class="footer_bank" style="color:#5a3e02; background:#ffae00;">B<span>itcoin</span></div>
              <div class="footer_bank" style="color:#ffffff; background:#00b091;">T<span>ether</span></div>
            </div>
          </div>

          <footer>
            Copyright &copy; INFINIWIN. All Rights Reserved.
          </footer>

        </div>

      </div>

    </section>
  </div>

  <div class="lang">

    <div class="lang_content">
      <div class="lang_close">&#10005;</div>
      <div class="lang_header bling">CHANGE LANGUAGE</div>
      <div class="dropdown">
        <div class="country_item">
          <img src="https://www.infiniwin3.com/infiniwin/img/header/my.png" alt="">
          <span onclick="window.location.href='https://www.infiniwin3.com/my?lang=en'">ENGLISH</span>
        </div>
        <div class="country_item">
          <img src="https://www.infiniwin3.com/infiniwin/img/header/cn.png" alt="">
          <span onclick="window.location.href='https://www.infiniwin3.com/my?lang=cn'">中文</span>
        </div>
      </div>
    </div>

    <div class="close_popup">Click anywhere to close</div>
  </div>

  <div id="minigameNotify" class="pumpkin-float" style="position: fixed;width: 150px;bottom: 15px;left: 15px; z-index: 999;">
    <div class="closeBtn" onclick="hide('minigameNotify')" style="position: absolute; top: -10px;left: -5px;">
      <img src="https://www.infiniwin3.com/front/resources/img/closeBtn.png" onmouseover="this.src='https://www.infiniwin3.com/front/resources/img/closeBtn_hover.png'" onmouseout="this.src='https://www.infiniwin3.com/front/resources/img/closeBtn.png'">
    </div>
    <a href="https://www.infiniwin3.com/my/Api/gps-game/goToGame?game=dropgrab" target="_blank">
      <img style="width:100%;" src="https://www.infiniwin3.com/infiniwin/img/floating/moneysense.png">
    </a>
  </div>

  <div id="minigameFish" class="pumpkin-float" style="display: block;position: fixed;width: 150px;bottom: 15px;left: 175px; z-index: 999;">
    <div class="closeBtn" onclick="hide('minigameFish')" style="position: absolute; top: -10px;left: -5px;">
      <img src="https://www.infiniwin3.com/front/resources/img/closeBtn.png" onmouseover="this.src='https://www.infiniwin3.com/front/resources/img/closeBtn_hover.png'" onmouseout="this.src='https://www.infiniwin3.com/front/resources/img/closeBtn.png'">
    </div>
    <a href="https://www.infiniwin3.com/my/Api/gps-game/goToGame?game=fish" target="_blank">
      <img style="width:100%;" src="https://www.infiniwin3.com/infiniwin/img/floating/fish-icon.png">
    </a>
  </div>
</template>
