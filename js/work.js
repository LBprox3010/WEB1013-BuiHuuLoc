$(document).ready(function () {
  // navigation fixed on scroll
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".headers");
    header.classList.toggle("sticky", window.scrollY > 150);
  });
  //render item work
  const filterItem = [
    {
      class: "UI-Design",
      img: "./img/work-1.png",
      title: "Template",
      desc: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      href: "#",
    },
    {
      class: "UI-Design",
      img: "./img/work-1.png",
      title: "Template",
      desc: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      href: "#",
    },
    {
      class: "Webflow-Design",
      img: "./img/work-1.png",
      title: "Template",
      desc: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      href: "#",
    },
    {
      class: "Webflow-Design",
      img: "./img/work-1.png",
      title: "Template",
      desc: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      href: "#",
    },
    {
      class: "Webflow-Design",
      img: "./img/work-1.png",
      title: "Template",
      desc: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      href: "#",
    },
    {
      class: "Webflow-Design",
      img: "./img/work-1.png",
      title: "Template",
      desc: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      href: "#",
    },
    {
      class: "Figma-Design",
      img: "./img/work-1.png",
      title: "Template",
      desc: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      href: "#",
    },
    {
      class: "Figma-Design",
      img: "./img/work-1.png",
      title: "Template",
      desc: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      href: "#",
    },
    {
      class: "Figma-Design",
      img: "./img/work-1.png",
      title: "Template",
      desc: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      href: "#",
    },
    {
      class: "Figma-Design",
      img: "./img/work-1.png",
      title: "Template",
      desc: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
      href: "#",
    },
  ];
  for (let i = 0; i < filterItem.length; i++) {
    const filter = filterItem[i].class;
    const src = filterItem[i].img;
    const title = filterItem[i].title;
    const desc = filterItem[i].desc;
    const href = filterItem[i].href;
    let Html = `
        <div class="work-item ${filter}">
            <div class="work-item__img"><img src="${src}" alt=""/></div>
            <h3 class="section-title__secondary work-item__title">${title}</h3>
            <p class="section-desc work-item__desc">${desc}</p><a class="view-more work-item__view" href="${href}">View Portfolio
                <ion-icon name="arrow-forward-outline"></ion-icon></a>
        </div>
      `;
    $(".list-content").append(Html);
  }
  $(".filter-item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".filter-item").click(function () {
    let value = $(this).attr("data-filter");
    if (value == "All") {
      $(".work-item").show("1000");
    } else {
      $(".work-item")
        .not("." + value)
        .hide("1000");
      $(".work-item")
        .filter("." + value)
        .show("1000");
    }
  });
});
