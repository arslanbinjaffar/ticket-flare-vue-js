<template >
  <!-- hero -->
  <section class="container hero">
    <div class="left">
      <p>Event Promotion Platform</p>
      <h1>
        Promote your events to
potential ticket buyers
      </h1>
      <p class="decription">We find a highly relevant audience for your event & trigger them with the most compelling marketing campaigns </p>
      <button
      class="d-flex gap-2"
     >Promote Now <span>icon</span></button>
     <p class="min-desc">Meet your extended marketing team</p>
    </div>
    <div class="right">
    <img src="/hero.png" alt="image">
    </div>
  </section>
  <!-- subscription -->
  <article class="subscription">
    <img src="/decathlon.svg" alt="icon">
    <img src="/zoho-logo.svg" alt="icon">
    <img src="/spc-logo.svg" alt="icon">
    <img src="/junoon-treeking-2.svg" alt="icon">
    <img src="/hard-rock-try-min.svg" alt="icon">
  </article>
  <!-- event sucess all -->
  <div class="event_sucess">
    <h4>Make your event a success with AllEvents</h4>
    <p>Promoting events successfully with <span>10+ years of expertise.</span> </p>
    <div class="all_event">
    <div v-for="(statistic, index) in eventStatistics" :key="index" class="text-center">
      <figure class="d-flex justify-content-center align-items-center">
        <img :src="statistic.icon" alt="icon">
      </figure>
      <h5>{{ statistic.value }}</h5>
      <p>{{ statistic.label }}</p>
    </div>
  </div>
     </div>
     <!-- event network -->
     <div class="event_network container">
      <h4>Reach a larger audience through AllEvents network</h4>
      <div class="networks">
        <div>
          <figure>
            <img src="/laptop.png" alt="laptop">
          </figure>
          <h6>Get your events featured</h6>
          <p>20 million+ event seekers discover events on All Events monthly. Catch their eye with top of the page position on AllEvents with featured listing. </p>
        </div>
        <div>
          <figure>
            <img src="/tablet.png" alt="tablet">
          </figure>
          <h6>Claim your spot in Newsletter</h6>
          <p>Get your event covered in All Events newsletter that lands in the inbox of 4 million event seekers who are actively looking for events to attend.</p>
        </div>
        <div>
          <figure>
            <img src="/allevents-push-notification.png" alt="mobile">
          </figure>
          <h6>Notify relevant audience</h6>
          <p>We push your event to the potential audience through web & mobile notifications instead of waiting for them to discover your events. </p>
        </div>
      </div>
     </div>
     <!-- promote envent -->
     <div class="event_promote">
      <div class="container">
         <h4 >Also, Promote your event where your customers are</h4>
        <div class="all_promotes">
          <div>
            <figure class="text-center">
              <img src="/social-media.svg" alt="image1"/>
            </figure>
            <h5>Social media</h5>
            <p>Ads on social media platform such as Facebook & Instagram</p>
          </div>
    <div>
      <figure class="text-center">
              <img src="/web-search-engine.svg" alt="image1"/>
            </figure>
      <h5>Search engine</h5>
      <p>Ranking event page on top of google search with google ads</p>
    </div>
    <div>
      <figure class="text-center">
              <img src="/advertisement.svg" alt="image1"/>
            </figure>
      <h5>Other websites</h5>
      <p>Ads on other web & apps your potential audience browse</p>
    </div>
  </div>
</div>
</div>
<!-- compaigns events -->
<div class="container event_compaigns">
  <h4>Campaigns managed by Event Marketing Professionals</h4>
  <div class="all_compaigns">
    <div v-for="(campaign, index) in campaigns" :key="index" :class="campaign.class">
      <h5>{{ campaign.title }}</h5>
      <p>{{ campaign.description }}</p>
    </div>
  </div>
</div>
<!-- packagaes -->
<div class="event_packages container">
<!-- heading -->
<div class="heading">
  <div class="heading_contents">
    <h3>Simple Pricing</h3>
    <p> Choose a plan that suits your event needs. </p>
  </div>
  <div class="btn-container">
    <button style="background: #2176FF;">For Recurring Events</button>
    <button style="background-color: transparent;" class="d-flex gap-2">Schedule a Call
    <span>icon</span>
    </button>
  </div>
</div>
<!-- packages -->
<div class="all_packages">
  <!-- single package -->
  <div>
    <div class="p-4 package_head">
      <h4>Basic</h4>
      <p class="mt-">Estimated reach: 40K - 200K</p>
      <div class="price_container">
        <p>US$</p>
        <p>249</p>
        <p>/event</p>
      </div>
      <button>Promote Now</button>
    </div>
    <div class="package_footer mt-3">
    <div v-for="(item, index) in basic" :key="index" class="d-flex gap-3 benefits align-items-center" style="margin-top: 24px;">
      <img :src="item.icon" alt="pic">
      <p class="m-0">{{ item.description }}</p>
    </div>
  </div>
  </div>
  <div>
    <div class="p-4 package_head">
      <h4>Regular</h4>
      <p class="mt-">Estimated reach: 200K - 400K</p>
      <div class="price_container">
        <p>US$</p>
        <p>499</p>
        <p>/event</p>
      </div>
      <button style="background-color: #2176FF;color: #fff;">Promote Now</button>
    </div>
    <div class="package_footer mt-3">
    <div v-for="(item, index) in regular" :key="index"  class="d-flex gap-3 benefits align-items-center" style="margin-top: 24px;">
      <img :src="item.icon" alt="pic">
      <p class="m-0">{{ item.description }}</p>
    </div>
  </div>
  </div>
  <div>
    <div class="p-4 package_head">
      <h4>Booster</h4>
      <p class="mt-">Estimated reach: 400K - 700K</p>
      <div class="price_container">
        <p>US$</p>
        <p>999</p>
        <p>/event</p>
      </div>
      <button>Promote Now</button>
    </div>
    <div class="package_footer mt-3">
    <div v-for="(item, index) in booster" :key="index" class="d-flex gap-3 benefits align-items-center" style="margin-top: 24px;">
      <img :src="item.icon" alt="pic">
      <p class="m-0">{{ item.description }}</p>
    </div>
  </div>
  </div>
</div>
</div>
<!-- free marketing -->
<div class="free-marketing">
  <div class="container">
      <h4>Free Event Marketing Tools</h4>
      <p class="text-center">Here are some tools that will help you make more out of your listing. </p>
       <div class="all_marketing">
          <div>
            <div class="head">
              <figure class="d-flex justify-content-center align-items-center h-100">
                <img src="/rank-google.svg" alt="pic">
              </figure>
            </div>
            <div class="footer">
              <h6>Rank Event on Google</h6>
              <p>Our tool helps events of all types to get featured on Google. </p>
              <div class="d-flex align-items-center justify-content-between" style="color: #2176FF;">
                <p  style="color: #2176FF;" >Submit Event</p>
                <img src="/arrow-right-2.svg" alt="arr  ">
              </div>
            </div>
          </div>
          <div>
            <div class="head">
              <figure class="d-flex justify-content-center align-items-center h-100">
                <img src="/link-black.svg" alt="pic">
              </figure>
            </div>
            <div class="footer">
              <h6>Create Trackable Links</h6>
              <p>Know exactly how you got that booking with the right tracking!  </p>
              <div class="d-flex align-items-center justify-content-between" style="color: #2176FF;">
                <p  style="color: #2176FF;" >Create Links</p>
                <img src="/arrow-right-2.svg" alt="arr  ">
              </div>
            </div>
          </div>
          <div>
            <div class="head">
              <figure class="d-flex justify-content-center align-items-center h-100">
                <img src="/qr-icon.svg" alt="pic">
              </figure>
            </div>
            <div class="footer">
              <h6>Share Creative QR Codes</h6>
              <p>A tool to create cool and custom QR codes for events.  </p>
              <div class="d-flex align-items-center justify-content-between" style="color: #2176FF;">
                <p  style="color: #2176FF;" >Try Creating</p>
                <img src="/arrow-right-2.svg" alt="arr  ">
              </div>
            </div>
          </div>
       </div>
  </div>
</div>
<!-- customer reviews -->
<div class="customer_reviews container">
  <h2>Customer Reviews</h2>
    <!-- carosuels -->
    <div class="container_review">
      <figure ><img src="/hrs-media.png" alt="image"></figure>
      <h6 style="margin-top: 24px;">AllEvents is one of the best event Marketing platforms we have experienced</h6>
      <p style="margin-top: 32px;">We are using AllEvents services to market our events & exhibitions. It is a good platform to reach out to new visitors and tell people about our event. Mr. Manoj from the AllEvents team has been the <span>best mentor</span> in helping me achieve my requirements & goals. I am using AllEvents for the past <span>3-4 years</span> now.</p>
      <p style="margin-top: 16px;">They deliver what they promise.</p>
      <div style="margin-top: 48px;">⭐⭐⭐⭐⭐  </div>
      <p style="margin-top: 16px;">Harish S, CEO @ HRS MEDIA</p>
    </div> 
</div>
<!-- medals -->
<div class="d-flex justify-content-center align-items-center gap-5 mt-5">
  <figure><img src="/medal.png" alt=""></figure>
  <figure><img src="/medal.png" alt=""></figure>
  <figure><img src="/medal.png" alt=""></figure>
</div>
<!-- success story -->
<div class="container sucess-story">
 <h3>Success Story</h3>
 <div class="d-flex justify-content-center story_container">
  <figure class="m-0">
    <img src="/sucessstory.png" alt="story">
  </figure>
  <div class>
    <h6>How Sahil Shah skyrocketed his event registrations <br> with AllEvents expertise!!</h6>
    <p style="margin-top: 40px;">Sahil Shah is a young entrepreneur & social media strategist.  As organizing workshop was quite a new thing for him, <br> he decided to focus on event and AllEvents looked after event promotion. <br> AllEvents experts' team continuously analyzed and optimized marketing campaigns based on target audience.</p>
    <p style="margin-top: 24px;">At the end of all marketing efforts, We met their expectations in terms of ROI and outpassed what was expected. The organizer received 1600+ registrations !!!</p>
  </div>
 </div>
</div>
<!-- event Faqs -->
<div class="events_faqs">
    <h2 class="text-center">Event Promotion FAQs</h2>
    <div class="faq_question" v-for="faq in faqs" :key="faq.id">
      <div class="d-flex justify-content-between align-items-center">
        <h6 class="m-0">{{ faq.question }}</h6>
        <figure class="m-0"><img src="/chevron-down2.svg" alt=""></figure>
      </div>
      <!-- <p>{{ faq.answer }}</p> -->
    </div>
  </div>
<!-- still question -->
<div class=" still_question">
  <div class="container h-100 d-flex justify-content-between align-items-center ">
    <h5>Still have a question?</h5>
    <button>Promote Now</button>
  </div>
</div>
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
import styled from 'vue-styled-components';
const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  gap: 40px;

  button {
    padding: 16px 28px;
    margin-top: 48px;
    background: #2176FF;
  }
`
export default {
  name: 'Home',
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      eventStatistics: [
        {
          icon: '/audience.svg',
          value: '20M People',
          label: 'Discovering Events',
        },
        {
          icon: '/rating.svg',
          value: '30K Events',
          label: 'Promoted Successfully',
        },
        {
          icon: '/goal.svg',
          value: '4.6 Rating',
          label: 'Customers Satisfaction',
        },
        // Add more objects as needed
      ],
      basic: [
        {
          icon: '/check.svg',
          description: 'Top position on AllEvents for your target locations',
        },
        {
          icon: '/check.svg',
          description: 'Top position in Weekly Newsletters',
        },
        {
          icon: '/check.svg',
          description: 'Paid Ads worth $2.56 on following channels',
        },
        {
          icon: '/check.svg',
          description: 'Facebook Ads',
        },
        {
          icon: '/check.svg',
          description: 'Instagram Ads',
        },  {
          icon: '/uncheck.svg',
          description: 'Google Display Ads',
        },  {
          icon: '/uncheck.svg',
          description: 'Youtube Ads',
        }, {
          icon: '/uncheck.svg',
          description: 'Ads on other relevant platforms',
        },
        
      ],
      regular: [
        {
          icon: '/check.svg',
          description: 'Top position on AllEvents for your target locations',
        },
        {
          icon: '/check.svg',
          description: 'Top position in Weekly Newsletters',
        },
        {
          icon: '/check.svg',
          description: 'Paid Ads worth $2.56 on following channels',
        },
        {
          icon: '/check.svg',
          description: 'Facebook Ads',
        },
        {
          icon: '/check.svg',
          description: 'Instagram Ads',
        },  {
          icon: '/check.svg',
          description: 'Google Display Ads',
        },  {
          icon: '/check.svg',
          description: 'Youtube Ads',
        }, {
          icon: '/uncheck.svg',
          description: 'Ads on other relevant platforms',
        },
        
      ],
      booster: [
        {
          icon: '/check.svg',
          description: 'Top position on AllEvents for your target locations',
        },
        {
          icon: '/check.svg',
          description: 'Top position in Weekly Newsletters',
        },
        {
          icon: '/check.svg',
          description: 'Paid Ads worth $2.56 on following channels',
        },
        {
          icon: '/check.svg',
          description: 'Facebook Ads',
        },
        {
          icon: '/check.svg',
          description: 'Instagram Ads',
        },  {
          icon: '/check.svg',
          description: 'Google Display Ads',
        },  {
          icon: '/check.svg',
          description: 'Youtube Ads',
        }, {
          icon: '/check.svg',
          description: 'Ads on other relevant platforms',
        },
        
      ],
      campaigns: [
        {
          title: 'Behavioral Targeting',
          description: 'Reach people who are most likely to be interested in your event based on their behavior, such as frequently visited websites, purchase histories.',
          class: 'red_compaign',
        },
        {
          title: 'Contextual targeting',
          description: 'Showcase your event ads on the websites & apps that are highly relevant to your events, such as showing a city walk event ad on a local city blog.',
          class: 'yellow_compaign',
        },
        {
          title: 'Search Targeting',
          description: 'Get your event ad in front of the people when they browse various websites & apps, based on what they have searched for earlier.',
          class: 'Wine_compaign',
        },
        {
          title: 'Lookalike Targeting',
          description: 'Expand your reach to a new set of audiences similar to those who have attended events like yours in the past based on our internal data.',
          class: 'baby-pink_compaign',
        },
        {
          title: 'Retargeting',
          description: 'Reach people who are most likely to be interested in your event based on their behavior, such as frequently visited websites, purchase histories.',
          class: 'blue_compaign',
        },
        {
          title: 'Demographic Targeting',
          description: 'Easily find your potential customers based on personal information such as gender, age, education, location, income, parental status.',
          class: 'green_compaign',
        },
      ],
      faqs: [
      { id: 1, question: "What is an event Promotion platform?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "What are the benefits of using AllEvents' event Promotion platform?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "What will be the duration of campaign?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "How will AllEvents - event marketing platform work with me?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "What are some common event promotion strategies?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "How will I see the results of the ad campaigns?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "Do I need to have my event page on AllEvents?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "How do I share my event information with you?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "Does AllEvents guarantee a certain number of ticket sale?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "Why should I pay AllEvents when I can do it myself?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "What’s next after I make the payment?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "Can I cancel and get a refund?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      // Add more FAQ items as needed
    ]
    };
  },
}

</script >

<style scoped>
section{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  gap: 40px;
}
section button{
padding: 16px 28px;
  margin-top: 48px;
  background:  #2176FF;
}
article{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 40px;
}
.left{
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
section p  {
  color:  #2176FF;
font-family: Outfit;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0;
}
.decription{
  margin-top: 24px;
color: #8B88A1;
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.min-desc{
  margin-top: 24px;
  color: #39364F;
font-family: Outfit;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20.48px; /* 146.286% */
}
.right{
flex: 1;
}
button{
border-radius: 12px;

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




/* event sucess */
.event_sucess{
  margin-top:74px;
  height:362px;
  background:  #F6F5F8;
}
.event_sucess h4{
  padding-top: 48px;
  color: var(--Gray-1, #39364F);
text-align: center;
font-family: Outfit;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.event_sucess p{
text-align: center;
opacity: 0.9;
color: #39364F;
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
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
.event_sucess .all_event p{
  margin: 0;
  margin-top: 8px;
}

/* event_network */
.event_network{
  height:650px;
  border-radius: 40px;
  background: #FFF;
}
.event_network h4{
  margin: 0;
margin-top:80px;
color: #39364F;
font-family: Outfit;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.event_network .networks{
  margin-top: 11px;
  display: grid;
grid-template-columns: repeat(3, minmax(300px,400px));
column-gap: 20px;
grid-template-rows: 1fr;
}
.event_network .networks figure{
    width: 100%;
height: 434px;
  margin: 0;
  display: flex ;
  justify-content: center;
  align-items: center;
}
.event_network .networks h6{
  margin: 0;
  margin-top: 32px;
  color: #39364F;
text-align: center;
font-family: Outfit;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.event_network .networks p{
  margin: 0;
 margin-top: 24px;
  color:  #8B88A1;
text-align: center;
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
/* promote event */
.event_promote{
  margin-top: 80px;

  height: 354px;
  background: #F6F5F8;
}
.event_promote h4{
  padding-top: 48px;
  color: #39364F;
text-align: center;
font-family: Outfit;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.event_promote .all_promotes{
  display: flex;
  justify-content: center;
  margin-top: 48px;
  gap: 160px;
  height: 100%;
}
.event_promote .all_promotes div{
  width: 247px;
}
.all_promotes h5{
  margin-top: 24px;
  color: #39364F;
text-align: center;
font-family: Outfit;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.all_promotes p{
  margin-top: 8px;
  color: #39364F;
text-align: center;
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
/* event compaigns */
.event_compaigns h4{
  margin-top: 80px;
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.event_compaigns .all_compaigns{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
}
.event_compaigns .all_compaigns{
  margin-top: 40px;
}
.event_compaigns .all_compaigns div{
  padding: 40px;
  border-radius: 12px;
}
.all_compaigns h5{
  color:  #39364F;
font-family: Outfit;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 24.34px; /* 101.417% */
}
.all_compaigns p{
  margin-top:24px;
  color: #8B88A1;
font-family: Outfit;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
/* compaigns differ colors */
.red_compaign{
  
  border: 1px solid #DF5145 ;
}
.yellow_compaign{
  border:1px solid #F7BF22;
}
.Wine_compaign{
  border: 1px solid  #A183C9;
}
.baby-pink_compaign{
  border: 1px solid  #E698BF;
}
.blue_compaign{
border: 1px solid  #21C0E8;
}
.green_compaign{
  border: 1px solid  #2EA36F;
}
/* packages */
.event_packages{
 margin-top: 80px;
}
.event_packages .heading{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.event_packages .heading .heading_contents h3{
  color: #39364F;
font-family: Outfit;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 41.6px; /* 130% */
margin: 0;
}
.event_packages .heading .heading_contents h4{
color: #8B88A1;
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 25.6px; /* 160% */
margin: 0;

}
.event_packages .heading .btn-container{
  border-radius: 32px;
background:  #CCE0FF;
display: flex;
padding: 8px;
}

.event_packages .heading .btn-container>button{
  border-radius: 32px;
  padding: 12px 24px;

}
.btn-container:nth-child(1){
   background:  #2176FF;
}



/* packages */
.all_packages{
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap:32px;
}
.all_packages>div .package_head{
  border-radius: 16px;
border: 1px solid var(--Border, #EDECF0);
background: var(--White, #FFF);
}
.all_packages>div .package_head .price_container{
  display: flex;

}
.all_packages>div .package_head .price_container>p:nth-child(2){
  color:  #2176FF;
font-family: Outfit;
font-size: 80px;
font-style: normal;
font-weight: 900;
line-height: normal;
align-self: center;
}
.all_packages>div .package_head h4{
  color:  #39364F;
font-family: Outfit;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.all_packages>div .package_head p{
  color:#8B88A1;
  font-family: Outfit;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.all_packages>div .package_head .price_container>p{
  color: #39364F;
font-family: Outfit;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.all_packages>div .package_head .price_container>p:nth-child(3){
 align-self: flex-end;
}
.all_packages>div .package_head button{
  padding: 16px 28px;
  width: 100%;
  background-color: transparent;
  border-radius: 12px;
border: 1px solid var(--Primary, #2176FF);
color: var(--Primary, #2176FF);
}
.package_footer div{
  margin-top: 16px;
}

/* free marketing */
.free-marketing{
  margin-top: 80px;
  height: 100%;
background:#F6F5F8;
}
.free-marketing .container{
  height: 640px;
}
.free-marketing h4{
  padding-top: 48px;
  color: var(--Gray-1, #39364F);
text-align: center;
font-family: Outfit;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.free-marketing  p{
  margin-top: 16px;
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.free-marketing  .all_marketing{
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(3,360px);
  gap: 32px;
}
.free-marketing  .all_marketing .head{
  border-radius: 8px;
  background: var(--Primary-Tint, #CCE0FF);
  height: 100%;
  padding: 50px 0px;
  height: 200px;
}
.free-marketing  .all_marketing .footer{
  background-color: #fff;
  padding:40px;
}
.free-marketing  .all_marketing .footer h6{
  color: var(--Gray-1, #39364F);
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.free-marketing  .all_marketing .footer p{
  color: var(--Gray-2, #8B88A1);
}
/* success-story */
.sucess-story{
  margin-top: 48px;
}
.sucess-story .story_container{
  gap: 40px;
  border-radius: 10px;
background: var(--White, #FFF);
box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.12);
  margin-top: 80px;
}
.sucess-story div h6{
  margin-top: 80px;
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.sucess-story div p{
  color: var(--Gray-2, #8B88A1);
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
/* still_question */
.still_question{
  margin-top: 80px;
  background: var(--Background, #F6F5F8);
  height: 200px;
}
.still_question h5{
  color: var(--Gray-1, #39364F);
text-align: center;
font-family: Outfit;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.still_question button{
  color: var(--White, #FFF);
font-family: Outfit;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
padding: 16px 28px;
border-radius: 12px;
background: var(--Primary, #2176FF);
}
/* event faqs */
.events_faqs{
  width: 1000px;
  margin:0 auto ;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.events_faqs h2{
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 48px;
}
.events_faqs .faq_question{
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  border-radius: 12px;
  padding: 24px;
  width: 100%;
border: 1px solid var(--Border, #EDECF0);
}
.events_faqs .faq_question h6{
  color: var(--Primary, #2176FF);
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.events_faqs .faq_question figure{
  width: 24px;
height: 24px;
}
/* reviews */
.customer_reviews{
  margin-top: 80px;
  border-radius: 40px;
background: var(--White, #FFF);
}
.customer_review h2{
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.customer_reviews .container_review{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  padding:40px 32px;
  border-radius: 10px;
  background: var(--White, #FFF);
box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.12);
width: 840px;
margin-top: 48px;

}
.customer_reviews .container_review h6{
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.customer_reviews .container_review p{
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.customer_reviews .container_review p span{
  font-weight: 700;
}

@media screen and (max-width:1200px) {
  section{
    height: auto;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    width: 100% !important;
  }
  section .left{

    display: flex;
    flex-direction: column;
  }
  section .left p{
    margin-top: 10px;
  }
  section .left .min-desc{
    text-align: center;
  }
  section .left  button{
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .event_sucess {
      padding:20px;
      height: auto;
  }
  .event_sucess h4{
    padding-top: 20px;
}
  .event_sucess .all_event{
    align-items: center;
    flex-direction: column;
    margin-top:20px;
    gap:20px;
    height: 100%;
}
.event_network {
    height:auto;
}
.event_network .networks {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    column-gap: 20px;
}
.event_network .networks h6 {
  margin-top: 20px;
}
.event_promote {
    margin-top: 50px;
    height:auto;
}
.event_promote .all_promotes{
    margin-top: 48px;
    flex-direction: column;
    align-items: center;
    gap:40px;
}
.event_compaigns h4 {
    margin-top:40px;
}
.event_compaigns .all_compaigns {
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap: 32px;
}


.event_packages{
    margin-top:40px;
}
.event_packages .heading {
  text-align: center;
  flex-direction: column;
}
.all_packages {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
}
.free-marketing {
    margin-top: 40px;
    padding-bottom: 20px;
}
.free-marketing .container {
    height: auto;
}
.free-marketing .all_marketing {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    gap: 32px;
}
.customer_reviews {
    margin-top: 40px;
}
.customer_reviews .container_review {
    max-width: 840px;
    width: 100%;
    margin-top: 30px;
}
.sucess-story .story_container {
    gap: 20px;
    margin-top: 40px;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    width: 100%;
}
.sucess-story div h6 {
    margin-top: 30px;
}
.sucess-story div p {
     margin-top: 20px !important;
}
.events_faqs {
    max-width: 1000px;
    width: 100%;
    margin-top: 40px;
}
.events_faqs .faq_question {
    width:90%;
}
.subscription{
  flex-wrap: wrap-reverse;
  height: auto;
  gap: 10px;
}
}
@media screen and (max-width:700px) {
  .hero .left{
    text-align: center;
  }
  .hero .left h1{
    font-size: 25px;
  }
  .hero .right img{
    max-width:700px;
    width: 100%;
  }
  .still_question {
    margin-top: 40px;
    height: auto;
}
.still_question  div{
  padding: 40px;
  gap: 40px;
  flex-direction: column;
}
.subscription {
  margin:20px 0;
  flex-direction: column;
}
.event_sucess p{
  padding:0 20px;
}
.event_network .networks {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    -moz-column-gap: 20px;
    column-gap: 20px;
}
.event_network .networks figure {
  max-width: 424px;
  height: auto;
  width: 100%;
}
.event_network .networks figure img{
  width: 100%;
  height: 100%;
}
.event_network h4{
  text-align: center;
  font-size: 24px;
}

.event_promote h4 {
    padding-top:30px;
    font-size: 25px;
}
.event_promote .all_promotes {
    margin:30px 0;
    padding-bottom: 30px;
    gap:20px;
}
.event_compaigns h4 {
    margin-top: 20px;
    text-align: center;
}
.event_compaigns .all_compaigns  div{
    padding: 20px;
}
.event_packages .heading .btn-container {
  background-color: transparent;
  flex-wrap: wrap;
  gap:20px;
  justify-content: center;
}
.event_packages .heading .btn-container button:last-child{
  background: #CCE0FF !important;
}
.free-marketing h4 {
    padding-top:30px;
    text-align: center;
    font-size:25px;
}
.free-marketing .all_marketing .footer {
    padding: 20px;
}
.sucess-story {
    margin-top:30px;
}
.sucess-story h3{
  text-align: center;
}
.sucess-story .story_container figure {
  max-width: 400px;
  width: 100%;
  height: auto;
}
.sucess-story .story_container figure img{
  width: 100%;

}
.sucess-story div h6 {
  text-align: center;
    margin-top:20px;
}
.events_faqs h2{
    font-size: 25px;
    margin-bottom:30px;
}
.events_faqs .faq_question {
    padding:12px;
}
.still_question div {
    padding:20px;
    gap:20px;
}
.customer_reviews h2{
  text-align: center;
}
.customer_reviews .container_review {
  padding: 20px;
}
.customer_reviews .container_review p {
 margin-top: 20px;
}
.customer_reviews .container_review div{
  margin-top: 30px !important;
}
.still_question h5 {
    font-size:25px;
    text-align: center;
}
}
</style>
