const urlParams = new URLSearchParams(window.location.search);
const uid = urlParams.get("uid");

let templateAndSectionData;
const data = { uid: uid };

const getOfferTemplate = () => {
  fetch("http://localhost:5001/offers/get-offer-and-template-data?uid=" + uid, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      templateAndSectionData = data;
      injectSectionsIntoBody();
    });
};

getOfferTemplate();

function injectSectionsIntoBody() {
  if (templateAndSectionData) {
    document.write(templateAndSectionData.template[0].sectionContent.content);
    document.addEventListener("DOMContentLoaded", () => {
      const templateSectionContent = templateAndSectionData.template;
      document.documentElement.setAttribute(
        "lang",
        templateSectionContent[0].templateContent.lang
      );
      var mainTag = document.createElement("main");
      mainTag.className = "landing-main";
      const sectionOne = templateSectionContent[1].sectionContent;
      const sectionTwo = templateSectionContent[2].sectionContent;
      const sectionThree = templateSectionContent[3].sectionContent;
      const sectionFour = templateSectionContent[4].sectionContent;
      const sectionFive = templateSectionContent[5].sectionContent;
      const sectionSix = templateSectionContent[6].sectionContent;
      const sectionSeven = templateSectionContent[7].sectionContent;
      const sectionEight = templateSectionContent[8].sectionContent;
      const sectionNine = templateSectionContent[9].sectionContent;
      const sectionTen = templateSectionContent[10].sectionContent;
      var bodyEle = document.getElementsByTagName("body")[0];
      var headEle = document.getElementsByTagName("head")[0];
      headEle.insertAdjacentHTML("beforeend", sectionTwo.content);
      bodyEle.appendChild(mainTag);
      mainTag.insertAdjacentHTML("beforeend", sectionOne.content);
      mainTag.insertAdjacentHTML("beforeend", sectionThree.content);
      mainTag.insertAdjacentHTML("beforeend", sectionFour.content);
      mainTag.insertAdjacentHTML("beforeend", sectionFive.content);
      mainTag.insertAdjacentHTML("beforeend", sectionSix.content);
      mainTag.insertAdjacentHTML("beforeend", sectionSeven.content);
      mainTag.insertAdjacentHTML("beforeend", sectionEight.content);
      mainTag.insertAdjacentHTML("beforeend", sectionNine.content);
      //bodyEle.insertAdjacentHTML("beforeend", sectionTen.content);
      const swiperScript = document
        .createRange()
        .createContextualFragment(sectionTen.content);
      document.body.append(swiperScript);

      const allPTags = document.getElementsByTagName("p");
      const bTag = allPTags.item(0).getElementsByTagName("b")[0];
      bTag.innerHTML = templateAndSectionData.data[2].value;
      const something = document.querySelectorAll("[data-id]");

      const patientName = document.querySelector("[data-id='patient-name']");
      patientName.innerHTML = templateAndSectionData.data[0].value;

      const grafts = document.querySelector("[data-id='grafts']");
      grafts.innerHTML = templateAndSectionData.data[3].value;

      const aufenthaltsdauer = document.querySelector(
        "[data-id='aufenthaltsdauer']"
      );
      aufenthaltsdauer.innerHTML = templateAndSectionData.data[6].value;

      const buckethatheadbandandneckpillow = document.querySelector(
        "[data-id='bucket-hat-headband-and-neck-pillow']"
      );
      buckethatheadbandandneckpillow.innerHTML =
        templateAndSectionData.data[11].value;

      const zimmertyp = document.querySelector("[data-id='zimmertyp']");
      zimmertyp.innerHTML = templateAndSectionData.data[7].value;

      const freeprptreatmentonsite = document.querySelector(
        "[data-id='free-prp-treatment-on-site']"
      );
      freeprptreatmentonsite.innerHTML = templateAndSectionData.data[13].value;

      const hoteltyp = document.querySelector("[data-id='hoteltyp']");
      hoteltyp.innerHTML = templateAndSectionData.data[8].value;
    });
    document.close();
  }
}