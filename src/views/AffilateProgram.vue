<template>
   <section class="container hero">
    <div class="left">
      <h1>
        Join AllEvents Affiliate <br class="d-none d-xl-block">
        Program
      </h1>
      <p class="decription">Refer AllEvents to potential event organizers and earn 10% recurring commission on every <br class="d-none d-xl-block">referral. </p>
      <button
      class="d-flex gap-2"
     >Get in Touch <img src="/chevron-right.svg" alt=""></button>
    </div>
    <div class="right">
    <img src="/affiliate-program.png" alt="image">
    </div>
  </section>
  <!-- form -->
  <article class="join_events mx-auto">
   <h2 class="text-center">Join AllEvents Affiliate Program & Start Earning Money</h2>
   <form action="" class="d-flex flex-column ">
    <div class="d-flex gap-3 flex-lg-row flex-column align-items-center">
      <div class="d-flex flex-column w-100">    
        <label for=""> <span>*</span> Enter your name:</label>
        <input type="text" placeholder="Your full name">
      </div>
      <div class="d-flex flex-column mt-2 w-100">
        <label for="">  <span>*</span> Enter your Email:</label>
        <input type="text"  placeholder="your@email.com">
      </div>
    </div>
    <div  class="d-flex flex-column mt-2">
      <label for=""> <span>*</span> Enter your phonenumber:</label>
        <input type="text" placeholder="Phone number">
    </div>
    <div  class="d-flex flex-column mt-2">
      <label for=""> <span>*</span> Enter your country:</label>
        <input type="text" placeholder="Your Country">
    </div>
    <div  class="d-flex flex-column mt-2">
      <label for=""> <span>*</span> Enter your website URL:</label>
        <input type="text" placeholder="https://website.com">
    </div>
    <div  class="d-flex flex-column mt-2">
      <label for=""> <span>*</span>  How can you help us onboard customers (Event Organizers)?</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    <button style="align-self: center;" class="d-flex align-items-center gap-3">
      Submit
      <img src="/arrow-right-white.svg" alt="">
        </button>
        <ul class="d-flex gap-5 mt-5">
          <li>instant sign up</li>
          <li>free 14 days trial</li>
          <li>tech support</li>
        </ul>
   </form>
  </article>
  <!-- works -->
  <div class="works">
    <h2 class="text-center">How It Works</h2>
    <div class="works_Container">
      <div class="single_work">
        <img src="/calender-timeline.png" alt="calender">
        <div>
          <h5 class="m-0">Apply To Join</h5>
          <p>Joining our affiliate program is Free. You get $10 joining <br>
            bonus. Submit your details and we will get in touch with <br>
            you shortly.</p>
          </div>
      </div>
      <div class="single_work">
        <div>
          <h5 class="m-0">Share AllEvents With potential organizers</h5>
          <p class="m-0">Share unique affiliate link with potential event creators.</p>
          <p>Get a bunch of promotional assets to promote AllEvents
          Event promotional plan across various channels. </p>
          </div>
        <img src="/social-icons-timeline.png" alt="calender">
       
      </div>
      <div class="single_work">
        <img src="/rating-timeline.png" alt="calender">
        <div>
          <h5 class="m-0">Earn Amazing Rewards</h5>
          <p>Earn <span>10% recurring commission</span> on every event
promotional plan purchase your referral makes..</p>
<p>Also, Get <span>additional bonus of $25</span> after crossing 8 event
referrals.</p>
          </div>
      </div>
    </div>
  </div>

  <!-- Your Benefits -->
  <div class="your_benefits container">
  <h2>Your Benefits</h2>
  <div class="your_benefits_container">
    <div v-for="(benefit, index) in benefits" :key="index" class="your_benefit">
      <figure class="m-0">
        <img :src="benefit.image" alt="image">
      </figure>
      <div> 
        <h3>{{ benefit.title }}</h3>
        <p>{{ benefit.description }}</p>
      </div>
    </div>
  </div>
</div>
<!-- promotional packages -->
<div class="event_packages container">
<!-- heading -->
    <h2 class="text-center">Our Promotional Plans</h2>
    <p class="text-center"> Various plans are available for organizers at different scales. </p>
<!-- packages -->
<div class="all_packages">
  <!-- single package -->
  <div>
    <div class="p-4 package_head">
      <h4>Basic</h4>
      <p class="mt-">Estimated reach: 40K - 200K</p>
      <div class="price_container mt-2">
        <p>US$</p>
        <p>249</p>
        <p>/event</p>
      </div>
      <button>Promote Now</button>
    </div>
 
  </div>
  <div>
    <div class="p-4 package_head">
      <h4>Regular</h4>
      <p class="mt-">Estimated reach: 200K - 400K</p>
      <div class="price_container mt-2">
        <p>US$</p>
        <p>499</p>
        <p>/event</p>
      </div>
      <button style="background-color: #2176FF;color: #fff;">Promote Now</button>
    </div>
  
  </div>
  <div>
    <div class="p-4 package_head">
      <h4>Booster</h4>
      <p class="mt-">Estimated reach: 400K - 700K</p>
      <div class="price_container mt-2">
        <p>US$</p>
        <p>999</p>
        <p>/event</p>
      </div>
      <button>Promote Now</button>
    </div>

  </div>
</div>
</div>
<!-- event Faqs -->
<div class="events_faqs">
    <h2 class="text-center">We have answered almost all your questions.</h2>
    <div class="faq_question" v-for="faq in faqs" :key="faq.id">
      <div class="d-flex justify-content-between align-items-center ">
        <h6 class="m-0">{{ faq.question }}</h6>
        <figure class="m-0"><img src="/chevron-down2.svg" alt=""></figure>
      </div>
      <!-- <p>{{ faq.answer }}</p> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  data() {
    return {
      benefits: [
        {
          id: 1,
          image: "/sign-in-bonus.svg",
          title: "Sign up bonus",
          description: "Get flat $10 sign up bonus for joining AllEvents affiliate program.",
        },
        {
          id: 2,
          image: "/rewards.svg",
          title: "Rewards",
          description: "Get 10% recurring commission for every event promotion plan your referral purchase.",
        },
        {
          id: 3,
          image: "/low-threshold.svg",
          title: "Low threshold",
          description: "Only $50 payment threshold. Receive direct payment into your PayPal account.",
        },{
          id: 4,
          image: "/additional-bonus.svg",
          title: "Additional Bonus",
          description: "Get additional bonus of $25 after successfully referring 8 event organizers.",
        },{
          id: 5,
          image: "/transparency.svg",
          title: "Transparency",
          description: "Super easy & transparent tracking system of your referrals & commissions.",
        },
        // Add more benefits as needed
      ],

      faqs: [
      { id: 1, question: "Can I sign up through my own referral link?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "Can I sign up on behalf of my clients through my own referral link?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "My friend/client signed up without using the referral link. What can I do?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "Why can’t I see my sign-ups and/or rewards?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "When will I get paid?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      { id: 1, question: "How can I get paid if I don’t have a PayPal account?", answer: "An event promotion platform is a tool or service that helps organizers promote and market their events. It provides features such as online ticketing, social media promotion, email campaigns, and other tools to increase the visibility and attendance of events." },
      // Add more FAQ items as needed
    ]
    };
  },
};
</script>


<style scoped>
.hero{
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  gap: 80px;
}
.hero h1{
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.decription{
  margin-top: 24px;
  color: var(--Gray-2, #8B88A1);
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
 button{
  border-radius: 12px;
  padding: 16px 28px;
  margin-top: 48px;
  background:  #2176FF;
  color: var(--White, #FFF);
font-family: Outfit;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
}
.join_events{
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
padding: 48px 65px 41.28px 66px;
width: 1000px;
border-radius: 10px;
border: 1px solid #EEE;

}
.join_events form{
  margin-top: 80px;

}
.join_events form label{
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 12.8px;
font-style: normal;
font-weight: 400;
line-height: 14.72px; /* 115% */
display: flex;
align-items: center;
gap: 4px;
}
.join_events form input{
border-radius: 4px;
border: 2px solid #D8DDE6;
background: rgba(246, 246, 246, 0.30);
height: 44px;
padding: 11.5px 22px;
outline: 1px solid #D8DDE6;
margin-top: 6px;
margin-bottom: 16px;
}
.join_events form input::placeholder{
  color: #949596;
font-family: Outfit;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform:capitalize ;
}
.join_events form span{
  color: #C23934;
font-family: Outfit;
font-size: 19.2px;
font-style: normal;
font-weight: 400;
line-height: 0px; /* 0% */
}
.join_events form textarea{
border-radius: 4px;
border: 2px solid #D8DDE6;
background: rgba(246, 246, 246, 0.30);
height: 100px;
resize: none;
margin-top: 6px;
margin-bottom: 16px;
outline: none;
}
.join_events form button{
  margin-top: 44px;
  width: 120px;
height: 44.8px;
  border-radius: 4px;
background:  #2176FF;
box-shadow: 0px 5px 15px 0px rgba(37, 44, 97, 0.15), 0px 2px 4px 0px rgba(136, 144, 195, 0.20);
color: var(--White, #FFF);
text-align: center;
font-family: Outfit;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 16.8px; /* 120% */
}
.join_events form ul li {
  color:  #39364F;
  opacity: 0.65;
text-align: center;
font-family: Outfit;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 11.5px; /* 115% */
letter-spacing: 0.12px;
text-transform: uppercase;
}
.join_events form ul li::marker{
  border-radius: 2px;
  opacity: 0.65;
background: rgba(48, 48, 48, 0.30);
}
.works{
  padding-bottom: 48px;
  background: #F6F5F8;
}
.works h2{
  padding-top: 48px;
  color: #39364F;
  text-align: center;
}
.works_Container{
  display: grid;
  grid-template-rows: repeat(3,400px);
  grid-template-columns:1080px;
  justify-content: center;
  margin-top: 80px;
  gap:100px;
}
.single_work{
  display: flex;
  gap: 120px;
}
.single_work h5{
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.single_work p{
 margin-top: 30px;
 color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 25.6px; /* 160% */

}
.single_work p span{
  font-weight: 700;
}
/* your_benefits container */
.your_benefits{
margin-top: 80px;
}
.your_benefits_container{
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(320px,416px));
  gap: 16px;
}
.your_benefit{
  border-radius: 16px;
border: 1px solid var(--Border, #EDECF0);
display: flex;
padding: 32px;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: 32px;
}
.your_benefit p{
  margin-top: 8px;
}


/* packages */
.event_packages {
 margin-top: 80px;
}
.event_packages p{
  margin-top: 16px;
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
/* events faqs */
.events_faqs{
  width: 1000px;
  margin:0 auto ;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
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
h2{
  margin:0px;
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h3{
  color: var(--Gray-1, #39364F);
font-family: Outfit;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
p{
  margin:0px;
  color: #8B88A1;
font-family: Outfit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
@media  screen and (max-width:1200px) {
  .hero{
    width: 100%;
    height: auto;
    margin: 40px auto;
    gap: 40px;
  }
}
@media screen and (max-width:1000px) {
  .hero{
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  .hero .left{
    display: flex;
    flex-direction: column;
  }
  .hero .left button{
    width: 100%;
    align-self: center;
    display: flex;
    justify-content: center;
  }
  /* join_events */
  .join_events{
 max-width: 1000px;
 width: 100%;
 margin: 40px;
 border: none;
 padding: 10px;

  }
  .join_events input{
    width: 100%;
  }
  .join_events form {
    width: 80%;
    margin-top: 20px;
  }
  .join_events form:nth-child(1){
  gap: 0 !important;
  background-color: red;
  }
  .join_events form button{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .join_events form ul{
    justify-content: center;
  }
  /* works */
  .works{

  }
  .works_Container{
    display: block;

  }
  .single_work{
    flex-direction:column-reverse;
    align-items: center;
    gap:50px;
    margin-top: 20px;
    text-align: center;
}
.single_work p{
  margin-top: 10px;
}
.your_benefits_container{
    grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
    justify-content: center;
}
.all_packages {
    margin-top:30px;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    gap: 32px;
}
.events_faqs {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.events_faqs h2[data-v-039c5b43] {  
    margin-bottom: 25px;
}
.events_faqs .faq_question {
    width: 90%;
}
}
@media screen and (max-width: 700px){
  .hero .left{
    text-align: center;
  }
.hero .right img{
  max-width: 492px;
  width: 100%;
  height: auto;
}
.hero h1 {
  text-align: center;
    font-size: 30px;
}
.hero .decription {
    margin-top: 12px;
}
.hero button {
    margin-top: 30px;
}
.your_benefits{
    margin-top: 40px;
    padding: 20px;
}
.your_benefits_container[data-v-51f183e8] {
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    justify-content: center;
}
.works_Container {
    margin-top: 40px;
    gap:70px;
}
.single_work {
  padding: 20px;
}
.single_work img{
  max-width: 445px;
  width: 100%;
}
h2 {
    font-size:25px;
}
.events_faqs h2 {
    font-size:25px;
    margin-bottom:30px;
}
.events_faqs {
    margin-top:30px;
}
.events_faqs .faq_question{
    padding: 12px;
}
}
</style>
