<template>
    <!-- hero -->
    <section class="hero container">
      <div class="left">
        <p>Event Listing Plugin</p>
        <h1>
            Boost Your Website Engagement with Events Discovery
        </h1>
        <p class="description">Let your website visitors discover local events of their interest
right on your website! </p>
        <button class="d-flex gap-2">
            Get Yours Now <span>icon</span>
        </button>
        <p class="min-desc">Easy to embed on any website!</p>
      </div>
      <div class="right">
        <img src="/event-listing-plugin.png" alt="image">
      </div>
    </section>
    <!-- INCREASE SITE FAVRIC -->
    <div class="event_sucess">
    <h2>Increase Site Metrics</h2>
    <p style="font-weight: 400;">Drive better engagement with unique events content</p>
    <div class="all_event">
    <div v-for="(statistic, index) in eventStatistics" :key="index" class="text-center">
      <figure class="d-flex justify-content-center align-items-center">
        <img :src="statistic.icon" alt="icon">
      </figure>
      <p>{{ statistic.label }}</p>
    </div>
  </div>
     </div>
     <!-- generate plugin -->
     <div class="generate_plugins ">
      <div class="container">
      <h2>Generate Plugin for Your Website</h2>
      <p>Select the city & category that matches your
       </p>
      <p>
      audience's interest, and get the code to showcase
      </p>
      <p>all the upcoming events on your website.</p>
      <form>
        <div>
          <label for=""><span>*</span>City</label>
       <input type="text" placeholder="Enter a City..">
        </div> 
       <div class="d-flex gap-5 mt-3">
        <div>
          <label for=""><span>*</span> Event Category</label>
       <input type="text" placeholder="Enter a Event Category.." value="All">
        </div>
        <div>
          <label for=""><span>*</span> Sort by</label>
          <input type="text" placeholder=" Sort by.." value="Start Time">
        </div>
       
       </div>
       <div class="d-flex align-items-center mt-4 gap-2">
        <input type="checkbox" name="" id="show-title">
        <label for="show-title">Show Title</label>
       </div>
       <div class="btn-container">
        <button class="get_code_btn">Get Code 
          <img src="/arrow-right-white.svg" alt="">
        </button>
        <button class="live_preview-btn">
          Live Preview
        </button>
       </div>
      </form>
    </div>
     
    </div>
    <!-- live preview -->
    <div class="live_preview">
      <img src="/arrow-down.svg" alt="">
      <div>
        <h4>Live <br>
           Preview</h4>
      </div>
      <img src="/arrow-down.svg" alt="">
    </div>
     <!-- ALL EVENTS CHICAGO -->
     <div class="chicago_events">
        <h2 class="text-center">All Events in Chicago</h2>
        <div class="container">
            <div class="head_bar">
                <div class="head_bar_left d-flex gap-3 align-items-center">
                  <div class="input-container d-flex gap-2 align-items-center">
                    <img src="/globe-2.svg" alt="">
                    <input type="text" placeholder="city" value="Chicago">
                  </div>
            <select name="" id="">
                <option value="">All</option>
            </select>
            <select name="" id="">
                <option value="">Upcomming</option>
            </select>
            <button class="search-btn">
              <img src="/search.svg" alt="">
            </button>
        </div>
        <div class="head_bar_right">
            <button>
                <img src="/plus-blue.svg" alt="">
                List Your Events
            </button>
        </div>
        </div>
        <!-- chicago_event-card -->
        <div class="chicago_concert-card_container">
          <div class="chicago_concert-card" v-for="concert in concerts" :key="concert.id">
        <figure>
          <img :src="concert.image" alt="image">

        </figure>
        <div class="d-flex concert-info">
          <div class="date_container">
            <p class="concert_month">Dec</p>
            <p class="concert_day">02</p>
          </div>
          <div>
            <h6 class="concert_name">{{ concert.eventName }}</h6>
            <p class="concert_venue">{{ concert.venue }}</p>
            <small class="concert_date_time">Sat Dec 02 2023 at 12:30 am</small>
          </div>
        </div>
      </div>
        </div>
      
        </div>
        <button class="get-code-btn">Get Code
          <img src="/chevron-right.svg" alt="">
        </button>
        </div>
        <!-- install this plugin? -->
        <div class="install_plugins ">
          <div class="container">

           <h2>How to install this plugin?</h2>
           <p class="text-center">As easy as copy-paste!</p>
           <div class="plugins_container">
            <div class="single_plugin">
              <figure>
                <img src="/add-event.svg" alt="">
              </figure>
              <div>
                <h4>Create a New Page</h4>
                <p>Create a page called "Events" on your website</p>
              </div>
            </div>
            <div class="single_plugin">
              <figure>
                <img src="/customize.svg" alt="">
              </figure>
              <div>
                <h4>Customize Plugin</h4>
                <p>Get the code & add it to your websites on the Events page</p>
              </div>
            </div>
            <div class="single_plugin">
              <figure>
                <img src="/copy-paste.svg" alt="">
              </figure>
              <div>
                <h4>Copy-Paste Code</h4>
                <p>Create a page called "Events" on your website</p>
              </div>
            </div>
           </div>
           <p class="plugins_line">Once the plugin is live on your website, please notify us at <a href="">support@allevents.in</a> along with your website link, and we may showcase your website on this page with a link back. </p>
          </div>
       
          </div>
          <!-- success story -->
<div class="container sucess-story">
 <div class="story_container">
  <figure>
    <img src="/monetize.png" alt="story">
  </figure>
  <div class="monetize_info">
    <h6 class="m-0">Monetize Your Audience with Event</h6>
    <h6 class="m-0"> Marketing</h6>
    <p class="m-0">Many of your visitors would be event creators as well! Refer AllEvents Event
</p>
<p class="m-0">
Promotional Plans to potential event creators and earn 10% recurring
</p>
<p class="m-0">commission on every referral.</p>
    <div class="d-flex align-items-center gap-2 explore">
      <p class="m-0" style="color: #2176FF; font-weight: 700;">Explore our Affiliate Program</p>
      <img src="/arrow-right-blue.svg" alt="">
    </div>
  </div>
 </div>
</div>
<!-- Check out other plugins -->
<div class="check_out_other_plugins">
  <h2>Check out other plugins</h2>
  <div class="check_out_other_plugins_container container">
    <div class="check_out_other_plugin">
      <h5>WordPress Plugin for Your City </h5>
      <p>Is your website powered by WordPress? Add Event Listing on your website with a WordPress Plugin.</p>
      <div class="d-flex align-items-center gap-2 explore">
      <p class="m-0" style="color: #2176FF; font-weight: 700;">Explore our Affiliate Program</p>
      <img src="/arrow-right-blue.svg" alt="">
    </div>
    </div>
    <div class="check_out_other_plugin">
      <h5>Events by Organizer</h5>
      <p>Display all the upcoming events published by your favorite Event Organizers on your website.</p>
      <div class="d-flex align-items-center gap-2 explore">
      <p class="m-0" style="color: #2176FF; font-weight: 700;">Explore Organizer Plugin</p>
      <img src="/arrow-right-blue.svg" alt="">
    </div>
    </div>
  </div>
</div>
          <!--Looking for an advanced solution?  -->
  <div class=" still_question">
  <div class="container d-flex justify-content-between align-items-center ">
    <h2>Looking for an advanced solution?</h2>
    <button>Schedule a call</button>
  </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'Yours',
    data() {
          return {
              eventStatistics: [
                  {
                      icon: '/clock.svg',
                      label: 'Increased Time-spent',
                  },
                  {
                      icon: '/web-search-engine.svg',
                      label: 'Improved Search Ranking',
                  },
                  {
                      icon: '/menu.svg',
                      label: 'No regular maintenance',
                  },
                  // Add more objects as needed
              ],
              concerts:[
  {
    id: 1,
    image: "/concert.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Pierce the Veil (Concert)",
    venue: "Byline Bank Aragon Ballroom, 1106 W L…"
  },
  {
    id: 2,
    image: "/concert-2.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Another Concert",
    venue: "Some Venue, City"
  },
  {
    id: 3,
    image: "/concert-3.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Yet Another Concert",
    venue: "Another Venue, City"
  },
  {
    id: 4,
    image: "/concert-4.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Concert Four",
    venue: "Venue Four, City"
  },
  {
    id: 5,
    image: "/concert-5.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Concert Five",
    venue: "Venue Five, City"
  },
  {
    id: 6,
    image: "/concert-6.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Concert Six",
    venue: "Venue Six, City"
  },
  {
    id: 7,
    image: "/concert-7.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Concert Seven",
    venue: "Venue Seven, City"
  },
  {
    id: 8,
    image: "/concert-8.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Concert Eight",
    venue: "Venue Eight, City"
  },
  {
    id: 9,
    image: "/concert-9.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Concert Nine",
    venue: "Venue Nine, City"
  },
  {
    id: 10,
    image: "/concert-10.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Concert Ten",
    venue: "Venue Ten, City"
  },
  {
    id: 11,
    image: "/concert-11.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Concert Eleven",
    venue: "Venue Eleven, City"
  },
  {
    id: 12,
    image: "/concert-12.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Concert Twelve",
    venue: "Venue Twelve, City"
  },
  {
    id: 13,
    image: "/concert-13.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Concert Thirteen",
    venue: "Venue Thirteen, City"
                  },
                  {
    id: 14,
    image: "/concert.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Pierce the Veil (Concert)",
    venue: "Byline Bank Aragon Ballroom, 1106 W L…"
                  },
                  {
    id: 15,
    image: "/concert.png",
    date: "Dec 02",
    time: "12:30 am",
    eventName: "Pierce the Veil (Concert)",
    venue: "Byline Bank Aragon Ballroom, 1106 W L…"
  },
]

// Now, the concerts array contains objects with images ranging from "concert.png" to "concert-13.png"

          }
    }
  };
  </script>
  
  <style scoped>
  .hero{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  gap: 40px;
}
.hero button{
  margin-top: 48px;

}

.hero .left{
flex: 1;
}
h1{
  color: #39364F;
font-family: Outfit;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.hero p:nth-child(1)  {
  color:  #2176FF;
font-family: Outfit;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
}
.hero .decription{
  margin-top: 24px;

}
.hero .min-desc{
  margin-top: 24px;
  color: #39364F;
font-family: Outfit;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20.48px; /* 146.286% */
}
.hero .right{
flex: 1;
}

/* increase site  */
.event_sucess{
  margin-top: 20px;
  height:332px;
  background:  #F6F5F8;
}
.event_sucess h2{
  padding-top: 48px;
 
}
.event_sucess p{
text-align: center;
color: #39364F;
font-weight: 700;
margin-top: 16px;
margin: 0;
}
.event_sucess p span{
  font-weight: 700;
}
.event_sucess .all_event{
  display: flex;
  justify-content: center;
  margin-top: 48px;
  gap: 160px;
  height: 100%;
}
.event_sucess .all_event h5{
  margin: 0;
  margin-top: 32px;
}
.chicago_events{
    margin-top: 48px;
   display: flex;
   flex-direction: column;

}
.chicago_events .get-code-btn{
  margin-top: 64px;
  align-self: center;
}
.chicago_events .head_bar{
    margin-top:40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
input[type="checkbox"]{
  width:20px;
height: 20px;
border-radius: 2.5px;
background: var(--Primary, #2176FF);
}
.chicago_events .head_bar select,.input-container,
.chicago_events .head_bar_right button{
    border-radius: 8px;
border: 1px solid var(--Border, #EDECF0);
background: #FFF;
padding: 12px;
width: 223px;
outline: none;
}
.search-btn{
  padding: 12px;

}
.input-container input{
outline: none;
border: none;
width: 100%;
height: 100%;
color: var(--Primary, #2176FF);
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.chicago_events .head_bar_left button{
border-radius: 8px;
background: var(--Primary, #2176FF);
}
.chicago_events .head_bar_right button{
    display: flex;
    gap: 16px;
    align-items: center;
    color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.chicago_concert-card_container{
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,410px));
  gap: 25px;
}
.chicago_concert-card_container .chicago_concert-card{
  border: 1px solid #DDD;
border-radius: 8px;
background: var(--White, #FFF);
display: flex;
height: 296px;
flex-direction: column;
}

.chicago_concert-card figure{
  width: 100%;
  height: 100%;
  
}
.chicago_concert-card .concert-info{
  padding:16px;
  padding-bottom: 32px;
  gap: 16px;
  align-items: center;
}
.chicago_concert-card figure img{
  object-fit: cover;
  border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    width: 100%;
    height: 100%;
}
.date_container{
  align-self: self-start;
  padding: 8px 11px;
  border-radius: 8px;
  border: 1px solid var(--Border, #EDECF0);
}
.date_container p{
  margin: 0;
  color: var(--Gray-1, #39364F);
  text-align: center;
  font-family: Outfit;
  font-size: 15.625px;
  font-style: normal;
  font-weight: 900;
line-height: normal;
text-transform: uppercase;
}
.date_container .concert_month{
  font-size: 16px;
  color: var(--Primary, #2176FF);

}
.concert_name{
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.concert_venue{
  color: var(--Gray-2, #8B88A1);
font-family: Outfit;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 8px;
}
.concert_date_time{
margin-top: 29px;

  color: var(--Primary, #2176FF);
font-family: Outfit;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
/* generate_plugins */
.generate_plugins{
  margin-top: 80px;
 
}
.generate_plugins .container{
  border-radius: 10px;
border: 1px solid #EEE;
background: rgba(236, 236, 236, 0.58);
padding: 47px 175px 40.66px 175px;
margin: 0 auto;
width:1000px ;
}
.generate_plugins .container h2{
  margin-bottom: 20px;

}
.generate_plugins .container p{
  margin: 0;
  text-align: center;
  padding: 0px 15.02px 1.6px 15.98px;
  color: var(--Gray-1, #39364F);
}
.generate_plugins .container form {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}
.generate_plugins .container form label span{
  color: #C23934;
font-family: Outfit;
font-size: 19.2px;
font-style: normal;
font-weight: 400;
line-height: 0px; /* 0% */
}
.generate_plugins .container form label{
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 12.8px;
font-style: normal;
font-weight: 400;
line-height: 14.72px; /* 115% */
}
.generate_plugins .container form input[type="text"]{
  margin-top: 6px;
  border-radius: 4px;
border: 2px solid #D8DDE6;
background: var(--White, #FFF);
padding: 11.5px 22px;
width: 100%;
}
.generate_plugins .container form input::placeholder{
font-family: Outfit;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.btn-container{
  padding-top: 48px;
  align-self: center;
  display: flex;
  gap: 15px;
  align-items: center;
}
.get_code_btn{
  border-radius: 4px;
background: var(--Primary, #2176FF);
box-shadow: 0px 5px 15px 0px rgba(37, 44, 97, 0.15), 0px 2px 4px 0px rgba(136, 144, 195, 0.20);
display: flex;
padding: 12px 22px 12.8px 22px;
justify-content: center;
align-items: center;
gap: 6.699px;
}

.live_preview-btn{
  color: var(--Gray-1, #39364F);
  border-radius: 4px;
background: var(--White, #FFF);
box-shadow: 0px 5px 15px 0px rgba(37, 44, 97, 0.15), 0px 2px 4px 0px rgba(136, 144, 195, 0.20);
display: flex;
padding: 12px 21.664px 12.8px 22px;
}


.live_preview{
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
background: #FEFEE6;
gap: 6px;

}
.live_preview h4{
  color: var(--Gray-1, #39364F);
text-align: center;
font-family: Outfit;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 160% */
letter-spacing: 2px;
text-transform: uppercase;
}















/* plugins */
.install_plugins {
  margin-top: 88px;
  background: #F6F5F8;
}
.install_plugins .container{
  height: auto;
}
.install_plugins .container h2{
  padding-top: 48px;
}
.install_plugins .container p{
  margin-top:8px ;
}
.plugins_container{
  padding-top: 48px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  gap: 40px ;
}
.single_plugin{
  display: flex;
  align-items: center;
  gap: 24px;
}
.single_plugin h4{
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.single_plugin p{
  margin-top: 8px;
  color: var(--Gray-1, #39364F);
}
.plugins_line{
  padding:48px 170px;
  text-align: center;
  color: var(--Gray-1, #39364F);
}
.plugins_line a{
  color: var(--Primary, #2176FF);
}
/* Looking for an advanced solution? */
.still_question{
  padding: 75px 116px;
  margin-top: 80px;
  background: var(--Background, #F6F5F8);
}
/* sucess-story */
.sucess-story{
  margin-top: 48px;
}
.sucess-story .story_container{
  border-radius: 10px;
  background: var(--White, #FFF);
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.12);
  margin-top: 80px;
    margin: 0 auto;
    max-width:1000px;
    width: 100%;
    display:flex;
    align-items: flex-start;
    gap: 40px;
}
.sucess-story .story_container  figure{
  width: 300px;
height:100%;
margin:0;
}
.sucess-story  figure img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.sucess-story div h6{
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 18.7px;
font-style: normal;
font-weight: 700;
line-height: 24.34px; /* 130.16% */
}
.monetize_info{
  padding: 10px 0;
}
 .monetize_info .explore{
  margin-top: 48px;
}
.sucess-story div p{
  color: var(--Gray-1, #39364F);
line-height: 25.6px; /* 160% */
}
/* Check out other plugins */
.check_out_other_plugins{
   margin-top: 80px;
}
.check_out_other_plugins_container{
  margin-top: 48px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  gap: 24px;
  width:890px;
}
.check_out_other_plugin{
  padding: 24px;
  padding-right: 32px;
  border-radius: 10px;
background: var(--White, #FFF);
box-shadow: 0px 5px 15px 0px rgba(37, 44, 97, 0.15), 0px 2px 4px 0px rgba(136, 144, 195, 0.20);
}
.check_out_other_plugin h5{
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.check_out_other_plugin p{
  margin-top: 16px;
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.check_out_other_plugin .explore{
  margin-top: 53px;
}
button{
border-radius: 12px;
padding: 16px 28px;
background:  #2176FF;
border: none;
outline: none;
color: #FFF;
font-family: Outfit;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
}
h2{
  color: var(--Gray-1, #39364F);
text-align: center;
font-family: Outfit;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
p{
  color: #8B88A1;
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

@media screen and (max-width:1200px) {
  .hero{
    margin-top: 20px;
    height: auto;
    flex-direction: column-reverse;
    justify-content: center;
  }
  .hero .left button{
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top:20px;
  }
  .generate_plugins{
    margin-top: 40px;
  }
  .chicago_events .head_bar  {
    margin-top: 30px;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
}
.sucess-story  {
    margin-top:30px;
}
.sucess-story .story_container  {
    margin-top: 40px;
    max-width: 1000px;
    width: 90%;
    gap: 20px;
}
}


@media screen and (max-width:1000px) {
  .event_sucess  {
    height:auto;
}
.event_sucess .all_event  {
    gap: 50px;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 20px;
}
.generate_plugins .container  {
    border-radius: 10px;
    max-width: 1000px;
    width:90%;
    padding: 20px;
}
.plugins_line  {
    padding:20px;
    text-align: center;
    color: var(--Gray-1, #39364F);
}
.sucess-story .story_container  {
   flex-direction: column;
   align-items: center;
}
.still_question  {
    padding:40px;
    margin-top: 40px;
  }
  .still_question div{
    flex-direction: column;
}
}
@media screen and (max-width:1000px) {
  .hero {
    text-align: center;
  }
  .hero h1 {
    font-size: 25px;
}
  .hero .right img{
    max-width: 620px;
    width: 100%;
  }
  .btn-container {
    padding-top:30px;
    flex-direction: column;
}
.generate_plugins .container h2{
  font-size: 25px;
}
.chicago_concert-card_container {
    margin-top:30px;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));

}
.chicago_concert-card_container .chicago_concert-card {
    height:auto;
}
.chicago_concert-card .concert-info {
    padding: 10px;
}
  .chicago_events .head_bar {
    margin-top: 20px;
  justify-content: center;
  width: 100%;
}
.chicago_events .head_bar .head_bar_left{
  justify-content: center;
  flex-wrap: wrap;
}
.sucess-story .story_container {
    flex-direction: column;
    align-items: center;
}
.sucess-story .story_container figure {
  max-width: 300px;
  width: 100%;
}
.sucess-story .story_container figure  img{
  width: 100%;
  height: 100%;
}
.check_out_other_plugins_container {
    margin-top:30px;
    max-width: 890px;
    width: 100%;
}
.sucess-story .story_container {
  padding: 10px;
}
.check_out_other_plugin {
    padding:16px;
}
.monetize_info .explore {
    margin-top:20px;
}
.check_out_other_plugin .explore {
    margin-top:20px;
}
.still_question{
    padding: 20px;
    margin-top: 20px;
}
.still_question button{
  margin-top: 20px;
}
.still_question div h2{
  font-size: 25px ;
}
.plugins_container {
    padding-top: 30px;
}
}
  </style>
  