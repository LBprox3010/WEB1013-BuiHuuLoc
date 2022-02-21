// jquery on load after Document
$(document).ready(function () {
  // navigation fixed on scroll
  // window.addEventListener("scroll", function () {
  //   var header = document.querySelector(".headers");
  //   header.classList.toggle("sticky", window.scrollY > 150);
  // });
  // list home features
  const homeFeature = [
    {
      icon: "people",
      title: "Uses Client First",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      icon: "checkmark-circle-sharp",
      title: "Two Free Revision Round",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      icon: "construct-sharp",
      title: "Template Customization",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      icon: "help-circle-sharp",
      title: "24/7 Support",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      icon: "alarm-sharp",
      title: "Quick Delivery",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      icon: "newspaper-sharp",
      title: "Hands-on approach",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
  ];

  //render feature item home-feature
  for (let i = 0; i < homeFeature.length; i++) {
    let html = `
    <div class="feature-item">
      <ion-icon class="feature-item__icon" name="${homeFeature[i].icon}"></ion-icon>
      <div class="feature-item__title">${homeFeature[i].title}</div>
      <div class="feature-item__desc">${homeFeature[i].desc}</div>
    </div>
  `;
    $(".feature-card").append(html);
  }
  // show go to top button if scroll > 350px
  let showGoToTop = 350;
  $(window).scroll(function () {
    if ($(this).scrollTop() > showGoToTop) {
      $(".gotoTop").fadeIn();
    } else {
      $(".gotoTop").fadeOut();
    }
  });
  // click go to top
  $(".gotoTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // //FAQ click slide down
  // $(".faq-content__main").click(function () {
  //   $(this).nextAll("ion-icon").toggleClass("active");
  //   $(this).find(".faq-content__massage").slideToggle();
  // });
  $(".faq-content__main")
    .not(".active")
    .click(function () {
      // $(this).filter(".active").find(".faq-content__massage").slideUp();
      $(".faq-content__massage").slideUp();
      $(this).find(".faq-content__massage").slideDown();
      $(this).addClass("active");
    });
});
