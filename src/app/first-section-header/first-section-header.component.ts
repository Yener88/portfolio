import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-section-header',
  templateUrl: './first-section-header.component.html',
  styleUrls: ['./first-section-header.component.scss']
})

export class FirstSectionHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Foto Rechts-Klick gesperrt!!
    let fotos = document.getElementsByTagName('img');
    for (var i = 0; i < fotos.length; i++) {
      (function (index) {
        fotos[index].addEventListener("contextmenu", (event) => {
          event.preventDefault();
          console.log("Right Click on picture: " + index + " blocked!!!");
        })
      })(i);
    }

    // Scroll funktion
    var navbar = document.getElementById("navbar");
    var lastScroll = 0;
    var navbarHeight = window.getComputedStyle(navbar, null).getPropertyValue("height");

    window.onscroll = function () {
      var currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll) {
        navbar.style.top = "-" + navbarHeight;
        navbar.style.boxShadow = ('none');
      } else {
        navbar.style.top = "0";
        navbar.style.boxShadow = ('0px 4px 4px rgba(0, 0, 0, 0.25)');
      }
      lastScroll = currentScroll;
    }
    document.body.addEventListener("click", function (event) {
      let target = event.target as HTMLElement;
      if (target.classList.contains("clickNavbarIgnore")) {
        event.stopPropagation();
        return;
      }
      navbar.style.top = "0";
      navbar.style.boxShadow = ('0px 4px 4px rgba(0, 0, 0, 0.25)');
    });

    // Scroll nach oben Button erscheint erst nach dem scrollen
    const scrollButton = document.getElementById("scroll-button");
    scrollButton.style.display = "none";
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 400) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    });
    scrollButton.addEventListener("click", () => {
      window.location.href = "#home";
    });
  }

  // Open Mobile Navbar
  // private isNavbarOpen = false;
  // mobileNavbar() {
  //   this.isNavbarOpen = !this.isNavbarOpen;
  //   if (this.isNavbarOpen) {
  //     this.openMobileNavbar();
  //   } else {
  //     this.closeMobileNavbar();
  //   }
  // }

  // openMobileNavbar() {
  //   document.getElementById('mobileNavbarContent').classList.add('slideNavbarOpen');
  //   document.getElementById('mobileNavbarContent').classList.remove('d-none');
  //   document.documentElement.style.setProperty('overflow-y', 'hidden');
  // }

  // closeMobileNavbar() {
  //   document.getElementById('mobileNavbarContent').classList.add('slideNavbarClose');
  //   document.getElementById('mobileNavbarContent').classList.add('d-none');
  //   document.documentElement.style.setProperty('overflow-y', 'auto');
  // }



  openAndCloseNavbar() {
    const navbarMenu = document.getElementById('mobileNavbarContent');
    if (navbarMenu) {
      if (navbarMenu.classList.contains('d-none')) {
        navbarMenu.classList.add('slideNavbarOpen');
        navbarMenu.classList.remove('d-none');
        const animationEnd = function () {
          navbarMenu.classList.remove('slideNavbarOpen');
          navbarMenu.removeEventListener('animationend', animationEnd);
        };
        navbarMenu.addEventListener('animationend', animationEnd);
      } else {
        navbarMenu.classList.add('slideNavbarClose');
        const animationEnd = function () {
          navbarMenu.classList.remove('slideNavbarClose');
          navbarMenu.classList.add('d-none');
          navbarMenu.removeEventListener('animationend', animationEnd);
        };
        navbarMenu.addEventListener('animationend', animationEnd);
      }
    }
  }

  openAndCloseLanguage() {
    const languageMenu = document.getElementById('languagebtn');
    if (languageMenu) {
      if (languageMenu.classList.contains('d-none')) {
        languageMenu.classList.add('slideLanguageOpen');
        languageMenu.classList.remove('d-none');

        const animationEnd = function () {
          languageMenu.classList.remove('slideLanguageOpen');
          languageMenu.removeEventListener('animationend', animationEnd);
        };
        languageMenu.addEventListener('animationend', animationEnd);

      } else {
        languageMenu.classList.add('slideLanguageClose');

        const animationEnd = function () {
          languageMenu.classList.remove('slideLanguageClose');
          languageMenu.classList.add('d-none');
          languageMenu.removeEventListener('animationend', animationEnd);
        };
        languageMenu.addEventListener('animationend', animationEnd);
      }
    }
  }



  // private isLanguageOpen = false;
  // openLanguage() {
  //   this.isLanguageOpen = !this.isLanguageOpen;
  //   if (this.isLanguageOpen) {
  //     this.openLanguageSection();
  //   } else {
  //     this.closeLanguageSection();
  //   }
  // }

  // openLanguageSection() {
  //   document.getElementById('languagebtn').classList.remove('d-none');
  // }

  // closeLanguageSection() {
  //   document.getElementById('languagebtn').classList.add('d-none');
  // }


  openContact() {
    this.openAndCloseNavbar();
  }

  openAbout() {
    this.openAndCloseNavbar();
  }

  openProjects() {
    this.openAndCloseNavbar();
  }

  openSkills() {
    this.openAndCloseNavbar();
  }



  getElById(id: any, text: any) {      // this.getElById('trans',``);
    document.getElementById(id).innerHTML = `${text}`;
  }

  // ''''''''''''''''TRANSLATE FUNCTION''''''''''''''''
  clickLanguageDE() {
    this.getElById('trans1', `Über mich`);
    this.getElById('trans2', `Portfolio`);
    this.getElById('trans3', `Skills`);
    this.getElById('trans4-1', `Ich bin`);
    this.getElById('trans4-2', `FRONTEND ENTWICKLER`);
    this.getElById('trans5', `Schreib mir!`);
    this.getElById('trans6', `Scroll runter`);
    this.getElById('trans7', `Über mich`);
    this.getElById('trans8', `Hallo, ich bin ein Frontend-Entwickler aus Köln, Deutschland. Nach der Schule habe ich eine Ausbildung im IT-Bereich absolviert und insgesamt etwa 8 Jahre Berufserfahrung gesammelt. Um meine Leidenschaft zum Beruf zu machen, habe ich im August 2022 den Intensivkurs an der Developer Academy absolviert.`);
    this.getElById('trans9', `Als ich noch in der Schule war, hatte ich meine ersten Erfahrungen gemacht und war bereits sehr an verschiedenen Arten von Software und Hardware von Elektronikgeräten interessiert.`);
    this.getElById('trans10', `Mit 15 Jahren programmierte ich meine erste Homepage, die wie ein soziales Medienprofil über mich aufgebaut war, basierend auf HTML/CSS.`);
    this.getElById('trans11', `Ich habe Erfahrung im Aufbau von Projekten mit verschiedenen Frontend-Technologien und Konzepten gesammelt.`);
    this.getElById('trans12', `In Kontakt treten`);
    this.getElById('trans13', `Diese Seite ist eine Beispiel meiner Arbeit! Scrollen Sie nach unten, um andere von mir entwickelte Projekte anzusehen.`);
    this.getElById('trans14', `Das Index der Pokemon, das auf API basierte Pokedex! Mit umfangreichen Details und erweiterten Funktionen wie in der Suche alle Pokemon zu finden, zu favorisieren und zu verwalten.`);

    this.getElById('trans16', `El Pollo Loco ist ein humorvolles Jump-and-Run-Spiel, das mit objektorientiertem JavaScript erstellt wurde und als Einführung in die Angular-Entwicklung dient.`);
    this.getElById('trans17', `Team Table ist ein Tool, mit dem Sie Ihre Arbeit organisieren und effizienter gestalten können, ähnlich einem Kanban-Board.`);
    this.getElById('trans18', `Das beliebte Kartenspiel, das in einem Online-Desktop-Format verfügbar ist und es mehreren Benutzern ermöglicht, gleichzeitig auf verschiedenen Geräten zu spielen.`);
    this.getElById('trans19', `Live-Test`);
    this.getElById('trans20', `Live-Test`);
    this.getElById('trans21', `Live-Test`);
    this.getElById('trans22', `Live-Test`);
    this.getElById('trans23', `Portfolio`);
    this.getElById('trans24', `Willst du ein Problem lösen?`);
    this.getElById('trans25', `Kontaktieren Sie mich über dieses Formular, ich bin an Ihren Ideen interessiert und möchte Ihnen mit meiner Arbeit zu Ihren Projekten beitragen.
    <br><br>
    Brauchen Sie einen Frontend-Entwickler? <a href="mailto:yener.bas@outlook.de" style="text-decoration: none; color: white; font-weight: bold; cursor: pointer;">Kontaktieren Sie mich!</a>`);
    document.getElementById('name').setAttribute('placeholder', 'Dein Namen');
    document.getElementById('message').setAttribute('placeholder', 'Deine E-Mail Adresse');
    document.getElementById('email').setAttribute('placeholder', 'Deine Nachricht');
    this.getElById('trans26', `Kontakt`);
    this.getElById('trans27', `Impressum`);
    this.getElById('trans28', `Senden :)`);
    this.getElById('trans29', `Yener Bas`);
    this.getElById('trans30', `Über mich`);
    this.getElById('trans31', `Skills`);
    this.getElById('trans32', `Portfolio`);
    this.getElById('trans33', `Kontakt`);
  }

  clickLanguageEN() {
    this.getElById('trans1', `About me`);
    this.getElById('trans2', `Portfolio`);
    this.getElById('trans3', `Skills`);
    this.getElById('trans4-1', `I am`);
    this.getElById('trans4-2', `FRONTEND DEVELOPER`);
    this.getElById('trans5', `Let's talk!`);
    this.getElById('trans6', `Scroll down`);
    this.getElById('trans7', `About me`);
    this.getElById('trans8', `Hi, I am a Frontend developer based in Cologne, Germany. After school, I completed an apprenticeship in IT and gained a total of around 8 years of professional experience. To turn my passion into a profession, I completed the intensive course at the Developer Academy in August 2022.`);
    this.getElById('trans9', `When I was at school, I made my first experience and was already very interested in software and hardware of different kinds of electronics.`);
    this.getElById('trans10', `At the age of 15, I programmed my first homepage which was built like a social media profile about myself based on HTML/CSS.`);
    this.getElById('trans11', `I have gained experience in building projects with various frontend technologies and concepts.`);
    this.getElById('trans12', `Get in touch`);
    this.getElById('trans13', `This page is a sample of my work! Scroll down to view other projects i have developed.`);
    this.getElById('trans14', `Index of Pokemon, API based Pokedex! With extensive details and advanced functions such as finding, favorite and managing all Pokemon in the search.`);
    this.getElById('trans16', `El Pollo Loco is a humorous jump-and-run game created using object-oriented JavaScript and serving as an introduction to Angular development.`);
    this.getElById('trans17', `Team Table is a tool used to organize and improve the efficiency of your work, similar
    to a Kanban Board.`);
    this.getElById('trans18', `The popular card game available in an online, desktop format, allowing multiple users to play on various devices simultaneously.`);
    this.getElById('trans19', `Live test`);
    this.getElById('trans20', `Live test`);
    this.getElById('trans21', `Live test`);
    this.getElById('trans22', `Live test`);
    this.getElById('trans23', `Portfolio`);
    this.getElById('trans24', `Got a problem to solve?`);
    this.getElById('trans25', `Contact me through this form, I am interested in hearing you, knowing your ideas and contributing to your projects with my work.
    <br><br>
    Need a Frontend developer?<a href="mailto:yener.bas@outlook.de" style="text-decoration: none; color: white; font-weight: bold; cursor: pointer;">Contact me!</a>`);
    document.getElementById('name').setAttribute('placeholder', 'Your name');
    document.getElementById('message').setAttribute('placeholder', 'Your E-mail address');
    document.getElementById('email').setAttribute('placeholder', 'Your message');
    this.getElById('trans26', `Contact`);
    this.getElById('trans27', `Imprint`);
    this.getElById('trans28', `Send :)`);
    this.getElById('trans29', `Yener Bas`);
    this.getElById('trans30', `About me`);
    this.getElById('trans31', `Skills`);
    this.getElById('trans32', `Portfolio`);
    this.getElById('trans33', `Contact`);
  }

  clickLanguageTR() {
    this.getElById('trans1', `Hakkimda`);
    this.getElById('trans2', `Portföy`);
    this.getElById('trans3', `Beceriler`);
    this.getElById('trans4-1', `ben`);
    this.getElById('trans4-2', `FRONTEND DEVELOPER`);
    this.getElById('trans5', `Konuşalım!`);
    this.getElById('trans6', `Aşağı kaydır`);
    this.getElById('trans7', `Hakkımda`);
    this.getElById('trans8', `Merhaba, Köln, Almanya'da yerleşik bir Frontend geliştiriciyim. Okuldan sonra, IT alanında bir eğitim aldım ve toplamda yaklaşık 8 yıl profesyonel deneyim kazandım. Tutkumu meslek haline getirmek için, Ağustos 2022'de Developer Academy'de yoğun bir kursu tamamladım.`);
    this.getElById('trans9', `Okul sırasında, ilk deneyimlerimi yaptım ve farklı türlerdeki elektronik cihazların yazılımı ve donanımına çok ilgi duyuyordum.`);
    this.getElById('trans10', `15 yaşında, HTML/CSS temelinde kendim hakkında bir sosyal medya profili gibi inşa edilmiş ilk web sayfamı programladım.`);
    this.getElById('trans11', `Çeşitli frontend teknolojileri ve kavramları ile projelerin inşa etmekte deneyim kazandım.`);
    this.getElById('trans12', `İletişim kurmak`);
    this.getElById('trans13', `Bu sayfa işlerimin bir örneğidir! Diğer geliştirdiğim projeleri görmek için aşağı kaydırın.`);
    this.getElById('trans14', `Pokemon Endeksi, API tabanlı Pokedex! Aramada tüm Pokemon'u bulma, favorilere ekleme ve yönetme gibi kapsamlı ayrıntılar ve gelişmiş işlevlerle.`);
    this.getElById('trans16', `El Pollo Loco, nesne yönelimli JavaScript kullanılarak oluşturulan ve Angular geliştirmeye giriş işlevi gören komik bir zıpla ve koş oyunudur.`);
    this.getElById('trans17', `Team Table, işinizi organize etmeniz ve verimliliğinizi arttırmak için kullanabileceğiniz bir araçtır, Kanban Board benzeri.`);
    this.getElById('trans18', `Çevrimiçi, masaüstü biçiminde sunulan ve birden çok kullanıcının aynı anda çeşitli cihazlarda oynamasına olanak tanıyan popüler kart oyunu.`);
    this.getElById('trans19', `Canlı test`);
    this.getElById('trans20', `Canlı test`);
    this.getElById('trans21', `Canlı test`);
    this.getElById('trans22', `Canlı test`);
    this.getElById('trans23', `Portföy`);
    this.getElById('trans24', `Çözülecek bir sorunun var mı?`);
    this.getElById('trans25', `Bu form aracılığıyla bana ulaşın, fikirlerinizi duymak, bilmek ve projelerinize çalışmam ile katkıda bulunmak ilgileniyorum.
    <br><br>
    Bir frontend geliştiricisi mi lazım? <a href="mailto:yener.bas@outlook.de" style="text-decoration: none; color: white; font-weight: bold; cursor: pointer;">Benimle iletişime geçin!</a>`);
    document.getElementById('name').setAttribute('placeholder', 'Adınız');
    document.getElementById('message').setAttribute('placeholder', 'E-posta adresiniz');
    document.getElementById('email').setAttribute('placeholder', 'buraya Mesajınızı yazın');
    this.getElById('trans26', `İletişim`);
    this.getElById('trans27', `Künye`);
    this.getElById('trans28', `Gönder :)`);
    this.getElById('trans29', `Yener Baş`);
    this.getElById('trans30', `Hakkimda`);
    this.getElById('trans31', `Beceriler`);
    this.getElById('trans32', `Portföy`);
    this.getElById('trans33', `İletişim`);
  }
}
