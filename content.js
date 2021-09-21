// var all_nav_items = $(".media-body ").map(function() {
//   return this;
// }).get();
//
// jQuery.each(all_nav_items, function(i, val) {
//   if (val.innerHTML === 'Komm_Fak_Iuk') {
//     val.innerHTML = 'KPL Fakultät Iuk'
//   } else if (val.innerHTML === 'ID7_Jg-2020-Winter') {
//     val.innerHTML = 'ID7 WS 2020'
//   } else if (val.innerHTML === 'ID_Studierende') {
//     val.innerHTML = 'ID Studiengang'
//   } else if (val.innerHTML === 'ID7-Freischwimmer') {
//     val.innerHTML = 'ID7 Freischwimmer'
//   } else if (val.innerHTML === 'IDB-WS_HCI') {
//     val.innerHTML = 'HCI'
//   } else if (val.innerHTML === 'ThemenID_WS2021') {
//     val.innerHTML = 'Thema. Grundlagen ID'
//   } else if (val.innerHTML === 'ÜbungSS2021') {
//     val.innerHTML = 'Übung Psych. & Design'
//   } else if (val.innerHTML === 'KommWS_WS2021') {
//     val.innerHTML = 'Kommun. Workshop'
//   } else if (val.innerHTML === 'InfoPsych_WS2021') {
//     val.innerHTML = 'Infopsychologie'
//   } else if (val.innerHTML === 'ID7_Schreiben_2') {
//     val.innerHTML = 'Profess. Schreiben'
//   } else if (val.innerHTML === 'ID7_Darstellungstechnik_ws20_21') {
//     val.innerHTML = 'DT Digital'
//   } else if (val.innerHTML === 'ID7 MMD') {
//     val.innerHTML = 'Multimedia Didaktik'
//   } else if (val.innerHTML === ' ID7_WS20-DT_haendisch') {
//     val.innerHTML = 'DT Händisch'
//   } else if (val.innerHTML === 'DL1_WS2021') {
//     val.innerHTML = 'DataLiteracy 1'
//   } else if (val.innerHTML === 'Neuen Kurs beantragen (Lehrende)') {
//     val.innerHTML = 'Kurs beantragen (Lehrende)'
//   } else if (val.innerHTML === '334009_Bildgestaltung_SS21') {
//     val.innerHTML = 'Bildgestaltung'
//   } else if (val.innerHTML === '334012a_Interfacedesign_SS21') {
//     val.innerHTML = 'Interfacedesign'
//   } else if (val.innerHTML === 'ID7_burmester-Interact') {
//     val.innerHTML = 'Interaktionsdesign'
//   } else if (val.innerHTML.includes('334011a')) {
//     val.innerHTML = 'Typografie & Layout'
//   } else if (val.innerHTML === 'ID7_WebdesignContent') {
//     val.innerHTML = 'Webdesign Content'
//   } else if (val.innerHTML === 'ID7_TextG_2') {
//     val.innerHTML = 'Textgestaltung'
//   } else if (val.innerHTML === 'Fak3_Portfolio_neu') {
//     val.innerHTML = 'Schlüsselkompetenzen'
//   } else if (val.innerHTML === 'DL2_S221') {
//     val.innerHTML = 'DataLiteracy 2'
//   } else if (val.innerHTML === 'WPM_Fak3') {
//     val.innerHTML = 'Wahlangebote'
//   } else if (val.innerHTML === 'ISE') {
//     val.innerHTML = 'Intercultural Skills'
//   }
// });

document.body.innerHTML = document.body.innerHTML.replace(/Komm_Fak_Iuk/g, 'KPL Fakultät Iuk');
document.body.innerHTML = document.body.innerHTML.replace(/ID7_Jg-2020-Winter/g, 'ID7 WS 2020');
document.body.innerHTML = document.body.innerHTML.replace(/ID_Studierende/g, 'ID Studiengang');
document.body.innerHTML = document.body.innerHTML.replace(/ID7-Freischwimmer/g, 'ID7 Freischwimmer');
document.body.innerHTML = document.body.innerHTML.replace(/IDB-WS_HCI/g, 'HCI');
document.body.innerHTML = document.body.innerHTML.replace(/ThemenID_WS2021/g, 'Thema. Grundlagen ID');
document.body.innerHTML = document.body.innerHTML.replace(/ÜbungSS2021/g, 'Übung Psych. & Design');
document.body.innerHTML = document.body.innerHTML.replace(/KommWS_WS2021/g, 'Kommun. Workshop');
document.body.innerHTML = document.body.innerHTML.replace(/InfoPsych_WS2021/g, 'Infopsychologie');
document.body.innerHTML = document.body.innerHTML.replace(/ID7_Schreiben_2/g, 'Profess. Schreiben');
document.body.innerHTML = document.body.innerHTML.replace(/ID7_Darstellungstechnik_ws20_21/g, 'DT Digital');
document.body.innerHTML = document.body.innerHTML.replace(/ID7 MMD/g, 'Multimedia Didaktik');
document.body.innerHTML = document.body.innerHTML.replace(/ ID7_WS20-DT_haendisch/g, 'DT Händisch');
document.body.innerHTML = document.body.innerHTML.replace(/DL1_WS2021/g, 'DataLiteracy 1');
document.body.innerHTML = document.body.innerHTML.replace(/334009_Bildgestaltung_SS21/g, 'Bildgestaltung');
document.body.innerHTML = document.body.innerHTML.replace(/334012a_Interfacedesign_SS21/g, 'Interfacedesign');
document.body.innerHTML = document.body.innerHTML.replace(/ID7_burmester-Interact/g, 'Interaktionsdesign');
document.body.innerHTML = document.body.innerHTML.replace(/334011a Typografie&Layout SS21/g, 'Typografie & Layout');
document.body.innerHTML = document.body.innerHTML.replace(/ID7_WebdesignContent/g, 'Webdesign Content');
document.body.innerHTML = document.body.innerHTML.replace(/ID7_TextG_2/g, 'Textgestaltung');
document.body.innerHTML = document.body.innerHTML.replace(/Fak3_Portfolio_neu/g, 'Schlüsselkompetenzen');
document.body.innerHTML = document.body.innerHTML.replace(/DL2_S221/g, 'DataLiteracy 2');
document.body.innerHTML = document.body.innerHTML.replace(/WPM_Fak3/g, 'Wahlangebote Fak. 3');
document.body.innerHTML = document.body.innerHTML.replace(/ISE/g, 'Intercultural Skills');

document.body.innerHTML = document.body.innerHTML.replace(/ID7_334015-Kommunikationsdesign-WS21_22/g, 'Kommunikationsdesign');
document.body.innerHTML = document.body.innerHTML.replace(/ID7_WebdesignUI/g, 'Webdesign (UI)');
document.body.innerHTML = document.body.innerHTML.replace(/Projektmanagement-Abt-WiSe21/g, 'Projektmanagement');



$(".navbar")[0].style.cssText = 'background-color: #ffffffaa !important;';
$('i.fa.fa-bars').replaceWith('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Menu Hamburger</title><desc>A line styled icon from Orion Icon Library.</desc><path data-name="layer2"fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="4" d="M2 14h60M2 32h36"stroke-linejoin="round" stroke-linecap="round"></path><path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10"stroke-width="4" d="M2 50h60" stroke-linejoin="round" stroke-linecap="round"></path></svg>');
$(".navbar")[0].style.cssText = 'background-color: #ffffffaa !important;';

$("button.nav-link").hover(function() {
  $(this)[0].style.cssText = 'background-color: transparent !important;';
});

$(".searchform button.btn").addClass("searchbutton");
$(".coursesearchbox button.btn").addClass("searchbutton");


// ---------------------------------------------------- Change the Icons -------------------------------------------------------------------------------

// page is similar to material
var all_annoucement_icons = $("img[src*='forum']").map(function() {
  return this;
}).get();
var all_link_icons = $("img[src*='url']").map(function() {
  return this;
}).get();
var all_pdf_icons = $("img[src*='pdf-24']").map(function() {
  return this;
}).get();
var all_video_icons = $("img[src*='mpeg-24']").map(function() {
  return this;
}).get();
var all_audio_icons = $("img[src*='mp3-24']").map(function() {
  return this;
}).get();
var all_aufgabe_icons = $("img[src*='assign']").map(function() {
  return this;
}).get();
var all_page_icons = $("img[src*='page']").map(function() {
  return this;
}).get();
var all_settings_page_icons = $("img[src*='sourcecode-24']").map(function() {
  return this;
}).get();
var all_glossary_icons = $("img[src*='glossary']").map(function() {
  return this;
}).get();
// var all_forum_icons = $("img[src*='https://e-learning.hdm-stuttgart.de/moodle/theme/image.php/boost/forum/1605893337/icon']").map(function() {return this;}).get();
var all_umfrage_icons = $("img[src*='questionnaire']").map(function() {
  return this;
}).get();
var all_image_icons = $("img[src*='jpeg-24']").map(function() {
  return this;
}).get();
var all_zip_icons = $("img[src*='archive-24']").map(function() {
  return this;
}).get();
var all_folder_icons = $("img[src*='folder']").map(function() {
  return this;
}).get();
var all_settings_file_icons = $("img[src*='png-24']").map(function() {
  return this;
}).get();
var all_unknown_file_icons = $("img[src*='unknown-24']").map(function() {
  return this;
}).get();
var all_word_file_icons = $("img[src*='document-24']").map(function() {
  return this;
}).get();
var all_illustrator_file_icons = $("img[src*='eps-24']").map(function() {
  return this;
}).get();


jQuery.each(all_annoucement_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/annoucement.svg");
});
jQuery.each(all_link_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/link.svg");
});
jQuery.each(all_pdf_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/pdf.svg");
});
jQuery.each(all_video_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/video.svg");
});
jQuery.each(all_audio_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/mp3.svg");
});
jQuery.each(all_aufgabe_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/aufgabe.svg");
});

jQuery.each(all_settings_page_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/settings.svg");
});
jQuery.each(all_glossary_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/glossary.svg");
});
jQuery.each(all_umfrage_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/umfrage.svg");
});
jQuery.each(all_image_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/image.svg");
});
jQuery.each(all_zip_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/zip.svg");
});
jQuery.each(all_folder_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/folder.svg");
});
jQuery.each(all_settings_file_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/settings.svg");
});
jQuery.each(all_unknown_file_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/unknown_file.svg");
});
jQuery.each(all_word_file_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/word.svg");
});
jQuery.each(all_illustrator_file_icons, function(i, val) {
  $(val).attr("src", "https://samuelwoelfl.de/img/moodleicons/ai.svg");
});



var all_activities = $(".activityinstance").map(function() {
  return this;
}).get();

jQuery.each(all_activities, function(i, val) {
  var href = $(val).children(".aalink").eq(0).attr('href');
  if (href.includes("https://e-learning.hdm-stuttgart.de/moodle/mod/assign")) {
    $(this).addClass("abgabe");
  } else if (href.includes("https://e-learning.hdm-stuttgart.de/moodle/mod/url")) {
    $(this).addClass("link");
  }
});